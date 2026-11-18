// Procedural set dressing: a painted backdrop + a floor treatment + a few low-poly props per "set".
// Everything is drawn on canvas / made from boxes and cylinders — no external or paid assets.
// A set is chosen from the idea/script text or actor names (pickSet), or explicitly by a {kind:'scene', set} event.
import * as THREE from 'three';

export const SET_IDS = ['moon', 'ramparts', 'shop', 'alley', 'hall'];
export const SET_LABEL = {
  zh: { moon: '月夜舞台', ramparts: '城堡露台', shop: '深夜便利店', alley: '雨夜小巷', hall: '王座大厅' },
  en: { moon: 'Moonlit stage', ramparts: 'Castle ramparts', shop: 'Midnight shop', alley: 'Rainy alley', hall: 'Throne hall' },
};

// Order matters: first match wins. Text (idea / script) is tested first, actor names second.
const RULES = [
  ['ramparts', /hamlet|哈姆雷特|elsinore|rampart|battlement|castle|城堡|城墙|露台|ghost|specter|spectre|鬼魂|幽灵|亡魂|守卫|guard|sentinel/i],
  ['shop', /便利店|商店|超市|柜台|店员|收银|shop|store|counter|cashier|convenience|robot|机器人|老k|\bkay\b/i],
  ['alley', /detective|侦探|警探|thief|小偷|盗贼|alley|小巷|街|police|inspector|noir/i],
  ['hall', /king|queen|jester|throne|court|palace|emperor|王|小丑|弄臣|宫|朝堂|皇/i],
];
export function pickSet(text = '', names = []) {
  for (const hay of [text, names.join(' ')]) {
    if (!hay) continue;
    for (const [id, re] of RULES) if (re.test(hay)) return id;
  }
  return null;
}

const rng = seed => { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; };
const canvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };
const tex = (c, srgb = true) => { const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; };
const stars = (g, rnd, n, maxY) => { g.fillStyle = '#fff'; for (let i = 0; i < n; i++) { g.globalAlpha = 0.3 + rnd() * 0.7; g.fillRect(rnd() * 512, rnd() * maxY, 1.5, 1.5); } g.globalAlpha = 1; };
const moon = (g, x, y, r, bg) => { g.fillStyle = '#f5e9b8'; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); if (bg) { g.fillStyle = bg; g.beginPath(); g.arc(x + r * 0.45, y - r * 0.25, r * 0.92, 0, 7); g.fill(); } };

