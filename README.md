# AI Live Theater / AI 现场戏剧

Type a short script or just an idea. A parser turns it into a streamable performance, and actors start performing on stage as soon as the first beat is ready.

输入一段短剧本，或只写一个想法。系统快速解析成可流式播放的演出，演员在第一段节拍就绪后立刻上台开演。

This is an experimental project: it should feel like live improvisation — much faster than generating an AI comic or video — while keeping the tradition of theater.

这是一个实验项目：希望它像现场即兴一样快，比 AI 漫剧/视频生成快得多，同时保留戏剧的传统。

## Status / 状态

Just getting started. Playable v1 will land shortly.

本仓库刚创建，可玩的第一版很快会提交上来。

## Run / 运行

```bash
npm install
npm run dev
```

(Exact scripts will be added with v1.)

## Notes / 注意

- Never commit API keys or `.env` files. If an optional AI parser is used, enter the key in the UI (stored only in localStorage).
- 切勿提交 API 密钥或 `.env`。如使用可选的 AI 解析器，请在界面中输入密钥（仅保存在 localStorage）。
- No public deploy yet.
- 暂不公开部署。
