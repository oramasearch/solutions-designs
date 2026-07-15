# Solutions catalog — the sellable modules (S-1…S-9)

> **Status:** Draft v1 — 2026-07-15 · **Author:** CPO+CTO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits commercial detail from evidence 07/08.
>
> **Kernel-bound.** This document elaborates **D4 (solutions: the sellable unit)** of
> [`00-strategy-kernel.md`](00-strategy-kernel.md) and pairs each solution `S-n` with
> the kernel's Tier-1 use case `UC-n` (D3). Nothing here contradicts the kernel; the
> gates in D7 (security · correctness floor · engine co-sequencing · one reference
> architecture per environment class · shadow production before automation) bind every
> spec below. Genuine conflicts surfaced while drafting are collected in
> [Appendix A — Tensions for kernel review](#appendix-a--tensions-for-kernel-review).

---

## 1. What this catalog is

Per the kernel's vocabulary (D1, [`../vocabulary.md`](../vocabulary.md)): a **solution**
is a methodology **applied correctly** for the real conditions **and wired to the
business action** that realizes the value. Solutions are the **sellable unit** — each
ships as a **priced module** on the Orama Cloud v3 Enterprise base (kernel D6; pricing
mechanics are the CFO's domain, [`06-financial-plan.md`](06-financial-plan.md)); revenue
expansion is **module attach** along the reuse frontier.

This catalog specifies the nine launch modules S-1…S-9 (pairing UC-1…UC-9), the shared
anatomy they all instantiate, the cross-solution syntheses (who owns what, which wiring
recurs, which W2/W3 methodologies upgrade which modules), and one-paragraph sketches of
the gated Tier-2 solutions.

**Availability is co-sequenced with the methodology waves (kernel D2/D7-3):**

| Ships on | Modules | Methodology dependency | Engine dependency |
|---|---|---|---|
| **Wave 1 (now)** | S-1 churn (v1) · S-2 lead scoring · S-3 CLV · S-4 collections · S-7 KPI drivers (v1) · S-9 email outbound | M-1 tabular supervised · M-2 entity resolution · M-3 segmentation | R1 (local run) + R2 (correctness gate) |
| **Wave 2** | S-5 demand forecasting · S-6 replenishment support · S-8 predictive maintenance · S-7 (full anomaly layer) | M-4 forecasting · M-5 anomaly · M-6 survival | R3 (one-button deploy) + R4-lite (materialization) |
| **Wave 3 (upgrades)** | +M-7 uplift into S-1/S-2/S-4/S-9 · +M-8 NBA-lite into S-9 · +M-9 documents (T2 enabler) | M-7 · M-8 · M-9 | R4 + R6 (governance) |

---

## 2. The solution anatomy — the template every module instantiates

Adopted from evidence 12 (Synthesis 1) and confirmed by evidence 15 (cross-cutting
synthesis 1); fixed by kernel D4. Every S-n below is one instantiation of this
seven-stage pipeline — model output **never touches the business directly**:

```
use case (the problem)
   │
   ▼
METHODOLOGY            the reusable arrangement of AI methods (M-n; few, heavily reused)
   │
   ▼
CORRECTNESS            what the real context demands: point-in-time snapshots, label
ADAPTATIONS            windows, temporal validation, entity resolution, imbalance +
   │                   calibration, censoring, selection bias, drift, train/serve
   │                   consistency — ENFORCED BY THE PRODUCT'S CORRECTNESS GATE (evidence 06)
   ▼
DECISION POLICY        the explicit layer between score and world: thresholds, tiers,
   │                   budgets, contact/frequency caps, eligibility rules, approval gates,
   │                   kill-switches. The policy engine — never the model — enforces law.
   ▼
ACTION INTEGRATION     one of four patterns: report→human decision · task-in-system-of-work
   │                   · policy engine · closed-loop automation with guardrails
   ▼
MEASUREMENT LOOP       shadow production first (kernel D7-5), then holdout / uplift /
   │                   phased rollout + guardrail metrics; outcomes feed back into the
   │                   model (labels), the policy (thresholds), the playbook (actions)
   ▼
GOVERNANCE             identity-scoped access (customer SSO), audit trail on every score→
   │                   action→outcome, approval gates on sensitive actions, domain overlay
   │                   (SR 11-7 / NAIC / ECOA-FCRA / FDCPA-Reg F / GDPR where relevant)
   ▼
ADOPTION               shadow/side-by-side periods, SHAP reason codes, role redesign,
   │                   named owner whose Monday changes
   ▼
changed business outcome (the value)
```

Solutions that skip a stage do not degrade gracefully; they stall (no action
integration), silently self-congratulate (no holdout), or quietly rot (no drift
monitoring) — evidence 12 executive orientation. Both compendia agree the pilot →
production gap is dominated by the applied layers, not the model: workflow/process
redesign is ~70% of the implementation challenge (BCG 2024, via evidence 15), and the
documented catastrophes (Zillow, Epic sepsis, Watson for Oncology) all failed at
correctness adaptations, wiring, or measurement — rarely at methodology (evidence 12 §S6).

**Zetta's differentiation, restated for this catalog:** the correctness-adaptation stage
is **product, not consulting** — the correctness gate validates point-in-time discipline,
leakage, schema/type checks, and entity resolution *before any graph deploys* (evidence
06, "The Correctness Gate"). The canonical correctness proof is the **FedEx-Freight
division-correct test**: results resolve to the right entity — a single division/
subsidiary, never several blended into an averaged, flattering blur (evidence 08
success-metrics). Every module below inherits that gate; the per-module spec lists what
the gate must check *additionally* for that solution.

### 2.1 Definition of done (kernel D4, verbatim — binding for every S-n)

> *deployed in the customer environment · passed the correctness gate · wired to at
> least one named business action · measured against a holdout or baseline · zero
> governance violations.*

A module that has not met all five is **not done** and is not referenceable.

### 2.2 The standard spec template

Every S-n below is written to the same eleven fields, so the catalog can be read
vertically (one field across all solutions) as well as horizontally:

1. **Module framing** — name, UC pairing, one-line promise, methodology composition (per kernel D2/D3).
2. **Correctness adaptations** — the specific disciplines this context demands; what the correctness gate checks.
3. **Business wiring — actions & decision policy** — named actions, thresholds/budgets/caps, eligibility.
4. **Business wiring — systems of action & connectors** — where scores land; connector requirements.
5. **Business wiring — people & cadence** — named roles, operating rhythm, what it replaces.
6. **Human-in-the-loop design** — what is assisted vs automated; escalation and approval gates.
7. **Measurement loop** — shadow production design, holdout/uplift design, guardrails, **the proof artifact the customer sees**.
8. **Deployment shape** — environment classes (kernel D5), scoring cadence, latency class, retraining triggers.
9. **Governance** — identity scoping, audit, approval gates, domain-regulatory overlay.
10. **Packaging** — module v1 contents; upgrade path (module attach along the reuse frontier).
11. **Design-partner delivery plan** — the 12–16-week week-band breakdown with exit artifacts per the 120-day program phases (kernel D6: qualify → secure env → build+govern → shadow production → convert); **failure modes to design against**, each with its countermeasure.

**Latency classes used throughout:** **L1** batch (daily/weekly, hours of latency
tolerated) · **L2** intraday (hourly, minutes) · **L3** event-triggered near-real-time
(seconds; used sparingly — e.g. cancellation-page saves) · **L4** request-time (tens of
ms; *no Tier-1 module requires L4* — deliberate, per the anti-portfolio's exclusion of
real-time decisioning).

**Environment classes (kernel D5, D7-4):** **E1** regulated cloud VPC (customer's
AWS/Azure/GCP account) · **E2** K8s private cloud · **E3** bare-metal / on-prem GPU.
Every module must be deliverable on all three; the *first* deployment of each class
becomes the reference architecture before widening.

**The standard proof pack** (field 7's artifact, common shape): a versioned, customer-
visible dossier containing (a) the **correctness-gate certificate** (checks run, checks
passed, the entity-resolution test result); (b) the **shadow-production readout**
(model vs incumbent process, side-by-side, N cycles); (c) the **holdout/baseline
readout** (incremental effect with confidence interval, not raw response); (d) the
**guardrail panel** (complaints, cost, fairness where applicable — all inside bounds);
(e) the **audit extract** (every score→action→outcome logged, zero governance
violations). This pack is what converts a design partner (kernel D6) and what renews a
module. Its production is automated by the module, not hand-assembled.

---

## 3. Catalog overview

| ID | Module (market name) | UC | Methodology | Action pattern | Wave | Primary buyer |
|---|---|---|---|---|---|---|
| **S-1** | **Churn & Retention Program** *(reference implementation)* | UC-1 | M-1 (+M-6, +M-7) | Task-in-CRM + report→decision | W1 | CS/retention leader; CRO |
| S-2 | Lead & Opportunity Scoring | UC-2 | M-1 | Task-in-CRM (queues/SLAs) | W1 | RevOps/sales leader |
| S-3 | Customer Lifetime Value | UC-3 | M-1 (+M-6) | Policy engine (audience/budget) + report | W1 | Growth/finance |
| S-4 | Collections Prioritization | UC-4 | M-1 (+M-7) | Policy engine + dialer queues | W1 | Collections/finance ops |
| S-5 | Demand Forecasting | UC-5 | M-4 | Report→planner + exception queues | W2 | Supply chain/S&OP |
| S-6 | Replenishment Support (assistive) | UC-6 | M-4 (+M-11) | Task-in-ERP (draft orders, human-reviewed) | W2 | Supply chain ops |
| S-7 | KPI Anomaly & Driver Analysis | UC-7 | M-1/M-3 (v1) + M-5 (full) | Report→decision forum with log | W1 (v1) | CFO/COO/exec analytics |
| S-8 | Predictive Maintenance (assistive) | UC-8 | M-5+M-1 (+M-6) | Task-in-CMMS (work orders) | W2 | Reliability/maintenance |
| S-9 | Automated Email Outbound | UC-9 | M-1+M-3 (+M-7/M-8) | Policy engine (journeys within caps) | W1 | Marketing/growth ops |

Kernel D9-4 applies to every sale: **lead with one named use case** — the module — never
a generic AI-platform demo.

---

## 4. S-1 — Churn & Retention Program (UC-1) — the reference implementation

S-1 is the archetype of the whole factory (kernel D3: "anchor — Motive"). It is the
deepest spec in this catalog; every later spec is written as a delta against it. It is
also *both* an action pipeline and a decision-intelligence loop — the "retail" (per-
customer action) and "wholesale" (change-the-business report) layers run simultaneously,
which is why it compounds (evidence 12 §1, §S4).

### 4.1 Module framing

- **Market name:** Churn & Retention Program.
- **Promise:** *Which customers will leave, why, and what to do about it — deployed in
  your environment, correct by construction, measured against a holdout.*
- **Methodology composition (kernel D2):** **M-1 tabular supervised** (extract →
  point-in-time features → GBM → SHAP → scored list + driver report) + **M-2 entity
  resolution** (the correctness gate's entity layer) + **M-3 segmentation** (risk ×
  value × driver treatment cells). Upgrades: **+M-6 survival** (churn *timing*), **+M-7
  uplift** (persuadability targeting) — see Packaging (§4.10).
- **Variants absorbed by configuration, not code:** B2C high-volume (weekly batch,
  automated journeys), B2B SaaS (account-level health, human CSM actions, monthly
  cadence, heavier driver reporting — the Motive shape), non-contractual retail (churn
  = silence; label design shifts to inter-purchase-gap definitions) (evidence 12 §1.16).

### 4.2 Correctness adaptations (what the gate checks for S-1)

Churn data is time-ordered and almost every naive churn model leaks the future into the
features (evidence 12 §1.4; evidence 15 §1). The full discipline, each item a named
check in the correctness gate:

1. **Point-in-time feature snapshots.** Every feature computed *as of* prediction date
   T, using only data available at T; features keyed `(entity_id, as_of_date)`; joins
   are as-of joins, never latest-value joins. The classic leak: "support tickets last
   90 days" from a live table silently includes post-T tickets — often tickets *caused
   by the decision to leave* — producing a model that "predicts" churn by observing its
   symptoms. Gate check: every feature's lineage terminates in a snapshot ≤ T.
2. **Label windows that don't peek.** Churn defined as an event inside an explicit
   outcome window (T, T+H]; the label window starts strictly after the feature window
   ends, with a blackout gap where the operational signal (non-renewal notice,
   downgrade request) precedes the recorded churn date. H matched to the business's
   ability to act — 90 days gives a retention team time to intervene; 7 days is
   accurate but unactionable. Gate check: window arithmetic validated on real timestamps.
3. **Temporal validation, not random splits.** Out-of-time splits (train ≤ month M,
   validate M+1…M+k) on multiple rolling windows; random k-fold on time-ordered data
   trains on the future of its own test set. Gate check: split policy is out-of-time;
   report shows performance stability across windows, not one lucky split.
4. **Group-aware splitting.** Stacked monthly snapshots multiply training data but
   correlate rows; one customer's rows never straddle train/test (identity leakage).
5. **Censoring awareness.** "Didn't churn *yet*" is not "won't churn": restrict labels
   to fully observed windows in v1; the M-6 upgrade replaces this with survival methods
   (evidence 15 §1 cites the Sprint/SAS prospective right-censored design as the
   documented precedent).
6. **Imbalance handled at the decision layer.** Churn base rates of 1–5%/month are
   normal: proper scoring (log-loss), class weights, thresholds set against business
   costs; if sampling is used, probabilities recalibrated (Platt/isotonic) — retention
   economics need calibrated probabilities, not just rank order.
7. **Entity resolution (M-2).** "Customer" resolved across billing, CRM, product
   telemetry, support; households vs accounts vs users matched to the unit the business
   can act on. Mis-resolved entities produce duplicate rows (leakage) and actions aimed
   at the wrong unit. This is the **FedEx-Freight division-correct test** applied to
   churn — the gate's flagship check (evidence 08 success-metrics).
8. **Leaky-feature exclusion by construction.** Features that proxy the label ("days
   since cancellation call", AM churn-risk flags, win-back campaign membership,
   save-offer exposure, final-bill artifacts) excluded via a maintained blocklist; a
   too-good AUC (>0.95 on a hard business problem) triggers gate failure with reason —
   the published 0.99-AUC churn "case studies" are leakage warnings, not benchmarks
   (evidence 12 §1.4; evidence 15 §1).
9. **Drift discipline.** PSI on inputs, score-distribution and calibration monitors,
   per-cohort realized AUC as label windows close; retrain on schedule *and* on trigger.
10. **Train/serve consistency.** Scoring features bit-identical in definition to
    training features — one code path / one feature definition store, never a
    re-implementation in the scoring job.
11. **Causal humility in the SHAP layer.** SHAP explains the *model*, not the world;
    drivers are labeled as hypotheses for intervention design, validated by the
    measurement loop — this is the exact boundary between the report and the action.

### 4.3 Business wiring — actions & decision policy

Two levels, both first-class (evidence 12 §1.5):

**Retail level (per-customer):** the scored list, segmented risk × value × dominant
driver, drives a treatment playbook:

| Segment (risk × value × driver) | Named action | Decision policy |
|---|---|---|
| High risk · high value · any | Proactive outreach call by named CSM | SLA ≤ 5 business days; script seeded with reason codes |
| High risk · any · price driver | Plan-fit review / targeted discount | Discounts above cap require manager approval; quarterly retention budget |
| High risk · any · low-usage driver | Onboarding/success intervention | Playbook task in CS platform |
| High risk · any · support-friction driver | Service-recovery escalation | Routed to support lead with open-ticket context |
| Medium risk | Automated lifecycle journey | Contact-frequency cap (≤1 retention touch/month) |
| Any · in-collections / open complaint / vulnerable | **Excluded** | Eligibility rules enforced by policy engine, not the model |

Policy constants (thresholds per tier, budget, caps, exclusions) live in the **decision
policy layer** — versioned, auditable, changeable without retraining. The mature form
replaces raw propensity with **M-7 uplift targeting**, because contacting predicted
churners can *cause* churn — the Fidelidade "sleeping dogs" evidence: withholding
contact reduced churn ~7 pp vs control in one segment; uplift beats propensity on
retention-campaign profitability (Devriendt et al. 2021) (evidence 12 §1.5, §1.14).

**Wholesale level (change the business):** the SHAP driver report routed to product,
pricing, and service owners as a decision document on a standing cadence — recurring
drivers become roadmap items (fix the day-30 onboarding cliff, restructure the tier
over-indexing in churn, staff the queue driving escalations). This layer is S-7's
pattern embedded inside S-1 (see §10).

### 4.4 Business wiring — systems of action & connectors

Standard integration: batch score in-environment → connector push to the system where
the acting team already lives → playbook automation there. **The score must appear
where the owner works, not in a separate dashboard** (evidence 12 §1.6).

| System of action | Connector requirement (v1) | What lands there |
|---|---|---|
| CRM (Salesforce/HubSpot/Dynamics) | Read: accounts, activities, field history. Write: risk score, top-3 SHAP reason codes, tasks with owner+SLA | The retail action layer |
| CS platform (Gainsight/ChurnZero) | Write: health-score ingestion, playbook trigger | B2B variant's home |
| Marketing automation (Braze/SFMC/Iterable) | Write: suppression lists, journey triggers | Automated medium-risk journeys |
| Billing (Stripe/Zuora/NetSuite) | Read: subscriptions, invoices, payments (feature source). Write (gated): discount/entitlement application | Price-driver treatments |
| Support/ticketing (Zendesk/Jira SM) | Read: tickets (feature source). Write: escalation tasks | Service-recovery lane |
| BI layer | Publish: driver report, guardrail panel | The wholesale layer |

All connectors run inside the customer environment; no data egress (evidence 06).
Minimum viable wiring for DoD: **CRM read+write** — one named action is the floor.

### 4.5 Business wiring — people & cadence

| Role (customer side) | Responsibility |
|---|---|
| Retention/CS leader (**module owner**) | Owns the treatment playbook, budget, and the retention council |
| CSMs / retention agents | Work the task queue; personalize high-value interventions |
| Retention-marketing owner | Runs automated journeys within caps |
| Product & pricing leadership | Consumes the driver report; owns wholesale actions |
| Data/analytics counterpart | Owns label definition sign-off, holdout integrity, measurement review |
| Privacy/legal | Signs off profiling basis, suppression rules (GDPR where applicable) |

Cadence: scores refreshed **weekly (B2C) / monthly (B2B)** to match the action cycle; a
**monthly retention council** reviews driver trends, treatment performance, playbook
changes, and the decision log. Replaces reactive save-desks that engage only after a
cancellation request, and gut-feel account triage (evidence 12 §1.7).

### 4.6 Human-in-the-loop design

- **High-value B2B accounts:** human CSM decides and personalizes (assisted
  decisioning); the model orders the queue.
- **High-volume B2C:** automated journeys within policy caps; humans review the
  playbook, not each contact.
- **Escalation:** high-risk × high-value accounts route to a named owner with an SLA.
- **Approval gates:** discounts above cap → manager approval; playbook changes →
  retention council; **automation of contact is acceptable, automation of concessions
  is gated** (evidence 12 §1.8).
- **Overrides captured with reason codes**; override clusters in one segment escalate
  to the module owner (evidence 15 §1).

### 4.7 Measurement loop

**Shadow production first (kernel D7-5):** 1–2 full scoring cycles where the model list
runs side-by-side with the incumbent process (CSM intuition / existing health score);
compare hit rates on realized churn. No treatment is driven by the model during shadow.
This is also the adoption mechanism — CSMs see the list beat their intuition before it
routes their work (evidence 12 §1.13).

**Holdout design (the non-negotiable core):** a **permanent randomized holdout of 5–10%
of each risk tier** receives no model-driven intervention; incremental retention =
treated-cohort retention − holdout retention. Never raw campaign response — attributing
natural retention to the campaign because no holdout exists is the single most
documented way churn programs overstate value (evidence 12 §1.9). Mature form: uplift-
designed A/B per treatment (offer A vs B vs none), reported as saved revenue =
incremental retention × CLV − offer cost.

**Guardrails:** contact-fatigue complaints, discount-cost budget vs plan, margin
erosion, NPS treated-vs-holdout, action-execution rate (are tasks actually worked?).

**Feedback:** treatment outcomes label the next (uplift) model; the driver report
changes the playbook; playbook changes are themselves A/B tested.

**Proof artifact (the customer sees):** the standard proof pack (§2.2) instantiated —
correctness-gate certificate (incl. the entity-resolution test on the customer's own
org hierarchy), shadow readout (model vs incumbent, per-decile capture), holdout
readout (incremental retention with CI; early cycles report leading indicators — see
Appendix A, T-4), guardrail panel, audit extract.

### 4.8 Deployment shape

- **Environment classes:** E1 regulated VPC / E2 K8s / E3 on-prem — all supported; the
  Motive engagement is the operational-account reference (kernel D5 tier 1c).
- **Scoring cadence:** L1 batch weekly (B2C) or monthly (B2B); optional **L3**
  event-trigger for cancellation-page saves only (not v1).
- **Latency class:** L1 (hours). No request-time serving.
- **Retraining:** monthly–quarterly scheduled + drift triggers (PSI breach, calibration
  decay, per-segment AUC drop as labels close).
- **Footprint:** one Zetta deployment target (laptop → cluster promotion per evidence
  06 "Local-first"); the graph = connect → clean → model → index → serve, materialized
  scores indexed for the connectors.

### 4.9 Governance

- **Identity scoping:** scored list access via customer SSO; the list is commercially
  sensitive and, under GDPR, profiling of identifiable persons (evidence 12 §1.11).
- **Audit:** every score → action → outcome logged with model version + policy version
  + human decision (evidence 15 §1); the audit extract ships in the proof pack.
- **Approval gates:** concessions above cap; playbook changes; holdout exemptions
  (rare, logged, and counted — see failure mode F-4).
- **Fairness review:** who systematically receives retention discounts (economic
  benefit allocation); suppression of vulnerable-customer segments per sector rules
  (e.g. FCA Consumer Duty when sold into UK financial services).
- **Domain overlay:** none beyond GDPR/consent in the generic case; when S-1 is sold as
  *deposit/customer attrition* into banking (kernel D5 tier 1a), the **SR 11-7 model-
  risk overlay** applies — documented model development, independent validation,
  ongoing monitoring, challenger governance; when sold as *lapse/retention* into
  insurance (tier 1b), the **NAIC AI model bulletin** overlay applies (governance
  program, inventory, testing evidence). The module's audit + validation artifacts are
  designed to be examiner-legible so the overlay is configuration, not a rebuild.

### 4.10 Packaging

| Tier | Contents |
|---|---|
| **v1 (the module)** | M-1 pipeline (snapshot store, ~30–60 leakage-checked features, GBM, SHAP), M-2 entity resolution, M-3 treatment segmentation, CRM connector (read+write), decision-policy layer (tiers/caps/budget/exclusions), holdout manager, driver report, proof-pack generator |
| **+M-6 Survival Timing** (attach) | Churn *timing* — expected time-to-event per account; converts "who" into "who, when"; unlocks renewal-calendar prioritization and censoring-correct labels |
| **+M-7 Uplift Targeting** (attach) | Persuadability targeting over propensity; requires ≥1 randomized treatment cycle of data (which v1's holdout design has been quietly accumulating); sleeping-dog protection |
| **Adjacent attach** | S-3 CLV (value-weighted treatment), S-9 outbound (journey execution), S-7 (the wholesale layer as its own exec surface) |

Thin-version economics (evidence 12 §1.12): feasible in 6–10 weeks where the warehouse
is in order; the long poles are entity resolution, historical label reconstruction
(point-in-time data often doesn't exist retroactively), CRM integration, and change
management — **the model itself is days of the total effort**. Zetta's factory claim is
precisely that the long poles are productized (gate + connectors + snapshot store).

### 4.11 Design-partner delivery plan (12–16 weeks, 120-day program phases)

| Weeks | Phase (kernel D6) | Work | Exit artifacts |
|---|---|---|---|
| 1–2 | **Qualify** | One use case, one environment, one KPI signed; label definition workshop (churn event, window H, blackout); data audit (billing/CRM/product/support history depth; can point-in-time be reconstructed?); named module owner + council members | Signed scope memo; label spec; data-readiness report; RACI |
| 3–4 | **Secure env** | Zetta deployed into the chosen environment class behind customer SSO; connectors stood up read-only; governance baseline (scoped access, audit trail, approval gates) verified under network capture — **0 bytes egress** | Environment-class reference checklist; governance baseline report; security gate confirmation (kernel D7-1) |
| 5–8 | **Build + govern** | Snapshot store + entity resolution on customer data; feature set (leakage blocklist agreed); train + temporal validation; correctness gate run (incl. entity test on their hierarchy); decision-policy layer configured with owner; CRM write path enabled in staging | Correctness-gate certificate; validated model card (out-of-time metrics, stability); policy config signed by owner |
| 9–12 | **Shadow production** | 1–2 full cycles side-by-side vs incumbent; council operates on shadow output (dry-run cadence); holdout randomization armed; adoption work (reason codes in CRM, CSM walkthroughs) | Shadow readout (per-decile capture vs incumbent); council minutes + decision log started; holdout design doc |
| 13–16 | **Convert** | Treatments go live for treated cohorts; first guardrail panel; proof pack v1 assembled; conversion conversation (module price credited per D6) | **Proof pack v1**; live DoD checklist (all five conditions); expansion map (M-6/M-7/S-3 attach candidates) |

Note: the full 90-day label window closes after week 16 — the conversion decision uses
shadow-production correctness + leading indicators; the first *complete* incremental-
retention readout lands ~week 24 (Appendix A, T-4).

### 4.12 Failure modes to design against (evidence 12 §1.15, §S6; evidence 15 §1)

| # | Failure mode | Countermeasure (designed in, not hoped for) |
|---|---|---|
| F-1 | **Leakage-inflated pilot** — offline AUC 0.95+, production uselessness; credibility spent before wiring | The correctness gate blocks deploy on leakage checks + too-good-AUC review; blocklist maintained as config |
| F-2 | **Score without action** — list produced, no team owns treatments (the most common stall) | DoD requires ≥1 named wired action; delivery plan names the owner in week 1; action-execution rate is a guardrail metric |
| F-3 | **Propensity backfire** — contacting sleeping dogs causes churn | Contact caps + exclusions in v1; M-7 uplift attach as the designed upgrade; holdout detects net-negative treatments |
| F-4 | **No holdout / eroded holdout** — program claims natural retention; later scrutiny kills funding | Holdout manager is product (randomization, sizing, exemption logging); exemption rate reported on the guardrail panel |
| F-5 | **Incentive misalignment** — save-rate-comped teams game easy saves | Measurement reports *incremental* value by design; council reviews treated-vs-holdout, not save-rate |
| F-6 | **Drift rot** — pricing change shifts drivers; model targets last year's churners | PSI + calibration monitors with retrain triggers; driver-stability flags in the report |
| F-7 | **Lists exported to spreadsheets nobody works** | Tasks embedded in CRM with owners + SLAs; execution rate monitored; no CSV export path in v1 |
| F-8 | **CSM distrust of opaque scores** | SHAP reason codes on every account ("usage −40% QoQ; 2 open P1 tickets"); shadow period precedes routing |

---

## 5. S-2 — Lead & Opportunity Scoring (UC-2)

The churn pipeline re-aimed at conversion labels — the same M-1 shape, the fastest
time-to-value in the catalog, and the natural second attach for any customer with a CRM
(evidence 12 §3; evidence 15 §3).

### 5.1 Module framing

- **Promise:** *Which leads and opportunities deserve sales attention now — pipeline
  effort concentrated where it converts.*
- **Methodology:** **M-1** (CRM + firmographic + product-signal extract → point-in-time
  features → GBM/logistic → SHAP reason codes → scores in CRM) + **M-2** (lead/account
  dedup + hierarchy resolution) + **M-3** (score bands). Upgrade: +M-7 (worked-vs-not
  incrementality).
- **Variants by configuration:** PLG product-qualified-lead scoring (product telemetry
  features dominate), ABM account scoring (aggregation to account level), opportunity
  risk scoring (in-flight deals — same methodology, different label + cadence).

### 5.2 Correctness adaptations

Inherits S-1's checks 1–4, 6, 9–11 wholesale; the solution-specific discipline:

1. **CRM-hygiene leakage — the single most common leak here:** fields edited *after*
   the outcome (deal size updated on close, stage backfilled) leak; features must come
   from **point-in-time CRM field history**, never current records (evidence 12 §3.4).
   Gate check: feature lineage terminates in field-history tables, not live objects.
2. **Selection bias:** history shows outcomes only for leads sales *chose* to work — a
   model trained on it learns "what sales already likes", not "what converts".
   Mitigation is wired into the decision policy: an **exploration quota** (a small
   slice of low-scored leads worked anyway) keeps the system learnable and honest
   (evidence 12 §3.4; §S2 "selection bias from own decisions").
3. **Label design:** conversion window per funnel stage; training labels use outcomes
   known *after the initial sales action*, not later rep activity the model itself will
   cause (evidence 15 §3); recycled leads deduped with re-entry logic (M-2).
4. **Volume floor:** sufficient qualified/disqualified history required before training
   (evidence 15 §3 cites Dynamics' 40+40 minimum as the documented product precedent);
   the data-readiness report enforces a floor.
5. **Calibration:** routing-capacity decisions need calibrated probabilities.
6. **Drift:** ICP changes, pricing changes, campaign/form-field changes silently break
   features — retrain quarterly + on marketing-ops change events.

### 5.3 Business wiring — actions & decision policy

Routing (hot leads to senior reps within SLA), prioritized work queues, SLA tiers
(respond ≤5 min vs nurture), automated nurture assignment for low scores, opportunity
risk flags driving manager coaching. Policy: score bands × territory × rep capacity;
caps prevent starving new segments; **no auto-rejection solely on score** — suppression
without an exploration slice is forbidden by policy (evidence 12 §3.5, §3.8).

### 5.4 Systems of action & connectors

| System | Connector requirement | What lands |
|---|---|---|
| CRM (Salesforce/HubSpot/Dynamics) | Read: leads/opps + **field history**. Write: score, top-3 reason codes, queue position | The core surface — queue views sort by score |
| Marketing automation (Marketo/HubSpot) | Write: nurture-track assignment | Low-band handling |
| Sales engagement (Outreach/Salesloft) | Write: sequence enrollment | SDR execution |
| Routing engine (LeanData or CRM-native) | Write: routing decision inputs | Speed-to-lead lane |

### 5.5 People & cadence

RevOps owns the module (routing rules, exploration quota, weekly funnel review where
score bands vs realized conversion are inspected); SDR/AE teams consume queues; sales
ops owns SLAs; marketing owns nurture. Cadence: **daily scoring (L1)**, hourly optional
for inbound speed-to-lead (L2). Replaces first-in-first-out lead lists and BANT gut
checks (evidence 12 §3.7).

### 5.6 Human-in-the-loop

Assisted decisioning throughout: reps decide, the score orders the queue. Full
automation only for nurture assignment. Escalations: high-score untouched leads alert
managers; override reasons captured; override clusters escalate to RevOps (evidence 15 §3).

### 5.7 Measurement loop

Shadow: 2–4 weeks of "your list vs the model's list" side-by-side (the standard rep-
trust mechanism). Then **randomized routing experiment**: score-ordered vs status-quo
queues at matched capacity → lift in conversion per rep-hour; the exploration slice
doubles as the permanent baseline guard against selection-bias self-confirmation.
Guardrails: lead-response SLA, coverage of new segments, rep cherry-picking, speed-to-
lead. Proof artifact: proof pack with routing-experiment readout (conversion per
rep-hour, win-rate delta by band) — evidence 15 §3 documents the HP/SalesPredict A/B
precedent (scored accounts converting at 2× with ~40% win-rate lift) as the shape of
the claim, flagged vendor-reported.

### 5.8 Deployment shape

E1/E2/E3; L1 daily (L2 optional); retrain quarterly + on ICP/campaign change events;
monitoring: score-distribution drift, per-segment precision, CRM field-latency.

### 5.9 Governance

Modest overlay (evidence 12 §3.11): care with firmographic proxies encoding demographic
bias in SMB selling (fairness screen in the gate); documentation for sales-comp
disputes ("the model sent me bad leads" — the audit trail answers it); enrichment-data
permissions; identity-scoped queue views.

### 5.10 Packaging

**v1:** M-1 pipeline on CRM field history + M-2 dedup/hierarchy + score bands + CRM
write-back + exploration-quota policy + routing-experiment harness + proof pack.
**Attach path:** +M-7 (worked-lead incrementality), S-3 CLV (value-weighted routing —
"revenue intelligence" bundle per kernel D3), S-9 outbound (nurture execution).

### 5.11 Delivery plan (12 weeks — the catalog's fastest)

| Weeks | Phase | Exit artifacts |
|---|---|---|
| 1–2 | Qualify | Label spec (conversion event + window per stage); CRM field-history depth audit; volume-floor check; RACI (RevOps owner) |
| 3–4 | Secure env | Env deployed behind SSO; CRM read connector live; governance baseline; 0-egress verification |
| 5–7 | Build + govern | Gate certificate (field-history lineage, dedup test); model card; band/SLA policy signed; staging write-back |
| 8–10 | Shadow | Side-by-side readout vs incumbent prioritization; rep walkthroughs done; exploration quota armed |
| 11–12 | Convert | Routing experiment live; first conversion-per-rep-hour readout (leading); proof pack v1; DoD checklist |

### 5.12 Failure modes & countermeasures

| # | Failure mode | Countermeasure |
|---|---|---|
| F-1 | CRM hygiene garbage-in | Data-readiness gate in week 1–2; field-history lineage check in the correctness gate |
| F-2 | Selection-bias self-fulfilment (model canonizes "good leads") | Exploration quota as policy, reported on the guardrail panel; claims worded per evidence honesty |
| F-3 | Score-as-decoration (field exists, process unchanged) | DoD wired action = queue/SLA change, not a field; adoption checkpoint in shadow phase |
| F-4 | Comp gaming when scores gate credit | Joint KPI reporting above the contending teams; audit trail for disputes |
| F-5 | Silent feature breakage when marketing changes forms | Schema drift monitors on feature sources; marketing-ops change events trigger revalidation |

---

## 6. S-3 — Customer Lifetime Value (UC-3)

The value-regression head on the same tabular spine: composes with S-1/S-2 into the
**revenue-intelligence** bundle (kernel D3) — churn says *who leaves*, leads say *who
converts*, CLV says *what each is worth*, and every treatment/budget decision upstream
becomes value-weighted (evidence 12 §5; evidence 15 §6).

### 6.1 Module framing

- **Promise:** *Allocate acquisition, retention, and promo spend by long-term customer
  value — not short-term response.*
- **Methodology:** **M-1** with a value-regression head (GBM regression on point-in-time
  features) or BTYD-class probabilistic models for non-contractual settings + **M-2**
  identity resolution + **M-3** value-tier segmentation. Upgrades: +M-6 (survival-based
  tenure inside CLV), +M-7 (promo incrementality).

### 6.2 Correctness adaptations

1. **Censoring is the core problem:** most customers' lifetimes are unfinished; naive
   "average revenue of past customers" biases low or high depending on cohort mix. v1
   uses **explicit horizon-limited value** (e.g. 24-month CLV) with out-of-time
   validation; BTYD models where purchase is non-contractual; the M-6 attach brings
   survival-corrected tenure (evidence 12 §5.4).
2. **Cohort drift:** acquisition-channel mix shifts change value distributions —
   validate on recent cohorts; cohort-level calibration curves (predicted vs realized
   12/24-month value) are a standing monitor, not a launch check.
3. **Point-in-time spend history** (as-of features) and **identity resolution across
   channels/devices** — audience quality depends on it (M-2; the gate's entity test).
4. **Promo incrementality:** redemption ≠ lift — coupons cannibalize full-price
   purchases; holdouts required before any promo-targeting claim (evidence 12 §5.4).
5. **Selection bias in paid-media audiences:** platforms optimize toward converters;
   incrementality needs geo/PSA experiments — measurement design, not model design.
6. **Finance sign-off as correctness:** the CLV definition (horizon, margin vs revenue,
   discounting) is agreed with finance in week 1 or the program dies in metric disputes
   (evidence 12 §5.13) — the label spec is a signed artifact.

### 6.3 Actions & decision policy

Value-tiered audiences pushed to ad platforms (lookalikes seeded on high-CLV); budget
allocation across channels by predicted payback; promo depth per segment; suppression
of discount-addicted segments; value-based bidding (CLV as conversion value). Policy:
CAC caps per value tier, promo budget constraints, frequency caps, margin floors on
promo depth (evidence 12 §5.5).

### 6.4 Systems of action & connectors

| System | Connector requirement | What lands |
|---|---|---|
| CDP / warehouse | Read: transactions, subscriptions, channel events. Write: value tiers | The audience backbone |
| Ad platforms (Google/Meta) | Write: value-based audiences / conversion values | Value-based bidding |
| ESP / marketing automation | Write: segment membership, suppression | Promo execution |
| BI / finance planning | Publish: cohort value curves, calibration report | The finance surface |

### 6.5 People & cadence

Growth/performance marketing consumes daily; **finance validates CLV assumptions
quarterly** (co-owner by design); merchandising owns promo calendar integration.
Monthly value-council reviews calibration + allocation. Replaces last-click ROAS
budgeting (evidence 12 §5.7).

### 6.6 Human-in-the-loop

Automated audience sync; human control at budget-strategy level; deep promo discounts
gated by margin approvals. No individual-customer automated concessions in v1.

### 6.7 Measurement loop

Shadow: CLV tiers published alongside ROAS reporting for one budget cycle (side-by-side
budgeting view). Then: **geo-experiments / platform conversion-lift studies** for media;
**permanent promo holdout groups** for offer incrementality; CLV backtests against
realized 12/24-month value. Guardrails: margin, discount dependency (share of revenue
on promo), new-vs-returning mix. Proof artifact: proof pack with cohort calibration
curves (predicted vs realized value) + first geo/holdout readout (evidence 12 §5.9).

### 6.8 Deployment shape

E1/E2/E3; **L1 batch** (daily tier sync; weekly re-score); the only latency-sensitive
piece is bid-value sync (still L1/L2). Retrain quarterly; monitor cohort calibration.

### 6.9 Governance

Privacy/consent for audience sharing (GDPR/CCPA — audience export is a *data-sharing
event* and is the module's most sensitive surface; consent state is an eligibility rule
in the policy layer); fairness in who receives discounts; financial-reporting
discipline if CLV enters investor metrics (evidence 12 §5.11). Identity-scoped access
to value tiers; audit on every audience export.

### 6.10 Packaging

**v1:** horizon-limited CLV on warehouse data + value tiers + one ad-platform audience
sync + promo-holdout manager + cohort-calibration monitor + proof pack. **Attach:**
+M-6 tenure correction, +M-7 promo uplift; bundles: S-1+S-2+S-3 = revenue intelligence
(value-weighted retention + routing).

### 6.11 Delivery plan (12–14 weeks)

| Weeks | Phase | Exit artifacts |
|---|---|---|
| 1–2 | Qualify | **CLV definition signed by finance** (horizon/margin/discounting); identity-graph audit; consent inventory |
| 3–4 | Secure env | Env + SSO; warehouse/CDP read connectors; 0-egress verification |
| 5–8 | Build + govern | Gate certificate (as-of features, identity test, censoring policy); backtest report on historical cohorts; tier policy + CAC caps signed |
| 9–12 | Shadow | Side-by-side ROAS-vs-CLV budget view for one cycle; promo holdout armed; audience sync in staging |
| 13–14 | Convert | First audience live with consent-gated export; geo/holdout design running; proof pack v1; DoD checklist |

### 6.12 Failure modes & countermeasures

| # | Failure mode | Countermeasure |
|---|---|---|
| F-1 | CLV overfitting to acquisition-era covariates | Recent-cohort validation + cohort calibration monitor with alerts |
| F-2 | Promo "success" reported as redemption while margin erodes | Permanent promo holdout is product; margin guardrail on the panel |
| F-3 | Finance/marketing metric wars stall adoption | Signed CLV definition in week 1–2; finance is a named co-owner with quarterly review |
| F-4 | Audience-sync privacy incident | Consent as eligibility rule in the policy engine; export audit; DPIA in the governance baseline |
| F-5 | Value tiers built on fragmented identities | M-2 entity test in the gate (the FedEx-Freight test applied to customer identity) |

---

## 7. S-4 — Collections Prioritization (UC-4)

The finance-family beachhead (kernel D3/D5: banking tier 1a's named entry solution) —
and structurally *S-1's sleeping-dog logic with a regulator watching* (evidence 12
§17.4). More recovered at lower cost **and lower customer harm**, with compliance as a
hard constraint rather than a review step.

### 7.1 Module framing

- **Promise:** *Recover more delinquent receivables at lower cost-to-collect and lower
  complaint risk — by matching each account to the right treatment, inside the contact
  rules.*
- **Methodology:** **M-1** (risk-of-roll + payment-propensity models) + **M-2** (account
  /obligor resolution) + **M-3** (treatment-ladder segmentation). Upgrade: **+M-7
  uplift** for treatment assignment — the propensity→persuadability upgrade this
  domain was practically invented for.
- **Variants:** early-stage B2C delinquency (digital, uplift-heavy) vs late-stage
  (placement/sale economics); B2B receivables prioritization (the DSO framing of kernel
  D3 — same spec, milder overlay); utilities/telco (service-suspension levers);
  healthcare receivables (exclusion-heavy — evidence 15 §22's Weill Cornell precedent).

### 7.2 Correctness adaptations

Inherits S-1's checks 1–4, 6–11; solution-specific:

1. **Self-cure awareness — the domain's defining trap:** many early-stage delinquents
   pay without contact; propensity targeting wastes spend and *annoys payers into
   complaints*. The correct formulation is treatment-response (uplift) against
   treatment cost; v1 approximates it with self-cure watch tiers + randomized strategy
   cells that accumulate the uplift training data (evidence 12 §17.4; evidence 15 §22).
2. **Point-in-time balance/delinquency snapshots;** label windows per bucket (roll
   30→60 within cycle); prior contacts and treatments censor future payment behavior —
   prior-action features are mandatory, and treatment history enters the model, not
   just the policy.
3. **Hard exclusions before scoring:** deceased, bankruptcy, hardship, charity-care,
   dispute, legal-hold accounts excluded *upstream* of the model (evidence 15 §22 —
   the documented Weill Cornell screen); gate check: exclusion filter present and
   lineage-verified.
4. **Contact-policy compliance as hard constraints in the decision layer:** FDCPA /
   Reg F call-frequency caps (US), CONC + Consumer Duty (UK) — **the model may never be
   the thing enforcing law; the policy engine is** (evidence 12 §17.4). Gate check: the
   policy layer proves cap enforcement independent of model output.
5. **Vulnerability/hardship detection with generous recall** — mis-treating a
   vulnerable customer is a conduct breach; vulnerability overrides route to human
   specialists always.
6. **Selection bias from historical strategy:** past treatment assignment shaped
   labels; randomized strategy tests are the clean data source (champion/challenger is
   native to this domain).
7. **Calibrated value predictions** (expected recovery × cost) because placement/
   settlement decisions are economic; macro-sensitivity monitors on roll rates (the
   2020 forbearance waves broke unmonitored roll models).

### 7.3 Actions & decision policy

Treatment assignment per account per cycle: **no-contact watch** (a first-class
treatment) · SMS/email nudge with self-serve payment link · agent call · restructure/
hardship offer · settlement within authority bands · agency placement. Policy:
cost-tiered treatment ladders; contact caps (legal + internal, enforced by the policy
engine); settlement floors; vulnerability overrides; champion/challenger cell
assignment (evidence 12 §17.5).

### 7.4 Systems of action & connectors

| System | Connector requirement | What lands |
|---|---|---|
| Collections platform / dialer (FICO DM, CGI, C&R) | Write: queue order, treatment code, cell ID | Daily queues |
| Digital-collections layer / self-serve portal | Write: nudge triggers + payment links | The cheapest treatment |
| Core banking / AR (or ERP for B2B DSO variant) | Read: balances, delinquency, payments, promises | Feature + label source |
| Hardship-workflow tool | Write: specialist referral tasks | The human-only lane |
| Agency-management system | Write: placement files | Late-stage economics |

**Cap-consistency check is product:** the policy engine and the dialer must agree on
contact counts — the documented failure mode of cap violations when they disagree is a
regulatory fine (evidence 12 §17.15); the connector reconciles contact events back into
the policy ledger daily.

### 7.5 People & cadence

Collections strategy team owns the module (treatment ladders, champion/challenger
design); collections ops consumes daily queues; compliance reviews contact policies
(named approver); agents handle calls and hardship conversations; finance owns recovery
economics. Weekly performance + compliance review; per-cycle strategy-cell readouts.
Replaces bucket-based uniform dialing (evidence 12 §17.7; evidence 15 §22).

### 7.6 Human-in-the-loop

Digital treatments automated within caps; calls human; **hardship/vulnerability always
human**; settlements beyond bands need approval; distress signals escalate to
specialist teams. Agent override reasons captured; clusters escalate to strategy.

### 7.7 Measurement loop

Champion/challenger strategy cells are native here — collections ran randomized
strategy tests before "A/B testing" was a phrase (evidence 12 §17.9). Shadow: one cycle
of model-ranked queues scored silently against incumbent bucket rules. Then: randomized
treatment cells measuring **net recovery** (recovery − treatment cost), roll rates,
promises-kept, re-default, complaints per cell. Guardrails: complaint rate (the
regulator-visible metric), hardship-detection recall, contact-cap adherence (must be
100%), cost-to-collect. Proof artifact: proof pack with cell readout (net recovery
lift), complaint panel, and the cap-adherence audit — the artifact doubles as
regulator-legible evidence.

### 7.8 Deployment shape

E1 (regulated VPC) is the expected home (banking tier 1a); E2/E3 supported. **L1 daily
batch** by delinquency cycle; dialer queue integration; retrain quarterly + macro
triggers (roll-rate drift). No real-time decisioning (anti-portfolio boundary).

### 7.9 Governance

The frame *is* consumer-protection regulation (evidence 12 §17.11): FDCPA/Reg F (US
consumer), FCA CONC + Consumer Duty (UK), state/provincial collection rules; fairness
testing on treatment assignment; auditability of **every contact decision**;
vulnerable-customer policy supremacy. **Domain overlay — SR 11-7:** when deployed in a
bank (the tier-1a path), collections models are in scope for model-risk management —
documented development, effective challenge, independent validation, performance
monitoring, and model inventory registration; the module ships its model card,
validation report, and monitoring feeds in examiner-legible form so the bank's MRM team
can adopt it into their inventory rather than re-derive it. For the B2B-receivables
variant the overlay drops to internal financial controls (segregation of duties on
settlement authority).

### 7.10 Packaging

**v1:** risk-of-roll + payment-propensity models, exclusion screen, treatment-ladder
policy engine with cap enforcement + reconciliation, dialer/platform connector,
champion/challenger cell manager, complaint/cap guardrail panel, proof pack. **Attach:**
+M-7 uplift treatment assignment (trained on v1's accumulated cells); digital self-serve
expansion (the biggest ROI treatment); S-7 (recovery-driver reporting to the strategy
council).

### 7.11 Delivery plan (14–16 weeks — compliance adds a band)

| Weeks | Phase | Exit artifacts |
|---|---|---|
| 1–2 | Qualify | Bucket/label spec; exclusion inventory signed by compliance; contact-rule matrix (jurisdictional); data audit (payment/contact history) |
| 3–5 | Secure env | E1 deployment behind SSO; read connectors; governance baseline incl. compliance sign-off on the policy-engine cap design; 0-egress verification |
| 6–9 | Build + govern | Gate certificate (exclusions, PIT snapshots, cap-enforcement proof); model card + validation report (SR 11-7-legible where applicable); treatment ladder signed by strategy + compliance |
| 10–13 | Shadow | One full cycle silent-ranked vs incumbent; cell design finalized; agent walkthroughs; cap-reconciliation running |
| 14–16 | Convert | Cells live; first net-recovery + complaint readout (leading); proof pack v1; DoD checklist; MRM inventory handoff (bank variant) |

### 7.12 Failure modes & countermeasures

| # | Failure mode | Countermeasure |
|---|---|---|
| F-1 | Propensity targeting harasses self-payers (complaints, conduct risk) | No-contact watch as first-class treatment; strategy cells measure harm; M-7 upgrade path |
| F-2 | Contact-cap violations when policy engine and dialer disagree | Daily contact-event reconciliation; cap adherence is a 100%-or-incident guardrail |
| F-3 | Macro shift breaks roll models (forbearance waves) | Roll-rate drift monitors + macro retrain triggers; scenario bands in the readout |
| F-4 | Strategy cells contaminated by ops overrides | Override logging with cell integrity checks; contaminated cells excluded from readouts automatically |
| F-5 | Digital nudges claim payments that were coming anyway | Cell design measures incrementality (nudge vs no-contact), not last-touch attribution |
| F-6 | Vulnerable customer mis-treated by an automated path | Generous-recall vulnerability screen; human-only lane; conduct-breach kill-switch on the digital channel |

---

## 8. S-5 — Demand Forecasting (UC-5)

The first W2 module (M-4; engine R3 + R4-lite) and the supply-chain family's opener.
Tier-1 in all three deep-research rankings (kernel D3). The forecast is an input to an
*ordering policy* — the actual solution S-6 completes; S-5 is scoped as the
forecast-to-planner module so it can ship assistive-first (kernel D9-3), with S-6 as
the action attach (evidence 12 §10; evidence 15 §13).

### 8.1 Module framing

- **Promise:** *SKU×location demand forecasts your planners can trust — probabilistic,
  hierarchy-coherent, measured by forecast value added.*
- **Methodology:** **M-4 forecasting** (classical statistical baselines + GBM-global
  models across all SKU×location series; deep later per kernel D2) + **M-3**
  (SKU/segment clustering for cold starts) + **M-2** (product/location master
  resolution). Upgrades: +M-11 (predict-then-optimize into S-6's ordering policy),
  +M-5 (demand-anomaly alerts).
- **Variants:** grocery/fresh (intraday, waste-focused), fashion (one-shot buys),
  manufacturing MRP (component demand), B2B (order-book blending); the S&OP
  reconciliation variant where the "action" is the aligned plan.

### 8.2 Correctness adaptations

1. **Censored demand — mandatory:** sales ≠ demand when stocked out; without lost-sales
   imputation or availability-aware training, the model learns to under-order exactly
   where it failed before (the censored-demand death spiral) (evidence 12 §10.4;
   evidence 15 §13). Gate check: stockout flags present; censoring correction applied.
2. **Probabilistic, not point, forecasts:** replenishment consumes quantiles (service
   levels consume P90s, not means); optimizing point-MAPE is a category error — the
   documented Amazon precedent moved to quantile forecasts for exactly this reason
   (evidence 15 §13). Gate check: quantile outputs with calibration (PIT histograms).
3. **Hierarchical coherence:** SKU×store forecasts reconcile with category/region/
   network totals (MinT-style) or planning meetings relitigate numbers.
4. **Intermittent demand:** Croston-class or global models for long-tail SKUs;
   per-segment metrics, never one aggregate MAPE.
5. **Known-in-advance covariates with point-in-time discipline:** promo calendar,
   price, events enter as future-known features; the promo calendar disconnect
   (marketing surprises the forecast) is an *integration* failure the connector
   contract prevents.
6. **New-SKU cold start** via attribute similarity (M-3).
7. **Temporal validation across seasons + regime honesty:** stale regimes down-weighted,
   not averaged in (the COVID lesson); backtests walk-forward across ≥1 full
   seasonality cycle where history allows.
8. **Lead-time/pack-size constraints live in the ordering policy (S-6), not bolted onto
   the forecast.**

### 8.3 Actions & decision policy

v1 (assistive): forecast + exception queue to planners — items whose forecast deviates
from plan/override history; safety-stock recommendations; projected-overstock markdown
flags. Policy: exception thresholds per segment; **FVA discipline** — planner overrides
tracked and scored (forecast-value-added analysis routinely shows many human overrides
subtract accuracy; making that visible is part of the module) (evidence 12 §10.8).

### 8.4 Systems of action & connectors

| System | Connector requirement | What lands |
|---|---|---|
| ERP / demand-planning (SAP, Oracle, RELEX, o9, Blue Yonder) | Read: sales/orders, inventory, master data. Write: forecast + quantiles, exceptions | The planner surface |
| POS / e-commerce | Read: sell-through, stockout signals | Censoring correction source |
| Promo/price calendar (merch systems) | Read: future-known covariates | The leakage-safe covariate feed |
| S&OP planning platform | Publish: reconciled hierarchy | The monthly plan |

### 8.5 People & cadence

Demand planners shift from generating numbers to managing exceptions and enriching with
market intelligence (the Danone-documented role change — 50% planner-workload reduction,
vendor-reported; evidence 12 §10.7); demand-planning lead owns the module; buyers act
daily; S&OP consumes the reconciled hierarchy monthly. Cadence: daily forecast runs
(L1; intraday L2 for perishables), weekly planning, monthly S&OP.

### 8.6 Human-in-the-loop

Fully assistive in v1: planners review exceptions and own every order (S-6 moves the
automation frontier). Overrides logged and FVA-scored — trust via transparency, both
directions (show where overrides help *and* hurt).

### 8.7 Measurement loop

Forecast accuracy (quantile loss, not just MAPE) is a *diagnostic*; the business loop
measures **FVA vs the incumbent process** (naive/statistical baseline and planner
overrides), then service level, stockout rate, inventory turns, waste against a
**phased rollout by category/region** (evidence 12 §10.9). Shadow: the model forecasts
side-by-side with the incumbent for ≥4 weekly cycles before planners act on it.
Guardrails: bias (systematic over/under by segment), promo-window misses, override
rate. Proof artifact: proof pack with FVA readout by category + calibration report;
documented magnitudes for the sales narrative (Danone 20% error reduction, 30% lost-
sales and obsolescence reductions — vendor-reported; Morrisons 30% shelf-gap reduction
— evidence 12 §10.9, evidence 15 §13; always flagged as vendor-reported).

### 8.8 Deployment shape

E1/E2/E3; **L1 daily** (L2 intraday for fresh); horizon-appropriate cadences
(operational daily, tactical weekly, strategic monthly); retraining weekly–monthly;
monitoring per-segment accuracy drift, bias, stockout-feedback contamination. W2 engine
dependency: R3 one-button deploy + R4-lite materialization (the forecast marts).

### 8.9 Governance

Light overlay: override audit, forecast-version control (planning meetings need "what
changed since last cycle" computable), financial-controls handoff where forecasts feed
S&OP commitments; food-waste/ESG reporting where relevant (evidence 12 §10.11).
Identity-scoped access per category/region.

### 8.10 Packaging

**v1:** global + classical model ensemble, quantile outputs, censoring correction,
hierarchy reconciliation, exception queue, FVA harness, ERP/POS connectors, proof pack.
**Attach:** **S-6 replenishment support** (the designed pairing), +M-5 demand-anomaly
alerts, +M-11 optimization (with S-6).

### 8.11 Delivery plan (14–16 weeks)

| Weeks | Phase | Exit artifacts |
|---|---|---|
| 1–2 | Qualify | Scope: one category/region, one KPI (service level or waste); history audit (≥2 yrs sales, stockout signals, promo calendar); master-data resolution check |
| 3–5 | Secure env | Env + SSO; ERP/POS read connectors; promo-calendar feed contract; 0-egress verification |
| 6–9 | Build + govern | Gate certificate (censoring, quantile calibration, hierarchy coherence, PIT covariates); backtest report across seasons; exception-policy config |
| 10–14 | Shadow | ≥4 cycles side-by-side; FVA baseline established (incumbent + naive); planner training on exception workflow |
| 15–16 | Convert | Planners act on exceptions for the pilot category; first FVA + service-level readout; proof pack v1; DoD checklist; S-6 attach proposal |

### 8.12 Failure modes & countermeasures

| # | Failure mode | Countermeasure |
|---|---|---|
| F-1 | Optimizing MAPE while service levels stagnate | FVA + service-level KPIs lead the readout; quantile loss as the model diagnostic |
| F-2 | Censored-demand death spiral | Censoring correction is a gate check; stockout-feedback contamination monitor |
| F-3 | Override culture reverts the system to decoration | FVA transparency by planner/category; council reviews override value monthly |
| F-4 | Promo-calendar disconnect | Covariate feed is a connector contract with schema checks; promo-window miss guardrail |
| F-5 | Regime shift breaks models at maximum stakes | Regime monitors + down-weighting policy; scenario bands in planner view |
| F-6 | One aggregate metric hides long-tail failure | Per-segment (ABC/XYZ) metric panels; intermittent-demand class handled separately |

---

## 9. S-6 — Inventory / Replenishment Support (UC-6, assistive)

S-5's action layer, shipped as its own module because the automation frontier moves —
forecast-to-action, human-reviewed first (kernel D3: "assistive"; D9-3: assistive
before automated). S-6 is deliberately *not* closed-loop auto-ordering in v1; the
documented ladder (planner-approved draft orders → bounded auto-orders for stable
low-value SKUs) is walked with measurement, not assumed (evidence 12 §10.5, §10.8, §S4).

### 9.1 Module framing

- **Promise:** *Draft purchase, transfer, and safety-stock actions computed from
  probabilistic forecasts — reviewed and released by your planners, inside policy
  bounds.*
- **Methodology:** **M-4** (S-5's quantile forecasts as input) + inventory policy logic
  (service-level targets → reorder points/quantities; classical OR, not ML) + **M-3**
  (SKU criticality tiers). Upgrade: **+M-11 optimization** (multi-echelon,
  predict-then-optimize) — W4 timing.
- **Requires:** S-5 installed (the forecast is the input contract). Sold as attach.

### 9.2 Correctness adaptations

Inherits S-5's forecasting discipline wholesale (censoring, quantiles, hierarchy);
adds the policy-layer correctness:

1. **Service-level targets consume quantiles correctly:** reorder logic reads the
   quantile matched to the segment's target (P90/P95), never the mean; asymmetric
   over/understock costs made explicit per segment (evidence 15 §13).
2. **Lead-time and pack-size constraints inside the ordering policy** — order
   quantities respect supplier minimums, pack multiples, shelf capacity, open-to-buy
   budgets (evidence 12 §10.4-viii). Gate check: constraint set validated against ERP
   master data; infeasible draft orders are a gate failure, not a planner surprise.
3. **Lead-time honesty:** supplier lead times are themselves drifting inputs —
   monitored, not assumed constants.
4. **Bullwhip awareness:** order smoothing constraints; no SKU optimized independently
   of its substitution/cannibalization group (evidence 15 §13 failure modes).
5. **Draft-order provenance:** every recommended quantity carries its forecast
   quantile, service target, and constraint trace — the planner sees *why*, which is
   the adoption mechanism.

### 9.3 Actions & decision policy

Draft purchase orders / transfer orders / safety-stock updates / allocation
recommendations / markdown triggers on projected overstock — all landing as **reviewable
tasks in the ERP workflow**, released by a planner. Policy: service-level targets per
segment; order-quantity caps; budget/open-to-buy constraints; human review mandatory in
v1 (spend thresholds configure *which queue*, not *whether* reviewed); anomaly-flagged
items always escalate.

### 9.4 Systems of action & connectors

S-5's connector set plus: ERP purchasing module (write: draft POs with provenance),
WMS (allocation), supplier EDI (order transmission after release). The ERP write path
is the module's long pole (evidence 12 §10.12: auto-ordering integration = ERP change
management) — v1's draft-order pattern deliberately keeps the ERP release step human.

### 9.5 People & cadence

Replenishment analysts/buyers work the draft-order queue daily; demand-planning lead
owns policy (service targets, caps); finance owns open-to-buy. Weekly exception review;
monthly policy review with FVA + service/waste readout.

### 9.6 Human-in-the-loop

**All orders human-released in v1.** The graduation ladder (documented, measured,
per-segment): draft-and-review → one-click release for stable/low-value SKUs →
bounded auto-release (spend cap, deviation cap, kill-switch) — each rung earned with
release-quality evidence over ≥1 quarter, mirroring the Otto precedent of automating
only after trust (evidence 12 §10.8, §S4 maturity-ladder note).

### 9.7 Measurement loop

Phased rollout by category vs incumbent ordering: service level, stockout rate,
inventory turns, waste/obsolescence, expedite costs; draft-order acceptance rate +
edit distance (how much planners change recommendations — the trust metric).
Guardrails: budget adherence, supplier-order volatility (bullwhip), aged-stock creep.
Proof artifact: proof pack with category-phased before/after (service × turns × waste)
+ acceptance-rate trend. Shadow: draft orders generated but not surfaced for 2 cycles,
scored against planner-released actuals.

### 9.8 Deployment shape

E1/E2/E3; L1 daily (aligned to S-5 runs); constraint sets re-validated on ERP master-
data change events; W2 engine dependency shared with S-5 (+M-11 upgrade arrives W4).

### 9.9 Governance

Financial controls on ordering: spend caps, segregation of duties (recommender ≠
releaser — preserved even at auto-release rungs via policy identity), full audit of
draft → edit → release; supplier fairness in allocation (evidence 12 §10.11).

### 9.10 Packaging

**v1 (attach to S-5):** inventory-policy engine (service targets → draft orders),
constraint validation, ERP draft-order write path, acceptance/edit telemetry,
graduation-ladder policy, proof pack. **Attach:** +M-11 multi-echelon optimization;
+M-5 supply-anomaly alerts (late-supplier detection).

### 9.11 Delivery plan (+6–8 weeks on an S-5 install; 16 weeks standalone-combined)

| Weeks (post-S-5) | Phase | Exit artifacts |
|---|---|---|
| 1–2 | Qualify | Ordering-policy workshop (service targets, constraints, caps); ERP write-path scoping; segregation-of-duties map |
| 3–4 | Build + govern | Gate certificate (constraint validation, quantile→policy correctness); draft-order staging; policy signed by planning + finance |
| 5–6 | Shadow | 2 cycles drafts-vs-actuals readout; planner training |
| 7–8 | Convert | Draft queue live for pilot category; acceptance/service readout (leading); proof pack; DoD checklist; graduation-ladder criteria agreed |

### 9.12 Failure modes & countermeasures

| # | Failure mode | Countermeasure |
|---|---|---|
| F-1 | Infeasible orders destroy planner trust in week one | Constraint validation is a gate check; infeasibility = blocked deploy |
| F-2 | Planners re-edit everything (system as expensive decoration) | Edit-distance telemetry reviewed monthly; policy tuned to close the gap; FVA on edits |
| F-3 | Premature automation push after early wins | Graduation ladder with per-rung evidence requirements is contractual, not aspirational |
| F-4 | Bullwhip amplification from naive per-SKU ordering | Smoothing constraints + group-level coherence; supplier-volatility guardrail |
| F-5 | ERP write-path breakage on master-data change | Schema-drift monitors; change events trigger constraint re-validation |

---

## 10. S-7 — KPI Anomaly Detection & Driver Analysis (UC-7)

The "report" solution generalized — the executive surface every vertical buys (kernel
D3), and internally the **wholesale layer of every other module** extracted as its own
SKU. The report *is* the product; the discipline that separates it from the dashboard
graveyard is the forum wiring (evidence 12 §34; evidence 15 §43).

### 10.1 Module framing

- **Promise:** *Why is the KPI moving, what should we change, and did the change work —
  modeled evidence routed into a decision forum with a log.*
- **Methodology:** **M-1 stopped at the report stage** (extract → PIT features → GBM →
  SHAP driver analysis → structured report) + **M-3** (segment decomposition) + —
  in v1 — statistical control-limit alerting on KPI series; **full M-5 anomaly
  detection attaches at W2** (see Appendix A, T-2). +M-4 attach adds
  forecast-vs-actual decomposition.
- **Variants:** churn/margin/quality/attrition/support drivers; the VoC→product loop
  (adds NLP topic extraction — W3/M-9); "AI investment board reporting".

### 10.2 Correctness adaptations

**Everything in S-1's field 4 applies unchanged** — a report used for decisions
deserves the same correctness as a score used for actions, *and gets it less often
precisely because "it's just analysis"* (evidence 12 §34.4). Report-specific:

1. **Association ≠ cause, said out loud:** SHAP ranks model-attribution, not
   intervention effects; every driver claim is labeled a hypothesis with effect-size
   uncertainty; high-stakes drivers get causal follow-up (experiment or
   quasi-experiment) before big money moves. Gate check: report template enforces the
   labeling; "experiment recommended" is a first-class output.
2. **Stability discipline:** driver rankings that reshuffle quarterly from noise
   destroy credibility — bootstrap confidence intervals; change-flagging only beyond
   thresholds.
3. **Segment honesty:** Simpson's-paradox screening before any segment claim;
   segment-mix controls (evidence 15 §43).
4. **Reproducibility:** versioned data + code per report edition; "what changed since
   last quarter" is computable (Zetta lineage makes this native — evidence 06 "answers
   with lineage").
5. **Multiple-comparisons control** on anomaly flags (v1's control limits tuned for
   family-wise error, alert budget matched to forum capacity).

### 10.3 Actions & decision policy

The action is a **decision by an accountable owner in a standing forum**. The wiring
that separates working report solutions from dashboard graveyards (evidence 12 §34.5),
all product-enforced: (a) **named decision owner per driver domain**; (b) **standing
cadence** (a slot in an existing meeting); (c) **recommendation format** — each driver
carries a proposed action, expected effect size, confidence; (d) **decision log** —
what was decided, by whom, revisited next cycle; (e) **KPI wiring** — each accepted
action gets a metric and a check-in date. Policy: materiality thresholds for
escalation; model-vs-owner disagreement triggers a designed experiment, not a shrug.

### 10.4 Systems of action & connectors

| System | Connector requirement | What lands |
|---|---|---|
| BI layer (Power BI/Tableau/Looker) | Publish: report editions, anomaly panels | The delivery vehicle |
| The decision forum | Product surface: agenda pack + decision log | **The real system of action** |
| Warehouse/ERP/CRM | Read: KPI sources with lineage | Feature/label source |
| Ticketing (Jira/Asana) | Write: accepted actions as tracked items | KPI wiring |
| Experimentation platform (or Zetta-native holdout manager) | Write: driver-hypothesis tests | The causal follow-up lane |

### 10.5 People & cadence

Analytics/decision-science counterpart authors (increasingly the module drafts,
human-edits); functional leadership decides; forum cadence monthly/quarterly (weekly
ops variant). Module owner: the executive whose forum it is. Replaces anecdote-driven
prioritization and one-off analyst decks (evidence 12 §34.7).

### 10.6 Human-in-the-loop

Humans decide everything; the module's discipline is making the human decision
*explicit and tracked*. Escalation = materiality-triggered leadership attention.

### 10.7 Measurement loop

The hardest loop in the catalog and the differentiator (evidence 12 §34.9): (a)
**decision-adoption rate** (share of recommendations that became decisions); (b)
**tracked outcomes of adopted decisions vs predicted effects** (the report's forecast-
honesty score); (c) **experiments spawned per cycle** (a healthy program generates
tests, not narratives); (d) the driver KPIs themselves trending. A report program that
cannot show decisions-and-outcomes within two quarters is a dashboard-graveyard
candidate. Proof artifact: the decision log itself + forecast-honesty scorecard —
institutional memory as evidence. Shadow: first two editions run read-only alongside
the incumbent reporting before the forum commits to the cadence.

### 10.8 Deployment shape

E1/E2/E3; **L1 batch, cadence-aligned** (editions before meetings; daily anomaly scan
optional L2); refresh monthly/quarterly + on business-change events; monitoring = the
correctness checks re-run per edition.

### 10.9 Governance

Modest: access control on sensitive drivers (comp, individual performance — never
individual-level people claims, see S-8/T2 attrition boundary); methodology
transparency so decisions can be defended; versioned assumptions; decision-log
retention (evidence 12 §34.11; evidence 15 §43).

### 10.10 Packaging

**v1 (W1):** driver-analysis pipeline on one KPI domain + control-limit anomaly alerts
+ report generator + forum kit (agenda pack, decision log, KPI wiring) + proof pack.
**Attach:** +M-5 (full anomaly detection breadth — W2), +M-4 (forecast-vs-actual
decomposition), +M-9 (VoC text drivers — W3). S-7 is also the **embedded wholesale
layer** of S-1/S-4/S-5 — its standalone sale often begins as an extension of one.

### 10.11 Delivery plan (10–12 weeks — the cheapest entry in the catalog)

| Weeks | Phase | Exit artifacts |
|---|---|---|
| 1–2 | Qualify | KPI + driver-domain scope; decision-owner map; forum slot secured (no forum, no deal — qualification gate); data audit |
| 3–4 | Secure env | Env + SSO; warehouse read connectors; 0-egress verification |
| 5–7 | Build + govern | Gate certificate (PIT discipline, stability CIs, Simpson screen); edition 0 (internal); report template signed |
| 8–10 | Shadow | Editions 1–2 read-only beside incumbent reporting; forum dry-run; decision-log tooling adopted |
| 11–12 | Convert | Forum operates on edition 3; first decisions logged with KPI wiring; proof pack v1 (decision log + honesty scorecard scaffold); DoD checklist |

### 10.12 Failure modes & countermeasures

| # | Failure mode | Countermeasure |
|---|---|---|
| F-1 | Dashboard graveyard (report without forum) | Forum slot is a week-1 qualification gate; decision-adoption rate is the module's own KPI |
| F-2 | Driver-of-the-week noise | Stability CIs + change-flag thresholds; editions versioned |
| F-3 | Causal overreach (reorganizing around a correlation) | Hypothesis labeling enforced by template; experiment lane wired |
| F-4 | Decision-log absence (no memory, no accountability) | The log is the product surface, not a practice suggestion |
| F-5 | Analyst-forum decoupling (beautiful reports, absent owners) | Named owner per driver domain in the config; unowned domains flagged in every edition |
| F-6 | Alert fatigue from anomaly scan | Alert budget matched to forum capacity; family-wise error control |

---

## 11. S-8 — Predictive Maintenance (UC-8, assistive)

The **low-liability operational proof** the design-partner research prescribes (kernel
D3, item 08) — machines, not people; work orders, not denials. W2 module (M-5+M-1;
+M-6). The defining wiring: **the report of the tabular methodology becomes a CMMS work
order** — an alert that doesn't become a scheduled work order with parts allocated is a
dashboard, not a solution, and that is the documented failure mode of most stalled PdM
pilots (evidence 12 §18.3, §18.6).

### 11.1 Module framing

- **Promise:** *Fix equipment just before it fails — condition alerts that become
  scheduled, parts-allocated work orders your planners approve.*
- **Methodology:** **M-5 anomaly detection** (condition layer on sensor/telemetry
  baselines) + **M-1** (supervised failure-probability where labels exist) + **M-2**
  (asset-state resolution — event-sourced maintenance context) + **+M-6 survival**
  (remaining-useful-life with censoring, attach). Honest fallback: condition-based
  thresholds only, where failure labels are absent (evidence 12 §18.16).
- **Variants:** rotating equipment (most mature), fleet/mobility telematics (the
  Motive adjacency), utilities assets, process plants.

### 11.2 Correctness adaptations

1. **Failure labels are scarce and dirty — the label paradox:** well-maintained fleets
   fail rarely; failure events live in free-text work-order logs that must be mined and
   aligned to sensor timelines. Organizations without a curated failure library start
   with **anomaly detection + expert-labeled precursors, not supervised RUL fantasy**
   (evidence 12 §18.4). The module's v1 posture is anomaly-first by design.
2. **Point-in-time discipline on maintenance context:** features exclude post-failure
   inspection data; **maintenance actions reset degradation clocks** (a bearing
   replaced last week changes everything) — asset state is event-sourced (M-2 applied
   to assets; the gate's entity test becomes the asset-hierarchy test).
3. **Censoring is structural:** most assets haven't failed; survival methods or careful
   negative-sampling windows — never naive "failed vs not" classification (+M-6 is the
   principled fix).
4. **Operating-regime encoding:** load, duty cycle, season, product mix — or normal
   behavior gets flagged as failure (evidence 15 §23); per-asset heterogeneity handled
   with hierarchical/fleet models + asset-level calibration.
5. **Alarm-fatigue calibration:** thresholds set to maintenance capacity — an alert
   stream the planner can't absorb is a failed solution regardless of AUC; alert
   budgets are policy config (evidence 12 §18.4-v, §S2).
6. **Sensor-data quality monitored as rigorously as the model:** drop-outs,
   recalibrations, unit changes — sensor rot mistaken for degradation is a classic
   field failure.
7. **Lead-time matching:** predict far enough ahead to schedule parts + labor (the
   actionable horizon), not merely before failure.

### 11.3 Actions & decision policy

Auto-generated **draft work orders** with diagnosis, priority, recommended parts, due
window; maintenance-schedule integration (bundle with planned windows); parts
pre-ordering recommendations; inspection tasks for low-confidence alerts; deferral
recommendations on healthy assets (often the biggest quiet saving). Policy: severity →
priority mapping; capacity-aware daily alert budgets; criticality-tiered thresholds
(safety-critical assets alert conservatively); planner approval required for all work
orders in v1 (evidence 12 §18.5).

### 11.4 Systems of action & connectors

| System | Connector requirement | What lands |
|---|---|---|
| CMMS/EAM (SAP PM, Maximo, Fiix) | Write: draft work orders w/ diagnosis, parts, window. Read: work-order history (the label archaeology source) | **The solution-defining integration** |
| Historian / condition platform (PI/OSIsoft, telematics) | Read: sensor streams | The condition layer |
| ERP | Read/write: parts availability, pre-orders | Parts allocation |
| Scheduling boards | Write: bundling with planned windows | The planner surface |

**Technician feedback capture is a connector requirement, not a nicety:** structured
closeout findings ("confirmed bearing wear" / "false alarm") — a checkbox at closeout,
not a form — are the future labels (evidence 12 §18.7, §18.13).

### 11.5 People & cadence

Maintenance planners consume alerts and schedule (module owner: reliability
engineering lead); technicians execute and close the loop with findings; reliability
engineers own thresholds and asset criticality; plant leadership reviews downtime
economics monthly. Augments the planner; replaces calendar-only PM schedules.

### 11.6 Human-in-the-loop

Planner approves work-order creation (assisted) in v1; auto-creation only for proven
asset classes later (graduation ladder, per-class evidence); safety-critical
interventions always human-approved; shutdown decisions follow existing plant
authority chains; **safety-instrumented systems remain outside ML authority
entirely** (functional-safety boundary; evidence 12 §18.11).

### 11.7 Measurement loop

Phased rollout **by asset class** with before/after per class: unplanned-downtime
hours, maintenance cost, PM-task volume, catch rate (failures preceded by alerts) vs
false-alarm rate, **technician-confirmed alert precision** (the trust currency).
Shadow: alerts generated silently for 4–6 weeks; reliability engineers validate
tear-down-confirmed hits before planners see the queue (the Shell-documented
exception-based surveillance pattern — remote validation before local escalation;
evidence 15 §23). Guardrails: alert budget adherence, false-alarm streaks (a streak
trips a threshold review automatically), sensor-health index. Proof artifact: proof
pack with per-class catch/false-alarm matrix + confirmed-find case log (the
tear-downs that confirm the model create the plant's folklore of trust — evidence 12
§18.13) + downtime baseline comparison. **Downtime baselines are recorded in week 1 —
savings claims without before-measurement are unfundable phase 2** (F-5 below).

### 11.8 Deployment shape

E2/E3 expected (plant/fleet private cloud or on-prem; edge-adjacent ingestion); E1
supported for fleet telematics. **Streaming ingestion → near-real-time anomaly layer
(L3 detection) + daily risk scoring (L1)**; work-order creation is L1 batch.
Retraining per asset class quarterly; sensor-health monitors continuous. W2 engine
dependency: R3 + R4-lite (sensor material views).

### 11.9 Governance

Functional-safety boundary (above); alert-suppression changes reviewed by reliability
engineering (management-of-change discipline); OT-side security posture (read-only
historian taps; no ML write path to control systems — ever, in this module); CMMS
audit of draft → approve → execute → closeout; regulated maintenance regimes
(aviation-class) constrain automation depth where applicable (evidence 12 §18.11;
evidence 15 §23).

### 11.10 Packaging

**v1:** anomaly/condition layer on 10–50 most critical assets + draft work-order
generation + CMMS connector + alert-budget policy + technician feedback capture +
proof pack. **Attach:** +M-1 supervised failure models (once feedback labels
accumulate), +M-6 RUL/survival, parts-pre-order automation, fleet-wide scale-out.

### 11.11 Delivery plan (14–16 weeks)

| Weeks | Phase | Exit artifacts |
|---|---|---|
| 1–3 | Qualify | Asset-class scope (top critical assets); sensor/historian audit; work-order-history label archaeology; **downtime baseline recorded**; alert-budget agreement with planning |
| 4–6 | Secure env | E2/E3 deployment; historian/CMMS read connectors; OT security review; 0-egress verification |
| 7–10 | Build + govern | Gate certificate (asset-state event-sourcing, regime encoding, PIT maintenance context); condition baselines per asset; threshold policy signed by reliability |
| 11–14 | Shadow | 4–6 weeks silent alerts; engineer-validated hits (tear-down confirmations logged); planner workflow rehearsal |
| 15–16 | Convert | Draft work orders live for pilot class; first catch/false-alarm readout; proof pack v1; DoD checklist; supervised-layer attach criteria (label counts) |

### 11.12 Failure modes & countermeasures

| # | Failure mode | Countermeasure |
|---|---|---|
| F-1 | Alert-without-work-order (the pilot dashboard nobody schedules from — the family's most documented stall) | CMMS write path is the DoD action; work-order conversion rate is a module KPI |
| F-2 | Label starvation (supervised ambitions without failure history) | Anomaly-first v1 posture; supervised layer gated on accumulated closeout labels |
| F-3 | False-alarm trust collapse | Conservative launch thresholds; shadow validation before planner exposure; streak-triggered threshold review |
| F-4 | Sensor rot mistaken for degradation | Sensor-health monitors first-class; recalibration events in the asset ledger |
| F-5 | Savings claims without downtime baselines | Baseline recorded in qualify phase — contractual exit artifact |
| F-6 | Alerts exceed maintenance capacity | Alert budget as policy config; capacity review in the monthly council |
| F-7 | Model given authority near safety systems | Hard boundary: no write path to control/SIS; work orders only |

---

## 12. S-9 — Automated Email Outbound (UC-9)

One Orama catalog **#2** (kernel D3; evidence 07): scoring + segmentation powering
outbound — M-1 propensity × M-3 segmentation feeding governed, measured email journeys.
The kernel's open question 2 (internal-first vs customer-facing first) stands; this
spec is written to serve both, and the delivery plan assumes the **internal-first
proving ground** (Orama automating Orama's own outbound) unless the kernel resolves
otherwise (Appendix A, T-3).

### 12.1 Module framing

- **Promise:** *Outbound email that targets who's worth contacting, says what the data
  supports, and never exceeds contact governance — measured by incremental response.*
- **Methodology:** **M-1** (propensity-to-respond/convert scoring) + **M-3**
  (segmentation: audience cells × message variants) + **M-2** (contact identity/
  suppression resolution). Upgrades: **+M-7 uplift** (send-vs-hold incrementality —
  the natural upgrade), **+M-8 NBA-lite** (message/offer arbitration per contact).
- Composes with S-2 (lead scores select outbound audiences) and S-1 (retention
  journeys execute through the same rail).

### 12.2 Correctness adaptations

1. **Point-in-time features + label windows** exactly as S-1/S-2 (response windows;
   no post-send feature contamination).
2. **Selection/feedback bias:** the sender shapes its own future training data
   (engaged contacts get more email → more engagement signal); holdout cells and
   randomized message assignment keep the system learnable (evidence 12 §2.4's
   propensity-logging discipline applied at batch cadence).
3. **Suppression correctness as a gate check:** unsubscribes, bounces, complaints,
   do-not-contact flags, and *cross-channel* suppression resolved through M-2 —
   sending to a suppressed identity because it lived under a duplicate contact record
   is both a correctness failure and a legal one.
4. **Consent state as data:** lawful-basis/consent fields are features of
   *eligibility* (policy layer), never of *propensity* (model layer).
5. **Deliverability as drift:** domain reputation, spam-rate, bounce-rate monitored
   like model drift — a deliverability collapse invalidates both the measurement and
   the channel.
6. **Incrementality over response:** open/click propensity targeting rediscovers
   people who would engage anyway; the M-7 upgrade formalizes send-vs-hold uplift;
   v1's permanent holdout provides the training data.

### 12.3 Actions & decision policy

Journey enrollment per segment cell; send/hold decision per contact per cadence
window; message-variant assignment; automatic suppression. Policy: **contact-frequency
caps across all journeys** (global, not per-campaign); quiet hours; audience
eligibility rules (consent, region, lifecycle stage); volume ramps per domain
(deliverability); kill-switch per journey; approval gate on new audience definitions
and message templates (human-authored or human-approved copy in v1 — no ungoverned
generative sends).

### 12.4 Systems of action & connectors

| System | Connector requirement | What lands |
|---|---|---|
| ESP / marketing automation (HubSpot, Braze, Iterable, SFMC) | Write: segments, journey triggers, suppression lists. Read: sends, opens, clicks, unsubscribes, bounces, complaints | The execution rail |
| CRM | Read: contact/account state. Write: outbound activity log | Identity + eligibility source |
| Warehouse/CDP | Read: behavioral features | Scoring source |
| Deliverability tooling (postmaster feeds) | Read: reputation, spam rates | The drift monitor |

### 12.5 People & cadence

Marketing/growth ops owns the module (audiences, templates, caps); a weekly outbound
review inspects cell performance, suppression health, deliverability; sales receives
reply routing (when composed with S-2). Internal-first mode: Orama's own GTM operates
it — the dogfood telemetry becomes the customer-facing reference.

### 12.6 Human-in-the-loop

Automated sends within policy caps (per S-1's principle: automation of *contact* is
acceptable; concessions/copy changes are gated); humans own the catalog (audiences,
templates, offers); new journeys launch in shadow (scored, not sent) first; escalation:
complaint-rate or spam-rate breach auto-pauses the journey (kill-switch policy).

### 12.7 Measurement loop

**Permanent randomized holdout per audience cell** (send vs hold) — incremental
response/pipeline, not open rates; message A/B within cells; guardrails: unsubscribe
rate, spam-complaint rate (hard thresholds — breach pauses), deliverability indices,
contact-fatigue (touches per contact per month), downstream complaint/NPS where
composed with S-1. Proof artifact: proof pack with holdout readout (incremental
replies/meetings/pipeline per 1,000 sends) + governance panel (zero cap breaches, zero
suppressed-identity sends). Shadow: 2 cycles scored-not-sent, with predicted-vs-actual
on the incumbent's sends.

### 12.8 Deployment shape

E1/E2/E3; **L1 batch** (daily scoring, cadence-window sends); retraining monthly + on
audience/product shifts; deliverability monitors continuous.

### 12.9 Governance

Consent + anti-spam law as the policy frame: **CAN-SPAM (US), CASL (Canada), GDPR/
ePrivacy (EU)** — jurisdiction resolved per contact through M-2; identity-scoped
access to audiences; audit of every send decision (score → eligibility → send/hold →
outcome); suppression-list integrity checks; template approval workflow. The
low-liability principle (kernel D9-3) is honored by the internal-first path: prove the
governance envelope on our own domain reputation before operating a customer's.

### 12.10 Packaging

**v1:** propensity scoring + segment cells + ESP/CRM connectors + contact-governance
policy engine (caps, quiet hours, suppression, kill-switch) + holdout manager +
deliverability monitors + proof pack. **Attach:** +M-7 send-uplift, +M-8 message
arbitration, S-2 composition (lead-scored audiences), S-1 composition (retention
journeys).

### 12.11 Delivery plan (12 weeks; internal-first identical minus procurement)

| Weeks | Phase | Exit artifacts |
|---|---|---|
| 1–2 | Qualify | Audience + KPI scope (one journey family); consent/suppression inventory; jurisdiction map; deliverability baseline |
| 3–4 | Secure env | Env + SSO; ESP/CRM connectors; suppression-integrity verification; 0-egress check |
| 5–7 | Build + govern | Gate certificate (PIT features, suppression resolution, eligibility separation); cap policy signed; templates approved |
| 8–10 | Shadow | 2 cycles scored-not-sent; predicted-vs-actual readout; kill-switch drill |
| 11–12 | Convert | First governed journey live with holdout; incremental-response readout (leading); proof pack v1; DoD checklist |

### 12.12 Failure modes & countermeasures

| # | Failure mode | Countermeasure |
|---|---|---|
| F-1 | Contact fatigue / audience burn (short-term response, long-term list destruction) | Global frequency caps; fatigue guardrail; holdout detects negative drift |
| F-2 | Suppressed identity mailed via duplicate record | M-2 suppression resolution is a gate check; zero-tolerance guardrail |
| F-3 | Deliverability collapse from volume enthusiasm | Volume ramps per domain as policy; reputation monitors auto-throttle |
| F-4 | Optimizing opens/clicks over incremental pipeline | Holdout-first measurement; the proof pack reports increments only |
| F-5 | Journey sprawl outrunning governance | Journey registry with owner + kill-switch per journey; unowned journeys auto-expire |
| F-6 | Generative copy shipped ungoverned | v1 policy: human-approved templates only; generative drafting arrives with M-9 under the same approval gate |

---

## 13. Cross-solution syntheses

### 13.1 Anatomy mapping — S-1…S-9 at a glance

The catalog read vertically (the factory's proof: methodologies repeat, correctness
rhymes, four action patterns cover every row — evidence 12 §S1):

| S | Module owner (customer) | Cadence / latency | Action pattern | Measurement core | Governance frontier |
|---|---|---|---|---|---|
| S-1 | Retention/CS leader | Weekly–monthly · L1 (opt. L3 cancel-save) | Task-in-CRM + report→council | Permanent holdout; uplift A/B | GDPR profiling; offer fairness; SR 11-7/NAIC overlay in FS/insurance |
| S-2 | RevOps | Daily · L1 (opt. L2 inbound) | Task-in-CRM (queues/SLAs) | Randomized routing experiment; exploration slice | Proxy-bias screen; enrichment permissions |
| S-3 | Growth + finance (co-own) | Daily sync, weekly score · L1 | Policy engine (audience/budget) + report | Geo tests; promo holdouts; cohort calibration | Consent on audience export; discount fairness |
| S-4 | Collections strategy | Daily by cycle · L1 | Policy engine + dialer queues | Champion/challenger cells; net recovery | FDCPA/Reg F · CONC/Consumer Duty · SR 11-7 (bank) |
| S-5 | Demand-planning lead | Daily · L1 (L2 fresh) | Report→planner + exception queue | FVA vs baselines; phased by category | Override audit; version control |
| S-6 | Replenishment ops + finance | Daily · L1 | Task-in-ERP (draft orders) | Phased before/after; acceptance/edit distance | Spend caps; segregation of duties |
| S-7 | Exec forum owner | Monthly/quarterly editions · L1 | Report→decision forum with log | Decision-adoption + forecast honesty | Sensitive-driver access; causal caveats |
| S-8 | Reliability engineering | Streaming detect (L3) + daily score (L1) | Task-in-CMMS (work orders) | Phased by asset class; confirmed-alert precision | Functional-safety boundary; OT security; MoC |
| S-9 | Marketing/growth ops | Daily · L1 | Policy engine (journeys in caps) | Send/hold holdout per cell | CAN-SPAM/CASL/GDPR; suppression integrity |

Two structural observations. **(1) No Tier-1 module needs L4 request-time serving** —
the anti-portfolio's exclusion of real-time decisioning holds across the whole launch
catalog, which materially simplifies the W1/W2 engine surface (batch scoring +
materialized marts + connector pushes). **(2) Every module runs two layers where it
matures** — an action layer (patterns 2/3) and a report layer (pattern 1, S-7's
machinery); the automated layer harvests today's value while the report layer changes
tomorrow's business (evidence 12 §S4).

### 13.2 Shared-wiring inventory — the connector reuse frontier

Which systems of action recur, and which modules they serve (build once, attach
everywhere — the platform corollary of evidence 12 §S3: component reuse is even denser
than methodology reuse):

| Connector family | Serves | Read | Write | Build priority |
|---|---|---|---|---|
| **CRM** (Salesforce/HubSpot/Dynamics) | S-1 S-2 S-3 S-9 (+T2 ticket triage) | Accounts, activities, **field history** | Scores, reason codes, tasks w/ SLA, activity log | **W1 — first build; 4 of 6 W1 modules** |
| **Billing / AR** (Stripe/Zuora/NetSuite/core banking) | S-1 S-3 S-4 | Subscriptions, invoices, payments, delinquency | Gated: discounts/entitlements (S-1); none (S-4 reads only) | W1 |
| **Marketing automation / ESP** (Braze/HubSpot/SFMC/Iterable) | S-1 S-9 (S-3 segments) | Engagement events, suppression state | Segments, journey triggers, suppression lists | W1 |
| **Warehouse/CDP** (Snowflake/BigQuery/Databricks/Postgres) | All nine | Feature/label sources w/ lineage | Score marts, audiences | W1 — the universal substrate |
| **Ticketing / support** (Zendesk/Jira) | S-1 (features), S-7 (KPI wiring), T2 triage | Tickets | Escalation tasks, tracked actions | W1-lite (read), W2 (write) |
| **BI layer** (Power BI/Tableau/Looker) | S-1 S-5 S-7 (all report layers) | — | Report editions, guardrail panels | W1 |
| **Dialer / collections platform** (FICO DM class) | S-4 | Contact events (reconciliation) | Queue order, treatment codes | W1 (with S-4's first FS partner) |
| **ERP / planning** (SAP/Oracle/RELEX/o9) | S-5 S-6 (+T2 supplier risk) | Sales, inventory, master data, lead times | Forecasts, exceptions, draft POs | W2 |
| **CMMS/EAM + historian** (Maximo/SAP PM · PI) | S-8 | Work-order history, sensor streams | Draft work orders, closeout capture | W2 |
| **Ad platforms** (Google/Meta) | S-3 | Lift-study results | Value-based audiences, conversion values | W1 (S-3 scope) |

Cross-cutting product components every module consumes (the true shared spine): the
**snapshot/feature store with time-travel** (as-of joins), **M-2 entity/identity
resolution**, the **decision-policy engine** (thresholds/caps/eligibility/approvals/
kill-switches as versioned config), the **holdout/experiment manager**, the **drift +
guardrail monitor**, the **audit ledger** (score→action→outcome), and the **proof-pack
generator**. These seven are the module factory; per-solution work above them is
configuration + connectors + domain policy.

### 13.3 Module upgrade matrix — which W2/W3 methodologies upgrade which solutions

The attach-revenue map (kernel D6: expansion = module attach along the reuse frontier):

| Upgrade methodology | S-1 | S-2 | S-3 | S-4 | S-5 | S-6 | S-7 | S-8 | S-9 |
|---|---|---|---|---|---|---|---|---|---|
| **M-4 forecasting** (W2) | — | — | value trajectories | roll-rate forecasting | **core** | **core** | forecast-vs-actual decomposition | — | volume pacing |
| **M-5 anomaly** (W2) | early-warning on usage collapse | — | — | — | demand anomalies | supply anomalies | **full alert layer** | **core (condition layer)** | deliverability anomalies |
| **M-6 survival** (W2) | **churn timing** | — | tenure-correct CLV | time-to-payment | — | — | — | **RUL** | re-engagement timing |
| **M-7 uplift/causal** (W3) | **persuadability targeting** | worked-lead incrementality | promo uplift | **treatment assignment** | — | — | driver→experiment lane | — | **send/hold uplift** |
| **M-8 NBA-lite** (W3) | treatment arbitration | next-best-touch | offer allocation | treatment-ladder arbitration | — | — | — | — | **message arbitration** |
| **M-9 embeddings/docs** (W3) | support-text drivers | call-notes signals | — | hardship-letter triage (T2) | — | — | **VoC text drivers** | work-order text mining (labels) | generative drafting (gated) |
| **M-11 optimization** (W4) | budget allocation | capacity/territory | budget allocation | treatment-mix optimization | — | **multi-echelon** | — | maintenance scheduling | send-time/volume optimization |

Bold = the designed, priced attach. Reading: **M-7 is the highest-leverage single
upgrade** (it upgrades four modules from propensity to persuadability — kernel open
question 3 on its timing is a real revenue question), and **M-6 + M-5 justify W2 on
attach revenue alone** before S-5/S-6/S-8 even open their new families.

### 13.4 Bundles the field will actually sell

- **Revenue Intelligence** = S-1 + S-2 + S-3 (one CRM/warehouse wiring, three heads;
  the B2B SaaS/tech tier-2-industry default).
- **FS beachhead** = S-4 + S-1(deposit attrition) + S-7 (kernel D5 tier 1a's named
  trio) under one SR 11-7-legible governance surface.
- **Operational proof** = S-8 + S-5/S-6 + S-1 (kernel D5 tier 1c — Motive-shaped).
- **Exec surface** = S-7 attached to any of the above (the wholesale layer as its own
  SKU).

---

## 14. Tier-2 solution sketches (gated — kernel D3)

One paragraph + the gate each. These enter the catalog as S-10+ only through the
kernel's admission criteria and the `add-use-case` runbook; numbers below are
provisional and not committed.

**T2-a · Fraud & AML triage (assistive).** Alert-queue prioritization over
transaction/KYC alerts — M-1 scoring + M-2 identity graphs, task-in-case-management
wiring, below-the-line audit sampling as the measurement spine (evidence 12 §14). Not
real-time decisioning (anti-portfolio). **Gate:** W3 governance maturity (R6) +
model-risk validation artifacts hardened by ≥1 S-4 bank deployment; below-the-line
sampling shipped as product.

**T2-b · Credit-risk-adjacent scoring.** Limit management, early-delinquency risk,
SMB cash-flow lending support — M-1 under full **SR 11-7 + ECOA/FCRA** discipline:
reject inference, vintage validation, adverse-action reason codes, fairness testing
as legal correctness (evidence 15 §20; evidence 12 §15). **Gate:** MRM-legible
validation pipeline proven via S-4; adverse-action reason-code generation productized;
counsel-reviewed fair-lending test suite. Never auto-decisioning in the first
engagement.

**T2-c · Insurance claims triage & lapse/retention.** Severity/complexity routing +
SIU referral (assistive) and the S-1 lapse variant — M-1 (+M-9 for claim documents
later), policy-engine wiring with STP-leakage audits (evidence 12 §16; evidence 15
§21). **Gate:** NAIC AI-bulletin governance program template ready (inventory,
testing evidence, adverse-impact review); an insurance design partner (kernel D5
tier 1b) signed; photo/document methodology (M-9) only after the tabular triage core
proves.

**T2-d · Employee attrition (aggregate-first).** Attrition-driver reporting to
HR/leadership via S-7's machinery — **aggregate-level, no automated individual
action**, consent + works-council engagement early; individual flags are the
documented reputational minefield (evidence 12 §28-referencing §S6; EU AI Act
high-risk classification applies to employment decisions). **Gate:** heightened HR
governance pack (privacy, proxy screening, small-n honesty); sold only as the S-7
report pattern; individual-level anything stays out of scope pending kernel review.

**T2-e · Customer-service ticket triage.** NLP classification routing tickets with
confidence→action mapping and abstention (evidence 12 §7) — the first M-9-family
production wiring. **Gate:** W3 (M-9 shipped); misroute-rate measurement harness;
starts assistive (suggested routing) with phased rollout by queue.

**T2-f · Supplier risk.** M-1 scoring + S-5's ERP wiring aimed at supplier delay/
default; task-in-procurement actions (dual-source, expedite, buffer). **Gate:** ≥3
tiered use cases demanding the external-data enrichment component (kernel reuse
rule); an S-5/S-6 reference in manufacturing/logistics first.

**T2-g · Healthcare ops (no-show, denials) — partner-led.** M-1 on scheduling/claims
ops with task-in-EHR/RCM wiring; PHI-grade governance (BAAs, minimum-necessary
access) (kernel D5 tier 2). **Gate:** a healthcare design partner leading; PHI
deployment posture documented per environment class; assistive-only actions.

**T2-h · Forecast-to-action automation upgrades (S-5/S-6 rung 3).** Bounded
auto-release of replenishment orders (spend caps, deviation caps, kill-switch,
below-the-line audits) — the S-6 graduation ladder's top rung as its own priced
upgrade. **Gate:** ≥1 quarter of rung-2 release-quality evidence at the customer;
kernel D7-5 satisfied per segment; financial-controls sign-off.

---

## Appendix A — Tensions for kernel review

Recorded per D1/plan-CLAUDE convention: elaborations that surfaced genuine friction
with the kernel. None are contradictions shipped in this doc — each is flagged and the
kernel-conservative reading applied until resolved.

**T-1 · S-6's separateness from S-5.** UC-5 and UC-6 are distinct kernel use cases,
but S-6 is engineering-wise an attach on S-5 (same methodology M-4, same connectors,
one added policy layer). This catalog specs S-6 as a dependent attach module
(requires S-5). If the kernel intends S-6 as an independently sellable SKU (own price,
own DoD path without S-5), the packaging in §9.10 and the CFO's module pricing need a
decision. **Ask:** confirm S-6 = attach-only, or spec a standalone S-6.

**T-2 · S-7 v1 ships before M-5.** The kernel lists UC-7's methodology as "M-1/M-5"
and tiers UC-7 in the launch portfolio, but M-5 is a W2 methodology. This catalog
resolves it by scoping S-7 v1 to M-1 driver analysis + *statistical control-limit
alerting* (not the M-5 methodology), with full M-5 as a W2 attach (§10.1, §10.10).
**Ask:** kernel to confirm control-limit alerting is in-scope for W1 (as M-1/M-3
adjacency), or to move S-7 GA to W2.

**T-3 · S-9's liability posture vs D9-3.** Automated outbound is a customer-visible
automated action on day one — mildly in tension with "assistive before automated."
The spec threads it via contact-governance hard caps + shadow-first + the
internal-first path (which also answers kernel open question 2 in practice: prove on
Orama's own outbound, then sell). **Ask:** ratify internal-first as the S-9 sequencing
decision, or explicitly accept customer-facing-first with the governance envelope as
specced.

**T-4 · The 12–16-week window vs label physics.** For S-1 (90-day churn windows) and
S-4/S-3 (multi-cycle labels), the *complete* holdout readout arrives after week 16 —
weeks 20–24. The kernel's design-partner scope (D6: "one KPI", 12–16 weeks) and DoD
("measured against a holdout or baseline") are satisfiable at conversion only via
shadow-production correctness + leading indicators, with the full incremental readout
contractually delivered post-conversion. This catalog writes every delivery plan that
way. **Ask:** kernel to bless "DoD's 'measured' = baseline/shadow + armed holdout at
conversion; full holdout readout as a post-conversion deliverable," or extend the
program window for label-slow modules.

**T-5 · M-7's timing is attach revenue, not just engineering order.** The upgrade
matrix (§13.3) shows M-7 upgrading four W1 modules; every S-1/S-4 v1 deployment
accumulates randomized-treatment training data that makes the M-7 attach cheap and
credible. This strengthens the case for M-7 early in W3 (kernel open question 3):
recommend deciding after the **second** deployed M-1 solution rather than the third,
if partner cell data is accumulating on schedule. **Ask:** kernel open question 3 —
consider revising the trigger.

**T-6 · Module pricing mechanics (existing kernel open question 4).** No new tension;
noted that §13.3's bold "designed attaches" and §13.4's bundles are the unit structure
the CFO's per-module-flat vs value-indexed decision must price. This catalog
deliberately contains no prices.

---

*End of catalog. S-1…S-9 specs + anatomy + syntheses + T2 sketches; evidence cited
inline as (evidence NN §…) per plan conventions; vendor-reported magnitudes flagged
as such wherever quoted.*
