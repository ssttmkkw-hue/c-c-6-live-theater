// The Director consumes a stream of events from any parser and performs them live.
// It never waits for the stream to finish: the first playable beat starts immediately,
// later beats are queued as they arrive. Live directives mutate (a) a style state that is
// applied to every beat when it is popped from the queue and (b) the currently performing actor.
import * as THREE from 'three';
import { Actor } from './theater/actor.js';
import { castFor, langOf } from './cast.js';
import { speech } from './speech.js';
import { parseDirective } from './directives.js';
import { altEnding, parseLocal } from './parsers/local.js';
import { inferEmotion, inferGesture, inferIntensity } from './parsers/infer.js';

const HOMES = [[-2.4, 0.3], [2.4, 0.3], [0, -1.8], [-4.4, -0.8], [4.4, -0.8], [-1.2, 1.6], [1.2, 1.6], [0, 1.9]];
const EMO_GESTURE = { angry: 'angry', sad: 'sad', proud: 'proud', contemplative: 'think', gasp: 'gasp', afraid: 'gasp', happy: 'laugh', tender: 'talk', neutral: 'talk' };
const EMO_LIGHT = { angry: '#ff9a8a', sad: '#9ab8ff', proud: '#ffd27a', afraid: '#c9b8ff', happy: '#fff0a0', tender: '#ffd0e0', gasp: '#e8f4ff', contemplative: '#d8e6ff', neutral: '#fff1d0' };
const REACT = { sad: 'sad', gasp: 'gasp', afraid: 'afraid', happy: 'happy', tender: 'tender' };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const newStyle = () => ({ intensity: 0, emotion: null, emoLeft: 0, rate: 1, audience: 0 });

export class Director {
  constructor(theater, hooks = {}) {
    this.theater = theater; this.hooks = hooks;
    this.actors = new Map(); this.queue = []; this.performed = []; this.cur = null;
    this.token = 0; this.paused = false; this.state = 'idle';
    this.streamDone = true; this.style = newStyle(); this.seq = 0; this.beatNo = 0;
    this.skipEnding = false; this.pendingAlt = false; this.altVariant = 0; this.t0 = 0;
    this.firstLine = false; this.lastSpeakers = []; this.lang = 'zh-CN'; this.actorSpecs = [];
    this.endedAt = 0;
  }
  status(key, ...a) { this.hooks.onStatus?.(key, ...a); }

  // ------------- stream control -------------
  /** parser: {parse(text, ctx)} -> async iterable of events. */
  async start(text, parser, ctx = {}) {
    this.reset(false);
    const token = ++this.token;
    this.t0 = performance.now(); this.firstLine = false; this.tfb = false;
    this.abort = new AbortController();
    this.streamDone = false; this.state = 'parsing'; this.theater.openCurtain(true);
    this.status('stParsing'); this.hooks.onRunning?.(true);
    this.source = { text, parser, ctx };
    let any = false;
    try {
      for await (const ev of parser.parse(text, { ...ctx, signal: this.abort?.signal })) {
        if (token !== this.token) return;
        any = true; this.ingest(ev);
      }
    } catch (e) {
      if (token !== this.token) return;
      if (parser.id !== 'local' && !any) { // AI unavailable -> graceful local fallback
        this.status('stAiFallback');
        try { for await (const ev of parseLocal(text, { delayMs: ctx.delayMs })) { if (token !== this.token) return; this.ingest(ev); } } catch { /* ignore */ }
      }
    }
    if (token !== this.token) return;
    this.streamDone = true;
    this.flushPendingAlt();
  }

  /** Replay what was performed (plus whatever was still queued). */
  replay() {
    const specs = this.actorSpecs.slice();
    const beats = [...this.performed, ...this.queue].map(b => ({ ...b }));
    if (!beats.length) return;
    const parser = { id: 'local', parse: async function* () { for (const a of specs) yield { kind: 'actor', ...a }; for (const b of beats) { yield { kind: 'beat', beat: b }; await 0; } yield { kind: 'end' }; } };
    return this.start('', parser, {});
  }

