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
  neutral:       { chestX: 0.03, headX: 0, headZ: 0, L: [-0.05, 0.2, -0.4], R: [-0.05, 0.2, -0.4], breath: 1, shake: 0, bounce: 0 },
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

// ---- faces: brow lift / brow tilt (+ = inner end down), eye openness, mouth curve (+ smile / - frown), mouth width ----
const FACE = {
  neutral:       { lift: 0, tilt: 0, eye: 1, curve: 0.05, w: 1 },
  angry:         { lift: -0.006, tilt: 0.55, eye: 0.78, curve: -0.7, w: 1.1 },
  sad:           { lift: 0.012, tilt: -0.5, eye: 0.82, curve: -0.8, w: 0.8 },
  proud:         { lift: 0.012, tilt: 0.1, eye: 0.85, curve: 0.35, w: 1 },
  contemplative: { lift: 0.008, tilt: -0.1, eye: 0.9, curve: -0.1, w: 0.8 },
  gasp:          { lift: 0.034, tilt: 0, eye: 1.3, curve: 0, w: 0.7, open: 0.9 },
  happy:         { lift: 0.012, tilt: 0.05, eye: 0.8, curve: 1, w: 1.3 },
  afraid:        { lift: 0.03, tilt: -0.4, eye: 1.25, curve: -0.5, w: 0.9, open: 0.4 },
  tender:        { lift: 0.006, tilt: -0.2, eye: 0.85, curve: 0.6, w: 0.9 },
};

// ---- gestures: return overrides given time-in-gesture t and strength a (0.6..1.4) ----
const GEST = {
  none: () => ({}),
  // big alternating hand arcs + a lean/twist; read clearly from the back of the house
  talk: (t, a) => ({
    R: [-0.75 + 0.55 * a * Math.sin(t * 2.3) - 0.2 * a * Math.max(0, Math.sin(t * 4.1)), 0.45 + 0.25 * a * Math.sin(t * 1.7), -1.0 + 0.55 * a * Math.sin(t * 3.1 + 1)],
    L: [-0.45 + 0.4 * a * Math.sin(t * 1.9 + 2), 0.4 + 0.2 * a * Math.sin(t * 2.3 + 1), -0.8 + 0.45 * a * Math.sin(t * 2.7)],
    twist: 0.12 * Math.sin(t * 1.1),
  }),
  point: (t, a) => ({ R: [-1.5 + 0.1 * Math.sin(t * 3.2) - 0.12 * Math.max(0, Math.sin(t * 5)), -0.12, -0.05], L: [0.1, 0.25, -0.5], chestX: 0.08 * a, headX: -0.03, twist: -0.28 }),
  bow: t => { const k = Math.sin(clamp(t / 2.6, 0, 1) * Math.PI); return { chestX: 1.1 * k, headX: 0.25 * k, L: [0.25 * k, 0.1, -0.1], R: [0.25 * k, 0.1, -0.1] }; },
  kneel: () => ({ R: [-0.55, 0.05, -1.7], L: [0.1, 0.1, -0.2], chestX: 0.12, headX: 0.25, kneel: 1 }),
  stand: () => ({ kneel: 0 }),
  gasp: (t, a) => { const k = t < 1 ? 1 : 0.75; const j = t < 0.3 ? 1 : 0; return { chestX: -0.15 - 0.2 * j * a, headX: -0.2, L: [-0.95 * k, 0.9 * k, -0.4], R: [-0.95 * k, 0.9 * k, -0.4] }; },
  angry: (t, a) => ({ chestX: 0.12, L: [-0.9, 0.4, -1.3], R: [-1.05 + 0.4 * a * Math.sin(t * 9), 0.2, -1.2 + 0.25 * Math.sin(t * 9)], headX: 0.15, stomp: 1, twist: -0.1 }),
  sad: () => ({ R: [-1.15, -0.1, -2.1], chestX: 0.3, headX: 0.5 }),
  proud: () => ({ chestX: -0.14, headX: -0.15, L: [0.15, 0.85, -1.55], R: [0.15, 0.85, -1.55] }),
  think: () => ({ R: [-0.95, 0.0, -2.0], L: [-0.5, 0.0, -1.3], headZ: 0.14, headX: 0.12 }),
  hug: () => ({ chestX: 0.1, L: [-1.2, -0.1, -0.9], R: [-1.2, -0.1, -0.9], headZ: 0.12 }),
  wave: (t, a) => ({ R: [-0.1, 2.3, -0.5 + 0.5 * a * Math.sin(t * 7)], headZ: 0.08 }),
  shrug: () => ({ L: [0, 0.6, -1.3], R: [0, 0.6, -1.3], headZ: 0.14, chestX: -0.04 }),
  laugh: (t, a) => ({ chestX: -0.1 + 0.1 * a * Math.sin(t * 14), headX: -0.2, L: [-0.3, 0.3, -0.8], R: [-0.3, 0.3, -0.8], bob: 0.02 }),
};
export const GESTURES = Object.keys(GEST);

