// Web Speech wrapper. Never blocks the show: if there is no voice (headless Chrome, etc.)
// speak() returns false and the director falls back to word-count timing.
const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
let voices = [];
function load() { try { voices = synth ? synth.getVoices() : []; } catch { voices = []; } }
if (synth) { load(); synth.addEventListener?.('voiceschanged', load); }

export const speech = {
  muted: false,
  get supported() { return !!synth; },
  get hasVoices() { return voices.length > 0; },
  estimateMs(text, rate = 1) {
    const cjk = (text.match(/[㐀-鿿]/g) || []).length;
    const words = text.replace(/[㐀-鿿]/g, ' ').split(/\s+/).filter(Boolean).length;
    return Math.max(900, (cjk * 240 + words * 370 + 350) / Math.max(0.4, rate));
  },
  pickVoice(lang, idx) {
    const pre = lang.slice(0, 2).toLowerCase();
    let list = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith(pre));
    if (!list.length) return null;
    const local = list.filter(v => v.localService); if (local.length > 1) list = local;
    return list[idx % list.length];
  },
  /** returns true if an utterance was queued; cb.onstart/onend are best-effort (the director has timeouts) */
  speak(text, { lang, pitch = 1, rate = 1, volume = 1, voiceIndex = 0 }, cb = {}) {
    if (!synth || this.muted) return false;
    load();
    if (!voices.length) return false;
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang; u.pitch = Math.max(0.1, Math.min(2, pitch)); u.rate = Math.max(0.5, Math.min(2, rate)); u.volume = volume;
      const v = this.pickVoice(lang, voiceIndex); if (v) u.voice = v;
      u.onstart = () => cb.onstart?.(); u.onend = () => cb.onend?.(); u.onerror = () => cb.onend?.();
      synth.speak(u);
      return true;
    } catch { return false; }
  },
  cancel() { try { synth?.cancel(); } catch { /* ignore */ } },
  pause() { try { synth?.pause(); } catch { /* ignore */ } },
  resume() { try { synth?.resume(); } catch { /* ignore */ } },
};
