// Tiny i18n: Chinese (default) + English. Persisted in localStorage.
const KEY = 'theater.lang';
const dict = {
  zh: {
    title: 'AI 现场戏剧',
    tagline: '输入一句想法或一段剧本，演员立刻登台开演；演出中还能随时现场导演。',
    scriptLabel: '剧本 / 一句话创意 / 公版台词',
    scriptPh: '例如：哈姆雷特遇见鬼魂\n或者  名字：台词  格式的剧本',
    start: '开演', pause: '暂停', resume: '继续', stop: '停止', replay: '重播',
    slowParse: '模拟慢速解析（演示边解析边演出）', mute: '静音（仍显示字幕）',
    status: '状态', ttfl: '开演→首句', firstBeat: '首个节拍就绪',
    directLabel: '现场导演（演出中随时提交）',
    directPh: '例如：更生气一点 / 换个结局 / 他们拥抱',
    send: '提交',
    viewLabel: '视角', viewAud: '观众席', viewClose: '特写', viewFree: '自由',
    beatsLabel: '节拍流', export: '导出 JSON', import: '导入 JSON',
    aiSummary: 'AI 解析器（可选）',
    aiNote: '密钥只保存在本机浏览器 localStorage，不会写入代码或仓库。没有密钥时使用本地规则解析器。',
    keySave: '保存密钥', keyClear: '清除密钥', parserLabel: '解析器',
    parserLocal: '本地规则解析（无需密钥）', parserAi: 'AI 流式解析（需要密钥）',
    stIdle: '空闲', stParsing: '解析中…', stFirst: '首个节拍就绪', stPerf: n => `正在演出第 ${n} 拍`,
    stPaused: '已暂停', stDone: '演出结束 · 谢幕', stStopped: '已停止', stDirective: t => `已应用现场指令：${t}`,
    stAiFallback: 'AI 解析不可用，已回退到本地解析器',
    dirNone: '没听懂这条指令。试试：更生气 / 温柔点 / 快一点 / 换个结局 / 他们拥抱 / 看观众 / 重播',
    dirNoShow: '请先开演。',
    dirAngrier: '更生气', dirSofter: '更温柔', dirSadder: '更悲伤', dirHappier: '更开心', dirScarier: '更害怕', dirProuder: '更骄傲',
    dirFaster: '加快节奏', dirSlower: '放慢节奏', dirEnding: '换个结局', dirHug: '拥抱', dirAudience: '看向观众', dirReplay: '重播', dirReset: '恢复原样',
    chips: ['更生气', '温柔点', '更悲伤', '快一点', '慢一点', '换个结局', '他们拥抱', '看观众', '重播'],
    sampleHamletIdea: '哈姆雷特遇见鬼魂', sampleHamletText: '哈姆雷特选段（公版）', sampleSkit: '原创短剧：深夜便利店', sampleLove: '一句话：侦探对峙小偷', sampleEn: 'Idea: a king and a jester quarrel',
    nowSpeaking: '节拍', noScript: '请先输入内容，或点一个示例。',
    imported: '已导入 JSON', importBad: '导入失败：不是有效的演出 JSON', exported: '已导出',
    keySaved: '密钥已保存在本机', keyCleared: '密钥已清除',
    finished: '— 终 —',
  },
  en: {
    title: 'AI Live Theater',
    tagline: 'Type an idea or a script. Actors walk on instantly — and you can direct live, mid-show.',
    scriptLabel: 'Script / one-line idea / public-domain scene',
    scriptPh: 'e.g. Hamlet meets the ghost\nor a script in  NAME: line  format',
    start: 'Start', pause: 'Pause', resume: 'Resume', stop: 'Stop', replay: 'Replay',
    slowParse: 'Simulate slow parser (shows streaming)', mute: 'Mute voices (subtitles stay)',
    status: 'Status', ttfl: 'Start → first line', firstBeat: 'First beat ready',
    directLabel: 'Live direction (submit any time mid-show)',
    directPh: 'e.g. angrier / change ending / they hug',
    send: 'Send',
    viewLabel: 'Camera', viewAud: 'Audience', viewClose: 'Close-up', viewFree: 'Free',
    beatsLabel: 'Beat stream', export: 'Export JSON', import: 'Import JSON',
    aiSummary: 'AI parser (optional)',
    aiNote: 'Your key is stored only in this browser\'s localStorage — never in code or git. Without a key the local rule parser is used.',
    keySave: 'Save key', keyClear: 'Clear key', parserLabel: 'Parser',
    parserLocal: 'Local rules (no key needed)', parserAi: 'AI streaming (key required)',
    stIdle: 'Idle', stParsing: 'Parsing…', stFirst: 'First beat ready', stPerf: n => `Performing beat ${n}`,
    stPaused: 'Paused', stDone: 'Show finished · curtain call', stStopped: 'Stopped', stDirective: t => `Live directive applied: ${t}`,
    stAiFallback: 'AI parser unavailable — fell back to local parser',
    dirNone: 'Directive not understood. Try: angrier / softer / faster / change ending / they hug / look at the audience / replay',
    dirNoShow: 'Start a show first.',
    dirAngrier: 'angrier', dirSofter: 'softer', dirSadder: 'sadder', dirHappier: 'happier', dirScarier: 'more afraid', dirProuder: 'prouder',
    dirFaster: 'faster', dirSlower: 'slower', dirEnding: 'change ending', dirHug: 'hug', dirAudience: 'look at the audience', dirReplay: 'replay', dirReset: 'reset style',
    chips: ['angrier', 'softer', 'sadder', 'faster', 'slower', 'change ending', 'they hug', 'look at the audience', 'replay'],
    sampleHamletIdea: 'Hamlet meets the ghost', sampleHamletText: 'Hamlet excerpt (public domain)', sampleSkit: 'Original skit: Midnight Shop', sampleLove: 'Idea: detective confronts thief', sampleEn: 'Idea: a king and a jester quarrel',
    nowSpeaking: 'Beat', noScript: 'Type something first, or click a sample.',
    imported: 'JSON imported', importBad: 'Import failed: not a valid performance JSON', exported: 'Exported',
    keySaved: 'Key saved locally', keyCleared: 'Key cleared',
    finished: '— The End —',
  },
};

let lang = localStorage.getItem(KEY) === 'en' ? 'en' : 'zh';
const listeners = [];
export const getLang = () => lang;
export function t(key, ...args) {
  const v = dict[lang][key] ?? dict.zh[key] ?? key;
  return typeof v === 'function' ? v(...args) : v;
}
export function setLang(l) {
  lang = l;
  localStorage.setItem(KEY, l);
  document.documentElement.lang = l;
  applyStatic();
  listeners.forEach(f => f(l));
}
export const onLang = f => listeners.push(f);
export function applyStatic() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  const s = document.getElementById('script'); if (s) s.placeholder = t('scriptPh');
  const d = document.getElementById('directIn'); if (d) d.placeholder = t('directPh');
  document.getElementById('langBtn').textContent = lang === 'zh' ? 'EN' : '中文';
  document.title = lang === 'zh' ? 'AI 现场戏剧 · AI Live Theater' : 'AI Live Theater · AI 现场戏剧';
}
