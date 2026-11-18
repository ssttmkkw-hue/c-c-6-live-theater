// The theater: stage, proscenium, curtains, wings, lights, audience seating, player avatar, cameras.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const M = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0.02, ...o });
const box = (w, h, d, m, x, y, z, shadow = true) => {
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z);
  b.castShadow = shadow; b.receiveShadow = true; return b;
};
const lerp = (a, b, t) => a + (b - a) * t;

function backdropTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#0b1230'); gr.addColorStop(0.7, '#3a2a5c'); gr.addColorStop(1, '#6b3b57');
  g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
  let s = 7; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  g.fillStyle = '#fff'; for (let i = 0; i < 90; i++) { g.globalAlpha = 0.3 + rnd() * 0.7; g.fillRect(rnd() * 512, rnd() * 150, 1.5, 1.5); }
  g.globalAlpha = 1; g.fillStyle = '#f5e9b8'; g.beginPath(); g.arc(380, 60, 26, 0, 7); g.fill();
  g.fillStyle = '#0b1230'; g.beginPath(); g.arc(392, 54, 24, 0, 7); g.fill();
  g.fillStyle = '#1a1030'; g.beginPath(); g.moveTo(0, 256); for (let x = 0; x <= 512; x += 32) g.lineTo(x, 190 - Math.sin(x * 0.03) * 25 - rnd() * 18); g.lineTo(512, 256); g.fill();
  g.fillStyle = '#120a22'; g.beginPath(); g.moveTo(0, 256); for (let x = 0; x <= 512; x += 24) g.lineTo(x, 225 - rnd() * 22); g.lineTo(512, 256); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function createTheater(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#07040a'); scene.fog = new THREE.Fog('#07040a', 28, 60);
  const camera = new THREE.PerspectiveCamera(46, 1.6, 0.1, 120);
  const HOME = { pos: new THREE.Vector3(0, 3.7, 13.9), look: new THREE.Vector3(0, 1.3, -1) };
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
  const back = new THREE.Mesh(new THREE.PlaneGeometry(13.6, 6.8), new THREE.MeshBasicMaterial({ map: backdropTexture() }));
  back.position.set(0, 3.5, -4.5); stage.add(back);
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
  // NPC audience (dim silhouettes that sway & clap)
  const npcs = [];
  const PLAYER = { r: 5, i: 0 };
  let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (const s of seats) {
    if (s.r === PLAYER.r && s.i === PLAYER.i) continue;
    if (rnd() < 0.42) continue;
    const g = new THREE.Group(); g.position.set(s.x, s.y + 0.55, s.z);
    const col = new THREE.Color().setHSL(rnd(), 0.35, 0.28);
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.3, 3, 8), M(col)); body.position.y = 0.2;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), M(new THREE.Color().setHSL(0.07, 0.3, 0.45 + rnd() * 0.2))); head.position.y = 0.72;
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8, 0, 7, 0, 2.2), M('#1a1210')); hair.position.y = 0.74; hair.rotation.x = -0.35;
    g.add(body, head, hair); scene.add(g);
    npcs.push({ g, head, ph: rnd() * 7, sp: 0.5 + rnd() });
  }
  // ---- player avatar: gold, with a marker ----
  const ps = seats.find(s => s.r === PLAYER.r && s.i === PLAYER.i);
  const player = new THREE.Group(); player.position.set(ps.x, ps.y + 0.55, ps.z); scene.add(player);
  const goldM = M('#f2c14e', { emissive: '#8a5a00', emissiveIntensity: 0.35, roughness: 0.5 });
  const pBody = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.34, 4, 10), goldM); pBody.position.y = 0.2; pBody.castShadow = true;
  const pHead = new THREE.Mesh(new THREE.SphereGeometry(0.19, 14, 12), M('#ffe2bd')); pHead.position.y = 0.76; pHead.castShadow = true;
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 10, 0, 7, 0, 1.7), M('#d62f4b')); cap.position.y = 0.78;
  const marker = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 4), new THREE.MeshBasicMaterial({ color: '#ffd24a' })); marker.rotation.x = Math.PI; marker.position.y = 1.4;
  player.add(pBody, pHead, cap, marker);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.55, 28), new THREE.MeshBasicMaterial({ color: '#ffd24a', transparent: true, opacity: 0.6, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.set(ps.x, ps.y + 0.02, ps.z); scene.add(ring);

  // ---- state / API ----
  let view = 'audience', focus = new THREE.Vector3(0, 1.5, 0), spotColor = new THREE.Color('#fff1d0'), applause = 0, time = 0;
  const camTarget = new THREE.Vector3(), lookTarget = new THREE.Vector3().copy(HOME.look), tmp = new THREE.Vector3();
  spot.target.position.set(0, 0, 0);

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas); resize();

  return {
    renderer, scene, camera, curtain,
    audienceTarget: new THREE.Vector3(0, 1.6, 11),
    setView(v) { view = v; controls.enabled = v === 'free'; if (v === 'free') controls.target.copy(lookTarget); },
    get view() { return view; },
    setFocus(p, color, intensity = 1) {
      if (p) focus.copy(p);
      if (color) spotColor.set(color);
      spot.intensity = 220 * intensity;
    },
    openCurtain(open) { curtain.target = open ? 1 : 0; },
    applaud(sec) { applause = sec; },
    update(dt) {
      time += dt;
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
      for (const n of npcs) {
        n.g.position.y += 0; n.head.rotation.z = Math.sin(time * n.sp + n.ph) * 0.06;
        n.g.rotation.y = Math.sin(time * 0.3 + n.ph) * 0.12;
        n.g.scale.y = 1 + (applause > 0 ? Math.abs(Math.sin(time * 9 + n.ph)) * 0.06 : Math.sin(time * 1.5 + n.ph) * 0.008);
      }
      marker.position.y = 1.4 + Math.sin(time * 3) * 0.06; marker.rotation.y = time * 2;
      ring.material.opacity = 0.35 + Math.sin(time * 3) * 0.2;
      player.rotation.y = lerp(player.rotation.y, THREE.MathUtils.clamp(-(focus.x - player.position.x) * 0.02, -0.25, 0.25), 0.05);
      pHead.rotation.y = player.rotation.y * 0.5;
      if (applause > 0) player.position.y = ps.y + 0.55 + Math.abs(Math.sin(time * 9)) * 0.05;
      // camera
      if (view === 'audience') {
        camTarget.copy(HOME.pos); camTarget.x += focus.x * 0.04;
        camera.position.lerp(camTarget, 1 - Math.exp(-3 * dt));
        lookTarget.lerp(tmp.set(HOME.look.x + focus.x * 0.1, HOME.look.y, HOME.look.z), 1 - Math.exp(-3 * dt));
        camera.lookAt(lookTarget);
      } else if (view === 'close') {
        camTarget.set(focus.x * 0.8, 2.3, focus.z + 5.4);
        camera.position.lerp(camTarget, 1 - Math.exp(-2.5 * dt));
        lookTarget.lerp(tmp.set(focus.x, 1.4, focus.z), 1 - Math.exp(-4 * dt));
        camera.lookAt(lookTarget);
      } else controls.update();
      renderer.render(scene, camera);
    },
  };
}
