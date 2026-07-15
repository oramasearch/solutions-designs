# Data strategy — data → agents → ROI (D7 elaborated)

> **Status:** v2 — 2026-07-15 · **Author:** CDO (combined executive team) ·
> **⚠️ Internal-confidential** · Elaborates kernel v2 **D7** (future state · no
> sequencing · ROI-central · Auto-RL-central).
>
> **Kernel-binding.** This document elaborates the
> [strategy kernel](00-strategy-kernel.md) **D7 (data → agents → ROI)** and answers
> **kernel open question 4** (the generalized-learning boundary, §6). It is the
> canonical home of the structures the sibling documents point to: the **data supply
> chain** (§2) that [`04-solutions-catalog.md`](04-solutions-catalog.md) instantiates
> per module, the **per-methodology data requirements** (§5) that
> [`03-methodology-portfolio.md`](03-methodology-portfolio.md) declares per component,
> and the **data-readiness score** (§2.10, §4) that feeds the D1 p(success) rubric in
> [`02-use-case-portfolio.md`](02-use-case-portfolio.md) and doc 07's factor model.
> Genuine tensions go to [Appendix A](#appendix-a--tensions-for-kernel-review) and
> resolve in the kernel first. Citations are **(evidence NN)** →
> [`../evidence/`](../evidence/).

---

## 1. The data thesis

**Data is the fuel of the agent economy.** The kernel's future state (§1) is a factory
whose product is a deployed, governed solution **operated by an Auto-RL agent trained
on the customer's own data** (kernel D2; evidence 06 "learning, not inference";
evidence 08 Auto-Suggest / Auto-RL / Personalized MCP). An agent economy runs on
exactly one input that cannot be bought, rented, or prompted into existence: the
customer's own decision history — what was known, what was decided, what was done, and
what happened next. The CDO function exists to turn that history from **exhaust into a
supply chain** (kernel D10.7), for every pathway in the portfolio:

1. **For each solution** (D4/D6): we collect and refine the data that trains the
   agent operating that solution — the sources, entities, labels, and above all the
   **action-taken + result-observed stream** that is the RL reward signal (kernel
   D7.1). A solution without a defined data supply chain does not enter the catalog.
2. **For each methodology** (D5): every tool in the agent's toolbox declares its data
   requirements — modality, minimum viable data, label needs, history depth, freshness
   — so Auto-Suggest can score feasibility against the customer's actual data before
   anything is proposed (evidence 08: suggestions must be grounded in the customer's
   real data, not hallucinated).
3. **The reward is ROI** (kernel D7.2): the metric the customer pays for (D8) is the
   metric the agent learns on. The measurement loop that proves the return (D1
   corollary b) is not a reporting afterthought — it is simultaneously the **billing
   instrument** (D8) and the **training signal** (§3). One quantity, three uses.
   This collapses the classic misalignment where the model optimizes AUC while the
   business buys retained revenue: in our future state there is no offline metric to
   diverge from, because the agent's objective *is* the customer's measured return.
4. **Data assets compound into the second moat layer** (kernel D7.3): per-customer
   data and weights stay the customer's; cross-customer **generalized** assets —
   schemas, ontologies, playbooks, priors, benchmarks, synthetic corpora — are ours,
   and raise every future agent's starting point (evidence 06: "the more of your data
   flows through it, the further it pulls ahead"; evidence 08 IP split). The first
   moat layer is own-data training itself; the second is that our *base* agent begins
   every engagement already knowing what a thousand supply chains taught it about
   churn, fraud, and forecasting — without carrying a single customer's row. §6
   defines this boundary precisely.

The evidence base is blunt about why this is where the value lives: enterprise AI
fails at the problem-and-plumbing layer, rarely at the model layer (kernel D1;
evidence 11 failure patterns; evidence 12 Synthesis 6; evidence 14/15). The recurring
failure modes — leakage-inflated pilots, score-without-action, no holdout, drift rot,
label garbage (evidence 12 §S6) — are all **data supply-chain failures**. The factory
that industrializes the supply chain industrializes p(success).

**The thesis in one line:** every solution is a loop — *data → agent → action →
measured ROI → new data* — and the CDO owns the loop's material flow end to end.

---

## 2. The canonical data supply chain

**Every solution instantiates one structure.** The supply chain below is the canonical
form; docs 02/03/04 reference its stages by ID (`DSC-1`…`DSC-8`). A solution's **data
plan** (required by kernel D6(d)) is exactly: one concrete instantiation of each stage,
plus the reward expression (§3) and the data-readiness score (§2.10). The stages are a
**flow**, not a sequence of work — in the future state all eight run continuously and
concurrently, operated by the customer's agent under governance (kernel D2.5).

```
DSC-1 SOURCES → DSC-2 RESOLUTION → DSC-3 POINT-IN-TIME STORE
      → DSC-4 LABELS & OUTCOMES (incl. ACTION-TAKEN + RESULT-OBSERVED)
      → DSC-5 REFINEMENT → DSC-6 TRAINING SETS → DSC-7 EVALUATION DATA
      → DSC-8 FEEDBACK LOOP ──────────────────────────┐
        └──────────── operations → new training data ◄┘
```

### Stage summary

| ID | Stage | What it produces | Owner (future-state role, §9) | Quality contract (§8) | Governance |
|---|---|---|---|---|---|
| DSC-1 | **Sources** | Connected systems of record, profiled | Supply-chain owner (per solution family) | Schema conformance · completeness · freshness SLO | Identity-scoped connectors; consent + lawful basis recorded per source |
| DSC-2 | **Resolution** | One resolved entity spine (customer/asset/claim/…) | Supply-chain owner + resolution service | Precision/recall on golden pairs · duplication rate | Merge/split audit trail; resolved IDs are pseudonymous keys |
| DSC-3 | **Point-in-time store** | Leakage-safe, as-of-queryable history | Supply-chain owner | Bitemporal integrity · no post-hoc mutation · as-of join correctness | Immutable; access-scoped; retention policy per source |
| DSC-4 | **Labels & outcomes** | Label sets + the action/result ledger (the RL reward stream) | Reward engineer (label design) + outcome owner (capture) | Label latency SLO · outcome-capture coverage ≥ contract · leakage audit | Outcome ledger is append-only and audited (it is also the billing record, D8) |
| DSC-5 | **Refinement** | Curated, enriched, contract-passing feature/label data | Supply-chain owner | Per-field quality contracts · drift alarms · enrichment provenance | Enrichment sources consent-checked; PII minimization |
| DSC-6 | **Training sets** | Supervised sets + RL trajectories, versioned | Reward engineer + CTO agent-training seam | Group-aware, out-of-time splits · train/serve consistency · version pinning | Stays in customer environment; feeds customer-owned weights (§6) |
| DSC-7 | **Evaluation data** | Sacred holdouts, golden sets, eval harnesses | Eval-data steward (independent of DSC-6 owner) | Contamination = 0 · power adequacy · integrity attestation | Holdout membership secret from the agent; dual-control changes |
| DSC-8 | **Feedback loop** | Operations events flowing back as DSC-4 inputs | Supply-chain owner + agent (autonomous under audit) | Loop latency SLO · coverage of all action paths | Same audit regime as actions themselves (kernel D7.5) |

### 2.1 DSC-1 — Sources (systems of record + connectors)

