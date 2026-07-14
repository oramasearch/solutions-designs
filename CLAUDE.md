# Solutions Designs — module context

This repo is a working space for designing **enterprise AI solutions on Orama
Zetta**. It is a submodule of [zetta-bridge](https://github.com/oramasearch/zetta-bridge)
(`modules/solutions-designs`). No application code, no build, no tests — evidence and
design docs only. Read the zetta-bridge
[`CLAUDE.md`](https://github.com/oramasearch/zetta-bridge/blob/main/CLAUDE.md) for the
product framing and the blueprint/sync model.

## Current phase — evidence collection

We are collecting evidence and stay in this phase **until explicitly told otherwise.**
Two rules govern it:

1. **Capture verbatim — nothing is lost.** Store every piece of evidence exactly as
   given: no summarising, paraphrasing, truncating, re-formatting, or "cleaning up".
   The repository is the durable record; the raw material must survive intact. Note
   its source/attribution alongside it, but never *in place of* the original text.
2. **Collect, don't conclude.** Do **not** analyse, rank, recommend, architect, or
   draw conclusions. When in doubt, capture the material and stop.

All evidence lives under [`docs/evidence/`](docs/evidence/), one subfolder per
source/topic. See [`docs/evidence/CLAUDE.md`](docs/evidence/CLAUDE.md) for the exact
capture + naming convention.

## Navigation (progressive disclosure)

Every directory with subfolders carries **both** a `CLAUDE.md` (this agent-facing
jump-table) and a `README.md` (human index), each listing that directory's subfolders
so a reader can descend level by level without loading everything. When you add a
subfolder, give it its own `README.md` **and** add it to the parent's `CLAUDE.md` +
`README.md` in the same change.

- [`docs/`](docs/) → [`docs/CLAUDE.md`](docs/CLAUDE.md) — working docs.
  - [`docs/evidence/`](docs/evidence/) → [`docs/evidence/CLAUDE.md`](docs/evidence/CLAUDE.md)
    — the verbatim evidence.

## Conventions (inherited from zetta-bridge / org-wide)

- **No AI attribution** in commits, PRs, or tags. Commits are authored solely by the
  human. Strip any `Co-Authored-By` / "Generated with" trailer.
- **Full cross-repo URLs** — never bare `#N`; no `fixes #N` / no auto-close.
- **Documentation discipline + progressive disclosure** — when you touch a folder,
  update its `README.md` (and `CLAUDE.md` if it has subfolders) in the same change.
- **Don't estimate task size or duration** — just do the work and report results.
