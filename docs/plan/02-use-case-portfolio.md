# Use-case portfolio — the scored demand map (D4 elaborated)

> **Status:** v2 — 2026-07-15 · **Author:** CPO (combined executive team) ·
> **⚠️ Internal-confidential** · Elaborates kernel v2 (future state · no sequencing ·
> ROI-central · Auto-RL-central) · **Amended 2026-10-09:** UC-25…UC-34 added (two in
> Band A, eight in Band B), UC-22's scope widened, C-8 promoted, AP-5/AP-8 amended —
> from the new-solution research in [`09-new-solution-research.md`](09-new-solution-research.md)
> (evidence 16); tensions T-9…T-12
>
> **Kernel-binding.** This document elaborates the [strategy kernel](00-strategy-kernel.md)
> **D4 (the use-case portfolio)** through the lens of **D1 (risk-adjusted customer ROI)**,
> with **D2 (Auto-RL at the center)** and **D7 (the data supply chain)** carried into every
> entry. v2 supersedes the v1 catalog entirely. There is **no time dimension anywhere in
> this document**: no sequencing, no readiness assessments, no dependency ordering.
> Feasibility here means exactly one thing — *"will this be a good business?"* — with the
> product assumed complete as promised (evidence 06). Every entry is scored by
> **E[ROI] × p(success)**; every entry names what its **customer agent** does; every entry
> defines its **data supply chain** (detail → [`08-data-strategy.md`](08-data-strategy.md)).
> Genuine tensions with the kernel go to [Appendix A](#appendix-a--tensions-for-kernel-review)
> and resolve in the kernel first. Citations are **(evidence NN)** →
> [`../evidence/`](../evidence/). Evidence-quality flags follow the item-11 convention:
> **[M]** measured/audited · **[C]** company/consultant-reported · **[V]** vendor claims ·
> **[T]** thin/qualitative.

---

## 1. The scored catalog frame — D1 operationalized

### 1.1 What this catalog is

Per [`../vocabulary.md`](../vocabulary.md), a **use case is the problem** — a recurring
enterprise decision problem stated independently of any way of solving it. This catalog
is the **complete demand map of the solution factory** (kernel §1): every enterprise
problem where risk-adjusted customer ROI is strong, organized into **ROI bands** (kernel
D4), plus the problems we refuse and the argument for each refusal. Each use case pairs
~1:1 with a solution module (`S-n`, [`04-solutions-catalog.md`](04-solutions-catalog.md))
composed from the methodology toolbox (`M-n`,
[`03-methodology-portfolio.md`](03-methodology-portfolio.md)) — and in the future state
**the composer is the customer's agent** (kernel D2): the Auto-RL-trained operator that
builds, runs, monitors, explains, and improves the solution inside the customer's
environment, learning on the ROI signal itself (kernel D7.2).

The structural fact the catalog rests on: **124 use cases in the internal compendium
(evidence 11), ~140 in the external one (evidence 14), 400 prior-art demand instances
(evidence 09), 93 competitor accelerators (evidence 04) — and nearly all reduce to one
skeleton**: an *entity*, a repeated *decision* about it, a *label* that defines the right
answer, and a *horizon* over which the decision matters. That is why a compact methodology
toolbox, composed by agents, credibly addresses a demand space this wide (kernel §1;
evidence 10/13).

### 1.2 Band structure (kernel D4, restated)

| Band | Meaning | Contents | Commercial posture |
|---|---|---|---|
| **Band A** | Highest risk-adjusted ROI — the portfolio core | 14 use cases, full ROI dossiers (§3) | Priced modules with ROI contracts (D6/D8); premium, evidence-backed pricing |
| **Band B** | Strong ROI, higher variance | 20 use cases, structured dossiers (§4) | Priced modules with success-linked components (D8); each carries its **A-condition** — the ROI/risk change that would re-band it |
| **Band C** | Real but selective ROI | 9 entries (§5) | Pursued account-by-account; each carries the **account-level D1 condition** that admits it |
| **Anti-portfolio** | Refused on ROI/risk/measurability/governance grounds | 8 exclusions (§6) | Disqualifiers in sales and intake; revisited only by kernel edit |

**Bands are scores, not schedules.** A band says how good the business is at the median
target account, risk-adjusted — never when anything happens. Entries move between bands
when their **scores** move (new evidence, new measured outcomes, a changed governance
posture), never because time passed. **IDs are stable; bands float.** `UC-n` IDs are
fixed and aligned with the wtm ORAMA-ZETTA blueprint (UC-1 = churn, kernel §2); v1's
UC-1…UC-9 assignments are preserved, UC-10+ extend the registry. A use case's ID never
changes when its band does. **UC-25…UC-34 were added on 2026-10-09** (the next free
ids — UC-13…UC-24 were already assigned); their modules are S-13…S-23, so from here
on the `S-n` and `UC-n` numbers no longer coincide, and the pairing is recorded in
each dossier and in doc 04 §3 (T-9).

### 1.3 The D1 scoring rubric, operationalized

Kernel D1 fixes the calculus: `score = E[ROI] × p(success)`. This section turns it into
a concrete scoring method — and proposes the p(success) rubric + calibration mechanism
that kernel open question 3 asks for.

#### 1.3.1 E[ROI] — expected customer return ÷ customer investment

Every entry carries an **ROI model**: named value levers (revenue lift, cost reduction,
loss avoidance, working-capital release, risk reduction), each anchored to evidence-11/14
pool numbers with quality flags, divided by the four customer-investment components the
kernel names (module price + integration effort + data work + change cost). Four screen
scores (0–5) make entries comparable before the arithmetic:

| Component | 0 | 1–2 | 3–4 | 5 |
|---|---|---|---|---|
| **V1 · Pool intensity** — annual addressable return at the median target account, as % of revenue (or the account's relevant base: loss pool, working capital, labor pool) | <0.01% | 0.01–0.2% | 0.2–1% | >1% |
| **V2 · Decision frequency** — how often the decision repeats (value compounds with frequency; evidence 01/02/03, unanimous) | one-off study | quarterly–monthly | weekly–daily queues | continuous / per-event |
| **V3 · Lever hardness** — evidence quality behind the return claim | asserted [T] | vendor-claimed [V] | company/consultant [C] with arithmetic | measured/audited [M], replicated |
| **V4 · Investment lightness** — inverse of module price + integration + data work + change cost | enterprise-program-scale change | multi-system integration + org redesign | few systems of record, one owning team | data exhaust in 1–2 systems, single-team adoption, existing action path |

The screen is a comparator; the **binding number is the ROI math sketch** each Band-A/B
dossier carries: an explicit, illustrative `return ÷ investment` computation at a stated
median account, producing an **E[ROI] multiple** (e.g. "≈5× at a $500M-revenue account").
Sketches are deliberately conservative: mid-range pool numbers, full-cost investment
(including the customer's own change cost), first-year return only — no compounding
credit, even though the agent's whole design compounds it (D2/D7).

#### 1.3.2 p(success) — the proposed rubric (answers kernel open question 3)

p(success) is the probability the solution actually delivers the modeled return in
production. The failure evidence is unambiguous that enterprise AI fails at the
problem-and-plumbing layer, rarely the model layer (evidence 03; 11 §S7; 12 §S6; 14; 15)
— so the rubric scores the five kernel D1 drivers, **multiplicatively**, because any
single broken driver kills the return regardless of the others:

| Driver | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| **P1 · Data & label supply** — decision-grade data + labels as an operational by-product | data must be acquired/instrumented; labels don't exist | fragmented; labels derivable with heavy work | in systems of record; labels derivable; point-in-time reconstructible | labels generated free by operations; action+outcome capture already natural |
| **P2 · Actionability** — a real action path with a named owner | insight only; no owner | owner exists, workflow doesn't | named system of action, human-mediated | the decision writes into the system of action under governance |
| **P3 · Measurability** — the return is provable | no KPI; impact unattributable | KPI exists, no baseline | clean before/after credible | holdout/uplift natural and cheap |
| **P4 · Organizational adoption** — someone acts on the output, keeps acting | no budget-adjacent owner anywhere | champion but no operating cadence | owner + cadence; adoption effort real but bounded | output lands inside an existing operating ritual (queue, planning cycle, close) |
| **P5 · Governance fit** — the decision class survives scrutiny | autonomous high-stakes adverse decision (uninsurable exposure) | regulated decision; heavy assurance burden | sensitive but assistive-safe; governance maps to our primitives | low-liability by nature; governance is a selling point, not a cost |

**Score → probability mapping (the f-table, initial priors):** 3 → 0.95 · 2 → 0.80 ·
1 → 0.60 · 0 → 0.30, and `p(success) = f(P1)·f(P2)·f(P3)·f(P4)·f(P5)`. An all-3 use case
scores 0.77 — deliberately: even perfect problems fail sometimes, and the evidence-base
failure rates (evidence 11 §S6/S7, 14, 15) do not support ex-ante probabilities above
~0.8 for anything. One weak driver (a single 1) drags a perfect entry to ~0.49 — matching
the observed pattern that one broken driver, not average quality, predicts failure.
**p(failure) = 1 − p(success) is quoted per entry with its dominant driver named** —
first-class, priced (D8), and managed at portfolio level (D9).

**The band assignment rule:**

- **Band A** — risk-adjusted multiple `E[ROI] × p(success)` **≥ 3×** at the median
  target account **and** no P-driver scored ≤1 without a designed remedy written into
  the dossier.
- **Band B** — risk-adjusted multiple **≥ 1.5×**, or ≥3× carried by a single fragile
  driver (higher variance). Every Band-B entry names its **A-condition**: the specific
  ROI or risk quantity whose change re-bands it — never a time condition.
- **Band C** — crosses 1.5× only under a named **account-level condition** (a customer
  property that changes V1–V4 or a P-driver). Scored per account at intake, not
  portfolio-wide.
- **Anti-portfolio** — the return is structurally unmeasurable (P3→0 by construction),
  no action path can exist (P2→0), or governance exposure caps p(success) below
  viability regardless of pool size (P5→0).

#### 1.3.3 Calibration — how p(success) gets honest (proposal for kernel Q3)

The rubric above is a prior. It becomes a calibrated instrument through the same
measurement loop that proves ROI (D6/D8 — the loop is simultaneously the proof, the
billing instrument, and the calibration feed):

1. **Scorecard of record.** Every deployment freezes its five P-scores, the f-table
   version, and the agreed ROI model at contract signature. No retro-editing.
2. **Realized outcome.** The solution's measurement loop (holdout / uplift / hard
   operating KPI — per-entry design in §3/§4) yields realized ROI. **Success** = realized
   return ≥ 80% of the modeled return over the agreed measurement window; graded
   shortfalls recorded, not rounded.
3. **Reliability tracking.** Quarterly: predicted p(success) vs realized success
   frequency by decile (reliability curve) + Brier score, portfolio-wide and per driver.
   Every failure is attributed to the driver that actually broke (post-mortem taxonomy
   from evidence 11 §S7 / 15 failure patterns), so the **f-table updates at the driver
   level**, not just in aggregate.
4. **Ownership.** The CDO owns the outcomes ledger (it is a data-supply-chain asset —
   [`08-data-strategy.md`](08-data-strategy.md)); the CPO owns the f-table and band
   assignments; f-table changes are kernel-visible edits. Pricing (D8) consumes the same
   calibrated p — a use case whose realized success beats its prior earns premium
   pricing; one that underperforms gets success-linked structure, automatically.
5. **Cold-start priors.** Until realized data accumulates, the f-table is seeded from
   the evidence base's failure statistics (evidence 11 §S6/S7 · 14 · 12 §S6 · 15) — and
   the generalized cross-customer patterns the agents accumulate (kernel D7.3) become
   the compounding calibration asset: every deployment sharpens every future prior.

### 1.4 What every entry carries (the dossier contract)

**Band A** (full dossiers): problem + decision skeleton (entity · decision · label ·
horizon) → ROI model (levers with pool numbers + flags · investment shape · math sketch)
→ p(success) scoring with p(failure) drivers named → measurement design (the pricing
instrument, D8) → **what the customer's agent does** (operate / monitor / improve, with
autonomy classes per the kernel-Q5 proposal below) → data supply chain (→ doc 08) →
industry resonance (D3 pools) → evidence cross-refs (11/14 dossiers · 04 accelerators ·
09 categories · 01–03 tierings). **Band B**: same fields, tighter, plus the A-condition.
**Band C**: one paragraph + the admitting account condition.

**Autonomy classes (working proposal for kernel open question 5, used throughout):**

- **AUT-1 · Observe & explain** — read, score, decompose, report. Autonomous, audited.
- **AUT-2 · Reversible, capped actions** — queue ordering, task creation, draft
  documents, send-time/sequencing within policy envelopes, suppression. Autonomous
  under audit, with blast-radius caps and automatic rollback.
- **AUT-3 · Committing actions** — actions that move money, inventory, or customer-visible
  state (PO release, dunning execution, offer grants, credit holds). Approval-gated by
  default; graduate to AUT-2 per action class when the account's measured
  override/parity record supports it — an evidence condition, never a time condition.
- **AUT-4 · Regulated adverse decisions** — credit denial, claim denial, employment
  action, benefits. **Never autonomous** (anti-portfolio boundary AP-3); the agent
  prepares, documents, and monitors; a human decides.

---

## 2. The scored portfolio at a glance

The full catalog, scored by §1.3. `E[ROI]×` is the math-sketch multiple at the stated
median account (conservative, first-year, no compounding credit); `p` is the rubric
p(success); **RA×** = risk-adjusted multiple = E[ROI] × p; Band per §1.3.2. V-scores
and P-scores are quoted so the arithmetic is auditable; each Band-A/B dossier carries
the full derivation.

| UC | Use case | V1·V2·V3·V4 | E[ROI]× | P1·P2·P3·P4·P5 | p | RA× | Band |
|---|---|---|---|---|---|---|---|
| UC-1 | Churn & retention | 5·4·4·4 | ≈6× | 3·3·3·2·3 | 0.65 | ≈3.9 | **A** |
| UC-2 | Lead & opportunity scoring | 3·5·3·4 | ≈5× | 3·3·3·2·3 | 0.65 | ≈3.3 | **A** |
| UC-4 | Collections & receivables | 4·5·3·5 | ≈4× | 3·3·3·3·3 | 0.77 | ≈3.1 | **A** |
| UC-5 | Demand forecasting | 5·5·4·3 | ≈6× | 3·3·3·2·2 | 0.55 | ≈3.3 | **A** |
| UC-6 | Inventory & replenishment optimization | 5·4·4·3 | ≈6× | 2·3·3·2·3 | 0.55 | ≈3.3 | **A** |
| UC-7 | KPI anomaly & driver analysis | 3·5·1·5 | ≈8× [T] | 2·2·2·2·3 | 0.39 | ≈3.1 | **A** (high variance) |
| UC-8 | Predictive maintenance (fleet-shaped first) | 4·4·3·2 | ≈5× | 2·3·3·3·3 | 0.65 | ≈3.3 | **A** |
| UC-9 | Automated outbound | 2·5·2·4 | ≈4× | 3·3·3·2·2 | 0.55 | ≈2.2 | **A** per kernel (→ T-5) |
| UC-10 | Fraud & financial-crime decisioning | 5·5·4·2 | ≈6× | 2·3·3·3·2 | 0.55 | ≈3.3 | **A** |
| UC-11 | Next-best-action | 4·5·3·1 | ≈8× [C] | 2·2·3·2·2 | 0.39 | ≈3.1 | **A** (attach-only) |
| UC-12 | Claims triage | 4·4·3·3 | ≈6× | 3·3·3·3·2 | 0.65 | ≈3.9 | **A** |
| UC-13 | Credit-risk decisioning | 4·4·5·3 | ≈5× | 3·3·3·3·2 | 0.65 | ≈3.3 | **A** (argued addition → T-2) |
| UC-26 | Field-service dispatch & first-time fix | 4·5·2·3 | ≈5× | 3·3·2·3·3 | 0.65 | ≈3.3 | **A** (added 2026-10-09 → T-11) |
| UC-28 | Payables recovery audit | 3·5·3·4 | ≈5× | 2·3·3·3·3 | 0.65 | ≈3.3 | **A** (added 2026-10-09 → T-11) |
| UC-3 | Customer lifetime value | 3·2·3·4 | ≈4× | 3·1·1·2·3 | 0.26 | ≈1.0 standalone / ≈2.2 as composition layer | **B** (→ T-3) |
| UC-14 | Pricing & discount optimization | 5·4·4·2 | ≈8× | 2·2·2·2·2 | 0.33 | ≈2.6 | **B** |
| UC-15 | Employee attrition | 3·3·3·3 | ≈5× | 3·2·2·2·1 | 0.29 | ≈1.5 | **B** |
| UC-16 | Service ticket triage & routing | 2·5·4·4 | ≈3× | 3·3·3·3·3 | 0.77 | ≈2.3 | **B** |
| UC-17 | Document intelligence & touchless AP | 3·5·4·3 | ≈3× | 3·3·3·3·3 | 0.77 | ≈2.3 | **B** |
| UC-18 | Supplier risk & monitoring | 2·3·1·3 | ≈4× | 2·2·2·2·3 | 0.39 | ≈1.6 | **B** |
| UC-19 | Healthcare ops — denials & no-show | 4·4·4·2 | ≈5× | 3·3·3·2·2 | 0.55 | ≈2.7 | **B** |
| UC-20 | Cash-flow & working-capital forecasting | 3·4·2·4 | ≈4× | 3·2·2·2·3 | 0.46 | ≈1.8 | **B** |
| UC-21 | AIOps & incident intelligence | 3·5·3·2 | ≈4× | 2·3·2·2·2 | 0.39 | ≈1.6 | **B** |
| UC-22 | Quality, scrap, yield & process optimization | 4·4·3·2 | ≈5× | 2·2·2·3·3 | 0.46 | ≈2.3 | **B** (scope widened 2026-10-09 → T-10) |
| UC-23 | Campaign response & marketing optimization | 3·5·2·4 | ≈4× | 3·3·2·2·2 | 0.46 | ≈1.8 | **B** |
| UC-24 | Contract intelligence & obligation risk | 3·3·3·3 | ≈4× | 2·2·2·2·3 | 0.39 | ≈1.6 | **B** |
| UC-25 | Quote pricing & margin protection | 4·4·2·4 | ≈5× | 2·3·3·2·3 | 0.55 | ≈2.7 | **B** (added 2026-10-09) |
| UC-27 | Labor demand & shift scheduling | 3·4·3·3 | ≈4× | 3·3·3·3·2 | 0.65 | ≈2.6 | **B** (added 2026-10-09; promotes C-8) |
| UC-29 | Unbilled work & revenue leakage | 4·5·2·3 | ≈4× | 2·2·3·2·2 | 0.39 | ≈1.6 | **B** (added 2026-10-09) |
| UC-30 | Warranty & field-quality early warning | 3·4·3·3 | ≈4× | 2·2·2·3·2 | 0.39 | ≈1.6 | **B** (added 2026-10-09) |
| UC-31 | Delivery-date promise & proactive delay | 2·5·3·3 | ≈3× | 3·3·3·3·3 | 0.77 | ≈2.3 | **B** (added 2026-10-09) |
| UC-32 | Construction estimating & bid/no-bid | 3·3·2·3 | ≈4× | 2·2·2·3·3 | 0.46 | ≈1.8 | **B** (added 2026-10-09) |
| UC-33 | Freight & supplier quote response | 3·5·2·4 | ≈4× | 2·2·2·3·3 | 0.46 | ≈1.8 | **B** (added 2026-10-09) |
| UC-34 | Channel budget allocation (test-calibrated MMM) | 3·2·2·3 | ≈4× | 2·2·2·3·3 | 0.46 | ≈1.8 | **B** (added 2026-10-09; amends AP-5 → T-12) |

Reading notes. (1) The two argued adjustments to the kernel's named Band-A set —
**UC-6 inventory optimization in** (the only entry unanimous across every external
source; it is demand forecasting's action half and shares its ROI pool — evidence
01/02/03/04/11/14) and **UC-13 credit-risk decisioning in** (the best-measured ML
return delta in the entire evidence base [M] and the most measurement-mature use case
anywhere, evidence 11 §D3) — are recorded as tensions T-1/T-2 for kernel ratification.
(2) **UC-9 scores below the Band-A line on today's evidence** (its components rank
mid-pack everywhere; the composite is ranked by no external source) and is held in
Band A by kernel D4's naming; tension T-5 proposes the evidence condition that
resolves this honestly. (3) **UC-3 (CLV) is demoted from v1's top tier** on the
prevalence evidence ("computed often, decisioned on rarely" — evidence 11 §S6);
standalone it scores below every band; as the value-weighting composition layer of
UC-1/UC-2 it earns Band B (T-3). (4) UC-7 and UC-11 carry the widest error bars in
Band A — both lean on illustrative arithmetic ([T]/[C] flags) rather than audited
pools; their dossiers say so and their pricing defaults to success-linked structure
(D8). (5) **The 2026-10-09 additions** (evidence 16; analysis in
[`09-new-solution-research.md`](09-new-solution-research.md)) were scored on the same
rubric with no allowance for the fact that they are now on the public website: two
clear the A-line — **UC-26 field-service dispatch** (labels free from closeout, the
dispatch board as native action path) and **UC-28 payables recovery audit** (verified
cash is its own counterfactual) — and eight land in B, most held there by
vendor-grade lever evidence (V3 = 2) or a pool that exists only at a subset of
accounts; each names its A-condition. S-13 (Automatic Quoting) pairs with **UC-25**, a
Band-B entry at the portfolio median with the clearest A-condition in the set.

