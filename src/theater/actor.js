// Procedural actor rig: jointed boxes/capsules/spheres, animated every frame from
// (emotion posture) + (gesture overlay) + (idle breathing) + (talk) + (walk cycle).
import * as THREE from 'three';

const TAU = Math.PI * 2;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const angDiff = (a, b) => { let d = (b - a) % TAU; if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU; return d; };
const SKIN = ['#f1c9a5', '#d9a47a', '#b9835a', '#8a5a3a', '#f4d6bd'];

// ---- emotion postures:  chestX, headX, headZ, arms [shoulderX, outward, elbow] ----
const EMO = {
  neutral:       { chestX: 0.03, headX: 0, headZ: 0, L: [0.05, 0.1, -0.15], R: [0.05, 0.1, -0.15], breath: 1, shake: 0, bounce: 0 },
  angry:         { chestX: 0.16, headX: 0.14, headZ: 0, L: [-0.5, 0.35, -1.2], R: [-0.5, 0.35, -1.2], breath: 2.2, shake: 0.02, bounce: 0 },
  sad:           { chestX: 0.3, headX: 0.42, headZ: 0.1, L: [0.1, 0.05, -0.1], R: [0.1, 0.05, -0.1], breath: 0.6, shake: 0, bounce: 0 },
  proud:         { chestX: -0.12, headX: -0.14, headZ: 0, L: [0.15, 0.75, -1.5], R: [0.15, 0.75, -1.5], breath: 1, shake: 0, bounce: 0 },
  contemplative: { chestX: 0.06, headX: 0.12, headZ: 0.13, L: [-0.5, 0.0, -1.3], R: [-0.95, 0.0, -2.0], breath: 0.8, shake: 0, bounce: 0 },
  gasp:          { chestX: -0.2, headX: -0.18, headZ: 0, L: [-0.5, 0.65, -0.5], R: [-0.5, 0.65, -0.5], breath: 2.5, shake: 0.006, bounce: 0 },
  happy:         { chestX: -0.02, headX: -0.08, headZ: 0.05, L: [-0.15, 0.45, -0.6], R: [-0.15, 0.45, -0.6], breath: 1.3, shake: 0, bounce: 0.05 },
  afraid:        { chestX: 0.16, headX: 0.16, headZ: 0, L: [-0.7, 0.2, -1.7], R: [-0.7, 0.2, -1.7], breath: 2.4, shake: 0.016, bounce: 0 },
  tender:        { chestX: 0.06, headX: 0.1, headZ: 0.16, L: [-0.4, 0.22, -0.7], R: [-0.4, 0.22, -0.7], breath: 0.8, shake: 0, bounce: 0 },
};
export const EMOTIONS = Object.keys(EMO);