// ---------------- backdrops (512x256 → 13.6 x 6.8 m) ----------------
const BACK = {
  moon() {
    const [c, g] = canvas(512, 256), rnd = rng(7);
    const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#0b1230'); gr.addColorStop(0.7, '#3a2a5c'); gr.addColorStop(1, '#6b3b57');
    g.fillStyle = gr; g.fillRect(0, 0, 512, 256); stars(g, rnd, 90, 150); moon(g, 380, 60, 26, '#0b1230');
    g.fillStyle = '#1a1030'; g.beginPath(); g.moveTo(0, 256); for (let x = 0; x <= 512; x += 32) g.lineTo(x, 190 - Math.sin(x * 0.03) * 25 - rnd() * 18); g.lineTo(512, 256); g.fill();
    g.fillStyle = '#120a22'; g.beginPath(); g.moveTo(0, 256); for (let x = 0; x <= 512; x += 24) g.lineTo(x, 225 - rnd() * 22); g.lineTo(512, 256); g.fill();
    return tex(c);
  },
  ramparts() {
    const [c, g] = canvas(512, 256), rnd = rng(21);
    const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#050a1e'); gr.addColorStop(0.65, '#1c2a52'); gr.addColorStop(1, '#4a3d66');
    g.fillStyle = gr; g.fillRect(0, 0, 512, 256); stars(g, rnd, 120, 140);
    moon(g, 90, 58, 30); g.fillStyle = 'rgba(200,210,255,.10)'; g.beginPath(); g.arc(90, 58, 52, 0, 7); g.fill();
    g.fillStyle = 'rgba(120,130,190,.28)'; for (let i = 0; i < 5; i++) g.fillRect(rnd() * 400, 80 + rnd() * 80, 80 + rnd() * 120, 7); // cloud streaks
    // distant castle silhouette (towers, crenellations, a few lit windows)
    g.fillStyle = '#0d0f22';
    const tower = (x, w, h) => { g.fillRect(x, 256 - h, w, h); for (let k = 0; k < w; k += 10) g.fillRect(x + k, 256 - h - 8, 6, 8); g.beginPath(); g.moveTo(x - 3, 256 - h - 8); g.lineTo(x + w / 2, 256 - h - 8 - w * 0.9); g.lineTo(x + w + 3, 256 - h - 8); g.fill(); };
    g.fillRect(150, 188, 270, 68); for (let k = 150; k < 420; k += 14) g.fillRect(k, 180, 8, 8);
    tower(160, 34, 120); tower(255, 40, 150); tower(360, 36, 110); tower(430, 28, 90);
    g.fillStyle = '#ffd37a'; for (const [x, y] of [[170, 150], [268, 120], [270, 150], [372, 160], [210, 205], [320, 210]]) g.fillRect(x, y, 5, 8);
    g.fillStyle = '#080a18'; g.fillRect(0, 232, 512, 24);
    return tex(c);
  },
  shop() {
    const [c, g] = canvas(512, 256), rnd = rng(33);
    const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#2b3a46'); gr.addColorStop(1, '#4b5d63'); g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
    // big window with the night street
    g.fillStyle = '#0c1226'; g.fillRect(330, 40, 150, 120); stars(g, rng(5), 20, 0); g.fillStyle = '#fff'; g.globalAlpha = .6; for (let i = 0; i < 14; i++) g.fillRect(335 + rnd() * 140, 45 + rnd() * 50, 1.5, 1.5); g.globalAlpha = 1;
    g.fillStyle = '#ffc98a'; g.beginPath(); g.arc(360, 100, 5, 0, 7); g.fill(); g.fillStyle = 'rgba(255,200,140,.18)'; g.beginPath(); g.arc(360, 100, 22, 0, 7); g.fill();
    g.strokeStyle = '#1a2230'; g.lineWidth = 4; g.strokeRect(330, 40, 150, 120); g.beginPath(); g.moveTo(405, 40); g.lineTo(405, 160); g.stroke();
    // shelves with products
    const shelf = (x, w) => { for (let r = 0; r < 4; r++) { const y = 70 + r * 36; g.fillStyle = '#c9c2b0'; g.fillRect(x, y + 28, w, 4); for (let px = x + 3; px < x + w - 8; px += 11) { g.fillStyle = ['#e74c3c', '#f1c40f', '#3498db', '#2ecc71', '#ecf0f1', '#e67e22', '#9b59b6'][Math.floor(rnd() * 7)]; const h = 14 + rnd() * 12; g.fillRect(px, y + 28 - h, 8, h); } } };
    shelf(20, 130); shelf(170, 130);
    // neon sign
    g.font = 'bold 30px system-ui, sans-serif'; g.textAlign = 'center'; g.shadowColor = '#ff4fa3'; g.shadowBlur = 14; g.fillStyle = '#ff9fd0'; g.fillText('OPEN 24H', 250, 40); g.shadowColor = '#4ff'; g.fillStyle = '#9ff'; g.font = 'bold 15px system-ui, sans-serif'; g.fillText('便利店', 250, 58); g.shadowBlur = 0;
    g.fillStyle = '#26323a'; g.fillRect(0, 220, 512, 36);
    return tex(c);
  },
  alley() {
    const [c, g] = canvas(512, 256), rnd = rng(55);
    g.fillStyle = '#1a1620'; g.fillRect(0, 0, 512, 256);
    for (let y = 0; y < 256; y += 12) for (let x = -((y / 12) % 2) * 12; x < 512; x += 24) { const l = 22 + rnd() * 14; g.fillStyle = `rgb(${l + 20},${l + 8},${l + 8})`; g.fillRect(x + 1, y + 1, 22, 10); }
    g.fillStyle = '#0c0a12'; g.fillRect(0, 0, 512, 30); // sky slit
    g.fillStyle = '#ffcf7a'; for (const [x, y] of [[60, 70], [60, 110], [210, 70], [440, 90]]) { g.fillRect(x, y, 26, 34); g.fillStyle = '#7a3a22'; g.fillRect(x + 12, y, 2, 34); g.fillStyle = '#ffcf7a'; }
    g.strokeStyle = '#08060c'; g.lineWidth = 3; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(330, 60 + i * 38); g.lineTo(400, 60 + i * 38); g.stroke(); } g.beginPath(); g.moveTo(330, 60); g.lineTo(330, 190); g.moveTo(400, 60); g.lineTo(400, 190); g.stroke();
    const lamp = g.createRadialGradient(150, 60, 4, 150, 60, 130); lamp.addColorStop(0, 'rgba(255,220,150,.75)'); lamp.addColorStop(1, 'rgba(255,220,150,0)'); g.fillStyle = lamp; g.fillRect(0, 0, 340, 230);
    g.strokeStyle = 'rgba(170,190,230,.28)'; g.lineWidth = 1; for (let i = 0; i < 90; i++) { const x = rnd() * 512, y = rnd() * 256; g.beginPath(); g.moveTo(x, y); g.lineTo(x - 4, y + 14); g.stroke(); } // rain
    return tex(c);
  },
  hall() {
    const [c, g] = canvas(512, 256), rnd = rng(77);
    const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#2a0f1c'); gr.addColorStop(1, '#4d1c2a'); g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
    for (let i = 0; i < 4; i++) { const x = 40 + i * 130; g.fillStyle = '#17080e'; g.beginPath(); g.moveTo(x, 256); g.lineTo(x, 100); g.arc(x + 35, 100, 35, Math.PI, 0); g.lineTo(x + 70, 256); g.fill(); g.fillStyle = ['#3b6fb0', '#c0392b', '#e8b64c', '#2e9a6a'][i]; g.globalAlpha = 0.55; g.fillRect(x + 8, 80, 54, 100); g.globalAlpha = 1; g.strokeStyle = '#1a0c10'; g.lineWidth = 2; g.strokeRect(x + 8, 80, 54, 100); g.beginPath(); g.moveTo(x + 35, 70); g.lineTo(x + 35, 180); g.stroke(); }
    g.fillStyle = '#e8b64c'; g.fillRect(0, 205, 512, 5); g.fillStyle = '#7a1424'; for (let x = 0; x < 512; x += 28) g.fillRect(x, 0, 14, 38 + Math.sin(x) * 6); // valance swag
    g.fillStyle = '#b88a2c'; for (let x = 0; x < 512; x += 28) g.fillRect(x + 6, 36, 2, 10);
    return tex(c);
  },
};

