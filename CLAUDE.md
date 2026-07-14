# Solutions Designs — module context

This repo is a working space for designing **enterprise AI solutions on Orama
Zetta**. It is a submodule of [zetta-bridge](https://github.com/oramasearch/zetta-bridge)
(`modules/solutions-designs`). No application code, no build, no tests — evidence,
ideas, and design docs only. Read the zetta-bridge
[`CLAUDE.md`](https://github.com/oramasearch/zetta-bridge/blob/main/CLAUDE.md) for
the product framing and the blueprint/sync model.

## The one rule that governs the current stage

**Collect, don't conclude.** Each solution is worked in strict stages —
**evidence & ideas → analysis → design** — and we do not skip ahead. In the current
stage we are *only* gathering raw evidence and loose ideas. Do **not** analyse,
rank, recommend, architect, or draw conclusions until explicitly moved to the
analysis stage. When in doubt, capture the material and stop.

- `evidence/` — raw, un-interpreted input: source material, transcripts, links,
  quotes, data points, screenshots, stated requirements. Cite where each piece came
  from. No editorializing.
- `ideas/` — loose ideas, hypotheses, analogies, "what if" notes. Explicitly
  provisional; nothing here is a decision.
- `analysis/`, `design/` — created only when a solution reaches those stages.

## Layout

- `solutions/<slug>/` — one folder per enterprise AI solution.
- `templates/solution/` — scaffold for a new solution folder.

## Conventions (inherited from zetta-bridge / org-wide)

- **No AI attribution** in commits, PRs, or tags. Commits are authored solely by the
  human. Strip any `Co-Authored-By` / "Generated with" trailer.
- **Full cross-repo URLs** — never bare `#N`; no `fixes #N` / no auto-close.
- **Documentation discipline** — when you touch a folder, update its `README.md` in
  the same change.
- **Don't estimate task size or duration** — just do the work and report results.