// ---- gestures: return overrides given time-in-gesture t and strength a (0.6..1.4) ----
const GEST = {
  none: () => ({}),
  talk: (t, a) => ({
    R: [-0.55 + 0.35 * a * Math.sin(t * 2.3), 0.3, -0.9 + 0.4 * a * Math.sin(t * 3.1 + 1)],
    L: [-0.3 + 0.2 * a * Math.sin(t * 1.9 + 2), 0.25, -0.6 + 0.3 * a * Math.sin(t * 2.7)],
  }),
  point: (t, a) => ({ R: [-1.45 + 0.07 * Math.sin(t * 3), -0.05, -0.08], chestX: 0.07 * a, headX: -0.03 }),
  bow: t => { const k = Math.sin(clamp(t / 1.9, 0, 1) * Math.PI); return { chestX: 1.05 * k, headX: 0.25 * k, L: [0.25 * k, 0.1, -0.1], R: [0.25 * k, 0.1, -0.1] }; },
  kneel: () => ({ R: [-0.55, 0.05, -1.7], L: [0.1, 0.1, -0.2], chestX: 0.12, headX: 0.25, kneel: 1 }),
  stand: () => ({ kneel: 0 }),
  gasp: (t, a) => { const k = t < 1 ? 1 : 0.4; const j = t < 0.3 ? 1 : 0; return { chestX: -0.15 - 0.2 * j * a, headX: -0.2, L: [-0.9 * k, 0.8 * k, -0.4], R: [-0.9 * k, 0.8 * k, -0.4] }; },
  angry: (t, a) => ({ chestX: 0.12, L: [-0.9, 0.4, -1.3], R: [-1.0 + 0.3 * a * Math.sin(t * 9), 0.2, -1.2 + 0.2 * Math.sin(t * 9)], headX: 0.15, stomp: 1 }),
  sad: () => ({ R: [-1.15, -0.1, -2.1], chestX: 0.3, headX: 0.5 }),
  proud: () => ({ chestX: -0.14, headX: -0.15, L: [0.15, 0.8, -1.55], R: [0.15, 0.8, -1.55] }),
  think: () => ({ R: [-0.95, 0.0, -2.0], L: [-0.5, 0.0, -1.3], headZ: 0.14, headX: 0.12 }),
  hug: () => ({ chestX: 0.1, L: [-1.2, -0.1, -0.9], R: [-1.2, -0.1, -0.9], headZ: 0.12 }),
  wave: (t, a) => ({ R: [-0.1, 2.3, -0.5 + 0.5 * a * Math.sin(t * 7)], headZ: 0.08 }),
  shrug: () => ({ L: [0, 0.55, -1.25], R: [0, 0.55, -1.25], headZ: 0.12 }),
  laugh: (t, a) => ({ chestX: -0.1 + 0.1 * a * Math.sin(t * 14), headX: -0.2, L: [-0.3, 0.3, -0.8], R: [-0.3, 0.3, -0.8], bob: 0.02 }),
};
export const GESTURES = Object.keys(GEST);

const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0.05, ...o });
const mesh = (geo, m, p = [0, 0, 0]) => { const x = new THREE.Mesh(geo, m); x.position.set(...p); x.castShadow = true; return x; };
const cap = (r, l) => new THREE.CapsuleGeometry(r, l, 4, 10);

export class Actor {
  constructor(spec, index, home) {
    this.name = spec.name; this.index = index;
    this.look = spec.look || {}; this.voice = spec.voice || {};
    this.ghost = this.look.style === 'ghost';
    this.home = { x: home.x, z: home.z };
    this.pos = new THREE.Vector2(0, 0);
    this.target = null; this.onstage = false; this.yaw = 0;
    this.emotion = 'neutral'; this.intensity = 0.5;
    this.gestureName = 'none'; this.gestureT = 0; this.gestureA = 1;
    this.speaking = false; this.talkT = 0; this.walkPh = Math.random() * 6; this.t = Math.random() * 10;
    this.fade = this.ghost ? 0 : 1; this.fadeTarget = this.fade;
    this.kneelState = 0;
    this.lookGetter = null; this.headYaw = 0;
    this.cur = { chestX: 0, headX: 0, headZ: 0, L: [0, 0.1, 0], R: [0, 0.1, 0], kneel: 0, walk: 0, shake: 0, bounce: 0, breath: 1 };
    this.mats = [];
    this.build(spec);
    this.root.visible = false;
  }

