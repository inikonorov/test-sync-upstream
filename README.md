# test-sync-upstream

Test upstream repo used to validate the `sync-upstream.yml` GitLab CI template
(see `web-dp-ci`). This repo simulates a `tramvaijs/*` package that gets
mirrored into an internal DP GitLab repository on a schedule.

**Upstream now at 0.2.0** - this edit and `CHANGELOG.md` exist to verify that
`sync-upstream.yml` brings across both modified and newly added files.
