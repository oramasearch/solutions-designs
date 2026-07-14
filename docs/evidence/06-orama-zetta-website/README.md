# 06 — Orama Zetta product website ("what we promise users")

Metadata and provenance only. The evidence itself is in the files below (see the phase
rules in [`../CLAUDE.md`](../CLAUDE.md)).

## What this is

The **Orama Zetta product website** — the promises we make to users. Captured as a
point-in-time snapshot of the site's content-bearing source, plus a readable
transcription of all the user-facing copy.

The site is the marketing/product site for **Orama Zetta**: a Vite + React + shadcn/ui
app. Routes: `/` (home), `/how-it-works`, `/technology`, `/true-hybrid`,
`/who-its-for`, `/pricing`, `/waitlist` (+ 404). The homepage composes the section
components under `src/components/zetta/`.

## Provenance

- **Source repo:** [`oramasearch/amaro-marketingsite`](https://github.com/oramasearch/amaro-marketingsite)
  — the same working tree checked out locally at `modules/orama-website-v2` in this
  umbrella bridge.
- **Exact commit captured:** `ed17e322f2a3c1c772dff8bda17b93affe13bae0` ("Merge pull
  request #21 from oramasearch/feat/orama-zetta-site"), branch `zetta-live-backup`.
- **Captured:** 2026-07-14, by Claude Code, from the local working tree.
- **Scope of the snapshot:** the **content-bearing** source — `index.html`, `src/App.tsx`
  (routing), all `src/pages/*.tsx`, and all `src/components/zetta/*.tsx`. This is where
  every user-facing promise lives. UI primitives (`src/components/ui/`), hooks, libs,
  assets, and build config are **not** copied here — the complete site source is
  preserved verbatim at the pinned commit above.

## Files

| File | What it is |
|---|---|
| [`source/`](source/) | Verbatim byte-for-byte copy of the 22 content-bearing source files (`index.html` + `src/App.tsx` + 8 pages + 12 `zetta/` sections). |
| [`SHA256SUMS.txt`](SHA256SUMS.txt) | SHA-256 of every file in `source/` (integrity manifest; paths relative to `source/`). |
| [`promises.md`](promises.md) | Readable transcription of all user-facing copy, organized by page/section. The `source/` snapshot is the verbatim authority. |

## Note

The copy is embedded in JSX and the site is client-rendered, so `promises.md` is a
transcription of the copy from the source (the authoritative bytes are in `source/`,
verified by `SHA256SUMS.txt`). Because it's a point-in-time snapshot, the live site may
change; this reflects commit `ed17e32`.