  reset(keepLog = true) {
    this.token++; speech.cancel(); this.abort?.abort();
    this.queue = []; this.cur = null; this.paused = false; this.style = newStyle();
    this.skipEnding = false; this.pendingAlt = false; this.beatNo = 0; this.endedAt = 0;
    for (const a of this.actors.values()) { this.theater.scene.remove(a.root); }
    this.actors.clear(); this.lastSpeakers = [];
    if (!keepLog) { this.performed = []; this.actorSpecs = []; }
    this.hooks.onSubtitle?.(null); this.theater.applaud(0);
  }
  stop() {
    this.token++; speech.cancel(); this.abort?.abort(); this.cur = null; this.streamDone = true; this.paused = false;
    for (const a of this.actors.values()) { a.setSpeaking(false); a.exit(); }
    this.theater.openCurtain(false); this.state = 'stopped'; this.hooks.onSubtitle?.(null);
    this.status('stStopped'); this.hooks.onRunning?.(false);
  }
  pause() { if (this.state === 'idle' || this.state === 'stopped') return; this.paused = true; speech.pause(); this.status('stPaused'); this.hooks.onPaused?.(true); }
  resume() { this.paused = false; speech.resume(); this.status(this.cur ? 'stPerf' : 'stParsing', this.beatNo); this.hooks.onPaused?.(false); }

  // ------------- ingest -------------
  ingest(ev) {
    if (ev.kind === 'actor') { this.declare(ev); return; }
    if (ev.kind === 'end') return;
    if (ev.kind !== 'beat' || !ev.beat) return;
    const b = { ...ev.beat, id: ++this.seq };
    if (b.speaker) this.ensureActor(b.speaker);
    if (b.ending && this.skipEnding) return; // "change ending" was requested: drop the original ending
    if (b.lang == null && b.line) b.lang = langOf(b.line);
    if (b.emotion == null) b.emotion = inferEmotion(b.line || '');
    if (b.gesture == null) b.gesture = inferGesture(b.line || '', b.emotion, b.id);
    if (b.intensity == null) b.intensity = inferIntensity(b.line || '', b.emotion);
    if (b.line) this.lang = b.lang;
    this.queue.push(b);
    this.hooks.onBeatQueued?.(b);
    if (!this.tfb) { this.tfb = true; this.hooks.onMetric?.({ tfb: performance.now() - this.t0 }); this.status('stFirst'); }
    if (!this.cur && !this.paused) this.next(); // start immediately: do not wait for the next frame
  }
  declare(spec) {
    const k = spec.name.toLowerCase();
    if (this.actors.has(k)) return this.actors.get(k);
    const idx = this.actors.size;
    const c = castFor(spec.name, idx);
    const full = { name: spec.name, look: { ...c.look, ...(spec.look || {}) }, voice: { ...c.voice, ...(spec.voice || {}) } };
    const [hx, hz] = HOMES[idx % HOMES.length];
    const a = new Actor(full, idx, { x: hx, z: hz });
    this.theater.scene.add(a.root); this.actors.set(k, a); this.actorSpecs.push(full);
    a.enter(); // walks on from the wings (ghosts materialize) immediately
    this.hooks.onActor?.(a);
    return a;
  }
  ensureActor(name) { return this.actors.get(name.toLowerCase()) || this.declare({ name }); }
  getActor(name) { return name ? this.actors.get(String(name).toLowerCase()) : null; }

