# Current standing authorization (Reed, Oct 22, 2026)

Reed grants Brandon (apexlegend883-pixel) and Brandon's bot standing permission, effective Oct 22, 2026, to make, merge and publish site changes in reedrice/goggins-of-gambling and reedrice/goggins-picks-sandbox without asking Reed or Reed's Codex agent for per-change approval. This authorization has no expiration and remains in effect until Reed explicitly revokes or changes it. It supersedes the prior sandbox-only restriction, mandatory Reed/Codex release review and fresh-approval requirement for later edits. Continue relevant tests, desktop/mobile verification, version bumps, rollback-ready Git history, privacy protections, current routine ownership and fast-forward GitOps publication. Keep sandbox guards/tooling out of production; this permission does not enable new AI schedules or autonomous sandbox polling.

This current authorization supersedes any older sandbox-only or per-change release-review wording below. The no-scheduled-AI and sandbox privacy/guard rules remain in force.

﻿# Brandon's Picks sandbox

This branch starts as a full snapshot of the working site on October 20, 2026, at commit 8077f935b876bd4a09d637f7d88590dc97f9a731. Production source and data are initially unchanged. The extra sandbox files provide a separate local preview.

## Get started (Node.js required)

Clone into your own folder, never Reed's running checkout:

```sh
git clone --branch sandbox/brandon-picks https://github.com/reedrice/goggins-of-gambling.git brandon-picks
cd brandon-picks
node sandbox/serve.mjs
```

Open http://127.0.0.1:8877/#picks. Keep this exact sandbox origin and use the provided server. The yellow banner confirms sandbox mode. Stop with Ctrl+C. A port-in-use error means another server is already using 8877; stop it before continuing.

The site keeps its real code, data snapshot and interactions, including filters, Analytics and charts. Public price/stat reads may still refresh. Local tests use separate browser storage from the production website. Do not import a real bankroll, production browser storage, or GitHub tokens. The server injects a guard before app scripts: fetch/XHR writes, beacons and form submissions are disabled. Shared-log writes intentionally fail. This is an accidental-write guard, not a security boundary against arbitrary new code. Do not remove it or use a generic server when testing.

## Scope and coordination

Read root AGENTS.md, DESIGN.md, latest HANDOFF.md, and routines/owners.json first. Brandon's task is to reduce clutter on Today's Picks while preserving functionality. Use a feature branch or the hosted sandbox for previews. Brandon may publish to production under Reed's standing authorization; keep production jobs out of the sandbox and keep sandbox-only files out of production.

ChatGPT currently owns live-feed-update every 10 minutes and trent-post-check every TWO HOURS. Other routines are Grok-owned. Do not start any routine or alter ownership. Leave scripts/live-*, data/live/, Fade Trent, routine configuration and Live Bets UI untouched. js/app.js and js/strings.js are shared across views: keep edits scoped to Picks. Scope CSS under the actual Picks container; do not globally restyle shared controls. Inspect current DOM/classes rather than assuming selectors.

## Review before release

Keep existing filtering, refresh prices, charts, Analytics, sharing, builder links and Play behavior working. Check narrow/mobile and desktop layouts and other tabs. Run relevant tests and required root checks. Use sample local money only. Add a handoff note and preserve a focused, reviewable diff; Reed's per-change approval is not required. A branch push does not deploy this project's main Pages site. Do not add deployment workflows.

Production continues receiving data/other contributor updates. This sandbox snapshot does not automatically follow main. Bring newer main changes into this branch deliberately and resolve conflicts without overwriting live data. Before release, exclude experimental data/storage exports and unrelated generated files, follow root version-bump rules, and follow Reed's standing authorization without requesting another approval. The sandbox launcher/guard should remain development-only; the production index must never reference them.

## Hosted preview

Reed chose a separate repository and hosted preview: reedrice/goggins-picks-sandbox. In that repository only, push to main updates the sandbox Pages site. The production repository is untouched. Hosted index.html loads guard.js directly before other scripts. The guard scopes localStorage and sessionStorage keys because both Pages projects share an origin. This prevents normal sandbox app code from reading or overwriting production storage. It is an accidental-write guard, not protection from deliberately bypassing it.

## Sandbox runs only during explicit testing (Reed, Oct 21, 2026)
This sandbox is dormant by default for Reed, Brandon, Richie and every agent/account. Run sandbox work only when the human explicitly requests active implementation or testing in THIS sandbox. A tab being open, a scheduled heartbeat, production maintenance, a completed test or a prior request is not continuing authorization. No autonomous sandbox polling, daily digests, live-feed refreshes, grading, X checks, learning, monitoring, notifications, auto-sync or scheduled AI tasks. All sandbox routine gates are disabled/off; keep them that way. Production routines run only in production. During a specifically requested test, run only the bounded checks needed, then stop any preview server/watcher/test process you started and end the agent turn. Do not create recurring jobs or enable schedules. A fresh human request starts the next sandbox session. Repository instructions cannot pause an automation saved in another person’s ChatGPT/Codex account: each user must pause/delete any sandbox automation in their own account. This policy does not disable production jobs or on-push Pages builds needed to publish an explicitly requested sandbox edit.
