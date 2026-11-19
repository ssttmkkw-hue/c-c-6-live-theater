import { parseDirective, normalizeOps } from '../src/directives.js';
let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.error('FAIL', m); } else console.log('ok  ', m); };
const types = s => parseDirective(s).map(o => o.type + (o.emotion ? ':' + o.emotion : '')).join(',');

// intended directions (EN + ZH)
const want = {
  'angrier': 'mood:angry', '更生气': 'mood:angry', 'softer please': 'mood:tender', '温柔点': 'mood:tender',
  'sadder': 'mood:sad', '开心一点': 'mood:happy', 'more afraid': 'mood:afraid', '骄傲一点': 'mood:proud',
  'faster': 'rate', '快一点': 'rate', 'slow down': 'rate', '慢一点': 'rate',
  'they hug': 'hug', '他们拥抱': 'hug', 'look at the audience': 'audience', '看观众': 'audience',
  'change ending': 'ending', '换个结局': 'ending', 'replay': 'replay', '重播': 'replay', '从头再来一遍': 'replay',
  'back to normal': 'reset', '恢复正常': 'reset',
  'angrier and faster': 'rate,mood:angry',
  // negation flips the mood
  'less angry': 'mood:tender', '别生气': 'mood:tender', "don't cry": 'mood:happy',
};
for (const [s, t] of Object.entries(want)) ok(types(s) === t, `"${s}" -> ${t} (got ${types(s)})`);

// words that used to be false positives must NOT become ops (they fall through to a stage direction)
for (const s of ['show more courage', 'what will happen next', 'he wears a scarf', 'software crash', 'make it average',
  'a crystal glass', 'breakfast time', 'a huge hat', '面向左边', '慢慢走过去', 'the storage room', 'he is a madman'])
  ok(parseDirective(s).length === 0, `"${s}" is free text (got ${types(s) || 'none'})`);

// several moods: last one wins, deltas summed, both labels kept
const m = parseDirective('angrier then sadder');
ok(m.length === 1 && m[0].emotion === 'sad' && m[0].labels.length === 2 && Math.abs(m[0].delta - 0.2) < 1e-9, 'last mood wins, deltas summed');

// characters and lines
ok(JSON.stringify(parseDirective('enter the dragon slowly')) === JSON.stringify([{ type: 'addchar', name: 'Dragon' }]), 'addchar strips trailing adverb');
ok(parseDirective('来个侦探')[0]?.name === '侦探', 'addchar zh');
ok(JSON.stringify(parseDirective('Hamlet: I am so angry!')) === JSON.stringify([{ type: 'line', speaker: 'Hamlet', text: 'I am so angry!' }]), 'NAME: line wins over mood words');
ok(parseDirective('哈姆雷特：我很生气')[0]?.type === 'line', 'NAME：line (full-width colon)');

// normalizeOps validates untrusted (AI) ops
const n = normalizeOps([{ type: 'mood', emotion: 'angry' }, { type: 'mood', emotion: 'bogus' }, { type: 'rate', mul: 9 },
  { type: 'line', speaker: 'Ghost', text: 'Remember me.' }, { type: 'rm -rf' }, null]);
ok(n.length === 3 && n[0].label === 'dirAngrier' && n[1].mul === 1.6 && n[2].speaker === 'Ghost', 'normalizeOps keeps valid ops, clamps rate, drops junk');
ok(normalizeOps('nope').length === 0 && normalizeOps([{ type: 'line', speaker: '', text: 'x' }]).length === 0, 'normalizeOps rejects non-arrays / empty fields');
ok(normalizeOps(new Array(10).fill({ type: 'hug' })).length === 4, 'normalizeOps caps the number of ops');

process.exit(fail ? 1 : 0);
