# Round notes / 轮次记录

## Round 3 (this round) / 第 3 轮

### What changed and why (English)
Round 2 made the show *visible*; round 3 makes it feel *directed and live*. Implemented from `docs/UPGRADE_R3.md`: all P0 items and most P1 items.

**P0**
1. **Auto director camera** (`scene.js:cue/solveShot`, `director.js:next`). Default view is now **Auto**; buttons are Auto / Audience / Close / Free (manual overrides Auto). Each beat the Director sends `theater.cue({speaker, listener, intensity, emotion, entrance, close, beatNo})`. Shot menu: *wide* (entrances, first beat, curtain call, a re-establishing wide every 3–4 beats), *over-the-shoulder from the avatar's seat* (default dialogue shot: camera just behind/above the gold avatar, hat in the foreground; FOV is solved so the speaker+listener span ~60 % of frame width), *two-shot* (house side, normal to the pair), *close-up* (intensity >= 0.75, gasp/afraid, or an "angrier" directive). Close/two-shot cameras are placed ~30° off the speaker's `yaw`, on the house side, tried against the set's prop AABBs (`sets.obstacles`). Min hold 2.2 s (a cue inside the hold keeps the shot type and just follows the new speaker); a type change is a hard cut, same-type changes ease (dt-based). The avatar's pointer/ring is hidden in the OTS shot (it would sit in the lens). Curtain-call spotlight fixed: `frameShot` no longer runs in the `finished` state, `finish()` cues the wide shot.
2. **Instant, richer directing.** `injectFront(beat, {interrupt:true})` cancels the in-flight line (`speech.cancel()`, onend is ignored because it checks `this.cur === c`) and starts the new beat in the same call (measured `direct()` -> new beat in ~2 ms). Mood directives inject a short bilingual ad-lib (pool in `i18n.js`, picked by the *show's* language), a motivated step (toward on anger, away on fear/sad; for afraid/gasp the *listener* reacts), `theater.react` + audience sound. Unrecognised free text becomes an acted **stage direction** beat (`inferEmotion/Gesture/Intensity`, italic subtitle) — `dirNone` is now only reachable for empty input. New: "enter a guard" / "来个侍卫" (`addchar`: declare + enter + one-line entrance). Parser hardening: multiple moods ("angrier and sadder": last wins the emotion, deltas summed, both labelled), `\b` on fast/hug/normal/slow/replay/reset, bare 结局 no longer triggers an ending change.
3. **Readable faces** (`actor.js`). White sclera + pupils that track the look target (plus tiny saccades), emotion brows (angry inward-down, sad inward-up, gasp/afraid raised), blinks (random, occasional double), lids per emotion, an open-mouth blob + smile/frown arc per emotion. ~9 face meshes. Ghost and antenna eyes stay emissive. Hair/helmet/hood/jester caps were tilted back so fringes don't cover the brows.
4. **Speech-synced performance.** `speech.speak` passes `onboundary`; `speech.words()` gives word spans (CJK per character). Subtitles reveal word by word (DOM spans, no `innerHTML`, spoken words at full opacity). Every word fires `actor.pulse()` (arms/chest/nod/jaw) in place of the free-running sine (the sine remains only as a fallback when no pulse came for 1.6 s). When muted / headless / no boundary events a **fake word clock** derived from `estimateMs` (longer words and punctuation weigh more) drives the same path; if a voice never emits boundaries, the clock takes over after 0.7 s.
5. **Set selection fix.** `pickSet` scores all rules (text hits x2 + name hits) instead of first-match; the set is **locked after the first performed beat** (only a `scene` event or replay can change it; replay now always yields its `scene`). Bare 王 dropped (国王/王后/王座/王子/公主), 街 -> 街头/街道, `guard`/`street`/`king`/`queen` word-bounded. "robot meets ghost at the convenience store" -> shop; 小王和老王吵架 -> moonlit stage.

**P1 done**: obstacle/pair **avoidance** (push-out only; sets export AABBs); **anticipation** during `pauseMs` (next speaker pre-turns, listeners nod, next walk starts early); **idle business** when the queue is empty and the stream isn't done (think / shrug / look around); **synthesised audience sound** (`src/audio.js`: gasp whoosh, laugh murmur, sigh murmur, applause; AudioContext created lazily after a user gesture and only from beat 2 on; respects mute; throttled); **local parser variety** (seeded business beats + small gesture/move/intensity variations; `parseLocal(text, {seed})`, first beat and endings untouched); **costumes** (3-panel hinged lagging cape, wavy ghost hem with per-vertex displacement, blob contact shadows from a procedural DataTexture); **entrance logic** (only the opening cast walks on at once; later-introduced actors wait in the wings until their first line / enter beat); **set prewarm** (other sets' canvases/props are built from idle timers so a cold set never lands inside the first-beat window).

