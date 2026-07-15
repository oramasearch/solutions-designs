# Strategy kernel — the binding decisions

> **Status:** Draft v1 — 2026-07-15. Authored by the combined executive team (Claude
> acting as CEO/CPO/CTO/CMO/CFO/COO at Steve's direction). **⚠️ Internal-confidential**
> — inherits pricing and partner detail from evidence 07/08.
>
> **This document is the spine of the plan.** It records the *decisions* — the
> portfolio we pursue (use cases, solutions, methodologies, industries), the order, and
> the gates. The sibling documents (`01`–`07`) elaborate each domain **and must not
> contradict this kernel**; where an elaboration surfaces a genuine tension, it is
> recorded in that doc's "Tensions" appendix and resolved *here* first. Every decision
> cites its evidence (items in [`../evidence/`](../evidence/)).

---

## 1. The thesis

**Orama Zetta sells deployed, correct, governed intelligence on the customer's own
infrastructure — and the business is a solution factory.** The factory's economics rest
on one structural fact, evidenced independently by our internal and external compendia
(items 10–15): **many use cases ≈ many solutions ≫ few methodologies.** A handful of
methodology components — extract, entity-resolve, feature-engineer, train, explain,
evaluate, serve, monitor — compose into solutions for a very large catalog of business
problems. The tabular supervised methodology alone (extract → features → GBM → SHAP →
report) underpins the plurality of enterprise decision workloads (items 10 §S3, 13),
and **correct application** (point-in-time discipline, leakage prevention, entity
resolution) plus **business wiring** (actions, owners, measurement) — not modeling — is
where value is won or lost (items 03, 12 §S6, 15).

Zetta's product promise ("intent → deployed, governed intelligence in minutes, trained
on your data, correct by construction" — item 06) *is* the industrialization of that
factory. Competitors sell accelerators-as-notebooks (Databricks's 93, item 04) or
industry framing (Snowflake's 9, item 05); **we sell the deployed, correct, governed
solution itself, as a priced module.**

**The strategic equation:** every new methodology wave unlocks an order of magnitude
more solutions than it costs, because components are reused. We grow the catalog
use-case-first (demand-led), build methodologies wave-by-wave (reuse-led), and ship
solutions as the sellable unit (revenue-led).

## 2. Vocabulary and IDs (fixed)

Per [`../vocabulary.md`](../vocabulary.md): **use case** = the problem · **methodology**
= the arranged AI methods · **solution** = the methodology applied correctly + wired to
the business action. IDs: `UC-n` (use cases — aligned with the wtm ORAMA-ZETTA
blueprint, where **UC-1 = churn** already exists), `M-n` (methodologies), `S-n`
(solutions; `S-n` pairs ~1:1 with `UC-n`). Solutions are marketed as **modules**
(One Orama: "revenue by module", item 07).

## 3. D1 — Portfolio architecture

Three catalogs, maintained in this repo, projected into the wtm blueprint via the
`add-use-case` runbook:

1. **Use-case catalog** (`02-use-case-portfolio.md`) — the demand map. Tiered T1/T2/T3
   + explicit anti-portfolio.
2. **Methodology portfolio** (`03-methodology-portfolio.md`) — the engineering assets.
   Built in **waves**; a new methodology is admitted only when **≥3 tiered use cases**
   demand it (reuse rule).
3. **Solutions catalog** (`04-solutions-catalog.md`) — the SKUs. A solution =
   methodology + correctness adaptations + business wiring, with a definition-of-done
   (§8) and a module price.

## 4. D2 — Methodology build order (waves)

Principle: **maximize component reuse per wave; tabular spine first.** (Evidence: 10
§S1/S3, 13 reuse matrix, 02's shared-primitives list.)

| Wave | Methodologies | Why now | Engine dependency (item 08 roadmap) |
|---|---|---|---|
| **W1 — now** | **M-1 Tabular supervised** (GBM + SHAP; the churn pipeline — exists as UC-1 work) · **M-2 Entity resolution** (thin v1 — the correctness gate needs it) · **M-3 Segmentation/clustering** (cheap adjacency on M-1 features) | The dominant methodology; Motive wedge is live; correctness gate is the differentiation | R1 (local run) + R2 (correctness gate) — runnable on today's engine |
| **W2 — next** | **M-4 Time-series forecasting** (classical + GBM-global first; deep later) · **M-5 Anomaly detection** · **M-6 Survival/time-to-event** (churn-timing upgrade) | Unlocks forecast-to-action + ops/finance families; heavy reuse of M-1 components | R3 (one-button deploy) + R4-lite (materialization) |
| **W3** | **M-7 Causal/uplift** (upgrades every "score" solution into an action policy) · **M-8 Recommendation/NBA-lite** (propensity composition first) · **M-9 Embeddings + retrieval / document intelligence** (MCP-native) | The action layer (evidence 02/03: closed loop beats score); document family opens finance/legal/insurance ops | R4 (tiered storage/indexing) + R6 (governance) |
| **W4** | **M-10 Agentic** (tool-calling agents; **Auto-RL base model** — One Orama catalog #3, strategic + continuous) · **M-11 Optimization/OR pairing** (predict-then-optimize) · graph ML, vision — opportunistic/partner-led | The compounding moat (learning loop, R8); only after governance + eval harness maturity | R5 (compute-near-data) + R8 (learning loop) |

**Not building** (default): bespoke deep-learning research, speech stacks, vision-first
inspection, federated learning — until a paying tiered use case demands them (reuse rule).

## 5. D3 — Use-case tiers (the demand we pursue)

Selection criteria (from evidence 01–03, 11, 14): economic pool × decision frequency ×
closed-loop actionability × data availability (tabular-first) × measurability ×
**governance fit** (low-liability first — item 08 design-partner research) × engine
feasibility today.

**Tier 1 (launch portfolio — pursue now):**

| UC | Use case | Why T1 | Methodology |
|---|---|---|---|
| UC-1 | **Churn prediction & retention** *(anchor — Motive)* | Live design partner; archetype of the whole factory (items 01–03, 07) | M-1 (+M-6, +M-7 later) |
| UC-2 | Lead & opportunity scoring | Same pipeline shape as churn; CRM wiring; high frequency | M-1 |
| UC-3 | Customer lifetime value | Composes with UC-1/UC-2 into revenue intelligence | M-1 |
| UC-4 | Collections prioritization | Finance family beachhead; measurable (DSO); banking-relevant | M-1 |
| UC-5 | **Demand forecasting** | Tier-1 in all three DR reports; opens supply-chain family | M-4 |
| UC-6 | Inventory / replenishment support (assistive) | Forecast-to-action, human-reviewed first | M-4 (+M-11 later) |
| UC-7 | KPI anomaly detection & driver analysis | The "report" solution generalized; exec surface; every vertical | M-1/M-5 |
| UC-8 | **Predictive maintenance (assistive)** | The **low-liability operational proof** the partner research prescribes (item 08) | M-1/M-5 (+M-6) |
| UC-9 | Automated email outbound | One Orama catalog **#2** (item 07) — scoring + segmentation powering outbound | M-1+M-3 |

**Tier 2 (year 1–2, gated on governance/engine maturity):** fraud & AML **triage**
(assistive, not real-time decisioning), credit-risk-adjacent scoring (SR 11-7 discipline
required), insurance claims triage & lapse/retention, employee attrition (heightened HR
governance), customer-service ticket triage, supplier risk, healthcare ops (no-show,
denials — partner-led), forecast-to-action automation upgrades of UC-5/6.

**Tier 3 (later):** next-best-action/personalization engines, real-time fraud
decisioning, pricing optimization, RAG knowledge assistants, agentic workflow
automation, AIOps — each demands W3/W4 methodologies + mature governance.

**Anti-portfolio (explicit, from item 08 anti-ICP + 01–03):** generic
chatbots/copilots, LLM-copilot/RAG-only engagements (disqualifier, not a wedge),
autonomous high-stakes decisioning, vision-first industrial inspection (initially),
federal/classified as early deals.

## 6. D4 — Solutions: the sellable unit

A solution ships as a **priced module** with the full anatomy (items 12 §S1, 15):
methodology + **correctness adaptations** (point-in-time snapshots, temporal
validation, leakage checks, entity resolution — enforced by the product's correctness
gate, item 06) + **business wiring** (named actions, systems of action, owners,
cadence) + **measurement loop** (holdout/uplift discipline; "shadow production" first —
item 08) + governance (identity-scoped access, audit, approval gates). Definition of
done for every S-n: *deployed in the customer environment · passed the correctness gate
· wired to at least one named business action · measured against a holdout or baseline
· zero governance violations.* S-1 (churn & retention program) is the reference
implementation; the catalog grows S-2…S-9 across T1 in `04-solutions-catalog.md`.

## 7. D5 — Industries (order and beachheads)

From the 3-model design-partner council (item 08, unanimous) + catalog evidence (04/05):

| Tier | Industry | Beachhead solutions | Why |
|---|---|---|---|
| **1a** | **Financial services / banking** (regional/mid, ~$30B+ assets) | UC-4 collections · UC-1 deposit/customer attrition · UC-7 KPI drivers | #1 unanimous; SR 11-7/GLBA map 1:1 onto our governance primitives |
| **1b** | **Insurance** (specialty/MGA) | claims triage (T2) · UC-1 lapse/retention · UC-7 | #2 unanimous; NAIC AI bulletin |
| **1c** | **One operational account** (logistics/fleet or manufacturing) | UC-8 PdM · UC-5/6 · UC-1 (Motive **is** this) | The low-liability first technical proof |
| **2** | Healthcare/life-sciences (close #3, longer cycles) · manufacturing · logistics/fleet · **telecom** (TELUS warm path) · B2B SaaS/tech | no-show/denials · PdM/yield · UC-1/UC-2 | Second wave — pick by warmest intro |
| **3** | Retail/CPG · energy/utilities | UC-5/6 · pricing (T3) · load forecasting | After reference architectures repeat |
| Deferred | Public sector/federal, classified | — | Anti-ICP as first deals |

Firmographics: ~1,000–25,000 employees, ~$500M–$10B revenue. Champion: the
**prototype-to-production owner** + business sponsor. **One reference architecture per
environment class** (regulated cloud VPC · K8s private cloud · bare-metal/on-prem GPU)
before widening.

## 8. D6 — Commercial anchors (⚠️ confidential; item 07/08)

- **Orama Cloud v3 — Enterprise (Orama Zetta): $500k/yr+** (on-prem / dedicated /
  dedicated-cloud). **Pro: $200/mo** + 4h onboarding @ $125/hr (light agentic search —
  not this plan's focus). **Solutions are separately priced modules** on Enterprise.
- **Design partners: 3–6, PAID at ~10–25% of expected ACV**, credited to year-one
  conversion; 12–16-week scope (one use case · one environment · one KPI); the 120-day
  program (qualify → secure env → build+govern → shadow production → convert); no broad
  exclusivity; IP split (customer owns data + weights; we own engine/connectors/
  templates/generalized learnings).
- Revenue expansion = **module attach** on the Enterprise base (land with one solution,
  expand along the reuse frontier).

## 9. D7 — Sequencing gates (hard)

1. **Security gate:** no production enterprise deployment while the 11 auth gaps
   (zetta#759–#769, item 07) are open. `--require-auth` is necessary, not sufficient.
2. **Correctness gate floor:** ≥90% on the evaluated task set before self-service
   deploy ships to non-engineers (item 08 success-metrics).
3. **Engine co-sequencing:** W1→R1/R2 · W2→R3/R4-lite · W3→R4/R6 · W4→R5/R8. No wave
   starts before its engine dependency is credibly scheduled.
4. **Reference-architecture rule:** one per environment class before widening (item 08).
5. **Shadow production before automation:** every solution runs human-reviewed
   alongside the existing process before any automated action.

## 10. D8 — Success metrics (from item 08, adopted)

Primary: **Intelligence Velocity** (median intent → deployed, correct, running;
target minutes vs weeks–quarters). Supporting: correctness-gate pass rate (≥90% floor),
self-service rate, module attach rate, partner→customer conversion, NRR, time-to-value
per solution (≤16 weeks), **governance violations = 0** (guardrail), generated-graph
incident rate, deploy reliability.

## 11. D9 — Operating principles

1. **Use-case-first, reuse-led, solution-priced** (the factory).
2. **Correct by construction is the brand** — never trade the gate for velocity (item 06).
3. **Low-liability first; shadow production; assistive before automated.**
4. **Lead every conversation with one named use case** — never a generic AI-platform demo.
5. **Evidence-based catalog growth** — new use cases enter via the `add-use-case`
   research runbook and this kernel's criteria; the catalogs and the wtm blueprint stay
   in sync.
6. **Own-data training is the moat** ("learning, not inference" — item 06); the
   Auto-RL base model compounds it (item 07 catalog #3).

## 12. Evidence base (what grounds what)

| Decision | Primary evidence |
|---|---|
| Thesis / factory economics | 10 §S1–S3 · 13 · 02 (shared primitives) · vocabulary cardinality |
| Use-case tiers | 01–03 (tiering + traits) · 11/14 (dossiers) · 09 (demand breadth) · 07 (catalog priorities) |
| Solution anatomy + DoD | 12 §S1–S6 · 15 · 03 (closed loop) |
| Methodology waves | 10/13 (reuse + prevalence) · 08 roadmap (engine gaps) |
| Industries + partner program | 08 ideal-design-partners (3-model council) · 04/05 (market catalogs) |
| Pricing | 07 (One Orama, confidential) |
| Gates + metrics | 07 (security issues) · 08 success-metrics + roadmap |

## 13. Open questions (kernel-level)

1. Which vertical signs the **first** design partner — FS, insurance, or the
   operational account — given actual warm-intro availability? (Motive is in hand;
   is it formally partner #1?)
2. UC-9 (automated email outbound) — internal-first (Orama automating Orama) or
   customer-facing module first? *(→ proposed resolution in §14, row 1.)*
3. Timing of M-7 (uplift): before or after 3 deployed M-1 solutions?
4. Module pricing mechanics: per-module flat vs value-indexed — **answered**: the CFO
   doc (06 §2.2) recommends per-module flat with value-anchored bands
   ($75–100k / $125–175k / $200–300k) + renewal value-review; adopted pending review.
5. When does the catalog re-admit LLM-era solutions (T3) given the anti-ICP filter on
   RAG-only buyers — what's the qualifying condition?

## 14. Tension inventory from the v1 elaborations (consolidated 2026-07-15)

The seven elaboration docs flagged ~35 tensions in their appendices. Consolidated here
by theme with the **proposed** resolution where the executive docs converge. **Status:
all proposed — pending Steve's adjudication; the kernel body above remains v1 and
unchanged.** Full detail in each doc's "Tensions" appendix.

| # | Tension (raised by) | Proposed resolution |
|---|---|---|
| 1 | **UC-9 sequencing** — outbound email vs assistive-first optics (01, 02, 04, 05, 07) | **Internal-first**: run UC-9 on Orama's own outbound (stage-8 flywheel proof) before selling it as a module. Strongest cross-doc convergence. |
| 2 | **"Minutes" promise vs 12–16-week engagements** (01, 05) | Two clocks, stated everywhere: *intent → deployed graph* = minutes (product velocity, D8 primary); *solution → proven value* = 12–16 weeks (program). Never blur them in messaging. |
| 3 | **Label-window physics vs the 16-week window** (04) | DoD's "measured" reads as: shadow readout + initial holdout readout inside the window; label-complete measurement continues contractually post-window. |
| 4 | **Partner fee base ambiguity** ("10–25% of expected ACV") (01, 06) | Base = expected **year-one total contract value** (platform + first module). CFO's model already computes on this. |
| 5 | **Security gate vs the 120-day calendar** (05, 07) | Discovery/qualification/env-setup/build may proceed; **shadow on customer data requires network-isolated deployment + explicit customer risk acknowledgment; conversion/production hard-gated** on zetta#759–#769. No partner converts before the gate closes. |
| 6 | **"Correct by construction" vs the ≥90% floor** (01, 03) | Two denominators: the brand claim is absolute **at deploy time** (nothing deploys without passing the gate); the ≥90% floor measures **generation** quality (graphs passing without human fix), tracked per-template (CTO). |
| 7 | **MCP ask-first rule vs MCP-native features** (03) | Ask-first stays absolute (item 07 convention): every MCP surface addition is an explicit per-item ask. |
| 8 | **Healthcare's cohort slot** (05) | Keep kernel: close-#3 by fit, second-wave by default; admit into cohort 1 only on an exceptional warm intro. |
| 9 | **M-6 pull-forward** (02, 03) | Permitted: M-6 (survival) may pull into late W1 at ~zero engine cost if a partner needs timing-aware retention. |
| 10 | **S-7 v1 before M-5** (02, 04) | Confirmed reading of D3: S-7 v1 ships on M-1 drivers + rules; M-5 is the upgrade. |
| 11 | **$500k anchor vs mid-market ICP band** (05, 06) | Pricing ladder: module bands allow sub-$500k entry during the partner phase; $500k+ is the full-platform Enterprise anchor, not the entry gate. |
| 12 | **Intake scorecard** (02) | Adopt the CPO's 9-dimension 0–3 scorecard as the operational D3 rubric. |
| 13 | **Auto-RL vs the ≥3-use-case reuse rule** (03) | Auto-RL is explicitly exempt — a strategic bet (already "strategic + continuous" in D2), not a demand-admitted methodology. |
| 14 | **"Credibly scheduled" undefined** (07) | Define: an engine dependency is credibly scheduled when it has an owner, a design doc, and a dated milestone on the engine roadmap. |
| 15 | **R4-lite undefined** (03) | Define: R4-lite = materialization of source extracts into the Zetta store (snapshot + refresh), without full tiered storage. |
| 16 | Minor/doc-local items (UC-2 reuse criterion, UC-3 composition scoping, ticket-triage M-9-lite, fleet-first UC-8 framing, Auto-RL pricing, reuse-ratio metric → D8) | See the respective appendices (02, 03, 06); adopt at v1.1 unless objected. |