const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0.05, ...o });
const mesh = (geo, m, p = [0, 0, 0]) => { const x = new THREE.Mesh(geo, m); x.position.set(...p); x.castShadow = true; return x; };
let _blob = null;
const blobMat = () => _blob ??= (() => { // tiny procedural radial falloff, no canvas
  const N = 32, d = new Uint8Array(N * N * 4);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const r = Math.hypot(x - 15.5, y - 15.5) / 16; const a = Math.max(0, 1 - r); d.set([0, 0, 0, Math.round(255 * a * a)], (y * N + x) * 4); }
  const t = new THREE.DataTexture(d, N, N); t.needsUpdate = true;
  return new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0.55, depthWrite: false });
})();
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
    this.cur = { chestX: 0, headX: 0, headZ: 0, L: [0, 0.1, 0], R: [0, 0.1, 0], kneel: 0, walk: 0, shake: 0, bounce: 0, breath: 1, twist: 0, shift: 0, emph: 0, nod: 0 };
    this.remain = 0; this.nodAt = 1.5 + Math.random() * 2; this.fid = null; this.fidAt = 3 + Math.random() * 4; this.cape = null;
    this.mats = [];
    this.pulseV = 0; this.pulseAge = 9; this.mouthKick = 0; this.blinkAt = 1.5 + Math.random() * 3; this.blinkT = 9; this.eyeX = 0; this.eyeY = 0; this.sacX = 0; this.sacY = 0; this.sacAt = 1;
    this.face = { lift: 0, tilt: 0, eye: 1, curve: 0.05, w: 1, open: 0 }; this.capeP = [0, 0, 0];
    this.build(spec);
    this.root.visible = false;
  }

  build() {
    const g = this.ghost, c = new THREE.Color(this.look.color || '#888');
    const skinHex = g ? '#e8f4ff' : this.look.accessory === 'antenna' ? '#9aa7ad' : SKIN[this.index % SKIN.length];
    const ghostOpts = g ? { transparent: true, opacity: 0.55, emissive: '#7fb8ff', emissiveIntensity: 0.55, depthWrite: false } : {};
    const M = (col, o) => { const m = mat(col, { ...ghostOpts, ...o }); if (g) m.userData.base = m.opacity; this.mats.push(m); return m; };
    if (!g) { const hsl = {}; c.getHSL(hsl); if (hsl.l < 0.42) c.setHSL(hsl.h, Math.max(hsl.s, 0.32), 0.42); } // never let a costume vanish into the wings
    const lit = o => ({ emissive: c.clone().multiplyScalar(0.22).getStyle(), emissiveIntensity: 1, ...o });
    const cloth = M(g ? '#cfe6ff' : c.getStyle(), g ? {} : lit());
    const dark = M(g ? '#a9c9ee' : c.clone().multiplyScalar(0.62).getStyle(), g ? {} : lit({ emissive: c.clone().multiplyScalar(0.14).getStyle() }));
    const trim = M(g ? '#ffffff' : c.clone().lerp(new THREE.Color('#fff4d8'), 0.65).getStyle(), g ? {} : { emissive: '#3a3020', emissiveIntensity: 1 });
    const skin = M(skinHex);
    const black = new THREE.MeshStandardMaterial({ color: g ? '#10203a' : '#151515', roughness: 0.4 });

    this.root = new THREE.Group();
    this.body = new THREE.Group(); this.body.position.y = 0.97; this.root.add(this.body);
    this.body.add(mesh(new THREE.BoxGeometry(0.34, 0.16, 0.2), dark, [0, 0, 0]));
    this.spine = new THREE.Group(); this.spine.position.y = 0.04; this.body.add(this.spine);
    this.spine.add(mesh(cap(0.19, 0.3), cloth, [0, 0.31, 0]));
    // belt
    this.spine.add(mesh(new THREE.BoxGeometry(0.4, 0.05, 0.25), trim, [0, 0.06, 0]));
    this.spine.add(mesh(new THREE.BoxGeometry(0.1, 0.07, 0.03), trim, [0, 0.06, 0.13])); // buckle
    this.spine.add(mesh(new THREE.BoxGeometry(0.42, 0.045, 0.26), trim, [0, 0.62, 0]));   // collar / shoulder line
    if (this.look.cape) { // cape: three hinged panels that lag behind the body, so it bends and swings
      this.cape = new THREE.Group(); this.cape.position.set(0, 0.62, -0.17); this.spine.add(this.cape);
      this.capeJ = []; let parent = this.cape;
      for (let i = 0; i < 3; i++) {
        const j = new THREE.Group(); j.position.y = i ? -0.3 : 0; parent.add(j);
        j.add(mesh(new THREE.BoxGeometry(0.5 + i * 0.04, 0.3, 0.035), i % 2 ? cloth : dark, [0, -0.15, -0.02]));
        if (i === 2) j.add(mesh(new THREE.BoxGeometry(0.56, 0.045, 0.05), trim, [0, -0.3, -0.02]));
        this.capeJ.push(j); parent = j;
      }
    }

    this.neck = new THREE.Group(); this.neck.position.y = 0.7; this.spine.add(this.neck);
    this.neck.add(mesh(new THREE.SphereGeometry(0.175, 20, 16), skin, [0, 0.19, 0]));
    // face: sclera + tracking pupils (emissive for ghost/antenna), brows, an open-mouth blob plus a smile/frown arc
    const glowEye = g || this.look.accessory === 'antenna';
    const scl = glowEye ? new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: g ? '#bfe3ff' : '#00e5ff', emissiveIntensity: 1.1, roughness: 0.3 }) : new THREE.MeshStandardMaterial({ color: '#fafaf5', roughness: 0.35 });
    this.eyeMat = scl; this.eyes = []; this.brows = [];
    const browM = M(g ? '#cfe6ff' : ['#2a1a10', '#3a2616', '#1c1c1c', '#5a3a1a'][this.index % 4]);
    for (const sx of [-1, 1]) {
      const eg = new THREE.Group(); eg.position.set(sx * 0.066, 0.215, 0.138); this.neck.add(eg);
      const sc = new THREE.Mesh(new THREE.SphereGeometry(0.047, 12, 10), scl); sc.scale.z = 0.7; eg.add(sc);
      const pu = new THREE.Mesh(new THREE.SphereGeometry(0.026, 10, 8), black); pu.scale.z = 0.5; pu.position.z = 0.03; eg.add(pu);
      this.eyes.push({ g: eg, pu });
      const br = mesh(new THREE.BoxGeometry(0.075, 0.015, 0.02), browM, [sx * 0.066, 0.285, 0.142]); br.castShadow = false; br.userData.sx = sx; this.neck.add(br); this.brows.push(br);
    }
    this.mouth = mesh(new THREE.SphereGeometry(0.032, 10, 8), M('#4a1010'), [0, 0.098, 0.15]); this.mouth.scale.set(1, 0.3, 0.4); this.mouth.castShadow = false;
    this.neck.add(this.mouth);
    this.smile = mesh(new THREE.TorusGeometry(0.04, 0.0075, 6, 14, Math.PI), M(g ? '#a9c9ee' : '#7a2a2a'), [0, 0.12, 0.158]); this.smile.castShadow = false;
    this.neck.add(this.smile);
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
      const sg = new THREE.CylinderGeometry(0.24, 0.44, 0.95, 20, 6, true);
      const skirt = mesh(sg, cloth, [0, -0.5, 0]); skirt.material = cloth.clone(); skirt.material.side = THREE.DoubleSide; this.mats.push(skirt.material); skirt.material.userData.base = cloth.opacity;
      this.skirt = { geo: sg, base: Float32Array.from(sg.attributes.position.array) };
      this.body.add(skirt);
      this.light = new THREE.PointLight('#8fc4ff', 1.2, 6); this.light.position.y = 1.2; this.root.add(this.light);
    }
    this.blob = new THREE.Mesh(new THREE.CircleGeometry(0.5, 16), blobMat()); this.blob.rotation.x = -Math.PI / 2; this.blob.position.y = 0.014; this.blob.renderOrder = 1; this.root.add(this.blob);
    this.root.scale.setScalar(1.04);
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
      case 'hair': { const m = mesh(new THREE.SphereGeometry(0.19, 16, 10, 0, TAU, 0, Math.PI * 0.55), hairM); m.rotation.x = -0.45; add(m, [0, 0.21, -0.03]); break; }
      case 'hair-long': { const m = mesh(new THREE.SphereGeometry(0.19, 16, 10, 0, TAU, 0, Math.PI * 0.55), hairM); m.rotation.x = -0.45; add(m, [0, 0.21, -0.03]); add(mesh(new THREE.BoxGeometry(0.34, 0.45, 0.1), hairM), [0, 0.0, -0.13]); break; }
      case 'hat': { add(mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.025, 20), cloth), [0, 0.34, 0]); add(mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.2, 16), cloth), [0, 0.45, 0]); break; }
      case 'helmet': { const m = mesh(new THREE.SphereGeometry(0.2, 16, 10, 0, TAU, 0, Math.PI * 0.5), M('#8a9097', { metalness: 0.7, roughness: 0.4 })); m.rotation.x = -0.4; add(m, [0, 0.23, -0.03]); break; }
      case 'hood': { const m = mesh(new THREE.SphereGeometry(0.2, 16, 12, 0, TAU, 0, Math.PI * 0.68), cloth); m.rotation.x = -0.6; add(m, [0, 0.2, -0.045]); break; }
      case 'jester': {
        const a = M('#e74c3c'), b = M('#f1c40f');
        const c1 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.32, 8), a); c1.position.set(-0.12, 0.45, 0); c1.rotation.z = 0.7; c1.castShadow = true; h.add(c1);
        const c2 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.32, 8), b); c2.position.set(0.12, 0.45, 0); c2.rotation.z = -0.7; c2.castShadow = true; h.add(c2);
        { const m = mesh(new THREE.SphereGeometry(0.19, 12, 8, 0, TAU, 0, Math.PI * 0.42), M('#2e86c1')); m.rotation.x = -0.4; add(m, [0, 0.23, -0.03]); }
        break;
      }
      case 'antenna': { add(mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2), M('#555')), [0, 0.46, 0]); add(mesh(new THREE.SphereGeometry(0.035, 8, 6), M('#e74c3c', { emissive: '#e74c3c', emissiveIntensity: 0.8 })), [0, 0.58, 0]); break; }
      default: break;
    }
  }

  // ---------- API ----------
  homePos() { return this.home; }
  place(x, z) { this.pos.set(x, z); this.root.position.set(x, 0, z); }
  wingFor(x) { return { x: x >= 0 ? 7.1 : -7.1, z: -1.2 }; }
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
  nod() { this.nodAge = 0; }
  setSpeaking(v) { if (v && !this.speaking) { this.pulseAge = 9; this.talkT = 0; } this.speaking = v; }
  /** a spoken word landed (real TTS boundary or the fake word clock): kick arms/chest/nod/jaw. */
  pulse(strength = 1) { this.pulseV = Math.min(1.3, Math.max(this.pulseV, 0.6 + 0.5 * strength)); this.mouthKick = 1; this.pulseAge = 0; }
  headPos(out = new THREE.Vector3()) { return this.neck.getWorldPosition(out).add(new THREE.Vector3(0, 0.25, 0)); }

  update(dt, time) {
    if (!this.onstage) return;
    this.t += dt; this.gestureT += dt; if (this.speaking) this.talkT += dt;
    const cur = this.cur, T = this.t;
    // ---- locomotion (a speaker who is still walking on hurries so the first line is never delivered from the wings) ----
    let speed = 0;
    if (this.target) {
      const dx = this.target.x - this.pos.x, dz = this.target.y - this.pos.y, d = Math.hypot(dx, dz);
      this.remain = d;
      if (d < 0.08) { this.target = null; this.remain = 0; if (this.leaving) { this.onstage = this.ghost; this.root.visible = this.ghost; } }
      else {
        speed = Math.min(d * 3, 1.9 * (this.speaking && !this.leaving ? 1.45 : 1));
        const step = Math.min(d, speed * dt);
        this.pos.x += dx / d * step; this.pos.y += dz / d * step;
        this.desiredYaw = Math.atan2(dx, dz);
      }
    } else this.remain = 0;
    // ---- facing: walking direction while far from the mark, otherwise the look target ("cheated out" 30% toward the house) ----
    let lookYaw = null, lookIsAudience = true;
    if (this.lookGetter) { const p = this.lookGetter(); if (p) { lookYaw = Math.atan2(p.x - this.pos.x, p.z - this.pos.y); lookIsAudience = Math.abs(p.z - 11) < 0.5 && Math.abs(p.y - 1.6) < 0.5; } }
    let bodyYaw = lookYaw;
    if (bodyYaw != null && !lookIsAudience && !this.ghost) bodyYaw += angDiff(bodyYaw, 0) * 0.3;
    const walkFace = speed > 0.3 && !this.ghost && this.remain > 0.9;
    const face = walkFace ? this.desiredYaw : (bodyYaw ?? this.yaw);
    const turn = angDiff(this.yaw, face);
    this.yaw += Math.abs(turn) > 0.02 ? clamp(turn, -5 * dt, 5 * dt) : turn;
    const headTarget = lookYaw != null ? clamp(angDiff(this.yaw, lookYaw), -1.0, 1.0) : 0;
    this.headYaw = lerp(this.headYaw, headTarget, 1 - Math.exp(-8 * dt));

    // ---- listener life: nods, fidgets (only when idle on a mark) ----
    const standing = !this.target && !this.leaving;
    const idle = standing && !this.speaking && this.gestureName === 'none';
    if (!this.speaking && standing) { this.nodAt -= dt; if (this.nodAt <= 0) { this.nodAge = 0; this.nodAt = 2 + Math.random() * 3.5; } }
    this.nodAge = (this.nodAge ?? 9) + dt;
    const nodPulse = this.nodAge < 0.7 ? Math.sin(this.nodAge / 0.7 * Math.PI) * 0.2 : 0;
    if (idle) {
      this.fidAt -= dt;
      if (!this.fid && this.fidAt <= 0) { this.fid = { name: ['think', 'shrug', 'talk', 'talk'][Math.floor(Math.random() * 4)], t: 0, dur: 1.6 + Math.random() * 1.6 }; }
      if (this.fid) { this.fid.t += dt; if (this.fid.t > this.fid.dur) { this.fid = null; this.fidAt = 3 + Math.random() * 5; } }
    } else if (this.fid) { this.fid = null; this.fidAt = 3 + Math.random() * 3; }

    // ---- target pose ----
    const k = clamp(0.35 + this.intensity * 0.95, 0.35, 1.3);
    const base = EMO[this.emotion], n = EMO.neutral;
    const mix = (a, b) => a + (b - a) * k;
    const tg = {
      chestX: mix(n.chestX, base.chestX), headX: mix(n.headX, base.headX), headZ: mix(n.headZ, base.headZ),
      L: base.L.map((v, i) => mix(n.L[i], v)), R: base.R.map((v, i) => mix(n.R[i], v)),
      kneel: this.kneelState, shake: base.shake * k, bounce: base.bounce * k, breath: base.breath, twist: 0,
    };
    const amp = 0.7 + this.intensity * 1.0;
    const gt = GEST[this.gestureName] || GEST.none;
    const g = this.speaking || this.gestureName !== 'none' ? gt(this.gestureT, amp) : {};
    const talkG = this.speaking && this.gestureName === 'none' ? GEST.talk(this.talkT, amp) : {};
    const fidG = this.fid ? GEST[this.fid.name](this.fid.t, 0.55) : {};
    const ov = { ...fidG, ...talkG, ...g };
    for (const kk of ['chestX', 'headX', 'headZ']) if (ov[kk] != null) tg[kk] = kk === 'headZ' ? ov[kk] : lerp(tg[kk], ov[kk], 0.9);
    if (ov.L) tg.L = ov.L; if (ov.R) tg.R = ov.R;
    if (ov.kneel != null) tg.kneel = ov.kneel;
    if (ov.twist != null) tg.twist = ov.twist;
    // vocal emphasis: while speaking, every phrase peak pushes the arms/torso a little further (also on held poses like point/proud)
    this.pulseAge += dt; this.pulseV *= Math.exp(-5.5 * dt); this.mouthKick *= Math.exp(-9 * dt);
    const emph = !this.speaking ? 0 : this.pulseAge < 1.6 ? Math.min(1, this.pulseV) : 0.35 * Math.pow(Math.max(0, Math.sin(this.talkT * 3.3 + this.index)), 2);
    if (emph > 0 && this.gestureName !== 'talk' && this.gestureName !== 'none') {
      tg.R = [tg.R[0] - 0.14 * emph * amp, tg.R[1] + 0.05 * emph, tg.R[2] - 0.12 * emph]; tg.L = [tg.L[0] - 0.1 * emph * amp, tg.L[1] + 0.1 * emph, tg.L[2]];
    }
    // arms swing when walking
    const walkW = this.ghost ? 0 : clamp(speed / 1.2, 0, 1);
    cur.walk = lerp(cur.walk, walkW, 1 - Math.exp(-10 * dt));
    this.walkPh += speed * dt * 4.2;
    const sw = Math.sin(this.walkPh);
    if (cur.walk > 0.02) {
      const w = cur.walk * (this.speaking ? 0.6 : 1); // talking-while-walking keeps some of the gesture
      tg.L = [lerp(tg.L[0], sw * 0.7, w), lerp(tg.L[1], 0.1, w), lerp(tg.L[2], -0.3, w)];
      tg.R = [lerp(tg.R[0], -sw * 0.7, w), lerp(tg.R[1], 0.1, w), lerp(tg.R[2], -0.3, w)];
    }
    // smoothing
    const s = 1 - Math.exp(-11 * dt);
    cur.chestX = lerp(cur.chestX, tg.chestX, s); cur.headX = lerp(cur.headX, tg.headX, s); cur.headZ = lerp(cur.headZ, tg.headZ, s);
    for (let i = 0; i < 3; i++) { cur.L[i] = lerp(cur.L[i], tg.L[i], s); cur.R[i] = lerp(cur.R[i], tg.R[i], s); }
    cur.kneel = lerp(cur.kneel, tg.kneel, 1 - Math.exp(-5 * dt));
    cur.twist = lerp(cur.twist, tg.twist, 1 - Math.exp(-6 * dt));
    cur.shake = tg.shake; cur.bounce = tg.bounce; cur.breath = lerp(cur.breath, tg.breath, 1 - Math.exp(-3 * dt));
    cur.emph = emph; cur.nod = lerp(cur.nod, nodPulse, 1 - Math.exp(-14 * dt));
    if (this.startle) { this.startle = Math.max(0, this.startle - dt * 3); }
    // weight shift: a slow side-to-side transfer that never fully stops (stronger while standing)
    const idleW = (1 - cur.walk) * (1 - cur.kneel);
    cur.shift = lerp(cur.shift, Math.sin(T * 0.5 + this.index * 2.1) * (this.speaking ? 1.3 : 1), 1 - Math.exp(-2 * dt));
    const sh = cur.shift * idleW;

    // ---- apply to joints ----
    const breath = Math.sin(T * 1.8 * cur.breath) * 0.012 * cur.breath;
    const trem = cur.shake ? Math.sin(T * 38) * cur.shake : 0;
    const startle = this.startle || 0;
    const lean = idle && this.lookGetter && !lookIsAudience ? 0.05 : 0; // listeners lean in toward the speaker
    this.spine.rotation.x = cur.chestX - startle * 0.25 + breath * 2 + lean + cur.emph * 0.07 * amp;
    this.spine.rotation.y = Math.sin(T * 0.7) * 0.04 + cur.twist + this.headYaw * 0.35;
    this.spine.rotation.z = Math.sin(T * 0.5 + this.index) * 0.02 + trem + sh * 0.035;
    this.spine.scale.set(1 + breath, 1 + breath * 1.5, 1 + breath);
    const nod = this.speaking ? Math.sin(this.talkT * 5.5) * 0.05 + Math.sin(this.talkT * 3.1) * 0.04 + cur.emph * 0.08 : cur.nod;
    this.neck.rotation.set(cur.headX + nod, this.headYaw * 0.7 + Math.sin(T * 0.4 + this.index) * 0.05, cur.headZ + (idle ? Math.sin(T * 0.33 + this.index) * 0.04 : 0), 'YXZ');
    const setArm = (a, v, side) => { a.sh.rotation.set(v[0] + trem * 2, 0, side * (v[1] + Math.sin(T * 1.8 + side) * 0.015 + idleW * Math.sin(T * 0.9 + side * 1.7) * 0.03), 'XYZ'); a.el.rotation.x = v[2]; };
    setArm(this.armL, cur.L, 1); setArm(this.armR, cur.R, -1);
    if (this.cape) { // hinged chain: each panel chases the one above with a lag, plus a gentle flutter
      let prev = 0.06 + cur.walk * 0.3 + cur.chestX * 0.25;
      this.cape.rotation.x = prev;
      for (let i = 0; i < 3; i++) {
        const goal = (0.05 + cur.walk * 0.22 + Math.abs(sw) * cur.walk * 0.1) * (i + 1) * 0.6 + Math.sin(T * 1.7 - i * 0.9) * 0.035 * (i + 1) + this.headYaw * 0.05 * i;
        this.capeP[i] = lerp(this.capeP[i], goal, 1 - Math.exp(-(7 - i * 2) * dt));
        this.capeJ[i].rotation.x = this.capeP[i]; this.capeJ[i].rotation.z = Math.sin(T * 1.3 - i) * 0.03 * (i + 1) + cur.shift * 0.02;
      }
    }

    // legs: walk cycle + kneel + stance shift
    const kn = cur.kneel, w = cur.walk;
    if (!this.ghost) {
      const lift = (ph) => Math.max(0, Math.cos(ph)) * 0.95;
      this.legL.hp.rotation.x = -sw * 0.6 * w - kn * 0.15 + Math.max(0, -sh) * 0.1;
      this.legR.hp.rotation.x = sw * 0.6 * w - kn * 0.15 + Math.max(0, sh) * 0.1;
      this.legL.kn.rotation.x = lift(this.walkPh) * w + kn * 1.55 + Math.max(0, -sh) * 0.22;
      this.legR.kn.rotation.x = lift(this.walkPh + Math.PI) * w + kn * 1.55 + Math.max(0, sh) * 0.22;
    }
    const stomp = ov.stomp && this.speaking ? Math.abs(Math.sin(T * 6)) * 0.03 : 0;
    const bob = Math.abs(sw) * 0.04 * w + cur.bounce * Math.abs(Math.sin(T * 6)) + (ov.bob ? Math.abs(Math.sin(T * 14)) * ov.bob : 0) - stomp;
    let y = 0.97 - kn * 0.47 + bob;
    if (this.ghost) { y += 0.28 + Math.sin(T * 1.3) * 0.08; this.body.rotation.z = Math.sin(T * 0.8) * 0.05; this.body.position.x = Math.sin(T * 0.6) * 0.12; }
    else { this.body.position.x = sh * 0.05; this.body.rotation.z = -sh * 0.035; }
    this.body.position.y = y;

    // ---- face: emotion-driven brows / lids / mouth, blinks, tracking pupils ----
    const fc = this.face, ft = FACE[this.emotion] || FACE.neutral, fk = 1 - Math.exp(-9 * dt), fi = clamp(0.4 + this.intensity, 0.4, 1.3);
    fc.lift = lerp(fc.lift, ft.lift * fi, fk); fc.tilt = lerp(fc.tilt, ft.tilt * fi, fk); fc.eye = lerp(fc.eye, 1 + (ft.eye - 1) * fi, fk);
    fc.curve = lerp(fc.curve, ft.curve * fi, fk); fc.w = lerp(fc.w, ft.w, fk); fc.open = lerp(fc.open, (ft.open || 0) * fi, fk);
    this.blinkAt -= dt; if (this.blinkAt <= 0) { this.blinkT = 0; this.blinkAt = 2 + Math.random() * 3.5; if (Math.random() < 0.2) this.blinkAt = 0.35; }
    this.blinkT += dt; const bl = this.blinkT < 0.16 ? Math.sin(this.blinkT / 0.16 * Math.PI) : 0;
    const eo = Math.max(0.06, fc.eye * (1 - bl * 0.95));
    this.sacAt -= dt; if (this.sacAt <= 0) { this.sacAt = 0.6 + Math.random() * 1.8; this.sacX = (Math.random() - 0.5) * 0.35; this.sacY = (Math.random() - 0.5) * 0.25; }
    let ex = 0, ey = 0;
    if (lookYaw != null) {
      const res = angDiff(this.yaw + this.headYaw * 1.05, lookYaw);
      ex = clamp(res / 0.6, -1, 1);
      const lp = this.lookGetter(); if (lp) { const dd = Math.hypot(lp.x - this.pos.x, lp.z - this.pos.y) || 1; ey = clamp((lp.y - 1.6) / dd * 3 + this.neck.rotation.x * -1.5, -1, 1); }
    }
    this.eyeX = lerp(this.eyeX, ex + this.sacX * 0.4, 1 - Math.exp(-14 * dt)); this.eyeY = lerp(this.eyeY, ey + this.sacY * 0.4, 1 - Math.exp(-14 * dt));
    for (const e of this.eyes) { e.g.scale.y = eo; e.pu.position.x = this.eyeX * 0.021; e.pu.position.y = this.eyeY * 0.015 / Math.max(0.5, eo) * 0.8; e.pu.position.z = 0.03 + (1 - Math.abs(this.eyeX) * 0.2) * 0.002; }
    for (const br of this.brows) {
      const sx = br.userData.sx, side = this.emotion === 'contemplative' && sx > 0 ? 0.02 : 0;
      br.position.y = 0.285 + fc.lift + side + (1 - eo) * -0.015 * (eo < 0.5 ? 0 : 1) + bl * -0.012; br.rotation.z = sx * fc.tilt;
    }
    const talk = this.speaking ? 0.22 + this.mouthKick * 1.1 + Math.abs(Math.sin(this.talkT * 11) * Math.sin(this.talkT * 4.7)) * 0.45 : 0;
    const openAmt = clamp(fc.open + talk, 0, 1.6);
    this.mouth.scale.set(0.55 * fc.w + openAmt * 0.12, 0.12 + openAmt * 0.95, 0.4);
    this.mouth.position.y = 0.098 - openAmt * 0.006; this.mouth.visible = openAmt > 0.05;
    this.smile.scale.set(fc.w * 0.95, -fc.curve * 0.55 + (Math.abs(fc.curve) < 0.04 ? 0.05 : 0), 1);
    this.smile.position.y = 0.112 + fc.curve * 0.012 - openAmt * 0.012; this.smile.visible = openAmt < 0.55 && Math.abs(this.smile.scale.y) > 0.02;

    // ghost hem: a travelling wave on the lower rings
    if (this.skirt) {
      const pos = this.skirt.geo.attributes.position, bs = this.skirt.base, N = pos.count;
      for (let i = 0; i < N; i++) {
        const x = bs[i * 3], y = bs[i * 3 + 1], z = bs[i * 3 + 2], low = clamp((0.475 - y) / 0.95, 0, 1), ang = Math.atan2(z, x);
        const wv = 1 + low * low * 0.18 * Math.sin(ang * 5 + T * 2.4 + low * 3);
        pos.array[i * 3] = x * wv; pos.array[i * 3 + 2] = z * wv; pos.array[i * 3 + 1] = y - low * low * 0.07 * (1 + Math.sin(ang * 4 - T * 2.1));
      }
      pos.needsUpdate = true;
    }
    this.blob.scale.setScalar(this.ghost ? 0.9 : 1); this.blob.material = blobMat();

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