**Skipped**: shop prop depth / 1024x512 backdrops (P1 stretch), all P2 (adaptive quality, AI `scene`/`camera` hints, Playwright regression). Not touched per the skip list: IK/skinning, new shadow lights, pathfinding, share URLs, TTS replacement.

### Timing (headless Chromium, software GL, local parser)
Start -> first line (`#ttfl`), fresh page, TTS unavailable: Hamlet idea 12 ms, "robot meets ghost at the convenience store" 10 ms (cold, 100 ms after load) / 9 ms (warm), detective 10 ms, king/jester 9 ms, "Alice meets Bob" 11 ms. Before prewarming a cold shop was 29–44 ms because its canvases were painted inside the window. `direct('angrier and sadder')` mid-line -> new beat started: ~2.4 ms. Rendering is still ~5 fps on software GL (dt-based, so it looks the same, just choppier).

### Remaining limitations
- On real TTS voices the boundary path is untested here (headless has no voices); it is covered by the same code path as the fake clock but should be eyeballed in a real browser.
- Cameras clip-test only against prop AABBs; the proscenium/flats are handled by position clamps, not tests. A speaker facing upstage gets a 3/4-back shot.
- OTS shot depends on the avatar's seat being clear; very wide pairs make a wide FOV.
- Avoidance is push-out only: fast crossings can still briefly overlap. Ghosts avoid solid actors only loosely.
- Free text only maps to the keyword emotion/gesture tables, so subtle directions ("hesitate") become a generic pensive beat.
- No adaptive quality yet; ~40 audience meshes + shadows are still costly on weak GPUs. Backdrops are still 512x256.
- Audio and TTS can't be heard in the headless checks; levels were chosen conservatively.

### 本轮改动（中文）
第 2 轮解决了"看得见"，第 3 轮解决"像被导演、像现场"。按 `docs/UPGRADE_R3.md` 完成全部 P0 和大部分 P1。
- **自动运镜**：默认「自动运镜」，按钮为 自动/观众席/特写/自由（手动覆盖自动）。景别：全景（登场、首拍、谢幕、每 3–4 拍重建）、观众肩后过肩镜头（默认对话镜头，小人帽子在前景）、双人中景、特写（强度≥0.75、惊讶/害怕、"更生气"）。特写离说话者朝向约 30°、位于观众席一侧并避开道具；最短停留 2.2 秒，换景硬切、同景缓动，全部基于 dt。谢幕聚光灯修复。
- **即时导演**：`injectFront(..., {interrupt:true})` 立刻打断当前台词（约 2 ms 内新拍开始）；情绪指令插入一句双语即兴台词 + 动机步 + 观众反应与声音；听不懂的文本变成被表演出来的"舞台提示"；新增"来个侍卫 / enter a guard"；解析器支持多情绪组合并收紧了 fast/hug/normal/结局 的匹配。
- **可读的脸**：大眼睛 + 会追视的瞳孔、情绪眉毛、眨眼、嘴型（开口/微笑/皱眉）；鬼魂和机器人眼睛保持自发光。
- **语音联动**：`onboundary` 驱动逐词字幕和重音脉冲；静音/无语音/无边界事件时用假词钟（由 `estimateMs` 推出）。
- **选景修复**：计分选景，首拍后锁定（只有 scene 事件或重播能改），去掉裸"王"、收紧"街"和 kay。
- **P1**：避让、预判转身/提前走位、解析等待期闲笔、WebAudio 合成观众声、本地解析器种子变体与闲笔、三段披风/波浪鬼魂裙摆/接触阴影、后来者在侧台等待登场、场景预热（首句 9–12 ms）。
- **未做**：便利店道具纵深、P2（自适应画质、AI 的 scene/camera 提示、Playwright 回归）。

---

## English

### What v1 (round 1) built
- Vite + three.js, no paid assets. Local rule-based parser (idea → beats, `NAME: line` scripts, public-domain Hamlet excerpt, original skit), optional AI streaming parser (key in `localStorage` only).
- `Director` consumes a stream of events and starts performing the moment the first beat is ready (measured: ~7–10 ms to first line). Speech synthesis + subtitles, procedural jointed actors, curtains, spotlight, audience, 3 cameras.
- Mid-show directing (angrier / softer / faster / change ending / hug / look at audience / replay), keyword-based, applied to the current beat and all future beats.