---

## 3. Band A — full ROI dossiers

Twelve dossiers. Format per §1.4: skeleton → ROI model (levers · investment · sketch)
→ p(success)/p(failure) → measurement design (the pricing instrument) → the customer's
agent → data supply chain (→ [`08-data-strategy.md`](08-data-strategy.md)) → industry
resonance (D3) → evidence cross-refs.

### UC-1 · Churn & retention — the anchor

**Problem.** Customers leave, downgrade, or go silent, destroying recurring revenue and
sunk acquisition cost. The business wants to know **who will leave, when, why, and which
intervention changes the outcome** — provably. *Entity:* account / subscriber /
policyholder / merchant. *Decision:* intervene or not, with which treatment, at what
spend. *Label:* churned within horizon (contractual event or behavioral inactivity —
the label definition is itself a design decision). *Horizon:* 30–90 days (consumer/
telco) to one renewal cycle (B2B/insurance); re-scored continuously.

**ROI model.** *Levers:* revenue preservation (primary), retention-spend efficiency
(uplift targeting stops discounting customers who would stay — evidence 01/03),
expansion adjacency. *Pool anchors:* acquiring costs **5–25×** retaining [M]
(HBR/Bain); **5-pt retention ≈ +25–95% profit** [M] (Reichheld & Sasser via Bain —
cited identically by evidence 11 §A1 and 14); churn baselines ~5–7% B2B SaaS, 15–25%
telecom, 10–15% retail banking [C]; program results: telecom **−15% churn, ~+10%
ARPU** in ~1 yr [C]; Vodafone **−8%** [C]; merchant attrition **−20%/yr** in a
McKinsey payments case [C] (evidence 11 §A1.14; 14; 02). Honest flag: audited churn
RCTs are rare; most program evidence is company-reported — which is exactly why the
module's measurement loop is the product. *Investment shape:* module + CRM/billing/
product-analytics integration + label/feature data work + a retention team operating
the queue (change cost is real but bounded — the team usually exists).
*Sketch:* $1B-revenue subscription business, 15% churn; agent-run, uplift-targeted
program achieves a 10% relative reduction = 1.5 pts ≈ **$15M/yr revenue preserved**;
all-in customer investment ≈ $2.5M/yr → **E[ROI] ≈ 6×**.

**p(success) = 0.65** (P1 3 · P2 3 · P3 3 · P4 2 · P5 3). *p(failure) ≈ 0.35, dominant
driver: adoption* — the classic failure is a score nobody acts on (evidence 11 §S7
pattern 1) and offer cannibalization when propensity is used where uplift is needed
(§S7 pattern 2/5; evidence 01). Both are designed against: drivers ship with every
score (actionability mechanism), and the treatment layer is uplift-framed from the
start.

**Measurement design (= pricing instrument).** Holdout on the intervention: treat a
randomized share of flagged accounts, measure incremental retention among
treated-vs-control at-risk cohorts — the cleanest experimental design in the catalog
(evidence 11 §A1.9). The readout (saved revenue vs holdout) is the D8 billing basis;
gross/net churn, NRR, save rate corroborate.

