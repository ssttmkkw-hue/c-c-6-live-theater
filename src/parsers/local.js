// Local rule-based parser. No network, no key. Async generator of stream events:
//   {kind:'actor', name, look?, voice?}  {kind:'beat', beat}  {kind:'end'}
// Handles: play/screenplay scripts, free-form one-line ideas, and exported JSON.
import { castFor, langOf, isCJK } from '../cast.js';
import {
  emotionFromHint, inferEmotion, inferGesture, inferIntensity, parseDirection, splitSentences,
} from './infer.js';
import { GENRES, ALT_ENDINGS } from './templates.js';

const sleep = ms => new Promise(r => setTimeout(r, ms));
const tidyName = n => {
  const s = n.trim().replace(/^[*_]+|[*_]+$/g, '');
  return /^[A-Z][A-Z'’\- ]+$/.test(s) && s.length > 1 ? s.charAt(0) + s.slice(1).toLowerCase() : s;
};

// ---------- script classification (sync, fast) ----------
const DIR_RE = /^\s*[[(（【]\s*(.+?)\s*[\])）】]\s*$/;
const NAMED_RE = /^\s*([^\s:：.,!?;'"“”()（）[\]【】][^:：.,!?;()（）[\]【】]{0,22}?)\s*[:：]\s*(.*)$/;
const PLAY_RE = /^\s*([A-Z][A-Z'’\- ]{1,24})\.\s+(.*)$/;
const CAPS_RE = /^\s*([A-Z][A-Z'’\-. ]{1,24})\s*$/;

export function classifyScript(text) {
  const lines = text.split(/\r?\n/);
  const items = [];
  let cur = null;
  const flush = () => { if (cur && cur.text.trim()) items.push(cur); cur = null; };
  let said = 0;
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();
    if (!line) { flush(); continue; }
    let m;
    if ((m = DIR_RE.exec(line)) || (m = /^\*(.+)\*$/.exec(line)) || (m = /^(Enter|Exit|Exeunt|上场|下场)\b\s*(.*)$/i.exec(line))) {
      flush();
      items.push({ type: 'dir', text: m[0] === line && m.length === 2 ? m[1] : (m[1] && !/^(Enter|Exit|Exeunt)/i.test(m[1]) ? m[1] : line) });
      continue;
    }
    if ((m = NAMED_RE.exec(line)) && !/^\d/.test(m[1]) && !/^https?$/i.test(m[1])) {
      flush(); cur = { type: 'say', name: tidyName(m[1]), text: m[2] }; said++; continue;
    }
    if ((m = PLAY_RE.exec(line))) { flush(); cur = { type: 'say', name: tidyName(m[1]), text: m[2] }; said++; continue; }
    if (CAPS_RE.test(line) && !cur && lines[i + 1] && lines[i + 1].trim()) {
      cur = { type: 'say', name: tidyName(line), text: '' }; said++; continue;
    }
    if (cur) cur.text += ' ' + line;
    else items.push({ type: 'dir', text: line }); // narration
  }
  flush();
  return { items, said };
}

// ---------- idea -> scene ----------
const STOP = /\b(quarrel(s|ing)?|argue[sd]?|arguing|fight(s|ing)?|meet(s|ing)?|confronts?|kiss(es)?|love[sd]?|haunts?)\b|吵架|争吵|打架|对峙|相遇|拌嘴|表白/gi;
const SPLIT_EN = /\b(?:meets?|meeting|confronts?|and|vs\.?|versus|argues? with|quarrels? with|fights?|loves?|kisses|haunts?|with)\b/i;
const SPLIT_ZH = /遇见|遇到|碰到|对峙|爱上|和|与|跟|对|吵架/;
function cleanName(s, zh) {
  let n = s.replace(STOP, ' ').trim().replace(/^(the|a|an|one)\s+/i, '').replace(/^(一个|一位|那个|一名)/, '')
    .replace(/[,.!?，。！？"“”]/g, ' ').trim();
  if (!zh) n = n.split(/\s+/).slice(0, 2).join(' ').replace(/\b\w/g, c => c.toUpperCase());
  else n = n.replace(/\s+/g, '').slice(0, 6);
  return n;
}
function extractNames(idea, zh) {
  const parts = idea.split(zh ? SPLIT_ZH : SPLIT_EN);
  const a = cleanName(parts[0] || '', zh);
  const rest = parts.slice(1).join(' ');
  const b = cleanName(rest, zh);
  return [a, b];
}
function pickGenre(idea) {
  if (/hamlet|哈姆雷特/i.test(idea)) return 'hamlet';
  if (/ghost|spirit|haunt|phantom|鬼|幽灵|亡魂/i.test(idea)) return 'ghost';
  if (/detective|thief|murder|steal|侦探|小偷|谋杀|盗/i.test(idea)) return 'detective';
  if (/quarrel|argu|fight|angry|row\b|吵|争|打架|怒/i.test(idea)) return 'quarrel';
  if (/love|kiss|date|romance|propos|爱|约会|表白|情/i.test(idea)) return 'love';
  return 'comedy';
}

export function ideaToScene(idea) {
  const zh = isCJK(idea);
  const lang = zh ? 'zh' : 'en';
  const genre = pickGenre(idea);
  const tpl = GENRES[genre][lang];
  let [a, b] = extractNames(idea, zh);
  if (genre === 'hamlet') { a = tpl.names[0]; b = /ghost|鬼|幽灵/i.test(idea) ? tpl.names[1] : (b && !/hamlet|哈姆雷特/i.test(b) ? b : tpl.names[1]); if (/ghost|鬼|幽灵/i.test(idea)) b = tpl.names[1]; }
  else if (genre === 'ghost') {
    const ghostWord = /ghost|spirit|phantom|鬼|幽灵|亡魂/i;
    if (a && ghostWord.test(a)) { const t = a; a = b; b = t; }
    b = tpl.names[1];
    if (!a || ghostWord.test(a)) a = tpl.names[0];
  } else {
    if (!a) a = tpl.names[0];
    if (!b) b = tpl.names[1];
    if (a === b) b = tpl.names[1];
  }
  const sub = s => s.replace(/\{A\}/g, a).replace(/\{B\}/g, b);
  const conv = (row, ending) => {
    const [who, line, emotion, gesture, move, inten] = row;
    return { who: who === 'A' ? a : who === 'B' ? b : who, line: sub(line), emotion, gesture, move: move || 'stay', intensity: inten, ending };
  };
  return { genre, lang: zh ? 'zh-CN' : 'en-US', cast: [a, b], beats: [...tpl.body.map(r => conv(r, false)), ...tpl.end.map(r => conv(r, true))] };
}

// Alternative ending for any pair of characters (used by "change ending").
export function altEnding(a, b, lang, variant = 0) {
  const set = ALT_ENDINGS[lang === 'zh-CN' || lang === 'zh' ? 'zh' : 'en'];
  return set[variant % set.length](a, b).map(([who, line, emotion, gesture, move, intensity]) => ({
    speaker: who, line, emotion, gesture, move: move || 'stay', intensity: intensity ?? inferIntensity(line, emotion),
    lookAt: who === a ? b : a, lang: langOf(line), pause: 400, ending: true,
  }));
}

// ---------- variety: seeded business beats + small variations (the FIRST beat is never touched) ----------
const mulberry = seed => { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const BUSINESS = {
  zh: [
    ['{X}来回踱了两步，若有所思', 'think', 'contemplative', 'stay'], ['{X}望向台下观众，耸了耸肩', 'shrug', 'neutral', 'stay'],
    ['{X}深吸一口气，稳住情绪', 'talk', 'contemplative', 'stay'], ['{X}忍不住笑了一下', 'laugh', 'happy', 'stay'],
    ['{X}别过脸去，退开半步', 'sad', 'sad', 'away:{Y}'], ['{X}向{Y}走近一步', 'talk', 'neutral', 'toward:{Y}'],
  ],
  en: [
    ['{X} paces a step, thinking', 'think', 'contemplative', 'stay'], ['{X} glances at the audience and shrugs', 'shrug', 'neutral', 'stay'],
    ['{X} takes a steadying breath', 'talk', 'contemplative', 'stay'], ['{X} lets out a nervous laugh', 'laugh', 'happy', 'stay'],
    ['{X} turns away, one step back', 'sad', 'sad', 'away:{Y}'], ['{X} steps closer to {Y}', 'talk', 'neutral', 'toward:{Y}'],
  ],
};
export function varyBeats(beats, cast, lang, seed) {
  const rnd = mulberry(seed ?? ((Date.now() ^ (Math.random() * 1e9)) | 0)), out = [];
  const pool = BUSINESS[lang === 'zh' ? 'zh' : 'en'];
  let used = 0, lastBiz = -9;
  beats.forEach((b, i) => {
    let nb = b;
    if (i > 0 && !b.ending) {
      nb = { ...b };
      if (nb.gesture === 'talk' && rnd() < 0.3) nb.gesture = ['point', 'shrug', 'think'][Math.floor(rnd() * 3)];
      if (nb.move === 'stay' && rnd() < 0.18) nb.move = rnd() < 0.5 ? 'center' : 'upstage';
      nb.intensity = Math.max(0.1, Math.min(1, (nb.intensity ?? 0.5) + (rnd() - 0.5) * 0.2));
    }
    if (i >= 2 && !b.ending && used < 3 && i - lastBiz >= 3 && rnd() < 0.45) {
      const [t, g, e, mv] = pool[Math.floor(rnd() * pool.length)], x = b.who, y = x === cast[0] ? cast[1] : cast[0];
      out.push({ who: x, line: '', direction: t.replace(/\{X\}/g, x).replace(/\{Y\}/g, y), emotion: e, gesture: g, move: mv.replace(/\{Y\}/g, y), intensity: 0.45, hold: 1500, business: true });
      used++; lastBiz = i;
    }
    out.push(nb);
  });
  return out;
}

// ---------- the generator ----------
export async function* parseLocal(input, opts = {}) {
  const delay = opts.delayMs || 0;
  const text = (input || '').trim();
  if (!text) { yield { kind: 'end' }; return; }

  // 0) exported performance JSON
  if (text[0] === '{') {
    try {
      const doc = JSON.parse(text);
      if (Array.isArray(doc.beats)) {
        for (const a of doc.actors || []) yield { kind: 'actor', ...a };
        for (const b of doc.beats) { yield { kind: 'beat', beat: b }; if (delay) await sleep(delay); else await 0; }
        yield { kind: 'end' }; return;
      }
    } catch { /* not JSON, fall through */ }
  }

  const known = new Map(); // lower name -> display name
  const declare = (name) => {
    const k = name.toLowerCase();
    if (known.has(k)) return null;
    known.set(k, name);
    return { kind: 'actor', name, ...castFor(name, known.size - 1) };
  };
  const resolve = n => known.get(n.toLowerCase()) || n;

  const { items, said } = classifyScript(text);
  const isScript = said >= 2;

  if (!isScript) {
    const scene = ideaToScene(text);
    if (opts.vary !== false) scene.beats = varyBeats(scene.beats, scene.cast, scene.lang === 'zh-CN' ? 'zh' : 'en', opts.seed);
    for (const n of scene.cast) yield declare(n);
    let first = true;
    for (let i = 0; i < scene.beats.length; i++) {
      const s = scene.beats[i];
      const other = s.who === scene.cast[0] ? scene.cast[1] : scene.cast[0];
      const beat = {
        speaker: s.who, line: s.line, emotion: s.emotion, gesture: s.gesture, move: s.move,
        lookAt: s.move && s.move.startsWith('away') ? other : other,
        intensity: s.intensity ?? inferIntensity(s.line, s.emotion), lang: scene.lang,
        pause: 350, ending: s.ending,
        ...(s.business ? { hold: s.hold, direction: s.direction, pause: 250 } : {}),
      };
      if (!first && delay) await sleep(delay); else if (!first) await 0;
      first = false;
      yield { kind: 'beat', beat };
    }
    yield { kind: 'end' };
    return;
  }

  // script mode — stream item by item (each yield is playable immediately)
  const lastSay = items.map(x => x.type).lastIndexOf('say');
  let prev = null, turn = 0, beatNo = 0;
  const speakers = [];
  let note = '';
  for (let idx = 0; idx < items.length; idx++) {
    const it = items[idx];
    const isEnding = idx >= lastSay && lastSay >= 0 && items.filter(x => x.type === 'say').length > 3;
    if (beatNo && delay) await sleep(delay); else if (beatNo) await 0;

    if (it.type === 'dir') {
      const d = parseDirection(it.text);
      const names = [];
      const ent = /^(?:enter|enters|exit|exeunt|上场|下场)\s*(.*)$/i.exec(it.text.replace(/^[[(（【]|[\])）】]$/g, '').trim());
      if (ent && ent[1]) {
        for (const p of ent[1].split(/\band\b|,|、|和/i).map(s => s.replace(/^the\s+/i, '').trim()).filter(Boolean)) {
          if (p.length <= 24) names.push(tidyName(p));
        }
      }
      if (!names.length) for (const [k, v] of known) if (it.text.toLowerCase().includes(k)) names.push(v);
      if (!names.length && prev && d.gesture) names.push(prev);
      for (const n of names) { const ev = d.move === 'exit' ? null : declare(resolve(n)); if (ev) yield ev; }
      const targets = names.map(resolve);
      const clean = it.text.replace(/^[[(（【]|[\])）】]$/g, '').trim();
      if (!targets.length && beatNo === 0) { note = note ? note + ' ' + clean : clean; continue; }
      if (!targets.length) {
        yield { kind: 'beat', beat: { speaker: null, line: '', direction: clean, emotion: 'neutral', gesture: 'none', move: 'stay', lookAt: null, lang: langOf(clean), pause: 600, ending: isEnding } };
        beatNo++;
      } else if (d.move === 'enter' && !d.gesture) {
        // actors were declared above and walk on by themselves; don't delay the next line — attach as a note
        note = note ? note + ' ' + clean : clean;
      } else {
        for (const n of targets) {
          yield { kind: 'beat', beat: { speaker: n, line: '', direction: clean, emotion: d.emotion || 'neutral', gesture: d.gesture || 'none', move: d.move || 'stay', lookAt: prev && prev !== n ? prev : null, lang: langOf(clean), pause: 500, ending: isEnding } };
          beatNo++;
        }
      }
      continue;
    }

    // dialogue
    const name = resolve(it.name);
    const ev = declare(name); if (ev) yield ev;
    if (!speakers.includes(name)) speakers.push(name);
    let body = it.text;
    const hints = [];
    body = body.replace(/[(（[]([^)）\]]{1,40})[)）\]]/g, (_, h) => { hints.push(h); return ' '; }).replace(/\s+/g, ' ').trim();
    if (!body) continue;
    const hint = hints[0] || '';
    const hd = hint ? parseDirection(hint) : { gesture: null, move: null, emotion: null };
    const hEmo = hd.emotion || emotionFromHint(hint);
    const other = speakers.find(s => s !== name) || (prev && prev !== name ? prev : null);
    const sentences = splitSentences(body);
    for (let k = 0; k < sentences.length; k++) {
      const s = sentences[k];
      const emotion = hEmo || inferEmotion(s);
      const gesture = (k === 0 && hd.gesture) || inferGesture(s, emotion, beatNo + k);
      let move = 'stay';
      if (k === 0 && other) {
        if (emotion === 'angry' && turn % 2 === 1) move = 'toward:' + other;
        else if (emotion === 'afraid') move = 'away:' + other;
        else if (turn % 4 === 3) move = 'toward:' + other;
      } else if (k === 0 && !other && turn === 0) move = 'center';
      const last = k === sentences.length - 1;
      yield {
        kind: 'beat',
        beat: {
          speaker: name, line: s, emotion, gesture, move, ...(note && k === 0 ? { direction: note } : {}),
          lookAt: other || 'audience', intensity: inferIntensity(s, emotion), lang: langOf(s),
          pause: last ? 450 : 220, ending: isEnding,
        },
      };
      if (k === 0) note = '';
      beatNo++;
      if (!last && delay) await sleep(delay); else if (!last) await 0;
    }
    prev = name; turn++;
  }
  yield { kind: 'end' };
}
