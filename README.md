# test-sync-upstream

Test upstream repo used to validate the `sync-upstream.yml` GitLab CI template
(see `web-dp-ci`). This repo simulates a `tramvaijs/*` package that gets
mirrored into an internal DP GitLab repository on a schedule.

**Upstream now at 0.3.0** - `package.json` and `src/index.js` are new, and
`CHANGELOG.md` / this file are edits. One upstream commit therefore exercises
added files, nested paths and modified files in a single sync.
