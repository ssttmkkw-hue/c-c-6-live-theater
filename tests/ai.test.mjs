// AI parser helpers, tested offline (no network, no key).
import { ndjson, firstJsonObject, interpretDirective, aiParser } from '../src/parsers/ai.js';
let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.error('FAIL', m); } else console.log('ok  ', m); };

// NDJSON split across arbitrary chunk boundaries, with fences and a malformed line
async function* chunks(parts) { for (const p of parts) { yield p; await 0; } }
const text = '```\n{"kind":"scene","set":"shop"}\n{"kind":"actor","name":"A"}\nnot json\n{"kind":"beat","beat":{"speaker":"A","line":"Hi"}}';
const parts = []; for (let i = 0; i < text.length; i += 7) parts.push(text.slice(i, i + 7));
const out = []; for await (const o of ndjson(chunks(parts))) out.push(o);
ok(out.length === 3 && out[0].kind === 'scene' && out[2].beat.line === 'Hi', 'ndjson: chunked stream, fences + junk skipped, tail flushed');

// streaming: the first object is yielded before the stream ends
let release; const gate = new Promise(r => { release = r; });
async function* slow() { yield '{"kind":"actor","name":"A"}\n'; await gate; yield '{"kind":"end"}\n'; }
const it = ndjson(slow());
const first = await it.next();
ok(first.value?.kind === 'actor', 'ndjson: yields the first line before the rest arrives');
release(); await it.next();

ok(firstJsonObject('Sure! ```json\n{"ops":[{"type":"hug"}],"note":"a } in \\"str\\""}\n```')?.ops?.[0]?.type === 'hug', 'firstJsonObject: fenced reply with braces in strings');
ok(firstJsonObject('no json here') === null, 'firstJsonObject: null without an object');

ok((await interpretDirective('make her hesitate')).length === 0, 'interpretDirective: no key -> [] without network');
ok(aiParser.available() === false, 'aiParser unavailable without a key');

process.exit(fail ? 1 : 0);
