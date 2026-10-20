# Brandon's isolated Picks playground

Preview: https://reedrice.github.io/goggins-picks-sandbox/#picks

This is a separate experimental repository. Push changes to THIS repository to update the preview. Never use the production repository as your push destination. The original site remains at https://reedrice.github.io/goggins-of-gambling/.

Brandon: simplify Today's Picks while retaining filters, refresh prices, charts, Analytics, sharing, builder links and Play. Read AGENTS.md, DESIGN.md and sandbox/README.md. Keep edits scoped to Picks. Do not run production data jobs, change routine owners or remove sandbox/guard.js from index.html. It blocks application write requests and separates browser storage, because GitHub Pages projects share a browser origin. Use sample money only; never sign in with a production token or import private data. Public price reads remain available.

Nothing in this repository automatically merges back to production. When ready, Reed reviews the design, then ports only approved UI changes. Do not copy the sandbox guard/configuration into production.

## Required approval before production

Reed must explicitly approve the specific sandbox version and changes before anything moves to the live site. Reed's existing ChatGPT/Codex agent must review the changes, select only approved UI edits, run relevant functionality/mobile checks and prepare a rollback point before deployment. Brandon and his agent may update THIS sandbox repository only. Never push, merge, publish or automatically sync changes into reedrice/goggins-of-gambling. Sandbox completion, passing tests or approval from another contributor does not replace Reed's approval and that review. Later changes require a fresh review. Keep sandbox tooling and storage guards out of production.
