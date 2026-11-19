// The Director consumes a stream of events from any parser and performs them live.
// It never waits for the stream to finish: the first playable beat starts immediately,
// later beats are queued as they arrive. Live directives mutate (a) a style state that is
// applied to every beat when it is popped from the queue and (b) the currently performing actor.
import * as THREE from 'three';
import { Actor } from './theater/actor.js';
import { pickSet } from './theater/sets.js';
import { castFor, langOf } from './cast.js';
import { speech } from './speech.js';
import { parseDirective } from './directives.js';
import { altEnding, parseLocal } from './parsers/local.js';
import { adlib } from './i18n.js';
import { inferEmotion, inferGesture, inferIntensity } from './parsers/infer.js';

const HOMES = [[-2.4, 0.3], [2.4, 0.3], [0, -1.8], [-4.4, -0.8], [4.4, -0.8], [-1.2, 1.6], [1.2, 1.6], [0, 1.9]];
const EMO_GESTURE = { angry: 'angry', sad: 'sad', proud: 'proud', contemplative: 'think', gasp: 'gasp', afraid: 'gasp', happy: 'laugh', tender: 'talk', neutral: 'talk' };
const EMO_LIGHT = { angry: '#ff9a8a', sad: '#9ab8ff', proud: '#ffd27a', afraid: '#c9b8ff', happy: '#fff0a0', tender: '#ffd0e0', gasp: '#e8f4ff', contemplative: '#d8e6ff', neutral: '#fff1d0' };
const REACT = { sad: 'sad', gasp: 'gasp', afraid: 'afraid', happy: 'happy', tender: 'tender' };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
/** fake word clock: cumulative start times (ms) per word, spread over ~90% of the estimated duration; longer words / pauses weigh more */
function wordClock(words, text, est) {
  if (!words.length) return [];
  const wt = words.map(w => { const cjk = /[㐀-鿿]/.test(text[w.i]); return (cjk ? 1 : 0.5 + w.len * 0.18) + (/[,.;:!?，。；：！？、…—]/.test(text[w.i + w.len] || '') ? (cjk ? 1.2 : 1.4) : 0); });
  const tot = wt.reduce((a, b) => a + b, 0), span = est * 0.88; let acc = 120; // short lead-in
  return wt.map(x => { const t = acc; acc += x / tot * span; return t; });
}
const newStyle = () => ({ intensity: 0, emotion: null, emoLeft: 0, rate: 1, audience: 0 });

