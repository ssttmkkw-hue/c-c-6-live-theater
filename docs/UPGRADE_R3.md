# Round 3 upgrade plan: AI Live Theater

## 中文摘要

**结论：** 第 2 轮解决了"看得见"，包括金色小人、演员的活动量、服装和场景。但整体仍像一场预设好的木偶戏，不像即兴演出。五个最大的短板：

1. **镜头是死的。** 默认观众席视角固定，演员在画面里只占约 1/3 高度，下半屏全是观众后脑勺。特写必须手动切，而且常常拍到演员的后脑勺（`scene.js:255-266`，镜头永远在 +z 一侧，不看演员朝向）。
2. **导演指令响应慢、浅。**
   - `injectFront` 要等当前拍说完才执行，可能延迟十几秒（`director.js:injectFront`）。
   - 情绪指令只改肢体和后续拍，台词不变，观众没有反应。
   - 听不懂的指令只弹 toast，没有任何表演变化。
3. **脸看不见。** 眼睛半径 0.026，没有眉毛，没有眨眼。从观众席和特写里，情绪只能靠身体读出来。
4. **语音、字幕、动作没有联动。** 字幕整句一次性出现。重音是正弦波，不跟着说话走（`actor.js` 的 `emph`、`talkT`）。
5. **本地"即兴"其实是固定模板。** 同一个创意每次演出完全一样，没有闲笔和即兴台词。同时，选景会在演出中途切换（`chooseSet` 在每次 `declare` 时重选）。"王"、"街"、"ghost" 这类词还会误判场景。

**本轮建议（一次实现）：**

- **P0**
  - 自动运镜，默认用"观众肩后"镜头。
  - 指令即时生效：打断当前拍，加即兴台词，未识别的文本当舞台提示，观众有反应。
  - 脸部：大眼、眉毛、眨眼、嘴型。
  - 用 `onboundary` 做字幕逐词显示，并驱动重音和口型。
  - 选景锁定，修正误判。
- **P1**
  - 避让（演员之间、演员与道具）。
  - 轮次衔接：预转身、提前走位。
  - 解析等待期的闲笔。
  - WebAudio 合成观众声。
  - 本地解析器加变体和即兴台词。
  - 披风和鬼魂裙摆改造。
  - 谢幕聚光灯修正。
- **P2:** 帧率自适应、Playwright 回归、AI 解析器的 `scene` / `camera` 提示。

**必须保住：**

- 首句延迟低于 50 ms。
- 演出中随时导演。
- `window.__theater`。
- 中英文界面。
- 全程序化、无素材。
- 基于 dt 的动画，低帧率下不失真。

---

## 1. Honest self-critique

I judged against the goal: it should feel like live improvisation, with no frozen statues.

### What works
- The fast start is real: `ingest()` calls `next()` synchronously, and the notes record 10–35 ms.
- The gold avatar is visible and reacts.
- The sets are readable (r2-04, r2-10).
- Body life is much better: weight shift, nods, fidgets.

### What still feels stiff or shallow

**Camera (biggest gap)**
- The default `audience` view is a fixed rig at `HOME` (`scene.js:25`). In r2-04 and r2-10 the actors are about 110 px tall on a 900 px frame. The bottom 40% of the frame is audience heads and the avatar's hat.
- The camera never reacts to events. `close` is manual only, and nothing cuts on entrances, gasps or anger.
- The close-up camera always sits on the +z side (`scene.js:263`). It ignores `actor.yaw`, so you often shoot a back or profile. In r2-06 Hamlet is a back-of-head with a plank cape. The speaker's face is never the subject.
- `finish()` calls `setFocus(center)`, but `frameShot()` overwrites it every step. The curtain-call spotlight stays on the last speaker.

**Faces**
- Eyes are 0.026-radius black spheres, with no brows, lids or blink (`actor.js:build`). The mouth is a box that flaps.
- In the close-up, emotion reads only through the torso.

**Speech, subtitles and motion are decoupled**
- Subtitles pop in as a whole line (`main.js:onSubtitle`).
- `emph` is `sin(talkT*3.3)`. It is not tied to words or `speechSynthesis` boundaries, so gestures look rhythmic rather than motivated.
- Turn-taking is strictly serial: say, then `pauseMs`, then `next()`. Nobody reacts before the reply, and nobody starts moving early.
- Movement only starts at beat start (`doMove`).

