// Synthesised audience sound (WebAudio, no assets): laugh murmur, gasp whoosh, sigh, applause.
// The AudioContext is created lazily: only after a user gesture AND only when the first sound is requested
// (which the Director does from the 2nd beat on), so nothing here touches the first-beat path.
import { speech } from './speech.js';

let ctx = null, master = null, noise = null, unlocked = false, lastAt = 0;
const AC = typeof window !== 'undefined' ? (window.AudioContext || window.webkitAudioContext) : null;

if (typeof window !== 'undefined') {
  const un = () => { unlocked = true; ctx?.resume?.(); };
  window.addEventListener('pointerdown', un, { passive: true }); window.addEventListener('keydown', un, { passive: true });
}

function ensure() {
  if (!AC || !unlocked) return false;
  if (!ctx) {
    try {
      ctx = new AC(); master = ctx.createGain(); master.gain.value = 0.55; master.connect(ctx.destination);
      const len = ctx.sampleRate, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      noise = buf;
    } catch { ctx = null; return false; }
  }
  if (ctx.state === 'suspended') ctx.resume?.().catch?.(() => {});
  return ctx.state !== 'closed';
}
// one filtered noise burst: [start, dur, freq0, freq1, Q, peakGain, type]
function burst(at, dur, f0, f1, q, peak, type = 'bandpass') {
  const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true; src.playbackRate.value = 0.8 + Math.random() * 0.4;
  const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(f0, at); f.frequency.exponentialRampToValueAtTime(Math.max(40, f1), at + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, at); g.gain.linearRampToValueAtTime(peak, at + dur * 0.3); g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  src.connect(f); f.connect(g); g.connect(master); src.start(at, Math.random()); src.stop(at + dur + 0.05);
}
const SOUNDS = {
  gasp() { const t = ctx.currentTime + 0.02; burst(t, 0.42, 700, 2600, 1.2, 0.22); burst(t + 0.05, 0.3, 1500, 3200, 0.8, 0.08, 'highpass'); },
  laugh(level = 0.5) { const t = ctx.currentTime + 0.02, n = 5 + Math.round(level * 5); for (let i = 0; i < n; i++) burst(t + i * 0.13 + Math.random() * 0.05, 0.11, 600 + Math.random() * 500, 400 + Math.random() * 300, 3, 0.07 + level * 0.06); },
  murmur() { const t = ctx.currentTime + 0.02; burst(t, 1.1, 380, 300, 2, 0.08); burst(t + 0.2, 0.9, 520, 420, 2.5, 0.05); },
  applause(sec = 4) { const t = ctx.currentTime + 0.05; for (let i = 0; i < sec * 22; i++) burst(t + Math.random() * sec, 0.04 + Math.random() * 0.05, 1800 + Math.random() * 2500, 900 + Math.random() * 600, 0.9, 0.05 * Math.sin(Math.min(1, (i / (sec * 22))) * Math.PI) + 0.02, 'bandpass'); },
};
const EMO_SOUND = { gasp: 'gasp', afraid: 'gasp', happy: 'laugh', sad: 'murmur', tender: 'murmur' };

export const audio = {
  /** the house reacts to an emotion; throttled so a flurry of directives doesn't pile up */
  react(emo, level = 0.5) {
    const k = EMO_SOUND[emo]; if (!k || speech.muted) return;
    const now = performance.now(); if (now - lastAt < 1400) return; lastAt = now;
    if (!ensure()) return; SOUNDS[k](level);
  },
  applause(sec = 4) { if (speech.muted || !ensure()) return; SOUNDS.applause(sec); },
};
