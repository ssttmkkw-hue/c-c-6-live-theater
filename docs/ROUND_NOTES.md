# Round notes / 轮次记录

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
