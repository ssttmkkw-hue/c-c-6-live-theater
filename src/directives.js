// Live-direction text -> operations. Bilingual keyword rules; combine freely ("angrier and faster").
//
// English rules match whole words only (with the usual inflections), so "courage", "happen",
// "scarf", "software" or "crystal" no longer trigger a mood. Chinese rules use short phrases
// rather than single characters where a single character is ambiguous (慢慢走 is a stage
// direction, not "slower"; 面向左边 is not "look at the audience").
const W = s => new RegExp(`\\b(?:${s})\\b`, 'i');
const either = (en, zh) => new RegExp(`${W(en).source}|${zh}`, 'i');

const RULES = [
  { re: either('replay|restart|from the (?:start|top)|do it again|play it again', '重播|重来|重新开始|再来一遍|再演一遍'), op: { type: 'replay' } },
  { re: either('(?:change|new|different|alternate|alternative|another|other) (?:the )?ending', '(?:换|改|新|另)[一个种]{0,2}结局|结局.{0,2}(?:换|改|不同)'), op: { type: 'ending' } },
  { re: either('hug|hugs|hugging|embrace|embraces|embracing', '拥抱|抱一抱|抱一下|抱在一起'), op: { type: 'hug' } },
  { re: either('(?:the )?audience|face the (?:crowd|house)|look at us', '观众|看向台下|面向台下|看台下|看着我们'), op: { type: 'audience' } },
  { re: either('angry|angrier|angrily|furious|furiously|mad|madder|rage|raging|enraged|yell|yells|yelling|shout|shouts|shouting|aggressive|aggressively', '生气|愤怒|发火|凶一点|更凶|怒'), op: { type: 'mood', emotion: 'angry', delta: 0.25, label: 'dirAngrier' } },
  { re: either('soft|softer|softly|gentle|gentler|gently|calm|calmer|calmly|tender|tenderly|quiet|quieter|quietly|whisper|whispers|whispering', '温柔|轻柔|轻一点|温和|冷静|小声'), op: { type: 'mood', emotion: 'tender', delta: -0.3, label: 'dirSofter' } },
  { re: either('sad|sadder|sadly|cry|cries|crying|weep|weeps|weeping|melancholy|melancholic|sorrow|sorrowful|mournful', '悲伤|悲痛|哭|伤心|难过'), op: { type: 'mood', emotion: 'sad', delta: -0.05, label: 'dirSadder' } },
  { re: either('happy|happier|happily|joy|joyful|joyous|cheerful|cheerier|cheer up|laugh|laughs|laughing', '开心|高兴|快乐|喜悦|欢快'), op: { type: 'mood', emotion: 'happy', delta: 0.1, label: 'dirHappier' } },
  { re: either('scared|scarier|scary|afraid|fear|fearful|terrified|frightened|nervous', '害怕|恐惧|惊恐|紧张'), op: { type: 'mood', emotion: 'afraid', delta: 0.15, label: 'dirScarier' } },
  { re: either('proud|prouder|proudly|arrogant|arrogantly|haughty', '骄傲|自豪|傲慢'), op: { type: 'mood', emotion: 'proud', delta: 0.1, label: 'dirProuder' } },
  { re: either('slow|slower|slowly|slow down', '慢一点|慢点|慢些|更慢|放慢|慢下来'), op: { type: 'rate', mul: 0.78, label: 'dirSlower' } },
  { re: either('fast|faster|quick|quicker|quickly|speed up|hurry|hurry up|rush|pick up the pace', '快一点|快点|快些|更快|加快|加速'), op: { type: 'rate', mul: 1.3, label: 'dirFaster' } },
  { re: either('reset|back to normal|normal again', '恢复正常|恢复原样|恢复'), op: { type: 'reset' } },
];

// "less angry", "not so sad", "don't cry", "别生气", "不要哭" negate the mood word that follows.
const NEG_EN = /\b(?:less|not|no|never|don'?t|stop|without|no more)\s+(?:so\s+|too\s+|be\s+|being\s+|getting\s+|more\s+)?$/i;
const NEG_ZH = /(?:别|不要|不用|不必|少点|别再|不再|没那么|不那么)\s*$/;

const STOP_TAIL = /\s+(?:\w+ly|now|please|here|again|too|at once|onstage|on stage)$/i;
const ADD_EN = /\b(?:enter|add|bring in|introduce|send in|let in)\s+(?:a|an|the|another|one more)?\s*([a-z][a-z'-]{1,16}(?:\s[a-z][a-z'-]{1,12})?)\s*[.!]?\s*$/i;
const ADD_ZH = /(?:来个|来一个|加个|加一个|再来一个|进来一个|让.{0,2}进来|召来)\s*([^\s，。！？,.!?]{1,6})\s*[。！!]?\s*$/;

