# Solutions catalog — the sellable modules, each with an ROI contract (S-1…S-11 + Band-B sketches)

> **Status:** v2 — 2026-07-15 · **Author:** CPO+CTO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits commercial detail from evidence 07/08.
>
> **Elaborates kernel v2** ([`00-strategy-kernel.md`](00-strategy-kernel.md)): **future
> state · no sequencing · ROI-central · Auto-RL-central.** This document elaborates
> **D6 (solutions: the sellable unit, with an ROI contract)** and instantiates D2
> (every solution is agent-operated), D7 (every solution has a data plan), and D8 (the
> measurement loop is the billing instrument). Nothing here contradicts the kernel;
> genuine frictions surfaced while drafting are collected in
> [Appendix A — Tensions for kernel review](#appendix-a--tensions-for-kernel-review).
>
> **v2 supersedes v1 entirely.** What changed, per the kernel's v2 philosophy:
> (1) **all sequencing is removed** — no waves, no launch tiers, no delivery-week
> plans, no engine-dependency tables, no "v1 ships without X"; every solution is
> specified in its **complete future-state form**, and what were "upgrade paths" are
> now **capability levels a customer chooses**, never a time sequence. (2) Every
> solution now carries an **ROI contract** — the ROI model, the p(success) assessment,
> and the measurement design whose output is simultaneously the proof of value and the
> pricing true-up (D8). (3) Every solution now carries an **agent operating
> definition** — what the customer's Auto-RL-trained agent builds, runs, monitors,
> explains, and improves, and under which autonomy class (D2). (4) Every solution now
> carries a **data plan** — the supply chain that turns operations into agent training
> data, with the measured ROI as the reward signal (D7 →
> [`08-data-strategy.md`](08-data-strategy.md)). (5) The catalog widens from nine
> modules to **twelve full Band-A specs** — fraud & financial-crime decisioning,
> claims triage, and next-best-action are full members per kernel D4's Band A — plus
> Band-B sketches. (6) The v1 blanket exclusion of request-time serving is lifted:
> it was a sequencing artifact, not a future-state judgment; latency class **L4 is
> in-scope** where the ROI demands it (S-10, S-11), with the anti-portfolio boundary
> now drawn where the kernel draws it — *autonomous high-stakes decisions without
> human gates*, not latency.

---

## 1. What this catalog is

Per [`../vocabulary.md`](../vocabulary.md) and kernel §2: a **use case** is the
problem; a **methodology** is the arranged AI methods; a **solution** is the
methodology applied correctly for the real conditions and wired to the business action
that realizes the value. v2 adds the fourth term: the **agent** — the Auto-RL-trained
operator that composes methodologies into solutions and runs them for one customer
(kernel D2; evidence 06 "Auto-Suggest / Auto-RL / Personalized MCP"; evidence 08).

**A solution ships as a priced module with an ROI contract** (kernel D6). This catalog
specifies the twelve Band-A modules S-1…S-11 (pairing UC-1…UC-11 per doc 02's scored
demand map), the shared anatomy every module instantiates, the Band-B sketches with
the condition that would justify a full spec, and the cross-solution syntheses — which
wiring recurs, how the modules compound on one customer's shared agent + data
foundation, and how few methodologies fan out into the whole catalog (the factory's
structural fact: *many use cases ≈ many solutions ≫ few methodologies*, evidence
10–15).

**What this catalog deliberately does not contain:** prices (mechanics →
[`06-financial-plan.md`](06-financial-plan.md); this document defines each module's
**pricing hooks** — the ROI model and the readout that trues the price up);
p(success) factor-model calibration (→
[`07-roi-risk-and-operating-model.md`](07-roi-risk-and-operating-model.md)); the full
data-strategy machinery (→ [`08-data-strategy.md`](08-data-strategy.md)); schedules of
any kind (D10-2: the portfolio is scored, not scheduled).

---

## 2. The solution anatomy v2 — the template every module instantiates

Adopted from evidence 12 (Synthesis 1) and evidence 15 (cross-cutting synthesis 1),
extended by kernel v2 with the three new first-class stages (**ROI contract**, **agent
operating definition**, **data plan**). Every S-n below is one instantiation of this
pipeline — model output **never touches the business directly**:

```
use case (the problem)                                 ← scored by D1: E[ROI] × p(success)
   │
   ▼
METHODOLOGY COMPOSITION   the reusable arrangement of AI methods (M-n; few, heavily reused)
   │                      — selected and arranged BY THE AGENT from the D5 toolbox
   ▼
CORRECTNESS               what the real context demands: point-in-time snapshots, label
ADAPTATIONS               windows, temporal validation, entity resolution, imbalance +
   │                      calibration, censoring, selection bias, drift, train/serve
   │                      consistency — ENFORCED BY THE CORRECTNESS GATE (evidence 06),
   │                      a product property, never staged (kernel D10-5)
   ▼
DECISION POLICY           the explicit layer between score and world: thresholds, tiers,
   │                      budgets, contact/frequency caps, eligibility, approval gates,
   │                      kill-switches. The policy engine — never the model — enforces law.
   ▼
ACTION INTEGRATION        one of four patterns: report→human decision · task-in-system-
   │                      of-work · policy engine · closed-loop automation with guardrails
   │                      (evidence 12 §S4; evidence 15 §S4)
   ▼
MEASUREMENT LOOP          holdout / uplift / champion-challenger / phased comparison +
   │                      guardrail metrics; outcomes feed back into the model (labels),
   │                      the policy (thresholds), the playbook (actions) — and the loop's
   │                      OUTPUT IS THE ROI NUMBER ITSELF (kernel D1 corollary b)
   ▼
ROI CONTRACT              agreed up front: the value levers, the ROI model, the measurement
   │                      design that will prove it, the p(success) assessment with named
   │                      risk drivers — and the pricing hook: the same readout that proves
   │                      value trues up the module price (kernel D6, D8)
   ▼
AGENT OPERATING           what the customer's agent does autonomously vs with approval —
DEFINITION                across build / run / monitor / explain / improve — under
   │                      identity-scoped, audited, approval-gated governance (kernel D2)
   ▼
DATA PLAN                 the supply chain: sources → entities → labels → ACTION + OUTCOME
   │                      capture (the RL reward) → refinement → agent training; per-customer
   │                      data + weights stay the customer's; generalized patterns compound
   │                      for us (kernel D7 → doc 08)
   ▼
GOVERNANCE                identity-scoped access (customer SSO), audit trail on every
   │                      score→action→outcome, approval gates on sensitive actions, domain
   │                      overlay (SR 11-7 / ECOA-FCRA / NAIC / HIPAA / FDCPA-Reg F /
   │                      CAN-SPAM-CASL / GDPR where relevant — evidence 15)
   ▼
ADOPTION                  side-by-side validation, reason codes, role redesign, a named
   │                      owner whose operating rhythm changes
   ▼
changed business outcome (the value) — measured, priced, and fed back as agent reward
```

Solutions that skip a stage do not degrade gracefully; they stall (no action
integration), silently self-congratulate (no holdout), or quietly rot (no drift
monitoring) — evidence 12 executive orientation. Both compendia agree the
pilot→production gap is dominated by the applied layers, not the model: workflow and
process redesign is ~70% of the implementation challenge (BCG 2024, via evidence 15),
and the documented catastrophes (Zillow, Epic sepsis, Watson for Oncology, Knight
Capital) all failed at correctness adaptations, wiring, guardrails, or measurement —
rarely at methodology (evidence 12 §S6; evidence 15 §S6). The v2 anatomy prices this
in: the applied layers are **product** — the gate, the policy engine, the holdout
manager, the audit ledger, the ROI readout generator, and the agent that operates all
of them.

### 2.1 Definition of done (kernel D6, verbatim — binding for every S-n)

> *deployed in the customer environment · passed the correctness gate · wired to at
> least one named business action · operated by the customer's agent under governance
> · **ROI measured against the agreed model** · zero governance violations.*

A module that has not met all six is **not done**, is not referenceable, and does not
true up to full price (D8).

### 2.2 The ROI contract — the standard shape

Every spec's ROI contract has four parts (kernel D6a/D6b; D1):

1. **Value levers** — which of the five return classes the module moves (revenue lift
   · cost reduction · loss avoidance · working-capital release · risk reduction), with
   the named lever(s) and the business quantity each lever moves.
2. **Illustrative ROI math** — a worked, order-of-magnitude model of
   `E[ROI] = expected return ÷ customer investment` on a stated reference customer
   shape. All numbers are **illustrative planning quantities**, not commitments;
   engagement-specific models replace them at contract time. Customer investment =
   module price + integration effort + data work + change cost (D1).
3. **The agreed measurement design** — the specific loop (permanent holdout ·
   uplift-designed cells · champion/challenger · FVA · phased comparison · audit
   sampling; evidence 12 §S5, evidence 15 §S5) whose output *is* the ROI number. This
   is also the **billing instrument**: the readout trues up any success-linked pricing
   component (D8). Where the customer's constraints weaken the design (no holdout
   tolerated, interference, slow labels), the contract says so and the p(success)
   assessment prices the measurement risk.
4. **p(success) drivers and risks** — the module's position on the five D1 drivers
   (data availability & label quality · actionability · measurability ·
   organizational adoption · governance fit), the named risks that most often zero
   this module's ROI in the wild (from evidence 12 §S6 / 15 §S6), and the designed
   countermeasure for each. The COO's factor model (doc 07) turns these into the
   ex-ante probability; this catalog names the drivers.

### 2.3 The ROI readout — the customer-visible artifact (proof pack, reframed)

The v1 "proof pack" is reframed as the **ROI readout**: the versioned,
customer-visible dossier that simultaneously (a) proves the return and (b) trues up
the price (D8: "the measurement loop is the billing instrument"). Standard contents,
generated by the module — assembled by the agent, never hand-built:

| Section | Contents | Role |
|---|---|---|
| **Correctness certificate** | Gate checks run/passed; the entity-resolution test on the customer's own hierarchy (the FedEx-Freight division-correct test, evidence 08); leakage screens; too-good-metric reviews | Eligibility to be believed |
| **Incrementality readout** | Holdout / uplift / champion-challenger / FVA result with confidence interval — *incremental* effect, never raw response | **The ROI numerator, measured** |
| **ROI statement** | Measured return ÷ customer investment against the agreed ROI model; variance vs the ex-ante E[ROI] | The metric the customer pays on; feeds p(success) calibration (D9) |
| **Guardrail panel** | Complaints, cost, margin, fairness, fatigue, cap adherence — all inside bounds | Proof the win wasn't purchased invisibly |
| **Agent operations report** | Actions taken by autonomy class; approval-gate history; intervention/override rate; agent-improvement log (what the agent changed and what it did to ROI) | The D2 accountability surface |
| **Audit extract** | Every score→action→outcome logged with model + policy + agent versions; zero governance violations | The D6 guardrail, examiner-legible where an overlay applies |
| **Price true-up statement** | The success-linked component computed from the incrementality readout per the agreed formula (mechanics → doc 06) | D8 made operational |

### 2.4 The agent operating definition — the standard vocabulary

Every module is operated by the customer's agent (kernel D2-1). Specs describe the
agent across five verbs and assign each action class an **autonomy class** — a
governance configuration the customer chooses and can move per action class, not a
maturity stage:

- **Build** — compose the execution graph (connect → clean → model → index → serve),
  discover candidate features within the leakage blocklist, propose label/window
  definitions for owner sign-off, configure connectors.
- **Run** — execute scoring cadences, push scores/tasks/drafts into systems of action,
  execute policy-engine decisions inside caps, manage holdout randomization.
- **Monitor** — drift (PSI, calibration, per-segment realized performance), guardrail
  panels, holdout integrity, connector/schema health, sensor/feed rot.
- **Explain** — reason codes on every score, driver reports, "what changed since last
  cycle", the assembled ROI readout, answers over MCP personalized to each role
  (evidence 06 Personalized MCP).
- **Improve** — retrain on schedule and trigger; propose threshold/policy/playbook
  changes with predicted ROI effect; run designed experiments; learn treatment policies
  from captured action→outcome data — **the reward the agent optimizes is the
  solution's measured ROI signal** (kernel D7-2).

**Autonomy classes** (defaults per spec; every class is identity-scoped and audited):

| Class | Meaning | Typical assignments |
|---|---|---|
| **A0 — draft** | Agent produces recommendations/drafts only; a human executes | Driver reports, draft work orders, draft purchase orders |
| **A1 — approval-gated** | Agent executes after a named human approves the instance | Concessions above cap, policy changes, new audiences/templates, settlements |
| **A2 — autonomous-under-audit** | Agent executes inside the policy envelope; humans govern the policy and review the audit trail | Batch scoring, task creation, journey execution within caps, in-line decisioning inside bands |
| **A3 — self-tuning** | Agent additionally adjusts thresholds/policy parameters inside pre-approved bounds, logging each change with its predicted and realized ROI effect | Alert budgets, exploration rates, retrain triggers, band edges within governance bounds |

The kernel's open question 5 (autonomy defaults per solution family) is answered as a
**proposal** by each spec's agent section; the cross-solution defaults are synthesized
in §17.3 and flagged to the kernel in Appendix A.

### 2.5 The data plan — the standard shape

Per kernel D7, every spec's data plan names: **sources** (systems to connect),
**entity resolution** (the unit the business acts on), **labels/outcomes** (definition
+ window + who signs it), **action + outcome capture** (every action taken, by agent
or human, recorded with its outcome — the RL reward stream; kernel D7-1),
**refinement** (labeling, outcome attribution, drift surveillance, data-quality
contracts — the CDO function), and the **generalization boundary** (what stays the
customer's — their data, their weights — vs the generalized patterns that compound for
us: schemas, playbooks, priors, benchmarks; kernel D7-3, boundary definition → doc
08). The catalog states each plan in summary; doc 08 holds the machinery.

### 2.6 The standard spec template (twelve fields)

Every S-n below is written to the same twelve fields so the catalog reads vertically
(one field across all modules) as well as horizontally:

1. **Module framing** — name, UC pairing, one-line promise, ROI band position.
2. **Methodology composition** — the M-n arrangement the agent composes (per D5).
3. **Correctness adaptations** — the disciplines this context demands; what the gate checks.
4. **Business wiring — actions & decision policy** — named actions, thresholds/budgets/caps, eligibility.
5. **Business wiring — systems of action & connectors** — where outputs land.
6. **Business wiring — people & cadence** — named roles, operating rhythm, what it replaces.
7. **ROI contract** — value levers · illustrative ROI math · agreed measurement design · p(success) drivers and risks (§2.2 shape).
8. **The agent** — build/run/monitor/explain/improve with autonomy-class defaults; how the agent improves the solution from captured outcomes.
9. **Data plan** — §2.5 shape, summarized; → doc 08.
10. **Capability levels** — the complete future-state capability set, packaged as **customer choices** (configuration/scope decisions), never stages.
11. **Deployment shapes** — environment classes and latency class as options.
12. **Governance** — identity scoping, audit, approval gates, domain-regulatory overlay (evidence 15); **failure modes + designed countermeasures** (evidence 12 §S6).

**Latency classes:** **L1** batch (daily/weekly; hours tolerated) · **L2** intraday
(hourly; minutes) · **L3** event-triggered near-real-time (seconds) · **L4**
request-time (tens of ms, in the transaction path). The class is chosen by the ROI
physics of the decision, not by platform constraint; most modules are L1 because most
enterprise decisions are batch decisions (evidence 12 §S1), and S-10/S-11 are L4
because their decision windows are.

