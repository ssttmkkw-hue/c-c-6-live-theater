// Heuristics shared by the local parser: line text -> emotion / gesture / intensity.
const HINTS = [
  [/angr|furious|rage|shout|yell|愤怒|生气|怒|吼|大喊/i, 'angry'],
  [/sad|weep|cry|sob|tears|悲|哭|泪|低下头|head down/i, 'sad'],
  [/proud|boast|骄傲|自豪/i, 'proud'],
  [/think|ponder|muse|contempl|沉思|思考|若有所思/i, 'contemplative'],
  [/gasp|shock|startle|surpris|吃惊|惊讶|震惊/i, 'gasp'],
  [/laugh|smil|cheer|happ|joy|大笑|笑|开心|高兴/i, 'happy'],
  [/afraid|fear|terrif|trembl|scared|害怕|恐惧|颤抖/i, 'afraid'],
  [/tender|gentl|soft|whisper|温柔|轻声|低语/i, 'tender'],
];
const WORDS = [
  [/\b(murder|revenge|how dare|damn|hate|villain|liar|never|traitor|fool)\b|杀|复仇|混蛋|可恶|岂有此理|怎么能|背叛|骗/i, 'angry'],
  [/\b(alas|sorrow|grief|woe|lost|alone|farewell|adieu|pity|sorry|goodbye)\b|可怜|唉|悲|孤独|再见|告别|对不起|遗憾/i, 'sad'],
  [/\b(honou?r|glory|noble|crown|majesty|triumph|victory)\b|荣耀|高贵|胜利|王冠/i, 'proud'],
  [/\b(perhaps|maybe|wonder|ponder|whether|to be or not|dream|why)\b|也许|或许|为什么|究竟|梦/i, 'contemplative'],
  [/\b(ha ha|haha|joke|wonderful|delight|thank|welcome)\b|哈哈|谢谢|欢迎|太好了|真棒/i, 'happy'],
  [/\b(ghost|dead|dark|night|terror|horror|afraid)\b|鬼|死|黑暗|恐怖|害怕/i, 'afraid'],
  [/\b(love|dear|darling|sweet|heart)\b|爱|亲爱|温柔|心/i, 'tender'],
];

export function emotionFromHint(h) {
  if (!h) return null;
  for (const [re, e] of HINTS) if (re.test(h)) return e;
  return null;
}

export function inferEmotion(text) {
  const ex = (text.match(/[!！]/g) || []).length;
  for (const [re, e] of WORDS) if (re.test(text)) return e;
  if (/^(what|murder|o god|什么|啊)[\s?!？！.]*$/i.test(text.trim())) return 'gasp';
  if (ex >= 2) return 'angry';
  if (ex === 1 && text.length < 24) return 'gasp';
  if (/[?？]/.test(text)) return 'contemplative';
  return 'neutral';
}

export function inferGesture(text, emotion, i = 0) {
  if (/kneel|pardon|forgive|beg\b|跪|恳求|原谅/i.test(text)) return 'kneel';
  if (/my lord|your majesty|sir\b|madam|bow\b|鞠躬|陛下|大人/i.test(text)) return 'bow';
  if (/\b(you|thou|thee|thy|there|that|him|her)\b|你|他|她|那边|那里/i.test(text) && (emotion === 'angry' || i % 3 === 0)) return 'point';
  if (/hello|welcome|goodnight|farewell|adieu|再见|晚安|欢迎|你好/i.test(text)) return 'wave';
  if (/\b(perhaps|maybe|who knows)\b|也许|耸肩|不知道/i.test(text)) return 'shrug';
  switch (emotion) {
    case 'angry': return 'angry';
    case 'sad': return 'sad';
    case 'proud': return 'proud';
    case 'contemplative': return 'think';
    case 'gasp': return 'gasp';
    case 'afraid': return 'gasp';
    case 'happy': return i % 2 ? 'laugh' : 'talk';
    default: return 'talk';
  }
}

export function inferIntensity(text, emotion) {
  let v = 0.45;
  v += Math.min(0.3, (text.match(/[!！]/g) || []).length * 0.12);
  if (/[A-Z]{4,}/.test(text)) v += 0.1;
  if (emotion === 'angry') v += 0.15;
  if (emotion === 'tender' || emotion === 'sad') v -= 0.1;
  return Math.max(0.15, Math.min(1, v));
}

// Stage directions -> structured effect.
export function parseDirection(text) {
  const d = { gesture: null, move: null, emotion: null, who: null };
  const s = text;
  if (/exit|exeunt|leaves|下场|退场|离开|消失|vanish/i.test(s)) d.move = 'exit';
  else if (/enter|enters|上场|登场|走上|appears|出现/i.test(s)) d.move = 'enter';
  if (/kneel|跪/i.test(s)) d.gesture = 'kneel';
  else if (/bow|鞠躬/i.test(s)) d.gesture = 'bow';
  else if (/hug|embrace|拥抱/i.test(s)) d.gesture = 'hug';
  else if (/point|指/i.test(s)) d.gesture = 'point';
  else if (/laugh|大笑/i.test(s)) d.gesture = 'laugh';
  else if (/wave|挥手/i.test(s)) d.gesture = 'wave';
  d.emotion = emotionFromHint(s);
  return d;
}

// split a long speech into sentence-sized beats
export function splitSentences(text, max = 120) {
  const parts = text.replace(/\s+/g, ' ').trim().match(/[^.!?。！？;；]+[.!?。！？;；]*["'”’)]*/g) || [text];
  const out = [];
  let cur = '';
  for (const p of parts) {
    const c = p.trim();
    if (!c) continue;
    if (cur && (cur + ' ' + c).length > max) { out.push(cur); cur = c; }
    else cur = cur ? cur + ' ' + c : c;
    if (cur.length >= 40 && /[.!?。！？]$/.test(cur)) { out.push(cur); cur = ''; }
  }
  if (cur) out.push(cur);
  return out;
}
