# Solutions Designs

**Enterprise AI solution designs for Orama Zetta.** This repo is where we take a
real-world enterprise AI problem and work it end-to-end into a Zetta solution
design: first collecting the raw evidence and ideas, then analysing, then designing
the concrete architecture on [Orama Zetta](https://github.com/oramasearch/zetta).

It is a module of the [zetta-bridge](https://github.com/oramasearch/zetta-bridge)
(`modules/solutions-designs`). It holds **no application code** — it's a working
space of evidence, ideas, and design docs. The product itself lives in
[`oramasearch/zetta`](https://github.com/oramasearch/zetta).

> **What is Orama Zetta?** It turns a question into running, deployed intelligence —
> describe a data or AI problem in plain language (or hand over an artifact you
> already have: an n8n workflow, a SQL script, a notebook) and Zetta architects a
> correct data + AI pipeline, deploys it onto infrastructure *you* control, runs it,
> and learns from your data. *Intelligence Velocity for Big Thinkers.* Full framing
> in the [zetta-bridge `CLAUDE.md`](https://github.com/oramasearch/zetta-bridge/blob/main/CLAUDE.md).

## The staged workflow

Each solution moves through stages, in order. **We do not jump ahead** — evidence
and ideas are collected *before* any analysis, and analysis *before* any design.

| Stage | Folder | What goes here |
|---|---|---|
| **1 — Evidence & ideas** *(current stage)* | `evidence/`, `ideas/` | Raw, un-analysed input. Source material, transcripts, links, data points, screenshots, quotes, requirements, and loose ideas / hypotheses / analogies. **Collect, don't conclude.** |
| 2 — Analysis | `analysis/` *(added when we reach it)* | Reading the evidence: the problem framing, the entity/label/horizon, features, constraints, options. |
| 3 — Design | `design/` *(added when we reach it)* | The concrete Zetta solution architecture, data flow, and delivery plan. |

Stage folders beyond the current one are intentionally **not created yet** — they
appear when a solution reaches that stage. Right now every solution is in stage 1.

## Layout

- `solutions/` — one folder per enterprise AI solution (`solutions/<slug>/`). See
  [`solutions/README.md`](solutions/README.md) for the index.
- `templates/solution/` — the scaffold copied to start a new solution folder.

## Starting a new solution

```sh
cp -r templates/solution solutions/<slug>
```

Then fill in `solutions/<slug>/README.md` and start dropping raw material into
`evidence/` and `ideas/`. Add a row to [`solutions/README.md`](solutions/README.md).

## Conventions

Inherits the [zetta-bridge](https://github.com/oramasearch/zetta-bridge) / org-wide
rules:

- **No AI attribution** in commits, PRs, or tags.
- **Full cross-repo URLs** — never bare `#N` across repos; no `fixes #N` / no auto-close.
- **Update the folder `README.md` when you touch a folder** — documentation discipline.