  // ------------- performing -------------
  next() {
    if (this.paused || this.cur || this.state === 'stopped') return;
    const raw = this.queue.shift();
    if (!raw) return;
    const beat = this.applyStyle(raw);
    this.beatNo++;
    const actor = this.getActor(beat.speaker);
    const onstage = [...this.actors.values()].filter(a => a.onstage);
    if (actor && !actor.onstage) actor.enter();
    // movement
    this.doMove(actor, beat);
    // look targets: everyone watches the speaker; the speaker looks at their target
    const lookPt = (name) => {
      if (!name || name === 'audience') return () => this.theater.audienceTarget;
      const t = this.getActor(name); if (!t) return () => this.theater.audienceTarget;
      const v = new THREE.Vector3(); return () => { v.set(t.pos.x, 1.5, t.pos.y); return v; };
    };
    for (const a of onstage) {
      if (a === actor) continue;
      if (beat.everyone) { a.setLook(lookPt(beat.lookAt)); a.setEmotion(beat.emotion, beat.intensity); a.setGesture(beat.gesture === 'none' ? 'none' : beat.gesture, 1); }
      else if (actor) a.setLook(lookPt(actor.name));
      if (!beat.everyone) { a.setGesture('none'); a.setSpeaking(false); a.setEmotion(REACT[beat.emotion] || 'neutral', 0.35); }
    }
    if (actor) {
      let lk = beat.lookAt && beat.lookAt !== 'speaker' ? beat.lookAt : (this.lastSpeakers.find(n => n !== actor.name) || 'audience');
      actor.setLook(lookPt(lk));
      actor.setEmotion(beat.emotion, beat.intensity);
      actor.setGesture(beat.gesture, 0.7 + beat.intensity * 0.6);
      actor.setSpeaking(!!beat.line);
      if (beat.with) { const p = this.getActor(beat.with); if (p) { p.setGesture(beat.gesture, 1); p.setEmotion(beat.emotion, beat.intensity); p.setLook(lookPt(actor.name)); } }
      this.lastSpeakers = [actor.name, ...this.lastSpeakers.filter(n => n !== actor.name)].slice(0, 3);
      const hp = actor.headPos(); this.theater.setFocus(new THREE.Vector3(actor.pos.x, hp.y, actor.pos.y), EMO_LIGHT[beat.emotion] || EMO_LIGHT.neutral, 0.8 + beat.intensity * 0.5);
    }
    // timing
    const rate = beat.rateMul || 1;
    const est = beat.line ? speech.estimateMs(beat.line, rate) : (beat.hold ?? (/^enter:/.test(beat.move || '') ? 900 : 1500));
    const c = { beat, actor, t: 0, est, speechDone: false, spoke: false, phase: 'say', pauseMs: (beat.pause ?? 300) / rate, rate };
    this.cur = c; this.state = 'performing';
    if (beat.line && actor) {
      const k = beat.intensity;
      const ok = speech.speak(beat.line, {
        lang: beat.lang || langOf(beat.line), pitch: (actor.voice.pitch || 1) * (0.92 + k * 0.16), rate: (actor.voice.rate || 1) * rate * (0.95 + k * 0.1),
        volume: 0.55 + 0.45 * k, voiceIndex: actor.index,
      }, { onend: () => { if (this.cur === c) c.speechDone = true; } });
      c.spoke = ok;
      if (!this.firstLine) { // THE metric: click on Start -> first line begins
        this.firstLine = true;
        this.hooks.onMetric?.({ ttfl: performance.now() - this.t0 });
      }
    } else if (beat.line && !this.firstLine) { this.firstLine = true; this.hooks.onMetric?.({ ttfl: performance.now() - this.t0 }); }
    this.hooks.onSubtitle?.({ name: actor?.name || '', color: actor?.look.color || '#fff', ghost: actor?.ghost, text: beat.line, direction: beat.direction });
    this.hooks.onBeat?.(beat, this.beatNo);
    this.status('stPerf', this.beatNo);
  }

  doMove(actor, beat) {
    const mv = beat.move || 'stay';
    const clampP = (x, z) => [clamp(x, -5.6, 5.6), clamp(z, -3.3, 2.1)];
    if (mv.startsWith('enter:')) { for (const n of mv.slice(6).split('|')) { const a = this.getActor(n); if (a && !a.onstage) a.enter(); } return; }
    if (!actor || mv === 'stay') return;
    if (mv === 'enter') { if (!actor.onstage || actor.leaving) actor.enter(); return; }
    if (mv === 'exit') { actor.exit(); return; }
    const h = actor.home;
    if (mv === 'center') actor.walkTo(...clampP((actor.index % 2 ? 0.7 : -0.7), 0.2));
    else if (mv === 'left') actor.walkTo(...clampP(-4.2, h.z));
    else if (mv === 'right') actor.walkTo(...clampP(4.2, h.z));
    else if (mv === 'upstage') actor.walkTo(...clampP(h.x, -3));
    else if (mv === 'downstage') actor.walkTo(...clampP(h.x, 1.9));
    else if (mv.startsWith('toward:') || mv.startsWith('away:')) {
      const t = this.getActor(mv.slice(mv.indexOf(':') + 1)); if (!t || t === actor) return;
      let dx = actor.pos.x - t.pos.x, dz = actor.pos.y - t.pos.y; const d = Math.hypot(dx, dz) || 1; dx /= d; dz /= d;
      const toward = mv.startsWith('toward');
      const want = toward ? (beat.gesture === 'hug' ? 0.85 : 1.5) : Math.max(d, 1) + 2.0;
      if (toward && d < want + 0.2) return;
      actor.walkTo(...clampP(t.pos.x + dx * want, t.pos.y + dz * want));
    }
  }