**What.** The systems where the business's decisions already leave traces:
CRM/ERP/billing/telemetry/tickets/claims/sensors (kernel D3) — connected in place,
inside the customer's walls (evidence 06: "the data stays put; the work is deployed to
it"; data egress = 0 bytes). Each source is **profiled** on connection — schemas,
volumes, fill rates, timestamp semantics, key candidates — because Auto-Suggest's
grounding and the correctness gate's schema type-checks both run against real source
profiles, not assumed ones (evidence 06 correctness gate: "a reference to data that
isn't there is flagged, not silently generated").

**Quality contract.** Per source: schema conformance (breaking change = alarm, not
silent coercion), freshness SLO matched to the solution's decision cadence, field-level
completeness floors, and timestamp trustworthiness classification (event time vs
ingestion time vs mutation time — the raw material of DSC-3).

**Governance.** Every connector is identity-scoped (the connector holds the access the
outcome owner's organization granted, never a super-user); lawful basis and consent
posture recorded per source at connection time (§7); residency inherited trivially —
the connector reads in place.

### 2.2 DSC-2 — Resolution (entity unification)

**What.** One resolved spine per solution family's core entity — *customer* across
billing/CRM/product/support (churn, NBA, collections), *card/device/merchant/ring*
graphs (fraud), *claimant/provider/repair-shop* networks (claims), *asset/component*
hierarchies (predictive maintenance). Mis-resolved entities are simultaneously a
leakage source (duplicate rows straddling splits), an action-integrity failure
(treatment aimed at the wrong unit), and a reward-corruption channel (outcome credited
to the wrong trajectory) — evidence 12 §1 names entity resolution as half the value in
AML and a silent catastrophe in claims. The website promise makes it a product
property: "ask for one subsidiary's risk and it resolves to the right entity — never
several blended into an averaged, flattering blur" (evidence 06).

**Quality contract.** Precision/recall against a maintained golden-pair set; duplicate
rate; merge/split stability (entity identity churn is itself drift). **The resolution
unit must equal the action unit** — the entity the business can act on (household vs
account vs user), because reward attribution happens at the action unit.

**Governance.** Resolution decisions are audited (merges are consequential:
they join histories and access scopes); resolved IDs are pseudonymous keys so
downstream stages handle keys, not identities, wherever possible.

### 2.3 DSC-3 — Point-in-time store (leakage-safe history)

**What.** The bitemporal record: every fact keyed by (entity, as-of time), every
feature computable *as of* any past decision moment using only what was knowable then.
This is the single most consequential correctness structure in the supply chain —
almost every naive enterprise model leaks the future into its features (evidence 12 §1:
post-T support tickets "predicting" the churn they were caused by; CRM fields backfilled
after close corrupting lead scoring; reserve updates leaking claim outcomes). The
correctness gate's leakage and point-in-time checks (evidence 06) are *checks*; the
point-in-time store is the *substrate that makes passing them possible*.

**Quality contract.** No post-hoc mutation of as-of views; as-of join correctness
verified by replay tests (recompute a historical scoring run bit-identically);
mutation-prone sources (CRM field edits) captured via field-history/CDC so the store
holds what-was-known-when, not what-is-believed-now.

**Governance.** Append-only and immutable within retention policy; access is scoped by
identity like every read (evidence 06 governed-by-default); retention and deletion
policy per source class (§7 — deletion creates tombstones that propagate to DSC-6).

### 2.4 DSC-4 — Labels & outcomes (the reward stream)

**What.** Two distinct products, deliberately co-owned:

- **Labels** — the supervised ground truth: the outcome definition per use case
  (churned within (T, T+H]; transaction charged back within maturation window;
  component failed within horizon; invoice rolled 30→60). **Label design is decision
  design**: the window H is chosen to match the business's ability to act (a 7-day
  churn horizon is accurate and unactionable — evidence 12 §1); label maturity and
  censoring are honored (fraud labels arrive as chargebacks weeks later; active
  customers are right-censored, "didn't churn *yet*" ≠ "won't churn").
- **The action/result ledger** — *new in the agent economy, and the stage most
  supply chains lack entirely*: an append-only record of **every action taken**
  (what, on which entity, when, by whom/which policy, at what cost, and — critically —
  **what could have been taken instead and with what probability**: propensity
  logging) joined to **every result observed** (the outcome inside the attribution
  window, plus guardrail readings: complaints, NPS, margin). This ledger **is the RL
  reward stream** (kernel D7.1): a trajectory is a sequence of (state from DSC-3,
  action from the ledger, reward from the measured result). It is also, by
  construction, the ROI measurement record (D1 corollary b) and the billing record
  (D8: "the measurement loop is the billing instrument"). Evidence 12's
  action-integration and measurement-loop syntheses (§S4–S5) show that mature
  practice already half-builds this — decision logs, champion/challenger cells,
  treatment-outcome joins; we make it a first-class, schema'd product of every
  solution.

**Quality contract.** **Outcome-capture coverage** — the share of actions whose result
is observed and joined within the attribution window — is a first-class metric of
kernel D9 ("data-flywheel health") with a contracted floor per solution (§10).
Label-latency SLO (time from event to usable label). Leaky-label audit: features that
proxy the label excluded by construction, with too-good-to-be-true detectors (offline
AUC > 0.95 on a hard problem is a leakage alarm, not a triumph — evidence 12 §1).

**Governance.** The ledger is append-only, dual-purpose-audited (it supports both the
customer's ROI readout and our success-linked pricing true-up, so its integrity is a
commercial control, not just a data-quality one); actions on persons carry the
consent/suppression state they executed under (§7).

### 2.5 DSC-5 — Refinement (quality contracts, enrichment, curation)

**What.** The transformation of resolved, point-in-time, labeled raw material into
model-grade inputs: feature curation with per-field quality contracts; enrichment
(firmographics, geography, device intelligence, external signals — each with recorded
provenance and consent posture); imbalance handled at the decision layer rather than
by mangling data, with post-sampling calibration when sampling is used (retention and
collections economics need calibrated probabilities, not rank order — evidence 12 §1);
disposition-quality review where labels are human behavior rather than ground truth
(AML dispositions reflect staffing, not truth — evidence 12 §14); annotation and
weak-supervision workflows where labels must be manufactured (documents, speech,
vision — §5). Refinement is a **first-class function owned by the CDO** (kernel D7.4),
not a preprocessing footnote.

**Quality contract.** Every refined field carries: definition, valid range/set,
completeness floor, freshness, lineage to sources, and a drift alarm (PSI or
equivalent). A field without a contract does not enter DSC-6.

**Governance.** PII minimization at refinement (the model gets the least identifying
representation that preserves signal); enrichment lawfulness checked per jurisdiction;
protected attributes handled per the solution's fairness design (present for fairness
*testing*, excluded or constrained for *training*, per regulatory overlay — §7).

### 2.6 DSC-6 — Training sets (supervised + RL trajectories)

**What.** Two set families, versioned and reproducible:

- **Supervised sets** — point-in-time feature matrices + labels, split **out-of-time**
  and **group-aware** (an entity's rows never straddle train/test; validation is
  temporal, never random k-fold on time-ordered data — evidence 12 §1), with
  train/serve consistency guaranteed by construction (the serving graph and the
  training set are generated from the same feature definitions — the engine's
  compile-once property closes the classic reimplementation gap).
- **RL trajectory sets** — episodes assembled from DSC-3 states, ledger actions, and
  measured rewards (§3), including the **counterfactual apparatus**: logged
  propensities for off-policy evaluation, exploration-slice flags, holdout-membership
  exclusions (trajectories that touched sacred holdout entities are quarantined from
  training — §2.7). These are the Auto-RL feedstock (evidence 08): the agent is
  post-trained per customer on *their* trajectories.

**Quality contract.** Version-pinned (every trained agent references the exact
training-set version — the reproducibility spine of the correctness gate for agents,
kernel D2.5); split-integrity tests run on every build; trajectory completeness (no
truncated episodes silently included).

**Governance.** Training sets never leave the customer environment; the weights they
produce are **customer-owned** (§6). Deletion tombstones from DSC-3 propagate here
(§7.5).

### 2.7 DSC-7 — Evaluation data (holdouts as sacred assets)

**What.** The solution's ability to *prove* anything — to the customer (ROI readout),
to the correctness gate (agent eval), and to the pricing true-up (D8) — rests on
evaluation data whose integrity is beyond suspicion. Three asset classes:

1. **Permanent randomized holdouts** — entities receiving no (or baseline) treatment,
   maintained indefinitely per risk tier (typically 5–10% — evidence 12 §1), so
   incremental ROI = treated − holdout, never raw response. The single most
   documented measurement failure in the evidence base is claiming natural retention
   as campaign effect because no holdout exists (evidence 12 §1, §S5) — in our model
   that failure would corrupt the reward, the ROI claim, *and* the invoice
   simultaneously, which is precisely why the holdout is sacred.
2. **Golden evaluation sets** — human-verified judgment sets for components whose
   quality is otherwise unmeasurable (retrieval judgment sets, document-extraction
   field audits, ASR calibration sets — §5), sized per methodology norms
   (evidence 10 §11 fields).
3. **Agent eval harnesses** — scenario suites with verifiable outcomes that gate an
   agent build before it operates (the answer to evidence 08's open question "what
   does the eval gate look like for an RL-trained agent": the same correctness-gate
   posture as graphs — blocked, with a reason, on failure — run against held-out
   scenarios and held-out time).

**Ownership & quality contract.** Owned by an **eval-data steward independent of the
training-set owner** (separation of duties: the party that trains never controls the
data that judges). Contamination = 0 is a hard guardrail (holdout entities excluded
from training trajectories; golden sets never used for model selection more than their
statistical budget allows). Holdout **membership is secret from the agent** — an agent
that can identify holdout entities can game its own readout (§3.4). Power adequacy
reviewed against the ROI model's minimum detectable effect. Changes require
dual control and are audited.

### 2.8 DSC-8 — Feedback loop (operations → new training data)

**What.** The stage that makes the supply chain a *loop* (kernel D7.1: "the feedback
loop that turns operations into training data"): every run of the deployed solution —
every score served, action executed, approval granted or withheld, override applied,
outcome observed, drift alarm raised — flows back as structured DSC-4 input. This is
the website's promise made mechanical: "each run is grounded experience the next graph
learns from" (evidence 06). Human overrides are captured as first-class events (an
override is a label about the policy, and repeated overrides are the strongest drift
signal an agent gets); approval-gate decisions likewise (kernel D2.5).

**Quality contract.** Loop-latency SLO (event → available-for-training) matched to the
solution's retraining cadence; **coverage of all action paths** (an action channel that
doesn't report back is reward blindness — the fraud dossier's "the system never learns
what it declined" generalized — evidence 12 §13); exploration budget maintained (a
loop without exploration collapses onto a self-confirming policy — evidence 12 §2).

**Governance.** The loop operates under the identical identity-scoped, audited,
consent-aware regime as everything else (kernel D7.5) — collection *by the agent* is
still collection.

### 2.9 Who the supply chain serves — the three consumers

Every stage output has exactly three consumers, and the design must satisfy all three
from one substrate (no parallel truths):

| Consumer | What it takes | Why one substrate |
|---|---|---|
| **The agent** (CTO seam) | DSC-6 training sets, DSC-8 fresh experience, §3 rewards | The agent must learn on the metric that is billed and proven — divergence = misalignment |
| **The ROI readout** (CPO/CFO seam) | DSC-4 ledger + DSC-7 holdouts | The readout must be computed from the same ledger the agent learned on — else "measurement theater" (evidence 12 §S5) |
| **The customer's eyes** (product surface) | Lineage, freshness, confidence per answer (evidence 06) | Trust is a data product: "sources, freshness & confidence shown" is a rendering of DSC metadata, not a separate system |

### 2.10 The data-readiness score (the D1 hook)

The **data-readiness score (DRS)** is the data component of p(success) (kernel D1
lists "data availability & label quality" first among p(success) drivers). It is
computed per (solution, customer) by scoring eight named checks — one per stage — each
0–1, combined multiplicatively for the hard gates and weighted for the soft ones:

