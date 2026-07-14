# docs/evidence/ — capture rules + index

The verbatim evidence for the enterprise AI solutions. **This is the governing file
for the capture convention — read it before adding any evidence.**

## Capture rules (non-negotiable)

1. **Verbatim, nothing lost.** Store evidence exactly as given — no summarising,
   paraphrasing, truncating, re-wording, re-formatting, or "tidying". If it arrives as
   text, preserve it character-for-character (fenced verbatim so nothing renders away).
   If it arrives as a file/image/export, commit the original bytes.
2. **Collect, don't conclude.** No analysis, ranking, recommendation, or design. Your
   own words appear only as neutral attribution metadata, never mixed into the source.
3. **Attribute everything.** Record where each piece came from (person, URL, document,
   channel) and when it was captured. Attribution lives in the subfolder `README.md`,
   never in place of the original text.

## Naming + structure

- One subfolder per source/topic: `NN-<slug>` where `NN` is a zero-padded ordinal in
  capture order (`01-`, `02-`, …) and `<slug>` is a short kebab-case descriptor.
- Inside each subfolder:
  - `README.md` — metadata only: what it is, source, date captured, pointer to the raw
    file(s). No interpretation.
  - the verbatim content — e.g. `content.md` (fenced), the original filename for
    exports, or `image-NN.<ext>` for screenshots. Whatever it takes to preserve it intact.
- After creating a subfolder, add it to **both** this file's list and
  [`README.md`](README.md)'s index table (same change).

## Subfolders

- [`01-enterprise-ai-pipeline-use-cases/`](01-enterprise-ai-pipeline-use-cases/) —
  Deep Research report ranking ~16 enterprise AI use cases into 3 tiers by a composite
  value score (+ ranking chart). Verbatim report `.md`, chart `.png`, a searchable
  chart transcription, and the pasted chat summary. See its
  [`README.md`](01-enterprise-ai-pipeline-use-cases/README.md).
- [`02-enterprise-ai-pipelines-ranked/`](02-enterprise-ai-pipelines-ranked/) — 2nd
  Deep Research run (9 steps) on the same question: closed-loop framing, highest-value
  use cases + KPIs, shared primitives, 3-wave build order. Ships the ranked report
  `.md`, a scoring model (`.csv` + `.json`), the raw search/fetch `.jsonl` research
  artifacts + compact notes, and the pasted chat summary. See its
  [`README.md`](02-enterprise-ai-pipelines-ranked/README.md).
- [`03-enterprise-ai-pipelines-closed-loop/`](03-enterprise-ai-pipelines-closed-loop/)
  — 3rd Deep Research run (8 steps) on the same question: the closed-loop pipeline
  shape, a 6-dimension scoring rubric, Tier 1/2/3 use cases, a per-industry
  top-pipeline ranking, and the prediction→remediation generalization table. Verbatim
  report `.md` + the pasted chat summary. See its
  [`README.md`](03-enterprise-ai-pipelines-closed-loop/README.md).
- [`04-databricks-solution-accelerators/`](04-databricks-solution-accelerators/) — the
  complete list of **93 Databricks Solution Accelerators** (title + description each) +
  the page's industry filter categories. The grid is JS-only, so compiled from
  Databricks' sitemap (URLs) + each page's `og:title`/meta `description`; `.tsv` (data)
  + `.md` (readable) + URL list + the literal landing-page shell. See its
  [`README.md`](04-databricks-solution-accelerators/README.md).
- [`05-snowflake-industry-solutions/`](05-snowflake-industry-solutions/) — the **9
  Snowflake industry solutions** + sub-industries + descriptions. Page is
  server-rendered, so the raw `landing-page.html` is the verbatim source; readable
  extraction + industry URL list alongside. See its
  [`README.md`](05-snowflake-industry-solutions/README.md).
- [`06-orama-zetta-website/`](06-orama-zetta-website/) — **our own Orama Zetta product
  website** ("what we promise users"). A point-in-time snapshot of the content-bearing
  source (`source/` = index.html + App.tsx + 8 pages + 12 zetta/ sections, verified by
  `SHA256SUMS.txt`) at commit `ed17e32`, plus `promises.md` — a full readable
  transcription of the copy across all 7 pages. See its
  [`README.md`](06-orama-zetta-website/README.md).
