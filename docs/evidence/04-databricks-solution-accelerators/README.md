# 04 — Databricks Solution Accelerators

Metadata and provenance only. The evidence itself is in the files below (see the phase
rules in [`../CLAUDE.md`](../CLAUDE.md)).

## What this is

The complete list of **Databricks Solution Accelerators** listed at
<https://www.databricks.com/solutions/accelerators> — **93 accelerators**, each with
its title and one-line description, plus the page's industry filter categories.

## Provenance & method

- **Source page:** <https://www.databricks.com/solutions/accelerators>
- **Captured:** 2026-07-14, by Claude Code (the browser extension was unavailable, so
  captured via HTTP fetch).
- **Why the method matters:** the listing page is a **Gatsby JS app** — the accelerator
  grid is loaded client-side and is **not** present in the page HTML (a plain fetch and
  a WebFetch both see only the page shell + filters). So the list was reconstructed from
  Databricks' **own authoritative sources**, verbatim:
  1. **The complete set of accelerator URLs** was taken from Databricks' sitemap
     (`https://www.databricks.com/en-website-assets/sitemap/sitemap-0.xml`) → 93 unique
     `/solutions/accelerators/<slug>` pages ([`accelerator-urls.txt`](accelerator-urls.txt)).
  2. **Each accelerator's title + description** is that page's own server-rendered SEO
     meta — the `og:title` and `<meta name="description">` — fetched per page. These are
     the canonical strings Databricks assigns each accelerator (the listing cards are
     generated from the same content).
- **Industry filter categories** shown on the page (via WebFetch of the landing page):
  Retail and Consumer Goods · Manufacturing · Financial Services · Healthcare and Life
  Sciences · Media & Entertainment · Public Sector · Technology and Software.
- HTML entities (e.g. `&#x27;`, `&amp;`) are **preserved verbatim** in `accelerators.tsv`
  and decoded only in the readable `accelerators.md`.

## Files

| File | What it is |
|---|---|
| [`accelerators.tsv`](accelerators.tsv) | **Canonical data** — 93 rows, tab-separated `slug` / `title` / `description`, values verbatim from each page's meta (entities preserved). |
| [`accelerators.md`](accelerators.md) | Readable numbered listing of all 93 (entities decoded for reading). |
| [`accelerator-urls.txt`](accelerator-urls.txt) | The 93 accelerator page URLs, from Databricks' sitemap (the authoritative complete set). |
| [`landing-page.html`](landing-page.html) | The literal landing page HTML as served (the JS shell; the accelerator grid is **not** in it — kept as source-of-record). 782721 bytes, SHA-256 `189b3231f86b572e49fcfa33e90823907d226fd9d1beebc78e708f5008480e44`. |

## Note

This is a compiled capture (sitemap + per-page meta), not a screenshot of the rendered
grid, because the grid is JS-only. The **count (93)** and **URLs** come straight from
Databricks' sitemap; the **titles/descriptions** are each page's own meta text. If a
fully-rendered capture of the grid (exact card order, any card-only copy) is later
wanted, it needs a browser render of the live page.
