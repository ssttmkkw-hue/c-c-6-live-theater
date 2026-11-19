// The theater: stage, proscenium, curtains, wings, lights, audience seating, player avatar, cameras.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createSets } from './sets.js';

const M = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0.02, ...o });
const box = (w, h, d, m, x, y, z, shadow = true) => {
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z);
  b.castShadow = shadow; b.receiveShadow = true; return b;
};
const lerp = (a, b, t) => a + (b - a) * t;

const angDiff = (a, b) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function createTheater(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#07040a'); scene.fog = new THREE.Fog('#07040a', 28, 60);
  const camera = new THREE.PerspectiveCamera(46, 1.6, 0.1, 120);
  // just behind & above the back row so the gold avatar is a foreground figure watching the stage
  const HOME = { pos: new THREE.Vector3(0, 4.9, 18.2), look: new THREE.Vector3(0, 0.55, -1), fov: 46 };
  camera.position.copy(HOME.pos); camera.lookAt(HOME.look);
  const controls = new OrbitControls(camera, canvas);
  controls.target.copy(HOME.look); controls.enabled = false; controls.enableDamping = true; controls.maxPolarAngle = Math.PI * 0.49; controls.minDistance = 3; controls.maxDistance = 30;

  // ---- floors ----
  const woodM = M('#6b4a2c', { roughness: 0.6 });
  const stage = new THREE.Group(); scene.add(stage);
  stage.add(box(14, 0.9, 7.6, woodM, 0, -0.45, -0.7));
  for (let i = -6; i <= 6; i++) stage.add(box(0.02, 0.005, 7.6, M('#4a3019'), i + 0.5, 0.003, -0.7, false)); // floorboards
  stage.add(box(60, 0.2, 40, M('#2a0d16'), 0, -1.0, 15)); // hall carpet
  // back wall + painted backdrop
  stage.add(box(16, 9, 0.3, M('#15101c'), 0, 4.5, -4.7));
  const sets = createSets(scene, stage); // painted backdrop + floor + props, swapped per show
  // side flats (wings) + masking legs
  const black = M('#0b0810');
  for (const s of [-1, 1]) {
    stage.add(box(0.3, 9, 8, black, s * 7.3, 4.5, -0.7));
    stage.add(box(2.4, 9, 0.2, M('#190d14'), s * 6.1, 4.5, 2.2));
    stage.add(box(2.2, 9, 0.2, M('#190d14'), s * 6.0, 4.5, -2.2));
    stage.add(box(3, 0.02, 7, M('#000'), s * 9, 0.01, -1, false));
  }
  stage.add(box(15, 1.5, 8, black, 0, 9.4, -0.7)); // flies
  // proscenium
  const gold = M('#b88a2c', { metalness: 0.6, roughness: 0.4 });
  const pro = new THREE.Group(); scene.add(pro);
  for (const s of [-1, 1]) {
    pro.add(box(1.5, 9, 1, M('#2b1620'), s * 7.9, 4.5, 3.5));
    pro.add(box(0.2, 9, 1.1, gold, s * 7.15, 4.5, 3.5));
  }
  pro.add(box(17.3, 1.6, 1.2, M('#2b1620'), 0, 8.2, 3.5));
  pro.add(box(14.3, 0.2, 1.3, gold, 0, 7.35, 3.5));
  // valance
  const red = M('#8e1b2b', { roughness: 0.9 });
  for (let i = -7; i <= 7; i++) pro.add(box(1, 0.7 + (i % 2 ? 0.25 : 0), 0.12, red, i * 0.98, 6.95 - (i % 2 ? 0.12 : 0), 3.0));

  // ---- curtain: pleated panels that slide open ----
  const curtain = { L: new THREE.Group(), R: new THREE.Group(), k: 0, target: 0 };
  for (const [grp, s] of [[curtain.L, -1], [curtain.R, 1]]) {
    for (let i = 0; i < 10; i++) {
      const w = 0.72;
      const strip = box(w, 7.1, 0.08, new THREE.MeshStandardMaterial({ color: i % 2 ? '#a31f33' : '#7a1424', roughness: 0.95 }), s * (0.36 + i * 0.7), 3.55, 3.0 + (i % 2) * 0.18);
      grp.add(strip);
    }
    scene.add(grp);
  }

  // ---- lighting ----
  scene.add(new THREE.AmbientLight('#2b2a44', 0.9));
  scene.add(new THREE.HemisphereLight('#6a6a90', '#1a0f10', 0.5));
  const wash = new THREE.DirectionalLight('#ffd9a6', 1.1); wash.position.set(0, 9, 12); wash.target.position.set(0, 0, -1);
  scene.add(wash, wash.target);
  const spot = new THREE.SpotLight('#fff1d0', 220, 22, 0.32, 0.5, 1.6);
  spot.position.set(0, 9.5, 4); spot.castShadow = true; spot.shadow.mapSize.set(768, 768); spot.shadow.bias = -0.0004;
  scene.add(spot, spot.target);
  const rimL = new THREE.PointLight('#5a7bd6', 40, 14), rimR = new THREE.PointLight('#d65a8a', 40, 14);
  rimL.position.set(-6, 5, -3); rimR.position.set(6, 5, -3); scene.add(rimL, rimR);
  // footlights
  for (let i = -6; i <= 6; i++) { const f = box(0.25, 0.14, 0.2, new THREE.MeshStandardMaterial({ color: '#ffd9a0', emissive: '#ffb347', emissiveIntensity: 1.2 }), i * 1.0, 0.07, 2.95, false); scene.add(f); }

  // ---- audience seating ----
  const seatM = M('#6d1d2c'), seatFrame = M('#2a1a1a');
  const rows = 6, rowZ = r => 6.2 + r * 1.25, rowY = r => -0.9 + r * 0.26;
  const seats = [];
  for (let r = 0; r < rows; r++) {
    scene.add(box(18, 0.25 + r * 0.26, 0.9, M('#1d1015'), 0, -0.9 + (0.25 + r * 0.26) / 2 - 0.1, rowZ(r) + 0.2, false));
    for (let i = -7; i <= 7; i++) {
      if (i === 0 && false) continue;
      const x = i * 1.1 + (i > 0 ? 0.35 : i < 0 ? -0.35 : 0);
      const y = rowY(r) + 0.2, z = rowZ(r);
      const g = new THREE.Group(); g.position.set(x, y, z);
      g.add(box(0.8, 0.12, 0.7, seatM, 0, 0.2, 0, false), box(0.8, 0.8, 0.12, seatM, 0, 0.55, 0.32, false), box(0.1, 0.4, 0.7, seatFrame, 0.45, 0.35, 0, false));
      scene.add(g); seats.push({ x, y, z, r, i });
    }
  }
  // NPC audience: varied silhouettes (hair, hats, heights, colours) that turn toward the speaker, react, and clap
  const npcs = [];
  const PLAYER = { r: 4, i: 0 };
  let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const SKINS = ['#f1c9a5', '#d9a47a', '#b9835a', '#8a5a3a', '#f4d6bd'], HAIRS = ['#1a1210', '#3a2616', '#6b4a22', '#a8782f', '#d9d2c4', '#7a2a1a', '#26304a'];
  const shared = {
    head: new THREE.SphereGeometry(0.17, 12, 10), body: new THREE.CapsuleGeometry(0.2, 0.3, 3, 8), arm: new THREE.CapsuleGeometry(0.05, 0.26, 3, 6),
    cap: new THREE.SphereGeometry(0.185, 12, 9, 0, Math.PI * 2, 0, 2.2), big: new THREE.SphereGeometry(0.25, 10, 8), bun: new THREE.SphereGeometry(0.07, 8, 6),
    back: new THREE.BoxGeometry(0.34, 0.4, 0.1), tail: new THREE.CapsuleGeometry(0.045, 0.28, 3, 6), brim: new THREE.BoxGeometry(0.3, 0.025, 0.18),
    hatBrim: new THREE.CylinderGeometry(0.3, 0.3, 0.025, 14), hatTop: new THREE.CylinderGeometry(0.15, 0.17, 0.2, 12), beanie: new THREE.SphereGeometry(0.19, 10, 8, 0, Math.PI * 2, 0, 1.7),
  };
  function makePerson({ cloth, skin, hair, style, scale = 1, width = 1, capCol }) {
    const g = new THREE.Group(), inner = new THREE.Group(); g.add(inner); inner.scale.set(width * scale, scale, width * scale);
    const body = new THREE.Mesh(shared.body, M(cloth)); body.position.y = 0.2; inner.add(body);
    const head = new THREE.Group(); head.position.y = 0.72; inner.add(head);
    const hm = M(hair), sk = M(skin);
    const hd = new THREE.Mesh(shared.head, sk); head.add(hd);
    const add = (geo, m, x, y, z, rx = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.x = rx; head.add(o); return o; };
    switch (style) {
      case 0: add(shared.cap, hm, 0, 0.02, -0.02, -0.2); break;
      case 1: add(shared.cap, hm, 0, 0.02, -0.02, -0.2); add(shared.bun, hm, 0, 0.21, -0.05); break;
      case 2: add(shared.cap, hm, 0, 0.02, -0.02, -0.2); add(shared.back, hm, 0, -0.1, -0.12); break;
      case 3: break; // bald
      case 4: add(shared.cap, M(capCol), 0, 0.03, -0.02, -0.15); add(shared.brim, M(capCol), 0, 0.1, 0.2); break;
      case 5: add(shared.hatBrim, M(capCol), 0, 0.16, 0); add(shared.hatTop, M(capCol), 0, 0.27, 0); break;
      case 6: add(shared.big, hm, 0, 0.07, -0.04); break; // big curly hair
      case 7: add(shared.cap, hm, 0, 0.02, -0.02, -0.2); add(shared.tail, hm, 0, -0.08, -0.2, 0.3); break;
      default: add(shared.beanie, M(capCol), 0, 0.06, 0, -0.1);
    }
    const arms = [1, -1].map(sx => { const a = new THREE.Group(); a.position.set(sx * 0.23, 0.4, 0.02); const m = new THREE.Mesh(shared.arm, M(cloth)); m.position.y = -0.16; a.add(m); inner.add(a); return a; });
    return { g, inner, head, arms };
  }
  for (const s of seats) {
    if (s.r === PLAYER.r && s.i === PLAYER.i) continue;
    if (rnd() < 0.38) continue;
    if (s.r >= 3 && Math.abs(s.i) <= 1) continue; // (this also clears the player's own row) // keep a clear sightline so the gold avatar reads as a foreground figure
    const kid = rnd() < 0.12;
    const p = makePerson({
      cloth: new THREE.Color().setHSL(rnd(), 0.35 + rnd() * 0.25, 0.3 + rnd() * 0.14), skin: SKINS[Math.floor(rnd() * 5)], hair: HAIRS[Math.floor(rnd() * HAIRS.length)],
      style: Math.floor(rnd() * 9), scale: kid ? 0.78 : 0.92 + rnd() * 0.2, width: 0.9 + rnd() * 0.3, capCol: new THREE.Color().setHSL(rnd(), 0.5, 0.4),
    });
    p.g.position.set(s.x, s.y + 0.55, s.z); p.g.rotation.y = Math.PI; scene.add(p.g);
    npcs.push({ ...p, x: s.x, z: s.z, baseY: s.y + 0.55, ph: rnd() * 7, sp: 0.5 + rnd(), attn: 0.4 + rnd() * 0.6, rx: rnd(), jolt: 0, lean: 0, clapSp: 11 + rnd() * 5 });
  }
  // ---- player avatar: gold body, red cap, floating arrow, glow ring — seen from behind, watching the stage ----
  const ps = seats.find(s => s.r === PLAYER.r && s.i === PLAYER.i);
  const player = new THREE.Group(); player.position.set(ps.x, ps.y + 0.55, ps.z); player.rotation.y = Math.PI; scene.add(player);
  const goldM = M('#f2c14e', { emissive: '#a86a00', emissiveIntensity: 0.7, roughness: 0.45 });
  const pin = new THREE.Group(); pin.scale.setScalar(1.2); player.add(pin);
  const pBody = new THREE.Mesh(new THREE.CapsuleGeometry(0.25, 0.34, 4, 10), goldM); pBody.position.y = 0.2; pBody.castShadow = true;
  const pHead = new THREE.Group(); pHead.position.y = 0.76;
  const pSkull = new THREE.Mesh(new THREE.SphereGeometry(0.19, 14, 12), M('#ffe2bd', { emissive: '#5a4026', emissiveIntensity: 0.5 }));
  const capM = M('#e0304f', { emissive: '#6a0f20', emissiveIntensity: 0.6 });
  const pCap = new THREE.Mesh(new THREE.SphereGeometry(0.205, 14, 10, 0, Math.PI * 2, 0, 1.75), capM); pCap.position.y = 0.01; pCap.rotation.x = -0.15;
  const pBrim = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.03, 0.2), capM); pBrim.position.set(0, 0.1, 0.2);
  const pomp = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), M('#ffd24a', { emissive: '#aa7700', emissiveIntensity: 0.8 })); pomp.position.y = 0.22;
  pHead.add(pSkull, pCap, pBrim, pomp);
  const pArms = [1, -1].map(sx => { const a = new THREE.Group(); a.position.set(sx * 0.26, 0.4, 0.02); const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.28, 3, 6), goldM); m.position.y = -0.17; a.add(m); pin.add(a); return a; });
  pin.add(pBody, pHead);
  const marker = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.17, 4), new THREE.MeshBasicMaterial({ color: '#ffd24a' })); marker.rotation.x = Math.PI; marker.position.y = 1.35;
  const halo = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.26, 24), new THREE.MeshBasicMaterial({ color: '#ffd24a', transparent: true, opacity: 0.8, side: THREE.DoubleSide })); halo.rotation.x = Math.PI / 2; halo.position.y = 1.18;
  pin.add(marker, halo);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.64, 28), new THREE.MeshBasicMaterial({ color: '#ffd24a', transparent: true, opacity: 0.6, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.set(ps.x, ps.y + 0.02, ps.z); scene.add(ring);
  const pNpc = { ph: 1.3, sp: 0.8, attn: 0.9, rx: 0.1, jolt: 0, lean: 0, clapSp: 13 };

  // ---- state / API ----
  let view = 'auto', focus = new THREE.Vector3(0, 1.5, 0), spotColor = new THREE.Color('#fff1d0'), applause = 0, time = 0;
  let shot = []; // live world positions of the actors in frame: [speaker, ...others]
  let mood = { emo: 'neutral', level: 0 };
  // ---- auto director camera ----
  // cue() picks a shot type (wide / over-the-shoulder from the avatar's seat / two-shot / close-up); the planner holds each
  // shot >= HOLD seconds, and the rig is solved every frame from the *live* actor positions + facing.
  const HOLD = 2.2;
  const cam = { type: 'wide', since: -9, sinceWide: 0, subj: null, other: null, forced: null, lastBeat: -1 };
  const seatHead = new THREE.Vector3(ps.x + 0.38, ps.y + 0.55 + 1.75, ps.z + 1.7);
  const gp = new THREE.Vector3(), gl = new THREE.Vector3();
  let gFov = HOME.fov, snap = true;
  const inObstacle = (x, y, z, pad) => { for (const o of sets.obstacles) if (x > o.x0 - pad && x < o.x1 + pad && z > o.z0 - pad && z < o.z1 + pad && y < o.h + 0.25) return true; return false; };
  const fovFor = (h, dist) => clamp(2 * Math.atan(h / 2 / dist) * 180 / Math.PI, 11, 44);
  function solveShot() {
    const sp = cam.subj, ot = cam.other, t = cam.type;
    if (!sp || t === 'wide') { gp.copy(HOME.pos); gl.copy(HOME.look); gFov = HOME.fov; return; }
    const sx = sp.pos.x, sz = sp.pos.y;
    if (t === 'ots') { // behind & above the gold avatar, looking over their hat at the speaker (+ listener)
      let mx = sx, mz = sz, span = 0;
      if (ot) { mx = (sx + ot.pos.x) / 2; mz = (sz + ot.pos.y) / 2; span = Math.hypot(sx - ot.pos.x, sz - ot.pos.y); }
      gp.copy(seatHead); gl.set(mx, 1.2, mz);
      const dist = Math.hypot(gp.x - mx, gp.z - mz), asp = camera.aspect || 1.6;
      gFov = fovFor(Math.max(2.5 / 0.62, (span + 1.1) / (0.62 * asp)), dist); return;
    }
    if (t === 'two' && ot) {
      const ax = ot.pos.x - sx, az = ot.pos.y - sz, span = Math.hypot(ax, az) || 1, mx = sx + ax / 2, mz = sz + az / 2;
      let nx = -az / span, nz = ax / span; if (nz < 0) { nx = -nx; nz = -nz; } // normal to the pair, house side
      const dist = clamp(span * 1.25 + 3.4, 4.2, 7.5);
      let px = mx + nx * dist, pz = mz + nz * dist;
      pz = clamp(pz, 3.2, 7); px = clamp(px, -5.5, 5.5);
      if (inObstacle(px, 1.6, pz, 0.3)) pz = 6.4;
      gp.set(px, 1.65, pz); gl.set(mx, 1.2, mz); gFov = fovFor((span + 1.6) / (0.7 * (camera.aspect || 1.6)) , Math.hypot(px - mx, pz - mz)); return;
    }
    // close-up: ~30 degrees off the speaker's facing, house side, outside props
    const f = sp.yaw, d0 = 2.9;
    let best = null;
    for (const da of [0.52, -0.52, 0.95, -0.95, 1.4, -1.4, 0]) {
      const a = f + da, px = sx + Math.sin(a) * d0, pz = sz + Math.cos(a) * d0;
      if (pz < 1.2 || pz > 6.4 || Math.abs(px) > 6.3) continue;
      if (inObstacle(px, 1.6, pz, 0.35)) continue;
      best = { px, pz }; if (pz >= 3.0 || da === 0) break; // prefer positions in front of the proscenium so nothing sits between lens and face
    }
    if (!best || best.pz < 1.2) { const pz = clamp(sz + 3.4, 3.2, 6.4); best = { px: clamp(sx * 0.9, -5, 5), pz }; }
    gp.set(best.px, 1.6, best.pz); gl.set(sx, 1.28, sz); gFov = fovFor(2.7, Math.hypot(best.px - sx, best.pz - sz));
    if (ot) { gl.x = sx + (ot.pos.x - sx) * 0.12; gl.z = sz + (ot.pos.y - sz) * 0.12; }
  }
  const camTarget = new THREE.Vector3(), lookTarget = new THREE.Vector3().copy(HOME.look), tmp = new THREE.Vector3(), mid = new THREE.Vector3();
  let wantFov = HOME.fov;
  spot.target.position.set(0, 0, 0);

  let quality = 2, frameNo = 0;
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas); resize();

  // Audience member / player animation shared by NPCs and the avatar
  function animPerson(n, head, arms, root, baseY, dt, bodyLookScale) {
    const dx = focus.x - (n.x ?? root.position.x), dz = focus.z - (n.z ?? root.position.z);
    const want = clamp(angDiff(Math.PI, Math.atan2(dx, dz)), -0.7, 0.7) * n.attn;
    head.rotation.y += (want - head.rotation.y) * (1 - Math.exp(-4 * dt));
    root.rotation.y = Math.PI + head.rotation.y * bodyLookScale;
    n.jolt = Math.max(0, n.jolt - dt * 2.2);
    const lvl = mood.level, e = mood.emo;
    let lean = 0.04 + 0.05 * lvl, headX = 0, bounce = 0;
    if ((e === 'angry' || e === 'proud') && n.rx < 0.8) lean += 0.10 * lvl;
    if (e === 'sad' && n.rx < 0.8) { headX = 0.28 * lvl; lean -= 0.02; }
    if (e === 'happy' && n.rx < 0.75) bounce = Math.abs(Math.sin(time * 6 + n.ph)) * 0.05 * lvl;
    if (e === 'tender' && n.rx < 0.6) head.rotation.z = Math.sin(time * 1.2 + n.ph) * 0.12 * lvl; else head.rotation.z = Math.sin(time * n.sp + n.ph) * 0.05;
    lean -= n.jolt * 0.28; bounce += n.jolt * 0.1;
    n.lean += (lean - n.lean) * (1 - Math.exp(-5 * dt));
    root.children[0].rotation.x = n.lean + Math.sin(time * 1.3 + n.ph) * 0.012;
    head.rotation.x = headX - n.jolt * 0.2;
    const cl = applause > 0;
    const c = 0.5 + 0.5 * Math.sin(time * n.clapSp + n.ph);
    for (let k = 0; k < 2; k++) {
      const sx = k === 0 ? 1 : -1;
      if (cl) { arms[k].rotation.set(0, 0, sx * (2.75 - 0.5 * c)); arms[k].rotation.x = -0.3; }
      else { arms[k].rotation.set(-0.15 * lvl, 0, sx * (0.12 + Math.sin(time * 0.8 + n.ph) * 0.03)); }
    }
    root.position.y = baseY + bounce + (cl ? Math.abs(Math.sin(time * 8 + n.ph)) * 0.05 : 0);
  }

  return {
    renderer, scene, camera, curtain, sets,
    audienceTarget: new THREE.Vector3(0, 1.6, 11),
    setView(v) { view = v; controls.enabled = v === 'free'; if (v === 'free') controls.target.copy(lookTarget); snap = true; },
    /** beat-boundary cue from the Director: pick/refresh the auto shot. speaker/listener are live Actor objects. */
    cue({ type = 'beat', speaker = null, listener = null, intensity = 0.5, emotion = 'neutral', entrance = false, close = false, beatNo = 0 } = {}) {
      cam.lastSpeaker = speaker || cam.lastSpeaker; cam.lastListener = listener;
      let want = 'ots';
      if (type === 'finish' || entrance || !speaker) want = 'wide';
      else if (cam.sinceWide >= 3 + (beatNo % 2)) want = 'wide';
      else if (close || intensity >= 0.75 || emotion === 'gasp' || emotion === 'afraid') want = 'close';
      else if (listener && Math.hypot(speaker.pos.x - listener.pos.x, speaker.pos.y - listener.pos.y) < 4 && beatNo % 3 === 0) want = 'two';
      if (want === 'two' && !listener) want = 'ots';
      if (time - cam.since < HOLD && type !== 'finish') want = cam.type === 'two' && !listener ? 'ots' : cam.type; // min hold: keep the shot, just follow the new speaker
      if (want !== cam.type) { cam.type = want; cam.since = time; snap = true; }
      cam.sinceWide = want === 'wide' ? 0 : cam.sinceWide + 1;
      cam.subj = speaker; cam.other = listener;
      cam.forced = null; return want;
    },
    get shotType() { return view === 'auto' ? cam.type : view; },
    get view() { return view; },
    setFocus(p, color, intensity = 1) {
      if (p) focus.copy(p);
      if (color) spotColor.set(color);
      spot.intensity = 220 * intensity;
    },
    /** live positions of the actors in frame ([speaker, ...others]) for the close-up / two-shot */
    setShot(points) { shot = points; if (points[0]) focus.set(points[0].x, 1.5, points[0].z); },
    setSet(id) { renderer.shadowMap.needsUpdate = true; return sets.show(id); },
    /** 2 = high (default), 1 = medium (1x pixels, shadows every 3rd frame), 0 = low (0.75x pixels, near-static shadows, half-rate audience) */
    setQuality(q) {
      quality = clamp(q | 0, 0, 2);
      renderer.setPixelRatio(quality === 2 ? Math.min(devicePixelRatio, 1.5) : quality === 1 ? 1 : 0.75);
      renderer.shadowMap.autoUpdate = quality === 2; renderer.shadowMap.needsUpdate = true;
      resize(); return quality;
    },
    get quality() { return quality; },
    /** the house reacts: gasp → jolt, happy → bounce, sad → heads down, angry → lean in */
    react(emo, intensity = 0.5) {
      mood = { emo, level: 0.45 + intensity * 0.55 };
      if (emo === 'gasp' || emo === 'afraid') { for (const n of npcs) if (n.rx < 0.55) n.jolt = 0.6 + Math.random() * 0.4; pNpc.jolt = 0.7; }
    },
    openCurtain(open) { curtain.target = open ? 1 : 0; },
    applaud(sec) { applause = sec; },
    update(dt) {
      time += dt;
      sets.tick(time);
      mood.level = Math.max(0, mood.level - dt * 0.16);
      // curtain animation
      curtain.k = lerp(curtain.k, curtain.target, 1 - Math.exp(-1.6 * dt));
      const cs = 1 - curtain.k * 0.78; // panels bunch up against the outer edges
      curtain.L.scale.x = curtain.R.scale.x = cs;
      curtain.L.position.x = -(7.0 - 7.1 * cs); curtain.R.position.x = 7.0 - 7.1 * cs;
      // spotlight follows the focus
      spot.target.position.lerp(tmp.set(focus.x, 0.8, focus.z), 1 - Math.exp(-4 * dt));
      spot.position.x = lerp(spot.position.x, focus.x * 0.6, 1 - Math.exp(-3 * dt));
      spot.color.lerp(spotColor, 1 - Math.exp(-3 * dt));
      // audience
      applause = Math.max(0, applause - dt);
      frameNo++;
      if (quality < 2 && frameNo % (quality === 1 ? 3 : 12) === 0) renderer.shadowMap.needsUpdate = true; // lower tiers: refresh shadows occasionally
      if (quality > 0) for (const n of npcs) animPerson(n, n.head, n.arms, n.g, n.baseY, dt, 0.5);
      else for (let i = frameNo & 1; i < npcs.length; i += 2) { const n = npcs[i]; animPerson(n, n.head, n.arms, n.g, n.baseY, dt * 2, 0.5); } // low: half the house per frame
      animPerson(pNpc, pHead, pArms, player, ps.y + 0.55, dt, 0.35);
      const pov = view !== 'free' && view !== 'audience' && cam.type === 'ots'; // the avatar's own pointer would sit in the lens
      marker.visible = halo.visible = ring.visible = !pov;
      marker.position.y = 1.35 + Math.sin(time * 3) * 0.06; marker.rotation.y = time * 2.2;
      halo.scale.setScalar(1 + Math.sin(time * 3) * 0.12);
      ring.material.opacity = 0.4 + Math.sin(time * 3) * 0.25;
      // camera
      if (view === 'audience') {
        camTarget.copy(HOME.pos); camTarget.x += focus.x * 0.05;
        camera.position.lerp(camTarget, 1 - Math.exp(-3 * dt));
        lookTarget.lerp(tmp.set(HOME.look.x + focus.x * 0.1, HOME.look.y, HOME.look.z), 1 - Math.exp(-3 * dt));
        camera.lookAt(lookTarget); gFov = HOME.fov;
      } else if (view === 'free') controls.update();
      else {
        // auto (planner-driven) or manual close: same solver, forced to a close-up of the current speaker
        if (view === 'close') { const sp = cam.subj || cam.lastSpeaker; if (sp) { cam.subj = sp; cam.type = cam.type === 'two' ? 'two' : 'close'; } }
        solveShot();
        if (snap) { camera.position.copy(gp); lookTarget.copy(gl); camera.fov = gFov; camera.updateProjectionMatrix(); snap = false; }
        else {
          const k = 1 - Math.exp(-6 * dt);
          camera.position.lerp(gp, k); lookTarget.lerp(gl, 1 - Math.exp(-9 * dt));
          if (Math.abs(camera.fov - gFov) > 0.05) { camera.fov = lerp(camera.fov, gFov, 1 - Math.exp(-6 * dt)); camera.updateProjectionMatrix(); }
        }
        camera.lookAt(lookTarget);
      }
      if (view === 'audience' && Math.abs(camera.fov - gFov) > 0.05) { camera.fov = lerp(camera.fov, gFov, 1 - Math.exp(-3 * dt)); camera.updateProjectionMatrix(); }
      renderer.render(scene, camera);
    },
  };
}
