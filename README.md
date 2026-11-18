# AI Live Theater / AI 现场戏剧

**English** · [中文](#中文)

A browser 3D theater where you type an idea ("Hamlet meets the ghost"), a short script, or a public-domain scene — and **actors walk on and start speaking within milliseconds**, while the rest of the scene is still being parsed. You sit in the audience (the little gold avatar) and can **direct live**: "angrier", "softer", "faster", "they hug", "look at the audience", "change ending", "replay".

> Status: playable v1. **There is no public deployment** (no GitHub Pages, no hosting). Run it locally.

## Run
```bash
npm install
npm run dev      # open the printed URL (Chrome/Edge recommended for voices)
npm test         # parser smoke tests
npm run build    # static build in dist/
```

## How the live pipeline works
```
text ──▶ parser (async generator) ──events──▶ Director ──▶ actors / speech / subtitles
          actor… beat… beat… end                 │  queue + style state  ▲
                                                 └──── live directives ──┘
```
* A **parser** is just `parse(text, ctx) → async iterable` of `{kind:'actor'|'beat'|'end'}` events (see `docs/FORMAT.md`).
* The **Director** consumes the stream with `for await`. The moment the first beat arrives it is performed — it does not wait for the stream to end. `actor` events make actors walk on from the wings (ghosts materialize) immediately.
* The UI shows **Start → first line (ms)** and **first beat ready (ms)**. With the local parser both are typically ~10–30 ms (plus one frame).
* Speech uses `speechSynthesis`, with per-actor pitch/rate/voice and per-line language (Chinese/English lines in one scene work). **If no voice exists (e.g. headless Chrome) or speech never fires `end`, timing falls back to a word-count estimate with a watchdog — the show never hangs.** Subtitles are always shown.
* *Simulate slow parser* adds a delay between beats so you can see performance start while parsing continues.

## Live directing
`direct(text)` maps bilingual keywords to operations (`src/directives.js`) and applies them without restarting:
* **mood** (angrier / softer / sadder / happier / more afraid / prouder): changes the current actor's emotion immediately, and overrides emotion + intensity of the next ~8 beats (a *style state* applied as each beat is popped from the queue — so it also affects beats still streaming in).
* **faster / slower**: scales speech rate and timing. **look at the audience**: everyone turns now; next 3 lines face out.
* **they hug**: injects a hug beat at the front of the queue. `NAME: line` injects a line for that actor.
* **change ending**: drops queued beats flagged `ending`, ignores ones still streaming, and appends a different ending (3 variants). Works after the show has finished, too.
* **replay**: replays what was performed. Unknown text shows a hint.

## Parsers
* **Local rule parser** (`src/parsers/local.js`, no key): play/screenplay formats (`NAME: text`, `NAME. text`, CAPS-name blocks, `[stage directions]`, `(parentheticals)`, `Enter/Exit`), long speeches split into sentence beats, emotion/gesture/movement inferred from text; one-line ideas → templated multi-beat scenes for 2 characters (ghost/Hamlet, quarrel, detective, love, comedy; ZH+EN); exported JSON.
* **AI streaming parser** (`src/parsers/ai.js`): interface + an Anthropic-style implementation that asks for **NDJSON** (one beat per line) and `yield`s each line as soon as it is complete (`ndjson()` helper). Enabled only if you save a key in the UI; falls back to local on failure. *It was never called during development — no key, no spend.*
* **Add your own**: create `{ id, available(), parse(text, ctx) }` where `parse` is an `async function*` yielding events, and register it in `src/parsers/index.js`.

## The no-secrets rule
API keys are entered in the UI and stored **only in your browser's `localStorage`** (`theater.aiKey`). They are never written to source, never logged, never put in URLs, and never committed. `.gitignore` covers `.env`, `.env.*`, `node_modules/`, `dist/`. Without a key the AI parser is simply unavailable.
Note: calling an LLM directly from a browser exposes the key to that browser; for anything shared, put a proxy in front instead.

## Stage & actors
Everything is procedural (boxes, capsules, spheres; no external assets or fonts). Actors are jointed rigs (hips/spine/neck/shoulders/elbows/hips/knees) driven each frame by emotion posture + gesture + idle breathing + talk motion + walk cycle; they turn to face the speaker. Ghosts are translucent, float, flicker and fade in/out. Camera: audience (behind/above your seat), close-up (follows the speaker), free orbit.

## Known limitations
Voices depend on your browser/OS; the local parser's emotion inference is heuristic; idea templates are small; directives are keyword-based (an AI parser could interpret free-form direction — extension point); no collision avoidance between actors; desktop only.

---

## 中文

在浏览器里的 3D 剧场：输入一句想法（如"哈姆雷特遇见鬼魂"）、一段短剧本或公版台词，**几十毫秒内演员就登台开口**，其余部分边解析边演。你是观众席里那个金色小人，可以**现场导演**：「更生气」「温柔点」「快一点」「他们拥抱」「看观众」「换个结局」「重播」。

> 状态：可玩的 v1。**目前没有任何公开部署**（没有 GitHub Pages）。请本地运行。

### 运行
```bash
npm install
npm run dev     # 打开终端里的网址（推荐 Chrome/Edge，语音更全）
npm test        # 解析器冒烟测试
```

### 实时流水线
解析器是一个异步生成器，逐个产出 `actor / beat / end` 事件；导演（Director）用 `for await` 消费，**第一个节拍一到就开演**，不等整段解析完。界面显示「开演→首句」毫秒数与「首个节拍就绪」毫秒数。语音用 `speechSynthesis`，每个角色音高/语速/声音不同，按每句语言（中/英混合）选声；**没有语音或语音不触发结束事件时，按字数估算时长并有看门狗，演出绝不卡住**，字幕始终显示。勾选「模拟慢速解析」可看到边解析边演出。

### 现场导演
关键词（中英）→ 操作，不重启：情绪类（更生气/温柔/悲伤/开心/害怕/骄傲）立刻改变当前演员，并覆盖后续约 8 拍（风格状态在每个节拍出队时生效，所以对仍在流入的节拍也有效）；快/慢；看观众；他们拥抱；`角色名：台词` 插入台词；**换个结局**：丢弃尚未演出的原结局并接上新结局（3 种），演完后也能用；重播。

### 解析器
* **本地规则解析器**（无需密钥）：支持 `名字：台词`、`NAME.`、大写名字块、`[舞台提示]`、`(括号情绪)`、Enter/Exit；一句话创意 → 双人短剧模板（鬼魂/哈姆雷特、争吵、侦探、爱情、喜剧；中英）；可导入导出 JSON。
* **AI 流式解析器**：接口 + NDJSON 增量输出实现（`src/parsers/ai.js`），只有在界面里保存密钥后才可用；失败自动回退本地。**开发过程中从未调用过，没有花任何钱。**
* **新增解析器**：实现 `{id, available(), parse(text, ctx)}`（`async function*` 逐个 `yield` 事件），并在 `src/parsers/index.js` 注册。数据格式见 `docs/FORMAT.md`。

### 密钥规则
密钥只保存在你浏览器的 `localStorage`，不写入源码、不打印日志、不进 git。`.gitignore` 已覆盖 `.env`、`.env.*`、`node_modules/`、`dist/`。没有密钥时 AI 解析器直接不可用。

### 已知限制
语音依赖浏览器/系统；本地情绪推断是启发式的；模板较少；导演指令基于关键词；演员之间没有避让；仅桌面端。

All art is original and procedural. Hamlet lines are Shakespeare (public domain); the skit is original. / 所有美术均为原创程序化生成；哈姆雷特台词为莎士比亚公版文本；短剧为原创。
