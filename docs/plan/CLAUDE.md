# docs/plan/ — agent jump-table

The comprehensive portfolio plan (use cases · solutions · methodologies · industries)
for Orama Zetta, authored by the combined executive team (incl. the **CDO**).
**⚠️ Internal-confidential** (pricing/partner detail from evidence 07/08).

## The rules (v2 — 2026-07-15)

[`00-strategy-kernel.md`](00-strategy-kernel.md) is **binding** (decisions D1–D10).
Elaborate, never contradict; tensions go in each doc's appendix and resolve in the
kernel first. Additionally, all plan work obeys the **v2 philosophy**:

1. **Future-state only** — every analysis answers "is this a good decision for us in
   the future?"; current state (engine gaps, what's built, where we are) is out of
   scope in strategy documents.
2. **No sequencing** — no waves, phases, releases, launch tiers, roadmap dates. The
   portfolio is scored by risk-adjusted customer ROI (`E[ROI] × p(success)`), not
   scheduled.
3. **ROI is the central metric** — for selection, measurement, pricing, and the agents'
   reward signal. Intelligence Velocity is supporting only, never central.
4. **Auto-RL is central** — solutions are agent-operated; methodologies are agent
   tools; every pathway carries a data plan that trains the agents (doc 08).

## Documents (read the kernel first, then the domain you need)

- [`00-strategy-kernel.md`](00-strategy-kernel.md) — **the decisions** (D1 ROI calculus
  · D2 Auto-RL · D3 customers · D4 use cases · D5 methodologies · D6 solutions with ROI
  contracts · D7 data strategy · D8 ROI pricing · D9 metrics · D10 principles).
- [`01-executive-strategy.md`](01-executive-strategy.md) — CEO.
- [`02-use-case-portfolio.md`](02-use-case-portfolio.md) — CPO: the scored demand map
  (ROI bands A/B/C, p(success) rubric, anti-portfolio).
- [`03-methodology-portfolio.md`](03-methodology-portfolio.md) — CTO: the Auto-RL core,
  components as agent tools, the complete toolbox, the correctness gate.
- [`04-solutions-catalog.md`](04-solutions-catalog.md) — CPO+CTO: module specs with ROI
  contracts, agent operating definitions, data plans, capability levels (customer
  choices, never stages).
- [`05-industries-and-gtm.md`](05-industries-and-gtm.md) — CMO+CRO: who our customers
  will be; industry map by ROI fit; "priced on your return" positioning.
- [`06-financial-plan.md`](06-financial-plan.md) — CFO: ROI-based pricing mechanics,
  unit economics, portfolio finance (all numbers are planning assumptions).
- [`07-roi-risk-and-operating-model.md`](07-roi-risk-and-operating-model.md) — COO:
  p(success) factor model + calibration, failure modes as priced risk factors, the
  operating model of the agent-run factory.
- [`08-data-strategy.md`](08-data-strategy.md) — CDO: the data supply chain, reward
  engineering (ROI as training signal), the generalized-learning boundary, data
  governance.
- [`09-new-solution-research.md`](09-new-solution-research.md) — CPO: the analysis of
  evidence 16 (2026-10-09 web research) — which candidates became S-14…S-23, the
  combined synthesis, and the four per-angle findings tables as appendices. Research
  input, not a strategy decision; names companies (the specs in 04 do not).

## Conventions

- IDs fixed: `UC-n` (UC-1 = churn), `M-n`, `S-n` (~1:1 with a use case; the numbers
  coincide only for S-1…S-12 — S-13…S-23 pair with UC-25…UC-34 and UC-22, recorded in
  04 §3); **agent** = the Auto-RL-trained operator. Solutions are marketed as
  **modules**. The highest ids are `S-23` and `UC-34`.
- **Zetta's catalogue builder** (`modules/zetta/scripts/build_catalog.py` in
  zetta-bridge) parses 02's §2 table rows (`| UC-n | name | … | Band |`) and 04's
  `## N. S-n — Name (UC-n)` headers; keep those shapes when adding entries.
- Cite evidence inline as `(evidence NN)` → [`../evidence/`](../evidence/).
- Update this file + `README.md` when documents are added or renumbered.
