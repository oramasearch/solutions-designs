# docs/evidence/

The **verbatim evidence** for the enterprise AI solutions we're designing for Orama
Zetta. One subfolder per source/topic. Everything here is raw input — **captured
exactly as given, nothing summarised or dropped, and no analysis.**

## How it's organised

- One subfolder per evidence source/topic, named `NN-<slug>` (a zero-padded ordinal
  that preserves capture order, e.g. `01-<slug>`, `02-<slug>`).
- Each subfolder has its own `README.md` recording **what** the evidence is, **where**
  it came from, and **when** it was captured — plus the verbatim content in one or more
  files stored exactly as received.
- New evidence → new subfolder + its `README.md`, and a row added to the index below
  (and to [`CLAUDE.md`](CLAUDE.md)).

## Index

| # | Evidence | Source | Captured |
|---|---|---|---|
| [01](01-enterprise-ai-pipeline-use-cases/) | Enterprise AI pipeline use cases — Deep Research report ranking ~16 use cases into 3 tiers, + ranking chart | Deep Research report (Steve Sperandeo) | 2026-07-14 |
| [02](02-enterprise-ai-pipelines-ranked/) | Enterprise AI pipelines, ranked — 2nd Deep Research run (9 steps): closed-loop framing, ranked report, scoring model (CSV+JSON), raw search/fetch artifacts | Deep Research report (Steve Sperandeo) | 2026-07-14 |
| [03](03-enterprise-ai-pipelines-closed-loop/) | Enterprise AI pipelines, closed-loop framing — 3rd Deep Research run (8 steps): 6-dimension scoring, Tier 1/2/3, per-industry top-pipeline ranking, prediction→remediation table | Deep Research report (Steve Sperandeo) | 2026-07-14 |
| [04](04-databricks-solution-accelerators/) | Databricks Solution Accelerators — complete list of 93 accelerators (title + description each) + industry filter categories | databricks.com/solutions/accelerators (sitemap + per-page meta) | 2026-07-14 |
| [05](05-snowflake-industry-solutions/) | Snowflake Solutions by Industry — 9 industries + sub-industries + descriptions | snowflake.com/en/solutions/industries (server-rendered HTML) | 2026-07-14 |
| [06](06-orama-zetta-website/) | Orama Zetta product website ("what we promise users") — content-source snapshot + full copy transcription across 7 pages | modules/orama-website-v2 @ ed17e32 (oramasearch/amaro-marketingsite) | 2026-07-14 |
