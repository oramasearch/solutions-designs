# ROI-risk and the operating model — how the factory runs (D1/D9/D10 elaborated)

> **Status:** v2 — 2026-07-15 · **Author:** COO (combined executive team) ·
> **⚠️ Internal-confidential** · Elaborates **kernel v2** (future state · no
> sequencing · ROI-central · Auto-RL-central).
>
> **Kernel-binding.** This document elaborates the
> [strategy kernel](00-strategy-kernel.md) **D1** (p(success)/p(failure) as
> first-class quantities), **D9** (metrics), and **D10** (operating principles), and
> proposes the answer to **kernel open question 3** (the p(success) rubric — jointly
> with [`02-use-case-portfolio.md`](02-use-case-portfolio.md); §1.2 below is written
> to be explicitly reconcilable with doc 02's scoring: one factor model, named
> drivers, shared anchors). It replaces the v1 delivery-roadmap-and-risks document
> entirely. Consistent with kernel D10: **no roadmaps, no phases, no waves, no
> quarters, no hiring sequences, no engine-dependency gating appear here.** Risks are
> not scheduled around — they are **priced into p(success) and designed against in
> the solution itself** ([`04-solutions-catalog.md`](04-solutions-catalog.md) carries
> the countermeasures). This document describes how the solution factory **operates
> at its future state** and how ROI-risk is **managed continuously**. All claims cite
> evidence as **(evidence NN)** → [`../evidence/`](../evidence/).

---

## 0. What this document is

The old COO document answered *"in what order do we build, and what could go wrong
along the way?"* Both halves of that question are retired. Order is gone by kernel
decision (D10-2: the portfolio is scored, not scheduled). And "what could go wrong"
is no longer a register of dated risks with owners and mitigation deadlines — it is a
**probability model**. Kernel D1 makes p(failure) a first-class quantity: we estimate
it before we sell, we price it into the module, we design the solution against its
known drivers, we measure the outcome, and we recalibrate the estimator. The COO
function in the future state is therefore not a delivery function; it is a **risk and
operations function** with four jobs:

1. **Own the p(success) machinery** — the factor model (§1.2), the scoring process
   (§1.3), and the calibration loop (§1.4) that keeps ex-ante probabilities honest
   against ex-post outcomes.
2. **Manage the portfolio of ROI-risk** — concentration, diversification, and
   tail exposure of success-linked revenue (§1.5), on top of the failure-mode
   catalog priced as risk factors (§2).
3. **Run the factory's operating model** — the human roles, cadences, and standing
   capabilities (shadow mode, instrumentation-first) through which agents operate
   solutions under human economic and governance ownership (§3).
4. **Operate quality and governance** — correctness-gate operations, agent-autonomy
   governance, and the zero-governance-violations guardrail (§4), with the metric
   suite that makes all of it observable (§5).

The evidence stance throughout: enterprise AI fails at the **problem-and-plumbing
layer** — labels, joins, actions, incentives, measurement, governance — and only
rarely at the model layer (evidence 11 §S7; evidence 12 §S6; evidence 15 §S6). The
headline base rates are brutal: ~95% of enterprise GenAI pilots showing no measurable
P&L impact (MIT NANDA, 2025, via evidence 12 §S6); ≥30% of GenAI projects abandoned
after PoC (Gartner 2024) and >40% of agentic projects forecast canceled by 2027
(Gartner 2025, via evidence 12 §S6); only ~39% of AI-using organizations attributing
any EBIT impact (McKinsey 2025). **Those base rates are our market.** A factory that
can *predict* which deployments succeed, *price* that prediction, and *prove* the
outcome is selling exactly the thing the failed 95% lacked. p(success) is not
defensive bookkeeping — it is the commercial engine of D8 pricing and the reason the
ROI contract (D6) is credible.

---

## 1. The ROI-risk framework

### 1.1 The quantity under management

Kernel D1 fixes the decision calculus:

```
score      = E[ROI] × p(success)
E[ROI]     = expected customer return ÷ customer investment
p(success) = probability the solution delivers that return in production
p(failure) = 1 − p(success)   — estimated, priced, portfolio-managed
```

This document owns the **right-hand factor** and its portfolio aggregation. Three
properties define how we treat it:

- **It is a probability, not a label.** Not "high/medium/low risk" — a number in
  [0, 1] with a stated definition of the success event, so it can be calibrated
  against outcomes (§1.4). The success event is the solution's **definition of done
  plus its ROI readout**: *deployed in the customer environment · passed the
  correctness gate · wired to a named business action · agent-operated under
  governance · ROI measured ≥ the agreed model's threshold at the agreed horizon ·
  zero governance violations* (kernel D6). Partial outcomes are recorded on a defined
  ordinal scale (§1.4) so calibration is not corrupted by binary rounding.
- **It is decomposable.** A single opaque number can't be argued with, priced from,
  or designed against. The factor model (§1.2) names the drivers so that a low score
  says *which* countermeasure the solution design must carry (§2 → doc 04) and
  *which* deal condition the contract must secure (owner named, data probe passed,
  holdout accepted).
- **It is priced.** D8 sets module pricing as a risk-adjusted share of expected
  return: high-p(success) modules carry premium fixed pricing; higher-variance
  modules carry lower entry pricing with success-linked components tied to the
  measured ROI readout ([`06-financial-plan.md`](06-financial-plan.md) holds the
  mechanics). The same number that gates the deal prices the deal — which is why its
  calibration is a first-order commercial asset, not a data-science hobby.

### 1.2 The p(success) factor model (proposed rubric — kernel open question 3)

**Proposal (joint with doc 02).** p(success) is produced by a **factor model over
seven named drivers**. Doc 02 scores every catalog use case on the same seven drivers
at *catalog level* (the prior); deals re-score the account-variable drivers at *deal
level* (the posterior) — same factors, same anchors, two altitudes. This is the
reconciliation contract between the two documents: **one rubric, two resolutions.**

The drivers are chosen to span the evidenced failure space (evidence 11 §S7's twelve
patterns; evidence 12 §S6's seven causes; evidence 15 §S6's nine classes — §2 maps
every failure mode to exactly these drivers):

| # | Driver | What it measures | Primary evidence base |
|---|---|---|---|
| **F1** | **Data availability & label quality** | Do decision-grade sources, joinable entities, and honest labels exist at the needed history depth? | evidence 11 §S7 #2/#4; evidence 12 §S6 cause 7 |
| **F2** | **Actionability** | Does a real action path exist — a system of action, a budget, a workflow that consumes the output? | evidence 11 §S7 #1; evidence 12 §S6 cause 1 |
| **F3** | **Measurability** | Can incremental return be proven — is a holdout/uplift/phased/audit design feasible and acceptable to the customer? | evidence 12 §S5, §S6 cause 2; evidence 11 §S7 #3 |
| **F4** | **Adoption & ownership** | Is there a named outcome owner whose Monday changes, with aligned incentives and workflow fit? | evidence 12 §S6 causes 4–5; evidence 11 §S7 #8 |
| **F5** | **Governance fit** | Do the regulatory, fairness, privacy, and liability constraints map onto our governance primitives — or do they cap the solution? | evidence 12 §S6 cause 6; evidence 15 §S6 fairness/high-impact classes |
| **F6** | **Methodology maturity for the problem** | How settled is the methodology for *this problem shape* — routine, established, emerging, or rare (the maturity tiers)? | evidence 12 §S7; evidence 15 §S7 |
| **F7** | **Agent-operability** | Can an Auto-RL agent safely operate this solution — bounded action space, observable reward (the measured ROI signal, D7), reversible or gateable actions, audit-complete traces? | kernel D2/D7; evidence 12 §S7 rare tier; evidence 15 §S6 automation-beyond-safe-frontier |

**Anchor scale.** Every driver is scored **0–4** against written anchors. The anchors
are the rubric's real content — they convert judgment into repeatable, arguable,
calibratable scores. Canonical anchor set (doc 02 carries the same table; per-use-case
annotations live there):