**Directing is visible but shallow** (`director.js:direct`)
- `injectFront` only calls `next()` if `!this.cur`. A hug or injected line waits for the current line to finish.
- A mood directive swaps `emotion` and `gesture` and shifts `intensity` for the next 8 beats. The line text is unchanged, so a tender line gets angry arms. The TTS in flight is unchanged.
- Nothing else reacts: the audience, the camera, the lights and sound are unchanged.
- Unrecognised text only shows a toast (`dirNone`). That kills the sense of improv.
- `parseDirective` keeps only the first mood. "angrier and sadder" gives angry only.
- The regexes are loose: `fast` matches "breakfast", `hug` matches "huge", `normal` resets, and a bare `结局` triggers the ending change.

**The local "improv" is a fixed template** (`parsers/local.js:ideaToScene`, `templates.js`)
- A one-liner always maps to the same two-character script of 7–9 beats, with no randomness.
- Replaying or retrying gives an identical show, and the show ends in about 40 seconds.
- While an AI parse is slow there is dead air: `step()` has no idle business when the queue is empty.

**Costumes and props**
- The ghost skirt is a plain cylinder and reads as a lampshade or bucket (r2-04, r2-06).
- The cape is a flat plank.
- The shop shelves read as colourful books, and the counter is an empty box (r2-10).
- Backdrops are 512×256 textures stretched to 13.6 m, so they are blurry in close-up.

---

## 2. Remaining bugs and risks

- **Set flips mid-show.** `declare()` calls `chooseSet()` for every new actor, unless `setExplicit` is set. If the idea text has no match, a later actor name (a "Guard", or any name containing `王`) swaps the whole set mid-scene. Regex order is also wrong for mixed ideas: "robot meets ghost at the convenience store" gets `ramparts`. `王` in `hall` hits names like 小王 and 老王. `街` and `\bkay\b` are similarly over-broad.
- **Everyone is on stage immediately.** `declare()` calls `a.enter()`, and ghosts materialise at home at t=0. Scripted "Enter X" beats (`move:enter`) are no-ops for actors already visible.
- **Directing latency.** `injectFront` is not immediate (see above). `skipEnding` with an empty queue and `streamDone` false is fine, but an interrupted `cur` also needs handling for `speech.cancel()`: the cancel fires `onerror → onend → speechDone`.
- **Camera clipping.**
  - The close camera clamps `z ≤ 6.4` and `x ≤ ±4.5`, so it can end up inside the shop counter or castle props. There is no occlusion check.
  - Two-shot distance is `best*1.25+3.2`. Wide-apart actors push the camera to 8.5, and then the speaker is tiny.
- **Collisions.** None. `HOMES` wraps at 8 actors. `nudge()` and `toward:` can put actors on the same spot or in the counter (acknowledged in ROUND_NOTES).
- **Parser.** `lookAt` is hard-wired to `other` in the idea path. The AI SYSTEM prompt does not include `scene`, so the AI path will not use it. `classifyScript` can misclassify prose that contains a colon as a script (`said>=2`).
- **Speech.**
  - `speak()` never cancels the previous utterance. This is fine today only because every path ends in `cancel()`; an interrupt must call `speech.cancel()` first.
  - Chrome sometimes never fires `onend`. The timeout is `est*1.8+2500`, so one hang can stall about 6 s.
- **Performance.** Only tested at about 5 fps on software GL. Every mesh casts a shadow, there are roughly 40 audience members, and the render runs once per frame. There is no adaptive quality.
- **Tests.** Only `tests/parser.test.mjs` exists. Nothing guards the fast-start metric or `direct()`.

---

## 3. Prioritised upgrade list for one pass

### P0: visible feel

**1. Auto director camera** (`scene.js`, `director.js:next/frameShot`)
- Add `theater.cue({type, speaker, listener, intensity, emotion, entrance})`, called from `Director.next()`.
- Shot menu:
  - **Wide:** the existing `HOME`, used for entrances, curtain call, and a re-establishing shot every 3–4 beats.
  - **Over-the-shoulder from the avatar's seat:**
    - The camera sits just behind and above the gold avatar, looking at the speaker.
    - Actors fill about 60% of the frame, and the avatar's hat and shoulder stay in the foreground.
    - This is the default dialogue shot.
  - **Medium two-shot:** on a pair of actors.
  - **Close-up:** for `intensity ≥ 0.75`, a gasp or afraid reveal, or a directive "angrier".