**Environment classes (deployment options, all supported for every module):** **E1**
regulated cloud VPC (customer's AWS/Azure/GCP account) · **E2** K8s private cloud ·
**E3** bare-metal / on-prem. Local-first validation (a single machine running the full
graph before any shared footprint) is a property of the product, available to every
module (evidence 06 "Local-first"). The customer chooses the shape; nothing about the
choice sequences the catalog.

---

## 3. Catalog overview — the twelve Band-A modules

Band assignments follow kernel D4 and doc 02's scored demand map; S-n ~1:1 with UC-n
(IDs fixed per plan conventions; UC-10/11/12 pair with the kernel's Band-A fraud,
claims-triage, and next-best-action entries).

| ID | Module (market name) | UC | Methodology | Action pattern | Latency | Agent default | Primary ROI lever | Primary buyer |
|---|---|---|---|---|---|---|---|---|
| **S-1** | **Churn & Retention** *(reference implementation)* | UC-1 | M-1+M-2+M-3 (+M-6, +M-7, +M-8) | Task-in-CRM + report→council | L1 (opt. L3) | A2 contact / A1 concessions | Revenue lift (retained margin) | CS/retention leader; CRO |
| S-2 | Lead & Opportunity Scoring | UC-2 | M-1+M-2+M-3 (+M-7) | Task-in-CRM (queues/SLAs) | L1 (opt. L2) | A2 queues / A0 routing changes | Revenue lift (conversion per rep-hour) | RevOps/sales leader |
| S-3 | Customer Lifetime Value | UC-3 | M-1+M-2+M-3 (+M-6, +M-7) | Policy engine (audience/budget) + report | L1 | A2 audience sync / A1 budget shifts | Revenue lift + cost reduction (spend reallocation) | Growth + finance |
| S-4 | Collections Prioritization | UC-4 | M-1+M-2+M-3 (+M-7) | Policy engine + dialer queues | L1 | A2 digital treatments / human calls | Working-capital release + cost reduction | Collections/finance ops |
| S-5 | Demand Forecasting | UC-5 | M-4+M-2+M-3 (+M-5) | Report→planner + exception queues | L1 (L2 fresh) | A2 forecasts / A0 plan changes | Working-capital release + revenue lift (availability) | Supply chain/S&OP |
| S-6 | Replenishment & Inventory Action | UC-6 | M-4+M-11 (+M-5) | Task-in-ERP → bounded closed-loop | L1 | A0→A2 per segment (customer choice) | Working-capital release + cost reduction | Supply chain ops + finance |
| S-7 | KPI Anomaly & Driver Analysis | UC-7 | M-1+M-3+M-5 (+M-4, +M-9) | Report→decision forum with log | L1/L2 | A0 decisions / A2 detection | Risk reduction + cost avoidance (decision quality) | CFO/COO/exec analytics |
| S-8 | Predictive Maintenance | UC-8 | M-5+M-1+M-2 (+M-6) | Task-in-CMMS (work orders) | L3 detect + L1 score | A0/A1 work orders / A2 detection | Cost reduction + loss avoidance (downtime) | Reliability/maintenance |
| S-9 | Automated Outbound | UC-9 | M-1+M-3+M-2 (+M-7, +M-8, +M-9) | Policy engine (journeys within caps) | L1 | A2 sends / A1 audiences+copy | Revenue lift (incremental pipeline) | Marketing/growth ops |
| S-10 | Fraud & Financial-Crime Decisioning | UC-10 | M-1+M-2+graph (+M-5) | Policy engine in the authorization path + task-in-case-mgmt | **L4** decide + L1 triage | A2 in-band decisions / humans govern policy | Loss avoidance + revenue lift (false-decline recovery) | Fraud/AML strategy; CRO risk |
| S-11 | Next-Best-Action | UC-11 | M-8+M-1+M-7+M-2 (bandits) | Policy engine (decision API, all channels) | **L4** | A2 arbitration / A1 catalog+constraints | Revenue lift (long-horizon value per customer) | CMO/CX decisioning owner |
| S-12 | Claims Triage & Fraud Referral | UC-12 | M-1+M-2+M-9 (+M-3) | Policy engine (path assignment) + task-to-SIU | L3 FNOL + L1 | A2 fast-track pay / A0 denials-never | Cost reduction + loss avoidance (cycle time + leakage) | Claims operations; COO insurance |

Every sale leads with one named module and its ROI contract — never a generic
AI-platform demo (kernel D3 anti-customer; evidence 08). Expansion is module attach on
the shared agent + data foundation (§17.3), priced so the marginal module is obvious
(kernel D8).

---

## 4. S-1 — Churn & Retention (UC-1) — the reference implementation

S-1 is the archetype of the whole factory. It is the deepest spec in this catalog;
every later spec is written as a delta against it. It is *both* an action pipeline and
a decision-intelligence loop — the "retail" (per-customer action) and "wholesale"
(change-the-business report) layers run simultaneously, which is why it compounds
(evidence 12 §1, §S4). It is also the cleanest demonstration of the v2 thesis: the
holdout that proves the ROI is the same instrument that prices the module (D8) and the
same stream that trains the agent (D7).

### 4.1 Module framing

- **Market name:** Churn & Retention.
- **Promise:** *Which customers will leave, why, what to do about it, and what that
  was worth — deployed in your environment, correct by construction, operated by your
  agent, measured against a holdout, priced on the measured return.*
- **Band:** A — the anchor of the demand map (kernel D4; tier-1 in all three external
  rankings, evidence 01–03; the anchor dossier of both solutions compendia, evidence
  12 §1 / 15 §1).
- **Variants absorbed by configuration, not code:** B2C high-volume (weekly batch,
  automated journeys), B2B SaaS (account-level health, human CSM actions, monthly
  cadence, heavier driver reporting), non-contractual retail (churn = silence; label
  design shifts to inter-purchase-gap/BTYD definitions) (evidence 12 §1.16).

### 4.2 Methodology composition

**M-1 tabular supervised** (extract → point-in-time features → GBM → SHAP → scored
list + driver report — the dominant enterprise methodology, evidence 10/13) + **M-2
entity resolution** (the gate's entity layer) + **M-3 segmentation** (risk × value ×
driver treatment cells) + **M-6 survival** (churn *timing*: expected time-to-event,
censoring-correct labels) + **M-7 uplift/causal** (persuadability targeting over
propensity) + **M-8 NBA-lite** (treatment arbitration when multiple retention actions
compete for one customer). The agent (M-10) composes the arrangement per customer:
which heads run, at what cadence, against which action catalog — Auto-Suggest proposes
the composition from the customer's data shape; the owner approves it (evidence 06).

### 4.3 Correctness adaptations (what the gate checks for S-1)

Churn data is time-ordered and almost every naive churn model leaks the future into
the features (evidence 12 §1.4; evidence 15 §1). The full discipline, each item a
named check in the correctness gate:

1. **Point-in-time feature snapshots.** Every feature computed *as of* prediction date
   T, using only data available at T; features keyed `(entity_id, as_of_date)`; joins
   are as-of joins, never latest-value joins. The classic leak: "support tickets last
   90 days" from a live table silently includes post-T tickets — often tickets *caused
   by the decision to leave* — producing a model that "predicts" churn by observing
   its symptoms. Gate check: every feature's lineage terminates in a snapshot ≤ T.
2. **Label windows that don't peek.** Churn defined as an event inside an explicit
   outcome window (T, T+H]; the label window starts strictly after the feature window
   ends, with a blackout gap where the operational signal (non-renewal notice,
   downgrade request) precedes the recorded churn date. H matched to the business's
   ability to act — 90 days gives a retention team time to intervene; 7 days is
   accurate but unactionable. Gate check: window arithmetic validated on real
   timestamps.
3. **Temporal validation, not random splits.** Out-of-time splits on multiple rolling
   windows; random k-fold on time-ordered data trains on the future of its own test
   set. Gate check: split policy is out-of-time; the report shows stability across
   windows, not one lucky split.
4. **Group-aware splitting.** Stacked monthly snapshots multiply training data but
   correlate rows; one customer's rows never straddle train/test.
5. **Censoring handled by construction.** "Didn't churn *yet*" is not "won't churn";
   the M-6 survival head is the principled treatment (the documented prospective
   right-censored design, evidence 15 §1); where the customer chooses the
   propensity-only capability level, labels restrict to fully observed windows.
6. **Imbalance handled at the decision layer.** Churn base rates of 1–5%/month are
   normal: proper scoring (log-loss), class weights, thresholds set against business
   costs; probabilities recalibrated (Platt/isotonic) if sampling is used — retention
   economics need calibrated probabilities, not rank order.
7. **Entity resolution (M-2).** "Customer" resolved across billing, CRM, product
   telemetry, support; households vs accounts vs users matched to the unit the
   business can act on. Mis-resolved entities produce duplicate rows (leakage) and
   actions aimed at the wrong unit. This is the FedEx-Freight division-correct test
   applied to churn — the gate's flagship check (evidence 08).
8. **Leaky-feature exclusion by construction.** Features that proxy the label ("days
   since cancellation call", AM churn-risk flags, win-back membership, save-offer
   exposure, final-bill artifacts) excluded via a maintained blocklist; a too-good AUC
   (>0.95 on a hard business problem) triggers gate failure with reason — published
   0.99-AUC churn "case studies" are leakage warnings, not benchmarks (evidence 12
   §1.4; evidence 15 §1).
9. **Drift discipline.** PSI on inputs, score-distribution and calibration monitors,
   per-cohort realized AUC as label windows close; retrain on schedule *and* trigger.
10. **Train/serve consistency.** Scoring features bit-identical in definition to
    training features — one code path / one feature definition, never a
    re-implementation in the scoring job.
11. **Causal humility in the SHAP layer.** SHAP explains the *model*, not the world;
    drivers are hypotheses for intervention design, validated by the measurement loop
    — the exact boundary between the report and the action.

### 4.4 Business wiring — actions & decision policy

Two levels, both first-class (evidence 12 §1.5):

**Retail level (per-customer):** the scored list, segmented risk × value × dominant
driver, drives a treatment playbook:

| Segment (risk × value × driver) | Named action | Decision policy |
|---|---|---|
| High risk · high value · any | Proactive outreach call by named CSM | SLA ≤ 5 business days; script seeded with reason codes |
| High risk · any · price driver | Plan-fit review / targeted discount | Discounts above cap require approval (A1); quarterly retention budget |
| High risk · any · low-usage driver | Onboarding/success intervention | Playbook task in CS platform (A2) |
| High risk · any · support-friction driver | Service-recovery escalation | Routed to support lead with open-ticket context (A2) |
| Medium risk | Automated lifecycle journey | Contact-frequency cap (≤1 retention touch/month) (A2) |
| Persuadable (uplift head) | Treatment matched to estimated individual effect | Uplift targeting replaces raw propensity; **sleeping dogs get no contact as a first-class treatment** |
| Any · in-collections / open complaint / vulnerable | **Excluded** | Eligibility rules enforced by the policy engine, not the model |

Policy constants (thresholds, budget, caps, exclusions) live in the versioned decision
policy layer — auditable, changeable without retraining, and tunable by the agent
inside bounds (A3). Uplift targeting is the correct steady state because contacting
predicted churners can *cause* churn — the Fidelidade "sleeping dogs" evidence:
withholding contact reduced churn ~7 pp vs control in one segment; uplift beats
propensity on retention-campaign profitability (Devriendt et al. 2021) (evidence 12
§1.5, §1.14).

**Wholesale level (change the business):** the driver report routed to product,
pricing, and service owners as a decision document on a standing cadence — recurring
drivers become roadmap items (fix the day-30 onboarding cliff, restructure the tier
over-indexing in churn, staff the queue driving escalations). This layer is S-7's
pattern embedded inside S-1.

### 4.5 Business wiring — systems of action & connectors

Batch score in-environment → connector push to the system where the acting team
already lives → playbook automation there. **The score appears where the owner works,
never in a separate dashboard** (evidence 12 §1.6).

| System of action | Connector requirement | What lands there |
|---|---|---|
| CRM (Salesforce/HubSpot/Dynamics) | Read: accounts, activities, field history. Write: risk score, top-3 reason codes, tasks with owner+SLA | The retail action layer |
| CS platform (Gainsight/ChurnZero) | Write: health-score ingestion, playbook trigger | The B2B variant's home |
| Marketing automation (Braze/SFMC/Iterable) | Write: suppression lists, journey triggers | Automated journeys |
| Billing (Stripe/Zuora/NetSuite) | Read: subscriptions, invoices, payments. Write (A1): discount/entitlement application | Price-driver treatments |
| Support/ticketing (Zendesk/Jira SM) | Read: tickets. Write: escalation tasks | Service-recovery lane |
| BI layer | Publish: driver report, guardrail panel, ROI readout | The wholesale layer |

All connectors run inside the customer environment; zero egress (evidence 06). The
DoD floor is one named wired action — CRM read+write.

### 4.6 Business wiring — people & cadence

| Role (customer side) | Responsibility |
|---|---|
| Retention/CS leader (**module owner**) | Owns the treatment playbook, budget, and the retention council |
| CSMs / retention agents | Work the task queue; personalize high-value interventions |
| Retention-marketing owner | Owns the journey catalog the agent executes within caps |
| Product & pricing leadership | Consumes the driver report; owns wholesale actions |
| Data/analytics counterpart | Signs the label definition; reviews holdout integrity and the ROI readout |
| Privacy/legal | Signs profiling basis, suppression rules (GDPR where applicable) |

Cadence: scores refreshed weekly (B2C) / monthly (B2B) to match the action cycle; a
monthly retention council reviews driver trends, treatment performance, the agent's
change log, and the ROI readout. Replaces reactive save-desks that engage only after a
cancellation request, and gut-feel account triage (evidence 12 §1.7).

### 4.7 ROI contract

**Value levers.** Revenue lift (retained recurring margin — the primary lever), with
secondary cost reduction (retention budget concentrated on persuadables instead of
sprayed) and risk reduction (early warning on usage collapse in key accounts).

**Illustrative ROI math** (reference customer: subscription business, 200k customers,
$40/month ARPU ≈ $96M ARR, 2.0%/month churn):

- Annualized revenue at risk ≈ $96M × ~22% annual churn ≈ **$21M**.
- Documented programs achieve churn reductions of ~1–2 pp/yr with uplift-designed
  retention (UK insurer: −2 pp, ~£16M/yr preserved, vendor-reported; telecom
  synthesis: up to ~15% relative reduction — evidence 12 §1.9, §1.14). Planning
  assumption at the conservative edge: **−1 pp annual churn ≈ $960k/yr retained
  margin-adjusted revenue**, net of offer costs tracked on the guardrail panel.
- Customer investment: module price + connector/integration effort + label
  reconstruction + council time — order **$250–400k/yr all-in** on this shape.
- **E[ROI] ≈ 2.5–4×** at the conservative lever; upside cases (B2C telecom scale,
  uplift level engaged) run materially higher. Pricing hook: anchor share of the
  expected annual return, trued up on the holdout readout (mechanics → doc 06).

**Agreed measurement design.** A **permanent randomized holdout of 5–10% per risk
tier** receives no model-driven intervention; incremental retention = treated −
holdout. Never raw campaign response — attributing natural retention to the campaign
is the single most documented way churn programs overstate value (evidence 12 §1.9).
Uplift-designed A/B per treatment (offer A vs B vs none) reported as saved revenue =
incremental retention × CLV − offer cost. Side-by-side validation against the
incumbent process (CSM intuition / existing health score) precedes any routed action —
also the adoption mechanism. Guardrails: contact-fatigue complaints, discount budget
vs plan, margin erosion, NPS treated-vs-holdout, action-execution rate. Label physics
disclosed in the contract: a 90-day churn window means the first *complete*
incremental readout matures ~2 quarters after treatments begin; the contract's
true-up cadence matches the label cadence (Appendix A, T-3).

**p(success) drivers and risks.**

| D1 driver | S-1 position |
|---|---|
| Data availability & labels | Strong where billing/CRM/product history ≥ 2 years; the long pole is historical point-in-time reconstruction — priced into the data plan |
| Actionability | Strong — retention actions exist in every subscription business; the risk is playbook ownership, not action existence |
| Measurability | Strongest in catalog — holdout design is native; risk = holdout erosion by exceptions |
| Adoption | The named-owner requirement (retention leader + council) is the qualification screen; CSM distrust countered by reason codes + side-by-side |
| Governance fit | Clean in the generic case (GDPR profiling basis); overlays exist for FS/insurance variants (§4.12) |

Named risks that zero ROI, with countermeasures, in §4.12's failure-mode table.

### 4.8 The agent

| Verb | What the S-1 agent does | Autonomy default |
|---|---|---|
| **Build** | Composes the churn graph from the customer's sources (Auto-Suggest); proposes label/window/blocklist definitions for owner sign-off; configures connectors; discovers candidate features (within the blocklist regime — every candidate passes the gate) | A1 (definitions) / A2 (graph assembly) |
| **Run** | Executes scoring cadence; writes scores/reason codes/tasks to CRM/CS/MA systems; enrolls medium-risk customers in journeys within caps; maintains holdout randomization and cell assignment | A2 |
| **Monitor** | PSI/calibration/per-cohort AUC; guardrail panel; holdout-integrity and exemption-rate tracking; connector schema drift | A2, escalation to owner on breach |
| **Explain** | Reason codes per account ("usage −40% QoQ; 2 open P1 tickets"); the monthly driver report; the ROI readout; MCP answers scoped per role (CSM sees accounts; CFO sees the ROI statement) | A2 |
| **Improve** | Retrains on schedule/trigger; learns the treatment policy from captured action→outcome cells (**reward = measured incremental retention × value − treatment cost** — the module's ROI signal, kernel D7-2); proposes playbook changes with predicted effect sizes; tunes tier thresholds and contact caps inside pre-approved bounds | A2 (retrain) / A3 (threshold tuning in bounds) / A1 (playbook changes — council approves) |

The improvement loop is the moat mechanism: every treatment cycle adds
treatment-response data no competitor has, the agent's targeting sharpens on it, and
the sharpening shows up in the next ROI readout — which is also the next price true-up
(evidence 06 "learning compounds"; kernel D7).

### 4.9 Data plan (summary — → doc 08)

- **Sources:** billing, CRM (+field history), product telemetry, support, marketing
  engagement; consent state as eligibility data.
- **Entities:** customer/account/household resolved by M-2 to the actionable unit.
- **Labels:** churn event per signed definition, window (T, T+H], blackout gap;
  survival labels for the timing head; treatment-response labels from randomized cells.
- **Action+outcome capture (the RL reward):** every treatment (and deliberate
  no-contact), its cell, its cost, and its outcome (retained/churned, margin delta,
  complaint) logged in the audit ledger; reward = the measurement loop's incremental
  value attribution. Holdout and cell design double as the training-data engine —
  the uplift level is trained on data the module's own measurement design accumulates.
- **Refinement:** outcome attribution (which retention = which treatment), label
  maturation tracking, drift surveillance, quality contracts on the feature sources.
- **Generalization boundary:** the customer keeps their data, labels, and weights;
  generalized churn-solution priors (feature templates per industry, playbook
  patterns, calibrated base-rate benchmarks, blocklist patterns) compound for us
  (kernel D7-3).

### 4.10 Capability levels (customer choices, never stages)

| Level | Contents | Chosen when |
|---|---|---|
| **CL-1 · Propensity core** | M-1 scored list + reason codes + segmentation + treatment playbook + holdout manager + driver report + ROI readout | The default entry shape; every level includes CL-1's machinery |
| **CL-2 · + Survival timing** | M-6 head: churn *timing*; "who, when"; renewal-calendar prioritization; censoring-correct labels | Contract-renewal businesses; where intervention timing is the binding constraint |
| **CL-3 · + Uplift targeting** | M-7 head: persuadability targeting, sleeping-dog protection; requires ≥1 randomized treatment cycle of data (which CL-1's holdout design accumulates by construction) | High-volume B2C; wherever treatment budget is contended — the highest-ROI level per the Fidelidade/Devriendt evidence |
| **CL-4 · + Treatment arbitration** | M-8 layer arbitrating among competing retention actions per customer, within the same policy caps | Multiple simultaneous playbooks/channels; composition with S-9/S-11 |

Levels are priced as attach on the same deployment; a customer may enter at any level
whose data prerequisites their history satisfies (uplift needs randomized-cell data —
from their own history or from cycles the module accumulates while CL-1 runs).

### 4.11 Deployment shapes

E1/E2/E3, customer's choice; local-first validation supported. Scoring **L1** (weekly
B2C / monthly B2B); optional **L3** event-trigger for cancellation-page saves.
Retraining monthly–quarterly scheduled + drift triggers. Footprint: one Zetta
deployment; the graph = connect → clean → model → index → serve, materialized scores
indexed for the connectors (evidence 06).

### 4.12 Governance + failure modes

**Governance.** Identity-scoped list access via customer SSO (the scored list is
commercially sensitive and, under GDPR, profiling of identifiable persons — evidence
12 §1.11); audit of every score→action→outcome with model + policy + agent versions;
approval gates on concessions above cap, playbook changes, and holdout exemptions
(rare, logged, counted); fairness review on who systematically receives retention
discounts; vulnerable-customer suppression per sector rules (FCA Consumer Duty in UK
FS). **Domain overlays** (configuration, not rebuild — the audit + validation
artifacts are designed examiner-legible): sold as *deposit attrition* into banking →
**SR 11-7** model-risk overlay (documented development, independent validation,
ongoing monitoring, model inventory); sold as *lapse/retention* into insurance →
**NAIC AI model bulletin** overlay (governance program, inventory, testing evidence)
(evidence 15 §1, §20–21).

**Failure modes → designed countermeasures** (evidence 12 §1.15, §S6; evidence 15 §1):

| # | Failure mode | Countermeasure (designed in, not hoped for) |
|---|---|---|
| F-1 | Leakage-inflated pilot (offline AUC 0.95+, production uselessness) | Gate blocks deploy on leakage checks + too-good-AUC review; blocklist as config |
| F-2 | Score without action (the most common stall) | DoD requires ≥1 named wired action; owner named at qualification; action-execution rate is a guardrail |
| F-3 | Propensity backfire (sleeping dogs) | Contact caps + exclusions; CL-3 uplift as the designed level; holdout detects net-negative treatments |
| F-4 | No holdout / eroded holdout | Holdout manager is product (randomization, sizing, exemption logging); exemption rate on the guardrail panel; erosion voids the true-up basis — a contractual, not just statistical, consequence (D8) |
| F-5 | Incentive misalignment (save-rate gaming) | ROI readout reports incremental value only; council reviews treated-vs-holdout, never save-rate |
| F-6 | Drift rot (pricing change shifts drivers) | PSI + calibration monitors with retrain triggers (agent A3); driver-stability flags |
| F-7 | Lists exported to spreadsheets nobody works | Tasks embedded in CRM with owners + SLAs; execution rate monitored; no CSV export path |
| F-8 | CSM distrust of opaque scores | Reason codes on every account; side-by-side validation precedes routing |

---

## 5. S-2 — Lead & Opportunity Scoring (UC-2)

The churn pipeline re-aimed at conversion labels — the same M-1 spine, the fastest
route to a first ROI readout in the catalog, and the natural second attach for any
customer with a CRM (evidence 12 §3; evidence 15 §3).

### 5.1 Module framing & methodology

- **Promise:** *Which leads and opportunities deserve sales attention now — pipeline
  effort concentrated where it converts, measured in conversion per rep-hour.*
- **Band:** A (kernel D4). **Methodology:** M-1 (CRM + firmographic + product-signal
  extract → point-in-time features → GBM → SHAP reason codes) + M-2 (lead/account
  dedup + hierarchy resolution) + M-3 (score bands) + M-7 (worked-vs-not
  incrementality). Variants by configuration: PLG product-qualified-lead scoring,
  ABM account scoring, opportunity-risk scoring (same methodology, different label +
  cadence).

### 5.2 Correctness adaptations

Inherits S-1's checks 1–4, 6, 9–11 wholesale; solution-specific:

1. **CRM-hygiene leakage — the single most common leak here:** fields edited *after*
   the outcome (deal size updated on close, stage backfilled) leak; features must
   come from **point-in-time CRM field history**, never current records (evidence 12
   §3.4). Gate check: feature lineage terminates in field-history tables.
2. **Selection bias:** history shows outcomes only for leads sales *chose* to work —
   a model trained on it learns "what sales already likes". Countermeasure wired into
   policy: an **exploration quota** (a small slice of low-scored leads worked anyway)
   keeps the system learnable and honest (evidence 12 §3.4, §S2) — and doubles as the
   agent's exploration budget.
3. **Label design:** conversion window per funnel stage; labels use outcomes known
   after the initial sales action, not rep activity the model itself causes (evidence
   15 §3); recycled leads deduped with re-entry logic (M-2).
4. **Volume floor:** sufficient converted/non-converted history before training (the
   documented product precedent sets explicit minimums — evidence 15 §3); enforced by
   the data-readiness check in the gate.
5. **Calibration** (routing-capacity decisions need probabilities) and **drift** on
   ICP/pricing/campaign changes — retrain quarterly + on marketing-ops change events.

### 5.3 Business wiring

**Actions & policy:** routing (hot leads to senior reps within SLA), prioritized
queues, SLA tiers (respond ≤5 min vs nurture), automated nurture assignment for low
bands, opportunity-risk flags driving manager coaching. Policy: score bands ×
territory × rep capacity; caps prevent starving new segments; **no auto-rejection
solely on score** — suppression without an exploration slice is forbidden by policy.

**Systems of action:** CRM (read leads/opps + **field history**; write score, top-3
reason codes, queue position — the core surface), marketing automation (nurture
assignment), sales engagement (sequence enrollment), routing engine (speed-to-lead).

**People & cadence:** RevOps owns the module (routing rules, exploration quota, the
weekly funnel review inspecting bands vs realized conversion); SDR/AE teams consume
queues; marketing owns nurture. Scoring **L1 daily** (L2 hourly optional for inbound
speed-to-lead). Replaces first-in-first-out lead lists and BANT gut checks.

### 5.4 ROI contract

**Value levers.** Revenue lift (conversion per rep-hour; win-rate mix) + cost
reduction (SDR capacity concentrated).

**Illustrative math** (reference: B2B SaaS, 60k leads/yr, 4% lead→win, $25k ACV ≈
$60M new ARR/yr, 40-rep capacity-bound team): score-ordered routing at matched
capacity documented at material conversion lift (the HP/SalesPredict A/B precedent:
~2× conversion on scored accounts with ~40% win-rate lift — vendor-reported, evidence
15 §3; planning assumption **+10% conversion on the worked slice ≈ $2–6M incremental
ARR**). Customer investment order $150–300k/yr all-in. **E[ROI] ≈ 5–15×** on the
conservative edge — with the honesty caveat priced in: public numbers here are
vendor-reported, so the measurement design carries the burden of proof, and p(success)
discounts accordingly.

**Measurement design.** Randomized routing experiment — score-ordered vs status-quo
queues at matched capacity → lift in conversion per rep-hour; the exploration slice is
the permanent baseline guard against selection-bias self-confirmation. Guardrails:
lead-response SLA, new-segment coverage, rep cherry-picking, speed-to-lead. The
routing-experiment readout is the true-up instrument.

**p(success).** Data: hinges on CRM field-history depth + volume floor (the
qualification screen). Actionability: strong (queues/SLAs exist). Measurability: strong (routing
experiments are cheap). Adoption: rep trust — reason codes + side-by-side; the known
killer is score-as-decoration (F-3 below). Governance: modest.

### 5.5 The agent

Build: composes the scoring graph on field-history lineage; proposes label windows
per funnel stage (A1). Run: daily scoring, queue writes, nurture enrollment,
exploration-quota randomization (A2). Monitor: score-distribution drift, per-segment
precision, CRM field-latency, marketing-ops change events triggering revalidation
(A2/A3). Explain: reason codes per lead; the weekly funnel readout; win/loss driver
report to marketing (A2). Improve: retrains on trigger; learns routing policy from
captured route→outcome pairs (**reward = incremental conversion value per rep-hour**);
proposes band/SLA changes with predicted effect (A1); tunes exploration rate within
bounds (A3).

### 5.6 Data plan (summary)

Sources: CRM field history, MAP engagement, product telemetry (PLG), enrichment
(permissioned). Entities: lead↔contact↔account hierarchy (M-2). Labels: conversion
per stage per signed windows. **Action+outcome capture:** every routing decision,
work/no-work, sequence touch, and outcome logged — the reward stream for the routing
policy; the exploration slice is the deliberate data-collection instrument (D7-1).
Refinement: outcome attribution across recycled leads; funnel-definition change
management. Generalization: ICP-agnostic feature templates and funnel priors are
ours; their leads, labels, weights are theirs.

### 5.7 Capability levels · deployment · governance

**Levels:** CL-1 scoring + queues/SLAs · CL-2 + opportunity-risk (in-flight deals) ·
CL-3 + M-7 worked-lead incrementality (routing policy trained on captured
experiments) · CL-4 + value-weighted routing (composition with S-3 — the "revenue
intelligence" bundle). **Deployment:** E1/E2/E3; L1 (L2 optional). **Governance:**
proxy-bias screen on firmographics in SMB selling (fairness check in the gate);
enrichment-data permissions; audit trail answering sales-comp disputes;
identity-scoped queue views.

**Failure modes → countermeasures:** CRM hygiene garbage-in → data-readiness gate +
field-history lineage check. Selection-bias self-fulfilment → exploration quota as
policy, reported on the guardrail panel. Score-as-decoration → DoD wired action =
queue/SLA change, not a field; adoption checkpoint before routing goes live. Comp
gaming → joint KPI reporting above the contending teams. Silent feature breakage when
marketing changes forms → schema-drift monitors + change-event revalidation (agent
A3).

---

## 6. S-3 — Customer Lifetime Value (UC-3)

The value-regression head on the same tabular spine: composes with S-1/S-2 into the
revenue-intelligence bundle — churn says *who leaves*, leads say *who converts*, CLV
says *what each is worth*, and every treatment/budget decision upstream becomes
value-weighted (evidence 12 §5; evidence 15 §6).

### 6.1 Module framing & methodology

- **Promise:** *Allocate acquisition, retention, and promo spend by long-term customer
  value — not short-term response — with the incrementality to prove it.*
- **Band:** A-adjacent (scored in doc 02; carried as a full spec because it is the
  value-weighting layer the rest of the customer-family catalog composes with).
- **Methodology:** M-1 value-regression head (GBM regression on point-in-time
  features) or BTYD-class probabilistic models for non-contractual settings + M-2
  identity resolution + M-3 value tiers + M-6 (survival-corrected tenure inside CLV) +
  M-7 (promo incrementality).

### 6.2 Correctness adaptations

1. **Censoring is the core problem:** most customers' lifetimes are unfinished; naive
   "average revenue of past customers" biases with cohort mix. Horizon-limited value
   (e.g. 24-month CLV) with out-of-time validation; BTYD for non-contractual; M-6
   survival-corrected tenure (evidence 12 §5.4).
2. **Cohort drift:** channel-mix shifts change value distributions — recent-cohort
   validation; cohort calibration curves (predicted vs realized 12/24-month value) as
   a standing monitor.
3. **Point-in-time spend history** and **identity resolution across channels/devices**
   (M-2; the gate's entity test — value tiers on fragmented identities are fiction).
4. **Promo incrementality:** redemption ≠ lift — coupons cannibalize full-price
   purchases; holdouts required before any promo-targeting claim.
5. **Selection bias in paid-media audiences:** platforms optimize toward converters;
   incrementality needs geo/PSA experiments — measurement design, not model design.
6. **Finance sign-off as correctness:** the CLV definition (horizon, margin vs
   revenue, discounting) is a signed artifact with finance — or the program dies in
   metric disputes (evidence 12 §5.13).

### 6.3 Business wiring

**Actions & policy:** value-tiered audiences pushed to ad platforms (lookalikes seeded
on high-CLV), budget allocation by predicted payback, promo depth per segment,
suppression of discount-addicted segments, value-based bidding. Policy: CAC caps per
value tier, promo budget constraints, frequency caps, margin floors.
**Systems:** CDP/warehouse (audience backbone), ad platforms (value-based audiences +
conversion values), ESP (segments/suppression), BI/finance planning (cohort value
curves + calibration). **People & cadence:** growth/performance marketing daily;
**finance validates CLV assumptions quarterly (named co-owner)**; monthly value
council on calibration + allocation. Replaces last-click ROAS budgeting.

### 6.4 ROI contract

**Value levers.** Revenue lift (reallocation toward high-CLV acquisition/retention) +
cost reduction (promo spend concentrated on incremental response) + working-capital
discipline (payback-aware budgeting).

**Illustrative math** (reference: consumer business, $30M/yr combined
acquisition+promo spend): documented value-based-allocation programs move blended
payback and margin by single-digit percentage points of spend; planning assumption
**3–5% spend-effectiveness gain ≈ $0.9–1.5M/yr**, plus promo-holdout savings from
killing non-incremental promos (frequently the larger, quieter lever). Customer
investment order $200–350k/yr. **E[ROI] ≈ 3–6×**.

**Measurement design.** Geo-experiments / platform conversion-lift studies for media;
**permanent promo holdout groups** for offer incrementality; CLV backtests against
realized 12/24-month value (the calibration curve is the standing proof). Guardrails:
margin, discount-dependency share, new-vs-returning mix. True-up: the geo/holdout
readouts + calibration report.

**p(success).** Data: transactions + identity graph quality decide it (M-2 screen up
front). Actionability: strong (budgets move). Measurability: **the hard part** — media
incrementality is noisy; the contract prices measurement-design risk explicitly
(kernel open question 2). Adoption: finance co-ownership is the make-or-break.
Governance: consent on audience export is the sensitive surface.

### 6.5 The agent · data plan · levels · governance

**Agent.** Build: composes value model + tiering; proposes the CLV definition draft
for finance (A1). Run: audience sync within consent eligibility; budget-tier
recommendations (A2 sync / A1 budget shifts). Monitor: cohort calibration, margin
guardrails, consent state (A2). Explain: cohort curves; "what changed"; the allocation
readout (A2). Improve: reward = **measured incremental margin per reallocated
dollar**; learns allocation policy from geo/holdout outcomes; proposes tier-boundary
changes (A3 in bounds).

**Data plan.** Sources: transactions, subscriptions, channel events, promo history,
consent. Entities: customer identity across channels/devices. Labels: realized
12/24-month value per cohort; promo-response cells. Action+outcome: every audience
export, promo exposure, budget shift → realized value delta (the reward ledger).
Refinement: identity-graph stewardship; calibration maintenance. Boundary: their
identities/values/weights; our value-curve priors + promo-response patterns.

**Levels:** CL-1 horizon-limited CLV + tiers + one platform sync + promo-holdout
manager · CL-2 + M-6 tenure correction · CL-3 + M-7 promo uplift · CL-4 +
value-weighted composition into S-1/S-2/S-9/S-11. **Deployment:** E1/E2/E3, L1.
**Governance:** audience export is a data-sharing event — consent as an eligibility
rule in the policy engine, export audit, DPIA in the governance baseline; fairness on
who receives discounts; financial-reporting discipline if CLV enters investor metrics.

**Failure modes → countermeasures:** value tiers on fragmented identities → M-2 gate
test. Redemption reported as success while margin erodes → permanent promo holdout is
product + margin guardrail. Finance/marketing metric wars → signed CLV definition +
finance co-ownership. Audience-sync privacy incident → consent eligibility + export
audit. CLV overfit to acquisition-era covariates → recent-cohort validation +
calibration alerts (agent-monitored).

---

## 7. S-4 — Collections Prioritization (UC-4)

The finance-family anchor — structurally *S-1's sleeping-dog logic with a regulator
watching* (evidence 12 §17.4). More recovered at lower cost **and lower customer
harm**, with compliance as a hard constraint in the policy layer rather than a review
step. Working-capital release is the cleanest ROI story in the catalog: the return is
cash, measured in the customer's own ledger.

### 7.1 Module framing & methodology

- **Promise:** *Recover more delinquent receivables at lower cost-to-collect and lower
  complaint risk — each account matched to the right treatment, inside the contact
  rules, measured in net recovery.*
- **Band:** A (kernel D4). **Methodology:** M-1 (risk-of-roll + payment-propensity) +
  M-2 (account/obligor resolution) + M-3 (treatment-ladder segmentation) + M-7
  (uplift treatment assignment — the propensity→persuadability upgrade this domain
  was practically invented for). **Variants:** early-stage B2C delinquency
  (digital, uplift-heavy) · late-stage (placement/sale economics) · B2B receivables /
  DSO · utilities/telco (service-suspension levers) · healthcare receivables
  (exclusion-heavy — the documented Weill Cornell screen, evidence 15 §22).

### 7.2 Correctness adaptations

Inherits S-1's checks 1–4, 6–11; solution-specific:

1. **Self-cure awareness — the domain's defining trap:** many early-stage delinquents
   pay without contact; propensity targeting wastes spend and *annoys payers into
   complaints*. The correct formulation is treatment-response (uplift) against
   treatment cost; no-contact watch is a first-class treatment and randomized
   strategy cells are the data engine (evidence 12 §17.4; evidence 15 §22).
2. **Point-in-time balance/delinquency snapshots;** label windows per bucket (roll
   30→60 within cycle); treatment history enters the model, not just the policy.
3. **Hard exclusions upstream of the model:** deceased, bankruptcy, hardship,
   charity-care, dispute, legal-hold (gate check: exclusion filter present and
   lineage-verified).
4. **Contact-policy compliance as hard constraints in the decision layer:** FDCPA /
   Reg F call-frequency caps (US), FCA CONC + Consumer Duty (UK) — **the model may
   never be the thing enforcing law; the policy engine is.** Gate check: cap
   enforcement provable independent of model output.
5. **Vulnerability/hardship detection with generous recall** — vulnerability
   overrides route to human specialists, always.
6. **Selection bias from historical strategy** — champion/challenger cells are the
   clean data source (native to this domain).
7. **Calibrated value predictions** (expected recovery × cost) for
   placement/settlement economics; macro-sensitivity monitors on roll rates (the
   2020 forbearance waves broke unmonitored roll models).

### 7.3 Business wiring

**Actions & policy:** per-account per-cycle treatment assignment — **no-contact
watch** · SMS/email nudge + self-serve payment link · agent call ·
restructure/hardship offer · settlement within authority bands · agency placement.
Policy: cost-tiered treatment ladders; contact caps (legal + internal, policy-engine
enforced); settlement floors; vulnerability overrides; champion/challenger cell
assignment. **Systems:** collections platform/dialer (queue order, treatment code,
cell ID), digital-collections/self-serve portal (the cheapest treatment), core
banking/AR/ERP (features + labels), hardship-workflow tool (the human-only lane),
agency management (placements). **Cap-consistency is product:** the policy engine and
the dialer reconcile contact events daily — cap violations when they disagree are a
regulatory fine (evidence 12 §17.15). **People & cadence:** collections strategy owns
the module; ops consume daily queues; compliance is a named approver on contact
policies; agents own calls and hardship conversations; weekly performance +
compliance review. Replaces bucket-based uniform dialing.

### 7.4 ROI contract

**Value levers.** Working-capital release (net recovery↑, roll rates↓) + cost
reduction (cost-to-collect↓, digital-first mix) + risk reduction (complaints↓ — the
regulator-visible metric).

**Illustrative math** (reference: consumer lender, $500M receivables, 6% annual
charge-off ≈ $30M, $12M/yr collections opex): documented uplift-based treatment
programs move net recovery by low single-digit points of the delinquent pool;
planning assumption **+2% net recovery on the at-risk pool ≈ $3–6M/yr cash** +
**10–20% cost-to-collect reduction ≈ $1.2–2.4M/yr** (digital-treatment mix shift), at
flat-or-better complaint rates. Customer investment order $400–700k/yr (compliance
work included). **E[ROI] ≈ 4–8×**.

**Measurement design.** Champion/challenger strategy cells — collections ran
randomized strategy tests before "A/B testing" was a phrase (evidence 12 §17.9) —
measuring **net recovery** (recovery − treatment cost), roll rates, promises-kept,
re-default, complaints per cell; silent side-by-side against incumbent bucket rules
before queues switch. Guardrails: complaint rate, hardship-detection recall,
contact-cap adherence (**100%-or-incident**), cost-to-collect. The cell readout is the
true-up instrument and doubles as regulator-legible evidence.

**p(success).** Data: payment/contact history depth is usually strong (the systems of
record exist). Actionability: strong (treatments are operational levers the customer
already owns). Measurability: strongest in catalog after S-1 (cells are native).
Adoption: strategy-team ownership is standard; agent-comp misalignment is the
watch-item. Governance fit: **heavy but well-mapped** — the overlay is the product's
home turf; p(success) risk concentrates in compliance sign-off cycle time and macro
regime shifts.

### 7.5 The agent

Build: composes roll/propensity models + exclusion screens; proposes ladder config
(A1 — compliance co-signs). Run: daily queue + treatment-code writes; digital nudges
within caps (A2); **calls and hardship always human**; settlement drafts above floor
(A1). Monitor: cap reconciliation vs dialer (A2 — breach = incident), roll-rate drift,
macro triggers, cell integrity, complaint panel. Explain: per-account treatment
rationale + reason codes; cycle readouts; the examiner-legible audit extract. Improve:
reward = **net recovery − treatment cost − complaint-weighted penalty** per cell
(kernel D7-2: the reward carries the guardrail); learns treatment assignment (M-7)
from accumulated cells; proposes ladder changes with predicted net-recovery effect
(A1); tunes cell allocation within pre-approved experiment budgets (A3).

### 7.6 Data plan · levels · deployment · governance

**Data plan.** Sources: core banking/AR, payments, promises, contact events (both
directions — the reconciliation feed), hardship flags, complaint records. Entities:
account/obligor (households where lawful). Labels: roll transitions, payments,
promises-kept, re-default; treatment-response per cell. Action+outcome: every
treatment (incl. deliberate no-contact) + outcome + cost + complaint — the richest
native reward stream in the catalog. Refinement: exclusion-list stewardship,
macro-regime tagging. Boundary: their accounts/weights; our treatment-ladder priors,
cell-design templates, complaint-risk patterns.

**Levels:** CL-1 risk/propensity + ladder + cells + cap engine · CL-2 + M-7 uplift
treatment assignment (trained on cell data) · CL-3 + digital self-serve expansion
(the biggest ROI treatment) · CL-4 + S-7 wholesale layer (recovery-driver reporting
to the strategy council). **Deployment:** E1 expected (banking); E2/E3 supported;
**L1 daily** by delinquency cycle; retrain quarterly + macro triggers.

**Governance.** The frame *is* consumer-protection regulation: FDCPA/Reg F (US), FCA
CONC + Consumer Duty (UK), state/provincial rules; fairness testing on treatment
assignment; auditability of every contact decision; vulnerable-customer policy
supremacy. **SR 11-7 overlay** when deployed in a bank: the module ships model card,
validation report, and monitoring feeds examiner-legible so the bank's MRM adopts
rather than re-derives (evidence 12 §17.11; evidence 15 §22). B2B variant: internal
financial controls (segregation of duties on settlement authority).

**Failure modes → countermeasures:** propensity targeting harasses self-payers →
no-contact watch first-class + cells measure harm + uplift level. Cap violations on
policy/dialer disagreement → daily reconciliation + 100%-or-incident guardrail. Macro
shift breaks roll models → drift monitors + macro retrain triggers + scenario bands.
Cells contaminated by ops overrides → override logging + automatic cell exclusion.
Nudges claim payments that were coming anyway → cells measure incrementality vs
no-contact, never last-touch. Vulnerable customer mis-treated by an automated path →
generous-recall screen + human-only lane + conduct-breach kill-switch.

---

## 8. S-5 — Demand Forecasting (UC-5)

The supply-chain family's opener; tier-1 in all three external rankings (evidence
01–03). The forecast is an input to an *ordering policy* — S-6 completes the action;
S-5 is scoped as the forecast-to-planner module so the customer can choose the
human-review shape, with S-6 as the action attach (evidence 12 §10; evidence 15 §13).

### 8.1 Module framing & methodology

- **Promise:** *SKU×location demand forecasts your planners can trust — probabilistic,
  hierarchy-coherent, measured by forecast value added and the service/waste line.*
- **Band:** A (kernel D4). **Methodology:** M-4 forecasting (statistical baselines +
  GBM-global models across all series; deep models where scale warrants) + M-3
  (SKU/segment clustering for cold starts) + M-2 (product/location master resolution)
  + M-5 (demand-anomaly alerts). **Variants:** grocery/fresh (intraday,
  waste-focused), fashion (one-shot buys), manufacturing MRP, B2B order-book
  blending, S&OP hierarchy reconciliation.

### 8.2 Correctness adaptations

1. **Censored demand — mandatory:** sales ≠ demand when stocked out; without
   lost-sales imputation the model learns to under-order exactly where it failed
   before (the censored-demand death spiral). Gate check: stockout flags present;
   censoring correction applied (evidence 12 §10.4; evidence 15 §13).
2. **Probabilistic, not point, forecasts:** replenishment consumes quantiles (service
   levels consume P90s, not means); optimizing point-MAPE is a category error — the
   documented precedent moved to quantile forecasts for exactly this reason. Gate
   check: quantile outputs with calibration (PIT histograms).
3. **Hierarchical coherence:** SKU×store reconciles with category/region/network
   totals (MinT-style) or planning meetings relitigate numbers.
4. **Intermittent demand:** Croston-class/global models for the long tail;
   per-segment metrics, never one aggregate MAPE.
5. **Known-in-advance covariates with point-in-time discipline:** promo calendar,
   price, events as future-known features; the promo-calendar disconnect is an
   integration failure the connector contract prevents.
6. **New-SKU cold start** via attribute similarity (M-3).
7. **Temporal validation across seasons + regime honesty:** stale regimes
   down-weighted, not averaged in; walk-forward backtests across ≥1 full seasonal
   cycle where history allows.
8. **Lead-time/pack-size constraints live in the ordering policy (S-6), never bolted
   onto the forecast.**

### 8.3 Business wiring

**Actions & policy:** forecast + exception queue to planners (deviations from
plan/override history), safety-stock recommendations, projected-overstock markdown
flags. **FVA discipline as policy:** planner overrides tracked and scored — FVA
analysis routinely shows many overrides subtract accuracy; making that visible (both
directions) is part of the module. **Systems:** ERP/demand planning (read sales,
inventory, master data; write forecasts + quantiles + exceptions), POS/e-commerce
(sell-through + stockout signals — the censoring source), promo/price calendar (the
leakage-safe covariate feed, a connector contract with schema checks), S&OP platform
(the reconciled hierarchy). **People & cadence:** planners shift from generating
numbers to managing exceptions and enriching with market intelligence (the documented
role change — ~50% planner-workload reduction, vendor-reported; evidence 12 §10.7);
demand-planning lead owns the module; daily forecast runs (L1; L2 intraday for
perishables), weekly planning, monthly S&OP.

### 8.4 ROI contract

**Value levers.** Working-capital release (inventory↓ at equal service) + revenue
lift (availability↑ / lost sales↓) + cost reduction (waste/obsolescence↓, expedite↓,
planner workload↓).

**Illustrative math** (reference: retailer/CPG, $400M COGS, $80M average inventory,
95% service): documented magnitudes — 20% forecast-error reduction, 30% lost-sales
and obsolescence reductions (vendor-reported), 30% shelf-gap reduction (evidence 12
§10.9; evidence 15 §13). Planning assumptions at the conservative edge: **inventory
−5% ≈ $4M one-time cash release** (+ carrying-cost saving ~$600k/yr), **waste −10% on
a $6M waste line ≈ $600k/yr**, availability-driven revenue recovery **$1–3M/yr**.
Customer investment order $300–500k/yr. **E[ROI] ≈ 3–8×** with the cash-release
component landing early in the measurement window.

**Measurement design.** FVA vs incumbent process (naive/statistical baseline and
planner overrides) is the model-quality loop; the business loop measures service
level, stockout rate, inventory turns, waste on a **phased comparison by
category/region** (randomization is impractical; staggered starts create built-in
controls — evidence 12 §S5). Guardrails: bias by segment, promo-window misses,
override rate. True-up: the FVA + service/turns/waste readout per category.

**p(success).** Data: ≥2 years sales + stockout signals + a promo calendar feed —
the qualification screen. Actionability: strong via S-6; forecast-only engagements risk
the planner-decoration trap (F-3). Measurability: good (phased, but confounded by
seasonality — the design controls for it). Adoption: the FVA transparency is
culturally hard; the module's honesty-in-both-directions design is the
countermeasure. Governance: light.

### 8.5 The agent · data plan · levels · deployment · governance

**Agent.** Build: composes the model ensemble per segment (statistical vs global vs
deep — chosen by backtest, not fashion); proposes hierarchy + segment schemes (A1).
Run: daily runs, exception queues, reconciliation (A2). Monitor: per-segment accuracy
drift, bias, censoring-contamination, calendar-feed schema (A2/A3 retrain triggers).
Explain: exception rationales ("forecast ↑22% on promo flag + trend break"), FVA
readouts by planner/category, "what changed since last cycle". Improve: reward =
**FVA × service/waste economics** per segment; learns per-segment model selection and
exception thresholds (A3 in bounds); proposes segment-scheme changes (A1).

**Data plan.** Sources: sales/orders, inventory, master data, POS sell-through,
stockout flags, promo/price calendar, weather/events where relevant. Entities:
product/location masters (M-2). Labels: realized demand (censoring-corrected).
Action+outcome: planner overrides + realized accuracy (the FVA ledger — the reward
stream for exception policy); markdown/safety-stock actions + outcomes. Refinement:
master-data stewardship, regime tagging (COVID-class breaks), calendar-quality
contracts. Boundary: their history/weights; our per-industry seasonal priors,
cold-start templates, FVA benchmarks.

**Levels:** CL-1 probabilistic forecasts + exceptions + FVA harness · CL-2 + M-5
demand-anomaly alerts · CL-3 + S&OP hierarchy reconciliation · CL-4 + S-6 composition
(the designed pairing). **Deployment:** E1/E2/E3; L1 (L2 fresh); retraining
weekly–monthly. **Governance:** override audit; forecast version control ("what
changed" computable — Zetta lineage native, evidence 06); financial-controls handoff
where forecasts feed S&OP commitments; identity-scoped access per category/region.

**Failure modes → countermeasures:** optimizing MAPE while service stagnates → FVA +
service KPIs lead the readout. Censored-demand death spiral → gate check + feedback
contamination monitor. Override culture reverts to decoration → FVA transparency +
monthly override-value review. Promo-calendar disconnect → connector contract +
promo-window-miss guardrail. Regime shift at maximum stakes → regime monitors +
down-weighting policy + scenario bands. One aggregate metric hides long-tail failure
→ per-segment (ABC/XYZ) panels.

---

## 9. S-6 — Replenishment & Inventory Action (UC-6)

S-5's action layer as its own module: forecast-to-action with the automation frontier
as a **customer-chosen governance configuration** — draft orders human-released,
one-click release, or bounded auto-release per segment, each a policy setting with
its own evidence requirements, not a maturity stage (evidence 12 §10.5, §10.8, §S4).

### 9.1 Framing, methodology, correctness

- **Promise:** *Purchase, transfer, and safety-stock actions computed from
  probabilistic forecasts — released under the autonomy policy you set per segment,
  inside constraints, measured in service × turns × waste.*
- **Band:** A (with S-5; the kernel's "demand forecasting" Band-A entry is the
  S-5+S-6 pair). **Methodology:** M-4 (S-5's quantile forecasts as the input
  contract) + inventory-policy logic (service targets → reorder points/quantities;
  classical OR) + M-3 (criticality tiers) + M-11 (multi-echelon,
  predict-then-optimize). **Requires S-5** (sold as attach).
- **Correctness (adds to S-5's):** (1) service-level targets consume the matched
  quantile (P90/P95), never the mean; asymmetric over/understock costs explicit per
  segment. (2) **Constraint fidelity:** supplier minimums, pack multiples, shelf
  capacity, open-to-buy validated against ERP master data — infeasible draft orders
  are a gate failure, not a planner surprise. (3) Lead times are drifting inputs —
  monitored, not assumed. (4) **Bullwhip awareness:** order-smoothing constraints; no
  SKU optimized independently of its substitution/cannibalization group. (5)
  **Draft-order provenance:** every quantity carries its quantile, service target,
  and constraint trace — the adoption mechanism.

### 9.2 Wiring, ROI contract, agent, data plan

**Wiring.** Draft POs / transfers / safety-stock updates / allocation / markdown
triggers land as reviewable tasks in the ERP workflow; supplier EDI transmission on
release. Policy: service targets per segment; order caps; open-to-buy; **release
policy per segment** (A0 draft-review · A1 one-click · A2 bounded auto-release with
spend cap, deviation cap, kill-switch); anomaly-flagged items always escalate.
Replenishment analysts work the queue daily; planning lead owns policy; finance owns
open-to-buy; segregation of duties preserved at every autonomy class (recommender ≠
releaser, enforced via policy identity).

**ROI contract.** Levers: working-capital release + cost reduction (expedite, waste)
+ revenue (availability). Illustrative (same reference customer as S-5, action layer
engaged): the action layer typically converts S-5's forecast quality into **1.5–2×
the forecast-only value** because unactioned accuracy decays in planner queues —
combined S-5+S-6 planning assumption **$5–10M/yr equivalent** on the reference shape.
Marginal customer investment above S-5 is small (the connectors and data plan are
shared) — the designed economics of module attach (kernel D8 portfolio effect).
Measurement: phased rollout by category vs incumbent ordering — service, stockouts,
turns, waste, expedite; **draft-order acceptance rate + edit distance** (the trust
metric) at A0/A1; **release-quality evidence per segment** governs A2 eligibility
(the autonomy policy's own guardrail). p(success): dominated by ERP write-path change
management and planner trust; both named in the contract.

**Agent.** Build: composes policy logic + constraint sets from ERP master data (A1).
Run: generates draft orders with provenance (A0/A1); releases within bounds where the
customer has set A2. Monitor: constraint validity on master-data change events,
acceptance/edit telemetry, bullwhip/volatility guardrails, aged-stock creep. Explain:
per-order provenance; category readouts. Improve: reward = **service × turns × waste
economics** net of expedite; learns per-segment policy parameters (A3 in bounds);
proposes autonomy-class changes per segment **with the release-quality evidence
attached** (A1 — finance approves).

**Data plan.** Adds to S-5's: order/release/edit events (the acceptance ledger — the
reward stream), supplier lead-time actuals, constraint-violation events. Boundary:
their orders/weights; our policy-parameter priors and constraint templates.

**Governance + failure modes.** Financial controls on ordering (spend caps,
segregation of duties, full draft→edit→release audit); supplier fairness in
allocation. Failures → countermeasures: infeasible orders destroy planner trust
immediately → constraint validation is a gate check. Planners re-edit everything → edit-distance
telemetry + monthly policy tuning. Autonomy pushed past evidence → release-quality
evidence requirements are contractual per segment. Bullwhip amplification → smoothing
constraints + volatility guardrail. ERP write breakage on master-data change →
schema-drift monitors + re-validation triggers.

---

## 10. S-7 — KPI Anomaly & Driver Analysis (UC-7)

The "report" solution generalized — the executive surface every vertical buys, and
internally the **wholesale layer of every other module** extracted as its own SKU.
The report *is* the product; the discipline separating it from the dashboard
graveyard is the forum wiring (evidence 12 §34; evidence 15 §43).

### 10.1 Framing, methodology, correctness

- **Promise:** *Why is the KPI moving, what should we change, and did the change work
  — modeled evidence routed into a decision forum with a log, scored on its own
  forecast honesty.*
- **Band:** A (kernel D4 "KPI driver analysis"). **Methodology:** M-1 stopped at the
  report stage (extract → PIT features → GBM → SHAP driver analysis → structured
  report) + M-3 (segment decomposition) + M-5 (anomaly detection on KPI series) +
  M-4 (forecast-vs-actual decomposition) + M-9 (VoC text drivers). **Variants:**
  churn/margin/quality/attrition/support drivers; the VoC→product loop; investment
  board reporting.
- **Correctness:** everything in S-1's discipline applies unchanged — a report used
  for decisions deserves the same correctness as a score used for actions, *and gets
  it less often precisely because "it's just analysis"* (evidence 12 §34.4).
  Report-specific: (1) **association ≠ cause, said out loud** — every driver claim
  labeled a hypothesis with effect-size uncertainty; high-stakes drivers get causal
  follow-up before big money moves; "experiment recommended" is a first-class output
  enforced by the template. (2) **Stability discipline** — bootstrap CIs;
  change-flagging only beyond thresholds (driver-of-the-week noise destroys
  credibility). (3) **Segment honesty** — Simpson's-paradox screening before any
  segment claim. (4) **Reproducibility** — versioned data + code per edition; "what
  changed since last quarter" computable (Zetta lineage native, evidence 06). (5)
  **Multiple-comparisons control** on anomaly flags; alert budget matched to forum
  capacity.

### 10.2 Wiring, ROI contract, agent, data plan

**Wiring.** The action is a **decision by an accountable owner in a standing forum**,
product-enforced: named decision owner per driver domain; standing cadence;
recommendation format (proposed action, expected effect, confidence); **decision log**
(what was decided, by whom, revisited next cycle); KPI wiring (each accepted action
gets a metric and a check-in date). Systems: BI layer (delivery vehicle), the forum
(the real system of action — agenda pack + decision log are product surfaces),
warehouse/ERP/CRM (lineage-carrying sources), ticketing (accepted actions tracked),
the module's own experiment manager (the causal follow-up lane). Cadence
monthly/quarterly (weekly ops variant); the module owner is the executive whose forum
it is. Replaces anecdote-driven prioritization and one-off analyst decks.

**ROI contract.** Levers: risk reduction + cost avoidance (decision quality — bad
big decisions avoided; good ones found earlier), with realized value flowing through
the *decisions* the forum takes. The honest ROI model: value = Σ(tracked outcomes of
adopted decisions vs predicted effects), which the decision log computes — this
module's measurement loop is **its own product surface**. Illustrative (reference:
$500M-revenue enterprise, one KPI domain — margin): documented driver programs
surface 2–5 material decisions/yr; planning assumption **2 adopted decisions/yr ×
$0.5–2M tracked effect ≈ $1–4M/yr**. Customer investment order $150–250k/yr. **E[ROI]
≈ 4–15×**, with the widest variance band in the catalog — priced accordingly (lower
fixed anchor, success-linked component on tracked decision outcomes; D8).
Measurement: decision-adoption rate; tracked outcomes vs predicted (the
forecast-honesty score); experiments spawned per cycle; the driver KPIs themselves. A
program that cannot show decisions-and-outcomes within two quarters is a
dashboard-graveyard candidate — and the contract says so. p(success): dominated by
**forum existence and owner attendance** (the qualification screen: no forum, no
deal) and by causal-overreach discipline.

**Agent.** Build: composes the driver pipeline per KPI domain; drafts the report
(human-edits) (A2 draft). Run: editions on cadence; anomaly scan within alert budget
(A2). Monitor: driver stability, edition-over-edition consistency, decision-log
follow-ups coming due (A2). Explain: the report *is* the explanation; plus
per-audience MCP surfaces (CFO asks "why did margin move" and gets the current
edition's evidence with lineage). Improve: reward = **forecast honesty** (predicted
vs realized effect of adopted recommendations) — the agent learns which
recommendation shapes get adopted *and* deliver; proposes the next edition's agenda
ranking (A2); designs the follow-up experiments (A1 — owner approves).

**Data plan.** Sources: the KPI domain's systems of record with lineage. Labels: the
decision log itself — decisions, predicted effects, realized outcomes (the reward
stream; institutional memory as training data). Refinement: metric-definition
stewardship; assumption versioning. Boundary: their decisions/outcomes; our
recommendation-shape priors and driver-analysis templates.

**Levels:** CL-1 driver analysis + forum kit + decision log (one KPI domain) · CL-2 +
M-5 anomaly breadth (continuous KPI surveillance) · CL-3 + M-4 forecast-vs-actual
decomposition · CL-4 + M-9 VoC text drivers. **Deployment:** E1/E2/E3; L1
cadence-aligned (daily anomaly scan L2). **Governance:** access control on sensitive
drivers (comp, individual performance — never individual-level people claims; the
S-8/attrition boundary); methodology transparency; decision-log retention.

**Failure modes → countermeasures:** dashboard graveyard → forum slot is a
qualification gate; decision-adoption rate is the module's own KPI. Driver-of-the-week
noise → stability CIs + change-flag thresholds. Causal overreach → hypothesis labeling
enforced + experiment lane wired. Decision-log absence → the log is the product
surface. Analyst-forum decoupling → named owner per driver domain; unowned domains
flagged every edition. Alert fatigue → alert budget matched to forum capacity +
family-wise error control.

---

## 11. S-8 — Predictive Maintenance (UC-8)

Machines, not people; work orders, not denials — the operational-proof module
(evidence 08 design-partner research). The defining wiring: **an alert that doesn't
become a scheduled, parts-allocated work order is a dashboard, not a solution** — the
documented failure mode of most stalled PdM pilots (evidence 12 §18.3, §18.6).

### 11.1 Framing, methodology, correctness

- **Promise:** *Fix equipment just before it fails — condition intelligence that
  becomes scheduled, parts-allocated work orders under the approval policy you set,
  measured in downtime and maintenance cost.*
- **Band:** A (kernel D4). **Methodology:** M-5 anomaly detection (condition layer on
  sensor/telemetry baselines) + M-1 (supervised failure-probability where labels
  exist) + M-2 (asset-state resolution — event-sourced maintenance context) + M-6
  survival (remaining useful life with censoring). The composition is honest about
  labels: where a curated failure library doesn't exist, the anomaly + expert-labeled
  precursor form runs while closeout capture builds the supervised layer's labels —
  a *data-plan* fact, not a roadmap (evidence 12 §18.4, §18.16).
- **Correctness:** (1) **the label paradox** — well-maintained fleets fail rarely;
  failure events live in free-text work-order logs mined and aligned to sensor
  timelines (M-9 component). (2) PIT discipline on maintenance context — features
  exclude post-failure inspection data; **maintenance actions reset degradation
  clocks**; asset state is event-sourced (the gate's entity test becomes the
  asset-hierarchy test). (3) **Censoring is structural** — survival methods or
  careful negative-sampling windows, never naive failed-vs-not. (4) Operating-regime
  encoding (load, duty cycle, season, product mix) or normal behavior gets flagged;
  per-asset heterogeneity via hierarchical/fleet models + asset-level calibration
  (evidence 15 §23). (5) **Alarm-fatigue calibration** — thresholds set to
  maintenance capacity; alert budgets are policy config. (6) Sensor-data quality
  monitored as rigorously as the model (sensor rot mistaken for degradation is a
  classic field failure). (7) **Lead-time matching** — predict far enough ahead to
  schedule parts + labor, not merely before failure.

### 11.2 Wiring, ROI contract, agent, data plan

**Wiring.** Draft work orders with diagnosis, priority, recommended parts, due
window; schedule bundling with planned windows; parts pre-ordering; inspection tasks
for low-confidence alerts; deferral recommendations on healthy assets (often the
biggest quiet saving). Policy: severity→priority mapping; capacity-aware alert
budgets; criticality-tiered thresholds; **work-order approval policy per asset class**
(A0 draft / A1 approve / A2 auto-create for classes where the customer's evidence
supports it). Systems: CMMS/EAM (**the solution-defining integration** — write draft
work orders, read work-order history: the label archaeology source), historian/
condition platform (sensor streams), ERP (parts), scheduling boards. **Technician
closeout capture is a connector requirement, not a nicety** — structured findings
("confirmed bearing wear"/"false alarm") as a checkbox at closeout are the future
labels *and* the reward stream (evidence 12 §18.7). People: maintenance planners
consume alerts and schedule (owner: reliability engineering lead); technicians close
the loop; plant leadership reviews downtime economics monthly. Augments the planner;
replaces calendar-only PM schedules.

**ROI contract.** Levers: cost reduction (maintenance cost, PM-task volume, expedited
parts) + loss avoidance (unplanned downtime, secondary damage, safety exposure).
Illustrative (reference: plant/fleet with $20M/yr maintenance spend and $15M/yr
unplanned-downtime cost across the covered asset classes): documented programs land
**10–20% unplanned-downtime reduction and 5–10% maintenance-cost reduction** on
covered classes (sector/vendor-reported; evidence 12 §18, evidence 15 §23) — planning
assumption **$2–4.5M/yr** on covered classes. Customer investment order $400–700k/yr
(sensor/historian work included where needed). **E[ROI] ≈ 3–7×**. **Downtime
baselines recorded at qualification — savings claims without before-measurement are
unfundable** (the domain's documented credibility trap). Measurement: phased
comparison by asset class — downtime hours, maintenance cost, catch rate (failures
preceded by alerts) vs false-alarm rate, **technician-confirmed alert precision**
(the trust currency); alerts validated silently by reliability engineers before
planners see the queue (the documented exception-based surveillance pattern, evidence
15 §23). p(success): sensor/label availability per asset class is the dominant
driver (screened up front); alarm-fatigue and baseline-absence are the named killers.

**Agent.** Build: composes condition baselines per asset; mines work-order text for
failure labels (M-9); proposes threshold/criticality config (A1 — reliability signs).
Run: continuous detection (L3), daily risk scoring (L1), draft work orders under the
per-class approval policy (A0/A1/A2). Monitor: sensor-health index, false-alarm
streaks (a streak trips threshold review automatically), alert-budget adherence,
per-class precision. Explain: per-alert diagnosis evidence (which signals deviated,
against which regime baseline); the per-class catch/false-alarm matrix; the
confirmed-find case log (the tear-downs that build plant folklore of trust — evidence
12 §18.13). Improve: reward = **confirmed-find value − false-alarm cost** per class
(technician closeouts are the labels); learns per-class thresholds within alert
budgets (A3); proposes autonomy-class promotion per asset class with the precision
evidence attached (A1).

**Data plan.** Sources: historian/telematics streams, CMMS work-order history (+
free text), parts/ERP, operating context (load, product mix). Entities: asset
hierarchy, event-sourced state (M-2). Labels: technician closeout findings —
**captured as a designed instrument**; failure events mined from history.
Action+outcome: alert → work order → finding → downtime delta, the full reward chain.
Refinement: sensor-health stewardship, regime tagging, label-mining quality.
Boundary: their asset data/weights; our per-equipment-class condition priors and
threshold templates (the cross-customer asset library is one of the strongest
generalized assets in the portfolio — kernel D7-3).

**Levels:** CL-1 condition/anomaly layer + draft work orders + closeout capture (top
critical assets) · CL-2 + supervised failure models (where the label library
supports) · CL-3 + M-6 RUL/survival + parts pre-order automation · CL-4 fleet-wide
scale-out + maintenance-schedule optimization (M-11). **Deployment:** E2/E3 expected
(plant/fleet; edge-adjacent ingestion), E1 for fleet telematics; L3 detection + L1
scoring. **Governance:** functional-safety boundary — **no ML write path to control
or safety-instrumented systems, ever, in this module**; work orders only.
Alert-suppression changes under management-of-change discipline; OT-side security
(read-only historian taps); CMMS audit of draft→approve→execute→closeout; regulated
maintenance regimes constrain automation depth where applicable.

**Failure modes → countermeasures:** alert-without-work-order (the family's most
documented stall) → CMMS write path is the DoD action; work-order conversion rate is
a module KPI. Label starvation → anomaly-form honesty + closeout capture as the
designed label engine. False-alarm trust collapse → conservative thresholds +
silent validation before planner exposure + streak-triggered review. Sensor rot
mistaken for degradation → sensor-health monitors first-class. Savings without
baselines → baseline recording is a contractual qualification artifact. Alerts exceed
capacity → alert budget as policy config. Model near safety systems → the hard
boundary above.

---

## 12. S-9 — Automated Outbound (UC-9)

Scoring + segmentation powering governed, measured outbound (evidence 07 catalog;
kernel D4 "automated outbound"). The module where the agent's autonomy is most
visible to the outside world — which is why its governance envelope is the strictest
per dollar at stake in the catalog.

### 12.1 Framing, methodology, correctness

- **Promise:** *Outbound that targets who's worth contacting, says what the data
  supports, and never exceeds contact governance — measured by incremental response,
  priced on incremental pipeline.*
- **Band:** A (kernel D4). **Methodology:** M-1 (propensity-to-respond/convert) + M-3
  (audience cells × message variants) + M-2 (contact identity/suppression
  resolution) + M-7 (send-vs-hold uplift) + M-8 (message/offer arbitration per
  contact) + M-9 (generative drafting under the approval gate). Composes with S-2
  (lead-scored audiences), S-1 (retention journeys on the same rail), S-11 (the
  omnichannel arbitration layer above it).
- **Correctness:** (1) PIT features + response windows exactly as S-1/S-2 (no
  post-send contamination). (2) **Selection/feedback bias:** the sender shapes its own
  future training data (engaged contacts get more email → more engagement signal);
  holdout cells + randomized message assignment keep the system learnable. (3)
  **Suppression correctness as a gate check:** unsubscribes, bounces, complaints,
  do-not-contact, cross-channel suppression resolved through M-2 — mailing a
  suppressed identity via a duplicate record is both a correctness failure and a
  legal one. (4) **Consent state as eligibility data** (policy layer), never as
  propensity features (model layer). (5) **Deliverability as drift:** domain
  reputation, spam and bounce rates monitored like model drift — a deliverability
  collapse invalidates both the measurement and the channel. (6) **Incrementality
  over response:** open/click propensity rediscovers people who would engage anyway;
  the uplift head formalizes send-vs-hold; the permanent holdout supplies its
  training data.

### 12.2 Wiring, ROI contract, agent, data plan

**Wiring.** Journey enrollment per cell; send/hold per contact per cadence window;
variant assignment; automatic suppression. Policy: **global contact-frequency caps
across all journeys** (not per-campaign); quiet hours; eligibility (consent, region,
lifecycle stage); volume ramps per domain; kill-switch per journey; approval gates on
new audience definitions and message templates (**human-approved copy — generative
drafting produces candidates; nothing ungoverned sends**). Systems: ESP/MA (the
execution rail — write segments/journeys/suppression, read the full engagement
stream), CRM (identity + eligibility; activity log), warehouse/CDP (scoring source),
postmaster/deliverability feeds (the drift monitor). People: marketing/growth ops
owns the module (audiences, templates, caps); weekly outbound review (cells,
suppression health, deliverability); reply routing to sales when composed with S-2.

**ROI contract.** Levers: revenue lift (incremental replies/meetings/pipeline per
1,000 sends) + cost reduction (list burn avoided; sending less to earn more) + risk
reduction (zero-violation contact governance). Illustrative (reference: B2B GTM
sending 300k governed sends/quarter): holdout-measured programs price on
**incremental pipeline per 1,000 sends**; planning assumption — uplift-targeted
send/hold beats spray-and-pray by **20–40% incremental response at 30–50% lower send
volume** (directional, from the uplift literature via evidence 12 §2.4/§S2),
translating to **$1–3M/yr incremental pipeline** at reference scale with materially
lower fatigue/complaint exposure. Customer investment order $120–250k/yr. **E[ROI] ≈
4–12×** at pipeline-to-revenue conversion typical for the segment. Measurement:
**permanent randomized send/hold holdout per audience cell** — incremental
response/pipeline, never open rates; message A/B within cells; guardrails:
unsubscribe rate, spam-complaint rate (hard thresholds — breach auto-pauses),
deliverability indices, touches/contact/month, downstream NPS where composed with
S-1. True-up: the holdout readout + the governance panel (zero cap breaches, zero
suppressed-identity sends). p(success): list quality + consent hygiene decide the
floor; deliverability management and copy-approval throughput are the operational
risks; measurement is cheap and strong (cells are native).

**Agent.** Build: composes cells + journeys from the audience catalog; drafts
message variants (M-9) into the approval queue (A1). Run: send/hold execution within
caps, suppression maintenance, holdout randomization (A2). Monitor: deliverability,
fatigue, cap adherence, cell integrity (A2; breach auto-pauses — the kill-switch is
agent-operated but policy-defined). Explain: per-cell incrementality readouts; the
governance panel; send-decision audit (score → eligibility → send/hold → outcome).
Improve: reward = **incremental pipeline − fatigue/complaint penalty** per cell;
learns send/hold policy (M-7) and message arbitration (M-8) from captured cells;
proposes new cell/variant designs (A1); tunes send-time/volume within deliverability
bounds (A3).

**Data plan.** Sources: ESP engagement stream, CRM contact/account state, consent +
suppression state, deliverability feeds. Entities: contact identity across channels
(M-2). Labels: response/conversion per cell; send/hold outcomes. Action+outcome:
every send/hold decision + outcome — a naturally complete reward stream (this module
generates the densest RL signal per dollar in the catalog; kernel D7). Refinement:
suppression-integrity checks, consent-state stewardship, jurisdiction tagging.
Boundary: their lists/weights; our cell-design and message-arbitration priors.

**Levels:** CL-1 propensity + cells + governance engine + holdout manager · CL-2 +
M-7 send/hold uplift · CL-3 + M-8 message arbitration · CL-4 + M-9 generative
drafting under the approval gate + S-11 composition. **Deployment:** E1/E2/E3, L1
(daily scoring, cadence-window sends). **Governance:** consent + anti-spam law as
the policy frame — **CAN-SPAM (US), CASL (Canada), GDPR/ePrivacy (EU)** —
jurisdiction resolved per contact through M-2; identity-scoped audience access;
send-decision audit; suppression-list integrity checks; template approval workflow
(evidence 12 §2, §S2; evidence 15 §S1 consent/suppression rows).

**Failure modes → countermeasures:** contact fatigue / list burn → global caps +
fatigue guardrail + holdout detects negative drift. Suppressed identity mailed via
duplicate → M-2 suppression resolution as gate check + zero-tolerance guardrail.
Deliverability collapse from volume enthusiasm → ramps as policy + reputation
monitors auto-throttle (agent A3). Optimizing opens over incremental pipeline →
holdout-first measurement; the readout reports increments only. Journey sprawl
outrunning governance → journey registry with owner + kill-switch; unowned journeys
auto-expire. Ungoverned generative copy → approval gate is structural; the agent
cannot promote its own drafts.

---

## 13. S-10 — Fraud & Financial-Crime Decisioning (UC-10)

The most mature closed-loop solution in enterprise AI (evidence 12 §13) — Band A per
kernel D4, and the catalog's flagship **L4** module: the policy engine renders
approve / challenge / block inside the authorization window, humans govern the
policy, and the agent operates the loop. Includes AML alert triage as a capability
level (the assistive, case-management-wired sibling — evidence 12 §14).

### 13.1 Framing, methodology, correctness

- **Promise:** *Stop fraud in-flight while approving good customers — the two-sided
  cost problem managed as an explicit economic policy, decided in milliseconds,
  audited decision by decision.*
- **Band:** A (kernel D4 "fraud & financial-crime decisioning"). **Methodology:** M-1
  at streaming speed (real-time feature aggregation — velocity counters,
  device/behavioral signals → GBM/deep classifier → calibrated score) + M-2 +
  graph/link analysis across cards, devices, merchants, counterparties (fraud rings;
  D5 toolbox) + M-5 (attack-pattern/typology-drift overlay) + the **policy engine**
  (rules + thresholds + model score → decision in-line). Streaming feature
  infrastructure with online/offline parity is the engineering core — feature stores
  exist largely because of this solution (evidence 12 §13.4-iii).
- **Correctness:** (1) **Label maturity/censoring** — fraud labels arrive as
  chargebacks weeks-to-months later; training respects maturity windows; interim
  proxies handled explicitly. (2) **Selection bias from own decisions** — blocked
  transactions have no outcome; small randomized approve-throughs on gray-zone
  traffic (exploration), reject inference, gray-zone monitoring. (3) **PIT velocity
  features** computed in the streaming layer exactly as in training replay
  (train/serve consistency is *the* engineering problem). (4) **Extreme imbalance**
  (bp-level rates): PR-AUC / recall-at-fixed-FPR, cost-weighted thresholds. (5)
  **Adversarial drift** — fraudsters adapt in days: champion/challenger retraining
  weekly or faster; drift alarms on score distributions and attack-pattern features.
  (6) **Latency budget as a correctness constraint** — the full
  feature+model+policy path must fit the authorization window (the documented
  precedent evaluates >1,000 signals in <100 ms). (7) **Two-sided error economics**
  — false declines are projected to cost merchants more than fraud itself (the $264B
  false-decline projection; ~$4.61 total merchant cost per $1 of fraud); thresholds
  are an economic optimization, never recall maximization (evidence 12 §13.4).

### 13.2 Wiring, ROI contract, agent, data plan

**Wiring.** In-line approve / step-up challenge (3DS, OTP) / block; post-auth review
queue; merchant/account velocity limits and holds; case creation on confirmed fraud.
Policy: score bands × amount × segment; challenge budgets (friction caps);
allow/deny lists; regulatory rules (PSD2/SCA) as hard constraints; emergency-rule
lane for attacks in progress. Systems: payment gateway / authorization stream (the
decision executes inside it), case management, chargeback/dispute systems (the label
loop), customer-notification rails. People: fraud-ops analysts work the queue and
tune rules; fraud strategy owns thresholds vs loss/approval targets; a weekly loss
review reconciles fraud bps, false-decline estimates, and friction — **jointly** (any
one alone is gameable). Replaces static rules-only stacks (which keep running
*inside* the policy layer as guardrails). AML capability level: alert-queue
prioritization + entity/graph context assembly into case management; SAR-yield and
**below-the-line audit sampling** (random investigation of suppressed alerts) as the
measurement spine; no opaque suppression (evidence 12 §14; evidence 15 §19).

**ROI contract.** Levers: loss avoidance (fraud bps↓) + revenue lift (approval rate↑
/ false declines↓ — frequently the *larger* lever) + cost reduction (manual-review
and alert-triage productivity). Illustrative (reference: PSP/merchant portfolio with
$3B/yr volume, 8 bps fraud ≈ $2.4M/yr loss, 2.5% decline rate): documented
deployments report 30%+ fraud reduction at ~0.1% false-positive rates and
multi-billion false-decline recovery at network scale (company-reported; evidence 12
§13.9/§13.14). Planning assumptions: **fraud −25% ≈ $600k/yr**, **false-decline
recovery +0.3 pp approval ≈ $9M/yr volume ≈ $1.8–2.7M/yr margin-adjusted**,
review-cost −30%. Customer investment order $500k–1M/yr (streaming infrastructure
included). **E[ROI] ≈ 3–6×**, with the false-decline lever dominating. AML level:
investigator-productivity gains of 2–4× on triage with SAR-yield uplift
(sector-reported; evidence 12 §14). Measurement: **continuous champion/challenger on
live traffic** + the exploration slice quantifying missed-good/missed-bad; KPIs
reported jointly: fraud bps, approval rate, challenge rate, review rate, chargeback
rate; below-the-line audits on the AML level. The champion/challenger ledger is the
true-up instrument. p(success): label-loop plumbing (chargeback/dispute feeds) and
streaming feature parity are the technical risks; growth-vs-fraud threshold wars are
the organizational risk (joint KPI reporting is the countermeasure); governance fit
is heavy but codified (the domain is regulator-mapped).

**The agent.** Build: composes streaming features + models + graph contexts;
proposes band/threshold structures with cost curves (A1 — strategy signs). Run:
in-line decisions within approved bands (**A2 — the policy envelope is the
autonomy**); queue prioritization; case-context assembly (AML level). Monitor:
score/attack drift, feature-pipeline health (**a broken velocity counter is a silent
catastrophe** — first-class monitor), label-maturation tracking, exploration-slice
integrity. Explain: decision-level reason codes (every score, rule hit, action
logged); the joint-KPI weekly readout; SAR narratives drafted for investigator
review (AML, A1). Improve: reward = **(fraud loss avoided + approval margin
recovered) − friction/review cost**, computed from matured labels; challenger
training continuous (A2 promote-on-evidence within pre-approved criteria — promotion
outside criteria is A1); threshold tuning inside bands (A3); emergency-rule proposals
during attacks (A1 with paged human, minutes-class SLA).

**Data plan.** Sources: authorization stream, chargebacks/disputes, device/behavioral
signals, case dispositions, watchlists (AML). Entities: card/account/device/merchant
graph (M-2 + graph). Labels: matured chargeback outcomes; analyst dispositions;
below-the-line audit findings. Action+outcome: every decision (approve/challenge/
block) + matured outcome — the canonical closed-loop reward stream; the exploration
slice is the deliberate data purchase that keeps it unbiased. Refinement: label
maturation management, attack-pattern tagging, disposition-quality review. Boundary:
their transactions/weights; our attack-typology priors, feature templates, and
threshold-economics benchmarks.

**Levels:** CL-1 post-auth review prioritization (batch triage — no in-line path) ·
CL-2 in-line decisioning within bands (L4) · CL-3 + graph/ring analytics + ATO
detection · CL-4 + AML alert triage & case assembly (the assistive financial-crime
level). A customer chooses CL-1 where they want triage economics without touching
the authorization path — a governance choice, not a maturity stage. **Deployment:**
E1 expected; L4 decide + L1 triage/retrain. **Governance:** SR 11-7-class model risk
management (banks); adverse-action/dispute processes; PSD2/SCA; fairness monitoring
on decline rates across demographics; full decision audit; AML level: auditable
rationale, data lineage, SAR controls, **no opaque suppression** — below-the-line
sampling is a regulatory expectation (evidence 15 §18–19).

**Failure modes → countermeasures:** false-decline blindness → the two-sided
economics are the objective; approval rate co-reported with fraud bps, always.
Feedback starvation (no exploration → model calcifies) → the exploration slice is
policy with a protected budget; cutting it voids the challenger evidence. Feature
pipeline breakage mid-attack → pipeline-health monitors with paging + rules-only
fallback mode (the policy engine keeps deciding when the model is degraded). Rules
sprawl re-accreting → policy versioning + periodic rationalization readouts;
every rule carries an owner and an expiry. Adversarial adaptation outpacing retrain
cadence → challenger cadence tied to attack-drift monitors, not the calendar (A2/A3).

---

## 14. S-11 — Next-Best-Action (UC-11)

The omnichannel decisioning layer (kernel D4 "next-best-action"): which
message/offer/action — including **no action** — for each customer at each
touchpoint, arbitrated for long-term value, not per-touch clicks (evidence 12 §2;
evidence 15 §2). S-11 is the customer-family capstone: S-1/S-2/S-3/S-9 heads become
arms in its arbitration, on the shared identity + feature foundation.

### 15.1 Framing, methodology, correctness

- **Promise:** *One decision layer across every channel — each customer gets the
  action that maximizes their long-term value, inside eligibility, frequency, and
  fairness constraints, with the holdout to prove it.*
- **Band:** A. **Methodology:** M-8 (ranking/arbitration; contextual bandits) + M-1
  (per-action propensity heads) + M-7 (incrementality objectives) + M-2 (the
  identity backbone) + M-3 (eligibility segmentation). Delivered as a **central
  decision service (L4 API)** called by every channel so decisions and logging are
  consistent — the decisioning-hub pattern, not per-channel models.
- **Correctness:** (1) **position/selection bias** — training on logged interactions
  biases toward previously shown actions; **propensity logging** (record what could
  have been shown, with what probability) and off-policy evaluation (IPS/
  doubly-robust) before any offline claim is trusted. (2) **Incrementality over
  propensity** — uplift objectives or bandit exploration measure lift, not clicks.
  (3) **Feedback loops** — without exploration traffic (epsilon/Thompson) the system
  collapses onto a self-confirming policy. (4) PIT features + entity resolution
  exactly as S-1. (5) **Arbitration correctness** — when many models bid for one
  slot, value-based arbitration with eligibility rules prevents contradictory
  actions (retention discount and upsell in the same session). (6) Cold start for
  new offers via hierarchical priors/bandits. (7) **Long-horizon reward** — the
  objective is cohort-level value, not per-touch CTR (the classic failure: optimizing
  clicks while eroding annual value).

### 15.2 Wiring, ROI contract, agent, data plan

**Wiring.** Per-touchpoint action selection (banner, offer, email, agent script,
no-action — a first-class arm) via the decision API; humans design the **action
catalog and constraints**. Policy: eligibility (regulatory, inventory, margin
floors), cross-channel contact caps, budget per offer pool, business-priority
overrides, exploration budget. Systems: web/app personalization layer, marketing
automation, contact-center scripting (the agent-desktop NBA surface), CDP/identity
backbone. People: marketing/CX owns the catalog and strategy; a weekly trading
meeting reviews arm performance and retires/launches actions; high-stakes offers
(credit-line changes, retention concessions) gate through approval workflows.
Replaces channel-siloed campaign calendars ("everyone gets the May email") with
per-customer arbitration. **The organizational price is named in the contract:**
marketing surrenders per-campaign control to a policy — the hardest adoption sell in
the family; side-by-side ("your segment plan vs the engine, same budget") and
transparent arm-level reporting are the designed mechanism (evidence 12 §2.13).

**ROI contract.** Levers: revenue lift (long-horizon value per customer; conversion
mix) + cost reduction (offer/discount spend concentrated on incremental response) +
risk reduction (contradictory-contact harm eliminated). Illustrative (reference:
B2C enterprise, 2M active customers, $300/yr average revenue, $25M/yr
promo+campaign spend): documented decisioning-hub programs (bank/telco scale) report
material conversion and NPS gains (vendor-documented; the flagship
personalization-economics precedent values the combined effect at >$1B/yr at
streaming scale — evidence 12 §2.14). Planning assumptions: **+1–2% net value per
active customer ≈ $6–12M/yr** + **10% promo-spend efficiency ≈ $2.5M/yr**. Customer
investment order $600k–1.2M/yr (identity + channel integration is the long pole).
**E[ROI] ≈ 4–8×**. Measurement: **global holdout** (customers receiving the
rule-based/random policy) for program-level incrementality; per-arm bandit
statistics for local optimization; long-horizon cohort value, never per-touch CTR.
Guardrails: unsubscribe/complaint volume, margin, offer-fairness distribution,
exploration-rate floor. True-up: the global-holdout readout. p(success): identity
+ channel integration depth is the dominant driver (screened up front);
catalog-neglect (engines optimizing over stale, near-identical offers) is the
documented decay mode; the weekly trading rhythm is the countermeasure.

**The agent.** Build: composes propensity/uplift heads per action; onboards new
arms with cold-start priors; proposes eligibility/cap structures (A1). Run: L4
arbitration inside the policy envelope (A2); propensity logging on every decision;
exploration within the approved budget. Monitor: arm distributions, exploration
rate, reward drift, contradiction detection across channels, holdout integrity.
Explain: "why did this customer see this offer" — decision-level audit; weekly
arm-performance readouts; catalog-health flags (stale/duplicative arms). Improve:
reward = **long-horizon incremental value per customer** (cohort-attributed —
kernel D7-2's cleanest expression: the agent literally trains on the module's ROI
signal); continuous bandit updates (A2); retires/proposes arms with evidence (A1);
tunes exploration allocation (A3 in bounds).

**Data plan.** Sources: all channel event streams, offer catalog + costs, CDP
identity graph, consent/preference state. Entities: one customer identity across
channels (M-2 — the foundation asset). Labels: per-decision outcomes + cohort value
trajectories; propensity logs (what could have been shown). Action+outcome: complete
by construction — the decision API logs every arm, probability, and outcome; the
richest bandit-native reward stream in the catalog. Refinement: catalog metadata
stewardship, identity-graph quality, long-horizon attribution windows. Boundary:
their interaction data/weights; our arbitration-policy priors, catalog-design
patterns, exploration-budget benchmarks.

**Levels:** CL-1 single-channel NBA (batch lists for outbound teams — composes with
S-9) · CL-2 real-time single-channel (L4, one surface) · CL-3 omnichannel
arbitration hub (the full decision API) · CL-4 + long-horizon RL objectives (beyond
bandits) where the customer's data depth supports it. **Deployment:** E1/E2/E3;
**L4** decision path over precomputed features + session context; batch feature
refresh; continuous/daily bandit updates. **Governance:** offer-fairness review (who
systematically gets the good prices), regulatory eligibility (financial-promotions
rules), consent/preference enforcement as eligibility, full decision logging,
suppression/vulnerable-customer rules (evidence 15 §2).

**Failure modes → countermeasures:** optimizing short-term clicks against long-term
value → long-horizon cohort reward is the objective and the readout. Self-confirming
policy without exploration → exploration budget is protected policy; the agent
cannot spend it to zero (A3 floor). Offer-catalog rot → catalog-health flags + the
weekly trading rhythm own arm hygiene. Channel teams bypassing the hub →
contradiction detection + the caps live in the hub; bypass shows up on the
governance panel. Measurement theater (per-campaign response, no global holdout) →
the global holdout is the true-up basis; no holdout, no success-linked billing —
the D8 discipline enforces the measurement discipline.

---

## 15. S-12 — Claims Triage & Fraud Referral (UC-12)

The insurance family's Band-A entry (kernel D4 "claims triage"): route every claim to
the right path — instant pay, fast-track, standard adjudication, or SIU referral —
cutting cycle time and leakage simultaneously. **The safe pattern automates payment,
never denial** — the industry's live third-rail, and this module's structural
governance decision (evidence 12 §16; evidence 15 §21).

### 14.1 Framing, methodology, correctness

- **Promise:** *Every claim on its right path from first notice — instant pay where
  it's safe, expert attention where it matters, SIU referral where the evidence
  points — measured in cycle time, leakage, and referral hit rate.*
- **Band:** A. **Methodology:** M-1 (severity + fraud-propensity models on
  claim/policy/history features) + M-2 (claimants/providers/repair-shops — ring
  detection with the graph component) + M-9 document/photo intelligence (FNOL
  documents → structured fields; photos → damage estimates) + M-3 (path
  segmentation) + the policy engine for path assignment.
- **Correctness:** (1) **label asymmetry on fraud** — confirmed labels exist only
  where SIU investigated (the selective-label problem); referral-outcome feedback +
  **random-referral audit slices** keep the model honest. (2) **Severity develops
  over time** (bodily-injury claims mature for years): PIT snapshots of claim state,
  development-aware labels, leakage discipline on late-populated fields (**reserve
  updates leak outcomes**). (3) Document/photo extraction audited per field — an
  OCR'd policy number wrong 2% of the time corrupts entity joins silently. (4)
  Entity resolution across claimants/providers/shops. (5) **STP eligibility as
  conservative allowlists** (clear coverage, low amount, verified identity, benign
  signals) — straight-through processing is a *policy* achievement, not a model
  achievement. (6) **Catastrophe-regime handling** — hurricane surges shift every
  distribution; CAT modes/overrides are configuration (evidence 12 §16.4).

### 14.2 Wiring, ROI contract, agent, data plan

**Wiring.** Path assignment (instant settle / fast-track / standard / complex), SIU
referral with reason codes, reserve-setting suggestions, vendor dispatch (adjuster,
repair network), document-request automation. Policy: STP caps by line and amount;
referral thresholds balanced to SIU capacity; **mandatory human adjudication for
injury/liability lines**; CAT overrides; customer appeal path mandatory. Systems:
claims platforms (Guidewire/Duck Creek class), SIU case management, payment rails,
repair networks, FNOL document intake. People: adjusters consume triage +
pre-populated files (**visibly-right pre-population is the adoption mechanism**);
SIU consumes ranked referrals and co-designs referral reasons; claims leadership
owns STP policy; actuarial monitors leakage. Replaces uniform manual adjudication
queues.

**ROI contract.** Levers: cost reduction (cycle time, adjuster touches, loss-
adjustment expense) + loss avoidance (leakage↓, fraud referrals that convert) +
revenue-adjacent retention (claim NPS is the insurance loyalty event). Illustrative
(reference: P&C carrier, 500k claims/yr, $900M indemnity + $90M LAE): documented
programs report double-digit cycle-time reductions and fraud-referral hit-rate
improvements (company/vendor-reported — the family's honesty caveat, priced into
p(success); evidence 12 §16.14). Planning assumptions: **LAE −8% ≈ $7M/yr** (STP
share + touch reduction on fast-track), **leakage −0.5% of indemnity ≈ $4.5M/yr**,
referral-hit-rate gains freeing SIU capacity. Customer investment order
$500–900k/yr. **E[ROI] ≈ 5–10×**. Measurement: cycle time by path; **STP leakage
audits** (re-adjudicating random samples of auto-paid claims — the below-the-line
sampling of this domain); referral hit rate vs SIU capacity; NPS by path; phased
comparison by line of business. Guardrails: overpayment rate on STP, false-referral
burden on honest customers, regulator complaint rates. The leakage-audit + hit-rate
readout is the true-up instrument. p(success): document-pipeline quality and the
selective-label discipline are the technical risks; the automated-denial third rail
is the governance risk (structurally avoided); CAT regimes are the tail risk (priced
as a named scenario).

**The agent.** Build: composes severity/fraud/extraction models per line; proposes
STP allowlists with leakage-risk estimates (A1 — claims leadership + compliance
sign). Run: FNOL path assignment (L3) within the allowlist policy (**A2 for
payment-direction paths only**; denial-direction routing always lands on a human);
SIU referral queueing; document extraction + file pre-population (A2 with
field-confidence routing). Monitor: path-mix drift, STP leakage samples, referral
conversion, extraction accuracy per field, CAT-mode triggers. Explain: referral
reason codes; per-path cycle/leakage readouts; extraction provenance (every field
traceable to its source span). Improve: reward = **(LAE saved + leakage avoided +
referral value) − overpayment − false-referral burden**; learns path assignment from
audited outcomes; proposes allowlist expansions with the leakage evidence attached
(A1); tunes referral thresholds to SIU capacity (A3 in bounds).

**Data plan.** Sources: claims platform history, policy/coverage, FNOL documents +
photos, SIU dispositions, payment/repair events. Entities: claimant/provider/shop
graph. Labels: SIU outcomes (selective — managed), leakage-audit findings, claim
development curves. Action+outcome: every path decision + audited outcome; the
random-referral and leakage-audit slices are the deliberate unbiased-data purchases.
Refinement: extraction QA per field, development-aware label maturation, CAT
tagging. Boundary: their claims/weights; our per-line severity priors, document
templates, referral-reason patterns.

**Levels:** CL-1 SIU queue re-ranking (no customer-facing change — immediate
capacity value) · CL-2 + triage path assignment with human release · CL-3 + STP
instant-pay inside allowlists (A2, payment-direction only) · CL-4 + photo damage
estimating + subrogation-opportunity detection. **Deployment:** E1 expected; L3
FNOL + L1 development re-scoring; CAT overrides as configuration. **Governance:**
NAIC AI model bulletin governance program (inventory, testing evidence,
adverse-impact review); state unfair-claims-practices law constrains automated
denials — **the module never automates denial**; documented reason codes for
referrals; fairness testing on referral rates; PHI handling where health-adjacent
(evidence 15 §21; evidence 12 §16.11).

**Failure modes → countermeasures:** fraud model over-referring (SIU flooded, honest
customers harassed) → referral thresholds tied to SIU capacity (A3) +
false-referral guardrail. STP leakage discovered late → leakage audits are standing
product, not a project. Automated-denial scandal → structural: no denial path exists
to automate. CAT events breaking path models when volume matters most → CAT modes +
override policy rehearsed as configuration. Document-extraction silent corruption →
per-field accuracy audits + confidence-routed review queues.

---

## 16. Band-B solution sketches

Strong ROI, higher variance (kernel D4). Each sketch is complete at its altitude:
the **anatomy delta** against the nearest full spec, the **ROI contract shape**, and
the **condition** — the D1 ROI/risk fact — that would justify promoting it to a full
S-n spec. None of these are gated on time or capability; they are gated on the
scoring in doc 02.

### 16.1 B-1 · Dynamic Pricing & Discount Governance

**Anatomy delta (vs S-5 + S-11):** M-4 demand forecasting + causal elasticity
identification (M-7 — price endogeneity is the defining correctness problem:
historical price variation is confounded by the pricing policy that set it) + M-11
optimization → **closed-loop pricing within bands** (price floors/ceilings, margin
floors, change-frequency caps, MAP/legal constraints as hard policy). Censored
demand (stockouts bias elasticities) inherits S-5's correction. The quote-side
variant (CPQ discount governance) is task-in-CRM at deal time.
**ROI contract shape:** revenue lift + margin expansion; measured by **price
experiments/switchbacks** (interference makes plain A/B invalid — evidence 12 §S5);
guardrails: margin, volume, price-perception/complaint indices, competitor-response
monitors. Illustrative lever: documented programs move revenue 1–3% / margin
0.5–2 pp on covered categories. E[ROI] typically 3–8× — with the widest measured
variance in the family and the Zillow lesson as the named tail risk: **bounded
authority + regime monitors are non-negotiable policy** (evidence 12 §S6; evidence
15 §S6 "automation beyond safe frontier").
**Full-spec condition:** an account concentration (retail/CPG/travel/B2B CPQ) where
the elasticity-identification data exists (price variation or the license to create
it experimentally) — that single fact dominates p(success); without it the module is
a forecast, not a pricing solution.

### 16.2 B-2 · Employee Attrition (aggregate-first)

**Anatomy delta (vs S-7):** S-1's methodology aimed at attrition labels, delivered
**exclusively through S-7's report→forum pattern** — aggregate-level driver analysis
to HR/leadership; **no automated individual action, no individual flags to
managers** (the documented reputational minefield; EU AI Act high-risk class for
employment decisions). Small-n honesty (uncertainty reporting, refusing granularity)
and proxy screening are gate checks; works-council/legal engagement is a
qualification artifact, not a late veto (evidence 12 §28, §S6-cause-6; evidence 15
§36).
**ROI contract shape:** cost avoidance (regretted-loss reduction × fully-loaded
replacement cost, typically 50–150% of salary); measured by **program-level phased
comparisons** of driver-targeted interventions (comp bands, manager load, mobility
paths) — never individual treatment tracking. E[ROI] solid but variance high because
the action lever is organizational policy.
**Full-spec condition:** a customer with ≥5k employees (small-n floor), a named CHRO
owner, and works-council/legal sign-off obtained at qualification — governance fit
is the whole p(success) story here.

### 16.3 B-3 · Ticket Triage & Service Automation

**Anatomy delta (vs S-2's queue pattern):** M-9 NLP classification (routing,
priority, disposition) with **abstention as a first-class output** and
confidence→action mapping in the policy layer; disposition-label noise is the
defining correctness problem (agents close tickets under the wrong code — label
QA is part of the data plan). Assisted routing (suggested queue, human confirms)
and auto-routing above confidence thresholds are autonomy classes per queue
(A0/A2 — customer-chosen). The deflection/resolution level (LLM/RAG with tool
access) adds grounding + citation gates, intent allowlists, monetary caps, and
**resolution-quality sampling** — containment is a vanity metric; repeat-contact and
true resolution are the honest ones (the documented containment-vs-resolution arc;
evidence 12 §7–8, §S6; evidence 15 §8–9).
**ROI contract shape:** cost reduction (handle time, misroutes, deflected
contacts) + CX lift; measured by **phased rollout by queue** with misroute-rate and
repeat-contact guardrails. E[ROI] 3–6×; the risk is measurement dishonesty
(deflection theater), which the contract's metric choice neutralizes.
**Full-spec condition:** ≥100k tickets/yr and a support org that owns its taxonomy
(or funds fixing it) — label quality is the p(success) gate.

### 16.4 B-4 · Document & Workflow Automation (touchless AP · contract obligations · KYC)

**Anatomy delta (vs S-12's extraction layer):** M-9 IDP/LLM structured extraction
with **schema-constrained outputs + deterministic validators as the authority**
(checksums, referential checks, range rules — never the LLM's confidence alone),
confidence-routed review queues, and **below-the-line audit sampling of the
touchless path** (random re-work of auto-posted invoices / auto-passed documents).
Touchless eligibility is a conservative allowlist policy exactly as S-12's STP.
Three wirings on one anatomy: AP (ERP posting + exception queues), contract review
(clause flags + obligations tasks — report→lawyer, attorney approval structural),
KYC onboarding (risk-tiered flows, hard stops; adversarial-document and
demographic-parity gates per the documented NIST/FRVT discipline) (evidence 12
§25–27, §31; evidence 15 §32–35).
**ROI contract shape:** cost reduction (cost per invoice/document, cycle time) +
risk reduction (duplicate/fraud catch, compliance findings avoided); measured by
**touchless rate × posting-audit error bound** — the audit sample *is* the ROI
denominator's integrity. E[ROI] 3–7×, tight variance (the family's benchmarks are
mature — evidence 12 §S7 routine tier).
**Full-spec condition:** document volumes ≥250k/yr in one lane, or attach demand
from ≥2 deployed modules needing the extraction component (the kernel's reuse
admission rule, D5).

### 16.5 B-5 · Supplier Risk & Procurement Intelligence

**Anatomy delta (vs S-2 + S-5):** M-1 scoring aimed at supplier delay/default/
quality labels + external-data enrichment (the component this module uniquely
demands) + S-5's ERP wiring; actions are task-in-procurement (dual-source, expedite,
buffer, audit) with playbooks per risk driver. Selection bias (you only observe
suppliers you chose) and sparse default labels (censoring + external priors) are the
correctness core.
**ROI contract shape:** loss avoidance (disruption cost avoided — measured against a
matched-supplier baseline; the honest design acknowledges disruption is rare and
lumpy, so the contract leans on leading indicators: expedite spend, OTIF recovery,
single-source exposure burn-down) + working-capital (buffer right-sizing). E[ROI]
2–5× with fat-tailed upside in disruption years.
**Full-spec condition:** manufacturing/logistics account concentration + the
external-data component justified by ≥3 catalog use cases (kernel reuse rule) — as a
single-module data buy it rarely clears D1.

### 16.6 B-6 · Healthcare Operations (no-show & denials)

**Anatomy delta (vs S-2/S-4):** M-1 scoring on scheduling/claims-ops labels with
task-in-EHR/RCM wiring (overbooking policies, reminder/transport interventions,
denial-workqueue prioritization, clean-claim edits); **assistive-only actions**;
PHI-grade governance (BAA, minimum-necessary access, de-identification in
refinement). The Epic-sepsis lesson is the family's named correctness warning:
external validity and alert-burden calibration are gate checks, not aspirations
(evidence 12 §S6; evidence 15 §34).
**ROI contract shape:** revenue recovery (denials overturned/prevented, no-show slot
recovery) + cost reduction (rework); measured by phased comparison per
clinic/workqueue with equity guardrails (no-show interventions must not become
access penalties — fairness screen on intervention distribution). E[ROI] 3–8× on
documented denial-prevention economics.
**Full-spec condition:** a provider-side design customer with RCM ownership and BAA
posture agreed at qualification; healthcare governance cost is fixed overhead, so
D1 favors accounts with ≥$50M/yr denial exposure.

### 16.7 B-7 · Credit Underwriting & Limit Management

**Anatomy delta (vs S-4/S-10):** M-1 under **full SR 11-7 + ECOA/FCRA discipline as
legal correctness**: reject inference (selection bias is regulated here, not just
statistical), vintage validation, adverse-action reason codes generated per
decision, fairness testing (disparate-impact metrics + less-discriminatory-
alternative searches) as a standing gate, swap-set analysis as the
champion/challenger economics (evidence 12 §15; evidence 15 §20). Policy engine
wiring (cutoffs, pricing grids, review bands); **never auto-decisioning in the
denial direction without the regulated adverse-action machinery in place** — and
the module ships that machinery.
**ROI contract shape:** loss avoidance (charge-off bps at matched approval rate) +
revenue lift (swap-in of good approvals); measured by **vintage curves +
swap-set analysis** — slow labels make this the longest true-up cycle in the
portfolio, priced accordingly (higher fixed anchor, patient success component).
E[ROI] strong at portfolio scale; variance dominated by macro regimes.
**Full-spec condition:** a lender design customer whose MRM function co-signs the
validation pipeline at qualification; the module's examiner-legible artifacts are
the product's differentiation, so the first account must exercise them fully.

### 16.8 B-8 · IT & Security Operations (AIOps · vulnerability prioritization · containment)

**Anatomy delta (vs S-8's pattern aimed at digital infrastructure):** M-5 anomaly +
correlation (topology-aware — CMDB quality is the p(success) gate) with **graduated
authority as the product's spine**: detection → correlation → assisted runbooks →
bounded auto-remediation with kill-switches, blast-radius limits, and auto-expiring
actions; vulnerability prioritization is S-2's queue pattern on exploit-likelihood
scores (EPSS-class + asset context) wired to patch-workflow SLAs (evidence 12
§22–24; evidence 15 §28–31).
**ROI contract shape:** cost reduction (MTTR, alert fatigue, patch effort focused)
+ risk reduction (exposure-days on exploited vulns, dwell time); measured by
MTTR-by-class + automation success rate + exposure-day burn-down; **one
automation-made-it-worse incident freezes programs** (documented), so the
graduated-authority evidence ledger is both the safety case and the sales asset.
E[ROI] 2–5×, with risk-reduction value partially non-cashable (priced via the
risk-reduction lever honestly, per D1's return classes).
**Full-spec condition:** attach demand — this family sells best on the shared
foundation after two-plus modules prove the agent-operations pattern; standalone it
competes with a dense incumbent tool market (doc 02 scores it accordingly).

---

## 17. Cross-solution syntheses

### 17.1 Anatomy mapping — S-1…S-11 at a glance

The catalog read vertically (the factory's proof: methodologies repeat, correctness
rhymes, four action patterns cover every row — evidence 12 §S1; evidence 15 §S1):

| S | Module owner (customer) | Cadence/latency | Action pattern | Measurement core | Agent autonomy frontier | Governance frontier |
|---|---|---|---|---|---|---|
| S-1 | Retention/CS leader | Weekly–monthly · L1 (opt. L3) | Task-in-CRM + report→council | Permanent holdout; uplift cells | A2 contact · A1 concessions · A3 thresholds | GDPR profiling; offer fairness; SR 11-7/NAIC variants |
| S-2 | RevOps | Daily · L1 (opt. L2) | Task-in-CRM (queues/SLAs) | Randomized routing experiment; exploration slice | A2 queues · A3 exploration rate | Proxy-bias screen; enrichment permissions |
| S-3 | Growth + finance | Daily sync · L1 | Policy engine (audience/budget) + report | Geo tests; promo holdouts; cohort calibration | A2 sync · A1 budget shifts | Consent on export; discount fairness |
| S-4 | Collections strategy | Daily by cycle · L1 | Policy engine + dialer queues | Champion/challenger cells; net recovery | A2 digital · human calls · A1 settlements | FDCPA/Reg F · CONC/Consumer Duty · SR 11-7 |
| S-5 | Demand-planning lead | Daily · L1 (L2 fresh) | Report→planner + exceptions | FVA; phased by category | A2 forecasts · A3 exceptions · A0 plans | Override audit; version control |
| S-6 | Replenishment + finance | Daily · L1 | Task-in-ERP → bounded closed-loop | Phased before/after; acceptance/edit distance | A0→A2 per segment (customer choice) | Spend caps; segregation of duties |
| S-7 | Exec forum owner | Editions · L1 | Report→decision forum with log | Decision-adoption + forecast honesty | A0 decisions · A2 detection/drafting | Sensitive-driver access; causal caveats |
| S-8 | Reliability engineering | L3 detect + L1 score | Task-in-CMMS (work orders) | Phased by asset class; confirmed-alert precision | A0/A1/A2 per asset class · A3 thresholds | Functional-safety boundary; OT security; MoC |
| S-9 | Marketing/growth ops | Daily · L1 | Policy engine (journeys in caps) | Send/hold holdout per cell | A2 sends · A1 audiences/copy · A3 pacing | CAN-SPAM/CASL/GDPR; suppression integrity |
| S-10 | Fraud/AML strategy | **L4** decide + L1 triage | Policy engine in auth path + case tasks | Champion/challenger + exploration slice; below-the-line audits | A2 in-band decisions · A1 emergency rules · A3 in-band thresholds | SR 11-7; PSD2/SCA; decline-rate fairness; SAR controls |
| S-12 | Claims operations | L3 FNOL + L1 | Policy engine (paths) + task-to-SIU | STP leakage audits; referral hit rates; phased by line | A2 payment-direction only · A0 denial-direction | NAIC bulletin; unfair-claims law; PHI |
| S-11 | CX decisioning owner | **L4** | Policy engine (decision API) | Global holdout + per-arm stats; off-policy eval | A2 arbitration · A1 catalog · A3 exploration | Offer fairness; consent; decision logging |

Three structural observations. **(1) Four action patterns cover all twelve rows**
(evidence 12 §S4) — report→forum, task-in-system-of-work, policy engine, bounded
closed-loop — and most modules run two simultaneously: an action layer harvesting
today's value and a report layer (S-7's machinery) changing tomorrow's business.
**(2) The autonomy frontier is a governance configuration, not a maturity clock:**
every module states which action classes sit at A0/A1/A2/A3 and what evidence moves
one — the customer chooses positions; the agent supplies the evidence. **(3) Latency
follows decision physics:** ten of twelve modules are batch-first because enterprise
decisions are mostly batch decisions; L4 appears exactly where the decision window
demands it (S-10 authorization, S-11 touchpoints).

### 17.2 Shared-wiring inventory — the connector reuse frontier

Which systems of action recur, and which modules they serve — build once, attach
everywhere (evidence 12 §S3: component reuse is even denser than methodology reuse):

| Connector family | Serves | Read | Write |
|---|---|---|---|
| **CRM** (Salesforce/HubSpot/Dynamics) | S-1 S-2 S-3 S-9 S-11 (+B-3) | Accounts, activities, **field history** | Scores, reason codes, tasks w/ SLA, activity log |
| **Warehouse/CDP** (Snowflake/BigQuery/Databricks/Postgres) | All twelve | Feature/label sources w/ lineage | Score marts, audiences, decision logs |
| **Billing / AR / core banking** (Stripe/Zuora/NetSuite/core) | S-1 S-3 S-4 B-7 | Subscriptions, invoices, payments, delinquency | Gated: discounts/entitlements |
| **Marketing automation / ESP** (Braze/SFMC/Iterable) | S-1 S-3 S-9 S-11 | Engagement events, suppression state | Segments, journeys, suppression lists |
| **ERP / planning** (SAP/Oracle/RELEX/o9) | S-5 S-6 B-4 B-5 | Sales, inventory, master data, lead times | Forecasts, exceptions, draft POs |
| **CMMS/EAM + historian** (Maximo/SAP PM · PI) | S-8 | Work-order history, sensor streams | Draft work orders, closeout capture |
| **Dialer / collections platform** (FICO DM class) | S-4 | Contact events (reconciliation) | Queue order, treatment codes, cell IDs |
| **Payment gateway / auth stream** | S-10 | Transaction stream, chargebacks | In-line decisions (A2, in-band) |
| **Claims platform + SIU case mgmt** (Guidewire class) | S-12 | Claims history, dispositions | Path assignments, referrals, pre-populated files |
| **Ticketing / support** (Zendesk/Jira) | S-1 S-7 B-3 | Tickets | Escalations, tracked actions, routing |
| **Ad platforms** (Google/Meta) | S-3 S-11 | Lift-study results | Value-based audiences, conversion values |
| **BI layer** (Power BI/Tableau/Looker) | All report layers | — | Report editions, guardrail panels, ROI readouts |
| **EHR / RCM** (healthcare variant) | B-6 | Schedules, claims, denials | Workqueue priorities, tasks |

### 17.3 The shared agent + data foundation — how modules compound on one customer

Cross-cutting product components every module consumes (the true shared spine; the
per-solution work above them is configuration + connectors + domain policy):

1. **Snapshot/feature layer with time-travel** (as-of joins — the PIT substrate)
2. **M-2 entity/identity resolution** (the gate's entity test; the identity backbone
   S-11 arbitrates on)
3. **The decision-policy engine** (thresholds/caps/eligibility/approvals/
   kill-switches as versioned, auditable config)
4. **The holdout/experiment manager** (holdouts, cells, exploration slices,
   below-the-line samples — the measurement *and* the reward-data engine)
5. **The drift + guardrail monitor** (inputs, scores, calibration, guardrail panels)
6. **The audit ledger** (score→action→outcome with model/policy/agent versions)
7. **The ROI readout generator** (§2.3 — the billing instrument)
8. **The agent itself (M-10)** — one per customer, post-trained on their data
   (kernel D2-3), operating every module through the same seven components.

**The compounding mechanics (kernel D8 portfolio effect, D7-3):** the first module
pays for the foundation — connectors, identity graph, snapshot history, the agent's
fluency in the customer's systems. Every subsequent module reuses it, so the
marginal module's customer investment falls while its return holds — which is why
expansion pricing is designed to be obvious. The data compounds the same way: S-1's
treatment cells train S-9's send/hold policy; S-2's routing outcomes feed S-11's
arbitration; S-5's FVA ledger tunes S-6's release policy; S-10's exploration slice
sharpens the whole risk family. **One agent, one reward ledger, many modules** — the
agent's cross-module view (this customer's caps, this customer's consent state, this
customer's guardrails) is itself the contradiction-prevention layer no per-module
point solution has. Per-customer weights stay the customer's; the generalized
patterns (feature templates, playbook priors, threshold-economics benchmarks,
condition libraries) raise every future agent's starting point — the moat's second
layer (evidence 06; kernel D7-3).

**Bundles the field sells** (one wiring, multiple heads): **Revenue Intelligence** =
S-1+S-2+S-3 (one CRM/warehouse wiring, three heads; the B2B SaaS default) ·
**Financial-services risk family** = S-4+S-10 (+B-7) + S-1-deposit-attrition under
one SR 11-7-legible governance surface · **Insurance family** = S-12 +
S-1-lapse-variant under one NAIC governance program · **Operational family** =
S-8+S-5/S-6 (+B-8) · **Customer-decisioning capstone** = S-11 over any customer-
family bundle · **Exec surface** = S-7 attached to anything (the wholesale layer as
its own SKU).

### 17.4 Methodology → solutions fan-out

The factory's cardinality, explicit (evidence 12 §S3; evidence 10/13). Bold = the
methodology is the module's spine; ○ = component role:

| Methodology | S-1 | S-2 | S-3 | S-4 | S-5 | S-6 | S-7 | S-8 | S-9 | S-10 | S-12 | S-11 | Band-B |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **M-1 tabular supervised** | **●** | **●** | **●** | **●** | ○ | — | **●** | ○ | **●** | **●** | **●** | ○ | B-1 B-2 B-5 B-6 B-7 |
| **M-2 entity resolution** | ○ | ○ | ○ | ○ | ○ | ○ | — | ○ (assets) | ○ | ○ (graph) | ○ (rings) | **●** (identity) | B-4 (vendors) |
| **M-3 segmentation** | ○ | ○ | ○ | ○ | ○ (cold start) | ○ | ○ | — | **●** (cells) | ○ | ○ | ○ | — |
| **M-4 forecasting** | — | — | ○ (trajectories) | ○ (roll rates) | **●** | **●** | ○ (decomposition) | ○ (RUL-adjacent) | ○ (pacing) | — | — | — | **B-1** |
| **M-5 anomaly** | ○ (usage collapse) | — | — | — | ○ (demand) | ○ (supply) | **●** (KPI scan) | **●** (condition) | ○ (deliverability) | ○ (attack drift) | — | — | **B-8** |
| **M-6 survival** | ○ (timing) | — | ○ (tenure) | ○ (time-to-pay) | — | — | — | ○ (RUL) | ○ (re-engagement) | — | ○ (development) | — | B-7 (vintages) |
| **M-7 uplift/causal** | ○ (persuadability) | ○ (incrementality) | ○ (promo) | ○ (treatment) | — | — | ○ (experiment lane) | — | ○ (send/hold) | — | — | **●** (objectives) | **B-1** (elasticity) |
| **M-8 recommendation/NBA** | ○ (arbitration) | — | — | ○ (ladder arbitration) | — | — | — | — | ○ (message arb.) | — | — | **●** | — |
| **M-9 documents/NLP/embeddings** | ○ (support text) | ○ (call notes) | — | ○ (hardship docs) | — | — | ○ (VoC) | ○ (work-order mining) | ○ (drafting, gated) | — | **●** (FNOL docs) | — | **B-3 B-4** |
| **M-10 agent (Auto-RL)** | **all modules — the operator** | | | | | | | | | | | | |
| **M-11 optimization/OR** | ○ (budget) | ○ (capacity) | ○ (budget) | ○ (treatment mix) | — | **●** (policies) | — | ○ (scheduling) | ○ (volume/timing) | — | — | ○ (budget arb.) | **B-1** |
| Graph/streaming (D5 toolbox) | — | — | — | — | — | — | — | ○ (streams) | — | **●** (rings/velocity) | ○ (rings) | — | B-8 (topology) |

Reading: **M-1 + M-2 + the policy engine underpin ten of twelve modules** — the
tabular methodology is the factory's workhorse exactly as the vocabulary predicts
(evidence 10/13 prevalence). **M-7 is the highest-leverage single component** (it
upgrades six modules from propensity to persuadability, and every deployment's
holdout/cell design accumulates its training data as a by-product — the data plan
pays for the methodology). **M-10 has no column of its own because it is the row
under all of them:** the agent is what turns the other ten from a toolbox into an
operated solution (kernel D2-2).

---

## Appendix A — Tensions for kernel review

Recorded per plan convention: frictions surfaced while elaborating; the
kernel-conservative reading is applied in the body until each resolves.

**T-1 · Band membership of S-3 (CLV) and S-6 (replenishment action).** Kernel D4's
Band-A examples name neither CLV nor replenishment-as-action, yet both carry fixed
IDs inside the S-1…S-9 block and both are structurally load-bearing (S-3 is the
value-weighting layer of the customer family; S-6 is the action half of the kernel's
"demand forecasting" entry). This catalog specs both in full. **Ask:** doc 02 v2 to
score them explicitly and the kernel to confirm Band A membership (or re-band with
the specs retained at full depth as attach modules).

**T-2 · UC numbering for the promoted Band-A entries.** Fraud & financial-crime
decisioning, claims triage, and next-best-action are Band A per kernel D4 but had no
fixed UC IDs. This catalog assigns UC-10/11/12 ↔ S-10/11/12. **Ask:** doc 02 v2 to
ratify the numbering so the ID space stays append-only.

**T-3 · Label physics vs true-up cadence (D8).** For S-1 (90-day windows), S-4/S-3
(multi-cycle labels), and B-7 (vintages), the complete incrementality readout
matures one or more quarters after actions begin. The body resolves this by matching
each contract's **true-up cadence to its label cadence**, with leading indicators
reported but never billed on. **Ask:** kernel/CFO to bless "true-up follows label
maturity" as the D8 default, including the slow-label extreme (credit vintages).

**T-4 · Autonomy-class defaults (kernel open question 5).** This catalog proposes
per-module defaults (§17.1 column 6) and three cross-cutting rules: (a) *contact
may be A2; concessions are A1*; (b) *payment-direction automation may be A2;
denial-direction decisions never are*; (c) *A3 exists only inside pre-approved
bounds with per-change ROI logging*. **Ask:** kernel to adopt these three as the
D2-5 defaults, with per-customer deviation always available as governance
configuration.

**T-5 · The measured-ROI reward vs guardrail gaming (D7-2).** Training agents on the
measured ROI signal risks Goodhart effects where the measurement design is weak
(e.g. S-7's forecast honesty, B-3's deflection theater). The body's convention:
**the reward always carries the guardrail penalty inside it** (S-4's
complaint-weighted reward is the pattern). **Ask:** doc 08 to standardize
guardrail-in-reward as the reward-engineering rule, and doc 07 to include
"measurement-design strength" as an explicit p(success) factor.

**T-6 · Risk-reduction value that never cashes (D1).** S-10's fraud-loss avoidance
and B-8's exposure-day reduction are real returns the customer's P&L only shows as
absence. The ROI contracts here measure them against modeled counterfactual
baselines (champion/challenger makes this rigorous in S-10; B-8 is weaker). **Ask:**
kernel to confirm counterfactual-baseline returns are first-class in the D1 return
classes, and doc 06 to define how success-linked components price against them.

**T-7 · L4's return to scope.** v1 excluded request-time serving portfolio-wide; v2
re-admits it (S-10, S-11) on future-state grounds. The anti-portfolio boundary is
now purely the kernel's: autonomous high-stakes decisions without human gates.
**Ask:** kernel to note the exclusion's removal so no sibling doc re-imports it as
a rule.

---

*End of catalog. Twelve Band-A module specs (S-1 reference implementation deepest) +
eight Band-B sketches + anatomy + syntheses, every module carrying its ROI contract,
agent operating definition, and data plan; evidence cited inline as (evidence NN §…)
per plan conventions; vendor-reported magnitudes flagged as such wherever quoted; all
ROI arithmetic is illustrative planning math, superseded by engagement-specific
models at contract time.*