| Score | F1 data & labels | F2 actionability | F3 measurability | F4 adoption & ownership |
|---|---|---|---|---|
| **0** | Sources unidentified or unjoinable; labels absent or unrecoverable | No system of action; output is a dashboard by design | Return inherently unprovable (no counterfactual conceivable, metric political) | No owner; program sponsored by IT/innovation only |
| **1** | Sources exist but entity resolution unbuilt; labels reconstructible with major effort; suspected leakage/bias in labels | Action path named but no budget/capacity to act; workflow change unscoped | Only before/after possible, heavily confounded; customer resists any holdout | Owner named but unaccountable for the outcome metric; incentives conflict with the action |
| **2** | Decision-grade sources connected; labels present with known gaps (censoring, delay, drift); point-in-time reconstruction partial | System of action integrable via API; capacity to act exists but treatment playbook immature | Phased/staggered rollout or switchback feasible; guardrail metrics definable | Owner accountable; incentives neutral; workflow fit requires moderate redesign |
| **3** | Point-in-time-correct feature/label store achievable at onboarding; label latency characterized; leakage audit clean | Action wiring specified end-to-end (score → decision → system write → outcome capture); playbook exists | Permanent randomized holdout or uplift design accepted contractually; outcome logging automatic | Owner's KPI moves with the solution's ROI metric; joint KPI reporting above contending teams |
| **4** | Labels are captured *by the solution's own operation* (action taken + result observed — the D7 reward loop); data supply chain contractual (doc 08) | The action is the product surface (auto-executed under governance with human gates where required) | The measurement loop is the billing instrument (D8): holdout/uplift readout contractually trues up price | Customer operating cadence includes the ROI readout review; outcome owner co-runs it |

| Score | F5 governance fit | F6 methodology maturity | F7 agent-operability |
|---|---|---|---|
| **0** | Prohibited or effectively prohibited domain (autonomous high-stakes decisions on protected classes; anti-portfolio per D4) | No evidenced production pattern for this problem shape (rare tier, evidence 12 §S7) | Actions irreversible, unbounded, and unauditable; no safe autonomy frontier definable |
| **1** | High-risk regime (EU AI Act high-risk class, fair-lending, works-council) with **no** existing customer compliance apparatus | Rare tier with adjacent-tier analogies only | Action space unbounded but gateable; reward signal absent (no outcome capture) |
| **2** | Regulated domain where our primitives (identity-scoped, audited, approval-gated) map 1:1 to stated requirements | Emerging tier — real deployments, thin measurement, unsettled practice (evidence 12 §S7) | Bounded action space; reward proxy available; approval gates required on all action classes |
| **3** | Regulated domain, customer compliance function engaged ex-ante, examiner-ready posture achievable (the dossier-14/15/27 pattern, evidence 12 §S6) | Established tier — widely deployed, execution-quality-dependent | Bounded actions; measured-ROI reward available; autonomous-under-audit viable for low-blast-radius classes |
| **4** | Governance is a *selling* feature: audit trail and approval gates exceed the customer's own bar (evidence 06 governed-self-serve promise) | Routine tier — decade-plus production practice, failure modes documented | Full graduated-autonomy profile: per-action-class gates, blast-radius limits, rollback, audit sampling; reward = the billed ROI metric |

**Combination rule.** The rubric's arithmetic is deliberately simple and deliberately
**non-compensatory at the bottom**:

```
base   = logistic(w · x)          x = (F1…F7) scores, w = per-driver weights,
                                   fit to outcome data as it accrues (§1.4);
                                   priors from the evidence base until then
floor  = any driver at 0  ⇒  p(success) capped at 0.05  (a zero is a veto)
         any driver at 1  ⇒  p(success) capped at 0.45 per such driver
                              (compounding caps for multiple 1s)
p(success) = min(base, floors)
```

Rationale: the failure evidence is emphatic that the drivers do not average out — a
score with no owner fails at *any* level of data quality (evidence 12 §S6 cause 1:
"no name, no solution"), and unprovable value dies at budget review regardless of
model quality (cause 2). Weakest-link caps encode that. The logistic core keeps the
output a genuine probability and makes the weights *learnable*: as ex-post outcomes
accumulate (§1.4), the weights are re-fit and the model's own miscalibration becomes
measurable. Until sufficient outcome data exists, weights start at the evidence-based
prior — F2 and F4 heaviest (the two most documented killers, evidence 12 §S6),
F1/F3 next, F5–F7 as strong modifiers — and every weight revision is a versioned
rubric change (§1.4).

**Worked shape (illustrative, not a catalog entry).** A churn solution (UC-1/S-1
family) at a B2B SaaS account with clean CRM/billing exhaust, a retention team with
budget, a contractually accepted 5–10% permanent holdout, a CS VP whose comp moves
with net churn, standard-tier governance, routine-tier methodology, and
approval-gated outbound actions scores roughly (F1 3, F2 3, F3 4, F4 3, F5 3, F6 4,
F7 3) → high p(success), premium fixed pricing. The same solution at an account with
no named owner (F4 1) and holdout refusal (F3 1) is capped low → either the deal
conditions change (contract requires the owner and the holdout — turning risk pricing
into deal design) or the module is priced with a dominant success-linked component,
or we decline. **The rubric's first job is not prediction — it is forcing the
conditions that make success probable into the contract.**

### 1.3 Producing the ex-ante score — per solution and per deal

The score is produced at two altitudes, by defined roles (§3.2), with defined
evidence requirements. Scoring without evidence is guessing with extra steps; each
driver's score must cite its evidence artifact.

**Altitude 1 — the catalog prior (per solution, owned by the solution economist with
doc 02).** Every solution `S-n` carries a standing driver profile: the distribution
of scores observed across its deployments plus the external evidence base (the
maturity tier from evidence 12/15 §S7 pins F6; the failure-pattern susceptibility
lists from evidence 11 §S7 flag which drivers are structurally fragile for this use
case). The prior is a *distribution*, not a point — a solution family with bimodal
outcomes (the "established but uneven" tier: churn, PdM, AML triage — evidence 12
§S7) has a wide prior that only deal-level evidence narrows. Catalog intake (§3.3)
requires a complete driver profile before any use case enters the catalog: that is
the D1 scorecard operating as the intake instrument.

