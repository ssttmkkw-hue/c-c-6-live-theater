# AI Live Theater / AI 现场戏剧

**English** · [中文](#中文)

A browser 3D theater where you type an idea ("Hamlet meets the ghost"), a short script, or a public-domain scene — and **actors walk on and start speaking within milliseconds**, while the rest of the scene is still being parsed. You sit in the audience (the little gold avatar) and can **direct live**: "angrier", "softer", "faster", "they hug", "look at the audience", "change ending", "replay".

> Status: playable v1. **There is no public deployment** (no GitHub Pages, no hosting). Run it locally.

## Run
```bash
npm install
npm run dev      # open the printed URL (Chrome/Edge recommended for voices)
npm test         # unit tests: parser, live directives, AI helpers (offline)
npm run test:e2e # headless Chromium: first line < 50 ms, live directing, change ending, replay, mocked AI path
npm run build    # static build in dist/ (relative paths: works from any sub-path)
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
`direct(text)` maps bilingual keywords to operations (`src/directives.js`) and applies them without restarting. English keywords match **whole words only** (so "courage", "happen", "scarf" or "software" don't trigger moods), and negations flip the mood ("less angry" / 「别生气」 → softer).
* **mood** (angrier / softer / sadder / happier / more afraid / prouder): changes the current actor's emotion immediately, and overrides emotion + intensity of the next ~8 beats (a *style state* applied as each beat is popped from the queue — so it also affects beats still streaming in).
* **faster / slower**: scales speech rate and timing. **look at the audience**: everyone turns now; next 3 lines face out.
* **they hug**: injects a hug beat at the front of the queue. `NAME: line` injects a line for that actor.
* **change ending**: drops queued beats flagged `ending`, ignores ones still streaming, and appends a different ending (3 variants). Works after the show has finished, too.
* **replay**: replays what was performed.
* **Anything else** is acted at once as a stage direction. If the AI parser is selected, the same text is also sent to the model, which maps it to the operations above ("make her hesitate before answering" → softer + slower). Those arrive a moment later, are validated by `normalizeOps()`, and are marked ✦ in the directing log.

## Parsers
* **Local rule parser** (`src/parsers/local.js`, no key): play/screenplay formats (`NAME: text`, `NAME. text`, CAPS-name blocks, `[stage directions]`, `(parentheticals)`, `Enter/Exit`), long speeches split into sentence beats, emotion/gesture/movement inferred from text; one-line ideas → templated multi-beat scenes for 2 characters (ghost/Hamlet, quarrel, detective, love, comedy; ZH+EN); exported JSON.
* **AI streaming parser** (`src/parsers/ai.js`): interface + an Anthropic-style implementation that asks for **NDJSON** (one beat per line, starting with a `{"kind":"scene"}` set choice) and `yield`s each line as soon as it is complete (`ndjson()` helper). Enabled only if you save a key in the UI; falls back to local on failure. *It is tested against a mocked API (`npm run test:e2e`); no real key was used during development.*
* **Add your own**: create `{ id, available(), parse(text, ctx) }` where `parse` is an `async function*` yielding events, and register it in `src/parsers/index.js`.

## The no-secrets rule
API keys are entered in the UI and stored **only in your browser's `localStorage`** (`theater.aiKey`). They are never written to source, never logged, never put in URLs, and never committed. `.gitignore` covers `.env`, `.env.*`, `node_modules/`, `dist/`. Without a key the AI parser is simply unavailable.
Note: calling an LLM directly from a browser exposes the key to that browser; for anything shared, put a proxy in front instead.

## Stage & actors
Everything is procedural (boxes, capsules, spheres; no external assets or fonts). Actors are jointed rigs (hips/spine/neck/shoulders/elbows/hips/knees) driven each frame by emotion posture + gesture + idle breathing + talk motion + walk cycle; listeners turn to the speaker (speakers "cheat out" a little toward the house), nod, shift weight and fidget, and strong beats get a small motivated step. Ghosts are translucent, float, flicker and fade in/out. Costumes are auto-lightened so nobody vanishes into the wings. **Sets** (moonlit stage, castle ramparts, midnight shop, rainy alley, throne hall) are painted on canvas + a few low-poly props and chosen from the idea text or actor names (or an explicit `{kind:'scene'}` event). The audience is varied, turns toward the speaker, reacts (gasp/laugh/sad) and cheers at the end; your gold avatar with the red cap and floating arrow sits in the second-to-last row, seen from behind. Camera: **Auto** (default — an automatic director: wide on entrances, over-the-shoulder from your avatar's seat for dialogue, two-shots, close-ups on intense beats; each shot held >= 2.2 s), Audience (fixed), Close (forced close-up), Free orbit. Faces have tracking eyes, brows, blinks and mouth shapes; subtitles reveal word by word in sync with speech (or a fake word clock when muted), and the audience reacts with synthesised sound. Live directing is instant: it cuts the current line, adds an in-mood ad-lib, and any free text ("he kneels and lifts his hat", "enter a guard") is acted as a stage direction.

## Performance
Quality adapts to the frame rate. Below ~28 fps it steps down: first medium (1x pixels, shadows refreshed every 3rd frame), then low (0.75x pixels, near-static shadows, the audience animated at half rate). It steps back up carefully, at most twice. Add `?quality=low|medium|high` to the URL to pin a level. three.js ships as its own chunk, so app updates don't re-download it.

## Known limitations
* Voices depend on your browser/OS.
* The local parser's emotion inference is heuristic.
* Idea templates are small.
* Without the AI parser, directing is keyword-based; unknown text is acted as a stage direction.
* Actor avoidance is push-out only, with no pathfinding.
* Desktop only.

---

## 中文

在浏览器里的 3D 剧场：输入一句想法（如"哈姆雷特遇见鬼魂"）、一段短剧本或公版台词，**几十毫秒内演员就登台开口**，其余部分边解析边演。你是观众席里那个金色小人，可以**现场导演**：「更生气」「温柔点」「快一点」「他们拥抱」「看观众」「换个结局」「重播」。

> 状态：可玩的 v1。**目前没有任何公开部署**（没有 GitHub Pages）。请本地运行。

### 运行
```bash
npm install
npm run dev     # 打开终端里的网址（推荐 Chrome/Edge，语音更全）
npm test        # 单元测试：解析器、导演指令、AI 辅助函数（离线）
npm run test:e2e # 无头 Chromium：首句 < 50 ms、现场导演、换结局、重播、模拟的 AI 流程
```

### 实时流水线
解析器是一个异步生成器，逐个产出 `actor / beat / end` 事件；导演（Director）用 `for await` 消费，**第一个节拍一到就开演**，不等整段解析完。界面显示「开演→首句」毫秒数与「首个节拍就绪」毫秒数。语音用 `speechSynthesis`，每个角色音高/语速/声音不同，按每句语言（中/英混合）选声；**没有语音或语音不触发结束事件时，按字数估算时长并有看门狗，演出绝不卡住**，字幕始终显示。勾选「模拟慢速解析」可看到边解析边演出。

### 现场导演
关键词（中英）→ 操作，不重启。英文按**整词**匹配（"courage""happen""scarf" 不再误判为情绪），否定会反转情绪（「别生气」/"less angry" → 更温柔）。情绪类（更生气/温柔/悲伤/开心/害怕/骄傲）立刻改变当前演员，并覆盖后续约 8 拍（风格状态在每个节拍出队时生效，所以对仍在流入的节拍也有效）；快/慢；看观众；他们拥抱；`角色名：台词` 插入台词；**换个结局**：丢弃尚未演出的原结局并接上新结局（3 种），演完后也能用；重播。其他任何文字都会立刻作为舞台提示演出。如果选择了 AI 解析器，同一句话还会交给模型理解，映射成上面的操作（如「让她回答前犹豫一下」→ 更温柔 + 放慢）。这些操作稍后到达，经过校验后执行，并在导演记录里标 ✦。

### 解析器
* **本地规则解析器**（无需密钥）：支持 `名字：台词`、`NAME.`、大写名字块、`[舞台提示]`、`(括号情绪)`、Enter/Exit；一句话创意 → 双人短剧模板（鬼魂/哈姆雷特、争吵、侦探、爱情、喜剧；中英）；可导入导出 JSON。
* **AI 流式解析器**：接口 + NDJSON 增量输出实现（`src/parsers/ai.js`），首行先选场景 `{"kind":"scene"}`。只有在界面里保存密钥后才可用；失败自动回退本地。**用模拟 API 测试（`npm run test:e2e`），开发中没有使用真实密钥。**
* **新增解析器**：实现 `{id, available(), parse(text, ctx)}`（`async function*` 逐个 `yield` 事件），并在 `src/parsers/index.js` 注册。数据格式见 `docs/FORMAT.md`。

### 密钥规则
密钥只保存在你浏览器的 `localStorage`，不写入源码、不打印日志、不进 git。`.gitignore` 已覆盖 `.env`、`.env.*`、`node_modules/`、`dist/`。没有密钥时 AI 解析器直接不可用。

### 已知限制
语音依赖浏览器/系统；场景为程序化绘制、仅 5 种；本地情绪推断是启发式的；模板较少；导演指令基于关键词；演员之间没有避让；仅桌面端。

All art is original and procedural. Hamlet lines are Shakespeare (public domain); the skit is original. / 所有美术均为原创程序化生成；哈姆雷特台词为莎士比亚公版文本；短剧为原创。

### 性能
画质按帧率自动调整。低于约 28 fps 时降档：先降到中档（1 倍像素，每 3 帧刷新一次阴影），再降到低档（0.75 倍像素，阴影近乎静止，观众动画减半）。之后谨慎升档，最多两次。在网址后加 `?quality=low|medium|high` 可以固定档位。three.js 单独分包，应用更新时不必重新下载。
