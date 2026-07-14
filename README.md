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

## Current phase — evidence collection

We are in the **evidence-collection phase** and stay here until told otherwise. All
evidence is captured **verbatim** — nothing is summarised, paraphrased, or dropped —
under [`docs/evidence/`](docs/evidence/), one subfolder per source/topic. **Collect,
don't conclude:** no analysis, ranking, or design yet.

Later phases (analysis, design) get their own homes under `docs/` when we reach them.

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