**Altitude 2 — the deal posterior (per customer engagement, owned by the solution
economist with the customer outcome manager).** The account-variable drivers —
F1 (this customer's actual data), F2 (this customer's actual systems of action),
F3 (this customer's measurement acceptance), F4 (this customer's owner and
incentives), F5 (this customer's regulatory posture) — are re-scored against
account evidence. Evidence requirements per driver:

| Driver | Required deal-level evidence (no evidence ⇒ score ≤ 1) |
|---|---|
| F1 | **Data probe results** — agent-run profiling of the actual sources (Auto-Suggest studies the customer's data, kernel D2): join-key match rates, label presence/latency/reconstruction depth, leakage scan on candidate features. The agent pre-fills F1 with measured values; the human confirms. |
| F2 | Named system of action + write-path confirmed (API/integration verified, not asserted); treatment capacity quantified (seats, budget, SLA); playbook document exists |
| F3 | Measurement design agreed **in the contract** (holdout %, uplift cells, phased design, audit-sampling rate) per the pattern table in evidence 12 §S5; guardrail metrics named |
| F4 | Outcome owner named in the contract with their KPI; incentive map reviewed (who gains/loses if the solution works — the Goodhart pre-mortem); workflow-fit assessment |
| F5 | Governance mapping doc: applicable regimes listed, our primitives mapped to each, customer compliance sign-off obtained ex-ante (the design-input pattern, evidence 12 §S6 cause 6) |
| F6 | Inherited from catalog prior; adjusted only if the deal's problem shape deviates from the catalog form |
| F7 | Agent operating definition drafted (kernel D6c): action classes enumerated, autonomy defaults assigned (autonomous-under-audit vs approval-gated), blast-radius limits and rollback paths specified, reward-signal availability confirmed (D7) |

**The output artifact — the risk memo.** One page per deal, filed before pricing:
the seven scores with evidence citations, the resulting p(success) with the floors
applied, the top-3 failure modes from the §2 catalog that this profile activates,
the countermeasures the solution design carries for each (→ doc 04), the deal
conditions inserted to raise weak drivers, and the residual-risk statement. The risk
memo is the input to D8 pricing (fixed vs success-linked split) and the record that
calibration (§1.4) later scores. **Ex-ante means ex-ante:** the memo is committed
(hash-logged in the audit trail, §4.3) before contract signature; post-hoc edits are
governance violations.

### 1.4 Calibration discipline — keeping the probabilities honest

An uncalibrated probability is a vibe with decimals. The calibration loop is the
mechanism that makes p(success) a real asset and is itself instrumented
(instrumentation-first, §3.5):

1. **Every score is recorded** — deal posteriors and catalog priors, with rubric
   version, scorer, evidence citations, and timestamp, in the outcome ledger.
2. **Every outcome is adjudicated** against the success event defined at scoring
   time (kernel D6 definition of done + the agreed ROI readout at the agreed
   horizon). Outcomes land on a fixed ordinal scale so partial results inform
   calibration: **O4** full success (readout ≥ agreed threshold) · **O3** deployed
   and measured, readout below threshold · **O2** deployed, measurement failed or
   contested (itself a recorded failure of F3 scoring) · **O1** never reached
   operating state · **O0** governance violation or harmful incident (automatic
   worst outcome regardless of ROI). The adjudication is done in the ROI readout
   review (§3.3), not by the scorer — separation of estimator and grader.
3. **Calibration curves are computed** on cadence (§3.3): predicted p(success)
   deciles vs realized success frequency (reliability diagrams), Brier score and
   expected calibration error (ECE) overall and **per driver** (partial-dependence
   of realized outcomes on each factor's score — does F4=1 really fail at the rate
   the floor implies?), per solution family, per industry, and per scorer
   (scorer-level bias is a real and correctable phenomenon).
4. **Miscalibration triggers rubric revision.** Standing triggers: |ECE| beyond the
   agreed band for two consecutive reviews · any decile off by more than the
   tolerance with n above the minimum sample · a driver whose scores show no
   discrimination (outcomes independent of the score — the anchor wording is broken)
   · a failure whose post-mortem (§4.1) finds a cause no driver captures (the model
   is missing a factor — the §2 catalog gains an entry and the rubric gains an
   anchor clause). Revisions are **versioned like migrations**: numbered rubric
   versions, changelog with the triggering evidence, scores always tagged with
   their version so cross-version calibration is never silently pooled. Weights
   (§1.2) are re-fit only at version boundaries.
5. **Selection effects are managed, not ignored.** We observe outcomes only for
   deals we accept — the classic censoring trap (the same trap as credit-approval
   models, evidence 12 §S5 exploration-slices pattern). Countermeasures: record
   scores for **declined** deals too (and track any that proceed elsewhere, where
   knowable); maintain a small exploration slice of below-threshold deals accepted
   deliberately at success-linked-heavy pricing (bounded loss, priced as R&D — the
   portfolio's learnability budget); and report the acceptance-rate-adjusted
   calibration alongside the raw curve.

The calibration metrics themselves are D9 companions (kernel D9: "p(success)
calibration — do our ex-ante success probabilities match ex-post outcomes?") and
appear in the §5 metric suite with thresholds and owners.

### 1.5 Portfolio-level risk management

Individual deal risk is priced; **portfolio risk is structured**. Success-linked
revenue (D8) makes part of our income a portfolio of contingent claims on customer
outcomes — so the COO function manages it the way a risk desk manages a book, with
expected-shortfall thinking rather than mean-case planning.

**Concentration limits.** Failures correlate through shared factors: an industry
regime break (rate shock hitting all collections/credit modules), a use-case-family
methodology defect (a leakage class discovered in one churn deployment implicates
sibling deployments), a shared-driver shock (a regulatory reinterpretation
degrading F5 across every people-domain solution simultaneously — the EU AI Act
pattern, evidence 11 §S7 #9). Standing limits, reviewed at the portfolio review
(§3.3), expressed as shares of **success-linked revenue at risk** (not deal count):

| Axis | Limit rationale | Instrument |
|---|---|---|
| Industry | Regime breaks are industry-shaped (Zillow: one asset market's volatility — evidence 12 §S6 cause 3) | Max share of success-linked revenue per industry; HHI tracked |
| Use-case family | Methodology defects and measurement-design flaws replicate within a family | Max share per family (doc 02's families); correlated-failure stress runs |
| Single customer | Outcome adjudication disputes and churn concentrate | Max share per customer; higher bar where the customer also concentrates data-supply-chain value (doc 08) |
| Driver-profile shape | A book full of F4=2 deals is one incentive fashion away from correlated failure | Distribution monitoring of driver scores across the active book |
| Maturity tier (F6) | Emerging-tier solutions bifurcate (evidence 12 §S7 trajectory note 2) — the tier's outcome variance is structurally high | Max share of success-linked revenue in emerging/rare tiers; rare tier success-linked-only |

**Diversification of ROI streams.** The complement of limits: deliberately hold a
mix of ROI mechanisms (revenue lift, cost reduction, loss avoidance,
working-capital release, risk reduction — kernel D1) because they respond to
different macro states: cost-reduction and loss-avoidance modules are
counter-cyclical hedges against revenue-lift modules' pro-cyclicality. The
portfolio review tracks the mechanism mix against the target band set with the CFO
(doc 06).

**Expected-shortfall thinking for success-linked revenue.** For the success-linked
book, the planning quantity is not expected value but **ES(α)**: the mean of the
worst α-tail of portfolio outcomes under the calibrated p(success) distribution
*with correlations from the concentration axes above* (independent-failure math is
exactly the mistake the limits exist to prevent). Standing stress scenarios run at
each portfolio review: an industry regime break zeroing that industry's
success-linked readouts for the period; a methodology-defect event failing all
deployments of one family; a governance event (one §2 catalog scandal-class
failure) zeroing the affected domain **and** imposing the reputational haircut on
adjacent domains' pipeline. The CFO's planning assumptions (doc 06) consume ES, not
the mean; pricing structure (fixed vs contingent split per deal) is the primary
lever that keeps ES inside the band — which closes the loop: **deal-level risk
pricing is portfolio risk management done one contract at a time.**

---

## 2. The failure-mode catalog as risk factors

This section replaces the v1 time-sequenced risk register. Its logic: every
documented way enterprise AI solutions fail is (a) mapped to the p(success) driver
it degrades — so the rubric prices it ex-ante; (b) given its **ex-ante signal** —
the observable that predicts it at scoring time; (c) paired with the **design
countermeasure the solution itself carries** (specified per module in
[`04-solutions-catalog.md`](04-solutions-catalog.md) §n.12 tables — risks are
designed against, not scheduled around); and (d) annotated with **residual risk** —
what remains even with the countermeasure, which is what the residual p(failure)
and the success-linked pricing share actually price.

Sources: evidence 11 §S7 (twelve failure patterns across 124 use cases), evidence
12 §S6 (seven failure causes + the six things successes did differently), evidence
15 §S6 (nine failure classes with primary-source post-mortems), and the documented
post-mortems cited inline. Named catastrophes are load-bearing: they are the
calibration points for what a driver score of 0–1 *means* in the world.

### 2.1 Group A — Data & correctness failures (degrade F1, priced by F1/F6)

| # | Failure mode | Driver | Ex-ante signal | Design countermeasure (→ doc 04) | Residual risk |
|---|---|---|---|---|---|
| A1 | **Label leakage** — the model learns the answer; pilot metrics collapse in production (the 0.99-AUC churn studies, evidence 12 §S6 cause 3) | F1 | Data probe finds post-outcome fields joinable to features; no point-in-time store; pilot metrics "too good" | Point-in-time-correct feature/label reconstruction as a build requirement; leakage audit in the correctness gate; temporal-honesty tests per methodology (doc 03) | Novel leakage channels via upstream schema changes; caught by drift + incident review, not prevented |
| A2 | **Label bias absorption** — labels encode past human bias; the model automates it (Amazon recruiting: women-penalizing model built 2014, scrapped by 2017 — Reuters 2018, evidence 12 §S6 / evidence 15 §S6) | F1, F5 | Labels derived from historical human decisions in a protected-class-adjacent domain; no bias audit of label provenance | Label-provenance audit at intake; fairness metrics in the guardrail suite; F5 anchor forces ex-ante compliance engagement | Bias entering through proxies invisible to the audit; residual priced via F5 caps in people domains |
| A3 | **Investigation-biased labels** — outcomes only observed where past policy looked (fraud/AML classics, evidence 11 §S7 #2) | F1, F3 | Label exists only for the acted-upon population; no below-the-line data | Exploration slices / audit sampling designed into the measurement loop (evidence 12 §S5); reward design accounts for censoring (doc 08) | Exploration budget cut in cost reviews — the documented pitfall; monitored as a standing metric (§5) |
| A4 | **Entity-resolution debt** — the model is easy, the join is hard (evidence 11 §S7 #4; the long pole in nearly every dossier, evidence 12 §S6 cause 7) | F1 | Probe join-key match rates below threshold; identity spread across systems with no master | ER as a first-class methodology component (doc 03); match-rate floors as deal conditions; agent-run ER quality monitoring | Silent match degradation as source systems evolve; caught by data-quality contracts (doc 08) |
| A5 | **Drift unmonitored until regime break** — Zillow Offers: pricing models met pandemic volatility while wired to autonomous quota-driven purchasing; >$500M write-down, ~25% workforce cut, business exit (Nov 2021; $881M unit loss 2021 — WSJ 2022, evidence 12 §S6) | F1, F7 | No drift monitoring in the operating definition; autonomous actions with unbounded blast radius over a volatile regime | Drift surveillance standing per solution (doc 08); blast-radius limits + auto-demotion to shadow on drift alarm (§4.2); regime-sensitive solutions capped on F7 | A regime break faster than the demotion loop; priced in ES stress scenarios (§1.5) |
| A6 | **Overfit-then-drift on proxy signals** — Google Flu Trends: ~2× overestimate 2012–13, retired 2015 (Lazer et al., *Science* 2014, evidence 12 §S6) | F1, F6 | Model built on correlational proxies with no mechanism; no external validation plan | External-validation requirement in the correctness gate for transported models; mechanism review at catalog intake | Proxy decay between validations; bounded by readout cadence |
| A7 | **External-validity collapse** — Epic sepsis: AUC 0.63 in external validation, missed two-thirds of cases while alerting broadly (JAMA Int. Med. 2021, evidence 12 §S6 / evidence 15 §S6) | F1, F6 | Model validated only on vendor/development population; deployment population differs; threshold economics unexamined | Per-customer validation on the customer's own data **before** action wiring (own-data training is the product thesis, evidence 06/08 — this failure mode is our founding argument); threshold-level workload analysis | Small-population customers where local validation is underpowered; F3 anchor forces honesty about it |
| A8 | **Adversarial adaptation** — fraudsters/attackers update against the model in days (evidence 11 §S7 #6) | F1, F6 | Adversarial domain (fraud, AML, security) with static retrain cadence in the operating definition | Continuous-learning loop as the operating mode (D7 reward capture); champion/challenger as standing practice (evidence 12 §S5) | Novel attack classes outside the action space; residual priced into loss-avoidance ROI models |
| A9 | **Train/serve skew & silent pipeline decay** — hidden-technical-debt class (Google, via evidence 15 §S6) | F1, F7 | No skew monitoring planned; feature pipelines rebuilt separately for serving | One graph for train and serve (correct-by-construction compilation, evidence 06); skew monitors in standing telemetry | Undeclared upstream consumers/changes; caught by data-quality contracts (doc 08) |
| A10 | **Pilot-shaped data prep** — heroic manual preparation unreproducible in operation (evidence 11 §S7 #11) | F1, F7 | Probe shows the demo dataset was hand-curated; no automated path from raw sources | No hand-prepared data in scoring: F1 is scored on the *automated* supply chain the agent will actually operate | Long-tail source quirks surfacing at scale; exception-rate metric (§5) |

### 2.2 Group B — Action & adoption failures (degrade F2/F4)

| # | Failure mode | Driver | Ex-ante signal | Design countermeasure (→ doc 04) | Residual risk |
|---|---|---|---|---|---|
| B1 | **No action path** — score produced, nothing consumes it; "insight" dies as a dashboard (the most common stall across all dossiers — evidence 12 §S6 cause 1; evidence 11 §S7 #1) | F2 | No named system of action; no budget to act; "we'll figure out the workflow later" | Definition of done requires wiring to a named business action (kernel D6); F2=0 is a scoring veto — the deal does not price | Action path atrophies post-deployment (reorgs); caught by action-execution-rate telemetry (§5) |
| B2 | **Alert-fatigue economics** — precision below the attention budget; responders tune out (>90–95% FP AML baselines; the 74%-of-breaches-had-ignored-alerts pattern — evidence 11 §S7 #7) | F2, F4 | Treatment capacity unquantified; expected alert volume ÷ capacity ratio never computed | Capacity-aware thresholding as a design parameter; workload guardrail metrics; triage-quality (not volume) in the ROI model | Capacity cuts on the customer side; surfaced by override/ignore-rate telemetry |
| B3 | **Trust collapse after a bad streak** — one automation-made-it-worse incident freezes the program (ORION's early routes; AIOps freezes — evidence 12 §S6 cause 4) | F4 | No shadow period in the operating definition; no reason-codes; first exposure is live action | Shadow mode as a standing, customer-selectable capability (§3.4); explanation layer (reason codes) as an actionability mechanism; graduated autonomy with evidence-based promotion | A visible early miss despite gating; recovery playbook = demote to shadow + publish honest accuracy (the deliberate-trust pattern, evidence 12 §S6) |
| B4 | **Workaround / override culture** — users route around the system; overrides untracked (planner overrides, comp-attached forecasts — evidence 11 §S7 #8) | F4 | Incentive map shows the user's comp fights the output; overrides possible but unlogged | Override rights **with tracked overrides** as a design feature; override-rate telemetry with review; FVA-style override value measurement (evidence 15 §S5) | Persistently high justified overrides = the model is wrong; that is the desired detection, not a failure of the countermeasure |
| B5 | **Incentive misalignment / metric gaming** — save-rate-comped teams gaming easy saves; growth-vs-fraud threshold wars; Goodhart everywhere (evidence 12 §S6 cause 5) | F4, F3 | Single KPI gates rewards for one team; contending teams own conflicting metrics | Joint KPI reporting owned above the contending teams (the recurring success fix); guardrail counter-metrics gating, not decorating | New gaming surfaces post-design; incentive map refreshed at ROI readout reviews |
| B6 | **Capacity-free intervention** — prediction lands where no one can act (readmission scores without intervention capacity — evidence 11 §S7 #1) | F2 | Treatment playbook absent; intervention resource unbudgeted | Playbook existence is an F2 anchor requirement; treatment design co-owned with the customer outcome manager | Playbook exists but underperforms; uplift measurement reallocates treatments (evidence 12 §S5) |
| B7 | **Automating the symptom** — faster appeals instead of fewer denials; collections on billing errors; triage of contacts a product fix would eliminate (evidence 11 §S7 #12) | F2, F3 | Root-cause analysis absent from the ROI model; the value pool is upstream of the proposed action | ROI-model review asks "is the cheaper fix upstream?" at intake (D1 scorecard); driver-analysis solutions (UC-7 family) positioned to find root causes, not just accelerate symptoms | Customer explicitly buys the symptom-automation anyway; priced honestly with capped E[ROI] |

### 2.3 Group C — Measurement failures (degrade F3)

| # | Failure mode | Driver | Ex-ante signal | Design countermeasure (→ doc 04) | Residual risk |
|---|---|---|---|---|---|
| C1 | **Measurement never designed** — impact unprovable; program dies at budget review (the substance of NANDA's 95% — evidence 11 §S7 #3; evidence 12 §S6 cause 2) | F3 | No holdout/uplift/phased design in the contract; "we'll compare before/after" | The measurement loop is contractual and is the billing instrument (D8) — a deal without a measurement design cannot be priced, so it cannot close | Customer-side erosion post-signature → C2 |
| C2 | **Holdout erosion** — exceptions eat the control group ("we can't not-treat that account" — evidence 12 §S5 pitfall) | F3 | Holdout smaller than significance requires; exception process undefined | Holdout integrity as a monitored metric with contractual exception budget; refresh design keeps it representative | Slow erosion below power; detected by §5 outcome-capture coverage before the readout is void |
| C3 | **Wrong metric / activity theater** — containment vs resolution (the Klarna 2024→2025 arc); redemption vs lift; perceived vs measured speedup (METR 2025: 19% slower while feeling 20% faster) (evidence 12 §S6 cause 2; evidence 15 §S6) | F3 | ROI model counts activity (scores served, chats deflected, content produced) rather than incremental business outcome | ROI models must name the incremental business metric and its counterfactual design; activity metrics admissible only as diagnostics, never as the readout | Customer insists on the vanity metric; recorded as a contested-measurement outcome (O2) and priced accordingly next time |
| C4 | **Delayed/censored labels stall the loop** — slow-label domains (credit vintages, PdM) starve both measurement and RL reward (evidence 12 §S5 backtesting pattern) | F3, F1 | Label latency ≫ review cadence; no vintage/rolling design | Vintage tracking + out-of-time backtesting as the interim readout; reward shaping on leading indicators with lagging true-up (doc 08) | Leading indicators mislead; trued up at the lagging readout, priced in the contingent split |
| C5 | **Shadow results ignored** — challenger runs forever without promotion criteria (evidence 12 §S5 champion/challenger pitfall) | F3, F7 | Operating definition lacks promotion/demotion criteria | Graduated-autonomy ladder with **written promotion evidence thresholds** per action class (§4.2) | Organizational cold feet despite evidence; surfaced at ROI readout review as forgone-ROI line item |

### 2.4 Group D — Governance failures (degrade F5, cap F7)

| # | Failure mode | Driver | Ex-ante signal | Design countermeasure (→ doc 04) | Residual risk |
|---|---|---|---|---|---|
| D1 | **Governance as late veto** — legal/compliance/works-council discovered at deployment review (evidence 12 §S6 cause 6) | F5 | No ex-ante compliance engagement; F5 scored without a governance mapping doc | F5 evidence requirement forces the mapping + sign-off before pricing (§1.3); governance officers own the mapping library per regime (§3.2) | Regime reinterpretation mid-engagement; portfolio-level F5 shock in ES scenarios (§1.5) |
| D2 | **Bias scandal in production** — Dutch childcare benefits: risk profiling contributed to ~26,000 families wrongly pursued; SyRI struck down (Feb 2020); government resigned (Jan 2021) (evidence 12 §S6; Amnesty report via evidence 15 §S6) | F5 | High-stakes decisions on protected classes; appeal path absent; disparate-impact metrics unmonitored | Anti-portfolio exclusion for autonomous high-stakes decisions without human gates (kernel D4); fairness guardrails with gating authority; appeal/override path mandatory in affected domains | Even gated systems carry scandal exposure; priced via F5 caps + the reputational-haircut stress scenario |
| D3 | **Opaque adverse decisions** — Apple Card/Goldman NYDFS investigation (2019): transparency and customer-service deficiencies even absent an unlawful-discrimination finding (evidence 12 §S6; NYSDFS report via evidence 15 §S6) | F5, F4 | No reason-code/explanation layer for adverse outcomes; no human escalation path | Explanation layer as a standing solution component (it is also the F2 actionability mechanism); adverse-decision review workflow | Explanation quality drift; audit sampling of explanations (§4.2) |
| D4 | **Unsafe recommendations in expert domains** — IBM Watson for Oncology: unsafe-recommendation audit findings; MD Anderson's ~$62M abandonment (2017) (evidence 12 §S6; STAT via evidence 15 §S6) | F5, F6 | Synthetic/narrow training base behind high-impact recommendations; expert-evidence basis thin; F6 rare tier | Rare-tier F6 caps p(success) structurally; expert-in-the-loop gates mandatory; per-customer validation (A7's countermeasure) | Expert over-trust of fluent output; countered by honest accuracy publishing + audit sampling |
| D5 | **Hallucination liability** — Air Canada held liable for its chatbot's invented policy (2024) (evidence 12 §S6; evidence 11 §S7 #9) | F5, F7 | Ungrounded generative surface speaks for the company without policy grounding or containment measurement | Grounding-as-policy-engine discipline (evidence 12 §S7 trajectory note 2); generative surfaces constrained to cited, governed content; anti-portfolio excludes unmeasurable generic chatbots (kernel D4) | Residual invention within grounded scope; below-the-line sampling of generated outputs |
| D6 | **Privacy/egress breach** — customer data leaving the environment | F5 | Any architecture requiring raw-data egress (anti-customer signal, kernel D3) | The product thesis itself: in-environment deployment, data never leaves (evidence 06/08); egress verification under network capture (evidence 08) | Misconfiguration; zero-violation guardrail + audit completeness checks (§4.3) |

### 2.5 Group E — Economics & operations failures (degrade F2/F7, distort E[ROI])

| # | Failure mode | Driver | Ex-ante signal | Design countermeasure (→ doc 04) | Residual risk |
|---|---|---|---|---|---|
| E1 | **Unit-economics inversion** — the solution costs more than the problem: sensor/licensing/inference/review costs exceed the pool; long-tail exceptions eat the savings (evidence 11 §S7 #10) | E[ROI] | Value-pool math absent or done on the best segment; exception-handling cost unmodeled | Full-cost customer-investment model in the ROI contract (kernel D1: price + integration + data work + change cost); exception-rate telemetry against the modeled rate | Exception tail fatter than modeled; trued up at readout, eaten by the contingent share |
| E2 | **Integration/data-readiness underestimation** — the perennial long pole (Algorithmia 2020: 55% of companies >6 months to deploy; evidence 12 §S6 cause 7) | F1, F2 | Deal scoping allocates most effort to modeling; probe results contradict the integration estimate | Agent-run probes price the integration honestly at scoring time (§1.3 F1/F2 evidence); the factory's compile-deploy automation is itself the structural countermeasure (evidence 06) | Customer-side integration dependencies we don't control; deal conditions + capped fixed share |
| E3 | **Runaway automated actions** — Knight Capital: inadequate safeguards/testing before erroneous orders; $440M loss in 45 minutes (SEC order 2013, via evidence 15 §S6) | F7 | Autonomous actions without blast-radius limits, rate limits, rollback, or kill path | Per-action-class blast-radius limits, rate caps, circuit breakers, rollback paths in every agent operating definition (kernel D6c, §4.2); deployment integrity in the correctness gate | Failure of the limiter itself; bounded by the limits' own audited testing + incident drills |
| E4 | **Automation beyond the safe frontier** — acting where the evidence supports only recommending (evidence 15 §S6; Gartner >40% agentic cancellation forecast, evidence 12 §S7) | F7 | Autonomy defaults exceed the maturity tier's evidence; promotion without written thresholds | Graduated autonomy with evidence-based promotion (§4.2); F7 anchors tie autonomy to reward observability and reversibility | Pressure to over-automate for cost reasons; resisted structurally — autonomy share is a *measured outcome*, never a sales promise (§5) |
| E5 | **Pilot-shaped success** — works only in the pilot's conditions: one site/segment/asset class; scaling assumptions untested (evidence 11 §S7 #11; the Gartner PoC-abandonment causes) | F6, F1 | Evidence base is single-segment; heterogeneity unexamined; per-segment economics unmodeled | Segment-cut readouts required (average lift can hide harm in a regulated or high-cost segment — evidence 15 §S5); catalog prior kept wide for uneven-tier families (§1.3) | Unmodeled heterogeneity at new customers; the catalog prior *is* the pricing of this |
| E6 | **Technical-debt decay** — glue code, pipeline jungles, undeclared consumers, feedback loops (hidden-technical-debt class, evidence 15 §S6) | F7, F1 | Bespoke per-customer glue outside the compiled graph; unmanaged feedback paths | Correct-by-construction compilation keeps the operated artifact regenerable (evidence 06); feedback loops explicit in the data plan (doc 08) | Debt in the customer-side surround; surfaced by incident review |
| E7 | **Measurement-capacity overload on the human side** — review/audit burden exceeds the customer's staffing floor (Epic sepsis threshold economics; hard-deflection staffing floors — evidence 11 §S7 #10) | F2, F3 | Audit-sampling and review workloads never staffed in the ROI model | Review workload modeled as customer investment (kernel D1); customer-outcome-manager load factors tracked (§5) | Customer staffing cuts; renegotiated at readout |

### 2.6 How the catalog is used

The catalog is an **operating instrument**, not documentation:

- **At intake (D1 scorecard):** every candidate use case is screened against the
  susceptibility lists — which failure modes its family is structurally prone to
  (evidence 11 §S7 mapping) — and its catalog driver profile inherits those caps.
- **At deal scoring:** the risk memo (§1.3) names the top activated failure modes,
  their countermeasures, and residual risks — the memo's residual-risk statement is
  a selection from this catalog, not free prose.
- **At solution design:** doc 04's per-module failure-modes-and-countermeasures
  tables instantiate these entries for each `S-n`; a catalog entry with no
  countermeasure in the affected module is a design gap, flagged at portfolio review.
- **At incident review (§4.1):** every incident post-mortem either maps to an entry
  (confirming the model) or extends the catalog (and possibly the rubric — §1.4
  trigger 4). The catalog version-controls alongside the rubric.
- **At calibration review:** entry-level realized frequencies (how often did B1
  actually bite, at which driver scores?) tune the floors and weights.

---

## 3. The operating model of the factory at scale

### 3.1 The shape of the company

In the future state, **agents do the operating and humans do the owning.** Every
solution is built, run, monitored, explained, and improved by the customer's
Auto-RL agent (kernel D2); the compiled graph, the deployment, the retraining loop,
the drift surveillance, and the routine actions are agent work. What remains human
is precisely what the failure evidence says machines don't fix: **economic
judgment** (what is this outcome worth, what probability do we assign, what price
follows), **ownership** (whose Monday changes, who answers for the readout),
**calibration** (are our own estimates honest), and **governance** (what may act
autonomously, what must be approved, what must never happen). The org chart follows
that split. Headcount scales with **customers × judgment surface**, not with
solutions operated — the agents carry the operational scaling — which is the
structural reason the factory's economics work (kernel §1) and the reason the
load-factor metrics in §5 exist: they detect when judgment surface is scaling in a
way that says a process should become an agent capability.

The five human role families, and the cadences through which they act, are the
whole operating model. There are no delivery phases to manage; there is a
**continuous loop**: score → price → deploy → operate → read out → recalibrate →
re-score, running concurrently across every solution and customer in the book.

### 3.2 The human roles

| Role | Owns | Decides | Measured on | Relationship to agents |
|---|---|---|---|---|
| **Solution economist** | The ROI model and p(success) score of each solution family and each deal (the risk memo, §1.3); the catalog driver profiles (with doc 02) | E[ROI] model structure; driver scores (with evidence); the fixed/contingent pricing recommendation to the CFO function (doc 06) | Calibration error of their scores (scorer-level curves, §1.4); realized-vs-modeled ROI of their book (§5) | Consumes agent-run data probes (Auto-Suggest pre-fills F1); challenges agent-produced ROI attribution; never overrides the measured readout |
| **Data supply-chain owner** (CDO org — [`08-data-strategy.md`](08-data-strategy.md)) | The per-solution data supply chain: sources, entity resolution, label/outcome capture (action taken + result observed — the RL reward), refinement, data-quality contracts | Data-plan adequacy at intake (no data plan, no catalog entry — kernel D7); reward-signal definitions with the solution economist | Outcome-capture coverage (§5); data-quality contract adherence; reward-signal integrity | Specifies what agents must capture; audits agent-maintained pipelines against the contracts |
| **Agent supervisor** | The operating envelope of each deployed agent: its action classes, autonomy grades, promotion/demotion state, drift and performance posture | Promotion/demotion between autonomy grades against written evidence thresholds (§4.2); demotion to shadow on alarm; incident response for agent behavior | Incident rates of supervised agents; autonomy share achieved *within* governance (§5); promotion-decision quality (retrospective) | The direct management line: reviews agent traces, tunes envelopes, escalates to governance officers on boundary questions |
| **Governance officer** | The governance mapping library (regime → our primitives); audit-review operations; the zero-violation guardrail (§4.3) | F5 sign-off at scoring; approval-gate design per action class; audit-sampling rates; breach adjudication | Governance violations = 0 (the guardrail); audit coverage and finding-closure rates | Audits autonomous-action logs (below-the-line sampling); certifies audit-trail completeness; owns the kill authority jointly with agent supervisors |
| **Customer outcome manager** | The customer relationship as an *outcome* relationship: the ROI readout review with the customer's outcome owner; adoption health; the F4 reality on the ground | Readout adjudication inputs (with the solution economist as counterparty, §1.4); escalation when action paths or holdouts erode; expansion timing (attach follows readouts) | Realized customer ROI of their portfolio; readout acceptance rate (uncontested O4/O3 vs O2); NRR of their accounts; load factor (§5) | Presents agent-produced readouts to customers; feeds ground-truth adoption signals (override culture, incentive shifts) back into F4 re-scoring |

Deliberate absences: there is **no delivery manager** (no delivery sequence exists
to manage — deployment is a compiled, agent-executed act, evidence 06) and **no
model-ops team** (drift response, retraining, and pipeline health are agent
functions under agent-supervisor oversight). Where a human is doing repetitive
operating work, that is a factory defect: the work either becomes an agent
capability with a governance envelope, or it is priced as customer investment —
never absorbed silently.

### 3.3 The operating cadences

Five standing reviews run the factory. Each has a fixed owner, fixed inputs
(agent-produced, per the instrumentation-first law — §3.5), and decision authority;
none of them is a status meeting.

| Cadence | Owner | Inputs (all instrumented) | Decisions taken |
|---|---|---|---|
| **ROI readout review** (per solution × customer, on the contractually agreed readout cycle) | Customer outcome manager, with the customer's outcome owner | The measurement loop's output: holdout/uplift/phased readout, guardrail suite, segment cuts, override rates, exception rates (evidence 12 §S5 patterns) | Outcome adjudication (O0–O4, §1.4); pricing true-up per the success-linked terms (D8); treatment/playbook reallocation; escalations (holdout erosion, action-path atrophy) |
| **Calibration review** (portfolio-wide, standing cycle) | Solution economist function (COO-chaired) | Calibration curves, Brier/ECE overall + per driver/family/industry/scorer; declined-deal tracking; exploration-slice results (§1.4) | Rubric revision triggers fired or not; weight re-fits at version boundaries; scorer feedback; anchor rewording proposals (jointly with doc 02) |
| **Portfolio review** (whole book, standing cycle) | COO, with CFO (doc 06) | Concentration dashboards (industry/family/customer/tier HHIs); ES(α) under standing stress scenarios; ROI-mechanism mix; driver-score distribution of the active book (§1.5) | Concentration-limit enforcement (pricing-structure shifts, deal-mix guidance); stress-scenario updates; exploration-budget sizing |
| **Catalog intake** (as candidates arrive — the D1 scorecard) | Solution economist + data supply-chain owner + governance officer (the three-key intake) | Candidate use case scored on the seven drivers with evidence; failure-mode susceptibility screen (§2.6); data plan (kernel D7 — mandatory); anti-portfolio check (kernel D4) | Admit / decline / condition (admit with driver caps); catalog prior established; module spec commissioned (doc 04) |
| **Incident & audit review** (per incident + standing audit cycle) | Agent supervisors + governance officers | Incident post-mortems; gate-passer incident telemetry; autonomous-action audit samples; audit-trail completeness checks (§4) | Countermeasure fixes (doc 04 updates); catalog/rubric extensions (§2.6); autonomy demotions; gate-test-set additions (§4.1) |

Two properties of the cadence system matter more than the individual reviews.
First, **the loops close on each other**: readout outcomes feed calibration;
calibration revises the rubric that scores intake; intake shapes the book the
portfolio review stresses; incidents extend the catalog that intake screens
against. Second, **every input is agent-produced and instrumented** — a review
whose inputs require manual assembly is operating on stale, curated data, which is
how measurement dishonesty (§2.3) creeps into one's own company. We apply the same
discipline we sell.

### 3.4 Shadow mode — a standing capability, not a stage

The evidence's automation ladder (shadow → assisted → automated — evidence 12 §S6
"what the successes did differently" #4; evidence 15 §S5 shadow-mode row) is
retained **as a permanent operating mode, not a rollout sequence** (which would
violate D10-2 — and would miss the point). In the future state, shadow-alongside-
human is one of the standing grades in every agent's operating envelope, and:

- **Customers can select it for any action class, at any time, indefinitely.** A
  customer who wants an action class to run shadow-only forever is running a valid,
  priced configuration (the ROI model reflects recommendation-value rather than
  execution-value). Shadow is a *product feature* — the trust-engineering the
  evidence shows successes paid for deliberately (reason codes, side-by-side
  periods, honest accuracy publishing — evidence 12 §S6 cause 4).
- **New action classes default to shadow.** Not because of a rollout calendar, but
  as the standing entry grade of the autonomy ladder (§4.2): a new class earns
  promotion by accumulating written-threshold evidence in shadow, exactly the
  champion/challenger discipline (evidence 12 §S5) applied to actions.
- **Demotion to shadow is the universal safe state.** Drift alarms, incident
  triggers, guardrail breaches, and governance questions all demote the affected
  action class to shadow automatically; the solution keeps producing (and keeps
  learning — shadow decisions with observed outcomes are still reward data, D7)
  while humans adjudicate. This is what makes A5-class regime breaks (Zillow)
  survivable: the blast radius of "the model is wrong" collapses to "the
  recommendations were wrong," which is recoverable.
- **Shadow output is measured like live output.** The shadow-results-ignored
  pitfall (C5) is countered structurally: shadow readouts appear in the same ROI
  readout review with forgone-ROI computed, so staying in shadow is a *visible
  priced choice*, never a drift into permanent indecision.

### 3.5 Instrumentation-first — the standing law

Evidence 08's discipline is retained verbatim and elevated to an operating law:
**"a success metric without instrumentation is a wish"** (evidence 08). In the
future state this binds four ways:

1. **No metric without a span.** Every metric in §5, every readout input in §3.3,
   and every calibration quantity in §1.4 names its instrumentation — the telemetry
   that produces it automatically. A proposed metric with no instrumentation plan
   is rejected at the design stage, in our product and in our own operations alike.
2. **Measurement design precedes action wiring.** The measurement loop (holdout
   assignment, outcome logging, guardrail counters) is compiled into the solution
   graph *before* the action path goes live — retrofitted measurement is the C1
   failure mode wearing a hard hat. The correctness gate checks for the presence
   and integrity of measurement instrumentation, not just functional correctness.
3. **Decision/outcome logging is universal.** Every model-informed decision is
   recorded with its predicted effect, the action taken, and the outcome observed
   (evidence 12 §S5 decision-logging pattern). This single stream serves three
   masters at once: the ROI readout (proof), the calibration loop (§1.4 outcomes),
   and Auto-RL training (the reward signal, kernel D7 — the metric the customer
   pays for is the metric the agent learns on). One instrumentation investment,
   three compounding returns — this is why instrumentation is a law and not a cost
   line to negotiate.
4. **Our own operations are instrumented on the same telemetry discipline.** The
   factory's internal quantities — scores, adjudications, gate pass rates, audit
   samples, load factors — flow through the same span-emitting machinery (evidence
   08's instrumentation note generalized). The COO dashboard is a query, not a
   slide deck.

---

## 4. Quality & governance operations

### 4.1 Correctness-gate operations

The correctness gate is a product property (kernel D2-5, D10-5: never traded,
never staged); this section defines how it is **operated** — because a gate whose
pass rate no one watches is a turnstile. Retained discipline from evidence 08: the
gate measures *% of generated execution graphs that compile AND run AND produce
correct results*; without it, velocity is just fast wrong answers.

| Operation | Mechanism | Owner |
|---|---|---|
| **Pass-rate monitoring** | Gate pass rate tracked continuously per solution family, per methodology, per environment class; first-try vs after-one-edit correctness tracked separately (evidence 08 — the unaided-generation quality signal, which for us is the agent-quality signal) | Agent supervisors |
| **Gate-looseness detection** | The **gate-passer incident rate** — graphs that passed the gate but failed or misbehaved in production. Evidence 08's rule binds: if autonomy or velocity rises while this rises, the gate is too loose. A rising gate-passer incident rate freezes autonomy promotions (§4.2) portfolio-wide for the affected family until the gate's task set is extended | Agent supervisors + governance officers |
| **Incident review** | Every gate-passer incident gets a post-mortem: mapped to a §2 catalog entry (or extends it), reproduced as a test case, and **added to the gate's evaluated task set** — the gate learns from every escape. Incident classes that recur across customers indicate a methodology-level defect (doc 03's correctness profile gains a check) | Incident & audit review (§3.3) |
| **Gate-set integrity** | The evaluated task set is versioned; pass rates are only comparable within a version; entity-resolution-style correctness cases (the division-correct pattern, evidence 08) are mandatory per family | Solution economist function (the set defines what "correct" means, which is an economic statement) |

### 4.2 Agent-autonomy governance

Every agent operates inside a written **operating envelope** (kernel D6c): its
action classes, each class's autonomy grade, blast-radius limits, rate caps,
rollback paths, and reward definition. Autonomy governance is the operation of
those envelopes.

**The autonomy grades** (per action class, not per agent — one agent typically
holds different grades for different classes):

| Grade | Meaning | Standing controls |
|---|---|---|
| **G0 Shadow** | Agent recommends; nothing executes | Full decision/outcome logging; forgone-ROI computed (§3.4) |
| **G1 Approval-gated** | Agent proposes; a named human approves each action (or batch) | Approval-queue SLAs monitored (a gate whose queue backs up becomes a silent G0 — tracked); approval-rationale capture (approvals are label data, D7) |
| **G2 Autonomous-under-audit** | Agent acts; humans review samples after the fact | Below-the-line audit sampling at governance-officer-set rates (the evidence-12 §S5 audit pattern: bounds the silent-error rate of automation); blast-radius + rate limits enforced mechanically |
| **G3 Autonomous-with-exception-gates** | Agent acts freely inside bounds; boundary-crossing actions auto-escalate to G1 | Bound definitions versioned and audited; escalation-rate monitored (rising escalations = the bounds or the world moved) |

**Promotion and demotion.** Promotions (G0→G1→G2→G3) happen only against **written
evidence thresholds** defined per action class in the operating definition —
accuracy/incident evidence from the current grade, sustained over a defined volume
(the champion/challenger promotion-criteria discipline, evidence 12 §S5 — C5's
countermeasure). Demotions are automatic on triggers (drift alarm, guardrail
breach, incident, audit finding, gate-looseness freeze per §4.1) and land at G0
(§3.4 — the universal safe state). Kernel open question 5 (which action classes
*default* to which grade per solution family) is proposed by docs 03/04; this
document supplies the governance machinery those defaults run on.

**Audit review of autonomous actions.** For every G2/G3 class: random samples of
executed actions re-derived by humans (or by an independent checking agent, with
human adjudication of disagreements) at rates set by the governance officer —
sized for statistical confidence on the silent-error bound, not for ritual. The
evidenced pitfalls are operating rules: samples must actually be worked (audits
quietly dropped after cost cuts is a documented failure — evidence 12 §S5), and
findings must be **wired to consequences** — threshold changes, demotions,
gate-set additions — or the audit is theater. Audit findings feed the incident
review; audit coverage is a §5 metric.

**The kill path.** Every envelope names its kill mechanism: who (agent supervisor
or governance officer, either alone suffices — two keys to run, one key to stop),
how (mechanical, tested, sub-minute), and what happens next (demotion to G0,
incident review). Kill-path drills are part of standing operations — an untested
kill switch is a wish, per the instrumentation law.

### 4.3 Zero governance violations — the standing guardrail

Kernel D9's guardrail, operated:

- **Definition.** A governance violation is any of: data egress from the customer
  environment (verifiable under network capture — evidence 08); an action executed
  outside its envelope (wrong grade, exceeded blast radius, missing identity
  scope); an incomplete audit trail for any deploy, graph change, or data access
  (evidence 08's audit-completeness clause); an ex-post-edited risk memo or
  adjudication record (§1.3, §1.4 — our own books count); a consent-regime breach
  in data collection (kernel D7-5).
- **Verification is continuous, not episodic:** egress monitoring under network
  capture, audit-trail completeness checks as standing automated tests,
  envelope-conformance checks on every logged action. Violations are detected by
  instrumentation, not by complaint.
- **Breach protocol.** Any violation: automatic demotion of the affected scope to
  G0 · incident review with governance-officer chair · customer notification per
  the contract · outcome recorded as O0 for the affected engagement (§1.4 — a
  governance violation is the worst outcome regardless of ROI, which prices
  governance risk into every future score of that shape) · countermeasure lands in
  doc 04 before the scope re-promotes.
- **Why zero is the right target** even though zero-targets invite gaming: the
  violation classes are defined mechanically (detectable by instrumentation, §4.3
  bullet 2), which resists definitional gaming; and the commercial logic requires
  it — governed self-serve *is* the product promise (evidence 06), F5 premium
  pricing rests on it, and one scandal-class event carries portfolio-wide
  reputational contagion (the §1.5 stress scenario). The guardrail is priced as if
  a violation costs a slice of the whole book, because it does.

---

## 5. Operational metrics (kernel D9 elaborated)

The D9 metric set, operationalized. Every row names its instrumentation (§3.5 law:
no metric without a span) and its consuming cadence (§3.3). Customer ROI itself —
the central metric — is specified in the ROI contract per solution (kernel D6, doc
06); this table is the machinery *around* it.

| Metric | Definition | Instrumentation | Consuming cadence | Standing thresholds |
|---|---|---|---|---|
| **Calibration error** | ECE + Brier score of ex-ante p(success) vs adjudicated outcomes; overall, per driver, per family, per industry, per scorer, per rubric version | Outcome ledger: hash-logged risk memos (§1.3) joined to readout adjudications (§1.4) | Calibration review | ECE band per §1.4 trigger 1; two consecutive breaches ⇒ rubric revision |
| **Realized-vs-modeled ROI** | Measured readout ÷ the ROI model's expectation, per solution × customer; distribution tracked, not just the mean (segment cuts — evidence 15 §S5) | The measurement loop itself (holdout/uplift/operating-metric spans) — the same stream that bills (D8) | ROI readout review; portfolio review (aggregate) | Persistent family-level ratio < 1 ⇒ E[ROI] model revision (the *other* half of calibration) |
| **Gate pass rate + gate-passer incident rate** | % of generated graphs passing the correctness gate (first-try tracked separately); production incidents among gate-passers | Gate telemetry per evaluation; incident tagging in production traces (evidence 08) | Incident & audit review | Rising incident rate with rising pass rate or autonomy ⇒ gate too loose ⇒ promotion freeze (§4.1) |
| **Incident rates by class** | Incidents per operating solution per period, mapped to §2 catalog entries; scandal-class (Group D) tracked to zero like the guardrail | Incident registry joined to production traces | Incident & audit review; portfolio review | Class-level spike ⇒ catalog/countermeasure review across the family |
| **Autonomy share** | % of agent actions executed at G2/G3 (autonomous under governance) — kernel D9's "agent autonomy share," achieved *within* the envelope discipline | Action logs carry grade + envelope version per action | Portfolio review | A **result**, never a target with a date: rising autonomy share with flat incident rates is the factory working; forced autonomy is failure mode E4 |
| **Outcome-capture coverage** | % of model-informed decisions with action-taken + result-observed captured (kernel D9's data-flywheel health; the D7 reward supply) | Decision/outcome logging stream (§3.5-3) | Calibration review (it bounds label supply); readout review (it bounds proof) | Coverage below the solution's data-plan floor (doc 08) ⇒ F1/F3 re-score for that deployment |
| **Approval-gate operations** | Approval-queue latency and override/rationale rates at G1; audit coverage + finding-closure rate at G2/G3 | Approval and audit workflows are themselves instrumented actions | Incident & audit review | Queue latency breaching SLA ⇒ the gate is silently blocking (staff it or re-grade it — a decision, not a drift) |
| **Customer-outcome-manager load factor** | Active solution × customer readout relationships per outcome manager, weighted by readout complexity (contested adjudications weigh heavier) | Readout-review records; adjudication dispute tags | Portfolio review | Load above band ⇒ judgment quality degrades exactly where the money is adjudicated — hire or simplify readout designs; load *below* band with rising O2 rates ⇒ the weighting is wrong |
| **Holdout/measurement integrity** | Holdout size vs significance requirement; exception-budget consumption; guardrail-suite completeness per deployment | Measurement-loop configuration telemetry (C2's countermeasure) | ROI readout review | Integrity below floor ⇒ readout flagged before it becomes contested (O2 prevention) |
| **Portfolio concentration + ES** | HHI per §1.5 axis; ES(α) of success-linked revenue under standing stress scenarios | Book database: every contract's pricing structure + driver profile + industry/family tags | Portfolio review | Limits per §1.5; breach ⇒ pricing-structure and deal-mix response, not deal-by-deal exception |
| **Governance violations** | Count, per the §4.3 mechanical definition | Continuous verification stack (§4.3) | Every cadence sees it | **= 0.** Any nonzero value triggers the breach protocol, full stop |
| **Intelligence Velocity** | Median intent → deployed, correct, running (evidence 08) | Timing spans per stage of the intent→deploy arc (evidence 08 instrumentation note) | Portfolio review | Tracked, supporting, explicitly **not central** (kernel D9) — it measures the factory's responsiveness, not its worth |

Reading discipline for the whole table: **paired metrics resist Goodhart.** Autonomy
share reads with incident rates; pass rate reads with gate-passer incidents;
readout ratios read with measurement integrity; load factors read with adjudication
quality. No single row is ever a target in isolation — the evidence is unambiguous
that single-KPI optimization is itself a documented failure mode (B5; evidence 12
§S6 cause 5), and our own operating metrics are not exempt from our own catalog.

---

## Appendix A — Tensions for kernel review

Recorded per the plan convention: elaborations that surfaced genuine kernel-level
questions. Nothing below overrides the kernel; each resolves there first.

1. **The rubric's floors are a kernel-grade decision.** §1.2's weakest-link caps
   (any driver at 0 ⇒ p ≤ 0.05) effectively extend the kernel's anti-portfolio
   (D4): a structural F2=0 or F5=0 use case can never price, which is a portfolio
   exclusion decided in a COO/CPO rubric rather than in the kernel. Proposed
   resolution: kernel blesses the floor mechanism (not the specific constants,
   which are calibration-owned per §1.4) as part of answering open question 3.
2. **Success-event definition vs pricing true-ups (touches open questions 1–2).**
   §1.4 adjudicates outcomes against the *agreed* ROI model, and §4.3 makes
   ex-post edits a violation — but D8 true-ups adjust price against the same
   readout. If the measurement design itself proves flawed mid-engagement (C-class
   failures), who bears measurement-design risk is exactly kernel open question 2;
   the calibration ledger needs the kernel's answer to code O2 outcomes
   consistently (contested-by-customer vs failed-by-design are different lessons).
3. **The exploration slice spends money on predicted failures.** §1.4-5 deliberately
   accepts a bounded budget of below-threshold deals to keep the estimator
   learnable (the credit-model censoring lesson, evidence 12 §S5). That is a
   deliberate E[score] sacrifice that D1's calculus, read strictly, forbids.
   Proposed resolution: kernel acknowledges a bounded calibration/exploration
   budget as a D1 corollary (the value of information term), sized at the
   portfolio review.
4. **Autonomy-share optics vs E4.** Kernel D9 lists agent autonomy share among
   supporting metrics; commercial pressure will read it as a target ("how
   autonomous is your factory?"). §5 binds it as a result, never a target — worth
   a one-line kernel affirmation, since over-automation is a documented
   cancellation driver (Gartner agentic forecast, evidence 12 §S6/§S7) and the
   incentive to game this particular metric sits inside our own walls.
5. **Scorer separation creates a staffing floor.** §1.4-2 separates estimator
   (solution economist) from grader (readout review) — an integrity requirement
   that implies at least two independent judgment holders per engagement. At small
   book sizes the roles in §3.2 collapse into few people; the kernel may want to
   state the minimal separation-of-duties invariants (estimator ≠ grader;
   governance officer ≠ agent supervisor for the same scope) that must survive any
   role consolidation, since they protect the calibration asset and the guardrail
   respectively.
6. **Shadow-forever customers dilute the flywheel.** §3.4 makes indefinite shadow a
   valid priced configuration, but shadow-only deployments produce
   recommendation-grade reward data, not action-grade (D7's action-taken +
   result-observed loop is weaker when the action is the customer's own). If a
   large share of the book sits at G0, the data moat compounds slower. Whether
   pricing should reflect data-plan quality (a G0 discount is also a data-supply
   discount) belongs with open question 4's generalized-learning boundary (CDO,
   doc 08).



