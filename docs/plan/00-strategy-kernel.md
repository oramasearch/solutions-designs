# Strategy kernel — the binding decisions (future state)

> **Status:** v2 — 2026-07-15. Authored by the combined executive team (CEO/CPO/CTO/
> CDO/CMO/CRO/CFO/COO, Claude acting at Steve's direction). **⚠️ Internal-confidential.**
>
> **v2 supersedes v1 entirely.** What changed, per Steve's direction: (1) **all
> sequencing is removed** — no waves, no releases, no phases, no engine-dependency
> gating; (2) the analysis is **future-state only** — every decision answers *"is this
> a good decision for us in the future?"*, never *"where are we today?"*; (3) **Auto-RL
> is central** — the agent trained on the customer's data is the core of the product,
> not a late-stage bet; (4) the **Chief Data Officer perspective is added** — every
> solution and methodology carries a data collection + refinement plan that feeds
> Auto-RL training; (5) **ROI is the central metric** — customer return on investment,
> risk-adjusted by probability of success — and **pricing is based on it**. Intelligence
> Velocity remains a metric but is no longer the central one.
>
> **This document is the spine.** The sibling documents (`01`–`08`) elaborate it and
> must not contradict it; tensions go to each doc's appendix and resolve here first.
> Every decision cites its evidence ([`../evidence/`](../evidence/), items 01–15).

---

## 1. The future state

**Enterprises buy outcomes, not models.** In the future state, Orama Zetta is the
factory that delivers those outcomes: an enterprise states a problem, and a **deployed,
correct, governed solution runs on their own infrastructure — built, operated, and
continuously improved by Auto-RL agents trained on that customer's own data.** The
customer's data never leaves their walls; their agents get sharper with every run; and
every solution carries a **measured ROI** the customer can see.

The factory's economics rest on the evidenced structural fact (items 10–15): **many use
cases ≈ many solutions ≫ few methodologies.** A compact toolbox of methodology
components composes into solutions for a very large catalog of business problems — and
in the future state, **the composer is the agent**: Auto-RL agents select, arrange, and
operate methodologies against use cases, personalized to each customer (evidence 06
"Auto-Suggest / Auto-RL / Personalized MCP"; evidence 07 — the agentic RL base model
anchors every other use case; evidence 08 personalized-intelligence).

The business consequence: revenue scales with **customer ROI delivered**, not with
hours, seats, or compute. We find the problems where the return is largest and most
probable, deliver them as priced modules, prove the return, and let the agents compound
it.

## 2. Vocabulary and IDs (fixed)

Per [`../vocabulary.md`](../vocabulary.md): **use case** = the problem · **methodology**
= the arranged AI methods · **solution** = the methodology applied correctly + wired to
the business action. v2 adds: **agent** = the Auto-RL-trained operator that composes
methodologies into solutions and runs them for a specific customer. IDs: `UC-n` (UC-1 =
churn, aligned with the wtm ORAMA-ZETTA blueprint), `M-n`, `S-n` (~1:1 with `UC-n`).
Solutions are marketed as **modules**.

**Extended Band-A IDs, ratified 2026-07-15** (docs 02/04 aligned): UC-10/S-10 fraud &
financial-crime decisioning · UC-11/S-11 next-best-action · UC-12/S-12 claims triage ·
UC-13 credit-risk decisioning (argued addition in 02, pending review). Band-B/C IDs
(UC-14…UC-24+) are assigned in doc 02.

## 3. D1 — The decision calculus: risk-adjusted customer ROI

**Every portfolio decision — use case, solution, methodology, industry, customer — is
scored on risk-adjusted customer ROI:**

```
score = E[ROI] × p(success)

E[ROI]     = expected customer return ÷ customer investment
             return: revenue lift, cost reduction, loss avoidance, working-capital
             release, risk reduction — measured, not projected
customer investment = module price + integration effort + data work + change cost
p(success) = probability the solution actually delivers that return in production
```

**p(success) drivers** (from the failure evidence — items 03, 11 §S7, 12 §S6, 14, 15:
enterprise AI fails at the problem-and-plumbing layer, rarely the model layer):
data availability & label quality · actionability (a real action path exists) ·
measurability (the return is provable) · organizational adoption (an owner acts on it)
· governance fit. **p(failure) is a first-class quantity** — we estimate it, price it,
and manage the portfolio against it.

Corollaries: (a) **the analysis is future-state only** — feasibility means "will this
be a good business", never "can we build it this quarter"; (b) **ROI must be measured,
not asserted** — every deployed solution carries a measurement loop (holdout, uplift,
or hard operating metric) whose output is the ROI number itself; (c) the same calculus
governs **what we build, who we sell to, and what we charge** (D8).

## 4. D2 — Auto-RL at the center

**The product's core is the agent.** Zetta studies the customer and their data
(Auto-Suggest), **auto-trains a long-horizon, tool-calling agent on that customer's
data with reinforcement learning** (Auto-RL), and personalizes every interface to how
they work (Personalized MCP) — evidence 06/08. Decisions:

1. **Every solution is agent-operated.** A solution module = the use case + the
   methodology composition + the agent that builds, runs, monitors, explains, and
   improves it inside the customer's environment.
2. **Methodologies are the agent's tools; the use-case catalog is its action space.**
   The methodology portfolio (D5) exists to give the agent a complete, correct toolbox.
3. **The Zetta agentic RL base model** (evidence 07, catalog item #3) is the anchor
   asset: a base agent, post-trained per customer on their data. Customer-specific
   weights belong to the customer; the base model and generalized learnings are ours
   (the IP split, evidence 08).
4. **Data is the fuel** — which is why the CDO function exists (D7): no solution enters
   the catalog without a defined data collection + refinement path that trains and
   improves its agent.
5. **Correct by construction applies to agents too:** agent actions pass the same
   correctness gate and governance (identity-scoped, audited, approval-gated) as any
   graph — the gate is a product property of the future state, not a rollout step.

## 5. D3 — The customer (who our customers will be)

The future-state customer is any enterprise where **recurring, high-value decisions**
meet **owned data exhaust** and **a governance requirement** — the three conditions
under which risk-adjusted ROI is largest (evidence 01–03, 08, 11, 14):

- **Profile:** organizations with systems of record producing decision-grade data
  (CRM/ERP/billing/telemetry/tickets/claims/sensors), a named owner for the outcome,
  and infrastructure they control (cloud VPC, K8s, on-prem). They buy **own-data
  training** and **in-environment deployment** — not rented inference (evidence 06/08).
- **Industry map, scored by future ROI fit** (not by entry order): **financial
  services/banking** and **insurance** (regulated, data-rich, loss-avoidance pools;
  governance maps 1:1 to our primitives) · **healthcare/life-sciences** (huge
  administrative-ROI pools) · **manufacturing/industrial + logistics/fleet**
  (asset & operations ROI; sensor exhaust) · **telecom** (churn/network scale) ·
  **retail/CPG** (forecasting/pricing/personalization pools) · **energy/utilities**
  (load + asset ROI) · **B2B SaaS/tech** (churn/expansion-native, data-ready). All are
  in-scope in the future state; account selection *within* any industry follows D1
  scoring.
- **Anti-customer** (poor future ROI-risk, from evidence 08 anti-ICP): buyers wanting a
  copilot/RAG toy rather than a trained system; anyone requiring us to hold their raw
  data in our cloud; organizations with no outcome owner (no adoption ⇒ p(success)→0).

## 6. D4 — The use-case portfolio (the complete demand map)

The catalog is the **full set of enterprise problems where risk-adjusted ROI is
strong** — organized by business function, scored by D1, with no time dimension.
`02-use-case-portfolio.md` holds the complete scored catalog; the kernel fixes the
frame:

- **ROI bands, not launch tiers:** Band A (highest risk-adjusted ROI — e.g. churn &
  retention UC-1, collections, demand forecasting, fraud & financial-crime decisioning,
  predictive maintenance, lead/opportunity scoring, next-best-action, claims triage,
  KPI driver analysis, automated outbound) · Band B (strong ROI, higher variance —
  e.g. pricing optimization, attrition, ticket triage, document/claims automation,
  supplier risk, healthcare ops) · Band C (real but selective ROI — pursued
  account-by-account when D1 scores well). Band assignments live in doc 02 with the
  ROI model for each.
- **Every use case carries an ROI dossier:** the value pool, the customer-investment
  shape, the p(success)/p(failure) drivers, and the measurement design that will prove
  the return (evidence 11/14 supply the pools; 12/15 the measurement patterns).
- **Anti-portfolio** (ROI/risk grounds only): problems with unmeasurable returns,
  no action path, or adverse governance exposure that caps p(success) — e.g. generic
  chatbots (unmeasurable), autonomous high-stakes decisions without human gates
  (p(failure) and liability dominate), vanity analytics.

## 7. D5 — The methodology portfolio (the complete toolbox)

The future-state toolbox is **complete, not staged**: tabular supervised (M-1, the
workhorse — evidence 10/13 prevalence), entity resolution, segmentation, time-series
forecasting, survival, causal/uplift, anomaly detection, recommendation/NBA,
learning-to-rank, NLP/embeddings/RAG/fine-tuning, document intelligence, graph,
vision, speech, bandits/RL, optimization/OR, Bayesian/UQ, ensembling,
label-efficiency, privacy/synthetic, streaming — **with Auto-RL agents as the
composer of all of them** (D2). Admission rule: a methodology belongs in the toolbox
iff it raises the portfolio's risk-adjusted ROI (it unlocks Band-A/B use cases or
raises p(success) of existing ones). `03-methodology-portfolio.md` specifies each as a
productized component set with its correctness profile; **every methodology also
declares its data requirements for agent training (D7).**

## 8. D6 — Solutions: the sellable unit, with an ROI contract

A solution ships as a **priced module with an ROI contract**: the anatomy (methodology
+ correctness adaptations + business wiring + measurement loop — evidence 12 §S1, 15)
**plus**: (a) an **ROI model** agreed up front (what return, from which lever, measured
how); (b) a **p(success) assessment** with the risk drivers named; (c) an **agent
operating definition** (what the customer's agent does autonomously vs with approval);
(d) a **data plan** (D7). **Definition of done:** *deployed in the customer environment
· passed the correctness gate · wired to at least one named business action · operated
by the customer's agent under governance · **ROI measured against the agreed model** ·
zero governance violations.* `04-solutions-catalog.md` holds the full catalog S-n ~1:1
with the scored use cases.

## 9. D7 — The data strategy (CDO): data → agents → ROI

**New in v2.** For each pathway — every methodology and every solution — we must
**collect and refine the data that trains the Auto-RL agents.** Decisions:

1. **Every solution defines its data supply chain:** the sources to connect, the
   entities to resolve, the labels/outcomes to capture (including the *action taken*
   and the *result observed* — the RL reward signal), the refinement steps, and the
   feedback loop that turns operations into training data.
2. **The reward is ROI:** agent training optimizes toward the solution's measured ROI
   signal wherever the measurement loop can express it — the metric the customer pays
   for is the metric the agent learns on.
3. **Data assets compound:** per-customer data + weights stay the customer's;
   cross-customer **generalized** patterns (schemas, playbooks, priors, benchmarks,
   synthetic corpora) are ours and raise every future agent's starting point — this is
   the moat's second layer alongside own-data training (evidence 06).
4. **Refinement is a first-class function:** labeling, outcome attribution, drift
   surveillance, data-quality contracts — owned by the CDO function, specified per
   solution in `08-data-strategy.md`.
5. **Governance is intrinsic:** collection and refinement operate under the same
   identity-scoped, audited, consent-aware regime as everything else.

## 10. D8 — Pricing: ROI-based

**Price is set from the customer's return, not from our cost** (evidence 07 anchors
retained: Enterprise platform $500k/yr+; solutions priced as modules):

- **Each module is priced against its ROI model** — an anchor share of the expected
  annual return, risk-adjusted: higher-p(success), well-evidenced solutions carry
  premium pricing; higher-variance solutions carry lower entry pricing with
  **success-linked components** tied to the measured ROI readout.
- **The measurement loop is the billing instrument:** the same holdout/uplift/operating
  metric that proves ROI to the customer justifies (and trues-up) the price.
- **Portfolio effect:** module attach compounds customer ROI on a shared data + agent
  foundation, and pricing recognizes that the marginal module's customer investment
  falls while its return holds — expansion is priced to be obvious.
- `06-financial-plan.md` specifies the mechanics (anchor shares, bands, success-linked
  structures, true-up cadence).

## 11. D9 — Metrics: ROI first

- **Central metric: customer ROI** — measured return ÷ customer investment, per
  solution, per customer, and portfolio-wide.
- **Companions to the central metric:** **p(success) calibration** (do our ex-ante
  success probabilities match ex-post outcomes?) and **portfolio risk-adjusted ROI**
  (the D1 score, tracked against realized results).
- **Supporting metrics:** module attach rate · NRR · correctness-gate pass rate ·
  agent autonomy share (actions taken under governance without human intervention) ·
  data-flywheel health (outcome-capture coverage per solution) · **Intelligence
  Velocity** (intent → deployed — still tracked, explicitly *not* central).
- **Guardrail:** governance violations = 0.

## 12. D10 — Operating principles

1. **Future-state analysis only.** Every debate resolves on "is this a good decision
   for us in the future?" — current state is out of scope in strategy documents.
2. **No sequencing in strategy.** No waves, phases, releases, or launch tiers; the
   portfolio is scored (D1), not scheduled.
3. **ROI before everything** — selection, pricing, measurement, and agent reward all
   run on the same quantity.
4. **Agents at the center** — every solution is agent-operated; every methodology is
   agent-composable; every data plan feeds agent training.
5. **Correct by construction and governed by default are product properties** — never
   traded, never staged (evidence 06).
6. **Measured, not asserted** — a solution without an ROI readout is not done.
7. **Data is a supply chain, not exhaust** — collection and refinement are designed
   per solution (D7).

## 13. Evidence base

| Decision | Primary evidence |
|---|---|
| Future state & thesis | 06 (promises) · 07 (One Orama end-state, catalog #3) · 08 (personalized intelligence) · 10–15 (factory cardinality) |
| D1 ROI calculus | 01–03 (value traits/closed loop) · 11/14 (pools + failure patterns) · 12 §S5–S6/15 (measurement + failure evidence) |
| D2 Auto-RL centrality | 07 (base model anchors the catalog) · 08 (Auto-Suggest/Auto-RL/Personalized MCP) · 06 (learning, not inference) |
| D3 customers | 08 (ICP/anti-ICP, vertical fit) · 04/05 (market catalogs) · 11/14 (industry pools) |
| D4/D5/D6 portfolios | 10/13 (methodology toolbox) · 11/14 (use-case pools) · 12/15 (solution anatomy + ROI measurement) · 09 (demand breadth) |
| D7 data strategy | 06 (learning loop) · 08 (Auto-RL) · 12/15 (outcome-capture patterns) |
| D8 pricing anchors | 07 (⚠️ confidential) + D1 |

## 14. Open questions (kernel-level)

1. The ROI-share anchor: what fraction of expected annual return does a module price
   target (and how does it vary with p(success))? — CFO to propose in 06.
2. Success-linked pricing: which component is fixed vs contingent on the measured ROI
   readout, and who bears measurement-design risk?
3. p(success) estimation: what rubric produces the ex-ante probability (and how do we
   calibrate it against realized outcomes)? — 02/07 to propose jointly.
4. The generalized-learning boundary: precisely what crosses from customer-specific
   data/weights (theirs) into generalized assets (ours)? — CDO to define in 08.
5. Agent autonomy defaults: which action classes default to autonomous-under-audit vs
   approval-gated, per solution family? — 03/04 to propose.