  build() {
    const g = this.ghost, c = new THREE.Color(this.look.color || '#888');
    const skinHex = g ? '#e8f4ff' : this.look.accessory === 'antenna' ? '#9aa7ad' : SKIN[this.index % SKIN.length];
    const ghostOpts = g ? { transparent: true, opacity: 0.55, emissive: '#7fb8ff', emissiveIntensity: 0.55, depthWrite: false } : {};
    const M = (col, o) => { const m = mat(col, { ...ghostOpts, ...o }); if (g) m.userData.base = m.opacity; this.mats.push(m); return m; };
    const cloth = M(g ? '#cfe6ff' : c.getStyle());
    const dark = M(g ? '#a9c9ee' : c.clone().multiplyScalar(0.55).getStyle());
    const skin = M(skinHex);
    const black = new THREE.MeshStandardMaterial({ color: g ? '#10203a' : '#151515', roughness: 0.4 });
    this.eyeMat = black; if (this.look.accessory === 'antenna') { black.color.set('#00e5ff'); black.emissive = new THREE.Color('#00bcd4'); }

    this.root = new THREE.Group();
    this.body = new THREE.Group(); this.body.position.y = 0.97; this.root.add(this.body);
    this.body.add(mesh(new THREE.BoxGeometry(0.34, 0.16, 0.2), dark, [0, 0, 0]));
    this.spine = new THREE.Group(); this.spine.position.y = 0.04; this.body.add(this.spine);
    this.spine.add(mesh(cap(0.19, 0.3), cloth, [0, 0.31, 0]));
    // belt
    this.spine.add(mesh(new THREE.BoxGeometry(0.4, 0.05, 0.25), dark, [0, 0.06, 0]));

    this.neck = new THREE.Group(); this.neck.position.y = 0.7; this.spine.add(this.neck);
    this.neck.add(mesh(new THREE.SphereGeometry(0.175, 20, 16), skin, [0, 0.19, 0]));
    for (const sx of [-1, 1]) this.neck.add(mesh(new THREE.SphereGeometry(0.026, 8, 6), black, [sx * 0.065, 0.22, 0.155]));
    this.mouth = mesh(new THREE.BoxGeometry(0.08, 0.025, 0.02), M('#6b1d1d'), [0, 0.1, 0.165]);
    this.neck.add(this.mouth);
    this.neck.add(mesh(new THREE.BoxGeometry(0.03, 0.03, 0.04), skin, [0, 0.16, 0.18])); // nose
    this.accessory(this.look.accessory, M, cloth);

    const arm = (sx) => {
      const sh = new THREE.Group(); sh.position.set(sx * 0.27, 0.6, 0); this.spine.add(sh);
      sh.add(mesh(new THREE.SphereGeometry(0.075, 10, 8), cloth));
      sh.add(mesh(cap(0.058, 0.2), cloth, [0, -0.17, 0]));
      const el = new THREE.Group(); el.position.y = -0.35; sh.add(el);
      el.add(mesh(cap(0.052, 0.18), skin, [0, -0.14, 0]));
      el.add(mesh(new THREE.SphereGeometry(0.06, 10, 8), skin, [0, -0.3, 0]));
      return { sh, el };
    };
    this.armL = arm(1); this.armR = arm(-1); // actor's left is +x when facing +z

    const leg = (sx) => {
      const hp = new THREE.Group(); hp.position.set(sx * 0.1, -0.05, 0); this.body.add(hp);
      hp.add(mesh(cap(0.075, 0.28), dark, [0, -0.22, 0]));
      const kn = new THREE.Group(); kn.position.y = -0.46; hp.add(kn);
      kn.add(mesh(cap(0.065, 0.28), dark, [0, -0.21, 0]));
      kn.add(mesh(new THREE.BoxGeometry(0.12, 0.07, 0.24), black, [0, -0.46, 0.05]));
      return { hp, kn };
    };
    this.legL = leg(1); this.legR = leg(-1);

    if (g) { // ghosts have no legs: a tapering shroud instead
      for (const l of [this.legL, this.legR]) l.hp.visible = false;
      this.body.add(mesh(new THREE.ConeGeometry(0.3, 0.9, 14, 1, true), cloth, [0, -0.45, 0]));
      this.light = new THREE.PointLight('#8fc4ff', 1.2, 6); this.light.position.y = 1.2; this.root.add(this.light);
    }
    this.root.scale.setScalar(0.92);
    this.root.traverse(o => { if (o.isMesh) o.castShadow = true; });
    // name tag
    this.root.userData.actor = this;
  }