  applyStyle(raw) {
    const s = this.style, b = { ...raw };
    b.intensity = clamp((b.intensity ?? 0.5) + s.intensity, 0.05, 1);
    if (b.line || b.speaker) {
      if (s.emotion && s.emoLeft > 0 && b.gesture !== 'hug') {
        b.emotion = s.emotion; s.emoLeft--;
        if (!b.gesture || b.gesture === 'talk' || b.gesture === 'none') b.gesture = EMO_GESTURE[s.emotion] || 'talk';
      }
      if (s.audience > 0 && b.line) { b.lookAt = 'audience'; s.audience--; }
    }
    b.rateMul = (b.rateMul || 1) * s.rate;
    return b;
  }

  update(dt) {
    // sub-step the simulation so slow frames (software GL) don't stretch the show
    const n = Math.max(1, Math.ceil(dt / 0.04));
    for (let i = 0; i < n; i++) this.step(dt / n);
    this.theater.update(dt);
  }
  step(dt) {
    for (const a of this.actors.values()) a.update(dt, 0);
    if (!this.paused && this.state !== 'stopped') {
      const c = this.cur;
      if (c) {
        c.t += dt * 1000;
        if (c.phase === 'say') {
          const real = c.spoke;
          const done = real ? (c.speechDone && c.t > 250) || c.t > c.est * 1.8 + 2500 : c.t >= c.est;
          if (done || (!c.beat.line && c.t >= c.est)) {
            if (c.beat.line && real && !c.speechDone) speech.cancel();
            c.phase = 'pause'; c.t = 0; c.actor?.setSpeaking(false);
            this.performed.push(this.stripRuntime(c.beat));
          }
        } else if (c.t >= c.pauseMs) { this.cur = null; this.next(); }
      } else if (this.queue.length) this.next();
      else if (this.streamDone && (this.state === 'performing' || this.state === 'parsing')) this.finish();
    }
  }
  stripRuntime(b) { const { id, rateMul, ...rest } = b; return rest; }

  finish() {
    this.state = 'finished'; this.endedAt = performance.now();
    for (const a of this.actors.values()) if (a.onstage) { a.setLook(() => this.theater.audienceTarget); if (!a.ghost && !a.kneelState) a.setGesture('bow'); a.setEmotion('happy', 0.6); a.setSpeaking(false); }
    this.theater.setFocus(new THREE.Vector3(0, 1.5, 0), '#fff1d0', 1.1);
    this.theater.applaud(5); this.theater.openCurtain(true);
    this.hooks.onSubtitle?.({ name: '', text: '', direction: '', end: true });
    this.status('stDone'); this.hooks.onRunning?.(false, true);
    setTimeout(() => { if (this.state === 'finished') this.theater.openCurtain(false); }, 5200);
  }

