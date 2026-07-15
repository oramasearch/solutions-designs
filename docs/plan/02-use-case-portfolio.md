# Use-case portfolio — the demand map (D3 elaborated)

> **Status:** Draft v1 — 2026-07-15 · **Author:** CPO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits pricing and partner detail from evidence 07/08.
>
> **Kernel-binding.** This document elaborates the [strategy kernel](00-strategy-kernel.md)
> **D3 (use-case tiers)** and the use-case catalog leg of **D1 (portfolio architecture)**.
> The kernel's Tier-1 table (UC-1…UC-9), its T2/T3 lists, its anti-portfolio, and its
> selection criteria are **authoritative**; nothing below overrides them. Where the
> evidence surfaced a genuine tension with a kernel decision, it is recorded in
> [Appendix A — Tensions for kernel review](#appendix-a--tensions-for-kernel-review)
> and is resolved in the kernel first. All claims cite evidence as **(evidence NN)**,
> referring to [`../evidence/`](../evidence/). Evidence-quality flags follow the item-11
> convention: **[M]** measured/audited · **[C]** company/consultant-reported ·
> **[V]** vendor claims · **[T]** thin/qualitative.

---

## 1. Portfolio overview

### 1.1 What this catalog is

Per [`../vocabulary.md`](../vocabulary.md), a **use case is the problem** — a generic,
recurring enterprise decision problem stated independently of any way of solving it.
This catalog is the **demand map** of the solution factory (kernel §1): the tiered set
of problems Orama Zetta pursues, the explicit list of problems it refuses, and the
process by which new problems enter. Each Tier-1 use case pairs ~1:1 with a solution
(`S-n`, specified in [`04-solutions-catalog.md`](04-solutions-catalog.md)) built from
the methodology waves (`M-n`, [`03-methodology-portfolio.md`](03-methodology-portfolio.md)).

The structural fact the whole plan rests on shows up immediately in this catalog:
**124 use cases in our internal compendium (evidence 11), ~140 in the external one
(evidence 14), 400 prior-art demand instances (evidence 09) — and nearly all of them
reduce to one skeleton**: an *entity*, a repeated *decision* about it, a *label* that
defines the right answer, and a *horizon* over which the decision matters (evidence 11,
executive orientation). That is why nine launch use cases and eleven methodologies can
credibly address a demand space this wide.

### 1.2 The tier structure (kernel D3, restated)

| Tier | Meaning | Contents | Commercial posture |
|---|---|---|---|
| **Tier 1** | Launch portfolio — pursue now | **UC-1…UC-9** (kernel table, fixed) | Priced modules on Enterprise (kernel D6); design-partner scope |
| **Tier 2** | Year 1–2, each behind an explicit **gate** (governance/engine maturity) | 8 use cases (§3) | Roadmap commitments only after the gate is credibly scheduled |
| **Tier 3** | Later; each behind a **qualifying condition** | 6 use cases (§4) | Not roadmapped; tracked in the catalog for intake re-scoring |
| **Anti-portfolio** | Explicitly refused | 5 exclusions (§5) | Disqualifiers in sales and intake; revisited only by kernel edit |

**ID scheme.** `UC-n` IDs are fixed and aligned with the wtm ORAMA-ZETTA blueprint,
where **UC-1 = churn** already exists as the built exemplar (kernel §2). UC-2…UC-9 are
assigned by the kernel D3 table and are reserved. **Tier-2 and Tier-3 entries do not
carry UC-n IDs yet**; they carry provisional catalog slugs (`T2-n`, `T3-n`) and receive
the next free `UC-n` only at admission through the intake process (§6) — this keeps the
blueprint, the GitHub issue keys, and this catalog from churning on speculative entries.

### 1.3 Selection criteria (kernel D3, restated as the working rubric)

Every tiering decision below scores the same seven criteria; §6.3 turns them into the
reusable intake scorecard.

1. **Economic pool** — the dollars the decision governs (revenue, margin, losses,
   working capital, labor), evidence-cited with quality flags.
2. **Decision frequency** — how often the decision repeats; value compounds with
   frequency (evidence 01/02/03, unanimous).
3. **Closed-loop actionability** — a real system of action exists to execute the
   decision; "a score nobody acts on" is the #1 failure pattern (evidence 11 §S7;
   evidence 03).
4. **Data availability, tabular-first** — the data exhaust already exists in systems
   of record, with labels generated as a by-product of operations (evidence 11 §S5).
5. **Measurability** — a hard operating KPI already tracks the outcome; impact provable
   by holdout/A-B or clean before/after (evidence 02's scoring model; evidence 12 §S6).
6. **Governance fit — low-liability first** — assistive before automated, shadow
   production before action, regulated-decision use cases only behind gates
   (evidence 08 design-partner research; kernel D7.5, D9.3).
7. **Engine feasibility today** — runnable on the current wave's engine capability
   (kernel D2/D7.3 co-sequencing).

The three external tierings converge on the same shape: item 01's seven traits (pool,
frequency, closed loop, action layer, data exhaust, measurable ROI, platform
reusability), item 02's shared-primitives framing, and item 03's six-dimension rubric
(pool, frequency/scale, actionability, data availability, incrementality, feasibility)
are all restatements of this list (evidence 01, 02, 03). Item 14 weights its value score
35% pool / 25% frequency / 20% actionability-data / 20% measurability (evidence 14) —
again the same criteria. The kernel adds the two Zetta-specific criteria (6, 7) that no
external ranking carries: **governance fit** and **engine co-sequencing**. Those two are
why our tiering is *not* simply the external value ranking replayed — see §8 and
Appendix A for every place we deviate and why.

### 1.4 Portfolio at a glance

