// End-to-end smoke test in headless Chromium: build, serve dist/, start a show, direct it live.
// Guards the core promises: fast first line, live directing, change ending, replay, no runtime errors.
//   npm run test:e2e                      (needs `playwright` + a Chromium; see README)
//   THEATER_TTFL_MAX=80 npm run test:e2e  (looser latency budget on slow machines)
//   THEATER_SHOTS=dir npm run test:e2e    (also save a screenshot per set into dir)
import { spawn, execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { console.log('skip: playwright is not installed (npm i -D playwright && npx playwright install chromium)'); process.exit(0); }

const TTFL_MAX = Number(process.env.THEATER_TTFL_MAX || 50);
const PORT = 4789 + Math.floor(Math.random() * 200);
let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.error('FAIL', m); } else console.log('ok  ', m); };

execSync('npx vite build --logLevel error', { cwd: root, stdio: 'inherit' });
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: root, stdio: 'ignore' });
const url = `http://localhost:${PORT}/?quality=medium`;
for (let i = 0; i < 50; i++) { try { await fetch(url); break; } catch { await new Promise(r => setTimeout(r, 200)); } }

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.addInitScript(() => { localStorage.setItem('theater.mute', '1'); localStorage.setItem('theater.lang', 'en'); });
  await page.goto(url);
  await page.waitForFunction(() => window.__theater?.director);

  const T = (fn, arg) => page.evaluate(fn, arg);
  ok(await T(() => window.__theater.theater.quality) === 1, '?quality=medium pins the quality level');

  // ---- fast start ----
  await page.fill('#script', 'Hamlet meets the ghost');
  await page.click('#startBtn');
  await page.waitForFunction(() => /\d/.test(document.getElementById('ttfl').textContent), null, { timeout: 5000 });
  const ttfl = parseInt(await page.textContent('#ttfl'), 10);
  ok(ttfl < TTFL_MAX, `start -> first line ${ttfl} ms (< ${TTFL_MAX})`);
  ok(await T(() => window.__theater.director.state) === 'performing', 'director is performing');
  ok(await T(() => window.__theater.director.actors.size) >= 2, 'actors were cast');
  ok(await page.isVisible('#subtitle.on'), 'subtitle shown');

  const dir = s => T(t => { const d = window.__theater.director; const r = d.direct(t, (k, ...a) => k + (a.length ? ':' + a.join() : '')); return { r, cur: d.cur?.beat, style: { ...d.style } }; }, s);

  // ---- live directing ----
  let x = await dir('angrier');
  ok(x.r.ok && x.style.emotion === 'angry' && x.cur?.emotion === 'angry', 'angrier: style set and an angry ad-lib cuts in now');
  x = await dir('faster');
  ok(x.r.ok && x.style.rate > 1, 'faster: rate raised');
  x = await dir('show more courage');
  ok(x.r.ok && x.cur?.stage === true && x.style.emotion === 'angry' && x.r.labels[0].startsWith('dirStage'), '"courage" is acted as a stage direction, not a mood');
  x = await dir('they hug');
  ok(x.r.ok && x.cur?.gesture === 'hug', 'hug is performed immediately');
  x = await dir('Ghost: Remember me!');
  ok(x.r.ok && x.cur?.line === 'Remember me!' && /ghost/i.test(x.cur?.speaker), 'NAME: line is spoken at once');

  // ---- change ending ----
  const before = await T(() => window.__theater.director.queue.filter(b => b.ending).map(b => b.id));
  x = await dir('change ending');
  const after = await T(() => { const d = window.__theater.director; return { ids: d.queue.map(b => b.id), ending: d.queue.filter(b => b.ending).length, pending: d.pendingAlt }; });
  ok(x.r.ok && before.every(id => !after.ids.includes(id)) && (after.ending > 0 || after.pending), `change ending: ${before.length} original ending beats dropped, alternative ${after.pending ? 'pending' : 'queued'}`);

  // ---- sets + screenshots ----
  if (process.env.THEATER_SHOTS) {
    const fs = await import('node:fs'); fs.mkdirSync(process.env.THEATER_SHOTS, { recursive: true });
    for (const id of ['moon', 'ramparts', 'shop', 'alley', 'hall']) {
      await T(i => window.__theater.theater.setSet(i), id); await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(process.env.THEATER_SHOTS, `set-${id}.png`) });
    }
  }

  // ---- quality switching keeps rendering ----
  for (const q of [0, 2, 1]) await T(v => window.__theater.theater.setQuality(v), q);
  await page.waitForTimeout(300);

  // ---- replay ----
  await page.click('#replayBtn');
  await page.waitForFunction(() => window.__theater.director.beatNo >= 1 && window.__theater.director.state === 'performing', null, { timeout: 5000 });
  ok(true, 'replay restarts the performance');

  // ---- stop ----
  await page.click('#stopBtn');
  ok(await T(() => window.__theater.director.state) === 'stopped', 'stop');
  ok((await dir('angrier')).r.noShow === true, 'directing with no show running is refused politely');

  // ---- AI path, fully mocked: no key leaves the machine, no network spend ----
  const ai = await browser.newPage();
  ai.on('pageerror', e => errors.push('ai: ' + e));
  let sawKeyInUrl = false;
  await ai.route('https://api.anthropic.com/**', async route => {
    const req = route.request(); if (req.url().includes('test-key')) sawKeyInUrl = true;
    const body = req.postDataJSON();
    if (body.stream) {
      const lines = ['{"kind":"scene","set":"shop"}', '{"kind":"actor","name":"Clerk"}', '{"kind":"actor","name":"Robot"}',
        '{"kind":"beat","beat":{"speaker":"Clerk","line":"Welcome in.","emotion":"happy"}}',
        '{"kind":"beat","beat":{"speaker":"Robot","line":"I require batteries.","emotion":"neutral"}}'];
      const sse = lines.map(l => 'data: ' + JSON.stringify({ type: 'content_block_delta', delta: { type: 'text_delta', text: l + '\n' } })).join('\n\n') + '\n\n';
      return route.fulfill({ status: 200, headers: { 'content-type': 'text/event-stream' }, body: sse });
    }
    return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ content: [{ type: 'text', text: '{"ops":[{"type":"mood","emotion":"sad"},{"type":"rate","mul":0.7},{"type":"evil"}]}' }] }) });
  });
  await ai.addInitScript(() => { localStorage.setItem('theater.mute', '1'); localStorage.setItem('theater.aiKey', 'test-key'); });
  await ai.goto(url);
  await ai.waitForFunction(() => window.__theater?.director);
  await ai.evaluate(() => { document.getElementById('parserSel').value = 'ai'; }); // the select lives in a collapsed panel
  await ai.fill('#script', 'a robot shops at midnight');
  await ai.click('#startBtn');
  await ai.waitForFunction(() => window.__theater.director.beatNo >= 1, null, { timeout: 5000 });
  ok(await ai.evaluate(() => window.__theater.director.setId) === 'shop', 'AI stream: {"kind":"scene"} picks the set');
  ok(await ai.evaluate(() => window.__theater.director.getActor('robot') != null), 'AI stream: actors declared');
  await ai.fill('#directIn', 'make him hesitate before answering'); await ai.press('#directIn', 'Enter');
  ok(await ai.evaluate(() => window.__theater.director.cur?.beat.stage === true), 'free text is acted at once as a stage direction');
  await ai.waitForFunction(() => window.__theater.director.style.emotion === 'sad', null, { timeout: 3000 });
  const st = await ai.evaluate(() => ({ ...window.__theater.director.style, log: document.getElementById('directLog').textContent }));
  ok(st.rate < 1 && st.log.includes('✦'), 'AI interpreter adds validated ops a moment later (sad + slower, junk dropped)');
  ok(!sawKeyInUrl, 'API key never appears in a URL');
  await ai.close();

  ok(errors.length === 0, 'no page / console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
} finally {
  await browser.close(); server.kill();
}
process.exit(fail ? 1 : 0);