  // ------------- live directing -------------
  /** returns {ok, labels[], replay?} */
  direct(text, tr) {
    const ops = parseDirective(text);
    if (!ops.length) return { ok: false };
    if (ops.some(o => o.type === 'replay')) { this.replay(); return { ok: true, labels: [tr('dirReplay')] }; }
    if (this.state === 'idle' || this.state === 'stopped') return { ok: false, noShow: true };
    const labels = [];
    for (const op of ops) {
      switch (op.type) {
        case 'mood': {
          this.style.emotion = op.emotion; this.style.emoLeft = 8;
          this.style.intensity = clamp(this.style.intensity + op.delta, -0.5, 0.6);
          labels.push(tr(op.label));
          // current actor reacts right now
          const c = this.cur;
          if (c && c.actor) { c.actor.setEmotion(op.emotion, clamp((c.beat.intensity ?? 0.5) + op.delta, 0.1, 1)); c.actor.setGesture(EMO_GESTURE[op.emotion] || 'talk', 1.2); this.theater.setFocus(null, EMO_LIGHT[op.emotion], 1.1); }
          break;
        }
        case 'rate': this.style.rate = clamp(this.style.rate * op.mul, 0.55, 2); labels.push(tr(op.label)); break;
        case 'reset': this.style = newStyle(); labels.push(tr('dirReset')); break;
        case 'audience': {
          this.style.audience = 3; labels.push(tr('dirAudience'));
          for (const a of this.actors.values()) if (a.onstage) a.setLook(() => this.theater.audienceTarget);
          if (this.cur?.beat) this.cur.beat.lookAt = 'audience';
          break;
        }
        case 'hug': {
          const [a, b] = this.pair(); if (!a) break;
          this.injectFront({ speaker: a.name, line: '', direction: tr('dirHug'), emotion: 'tender', gesture: 'hug', move: 'toward:' + b.name, lookAt: b.name, with: b.name, intensity: 0.7, hold: 2600, pause: 600 });
          labels.push(tr('dirHug')); break;
        }
        case 'ending': this.changeEnding(); labels.push(tr('dirEnding')); break;
        case 'line': {
          const a = this.getActor(op.speaker) || this.actors.values().next().value; if (!a) break;
          const emo = inferEmotion(op.text);
          this.injectFront({ speaker: a.name, line: op.text, emotion: emo, gesture: inferGesture(op.text, emo, 1), move: 'stay', lookAt: this.lastSpeakers.find(n => n !== a.name) || 'audience', intensity: inferIntensity(op.text, emo), lang: langOf(op.text), pause: 350 });
          labels.push(a.name + ': ' + op.text.slice(0, 18)); break;
        }
        default: break;
      }
    }
    this.hooks.onDirective?.(labels);
    this.status('stDirective', labels.join(' + '));
    return { ok: true, labels };
  }
  pair() {
    const names = [...this.lastSpeakers, ...[...this.actors.values()].map(a => a.name)];
    const uniq = [...new Set(names)].map(n => this.getActor(n)).filter(a => a && a.onstage);
    return uniq.length >= 2 ? [uniq[0], uniq[1]] : [];
  }
  injectFront(beat) {
    const b = { ...beat, id: ++this.seq, lang: beat.lang || langOf(beat.line || beat.direction || '') };
    this.queue.unshift(b); this.hooks.onBeatQueued?.(b, true);
    if (this.state === 'finished') { this.state = 'performing'; this.theater.openCurtain(true); this.hooks.onRunning?.(true); }
    if (!this.cur && !this.paused) this.next();
  }
  changeEnding() {
    // drop queued original ending beats; any future streamed ending beats are skipped too
    const dropped = this.queue.filter(b => b.ending).map(b => b.id);
    this.queue = this.queue.filter(b => !b.ending);
    if (dropped.length) this.hooks.onBeatsDropped?.(dropped);
    this.skipEnding = true; this.pendingAlt = true;
    if (this.streamDone) this.flushPendingAlt();
  }
  flushPendingAlt() {
    if (!this.pendingAlt) return;
    this.pendingAlt = false;
    const [a, b] = this.pair().length ? this.pair() : [...this.actors.values()];
    if (!a || !b) return;
    const beats = altEnding(a.name, b.name, this.lang, this.altVariant++);
    for (const beat of beats) { const nb = { ...beat, id: ++this.seq }; this.queue.push(nb); this.hooks.onBeatQueued?.(nb, false); }
    this.skipEnding = false;
    if (this.state === 'finished') { this.state = 'performing'; this.theater.openCurtain(true); this.hooks.onRunning?.(true); }
    if (!this.cur && !this.paused) this.next();
  }

  // ------------- export -------------
  exportDoc() {
    return {
      format: 'ai-live-theater/performance', version: 1, lang: this.lang,
      actors: this.actorSpecs, beats: [...this.performed, ...this.queue.map(b => this.stripRuntime(b))],
    };
  }
}