- Cutting rules:
  - Minimum hold of about 2.2 s, cutting at beat boundaries.
  - A hard cut, or a fast 0.5 s ease. All timing is dt-based.
- Camera side:
  - Pass `yaw` in the shot points.
  - Place the camera about 30° off the speaker's facing direction, clamped to the house side (`z` between about 3 and 6.4).
  - Reject positions inside prop AABBs, using `sets.obstacles` from P1.
- View buttons become **Auto (default) / Audience / Close / Free** in `main.js:renderViews` and `i18n.js`. A manual choice overrides Auto.
- Fix the curtain call: `frameShot` must not run in the `finished` state, or `setShot` should be cleared so the spotlight stays centred.

**2. Instant, richer directing** (`director.js:direct/injectFront`, `directives.js`, `i18n.js`)
- Add `injectFront(beat, {interrupt:true})`:
  - It ends the current `say` phase: `speech.cancel()`, then `c.phase='pause'; c.t=pauseMs`.
  - It guards `onend` so the cancel does not mark the wrong beat done.
  - Use it for hug, injected lines and ad-libs.
- Mood directives inject one short bilingual **ad-lib beat** from a pool, for example:
  - Angrier: "How dare you!" / "你敢！"
  - Softer: a whispered line.
  - Scarier: a gasp.
  The speaker takes a motivated step, and `theater.react` is called.
- Unrecognised free text becomes a **stage direction beat** instead of a toast:
  - Run `inferEmotion`, `inferGesture` and `inferIntensity` on it, show it as a subtitle direction, and act it.
  - Keep `dirNone` only for empty input.
- Add "add a character" (`enter a guard` / `来个侍卫`): `declare` + `enter` + a one-line entrance beat. Keep it small.
- Parser hardening: allow multiple moods (the last one wins for emotion, deltas summed), and add `\b` to `fast`, `hug` and `normal`. Require a "change/new … ending" context for bare `结局`.

**3. Readable faces** (`actor.js:build/update`)
- Larger eyes with white sclera and tracking pupils. Pupils follow `lookGetter` in addition to the head yaw.
- Brow bars rotated per emotion, using a lookup beside the `EMO` table: angry is inward-down, sad is inward-up, gasp and afraid are raised.
- Blink on a timer. Mouth shape per emotion: smile curve for happy, frown for sad, wide for gasp.
- Keep the geometry count small (about 10 meshes per head). Ghost and antenna variants must keep their emissive eyes.

**4. Speech-synced performance** (`speech.js`, `director.js:next/step`, `main.js:onSubtitle`)
- Pass `onboundary` through `speech.speak`. It gives `charIndex` per word.
- Subtitles reveal word by word. Build spans with DOM calls (no innerHTML), and show a "highlight up to charIndex" tint.
- Each boundary fires an emphasis impulse on the actor: `actor.pulse(strength)` kicks the arms, chest and nod, replacing the free-running `emph` sine while speaking.
- When there are no voices (headless, muted, or no `onboundary`), the fallback is a fake word clock derived from `estimateMs`. Behaviour is then the same, just timer-driven.
- Mouth opening follows boundary timing plus the existing flap.

**5. Set selection fix** (`sets.js:pickSet`, `director.js:chooseSet`)
- Lock the set once the first beat has performed. Only a `scene` event or `replay` may change it.
- Score all rules instead of first-match: count hits, and let text beat names.
- Drop the bare `王` (use `国王|王后|王座`), and tighten `街` and `kay`.

### P1: depth and polish

- **Avoidance** (`director.js:step`, `sets.js`):
  - Pairwise separation between actors (radius about 0.7) and obstacle AABBs exported by each set (shop counter, shelves, torches), applied as a push-out on `pos` after movement.
  - Push-out only, with no pathfinding.
- **Overlap and anticipation** (`director.js:step`, pause phase): during `pauseMs`, peek at `queue[0]`.
  - Pre-turn the next speaker's head toward the current one.
  - Start its `walkTo` early.
  - Add a 150–300 ms listener reaction before the reply (a nod, a gasp for afraid).
- **Idle business when the queue is empty and the stream is not done:** thinking pose, look around, shift. This covers slow AI parses.
- **Synthesised audience sound** (new `src/audio.js`, WebAudio, no assets):
  - A laugh murmur, a gasp whoosh and applause noise.
  - Create the `AudioContext` lazily on the first user gesture, after the first beat has started.
  - Respect the mute checkbox and `speech.muted`.