### What round 2 changed (and why) — from looking at the real screenshots
1. **Player avatar was invisible → now a foreground figure.** Camera moved behind/above the audience (0, 4.9, 18.2); avatar moved to the second-to-last row with a cleared sightline, bigger, gold torso + red cap with brim and pom-pom, glow ring, small floating arrow. Seen from behind, it turns its head toward the speaker, reacts, and cheers at the end. (Found and fixed a NaN bug on the way: the avatar's head had vanished because a missing field poisoned its transform.)
2. **Actors no longer read as statues.** Relaxed bent-arm idle instead of arms hanging; continuous weight-shift (hip tilt, bent knee, body sway); listeners lean in, nod on a timer, and run small fidgets (hand-to-chin, shrug, small talk gestures); speakers get bigger alternating arm arcs, torso twist, phrase-peak emphasis that also rides on held poses (point/proud), longer holds (bow 2.6 s, gasp holds 0.75). Speakers "cheat out" 30 % toward the house. Strong beats trigger a small motivated step (toward on anger, away on fear/sadness, a drift otherwise). Everything is dt-based and sub-stepped, so low fps is fine.
3. **Costumes readable.** Cloth lightness is clamped, plus emissive floor, light trim (collar/belt/buckle), short capes for Hamlet/king/queen/detective (strong silhouette from behind). Ghost shroud rebuilt as an open flared cylinder with a hem — no more cone apex poking through the chest.
4. **Close-up is a real shot.** Head-to-knees on the speaker, or a two-shot with the nearest listener; it tracks *live* positions (the director now publishes the shot every sim step, not a snapshot at the cue), so a speaker who is still walking on is framed correctly. FOV eases between shots.
5. **Sets change with the show.** `src/theater/sets.js`: moonlit stage, castle ramparts (castle silhouette, crenellations, flickering torches), midnight shop (counter, register, shelves, fridge, checker floor, neon sign), rainy alley, throne hall. Picked from the idea text, then actor names; or explicitly via a `{kind:'scene', set}` stream event (documented in `docs/FORMAT.md`; the AI parser can use it). Replay keeps the set.
6. **Audience is not clones.** 9 hair/hat styles, heights, widths, kids, colours; they turn toward the speaker, jolt on gasp, bounce on happy, bow heads on sad, lean in on anger, and throw both arms up at curtain call.
7. **Fast start preserved.** First-line latency measured again on this box: 10–17 ms for Hamlet/king/detective, ~28–35 ms for the shop (first-time canvas painting of the set is *inside* the measured window). Entering speakers now start just behind the masking legs and hurry (×1.45) so the first line isn't delivered from the wings; listeners mid-entrance keep walking, heads turned to the speaker.
8. **UI.** Chinese chip translated; while a show is running "开演" turns into a quiet "重新开演" and the primary highlight moves to Pause + the directing box/Submit; beat tags are now colored emotion pills + readable gesture words (localized); added a "Set / 场景" status row.

### What I chose not to change
- Shadows/lights: no new shadow casters or extra real lights (torches/neon are emissive only) — software GL budget.
- Kept actors as boxes/capsules/spheres (no skinning, no IK, no imported assets).
- Directives are still keyword-based; the live-direction → performance path is unchanged apart from the look of the result.

### Remaining limitations
- Eyes/faces are minimal; from the house, facial emotion doesn't read — the body must carry it.
- Walk cycle has no foot planting; ghost drift is purely decorative.
- Actors can still overlap each other or props (no collision avoidance); upstage moves can clip the shop counter.
- Set picking is regex-based; an unfamiliar idea falls back to the moonlit stage.
- Browser TTS voice quality/availability varies; no lip-sync beyond a jaw flap.
- Only tested headless on software GL (~5 fps); a real GPU run is still due.

### Next ideas
1. Let the AI parser emit `scene`, per-beat `camera` (close/wide/two-shot) and `blocking` hints, so the camera cuts like a director.
2. Automatic camera: wide on entrances, two-shot on dialogue, close on high-intensity beats, with the manual toggle as an override.
3. Free-form directing via the AI parser ("make her hesitate before answering") mapped to the same style/gesture ops.
4. Props that actors use (pick up a cup, open the register); audience reactions driven by emotion tags with sound (laugh/gasp/applause via WebAudio, synthesized, no assets).
5. Share a performance as URL/JSON, and a "stream mode" overlay (clean stage, big subtitles, chat → directives).
6. Visual regression: a Playwright script that screenshots each set and asserts first-line latency stays < 50 ms.

---

## 中文

### v1（第 1 轮）做了什么
- Vite + three.js，无任何付费素材。本地规则解析器（一句话创意 → 节拍、`名字：台词` 剧本、公版《哈姆雷特》选段、原创短剧），可选 AI 流式解析（密钥仅存 `localStorage`）。
- `Director` 消费事件流，**首个节拍一就绪就开演**（实测首句约 7–10 ms）。语音合成 + 字幕、程序化关节演员、幕布、聚光灯、观众席、3 种镜头。
- 演出中现场导演（更生气/温柔/加快/换结局/拥抱/看观众/重播），基于关键词，对当前拍与后续拍都生效。

### 第 2 轮改动（看了真实截图后）
1. **玩家小人原本看不见 → 现在是前景主角。** 相机移到观众席后上方 (0, 4.9, 18.2)；小人挪到倒数第二排并清出视线，放大，金色上身 + 红帽（帽檐、绒球）+ 光环 + 悬浮小箭头。从背后看，它会朝说话者转头、对剧情有反应、谢幕时举手欢呼。（顺带修了一个 NaN bug：缺少字段导致小人头部消失。）
2. **演员不再像雕像。** 放松的屈臂待机；持续的重心转移（胯倾斜、屈膝、身体摇摆）；听者前倾、定时点头、小动作（托下巴、耸肩、小手势）；说话者手臂弧度更大、躯干扭转、随语句重音加强（连 指向/挺胸 这类定格姿势也会随重音起伏）；鞠躬 2.6 秒、惊呼保持更久。说话者向观众“略微开身”30%。强情绪拍会迈一小步（愤怒上前、恐惧/悲伤后退、其余轻微游移）。全部基于 dt 并分步积分，低帧率下也不失真。
3. **服装可读。** 布料亮度下限 + 自发光底限 + 浅色镶边（领口/腰带/扣），哈姆雷特/国王/王后/侦探加披风（背影轮廓明显）。鬼魂裙摆改成开口喇叭筒带下摆，不再有锥尖穿过胸口。
4. **特写成为真正的镜头。** 说话者头到膝，或与最近听者的双人镜头；使用**实时**位置（导演每个模拟步都发布镜头，而不是只在提示时快照），所以还在走上场的说话者也能正确取景；镜头间视角平滑过渡。
5. **场景随剧目变化。** `src/theater/sets.js`：月夜舞台、城堡露台（城堡剪影、垛口、跳动的火把）、深夜便利店（柜台、收银机、货架、冷柜、棋盘地砖、霓虹招牌）、雨夜小巷、王座大厅。先按创意文本、再按角色名选择，或用 `{kind:'scene', set}` 事件显式指定（已写入 `docs/FORMAT.md`，AI 解析器可用）。重播保持场景。
6. **观众不再是克隆人。** 9 种发型/帽子、身高、胖瘦、小孩、颜色；会朝说话者转头，惊讶时一跳，开心时蹦，悲伤时低头，愤怒时前倾，谢幕时双手高举。
7. **快速开演保持。** 本机再次实测首句：哈姆雷特/国王/侦探 10–17 ms，便利店约 28–35 ms（场景首次绘制已**计入**测量）。登场的说话者从遮片后方出发并加速（×1.45），首句不会在侧台里说完；正在登场的听者继续走并把头转向说话者。
8. **界面。** 中文示例芯片已翻译；演出进行时「开演」变成低调的「重新开演」，主按钮高亮转移到「暂停」和导演输入框/提交；节拍标签改成彩色情绪胶囊 + 可读的动作词（已本地化）；状态区新增「场景」。

### 没改的
- 不新增投影/真实灯光（火把、霓虹仅自发光），照顾软件渲染预算。
- 演员仍只用方块/胶囊/球，无蒙皮、IK、外部素材。
- 导演指令仍是关键词式，仅提升了呈现效果。

### 仍存在的限制
- 脸部表情极简，从观众席看不出面部情绪，只能靠肢体表达。
- 步行无落脚锁定；鬼魂飘动只是装饰。
- 演员之间/与道具仍可能穿模（无避让）；往后台走可能穿过便利店柜台。
- 场景选择基于正则；不认识的创意回退到月夜舞台。
- 浏览器 TTS 音色因机器而异；口型仅为下颌开合。
- 仅在软件 GL（约 5 fps）无头环境测过；仍需在真实 GPU 上跑一次。

### 下一步想法
1. 让 AI 解析器输出 `scene`、逐拍 `camera`（特写/全景/双人）和走位提示，镜头像导演一样切换。
2. 自动运镜：登场全景、对话双人、高强度特写，手动切换作为覆盖。
3. 通过 AI 解析自由文本导演（“让她回答前犹豫一下”），映射到同样的风格/动作操作。
4. 演员可用的道具（拿杯子、开收银机）；用 WebAudio 合成观众笑声/惊呼/掌声（无素材）。
5. 演出可分享为 URL/JSON；“直播模式”覆盖层（干净舞台、大字幕、弹幕 → 导演指令）。
6. 视觉回归：Playwright 脚本截各场景图并断言首句延迟 < 50 ms。
