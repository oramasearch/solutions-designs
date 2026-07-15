# Solutions Designs — module context

This repo is a working space for designing **enterprise AI solutions on Orama
Zetta**. It is a submodule of [zetta-bridge](https://github.com/oramasearch/zetta-bridge)
(`modules/solutions-designs`). No application code, no build, no tests — evidence and
design docs only. Read the zetta-bridge
[`CLAUDE.md`](https://github.com/oramasearch/zetta-bridge/blob/main/CLAUDE.md) for the
product framing and the blueprint/sync model.

## Core vocabulary — use case · solution · methodology

Three distinct terms govern this exercise. Keep them distinct in every doc. Full detail
+ worked example in [`docs/vocabulary.md`](docs/vocabulary.md).

- **Use case** — *the problem we're solving* (e.g. churn).
- **Methodology** — *the AI methods we arrange to formulate into a solution to a use
  case* — the composable sequence of methods (extract → feature-engineer → train →
  explain → report), described apart from any one deployment.
- **Solution** — *how we solve that problem*: a methodology **applied** correctly for the
  real conditions (e.g. timeseries-appropriate, leakage-free) and **wired to the business
  action** that realizes the value.

A **use case** is answered by a **solution**, which is a **methodology** arranged and
correctly applied. Example: churn (use case); extract → features → XGBoost → SHAP →
report (methodology); that pipeline made leakage-free on time-ordered data + using the
report to change the business to reduce churn (solution).

**Cardinality:** the layers aren't 1:1 — expect **use case → solution ≈ 1:1** but **far
fewer methodologies** (their components are reused across use cases): *many use cases ≈
many solutions ≫ few methodologies*. The tabular methodology above is the most common,
because tabular data is the majority of business data.

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

**Collected so far — 9 items** (authoritative live index:
[`docs/evidence/CLAUDE.md`](docs/evidence/CLAUDE.md)):

- `01`–`03` — three Deep Research reports on the most valuable enterprise AI pipeline
  use cases (rankings, scoring model, closed-loop framing, raw research artifacts).
- `04`–`05` — competitor solution catalogs: Databricks Solution Accelerators (93),
  Snowflake Solutions by Industry (9).
- `06`–`08` — Orama Zetta itself: the product website ("what we promise users"), the
  "One Orama" v3 product-suite context (⚠️ internal-confidential), and the Orama
  Platform 2 / Zetta project folder.
- `09` — the retired amaro-desktop's 400 example-data-app use-case catalog (17
  categories).

Keep this snapshot and the `docs/evidence/` index in sync as items are added.

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
