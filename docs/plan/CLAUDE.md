# docs/plan/ — agent jump-table

The comprehensive portfolio plan (use cases · solutions · methodologies · industries)
for Orama Zetta, authored by the combined executive team. **⚠️ Internal-confidential**
(pricing/partner detail from evidence 07/08).

## The one rule

[`00-strategy-kernel.md`](00-strategy-kernel.md) is **binding**. It holds the decisions
D1–D9 (portfolio architecture · methodology waves W1–W4 · use-case tiers UC-1…UC-9 +
T2/T3 + anti-portfolio · industries · commercial anchors · hard gates · metrics ·
operating principles). When editing any plan doc: elaborate the kernel, never contradict
it; put genuine conflicts in that doc's "Tensions for kernel review" appendix and
resolve them in the kernel first (kernel changes are deliberate, small PR-style edits).

## Documents (read the kernel first, then the domain you need)

- [`00-strategy-kernel.md`](00-strategy-kernel.md) — **the decisions**; evidence-cited.
- [`01-executive-strategy.md`](01-executive-strategy.md) — CEO: thesis, positioning,
  horizons, decision log.
- [`02-use-case-portfolio.md`](02-use-case-portfolio.md) — CPO: UC catalog (T1 briefs,
  T2/T3, anti-portfolio, intake rubric, coverage vs evidence).
- [`03-methodology-portfolio.md`](03-methodology-portfolio.md) — CTO: components,
  M-1…M-11 build plans, correctness gate, Auto-RL, engine dependencies (R1–R8).
- [`04-solutions-catalog.md`](04-solutions-catalog.md) — CPO+CTO: module specs
  S-1…S-9, anatomy, delivery plans, upgrade matrix.
- [`05-industries-and-gtm.md`](05-industries-and-gtm.md) — CMO+CRO: vertical playbooks,
  ICP/scorecard, partner cohort, messaging.
- [`06-financial-plan.md`](06-financial-plan.md) — CFO: pricing, unit economics,
  scenarios (planning assumptions, not forecasts).
- [`07-delivery-roadmap-and-risks.md`](07-delivery-roadmap-and-risks.md) — COO:
  sequenced roadmap with hard gates, operating model, risk register.

## Conventions

- IDs are fixed: `UC-n` (use cases; UC-1 = churn, aligned with the wtm ORAMA-ZETTA
  blueprint), `M-n` (methodologies), `S-n` (solutions; ~1:1 with UC-n). Solutions are
  marketed as **modules**.
- Cite evidence inline as `(evidence NN)` referring to [`../evidence/`](../evidence/).
- The hard gates (kernel D7) are non-negotiable in any elaboration: security
  (zetta#759–#769), correctness-gate ≥90% floor, engine co-sequencing, one reference
  architecture per environment class, shadow-production-first.
- Update this file + `README.md` when documents are added or renumbered.
