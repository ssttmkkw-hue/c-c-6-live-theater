// Live-direction text -> operations. Bilingual keyword rules; combine freely ("angrier and faster").
const RULES = [
  { re: /\breplay|\brestart|from the start|from the top|重播|重来|重新开始|再来一遍/i, op: { type: 'replay' } },
  { re: /change (the )?ending|new ending|different ending|alternate ending|another ending|换.{0,2}结局|改.{0,2}结局|新结局|(换|改|新|另).{0,3}结局|结局.{0,2}(换|改|不同)/i, op: { type: 'ending' } },
  { re: /\bhugs?\b|hugging|embrace|拥抱|抱一抱|抱在一起/i, op: { type: 'hug' } },
  { re: /audience|face the crowd|观众|看向台下|面向/i, op: { type: 'audience' } },
  { re: /angr|furious|\bmad\b|rage|yell|aggressive|生气|愤怒|发火|凶|怒/i, op: { type: 'mood', emotion: 'angry', delta: 0.25, label: 'dirAngrier' } },
  { re: /soft|gentl|calm|tender|quiet|whisper|温柔|轻柔|轻一点|温和|冷静|小声/i, op: { type: 'mood', emotion: 'tender', delta: -0.3, label: 'dirSofter' } },
  { re: /\bsad|cry|melanchol|sorrow|悲|哭|伤心|难过/i, op: { type: 'mood', emotion: 'sad', delta: -0.05, label: 'dirSadder' } },
  { re: /happ|joy|cheer|laugh|开心|高兴|快乐|喜悦/i, op: { type: 'mood', emotion: 'happy', delta: 0.1, label: 'dirHappier' } },
  { re: /scar|afraid|fear|terrif|害怕|恐惧|惊恐/i, op: { type: 'mood', emotion: 'afraid', delta: 0.15, label: 'dirScarier' } },
  { re: /proud|arrogan|骄傲|自豪|傲慢/i, op: { type: 'mood', emotion: 'proud', delta: 0.1, label: 'dirProuder' } },
  { re: /\bslow|slower|慢/i, op: { type: 'rate', mul: 0.78, label: 'dirSlower' } },
  { re: /\bfast|\bquick|\bspeed|hurry|\brush|快一点|快点|快些|更快|加快|加速/i, op: { type: 'rate', mul: 1.3, label: 'dirFaster' } },
  { re: /\breset|back to normal|\bnormal\b|恢复|正常/i, op: { type: 'reset' } },
];

const ADD_EN = /\b(?:enter|add|bring in|introduce|send in|let in)\s+(?:a|an|the|another|one more)?\s*([a-z][a-z'-]{1,16}(?:\s[a-z][a-z'-]{1,12})?)\s*$/i;
const ADD_ZH = /(?:来个|来一个|加个|加一个|再来一个|进来一个|让.{0,2}进来|召来)\s*([^\s，。！？,.!?]{1,6})\s*$/;

export function parseDirective(text) {
  const s = text.trim();
  if (!s) return [];
  const am = ADD_EN.exec(s) || ADD_ZH.exec(s);
  if (am && !/\b(ending|audience|replay)\b/i.test(s)) return [{ type: 'addchar', name: am[1].trim().replace(/^./, c => c.toUpperCase()) }];
  const ops = [];
  for (const r of RULES) if (r.re.test(s) && !ops.some(o => o.type === r.op.type && o.emotion === r.op.emotion)) ops.push(r.op);
  if (ops.some(o => o.type === 'replay')) return [{ type: 'replay' }];
  // several rate words: keep the first. Several moods: the LAST one sets the emotion, deltas are summed.
  const rate = ops.filter(o => o.type === 'rate'); for (const r of rate.slice(1)) ops.splice(ops.indexOf(r), 1);
  const moods = ops.filter(o => o.type === 'mood');
  if (moods.length > 1) {
    const pos = m => { const r = RULES.find(x => x.op === m); const mm = r && r.re.exec(s); return mm ? mm.index : 0; };
    const sorted = moods.slice().sort((a, b) => pos(a) - pos(b));
    const last = sorted[sorted.length - 1];
    const merged = { ...last, delta: moods.reduce((t, m) => t + m.delta, 0), labels: sorted.map(m => m.label) };
    for (const m of moods) ops.splice(ops.indexOf(m), 1);
    ops.push(merged);
  }
  if (!ops.length) {
    const m = /^\s*([^:：]{1,24})[:：]\s*(.+)$/.exec(s);
    if (m) return [{ type: 'line', speaker: m[1].trim(), text: m[2].trim() }];
  }
  return ops;
}