// ---------------- floor overlays (tileable) ----------------
const FLOOR = {
  moon: null,
  ramparts() { const [c, g] = canvas(256, 128), rnd = rng(3); g.fillStyle = '#3c3a46'; g.fillRect(0, 0, 256, 128); for (let y = 0; y < 128; y += 32) for (let x = -((y / 32) % 2) * 32; x < 256; x += 64) { const l = 50 + rnd() * 24; g.fillStyle = `rgb(${l},${l - 2},${l + 10})`; g.fillRect(x + 2, y + 2, 60, 28); } return tex(c); },
  shop() { const [c, g] = canvas(128, 128); for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.fillStyle = (x + y) % 2 ? '#d8d6cc' : '#6f8088'; g.fillRect(x * 32, y * 32, 32, 32); } return tex(c); },
  alley() { const [c, g] = canvas(256, 128), rnd = rng(9); g.fillStyle = '#25222c'; g.fillRect(0, 0, 256, 128); for (let i = 0; i < 90; i++) { const l = 36 + rnd() * 24; g.fillStyle = `rgb(${l},${l},${l + 8})`; g.beginPath(); g.ellipse(rnd() * 256, rnd() * 128, 8 + rnd() * 8, 5 + rnd() * 4, 0, 0, 7); g.fill(); } g.fillStyle = 'rgba(160,190,255,.12)'; g.fillRect(40, 30, 90, 14); g.fillRect(150, 80, 70, 10); return tex(c); },
  hall() { const [c, g] = canvas(256, 128); g.fillStyle = '#5a3a24'; g.fillRect(0, 0, 256, 128); g.fillStyle = '#8e1b2b'; g.fillRect(88, 0, 80, 128); g.fillStyle = '#e8b64c'; g.fillRect(88, 0, 4, 128); g.fillRect(164, 0, 4, 128); return tex(c); },
};

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0.03, ...o });
const glow = (color, i = 1.4) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: i });
const bx = (g, w, h, d, m, x, y, z) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = true; b.receiveShadow = true; g.add(b); return b; };
const cyl = (g, rt, rb, h, seg, m, x, y, z) => { const b = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m); b.position.set(x, y, z); b.castShadow = true; g.add(b); return b; };

