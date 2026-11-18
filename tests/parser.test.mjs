import { parseLocal, classifyScript } from '../src/parsers/local.js';
import { samples } from '../src/samples.js';
let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.error('FAIL', m); } else console.log('ok  ', m); };
async function run(text) { const ev = []; for await (const e of parseLocal(text)) ev.push(e); return ev; }
for (const s of samples) for (const l of ['zh', 'en']) {
  const text = s.text[l] ?? s.text.en;
  const ev = await run(text);
  const beats = ev.filter(e => e.kind === 'beat'), actors = ev.filter(e => e.kind === 'actor');
  ok(beats.length >= 5 && actors.length >= 2 && ev.at(-1).kind === 'end', `${s.id}/${l}: ${beats.length} beats, ${actors.map(a => a.name).join('+')}`);
  ok(ev[0].kind === 'actor' || ev[0].kind === 'beat', `${s.id}/${l}: first event streams immediately`);
}
const e2 = await run('Alice meets a ghost');
ok(e2.filter(e => e.kind === 'actor').map(a => a.name).join() === 'Alice,Ghost', 'names extracted: ' + e2.filter(e => e.kind === 'actor').map(a => a.name));
const e3 = await run('HAMLET. To be.\nOPHELIA. My lord?\nHAMLET. Go.');
ok(e3.filter(e => e.kind === 'beat').length === 3, 'play-style NAME. lines');
process.exit(fail ? 1 : 0);
