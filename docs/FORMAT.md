# Performance data format / 演出数据格式

A performance is a **stream of events**. The unit is the **beat**.
演出是一串**流式事件**，最小单位是**节拍 (beat)**。

```jsonc
// Stream events (what a parser yields, one by one)
{ "kind": "actor", "name": "Hamlet", "look": {"style":"human|ghost","color":"#2c2c3a","accessory":"crown|hair|hat|helmet|hood|jester|antenna|none"}, "voice": {"pitch":0.95,"rate":1.0} }
{ "kind": "beat",  "beat": { ... } }
{ "kind": "end" }
```

`actor` events are optional: unknown speakers are auto-cast (`src/cast.js`). `look`/`voice` are optional hints.

## Beat

| field | type | meaning |
|---|---|---|
| `speaker` | string \| null | who performs; `null` = narration only |
| `line` | string | spoken + subtitled text ("" = silent stage business) |
| `direction` | string? | stage direction, shown in italics |
| `emotion` | `neutral angry sad proud contemplative gasp happy afraid tender` | body posture + spotlight tint |
| `gesture` | `none talk point bow kneel stand gasp angry sad proud think hug wave shrug laugh` | arm/body action (`kneel` persists until `stand` or a move) |
| `move` | `stay center left right upstage downstage enter exit toward:NAME away:NAME enter:A\|B` | walk to a mark; ghosts fade instead of walking |
| `lookAt` | NAME \| `audience` \| null | who the speaker looks at (everyone else turns to face the speaker) |
| `intensity` | 0..1 | scales posture, gesture size, pitch/volume |
| `lang` | `zh-CN` / `en-US` | picks the TTS voice (auto-detected if omitted) |
| `pause` | ms | silence after the beat |
| `hold` | ms? | duration of line-less beats |
| `with` | NAME? | partner who mirrors gesture/emotion (used by hugs) |
| `everyone` | bool? | all actors take this beat's lookAt/gesture/emotion |
| `ending` | bool | part of the ending; dropped/replaced by "change ending" |

Example: `{"speaker":"Ghost","line":"Mark me.","emotion":"sad","gesture":"talk","move":"toward:Hamlet","lookAt":"Hamlet","intensity":0.6,"ending":false}`

## Exported file / 导出文件

```json
{ "format": "ai-live-theater/performance", "version": 1, "lang": "en-US",
  "actors": [ {"name":"Hamlet","look":{},"voice":{}} ],
  "beats":  [ {"speaker":"Hamlet","line":"..."} ] }
```

Paste this JSON into the script box (or use *Import JSON*) and press Start: the local parser replays it as a stream.