- **Local parser variety** (`parsers/local.js`, `templates.js`):
  - Seed-based variant lines and slot reorderings, plus 2–3 ad-lib "business" beats per genre.
  - The first beat stays deterministic and fast.
  - Keep a `seed` option so tests stay stable.
- **Costume fixes:**
  - The cape becomes three hinged panels with lag, so it bends.
  - The ghost skirt gets a wavy hem, with per-vertex displacement or a few stacked rings animated by `sin`.
  - A blob contact shadow under each actor.
  - Stride length tuned to reduce foot slide.
- **Entrance logic:** actors in the first beat enter immediately. Later-introduced actors stay in the wings until their `enter` beat or first line.
- **Shop props:** a proper counter front, a register, and shelves with depth. Raise the backdrop texture to about 1024×512.

### P2

- **Adaptive quality:** a rolling average of dt. When it is under 20 fps, drop pixel ratio and shadow map size, and disable shadows on audience meshes.
- **AI parser prompt:** `scene` and per-beat `camera` hints in `SYSTEM`, plus honouring `camera` in `cue()`.
- **Visual regression** (`tests/`): add a node or Playwright script that asserts ttfl is under 50 ms and `direct()` latency is under 300 ms.

---

## 4. Must-not-break list and what to skip

### Must not break
- **ttfl:** under 50 ms from Start to first line on the local parser.
  - No `await` before the first `ingest`.
  - No audio-context creation or heavy canvas work in the first-beat path. Build the new set textures lazily or reuse the existing cache.
  - `cue()` must not allocate large objects.
- **Mid-show directing:** keyword directives still apply to the current beat and to all future beats. `replay` keeps its set. "change ending" still drops and refills the ending.
- **`window.__theater = {director, theater}`.** Keep these fields, and any new API must be additive.
- **Bilingual UI.** All new strings, ad-libs and view labels go in both languages in `i18n.js`, and the language toggle stays live.
- **Procedural only.** No external or paid assets, and no copyrighted text beyond the existing public-domain Hamlet excerpt.
- **dt-based animation.** Keep the sub-stepped `step()`. New camera, face and audio code must also be dt-based, so 5 fps looks the same as 60 fps.
- **No API key leaks.** Key stays in `localStorage` only. No new network calls.
- **Existing tests:** `tests/parser.test.mjs` still passes.
- **Do not deploy during review.** gh-pages deploys only in the later pass.

### Skip in this pass
- Skinning, IK, imported models, or real foot planting.
- New shadow-casting lights.
- AI free-form directing and chat-to-directive.
- Share URLs and a stream-mode overlay.
- Replacing the TTS, or phoneme-accurate lip-sync.
- Pathfinding. Push-out is enough.
- Actors using props (picking up a cup).

---

## 5. Brief for the implementation session

Make the show look directed and answer instantly, without touching the fast-start path. Start with the camera: add an Auto mode to `scene.js` (default, with Audience/Close/Free as manual overrides). `Director.next()` sends `theater.cue(...)` with the speaker, listener, intensity and emotion. The planner picks wide, over-the-shoulder from the avatar's seat, two-shot or close-up. Hold each shot at least about 2.2 s, place the camera relative to `actor.yaw` so faces are shown, and keep it out of props. Next make directing instant and richer:

- `injectFront(..., {interrupt:true})` cancels the current line.
- Mood directives add a short bilingual ad-lib beat plus a motivated step, and call `theater.react`.
- Unrecognised text becomes an acted stage-direction beat, never only a toast.
- Allow combined moods, and tighten the `fast`, `hug`, `normal` and `结局` regexes.

Then give actors readable faces in `actor.js` (large eyes with tracking pupils, emotion brows, blinks, emotion mouth shapes). Wire `onboundary` from `speech.js` to word-by-word subtitles, per-word emphasis pulses and jaw sync, with a fake word clock as fallback. Lock the set after the first beat, switch `pickSet` to scored matching, and fix the over-broad `王`, `街` and `kay` patterns. If time allows, add actor and prop push-out, anticipation and early walks, idle business, synthesised audience sounds, local ad-lib variety, a bent cape, a wavy ghost hem and a centred curtain-call light. Do not touch the first-beat path, which has to stay in the tens of ms. Keep `window.__theater`, bilingual strings, procedural assets and dt-based stepping. Run `npm test`, measure ttfl for several ideas, and check screenshots of the Auto camera, the close-up, a directive mid-line and the English UI before reporting.