| Check | Stage | What it verifies | Hard/soft |
|---|---|---|---|
| DR-1 source sufficiency | DSC-1 | Required sources exist, connectable, with the fields + volumes the methodology needs (§5 minimums) | Hard |
| DR-2 resolvability | DSC-2 | Join keys / quasi-identifiers support resolution at the action unit | Hard |
| DR-3 history depth & PIT reconstructability | DSC-3 | Enough history (label windows + seasonality, §5) and point-in-time reconstruction is possible (field history exists or accumulation is acceptable to the ROI clock) | Hard |
| DR-4 label & outcome capturability | DSC-4 | Labels derivable from recorded outcomes; action + result capture paths exist for every planned action; an outcome owner is named (kernel D3 anti-customer: no owner ⇒ p(success)→0) | Hard |
| DR-5 refinement burden | DSC-5 | Quality-contract gap between as-found and model-grade; annotation budget where labels are manufactured | Soft |
| DR-6 trajectory viability | DSC-6 | Decision volume and reward observability meet the reward design's minimums (§3, §5 bandits/RL rows) | Soft (hard for direct-reward designs) |
| DR-7 evaluability | DSC-7 | Holdout is operationally and ethically feasible at the power the ROI model needs; golden sets constructible | Hard |
| DR-8 loop closure | DSC-8 | All action channels report back; exploration is permitted by policy | Soft |

The DRS is the quantity doc 02's p(success) rubric consumes and doc 07 calibrates
(ex-ante DRS vs ex-post delivery), and its portfolio-wide distribution is a §10
metric. **A hard-check failure is a data-plan workstream priced into customer
investment (D1: "data work"), not a disqualification** — the future-state question is
whether the supply chain *can* exist economically, not whether it exists today.

---

## 3. Reward engineering — the CDO×CTO seam

