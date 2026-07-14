# Orama Zetta — video scripts

Screenplay/A-V scripts built from the [`../briefs/`](../briefs/). Each script turns one brief into a shot-by-shot explainer. File numbers match the source brief.

## Format

Each script opens with a **production header** (title · runtime · audience · purpose · tone · music · source brief), then runs as numbered scenes:

```
### SCENE N — TITLE  [m:ss–m:ss]
VISUAL:  what's on screen (screen-capture / animation / B-roll / on-screen text)
VO:      "the spoken narration"
SUPER:   on-screen text / lower-third (optional)
SFX:     sound / music cue (optional)
```

Conventions: VO is timed at ~150 words/min (~2.5 words/sec) — a 90-second video is ~220 words of VO. Lead with the outcome, not the feature; **no filler** ("revolutionary / seamless / robust / game-changing / best-in-class") per [`docs/gdrive/brain/CLAUDE.md`](../../../gdrive/brain/CLAUDE.md). Don't imply a capability is shipped if it isn't (check [`../roadmap.md`](../roadmap.md)).

**Messaging guardrails (latest agreed framing — keep every script consistent):**
- **Velocity:** "minutes, not quarters" — say "in minutes," never "in hours" or "an afternoon."
- **Three disciplines:** the **platform engineer, the data engineer, and the data scientist** — never "AI engineer." Avoid the "in a bottle" metaphor.
- **What it trains:** "trains models and pipelines" (often an ensemble; rarely a single model). Keep singular only for a rented general-purpose model.
- **Training thesis:** "If you're not training on your data, you're not fully using AI" — "true predictive power comes only from training on your own data."
- **Tagline:** "Intelligence Velocity for Big Thinkers."
- **Sharper positioning (use sparingly, only where it fits naturally):** "Auto-ANI for the enterprise" (automated artificial *narrow* intelligence — optimized for cost, governance, and personalized accuracy; not AGI) · "production-grade AI, deployed in minutes" · "the world's first adaptive database" · "from the creator of OpenShift" · "true hybrid — one cluster, every vendor and architecture, for control over cost, flexibility, and resilience."
- **Genericize for public cuts:** "n8n" → "an automation tool," "Okta" → "your SSO" (leave literal artifact refs where the artifact itself is the subject).

## The set

| # | Script | Runtime | Audience | Distribution |
|---|---|---|---|---|
| [`01-what-is-orama-zetta.md`](01-what-is-orama-zetta.md) | ~80s | everyone | public-safe |
| [`09-for-the-platform-lead.md`](09-for-the-platform-lead.md) | ~70s | platform / AI leads | public-safe |
| [`13-the-motive-story.md`](13-the-motive-story.md) | ~2:10 | sales / investor (internal) | ⚠️ **INTERNAL** — names a design partner under NDA; anonymize before any public use (variant in-file) |

## ⚠️ Confidentiality

`13-the-motive-story` names Motive and Charles and describes their internal system. **Do not publish it externally** without Motive's consent — it's an internal sales/investor narrative. The file includes an anonymized variant for public use. Treat any script that names a customer the same way.
