# 05 — Snowflake Solutions by Industry

Metadata and provenance only. The evidence itself is in the files below (see the phase
rules in [`../CLAUDE.md`](../CLAUDE.md)).

## What this is

The **industry solutions** listed at <https://www.snowflake.com/en/solutions/industries/>
— **9 industries**, each with its sub-industries and a description.

## Provenance & method

- **Source page:** <https://www.snowflake.com/en/solutions/industries/>
- **Captured:** 2026-07-14, by Claude Code (browser extension unavailable; captured via
  HTTP fetch).
- **This page is server-rendered** — unlike the Databricks page, the full industry
  content is present in the page HTML. So [`landing-page.html`](landing-page.html) is
  the **verbatim source of record** and contains everything.
- The readable [`industries-extracted.md`](industries-extracted.md) is a convenience
  index. Its 9 industry names and all sub-industry names were **verified present in the
  raw HTML** (the HTML uses `&amp;` entities); its one-line descriptions are excerpts
  and may be truncated — the HTML has the full text.

## The 9 industries

Advertising, Media & Entertainment · Financial Services · Healthcare & Life Sciences ·
Manufacturing · Public Sector · Retail & Consumer Goods · Technology · Telecom ·
Travel & Hospitality. Sub-industries and descriptions are in
[`industries-extracted.md`](industries-extracted.md).

## Files

| File | What it is |
|---|---|
| [`landing-page.html`](landing-page.html) | The literal page HTML as served — the **verbatim source** (server-rendered; contains all 9 industries + sub-industries + descriptions). 735524 bytes, SHA-256 `ad3753c998aa1cd0befb973c8b01b2998f17aeaddfe35fad89aab01b791f1ea1`. |
| [`industries-extracted.md`](industries-extracted.md) | Readable extraction of the 9 industries + sub-industries (names verified against the HTML; descriptions are excerpts). |
| [`industry-urls.txt`](industry-urls.txt) | The 9 industry landing-page URLs, extracted verbatim from the page. |