export class Director {
  constructor(theater, hooks = {}) {
    this.theater = theater; this.hooks = hooks;
    this.actors = new Map(); this.queue = []; this.performed = []; this.cur = null;
    this.token = 0; this.paused = false; this.state = 'idle';
    this.streamDone = true; this.style = newStyle(); this.seq = 0; this.beatNo = 0;
    this.skipEnding = false; this.pendingAlt = false; this.altVariant = 0; this.t0 = 0;
    this.firstLine = false; this.lastSpeakers = []; this.lang = 'zh-CN'; this.actorSpecs = [];
    this.endedAt = 0; this.setId = 'moon'; this.setExplicit = false; this.closeNext = false; this.idleT = 0; this.adN = 0; this.interpretSeq = 0;
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
    this.chooseSet();
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

  /** Pick the set from the idea text / actor names unless a {kind:'scene'} event already chose one. */
  chooseSet(force) {
    if (force) { this.setExplicit = true; } else if (this.setExplicit || this.beatNo > 0) return; // locked once the first beat has been performed
    const names = [...this.actors.values()].map(a => a.name);
    const id = force || pickSet(this.source?.text || '', names) || 'moon';
    if (id === this.setId) return;
    this.setId = this.theater.setSet(id); this.hooks.onSet?.(this.setId);
  }

  /** Replay what was performed (plus whatever was still queued). */
  replay() {
    const specs = this.actorSpecs.slice();
    const beats = [...this.performed, ...this.queue].map(b => ({ ...b }));
    if (!beats.length) return;
    const setId = this.setId;
    const parser = { id: 'local', parse: async function* () { yield { kind: 'scene', set: setId || 'moon' }; for (const a of specs) yield { kind: 'actor', ...a }; for (const b of beats) { yield { kind: 'beat', beat: b }; await 0; } yield { kind: 'end' }; } };
    return this.start('', parser, {});
  }

  reset(keepLog = true) {
    this.token++; speech.cancel(); this.abort?.abort();
    this.queue = []; this.cur = null; this.paused = false; this.style = newStyle();
    this.skipEnding = false; this.pendingAlt = false; this.beatNo = 0; this.endedAt = 0; this.closeNext = false; this.idleT = 0;
    for (const a of this.actors.values()) { this.theater.scene.remove(a.root); }
    this.actors.clear(); this.lastSpeakers = []; this.setExplicit = false; this.source = null;
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
    if (ev.kind === 'scene') { if (ev.set || ev.name) this.chooseSet(ev.set || ev.name); return; }
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
    if (this.beatNo === 0) a.enter(); // cast of the opening: walks on from the wings (ghosts materialize) immediately; later arrivals wait for their enter beat / first line
    this.hooks.onActor?.(a);
    this.chooseSet();
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
    this.idleT = 0; this.idleStage = 0;
    const wasOff = !!actor && !actor.onstage;
    if (actor && !actor.onstage) actor.enter();
    const onstage = [...this.actors.values()].filter(a => a.onstage);
    if (beat.emotion && beat.emotion !== 'neutral') { this.theater.react(beat.emotion, beat.intensity); if (this.beatNo >= 2) this.hooks.onAudience?.(beat.emotion, beat.intensity); }
    // movement
    this.doMove(actor, beat);
    // look targets: everyone watches the speaker; the speaker looks at their target
    const lookPt = n => this.lookPt(n);
    for (const a of onstage) {
      if (a === actor) continue;
      if (beat.everyone) { a.setLook(lookPt(beat.lookAt)); a.setEmotion(beat.emotion, beat.intensity); a.setGesture(beat.gesture === 'none' ? 'none' : beat.gesture, 1); }
      else if (actor) a.setLook(lookPt(actor.name));
      if (!beat.everyone) { a.setGesture('none'); a.setSpeaking(false); a.setEmotion(REACT[beat.emotion] || 'neutral', 0.35); }
    }
    if (actor) {
      let lk = beat.lookAt && beat.lookAt !== 'speaker' ? beat.lookAt : (this.lastSpeakers.find(n => n !== actor.name) || 'audience');
      actor.setLook(lookPt(lk));
      const listener = this.getActor(lk); const lis = listener && listener !== actor && listener.onstage ? listener : null;
      this.theater.cue({ speaker: actor, listener: lis, intensity: beat.intensity, emotion: beat.emotion, close: this.closeNext || !!beat.close, beatNo: this.beatNo, entrance: this.beatNo === 1 || wasOff || /^enter/.test(beat.move || '') });
      this.closeNext = false;
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
    const words = beat.line ? speech.words(beat.line) : [];
    const c = { beat, actor, t: 0, est, speechDone: false, spoke: false, phase: 'say', pauseMs: (beat.pause ?? 300) / rate, rate, words, wi: -1, gotBoundary: false, wClock: wordClock(words, beat.line || '', est) };
    this.cur = c; this.state = 'performing';
    if (beat.line && actor) {
      const k = beat.intensity;
      const ok = speech.speak(beat.line, {
        lang: beat.lang || langOf(beat.line), pitch: (actor.voice.pitch || 1) * (0.92 + k * 0.16), rate: (actor.voice.rate || 1) * rate * (0.95 + k * 0.1),
        volume: 0.55 + 0.45 * k, voiceIndex: actor.index,
      }, {
        onend: () => { if (this.cur === c && c.phase === 'say') c.speechDone = true; },
        onboundary: (ci) => { if (this.cur !== c) return; c.gotBoundary = true; let k = c.words.findIndex(w => ci >= w.i && ci < w.i + w.len); if (k < 0) k = c.words.findIndex(w => w.i >= ci); if (k > c.wi) this.reveal(c, k); },
      });
      c.spoke = ok;
      if (!this.firstLine) { // THE metric: click on Start -> first line begins
        this.firstLine = true;
        this.hooks.onMetric?.({ ttfl: performance.now() - this.t0 });
      }
    } else if (beat.line && !this.firstLine) { this.firstLine = true; this.hooks.onMetric?.({ ttfl: performance.now() - this.t0 }); }
    this.hooks.onSubtitle?.({ name: actor?.name || '', color: actor?.look.color || '#fff', ghost: actor?.ghost, text: beat.line, direction: beat.direction, words });
    this.hooks.onBeat?.(beat, this.beatNo);
    this.status('stPerf', this.beatNo);
  }

  lookPt(name) {
    if (!name || name === 'audience') return () => this.theater.audienceTarget;
    const t = this.getActor(name); if (!t) return () => this.theater.audienceTarget;
    const v = new THREE.Vector3(); return () => { v.set(t.pos.x, 1.5, t.pos.y); return v; };
  }

  /** Push-out only (no pathfinding): actors keep ~0.7 m apart and stay out of prop footprints. */
  avoid() {
    const list = [...this.actors.values()].filter(a => a.onstage && !a.leaving && Math.abs(a.pos.x) < 5.9);
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      if (a.ghost !== b.ghost && (a.fade ?? 1) < 0.3) continue;
      if (this.cur?.beat.gesture === 'hug' && this.cur.beat.with && (a === this.cur.actor || b === this.cur.actor)) continue;
      let dx = b.pos.x - a.pos.x, dz = b.pos.y - a.pos.y; const d = Math.hypot(dx, dz), min = 0.68;
      if (d >= min) continue;
      if (d < 1e-3) { dx = 1; dz = 0; } else { dx /= d; dz /= d; }
      const push = (min - Math.max(d, 1e-3)) * 0.5;
      const ma = a.moving ? 0.4 : 1, mb = b.moving ? 0.4 : 1, k = 1 / (ma + mb);
      a.pos.x -= dx * push * 2 * ma * k; a.pos.y -= dz * push * 2 * ma * k;
      b.pos.x += dx * push * 2 * mb * k; b.pos.y += dz * push * 2 * mb * k;
    }
    const obs = this.theater.sets.obstacles;
    if (obs.length) for (const a of list) for (const o of obs) {
      const r = 0.32, cx = clamp(a.pos.x, o.x0, o.x1), cz = clamp(a.pos.y, o.z0, o.z1);
      let dx = a.pos.x - cx, dz = a.pos.y - cz; const d = Math.hypot(dx, dz);
      if (d >= r) continue;
      if (d < 1e-4) { // centre inside the box: leave through the nearest house-facing side
        const toFront = o.z1 + r - a.pos.y, toL = a.pos.x - (o.x0 - r), toR = o.x1 + r - a.pos.x;
        if (toFront <= Math.min(toL, toR) + 0.6) a.pos.y = o.z1 + r; else if (toL < toR) a.pos.x = o.x0 - r; else a.pos.x = o.x1 + r;
      } else { a.pos.x = cx + dx / d * r; a.pos.y = cz + dz / d * r; }
    }
    for (const a of list) a.root.position.set(a.pos.x, 0, a.pos.y);
  }

  /** during the pause: the next speaker turns toward the current one, listeners nod / react, and the next walk starts early */
  anticipate(c) {
    c.anticip = true;
    const nb = this.queue[0]; if (!nb) return;
    const na = this.getActor(nb.speaker);
    if (c.actor && c.beat.line) for (const a of this.actors.values()) if (a !== c.actor && a.onstage && !a.ghost && Math.random() < 0.6) a.nod?.();
    if (!na || na === c.actor || !na.onstage) return;
    if (c.actor) na.setLook(this.lookPt(c.actor.name));
    if (/^(center|left|right|upstage|downstage|toward:|away:)/.test(nb.move || '') && !na.moving) this.doMove(na, nb);
  }

  /** queue empty while a slow parser is still working: thinking pose, glances, shifts — never dead air */
  idleBusiness(dt) {
    this.idleT += dt;
    const list = [...this.actors.values()].filter(a => a.onstage && !a.leaving);
    if (!list.length) return;
    const stage = this.idleStage || 0;
    const a = this.getActor(this.lastSpeakers[0]) || list[0], b = list.find(x => x !== a);
    if (stage === 0 && this.idleT > 0.9) { this.idleStage = 1; a.setSpeaking(false); a.setGesture('think', 0.8); a.setEmotion('contemplative', 0.45); a.setLook(() => this.theater.audienceTarget); }
    else if (stage === 1 && this.idleT > 2.8) { this.idleStage = 2; if (b) { b.setGesture('shrug', 0.8); b.setLook(this.lookPt(a.name)); } a.setLook(b ? this.lookPt(b.name) : () => this.theater.audienceTarget); }
    else if (stage === 2 && this.idleT > 5.2) { this.idleStage = 3; a.setGesture('none'); if (b) b.setGesture('none'); for (const x of list) x.nod?.(); }
  }

  /** a word of the current line became audible (real TTS boundary or the fake clock): subtitle + gesture impulse */
  reveal(c, k) {
    if (k <= c.wi || !c.words.length) return;
    const lastIdx = k; c.wi = k;
    const w = c.words[k], cjk = /[㐀-鿿]/.test(c.beat.line[w.i]);
    const punct = /[,.;:!?，。；：！？、…—]/.test(c.beat.line[w.i + w.len] || '');
    if (!cjk || k % 2 === 0 || punct) c.actor?.pulse(Math.min(1, 0.35 + w.len * (cjk ? 0.2 : 0.07) + (punct ? 0.35 : 0)) * (0.6 + c.beat.intensity * 0.6));
    this.hooks.onWord?.(lastIdx, w);
  }

  doMove(actor, beat) {
    const mv = beat.move || 'stay';
    const clampP = (x, z) => [clamp(x, -5.6, 5.6), clamp(z, -3.3, 2.1)];
    if (mv.startsWith('enter:')) { for (const n of mv.slice(6).split('|')) { const a = this.getActor(n); if (a && !a.onstage) a.enter(); } return; }
    if (actor && mv === 'stay') { this.nudge(actor, beat); return; }
    if (!actor) return;
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

  /** Don't plant the speaker like a statue: strong beats get a small, motivated step (in on anger, back on fear/sadness, a drift otherwise). */
  nudge(actor, beat) {
    if (!beat.line || !actor.onstage || actor.moving || actor.leaving || actor.ghost || actor.kneelState) return;
    const strong = (beat.intensity ?? 0.5) >= 0.55, k = (beat.id || 0) % 3;
    if (!strong && k !== 0) return;
    const t = beat.lookAt && beat.lookAt !== 'audience' && beat.lookAt !== 'speaker' ? this.getActor(beat.lookAt) : (this.getActor(this.lastSpeakers.find(n => n !== actor.name)));
    const clampP = (x, z) => [clamp(x, -5.4, 5.4), clamp(z, -3.2, 2.0)];
    if (t && t !== actor) {
      let dx = t.pos.x - actor.pos.x, dz = t.pos.y - actor.pos.y; const d = Math.hypot(dx, dz) || 1; dx /= d; dz /= d;
      const back = beat.emotion === 'afraid' || beat.emotion === 'sad' || beat.emotion === 'gasp';
      if (back && d < 5) actor.walkTo(...clampP(actor.pos.x - dx * 0.7, actor.pos.y - dz * 0.7));
      else if (!back && d > 1.7) actor.walkTo(...clampP(actor.pos.x + dx * Math.min(0.8, d - 1.4), actor.pos.y + dz * Math.min(0.8, d - 1.4)));
      else if (k === 0) actor.walkTo(...clampP(actor.pos.x - dz * 0.5, actor.pos.y + dx * 0.25));
    } else actor.walkTo(...clampP(actor.pos.x + (actor.pos.x > 0 ? -0.6 : 0.6), actor.pos.y + 0.3)); // solo: drift toward the light
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
    this.avoid();
    if (this.state === 'performing' || this.state === 'parsing') this.frameShot();
    if (!this.paused && this.state !== 'stopped') {
      const c = this.cur;
      if (c) {
        c.t += dt * 1000;
        if (c.phase === 'say' && c.words.length && (!c.spoke || (!c.gotBoundary && c.t > 700))) { // fake word clock (muted / headless / no boundary events)
          while (c.wi + 1 < c.words.length && c.t >= c.wClock[c.wi + 1]) this.reveal(c, c.wi + 1);
        }
        if (c.phase === 'say') {
          const real = c.spoke;
          const done = real ? (c.speechDone && c.t > 250) || c.t > c.est * 1.8 + 2500 : c.t >= c.est;
          if (done || (!c.beat.line && c.t >= c.est)) {
            if (c.beat.line && real && !c.speechDone) speech.cancel();
            if (c.words.length) this.reveal(c, c.words.length - 1);
            c.phase = 'pause'; c.t = 0; c.actor?.setSpeaking(false);
            this.performed.push(this.stripRuntime(c.beat));
          }
        } else {
          if (!c.anticip && c.t > Math.min(160, c.pauseMs * 0.5)) this.anticipate(c);
          if (c.t >= c.pauseMs) { this.cur = null; this.next(); }
        }
      } else if (this.queue.length) this.next();
      else if (!this.streamDone && this.actors.size) this.idleBusiness(dt);
      else if (this.streamDone && (this.state === 'performing' || this.state === 'parsing')) this.finish();
    }
  }
  /** Tell the camera/spotlight where the speaker and the people around them are *right now* (not where they were at the cue). */
  frameShot() {
    const sp = this.cur?.actor || this.getActor(this.lastSpeakers[0]);
    if (!sp || !sp.onstage) return;
    const pts = [{ x: sp.pos.x, z: sp.pos.y }];
    for (const a of this.actors.values()) if (a !== sp && a.onstage && !a.leaving && !(a.ghost && a.fade < 0.3)) pts.push({ x: a.pos.x, z: a.pos.y });
    this.theater.setShot(pts);
  }
  stripRuntime(b) { const { id, rateMul, ...rest } = b; return rest; }

  finish() {
    this.state = 'finished'; this.endedAt = performance.now();
    for (const a of this.actors.values()) if (a.onstage) { a.setLook(() => this.theater.audienceTarget); if (!a.ghost && !a.kneelState) a.setGesture('bow'); a.setEmotion('happy', 0.6); a.setSpeaking(false); }
    this.theater.cue({ type: 'finish' });
    this.theater.setFocus(new THREE.Vector3(0, 1.5, 0), '#fff1d0', 1.1);
    this.theater.applaud(5); this.hooks.onAudienceApplause?.(4.5); this.theater.openCurtain(true);
    this.hooks.onSubtitle?.({ name: '', text: '', direction: '', end: true });
    this.status('stDone'); this.hooks.onRunning?.(false, true);
    setTimeout(() => { if (this.state === 'finished') this.theater.openCurtain(false); }, 5200);
  }

  // ------------- live directing -------------
  /** returns {ok, labels[], replay?}. Anything non-empty is acted: keyword ops, a "NAME: line", an "enter a guard", or else a stage direction. */
  direct(text, tr) {
    text = (text || '').trim();
    if (!text) return { ok: false, empty: true };
    const ops = parseDirective(text);
    if (ops.some(o => o.type === 'replay')) { this.replay(); return { ok: true, labels: [tr('dirReplay')] }; }
    if (this.state === 'idle' || this.state === 'stopped') return { ok: false, noShow: true };
    const free = !ops.length;
    if (free) ops.push({ type: 'stage', text });
    const labels = this.applyOps(ops, tr);
    this.hooks.onDirective?.(labels);
    this.status('stDirective', labels.join(' + '));
    // Free text was acted at once as a stage direction; if an interpreter (the AI) is configured, it may
    // add structured ops a moment later ("make her hesitate" -> softer + slower). Stale answers are ignored.
    if (free && this.hooks.interpret) {
      const token = this.token, seq = ++this.interpretSeq;
      const cast = [...this.actors.values()].map(a => a.name);
      Promise.resolve(this.hooks.interpret(text, { cast, lang: this.lang })).then(more => {
        if (token !== this.token || seq !== this.interpretSeq || !more?.length) return;
        if (this.state === 'idle' || this.state === 'stopped') return;
        const extra = this.applyOps(more, tr, { quiet: true });
        if (!extra.length) return;
        this.hooks.onDirective?.(extra, { interpreted: true });
        this.status('stDirective', extra.join(' + '));
      }).catch(() => { /* interpreter is best-effort */ });
    }
    return { ok: true, labels };
  }
  /** apply canonical ops (from parseDirective / normalizeOps); quiet: no cut-in ad-lib for moods (used for late AI ops) */
  applyOps(ops, tr, { quiet = false } = {}) {
    const labels = [];
    for (const op of ops) {
      switch (op.type) {
        case 'mood': {
          this.style.emotion = op.emotion; this.style.emoLeft = 8;
          this.style.intensity = clamp(this.style.intensity + op.delta, -0.5, 0.6);
          for (const l of op.labels || [op.label]) labels.push(tr(l));
          if (!quiet) this.moodAdlib(op);
          else if (this.cur?.actor) this.cur.actor.setEmotion(op.emotion, clamp(0.55 + op.delta, 0.3, 1));
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
          this.injectFront({ speaker: a.name, line: '', direction: tr('dirHug'), emotion: 'tender', gesture: 'hug', move: 'toward:' + b.name, lookAt: b.name, with: b.name, intensity: 0.7, hold: 2600, pause: 600 }, { interrupt: true });
          this.theater.react('tender', 0.7);
          labels.push(tr('dirHug')); break;
        }
        case 'ending': this.changeEnding(); labels.push(tr('dirEnding')); break;
        case 'addchar': {
          if (this.actors.has(op.name.toLowerCase())) { labels.push(tr('dirAdd', op.name)); break; }
          const was = this.beatNo; this.beatNo = Math.max(1, this.beatNo); // later arrivals wait in the wings
          const na = this.declare({ name: op.name }); this.beatNo = was;
          const [a] = this.pair();
          const lang = (this.lang || '').startsWith('en') ? 'en' : 'zh';
          this.injectFront({ speaker: na.name, line: adlib('enter', lang, this.adN++), emotion: 'happy', gesture: 'wave', move: 'enter', lookAt: a ? a.name : 'audience', intensity: 0.55, lang, entrance: true, pause: 500 }, { interrupt: true });
          this.theater.react('happy', 0.5);
          labels.push(tr('dirAdd', op.name)); break;
        }
        case 'line': {
          const a = this.getActor(op.speaker) || this.actors.values().next().value; if (!a) break;
          const emo = inferEmotion(op.text);
          this.injectFront({ speaker: a.name, line: op.text, emotion: emo, gesture: inferGesture(op.text, emo, 1), move: 'stay', lookAt: this.lastSpeakers.find(n => n !== a.name) || 'audience', intensity: inferIntensity(op.text, emo), lang: langOf(op.text), pause: 350 }, { interrupt: true });
          labels.push(a.name + ': ' + op.text.slice(0, 18)); break;
        }
        case 'stage': { // free text is never dropped: it becomes an acted stage direction
          const a = this.cur?.actor || this.getActor(this.lastSpeakers[0]) || [...this.actors.values()].find(x => x.onstage); if (!a) break;
          const emo = inferEmotion(op.text), other = this.pair().find(x => x !== a);
          const g = inferGesture(op.text, emo, 3), k = inferIntensity(op.text, emo);
          this.injectFront({ speaker: a.name, line: '', direction: op.text, stage: true, emotion: emo === 'neutral' ? 'contemplative' : emo, gesture: g === 'talk' ? EMO_GESTURE[emo] || 'think' : g, move: 'stay', lookAt: other ? other.name : 'audience', intensity: Math.max(0.5, k), hold: 2600, pause: 400 }, { interrupt: true });
          labels.push(tr('dirStage', op.text.length > 24 ? op.text.slice(0, 24) + '…' : op.text)); break;
        }
        default: break;
      }
    }
    return labels;
  }
  /** a mood directive is heard *now*: cut in with a short ad-lib in that mood, a motivated step, and the house reacts */
  moodAdlib(op) {
    const cur = this.cur?.actor, pair = this.pair();
    const base = cur && cur.onstage ? cur : pair[0]; if (!base) return;
    const other = pair.find(x => x !== base) || null;
    const emo = op.emotion, reactor = (emo === 'afraid' || emo === 'gasp') && other ? other : base, target = reactor === base ? other : base;
    const lang = (this.lang || '').startsWith('en') ? 'en' : 'zh', k = clamp(0.55 + op.delta * 1.2, 0.4, 1);
    const away = emo === 'afraid' || emo === 'sad';
    const inject = { speaker: reactor.name, line: adlib(emo, lang, this.adN++), emotion: emo, gesture: EMO_GESTURE[emo] || 'talk', lookAt: target ? target.name : 'audience', intensity: k, lang, pause: 300,
      move: target && !reactor.ghost ? (away ? 'away:' : 'toward:') + target.name : 'stay', close: emo === 'angry' || emo === 'afraid' || emo === 'gasp' };
    this.injectFront(inject, { interrupt: true });
    this.theater.react(emo, k); this.hooks.onAudience?.(emo, k);
    this.theater.setFocus(null, EMO_LIGHT[emo], 1.1);
  }
  pair() {
    const names = [...this.lastSpeakers, ...[...this.actors.values()].map(a => a.name)];
    const uniq = [...new Set(names)].map(n => this.getActor(n)).filter(a => a && a.onstage);
    return uniq.length >= 2 ? [uniq[0], uniq[1]] : [];
  }
  injectFront(beat, { interrupt = false } = {}) {
    const b = { ...beat, id: ++this.seq, lang: beat.lang || langOf(beat.line || beat.direction || '') };
    this.queue.unshift(b); this.hooks.onBeatQueued?.(b, true);
    if (this.state === 'finished') { this.state = 'performing'; this.theater.openCurtain(true); this.hooks.onRunning?.(true); }
    if (this.paused) return;
    if (this.cur && interrupt) this.interruptCur();
    if (!this.cur) this.next();
  }
  /** cut the current beat short right now (cancels TTS; the stale onend is ignored because it checks this.cur === c) */
  interruptCur() {
    const c = this.cur; if (!c) return;
    if (c.phase === 'say') { if (c.beat.line && c.spoke) speech.cancel(); this.performed.push(this.stripRuntime(c.beat)); }
    c.actor?.setSpeaking(false); c.speechDone = true; c.phase = 'pause'; this.cur = null;
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
