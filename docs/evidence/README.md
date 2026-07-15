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
| [07](07-one-orama-product-suite/) | One Orama v3 convergence — the product-suite context (4 products anchored by Zetta, migration, operator↔Zetta). ⚠️ internal-confidential. 7 docs, verbatim | docs/projects/one-orama @ ca42a85 | 2026-07-14 |
| [08](08-orama-platform-2-zetta/) | Orama Platform 2 / Orama Zetta project folder — vision, personas, roadmap, 17 briefs, video scripts, design-partner research. 33 docs, verbatim | docs/projects/orama-platform-2 @ ca42a85 | 2026-07-14 |
| [09](09-amaro-desktop-example-data-apps/) | amaro-desktop example data apps — use-case catalog of 400 apps across 17 categories (from the retired amaro-desktop; kept as solutions evidence). Catalog verbatim + readable listing | oramasearch/example-data-apps @ 2622133 | 2026-07-14 |
| [10](10-claude-methodologies-compendium/) | Claude's methodologies compendium — internal answer to the methodologies prompt: 35 dossiers (18 fields each) + 5 syntheses, 281KB | Claude (Perplexity-assisted), answering docs/prompts/ | 2026-07-14 |
| [11](11-claude-use-cases-compendium/) | Claude's use-cases compendium — internal answer to the use-cases prompt: 124 use cases (33 full + 91 compact) + 7 syntheses, 301KB | Claude (Perplexity-assisted), answering docs/prompts/ | 2026-07-14 |
| [12](12-claude-solutions-compendium/) | Claude's solutions compendium — internal answer to the solutions prompt: 34 dossiers (correctness adaptations + business wiring) + 7 syntheses, 272KB | Claude (Perplexity-assisted), answering docs/prompts/ | 2026-07-14 |
| [13](13-deep-research-methodologies-compendium/) | Deep Research: methodologies compendium — external answer to the methodologies prompt: ~26 dossiers (A–V) + 5 syntheses, 123KB | Deep Research report (Steve Sperandeo) | 2026-07-14 |
| [14](14-deep-research-use-cases-compendium/) | Deep Research: use-cases compendium — external answer to the use-cases prompt: ~140 full dossiers (A–L) + 7 syntheses, 852KB (source-stated caveat: some function-level evidence shared across siblings) | Deep Research report (Steve Sperandeo) | 2026-07-14 |
| [15](15-deep-research-solutions-compendium/) | Deep Research: solutions compendium — external answer to the solutions prompt: 43 dossiers (A–J) + 7 syntheses, 366KB (passed after two redraft rounds per source) | Deep Research report (Steve Sperandeo) | 2026-07-14 |