/** {at, neg}: the first non-negated match of re in s; else the first negated one ({neg:true}); else null */
function matchAt(re, s) {
  const g = new RegExp(re.source, 'gi');
  let m, negAt = -1;
  while ((m = g.exec(s))) {
    const before = s.slice(0, m.index);
    if (!NEG_EN.test(before) && !NEG_ZH.test(before)) return { at: m.index, neg: false };
    if (negAt < 0) negAt = m.index;
    if (m[0].length === 0) g.lastIndex++;
  }
  return negAt >= 0 ? { at: negAt, neg: true } : null;
}
// a negated mood flips to its opposite ("less angry" / 别生气 -> softer); other negated ops are ignored
const FLIP = { angry: 'tender', sad: 'happy', afraid: 'proud', happy: 'sad', tender: 'angry' };

export function parseDirective(text) {
  const s = (text || '').trim();
  if (!s) return [];
  const am = ADD_EN.exec(s) || ADD_ZH.exec(s);
  if (am && !/\b(?:ending|audience|replay)\b/i.test(s)) {
    let name = am[1].trim();
    while (STOP_TAIL.test(name)) name = name.replace(STOP_TAIL, '');
    if (name) return [{ type: 'addchar', name: name.replace(/^./, c => c.toUpperCase()) }];
  }
  // A "NAME: line" is a line, even when the line itself contains mood words.
  const lm = /^\s*([^:：\s][^:：]{0,23})[:：]\s*(.+)$/.exec(s);
  if (lm && !/\s{2,}/.test(lm[1]) && lm[1].trim().split(/\s+/).length <= 3) return [{ type: 'line', speaker: lm[1].trim(), text: lm[2].trim() }];

  const hits = [];
  for (const r of RULES) {
    const h = matchAt(r.re, s);
    if (!h) continue;
    if (!h.neg) { hits.push({ op: r.op, at: h.at }); continue; }
    const flip = r.op.type === 'mood' && RULES.find(x => x.op.type === 'mood' && x.op.emotion === FLIP[r.op.emotion]);
    if (flip && !hits.some(x => x.op === flip.op)) hits.push({ op: flip.op, at: h.at });
  }
  if (hits.some(h => h.op.type === 'replay')) return [{ type: 'replay' }];
  hits.sort((a, b) => a.at - b.at);
  const ops = [];
  let rate = null; const moods = [];
  for (const h of hits) {
    if (h.op.type === 'rate') { if (!rate) rate = h.op; continue; } // several rate words: keep the first
    if (h.op.type === 'mood') { if (!moods.includes(h.op)) moods.push(h.op); continue; }
    ops.push(h.op);
  }
  if (rate) ops.push(rate);
  // Several moods: the LAST one sets the emotion, deltas are summed.
  if (moods.length === 1) ops.push(moods[0]);
  else if (moods.length > 1) {
    const last = moods[moods.length - 1];
    ops.push({ ...last, delta: moods.reduce((t, m) => t + m.delta, 0), labels: moods.map(m => m.label) });
  }
  return ops;
}

// ---- normalising ops that come from elsewhere (e.g. an AI interpreter) ----
const MOOD = Object.fromEntries(RULES.filter(r => r.op.type === 'mood').map(r => [r.op.emotion, r.op]));
const OP_TYPES = new Set(['mood', 'rate', 'reset', 'audience', 'hug', 'ending', 'addchar', 'line']);

/**
 * Validate untrusted ops (AI output) into the canonical shapes parseDirective() produces.
 * Unknown types/emotions are dropped; strings are trimmed and length-limited.
 */
export function normalizeOps(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  const str = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
  for (const o of raw.slice(0, 4)) {
    if (!o || typeof o !== 'object' || !OP_TYPES.has(o.type)) continue;
    if (o.type === 'mood') { const m = MOOD[o.emotion]; if (m) out.push({ ...m }); }
    else if (o.type === 'rate') { const f = Number(o.mul ?? (o.faster ? 1.3 : o.slower ? 0.78 : NaN)); if (f > 0) out.push(f >= 1 ? { type: 'rate', mul: Math.min(f, 1.6), label: 'dirFaster' } : { type: 'rate', mul: Math.max(f, 0.6), label: 'dirSlower' }); }
    else if (o.type === 'addchar') { const name = str(o.name, 24); if (name) out.push({ type: 'addchar', name }); }
    else if (o.type === 'line') { const speaker = str(o.speaker, 24), t = str(o.text, 160); if (speaker && t) out.push({ type: 'line', speaker, text: t }); }
    else out.push({ type: o.type });
  }
  return out;
}
