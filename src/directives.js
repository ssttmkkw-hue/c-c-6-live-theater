// Live-direction text -> operations. Bilingual keyword rules; combine freely ("angrier and faster").
const RULES = [
  { re: /replay|restart|from the start|from the top|重播|重来|重新开始|再来一遍/i, op: { type: 'replay' } },
  { re: /change (the )?ending|new ending|different ending|alternate ending|another ending|换.{0,2}结局|改.{0,2}结局|新结局|结局/i, op: { type: 'ending' } },
  { re: /hug|embrace|拥抱|抱一抱|抱在一起/i, op: { type: 'hug' } },
  { re: /audience|face the crowd|观众|看向台下|面向/i, op: { type: 'audience' } },
  { re: /angr|furious|\bmad\b|rage|yell|aggressive|生气|愤怒|发火|凶|怒/i, op: { type: 'mood', emotion: 'angry', delta: 0.25, label: 'dirAngrier' } },
  { re: /soft|gentl|calm|tender|quiet|whisper|温柔|轻柔|轻一点|温和|冷静|小声/i, op: { type: 'mood', emotion: 'tender', delta: -0.3, label: 'dirSofter' } },
  { re: /\bsad|cry|melanchol|sorrow|悲|哭|伤心|难过/i, op: { type: 'mood', emotion: 'sad', delta: -0.05, label: 'dirSadder' } },
  { re: /happ|joy|cheer|laugh|开心|高兴|快乐|喜悦/i, op: { type: 'mood', emotion: 'happy', delta: 0.1, label: 'dirHappier' } },
  { re: /scar|afraid|fear|terrif|害怕|恐惧|惊恐/i, op: { type: 'mood', emotion: 'afraid', delta: 0.15, label: 'dirScarier' } },
  { re: /proud|arrogan|骄傲|自豪|傲慢/i, op: { type: 'mood', emotion: 'proud', delta: 0.1, label: 'dirProuder' } },
  { re: /slow|slower|慢/i, op: { type: 'rate', mul: 0.78, label: 'dirSlower' } },
  { re: /fast|quick|speed|hurry|rush|快一点|快点|快些|更快|加快|加速/i, op: { type: 'rate', mul: 1.3, label: 'dirFaster' } },
  { re: /reset|back to normal|normal|恢复|正常/i, op: { type: 'reset' } },
];

export function parseDirective(text) {
  const s = text.trim();
  if (!s) return [];
  const ops = [];
  for (const r of RULES) if (r.re.test(s) && !ops.some(o => o.type === r.op.type && o.emotion === r.op.emotion)) ops.push(r.op);
  // "slow" also matches... avoid double rate ops: keep first
  const rate = ops.filter(o => o.type === 'rate'); if (rate.length > 1) ops.splice(ops.indexOf(rate[1]), 1);
  const moods = ops.filter(o => o.type === 'mood'); if (moods.length > 1) for (const m of moods.slice(1)) ops.splice(ops.indexOf(m), 1);
  if (ops.some(o => o.type === 'replay')) return [{ type: 'replay' }];
  if (!ops.length) {
    const m = /^\s*([^:：]{1,24})[:：]\s*(.+)$/.exec(s);
    if (m) return [{ type: 'line', speaker: m[1].trim(), text: m[2].trim() }];
  }
  return ops;
}