| UC | Use case | Methodology (D2) | Wave | 11 value tier | 14 value rank | Primary evidence anchor |
|---|---|---|---|---|---|---|
| UC-1 | Churn prediction & retention *(anchor — Motive)* | M-1 (+M-6, +M-7 later) | W1 | T1 (#6) | #13 (4.8) | 5-pt retention → +25–95% profit [M] (Bain/HBR; evidence 11 §A1, 14) |
| UC-2 | Lead & opportunity scoring | M-1 | W1 | T3 [C] | #51 (4.45) | +4–8 pts return-on-sales vs control [M/C] (McKinsey; evidence 11 §A4) |
| UC-3 | Customer lifetime value | M-1 | W1 | T4 | #19 (4.75) | Composition layer for UC-1/UC-2 (kernel D3); LTV:CAC discipline (evidence 11 §A5) |
| UC-4 | Collections prioritization | M-1 | W1 | T2 (#20) [T/V] | **#2 (5.0)** | $2.7M cash per DSO day per $1B revenue (arithmetic; evidence 11 §D2); €1.56T excess working capital [C] (PwC via evidence 14) |
| UC-5 | Demand forecasting | M-4 | W2 | T1 (#3) | #4 (5.0) | $1.77T inventory-distortion pool [M-survey] (IHL 2023; evidence 11 §F1, 14) |
| UC-6 | Inventory / replenishment support (assistive) | M-4 (+M-11 later) | W2 | T1 (#3, joint) | #5 (5.0) | Inventory −20–35% in adopter cohorts [C] (McKinsey; evidence 11 §F2) |
| UC-7 | KPI anomaly detection & driver analysis | M-1/M-5 | W1–W2 | T3 [T] | grid: prioritize-now | Mechanism-strong, evidence-thin — flagged honestly (evidence 11 §K1/K2) |
| UC-8 | Predictive maintenance (assistive) | M-1/M-5 (+M-6) | W1–W2 | T1 (#8) | #7 (5.0) | ~$864B–$1.4T FG500 downtime pool [C-modeled] (Siemens/Senseye; evidence 11 §G1, 14) |
| UC-9 | Automated email outbound | M-1+M-3 | W1 | components T4 | components mid | One Orama catalog **#2** (evidence 07) — internal priority, not external ranking |

Reading note on the two ranking columns: they measure *standalone expected value for a
typical enterprise*, not fit-to-Zetta. UC-2, UC-3, UC-7 and UC-9 rank modestly there
and are in our Tier 1 anyway — in every case because of a criterion the external
rankings don't score: pipeline reuse with UC-1 (UC-2, UC-3), the exec surface + Zetta's
own semantic-layer remedy (UC-7), or an internal One Orama commitment (UC-9). Each of
those judgments is examined in its brief and, where genuinely tense, sent to Appendix A.

---

## 2. Tier 1 — full product briefs (UC-1…UC-9)

Format per brief: problem → decision framing → frequency & pool → data exhaust &
connectors → actions & systems of action → KPIs & proof → industry variants across the
kernel's Tier-1a (FS/banking), 1b (insurance), 1c (operational account) beachheads →
methodology mapping and module staging → evidence cross-references → open product
questions. The correctness adaptations and business wiring that turn each of these into
its S-n module live in [`04-solutions-catalog.md`](04-solutions-catalog.md); this
document stays at the problem layer plus what the module must contain.

### UC-1 — Churn prediction & retention *(anchor — Motive)*

**Problem statement.** Customers leave, downgrade, or go dormant, destroying recurring
revenue and wasting sunk acquisition cost. The business wants to know **which customers
will leave, when, and why**, early enough that a targeted, owned intervention keeps
them — and wants the program's impact provable against a holdout (evidence 11 §A1).
Churn is the anchoring use case of the entire factory: the kernel calls it "the
archetype of the whole factory" (kernel D3), evidence 03 ranks it **Tier-1 #1** and
calls the churn pipeline "exactly the right pattern," and it is the built exemplar
(UC-1 in the wtm blueprint; the Motive design-partner wedge is live).

**Decision framing.** *Entity:* the account / subscriber / policyholder / merchant.
*Decision:* intervene or not, and with what treatment. *Label:* churned within the
horizon — cancellation, non-renewal, or an inactivity definition; **the label
definition is itself a design decision** (contractual vs behavioral churn). *Horizon:*
30–90 days (consumer/telco), one renewal cycle (B2B SaaS/insurance, 3–12 months);
scored weekly or monthly (evidence 11 §A1.5; evidence 14 churn dossier: horizon 7
days–12 months).

**Decision frequency & economic pool.** Every active customer is re-scored each cycle:
a mid-size telco scores millions of subscribers monthly; a B2B SaaS scores thousands of
accounts weekly. Value concentrates in the high-CLV top decile — intervention budgets
cover only a fraction of the base, so **ranking quality at the top matters more than
global accuracy** (evidence 11 §A1.6). Pool anchors: acquiring a customer costs
**5–25×** retaining one [M] (HBR/Bain); a **5-point retention increase raises profits
25–95%** [M] (Reichheld & Sasser via Bain — cited identically by evidence 11 and 14);
typical annual churn runs ~5–7% (B2B SaaS) to 15–25% (telecom) [C]. Program-level
results: telecom churn −15% with ~10% ARPU uplift within a year [C]; Vodafone churn −8%
from personalized plan recommendations [C]; a McKinsey payments example: merchant
attrition −20%/yr [C] (evidence 11 §A1.14; evidence 14 §14; evidence 02). Honest flag:
rigorously audited third-party churn RCTs are rare; most program evidence is
company-reported (evidence 11 §A1.14) — which is exactly why S-1's definition of done
includes the holdout (kernel D4).

**Data exhaust & required connectors.** Product usage/telemetry, billing & payments,
support tickets, CRM health data, NPS/CSAT, contract/renewal dates, marketing
engagement. Systems of record → launch connector set: **CRM (Salesforce/HubSpot),
billing (Stripe/Zuora), product analytics (Amplitude/Segment/warehouse events), support
(Zendesk)** (evidence 11 §A1.7). The exhaust almost always exists; **the gap is joining
it at the account level** — which is why M-2 (entity resolution, thin v1) ships in Wave
1 as the correctness gate's dependency (kernel D2). Prerequisites: 12–24 months of
history with churn events; point-in-time feature discipline (leakage is the classic
failure — post-cancellation signals); an owner with an intervention budget
(evidence 11 §A1.10).

**Actions enabled & systems of action.** Ranked risk list **with drivers** → CSM
outreach task (CRM queue), save-desk routing, targeted offer, service-recovery play,
renewal escalation, win-back sequencing — through CRM tasks, marketing automation, and
save-desk workflows. A bare score without reasons routinely goes unused (evidence 11
§A1.8); the SHAP driver layer is not a nice-to-have, it is the actionability mechanism.
Evidence 03's generalization table states the pattern: *churn → "who will leave" →
offer / outreach / service recovery.*

**KPIs & how impact is proven.** Gross/net churn, NRR, renewal rate, save rate, CLV.
Proof: **holdout/A-B on the intervention** (treat half the flagged accounts) or
before/after on cohort churn; the clean design — uplift among treated-vs-control
at-risk accounts — is well understood, making churn one of the most provable use cases
in the catalog (evidence 11 §A1.9). This maps 1:1 onto the kernel D4 measurement-loop
requirement and the shadow-production gate (D7.5).

**Industry variants (kernel D5 beachheads).**
- **Tier 1a — FS/banking:** *deposit/customer attrition* — silent churn: balances
  drift to zero without closure, so the label is behavioral, not an event; regulation
  constrains differential offers (evidence 11 §A1.11). Named beachhead solution in the
  kernel D5 table.
- **Tier 1b — insurance (specialty/MGA):** *lapse/persistency* — price-driven at
  renewal, agent-mediated; renewal-cycle horizon; NAIC AI bulletin applies to the
  treatment layer (evidence 11 §A1.11; evidence 08).
- **Tier 1c — operational account:** Motive **is** this account (kernel D5): B2B
  fleet-SaaS churn — few, large accounts (small-N discipline), champion-departure as a
  top driver, usage-telemetry-rich exhaust.
- Elsewhere: SaaS revenue-vs-logo churn with expansion offsets; telco contract-end
  cliffs and network-quality drivers; gaming/media engagement-decay churn.

**Methodology mapping & module staging (kernel D2).**
- **At launch (W1):** M-1 tabular supervised — extract → point-in-time features → GBM →
  SHAP → ranked report; M-2 entity resolution (thin) for the account join; M-3
  segmentation for treatment differentiation. This *is* the existing UC-1 pipeline.
- **Upgrade 1 (W2): M-6 survival/time-to-event** — "when", not just "whether": hazard
  curves per account replace the binary label, enabling renewal-window timing
  (evidence 11 §A1.16 names survival as the canonical refinement).
- **Upgrade 2 (W3): M-7 causal/uplift** — from "who will leave" to "whom does treatment
  save", eliminating the classic offer-cannibalization failure (discounting customers
  who would have stayed — evidence 11 §A1.15; evidence 01 makes the same point). Kernel
  open question 3 (uplift timing) governs when this ships.
- Module boundary: the recommended-action layer and the LLM retention playbook are
  optional, user-managed components (add-use-case runbook principles).

**Evidence cross-references.** Evidence 11 §A1 (full dossier, anchor) · evidence 14
churn dossier (rank #13, value 4.8; grid "prioritize now") · evidence 01 Tier 2 rank 9
with the explicit note that churn is best built as one branch of a broader
next-best-action platform — our M-7/M-8 staging answers exactly that · evidence 02
build-order wave 1 ("churn/remediation") · evidence 03 **Tier-1 rank 1** ·
evidence 04: Databricks accelerators #60 *Predict Customer Churn*, #88 *Analyzing
Customer Attrition in Subscription Models*, #87 *Survival Analysis for Churn and
Lifetime Value*, #33 *Graph Analytics for Telco Customer Churn Prediction*, #77
*Profit-driven retention management* — five accelerators on one use case is the densest
competitor packaging in their catalog, confirming demand · evidence 09: Customer
Success / Account Management (26 apps) and Sales categories carry the prior-art demand.

**Open product questions.**
1. Non-contractual churn (retail/usage businesses): do we ship a label-definition
   assistant (inactivity-window search) in S-1 v1 or defer to a variant?
2. Small-N B2B mode: below what account count does the module switch from statistical
   scoring to a drivers-and-watchlist presentation (Motive-relevant)?
3. Is the save-desk write-back (CRM task creation) in the launch module or is v1
   report+queue only? (Shadow-production gate D7.5 says queue first.)
4. Kernel open question 1: is Motive formally design partner #1, and does S-1's
   reference implementation therefore target the fleet-SaaS variant first?

### UC-2 — Lead & opportunity scoring

**Problem statement.** Sales capacity is scarce; leads and open opportunities vastly
outnumber the attention available, so reps work them in the wrong order — chasing
unwinnable deals while hot prospects go cold. The business wants inbound leads and open
opportunities ranked by likelihood (and size) of conversion so effort lands where it
pays (evidence 11 §A4). Kernel rationale for T1: **same pipeline shape as churn** —
same M-1 spine, same CRM systems of action, high decision frequency — making it the
cheapest second module in the factory (kernel D3).

**Decision framing.** *Entity:* the lead / opportunity / account. *Decision:* work it
now, nurture, or discard; who works it. *Label:* converted (MQL→SQL→closed-won) within
the horizon. *Horizon:* days–weeks (inbound) to quarters (enterprise opportunities);
scored on arrival, re-scored on activity (evidence 11 §A4.5).

**Decision frequency & economic pool.** Hundreds to tens of thousands of leads/day
depending on motion; every open opportunity re-ranked weekly; speed-to-lead on inbound
is minutes-sensitive. Pool = sales productivity + conversion uplift on existing demand.
Credible anchors: McKinsey tech-B2B deal scoring **+4–8 points return-on-sales vs
control** [M/C]; Qymatix B2B study **+10% profit vs control** [M, small sample]
(evidence 11 §A4.4). Honest flag: vendor lead-scoring lifts of 10–30% are common but
rarely controlled [V]; item 11 places the use case in value Tier 3 on that evidence
thinness, and item 14 ranks it #51 — the kernel elevates it on **reuse economics**, not
on standalone pool (see Appendix A, T-2).

**Data exhaust & required connectors.** CRM history (stages, outcomes, activities),
marketing-automation engagement, firmographic enrichment, product usage (PQL motions).
Connectors: **CRM (Salesforce/HubSpot) — shared with UC-1 —, marketing automation
(Marketo/HubSpot), enrichment (ZoomInfo/Clearbit), product analytics** (evidence 11
§A4.7). CRM hygiene is the universal weak point; the intake prerequisite is 1–2 years
of closed-loop CRM outcomes with consistent stage definitions.

**Actions enabled & systems of action.** Score + reason codes → routing/queue order in
CRM, SLA triggers on hot leads, nurture-track assignment, territory/capacity
allocation, discard automation — through CRM workflow rules and SDR cadences. Rep trust
is the adoption battleground: **a score reps ignore is worthless**, and reason codes
(SHAP) are the trust mechanism (evidence 11 §A4.8, §A4.15).

**KPIs & how impact is proven.** Lead→opportunity conversion, win rate, sales-cycle
length, pipeline coverage, revenue per rep. The gold-standard proof is **randomized
routing (scored order vs FIFO)** — cheap to run and rarely actually run (evidence 11
§A4.9); S-2 makes it the default measurement design, which is a differentiator in a
category where "more deployed than validated" is the norm (evidence 11 §A4.13).

**Industry variants (kernel D5).**
- **1a FS/banking:** compliance constraints on differential treatment of applicants;
  scoring must avoid prohibited-basis proxies even in marketing contexts
  (evidence 11 §A4.11).
- **1b insurance:** agent-channel lead scoring (agency-distributed carriers/MGAs);
  speed-to-lead and agent trust dominate.
- **1c operational:** B2B account-based motions — small-N; deal/opportunity scoring
  (the A7 sibling) matters more than volume lead scoring; construction/logistics analog
  is bid/no-bid optimization (evidence 11 §L25 explicitly parallels A4).
- Elsewhere: B2B SaaS PQL-vs-MQL split; real estate/education where speed-to-lead
  dominates everything.

**Methodology mapping & module staging.** **At launch (W1):** M-1 GBM on CRM +
engagement features with SHAP reason codes feeding CRM routing; M-3 segments for
routing policy. **Later:** M-7 uplift where treatment capacity is scarce (whom does a
call *change*), and composition into UC-9 (outbound audiences) and the T3
next-best-action engine. Leakage discipline is the named craft: no post-qualification
fields in features; self-fulfilling-label monitoring (reps only work high scores →
only high scores convert) ships in the module's evaluation harness (evidence 11
§A4.15).

**Evidence cross-references.** Evidence 11 §A4 (full dossier; feasibility Tier F1 —
"one of the most attackable use cases for a mid-market company") · evidence 14 lead
scoring rank #51 but grid "prioritize now"; opportunity/win prediction in its
explore-selectively quadrant · evidence 01 Tier 2 ("sales opportunity mining") ·
evidence 02 build-order wave 1 ("sales operations", with the sharp caveat that the
constraint is CRM data and seller distrust, not model capability) · evidence 04: #66
*Propensity Scoring* is the nearest accelerator; **no dedicated lead-scoring
accelerator exists in the Databricks 93** — whitespace · evidence 09: Sales (30 apps),
one of the two largest business categories in the prior-art catalog.

**Open product questions.**
1. One module or two? Lead scoring (volume, pre-funnel) and opportunity/win prediction
   (small-N, in-funnel) share the spine but differ in presentation — S-2 scope decision.
2. Does the launch module include enrichment-vendor connectors, or is v1
   CRM-only-features (cheaper intake, weaker cold-start)?
3. Native-scoring incumbency: Salesforce Einstein/HubSpot ship scoring as a feature —
   the S-2 positioning must lead with correctness (leakage-free, holdout-proven) and
   own-environment training vs their black-box convenience. Where's the line in the
   demo?

### UC-3 — Customer lifetime value

**Problem statement.** Investment decisions about customers — acquisition-spend
ceilings, service tiers, retention budgets, save-offer depth — are made without knowing
what each customer relationship is actually worth; CAC is managed to averages and
retention spend is spread evenly across unequal accounts. The business wants a
defensible, refreshed estimate of discounted future margin per customer/segment to set
those ceilings and allocations (evidence 11 §A5). Kernel rationale for T1: CLV
**composes with UC-1/UC-2 into revenue intelligence** (kernel D3) — churn probability ×
value-at-risk × conversion propensity is the shared arithmetic of a retention or
acquisition budget.

**Decision framing.** *Entity:* the customer/account (and cohort/segment). *Decision:*
how much to invest in acquiring/serving/saving; tier assignment; CAC ceiling by
segment. *Label:* realized discounted margin over the horizon (a delayed, partially
censored regression target — active customers are censored, which is where M-6
survival machinery enters). *Horizon:* 1–5 years, refreshed quarterly (evidence 11
§A5 compact row; evidence 14 CLV dossier: acquire/invest/tier/suppress/prioritize).

**Decision frequency & economic pool.** Lower decision frequency than UC-1/UC-2 —
quarterly budget and tiering decisions rather than daily queues — but each decision
moves acquisition and retention budgets measured in % of revenue. Anchors: LTV:CAC and
payback-period discipline is standard at digital-native firms [C]; Carrefour +21% ROAS
on newly-acquired customers using an LTV model [C] (evidence 14 churn/CLV dossier);
item 14 ranks CLV **#19 (4.75)** and places it in the prioritize-now quadrant. Honest
flag, stated plainly because it drives the module design: item 11 places CLV in value
**Tier 4** and its prevalence check says *"computed often, decisioned on rarely"*
(evidence 11 §S6) — the failure mode is a CLV number that decorates dashboards. This is
recorded as tension **T-3** (Appendix A) with a recommended resolution: **S-3 ships as
the composition layer of S-1/S-2** (value-weighted churn queues, CAC ceilings wired to
acquisition tools), not as a standalone score.

**Data exhaust & required connectors.** Transactions, billing, margin/cost data,
engagement; connectors: **billing (Stripe/Zuora), CRM, warehouse, e-commerce/POS where
relevant** — a strict subset of the UC-1/UC-2 connector set plus margin data from ERP
(evidence 11 §A5, §S5). Margin data quality (cost-to-serve) is the recurring gap.

**Actions enabled & systems of action.** CAC ceilings by segment → ad-platform budget
rules and bid caps; tiered service assignment → CS platform; retention-budget
allocation → the UC-1 treatment layer (value-weighted intervention); payback reporting
→ finance. The actionability rule from the evidence: CLV creates value only when a
budget rule consumes it (evidence 11 §S6, §S7 pattern 1).

**KPIs & how impact is proven.** LTV:CAC by segment, payback period, cohort margin
curves vs prediction (calibration is the model KPI), retention-spend ROI on
value-weighted vs unweighted targeting (A/B at the UC-1 treatment layer). Proof
strategy: because CLV's standalone impact is hard to isolate, S-3's measurement rides
on S-1/S-2 experiments with value-weighting as the treatment arm.

**Industry variants (kernel D5).**
- **1a FS/banking:** customer/household profitability — deposit margin, product
  holdings, regulation constrains differential *pricing* but not service prioritization;
  the "silent churn" behavioral label feeds the value-at-risk term (evidence 11 §A1.11).
- **1b insurance:** policyholder lifetime value = renewal persistency × premium margin −
  expected losses; actuarial cousins make the finance team a natural reviewer.
- **1c operational:** account-level revenue expansion for fleet SaaS (Motive-shaped):
  seats/vehicles growth vs churn risk; small-N favors segment-level CLV.
- Elsewhere: BTYD probabilistic models in non-contractual retail; media/streaming
  engagement-value models.

**Methodology mapping & module staging.** **At launch (W1):** M-1 tabular regression on
the UC-1 feature store (shared features are the point), segment-level reporting; M-3
value-based segmentation. **Upgrade (W2): M-6** — survival-adjusted expected lifetime
(censoring done correctly is the correctness differentiator; naive CLV on censored data
systematically underestimates active customers). **Later (W3):** M-7 uplift for
retention-budget allocation. BTYD-style probabilistic variants are a documented
alternative (evidence 11 §A5) — a methodology-portfolio decision for M-1's model menu,
not a new wave.

**Evidence cross-references.** Evidence 11 §A5 (compact dossier; value T4; prevalence
"more talked about than rigorously deployed") · evidence 14 CLV dossier (rank #19,
prioritize-now) · evidence 01/02/03: none tier CLV standalone; 03 embeds it in the
churn archetype ("predict risk, LTV, reason codes, uplift") — consistent with the
composition framing · evidence 04: #17 *Calculate Customer Lifetime Value*, #87
*Survival Analysis for Churn and Lifetime Value*, #78 *RFM Segmentation* — Databricks
packages it exactly as we stage it (CLV + survival + segmentation) · evidence 09:
Customer Success / Account Management (26), Executive / Leadership (22).

**Open product questions.**
1. Does S-3 exist as a separately priced module at all, or as the "revenue
   intelligence" upgrade SKU on S-1+S-2? (CFO doc / kernel Q4 pricing mechanics.)
2. Margin data: require ERP cost feeds at intake, or ship revenue-proxy CLV v1 with a
   labeled caveat? (Correctness-brand risk either way — needs a kernel-consistent call.)
3. Which BTYD variant, if any, enters M-1's model menu for non-contractual businesses?

### UC-4 — Collections prioritization

**Problem statement.** Receivables age because collectors work accounts by size or age
rather than by likelihood and influenceability of payment; cash sits trapped in working
capital, bad debt accrues, and collector capacity is wasted on accounts that would pay
anyway. The business wants each collector-hour aimed at the invoice/customer where it
moves cash most (evidence 11 §D2). Kernel rationale for T1: **the finance-family
beachhead** — hard balance-sheet KPI (DSO), banking-relevant vocabulary, and the most
under-attacked feasibility-Tier-F1 use case in the catalog (kernel D3; evidence 11 §S3:
"under-attacked relative to its feasibility in mid-market").

**Decision framing.** *Entity:* the open invoice / customer account. *Decision:* whom
to contact, when, through which channel, with what treatment (reminder, call, hold,
payment plan). *Label:* paid within X days / promise kept / went delinquent — natural
labels from the AR ledger. *Horizon:* days–weeks; work queues rebuilt daily
(evidence 11 §D2.5).

**Decision frequency & economic pool.** Hundreds to hundreds of thousands of open
invoices at any time; daily queue construction per collector. Pool anchors: each day of
DSO on $1B revenue ≈ **$2.7M cash** (arithmetic; evidence 11 §D2.4); post-2022 interest
rates sharply raised the value of each DSO day; PwC estimates **€1.56T of global excess
working capital in 2024/25** [C] (evidence 14). External ranking: item 14 puts
collections at **value rank #2 (5.0) and feasibility 5.0 (rank #5)** — its single
highest-conviction non-fraud entry. Honest flag: item 11 ranks it value Tier 2 (#20)
with **[T/V]** — vendor-claimed 10–20% DSO-day reductions and 20–30% collector
productivity gains are not independently audited, and published RCTs are scarce
(evidence 11 §D2.14). The two compendia agree completely on feasibility and mechanism
and differ only on published-proof density; S-4 therefore leads with the built-in
holdout (queue-order A/B) so each deployment generates its own audited evidence.

**Data exhaust & required connectors.** AR ledger (invoices, terms, payments,
disputes), dunning/contact history, promises-to-pay, credit ratings, order history,
dispute codes. Connectors: **ERP AR module (SAP/Oracle/NetSuite), collections platforms
(HighRadius/Billtrust) where present, credit bureaus (D&B)** (evidence 11 §D2.7). The
exhaust is complete and labeled; dispute-reason data quality is the variable to check
at intake. This is the first UC whose primary connector is the ERP, extending the
factory's connector portfolio beyond the CRM/billing cluster (evidence 11 §S5).

**Actions enabled & systems of action.** Ranked daily work queues + recommended
treatments → collector CRM/dialer; automated dunning sequences execute directly; credit
holds trigger in ERP; SHAP reason codes give collectors call context (evidence 11
§D2.8, §D2.16). The uplift-shaped subtlety is designed in from v1 as a *presentation*
rule even before M-7 ships: value concentrates in accounts that are high-balance *and
influenceable* — the queue must not celebrate collecting cash that would have arrived
anyway (evidence 11 §D2.6, §D2.15).

**KPIs & how impact is proven.** DSO, % AR current, bad-debt write-offs, cash collected
per collector-FTE, promise-kept rate. Proof: A/B on queue ordering or matched-portfolio
comparison; DSO is a hard balance-sheet metric the CFO already watches (evidence 11
§D2.9) — the shortest path from module to CFO-visible impact anywhere in Tier 1.

**Industry variants (kernel D5).**
- **1a FS/banking:** named beachhead solution (kernel D5 table). Two distinct shapes:
  the bank's *own* commercial/trade AR, and **lending collections** (post-delinquency
  treatment) — the latter is regulated (FDCPA/CFPB, complaint-rate KPI) and mature at
  card issuers (evidence 11 §L7); S-4 targets the AR shape first, the lending shape is
  a T2-gated variant (§3, T2-2 credit-risk-adjacent).
- **1b insurance:** premium receivables and agent-balance collections; MGA carrier
  remittances; lower volume, relationship-mediated treatments.
- **1c operational:** freight/fleet B2B trade credit — dispute-heavy (delivery
  disputes), where the root-cause loop (billing-error detection) matters as much as
  the queue (evidence 11 §D2.15).
- Elsewhere: utilities/telco consumer collections under hardship rules; healthcare
  patient-responsibility AR with charity-care screening sensitivities (evidence 11
  §D2.11) — deferred to the T2 healthcare entry.

**Methodology mapping & module staging.** **At launch (W1):** M-1 payment-date /
delinquency GBM + SHAP reason codes → daily queues + automated dunning tiers; M-2 for
customer-account resolution across ERP entities. **Upgrade (W2):** M-4/M-6 — payment-
date distributions feed cash-flow forecasting (the D4 adjacency; a natural cross-sell),
survival framing for time-to-pay. **Upgrade (W3): M-7 uplift** — treatment-level
influenceability ranking, the explicitly uplift-shaped end-state (evidence 11 §D2.16).

**Evidence cross-references.** Evidence 11 §D2 (full dossier; feasibility Tier F1) ·
evidence 14 collections dossier (value #2, feasibility #5 — both 5.0) · evidence 01:
inside Tier 3 "finance close" family framing · evidence 02 build-order wave 1
("finance exceptions", collections named explicitly; KPI list includes DSO) ·
evidence 03: banking industry top-pipelines row names collections · evidence 04:
**no collections accelerator exists among the Databricks 93** — the clearest
competitive whitespace in Tier 1 · evidence 09: Finance (30 apps, joint-2nd-largest
category) — strong prior-art demand.

**Open product questions.**
1. Dunning execution: does S-4 v1 write back into email/ERP dunning (an *action*,
   gated by D7.5 shadow production) or produce queues only?
2. Dispute root-cause reporting (billing-error clustering): in-module at launch or an
   S-4.1 add-on? It's the anti-symptom-optimization guard (evidence 11 §S7 pattern 12).
3. Mid-market ERP long tail (NetSuite/Dynamics vs SAP): which two ERP connectors gate
   the first two deployments?

### UC-5 — Demand forecasting

**Problem statement.** Every ordering, production, staffing, and budgeting decision
embeds a guess about future demand; when the guess is wrong the business either loses
sales (stockout) or eats cost (overstock, markdown, waste). The business wants demand
predicted per item/location/period accurately enough to plan against — **with known
uncertainty**, because the downstream inventory decision consumes the distribution, not
the point estimate (evidence 11 §F1). Kernel rationale for T1: **Tier-1 in all three
external DR reports** and the opener of the supply-chain family (kernel D3).

**Decision framing.** *Entity:* SKU × location × period (the forecast cell).
*Decision:* the number handed to ordering/production/staffing, with uncertainty bands.
*Label:* actual demand — abundant but **censored by stockouts** (sales ≠ demand when
shelves were empty; the classic correctness adaptation). *Horizon:* days (demand
sensing) to 18+ months (capacity); re-forecast weekly or daily (evidence 11 §F1.5).

**Decision frequency & economic pool.** Among the largest-scale prediction problems in
industry: a grocery chain forecasts millions of SKU-store-day cells daily. Pool
anchors: retail inventory distortion cost **$1.77T globally in 2023 — $1.2T
out-of-stocks + $562B overstocks** [M-survey] (IHL 2023; cited by both evidence 11 §F1
and evidence 14). Program results: AI forecasting cuts forecast error **20–50%** and
lost sales **up to 65%** [C] (McKinsey); Danone **−30% lost sales** [C]; early-adopter
cohort: logistics −15%, inventory −35%, service +65% [C] (evidence 11 §F1.4, §F1.14).
Rankings agree everywhere: item 11 value T1 (#3, jointly with inventory), item 14 #4
(5.0) with feasibility 5.0 (#8), item 01 Tier-1 #2, item 03 Tier-1 #4 — the least
contested Tier-1 admission in the portfolio.

**Data exhaust & required connectors.** POS/sales history, orders/shipments, promotion
& pricing calendars, seasonality/holidays, weather, distribution status, new-item
attributes. Connectors: **ERP, planning systems (Blue Yonder/o9/Kinaxis/SAP IBP where
present), POS / e-commerce platform, warehouse event feeds** (evidence 11 §F1.7).
Classic gaps to test at intake: promo-flag hygiene and stockout censoring; 2–3 years of
clean history with promo/price flags is the prerequisite (evidence 11 §F1.10).

**Actions enabled & systems of action.** The forecast feeds replenishment, production
scheduling, procurement, logistics capacity, and financial planning **by system
design** — planning platforms consume it automatically; item 11 calls this the highest
*structural* actionability of any prediction (the forecast is the input contract to
half the supply-chain family) (evidence 11 §F1.8). Where no planning platform exists
(mid-market), UC-6 is the action surface.

**KPIs & how impact is proven.** Forecast error (MAPE/WMAPE **and bias** — systematic
over-forecast hides in MAPE), service level/fill rate, lost sales, inventory turns,
waste/markdown. Impact attribution is unusually clean: forecast error is a standing
metric with the prior method as the baseline; **forecast-value-added (FVA) tracking**
against planner overrides is the adoption guard (evidence 11 §F1.9, §F1.15).

**Industry variants (kernel D5).**
- **1a FS/banking:** not a natural fit as *product* demand; the family analog is
  cash-demand/branch-volume forecasting and treasury flows (D4-adjacent) — supporting,
  not beachhead.
- **1b insurance:** claims-volume and call-volume forecasting for staffing (operational
  planning variant).
- **1c operational — the beachhead (kernel D5: UC-5/6 named for the operational
  account):** manufacturing/B2B lumpy demand (intermittent-demand methods),
  fleet/logistics volume forecasting; grocery/fresh (daily, weather, waste) and
  fashion (attribute-based cold-start) as the retail variants when Tier-3 industries
  open (evidence 11 §F1.11).
- Elsewhere: CPG promo-driven, retailer-mediated; pharma tender events; utilities load
  forecasting is the L18 sibling (T2/industry-gated).

**Methodology mapping & module staging.** **At launch (W2 — M-4):** classical +
GBM-global hierarchical time-series (lag/calendar/promo features) per the kernel's
"classical + GBM-global first; deep later" decision; probabilistic outputs (quantiles)
from day one because UC-6 consumes them; FVA governance in the module. **Depends on
engine R3/R4-lite** (one-button deploy + materialization) — UC-5 is the first Tier-1
use case gated on Wave-2 engine capability (kernel D2/D7.3). **Later:** deep-learning
global models at scale (explicitly deferred); M-5 anomaly overlay for demand-shock
detection; M-11 predict-then-optimize composition via UC-6.

**Evidence cross-references.** Evidence 11 §F1 (full dossier) · evidence 14 demand
forecasting (value #4, feasibility #8) · evidence 01 **Tier-1 #2** ("demand forecasting
& supply-chain optimization") · evidence 02 wave 2 (supply chain — "economic leverage
exceptionally high, but actions interact across multiple constrained systems") ·
evidence 03 **Tier-1 #4** ("demand → replenish, produce, expedite") · evidence 04: #21
*Demand Forecasting at Scale*, #93 *Demand Forecasting with Causals*, #91 *Time series
forecasting with generative AI* — three accelerators, a heavily packaged category ·
evidence 09: Operations / Logistics is the **largest** prior-art category (40 apps),
plus Procurement / Supply Chain (22).

**Open product questions.**
1. Forecast-cell scale ceiling for v1: what SKU×location cardinality does the first
   reference architecture support (ties to R4-lite materialization sizing)?
2. Weather/holiday external data: bundled connector or customer-supplied?
3. New-item cold start (attribute-based analogs): launch scope or first upgrade?
4. Mid-market without a planning platform: does S-5 ship its own planner-facing
   review UI, or is UC-6 mandatory in that segment?

### UC-6 — Inventory / replenishment support (assistive)

**Problem statement.** Given uncertain demand and supply lead times, how much of each
item should sit at each node — and when and how much to reorder? Too much ties up cash
and creates waste/markdowns; too little loses sales and service. Most firms answer with
static rules that are wrong item-by-item (evidence 11 §F2). Kernel rationale for T1:
**forecast-to-action** — the human-reviewed action layer that converts UC-5's
distribution into decisions, deliberately assistive first (kernel D3; D9.3).

**Decision framing.** *Entity:* SKU × node (store/DC/plant). *Decision:* reorder
point/quantity, safety stock, allocation/rebalancing — **recommended, human-reviewed**
at launch (assistive posture). *Label:* realized service level + carrying cost — the
objective is a cost trade-off, not a single label. *Horizon:* daily–weekly
replenishment; seasonal builds; continuous review (evidence 11 §F2.5).

**Decision frequency & economic pool.** Millions of SKU-node reorder decisions weekly
at large retailers; in our mid-market ICP, thousands–hundreds of thousands. Pool: the
same $1.77T distortion pool as UC-5 plus carrying cost (typically 15–30% of inventory
value/year [T — rule of thumb]); freeing 20% of a $2B inventory = $400M cash
(arithmetic). Adopter ranges: **inventory −20–35% with service maintained** [C]
(McKinsey; evidence 11 §F2.4, §F2.14). Item 14: value #5 (5.0), feasibility #9 (5.0).
Honest flag: named single-company audited results are scarce; the aggregate consultant
evidence is stronger than the named-case evidence (evidence 11 §F2.14).

**Data exhaust & required connectors.** On-hand/on-order inventory, sales/consumption,
lead-time history (POs vs receipts), supplier fill rates, costs, shelf-life. Connectors:
**ERP (shared with UC-4), WMS, planning system where present** (evidence 11 §F2.7).
**Inventory-record accuracy is the notorious gap** — system stock ≠ physical stock;
cycle-count discipline is an intake prerequisite, and phantom-inventory detection is a
correctness adaptation in S-6 (evidence 11 §F2.7, §F2.15).

**Actions enabled & systems of action.** Reorder recommendations → PO/transfer-order
drafts in ERP, **human-approved at launch** (kernel D7.5 shadow production; the
"assistive" in the kernel's name for this UC); exception queues for large commitments;
rebalancing suggestions. The industry end-state is auto-replenishment (evidence 11
§F2.8) — that is exactly the T2 "forecast-to-action automation upgrade" entry (§3,
T2-8), gated on shadow-production graduation.

**KPIs & how impact is proven.** Inventory turns, days of supply, service level/fill
rate, stockout rate, obsolescence/waste, GMROI. Proof: side-by-side category pilots
(module-recommended vs incumbent-policy categories) — standard, credible, and
CFO-legible via working capital (evidence 11 §F2.9).

**Industry variants (kernel D5).**
- **1a FS/banking:** cash/ATM inventory replenishment (niche but real); not beachhead.
- **1b insurance:** n/a as inventory; the family analog is adjuster/capacity planning —
  supporting only.
- **1c operational — the beachhead:** manufacturing raw/WIP/finished + **MRO spares**
  (intermittent demand, criticality-weighted — downtime cost ≫ holding cost, which
  couples S-6 to UC-8's asset criticality data); distribution/fleet parts stocking
  (evidence 11 §F2.11).
- Elsewhere: retail presentation-stock minimums; fresh/pharma expiry-aware (FEFO);
  aftermarket last-time-buy decisions.

**Methodology mapping & module staging.** **At launch (W2 — M-4):** probabilistic
forecast (S-5 output) → newsvendor/service-level safety-stock policy → recommended
POs with reasons; M-1 lead-time prediction as input. **Later (W4 — M-11):** true
multi-echelon optimization (MEIO) and constrained predict-then-optimize (the kernel's
"+M-11 later"); auto-execution graduates via T2-8. S-6 is deliberately a *decision
support* module before it is an *automation* module — the assistive posture is the
product, not a limitation (kernel D9.3; evidence 08 shadow-production doctrine).

**Evidence cross-references.** Evidence 11 §F2 (full dossier) · evidence 14 inventory
optimization (value #5, feasibility #9) · evidence 01 Tier-1 #2 (bundled with
forecasting) · evidence 02 wave 2 · evidence 03 Tier-1 #4 (replenish/produce/expedite
as demand's action) · evidence 04: #79 *Safety stock*, #56 *Improve On-Shelf
Availability*, #86 *Supply Chain Distribution Optimization*, #57 *Order Picking
Optimization* (adjacent) · evidence 09: Warehouse / Distribution (24), Operations /
Logistics (40), Procurement / Supply Chain (22).

**Open product questions.**
1. v1 scope line: safety-stock + reorder recommendations only, or also allocation/
   rebalancing across nodes (MEIO-lite)?
2. MRO/spares variant (couples to UC-8): same module with an intermittent-demand mode,
   or a separate S-6.1?
3. What cycle-count / inventory-accuracy evidence do we require at intake before
   trusting on-hand data (correctness-gate policy)?

### UC-7 — KPI anomaly detection & driver analysis

**Problem statement.** Business metrics break silently — a payment integration fails in
one country, a pricing error halves margin on a category, a funnel step collapses after
a release — and are discovered weeks later in a monthly review, after the damage has
compounded; and when a KPI moves, analyst teams burn weeks answering *why*, returning
contradictory answers. The business wants material metric movements **detected within
hours, routed to a named owner, and explained** — decomposed into quantified,
actionable drivers (evidence 11 §K1, §K2). Kernel rationale for T1: **"the report
solution generalized"** — the executive surface of the whole factory, applicable in
every vertical, and the natural habitat of the tabular methodology's explanation stage
(kernel D3; evidence 11 §K2.10).

**Decision framing.** *Entity:* the metric × dimension slice × time window (detection);
the metric movement (attribution). *Decision:* alert or not, whom to route to, severity;
which drivers explain the movement and what corrective action follows. *Label:*
confirmed incidents / validated decompositions from responder feedback — **labels
accumulate only if the alert workflow captures dispositions**, so disposition capture
is designed into the module from day one (evidence 11 §K1.5, §K1.15). *Horizon:*
hourly–daily detection, continuous; per-reporting-cycle attribution.

**Decision frequency & economic pool.** Thousands to millions of metric-slice
combinations evaluated continuously against a human attention budget of a handful of
alerts per owner per day — **precision is the entire game** (the SOC alert-fatigue
problem transplanted to business data; evidence 11 §K1.6). The pool is incident-shaped:
each undetected business incident costs duration × run-rate impact (a broken checkout
flow in one market can silently cost $100k+/day — illustrative arithmetic), and the
diagnostic half consumes the plurality of BI-team workload [T — practitioner consensus]
(evidence 11 §K1.4, §K2.4). Honest flag, carried prominently: **both halves are
mechanism-strong, evidence-thin [T]** — no consolidated analyst sizing exists, and item
11 places K1/K2 in value Tier 3 with the "wait until the semantic layer exists" gate
(evidence 11 §S2, §S4). Item 14, by contrast, puts KPI anomaly detection in its
**prioritize-now** quadrant. Our resolution — and the reason this is T1 and not T2 —
is that item 11's gate is conditional and self-liftable: *"with a trustworthy semantic
layer they jump to the top-left"* (evidence 11 §S4 reading note), **and the Zetta
deployment itself materializes the governed metric layer** as part of S-7 delivery.
This reasoning is recorded as tension T-4 for kernel confirmation.

**Data exhaust & required connectors.** The metrics warehouse itself: **data warehouse
/ lakehouse (Snowflake/Databricks/BigQuery), BI semantic layers, plus calendar/promo
context and alert-disposition capture (Slack/Jira)** (evidence 11 §K1.7). Where a
governed semantic layer is missing, S-7 delivery *starts* with metric-definition
codification onto Zetta-materialized views — the prerequisite becomes the first
deliverable (see above).

**Actions enabled & systems of action.** Alert → routed notification to the metric
owner with the offending slice + suspected timing/change correlation → owner
investigates/fixes (pricing rollback, integration fix, campaign stop); attribution
report ("−4% revenue = −2.5pp Germany payment-failure + −1.2pp category mix + …") →
corrective decision + board-pack narrative. **An alert without an owner is noise** —
the ownership registry is part of the module, not an assumption (evidence 11 §K1.8,
§K2.8). Wired together, K1+K2 become detect → diagnose → act.

**KPIs & how impact is proven.** Detection lead time vs previous discovery (typically
weeks → hours), alert precision (% actioned), incident-duration reduction,
recovered-loss estimate per catch, time-to-diagnosis and analyst hours per request.
Each caught incident is a self-documenting value story (evidence 11 §K1.9) — S-7's
proof design is an incident log comparison plus a running recovered-loss ledger.

**Industry variants (kernel D5).**
- **1a FS/banking:** named beachhead solution (kernel D5 table: "UC-7 KPI drivers").
  Branch/product P&L drivers, fee-income anomalies, deposit-flow monitoring;
  telecom-style revenue assurance is the ancestor discipline (evidence 11 §K1.12).
- **1b insurance:** loss-ratio and quote-to-bind funnel monitoring by line/geo/agent;
  claims-cycle-time drivers.
- **1c operational:** fleet utilization/fuel/OEE anomalies; SaaS-side ARR-bridge
  decomposition (new/expansion/contraction/churn) — already a standard artifact, ripe
  for automation (evidence 11 §K2.11) and directly composable with UC-1.
- Elsewhere: e-commerce funnel/payment slices (highest natural fit); retail comp-sales
  decomposition (traffic × conversion × basket); FP&A rate/volume/mix variance — the
  formalized methodology template (evidence 11 §K2.11).

**Methodology mapping & module staging.** **At launch (W1 — M-1):** driver analysis on
business aggregates — contribution decomposition (mix/rate/volume), GBM+SHAP driver
models on metric movements, change-calendar correlation, grounded narrative generation
with arithmetic checks (the "parts must sum" credibility rule; evidence 11 §K2.15).
**Upgrade (W2 — M-5):** hierarchical time-series baselines + multi-dimensional
contribution scanning for continuous anomaly detection at slice scale. Disposition
feedback loop from day one (the label factory). Spurious-attribution guards (correlated
dimensions credited causally) are the named correctness adaptation (evidence 11
§K2.15); true causal questions stay explicitly out of scope — scope honesty is part of
the module copy.

**Evidence cross-references.** Evidence 11 §K1 + §K2 (full dossiers; value T3 [T];
feasibility F3-conditional) · evidence 14: KPI anomaly in prioritize-now; driver
analysis in explore-selectively (mirroring the same split confidence) · evidence
01/02/03: not tiered standalone — 03's Tier-3 warning ("dashboards … unless embedded
in high-value workflows with outcome measurement") is precisely the failure mode S-7
is designed against · evidence 04: no direct business-KPI-anomaly accelerator exists
(#58 *OEE and KPI Monitoring* is the manufacturing-specific cousin; #71 *Real-Time
Point-of-Sale Analytics* adjacent) — whitespace · evidence 09: Executive / Leadership
(22 apps) and Data and Analytics (15) are exactly this shape — prior-art demand for
exec-surface reporting apps was broad.

**Open product questions.**
1. Packaging: one module (detect+diagnose) or S-7a/S-7b? The evidence says detection
   without diagnosis under-delivers and diagnosis without detection is episodic.
2. Minimum semantic-layer bar at intake: how many governed metrics (with owners)
   before we switch on alerting? (Precision economics depend on it.)
3. Do we ship the FP&A variance template (rate/volume/mix) as the first vertical skin,
   given finance-audience alignment with UC-4?
4. LLM narrative layer: grounded-generation guardrails are W3 (M-9) — is v1 narrative
   template-based only?

### UC-8 — Predictive maintenance (assistive)

**Problem statement.** Equipment fails unexpectedly, stopping production at enormous
cost — while scheduled preventive maintenance replaces healthy parts and still misses
failures. The business wants to know which asset will fail, when, and from what cause,
so maintenance happens exactly when needed (evidence 11 §G1). Kernel rationale for T1:
**the low-liability operational proof the design-partner research prescribes** — the
council's resolution was to lead positioning with governance and choose a low-liability
use case (human-reviewed prediction/triage/forecasting) for the first technical proof;
PdM is its named example (evidence 08; kernel D3, D5 Tier-1c).

**Decision framing.** *Entity:* the asset/component (pump, motor, spindle, vehicle
subsystem). *Decision:* intervene now / schedule at next window / keep running —
**assistive: recommendations into the maintenance-planning process, never autonomous
shutdowns** (kernel posture). *Label:* failure events + failure mode from CMMS work
orders — **scarce by nature** (good plants have few failures) and noisily coded; the
defining constraint of the domain. *Horizon:* days–weeks of warning (useful lead
time), monitored continuously (evidence 11 §G1.5).

**Decision frequency & economic pool.** Thousands of monitored assets per site; daily
health assessment, weekly planning cycles. Value concentrates in the small set of
**critical-path assets** whose failure stops the line — criticality analysis matters
more than model coverage (evidence 11 §G1.6). Pool anchors: unplanned downtime averages
**~$532k/hour** in large plants, **$2.3M/hour automotive** [C]; Fortune Global 500
industrials lose **~$864B/year** to unplanned downtime [C-modeled survey] (Siemens/
Senseye; evidence 11 §G1.4 — evidence 14 cites the same Siemens TCOD series). Benefit
ranges: breakdowns −70%, maintenance cost −5–10% [C] (Deloitte); a Deloitte extruder
pilot: −80% unplanned downtime, ~$300k/asset [C] (evidence 11 §G1.14). Rankings: item
11 value T1 (#8) **but feasibility Tier F3**; item 14 value #7 (5.0) and prioritize-now;
items 01/02/03 put PdM Tier 2 / wave 3 / Tier 2 respectively. The kernel elevates it
anyway on partner-strategy grounds — that decision and its evidence tension are
recorded as T-5 (Appendix A), with the mitigations below.

**Data exhaust & required connectors.** Sensor telemetry (vibration, temperature,
current — historian data), CMMS work orders/failure codes, operating context,
inspection notes. Connectors: **historians (PI/OSIsoft), CMMS/EAM (Maximo/SAP PM),
condition-monitoring feeds; for the fleet variant, telematics platforms** (evidence 11
§G1.7). Telemetry exhaust is strong on instrumented assets; **the failure-label side is
the chronic weakness** — 12+ months of telemetry + work-order history is the intake
floor (evidence 11 §G1.10).

**Actions enabled & systems of action.** Alert → work order in CMMS with suspected
failure mode + parts list; scheduling into planned windows; spare-parts pre-positioning
(the UC-6 MRO coupling); operating-parameter derating to survive to the window. The
action path runs through existing maintenance planning — mature, human-owned,
low-liability (evidence 11 §G1.8).

**KPIs & how impact is proven.** Unplanned downtime hours, OEE availability,
maintenance cost per asset, MTBF/MTTR, **catch rate (failures with prior warning) and
false-alert rate** — the alert-precision pair that decides adoption. Proof:
before/after on downtime and cost against per-asset CMMS baselines; attribution needs
care because other reliability work confounds (evidence 11 §G1.9).

**Industry variants (kernel D5).**
- **1c operational — the beachhead (kernel D5: "UC-8 PdM" is the named 1c solution).**
  Two sub-variants matter: **fleet** (Motive-adjacent: high asset counts, standardized
  failure modes — *the best label situation in the domain*, evidence 11 §G1.11) and
  **discrete manufacturing** (rotating equipment; pilot-to-fleet heterogeneity is the
  scaling risk). The fleet variant is the recommended first instance precisely because
  it dodges the label-scarcity constraint.
- **1a FS/banking:** n/a physically; nearest analogs (ATM/branch equipment, data-center
  facilities) are supporting at best — UC-8 is not a banking-beachhead module.
- **1b insurance:** indirect — IoT/telematics-driven loss prevention in commercial
  property/fleet books; a distribution partnership angle rather than a carrier-internal
  module.
- Elsewhere: process industries (safety-critical, alarm-flood context); utilities
  transformer/line asset care (L20 sibling — T2/industry-gated); rail/aviation
  regulated maintenance regimes.

**Methodology mapping & module staging.** **At launch (W1–W2):** M-1 on
failure/work-order history where labels exist (fleet variant) + **M-5 anomaly
detection** on telemetry where they don't — with the honest constraint from the
evidence that anomaly detection without failure attribution produces alert noise
(evidence 11 §G1.15), so v1 scopes to instrumented critical assets with label history.
**Upgrade (W2 — M-6):** survival/RUL per failure mode. **Later:** work-order NLP
(M-9, W3) to mine failure codes from text; alarm-management discipline throughout.
Alert-fatigue economics (S7 pattern 7) drive the precision-first tuning default.

**Evidence cross-references.** Evidence 11 §G1 (full dossier; value T1 #8; feasibility
F3) · evidence 14 predictive maintenance (value #7; prioritize-now; Siemens TCOD 2024 +
BlueScope case as anchors) · evidence 01 Tier 2 · evidence 02 wave 3 ("highly
defensible … but every plant and asset class introduces additional integration work" —
the caution we absorb via the fleet-first variant) · evidence 03 Tier 2
(failure risk → work order, parts, downtime window) · evidence 04: **no dedicated PdM
accelerator among the Databricks 93** (#58 *OEE and KPI Monitoring* and #23 *Digital
Twins* are the nearest) — whitespace in the most-cited industrial AI category ·
evidence 09: Fleet Management (23 apps — a whole prior-art category), Operations /
Logistics (40), Quality Assurance (21).

**Open product questions.**
1. Fleet-first confirmation: does S-8's reference implementation target vehicle/fleet
   assets (Motive-adjacent data) rather than plant assets? (Recommended; needs kernel
   D5-1c alignment with the actual first operational partner.)
2. Sensor-gap policy: do we ever recommend instrumenting (capex advice), or is
   "already-instrumented critical assets only" an intake hard line?
3. Criticality analysis: in-module (asset-criticality ranking from downtime cost) or a
   delivery-time consulting artifact?
4. False-alert budget: what precision floor gates alert volume at launch (alert-fatigue
   guard, evidence 11 §S7.7)?

### UC-9 — Automated email outbound

**Problem statement.** Outbound revenue motions (prospecting, nurture, win-back,
expansion) are throttled by manual list-building, generic messaging, and unmeasured
sends: teams either blast untargeted volume (burning deliverability and brand) or
hand-pick tiny lists (leaving pipeline unbuilt). The business wants outbound email
that is **targeted by model (who), timed and sequenced by policy (when), personalized
within guardrails (what), and measured against holdouts (did it work)** — an
intelligence problem first, a sending problem second. Kernel rationale for T1: **One
Orama catalog #2** (evidence 07) — a committed product-suite priority where UC-2
scoring + M-3 segmentation power the outbound layer (kernel D3).

**Decision framing.** *Entity:* the recipient × campaign/sequence × send. *Decision:*
include/exclude (scoring), which segment/message variant, when to send, when to stop
(fatigue/suppression). *Label:* response within window (reply, click, meeting,
conversion) + negative labels (unsubscribe, complaint, bounce). *Horizon:* per send,
continuous; campaign cycles of days–weeks (composition of evidence 11 §C4 campaign
response + §C7 send-time + §C3 segmentation + §A4 scoring).

**Decision frequency & economic pool.** Every send is a decision — thousands to
millions per month even mid-market. The economic pool is pipeline creation efficiency:
campaign-response modeling and audience selection are the mature direct-response
disciplines (evidence 11 §C4 — "mature in finserv/telco/retail; uplift still rare in
practice"); send-time/frequency optimization is commodity alone but real inside an
orchestrated program (evidence 11 §C7). Honest flag: **no external evidence source
ranks "automated email outbound" as a top standalone use case** — its components sit
in item 11's Tier 4 / compact tables and mid-pack in item 14 (campaign response and
send-time both in the prioritize-now grid quadrant, ranks below the top 50). The
admission is an internal One Orama commitment (evidence 07), not an external-demand
conclusion — recorded as tension T-6 with the kernel's own open question 2.

**Data exhaust & required connectors.** CRM (shared with UC-2), marketing
automation/ESP engagement logs (opens/clicks/replies/unsubs), enrichment data, product
usage (for expansion motions), suppression/consent registries. Connectors: **CRM,
ESP/marketing automation (HubSpot/Marketo/Braze-class), enrichment** (evidence 11 §C4,
§C7 systems of record). Consent/CAN-SPAM/CASL/GDPR state is part of the data contract —
governance surface from day one.

**Actions enabled & systems of action.** Scored + segmented audiences → sequence
enrollment in the ESP; send-time/frequency policies → scheduling and fatigue caps;
suppression automation (do-not-contact, deliverability protection); performance
feedback → audience refresh. The **generation** of message copy is deliberately
out-of-scope at launch (that is LLM content generation — anti-portfolio-adjacent;
see §5): v1 personalizes by *selection* (segment/variant/merge-field), not by
free-form LLM drafting. Kernel Q2 (internal-first vs customer-facing) governs the
first deployment: the recommended reading is **internal-first — Orama automating
Orama's own outbound** — producing our own measured case study before the module is
customer-facing (see T-6).

**KPIs & how impact is proven.** Reply/meeting rate, opportunity creation per 1,000
sends, incremental pipeline vs **holdout audiences** (the uplift design from day one —
suppressed control groups are cheap in email), unsubscribe/complaint rates and
deliverability health as guardrail KPIs. Measurement is native: the ESP logs every
outcome (evidence 11 §C4/§C7 KPIs).

**Industry variants (kernel D5).**
- **1a FS/banking:** consent and suitability constraints on offers; compliance review
  of sequences; segment-of-one restrictions — the variant exists but is
  governance-heavier (evidence 11 §A3.11 banking analog).
- **1b insurance:** agent-mediated books — outbound supports agents (renewal/lapse
  outreach lists feeding UC-1's insurance variant) more than direct-to-policyholder.
- **1c operational / B2B SaaS (the natural first market):** classic B2B outbound —
  UC-2-scored accounts, PQL expansion motions; this is also the *internal* variant
  (Orama's own GTM).
- Elsewhere: retail/e-commerce lifecycle email (win-back, replenishment reminders) —
  couples to UC-1 and UC-3 value-weighting.

**Methodology mapping & module staging.** **At launch (W1 — M-1 + M-3):** response/
propensity GBM (M-1, shared spine with UC-2) + behavioral segmentation (M-3) +
policy-based send orchestration with holdout discipline. **Later:** M-7 uplift
(incremental-response targeting — the real prize per evidence 11 §C4's "uplift vs
propensity still rare"); M-8 composition (offer/variant arbitration); M-9-gated LLM
personalization only behind W3 governance and brand/claims guardrails (evidence 11
§C2's failure modes are the cautionary list).

**Evidence cross-references.** Evidence 07 (One Orama catalog **#2** — the admission
ticket) · evidence 11 §C3/§C4/§C7 + §A4 (component dossiers) · evidence 14 campaign
response + send-time (prioritize-now quadrant) · evidence 01/02/03: present only as
components of personalization/NBA tiers · evidence 04: #66 *Propensity Scoring*, #78
*RFM Segmentation*, #18/#19 *Customer segmentation* — components packaged, composite
absent · evidence 09: Marketing (20 apps), Sales (30).

**Open product questions.**
1. **Kernel open question 2 (verbatim):** internal-first (Orama automating Orama) or
   customer-facing module first? CPO recommendation: internal-first for one full
   measured cycle (see T-6).
2. Deliverability liability: sending through customer ESP accounts only (recommended),
   or ever through Orama-managed infrastructure?
3. Where is the consent-management boundary — do we require the customer's ESP/CRM to
   be the consent source of truth (recommended) or hold suppression state in-module?
4. When M-9 lands, what is the approval workflow for LLM-personalized copy (human
   review per variant? per sequence?) under the correctness-gate brand promise?

---

## 3. Tier 2 — structured briefs (year 1–2, gated)

Kernel D3 lists eight Tier-2 use cases. Each brief states the problem, the decision
skeleton, why it earns Tier 2 (not 1, not 3), its methodology mapping, its evidence,
and — the defining field — its **gate**: the specific governance and/or engine maturity
that admits it to active development. A Tier-2 entry does not get roadmap dates until
its gate is credibly scheduled (kernel D7.3 discipline applied to demand).

### T2-1 · Fraud & AML **triage** (assistive — not real-time decisioning)

- **Problem.** Rule-based AML monitoring buries compliance teams in alerts that are
  >90–95% false positives while sophisticated laundering passes; fraud queues have the
  same triage shape. The business wants analyst hours ranked onto the alerts that
  deserve them (evidence 11 §E2).
- **Skeleton.** Entity: the alert / customer / account network. Decision: investigation
  priority, auto-close of validated low-risk classes, case packaging. Label:
  alert-disposition history — excellent for triage (the sub-problem we scope to), weak
  for true crime. Horizon: daily batch + investigation cycles.
- **Why T2.** Enormous pool — ~$206B/yr global financial-crime compliance cost [M]
  (LexisNexis 2023), $4.6B AML fines in 2024 [M] (Fenergo) — and ML triage overlays
  show 30–60% false-positive reduction at equal-or-better detection [C] (evidence 11
  §E2.14). But every action must be audit-defensible under direct regulatory
  supervision, and item 11 puts AML-beyond-triage in feasibility F3 on
  governance friction. Items 01/02/03 all defer it past their first wave (02: wave 3
  "financial crime … after governance, evidence handling, human approval, and
  auditability are mature"). Item 14 places AML in its explore-selectively quadrant —
  aligned.
- **Methodology.** M-1 triage GBM on alert/customer features (W1-capable) + **M-2
  entity resolution at production grade** (network fragmentation is the classic
  failure) + graph analytics (W3-adjacent); SAR-narrative drafting only after M-9.
- **GATE.** *Governance:* R6 (identity-scoped access, audit trails, approval gates)
  live in a regulated reference deployment + zero-governance-violation track record
  from ≥2 Tier-1 FS deployments (kernel D8 guardrail as an admission credential);
  regulator-grade model documentation capability. *Engine:* M-2 v2 (entity resolution
  beyond thin), R4 (indexing for network queries). *Posture:* assistive triage only;
  auto-closure classes require regulator-accepted validation evidence.
- **Evidence refs.** 11 §E2 (full dossier) · 14 AML dossier (explore-selectively) · 04:
  #3 *Compliance: AML and KYC*, #30 *rule-based financial fraud*, #38 *fraud with
  geospatial analytics* · 09: Compliance / Regulatory (28 apps).

### T2-2 · Credit-risk-adjacent scoring (SR 11-7 discipline required)

- **Problem.** Credit extension decisions (B2B trade-credit limits, deposit gating,
  lending adjacent) misjudge counterparties: too conservative loses revenue, too
  permissive produces defaults (evidence 11 §D3).
- **Skeleton.** Entity: application/account/counterparty. Decision: approve/decline,
  limit, price. Label: default/delinquency within the performance window — slow,
  censored (reject inference), unambiguous. Horizon: seconds–days decision; labels
  mature over years.
- **Why T2.** The best-documented ML delta in the entire evidence base — Upstart/CFPB:
  **+27% approvals at equal loss rates, −16% APR** [M — regulator-summarized]
  (evidence 11 §D3.14) — and item 14 ranks credit risk #14 (4.8). But the binding
  constraint is validation/governance, not modeling: SR 11-7 model risk management,
  ECOA/fair-lending disparate-impact testing, adverse-action reason codes, EU AI Act
  high-risk class (evidence 11 §D3.10). The kernel's own D5-1a targeting note (OCC
  model-risk guidance bites at banks >$30B assets — evidence 08) makes this the module
  our governance primitives are *for* — once they're proven.
- **Methodology.** M-1 in its regulated form: constrained/explainable GBM or scorecard
  structure + SHAP-adjacent reason codes + champion/challenger harness. The **B2B
  trade-credit limit variant is the recommended first instance** — same skeleton,
  lighter regulatory surface (evidence 11 §D3.11), natural upsell from UC-4 (credit
  decides terms; collections recovers them — §D3.12).
- **GATE.** *Governance:* champion/challenger + model-inventory + validation-doc
  tooling shipped (E7-adjacent capability); fair-lending testing harness; a bank
  design-partner whose model-risk team co-signs the validation plan. *Engine:* R6.
  *Sequencing:* after S-4 is live in ≥1 FS account (vocabulary + trust path).
- **Evidence refs.** 11 §D3 (full dossier) · 14 credit risk (#14; prioritize-now) · 02
  wave 1 names credit within "fraud/credit decisioning" but with governance caveats ·
  04: #14 *Credit Card Transactions Analytics*, #52 *Model Risk Management With EY* ·
  09: Finance (30), Risk and Insurance (12).

### T2-3 · Insurance claims triage & lapse/retention

- **Problem.** Incoming claims are routed by rote: simple claims crawl through manual
  handling (cycle-time cost, CX damage) while complex/severity-creeping claims reach
  senior adjusters late (leakage); separately, policyholders lapse at renewal without
  targeted retention (evidence 11 §L10, §A1 insurance variant).
- **Skeleton.** Claims triage — entity: the FNOL claim; decision: fast-track /
  standard / complex / SIU-referral routing + reserve flag; label: cycle time, ultimate
  incurred cost, routing accuracy; horizon: minutes at FNOL. Lapse — UC-1's insurance
  variant (renewal-cycle horizon, agent-mediated treatments).
- **Why T2.** Strong external support — item 14 ranks insurance claims triage **#11
  (5.0)**; STP on standardized lines is industry-proven (Lemonade-class insurtechs;
  30–60% STP ranges industry-cited [C/V], evidence 11 §L10) — and the kernel D5 makes
  insurance Tier-1b with "claims triage (T2)" named in its beachhead row. It is T2
  rather than T1 because FNOL intake is document/photo-heavy (M-9/document AI is W3)
  and the NAIC AI Model Bulletin compliance surface needs the governance kit.
  **Lapse/retention needs no gate beyond an insurance partner** — it ships as the S-1
  insurance variant (already covered under UC-1), which is exactly how the kernel D5
  row reads ("UC-1 lapse/retention").
- **Methodology.** M-1 severity/complexity GBM on FNOL + policy features (W1-capable
  for structured-data triage) + M-9 document/photo intake (W3) for full FNOL
  automation; M-6 for claim-development/severity trajectories.
- **GATE.** *Governance:* NAIC AI bulletin compliance mapping + carrier model-governance
  sign-off pattern. *Engine:* M-9 (W3) for document-grade intake; structured-data-only
  triage may pilot earlier with an insurance design partner. *Sequencing:* after the
  1b beachhead partner is signed; UC-1-lapse first, triage second.
- **Evidence refs.** 11 §L10/§L11 (+§E3 fraud-referral boundary) · 14 claims triage
  (#11) · 04: #84 *Smart Claims for Insurance*, #11 *Claims Management Automation* ·
  09: Risk and Insurance (12), Compliance / Regulatory (28).

### T2-4 · Employee attrition (heightened HR governance)

- **Problem.** Valuable employees quit with little warning; each departure costs
  50–200% of salary [C-modeled] (Gallup/SHRM), and US voluntary turnover runs ~$1T/yr
  [C-modeled] (evidence 11 §I1.4). The business wants segment-level flight-risk and
  drivers early enough for policy and manager interventions.
- **Skeleton.** Entity: the employee — **scoped to role × site segment by default**
  (the ethical-hazard reducer, evidence 11 §I1.5). Decision: manager check-in,
  comp/plan adjustment, workload/rotation change, systemic policy fix. Label: voluntary
  exit within 3–12 months (regrettable vs non-regrettable). Horizon: quarterly scoring.
- **Why T2.** Technically it is UC-1's twin (tabular churn on HRIS data — M-1+M-6,
  W1-capable); item 11 says so explicitly ("classic tabular churn") but places it
  feasibility F3 because **organizational/ethical feasibility is the binding
  constraint**: EU AI Act treats employment AI as high-risk, works-council/GDPR
  clearance, score-leakage into performance decisions is the trust-collapse failure
  (evidence 11 §I1.10, §I1.15). Item 14 places attrition in explore-selectively.
  Weakest actionability in the catalog relative to model quality (§I1.8) — segment
  policy, not individual saves, is where value lives.
- **Methodology.** M-1 + M-6 survival at segment level; SHAP driver reporting;
  engagement-text NLP features later (M-9).
- **GATE.** *Governance:* HR-grade access controls (who may see scores — R6
  identity-scoping), documented no-adverse-use policy pattern, EU-AI-Act-high-risk
  compliance artifacts, works-council playbook. *Posture:* segment-level reporting
  default; individual-level only under an explicit governance addendum. *Sequencing:*
  never the first module in an account.
- **Evidence refs.** 11 §I1 (full dossier) · 14 attrition (explore-selectively) · 02
  wave 3 ("workforce planning") · 04: none directly (whitespace, but for governance
  reasons rather than demand) · 09: HR / People (28 apps — demand exists).

### T2-5 · Customer-service ticket triage

- **Problem.** Inbound support volume must be understood, prioritized, and routed
  before anyone can help; manual triage is slow and inconsistent, and misroutes
  multiply handle time (evidence 11 §B1).
- **Skeleton.** Entity: the ticket. Decision: category, priority, queue/agent
  assignment. Label: final resolved category/team — free from history. Horizon:
  seconds–minutes at arrival.
- **Why T2.** Both compendia rate it among the most feasible use cases anywhere (11:
  feasibility F1, "labels free, platform-native action"; 14: feasibility 5.0 rank #3,
  value #21) — on pure demand evidence it would be T1. It is T2 for two portfolio
  reasons: (a) the core is **text classification**, which sits in M-9's wave (W3) —
  admitting it early would break the D2 wave discipline for one use case; (b) it is
  the **most commoditized** use case in the catalog (native features in
  Zendesk/ServiceNow — evidence 11 §B1.13), so differentiation-per-effort is the
  lowest in Tier 1's candidate set. Recorded as tension **T-7** (Appendix A): if an
  M-9-lite (LLM-API classification without the full retrieval stack) is admitted to an
  earlier wave, ticket triage is the first beneficiary.
- **Methodology.** LLM/transformer classification + rules for compliance categories →
  platform routing API (evidence 11 §B1.16); M-1 on ticket metadata is a weak interim.
- **GATE.** *Engine:* M-9 (or an explicitly kernel-approved M-9-lite) — W3. *Demand
  trigger:* ≥1 Tier-1 account requesting it as module attach (the kernel D6 expansion
  motion).
- **Evidence refs.** 11 §B1 (full dossier) · 14 (#21; feasibility #3) · 01 Tier-1 #3
  (customer support automation family) · 02 wave 1 (customer service) · 03 embedded in
  service family · 04: #44 *LLMs for Customer Service Analytics*, #46 *LLMs for
  Customer Service and Support*, #47 *Optimize Customer Email Support* · 09: Customer
  Success (26), Cross-Functional (17).

### T2-6 · Supplier risk

- **Problem.** Supply disruptions arrive unannounced from supplier failures (financial,
  operational, geopolitical); post-COVID, monitoring became a board topic. The business
  wants suppliers risk-tiered and monitored so dual-sourcing/buffer decisions happen
  before the disruption (evidence 11 §F6 compact row).
- **Skeleton.** Entity: the supplier. Decision: qualify / monitor intensity / diversify
  / buffer. Label: disruption/failure events — **rare events, weak labels** (the
  defining constraint). Horizon: continuous monitoring + sourcing events.
- **Why T2.** Real demand (boomed 2020–2023; monitoring vendors mainstream in large
  manufacturers) but item 11's verdict is sober: "predictive power modest, monitoring
  value real" and it sits in feasibility F3 (rare events, weak labels). Item 14 places
  it explore-selectively. The near-term value is **monitoring + scoring composition**
  (financial signals + delivery-performance from ERP + news/adverse-media), not
  disruption prediction — scope honesty prevents an overpromise failure.
- **Methodology.** M-1 risk scoring on performance/financial features + M-5 anomaly on
  delivery patterns (W2) + NLP event monitoring (M-9, W3) for the news layer.
- **GATE.** *Engine:* M-5 (W2) for the useful core; M-9 for the differentiated news
  layer. *Demand trigger:* an operational-account (1c) design partner with a sourcing
  organization; pairs naturally as module attach after S-5/S-6.
- **Evidence refs.** 11 §F6 · 14 supplier risk (explore-selectively) · 02 wave 2
  (procurement/supplier orchestration) · 04: none direct (adjacent: #27 *ESG
  Performance Analytics*) · 09: Procurement / Supply Chain (22).

### T2-7 · Healthcare ops — no-show & denials (partner-led)

- **Problem.** (a) Patient no-shows (commonly 10–30% by setting) waste clinical
  capacity; (b) payers initially deny ~12% of hospital claims for predictable,
  preventable reasons — hospitals spent **$19.7B in 2022** fighting denials [M]
  (AHA; evidence 11 §L1.4, §L4).
- **Skeleton.** No-show — entity: the appointment; decision: remind/overbook/
  reschedule/transport-assist; label: attended vs no-show; horizon: days ahead.
  Denials — entity: the claim (pre-submission) / the denial (post); decision:
  fix-before-submit, appeal vs write-off, root-cause programs; label: payer
  adjudication outcomes (CARC/RARC codes — exceptional label quality); horizon:
  days + appeal windows.
- **Why T2.** Denials is item 11's healthcare-most-tractable verdict ("the best-labeled
  problem in healthcare", feasibility F1-listed; value T2 #11) and item 14 ranks
  healthcare claims/denials **#9 (5.0)**; no-show is a simple M-1 tabular problem. The
  gate is not modeling — it is the **healthcare environment class**: HIPAA/BAA
  posture, EHR/clearinghouse (835/837) connectors, and kernel D5 places
  healthcare in industry Tier 2 ("close #3, longer cycles" — evidence 08). Partner-led
  means: admitted when a health-system/RCM design partner brings the environment.
- **Methodology.** No-show: M-1 (W1-capable). Denials: M-1 denial-risk GBM +
  denial-code root-cause analytics (K2-shaped) + LLM appeal drafting only after M-9
  with grounding guardrails (hallucination in a regulated document is the named risk —
  evidence 11 §L1.15).
- **GATE.** *Governance:* HIPAA/BAA operating pattern + healthcare reference
  architecture (one per environment class — kernel D7.4). *Demand trigger:* signed
  healthcare partner (industry Tier-2 wave, warmest-intro rule — kernel D5). *Engine:*
  M-9 for appeal drafting; prediction layers are W1/W2-capable.
- **Evidence refs.** 11 §L1 (full dossier), §L4 · 14 healthcare claims/denials (#9),
  patient no-show (#33) · 02 wave 3 but "probably the strongest first vertical
  template" for agentic-era work (noted, not adopted — our industry order comes from
  evidence 08) · 04: #35 *Healthcare X12 Claims*, #51 *Medicare Risk Adjustment*, #36
  *HEDIS Engine* · 09: Clinical and Lab Services (16 apps).

### T2-8 · Forecast-to-action automation (upgrades of UC-5/6)

- **Problem.** UC-6 ships assistive: recommended POs reviewed by humans. The mature
  end-state in the industry is auto-replenishment — recommendations that execute
  (evidence 11 §F2.8). The upgrade converts S-5/S-6 from decision support into a
  closed loop, which is where the external evidence says the compounding value lives
  (evidence 02/03's closed-loop thesis).
- **Skeleton.** Same entities as UC-5/6; the decision changes from "recommend" to
  "execute within policy envelope" (order-size caps, exception thresholds,
  human-review classes).
- **Why T2.** Not a new demand — a **graduation**. The kernel names it explicitly in
  the T2 list, and D7.5 defines the path: shadow production first, automation only
  after human-reviewed parity is demonstrated. This entry exists in the catalog so the
  graduation is a *decision with evidence*, not a drift.
- **Methodology.** M-4 outputs + M-11 constrained optimization (W4) for the full
  version; policy-envelope automation of simple reorder classes may precede M-11 under
  the same gate.
- **GATE.** *The kernel D7.5 gate verbatim:* every solution runs human-reviewed
  alongside the existing process before any automated action. Quantified: ≥1 full
  seasonal cycle of S-6 shadow/assistive operation in the account, recommendation-
  acceptance and override-quality data reviewed, exception taxonomy stable; engine R4
  + (for MEIO-grade) M-11/W4.
- **Evidence refs.** 11 §F2 (auto-replenishment as standard practice at scale) ·
  02/03 closed-loop framing (the thesis source) · 04: #79 *Safety stock*, #86
  *Supply Chain Distribution Optimization* · 09: Operations / Logistics, Warehouse /
  Distribution.

---

## 4. Tier 3 — later (each with its qualifying condition)

One paragraph each (kernel D3 T3 list). These are tracked, re-scored at intake reviews,
and **not roadmapped**. The pattern they share: each demands W3/W4 methodologies plus
governance maturity, and each has a "talked-about > deployed" gap in the prevalence
evidence (evidence 11 §S6) that makes early entry a credibility risk for a
correctness-branded product.

**T3-1 · Next-best-action / personalization engines.** The treatment-choice layer above
UC-1/UC-2/UC-9: which action (offer/message/service/nothing) per customer × moment,
arbitrated across channels under contact-fatigue budgets. Item 11: "mature in
telco/banking decisioning suites; aspirational elsewhere — the brain is often rules in
practice" (§A6), value T3 [V], feasibility F3 at full scope ("a program, not a
project"); item 14 ranks NBA #36. Items 01/03 rank the *family* Tier-1 — but as the
composite end-state, which is exactly what M-7+M-8 build toward. **Qualifying
condition:** M-7 uplift + M-8 arbitration shipped (W3) *and* ≥2 live solutions in the
account already producing the propensity/value inputs (NBA composes existing modules;
it is an attach SKU, never a first sale).

**T3-2 · Real-time fraud decisioning.** In-line approve/challenge/decline at
authorization time (<100ms). The single highest-value use case in both compendia
(11 §E1 value #1; 14 #3) — and deliberately not ours yet: it demands streaming
infrastructure and millisecond serving (engine capability beyond R4), an adversarial
red-queen maintenance posture, and consortium/network data that advantages incumbents
(Stripe Radar-class network effects — evidence 11 §E1.10 "the build/buy answer is
usually buy"). The kernel's anti-portfolio already excludes *autonomous high-stakes
decisioning*; real-time fraud is its nearest admissible cousin. **Qualifying
condition:** engine R5 (compute-near-data) + proven streaming-serving reference
architecture + a partner whose fraud economics justify build-over-buy (e.g.,
processor/PSP scale) + the T2-1 triage module live as the assistive precursor.

**T3-3 · Pricing optimization.** Item 11 value #2, item 03 Tier-1 #3 — a top-3 pool by
every external measure (1% price ≈ +8% operating profit [M]). Deferred because: causal
validity is genuinely hard (elasticity from confounded observational data is failure
pattern #5 — evidence 11 §S7), B2C dynamic pricing carries PR/regulatory tail risk,
and B2B pricing's binding constraint is sales-force adoption, not modeling
(evidence 11 §A2.10). **Qualifying condition:** M-7 causal machinery (W3) + a
constrained first shape — **B2B deal/discount guidance with SHAP deal drivers**
(the A4-adjacent variant, evidence 11 §A2.16) — in an account where S-2 is already
trusted; never visible-consumer dynamic pricing as an early deal.

**T3-4 · RAG knowledge assistants.** Knowledge-base retrieval / document Q&A / "chat
with your data." Explicitly the anti-ICP disqualifier as an *engagement shape*
(evidence 08: "wants an LLM copilot / RAG search, not a trained model" = pass), and
item 03's Tier-3 warning ("enterprise search … unless embedded in high-value
workflows"). Yet M-9 (W3) makes retrieval a *component* — B8-shaped grounding inside
T2-5, appeal drafting in T2-7, playbooks in S-1. **Qualifying condition:** kernel open
question 5's answer — re-admitted as a standalone module only when it ships *inside* a
measured decision workflow with the correctness gate extended to grounded-generation
faithfulness (M-9 + R6), and never sold to a RAG-only buyer (the anti-ICP filter
stays).

**T3-5 · Agentic workflow automation.** Tool-calling agents executing multi-step
business processes. The widest rhetoric-reality gap in the current evidence: 62% of
orgs experimenting, ≤10% scaled in any function [M-survey] (McKinsey 2025), >40% of
agentic projects predicted canceled by end-2027 [projection] (Gartner 2025)
(evidence 11 §S6). The kernel places M-10 in W4 with the Auto-RL base model — the
compounding moat, entered deliberately late. **Qualifying condition:** W4 (M-10)
+ R8 learning loop + governance maturity (R6 operating history), and first instances
scoped to *assistive* agents inside existing modules (e.g., S-4 dunning-sequence
drafting) under D7.5 shadow discipline.

**T3-6 · AIOps.** Incident prediction/triage on IT telemetry. Item 14 ranks it #16;
item 11 notes correlation/noise-reduction is mature vendor territory (BigPanda-class)
and "prediction proper is oversold" (§H2). It is the same M-5 anomaly + M-1 triage
machinery as UC-7/UC-8 pointed at IT — methodology reuse is free — but the buyer
(VP infra/SRE) is outside our beachhead champion map and the vendor field is dense.
**Qualifying condition:** an existing Enterprise account pulls it (module attach to a
platform team we already serve) — demand-led admission only; no standalone GTM.

---

## 5. Anti-portfolio — what we refuse, and the argument

Kernel D3's anti-portfolio, elaborated. These are not "later"; they are **filters** —
each with the argument recorded so sales, intake, and partners apply them consistently.
Source discipline: the anti-ICP hard filters come from the 3-model design-partner
council (evidence 08, unanimous section) and the Tier-3/failure-mode evidence of
items 01–03 and 11.

| # | Excluded | The argument |
|---|---|---|
| AP-1 | **Generic chatbots / copilots** | Item 03 Tier-3 verbatim: "generic chatbots … valuable only when wired to decisions." Klarna's own 2025 moderation of its AI-first support stance (evidence 11 §B2.14) is the cautionary arc: deflection theater (containment up, CSAT/churn worse) is failure pattern #3 (evidence 11 §S7). Zetta sells *trained-on-your-data decision intelligence* (evidence 06); a chatbot is neither the wedge nor the brand. Service automation re-enters, if ever, only as T2-5's routing layer — a decision problem with hard KPIs. |
| AP-2 | **LLM-copilot / RAG-only engagements** | The anti-ICP names this a **disqualifier, not a wedge** (evidence 08 scorecard: "Wants an LLM copilot / RAG search, not a trained model" = pass on the account). Strategic reason: it selects buyers who want inference over a rented model — the exact opposite of the own-data-training moat (kernel D9.6; evidence 06 "learning, not inference"). Economic reason: RAG-only value evidence is the thinnest in the catalog (MIT NANDA's 95%-no-P&L-impact pattern concentrates here — evidence 11 §S7 backdrop). T3-4 defines the only re-entry path. |
| AP-3 | **Autonomous high-stakes decisioning** (credit denial, claims denial, benefits, hiring, real-time blocking without human path) | Kernel D9.3 (assistive before automated) + D7.5 (shadow production) make this structural, not tactical. The evidence's disaster file is unambiguous: Robodebt royal commission (2023), Dutch Toeslagenaffaire (government resignation, 2021), MA algorithmic-denial litigation (2023), Air Canada chatbot liability (2024) (evidence 11 §S6, §S7 pattern 9). The council's wedge resolution says the same: "never autonomous high-stakes decisions" for partner proofs (evidence 08). Correct-by-construction is the brand — one governance scandal ends it (kernel D8: governance violations = 0). |
| AP-4 | **Vision-first industrial inspection (initially)** | Real value (BMW 95→99% accuracy [C] — evidence 11 §G2) but wrong for us now: half the project is camera/lighting *hardware* engineering (§G2.10), defect libraries are the asset (physical-world data acquisition, not data exhaust), and vision sits outside the W1–W3 methodology waves (kernel D2 lists vision as "opportunistic/partner-led" in W4). It violates criterion 4 (data exhaust already exists) — the only Tier-1-value use case that does. Revisit as partner-led W4 work only. |
| AP-5 | **Federal / classified as early deals** | Anti-ICP hard filter (evidence 08: "direct federal/classified deals as a first cohort" = disqualifier): procurement cycles outlast a pre-PMF product, compliance regimes (FedRAMP+) are a company-scale investment, and the public-sector cautionary tales carry the highest governance stakes in the compendium (evidence 11 §L21). Kernel D5 defers the vertical entirely. Not a judgment on the long-term market — a sequencing refusal. |

Two adjacent **deal-level** filters from the anti-ICP travel with this list though they
are account filters rather than use-case exclusions: prospects demanding we take raw
data into *our* cloud (violates the in-your-environment thesis — evidence 06/08), and
AI-tourist innovation labs with no production owner (no prototype-to-production
champion = no deployment — evidence 08). Intake (§6) screens both.

---

## 6. The intake process — how a use case enters the catalog

Kernel D9.5 (operating principle): *"Evidence-based catalog growth — new use cases
enter via the `add-use-case` research runbook and this kernel's criteria; the catalogs
and the wtm blueprint stay in sync."* This section is that principle made operational:
the pipeline, the scorecard, and the sync obligations.

### 6.1 The pipeline (who does what)

| Step | Action | Owner | Artifact |
|---|---|---|---|
| 1 | **Frame the problem in one sentence** — pin entity, label (+definition, horizon, censoring), point-in-time knowability/leakage traps, and the decision the output drives. *"If you can't say it in a sentence, stop — there's no ROI yet"* (add-use-case runbook, step 1). | Proposer (anyone) + CPO | One-sentence framing + skeleton |
| 2 | **Deep research** — run the `add-use-case` skill to generate the tailored Perplexity Deep Research prompt; run it; capture the dossier **verbatim** as a new evidence item (evidence capture rules apply — analysis stays out of the evidence folder). | Proposer | Evidence NN (new dossier) |
| 3 | **Score against the selection scorecard** (§6.3) using the dossier + cross-checks against evidence 11/14 (does it appear? what tier/rank? what flags?), 04/05 (is it packaged by competitors?), 09 (prior-art demand). | CPO | Completed scorecard |
| 4 | **Tier decision** — admit to T3/T2/T1 (or anti-portfolio) per §6.4 thresholds. T1/T2 admissions and any anti-portfolio change are **kernel edits** (D3 owns the tier lists) — proposed as small PR-style kernel changes with the scorecard attached. T3 entries and re-scorings live in this doc only. | CPO → kernel review (exec team) | Kernel PR + this doc updated |
| 5 | **Assign the ID** — next free `UC-n` at T2-admission or above (T3 entries keep slugs; see §1.2); check the wave implication (does it demand a new methodology? apply the **reuse rule**: a new `M-n` is admitted only when ≥3 tiered use cases demand it — kernel D1). | CPO + CTO | ID reservation |
| 6 | **Land it in the blueprint** — wtm ORAMA-ZETTA `use_case` artifact `UC-N` mirroring UC-1's generic body + dependency closure; then `zetta-sync` (docs site + keyed GitHub issues); write `docs/ucN.md` mirroring the UC-1 exemplar. | CTO/eng | Blueprint artifact + synced surfaces |
| 7 | **Build via worktree plan** when roadmapped (T1 or gate-cleared T2). | Eng | wtm worktree plan |

Steps 6–7 follow the add-use-case runbook (`docs/runbooks/adding-a-use-case.md` in the
umbrella bridge) verbatim — this catalog adds the tiering layer (steps 3–5) in front of
it. The runbook's anti-patterns are adopted as intake rejections in their own right:
backward start ("we have data, what can we do?"), leakage-prone framing, overpromise
("automates everything"), bespoke creep (one customer's exact tables), model-in-the-
hot-path without a correctness gate.

### 6.2 Standing intake triggers

New candidates arrive from four standing sources, reviewed quarterly:
1. **Module-attach pull** — an Enterprise account asks for an adjacent problem (the
   kernel D6 expansion motion). Strongest signal; T2 gates still apply.
2. **Evidence refresh** — new compendium items or re-runs shift a ranking (e.g., a T3
   entry's qualifying condition is met by a wave landing).
3. **Design-partner discovery bench** — the 20–40-account bench (evidence 08) surfaces
   named, urgent, dollar-attached problems.
4. **Internal dogfood** — Orama operating Orama (UC-9's internal-first pattern).

### 6.3 The selection scorecard (reusable rubric)

Score 0–3 per dimension against the research dossier. The dimensions are the kernel D3
criteria (§1.3) plus the two deal-reality dimensions the design-partner scorecard
proved out (evidence 08). **Gate rule (adopted from the council's scorecard mechanics):
weighting is cosmetic; admission gates on "no disqualifier + a named, budget-adjacent
owner"** (evidence 08).

| # | Dimension | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| 1 | **Economic pool** | No credible pool | Pool asserted, [T] only | Pool cited [C/V] with arithmetic | Pool measured [M] or regulator/benchmark-grade |
| 2 | **Decision frequency** | Annual/one-off | Quarterly | Weekly–daily queues | Continuous / per-event |
| 3 | **Closed-loop actionability** | Insight only; no owner | Owner exists, workflow doesn't | Named system of action, human-mediated | Prediction writes into the system of action (gated) |
| 4 | **Data availability (tabular-first)** | Data must be acquired/instrumented | Exists but fragmented; heavy joins | In systems of record; labels derivable | Labels generated free by operations; point-in-time reconstructible |
| 5 | **Measurability** | No KPI; impact unattributable | KPI exists, no baseline | Before/after credible | Holdout/A-B natural and cheap |
| 6 | **Governance fit (low-liability first)** | Autonomous high-stakes decision | Regulated decision, human-in-loop viable | Sensitive but assistive-safe | Low-liability, assistive by nature |
| 7 | **Engine feasibility today** | Needs W4/unbuilt engine (R5/R8) | Needs W3 (R4/R6) | Needs W2 (R3/R4-lite) | Runs on W1 (R1/R2) |
| 8 | **Methodology reuse** | New methodology for this alone | Stretches an existing M-n | Recombines existing M-n | Pure reuse of shipped M-n components |
| 9 | **Demand evidence breadth** | Absent from 11/14/09/04 | In one source | In 11+14 (agreeing) or strong single [M] | Tiered by external DRs + packaged by competitors + prior-art demand |

**Disqualifiers (any = anti-portfolio or refuse-at-intake, regardless of score):**
matches an AP-1…AP-5 exclusion · requires raw data in our cloud · no
prototype-to-production owner anywhere in the target segment · label cannot be defined
point-in-time (structurally leaky) · the buyer's real ask is a RAG copilot (AP-2).

**Flag, don't score:** evidence-quality flags ([M]/[C]/[V]/[T]) travel with the pool
claim into the catalog entry, per the item-11 convention — thin evidence lowers
confidence, not necessarily tier (see UC-4, UC-7 precedents), but it must be visible.

### 6.4 Thresholds (calibrated so today's catalog reproduces itself)

- **Tier 1:** total ≥ 22/27 · no dimension ≤ 1 except at most one 1 with a written
  mitigation (precedents: UC-8 scores 1 on data availability, mitigated fleet-first;
  UC-7 scores 1 on demand-evidence, mitigated by the semantic-layer self-remedy) ·
  engine feasibility ≥ 2 · plus a kernel edit.
- **Tier 2:** total ≥ 17 · a **named gate** written in the T2 format (§3) — a T2 entry
  without an articulable gate is a T3 entry.
- **Tier 3:** total ≥ 12 · a **qualifying condition** naming the wave/governance event
  that triggers re-scoring.
- **Below 12** or any disqualifier: recorded in the intake log with the argument (the
  anti-portfolio grows by kernel edit only).

### 6.5 Sync obligations

An admission is not done until: the kernel D3 list reflects it (T1/T2) · this document
carries the brief · the wtm blueprint carries `UC-N` + dependency closure ·
`zetta-sync` has regenerated the docs site + issues · the evidence dossier is captured
under `../evidence/` per the capture rules. (Single-writer discipline: the wtm
blueprint is the source of truth for the artifact; this catalog is the source of truth
for the tiering rationale.)

---

## 7. Coverage analysis — the portfolio against the demand space

Two maps: the portfolio against item 11's twelve function families (the problem-space
axis), and against item 09's seventeen prior-art categories (the demand-breadth axis).
The purpose is honesty about shape: where we are deep by design, where we are absent by
design, and where absence is unexamined (none, after this pass — every family below
carries a rationale).

### 7.1 Against item 11's twelve function families

| Family (item 11) | Use cases there | Our coverage | Depth & rationale |
|---|---|---|---|
| **A. Customer / revenue** (12) | churn, pricing, recsys, lead scoring, CLV, NBA, win prediction, sales forecasting, promo, basket, sentiment, VoC | **Deepest: UC-1, UC-2, UC-3, UC-9** + T3-1 (NBA), T3-3 (pricing) | The factory's home family: highest M-1 reuse density, CRM/billing connector cluster, our anchor partner lives here. Deliberately absent: recsys (A3) — digital-native infrastructure play, buy-dominated, outside ICP; sentiment/VoC — LLM-commoditized (evidence 11 §A11/12). |
| **B. Service & support** (8) | triage, resolution automation, agent assist, intent, proactive care, CC analytics, CSAT, KB retrieval | **T2-5 only** (ticket triage) | Highest-feasibility family in both compendia but the most gen-AI-commoditized (platform-native features; Klarna arc). We enter with the *decision* problem (routing), not the *conversation* problem (AP-1/AP-2 exclusions). M-9-gated. |
| **C. Marketing** (7) | MMM, content gen, segmentation, response modeling, SEO, creative testing, send-time | **UC-9** (composite of C3/C4/C7 + A4) | Present exactly once, as the One Orama commitment. Deliberately absent: MMM (causal-validity F3 — failure pattern #5), content generation (AP-1-adjacent; measured-P&L evidence thinnest — NANDA pattern, evidence 11 §C2.14). |
| **D. Finance & accounting** (10) | invoice/AP, collections, credit risk, cash forecasting, exceptions, expense fraud, JE anomaly, close, working capital, FP&A | **UC-4** + T2-2 (credit-adjacent); UC-7's FP&A variance skin | The beachhead family for industry 1a. Collections chosen over touchless-AP (D1) although D1 ranks higher on feasibility — because AP automation is document-AI-first (M-9/W3, IDP vendor-saturated) while collections is tabular-first (W1) with the CFO-legible KPI. Cash forecasting (D4) is a natural S-4 adjacency noted in UC-4's staging, not a separate module. |
| **E. Fraud, risk & compliance** (10) | transaction fraud, AML, claims fraud, ATO, KYC, underwriting, model risk, sanctions, comms surveillance, clause risk | **T2-1** (fraud/AML triage) + T3-2 (real-time fraud); underwriting inside T2-3's carrier context | Enormous pools, but the family is governance-gated by construction and buy-gravity is strongest here (consortium data). Assistive triage is our admissible shape; autonomous decisioning is AP-3. Deliberately absent: KYC/sanctions (mandated, vendor-saturated, list-matching not learning). |
| **F. Supply chain & logistics** (12) | demand forecasting, inventory, routing, supply planning, spend analytics, supplier risk, leakage, ETA, fleet, slotting, order promise, S&OP | **UC-5, UC-6** + T2-6 (supplier risk) + T2-8 (automation upgrade) | The 1c-operational family; second-deepest by design. Deliberately absent: route optimization (F3) — the best-audited case in the space (ORION [M]) but OR-solver territory, mature buy market (evidence 11 §F3.16: "OR with ML inputs"); enters only if M-11/W4 makes it cheap and an account pulls it. |
| **G. Manufacturing & industrial** (8) | PdM, quality inspection, yield, fleet failure, scrap, energy, scheduling, digital twin | **UC-8** (assistive PdM) | One deliberate entry: the low-liability operational proof. Deliberately absent: visual inspection (AP-4), yield optimization (F3: observational causality + change control — a W3/W4 causal problem), digital twins ("mostly talked about" — evidence 11 §S6). |
| **H. IT, engineering & security** (12) | threat detection, AIOps, code gen, RCA, alert correlation, capacity, test gen, release risk, log anomaly, phishing, vuln, UEBA | **T3-6 (AIOps) only** | Methodology-adjacent (M-5 reuse) but buyer-adjacent-not-ours and the most vendor-dense family (SIEM/EDR/observability incumbents; code assistants are a buy category). Absence is a GTM decision, not a capability one. |
| **I. HR / people** (8) | attrition, recruiting, workforce planning, matching, skills, scheduling, engagement, mobility | **T2-4** (attrition, heightened governance) | One gated entry. Recruiting/screening is EU-AI-Act/LL144 compliance-gated with bias-absorption as the defining risk (Amazon 2018 — evidence 11 §I2) — outside low-liability-first. Scheduling optimization is real but WFM-vendor-mature. |
| **J. Legal & document** (6) | contract review, doc classification, e-discovery, obligations, reg-change, summarization | **None until W3 (M-9)** | The whole family is document-AI-first. Deliberate wave discipline: J-family problems (contract leakage F7, doc routing J2) become attach candidates the day M-9 ships — several score F1 feasibility (evidence 11 §S3) and will likely be the first W3 intake batch. |
| **K. Executive / cross-functional** (6) | KPI anomaly, driver analysis, scenario planning, reporting automation, M&A screening, research synthesis | **UC-7** (K1+K2 as one module) | The exec surface — ours by product identity ("the report solution generalized"). Deliberately absent: scenario planning/M&A/research synthesis (all "talked-about" tier, evidence 11 §S6); reporting automation rides inside UC-7's narrative layer rather than standalone. |
| **L. Industry-specific** (25) | healthcare (6), banking (3), insurance (3), retail/CPG (3), telecom (2), energy (3), public (3), RE/construction (2) | **T2-3** (insurance claims+lapse), **T2-7** (healthcare no-show+denials); banking L7/L8 inside T2-2's scope; UC-1/4/7 industry variants cover the 1a/1b beachhead rows | Industry entries enter with industry beachheads (kernel D5 owns the order), not ahead of them. Deliberately absent: public sector (AP-5 + highest governance stakes — Robodebt/Toeslagenaffaire), energy/utilities (industry Tier 3), retail/CPG specifics (industry Tier 3). |

**Shape summary.** Deep in A/D/F (customer-revenue, finance, supply chain) — the three
families where tabular-first + natural labels + native action paths coincide (item 11's
own conclusion: "the tabular-with-natural-labels + native-action-path quadrant is
systematically the most attackable" — §S3). Present-with-gates in E/G/I/L. Absent by
explicit decision in B-conversation, C-content, H, J-until-M-9, K-speculative, and the
governance-extreme corners. Every absence traces to a kernel decision (waves D2,
industries D5, anti-portfolio D3, or gates D7) rather than to oversight.

### 7.2 Against item 09's seventeen prior-art categories (demand breadth)

Item 09 is the retired amaro-desktop's 400-example-app catalog — a *demand-breadth*
signal (what business users asked analytics apps for), not a value ranking. Mapping
the portfolio onto its category weights:

| Item 09 category (apps) | Portfolio coverage | Note |
|---|---|---|
| Operations / Logistics (40) | UC-5, UC-6, T2-8, T2-6 | Largest prior-art category → second-deepest portfolio family. Aligned. |
| Finance (30) | UC-4, T2-2, UC-7 (FP&A skin) | Aligned; joint-2nd demand → beachhead family. |
| Sales (30) | UC-2, UC-9, UC-3 | Aligned; joint-2nd demand → three T1 modules touch it. |
| Compliance / Regulatory (28) | T2-1, T2-2 (governance artifacts) | Gated presence — consistent with low-liability-first; demand exists and waits on R6. |
| HR / People (28) | T2-4 only | **Deliberate under-coverage** vs demand weight: governance risk (EU AI Act high-risk) outweighs breadth signal. |
| Customer Success / Acct Mgmt (26) | UC-1, UC-3 | Aligned — the anchor lives here. |
| IT / Engineering (26) | T3-6 only | Deliberate under-coverage: buyer map + vendor density (§7.1 H). |
| Warehouse / Distribution (24) | UC-6 | Aligned. |
| Fleet Management (23) | UC-8 (fleet-first variant), UC-5/6 | Aligned — and validates the fleet-first S-8 recommendation (prior-art demand had a whole fleet category). |
| Executive / Leadership (22) | UC-7 | Aligned — the exec surface. |
| Procurement / Supply Chain (22) | T2-6; F5/F7 as W3 intake candidates | Partial; leakage detection (F7) flagged for the first M-9 intake batch. |
| Quality Assurance (21) | UC-8 boundary only | Deliberate: G2 vision is AP-4; QA-as-tabular (scrap drivers, G5) is a UC-7/UC-8 skin candidate. |
| Marketing (20) | UC-9 | Aligned at one module; MMM/content absences argued in §7.1 C. |
| Cross-Functional / Special (17) | UC-7 | The anomaly/driver surface is the cross-functional app. |
| Clinical and Lab Services (16) | T2-7 | Gated on the healthcare environment class — matches industry Tier 2. |
| Data and Analytics (15) | UC-7 + the platform itself | Zetta *is* this category's product. |
| Risk and Insurance (12) | T2-3, T2-1 | Aligned with industry 1b gating. |

Breadth check: the nine T1 modules + eight T2 entries touch 15 of 17 prior-art
categories; the two under-covered relative to demand weight (HR, IT/Engineering) are
under-covered **on purpose** with recorded arguments. Demand breadth is not the
constraint on this portfolio; governance and wave sequencing are — which is the
intended shape for a correctness-branded factory.

---

## 8. Demand evidence summary table

Tier-1 portfolio × the five external evidence sources. Columns: item 01 (DR #1 tier;
16 use cases, 3 tiers), item 02 (DR #2 build-order wave; closed-loop framing), item 03
(DR #3 tier; 6-dimension rubric), item 04 (Databricks accelerator presence among the
93), item 14 (external compendium value rank of ~140, with score). Item 11 (internal
compendium) column included as the internal cross-check. "—" = not tiered/ranked as a
standalone entry in that source.

| UC | 01 tier | 02 wave | 03 tier | 04 presence (accelerators) | 14 value rank | 11 value tier | Convergence read |
|---|---|---|---|---|---|---|---|
| UC-1 churn | T2 (#9; "build as NBA branch") | **1st** | **T1 #1** ("the archetype") | **5** (#33, #60, #77, #87, #88) | #13 (4.8) | T1 #6 | Unanimous top-tier across 5 of 6; 01's demotion is a composition argument our M-7/M-8 staging absorbs. |
| UC-2 lead/opp scoring | T2 ("sales opportunity mining") | **1st** ("sales ops") | — (SaaS/banking industry rows) | 1 adjacent (#66 propensity) | #51 (4.45) | T3 [C] | Mid-tier externally; T1 on reuse economics (Appendix T-2). |
| UC-3 CLV | — | — | inside churn archetype | **3** (#17, #78, #87) | #19 (4.75) | T4 | Split verdict (14 high / 11 low); resolved as composition layer (T-3). |
| UC-4 collections | T3 (finance family) | **1st** ("finance exceptions") | banking industry row | **0** — whitespace | **#2 (5.0)** | T2 #20 [T/V] | Strong on mechanism+feasibility everywhere; published-proof density is the only dissent → holdout-first delivery. |
| UC-5 demand forecasting | **T1 #2** | 2nd | **T1 #4** | **3** (#21, #91, #93) | #4 (5.0) | T1 #3 | Fully unanimous — least contested admission. |
| UC-6 inventory/replenishment | **T1 #2** (bundled) | 2nd | **T1 #4** (action half) | **4** (#56, #57, #79, #86) | #5 (5.0) | T1 #3 (joint) | Unanimous as forecasting's action layer. |
| UC-7 KPI anomaly + drivers | — | — | T3 warning (dashboards) unless wired | 0 direct (#58 mfg cousin) | grid: prioritize-now (K1) | T3 [T] | Weakest external demand signal in T1 — admitted on product-identity + self-liftable gate (T-4). |
| UC-8 PdM (assistive) | T2 | 3rd | T2 | **0** direct — whitespace (#23, #58 adjacent) | #7 (5.0) | T1 #8 (feas. F3) | Value unanimous, feasibility contested; partner-strategy admission with fleet-first mitigation (T-5). |
| UC-9 email outbound | — (components in T1 personalization) | — | — | components (#18, #19, #66, #78) | components mid-pack | components T4 | Internal (evidence 07) admission — no external source ranks the composite (T-6). |

Reading: three admissions are externally unanimous (UC-1, UC-5, UC-6); two are
external-mid/internal-strategic (UC-2, UC-4); three are strategic admissions with
recorded tensions (UC-7, UC-8, UC-9); UC-3 is a split verdict resolved by scoping. The
portfolio is therefore **evidence-led at its core and strategy-led at its edges, with
every strategic override written down** — which is what D9.5 requires.

Competitive-packaging note (evidence 04): Databricks packages five accelerators against
UC-1 and multiple against UC-5/UC-6 — validating demand where we are strongest — while
**UC-4 (collections), UC-7 (business-KPI anomaly), and UC-8 (PdM proper) have no
dedicated accelerator among the 93**: the three whitespace slots where a deployed,
correct, governed module (kernel §1: "we sell the deployed solution, not the notebook")
faces the least packaged competition. Snowflake's nine industry solutions (evidence 05)
frame verticals, not use-case modules — orthogonal, not competing, packaging.

---

## Appendix A — Tensions for kernel review

Genuine tensions between this elaboration's evidence and the kernel's decisions, per
the kernel's own protocol ("recorded in that doc's Tensions appendix and resolved
*here* first"). None are contradictions acted upon — the kernel text stands throughout
this document; these are flagged for the next kernel edit cycle.

**T-1 · None — D3's structure survived elaboration intact.** The tier lists, the
selection criteria, and the anti-portfolio all reproduced under full-evidence scrutiny
without needing reinterpretation. Recorded to make the absence explicit.

**T-2 · UC-2's external demand rank is mid-tier.** Item 14 ranks lead scoring #51;
item 11 places it value T3 [C] ("more deployed than validated"). The kernel's T1
rationale (same pipeline shape as churn, CRM wiring, high frequency) is a **reuse**
argument, which the external rankings do not score. *Ask:* kernel confirm that reuse
economics is an admissible T1 criterion in its own right (it is implied by D9.1
"reuse-led" but not stated in the D3 criteria list) — or add "methodology reuse" to
the D3 criteria, which §6.3 already operationalizes as dimension 8.

**T-3 · UC-3 (CLV) has the weakest standalone case in T1.** Item 11: value Tier 4,
prevalence "computed often, decisioned on rarely" (§S6); item 14: #19, prioritize-now.
The kernel's own rationale ("composes with UC-1/UC-2 into revenue intelligence")
already points at the resolution. *Ask:* kernel bless the scoping decision this doc
makes — **S-3 ships as the composition/value-weighting layer of S-1/S-2** (possibly as
an upgrade SKU rather than a standalone module) — or affirm standalone-module status,
in which case the CFO pricing doc should treat S-3 attach as UC-1-dependent.

**T-4 · UC-7's admission rests on a self-liftable prerequisite.** Item 11 gates K1/K2
behind semantic-layer maturity (feasibility F3; "wait" quadrant with the explicit note
that a trustworthy semantic layer moves them top-left). This doc resolves the gate by
making metric-layer codification the first S-7 deliverable on Zetta-materialized views —
which quietly assumes **R4-lite materialization** is available to a W1-labeled module.
*Ask:* kernel confirm UC-7's engine dependency is effectively W1(M-1) for driver
analysis but **W2(R4-lite + M-5)** for continuous anomaly detection, and that S-7 may
ship in two stages accordingly. (D2's table already permits this reading; making it
explicit avoids roadmap surprise.)

**T-5 · UC-8 is T1 against all three external tierings.** Items 01/02/03 place PdM
Tier 2 / wave 3 / Tier 2; item 11 rates feasibility F3 (label scarcity, fleet
heterogeneity, sensor economics). The kernel admits it on evidence-08 grounds (the
low-liability operational proof) — a strategy admission this doc supports **with the
fleet-first mitigation** (the fleet variant has the domain's best label situation,
evidence 11 §G1.11, and Motive-adjacent data). *Ask:* kernel record the mitigation as
binding — S-8's reference implementation is the fleet variant, and plant-asset PdM
deployments require a per-account feasibility screen (instrumentation + label history)
at intake — so the strategy admission doesn't silently become a plant-floor promise.

**T-6 · UC-9 has no external demand evidence as a composite.** Its admission ticket is
One Orama catalog #2 (evidence 07) — internal. Kernel open question 2 (internal-first
vs customer-facing) is still open. *Ask:* resolve Q2 as **internal-first**: run
Orama's own outbound on the module for one full measured cycle (holdout-proven
pipeline contribution), capture the result as a new evidence item, then re-score UC-9
through §6.3 with real demand evidence before customer-facing GTM spend. This converts
the portfolio's only evidence-free admission into an evidence-generating one at
near-zero cost.

**T-7 · Ticket triage's tier is wave-discipline-driven, not demand-driven.** Both
compendia rate T2-5 among the most feasible, provable use cases anywhere (11: F1; 14:
feasibility #3); items 01/02 put service automation in their first tier/wave. It sits
in T2 solely because text classification lives in M-9/W3 and because
commoditization lowers differentiation. *Ask:* kernel decide whether an **M-9-lite**
(LLM-API classification without the retrieval/generation stack) may be admitted to W2
— if yes, T2-5's gate collapses to a demand trigger and it becomes the natural
fourth-module attach in service-heavy accounts; if no, the current gate stands. (This
interacts with kernel open question 5's LLM-readmission condition.)

**T-8 · The D3 criteria list omits two dimensions this doc needed.** Elaboration
required "methodology reuse" (T-2) and "demand-evidence breadth" (used to justify
UC-7/UC-9 flags) beyond the kernel's seven criteria. §6.3 includes both as dimensions
8–9. *Ask:* kernel adopt the nine-dimension scorecard as the D3 criteria's operational
form (small edit; no tiering consequence — recalibration in §6.4 was set so the current
catalog reproduces itself).

---

*End of use-case portfolio. Kernel D3/D1 elaborated; tensions T-2…T-8 await kernel
review. Sibling elaborations: methodologies in
[`03-methodology-portfolio.md`](03-methodology-portfolio.md), module specifications in
[`04-solutions-catalog.md`](04-solutions-catalog.md), vertical playbooks in
[`05-industries-and-gtm.md`](05-industries-and-gtm.md).*
