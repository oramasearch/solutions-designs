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
