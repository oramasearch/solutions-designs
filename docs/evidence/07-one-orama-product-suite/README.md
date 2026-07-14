# 07 — One Orama product suite (v3 convergence)

Metadata and provenance only. The evidence itself is captured verbatim under
[`source/`](source/) (see the phase rules in [`../CLAUDE.md`](../CLAUDE.md)).

> **⚠️ Internal-confidential.** The captured `README.md` marks this project
> *"Confidential — internal strategy. Contains pricing, an acquisition target, and
> design-partner names."* This lives here because `solutions-designs` is a **private**
> `oramasearch` repo; treat it as internal-only, as the source does.

## What this is

The **"One Orama" v3 convergence** plan of record — Orama collapsing its product
portfolio into **one product suite anchored by Orama Zetta** (fold Orama Cloud v1 + v2 +
Clustera + Zetta into Orama Cloud v3; migrate scattered AWS-hosted v1 into a single
k8s deployment driven by the Orama operator; progressively replace every datastore with
Zetta). Provided as the **broader product-suite context**.

**Scope note (user framing):** *"this is our product suite, but this solutions exercise
focuses entirely on Orama Zetta."* Captured for context; the exercise centers on Zetta.

## Provenance

- **Source:** `docs/projects/one-orama/` in this umbrella bridge (orama-work / orama-bridge).
- **Repo commit at capture:** `ca42a857e0040abf8fab94e6c1dbbb59cab583c2`.
- **Captured:** 2026-07-14, from the local working tree. 7 markdown files, byte-identical
  (verified against source; see [`SHA256SUMS.txt`](SHA256SUMS.txt)).

## Files (verbatim, under `source/`)

| File | What it is |
|---|---|
| `source/One Orama.md` | The **original vision brief — verbatim, unedited** (Steve's words). The project's source of truth. |
| `source/README.md` | The whole-picture synthesis — current state, the 4-product suite + pricing, strategic thesis, staged roadmap, governing conventions. |
| `source/migration.md` | The zero-downtime v1(AWS)→k8s migration + progressive datastore→Zetta replacement + cutover/cutback/decommission. |
| `source/zetta-operator.md` | The symbiotic operator ↔ Zetta architecture + the `OramaZettaCluster` CRD. |
| `source/zetta-headless-reference.md` | Source-verified facts for packaging Zetta headless (binary, `--headless`, ports, clustering + mTLS, PVC, build, gaps). |
| `source/session-2026-07-10.md` | Session log (2026-07-09→10) — one cluster across k0s + AKS + laptop; reachability model; engine bugs; authn/authz build. |
| `source/session-2026-07-11.md` | Session log (2026-07-10→11) — Stage 2 symbiosis v0; e2e-as-a-CRD; elastic capacity + multi-node bring-up. |

`SHA256SUMS.txt` lists the SHA-256 of every file (paths relative to `source/`).
