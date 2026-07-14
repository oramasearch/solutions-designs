# 02 — Enterprise AI pipelines, ranked (Deep Research)

Metadata and provenance only. The evidence itself is captured verbatim in the files
below — no summary or interpretation here (see the phase rules in
[`../CLAUDE.md`](../CLAUDE.md)).

## What this is

A second, more extensive **Deep Research** run (9 steps) answering the same question
as [`01`](../01-enterprise-ai-pipeline-use-cases/):

> *If I had a machine or technology that could build me the most valuable enterprise
> AI pipelines, which use cases would it cover? Explain your reasoning. Eg. churn
> prediction and remediation*

This run frames the opportunity as **closed-loop systems** (detect → choose
intervention → execute → measure incremental results → learn), gives a highest-value
use-case list with KPIs, lists the shared primitives "the machine" must provide, and a
recommended three-wave build order. It ships the **full ranked report**, a **scoring
model** (CSV + JSON), and the **raw research artifacts** (search-result and
fetch/extract JSONL + compact notes) that underpin it.

## Provenance

- **Source:** Deep Research report, provided by Steve Sperandeo.
- **Captured:** 2026-07-14.
- **Originals:** the 8 files below were supplied from `/Users/stevesperandeo/Downloads/`;
  the summary was pasted into chat.
- **Note:** the pasted summary mentions a "heatmap" among the attachments, but no
  heatmap file was included in the supplied set — recorded here only so the capture is
  a faithful account of what was and wasn't provided.

## Files (captured verbatim, original filenames preserved)

| File | What it is | Bytes | Lines | SHA-256 |
|---|---|---|---|---|
| [`rank-enterprise-ai-pipelines.md`](rank-enterprise-ai-pipelines.md) | The full ranked report. | 34730 | 150 | `a0b3d6ebcfd561899da8bcdbc9d26e5a3e28d3626115a68d451c0294de12d23c` |
| [`enterprise_ai_pipeline_scores.csv`](enterprise_ai_pipeline_scores.csv) | The scoring model, CSV. | 2025 | 14 | `84eb3f508d1e4192f4bb304f91a86123838f6dfa1db35cec20c620fb619fbabb` |
| [`enterprise_ai_pipeline_scores.json`](enterprise_ai_pipeline_scores.json) | The scoring model, JSON. | 5887 | 196 | `64f6131f6285ac82d4bccb53177235f84b2d6936103dc22c5429c1efb048e480` |
| [`01_search_results.jsonl`](01_search_results.jsonl) | Raw search results (research stage 1). | 719252 | 154 | `81d40c4d91175297fa6a93851b5debfbda8a025fe5fe6db234190ce8a3fb0b4a` |
| [`02_fetch_extract.jsonl`](02_fetch_extract.jsonl) | Fetched + extracted page content (stage 2). | 285167 | 20 | `e317a14a20e9e6631aa00a190b85b0d39a19609165a35afac23910f57dee12ff` |
| [`03_more_search_results.jsonl`](03_more_search_results.jsonl) | Additional search results (stage 3). | 412280 | 80 | `a6ca9b7d8c53e27cf5ce570a59880169fc820ba48f978d7cc25b7f0cb67948f1` |
| [`04_more_fetch_extract.jsonl`](04_more_fetch_extract.jsonl) | Additional fetched + extracted content (stage 4). | 134332 | 17 | `95303de02e24cc02031099e32278dd7569913f20dd866c53daf98575cada40d4` |
| [`05_compact_notes.txt`](05_compact_notes.txt) | Compact research notes (stage 5). | 73465 | 108 | `beaec8f137654a47bbb99e16a325b21ced47cd76acb8a1cf86fe01e072fc5398` |
| [`chat-message.txt`](chat-message.txt) | Verbatim text of the summary pasted into chat alongside the files. | — | — | — |

All SHA-256 values match the supplied originals exactly (verified on capture).