**Reward engineering is the discipline of turning the solution's measured ROI into a
training signal the agent can actually learn from** (kernel D7.2: "the metric the
customer pays for is the metric the agent learns on"). It is jointly owned: the CDO
specifies *what the reward is and where its data comes from* (this section); the CTO
specifies *how the agent optimizes it* (doc 03). The seam artifact is the **reward
specification** — a versioned, per-solution document defining the reward function, its
data dependencies (which DSC-4 ledger fields, which DSC-7 holdout), its shaping terms,
its guardrail penalties, and its known hacking surfaces.

### 3.1 The three reward regimes

The governing constraint is **reward latency and density**: ROI signals range from
milliseconds-dense (a fraud decision's authorization outcome) to quarters-sparse (a
churn program's incremental retention). One regime per situation:

| Regime | When | Reward construction | Data requirements | Example families (§4) |
|---|---|---|---|---|
| **R-DIRECT** — measured ROI as reward | The measurement loop is fast and dense enough for credit assignment (reward within the operational window; thousands of decisions per period) | Reward = the solution's ROI ledger entry per action/episode, in currency terms (loss avoided, margin preserved, recovery net of cost), against the agreed ROI model (D6a) | High outcome-capture coverage; label maturity handled explicitly (interim proxy → matured true-up); cost-of-action recorded per action | Fraud decisioning · collections treatments · NBA · automated outbound |
| **R-SHAPED** — proxy + shaped rewards, ROI-anchored | ROI is slow (90-day churn windows), sparse (rare failures in predictive maintenance), or partially attributable (demand forecast → downstream inventory outcome) | Dense proxy rewards (calibrated probability quality, forecast loss, uplift estimates, milestone events) **anchored** by the sparse measured-ROI readout: proxy weights are re-fit so that proxy-optimal ≈ ROI-optimal on realized data; the proxy↔ROI correlation is itself a monitored metric (§10 reward-signal quality) | Proxy labels with short latency; the anchoring join (episode → eventual ROI contribution); holdout-measured incrementality as the anchor truth | Churn/retention · demand forecasting · predictive maintenance · claims triage · lead scoring |
| **R-EVAL** — eval-harness rewards | The "outcome" is correctness/quality itself, or actions are too consequential to explore against live ROI | Reward from DSC-7 harnesses: verifiable scenario outcomes, golden-set scores, correctness-gate results; live ROI enters only as slow validation | Scenario suites with verifiable outcomes (evidence 10 M28: dozens-to-hundreds of realistic tasks); golden sets; held-out time | KPI driver analysis (report quality) · all agents' build/operate gate regardless of family |

Every solution runs **R-EVAL at the gate** (no agent operates without passing its
harness — the kernel D2.5 correctness gate applied to agents) plus **one of
R-DIRECT/R-SHAPED in operation**. Shaping never replaces the anchor: if the shaped
objective and the measured ROI readout diverge, the readout wins and the shaping is
re-fit — the customer's invoice is never trued-up against a proxy (D8).

### 3.2 Guardrail penalties — governance as reward, and as constraint

Kernel D9 sets the guardrail: governance violations = 0. In reward terms this is
**two-layer**:

1. **Hard constraints, not penalties, for the inviolable**: consent state, contact
   caps (Reg F/FDCPA-class), suppression lists, approval-gate requirements,
   regulatory eligibility rules — enforced in the action layer so the violating
   action *cannot execute* (evidence 12 §17: the policy engine and the dialer must
   agree). An agent must never be able to "buy" a violation with enough reward.
   The data-side obligation: the constraint state (consent, caps, eligibility) is a
   **point-in-time feature** — the agent must see the constraint exactly as it will
   be enforced, or it learns to propose actions that die at the gate.
2. **Penalty terms for the degradable**: guardrail metrics that trade off continuously
   — complaint volume, unsubscribe rate, NPS deltas in treated vs holdout, discount
   cost, false-decline friction, contact fatigue — enter the reward as negative terms
   priced in the same currency as the ROI model, at rates agreed with the outcome
   owner (D6a). The data-side obligation: **guardrail capture is part of
   outcome-capture coverage** — a reward stream that records saves but not complaints
   is a misalignment machine.

### 3.3 Reward-hacking risks and their data-side mitigations

Reward hacking is a data problem before it is an algorithm problem: every known hack
exploits a defect in what is measured, logged, or held out. The register below is
maintained per solution in its reward specification; these are the portfolio-level
classes (drawn from the failure evidence — evidence 12 §S6, per-dossier field 15):

| # | Hack class | Mechanism | Data-side mitigation |
|---|---|---|---|
| H-1 | **Easy-save gaming** | Agent targets entities that would have converted/paid/stayed anyway — raw response looks great, incrementality is flat (the comped-on-save-rate pathology, evidence 12 §1) | Reward on **holdout-measured incrementality**, never raw response; uplift-designed ledger (treatment + control cells recorded per action wave) |
| H-2 | **Sleeping-dog harm** | Contacting provokes the outcome (churn caused by retention contact; complaints from dunning self-payers — evidence 12 §1 Fidelidade ~7pp, §17) | "No action" logged as a first-class arm with propensities; uplift labels (persuadable / sure / lost / sleeping-dog) as refinement products; negative-effect detection in the anchor readout |
| H-3 | **Self-confirming policy** | The agent's actions shape its own future training data; without exploration it calcifies (fraud never learns what it declined; lead scoring canonizes "what sales already likes" — evidence 12 §3, §13) | Contracted **exploration slices** (randomized approve-throughs, low-score worked leads) as a DSC-8 quality requirement; propensity logging on every decision; off-policy evaluation (IPS/DR) before any offline claim is trusted |
| H-4 | **Holdout contamination** | Agent (or its operators) treats holdout entities, or learns to identify them, restoring the metric by corrupting the control | Holdout membership secret from the agent and excluded from its state; ledger-side interlock (actions on holdout entities blocked and alarmed); eval-data steward's contamination audit (§2.7) |
| H-5 | **Label-source manipulation** | Agent actions alter the labeling process itself (deflecting the complaint channel that produces complaint labels; timing actions so outcomes fall outside attribution windows) | Label definitions anchored to systems the agent cannot act on; attribution windows longer than any action-timing lever; label-latency and window-edge distributions monitored for bunching |
| H-6 | **Proxy divergence (Goodhart)** | Shaped proxy optimized past the point where it tracks ROI (clicks up, annual value down — evidence 12 §2) | Proxy↔ROI correlation monitored as a first-class metric (§10); scheduled re-anchoring of shaping weights against realized ROI; long-horizon cohort readouts, not per-touch metrics |
| H-7 | **Guardrail starvation** | Penalized metric stops being *captured* (the cheapest way to zero complaints is to lose the complaint feed) | Guardrail-capture coverage contracted per §3.2; missing-guardrail-data alarms treated as violations, not as zeros |
| H-8 | **Measurement-billing gaming (ours)** | Because the reward stream is also the billing record (D8), *we* face the symmetric temptation: reward/measurement design that flatters the readout | Eval-data steward independence (§2.7); measurement design agreed with the customer up front (D6a); ledger auditable by the customer — the same transparency that sells "you see the graph, not a black box" (evidence 06) applied to the meter |

### 3.4 Reward data minimums

A reward specification is only viable when the ledger can support it. Minimum
standards, checked by DR-6 (§2.10): decision volume ≥ the regime's learning floor
(evidence 10 M26: thousands of decisions per arm minimum for bandits; M27: large
trajectory logs with good state coverage for long-horizon RL); reward observability
within an operationally short window for R-DIRECT (evidence 10 M26); a real
treatment-assignment record with propensities for any causal/uplift reward
(evidence 10 M11); and matured-label true-up paths wherever interim proxies pay out
before truth arrives (fraud chargebacks, developing claims).

---

## 4. Per-solution data plans — the Band-A families

One plan per Band-A solution family (kernel D4). Each is the §2 supply chain
instantiated + the §3 reward expression + the DRS checks that dominate that family's
p(success). These are **family-level canonical plans**; doc 04 specializes them per
module, and per-customer instantiation is Auto-Suggest's job (evidence 08: study the
customer and their data, then propose). Sources cite the dossier evidence
(evidence 11/12/14/15).

### 4.1 Churn & retention (UC-1 / S-1)

| Element | Plan |
|---|---|
| **Sources** | Billing/subscription (contract terms, invoices, payment events) · CRM (accounts, contacts, interactions, field history for PIT) · product telemetry (usage events, feature adoption) · support (tickets, CSAT/NPS) · marketing/CS platforms (campaign + playbook history) (evidence 12 §1) |
| **Entities** | Customer at the **action unit** (account vs household vs user — must match what retention can treat); resolved across billing/CRM/telemetry/support (evidence 12 §1) |
| **Labels & outcomes** | Churn event in explicit window (T, T+H], H matched to intervention capacity (typically 90d); blackout gap between feature and label windows (operational churn signals precede recorded churn); right-censoring honored; non-contractual variants use inter-purchase-gap/BTYD label designs (evidence 12 §1, §16) |
| **Action + result capture** | Ledger of every treatment (outreach, discount, plan-fit review, success intervention) with cost, owner, propensity, and "no action" as a logged arm; results = retention at window close + guardrails (NPS treated vs holdout, discount cost, contact fatigue); uplift cells (treatment A/B/none) recorded per wave (evidence 12 §1) |
| **Refinement** | Leaky-feature exclusion by construction (cancellation-call proxies, win-back membership); calibration after any sampling (retention economics need calibrated probabilities); driver features curated for the SHAP layer that powers both CSM reason codes and the wholesale driver report (evidence 12 §1, §34) |
| **Reward expression** | **R-SHAPED**: dense proxies = calibrated risk quality + uplift-estimated saved-CLV per treatment net of offer cost; anchor = permanent-holdout incremental retention × CLV − program cost (the D8-billed quantity). Penalties: complaint/NPS/discount-budget terms. Hacks to watch: H-1, H-2 (the documented sleeping-dog segment), H-4 |
| **Evaluation data** | Permanent randomized holdout per risk tier (5–10%); out-of-time model evals on rolling windows; treatment-level A/B cells (evidence 12 §1) |
| **Data readiness (DRS emphasis)** | DR-3 dominates: point-in-time history often doesn't exist retroactively (historical label reconstruction is a named long pole — evidence 12 §1); DR-4: a named retention owner is non-negotiable (score-without-action is the most common stall) |

### 4.2 Collections

| Element | Plan |
|---|---|
| **Sources** | Core banking/AR (balances, delinquency cycles, payment events) · collections platform + dialer logs · digital-collections/self-serve portal events · hardship-workflow records · contact-policy state (caps, consent, vulnerability flags) (evidence 12 §17) |
| **Entities** | Delinquent account at treatment level; person-level overlay for contact caps and vulnerability (a person may hold several accounts; the *legal* contact constraint binds at the person) |
| **Labels & outcomes** | Roll/cure per bucket within cycle (30→60 within cycle window); payment events with amount + channel; self-cure as an explicit label class (paid *without* contact); hardship and complaint outcomes as first-class labels (evidence 12 §17) |
| **Action + result capture** | Treatment ladder ledger (watch / nudge / call / restructure / placement) with cost per treatment, channel, propensity, and strategy-cell membership (champion/challenger is native to this domain); results = recovery net of cost-to-collect + complaint/vulnerability guardrails; contact-cap state recorded per action for compliance audit (evidence 12 §17) |
| **Refinement** | Uplift labeling against self-cure (propensity targeting annoys payers into complaints — the sleeping-dog logic with a regulator watching); macro-regime features (roll models are macro-sensitive; 2020 forbearance waves broke them); strategy-cell contamination screening (ops overrides destroy the readout) (evidence 12 §17) |
| **Reward expression** | **R-DIRECT**: recovery − treatment cost − penalty(complaints, hardship-miss) per account-cycle, measured against strategy-cell controls; hard constraints (not penalties): FDCPA/Reg F caps, vulnerability overrides, settlement floors. Hacks: H-2 (self-payers), H-7 (complaint-feed starvation) |
| **Evaluation data** | Champion/challenger cells as the permanent experimental frame; below-guardrail audit samples (hardship-detection recall checked on random samples) |
| **Data readiness** | DR-4/DR-8 dominate: the dialer and policy engine must agree on cap state (a data-integration property); DR-6 strong by nature (daily cycles, dense decisions — collections is among the best RL feedstock in the portfolio) |

### 4.3 Demand forecasting (→ replenishment & inventory)

| Element | Plan |
|---|---|
| **Sources** | Sales/POS transactions · inventory positions + stockout events · promotions/pricing calendars · product master (hierarchy, attributes for cold start) · external covariates (weather, holidays, events) · supplier lead times (evidence 12 §10; evidence 10 M5–M7) |
| **Entities** | SKU × location × time hierarchy; reconciliation-coherent (forecasts must add up across the hierarchy — evidence 10 M6); new-item resolution to attribute space for cold start |
| **Labels & outcomes** | Realized demand — **not** sales: sales are demand censored by availability; stockout periods must be treated as censored or demand is biased down (evidence 12 §4 censoring logic; §10); label = actuals per horizon per node, with known-future covariates recorded as-of forecast time |
| **Action + result capture** | Order/replenishment ledger: recommended vs placed orders (human overrides logged with rationale — the FVA discipline), service-level outcomes, stockouts, waste/markdown events, inventory-holding cost; forecast snapshots archived as-of (the forecast that drove the order, not the revised one) (evidence 12 §10–11) |
| **Refinement** | Hierarchy-consistent aggregation; promotion/cannibalization features; intermittent-demand treatment for slow movers; regime flags (COVID-class shocks quarantined from naive training windows) |
| **Reward expression** | **R-SHAPED**: dense proxy = pinball/quantile loss at the service-level-relevant quantiles (not point MAPE — the ROI lever is the inventory decision, which consumes the distribution); anchor = measured inventory economics (holding cost + stockout cost + waste) vs FVA baseline, the D8-billed quantity. Penalties: forecast-churn (violent revision) terms where planners consume the output. Hacks: H-6 (accuracy up, service down), H-5 (window bunching at period edges) |
| **Evaluation data** | Rolling-origin backtests with strict as-of reconstruction; FVA baselines (naive + statistical) maintained permanently as the counterfactual (evidence 12 §10–11) |
| **Data readiness** | DR-1/DR-3 dominate: 2–3 seasonal cycles of history per series or many related series for cross-learning (evidence 10 M5–M6); stockout instrumentation (DR-4) is the most commonly missing piece |

### 4.4 Fraud & financial-crime decisioning (fraud + AML)

| Element | Plan |
|---|---|
| **Sources** | Authorization/transaction stream · device/session intelligence · chargeback & dispute systems (the label rail) · case management dispositions · KYC/CDD profiles · watchlists/sanctions data · entity-graph sources (shared devices, addresses, merchants) (evidence 12 §13–14) |
| **Entities** | Multi-entity by design: card/account/customer/device/merchant + the **ring** (graph resolution is half the value in AML — structuring only appears when the network is assembled) (evidence 12 §14) |
| **Labels & outcomes** | Fraud: chargebacks with **label-maturity windows** (weeks–months; interim proxies trued-up on maturation); AML: dispositions are investigator behavior, not truth — disposition-consistency review is a label-quality workstream; SAR filings as the terminal label (evidence 12 §13–14) |
| **Action + result capture** | Every decision logged in-line (approve/challenge/block + score + rule hits + propensity); **exploration slice** on gray-zone traffic (randomized approve-throughs) contractually maintained — the system otherwise never learns what it declined; false-decline estimation stream (recovered-decline tests); AML: below-the-line testing ledger (samples of suppressed alerts investigated — the domain's signature integrity mechanism, examiner-expected) (evidence 12 §13–14) |
| **Refinement** | Streaming velocity features with train/serve parity (the engineering problem feature stores exist for); extreme-imbalance handling at the decision layer (bp-level base rates); adversarial-drift features; examiner-grade documentation as a refinement *output* (an undocumented model is an unusable model in this domain) (evidence 12 §13–14) |
| **Reward expression** | **R-DIRECT**, two-sided by construction: −(fraud loss) − (false-decline cost) − (friction cost of challenges) − (review cost), in currency, using matured labels with interim-proxy true-up; the two-sided calibration is the economics (false declines are projected to exceed fraud itself — evidence 12 §13). AML: SAR yield per investigator-hour with below-the-line integrity as a hard gate. Hard constraints: SCA/PSD2 rules, SR 11-7-class validation, human SAR decisions (regulatory). Hacks: H-3 (feedback starvation without exploration), H-6 (fraud bps down, approvals down) |
| **Evaluation data** | Champion/challenger on live traffic (shadow scoring); the exploration slice doubles as the unbiased eval set; AML below-the-line samples; out-of-time attack-pattern evals |
| **Data readiness** | DR-4 (chargeback/dispute integration — the label rail), DR-6 (dense decisions: excellent RL feedstock), DR-8 (exploration permitted by policy — a governance negotiation, priced into the data plan) |

### 4.5 Predictive maintenance (→ work-order generation)

| Element | Plan |
|---|---|
| **Sources** | Sensor/condition telemetry (vibration, temperature, current…) · CMMS/EAM work orders + failure codes · asset master (hierarchy, install dates, duty cycles) · maintenance logs (often free-text → document intelligence) · operating context (load, environment) (evidence 12 §18; evidence 11) |
| **Entities** | Asset → component hierarchy resolved across telemetry IDs and CMMS IDs (chronically divergent — the resolution workstream); failure attributed at component level, action at work-order level |
| **Labels & outcomes** | Failure events with mode codes — **rare and expensive**: label scarcity is the family's defining property; labels manufactured via survival framing (time-to-failure with heavy censoring — evidence 10 M8), degradation thresholds, and technician-confirmed diagnoses; **work-order outcome closes the loop** (was the predicted failure found? fixed? a false pull?) |
| **Action + result capture** | Work-order ledger: prediction → generated work order → technician finding (confirmed/not-found/other-fault) → downtime avoided/incurred + parts/labor cost; deferral decisions logged (predicted, not acted on — the natural quasi-holdout); technician finding codes are the **result-observed stream** and their capture discipline is the program's binding constraint |
| **Refinement** | Sensor-quality contracts (dead/stuck/drifting sensors poison everything downstream); regime normalization (load/context); free-text maintenance-log extraction into structured failure modes; censoring-aware survival datasets (evidence 10 M8: event dates, not flags; enough follow-up that a reasonable fraction of entities have had the event) |
| **Reward expression** | **R-SHAPED**: dense proxies = degradation-prediction quality + technician-confirmation rate of generated work orders; anchor = measured avoided downtime × downtime cost − intervention cost − false-pull cost vs run-to-failure/calendar baseline (the D8 quantity). Penalties: false-pull burden (technician trust is the adoption currency). Hacks: H-1 (predicting failures maintenance would have caught on calendar anyway — baseline design matters), H-5 (deferring predictions past attribution windows) |
| **Evaluation data** | Asset-cohort baselines (calendar-maintained vs prediction-maintained cohorts where fleet size allows); out-of-time evals across operating regimes; golden failure-mode sets per asset class |
| **Data readiness** | DR-3 (history depth: failures per mode per asset class — often years to accumulate; fleet cross-learning is the mitigation), DR-4 (technician finding-code capture — a change-management property priced into the data plan), DR-5 (sensor-quality burden) |

### 4.6 Lead & opportunity scoring

| Element | Plan |
|---|---|
| **Sources** | CRM with **field history** (the PIT substrate — current records leak: stages backfilled, amounts updated on close) · marketing automation (campaign touches, form fills) · product telemetry (PLG signals) · enrichment (firmographics, intent data) · sales-engagement logs (evidence 12 §3) |
| **Entities** | Lead → contact → account resolution with recycle/re-entry logic (dedup across marketing systems); ABM variant aggregates to account (evidence 12 §3, §16) |
| **Labels & outcomes** | Conversion per funnel stage within stage-specific windows; closed-won/lost as terminal labels; **selection bias named in the label design**: history shows outcomes only for leads sales chose to work (evidence 12 §3) |
| **Action + result capture** | Routing ledger (which queue, which rep, which SLA, worked/untouched) with propensities; **exploration quota** — a contracted slice of low-scored leads worked anyway — is the family's integrity mechanism; results = stage progression + revenue per rep-hour; rep overrides/cherry-picking observable in the ledger (evidence 12 §3) |
| **Refinement** | Point-in-time features from field-history tables only; calibration (routing capacity needs calibrated probabilities); firmographic-proxy bias screening (demographic bias encoded in SMB firmographics); form-field-change breakage alarms (marketing changes silently break features) (evidence 12 §3) |
| **Reward expression** | **R-SHAPED**: proxy = calibrated conversion quality + queue-ordering gain (conversion per rep-hour vs status-quo ordering in randomized routing experiments); anchor = incremental pipeline/revenue per capacity, matched-capacity experimental readout. Penalties: new-segment starvation (coverage floor), SLA breaches. Hacks: H-3 (the canonical self-confirming case — mitigated by the exploration quota), H-1 (scoring sure-things) |
| **Evaluation data** | Randomized routing experiments (score-ordered vs status-quo, matched capacity); the exploration quota doubles as the unbiased eval slice; out-of-time evals across quarters (market cycles) |
| **Data readiness** | DR-3 dominates (CRM field history exists and is retained — the single most common gap); DR-8 (exploration quota accepted by sales leadership — an adoption negotiation, priced in) |

### 4.7 Next-best-action / personalization

| Element | Plan |
|---|---|
| **Sources** | CDP/identity backbone · all channel delivery + interaction logs (web/app/email/agent-desktop) · offer/action catalog with eligibility + margin metadata · consent & preference state · contact-history across channels (evidence 12 §2) |
| **Entities** | Customer resolved across channels (the identity spine is the long pole); the **action catalog** is itself a governed data asset (stale, near-identical offers are a documented failure — catalog rot) (evidence 12 §2) |
| **Labels & outcomes** | Per-touch response (click/accept/convert) as dense signal; **long-horizon cohort value as the true label** (the classic failure is optimizing clicks while eroding annual value); "no action" outcomes captured symmetrically (evidence 12 §2) |
| **Action + result capture** | The decision service logs every arbitration: candidate arms, eligibility filters applied, chosen arm, **propensity** (what could have been shown, with what probability — the non-negotiable field for off-policy evaluation), position/context; results joined per touch and per cohort horizon (evidence 12 §2) |
| **Refinement** | Position/selection-bias instrumentation; arbitration-consistency checks (no contradictory actions: retention discount + upsell in one session); cold-start priors for new arms; exploration-rate maintenance (epsilon/Thompson) as a contracted data property (evidence 12 §2) |
| **Reward expression** | **R-DIRECT** at bandit granularity: per-decision reward = margin-weighted response − contact cost, with **cohort-level long-horizon value as the anchoring true-up** (per-touch reward re-weighted so the policy optimum matches cohort value); global random/rule-based holdout measures program incrementality (the D8 quantity). Hard constraints: consent/preference, frequency caps, regulatory eligibility. Hacks: H-6 (clicks vs value — the family's signature), H-3 (no exploration), H-2 (churn-inducing contact — "do-not-disturb" segments) |
| **Evaluation data** | Global holdout on rule-based/random policy (permanent); per-arm bandit statistics; off-policy evaluation (IPS/doubly-robust) gating any offline claim (evidence 12 §2) |
| **Data readiness** | DR-2 dominates (cross-channel identity); DR-6 excellent (decision volume is the family's natural advantage); DR-8: every channel must log through the central decision service — channel teams bypassing the hub is both an adoption and a data-integrity failure |

### 4.8 Claims triage & straight-through processing

| Element | Plan |
|---|---|
| **Sources** | Claims platform (FNOL, claim state history, reserves) · policy admin (coverage) · document/photo intake (FNOL portals, email rooms → document intelligence) · SIU case management · payment rails · provider/repair-network data (evidence 12 §16) |
| **Entities** | Claim · claimant · policy · provider/repair-shop networks (fraud rings live in the graph); resolution across intake channels |
| **Labels & outcomes** | Severity with **development-aware labels** (bodily-injury claims mature for years — point-in-time claim-state snapshots; late-populated fields like reserve updates are leakage by construction); fraud labels only where SIU investigated — the selective-label problem; STP leakage audits generate the "was the instant payment correct" label (evidence 12 §16) |
| **Action + result capture** | Path-assignment ledger (instant-pay / fast-track / standard / SIU referral) with reason codes; SIU referral → investigation outcome joined (hit rate); STP claims re-adjudicated on samples (the domain's below-the-line testing); cycle-time + NPS per path; **random-referral audit slices** keep the fraud model honest against selective labels (evidence 12 §16) |
| **Refinement** | Per-field document/photo extraction accuracy audits (an OCR'd policy number wrong 2% of the time corrupts entity joins silently); STP eligibility as conservative allowlists (a policy achievement, not a model achievement); CAT-regime flags (hurricane surges shift every distribution) (evidence 12 §16) |
| **Reward expression** | **R-SHAPED**: proxies = path-assignment quality (cycle time, referral hit rate, extraction accuracy); anchor = measured leakage avoided + LAE (adjustment expense) saved + cycle-time value, vs pre-program baselines, guardrailed by overpayment rate on STP and false-referral burden. Hard constraint: **automate payment, never denial** (unfair-claims-practices law; the industry's live third-rail). Hacks: H-1 (fast-tracking claims that were clean anyway — leakage audits are the counterweight), H-5 (referral timing vs SIU capacity) |
| **Evaluation data** | STP re-adjudication samples (permanent); random-referral slices; out-of-time + CAT-regime evals; golden extraction sets per document type (50–200 docs/type — evidence 10 M21) |
| **Data readiness** | DR-3 (claim-state history with development snapshots), DR-4 (SIU outcome joins; sampled re-adjudication accepted by claims leadership), DR-5 (document pipeline quality) |

### 4.9 KPI driver analysis (decision-intelligence reporting)

| Element | Plan |
|---|---|
| **Sources** | Whatever the KPI's domain demands (the family is a lens over other families' supply chains: churn drivers ride S-1's chain, margin drivers ride finance sources, VoC rides feedback text + NPS) + the **decision forum's own records** (evidence 12 §34) |
| **Entities** | The KPI's entity + the **decision** as an entity: each report edition's recommendations are tracked objects with owners, adoption state, and outcome check-ins |
| **Labels & outcomes** | Two label streams: (a) the underlying model's labels (unchanged rigor — "a report used for decisions deserves the same correctness as a score used for actions"); (b) **decision outcomes**: what was decided, predicted effect size, realized effect at check-in — the report program's forecast-honesty record (evidence 12 §34) |
| **Action + result capture** | The **decision log** is the action ledger: recommendation → decision (adopted/rejected/deferred, by whom) → KPI trajectory + designed-experiment result where the driver was tested; experiments spawned per cycle counted (a healthy program generates tests, not narratives) (evidence 12 §34) |
| **Refinement** | Driver-stability discipline (bootstrap CIs; change-flagging only beyond thresholds — quarterly reshuffles from noise destroy credibility); Simpson's-paradox screening before segment claims; causal follow-up queued for high-stakes drivers (SHAP ranks model attribution, not intervention effects); versioned data+code per edition (reproducibility: "what changed since last quarter" must be computable) (evidence 12 §34) |
| **Reward expression** | **R-EVAL primary**: report quality scored on the harness (stability, calibration of claimed effect sizes vs realized, reproducibility) + decision-adoption rate and tracked outcome accuracy as the slow anchor; measured ROI = value of adopted decisions vs predicted (the honest, hard readout — a program that cannot show decisions-and-outcomes within its cadence is the dashboard graveyard, evidence 12 §34). Hacks: driver-of-the-week storytelling (stability contracts), causal overreach (hypothesis labeling enforced in the report schema) |
| **Evaluation data** | The decision log itself (the trust artifact); designed experiments as ground truth for driver claims; edition-over-edition stability metrics |
| **Data readiness** | DR-4 is nearly the whole score: a standing forum, a named owner per driver domain, and a decision log — management practice as data infrastructure (evidence 12 §34: the forum discipline *is* the build) |

### 4.10 Automated outbound

| Element | Plan |
|---|---|
| **Sources** | CRM + engagement platforms (sequences, sends, replies) · email/deliverability telemetry (bounces, spam-complaint feedback loops, domain reputation) · enrichment (firmographics, technographics, intent signals) · calendar/meeting systems (the conversion rail) · content/asset library with performance metadata |
| **Entities** | Prospect → contact → account resolution (recycled contacts, role changes); **domain/mailbox as a governed entity** (sender reputation is a shared, destructible asset); suppression spine (unsubscribes, competitors, existing customers, do-not-contact) |
| **Labels & outcomes** | Graded funnel labels: delivered → opened → replied (sentiment-classified: positive/neutral/negative/unsubscribe) → meeting booked → meeting held → qualified opportunity → closed-won revenue; label latency rises steeply down-funnel, so the label chain is explicitly multi-horizon |
| **Action + result capture** | Natively complete — **every action is the agent's own** (message content, timing, channel, sequence step, personalization variables all logged as the trajectory); this family is the portfolio's purest agentic RL feedstock (evidence 10 M28: accumulating trace logs feed agent fine-tuning); results joined per message and per sequence; human takeover points (rep picks up the thread) logged as episode boundaries |
| **Refinement** | Suppression integrity (the hard floor); reply-classification quality (a golden set of graded replies); content-variable extraction (which personalization actually appeared); deliverability features as state (reputation must be in the agent's state or it will spend it) |
| **Reward expression** | **R-DIRECT**: qualified-meeting/opportunity value (stage-weighted pipeline, trued-up to closed-won) − send/enrichment costs − **steep penalties on spam complaints, unsubscribes, and reputation damage** (a burned domain is a capital loss, priced as one); consent and CAN-SPAM/GDPR/CASL constraints are hard gates, not penalties. Hacks: H-6 in its sharpest form (booking junk meetings that never convert — anchor on down-funnel truth), H-7 (losing the complaint feedback loop), volume gaming (reward per net value, never per send) |
| **Evaluation data** | Holdout accounts (untouched control for program incrementality); sequence-level A/B cells; golden reply-classification set; harness scenarios for message quality/compliance gating every content policy the agent may use (R-EVAL gate before any send authority) |
| **Data readiness** | DR-1/DR-4 strong by nature (digital channel, native capture); DR-7 (meeting→opportunity→revenue joins across CRM — the down-funnel anchor is where readiness usually fails); DR-8 (complaint feedback loops registered with every mailbox provider) |

### 4.11 Cross-family observations

- **Two reward-data archetypes.** Dense-decision families (fraud, collections, NBA,
  outbound) are natural R-DIRECT RL feedstock; sparse-outcome families (churn,
  maintenance, forecasting, claims) live on R-SHAPED designs whose anchors are
  holdout/baseline readouts. The DRS check that separates them is DR-6.
- **Every family's integrity mechanism is a data asset**: churn holdouts, collections
  strategy cells, fraud exploration slices, AML below-the-line samples, claims STP
  re-adjudication, lead-scoring exploration quotas, NBA global holdouts, driver
  decision logs, outbound account holdouts. These are the DSC-7 sacred assets and the
  §3.3 mitigation infrastructure — one design pattern, nine instantiations.
- **The action ledger is the product's spine.** In each plan the RL reward stream,
  the ROI readout, and the D8 invoice are the same joined table read three ways
  (§2.9). That identity is the strategy.

---

## 5. Per-methodology data requirements

The kernel D5 toolbox, with each methodology's data envelope — the facts Auto-Suggest
scores against source profiles (DR-1/DR-3/DR-6) and doc 03 declares per component
(kernel D5: "every methodology also declares its data requirements for agent
training"). Minimums condensed from the methodology dossiers (evidence 10, field 11;
corroborated by evidence 13).

| Methodology (D5) | Modality | Minimum viable data | Label needs | History depth | Freshness | Contribution to agent training |
|---|---|---|---|---|---|---|
| Tabular supervised (M-1, workhorse) | Tabular | Few-thousand labeled rows (below ~1k–10k prefer GLM/TabPFN); comfortable 10⁴–10⁸ | Derivable from recorded outcomes — no annotation (why it's prevalent) | ≥ a few label windows + seasonality; ~≥12 mo for behavioral problems | Match decision cadence | The agent's default tool; its scored outputs + SHAP drivers are core trajectory state (evidence 10 M1–M4) |
| Entity resolution | Tabular/graph | Quasi-identifiers with reasonable fill rates; few-thousand labeled pairs (active learning slashes this) | Pair labels for tuning; golden-pair set | N/A (point-in-time identity history helps) | Refresh with source change | Gives the agent a correct action unit; reward attribution depends on it (evidence 10 M23) |
| Segmentation/clustering | Tabular | Thousands of entities; behavior-covering features | None | Enough to characterize behavior | Cadence of population drift | State abstraction: segments are compact state features and treatment-policy strata (evidence 10 M13) |
| Time-series forecasting | Series | Local: 2–3 seasonal cycles/series; global: ≥100s of related series or long panels | Actuals (with stockout/censoring correction) | ≥2 seasonal cycles | Known-future covariates must exist at serve time | Forecast distributions are the agent's planning inputs; FVA baselines anchor its reward (evidence 10 M5–M7) |
| Survival / time-to-event | Tabular+events | Few-thousand events (tree-based); event **dates**, not flags | Event dates + censoring status | Enough follow-up that a real fraction had the event | Retrain on drift | Horizon-aware risk for maintenance/churn tenure; teaches the agent time-to-event reasoning (evidence 10 M8) |
| Causal / uplift | Tabular+assignment | Most data-hungry per unit signal: ≥10⁴–10⁵ per arm for stable CATE | Treatment-assignment record **with propensities** | Multiple campaign waves | Per campaign cycle | The reward corrector: converts response into incrementality; the anti-H-1/H-2 tool (evidence 10 M11) |
| Experimentation (A/B) | Any | Traffic sufficient for power at the MDE; assignment mechanism | Clean event instrumentation; pre-period for CUPED | Pre-period data | Live | Generates the ground truth every anchor readout uses; the agent's hypothesis-testing tool (evidence 10 M9–M10) |
| Anomaly detection | Tabular/stream | No labels to start; weeks–months of "normal" per entity/metric | None (labels sharpen later) | Weeks–months | Streaming variants: bounded-memory summaries | Drift/attack sentinels in the agent's monitoring loop; typology-drift overlays (evidence 10 M12) |
| Recommendation / NBA | Interactions | MF/kNN from ~10⁵ interactions; deep cascades want 10⁷+ | Implicit (interactions); item metadata mandatory for cold start | Rolling | Session variants: minutes-fresh | Per-decision arms + logged propensities — direct RL substrate (evidence 10 M14) |
| Learning-to-rank | Query-doc | Thousands of graded judgments, or click logs at scale with propensity instrumentation | Graded judgments or debiased clicks | Rolling | Tied to content drift | Ordering policies for queues (leads, alerts, claims) — the agent's triage tool (evidence 10 M15) |
| NLP / embeddings / RAG / fine-tuning | Text | Classic: 100s labels/class · embeddings: corpus any size, no labels · RAG: curated, permission-mapped corpus (quality ≫ volume) · SFT: ~10³–10⁵ curated pairs (LIMA: 1k excellent suffice for style) | Golden sets ~100–500 examples/questions — the key created asset | Corpus currency | Document-freshness pipeline for living corpora | Language competence + grounded retrieval; golden sets double as R-EVAL harness items (evidence 10 M16–M20) |
| Document intelligence | Docs/images | 100s annotated docs/type (trained) or near-zero (LLM-prompted) + golden set 50–200 docs/type | Field-level annotations; master-data for validation | Per doc-type | Intake-driven | Unlocks document-borne supply chains (claims, AP, KYC); per-field accuracy audits feed quality contracts (evidence 10 M21) |
| Graph ML | Graph | Relational sources with join keys; enough connectivity to matter | As tabular; temporal edge timestamps for correctness | Edge history | Rebuild cadence | Ring/network state for fraud/AML; relational features the agent can't see row-wise (evidence 10 M22) |
| Vision | Images | 100s–1,000s labeled images/class (transfer); anomaly-mode: good-part images only | Annotation budget is the planning constraint | Coverage across real conditions ≫ raw count | Per line/camera change | Perception for inspection/claims-photo pipelines (evidence 10 M24) |
| Speech | Audio | Lawful-basis audio access; tens of hours human-transcribed calibration (stratified) | 100s labeled calls/class (or LLM bootstrap) | Rolling | Per call-driver change | VoC and agent-assist signal; calibration sets are golden assets (evidence 10 M25) |
| Bandits / RL | Decisions | Bandits: 1,000s of decisions/arm minimum (contextual: much more); offline RL: large trajectory logs with good state coverage or a trusted simulator; post-training: 10⁴–10⁶ preference pairs or verifiable-task suites | Rewards within operationally short window; propensity-logged history | Accumulating | Continuous | **The core**: Auto-RL itself; DSC-4/DSC-8 exist to feed it (evidence 10 M26–M27; evidence 08) |
| Agentic (tool-calling + harnesses) | Traces | No training data to start (pretrained base); scenario suite of dozens–hundreds of verifiable tasks; tool documentation | Verifiable outcomes per scenario | Accumulating trace logs | Continuous | Trace logs feed fine-tuning of agent behavior; the harness is the agent's correctness gate (evidence 10 M28) |
| Optimization / OR | Structured | Accurate constraint/master data (capacities, costs, rules — usually the binding data problem) | Realized-outcome capture for the loop | Current + forecast | Per plan cycle | Turns predictions into actions under constraints; constraint data quality is an explicit DR-1 item (evidence 10 M29) |
| Bayesian / UQ | Any | Dozens of observations/group given hierarchy + priors; conformal: ~10²–10³ calibration set | Domain knowledge as real input | Small-data tolerant | Per decision cadence | Calibrated uncertainty for the agent's risk-aware actions and p(success) math (evidence 10 M30) |
| Ensembling | Any | Enough for OOF machinery; nothing beyond base models | As base models | As base models | As base models | Raises floor accuracy ("real solutions are rarely a single model" — evidence 06) |
| Label efficiency | Any | Abundant unlabeled data; bounded expert hours; labeling workflow + budget model | Manufactures labels (active/weak/semi) | N/A | Per labeling campaign | Collapses DR-5 annotation burden; the refinement force-multiplier (evidence 10 M32) |
| Privacy / synthetic | Any | FL: participating clients; DP: larger n for equal accuracy (the privacy tax); SDG: enough real data to fit generators **without memorizing** (small datasets are the worst SDG candidates) | As underlying task | As underlying task | N/A | Polices the §6 boundary: DP training and audited SDG are how generalized assets are manufactured (evidence 10 M33) |
| Streaming / online | Events | Stable event stream with schemas + keys; below ~10⁴–10⁵ events/day batch wins | Label-capture paths with known delay distributions | Rolling | Real-time | Real-time state + reward delivery for R-DIRECT families (evidence 10 M34) |

Reading rules for the table: (a) minimums are *admission thresholds* for DR checks,
not targets; (b) "golden set" entries are DSC-7 assets by definition; (c) every row's
"contribution" column is the D5 admission rule restated in data terms — a methodology
earns its toolbox place partly by what its data products teach the agent.

---

## 6. The generalized-learning boundary (answers kernel Q4)

Kernel open question 4 asks: *precisely what crosses from customer-specific
data/weights (theirs) into generalized assets (ours)?* This section is the binding
answer, elaborating kernel D2.3 and D7.3 and the evidence-08 IP split.

### 6.1 The ownership map

| Asset class | Owner | Definition | Examples |
|---|---|---|---|
| Raw data | **Customer** | Every record read from their systems; never leaves their walls (evidence 06) | Transactions, CRM rows, telemetry, documents |
| Derived data on their data | **Customer** | Features, resolved entities, labels, ledgers, training sets, holdouts — all DSC-1…DSC-8 contents | Point-in-time features, action/result ledger, trajectories |
| Post-trained weights | **Customer** | Any weights whose training consumed their data: the Auto-RL agent's per-customer post-training deltas, fine-tunes, per-customer calibrations (kernel D2.3) | Their agent's adapters/deltas, their models |
| Their measured results | **Customer** (shared readout) | ROI readouts, eval results on their data — visible to us for billing/calibration under contract, but theirs | ROI statements, holdout readouts |
| Base model | **Orama** | The Zetta agentic RL base model (evidence 07 catalog #3), trained on no customer's identifiable data | The base agent every engagement starts from |
| Schemas & ontologies | **Orama** | Canonical structures with no customer values: entity schemas, label/window definitions, action taxonomies, ledger schemas, DSC/DR/reward-spec templates | "Churn label = event in (T,T+H] with blackout"; the action/result ledger schema |
| Playbooks & priors | **Orama** | Cross-customer regularities in **de-identified, generalized form**: which methodology composition wins for which data shape, hyperparameter priors, correctness-adaptation triggers, driver-pattern archetypes, reward-shaping templates | "Sub-weekly usage cadence ⇒ survival framing outperforms fixed-window"; DR-score priors per industry |
| Benchmarks | **Orama** | Aggregate performance distributions across engagements, published only above aggregation thresholds (§6.2) | p(success) calibration curves; typical uplift ranges per family |
| Synthetic corpora | **Orama** | Generated data that passes memorization audits (§6.2), used to pre-train/eval base capabilities | Synthetic supply chains for harness scenarios |
| Eval harness designs | **Orama** | Scenario suites and gate designs (customer-specific instances populated with their data are theirs) | The claims-triage harness template |

### 6.2 The standards that police the boundary

A candidate generalized learning crosses only by surviving **all four** controls, in
order — and the pipeline that applies them is itself audited:

1. **De-identification** — no customer identifiers, no raw values, no quasi-identifier
   combinations. Structure and statistics only; free-text and exemplars never cross
   verbatim.
2. **Aggregation floor** — no generalized statistic, prior, or benchmark is derived
   from fewer than **k customers (k ≥ 5, higher where a segment is thin)**, and no
   published aggregate allows re-identification of any contributor by subtraction
   (releases are monotone: adding a customer never lets an observer isolate one).
   Regulated-vertical learnings (GLBA/HIPAA sources) carry higher k and legal review.
3. **Differential-privacy budget** — where generalized assets are *trained* rather
   than curated (priors, synthetic generators, base-model improvements informed by
   engagement telemetry), training is DP-bounded with an accounted ε per customer per
   period; the privacy tax is paid by us, not the customer (evidence 10 M33).
4. **Memorization & extraction audit** — canary insertion and extraction attacks run
   against every base-model or synthetic-corpus release; a reproducible customer
   value or identifiable pattern anywhere in an Orama-owned asset is a release
   blocker and a governance violation (kernel D9 guardrail: violations = 0).

### 6.3 What NEVER crosses

Categorically, regardless of consent or convenience: **row-level data** (any record,
any table, any excerpt); **customer-identifiable patterns** (a segment, driver, or
prior attributable to one customer or a thin set); **per-customer weights or their
distillates** (no teacher-student laundering of a customer's model into ours);
**trajectory text/content** containing customer data (prompts, tool outputs, message
bodies); **holdout designs' membership**; **secrets and credentials** (trivially, but
stated). The test is subtractive: *if deleting one customer's entire history would
visibly change the asset, the asset is not generalized enough to be ours.*

### 6.4 Contractual expression

The boundary is a product property expressed in contract, symmetric and simple:

- **License to serve**: we process customer data solely to build/operate/improve
  *their* solutions, inside their environment. No copy for our purposes.
- **Generalized-learning license**: customer grants use of **de-identified,
  aggregated learnings meeting §6.2** for improving Orama-owned assets; the §6.2
  standards are contractual definitions, not marketing language; customers may audit
  the controls.
- **Weights clause**: per-customer post-trained weights are customer property,
  delivered as part of the module; base model remains ours, licensed for their use.
- **Deletion clause**: termination or erasure requests delete customer-owned assets
  including weights (§7.5); Orama-owned assets are unaffected *because* nothing
  identifiable crossed — the §6.2 controls are what make the deletion clause honest.
- **No-training-for-competitors comfort**: because only ≥k aggregates cross, no
  competitor can receive anything attributable to the customer — the answer to the
  standing enterprise objection, and a sales asset in exactly the D3 segments
  (regulated, data-rich) we prize.

The boundary is also **the moat's second layer working as designed** (kernel D7.3):
the customer keeps everything specific; we keep the compounding general. Both sides
get stronger from every engagement; neither can leak into the other.

---

## 7. Data governance & rights

Governance is intrinsic to the supply chain (kernel D7.5) and a product property,
never a rollout step (kernel D10.5). The regime, as data-strategy obligations:

1. **Identity-scoped access.** Every read at every DSC stage executes under the
   requesting identity's scope via the customer's SSO — "a tailored view per user, not
   a shared service account" (evidence 06). The agent is an identity too: it holds
   the scopes the outcome owner granted, no more; Personalized MCP surfaces adapt per
   user without ever widening data access beyond that user's scope (evidence 08's
   open question, answered: preferences personalize the *interface*, identity scopes
   the *data*).
2. **Audit.** Every data access, transformation, label write, ledger append, training
   run, and boundary-crossing evaluation (§6.2) is audited — "every change,
   deployment, and data access is audited" (evidence 06). The audit trail is itself a
   DSC data product with retention rules.
3. **Consent.** Consent/lawful-basis state is point-in-time data (§3.2): recorded per
   source at connection, per person where required, and enforced in the action layer
   as hard constraints. Actions execute with the consent state they were decided
   under, and the ledger proves it.
4. **Residency.** The data never leaves their walls (evidence 06: data egress =
   0 bytes) — residency compliance is architectural, not procedural. Training,
   refinement, evaluation, and the agent itself run in-environment; only §6.2-passing
   generalized learnings ever exit.
5. **Retention & deletion.** Retention policies per source class and stage;
   erasure requests propagate as tombstones DSC-3 → DSC-6 → DSC-7 (with holdout-power
   accounting when holdout members are erased). **Effect on trained weights**: the
   customer's weights are customer-owned, so deletion within their estate is their
   right exercised trivially; where erasure must be honored *inside* a trained
   model's behavior, the policy ladder is (a) retrain from the pinned pre-deletion
   checkpoint excluding tombstoned data (the default — version-pinned training sets
   make this mechanical), (b) certified unlearning where retraining cost is
   prohibitive and the technique's guarantees satisfy counsel, (c) DP-trained
   components need no action when the erased rows are within budget. Orama-owned
   assets are untouched by any single deletion — the §6.3 subtractive test guarantees
   it.
6. **Regulatory overlays as product properties** (kernel D3: governance maps 1:1 to
   our primitives):

| Overlay | Data-strategy obligation | Where it lands |
|---|---|---|
| GDPR / CCPA | Lawful basis per source; profiling transparency; Art 22-style human involvement where decisions are solely automated with legal effect; erasure (§7.5); DPIA-grade records from the supply chain itself | DSC-1 consent capture · §3.2 hard constraints · ledger reason codes |
| GLBA / banking (SR 11-7-class) | Model-risk-grade documentation as a refinement output; examiner-facing conservatism (below-the-line testing); NPI handling | §4.4 plans · DSC-5 documentation products |
| HIPAA | PHI minimization at refinement; access scoping at field level; BAA-compatible processing entirely in-environment | DSC-5 · §7.1 · residency §7.4 |
| FCRA / adverse action | Reason codes per decision (SHAP-grade) stored with the ledger entry; dispute reprocessing paths | DSC-4 ledger schema |
| EU AI Act (data-governance articles for high-risk systems: credit, insurance, employment) | Documented training-data governance, representativeness and error examination, bias testing data, logging — i.e., the DSC quality contracts and DR record *are* the compliance artifact | §2 contracts · §8 observability · DRS records |
| NAIC AI bulletin / Colorado SB21-169 (insurance) | Quantitative testing regimes on claims/underwriting data; automate payment, never denial (evidence 12 §16) | §4.8 plan · fairness test sets (DSC-7) |
| Reg F / FDCPA / FCA Consumer Duty | Contact caps and vulnerability overrides as point-in-time hard constraints; outcome reporting | §4.2 plan · §3.2 |

The strategic read: for the D3 customer (regulated, data-rich, governance-required),
**the supply chain's governance is not overhead — it is the reason we win the
account.** Every overlay above is satisfied by artifacts the supply chain produces
anyway; competitors bolt compliance on, we emit it.

---

## 8. Data quality & observability

Quality is contractual (per stage, §2) and observable (surfaced, continuously). The
observability plane:

1. **Quality contracts per stage** — the §2 table's contracts, evaluated
   continuously, with breaches alarmed to the supply-chain owner and visible to the
   agent (a breached contract downgrades the agent's confidence and can gate its
   autonomy: an agent acting on stale or broken features is a correctness-gate
   violation in operation, kernel D2.5).
2. **Drift surveillance** — input distributions (PSI-class), prediction/score
   distributions, calibration decay, per-segment realized performance as label
   windows close, entity-resolution stability, and **reward drift** (§3's proxy↔ROI
   correlation); drift triggers retraining and — the agent-economy addition —
   re-anchoring of shaped rewards. Adversarial families (fraud) run
   attack-signature surveillance at champion/challenger cadence (evidence 12 §13).
3. **Outcome-capture coverage as a first-class metric** (kernel D9 "data-flywheel
   health"): per solution, the share of executed actions with joined results within
   the attribution window, reported alongside ROI itself — because the ROI number's
   *credibility* is a function of it. Falling coverage is treated as severity-one:
   it blinds the reward, the readout, and the invoice at once (§2.9).
4. **Lineage, freshness, confidence — surfaced to customers** (the evidence 06
   promise: "answers stream back with full lineage — which sources, which steps, how
   fresh, how confident"). These are DSC metadata rendered as product: lineage =
   DSC-1→DSC-6 provenance chain per answer; freshness = source + feature age vs SLO;
   confidence = calibrated uncertainty (§5 Bayesian/UQ row) + quality-contract
   status. The trust surface and the observability plane are the same system —
   we do not maintain a prettier story for customers than we show ourselves.
5. **Leakage surveillance in operation** — too-good-to-be-true detectors on every
   retrain (offline metric jumps, single-feature dominance, window-edge bunching);
   replay tests proving as-of reconstruction; split-integrity checks on every
   training-set build (§2.6).

---

## 9. The CDO org in the future state

The CDO function is organized around the supply chain, not around tools. Roles
(role-shapes, not headcount plans — no sequencing):

| Role | Owns | Accountable for |
|---|---|---|
| **Data supply-chain owner** (per solution family, §4.1–4.10) | DSC-1/2/3/5/8 for the family; the family's canonical data plan and its per-customer instantiations (with the agent doing the mechanical work under governance) | DRS accuracy · quality contracts · loop closure |
| **Reward engineer** (per solution family) | DSC-4 label design + the reward specification (§3); the shaping/anchoring math and the hacking register | Reward-signal quality · label latency · H-1…H-8 mitigations in place |
| **Eval-data steward** (independent line) | DSC-7: holdouts, golden sets, harness data; contamination audits; §6.2 boundary evaluations | Evaluation-data integrity = uncompromised · power adequacy |
| **Data-governance officer** | §7 regime: consent state, residency attestation, deletion propagation, regulatory overlays, boundary-control audits (§6.2) | Governance violations = 0 (kernel D9) |
| **Generalized-asset curator** | The Orama-owned side of §6: schemas, playbooks, priors, benchmarks, synthetic corpora — extraction, k/DP/memorization controls, versioned release | Generalized-asset growth (§10) with zero boundary breaches |

**The seams** (each with one named shared artifact, so the seam is a contract, not a
meeting):

- **CTO (agent training, doc 03):** shared artifact = the **reward specification** +
  versioned DSC-6/7 sets. CDO says what the reward is and feeds it; CTO optimizes it
  and returns trained agents + trace logs (which are DSC-8 inputs). Eval gates are
  co-owned: CTO builds the harness runner, the steward owns the harness *data*.
- **CPO (ROI models, docs 02/04):** shared artifact = the **measurement design** per
  module (D6a). The label definition and the ROI model are the same object viewed
  twice; no module's ROI model is signed without its DSC-4/DSC-7 design attached.
- **COO (calibration, doc 07):** shared artifact = the **DRS record** per engagement.
  Ex-ante DR scores flow into the p(success) factor model; ex-post delivery outcomes
  flow back to calibrate DR weights (kernel D9 p(success) calibration).
- **CFO (pricing, doc 06):** shared artifact = the **ledger + holdout readout** as
  billing instrument (D8). Success-linked true-ups compute from DSC-4/DSC-7 under the
  steward's integrity attestation (§3.3 H-8).

---

## 10. Metrics

The CDO scorecard, all subordinate to the kernel D9 central metric (customer ROI) and
its guardrail (governance violations = 0):

| Metric | Definition | Why it's on the sheet |
|---|---|---|
| **Outcome-capture coverage** | Actions with joined results within attribution window ÷ actions executed, per solution | Kernel D9's data-flywheel health; the credibility of ROI, reward, and invoice at once |
| **Label latency** | Event → usable label (distribution, per label class) | Bounds the reward regime a solution can run (§3.1) and the agent's improvement cadence |
| **Evaluation-data integrity** | Contamination incidents (target 0) · holdout power vs ROI-model MDE · attestation currency | The readout that prices modules must be beyond suspicion (D8; §3.3 H-4/H-8) |
| **Reward-signal quality** | Proxy↔measured-ROI correlation per R-SHAPED solution · reward-drift alarms · hacking-register findings | "The metric the customer pays for is the metric the agent learns on" is a testable claim — this tests it |
| **Generalized-asset growth** | Versioned count/coverage of Orama-owned assets (schemas, priors, playbooks, benchmarks, synthetic corpora) crossing §6.2, and their measured effect on new-engagement starting performance | The second moat layer, made a number (kernel D7.3) |
| **Data-readiness distribution** | DRS distribution across the scored portfolio (per band, per family) + ex-ante vs ex-post DR calibration | Feeds D1 scoring and doc 07 calibration; shows where data work unlocks the most risk-adjusted ROI |
| **Action-linkage rate** | Solutions wired such that every planned action channel writes to the ledger ÷ all solutions | The anti-"score without action" structural check (evidence 12 §S6) |
| **Resolution quality** | Precision/recall vs golden pairs · action-unit mismatch incidents | Wrong entity = wrong action = corrupted reward (§2.2) |
| **Drift response** | Mean time to detect / to re-anchor (feature, score, reward drift) | The loop's immune system (§8.2) |
| **Loop latency** | Operation event → available-for-training (per solution vs SLO) | The compounding rate of "it sharpens the more it sees" (evidence 06) |

---

## Appendix A — Tensions for kernel review

Per the plan convention: genuine tensions with the kernel, raised for resolution
there; nothing below is resolved by this document.

1. **Shaped rewards vs D7.2's letter.** Kernel D7.2 says the agent trains on measured
   ROI "wherever the measurement loop can express it." §3.1 formalizes R-SHAPED for
   slow/sparse-ROI families (churn, maintenance) — proxies anchored to the ROI
   readout. Proposed kernel language: shaped rewards are D7.2-compliant **iff**
   anchored and monitored per §3 (reward-signal quality metric); un-anchored proxies
   are non-compliant. Confirm or tighten.
2. **The meter and the miller (H-8).** D8 makes the measurement loop the billing
   instrument; §3.3 H-8 notes we then have an interest in the meter. §2.7/§9 answer
   with steward independence + customer-auditable ledgers — but kernel Q1/Q2 (anchor
   share, who bears measurement-design risk) should resolve **who audits the
   holdout** when a success-linked payment depends on it (an external attestor
   option belongs in doc 06's mechanics).
3. **Exploration has a price.** Reward integrity requires contracted exploration
   (fraud approve-throughs, lead quotas, NBA exploration rates — §3.3 H-3). This is
   real customer cost incurred to keep the learning honest. Does exploration cost sit
   inside "customer investment" in D1's E[ROI] denominator, inside our module price,
   or as an explicit line in the ROI contract? CFO to place it in doc 06; kernel may
   want one sentence.
4. **Erasure vs holdout permanence.** §2.7 makes holdouts permanent sacred assets;
   §7.5 honors erasure into them. At scale, erasure erodes holdout power — and with
   it the billing readout's confidence. Needs a kernel-level stance (likely:
   power-accounting with contractual re-baselining thresholds) because it touches D8.
5. **Regulated-vertical asymmetry in the boundary.** §6.2 sets higher aggregation
   floors for GLBA/HIPAA-sourced learnings, which slows generalized-asset growth in
   exactly the D3-prized verticals — the moat compounds slower where we sell hardest.
   Accepted as priced, or does the kernel want DP-first manufacturing (synthetic-only
   generalization) for those verticals stated as policy?
6. **Data-readiness as veto vs price.** §2.10 treats hard DR failures as priced
   workstreams, consistent with future-state-only analysis (D10.1). But one D3
   anti-customer marker ("no outcome owner") is *also* DR-4. Proposal: DR-4's
   outcome-owner check is the single data-readiness condition that acts as a hard
   D1 veto rather than a price, mirroring D3's "no adoption ⇒ p(success)→0." Kernel
   to bless the special case.
7. **Trace-log ownership at the seam.** Agent trajectories are customer-owned (§6.1),
   yet evidence 10 M28 expects accumulating trace logs to improve agent behavior
   generally. §6.2's controls govern what crosses, but the kernel may want an
   explicit statement that **behavioral learnings from traces cross only as
   §6.2-passing playbooks/priors, never as trajectory corpora** — closing a gap a
   future counterparty will probe.