**The customer's agent.** *Operates:* re-scores the base continuously, builds the
ranked treatment queue with drivers, drafts save-plays, enrolls treatments through CRM
and marketing automation (AUT-2; save-desk offer grants AUT-3, approval-gated until the
account's override record supports graduation). *Monitors:* leakage sentinels
(post-cancellation signals in features), label drift, holdout integrity, driver
stability. *Improves:* learns treatment-assignment policy on the measured save-rate —
the RL reward is the holdout-verified incremental retention itself (kernel D7.2).

**Data supply chain (→ doc 08).** Sources: CRM, billing/payments, product telemetry,
support tickets, NPS, contract dates. Entities: account-level identity resolution
across systems (the join is the historical failure point, not the model). Labels:
churn events + treatment-applied + outcome-observed (the action→result pair is the RL
signal). Refinement: point-in-time feature discipline; label-definition assistant for
behavioral churn; disposition capture in the save-desk workflow.

**Industry resonance (D3).** Telecom (largest per-account pools), B2B SaaS/tech
(native), banking (silent-churn deposit attrition — behavioral label), insurance
(lapse/persistency at renewal), media/streaming; fleet-SaaS (few, large accounts —
small-N drivers-and-watchlist mode).

**Evidence.** 11 §A1 (anchor dossier; value T1 #6) · 14 churn dossier (rank #13, 4.8;
grid prioritize-now) · 01 T2 #9 (with the NBA-composition note our UC-11 answers) ·
02 rank #2 (4.44, customer lifecycle) · 03 **T1 #1** ("the archetype") · 04: five
accelerators (#33/#60/#77/#87/#88 — densest competitor packaging in their catalog) ·
09: Customer Success (26 apps — Churn Risk Monitor, Account Health Scorecard,
Risk-Adjusted Revenue Forecast).

### UC-2 · Lead & opportunity scoring

**Problem.** Sales attention is scarce; leads and opportunities vastly outnumber it,
so effort lands in the wrong order. *Entity:* lead / opportunity / account.
*Decision:* work now, nurture, discard; who works it. *Label:* converted within
horizon (stage progression → closed-won). *Horizon:* days–weeks (inbound; speed-to-lead
is minutes-sensitive) to quarters (enterprise deals); scored on arrival, re-scored on
activity.

**ROI model.** *Levers:* conversion uplift on existing demand, sales-productivity
release, cycle-time compression. *Pool anchors:* McKinsey tech-B2B deal scoring
**+4–8 pts return-on-sales vs control** [M/C]; Qymatix B2B **+10% profit vs control**
[M, small sample] (evidence 11 §A4). Honest flag: vendor lifts of 10–30% are common
but rarely controlled [V] — the category is "more deployed than validated" (11
§A4.13), which is the opening for a holdout-native product. *Investment shape:*
module + CRM/marketing-automation integration + CRM-hygiene data work + rep-trust
change cost (the real cost center). *Sketch:* $500M-revenue B2B seller; scored
routing + SLA triggers lift lead→opportunity conversion enough for **+1–2% revenue
(+$5–10M)**; investment ≈ $1.5M/yr → **E[ROI] ≈ 5×**.

**p(success) = 0.65** (3·3·3·2·3). *p(failure) drivers:* rep adoption (a score reps
ignore is worthless — reason codes are the trust mechanism, 11 §A4.8) and
self-fulfilling labels (reps only work high scores → only high scores convert; the
evaluation harness monitors for it, §A4.15).

**Measurement design.** **Randomized routing** (scored order vs FIFO) — cheap, clean,
and rarely actually run in the wild (11 §A4.9); it is this module's default and its
pricing readout: incremental conversion × deal economics. Win rate, cycle length,
revenue-per-rep corroborate.

**The customer's agent.** *Operates:* scores arrivals in minutes, orders queues, fires
SLA triggers, assigns nurture tracks, drafts rep-facing reason codes (AUT-2; discard
automation AUT-3 until graduation). *Monitors:* leakage (post-qualification fields),
label hygiene, score-distribution drift, the self-fulfilling-label sentinel.
*Improves:* learns routing policy on measured incremental conversion from the
randomized-routing readout.

**Data supply chain (→ doc 08).** CRM history (stages, outcomes, activities),
marketing engagement, enrichment, product usage (PQL). Labels: stage outcomes are
free; the agent's reward joins routing decision → worked-by-whom → outcome. Refinement:
stage-definition consistency; 1–2 yrs closed-loop outcomes at intake; suppression of
leaky fields.

**Industry resonance.** B2B SaaS/tech (native; PQL motions), financial services
(prohibited-basis proxy discipline in scoring), insurance distribution (agent-channel
speed-to-lead), manufacturing/industrial B2B (bid/no-bid sibling — 11 §L25).

**Evidence.** 11 §A4 (feasibility F1 — "one of the most attackable"; value T3 [C]) ·
14 #51 (4.45) but grid prioritize-now · 01 T2 (sales opportunity mining) · 02 rank #3
(4.25, sales/revenue ops; constraint is CRM data + seller distrust, not models) · 04:
#66 *Propensity Scoring* only — **no dedicated lead-scoring accelerator: whitespace** ·
09: Sales (30 apps — Prospect Engagement Score; Account Expansion Readiness).

### UC-4 · Collections & receivables intelligence

**Problem.** Receivables age because collectors work by size or age, not by likelihood
and **influenceability** of payment; cash sits in working capital, bad debt accrues.
*Entity:* open invoice / customer account. *Decision:* whom to contact, when, channel,
treatment (reminder, call, hold, plan). *Label:* paid-within-X / promise-kept /
delinquent — free from the AR ledger. *Horizon:* days–weeks; queues rebuilt daily.

**ROI model.** *Levers:* working-capital release (primary — a D1-named return class),
bad-debt reduction, collector productivity, dispute root-cause elimination. *Pool
anchors:* each DSO day on $1B revenue ≈ **$2.7M cash** (arithmetic; 11 §D2); PwC:
**€1.56T global excess working capital** [C] (via 14); vendor-claimed 10–20% DSO-day
and 20–30% productivity gains [V — flagged unaudited, 11 §D2.14]; 14 ranks collections
**value #2 (5.0), feasibility 5.0** — its highest-conviction non-fraud entry.
*Investment shape:* module + ERP-AR integration + dispute-code data work + collector
workflow change (small — queues replace queues). *Sketch:* $1B-revenue mid-market,
DSO 55: −5 days = **$13.5M one-time cash release** + recurring ≈ $1.5–2.5M/yr
(carry cost on the release + bad debt −10–15% + productivity); investment ≈ $0.7M/yr →
**E[ROI] ≈ 4× recurring, with a first-year working-capital headline several times
that** (D8 prices the blend; the release is one-time and priced as such).

**p(success) = 0.77** (3·3·3·3·3 — the only all-3 entry; the AR ledger labels
everything, the queue is the native workflow, DSO is a standing CFO metric).
*p(failure) ≈ 0.23, dominant driver:* value-attribution subtlety — celebrating cash
that would have arrived anyway; the queue is influenceability-framed from the start
(11 §D2.15/16).

**Measurement design.** A/B on queue ordering (agent-ordered vs incumbent) or matched
portfolios; DSO/%-current/bad-debt are hard balance-sheet metrics. Shortest path from
module to CFO-visible ROI in the catalog — and the cleanest D8 pricing instrument:
share of measured cash released.

**The customer's agent.** *Operates:* builds daily influenceability-ranked queues with
reason codes, drafts and sends dunning sequences within policy envelopes (AUT-2),
proposes credit holds and payment plans (AUT-3, approval-gated), routes disputes with
root-cause codes. *Monitors:* promise-kept rates, dispute-cluster drift (billing-error
detection — the anti-symptom guard, 11 §S7 pattern 12), treatment fatigue.
*Improves:* learns contact-policy (who/when/channel/treatment) on measured incremental
cash — the reward is the A/B cash delta.

**Data supply chain (→ doc 08).** ERP AR ledger (invoices, terms, payments, disputes),
dunning/contact history, promises, credit ratings, order history. Labels free;
action→result capture native (contact → payment event). Refinement: dispute-reason
hygiene; customer-entity resolution across ERP entities; hardship/compliance flags.

**Industry resonance.** Universal B2B; deepest pools in manufacturing/distribution
trade credit, banking (own commercial AR; regulated lending collections is the
UC-13-adjacent variant), healthcare patient-responsibility AR, utilities/telco
(hardship rules), insurance premium receivables.

**Evidence.** 11 §D2 (feasibility F1; value T2 #20 [T/V] — the mechanism/proof gap our
holdout-first delivery closes) · 14 collections (**#2 value, #5 feasibility, both
5.0**) · 01 T3 (finance family) · 02 rank #6 (3.94, finance ops — collections named)
· 03 banking top-pipelines row · 04: **zero collections accelerators — the clearest
whitespace among the 93** · 09: Finance (30 apps — AR Aging, DSO Trend by Client
Tier, Bad Debt Provision).

### UC-5 · Demand forecasting

**Problem.** Every ordering, production, staffing, and budgeting decision embeds a
demand guess; wrong guesses cost stockouts or overstock/markdown/waste. The business
wants demand per item×location×period **with known uncertainty** — the downstream
decision consumes the distribution, not the point. *Entity:* SKU × location × period.
*Decision:* the number handed to ordering/production/staffing, with bands. *Label:*
actual demand — abundant but **censored by stockouts** (sales ≠ demand at empty
shelves; the canonical correctness adaptation). *Horizon:* days to 18+ months;
re-forecast daily/weekly.

**ROI model.** *Levers:* lost-sales recovery, inventory/working-capital release,
waste/markdown reduction, logistics efficiency. *Pool anchors:* retail inventory
distortion **$1.77T globally 2023 = $1.2T out-of-stocks + $562B overstocks**
[M-survey] (IHL; cited by 11 §F1 and 14); AI forecasting cuts error **20–50%** and
lost sales **up to 65%** [C] (McKinsey); Danone **−30% lost sales** [C]; adopter
cohorts: logistics −15%, inventory −35%, service +65% [C]. *Investment shape:* module
+ ERP/POS/planning integration + promo/stockout data hygiene + planner adoption
(forecast-value-added discipline). *Sketch:* $2B-revenue retailer/manufacturer:
error −25% → lost-sales margin +$2.5M/yr + waste/markdown −$3M/yr + inventory −15% on
$300M = **$45M one-time release** (≈$3M/yr carry); recurring ≈ $8.5M ÷ $1.4M →
**E[ROI] ≈ 6×**.

**p(success) = 0.55** (3·3·3·2·2). *p(failure) drivers:* planner-override adoption
(the forecast that gets "corrected" back to the old numbers — FVA tracking is the
guard, 11 §F1.15) and promo/stockout data hygiene (P1 risk absorbed at intake);
P5 reflects nothing regulatory — it prices multi-party planning-process change.

**Measurement design.** Forecast error (WMAPE **and bias**) against the incumbent
method as a standing baseline — attribution is unusually clean because error is
already a tracked metric; FVA against planner overrides; service level and turns
corroborate. The error-delta × decision-value model is the pricing readout.

**The customer's agent.** *Operates:* generates probabilistic forecasts per cell,
publishes to planning systems, annotates drivers (promo, weather, cannibalization),
runs FVA accounting (AUT-1/2). *Monitors:* demand-shock detection, censoring drift,
new-item cold starts, bias creep. *Improves:* learns per-hierarchy model selection and
feature policy on realized error/bias — reward = measured error reduction weighted by
decision value.

**Data supply chain (→ doc 08).** POS/sales, orders/shipments, promo & price
calendars, seasonality/weather, stock status (for censoring correction), new-item
attributes. Labels arrive daily and free. Refinement: stockout-censoring
reconstruction; promo-flag hygiene; hierarchy master data.

**Industry resonance.** Retail/CPG (largest pools), manufacturing (lumpy/intermittent
B2B demand), logistics/fleet (volume forecasting), pharma (tenders), energy/utilities
(the load-forecasting sibling), insurance/banking ops (volume forecasting for
staffing — supporting).

**Evidence.** 11 §F1 (value T1 #3 joint) · 14 (#4, 5.0; feasibility 5.0) · 01 **T1
#2** · 02 rank #7 (3.87, supply chain) · 03 **T1 #4** · 04: #21/#91/#93 (three
accelerators — heavily packaged) · 09: Operations/Logistics is the **largest**
prior-art category (40 apps — Corridor Capacity vs Demand Forecast, Delivery Volume
Forecast).

### UC-6 · Inventory & replenishment optimization *(argued addition → T-1)*

**Problem.** Given uncertain demand and lead times, how much of each item at each
node, and when/how much to reorder — answered today by static rules that are wrong
item-by-item. *Entity:* SKU × node. *Decision:* reorder point/quantity, safety stock,
allocation/rebalancing — recommendations that execute within policy envelopes.
*Label:* realized service level + carrying cost (a cost trade-off, not a single
label). *Horizon:* continuous review; daily–weekly replenishment.

**ROI model.** *Levers:* working-capital release (primary), stockout/lost-sales
reduction, waste/obsolescence, expedite-cost avoidance. *Pool anchors:* the same
$1.77T distortion pool as UC-5 + carrying cost 15–30% of inventory value/yr [T — rule
of thumb]; adopters: **inventory −20–35% with service maintained** [C] (McKinsey; 11
§F2); freeing 20% of a $2B inventory = $400M cash (arithmetic). 14: value #5 (5.0),
feasibility #9 (5.0). Honest flag: named audited single-company results are scarce;
aggregate consultant evidence carries the claim [C]. *Investment shape:* module +
ERP/WMS integration + **inventory-record-accuracy data work (the notorious gap —
system stock ≠ physical stock)** + planning-process change. *Sketch:* $1.5B-revenue
distributor, $250M inventory: −20% = **$50M release** (≈$4M/yr carry at 8% blended) +
service +2pts lost-sales margin ≈ $2M/yr + waste −$1M/yr; recurring ≈ $7M ÷ $1.2M →
**E[ROI] ≈ 6×**.

**p(success) = 0.55** (2·3·3·2·3). *p(failure) drivers:* phantom inventory (P1 = 2 —
record accuracy is the intake screen and an in-module detection function) and
planner/buyer adoption of recommendations.

**Measurement design.** Side-by-side category pilots (agent-recommended vs
incumbent-policy categories) — standard, credible, CFO-legible via turns/days-of-supply
/GMROI; the working-capital delta is the pricing readout.

**The customer's agent.** *Operates:* converts UC-5's distributions into
newsvendor/service-level policies, drafts POs and transfer orders (AUT-3,
approval-gated; graduates to AUT-2 per reorder class on measured parity — an evidence
condition), maintains exception queues. *Monitors:* record-accuracy sentinels
(phantom-inventory detection), lead-time drift, supplier fill-rate change, policy
violations. *Improves:* learns policy parameters (service targets, order cadence) on
the measured cost/service frontier — reward = pilot-verified working-capital + service
delta.

**Data supply chain (→ doc 08).** On-hand/on-order, sales/consumption, lead-time
history (PO vs receipt), supplier fill rates, costs, shelf-life. Action→result capture
native (order → arrival → service). Refinement: cycle-count discipline; MRO/spares
intermittent-demand handling; criticality weights (couples to UC-8).

**Industry resonance.** Retail/CPG, distribution/logistics, manufacturing
(raw/WIP/finished + MRO spares where downtime cost ≫ holding cost), pharma/fresh
(expiry-aware FEFO), aftermarket.

**Evidence.** 11 §F2 (value T1 #3 joint) · 14 (#5, 5.0) · 01 T1 #2 (bundled with
forecasting) · 02 rank #7 · 03 T1 #4 (the action half: "replenish, produce,
expedite") · 04: #56/#57/#79/#86 (four accelerators) · 09: Warehouse/Distribution
(24), Operations/Logistics (40), Procurement (Packaging & Supplies Reorder Forecast).

### UC-7 · KPI anomaly detection & driver analysis

**Problem.** Business metrics break silently — a payment integration fails in one
country, a pricing error halves a category's margin — and are found weeks later in a
monthly review; and when a KPI moves, analyst teams burn weeks answering *why*. The
business wants material movements **detected in hours, routed to a named owner, and
decomposed into quantified drivers**. *Entity:* metric × dimension slice × window
(detection); the metric movement (attribution). *Decision:* alert/route/severity;
which drivers explain the move and what corrective action follows. *Label:* confirmed
incidents + validated decompositions from responder feedback — the module manufactures
its own labels via disposition capture. *Horizon:* hourly–daily, continuous.

**ROI model.** *Levers:* loss avoidance via detection lead time (weeks → hours on
incidents costing duration × run-rate), analyst-hours release on the diagnostic half
(the plurality of BI workload [T — practitioner consensus]), decision quality in every
review that consumes the driver narratives. *Pool anchors:* incident-shaped — a broken
checkout in one market can silently cost $100k+/day (illustrative arithmetic, 11 §K1);
**both halves are mechanism-strong, evidence-thin [T]** — no consolidated analyst
sizing exists (11 §S2; flagged prominently, and V3 = 1 accordingly). 14 places KPI
anomaly detection in prioritize-now; driver analysis in explore-selectively — the same
split confidence. *Investment shape:* the lightest in Band A — the warehouse is the
only integration; the data work is metric-definition codification (which the
deployment itself materializes as a governed semantic layer); change cost is an
ownership registry. *Sketch:* $600M-GMV digital business, 6 material incidents/yr,
mean $80k/day, detection 9 days earlier ≈ **$4.3M/yr avoided** + ~$0.5M analyst
release ÷ $0.6M → **E[ROI] ≈ 8× [T — illustrative]**.

**p(success) = 0.39** (2·2·2·2·3) — **the highest-variance Band-A entry, held by the
kernel's naming and by product identity** (the explanation surface of the whole
factory — every other module's driver layer is this machinery). *p(failure) drivers:*
alert precision below the attention budget (the SOC-fatigue problem transplanted —
11 §S7 pattern 7; precision is the entire game), semantic-layer quality (metric
definitions are the join debt — §S7 pattern 4), and disposition capture actually
happening (no dispositions → no labels → no learning).

**Measurement design.** Running recovered-loss ledger per caught incident (each catch
is a self-documenting value story) + incident-log before/after (detection lead time,
% alerts actioned, time-to-diagnosis). Because the pool is [T], **pricing defaults to
success-linked structure on the ledger itself** (D8) — the readout and the invoice are
the same artifact.

**The customer's agent.** *Operates:* scans metric × slice space continuously against
learned baselines, routes alerts to registered owners with the offending slice +
change-correlation, produces decompositions ("−4% revenue = −2.5pp DE payment failure
+ −1.2pp mix + …") with arithmetic that provably sums (AUT-1 — this is the purest
observe-and-explain module). *Monitors:* its own precision against the attention
budget; mutes itself below threshold. *Improves:* learns alert policy on disposition
feedback — reward = precision-weighted recovered-loss, penalized by ignored alerts.

**Data supply chain (→ doc 08).** The warehouse/lakehouse + BI semantic layer +
calendar/change context + **alert-disposition capture (Slack/Jira)** — dispositions
are the label factory and a first-class D7 asset. Refinement: metric-definition
codification with owners; correlated-dimension guards (spurious attribution is the
named correctness adaptation, 11 §K2.15).

**Industry resonance.** Universal — most acute in multi-dimensional digital businesses
(e-commerce, marketplaces, fintech, telco — 11 §K); banking P&L/fee-income/deposit-flow
monitoring; insurance loss-ratio and quote-to-bind funnels; SaaS ARR-bridge
decomposition; FP&A rate/volume/mix as the formalized template.

**Evidence.** 11 §K1/§K2 (value T3 [T]; the "semantic layer" condition — which the
deployment itself satisfies — §S4: *"with a trustworthy semantic layer they jump to
the top-left"*) · 14 K-family split (prioritize-now / explore-selectively) · 01/02/03
not tiered standalone; 03's T3 warning ("dashboards … unless embedded in high-value
workflows") is precisely the failure this design prevents — 14 ranks the halves #55 (4.45,
prioritize-now) and #112 (3.55, explore-selectively) · 04: no direct accelerator
(#58 OEE is the manufacturing cousin) — whitespace · 09: Executive/Leadership (22 —
Executive KPI Summary), Data & Analytics (15), Finance (Client Profitability
Waterfall).

### UC-8 · Predictive maintenance

**Problem.** Equipment fails unexpectedly at enormous cost while scheduled maintenance
replaces healthy parts and still misses failures. The business wants to know which
asset will fail, when, from what cause — so maintenance happens exactly when needed.
*Entity:* asset/component (vehicle subsystem, pump, motor). *Decision:* intervene now
/ schedule at next window / keep running — recommendations into maintenance planning.
*Label:* failure events + mode from CMMS/telematics work orders — **scarce by nature**
(good operations have few failures) and noisily coded; the domain's defining
constraint. *Horizon:* days–weeks of useful warning; monitored continuously.

**ROI model.** *Levers:* unplanned-downtime avoidance (primary), maintenance-cost
reduction, asset-life extension, spares efficiency (couples to UC-6 MRO). *Pool
anchors:* downtime **~$532k/hr** avg large plant, **$2.3M/hr automotive** [C]; Fortune
Global 500 industrials lose **~$864B/yr** [C-modeled] (Siemens/Senseye — cited by 11
§G1 and 14); Deloitte: breakdowns **−70%**, maintenance cost **−5–10%**, uptime
+10–20% [C]; extruder pilot −80% downtime, ~$300k/asset [C]. *Investment shape:*
module + historian/CMMS/telematics integration + label-history data work + maintenance
-planning change; **the ROI-risk-optimal shape is fleet-like asset populations**
(high asset counts, standardized failure modes — the best label supply in the domain,
11 §G1.11); bespoke plant-floor instrumentation inflates the denominator and lowers
P1. *Sketch:* fleet/industrial operator with a $50M/yr unplanned-downtime pool:
−20% = **$10M/yr** + maintenance −5% ≈ $1M ÷ $2.2M → **E[ROI] ≈ 5×**.

**p(success) = 0.65 fleet-shaped** (2·3·3·3·3); plant-asset populations with thin
label history score P1 = 1 → p ≈ 0.49 and drop below the Band-A line — **the band
holds portfolio-wide only with the fleet-shaped scope; heterogeneous plant PdM is
scored per account** (an ROI-risk scoping, not a scheduling one). *p(failure)
drivers:* label scarcity, alert-fatigue economics (precision floor gates alert
volume), pilot-shaped success across heterogeneous fleets (11 §S7 patterns 7/11).

**Measurement design.** Catch rate (failures with prior warning) + false-alert rate
as the adoption pair; downtime hours and cost per asset before/after against CMMS
baselines, confound-audited (other reliability work). Downtime-avoided × cost-per-hour
is the pricing readout.

**The customer's agent.** *Operates:* continuous asset-health assessment, drafts work
orders with suspected failure mode + parts list into CMMS (AUT-2 as drafts; schedule
commitment AUT-3), pre-positions spares via UC-6 coupling, proposes derating to
survive to the window. *Monitors:* alert precision vs the maintenance team's attention
budget; sensor-health/drift; criticality coverage (value concentrates in critical-path
assets — criticality analysis over model coverage, 11 §G1.6). *Improves:* learns
warning thresholds and lead-time policy per failure mode on verified catches vs false
alerts — reward = downtime-avoided net of intervention cost.

**Data supply chain (→ doc 08).** Telemetry (vibration/temperature/current;
telematics), CMMS/EAM work orders + failure codes, operating context, inspection
notes. Labels: the work order is the label — and its *result* (fixed? failed anyway?)
is the RL reward pair. Refinement: failure-code hygiene (work-order NLP mining),
12+ months telemetry+label intake floor, criticality weighting.

**Industry resonance.** Manufacturing/industrial + logistics/fleet (D3 core:
asset-and-operations ROI, sensor exhaust), energy/utilities (grid asset care —
the L20 sibling), rail/aviation (regulated regimes), oil & gas/mining, data centers.

**Evidence.** 11 §G1 (value T1 #8; the label-scarcity feasibility caution priced into
the scoping above) · 14 PdM (#7, 5.0; prioritize-now; Siemens TCOD series) · 01 T2 ·
02 rank #11 (3.65 — "every plant and asset class introduces additional integration
work": the caution the fleet-shaped scope absorbs) · 03 T2 (failure risk → work
order/parts/window) · 04: **no dedicated PdM accelerator among the 93** (#23/#58
nearest) — whitespace in the most-cited industrial category · 09: Fleet Management is
a whole category (23 apps — Preventive Maintenance Schedule, Tire Wear Forecast,
Vehicle Downtime Root Cause), plus Warehouse (Forklift Utilization & Maintenance).

### UC-9 · Automated outbound *(kernel-named; scores below the A-line → T-5)*

**Problem.** Outbound revenue motions (prospecting, nurture, win-back, expansion) are
throttled by manual list-building, generic messaging, unmeasured sends: untargeted
volume burns deliverability and brand; hand-picked lists leave pipeline unbuilt. The
business wants outbound **targeted by model (who), sequenced by policy (when),
personalized within guardrails (what), and holdout-measured (did it work)**. *Entity:*
recipient × sequence × send. *Decision:* include/exclude, variant, timing, stop/
suppress. *Label:* response within window (reply/click/meeting/conversion) + negative
labels (unsubscribe, complaint, bounce). *Horizon:* per send, continuous.

**ROI model.** *Levers:* pipeline-creation efficiency, rep-hours release,
deliverability/brand protection (a guardrail lever). *Pool anchors:* campaign-response
modeling and audience selection are mature direct-response disciplines [C] (11 §C4);
send-time/frequency alone is commodity but real inside an orchestrated program (§C7).
**Honest flag: no external source ranks the composite** — components sit in 11's
T4/compact tables and mid-pack in 14; the admission ticket is internal (One Orama
catalog #2, evidence 07). V3 = 2 accordingly. *Investment shape:* light — CRM/ESP
integration, shared spine with UC-2; consent/suppression data work; minimal change
cost (the sequences already exist, badly). *Sketch:* B2B seller sending 2M
targeted sends/yr: reply→meeting→pipeline conversion uplift worth **+$1.5–2.5M
incremental ARR** (holdout-measured) ÷ $0.5M → **E[ROI] ≈ 4×**.

**p(success) = 0.55** (3·3·3·2·2 — P5 prices consent/deliverability liability;
CAN-SPAM/CASL/GDPR state is part of the data contract). Risk-adjusted **≈2.2× — below
the 3× Band-A line**; held in Band A by kernel D4's naming. Tension **T-5** proposes
the resolution: one full internally-measured cycle (Orama operating Orama's own
outbound with suppressed-control holdouts) becomes the evidence item that either
raises V3/E[ROI] to the line or re-bands the entry — an evidence condition, not a
time condition. *p(failure) drivers:* deliverability/brand damage from volume
temptation, consent-state hygiene, and treatment fatigue.

**Measurement design.** Native and cheap: **suppressed-control holdouts per campaign**
(the ESP logs every outcome); incremental pipeline per 1,000 sends; guardrail KPIs
(unsub/complaint/deliverability health) with hard floors. Success-linked pricing by
default (D8) given the [C/T] pool evidence.

**The customer's agent.** *Operates:* scores and segments audiences (UC-2 spine +
M-3), enrolls sequences, times/paces sends within fatigue caps, maintains suppression
(AUT-2; free-form LLM copy personalization is AUT-3 behind brand/claims guardrails —
selection-based personalization is the default). *Monitors:* deliverability signals,
complaint spikes, consent drift, holdout integrity. *Improves:* learns
audience/variant/timing policy on holdout-verified incremental pipeline — the reward
is the uplift readout itself.

**Data supply chain (→ doc 08).** CRM, ESP engagement logs, enrichment, product usage
(expansion motions), consent/suppression registries as the governed source of truth.
Labels free and instant; action→result pairs are native RL food. Refinement:
identity/consent resolution, negative-label weighting, fatigue-state features.

**Industry resonance.** B2B SaaS/tech (native; also the internal variant),
retail/e-commerce lifecycle motions (win-back/replenishment — couples to UC-1/UC-3),
insurance distribution (agent-support outreach), banking (consent/suitability-heavier
variant).

**Evidence.** 07 (One Orama catalog #2 — the admission ticket, internal) · 11
§C3/C4/C7 + §A4 (component dossiers) · 14 campaign-response + send-time
(prioritize-now quadrant, mid-pack ranks) · 01/02/03: components only, inside
personalization/NBA tiers · 04: #66/#78/#18/#19 (components packaged; composite
absent) · 09: Marketing (20), Sales (30 — Inbound vs Outbound Pipeline Split).

### UC-10 · Fraud & financial-crime decisioning

**Problem.** Transaction fraud, account takeover, and laundering flow through
payment and banking rails while rule engines bury analysts in >90–95%-false-positive
alert queues and false declines insult good customers. The business wants **fraud and
financial-crime decisions — score, triage, investigate, interdict — made accurately at
volume, under governance an examiner will sign**. *Entity:* transaction / alert /
account / counterparty network. *Decision:* approve/challenge/queue/interdict;
investigation priority; case packaging; SAR filing support. *Label:* confirmed fraud
(chargebacks, matured 30–90 days), alert dispositions, case outcomes — excellent for
triage; true-crime recall is the domain's permanent epistemic hole (11 §E2).
*Horizon:* milliseconds (authorization) to daily batch (AML) + investigation cycles.

**ROI model.** *Levers:* loss avoidance (fraud), false-decline revenue recovery
(often larger than fraud losses themselves), investigation-cost release (the
compliance-labor pool), fine avoidance. *Pool anchors:* global card fraud **$33.4B
(2024)**, 6.43¢ per $100 on $51.9T volume [M] (Nilson); financial-crime compliance
**~$206B/yr** [M] (LexisNexis); AML fines **$4.6B (2024)** [M] (Fenergo); ML triage:
**30–60% false-positive reduction at equal-or-better detection** [C]; Mastercard **3×
detection at 10× fewer false positives** [V] (via 01); banks detect ~2% of
financial-crime flows [C] (McKinsey via 02). *Investment shape:* the heaviest in Band
A — core-banking/payments integration, entity resolution at production grade, model
governance; V4 = 2. *Sketch:* regional issuer/PSP: fraud loss pool $13M/yr, −20% =
$2.6M + false-decline recovery ≈ $1.5M + AML investigation release (30–40% of a
$10M ops line) ≈ $3.5M + fine-risk reduction (unpriced) ≈ **$7.5M/yr ÷ $1.3M →
E[ROI] ≈ 6×**.

**p(success) = 0.55** (2·3·3·3·2). *p(failure) drivers:* adversarial drift (the world
updates against the model — a permanent operating cost, priced in), entity-resolution
quality (network fragmentation is the classic AML failure), and governance burden
(P5 = 2, not 1: in the future state the audit trail, approval gates, and
identity-scoping the examiner demands **are the product** — D3's "governance maps 1:1
to our primitives"). Consortium-data incumbents (Stripe-Radar-class) set a real
buy-benchmark: our wedge is **own-data training in the customer's environment** —
the issuer's own portfolio idiosyncrasies, not rented network priors (evidence 06/08).

**Measurement design.** Champion/challenger is native to the domain (the most
measurement-mature family in the catalog): loss rate at fixed false-positive rate
against matured chargeback labels; alert-to-SAR conversion and investigation hours
for AML; false-decline rate on control slices. The challenger delta is the pricing
readout.

**The customer's agent.** *Operates:* scores in-line within policy envelopes
(approve/challenge autonomous as AUT-2 under caps — money-movement interdiction and
account blocking are AUT-3; **adverse decisions with no human path are AP-3,
excluded**), ranks investigation queues, assembles case files with network context,
drafts SAR narratives for human filing. *Monitors:* drift sentinels (fraud-pattern
regime change), FP-rate vs analyst attention budget, fairness/disparate-impact
telemetry. *Improves:* learns triage and challenge policy on disposition outcomes —
reward = matured-loss avoided + analyst-hours released, penalized by false declines.

**Data supply chain (→ doc 08).** Transactions/authorizations, device/session
signals, KYC/account data, alert + case dispositions (the label factory), chargeback
feeds, network/graph features via entity resolution. Refinement: label maturation
handling (30–90-day delay), disposition-taxonomy hygiene, adversarial-drift
monitoring as a standing function.

**Industry resonance.** Financial services/banking and payments (D3's first-named
industry: regulated, data-rich, loss-avoidance pools), insurance (claims-fraud
sibling → UC-12 boundary), e-commerce/marketplaces, crypto/MSBs.

**Evidence.** 11 §E1/§E2 (value **#1** transaction fraud; E2 pool [M]) · 14:
transaction fraud **#3 (5.0)**, feasibility #21 (4.7); AML #82 (4.15),
explore-selectively (triage-first is the admissible shape) · 01 T1 #5 (fraud/risk/anomaly) · 02 ranks #5 (4.19) and #9 (3.78) · 03 T1 #5
("fraud/credit decisioning") · 04: #30 rule-based fraud, #38 geospatial fraud, #3
AML/KYC · 09: Compliance/Regulatory (28), Fleet (Fuel Card Transaction Audit),
Finance (Revenue Leakage Detection).

### UC-11 · Next-best-action

**Problem.** Above every propensity model sits the treatment choice: **which action
(offer / message / service / outreach / nothing) for which customer at which moment**,
arbitrated across channels under budget and contact-fatigue constraints. Run
separately, each motion optimizes locally and collides globally. *Entity:* customer ×
decision moment. *Decision:* the action, from a governed action library, or
deliberately none. *Label:* response/outcome per action — with uplift (did the action
*change* the outcome) as the honest target. *Horizon:* continuous, per interaction.

**ROI model.** *Levers:* revenue lift from arbitration (the same contacts, better
spent), contact-cost and fatigue reduction, retention/expansion compounding across
UC-1/UC-2/UC-9. *Pool anchors:* next-best-experience programs **+5–8% revenue, −20–30%
cost-to-serve** [C] (McKinsey via 01/03); personalization pools **5–15% revenue lift**
[C — estimates] (11 §A3); Netflix's recommender valued **>$1B/yr** in avoided churn
[C — company estimate]. Flag: the composite's own evidence is consultant-grade [C];
11 rates full-scope NBA "a program, not a project" (§A6). *Investment shape:* the
critical fact — **as a first purchase it is heavy (V4 = 1); as an attach on live
UC-1/UC-2/UC-9 modules the marginal investment collapses** while the return holds —
the D8 portfolio-pricing effect in its purest form. NBA is **attach-only by design**:
it composes propensity/value/uplift signals the sibling modules already produce.
*Sketch:* $1B-revenue B2C on live UC-1+UC-9: arbitration lifts treated-segment revenue
+0.5–1% ≈ **$5–10M/yr**; marginal investment ≈ $1M → **E[ROI] ≈ 8× [C]**.

**p(success) = 0.39** (2·2·3·2·2) — composite fragility priced: identity/experiment
infrastructure (P1), action-library governance across owners (P2/P4), offer-liability
in regulated verticals (P5). *p(failure) dominant driver:* organizational — NBA
crosses marketing/CS/sales ownership boundaries; "the brain is often rules in
practice" (11 §A6).

**Measurement design.** Always-on experimentation is the operating mode: every action
assignment carries a control cell; incremental margin per contact and fatigue-adjusted
CLV movement are the readouts. Attribution across constituent modules is a real
pricing question — sent to kernel as **T-6**.

**The customer's agent.** The most agentic entry in the catalog — arbitration *is*
agency. *Operates:* selects actions under budget/fatigue/eligibility policy from the
governed library (AUT-2 within envelopes; new action classes and offer-cost changes
AUT-3). *Monitors:* cannibalization across motions, fatigue budgets, per-segment
uplift decay, fairness constraints on differential treatment. *Improves:* learns the
treatment policy directly — this is the textbook RL surface, and the reward is the
control-cell-verified incremental margin (kernel D7.2 verbatim).

**Data supply chain (→ doc 08).** Everything the sibling modules already refine —
propensities (UC-1/UC-2), value (UC-3), response labels (UC-9) — plus the action
library with costs/eligibility and the assignment→outcome log (the richest RL corpus
in the portfolio). Refinement: identity resolution at experimentation grade;
action-outcome attribution windows.

**Industry resonance.** Telecom and banking (the decisioning-suite natives), B2C
retail/e-commerce, insurance (renewal/coverage actions under suitability rules),
B2B SaaS (PLG lifecycle motions).

**Evidence.** 11 §A6 (value T3 [V] standalone; the composition framing is ours) · 14
NBA #36 · 01 **T1 #1** (personalization/NBA — the family's top slot) · 02 rank #2
(4.44 — "churn, next-best-experience" one row) · 03 **T1 #1–#2** (churn+NBE;
personalization/NBO) · 04: #55 Next Best Action (healthcare) — one direct accelerator
· 09: Customer Success (Proactive Outreach Log, Service Adoption Matrix).

### UC-12 · Claims triage

**Problem.** Incoming claims are routed by rote: simple claims crawl through manual
handling (cycle-time cost, CX damage, LAE) while complex or severity-creeping claims
reach senior adjusters late (leakage); fraud referrals fire late or never. The
business wants **every claim routed right at first notice**: fast-track / standard /
complex / SIU, with severity and reserve flags. *Entity:* the claim at FNOL (and
open claims re-scored as they develop). *Decision:* route, reserve flag, STP
eligibility, SIU referral. *Label:* cycle time, ultimate incurred cost vs initial
estimate, routing corrections, SIU outcomes — rich, natural, fast-arriving. *Horizon:*
minutes at FNOL; continuous over claim life.

**ROI model.** *Levers:* loss-adjustment-expense reduction (STP on simple claims),
leakage reduction (early severity detection), fraud-referral quality (couples to
UC-10), CX/retention via cycle time. *Pool anchors:* 14 ranks claims triage **#11
(5.0)**; STP on standardized lines 30–60% industry-cited [C/V] (11 §L10); US insurance
fraud **~$308B/yr all lines** [C — widely attributed] (11 §E3) with SIU hit-rate
improvements 2–3× [V]; claims severity/reserving accuracy is a named carrier
discipline (09: Claims Reserving Accuracy). *Investment shape:* claims-core
integration + FNOL document/photo intake (document intelligence is part of the
methodology toolbox, D5) + adjuster-workflow change; moderate. *Sketch:* mid-size P&C
carrier, $1B incurred losses, $100M LAE: LAE −8% = $8M + leakage −1% of incurred =
$10M ÷ $2.5M → **E[ROI] ≈ 6×** (using the conservative halves of both ranges).

**p(success) = 0.65** (3·3·3·3·2 — P5 prices NAIC-model-bulletin-class conduct
scrutiny on routing/reserving; triage is assistive-safe by construction, and
**adverse claim decisions are AP-3-excluded** — the agent routes and flags, humans
deny). *p(failure) drivers:* document-intake quality at FNOL, adjuster trust
(overridden routing decays into the old queues), investigation-biased labels for the
SIU leg (11 §S7 pattern 2).

**Measurement design.** Cycle time by route class, LAE per claim, leakage audits on
closed files (actual vs expected severity), STP rate with quality floors
(re-open/complaint rates as guards), SIU hit rate — against matched pre-period
portfolios or A/B by intake stream. LAE + leakage deltas are the pricing readout.

**The customer's agent.** *Operates:* classifies at FNOL from structured + document/
photo intake, routes (AUT-2), fast-tracks STP-eligible claims through payment
recommendation (payment release AUT-3, approval-gated; graduates per line on measured
parity), flags severity creep and reserve adequacy, packages SIU referrals.
*Monitors:* routing-override rates by adjuster, severity-drift by line/geo/season,
document-extraction confidence, fairness telemetry on referral patterns. *Improves:*
learns routing policy on realized cycle-time/severity outcomes — reward = LAE +
leakage delta at fixed quality floors.

**Data supply chain (→ doc 08).** FNOL forms/photos/documents, policy & coverage
data, adjuster notes, payment history, SIU outcomes, re-open events. Labels: every
closed claim is a completed episode — outcome-rich RL food. Refinement:
document-extraction verification loops, severity-development curves, referral-bias
audits.

**Industry resonance.** Insurance (D3-named: regulated, data-rich, loss-avoidance;
P&C auto/property first, workers' comp, specialty/MGA), healthcare payers (the claims
sibling is UC-19's denials leg), TPAs; self-insured fleets (couples to UC-8's
operational base).

**Evidence.** 11 §L10/§L11 (+§E3 fraud boundary) · 14 claims triage **#11 (5.0)** ·
01 (insurance family, later-tier note on regulatory height — priced in P5) · 02 rank
#12 (3.43) · 03 industry row: insurance = "underwriting, claims triage, fraud,
retention, pricing" · 04: #11 Claims Management Automation, #84 Smart Claims, #35
Healthcare X12 Claims · 09: Risk & Insurance (12 — Cargo Loss & Damage Claim Trend,
Claims Reserving Accuracy), HR (Workers' Comp Claims Tracker).

### UC-13 · Credit-risk decisioning *(argued addition → T-2)*

**Problem.** Credit extension — B2B trade-credit limits, consumer/SMB lending
adjacency, deposit gating — misjudges counterparties in both directions: too
conservative refuses good revenue, too permissive books defaults. *Entity:*
application / account / counterparty. *Decision:* approve/decline recommendation,
limit, terms, price. *Label:* default/delinquency within the performance window —
slow, censored (reject inference), unambiguous. *Horizon:* seconds–days to decide;
labels mature over months–years.

**ROI model.** *Levers:* approval-volume growth at constant loss (the measured
headline), loss-rate reduction at constant volume, pricing precision, analyst
productivity. *Pool anchors:* **the best-documented ML delta in the evidence base**:
Upstart/CFPB **+27% approvals at equal loss rates, −16% average APR** [M —
regulator-summarized] (11 §D3); ~2× approvals in the 620–660 band [M]; 14 ranks
credit risk **#14 (4.8), prioritize-now**. *Investment shape:* origination-system
integration + model-governance artifacts (SR 11-7-class documentation, fair-lending
testing) — the governance work **is** the product here; change cost low (credit teams
already run models). *Sketch:* mid-market lender, $2B originations, 4% net margin:
+5% approval volume at equal loss = **$4M/yr** + loss −25bps on the book ≈ $2.5M ÷
$1.6M (module + validation apparatus) → **E[ROI] ≈ 5×** — with V3 = 5, the only
maximum-hardness lever in the catalog.

**p(success) = 0.65** (3·3·3·3·2). P5 = 2, deliberately: for a product whose
governance primitives are native (D3: "governance maps 1:1"), regulated credit is
**assistive-safe** — the agent recommends and documents; adverse-action decisions and
notices remain human-owned (AUT-4, AP-3 boundary). *p(failure) drivers:* fair-lending
disparate-impact exposure (tested, not assumed away), macro-vintage drift (labels
learned in one rate regime mislead in another), reject-inference bias.

**Measurement design.** **Champion/challenger is the domain standard** — the most
measurement-mature use case in the catalog (11 §D3): approval rate and matured loss
rate vs the incumbent scorecard on randomized or interleaved flow. The challenger
delta at matched loss is simultaneously the regulator artifact and the D8 pricing
readout. The **B2B trade-credit variant** (same skeleton, lighter regulatory surface,
natural companion to UC-4 — credit decides terms, collections recovers them) is the
portfolio-median instance; regulated consumer lending scores account-by-account.

**The customer's agent.** *Operates:* scores applications with reason codes
(adverse-action-grade explanations), recommends limits/terms (AUT-2 as
recommendations; automated approvals within pre-approved policy envelopes AUT-3;
**declines are AUT-4 — never autonomous**), drafts validation documentation and
monitoring reports. *Monitors:* population-stability and vintage drift,
disparate-impact metrics continuously, override patterns, reject-inference
assumptions. *Improves:* learns within the governed champion/challenger harness —
candidate policies are promoted only through the measured challenger protocol; reward
= approval-volume × margin at fixed loss, subject to fairness constraints.

**Data supply chain (→ doc 08).** Application data, bureau/alternative data (consented),
performance histories (the vintage archive is the asset), payment behavior from UC-4's
ledger where attached. Labels: slow but unambiguous — the data plan's job is vintage
curation and censoring handling. Refinement: fair-lending feature screens, reject-
inference design, macro-regime tags.

**Industry resonance.** Banking/fintech (D3 first-named), B2B trade credit across
manufacturing/distribution (the widest, lightest-touch pool), BNPL/auto/mortgage,
insurance premium financing.

**Evidence.** 11 §D3 (value T1 #5; "modeling easy, governance heavy" — the governance
is our product) · 14 credit risk #14 (4.8, prioritize-now) · 01 T1 #5 boundary
(fraud/risk family) · 02 rank #5 credit leg · 03 T1 #5
("fraud/credit decisioning") · 04: #14 Credit Card
Transactions, #52 Model Risk Management With EY · 09: Finance (30), Risk & Insurance (12).

---

### UC-26 · Field-service dispatch & first-time fix *(added 2026-10-09 → T-11)*

**Problem.** A technician arrives without the part or the skill the job needed, the
visit becomes two, and the day's route was built around guessed durations. *Entity:*
service job (work order) × technician × van stock. *Decision:* which technician, in
what sequence, carrying which parts — or a remote session instead of a truck roll.
*Label:* first-time fix (no return visit for the same asset and fault within the
window), actual duration, parts actually used — all free from field-service-management
(FSM) closeout. *Horizon:* the dispatch day, re-optimized intraday.

**ROI model.** *Levers:* cost reduction (repeat truck rolls, drive time, overtime),
revenue lift (technician capacity — more completed jobs per technician per day),
loss avoidance (SLA penalties on contract customers). *Pool anchors:* the deepest
pool of named results anywhere in evidence 16: first-time fix up 9% with resolution
cost −49%, first-time fix 84→96–97%, jobs per technician 18.5→26+ with travel −35%
[V/C — vendor-published customer cases, 16 function/15]; FTFR 74→91% and callbacks
−64% [V] (16 industry/21); drive time −10% and average ticket +14% [V] (16
demand/13); −52% miles per order at a ~250-person firm [C] (16 engineering/05).
Surfaced by **all four research angles** — the only Tier-1 candidate to do so with a
single loop (plan 09 §2). *Investment shape:* one system of record (FSM) plus parts;
the optimizer and the closeout-capture change are the work. *Sketch:* service
organization with 400 technicians (~400k jobs/yr, ~18% repeat-visit rate): −4 pts
repeats ≈ 16k truck rolls × $200 ≈ $3.2M + drive time −5% ≈ $0.5M → **≈ $3.5M/yr** ÷
$0.7M → **E[ROI] ≈ 5×**.

**p(success) = 0.65** (3·3·2·3·3). Labels are a by-product of closeout; the dispatch
board is the native system of action; the dispatch day is an existing operating
ritual; the decision is low-liability (working-time rules are hard constraints). P3 =
2 because territory comparisons carry mix confounding — the remedy is a holdout of
territories *or weeks* with matched job mix, designed at qualification. *p(failure)
drivers:* closeout-quality debt (fault codes chosen by habit — the data plan repairs
it), dispatcher override culture, optimizer brittleness on emergency days.

**Measurement design.** Territory- or week-level holdout keeping the current dispatch
process; first-time-fix rate, repeat visits, jobs per technician, drive time, SLA
adherence compared between arms. The readout is in the operator's own ledger units
(truck rolls, technician hours) — the D8 pricing instrument.

**The customer's agent.** *Operates:* predicts duration, likely fault, and parts/skill
per job; assigns and sequences within skill, certification, SLA and working-time rules
(AUT-2 within the envelope; dispatcher override always available and logged); reserves
van parts (AUT-2); offers remote-first sessions where the model predicts remote
resolution (AUT-2 within policy). *Monitors:* override rate, duration-prediction
error, first-time-fix by fault class, parts-stockout events on the van. *Improves:*
reward = **truck rolls avoided + technician hours released − SLA breaches**, learned
from closeout outcomes; proposes skill-matrix and parts-kit changes (AUT-3, service
head approves).

**Data supply chain (→ doc 08).** FSM work orders (with free text), asset/install-base
history, parts consumption, technician skills/certifications/territories, GPS/drive
times, SLA contracts. Labels free from closeout once fault and fix codes are captured
as a designed instrument; action→outcome native (assignment → visit → fix/return).
Refinement: fault-code hygiene (M-10 text mining of technician notes), asset
resolution across sites (M-2).

**Industry resonance.** HVAC/MEP and building services, equipment OEM service
(medical, lab, industrial, elevators), utilities contractors, telecom installation
(14 ranks telecom field-service dispatch #35, 4.65), appliance service, hygiene and pest
services — the D3 mid-market with FSM exhaust.

**Evidence.** 16: function/15, industry/21, demand/13, engineering/05 and /19,
industry/28 (mid-market buyability) · 14 telecom field-service dispatch #35 (4.65) ·
11 §F family (routing/fleet adjacency) · C-3 (route optimization, this document) is
the OR-only cousin — dispatch is the ML-plus-OR loop C-3 lacks · 09 Fleet Management
(23) and Operations/Logistics (40).

### UC-28 · Payables recovery audit *(added 2026-10-09 → T-11)*

**Problem.** Invoices arrive in volumes no team can check line by line: freight bills
carry wrong rates and accessorials, the same supplier invoice is paid twice under
different references, and prices drift from the contract. Recovering the money later
costs more than stopping it. *Entity:* invoice line × contract term × receipt/shipment
× payment. *Decision:* pay, hold, short-pay to the contract price, or dispute with an
evidence pack. *Label:* verified recovery or prevention (supplier credit, corrected
payment, closed dispute) vs a hold that proved the invoice correct — generated by the
AP workflow itself. *Horizon:* per invoice, before payment release; retrospective
sweeps over closed periods.

**ROI model.** *Levers:* loss avoidance (overpayments prevented), cash recovery
(overpayments clawed back), working-capital neutrality (no early payments on wrong
invoices). *Pool anchors:* $62.2M combined prevention and recovery at one large
manufacturer [C] (16 function/03, engineering/11); ~4% verified leakage
on contracted procurement spend [C — consultancy-published] (16 function/08); freight and parcel credits
3.8–5.1% of spend [V] and 3–5% of freight spend [V] (16 function/21, demand/15);
duplicate/erroneous payments 0.1–0.5% of AP spend [C/T] (16 function/03); evidence
14 ranks price/contract leakage detection **#25 (4.65)**. The research's
reason-pass ranked freight audit **first** for mid-market ROI and fastest to a first
result (16 demand/31, engineering/37, function/24). *Investment shape:* AP + contract
+ freight/TMS data, one finance team, an existing action path (the AP hold). *Sketch:*
$500M-revenue manufacturer/distributor, $300M third-party spend, $30M freight:
duplicates 0.1% ≈ $0.3M + freight overbilling 2% ≈ $0.6M + contract-price compliance
1% of $120M contracted ≈ $1.2M → **≈ $2.1M/yr** ÷ $0.4M → **E[ROI] ≈ 5×**.

**p(success) = 0.65** (2·3·3·3·3). P1 = 2: contracts and rate cards are documents
(extraction and unit-of-measure normalization are the data work), and supplier/item
entity resolution across ERP instances is required. Everything else is native: the
hold is a standing AP control, the payment run is the operating ritual, and
**verified cash is self-documenting — every finding is its own counterfactual**, so
no holdout is needed to prove the return. *p(failure) drivers:* false holds that
delay good suppliers (relationship cost), contract repositories nobody can find
(UC-24's repository-chaos driver), segregation-of-duties lapses.

**Measurement design.** The recovered-and-prevented ledger: only amounts verified by a
supplier credit, a corrected payment or a closed dispute count; holds that prove the
invoice correct are charged against the return (the guardrail inside the reward).
The ledger is the D8 instrument and the natural basis for success-share pricing (the
category's buyers already pay contingency fees — 16 demand/15, function/21).

**The customer's agent.** *Operates:* reconciles every invoice against contract,
rate, receipt/shipment and payment history (AUT-2 for scoring and flagging); places
holds below a value threshold (AUT-2 within caps); short-pays and supplier disputes
are AUT-3 (named approver); recovery sweeps over closed periods (AUT-2 to draft,
AUT-3 to send). *Monitors:* false-hold rate by supplier, days-payable impact, finding
precision by rule family, contract-term coverage. *Improves:* reward = **verified cash
recovered + prevented − cost of false holds**; learns supplier-specific anomaly
thresholds (AUT-3 in bounds); proposes contract-master fixes and supplier-level rules.

**Data supply chain (→ doc 08).** AP invoices and payments, POs and receipts, vendor
master, contracts/price agreements/rebate terms, freight invoices + tariffs + BOLs +
tracking, vendor statements. Labels: dispute and credit outcomes (native). Refinement:
contract-term extraction with provenance (M-11), item and supplier resolution (M-2),
unit-of-measure normalization. Boundary: their ledgers and weights; our rule-family
templates and anomaly priors per spend category.

**Industry resonance.** Manufacturing, distribution, retail, CPG, construction
materials, any multi-site operator with high AP volume; freight-heavy shippers
deepest.

**Evidence.** 16: function/03, /04, /08, /21, /24, /29 · engineering/11, /37 ·
demand/08, /15, /31 · 14 price/contract leakage #25 (4.65), invoice matching #24 ·
11 §D family (AP/exceptions) · 04 none direct (whitespace) · 09 Finance (30),
Procurement/Supply Chain (22).

---

## 4. Band B — structured dossiers

Twenty entries. Same fields as Band A, compressed; the defining extra field is the
**A-condition** — the ROI/risk quantity whose change re-bands the entry into Band A.
A-conditions are never time conditions.

### UC-3 · Customer lifetime value *(demoted from v1 → T-3)*

**Skeleton.** Investment decisions about customers (CAC ceilings, service tiers,
retention budgets, save-offer depth) are made against averages. *Entity:*
customer/segment. *Decision:* how much to invest in acquiring/serving/saving.
*Label:* realized discounted margin — delayed, censored (active customers). *Horizon:*
1–5 yrs, refreshed quarterly.

**ROI model.** Levers: acquisition efficiency (LTV:CAC ceilings by segment),
value-weighted retention allocation, tier assignment. Anchors: Carrefour **+21% ROAS**
on new customers via LTV model [C] (14); 14 rank **#19 (4.75, prioritize-now)**; but
11 places CLV **value T4** with the killing prevalence verdict: *"computed often,
decisioned on rarely"* (§S6) — a CLV number that decorates dashboards is failure
pattern 1. Sketch: standalone, E[ROI] ≈ 4× *if* a budget rule consumes it; as the
value-weighting layer inside UC-1/UC-2 queues and UC-11 arbitration, the lever is real
and measured through those modules' holdouts.

**p(success).** Standalone **0.26** (3·1·1·2·3 — no native action path, no clean
standalone measurement); as composition layer **≈0.55** (P2/P3 inherited from the
host module). RA×: ≈1.0 standalone (below every band) / **≈2.2 composed → Band B**.
*p(failure) driver:* actionability — value exists only when a budget rule consumes
the number.

**Measurement & agent.** Measured through host-module experiments with value-weighting
as the treatment arm (calibration of predicted-vs-realized cohort margin is the model
KPI). Agent: maintains survival-adjusted (censoring-correct) value estimates per
account/segment (AUT-1), feeds CAC ceilings to ad platforms and value weights to
UC-1/UC-11 policies (AUT-2 via host modules). Data chain: billing, transactions,
margin/cost-to-serve from ERP (the recurring gap), UC-1's feature store.

**Industries.** Banking household profitability, insurance policyholder value
(persistency × premium − expected loss), B2B SaaS expansion-weighted accounts,
retail/e-commerce (BTYD variants).

**A-condition.** Measured evidence (any account) that value-weighting moves a host
module's holdout readout by ≥20% relative — i.e., the composition lever proves its own
increment. Evidence: 11 §A5 · 14 CLV #19 · 04 #17/#78/#87 · 09 CS (26).

### UC-14 · Pricing & discount optimization

**Skeleton.** Price and discount decisions leak margin: list prices set by cost-plus,
discounts by rep discretion. *Entity:* product×segment×channel (B2C) / deal (B2B).
*Decision:* price corridor, discount approval, promo depth. *Label:* win/loss ×
realized margin; elasticity from (scarce) price variation. *Horizon:* per deal /
per revision cycle.

**ROI model.** Levers: margin lift at held volume, discount-leakage recovery, promo
efficiency. Anchors: **1% price ≈ +8% operating profit** [M] (McKinsey, S&P 1500);
B2B initiatives **+2–7 pts return-on-sales** [C]; building-materials case margin
**+3–8 pts** [M/C]; retail AI pricing **+5–10% gross profit** [C] (BCG via 03, which
ranks pricing **T1 #3**); 11 value **#2**. Sketch: $800M B2B seller, +50bps realized
margin = $4M ÷ $0.5M → **E[ROI] ≈ 8×**.

**p(success) = 0.33** (2·2·2·2·2 — every driver mid). *p(failure) drivers:* **causal
validity** (elasticity from confounded flat-price history — failure pattern 5, 11
§S7), sales-force adoption in B2B (reps route around corridors), PR/regulatory tail
on visible B2C dynamic pricing. RA× ≈ 2.6.

**Measurement & agent.** A/B by region/category or matched deal cohorts; realized
margin vs control is readout and price. Agent: proposes corridors and deal guidance
with win-probability trade-offs (AUT-2 as guidance; price changes AUT-3), runs
designed price experiments where policy allows, monitors elasticity drift and
competitor response. Data chain: transactions with true realized price (rebates
included — the data work), win/loss, cost; designed variation as an asset the agent
actively builds.

**Industries.** B2B manufacturing/distribution (deal-desk shape — the
lowest-governance entry point), retail/e-commerce, insurance (regulated rate-filing
variant scores separately), travel/hospitality (mature incumbents).

**A-condition.** An account-class where designed price experiments are operationally
acceptable (P3→3) **and** measured elasticity validity replicated across ≥2 reference
deployments (V3→4, p→0.46+, RA×→3+). Evidence: 11 §A2 (#2) · 03 T1 #3 · 14 #58
(4.35) — grid: strategic-bet ("requires prerequisites", agreeing with our P-scores) ·
04 #73 · 09 Sales (Pricing Sensitivity Analysis).

### UC-15 · Employee attrition & workforce retention

**Skeleton.** Valuable employees quit with little warning. *Entity:* employee —
**scored at role×site segment by default** (the ethical-hazard reducer). *Decision:*
manager check-in, comp/workload/rotation adjustment, systemic policy fix. *Label:*
voluntary exit (regrettable flag) within 3–12 months. *Horizon:* quarterly.

**ROI model.** Levers: replacement-cost avoidance (**50–200% of salary** [C-modeled],
Gallup/SHRM; US voluntary turnover **~$1T/yr** [C-modeled], 11 §I1), ramp-time
productivity, knowledge retention. Sketch: 5,000-employee firm, 18% turnover, −2pts
on targeted segments ≈ 100 exits avoided × $40k ≈ **$4M/yr** ÷ $0.8M → **E[ROI] ≈
5×**.

**p(success) = 0.29** (3·2·2·2·1). *p(failure) drivers:* **governance** (EU AI Act
high-risk class for employment; works councils; score leakage into performance
decisions is the trust-collapse failure — 11 §I1), actionability (weakest
action-per-model-quality in the catalog: segment policy, not individual saves, is
where value lives), small-N statistics. RA× ≈ 1.5.

**Measurement & agent.** Segment-level before/after on targeted populations
(individual-level A/B is ethically constrained — 11 §I1); retention delta × replacement
cost is the readout. Agent: segment-level flight-risk and driver reporting to HR
leadership (AUT-1 only; **no individual adverse use — AUT-4/AP-3 boundary**; access
identity-scoped to a named HR circle). Data chain: HRIS, comp, engagement surveys,
scheduling/overtime exhaust; strict access partitioning is part of the data plan.

**Industries.** High-turnover operations (logistics, contact centers, retail,
healthcare nursing), scarce-skill tech.

**A-condition.** A governance pattern (works-council-cleared, no-adverse-use
attested, EU-AI-Act-conformant) that measurably holds P5 ≥ 2 across ≥2 deployments,
plus segment-program evidence hardening the lever to [M] (p→0.46, RA×→2.3; still a
judgment call — revisit). Evidence: 11 §I1 · 14 #103 (3.8),
explore-selectively · 02 rank #13 (3.14 — last) · 03 T2 · 09 HR (28 — Driver Turnover
Rate, 90-Day Retention).

### UC-16 · Service ticket triage & routing

**Skeleton.** Inbound support volume must be understood, prioritized, routed before
anyone can help; manual triage is slow, inconsistent, and misroutes multiply handle
time. *Entity:* ticket. *Decision:* category, priority, queue/agent. *Label:* final
resolved category/team — free from history. *Horizon:* seconds at arrival.

**ROI model.** Levers: handle-time reduction via correct first routing, SLA
protection, deflection-quality (not deflection-theater). Anchors: contact costs
**$3–8/interaction** vs automated $0.20–1.50 [C]; both compendia rate it among the
most feasible anywhere (11 F1 "labels free, action native"; 14 feasibility **#3**,
value #21). Sketch: 2M-ticket operation: −8% handle time + misroute elimination ≈
**$1.8M/yr** ÷ $0.6M → **E[ROI] ≈ 3×**.

**p(success) = 0.77** (3·3·3·3·3 — tied-highest with UC-4). *p(failure) driver:*
almost none intrinsic; the risk is commercial, not delivery. RA× ≈ 2.3 — **Band B
because V1 is small and the category is the most commoditized in the catalog**
(platform-native features in Zendesk/ServiceNow-class suites — 11 §B1.13):
differentiation-per-dollar, not feasibility, caps the score.

**Measurement & agent.** A/B routing (model vs incumbent) on handle time, reassignment
rate, SLA breaches. Agent: classifies and routes (AUT-2), drafts responses for agent
review (AUT-3 for autonomous send), escalates compliance categories by rule, monitors
taxonomy drift and retrains its own label maps. Data chain: helpdesk history (labels
free), macros/resolutions, CSAT; disposition capture native.

**Industries.** Universal; most acute in high-volume B2C (fintech, e-commerce, telco)
and as the module-attach in accounts where UC-1 reads support signals anyway.

**A-condition.** Account-level pool depth: service labor ≥ $20M/yr (V1→4, sketch →
5×+, RA× ≥ 3) — the mid-market median keeps it B; large contact-center accounts score
A at intake. Evidence: 11 §B1 · 14 #21/feas #3 · 01 T1 #3 (family) · 02 rank #1's
triage leg · 04 #44/#46/#47 · 09 CS + IT (ticket apps in both).

### UC-17 · Document intelligence & touchless AP

**Skeleton.** High-volume operational documents (invoices, POs, claims forms, KYC
docs) are keyed and routed by hand. *Entity:* document/invoice. *Decision:* extract →
validate → match → route → post (touchless where confident). *Label:* human
corrections + posting outcomes — free. *Horizon:* minutes–days per document,
continuous flow.

**ROI model.** Levers: processing-cost collapse (**$10.18/invoice avg vs $2.36
best-in-class** [M] — Ardent/APQC, a 4–5× gap; 11 §D1), cycle time (2.8 vs 17.4
days), early-payment-discount capture, error/fraud reduction. Sketch: 1M invoices/yr
at $8 → 70% touchless ≈ **$4M/yr** ÷ $1.2M → **E[ROI] ≈ 3×** (mid-market volumes
scale this down; see A-condition).

**p(success) = 0.77** (3·3·3·3·3). *p(failure) driver:* long-tail document formats
inverting unit economics (11 §S7 pattern 10) — scoped by confidence-routing (the
tail stays human). RA× ≈ 2.3 — Band B on V1 at the mid-market median and IDP vendor
saturation (differentiation risk), not on feasibility.

**Measurement & agent.** Touchless rate at fixed error rate + cost/document
before/after — clean and standing. Agent: extracts, validates against PO/receipt,
posts within confidence envelopes (AUT-2; payment release AUT-3), routes exceptions
with reasons, monitors format drift, actively solicits corrections as labels. Data
chain: document streams + ERP masters + correction telemetry (the label factory).

**Industries.** Universal back office; deepest in manufacturing/retail AP, insurance
FNOL intake (feeds UC-12), banking KYC refresh, healthcare (the "fax problem").

**A-condition.** Account volume ≥ 1M documents/yr **or** attach to UC-12/UC-19 where
the document leg unlocks a Band-A pool (then priced inside that module's ROI
contract). Evidence: 11 §D1/§J2 (both F1) · 14 document-processing family
prioritize-now · 01 T2 (document intelligence) · 02 rank #6 leg · 04 #47 + LLM-doc
accelerators · 09 Compliance (28) + Cross-Functional packs. *(2026-10-09: catching
overpayments — duplicates, freight overbilling, off-contract prices — is UC-28; UC-17
processes the document, UC-28 audits the money.)*

### UC-18 · Supplier risk & monitoring

**Skeleton.** Supply disruptions arrive unannounced from supplier failure (financial,
operational, geopolitical). *Entity:* supplier. *Decision:* qualify / monitor
intensity / dual-source / buffer. *Label:* disruption events — **rare, weak labels**
(the defining constraint). *Horizon:* continuous monitoring + sourcing events.

**ROI model.** Levers: disruption-cost avoidance (expedites, line stops, lost sales),
concentration-risk reduction, negotiation posture. Anchors: 11 verdict is sober —
"predictive power modest, monitoring value real" (§F6); 14 explore-selectively.
Honest V3 = 1. Sketch: $2B manufacturer: one avoided medium disruption/yr (~$3M
expedite+downtime) + buffer optimization ≈ **$4M** ÷ $1M → **E[ROI] ≈ 4× [T]**.

**p(success) = 0.39** (2·2·2·2·3). *p(failure) driver:* rare-event prediction
overpromise — the scope discipline is **monitoring + scoring composition** (financial
signals + ERP delivery performance + adverse-media NLP), not disruption prophecy.
RA× ≈ 1.6.

**Measurement & agent.** Detection lead time on realized supplier events +
buffer/expedite cost deltas; honest attribution requires an event ledger. Agent:
maintains risk tiers, watches delivery-performance anomalies (M-5 machinery), reads
news/adverse media, raises sourcing recommendations (AUT-1/2; sourcing changes are
human). Data chain: ERP PO/receipt history, supplier financials, news feeds, event
dispositions.

**Industries.** Manufacturing/industrial (post-2020 board topic), automotive
(deepest tiers), pharma (single-source APIs), retail private label.

**A-condition.** Either the lever hardens (measured avoided-disruption evidence [M/C]
across deployments, V3→3) or the account condition: supplier-concentration exposure
≥ $50M single-source spend, where one avoided event pays 10× (account-scored A).
Evidence: 11 §F6 · 14 #98 (3.9), explore-selectively · 02 rank #10 (procurement
leg) · 04 none direct (#27 ESG adjacent) · 09 Procurement (22 — Supplier Risk Scoring, Sole Source
Dependency).

### UC-19 · Healthcare ops — denials & no-show

**Skeleton.** (a) Payers initially deny **~12%** of hospital claims for predictable
reasons; (b) no-shows (10–30% by setting) waste clinical capacity. *Entity:* claim
pre-submission / denial / appointment. *Decision:* fix-before-submit, appeal vs
write-off, root-cause programs; remind/overbook/reschedule. *Label:* payer
adjudication (CARC/RARC codes — exceptional label quality); attended/no-show.
*Horizon:* days + appeal windows.

**ROI model.** Levers: denial prevention (rework **$25–118/claim**; hospitals spent
**$19.7B in 2022** fighting denials [M] — AHA via 11 §L1), appeal-recovery lift,
capacity utilization (no-show). 14 ranks healthcare claims/denials **#9 (5.0)**; 11
calls denials "the best-labeled problem in healthcare" (value T2 #11). Sketch: $2B
health system: denial rate −15% relative on a $240M initial-denial pool ≈ recovery +
rework savings ≈ **$8M/yr** ÷ $1.6M → **E[ROI] ≈ 5×**.

**p(success) = 0.55** (3·3·3·2·2 — P5 prices HIPAA/BAA posture, which the
in-your-environment thesis natively fits; P4 prices revenue-cycle-team adoption).
*p(failure) drivers:* payer-rule drift (adversarial regime — the rules update against
you, 11 §S7 pattern 6), root-cause neglect (appealing symptoms instead of fixing
registration/coding upstream — pattern 12). RA× ≈ 2.7 — **the strongest Band-B score;
B rather than A only because the pool is industry-concentrated** (portfolio-median
account isn't a health system; account-level it scores A).

**Measurement & agent.** Denial rate by root-cause class before/after; appeal win
rate × recovered dollars; utilization for no-show — all standing RCM metrics. Agent:
scores claims pre-submission and routes fixes (AUT-2), drafts appeals with grounded
citations (AUT-3, human files), runs root-cause decomposition (UC-7 machinery on
CARC codes), predicts no-shows and executes reminder/overbook policy (AUT-2).
Data chain: 835/837 streams, denial codes, registration/coding events, scheduling
history; adjudication outcomes are free labels.

**Industries.** Health systems/provider groups, RCM service providers, payers
(mirror-image variant), dental/veterinary chains (lighter governance).

**A-condition.** Account-level (health-system) scoring is already A-grade; the
portfolio-band lifts if the D3 industry mix shifts toward healthcare such that the
median target account carries the pool (a CMO/CRO portfolio decision, priced by D1 —
not a time condition). Evidence: 11 §L1/§L4 (+L2 prior-auth sibling) · 14 #9 · 02
rank #8 (3.83) · 03 T2 (healthcare family; "strongest first vertical template" note)
· 04: #35 X12 Claims, #51 Medicare Risk Adjustment, #36 HEDIS + the 23-item HLS block
· 09 Clinical & Lab Services (16).

### UC-20 · Cash-flow & working-capital forecasting

**Skeleton.** Treasury and FP&A steer liquidity on spreadsheets: cash positioning,
borrowing timing, covenant headroom. *Entity:* entity×currency×horizon bucket.
*Decision:* borrow/invest/hedge timing, working-capital levers. *Label:* realized
cash flows — free, daily. *Horizon:* 13-week rolling + annual planning.

**ROI model.** Levers: borrowing-cost avoidance (precision → lower buffers), idle-cash
yield, covenant-breach avoidance, FP&A hours. Anchors: composition of UC-4's
payment-date distributions + UC-5's demand curves — its data is largely already
refined by siblings; pool anchored to rate environment (post-2022 each idle $100M ≈
$4–5M/yr opportunity). Sketch: $1.5B company: buffer −$30M at 5% ≈ $1.5M + FP&A
release ≈ **$2M/yr** ÷ $0.5M (attach economics) → **E[ROI] ≈ 4×**.

**p(success) = 0.46** (3·2·2·2·3). *p(failure) drivers:* actionability (treasury must
actually resize buffers — policy change), attribution of avoided borrowing to the
forecast. RA× ≈ 1.8.

**Measurement & agent.** Forecast error vs incumbent (standing metric) + realized
buffer reduction × rate. Agent: maintains rolling cash forecasts with drivers,
proposes buffer/borrowing actions (AUT-1/2; money movement is human), stress-tests
covenant scenarios. Data chain: AR/AP ledgers (UC-4 shared), bank feeds, FX,
demand forecasts (UC-5 shared).

**Industries.** Universal mid-market+; deepest in thin-margin distribution,
PE-owned leverage cases, multinational FX exposure.

**A-condition.** Attach-priced on UC-4/UC-5 foundations where marginal investment
≈ $0.3M (V4→5, E[ROI]→6×+, RA×→2.8–3) plus one [M]-grade treasury case hardening V3.
Evidence: 11 §D4/§D9 (T3/T4 rows) · 14 cash-flow forecasting #41 (4.55) +
working-capital optimization #42 (4.55), both prioritize-now · 02 rank #6 (finance
ops — forecasting named) · 09 Finance (13-week Cash Flow Forecast — verbatim
prior-art app) · 04 none direct.

### UC-21 · AIOps & incident intelligence

**Skeleton.** IT incidents interrupt revenue systems; alert floods bury operators.
*Entity:* alert/incident/service. *Decision:* correlate, prioritize, route,
recommended remediation. *Label:* incident dispositions, MTTR, postmortems — free.
*Horizon:* real-time + retro.

**ROI model.** Levers: downtime cost (**~$5,600/min** Gartner-attributed [C, dated
but canonical]; modern syntheses $140k–300k+/hr), alert-noise release (90%+
compression [V]), toil reduction. AT&T: >95% diagnostics automated, downtime −50%
[C]. Sketch: digital business with $15M/yr incident cost: MTTR −25% ≈ **$3.5M** ÷
$0.9M → **E[ROI] ≈ 4×**.

**p(success) = 0.39** (2·3·2·2·2). *p(failure) drivers:* CMDB/topology data debt
(11 §S7 pattern 4), vendor density (observability incumbents own the buyer), and
"prediction proper is oversold" (11 §H2 — correlation/noise-reduction is the honest
scope). RA× ≈ 1.6.

**Measurement & agent.** MTTR/MTTD before/after, alert-compression at fixed recall,
incident-cost ledger. Agent: correlates alert storms into incidents, routes with
suspected root cause, executes pre-approved runbook actions (restart/scale/rollback
= AUT-2 within envelopes; novel actions AUT-3), files postmortem drafts. Data chain:
telemetry/logs/traces, topology, incident dispositions (label factory), runbook
outcomes.

**Industries.** SaaS/digital natives, banks/telcos (largest estates), retailers
(peak-season exposure).

**A-condition.** Demand-led: an existing account pulls it (attach economics drop V4
cost, and the buyer problem disappears — P4→3, RA×→2.5+); or the incident-cost pool
at the account ≥ $20M/yr (account-scored A). Evidence: 11 §H2 · 14 AIOps #16 ·
01 T3 (cybersecurity family adjacency) · 02 rank #4 leg · 03 T1 #6 (their read is
more bullish than ours — noted) · 04 none direct · 09 IT/Engineering (26).

### UC-22 · Quality, scrap, yield & process optimization *(scope widened 2026-10-09 → S-19, T-10)*

**Skeleton.** Scrap, rework, and yield loss accumulate from multivariate process
causes nobody can see across shifts/lines/lots. *Entity:* unit/lot × process step.
*Decision:* parameter adjustment, inspection targeting, root-cause programs.
*Label:* defect/scrap events + dispositions from MES/QMS — natural. *Horizon:*
per lot/shift, continuous.

**ROI model.** Levers: cost-of-quality reduction (5–15% of revenue [T — rule of
thumb]), yield points (a semiconductor yield point ≈ tens of $M/yr), warranty
avoidance. DeepMind cooling **−40% energy** [M-adjacent, company-measured] is the
family's canonical composition case (11 §G3). Sketch: $1B manufacturer, CoQ 8% =
$80M: −5% relative ≈ **$4M/yr** ÷ $0.9M → **E[ROI] ≈ 5×**.

**p(success) = 0.46** (2·2·2·3·3). *p(failure) drivers:* observational-causality traps
(process data is confounded by operator interventions — 11 §S7 pattern 5), data
contextualization (joining process params to outcomes across systems), change-control
friction on acting. RA× ≈ 2.3. **Scope (widened 2026-10-09):** the tabular
drivers/prediction shape, plus setpoint recommendations within an engineer-defined
envelope, plus — at accounts with line cameras installed or a funded camera
programme — visual inspection, delivered as a capability level of S-19. Setpoint
recommendations are advisory by default; bounded closed-loop adjustment is a customer
choice under change control, never a write to control or safety systems. The score
above prices the tabular shape only; **vision-*first* inspection as the entry
investment stays AP-8**. New evidence: scrap −25% to −52% and closed-loop refinery
gains of $6–9M/yr [V/C] (16 industry/04, /20); $39M at a cement producer and
root-cause time from months to an hour [C] (16 engineering/14); $3/t alloy savings
[C] (16 engineering/32); >99% of defects caught on a packaging line [C] (16
engineering/10) — still vendor/company-grade, so V3 holds at 3.

**Measurement & agent.** A/B by line/campaign with baseline discipline (mix shifts
confound); scrap/yield/first-pass-yield are standing metrics. Agent: monitors
process-parameter drift vs quality outcomes (UC-7 machinery pointed at MES), ranks
suspected drivers per excursion, proposes parameter windows (AUT-1/2; parameter
changes go through change control = AUT-3). Data chain: MES/QMS/SCADA history, lot
genealogy, disposition codes.

**Industries.** Discrete manufacturing, semiconductor/electronics (deepest pools),
chemicals/process, food (waste framing).

**A-condition.** Lever hardening: ≥2 deployments with [M]-grade yield/scrap deltas
attributable through change-controlled experiments (V3→4, RA×→3+). Evidence: 11
§G3/§G5 · 14 yield #60 (4.35, strategic-bet quadrant) + scrap & rework #28 (4.65,
prioritize-now) · 01 T3 (manufacturing yield) · 03 industry row (quality/yield) · 04 #58 OEE, #65 (vision-excluded) · 09 QA (21 — Root Cause
Analysis Summary, First Pass Yield) · 16 industry/04, /20 · engineering/10, /14, /32 ·
demand/21.

### UC-23 · Campaign response & marketing optimization

**Skeleton.** Marketing allocates spend and contacts on last-touch guesses. *Entity:*
customer × campaign × channel. *Decision:* audience inclusion, budget split, send
policy. *Label:* response/conversion within window — fast, free. *Horizon:* per
campaign, continuous.

**ROI model.** Levers: response-rate lift on existing spend, waste reduction
(**~40% of spend wasted** [C/T — directional, 11 §C1]), fatigue cost avoidance.
Sketch: $30M marketing budget: +10% response efficiency ≈ **$1.5–3M/yr** ÷ $0.6M →
**E[ROI] ≈ 4×**.

**p(success) = 0.46** (3·3·2·2·2). *p(failure) drivers:* measurement discipline
(last-touch mirages; the fix is geo-holdouts/incrementality tests — which the module
makes default), channel-team adoption. RA× ≈ 1.8. **Scope boundary:** response
modeling and budget allocation on measured incrementality — full MMM-as-oracle is
anti-portfolio AP-5 (circular measurement), and content generation is AP-4.
Channel-level allocation across weeks from aggregate spend is UC-34 (test-calibrated
MMM, 2026-10-09); UC-23 keeps audience, response and within-campaign budget
decisions, and the two share one holdout book.

**Measurement & agent.** Geo/audience holdouts per campaign; incremental
conversion × margin is readout and price. Agent: builds audiences (shared UC-9
spine), splits budgets against measured response curves, enforces fatigue budgets,
runs the holdout book (AUT-2; budget moves above envelope AUT-3). Data chain:
campaign logs, conversion events, spend feeds, holdout assignments (a designed
data asset, D7).

**Industries.** B2C retail/e-commerce, banking/insurance marketing under consent
constraints, CPG (retailer-mediated — harder attribution), B2B demand gen (couples
to UC-9).

**A-condition.** Account with experimentation infrastructure and spend ≥ $50M (V1→4,
P3→3, RA× ≥ 3 — account-scored A); portfolio-median stays B. Evidence: 11 §C4/§C1 ·
14 campaign response #76 (4.2), grid prioritize-now · 01 T1 #1 (personalization
family leg) · 04 MMM/MTA/RTB accelerators · 09 Marketing (20).

### UC-24 · Contract intelligence & obligation risk

**Skeleton.** Contract terms leak value silently: unenforced escalation clauses,
missed renewal windows, unbilled entitlements, obligation breaches. *Entity:*
contract/clause/obligation. *Decision:* enforce, renegotiate, remediate, alert.
*Label:* realized leakage findings + remediation outcomes. *Horizon:* contract
lifecycle events, continuous monitoring.

**ROI model.** Levers: leakage recovery (poor contract management costs **up to ~9%
of annual revenue** [C-survey — WorldCC/IACCM, 11 §J1]), review-cost collapse
(LawGeex: AI 94% vs lawyers 85% accuracy, 26s vs 92min [M]), obligation-breach
avoidance. Sketch: $1B services firm: recover 0.3% revenue of the leakage pool ≈
**$3M/yr** ÷ $0.8M → **E[ROI] ≈ 4×**.

**p(success) = 0.39** (2·2·2·2·3). *p(failure) drivers:* repository chaos (the
contracts aren't findable — data debt), actionability (a leakage finding needs a
commercial owner willing to enforce), long-tail clause formats. RA× ≈ 1.6.

**Measurement & agent.** Recovered-leakage ledger (each finding is a self-documenting
value story — the UC-7 pattern applied to contracts) + review-hours release. Agent:
extracts terms/obligations to structured registers, cross-checks billing vs
entitlements (couples to UC-4), watches renewal/escalation windows, drafts
enforcement notices (AUT-2 drafts; enforcement is human). Data chain: contract
repository, billing/ERP for entitlement checks, finding dispositions.

**Industries.** B2B services, healthcare payer/provider contracts, real estate/
construction (L24 adjacency), procurement-heavy manufacturers (buy-side mirror).

**A-condition.** Measured recovered-leakage [M/C] ≥ 3× at two reference accounts
(V3→3, RA×→2.5) plus entitlement-billing coupling with UC-4 (attach economics,
V4→4). Evidence: 11 §J1/§J4 (leakage pool; F2 feasibility) · 14 contract review &
extraction **#18 (4.8), grid prioritize-now** (obligation tracking #80 — 14 is more
bullish than our P-scores; the repository-chaos driver is why we hold B) · 01 T2
(document intelligence family) · 04 #52 (EY model-risk
doc automation adjacent) · 09 Finance (Contract Escalation Clause Monitor — verbatim
prior-art app), Compliance (28). *(2026-10-09: the billing-vs-entitlement cross-check
moves to UC-29 (unbilled work & revenue leakage) and the buy-side invoice-vs-contract
mirror to UC-28 (payables recovery audit); UC-24 keeps obligations, renewals and
escalation windows, and its extraction register feeds both.)*


### UC-25 · Quote pricing & margin protection *(added 2026-10-09 → S-13)*

**Skeleton.** Quotes for configured or one-off work are priced by an estimator's
judgment: some jobs are won at a loss, others lost on price, and the quote depends on
who wrote it and how busy they were. *Entity:* quote × job (line items, materials,
labor, customer, region). *Decision:* the quoted price, its risk buffer, and whether
it goes out automatically, to an estimator, or to an approver; for self-serve web
quotes, whether to accept a deposit. *Label:* won/lost per quote **and** the delivered
cost and margin of each won job — both free from CRM/quoting history and job costing.
*Horizon:* per quote (minutes–days); the cost label matures when the job is delivered.

**ROI model.** Levers: margin protection (jobs not won at a loss), win rate at a held
margin, estimator capacity and speed-to-quote, self-serve conversion with deposit.
Anchors: **1% price ≈ +8% operating profit** [M] (the UC-14 anchor applies to
realized quote prices); job-shop RFQ/quoting is drawing seed and Series-A funding as a
category [V] (16 demand/10); owners name quoting among their top time drains [C]
(16 demand/03). Sketch: $150M-revenue contractor or fabricator with $120M of quoted,
won work: +1 pt realized margin ≈ $1.2M + win-rate gain on well-priced segments ≈
$0.5M margin + estimator capacity ≈ $0.3M → **≈ $2M/yr** ÷ $0.4M → **E[ROI] ≈ 5×**.

**p(success) = 0.55** (2·3·3·2·3). *p(failure) drivers:* job-costing quality (P1 —
delivered cost must be reconciled to the quote's line structure, and lost quotes
recorded with their price), estimator trust (P4 — the drivers behind each estimate are
the adoption mechanism). The quote writes straight into the CRM, quoting tool or web
flow (P2 = 3); quote-stream champion/challenger plus quoted-vs-actual cost on every
delivered job make the return measurable (P3 = 3). RA× ≈ 2.7.

**Measurement & agent.** Champion/challenger (policy-set vs estimator-set quotes on a
randomized share of the stream, or a holdout keeping the current process) on win rate
and margin; quoted-vs-actual cost on every delivered job is the standing defensibility
check. Agent: predicts cost with an uncertainty band and win probability at a price
(AUT-1); sets quotes inside margin floors and an uncertainty-scaled buffer (AUT-2 below
the value threshold; above it AUT-3); routes out-of-bounds quotes to estimators;
learns the price–win curve from outcomes. Data chain: quotes + win/loss, job costing,
material/labor rates, customer and region; feature-importance from the cost and margin
models is the "what drives cost" report estimators read.

**Industries.** Trades and home services, job shops and fabricators, building-product
distribution, equipment and installation, print and packaging, B2B services with
scoped work — wherever work is quoted per job rather than listed.

**A-condition.** Job costing reconciled to quote lines with ≥2 years of won/lost
history (P1→3, p→0.65, RA×→3.3); at accounts that already meet it the entry scores A at
intake. Evidence: founder description (the module's origin) · 16 demand/03, /10 · 14
pricing #58 (adjacent) · 09 Sales (30).

### UC-27 · Labor demand & shift scheduling *(added 2026-10-09; promotes C-8 → S-15)*

**Skeleton.** Schedules are copied from last week and adjusted by feel: some intervals
are overstaffed, others leave customers waiting, and overtime fills the gaps. *Entity:*
site × interval (15–60 min) × role. *Decision:* the published roster and intraday
adjustments. *Label:* actual demand by interval (transactions, traffic, contacts) and
hours worked — free from POS/WFM/time clock. *Horizon:* weekly roster, intraday.

**ROI model.** Levers: labor cost at held service (labor is 25–35% of sales in the
target operators), overtime avoided, understaffed intervals (lost sales, wait time),
manager hours. Anchors: −300 bps payroll across a 17-unit operator [C] (16 demand/16,
industry/22); ~$10M and +500 bps at a national discount retailer [C — vendor case]
(16 function/06); −6–7% hours and forecast accuracy 87→96% [V — TEI composite]
(16 engineering/18); −4% staff cost at a 7-branch bakery and >$1M/yr at a ground-
handling operator [C] (16 engineering/05); 14 ranks scheduling optimization **#31
(4.65)**; the function-angle reason pass ranks it #2 for return (16 function/24).
Sketch: 60-site operator, $300M revenue, labor 25% = $75M: −1.5% labor cost ≈ $1.1M +
overtime −10% ≈ $0.4M → **≈ $1.5M/yr** ÷ $0.4M → **E[ROI] ≈ 4×**.

**p(success) = 0.65** (3·3·3·3·2). Labels are free; the schedule publishes into the
WFM tool the site manager already approves weekly; site-phased comparison is natural.
P5 = 2: labor law, predictive-scheduling ordinances and works councils make it
regulated-adjacent — **but it allocates hours, not judgments about people** (the C-8
argument that keeps it out of AP-7/UC-15's exposure). RA× ≈ 2.6.

**Measurement & agent.** Phased rollout by site against sites not yet on it (matched
on volume and format); labor % of sales, overtime, understaffed intervals, late
changes. Agent: forecasts interval demand (M-4), builds the roster by optimization
(M-16) inside labor rules as hard constraints, suggests intraday moves to the site
manager (AUT-2 drafts; publication AUT-3 — manager approves). Data chain: POS/traffic
by interval, schedules and punches, availability/skills, labor rules, events.

**Industries.** Multi-unit restaurants and retail, grocery, contact centers,
hospitality, healthcare and senior care, airports and ground handling, warehouses.

**A-condition.** Hourly labor pool ≥ $100M at the account (V1→5, sketch → ≈6×, RA×→3.9 —
account-scored A); the portfolio median stays B. Evidence: 16 function/06, /24, /25 ·
engineering/05, /18 · demand/16 · industry/22 · 14 scheduling #31 (4.65) · 11 §I6 ·
09 HR/People (28), Operations (40). *(Supersedes Band-C entry C-8, §5.)*

### UC-29 · Unbilled work & revenue leakage *(added 2026-10-09 → S-17)*

**Skeleton.** Work is recorded in one system and billed from another: parts used on a
service call, a contracted escalation, an earned accessorial, documented care — each
can fall through the gap, and nobody notices revenue that never appeared. *Entity:*
billable event (work-order line, shipment event, contract term, clinical charge) ×
invoice. *Decision:* add the charge, draft it for review, or leave it; draft a change
order. *Label:* charge billed **and collected** vs reversed or disputed — from AR.
*Horizon:* per job/invoice cycle; retrospective sweeps within contractual back-billing
windows.

**ROI model.** Levers: recovered revenue (pure margin — the cost was already spent),
contract terms enforced, billing accuracy. Anchors: a 100-truck carrier recovering
4.2% of revenue in month one [V — vendor case, carrier unnamed] (16 demand/08);
$80–150k/yr per 50 technicians [V] (16 function/30); ~$800k/yr at a utility [V]
(16 function/20); $11.3M annualized and $9M over two years in hospital charge capture
[C] (16 engineering/11); $15M year one in CDI [V] (16 industry/16); $3.5M potential at
an airport-services operator [C] (16 engineering/11). Sketch: $300M field- or
project-services firm: recover 0.5% of revenue ≈ **$1.5M/yr** ÷ $0.4M → **E[ROI] ≈ 4×**.

**p(success) = 0.39** (2·2·3·2·2). *p(failure) drivers:* fragmented records (P1 — the
work evidence sits in FSM notes, telematics or charts, the price in a contract), the
customer-facing nature of the action (P2/P4 — account owners resist back-billing
customers; added charges are AUT-3), and billing compliance (P5 — in healthcare,
charge capture sits under coding-compliance and false-claims exposure; it must find
*documented* care, never upcode). Measurability is the strength: billed-and-collected
revenue is self-documenting (P3 = 3). RA× ≈ 1.6.

**Measurement & agent.** The collected-revenue ledger, net of reversals and credits;
dispute rate on added charges as the guardrail. Agent: reconciles operational records
to invoices (AUT-1), scores likely missed charges where the match is inexact — parts in
a note but not on the invoice (M-10/M-11), drafts charges and change orders (AUT-2
drafts; customer-facing billing AUT-3), learns which leak patterns collect. Data
chain: FSM/job records and parts, telematics dwell events, contracts and billing
terms, invoices and AR, clinical documentation and charges for providers.

**Industries.** Field and project services (HVAC/MEP, equipment service, contractors),
trucking and 3PL (accessorials), utilities, B2B services under complex contracts,
hospitals and physician groups (charge capture — the pre-claim sibling of UC-19's
denials leg).

**A-condition.** An account where work orders and billing share one FSM/ERP instance
(P1→3, V4→4) and measured collected recovery ≥3× at two reference accounts (V3→3) →
RA× ≈ 3. Evidence: 16 function/20, /29, /30 · engineering/11 · demand/08, /15 ·
industry/16 · 14 price/contract leakage #25 (4.65) · 11 §J1 (leakage pool) · 09
Finance (30). *(Takes UC-24's unbilled-entitlement leg — §UC-24.)*

### UC-30 · Warranty & field-quality early warning *(added 2026-10-09 → S-18)*

**Skeleton.** A field-quality problem appears first as scattered phrases in technician
notes and claims; by the time it shows in monthly totals, months of units have been
built and shipped. *Entity:* emerging issue (claim/note topic) × product population
(model × build period × lot × plant × supplier). *Decision:* open an investigation,
contain lots, charge back a supplier, or start a design fix. *Label:* investigation
outcome (confirmed issue vs noise) and the warranty-cost trajectory of the affected
population — slow, sparse, but recorded by the quality system. *Horizon:* weekly
signal review; detection lead time measured in weeks to months.

**ROI model.** Levers: warranty cost avoided by earlier containment (warranty runs
1–4% of sales at durable-goods makers), supplier recovery, recall-scope reduction,
engineering time. Anchors: detection 174→52 days and $2M saved at an automaker [C]
(16 function/17); service incidents −50% and problems found 4–5 months sooner at a
mid-size appliance maker [C] (16 function/17); claims per vehicle 1.1→0.85 (~€30M) and
−7% warranty cost with a 2-month lead [C] (16 industry/27); −4–6% warranty cost at
truck makers [C] (16 demand/32). Sketch: $800M equipment maker, warranty 2% = $16M:
−8% via earlier containment ≈ $1.3M + supplier recovery ≈ $0.4M → **≈ $1.7M/yr** ÷
$0.4M → **E[ROI] ≈ 4×**.

**p(success) = 0.39** (2·2·2·3·2). *p(failure) drivers:* genealogy joins (P1 — claims
must link to serial, build, lot and supplier), a human-mediated action path (P2 —
investigations, not automated actions), modeled counterfactuals (P3 — warranty
"avoided" is estimated against past-issue curves), and safety-reporting obligations
(P5 — any safety-touching signal goes to a person and the regulatory process). The
weekly quality review is a natural ritual (P4 = 3). RA× ≈ 1.6.

**Measurement & agent.** Days-to-detect vs the account's past issues (matched by
failure class), warranty cost per unit on affected populations, signal precision (share
of investigations confirmed). Agent: clusters claims and notes into topics (M-10),
runs change-point detection per population (M-7), sizes affected volume with survival
curves (M-5), opens investigations with the evidence attached inside an alert budget
(AUT-2 to open; containment and supplier claims AUT-3), learns from investigation
outcomes. Data chain: claims, technician/service notes, serial/build/lot genealogy,
supplier and component data, returned-part analysis.

**Industries.** Appliances and HVAC equipment, vehicles and heavy equipment, industrial
and agricultural machinery, electronics, medical devices (with the regulatory
overlay).

**A-condition.** Serial-level genealogy joined to claims (P1→3) and [C]-grade detection
deltas at ≥2 reference accounts (V3→4) → p→0.46, RA×→2.3; account-scored A where
warranty cost ≥ $30M/yr. Evidence: 16 function/17 · industry/27 · demand/32 · 14
quality inspection #8 family (warranty named in its pool note) · 11 §G family ·
09 Quality Assurance (21).

### UC-31 · Delivery-date promise & proactive delay *(added 2026-10-09 → S-20)*

**Skeleton.** A vague or padded delivery estimate costs sales at checkout; a missed one
costs trust and floods support with "where is my order" (WISMO) contacts. *Entity:*
order (or cart) × fulfillment node × carrier service × destination. *Decision:* the
date promised on the product page and at checkout, and whether to warn the customer
of a delay before it happens. *Label:* actual delivery date — free from carrier scans.
*Horizon:* request-time for the promise; hours for delay alerts.

**ROI model.** Levers: conversion lift (credible dates), support contacts avoided,
retention (promises kept), shipping-mix choice. Anchors: +13% conversion and −16%
WISMO at a specialty retailer, and −47% WISMO at another [V/C] (16 engineering/20,
function/11); promise gap halved at a large online furniture retailer [C] (16
engineering/08); a randomized field trial cutting failed delivery attempts 10% [M] in
the adjacent last-mile loop (16 industry/06); evidence 14 ranks ETA prediction **#26
(4.65)** and order promise **#44 (4.55)**. Sketch: $250M online/omnichannel revenue:
+1% relative conversion ≈ $2.5M revenue × 30% margin ≈ $0.75M + WISMO −15% of 150k
contacts × $5 ≈ $0.1M → **≈ $0.9M/yr** ÷ $0.3M → **E[ROI] ≈ 3×**.

**p(success) = 0.77** (3·3·3·3·3 — labels free, the storefront is the system of action,
A/B testing is native, the e-commerce owner works the funnel continuously, and a
calibrated promise is the consumer-protection posture, not a risk). V1 = 2 at the
portfolio median caps it: the pool exists only where owned digital order revenue is
material. RA× ≈ 2.3.

**Measurement & agent.** A/B test of the predicted date vs the current estimate on
conversion; promise accuracy (share delivered by the promised date) and WISMO per
order alongside. Agent: predicts the delivery distribution per order with quantile
models (M-1/M-17), promises the date it meets at the chosen confidence (AUT-2), sends
proactive delay notices above threshold (AUT-2), monitors carrier drift and peak
regimes. Data chain: orders and fulfillment events, inventory by node, warehouse
cut-offs and load, carrier scans, destinations.

**Industries.** E-commerce and omnichannel retail, B2B webshops and distributors,
furniture/large-item delivery, grocery and meal delivery, parts distribution.

**A-condition.** Owned digital order revenue ≥ $100M (V1→4, sketch → ≈5×, RA×→3.9 —
account-scored A). Evidence: 16 engineering/01, /06, /08, /20 · function/11, /21 ·
industry/06 · 14 ETA #26, order promise #44 · 09 Warehouse/Distribution (24).
*(Promotes the order-promise component §7.1 F placed inside UC-5/UC-6.)*

### UC-32 · Construction estimating & bid/no-bid *(added 2026-10-09 → S-21)*

**Skeleton.** Estimators spend most of their time measuring drawings instead of judging
the job; coordination errors found after award become change orders; the team bids on
work it is unlikely to win. *Entity:* bid opportunity × drawing set × (for awarded
work) project schedule. *Decision:* bid or no-bid; the quantities behind the estimate;
pre-bid RFIs for coordination conflicts; schedule-risk flags. *Label:* won/lost (bid
register), estimator-reviewed takeoffs, delivered cost and margin, delay outcomes —
present but thin per firm. *Horizon:* per bid (days–weeks).

**ROI model.** Levers: estimator capacity (more bids per estimator), win rate (effort on
winnable work), margin on won work (errors caught before bid), schedule risk. Anchors:
takeoff time −65% with 3–5× bids per estimator [V] (16 demand/09); −70–76% takeoff time
in a university study [M-adjacent] and ~14,000 hours saved in a year at a GC [C] (16
engineering/36); $622K and 56 days saved on an $80M project from pre-bid drawing checks
[V] (16 demand/24); schedule-delay forecasting accuracy 48→74% with $1.25M and 20 days
avoided [C] (16 industry/01). Sketch: $250M specialty contractor: +40% bids pursued at
20% win rate on $0.6M jobs at 8% margin ≈ $1.5M + coordination errors avoided ≈ $0.5M
→ **≈ $2M/yr** ÷ $0.5M → **E[ROI] ≈ 4×**.

**p(success) = 0.46** (2·2·2·3·3). *p(failure) drivers:* thin per-firm history for the
win and delay models (P1 — pooled priors across customers are a generalized asset,
kernel D7-3), a human-approved action path (P2), slow and noisy win-rate measurement
(P3). The weekly bid-review meeting is the ritual (P4 = 3); bid decisions are
low-liability (P5 = 3). RA× ≈ 1.8. **Reconciles §7.1 L:** RE/construction scored below
the line on *project-data* fragmentation; this entry runs on the contractor's own
exhaust — bid register, drawings, job cost — which is far less fragmented.

**Measurement & agent.** Phased by estimator or project type against the current
process: hours per takeoff, bids per estimator, win rate, margin on won work; takeoff
accuracy against estimator review as the trust metric. Agent: takes off quantities from
drawing PDFs with every quantity traced to its drawing location (M-13/M-11), flags
cross-discipline conflicts (AUT-2 drafts RFIs), scores win probability and delay risk
(M-1), recommends bid/no-bid (AUT-3 — estimating head decides); pricing is UC-25's job.

**Industries.** General and specialty contractors (MEP, drywall, flooring, roofing,
concrete), building-product distributors with estimating desks, engineering firms
bidding fixed-fee work.

**A-condition.** Bid register with ≥3 years of won/lost and delivered cost, plus
measured takeoff-capacity deltas at two reference accounts (P1→3, V3→3 → RA×≈3).
Evidence: 16 industry/01, /23, /28 · engineering/34, /36, /37 · demand/09, /24, /31 ·
14 bid optimization #113, RE/construction project risk #100 (our scoring is more
bullish because the contractor-side shape is exhaust-native) · 04 none.

### UC-33 · Freight & supplier quote response *(added 2026-10-09 → S-22)*

**Skeleton.** Quote requests and supplier offers arrive as emails and PDFs in every
format; reps retype them, compare offers by hand, and answer slowly, so business goes
to whoever responds first. *Entity:* inbound quote request (broker/3PL sell side) or
supplier offer against an RFQ (buy side). *Decision:* the sell price or buy guidance;
the award or counter. *Label:* quote won/lost, realized margin per load, landed cost
of awards — partly free (TMS/ERP), partly a capture design (lost quotes). *Horizon:*
minutes to hours per request.

**ROI model.** Levers: response speed (win share), margin per load, rep capacity,
landed-cost savings on buy-side awards. Anchors: +21% loads in month one at a
mid-size broker and −95% quote response time [V] (16 engineering/35, industry/06); RFQ
extraction accuracy to 96% at a $4M-revenue firm [C] (16 engineering/34); $60M cost
avoidance from sourcing optimization [V] (16 engineering/35). Sketch: $150M-revenue
broker: +0.5 pt gross margin ≈ $0.75M + volume +5% at constant headcount ≈ $0.75M →
**≈ $1.5M/yr** ÷ $0.35M → **E[ROI] ≈ 4×**.

**p(success) = 0.46** (2·2·2·3·3). *p(failure) drivers:* lost-quote capture (P1),
human-approved send path (P2 — every quote, award and counter is approved), lane-level
holdouts that are noisy at small volume (P3), and market-rate data that may need an
external feed (the network effect favours incumbents with consortium data — named in
the contract). Reps work the inbox daily (P4 = 3); low liability (P5 = 3). RA× ≈ 1.8.

**Measurement & agent.** Holdout of lanes or accounts (or phased by desk) against the
current process: response time, quotes per rep, win rate, margin per load, landed cost.
Agent: extracts each request/offer to structured fields with per-field confidence
(M-11/M-10), predicts buy rate or fair price (M-1 quantile), drafts the quote, award or
counter inside margin floors and counter limits (AUT-2 draft; send AUT-3), learns the
price-to-win curve per lane. Data chain: quote inbox, TMS/ERP history, buy rates and
lanes, supplier quotes, award outcomes.

**Industries.** Freight brokerage and 3PL (sell side); manufacturing, distribution and
construction procurement (buy-side RFQ comparison).

**A-condition.** Quote volume ≥ 50k requests/yr with won/lost captured (P1→3, V1→4 →
RA×≈3, account-scored A). Evidence: 16 engineering/34, /35, /37 · industry/06 ·
demand/09 · 14 procurement spend analytics #53 (adjacent) · 09 Procurement/Supply
Chain (22), Operations/Logistics (40).

### UC-34 · Channel budget allocation — test-calibrated MMM *(added 2026-10-09 → S-23; amends AP-5)*

**Skeleton.** Attribution credits the last touch, so demand-building channels look weak
and harvesting channels look strong; budgets follow those numbers. *Entity:* channel ×
week (× geo). *Decision:* the budget allocation across channels and weeks within
minimums, maximums and change limits — and which channel gets a test before more money
moves. *Label:* weekly sales (aggregate, free) for the model; **geo or holdout test
results** for the truth — a designed data asset. *Horizon:* monthly–quarterly planning;
tests run weeks.

**ROI model.** Levers: media efficiency (same outcomes for less spend, or more for the
same), cost per acquisition, planning confidence. Anchors: −27% cost per lead [C] and
+14% media-driven revenue [V] (16 engineering/09); −12% CAC and −31% CPA [C/V] (16
function/02); +3% sales / +5% profit [C] (16 function/27); platform ROAS overstated by
~33% against a geo test [C] (16 function/02) — the reason test calibration is the
design, not an extra. Feasible for mid-sized advertisers, but needs multiple years of
consistent weekly spend and sales by channel (16 engineering/09, /37). Sketch: $25M media budget: reallocation lifts media-driven contribution
5–8% ≈ **$1.5M/yr** ÷ $0.4M → **E[ROI] ≈ 4×**.

**p(success) = 0.46** (2·2·2·3·3). *p(failure) drivers:* the circularity AP-5 names —
a model of observational spend data validating itself (P3 = 2 *only because* geo and
holdout tests are the measurement and the model's estimates are never billed on
until a test confirms them); history depth and channel-taxonomy hygiene (P1); a
human-made budget change (P2). The quarterly budget cycle is the ritual (P4 = 3);
aggregate data keeps governance light (P5 = 3). RA× ≈ 1.8.

**Measurement & agent.** Geo or audience holdout tests confirm each reallocated
channel's incremental return before any saving is claimed; test results feed back as
priors. Agent: fits the Bayesian MMM with adstock and saturation (M-17 with M-6 causal
discipline), proposes the allocation with uncertainty inside limits (AUT-1 report;
budget moves AUT-3 — marketing and finance approve), designs the next test where the
estimate is too uncertain (AUT-3), keeps the test ledger. Data chain: weekly spend by
channel, sales, promotions and pricing, seasonality and external factors, the test
ledger (shared with UC-23's holdout book and S-3's geo tests).

**Industries.** Consumer brands and DTC, multi-location services, insurance and
banking acquisition marketing, e-commerce, CPG (retailer-mediated — harder).

**A-condition.** Media spend ≥ $50M with standing geo-experiment capacity (V1→4, P3→3 →
RA×≈3, account-scored A) — the same condition as UC-23. Evidence: 16 engineering/05,
/07, /09, /37 · function/02, /27 · 14 attribution & MMM #97 (3.9) · 04 #50 Media Mix
Modeling · 11 §C1 (the circularity warning this design answers) · 09 Marketing (20).

---

## 5. Band C — selective entries

Nine entries, one paragraph each (C-8 was promoted to UC-27 on 2026-10-09; its slug is retired). Band C is not "worse" — it is **account-conditional**:
each entry's risk-adjusted multiple crosses the line only when a named customer
property changes the arithmetic (a V-score or P-driver). Entries carry `C-n` slugs; a
`UC-n` ID is minted the first time an account-level D1 score admits one to delivery.
Band C is scored at intake, per account, against the same rubric.

**C-1 · Personalization & product recommendations.** The external evidence's top slot —
14 ranks it **#1 in both value and feasibility (5.0/5.0)**; ~35% of Amazon revenue
attributed to recs [C — analyst estimate]; Netflix >$1B/yr [C] (11 §A3). Portfolio-
median it still fails D1: the pool concentrates in digital-native funnel owners
(outside the D3 systems-of-record profile), the buy market is mature and good
(build-vs-buy usually resolves buy — 11 §A3), and identity/experimentation
infrastructure dominates the investment denominator. **Admitting condition:** account
with ≥$100M owned digital revenue, first-party identity + experimentation
infrastructure in place (V4→4, P1→3), and no incumbent recsys performing — then
account-scored A and delivered as a UC-11 sibling. (Evidence 11 §A3 · 14 #1 · 04
#61/#18 · 09 Marketing/Sales.)

**C-2 · Market-basket & cross-sell optimization.** 14 ranks it #20 value /
**#2 feasibility**; basket-level POS exhaust makes labels free. Standalone it is a
thin slice of UC-11's action library. **Admitting condition:** retail/CPG account with
basket-grade POS history where cross-sell margin per transaction × volume clears the
Band-A arithmetic — then shipped as a UC-11 action class, not a standalone module.
(Evidence 14 #20 · 11 §A10 · 04 #18/#78.)

**C-3 · Route & delivery optimization.** The best-audited single case in the entire
evidence base — UPS ORION **$300–400M/yr, ~100M miles/yr** [M — INFORMS-audited]
(11 §F3); 14 ranks it **#6 (5.0)**. Refused portfolio-wide because it is OR-solver
territory with a mature buy market (TMS/routing vendors) and the audited economics
require fleet scale ("1 mile/driver/day ≈ $50M/yr" is a UPS-sized fact). **Admitting
condition:** owned fleet large enough that a 1–3% mileage delta clears Band-A
economics **and** no incumbent optimizer — then delivered as an optimization
composition (M-11-class toolbox) with UC-5/UC-8 data already in place. (Evidence 11
§F3 · 14 #6, feasibility #22 · 04 #75 Scalable Route Generation · 09 Ops/Logistics.)

**C-4 · Energy load & generation forecasting.** 14 ranks load forecasting **#12
(5.0)**; the machinery is UC-5's sibling pointed at meters and weather. The pool
exists only inside the energy/utilities vertical (D3 lists it; the portfolio-median
account has no load to forecast). **Admitting condition:** utility/energy account —
where it immediately scores A (labels free, forecasting is the operating system of
the business, governance assistive). (Evidence 14 #12 · 11 §L18 · 09 Ops.)

**C-5 · Telecom network optimization.** Vodafone: outages −26–42%, MTTR −40%, energy
−17% [C]; AT&T >95% diagnostics automated [C] (11 §L16). Operator-scale
infrastructure exhaust; no pool below operator scale. **Admitting condition:** network
operator account (telecom D3 row) — UC-21 machinery at infrastructure scale, scored A
at intake. (Evidence 11 §L16 · 14 #66 · 03 telecom row.)

**C-6 · Clinical documentation (ambient).** The rare gen-AI category with strong
published measurement: 20–50% documentation-burden reductions in peer-reviewed
health-system evaluations [M-heterogeneous]; physicians spend ~2 EHR-hours per care
hour [M] (Sinsky; 11 §L3). The pool is physician time — real only inside a health
system, and the buy market (scribe vendors) is sprinting. **Admitting condition:**
health-system account where UC-19 is already deployed (shared environment and BAA
economics — V4 collapses) and the physician-time pool ≥ $10M/yr. (Evidence 11 §L3 ·
14 #83 · 04 #42.)

**C-7 · Cybersecurity threat detection & triage.** Big pool (breach cost $4.44M avg
[M — IBM]; 14 #17), but the buy market is the densest in enterprise software
(SIEM/EDR/XDR incumbents) and the buyer sits outside our champion map; consortium
threat intel advantages incumbents the way payment-network data does in fraud.
**Admitting condition:** account pull from a platform team we already serve, scoped
to the own-data shapes where incumbents are weak (insider risk / UEBA on the
customer's own behavioral exhaust — the own-data-training thesis applied to
security). (Evidence 11 §H1 · 14 #17 · 01 T3 · 02 rank #5 leg.)

**C-8 · Workforce scheduling optimization — promoted.** Admitted as **UC-27 (labor
demand & shift scheduling, Band B, §4) / S-15** on 2026-10-09, when evidence 16 put it
among the two candidates surfaced by all four research angles. The admitting
condition written here (≥5,000 hourly workers) survives as UC-27's A-condition, restated
as an hourly labor pool ≥ $100M. (Evidence 11 §I6 · 14 #31 · 16 function/06, /24 ·
09 HR/Ops.)

**C-9 · Code & SDLC intelligence.** Externally top-tier (01 T1 #4; 02 rank #4; 03 T1
#8; 11 #10) — and refused portfolio-wide anyway: the copilot market is
hyper-commoditized on rented models, seat economics invert easily (11 §S7 pattern
10), and the measured evidence conflicts (Copilot RCT −55.8% task time vs **METR 2025
RCT −19% for experts** — "the spread is the honest headline", 11 §H3). **Admitting
condition:** the own-environment wedge — an account whose code cannot leave its walls
(regulated/defense-adjacent estates barred from cloud copilots), where own-data
training on the customer's codebase is the product only we ship; priced on measured
throughput/stability (DORA-class), not seats. (Evidence 11 §H3 · 01/02/03 top tiers ·
14 #39.)

**C-10 · Care-gap & readmission risk.** 14 ranks care-gap #34 (4.65) and readmission
#64; CMS HRRP penalties cap at 3% of payments [M]. The models are easy; the value
exists only where an intervention capacity is funded (P2/P4 are the whole game —
readmission programs fail on nurse capacity, not AUC; 11 §L5). **Admitting
condition:** value-based-care contract holder (payer or capitated provider) with a
funded care-management team — then attached to UC-19's environment and scored A.
(Evidence 11 §L5/§L6 · 14 #34/#64 · 04 #55/#67.)

---

## 6. Anti-portfolio — what we refuse, and the argument

Refusals, not deferrals. Every argument below is an ROI/risk/measurability/governance
argument — if the argument changes (new evidence, a changed governance posture, a
different investment shape), the entry is re-scored through §1.3; nothing here is
waiting for anything. Filters travel into sales and intake verbatim.

| # | Excluded | The argument (D1 terms) |
|---|---|---|
| AP-1 | **Generic chatbots / conversational copilots** | P3 → 0 by construction: containment and deflection metrics are activity, not value — "deflection theater" (containment up, resolution and churn worse) is a named failure pattern (11 §S7 #3; Klarna's own 2025 moderation of its AI-first stance is the cautionary arc, 11 §B2). 03's verdict verbatim: "generic chatbots … valuable only when wired to decisions." The routing *decision* problem (UC-16) is in-portfolio; the conversation product is not. |
| AP-2 | **RAG-only / copilot-only engagements** | Selects the anti-customer (D3): a buyer who wants inference over a rented model rejects the own-data-training premise the entire product monetizes (evidence 06 "learning, not inference"; 08 anti-ICP: "wants an LLM copilot / RAG search" = disqualifier). Economically the thinnest measured-P&L category in the evidence (the MIT-NANDA 95%-no-impact pattern concentrates here — 11 §S7 backdrop). Retrieval as a **component** inside measured decision workflows (UC-16 grounding, UC-19 appeals, UC-24 extraction) is in-portfolio; retrieval as the product is not. |
| AP-3 | **Autonomous adverse decisioning** — credit denial, claim denial, benefits determination, employment action, un-gated real-time blocking | P5 → 0: liability and governance blowback cap p(success) regardless of pool. The disaster file is unambiguous and recent: Robodebt royal commission (2023), Dutch Toeslagenaffaire (government fell, 2021), MA algorithmic-denial litigation (2023), Air Canada chatbot liability (2024) (11 §S6/S7 #9); 14's failure synthesis names "over-automation of regulated decisions" as an operating-model risk. This is the AUT-4 boundary as a portfolio filter: agents prepare, document, monitor — humans make adverse decisions. One governance scandal prices at −∞ against a correct-by-construction brand (D9 guardrail: violations = 0). Public-benefits fraud scoring and public case prioritization (14 #118/#105) are the highest-exposure instances and are refused with it. |
| AP-4 | **Content generation as a standalone offer** | P3 ≈ 0 in practice: the prevalence leader with the thinnest measured-outcome base (11 §C2 — "measurement never designed" is this pattern's home; 14 ranks it #73 grid-mid). Brand/claims tail risk adds governance exposure. In-portfolio only as a governed *component* (UC-9 variant drafting behind guardrails, AUT-3). |
| AP-5 | **Attribution / MMM as the oracle product** | Structural measurability failure: "the use case *is* measurement — which is circular" (11 §C1); elasticity and mix conclusions from confounded observational data are failure pattern #5, and 14 agrees (MMM #97, explore-selectively). The *incrementality* discipline (geo-holdouts, designed experiments) ships inside UC-23 — the honest subset — while the MMM-as-truth product is refused. **Amended 2026-10-09 (T-12):** MMM *calibrated by designed tests* is admitted as UC-34 / S-23 — the geo/holdout test is the measurement and the billing basis, the model only allocates between tests, and no saving is claimed until a test confirms it. An MMM whose own fit is offered as proof of return stays refused. |
| AP-6 | **Digital twins, scenario-simulation platforms, M&A screening, strategy-synthesis engines** | The "talked-about > deployed" tier in both compendia (11 §S6; 14 prevalence check: "still mostly piloted … require governance, trust, and senior workflow redesign"; ranks #117/#121/#122). No repeated decision, no natural label, no measurement loop — vanity analytics in D1 terms: V2 low, P3 ≈ 0, unbounded investment. |
| AP-7 | **Hiring / employment screening decisioning** | Bias absorption into the label is intrinsic (Amazon 2018 is the canonical case — 11 §I2); EU AI Act high-risk class + NYC LL144 audit regime put P5 at 0–1 for *decisioning* shapes; quality-of-hire labels take years and are rarely joined (P3 ≤ 1). Distinct from UC-15's segment-level retention analytics, which stays inside the AUT-1 boundary. |
| AP-8 | **Vision-first industrial inspection** | Real value (BMW 95→99% accuracy, >$1M/plant/yr [C] — 11 §G2) but the wrong investment shape for D1: half the customer investment is camera/lighting/hardware engineering, and defect libraries must be *acquired*, not exhausted from systems of record — V4 → 0, P1 → 0/1 for the D3 customer profile. The denominator, not the value, disqualifies it. The tabular quality shape (UC-22) captures the family's exhaust-native ROI; accounts with vision infrastructure already installed re-score through intake. **Amended 2026-10-09 (T-10):** inspection now ships as a capability level of S-19 (UC-22 widened) — chosen where cameras exist or the customer funds them, priced inside UC-22's ROI contract; vision-*first* inspection as the module's entry investment remains refused. |

Two **account-level filters** from the anti-ICP travel with this list (deal filters,
not use-case exclusions): prospects requiring raw data in our cloud (violates the
in-your-environment thesis — evidence 06/08), and AI-tourist innovation labs with no
outcome owner (P4 = 0 ⇒ p(success) → 0 — evidence 08; kernel D3 anti-customer).

---

## 7. Coverage analysis — the scored catalog against the demand space

Two maps: the banded catalog against evidence 11's twelve function families (the
problem-space axis) and against evidence 09's seventeen prior-art categories (the
demand-breadth axis). The goal is honesty about shape: where the portfolio is deep by
scoring, where it is absent by argument, and confirmation that no absence is
unexamined. In v2 every placement traces to D1 arithmetic — never to sequencing.

### 7.1 Against evidence 11's twelve function families

| Family (evidence 11) | Family contents | Portfolio coverage | ROI-grounded rationale |
|---|---|---|---|
| **A. Customer / revenue** (12) | churn, pricing, recsys, lead scoring, CLV, NBA, win prediction, sales forecasting, promo, basket, sentiment, VoC | **Deepest: UC-1, UC-2, UC-9, UC-11 (A) · UC-3, UC-14, UC-25 (B) · C-1, C-2** | The factory's home family: the largest per-account pools with CRM/billing exhaust. Absent by argument: sentiment/VoC standalone (measurability — activity metrics; 14 #84/#108, "efficiency plays" at best), promo effectiveness (causal confusion, 14 #110), win prediction (inside UC-2's scope), sales forecasting (a UC-5 methodology skin on pipeline data — attach, not module). |
| **B. Service & support** (8) | triage, resolution automation, agent assist, intent, proactive care, CC analytics, CSAT, KB retrieval | **UC-16 (B)** | Highest feasibility anywhere (14 gives triage/intent 5.0) but the smallest pool intensity at the D3 median and the most platform-commoditized family. We own the *decision* (routing under measurement); the conversation products are AP-1/AP-2. Resolution drafting lives inside UC-16 as an AUT-3 action, priced on measured handle-time, not deflection. |
| **C. Marketing** (7) | MMM, content gen, segmentation, response, SEO, creative, send-time | **UC-9 (A) · UC-23, UC-34 (B)** | Present exactly where measurement is designable (holdouts native to email/campaigns). MMM-as-oracle is AP-5 (circular measurement) — test-calibrated MMM is UC-34; content generation standalone is AP-4 (thinnest P&L evidence); segmentation/send-time are components inside UC-9/UC-23, not modules. |
| **D. Finance & accounting** (10) | invoice/AP, collections, credit, cash forecasting, exceptions, expense fraud, JE anomaly, close, working capital, FP&A | **UC-4, UC-13, UC-28 (A) · UC-17, UC-20, UC-29 (B)** | The highest score-density family after A: labels free from ledgers, CFO-legible measurement, working-capital returns the kernel D1 names explicitly. Absent: close automation and JE anomaly (14 #89/#106 — efficiency plays with thin pools; JE anomaly rides UC-7's machinery if an account pulls it), FP&A scenario modeling (AP-6-adjacent, no label). |
| **E. Fraud, risk & compliance** (10) | transaction fraud, AML, claims fraud, ATO, KYC, underwriting, model risk, sanctions, comms surveillance, clause risk | **UC-10 (A); UC-12's SIU leg; UC-13 (A)** | The biggest single pools in the evidence (fraud #1 in 11; #3 in 14) — engaged in the decisioning-under-governance shape, with AUT-4/AP-3 as the hard boundary. Absent: KYC/sanctions screening (mandated list-matching, vendor-saturated, no learning edge on customer data — 14 #90/#91 explore-selectively), comms surveillance (governance exposure vs thin measurable return), underwriting risk (a UC-12/UC-13 composition for insurance accounts at intake). |
| **F. Supply chain & logistics** (12) | demand forecasting, inventory, routing, supply planning, spend analytics, supplier risk, leakage, ETA, fleet, slotting, order promise, S&OP | **UC-5, UC-6, UC-26 (A) · UC-18, UC-31, UC-33 (B) · C-3** | Second-deepest by scoring: the $1.77T distortion pool with daily labels. Order promise and ETA were components inside UC-5/UC-6 and are now UC-31 (2026-10-09); field-service dispatch is UC-26 (C-3 stays the OR-only routing cousin). Absent: slotting (14 #27), spend analytics (a reporting shape whose action path is procurement negotiation — folds into UC-18/UC-24), S&OP support (meeting software, no label — 14 #102). |
| **G. Manufacturing & industrial** (8) | PdM, quality inspection, yield, fleet failure, scrap, energy, scheduling, digital twin | **UC-8 (A) · UC-22, UC-30 (B)** | Engaged where exhaust is tabular (sensors + work orders + MES + claims). Vision-first inspection is AP-8 (investment shape) — inspection ships as a capability level of UC-22/S-19 where cameras exist; digital twins AP-6 (no measurement loop); energy optimization and production scheduling are UC-22/C-8-adjacent compositions available at intake (14 #46/#61). |
| **H. IT, engineering & security** (12) | threat detection, AIOps, code gen, RCA, alert correlation, capacity, test gen, release risk, log anomaly, phishing, vuln, UEBA | **UC-21 (B) · C-7, C-9** | Real pools, wrong buyer at the portfolio median (VP-infra/SRE/CISO sit outside the D3 champion map) and the densest vendor fields in software. Presence is demand-led (attach) or wedge-shaped (own-environment code estates, own-data UEBA). Everything else in the family reuses UC-7/UC-21 machinery when pulled. |
| **I. HR / people** (8) | attrition, recruiting, workforce planning, matching, skills, scheduling, engagement, mobility | **UC-15, UC-27 (B)** | Deliberately light against demand breadth (09 shows 28 HR apps): employment decisions carry the catalog's worst governance exposure per dollar (EU AI Act high-risk; LL144). Scheduling (allocative, not judgmental) is the UC-27 exception (promoted from C-8); recruiting/matching decisioning is AP-7. |
| **J. Legal & document-heavy** (6) | contract review, doc classification, e-discovery, obligations, reg-change, summarization | **UC-17, UC-24 (B)** | Engaged where extraction feeds a measured commercial action (touchless rate; recovered leakage). Absent: e-discovery (mature TAR vendor market, matter-episodic — no compounding agent), reg-change monitoring (14 #120 — no owned action path at the median account). |
| **K. Executive / cross-functional** (6) | KPI anomaly, driver analysis, scenario planning, reporting automation, M&A screening, research synthesis | **UC-7 (A)** | The explanation surface is product identity — and the only family member with a designable measurement loop (the recovered-loss ledger). Scenario/M&A/synthesis are AP-6 (no repeated decision, no label); reporting automation rides inside UC-7's narrative layer. |
| **L. Industry-specific** (25) | healthcare (6), banking (3), insurance (3), retail/CPG (3), telecom (2), energy (3), public (3), RE/construction (2) | **UC-19 (B) · UC-12 (A) · banking collections inside UC-4 · C-4, C-5, C-6, C-10** | Industry entries score through the same rubric with industry-conditional pools — most live in Band C by construction (the pool exists only inside the vertical). Public sector is refused with AP-3 (the highest governance stakes in the evidence — Robodebt/Toeslagenaffaire); RE/construction *project* risk scores below the line on data fragmentation (14 #100/#113); the contractor-side estimating shape, which runs on the contractor's own bid register and drawings, is UC-32 (B). |

**Shape summary.** The scored catalog is deep exactly where the three D1 factors
coincide — pools measured in % of revenue (V1), labels free from operations (P1), and
native systems of action (P2): families A, D, F. It is present-with-boundaries in
E/G/L (the governance and investment-shape edges are priced, not feared), thin by
argument in B/C/H/I/J/K, and every absence above carries its D1 reason inline. The
structural echo from the evidence: "the tabular-with-natural-labels + native-action-
path quadrant is systematically the most attackable" (11 §S3) — that quadrant is
this portfolio's center of mass, with the customer's agent as the operator that keeps
each entry's measurement loop (and therefore its ROI claim) alive.

### 7.2 Against evidence 09's seventeen prior-art categories

Evidence 09 (the 400-app prior-art catalog) is a *demand-breadth* signal — what
business users actually asked analytics surfaces for — not a value ranking. Mapping
the banded portfolio onto its category weights:

| 09 category (apps) | Portfolio touch | Note |
|---|---|---|
| Operations / Logistics (40) | UC-5, UC-6, UC-18, UC-26, UC-33, C-3 | Largest demand category → second-deepest scored family. Aligned. |
| Finance (30) | UC-4, UC-13, UC-17, UC-20, UC-24, UC-28, UC-29 | Aligned — seven modules touch the joint-2nd demand category; the prior-art apps (AR Aging, DSO Trend, 13-week Cash Flow, Contract Escalation Monitor) are verbatim previews of the module surfaces. |
| Sales (30) | UC-2, UC-9, UC-3, UC-14, UC-25, UC-32 | Aligned. |
| Compliance / Regulatory (28) | UC-10, UC-13 artifacts, UC-19 | Demand exists and is served through the governed-decisioning modules — governance surfaces are product, not overhead. |
| HR / People (28) | UC-15, UC-27 | **Deliberate under-coverage** vs demand weight: governance exposure per dollar (AP-7 argument), not lack of demand. |
| Customer Success / Acct Mgmt (26) | UC-1, UC-3, UC-11 | Aligned — the anchor lives here (Churn Risk Monitor is prior-art app #1 of this shape). |
| IT / Engineering (26) | UC-21, C-7, C-9 | Deliberate under-coverage: buyer map + vendor density (§7.1 H). |
| Warehouse / Distribution (24) | UC-6, UC-31 | Aligned. |
| Fleet Management (23) | UC-8, UC-5/6, UC-10 (fuel-card audit), UC-26 | Aligned — a whole prior-art category previews the fleet-shaped UC-8 scope. |
| Executive / Leadership (22) | UC-7 | Aligned — the exec surface. |
| Procurement / Supply Chain (22) | UC-18, UC-24, UC-28 (buy-side recovery), UC-33, UC-6 | Aligned. |
| Quality Assurance (21) | UC-22, UC-30 | Aligned; vision as a capability level of UC-22 where cameras exist (AP-8 amended). |
| Marketing (20) | UC-9, UC-23, UC-34 | Aligned; test-calibrated MMM admitted as UC-34, MMM-as-oracle and content absences argued (AP-4/AP-5). |
| Cross-Functional / Special (17) | UC-7, UC-17 | The anomaly/driver + document-pack shapes are exactly these apps. |
| Clinical and Lab Services (16) | UC-19, C-6, C-10 | Healthcare-conditional entries — pool exists inside the vertical. |
| Data and Analytics (15) | UC-7 + the platform itself | Zetta *is* this category's product (Model Accuracy Tracker and Entity Resolution Audit are platform surfaces, not modules). |
| Risk and Insurance (12) | UC-12, UC-10, UC-13 | Aligned. |

Breadth check: the 34 banded use cases + 9 Band-C entries touch **17 of 17**
prior-art categories; the two under-covered relative to demand weight (HR,
IT/Engineering) are under-covered **on argument**, recorded above. Demand breadth is
not this portfolio's constraint; risk-adjusted ROI concentration is — by design.

---

## 8. Demand-evidence table

The banded catalog × the external evidence. Columns: evidence 01 tier (16 use cases,
3 tiers) · evidence 02 rank of 13 (weighted score) · evidence 03 tier · evidence 04
accelerator presence among the 93 · evidence 14 value rank of 124 (score) · evidence
11 value tier (rank). "—" = not tiered/ranked standalone in that source.

| UC | Use case | 01 | 02 | 03 | 04 | 14 | 11 |
|---|---|---|---|---|---|---|---|
| UC-1 | Churn & retention | T2 #9 | #2 (4.44) | **T1 #1** | **5** (#33/#60/#77/#87/#88) | #13 (4.8) | T1 #6 |
| UC-2 | Lead & opp. scoring | T2 | #3 (4.25) | — (industry rows) | 1 (#66) | #51 (4.45) | T3 [C] |
| UC-4 | Collections | T3 (family) | #6 (3.94) | banking row | **0 — whitespace** | **#2 (5.0)** | T2 #20 [T/V] |
| UC-5 | Demand forecasting | **T1 #2** | #7 (3.87) | **T1 #4** | 3 (#21/#91/#93) | #4 (5.0) | T1 #3 |
| UC-6 | Inventory optimization | **T1 #2** (bundled) | #7 (3.87) | **T1 #4** | 4 (#56/#57/#79/#86) | #5 (5.0) | T1 #3 (joint) |
| UC-7 | KPI anomaly + drivers | — | — | T3 warning | 0 (#58 cousin) | #55 (4.45) / #112 | T3 [T] |
| UC-8 | Predictive maintenance | T2 | #11 (3.65) | T2 | **0 — whitespace** | #7 (5.0) | T1 #8 |
| UC-9 | Automated outbound | components | components | components | components (#18/#66/#78) | components (#69/#76) | components T4 |
| UC-10 | Fraud & fin-crime decisioning | **T1 #5** | #5 (4.19) + #9 (3.78) | **T1 #5** | 3 (#3/#30/#38) | **#3 (5.0)** / AML #82 | **T1 #1** / AML #14 |
| UC-11 | Next-best-action | **T1 #1** | #2 (4.44) | **T1 #1–2** | 1 (#55) | #36 (4.6) | T3 [V] |
| UC-12 | Claims triage | later-tier note | #12 (3.43) | insurance row | 3 (#11/#35/#84) | **#11 (5.0)** | T2 #25 |
| UC-13 | Credit-risk decisioning | T1 #5 (family) | #5 leg | **T1 #5** | 2 (#14/#52) | #14 (4.8) | **T1 #5** [M] |
| UC-3 | Customer lifetime value | — | — | inside churn | 3 (#17/#78/#87) | #19 (4.75) | T4 |
| UC-14 | Pricing optimization | T2 | #3 leg | **T1 #3** | 1 (#73) | #58 (4.35) | **T1 #2** |
| UC-15 | Employee attrition | T3 | #13 (3.14) | T2 | 0 | #103 (3.8) | T3 |
| UC-16 | Ticket triage | **T1 #3** (family) | #1 leg (4.62) | T2 (family) | 3 (#44/#46/#47) | #21 (4.65) | T2 #19 |
| UC-17 | Document/AP automation | T2 | #6 leg | T2 (finance) | 4 (#6/#42/#47/#52) | #24 (4.65) | T2 #13 |
| UC-18 | Supplier risk | T3 (procurement) | #10 (3.72) | — | 0 (#27 adj.) | #98 (3.9) | T3 |
| UC-19 | Healthcare denials/no-show | — | #8 (3.83) | T2 | 3+ (#35/#36/#51 + HLS block) | **#9 (5.0)** / #33 | T2 #11 |
| UC-20 | Cash-flow forecasting | T3 (finance close) | #6 leg | T2 (finance) | 0 | #41 (4.55) | T3 |
| UC-21 | AIOps | T3 (cyber family) | #4 leg (4.24) | **T1 #6** | 0 | #16 (4.8) | T3 |
| UC-22 | Quality/yield drivers | T3 (yield) | — | industry row | 2 (#58/#65) | #28/#60 | T2 #15/#17 |
| UC-23 | Campaign optimization | T1 #1 (family leg) | #3 leg | T1 #2 (family) | 3 (#50/#54/#74) | #76 (4.2) | T3 [T] |
| UC-24 | Contract intelligence | T2 (doc intel) | — | T3 (unless wired) | 1 (#52 adj.) | #18 (4.8) | T3 (J1) |

**Convergence read.** Externally unanimous: UC-5, UC-6, UC-10, UC-13 (top tier in
essentially every source). Unanimous-with-one-dissent: UC-1 (01's demotion is a
composition argument UC-11 absorbs), UC-12, UC-19. External-mid/portfolio-strategic:
UC-2 (reuse economics), UC-4 (mechanism+feasibility unanimous; published-proof
density is the only dissent — closed by holdout-first delivery), UC-7 (product
identity + self-liftable prerequisite). Strategic with recorded tension: UC-9 (no
external composite ranking — T-5), UC-11 (external T1 as a *family*, T3 as a
standalone program — resolved by attach-only design). The portfolio is
**evidence-led at its core and strategy-led at its edges, with every strategic
override written down and priced** — which is what D1 discipline means.

**Competitive-packaging note (evidence 04).** Databricks packages five accelerators
against UC-1 and seven against UC-5/UC-6 — validating demand where we are deepest —
while **UC-4 (collections), UC-7 (business-KPI anomaly), and UC-8 (PdM proper) have
no dedicated accelerator among the 93**: the three whitespace slots where a deployed,
governed, agent-operated module with an ROI contract faces the least packaged
competition. Snowflake's nine industry solutions (evidence 05) frame verticals, not
use-case modules — orthogonal packaging, not a collision.

### 8.1 Demand evidence for the 2026-10-09 additions

Evidence 01–03 and 11 were not re-read for these entries; the columns that matter are
evidence 16's four research angles (D demand · E engineering · I industry · F
function — the angle letters and row ids are those of
[`09-new-solution-research.md`](09-new-solution-research.md)), the research's own tier,
evidence 14's value rank, and evidence 04's accelerators.

| UC | Use case | 16 angles (rows) | 09 tier | 14 value rank | 04 |
|---|---|---|---|---|---|
| UC-25 | Quote pricing & margin protection | D (job-shop quoting, "seen") | — (founder-originated) | pricing #58 (adjacent) | 0 |
| UC-26 | Field-service dispatch & first-time fix | **D·E·I·F** (D2, E5, I9, F27/F28) | **T1 #1** | telecom field-service dispatch #35 (4.65) | 0 (#75 route generation adjacent) |
| UC-27 | Labor demand & shift scheduling | **D·E·I·F** (D6, E4, I24, F15) | **T1 #2** | scheduling #31 (4.65) | 0 |
| UC-28 | Payables recovery audit | D·E·F (D4, E2/E3, F3/F4/F5) | **T1 #3** | price/contract leakage #25 (4.65) | 0 — whitespace |
| UC-29 | Unbilled work & revenue leakage | D·E·I·F as variants (D5, E18/E19, I18, F37) | **T1 #4** | price/contract leakage #25 (shared) | 0 |
| UC-30 | Warranty & field-quality early warning | D·I·F (D22, I8, F31) | **T1 #5** | inside quality inspection #8 | 0 |
| UC-22 (widened) | Quality, scrap, yield & process optimization | D·E·I (D21, E20/E39, I7) | **T1 #6** | quality inspection #8 · scrap #28 · yield #60 | 2 (#58/#65) |
| UC-31 | Delivery-date promise & proactive delay | E·F·I (E7, F21, I12/I13) | **T1 #7** | ETA #26 (4.65) · order promise #44 (4.55) | 0 |
| UC-32 | Construction estimating & bid/no-bid | D·E·I (D7/D8, E24, I3/I4/I6) | **T1 #9** | bid optimization #113 · RE/construction risk #100 | 0 |
| UC-33 | Freight & supplier quote response | D·E·I (E10/E11, I10) | **T1 #10** | procurement spend analytics #53 (adjacent) | 0 |
| UC-34 | Channel budget allocation (test-calibrated MMM) | E·F (E30, F10/F11) | T2 | attribution & MMM #97 (3.9) | 1 (#50 Media Mix Modeling) |

**Read.** The research angles agree more than evidence 14 does: three of the four
all-angle or three-angle candidates (UC-26, UC-27, UC-28) sit mid-table in 14's value
ranking, because 14 scores pool magnitude and the research scored what non-tech
mid-market buyers actually pay for. Evidence 04's near-total absence repeats the
whitespace read of §8 — the operational and reconcile-and-recover shapes are not
packaged by the platform vendors.

---

## Appendix A — Tensions for kernel review

Per kernel protocol: elaborations never contradict; genuine tensions are recorded
here and resolve in the kernel first. The kernel text stands throughout this document.

**T-1 · UC-6 (inventory & replenishment optimization) added to Band A.** Kernel D4's
named likely set omits it, but it is the single most unanimous entry in the external
evidence (01 T1 #2 bundled, 03 T1 #4, 14 #5 at 5.0/5.0, 11 T1 #3 joint, four
Databricks accelerators) and shares UC-5's pool and data plan — the forecast's action
half. *Ask:* add UC-6 to the D4 Band-A list.

**T-2 · UC-13 (credit-risk decisioning) added to Band A.** Not in the kernel's named
set. The case: the best-measured return delta in the evidence base (Upstart/CFPB
[M]), the most measurement-mature domain (champion/challenger native — the D8 pricing
instrument pre-exists), and a D3 argument that regulated-decision governance is where
our primitives are differentiating. *Ask:* ratify the addition and confirm the AUT-4
boundary (recommendations and envelope-approvals in scope; autonomous adverse
decisions never — AP-3).

**T-3 · UC-3 (CLV) demoted to Band B as a composition layer.** v1 carried CLV in its
top tier; the prevalence evidence is unambiguous ("computed often, decisioned on
rarely" — 11 §S6) and standalone it scores below every band (p ≈ 0.26 on
actionability/measurability). As the value-weighting layer inside UC-1/UC-2/UC-11 it
earns Band B honestly. *Ask:* bless the composition scoping — S-3 ships as the
value-weighting layer (possibly an upgrade SKU), and D8 prices it as attach.

**T-4 · The AP-3 boundary needs kernel language for UC-10/UC-12/UC-13.** Kernel D4's
anti-portfolio excludes "autonomous high-stakes decisions without human gates" while
naming fraud & financial-crime *decisioning* and claims *triage* in Band A. This
document resolves the apparent tension with the autonomy classes (§1.4):
reversible/capped decisions autonomous-under-audit (AUT-2), committing actions
approval-gated (AUT-3), adverse decisions never autonomous (AUT-4). *Ask:* adopt the
AUT-1…AUT-4 classes into the kernel as the D4/D6 boundary vocabulary (also answers
kernel open question 5's "which action classes default where").

**T-5 · UC-9 (automated outbound) scores below the Band-A line.** RA× ≈ 2.2 vs the
3× line; its admission ticket is internal (One Orama catalog #2 — evidence 07), and
no external source ranks the composite. *Ask:* either (a) hold Band A and commission
the evidence: one full internally-measured cycle (Orama operating Orama's outbound
with suppressed-control holdouts), captured as a new evidence item and re-scored —
the portfolio's only evidence-free admission becomes evidence-generating at near-zero
cost; or (b) re-band to B with "measured internal cycle ≥3× RA" as the A-condition.
CPO recommendation: (a), with success-linked pricing as the default either way.

**T-6 · UC-11's ROI attribution crosses module boundaries.** NBA's return is measured
through control cells that sit *inside* UC-1/UC-9/UC-23 treatment flows; when the
arbitration layer lifts the whole book, which module's ROI contract books the lift?
This is a D8 mechanics question (attach pricing on a shared measurement substrate).
*Ask:* CFO to specify in 06 — proposed default: the arbitration layer books only the
incremental lift over the constituent modules' own control readouts.

**T-7 · The §1.3 rubric constants are proposals.** The f-table (3→0.95, 2→0.80,
1→0.60, 0→0.30), the multiplicative form, the ≥80%-of-modeled-return success
definition, and the band thresholds (A ≥ 3×, B ≥ 1.5×) answer kernel open question 3
but are uncalibrated priors. *Ask:* kernel adopt them explicitly as v0 constants with
the §1.3.3 calibration loop (CDO ledger / CPO f-table / kernel-visible edits) as the
standing revision mechanism, so pricing (D8) and portfolio metrics (D9) consume one
authoritative table.

**T-8 · UC-19's band is a portfolio-mix artifact.** Healthcare denials scores A-grade
at any health-system account (RA× ≈ 2.7 at the portfolio median only because the
median target account isn't a health system). Whether the *portfolio* median should
carry more healthcare weight is a D3 industry-mix question with large ROI pools on
the table ($19.7B denials-fighting spend [M]). *Ask:* CMO/CRO to re-score the D3
industry map with UC-19/C-6/C-10 pools explicit; this document's banding follows
whatever mix D3 fixes.

**T-9 · UC/S numbering decouples (2026-10-09).** The kernel's §2 records the extended
Band-A ids up to UC-13 and says Band-B/C ids are assigned here; the eleven modules
added on 2026-10-09 were numbered S-13…S-23 to match the public solution set, while
UC-13…UC-24 were already taken. The new use cases take UC-25…UC-34 (the next free
ids), and S-19 pairs with the existing UC-22. So S-n = UC-n holds only for n ≤ 12, and
UC-13…UC-21, UC-23 and UC-24 have no S-n of their own. *Ask:* kernel §2 to state that
the UC and S registries are independent and append-only, with the pairing of record in
doc 04 §3's UC column.

**T-10 · UC-22 widened instead of a duplicate use case; AP-8 amended.** S-19 (Scrap,
Yield & Process Optimization, incl. visual inspection) answers exactly UC-22's
problem, so the vocabulary's use case ≈ solution rule pairs it with UC-22 rather than
minting a twin. Its inspection leg crosses AP-8; the amendment keeps the refusal of
vision-*first* investment and admits inspection as a capability level where cameras
exist or the customer funds them. *Ask:* ratify the scope change and the AP-8
amendment; confirm the median score keeps pricing the tabular shape only.

**T-11 · Two Band-A additions and one Band-C promotion.** UC-26 (field-service
dispatch & first-time fix) and UC-28 (payables recovery audit) clear the 3× line on
the rubric; neither is in kernel D4's named Band-A list. C-8 is promoted to UC-27
(Band B). *Ask:* ratify UC-26 and UC-28 in Band A (as T-1/T-2 did for UC-6/UC-13) and
add "field-service dispatch" and "recovery audit" to D4's named examples.

**T-12 · AP-5 amended for test-calibrated MMM (UC-34 / S-23).** AP-5 refused MMM as
the oracle product on circular-measurement grounds. UC-34 admits only the shape that
breaks the circle: designed geo/holdout tests are the measurement and the billing
basis; the model allocates between tests and claims nothing a test has not confirmed.
*Ask:* confirm the amendment, and that D8 never prices S-23 on model-estimated
returns — only on test-confirmed ones.

---

*End of use-case portfolio v2. Kernel D4/D1 elaborated; the p(success) rubric +
calibration proposal (§1.3) answers kernel open question 3; the autonomy classes
(§1.4) propose the kernel-Q5 defaults; tensions T-1…T-12 await kernel review. Sibling
elaborations: methodology toolbox in
[`03-methodology-portfolio.md`](03-methodology-portfolio.md), module specifications
with ROI contracts in [`04-solutions-catalog.md`](04-solutions-catalog.md), customers
and industry pools in [`05-industries-and-gtm.md`](05-industries-and-gtm.md),
ROI-based pricing mechanics in [`06-financial-plan.md`](06-financial-plan.md), the
p(success) factor model at portfolio scale in
[`07-roi-risk-and-operating-model.md`](07-roi-risk-and-operating-model.md), and the
data supply chains that train every module's agent in
[`08-data-strategy.md`](08-data-strategy.md).*
