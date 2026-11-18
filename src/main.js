import { createTheater } from './theater/scene.js';
import { Director } from './director.js';
import { t, getLang, setLang, onLang, applyStatic } from './i18n.js';
import { samples } from './samples.js';
import { pickParser, parsers } from './parsers/index.js';
import { KEY_STORAGE, MODEL_STORAGE } from './parsers/ai.js';
import { speech } from './speech.js';
import { SET_LABEL } from './theater/sets.js';

const $ = id => document.getElementById(id);
const els = {
  script: $('script'), start: $('startBtn'), pause: $('pauseBtn'), stop: $('stopBtn'), replay: $('replayBtn'),
  status: $('status'), ttfl: $('ttfl'), tfb: $('tfb'), directIn: $('directIn'), directBtn: $('directBtn'),
  directLog: $('directLog'), beatLog: $('beatLog'), sub: $('subtitle'), subDir: $('subDir'), subName: $('subName'), subText: $('subText'),
  toast: $('toast'), setName: $('setName'), slow: $('slowParse'), mute: $('muteChk'), parserSel: $('parserSel'), key: $('apiKey'), model: $('aiModel'),
};

const theater = createTheater($('stage'));
let lastSet = 'moon';
const showSet = () => { els.setName.textContent = SET_LABEL[getLang()][lastSet] || '—'; };
function refreshStartLabel() { els.start.textContent = t(document.body.classList.contains('live') ? 'restart' : 'start'); }
let lastStatus = ['stIdle'];
const setStatus = (key, ...a) => { lastStatus = [key, ...a]; els.status.textContent = t(key, ...a); };
let toastTimer = 0;
function toast(msg) { els.toast.textContent = msg; els.toast.classList.add('on'); clearTimeout(toastTimer); toastTimer = setTimeout(() => els.toast.classList.remove('on'), 3200); }
const lighten = hex => { const n = parseInt(hex.slice(1), 16); const m = c => Math.round(c + (255 - c) * 0.6); return `rgb(${m(n >> 16)},${m((n >> 8) & 255)},${m(n & 255)})`; };
const fmt = ms => ms == null ? '— ms' : Math.round(ms) + ' ms';

const director = new Director(theater, {
  onStatus: setStatus,
  onMetric: m => { if (m.ttfl != null) { els.ttfl.textContent = fmt(m.ttfl); console.info('[theater] start → first line:', Math.round(m.ttfl), 'ms'); } if (m.tfb != null) els.tfb.textContent = fmt(m.tfb); },
  onSubtitle: s => {
    if (!s) { els.sub.classList.remove('on'); return; }
    if (s.end) { els.subDir.textContent = ''; els.subName.textContent = ''; els.subText.textContent = t('finished'); els.sub.classList.add('on'); return; }
    els.subName.textContent = s.name; els.subName.style.color = s.ghost ? '#bfe3ff' : lighten(s.color);
    els.subText.textContent = s.text || (s.direction ? `（${s.direction}）` : '');
    els.subText.classList.toggle('dir', !s.text);
    els.subDir.textContent = s.text && s.direction ? `（${s.direction}）` : '';
    els.sub.classList.add('on');
  },
  onSet: id => { lastSet = id; showSet(); },
  onBeatQueued: (b, injected) => addBeatRow(b, injected),
  onBeatsDropped: ids => ids.forEach(id => els.beatLog.querySelector(`li[data-id="${id}"]`)?.remove()),
  onBeat: (b, n) => {
    for (const li of els.beatLog.querySelectorAll('li.now')) li.classList.remove('now');
    const li = els.beatLog.querySelector(`li[data-id="${b.id}"]`);
    if (li) { li.classList.add('now'); li.scrollIntoView({ block: 'nearest' }); }
  },
  onRunning: (running, finished) => {
    els.pause.disabled = !running; els.stop.disabled = !running && !finished;
    els.replay.disabled = false; els.start.disabled = false;
    document.body.classList.toggle('live', !!running); refreshStartLabel();
    if (!running) els.pause.textContent = t('pause');
  },
  onPaused: p => { els.pause.textContent = t(p ? 'resume' : 'pause'); },
  onDirective: labels => { logDirective(labels.join(' + ')); },
});

function addBeatRow(b, injected) {
  const li = document.createElement('li'); li.dataset.id = b.id;
  if (injected) li.classList.add('inj');
  const who = document.createElement('b'); who.textContent = b.speaker || '·';
  const txt = document.createElement('span'); txt.textContent = b.line || (b.direction ? `（${b.direction}）` : '');
  const tag = document.createElement('i'); tag.dataset.e = b.emotion; tag.dataset.g = b.gesture; fillTag(tag);
  li.append(who, txt, tag);
  if (injected && els.beatLog.querySelector('li.now')) els.beatLog.querySelector('li.now').after(li); else els.beatLog.append(li);
}
function fillTag(tag) {
  tag.textContent = '';
  const e = document.createElement('span'); e.className = 'e e-' + tag.dataset.e; e.textContent = t('emo')[tag.dataset.e] || tag.dataset.e;
  const g = document.createElement('span'); g.textContent = t('gest')[tag.dataset.g] || tag.dataset.g;
  tag.append(e, g);
}
function logDirective(msg) {
  const d = document.createElement('div'); d.textContent = '▸ ' + msg; els.directLog.prepend(d);
  while (els.directLog.children.length > 4) els.directLog.lastChild.remove();
}