  accessory(kind, M, cloth) {
    const gold = M('#e8b64c', { metalness: 0.6, roughness: 0.35 });
    const hairM = M(['#2a1a10', '#5a3a1a', '#1c1c1c', '#8a6a2a'][this.index % 4]);
    const h = this.neck;
    const add = (m, p) => { m.position.set(...p); h.add(m); };
    switch (kind) {
      case 'crown': case 'crown-hair': {
        const r = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.16, 0.07, 16, 1, true), gold); r.position.set(0, 0.36, 0); r.castShadow = true; h.add(r);
        for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; const s = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.1, 5), gold); s.position.set(Math.cos(a) * 0.15, 0.43, Math.sin(a) * 0.15); h.add(s); }
        if (kind === 'crown-hair') add(mesh(new THREE.BoxGeometry(0.34, 0.5, 0.12), hairM), [0, 0.0, -0.12]);
        break;
      }
      case 'hair': { const m = mesh(new THREE.SphereGeometry(0.19, 16, 10, 0, TAU, 0, Math.PI * 0.55), hairM); add(m, [0, 0.2, -0.01]); break; }
      case 'hair-long': { const m = mesh(new THREE.SphereGeometry(0.19, 16, 10, 0, TAU, 0, Math.PI * 0.55), hairM); add(m, [0, 0.2, -0.01]); add(mesh(new THREE.BoxGeometry(0.34, 0.45, 0.1), hairM), [0, 0.0, -0.13]); break; }
      case 'hat': { add(mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.025, 20), cloth), [0, 0.34, 0]); add(mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.2, 16), cloth), [0, 0.45, 0]); break; }
      case 'helmet': { add(mesh(new THREE.SphereGeometry(0.2, 16, 10, 0, TAU, 0, Math.PI * 0.55), M('#8a9097', { metalness: 0.7, roughness: 0.4 })), [0, 0.22, 0]); break; }
      case 'hood': { add(mesh(new THREE.SphereGeometry(0.2, 16, 12, 0, TAU, 0, Math.PI * 0.7), cloth), [0, 0.2, -0.02]); break; }
      case 'jester': {
        const a = M('#e74c3c'), b = M('#f1c40f');
        const c1 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.32, 8), a); c1.position.set(-0.12, 0.45, 0); c1.rotation.z = 0.7; c1.castShadow = true; h.add(c1);
        const c2 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.32, 8), b); c2.position.set(0.12, 0.45, 0); c2.rotation.z = -0.7; c2.castShadow = true; h.add(c2);
        add(mesh(new THREE.SphereGeometry(0.19, 12, 8, 0, TAU, 0, Math.PI * 0.45), M('#2e86c1')), [0, 0.22, 0]);
        break;
      }
      case 'antenna': { add(mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), M('#555')), [0, 0.46, 0]); add(mesh(new THREE.SphereGeometry(0.035, 8, 6), M('#e74c3c', { emissive: '#e74c3c', emissiveIntensity: 0.8 })), [0, 0.58, 0]); break; }
      default: break;
    }
  }

  // ---------- API ----------
  homePos() { return this.home; }
  place(x, z) { this.pos.set(x, z); this.root.position.set(x, 0, z); }
  wingFor(x) { return { x: x >= 0 ? 9.2 : -9.2, z: -1.2 }; }
  enter() {
    this.onstage = true; this.root.visible = true; this.leaving = false;
    if (this.ghost) { this.place(this.home.x, this.home.z); this.fadeTarget = 1; this.yaw = 0; }
    else { const w = this.wingFor(this.home.x); this.place(w.x, w.z); this.yaw = Math.atan2(this.home.x - w.x, 0.001); this.walkTo(this.home.x, this.home.z); }
  }
  exit() {
    this.leaving = true;
    if (this.ghost) { this.fadeTarget = 0; return; }
    const w = this.wingFor(this.pos.x); this.walkTo(w.x, w.z);
  }
  walkTo(x, z) { this.target = new THREE.Vector2(x, z); this.kneelState = 0; }
  get moving() { return !!this.target; }
  setLook(getter) { this.lookGetter = getter; }
  setEmotion(e, intensity) { if (EMO[e]) { if (e !== this.emotion && (e === 'gasp' || e === 'afraid')) this.startle = 1; this.emotion = e; } if (intensity != null) this.intensity = intensity; }
  setGesture(name, strength = 1) {
    if (!GEST[name]) name = 'none';
    if (name === 'kneel') this.kneelState = 1; else if (name === 'stand') this.kneelState = 0;
    this.gestureName = name; this.gestureT = 0; this.gestureA = strength;
  }
  setSpeaking(v) { this.speaking = v; }
  headPos(out = new THREE.Vector3()) { return this.neck.getWorldPosition(out).add(new THREE.Vector3(0, 0.25, 0)); }

  update(dt, time) {
    if (!this.onstage) return;
    this.t += dt; this.gestureT += dt; if (this.speaking) this.talkT += dt;
    const cur = this.cur;
    // ---- locomotion ----
    let speed = 0;
    if (this.target) {
      const dx = this.target.x - this.pos.x, dz = this.target.y - this.pos.y, d = Math.hypot(dx, dz);
      if (d < 0.08) { this.target = null; if (this.leaving) { this.onstage = this.ghost; this.root.visible = this.ghost; } }
      else {
        speed = Math.min(d * 3, 1.9);
        this.pos.x += dx / d * speed * dt; this.pos.y += dz / d * speed * dt;
        this.desiredYaw = Math.atan2(dx, dz);
      }
    }
    // ---- facing: movement dir while walking (except ghosts), else toward look target ----
    let lookYaw = null;
    if (this.lookGetter) { const p = this.lookGetter(); if (p) lookYaw = Math.atan2(p.x - this.pos.x, p.z - this.pos.y); }
    const face = speed > 0.3 && !this.ghost && !(this.leaving && false) ? this.desiredYaw : (lookYaw ?? this.yaw);
    const turn = angDiff(this.yaw, face);
    this.yaw += clamp(turn, -5 * dt, 5 * dt) * (Math.abs(turn) > 0.02 ? 1 : 0) + (Math.abs(turn) <= 0.02 ? turn : 0);
    const headTarget = lookYaw != null ? clamp(angDiff(this.yaw, lookYaw), -0.8, 0.8) : 0;
    this.headYaw = lerp(this.headYaw, headTarget, 1 - Math.exp(-8 * dt));

    // ---- target pose ----
    const k = clamp(0.35 + this.intensity * 0.95, 0.35, 1.3);
    const base = EMO[this.emotion], n = EMO.neutral;
    const mix = (a, b) => a + (b - a) * k;
    const tg = {
      chestX: mix(n.chestX, base.chestX), headX: mix(n.headX, base.headX), headZ: mix(n.headZ, base.headZ),
      L: base.L.map((v, i) => mix(n.L[i], v)), R: base.R.map((v, i) => mix(n.R[i], v)),
      kneel: this.kneelState, shake: base.shake * k, bounce: base.bounce * k, breath: base.breath,
    };
    const amp = 0.55 + this.intensity * 0.9;
    let gt = GEST[this.gestureName] || GEST.none;
    // idle "talk" overlay while speaking even if the beat's gesture is 'none'
    const g = this.speaking || this.gestureName !== 'none' ? gt(this.gestureT, amp) : {};
    const talkG = this.speaking && this.gestureName === 'none' ? GEST.talk(this.talkT, amp) : {};
    const ov = { ...talkG, ...g };
    for (const kk of ['chestX', 'headX', 'headZ']) if (ov[kk] != null) tg[kk] = kk === 'headZ' ? ov[kk] : lerp(tg[kk], ov[kk], 0.9);
    if (ov.L) tg.L = ov.L; if (ov.R) tg.R = ov.R;
    if (ov.kneel != null) tg.kneel = ov.kneel;
    // the arms: gestures only when not walking; walking blends in a swing
    const walkW = this.ghost ? 0 : clamp(speed / 1.2, 0, 1);
    cur.walk = lerp(cur.walk, walkW, 1 - Math.exp(-10 * dt));
    this.walkPh += speed * dt * 4.2;
    const sw = Math.sin(this.walkPh);
    if (cur.walk > 0.02) {
      const w = cur.walk;
      tg.L = [lerp(tg.L[0], sw * 0.55, w), lerp(tg.L[1], 0.08, w), lerp(tg.L[2], -0.25, w)];
      tg.R = [lerp(tg.R[0], -sw * 0.55, w), lerp(tg.R[1], 0.08, w), lerp(tg.R[2], -0.25, w)];
    }
    // smoothing
    const s = 1 - Math.exp(-11 * dt);
    cur.chestX = lerp(cur.chestX, tg.chestX, s); cur.headX = lerp(cur.headX, tg.headX, s); cur.headZ = lerp(cur.headZ, tg.headZ, s);
    for (let i = 0; i < 3; i++) { cur.L[i] = lerp(cur.L[i], tg.L[i], s); cur.R[i] = lerp(cur.R[i], tg.R[i], s); }
    cur.kneel = lerp(cur.kneel, tg.kneel, 1 - Math.exp(-5 * dt));
    cur.shake = tg.shake; cur.bounce = tg.bounce; cur.breath = lerp(cur.breath, tg.breath, 1 - Math.exp(-3 * dt));
    if (this.startle) { this.startle = Math.max(0, this.startle - dt * 3); }

    // ---- apply to joints ----
    const T = this.t;
    const breath = Math.sin(T * 1.8 * cur.breath) * 0.012 * cur.breath;
    const trem = cur.shake ? Math.sin(T * 38) * cur.shake : 0;
    const startle = this.startle || 0;
    this.spine.rotation.x = cur.chestX - startle * 0.25 + breath * 2;
    this.spine.rotation.y = Math.sin(T * 0.7) * 0.03 + (this.speaking ? Math.sin(T * 2.1) * 0.05 : 0) + this.headYaw * 0.25;
    this.spine.rotation.z = Math.sin(T * 0.5 + this.index) * 0.015 + trem;
    this.spine.scale.set(1 + breath, 1 + breath * 1.5, 1 + breath);
    const nod = this.speaking ? Math.sin(this.talkT * 5.5) * 0.04 + Math.sin(this.talkT * 3.1) * 0.03 : 0;
    this.neck.rotation.set(cur.headX + nod, this.headYaw * 0.75 + (Math.sin(T * 0.4 + this.index) * 0.04), cur.headZ, 'YXZ');
    const setArm = (a, v, side) => { a.sh.rotation.set(v[0] + trem * 2, 0, side * (v[1] + Math.sin(T * 1.8 + side) * 0.012), 'XYZ'); a.el.rotation.x = v[2]; };
    setArm(this.armL, cur.L, 1); setArm(this.armR, cur.R, -1);

    // legs: walk cycle + kneel
    const kn = cur.kneel, w = cur.walk;
    if (!this.ghost) {
      const lift = (ph) => Math.max(0, Math.cos(ph)) * 0.95;
      this.legL.hp.rotation.x = -sw * 0.6 * w - kn * 0.15;
      this.legR.hp.rotation.x = sw * 0.6 * w - kn * 0.15;
      this.legL.kn.rotation.x = lift(this.walkPh) * w + kn * 1.55;
      this.legR.kn.rotation.x = lift(this.walkPh + Math.PI) * w + kn * 1.55;
    }
    const stomp = ov.stomp && this.speaking ? Math.abs(Math.sin(T * 6)) * 0.03 : 0;
    const bob = Math.abs(sw) * 0.035 * w + cur.bounce * Math.abs(Math.sin(T * 6)) + (ov.bob ? Math.abs(Math.sin(T * 14)) * ov.bob : 0) - stomp;
    let y = 0.97 - kn * 0.47 + bob;
    if (this.ghost) y += 0.28 + Math.sin(T * 1.3) * 0.08;
    this.body.position.y = y;

    // mouth
    const open = this.speaking ? 0.4 + Math.abs(Math.sin(this.talkT * 13) * Math.sin(this.talkT * 5.3)) * 1.6 : 0.3;
    this.mouth.scale.set(1 - (this.speaking ? 0.2 : 0), open, 1);

    // ghost fade / flicker
    if (this.ghost) {
      this.fade = lerp(this.fade, this.fadeTarget, 1 - Math.exp(-2.2 * dt));
      const fl = 0.85 + Math.sin(T * 9) * 0.07 + Math.sin(T * 23) * 0.05;
      for (const m of this.mats) m.opacity = (m.userData.base ?? 0.55) * this.fade * fl;
      if (this.light) this.light.intensity = 1.4 * this.fade * fl;
      if (this.fadeTarget === 0 && this.fade < 0.02) { this.root.visible = false; this.onstage = false; }
    }

    this.root.position.set(this.pos.x, 0, this.pos.y);
    this.root.rotation.y = this.yaw;
  }
}
