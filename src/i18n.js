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
    viewLabel: '视角', viewAuto: '自动运镜', viewAud: '观众席', viewClose: '特写', viewFree: '自由',
    beatsLabel: '节拍流', export: '导出 JSON', import: '导入 JSON',
    aiSummary: 'AI 解析器（可选）',
    aiNote: '密钥只保存在本机浏览器 localStorage，不会写入代码或仓库。没有密钥时使用本地规则解析器。',
    keySave: '保存密钥', keyClear: '清除密钥', parserLabel: '解析器',
    parserLocal: '本地规则解析（无需密钥）', parserAi: 'AI 流式解析（需要密钥）',
    stIdle: '空闲', stParsing: '解析中…', stFirst: '首个节拍就绪', stPerf: n => `正在演出第 ${n} 拍`,
    stPaused: '已暂停', stDone: '演出结束 · 谢幕', stStopped: '已停止', stDirective: t => `已应用现场指令：${t}`,
    stAiFallback: 'AI 解析不可用，已回退到本地解析器',
    dirNone: '没听懂这条指令。试试：更生气 / 温柔点 / 快一点 / 换个结局 / 他们拥抱 / 看观众 / 重播',
    dirNoShow: '请先开演。', dirStage: t => `舞台提示：${t}`, dirAdd: n => `${n} 登场`,
    dirAngrier: '更生气', dirSofter: '更温柔', dirSadder: '更悲伤', dirHappier: '更开心', dirScarier: '更害怕', dirProuder: '更骄傲',
    dirFaster: '加快节奏', dirSlower: '放慢节奏', dirEnding: '换个结局', dirHug: '拥抱', dirAudience: '看向观众', dirReplay: '重播', dirReset: '恢复原样',
    chips: ['更生气', '温柔点', '更悲伤', '快一点', '慢一点', '换个结局', '他们拥抱', '看观众', '来个侍卫', '重播'],
    // 即兴台词：情绪指令触发时插入一句（按演出语言选择）
    adlibs: {
      angry: ['你敢！', '够了！', '这简直岂有此理！', '我再也忍不下去了！'],
      sad: ['……我只是觉得好难过。', '唉，也许一切都晚了。', '（声音哽住了）'],
      tender: ['（轻声）没事的，我在这里。', '（压低声音）别怕。', '慢慢说，我听着。'],
      happy: ['哈哈，太好了！', '这真是个好消息！', '我忍不住要笑了！'],
      afraid: ['那是什么声音？！', '别、别过来！', '我……我好怕。'],
      gasp: ['啊！', '天哪！', '什么？！'],
      proud: ['我从不后悔。', '这是我应得的荣耀。', '谁敢与我相比？'],
      contemplative: ['……让我想想。', '也许，事情没那么简单。'],
      neutral: ['嗯。', '是这样。'],
      enter: ['打扰了，是谁叫我？', '我来了，有什么吩咐？', '听说这里很热闹。'],
    },
    sampleHamletIdea: '哈姆雷特遇见鬼魂', sampleHamletText: '哈姆雷特选段（公版）', sampleSkit: '原创短剧：深夜便利店', sampleLove: '一句话：侦探对峙小偷', sampleEn: '一句话：国王和小丑吵架',
    nowSpeaking: '节拍', noScript: '请先输入内容，或点一个示例。',
    imported: '已导入 JSON', importBad: '导入失败：不是有效的演出 JSON', exported: '已导出',
    keySaved: '密钥已保存在本机', keyCleared: '密钥已清除',
    finished: '— 终 —',
    restart: '重新开演', setLabel: '场景', you: '你',
    emo: { neutral: '平静', angry: '愤怒', sad: '悲伤', proud: '骄傲', contemplative: '沉思', gasp: '惊讶', happy: '开心', afraid: '害怕', tender: '温柔' },
    gest: { none: '站定', talk: '说话', point: '指向', bow: '鞠躬', kneel: '跪下', stand: '起身', gasp: '惊呼', angry: '怒吼', sad: '垂泪', proud: '挺胸', think: '沉思', hug: '拥抱', wave: '挥手', shrug: '耸肩', laugh: '大笑' },
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
    viewLabel: 'Camera', viewAuto: 'Auto', viewAud: 'Audience', viewClose: 'Close', viewFree: 'Free',
    beatsLabel: 'Beat stream', export: 'Export JSON', import: 'Import JSON',
    aiSummary: 'AI parser (optional)',
    aiNote: 'Your key is stored only in this browser\'s localStorage — never in code or git. Without a key the local rule parser is used.',
    keySave: 'Save key', keyClear: 'Clear key', parserLabel: 'Parser',
    parserLocal: 'Local rules (no key needed)', parserAi: 'AI streaming (key required)',
    stIdle: 'Idle', stParsing: 'Parsing…', stFirst: 'First beat ready', stPerf: n => `Performing beat ${n}`,
    stPaused: 'Paused', stDone: 'Show finished · curtain call', stStopped: 'Stopped', stDirective: t => `Live directive applied: ${t}`,
    stAiFallback: 'AI parser unavailable — fell back to local parser',
    dirNone: 'Directive not understood. Try: angrier / softer / faster / change ending / they hug / look at the audience / replay',
    dirNoShow: 'Start a show first.', dirStage: t => `Stage direction: ${t}`, dirAdd: n => `${n} enters`,
    dirAngrier: 'angrier', dirSofter: 'softer', dirSadder: 'sadder', dirHappier: 'happier', dirScarier: 'more afraid', dirProuder: 'prouder',
    dirFaster: 'faster', dirSlower: 'slower', dirEnding: 'change ending', dirHug: 'hug', dirAudience: 'look at the audience', dirReplay: 'replay', dirReset: 'reset style',
    chips: ['angrier', 'softer', 'sadder', 'faster', 'slower', 'change ending', 'they hug', 'look at the audience', 'enter a guard', 'replay'],
    adlibs: {
      angry: ['How dare you!', 'Enough!', 'This is outrageous!', 'I will not stand for this!'],
      sad: ['...I just feel so low.', 'Alas, perhaps it is too late.', '(voice breaking)'],
      tender: ['(softly) It is all right. I am here.', '(a whisper) Do not be afraid.', 'Take your time. I am listening.'],
      happy: ['Ha! Wonderful!', 'What splendid news!', 'I cannot help but laugh!'],
      afraid: ['What was that sound?!', 'S-stay back!', 'I... I am so afraid.'],
      gasp: ['Ah!', 'Good heavens!', 'What?!'],
      proud: ['I regret nothing.', 'This honour is mine by right.', 'Who dares compare?'],
      contemplative: ['...Let me think.', 'Perhaps it is not so simple.'],
      neutral: ['Hm.', 'So it is.'],
      enter: ['Pardon me, did someone call?', 'I came as soon as I could. What is it?', 'I heard there was a commotion.'],
    },
    sampleHamletIdea: 'Hamlet meets the ghost', sampleHamletText: 'Hamlet excerpt (public domain)', sampleSkit: 'Original skit: Midnight Shop', sampleLove: 'Idea: detective confronts thief', sampleEn: 'Idea: a king and a jester quarrel',
    nowSpeaking: 'Beat', noScript: 'Type something first, or click a sample.',
    imported: 'JSON imported', importBad: 'Import failed: not a valid performance JSON', exported: 'Exported',
    keySaved: 'Key saved locally', keyCleared: 'Key cleared',
    finished: '— The End —',
    restart: 'Restart show', setLabel: 'Set', you: 'You',
    emo: { neutral: 'calm', angry: 'angry', sad: 'sad', proud: 'proud', contemplative: 'pensive', gasp: 'shocked', happy: 'happy', afraid: 'afraid', tender: 'tender' },
    gest: { none: 'hold', talk: 'talk', point: 'point', bow: 'bow', kneel: 'kneel', stand: 'rise', gasp: 'gasp', angry: 'rage', sad: 'weep', proud: 'chest out', think: 'ponder', hug: 'hug', wave: 'wave', shrug: 'shrug', laugh: 'laugh' },
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
/** ad-lib line for the *show* language ('zh'|'en'), pick = any integer for variety */
export const adlib = (emo, showLang, pick = 0) => { const pool = (dict[showLang === 'en' ? 'en' : 'zh'].adlibs[emo] || dict.zh.adlibs.neutral); return pool[Math.abs(pick) % pool.length]; };
export const onLang = f => listeners.push(f);
export function applyStatic() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  const s = document.getElementById('script'); if (s) s.placeholder = t('scriptPh');
  const d = document.getElementById('directIn'); if (d) d.placeholder = t('directPh');
  document.getElementById('langBtn').textContent = lang === 'zh' ? 'EN' : '中文';
  document.title = lang === 'zh' ? 'AI 现场戏剧 · AI Live Theater' : 'AI Live Theater · AI 现场戏剧';
}
