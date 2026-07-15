# Solutions Designs

**Enterprise AI solution designs for Orama Zetta.** This repo takes real-world
enterprise AI problems and works them end-to-end into Zetta solution designs —
first collecting the raw evidence, then (later) analysing, then designing the
concrete architecture on [Orama Zetta](https://github.com/oramasearch/zetta).

It is a module of the [zetta-bridge](https://github.com/oramasearch/zetta-bridge)
(`modules/solutions-designs`). It holds **no application code** — it's a working
space of evidence and design docs. The product itself lives in
[`oramasearch/zetta`](https://github.com/oramasearch/zetta).

> **What is Orama Zetta?** It turns a question into running, deployed intelligence —
> describe a data or AI problem in plain language (or hand over an artifact you
> already have: an n8n workflow, a SQL script, a notebook) and Zetta architects a
> correct data + AI pipeline, deploys it onto infrastructure *you* control, runs it,
> and learns from your data. *Intelligence Velocity for Big Thinkers.* Full framing
> in the [zetta-bridge `CLAUDE.md`](https://github.com/oramasearch/zetta-bridge/blob/main/CLAUDE.md).

## Core vocabulary — use case · solution · methodology

Three distinct terms govern this exercise (full detail + worked example in
[`docs/vocabulary.md`](docs/vocabulary.md)):

- **Use case** — *the problem we're solving* (e.g. churn).
- **Methodology** — *the AI methods we arrange to formulate into a solution to a use
  case* (e.g. extract tabular data → feature-engineer → train XGBoost → SHAP feature
  importance → report).
- **Solution** — *how we solve that problem*: that methodology **applied** in a correct
  real-world setup (e.g. timeseries-appropriate, leakage-free) and **connected to the
  business action** that realizes the value (e.g. use the report to reduce churn).

A use case is answered by a solution, which is a methodology arranged and correctly
applied.

## Current phase — evidence collection

We are in the **evidence-collection phase** and stay here until told otherwise. All
evidence is captured **verbatim** — nothing is summarised, paraphrased, or dropped —
under [`docs/evidence/`](docs/evidence/), one subfolder per source/topic. **Collect,
don't conclude:** no analysis, ranking, or design yet.

Later phases (analysis, design) get their own homes under `docs/` when we reach them.

### Evidence collected so far

**9 items** (the full, always-current index is
[`docs/evidence/README.md`](docs/evidence/README.md) — that's authoritative; this is a
snapshot):

- **What's most valuable (external / analyst):** three Deep Research reports on the most
  valuable enterprise AI pipeline use cases — rankings, a scoring model, closed-loop
  framing, and the raw research artifacts (`01`–`03`).
- **Competitor / market solution catalogs:** Databricks Solution Accelerators (93) and
  Snowflake Solutions by Industry (9) (`04`, `05`).
- **Orama Zetta itself:** our product website / "what we promise users" (`06`), the
  "One Orama" v3 product-suite context (`07`, ⚠️ internal-confidential), and the Orama
  Platform 2 / Zetta project folder — vision, personas, roadmap, briefs, research (`08`).
- **Prior-art use-case catalog:** the retired amaro-desktop's 400 example data apps
  across 17 categories (`09`).

## Navigation (progressive disclosure)

Every directory that has subfolders carries both a `CLAUDE.md` (agent jump-table) and
a `README.md` (human index) that point down into it, so any level can be understood
without reading everything above or below it.

- [`docs/`](docs/) — all working docs. → [`docs/README.md`](docs/README.md)
  - [`docs/evidence/`](docs/evidence/) — the verbatim evidence, one subfolder per
    source/topic. → [`docs/evidence/README.md`](docs/evidence/README.md)

## Conventions

Inherits the [zetta-bridge](https://github.com/oramasearch/zetta-bridge) / org-wide
rules:

- **No AI attribution** in commits, PRs, or tags.
- **Full cross-repo URLs** — never bare `#N` across repos; no `fixes #N` / no auto-close.
- **Update the folder `README.md` (and `CLAUDE.md`) when you touch a folder** —
  documentation discipline + progressive disclosure.