// ---------------- 3D props ----------------
const PROPS = {
  moon() { return { group: new THREE.Group(), tick() {} }; },
  ramparts() {
    const g = new THREE.Group(), stone = std('#5a5662'), dk = std('#46424f'), flames = [];
    bx(g, 13.2, 1.15, 0.7, stone, 0, 0.57, -3.95);
    for (let x = -6; x <= 6; x += 1.5) bx(g, 0.8, 0.5, 0.7, stone, x, 1.4, -3.95);
    for (const s of [-1, 1]) {
      bx(g, 1.2, 3.4, 1.2, dk, s * 6.3, 1.7, -3.3);
      for (const dx of [-0.4, 0.4]) bx(g, 0.35, 0.4, 1.2, dk, s * 6.3 + dx, 3.6, -3.3);
      cyl(g, 0.04, 0.04, 1.5, 6, std('#2b2018'), s * 4.8, 0.75, -3.4);
      cyl(g, 0.12, 0.07, 0.2, 8, std('#3a2a18'), s * 4.8, 1.55, -3.4);
      const f = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.4, 7), glow('#ff9a3a', 2)); f.position.set(s * 4.8, 1.85, -3.4); g.add(f); flames.push(f);
    }
    return { group: g, tick(t) { flames.forEach((f, i) => { f.scale.set(1 + Math.sin(t * 13 + i) * 0.12, 1 + Math.sin(t * 9 + i * 2) * 0.22, 1); }); } };
  },
  shop() {
    const g = new THREE.Group(), wall = std('#d6d0bd'), top = std('#33393f'), shelfM = std('#aab0b4');
    bx(g, 3.3, 1.0, 0.85, wall, -3.2, 0.5, -2.7); bx(g, 3.5, 0.08, 1.0, top, -3.2, 1.04, -2.7);
    bx(g, 0.5, 0.3, 0.4, std('#222'), -2.4, 1.23, -2.7); bx(g, 0.42, 0.22, 0.03, glow('#7fe6ff', 1.1), -2.4, 1.3, -2.49); // register
    for (let i = 0; i < 4; i++) bx(g, 0.22, 0.26, 0.16, std(['#e74c3c', '#f1c40f', '#3498db', '#2ecc71'][i]), -4.2 + i * 0.3, 1.21, -2.55); // candy on counter
    bx(g, 2.6, 2.2, 0.5, shelfM, 3.3, 1.1, -3.9); // shelf unit
    for (let r = 0; r < 4; r++) { bx(g, 2.6, 0.05, 0.6, std('#8a9094'), 3.3, 0.35 + r * 0.55, -3.75); for (let i = 0; i < 8; i++) bx(g, 0.22, 0.3, 0.2, std(['#e74c3c', '#f1c40f', '#3498db', '#2ecc71', '#ecf0f1', '#e67e22'][(i + r) % 6]), 2.35 + i * 0.3, 0.5 + r * 0.55, -3.7); }
    bx(g, 1.1, 2.3, 0.7, std('#cfe3ea'), 5.6, 1.15, -3.5); bx(g, 0.9, 2.0, 0.04, glow('#bfefff', 0.8), 5.6, 1.15, -3.13); // fridge
    bx(g, 3.6, 0.1, 0.4, glow('#f4fbff', 1.6), 0, 6.35, -2.4); // fluorescent tube
    return { group: g, tick() {} };
  },
  alley() {
    const g = new THREE.Group(), brick = std('#4a2f2c'), metal = std('#3c4650');
    bx(g, 1.0, 0.9, 0.9, std('#6a4a2a'), -5.0, 0.45, -3.0); bx(g, 0.8, 0.7, 0.8, std('#7a5532'), -4.9, 1.25, -3.0);
    cyl(g, 0.4, 0.36, 1.0, 12, metal, 5.2, 0.5, -3.1); cyl(g, 0.42, 0.42, 0.06, 12, std('#2c343c'), 5.2, 1.03, -3.1);
    cyl(g, 0.06, 0.08, 4.2, 8, std('#22262a'), -3.4, 2.1, -3.6); bx(g, 0.7, 0.1, 0.1, std('#22262a'), -3.1, 4.15, -3.6);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), glow('#ffd88a', 2.2)); lamp.position.set(-2.8, 4.0, -3.6); g.add(lamp);
    bx(g, 13, 0.8, 0.5, brick, 0, 0.4, -4.1); // low wall along the back
    return { group: g, tick(t) { lamp.material.emissiveIntensity = 2 + Math.sin(t * 21) * 0.2 + Math.sin(t * 7.3) * 0.2; } };
  },
  hall() {
    const g = new THREE.Group(), gold = std('#c9962f', { metalness: 0.6, roughness: 0.4 }), red = std('#7a1424');
    for (const s of [-1, 1]) { cyl(g, 0.4, 0.45, 6.4, 14, std('#4a3a40'), s * 4.3, 3.2, -3.8); cyl(g, 0.55, 0.55, 0.25, 14, gold, s * 4.3, 6.4, -3.8); cyl(g, 0.55, 0.55, 0.25, 14, gold, s * 4.3, 0.12, -3.8); }
    bx(g, 2.6, 0.5, 1.6, std('#5a3a24'), 0, 0.25, -3.2); // dais
    bx(g, 1.0, 0.5, 0.9, red, 0, 0.75, -3.2); bx(g, 1.1, 2.4, 0.2, red, 0, 1.7, -3.8); bx(g, 1.3, 0.2, 0.3, gold, 0, 3.0, -3.8);
    for (const s of [-1, 1]) { bx(g, 0.18, 0.9, 0.9, gold, s * 0.65, 1.0, -3.2); }
    return { group: g, tick() {} };
  },
};