// ---------- samples / chips ----------
function renderSamples() {
  const box = $('samples'); box.textContent = '';
  for (const s of samples) {
    const b = document.createElement('button'); b.className = 'chip'; b.textContent = t(s.label);
    b.onclick = () => { els.script.value = s.text[getLang()] ?? s.text.en; };
    box.append(b);
  }
  const chips = $('chips'); chips.textContent = '';
  for (const c of t('chips')) { const b = document.createElement('button'); b.className = 'chip'; b.textContent = c; b.onclick = () => submitDirective(c); chips.append(b); }
}
function renderViews() {
  const box = $('views'); box.textContent = '';
  for (const [v, k] of [['audience', 'viewAud'], ['close', 'viewClose'], ['free', 'viewFree']]) {
    const b = document.createElement('button'); b.className = 'small' + (theater.view === v ? ' active' : ''); b.textContent = t(k);
    b.onclick = () => { theater.setView(v); renderViews(); }; box.append(b);
  }
}
function renderParsers() {
  const keep = els.parserSel.value || 'local';
  els.parserSel.textContent = '';
  const o1 = new Option(t('parserLocal'), 'local'); els.parserSel.add(o1);
  const o2 = new Option(t('parserAi'), 'ai'); o2.disabled = !parsers.ai.available(); els.parserSel.add(o2);
  els.parserSel.value = keep === 'ai' && !o2.disabled ? 'ai' : 'local';
}

// ---------- actions ----------
function startShow() {
  const text = els.script.value.trim();
  if (!text) { toast(t('noScript')); return; }
  els.beatLog.textContent = ''; els.ttfl.textContent = '— ms'; els.tfb.textContent = '— ms'; els.directLog.textContent = '';
  els.start.disabled = false; els.pause.disabled = false; els.stop.disabled = false; els.pause.textContent = t('pause'); document.body.classList.add('live'); refreshStartLabel();
  const parser = pickParser(els.parserSel.value);
  director.start(text, parser, { delayMs: els.slow.checked ? 450 : 0 });
}
function submitDirective(text) {
  text = (text ?? els.directIn.value).trim(); if (!text) return;
  const r = director.direct(text, t);
  if (r.ok) { els.directIn.value = ''; if (/replay|重播|重来/.test(text) || r.labels?.[0] === t('dirReplay')) { els.beatLog.textContent = ''; } }
  else toast(r.noShow ? t('dirNoShow') : t('dirNone'));
}

els.start.onclick = startShow;
els.pause.onclick = () => (director.paused ? director.resume() : director.pause());
els.stop.onclick = () => { director.stop(); els.pause.disabled = true; els.stop.disabled = true; };
els.replay.onclick = () => { els.beatLog.textContent = ''; els.ttfl.textContent = '— ms'; if (!director.replay()) toast(t('dirNoShow')); };
els.directBtn.onclick = () => submitDirective();
els.directIn.addEventListener('keydown', e => { if (e.key === 'Enter') submitDirective(); });
els.mute.checked = localStorage.getItem('theater.mute') === '1'; speech.muted = els.mute.checked;
els.mute.onchange = () => { speech.muted = els.mute.checked; localStorage.setItem('theater.mute', els.mute.checked ? '1' : '0'); if (speech.muted) speech.cancel(); };

// export / import
$('exportBtn').onclick = () => {
  const blob = new Blob([JSON.stringify(director.exportDoc(), null, 2)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'performance.json'; a.click(); URL.revokeObjectURL(a.href);
  toast(t('exported'));
};
$('importBtn').onclick = () => $('importFile').click();
$('importFile').onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  const txt = await f.text(); e.target.value = '';
  try { const d = JSON.parse(txt); if (!Array.isArray(d.beats)) throw 0; els.script.value = JSON.stringify(d); toast(t('imported')); startShow(); }
  catch { toast(t('importBad')); }
};

// AI key — localStorage only, never logged
els.key.value = localStorage.getItem(KEY_STORAGE) ? '••••••••' : '';
els.model.value = localStorage.getItem(MODEL_STORAGE) || '';
$('keySave').onclick = () => {
  const v = els.key.value.trim();
  if (v && !/^•+$/.test(v)) localStorage.setItem(KEY_STORAGE, v);
  if (els.model.value.trim()) localStorage.setItem(MODEL_STORAGE, els.model.value.trim()); else localStorage.removeItem(MODEL_STORAGE);
  els.key.value = localStorage.getItem(KEY_STORAGE) ? '••••••••' : '';
  renderParsers(); if (parsers.ai.available()) els.parserSel.value = 'ai'; toast(t('keySaved'));
};
$('keyClear').onclick = () => { localStorage.removeItem(KEY_STORAGE); els.key.value = ''; renderParsers(); toast(t('keyCleared')); };

// language
$('langBtn').onclick = () => setLang(getLang() === 'zh' ? 'en' : 'zh');
onLang(() => { showSet(); refreshStartLabel(); els.beatLog.querySelectorAll('li i').forEach(fillTag); renderSamples(); renderViews(); renderParsers(); els.status.textContent = t(...lastStatus); els.pause.textContent = t(director.paused ? 'resume' : 'pause'); });
applyStatic(); refreshStartLabel(); showSet(); renderSamples(); renderViews(); renderParsers();
els.script.value = samples[0].text[getLang()];
setStatus('stIdle');

// main loop
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.3, (now - last) / 1000); last = now;
  director.update(dt);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.__theater = { director, theater }; // handy for debugging / automated tests
