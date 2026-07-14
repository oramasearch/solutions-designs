# 09 — amaro-desktop example data apps (use-case catalog)

Metadata and provenance only. The evidence itself is under [`source/`](source/) +
[`use-cases.md`](use-cases.md) (see the phase rules in [`../CLAUDE.md`](../CLAUDE.md)).

## What this is

The catalog of **example data apps** built for **amaro-desktop** — **400 apps across 17
categories**. Each app is a small, business-shaped **use case** ("solution"): a named
data/AI task with a one-line description, a category, and its data sources.

**Context (user framing):** amaro-desktop is a product we developed and are **now
retiring**. The example apps are kept here because **the use cases (solutions) may still
be useful as evidence** for the Orama Zetta solutions exercise — the retired app itself
is not the point; the catalog of use cases is.

## Provenance

- **Source repo:** [`oramasearch/example-data-apps`](https://github.com/oramasearch/example-data-apps)
  (a submodule of `amaro-desktop-bridge` at `modules/example-data-apps` locally).
- **Commit at capture:** `2622133bdd56dec227371dbe036eb658c96397a4` ("docs: rewrite
  apps/README.md as a human-readable category guide").
- **Catalog generated_at:** 2026-04-29T02:04:15+00:00 (per `apps.json`).
- **Captured:** 2026-07-14, from the local working tree.

## Scope — what's captured vs. not

The full repo is **~724 MB / 11,628 files** — but almost all of that is **generated
demo-app build output** (400 apps × HTML/CSS/JS/PNG/SVG/ico/webmanifest + per-app
`spec.json`/`data.json`/`ui/`/`runs/`…) and the generator `scripts/`. That is *not* the
use-case evidence, so it is **not** copied here — the complete repo is preserved verbatim
at commit `2622133` in `oramasearch/example-data-apps`.

What **is** captured (verbatim, under `source/`, integrity in
[`SHA256SUMS.txt`](SHA256SUMS.txt)):

| File | What it is |
|---|---|
| `source/apps.json` | **The authoritative catalog** — all 400 apps: `slug`, `name`, `description`, `category`, `category_slug`, `path`, `ir_version`, `data_sources`; plus the 17 `categories` with counts. |
| `source/apps.schema.json` | JSON Schema for `apps.json` (field definitions). |
| `source/README.md` | The repo's overview. |
| `source/CLAUDE.md` | The repo's agent context. |
| `source/apps/README.md` | The human-readable category guide. |
| `source/questions/…Questions to Ask - Sheet1.tsv` | The "questions to ask" seed sheet the catalog was synthesized from. |

Plus a derived readable view:

| File | What it is |
|---|---|
| [`use-cases.md`](use-cases.md) | All 400 use cases grouped by category, `name` + `description` verbatim from `apps.json` (which stays authoritative). |

## The 17 categories (app counts)

Operations / Logistics (40) · Finance (30) · Sales (30) · Compliance / Regulatory (28) ·
HR / People (28) · Customer Success / Account Management (26) · IT / Engineering (26) ·
Warehouse / Distribution (24) · Fleet Management (23) · Executive / Leadership (22) ·
Procurement / Supply Chain (22) · Quality Assurance (21) · Marketing (20) ·
Cross-Functional and Special Purpose (17) · Clinical and Lab Services (16) ·
Data and Analytics (15) · Risk and Insurance (12).
