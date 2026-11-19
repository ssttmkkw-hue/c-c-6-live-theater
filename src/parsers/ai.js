// Pluggable STREAMING AI parser.
//
// A parser is any object { id, available(), parse(text, ctx) } where parse() returns an
// async iterable of stream events:
//     {kind:'actor', name, look?, voice?}   declare a character (optional; auto-cast if omitted)
//     {kind:'beat',  beat}                  one performable beat (see docs/FORMAT.md)
//     {kind:'end'}                          optional; the director also ends when the iterable ends
//
// How a streaming LLM provider emits beats incrementally: ask the model to answer in NDJSON —
// ONE JSON object per line, e.g.  {"kind":"beat","beat":{"speaker":"Hamlet","line":"..."}}.
// Read the HTTP response body as a stream, append decoded chunks to a buffer, and every time a
// full "\n" appears, JSON.parse that line and `yield` it. The director starts performing the very
// first yielded beat while the model is still generating the rest. (See ndjson() below.)
//
// SECURITY: the API key lives only in localStorage (see main.js). It is passed in via ctx.apiKey,
// is never logged, never put in URLs, and never written to source/git. This file makes no network
// call unless a key is present AND the user starts a show with the AI parser selected.

const store = () => globalThis.localStorage; // absent in Node tests
export const KEY_STORAGE = 'theater.aiKey';
export const MODEL_STORAGE = 'theater.aiModel';

/** Turn an async iterable of text chunks into an async generator of parsed NDJSON objects. */
export async function* ndjson(chunks) {
  let buf = '';
  for await (const chunk of chunks) {
    buf += chunk;
    let i;
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i).trim();
      buf = buf.slice(i + 1);
      if (!line || line.startsWith('```')) continue;
      try { yield JSON.parse(line); } catch { /* ignore a malformed line, keep streaming */ }
    }
  }
  const tail = buf.trim();
  if (tail) { try { yield JSON.parse(tail); } catch { /* ignore */ } }
}

const SYSTEM = `You are a stage director. Convert the user's script or idea into a performance.
Output NDJSON only: one JSON object per line, no prose, no code fences.
First line: {"kind":"scene","set":"moon|ramparts|shop|alley|hall"} — the best set (moon = bare moonlit stage, ramparts = castle walls at night,
shop = late-night convenience store, alley = rainy street, hall = royal throne hall).
Next lines: {"kind":"actor","name":"NAME"} for each character.
Then one line per beat: {"kind":"beat","beat":{"speaker":"NAME or null","line":"spoken text","direction":"optional stage direction",
"emotion":"neutral|angry|sad|proud|contemplative|gasp|happy|afraid|tender","gesture":"none|talk|point|bow|kneel|stand|gasp|angry|sad|proud|think|hug|wave|shrug|laugh",
"move":"stay|center|left|right|upstage|downstage|exit|enter|toward:NAME|away:NAME","lookAt":"NAME|audience","intensity":0.0-1.0,"lang":"zh-CN|en-US","ending":false}}
Emit the FIRST beat as quickly as possible. Keep lines short (under 25 words). 8-16 beats. Mark the last 2 beats "ending":true.`;

const DIRECT_SYSTEM = `You translate a live stage direction, typed by an audience member during an improvised play, into JSON operations.
Answer with ONE JSON object and nothing else: {"ops":[...]} with at most 3 ops. Allowed ops:
{"type":"mood","emotion":"angry|tender|sad|happy|afraid|proud"}  {"type":"rate","mul":0.6-1.6}
{"type":"audience"} {"type":"hug"} {"type":"ending"} {"type":"reset"}
{"type":"addchar","name":"NAME"}  {"type":"line","speaker":"NAME","text":"a short spoken line in the play's language"}
Use only characters from the cast list for "line" unless the direction introduces a new one. If nothing fits, answer {"ops":[]}.`;

function headers(apiKey) {
  return {
    'content-type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
    'anthropic-dangerous-direct-browser-access': 'true',
  };
}
const modelName = () => store()?.getItem(MODEL_STORAGE) || 'claude-haiku-5-5';

/** Extract the first {...} JSON object from a model reply (tolerates code fences / stray prose). */
export function firstJsonObject(text) {
  const i = text.indexOf('{'); if (i < 0) return null;
  let depth = 0, inStr = false, esc = false;
  for (let j = i; j < text.length; j++) {
    const c = text[j];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') inStr = false; continue; }
    if (c === '"') inStr = true;
    else if (c === '{') depth++;
    else if (c === '}' && --depth === 0) { try { return JSON.parse(text.slice(i, j + 1)); } catch { return null; } }
  }
  return null;
}

/**
 * Interpret free-form live direction ("make her hesitate before answering") with the model.
 * Returns raw ops (validate them with normalizeOps() from directives.js). Never throws: [] on any failure.
 */
export async function interpretDirective(text, { cast = [], lang = 'en', signal } = {}) {
  const apiKey = store()?.getItem(KEY_STORAGE);
  if (!apiKey) return [];
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', signal, headers: headers(apiKey),
      body: JSON.stringify({ model: modelName(), max_tokens: 300, system: DIRECT_SYSTEM,
        messages: [{ role: 'user', content: `Cast: ${cast.join(', ') || '(none)'}\nPlay language: ${lang}\nDirection: ${text}` }] }),
    });
    if (!res.ok) return [];
    const data = await res.json();
    const reply = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    const obj = firstJsonObject(reply);
    return Array.isArray(obj?.ops) ? obj.ops : [];
  } catch { return []; }
}

async function* sseText(res) {
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    let i;
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i).trim();
      buf = buf.slice(i + 1);
      if (!line.startsWith('data:')) continue;
      try {
        const ev = JSON.parse(line.slice(5));
        if (ev.type === 'content_block_delta' && ev.delta?.text) yield ev.delta.text;
      } catch { /* keep going */ }
    }
  }
}

export const aiParser = {
  id: 'ai',
  available: () => !!store()?.getItem(KEY_STORAGE),
  async *parse(text, ctx = {}) {
    const apiKey = ctx.apiKey || store()?.getItem(KEY_STORAGE);
    if (!apiKey) throw new Error('no-key');
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal: ctx.signal,
      headers: headers(apiKey),
      body: JSON.stringify({ model: modelName(), max_tokens: 2000, stream: true, system: SYSTEM, messages: [{ role: 'user', content: text }] }),
    });
    if (!res.ok) throw new Error('ai-http-' + res.status); // never include headers/body: they may echo secrets
    yield* ndjson(sseText(res));
  },
};