export function createSets(scene, stageGroup) {
  const backMat = new THREE.MeshBasicMaterial({ map: BACK.moon() });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(13.6, 6.8), backMat); back.position.set(0, 3.5, -4.5); stageGroup.add(back);
  const floorMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.8, transparent: true, opacity: 1 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(13.8, 7.4), floorMat); floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0.012, -0.7); floor.receiveShadow = true; floor.visible = false; stageGroup.add(floor);
  const cache = {}; let cur = 'moon', active = null;
  const texCache = { back: { moon: backMat.map }, floor: {} };
  function show(id) {
    if (!SET_IDS.includes(id)) id = 'moon';
    if (id === cur && active) return cur;
    texCache.back[id] ??= BACK[id]();
    backMat.map = texCache.back[id]; backMat.needsUpdate = true;
    if (FLOOR[id]) { texCache.floor[id] ??= (() => { const t = FLOOR[id](); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(id === 'shop' ? 6 : 3, id === 'shop' ? 3 : 2); return t; })(); floorMat.map = texCache.floor[id]; floorMat.needsUpdate = true; floor.visible = true; }
    else floor.visible = false;
    if (active) active.group.visible = false;
    cache[id] ??= (() => { const p = PROPS[id](); scene.add(p.group); return p; })();
    active = cache[id]; active.group.visible = true; cur = id;
    return cur;
  }
  show('moon');
  return { show, get current() { return cur; }, tick(t) { active?.tick(t); } };
}
