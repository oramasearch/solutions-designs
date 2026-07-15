# 06 — Financial plan

> **Status:** v2 — 2026-07-15 · **Author:** CFO (combined executive team) ·
> **⚠️ Internal-confidential** · Elaborates kernel v2 (**future state · no sequencing ·
> ROI-central · Auto-RL-central**).
>
> **v2 supersedes v1 entirely.** v1 modeled the business as a launch calendar:
> design-partner cohort economics, year-1/year-2 ARR ladders, engine-investment waves,
> and security-gate revenue timing. All of that is sequencing, and sequencing is out of
> scope for strategy (kernel D10.1–D10.2). v2 models **the business at its future
> operating state**: what the revenue machine is, how price is derived from customer
> ROI, what the unit economics are when agents — not humans — operate the solutions,
> and how the portfolio is financially controlled. Scale scenarios (§5) vary **customer
> count and module attach only** — never calendar stages.
>
> **This document is the mechanics of kernel D8 (ROI-based pricing)** and it **answers
> kernel open questions 1 and 2** (the ROI-share anchor, §2.2–§2.3; the
> fixed-vs-contingent structure and measurement-design risk, §2.4–§2.6). It elaborates
> D1 (the ROI calculus is the pricing calculus), D9 (the financial metric set), and the
> retained commercial anchors from evidence 07 (Enterprise platform **$500k/yr+**;
> solutions priced as separate modules — ⚠️ confidential). It must not contradict the
> kernel; genuine tensions are recorded in
> [Appendix A](#appendix-a--tensions-for-kernel-review) and resolve in the kernel first.
>
> **⚠️ Every number in this document is a planning assumption, not a forecast.** Each
> is tabled so it can be falsified independently. Evidence citations `(evidence NN)`
> refer to [`../evidence/`](../evidence/).

---

## 1. The revenue architecture v2

### 1.1 The two-layer architecture: platform base + ROI-priced modules

The future-state revenue machine has exactly two layers, both anchored in the kernel
and evidence 07:

| Layer | What the customer buys | Price basis | Kernel/evidence anchor |
|---|---|---|---|
| **Platform base — Orama Cloud v3 Enterprise (Orama Zetta)** | The deployed factory in the **customer's** environment: the engine, the governance regime (identity-scoped, audited, approval-gated), the correctness gate, the data supply chain, and the customer's own **Auto-RL agent** — trained on their data, owned weights theirs (kernel D2/D7) | **$500k/yr+** flat (evidence 07, retained anchor). Priced for the foundation's *option value*: every module the customer will ever attach runs on it | Kernel D8; evidence 07 ⚠️ |
| **Solution modules (S-n)** | A use case solved: methodology composition + correctness adaptations + business wiring + **measurement loop** + the agent operating it (kernel D6). Marketed as modules, ~1:1 with UC-n | **A share of the module's expected annual return, risk-adjusted by p(success)** — the full mechanics in §2 | Kernel D1/D6/D8; evidence 11/12/14/15 |

Deliberately **not** in this architecture: usage meters (wrong meter — the customer's
infrastructure runs the compute, so usage tracks *their* cost, not ours, and metering
inside their VPC strains the data-sovereignty promise, evidence 06/08); seat pricing
(the operator is the agent, not a seat count); services revenue as a line of business
(§3.2 — the agent is the services layer); and the Pro tier (a different business at a
different order of magnitude; funnel only, zero revenue attribution here).

### 1.2 The revenue identity: revenue scales with measured ROI delivered

Kernel §1 fixes the business consequence — *revenue scales with customer ROI
delivered, not hours, seats, or compute*. Written as the identity this plan manages:

```
ARR = Σ over customers c of:
        Base_c                                   (platform, flat)
      + Σ over attached modules m of:
          s(p_m) × E[R_m] × realization_m        (module take)

where  E[R_m]        = expected annual measured return of module m for customer c
                       (the module's contractual ROI model, kernel D6a)
       p_m           = ex-ante p(success) for that module at that customer (kernel D1)
       s(p_m)        = the ROI-share schedule (§2.3) — the fraction of expected
                       annual return the price targets
       realization_m = measured return ÷ expected return, produced by the module's
                       own measurement loop (the billing instrument, kernel D8)
```

Every term is a managed quantity: `E[R]` is agreed in the ROI model at sale; `p` comes
from the p(success) rubric (kernel open question 3 — owned by docs 02/07; this plan
*consumes* it); `s(p)` is this document's schedule; `realization` is what the
measurement loop reads out. **There is no revenue line in this business that is not a
function of customer return.** The base is the one flat element, and even it is
justified by the return architecture: it prices the foundation that makes every
module's `p` higher and every module's customer investment lower.

### 1.3 The expansion economics: the shared foundation makes attach compounding

The structural fact (kernel §1): many use cases ≈ many solutions ≫ few methodologies,
and the composer is the agent. Financially this appears as **marginal-module
economics that improve for both sides simultaneously** — the rare pricing situation
where the seller's take and the buyer's net ROI rise together:

| Quantity | First module at a customer | Marginal module (shared foundation) | Why |
|---|---|---|---|
| Customer's integration + data investment | High: connectors, entity resolution, label reconstruction, governance wiring — the documented long pole (evidence 12 §S6 failure cause 7: integration and data readiness, not modeling, dominate cost) | **Collapses**: sources connected, entities resolved, governance live, the agent already trained on the environment | The foundation is shared; the agent reuses everything it learned |
| `E[ROI]` (kernel D1: return ÷ **customer investment**) | Good (Band-A screen) | **Higher** — same return class, smaller denominator | Denominator falls |
| `p(success)` | Rubric-scored | **Higher** — data plumbing proven, an outcome owner exists, adoption path demonstrated, the agent has operating history here | The p-drivers (data availability, actionability, adoption — kernel D1) are already evidenced in-house |
| Module price under §2 | `s(p₁) × E[R]` | `s(p₂) × E[R]` with `p₂ > p₁` → **higher share** | The s(p) schedule prices confidence |
| Customer's net ROI on the module | ≥ ~3:1 target (§2.6) | **Still improves** despite the higher share, because the investment denominator fell more than the share rose | Both sides win — expansion is arithmetically obvious |

Planning assumption for the scenario model (§5): the customer-side integration
investment on a marginal module is **~15–25% of the first module's** (evidence 12 §S6
identifies integration as the majority of first-deployment cost; the shared agent+data
foundation is precisely what removes it). This is the quantitative form of the
kernel's D8 portfolio effect: *expansion is priced to be obvious*.

### 1.4 Revenue quality rules (future-state discipline)

Three standing rules keep the identity honest:

1. **No module revenue without a measurement loop live.** The kernel's definition of
   done (D6) includes "ROI measured against the agreed model"; financially, a module
   whose readout is not producing numbers is not yet earning its contingent component
   and its fixed component is at risk at true-up (§2.5). An unmeasured solution is
   indistinguishable from a failed one (evidence 12 §S5).
2. **The base and the modules never cross-subsidize silently.** The base covers the
   foundation; module fees cover module value. Discounting policy (§4.4) operates on
   the fixed components only — the contingent share is never discounted, because it
   *is* the meter.
3. **Correctness, governance, and audit are never priced as add-ons** (carried forward
   from v1, still true in v2): unbundling them would sell "fast wrong answers" — the
   failure the product exists to prevent. They live inside the base.

---

## 2. ROI-based pricing mechanics (answers kernel open questions 1 + 2)

### 2.1 The pricing quantity: pool → expected return → p(success)

Every module sale starts from the module's **ROI model** (kernel D6a), built in three
steps that mirror the D1 calculus. All three are contract artifacts, not sales collateral:

| Step | Quantity | How it is produced | Evidence base |
|---|---|---|---|
| 1 | **Value pool** `V` | The customer-specific size of the problem: churn revenue at risk, DSO-days × daily cash, inventory distortion cost. Computed from the customer's own operating data during scoping — the use-case dossiers supply the pool arithmetic per use case (evidence 11/14: e.g. each DSO day on $1B revenue ≈ $2.7M cash; retail inventory distortion $1.77T globally, IHL 2023 via evidence 11 F1) | evidence 11/14 (pool math per UC) |
| 2 | **Expected annual return** `E[R]` | The intervention effect applied to the pool, at documented-magnitude effect sizes, net of action costs (offer costs, treatment costs): `E[R] = V × effect size × margin − action cost`. Effect sizes come from the documented-results fields of the dossiers (evidence 11/12/14/15), always using the conservative end of vendor-reported ranges | evidence 12 dossiers 1/10/17 etc. |
| 3 | **p(success)** `p` | The ex-ante probability the deployed solution delivers `E[R]` in production, scored on the D1 driver rubric (data availability & label quality · actionability · measurability · adoption · governance fit). The rubric itself is kernel open question 3 (docs 02/07); this plan consumes its output and **calibrates it financially** (§4.3) | kernel D1; evidence 03, 11 §S7, 12 §S6, 14, 15 |

The price is then a function of `(E[R], p)` and nothing else — not our cost, not
competitor list prices, not deal-size ambition. Cost enters only as a **floor** (§2.6).

### 2.2 The anchor (kernel Q1): price targets **10–20% of expected annual return, centered at 15%**

**Proposal.** A module's target annual take is **s(p) × E[R]** where the share
schedule `s(p)` spans **10–20%** of expected annual return, centered at **15%**
(planning assumption — the anchor this document exists to propose; kernel ratification
required per Appendix A).

**The argument for the 10–20% band, from four directions:**

1. **Value-based-pricing practice.** The working norm across enterprise software and
   outcome-priced services is that the vendor captures on the order of 10–30% of the
   value created and the customer keeps the rest; gainsharing structures in the
   domains closest to ours — collections recovery, procurement savings,
   revenue-management — conventionally take 10–30% of measured incremental value
   (industry practice; planning assumption). We anchor at the lower-middle of that
   range because our value claim is *measured, recurring, and audited* — we can afford
   a moderate share of a number nobody disputes, which beats a high share of a number
   everyone disputes.
2. **The customer's alternative costs.** The realistic alternatives are: (a) build
   in-house — a 5–8 FTE data team ≈ $1.5–2.5M/yr fully loaded (planning assumption)
   carrying the documented base rate of failure (≈95% of enterprise AI pilots show no
   measurable P&L impact, MIT NANDA 2025; only ~39% of AI-using organizations
   attribute any EBIT impact, McKinsey 2025 — both via evidence 12 §S6); (b) an SI
   engagement — $1–5M one-time plus ongoing, with the same wiring risk and no
   continuing improvement loop; (c) a point-solution subscription unlinked to outcome.
   At a 15% share of a *measured* return, we are cheaper than (a) on cash alone for
   most Band-A pools, and categorically de-risked relative to all three: the customer
   pays mostly when the return is proven (§2.4).
3. **The customer's net-ROI arithmetic must stay obvious.** At a 15% share, the
   customer keeps 85% of the measured return — a ~5.7:1 return on the module price
   alone. After adding their own integration and change costs (the D1 denominator),
   the target is **net customer ROI ≥ 3:1 on the first module** and rising on every
   marginal module (§1.3). A share above ~20–25% starts pushing first-module net ROI
   below 3:1 for mid-size pools once customer-side costs are counted — which erodes
   exactly the "expansion is obvious" property the kernel mandates (D8).
4. **The measurement loop caps credible take.** Our price is justified by a readout
   the customer's own team can audit (§2.5). A share that looks like rent-seeking
   invites gaming of the very instrument we bill on (Goodhart pressure on holdout
   integrity — evidence 12 §S5 pitfalls). 10–20% of a number the customer watched us
   measure is a share that survives procurement, renewal, and audit.

**Why not lower than 10%:** below ~10% the fixed component can no longer clear the
cost floor (§2.6) on smaller Band-A pools while leaving a contingent component large
enough to matter, and the price stops signaling the product's category (a measured-ROI
system, not a tool subscription).

### 2.3 The share schedule s(p): confidence prices at a premium; variance shifts weight into success-linkage

**Proposal (kernel Q1, second half).** The share is an *increasing* function of
p(success), and the fixed/contingent composition of the price moves the opposite way:

| p(success) band | Posture (evidence) | Target share s(p) of E[R] | Fixed share of the price | Contingent share |
|---|---|---|---|---|
| **p ≥ 0.75 — high confidence** | Generalized assets exist for this module family; measurement design proven at multiple deployments; adoption pattern known (evidence 12 §S7 "routine/established" tiers) | **17–20%** | ~70% | ~30% |
| **0.60 ≤ p < 0.75 — standard Band-A** | Strong dossier evidence, customer-specific unknowns remain | **14–17%** | ~55–65% | ~35–45% |
| **0.45 ≤ p < 0.60 — higher variance** | Real pool, thinner measurement precedent (e.g. attribution noisier, phased rollout instead of clean holdout) | **11–14%** | ~35–50% | ~50–65% |
| **p < 0.45** | — | **Not sold as a priced module.** The D1 screen fails; pursue only as an explicitly experimental engagement or decline (kernel D4 anti-portfolio logic) | — | — |

**Why the share *rises* with confidence (and not the reverse):** the customer's
certainty-equivalent value of the module is `≈ p × E[R]`; a high-p module is simply
worth more to a risk-averse buyer, and the evidence that makes p high (deployed
precedents, generalized assets, proven measurement) is *our* accumulated asset — the
data flywheel's pricing power (kernel D7.3, §3.4 below). Premium share on
high-confidence modules is how the flywheel monetizes.

**Why the *contingent weight* rises as p falls:** for a high-p module, heavy
success-linkage adds true-up variance and contracting cost without information value —
both sides already believe the number. For a higher-variance module, the customer
should not bear the variance: we shift the price into the success-linked component and
underwrite the risk ourselves, because **we are the natural risk-bearer** — we hold a
diversified portfolio of ROI streams (§4.2) and we own the calibration data (§4.3);
the single customer holds one draw. This is insurance economics applied to pricing,
and it is what makes a 0.50-p module sellable at all without discounting the category.

**Blended headline check** (planning assumption): across a Band-A-weighted attach mix,
the blended target share lands at **~15%** of expected annual return, with a blended
fixed/contingent revenue mix near **60/40** (§6 tracks both).

### 2.4 The fixed-vs-contingent structure (kernel Q2, first half)

**Proposal.** Every module contract carries the same two-part structure; only the
proportions move (per the §2.3 schedule):

```
Annual module price  =  F  +  C(realized)

F  (fixed component)      =  max( cost floor,  fixed-weight × s(p) × E[R] )
                             invoiced flat, quarterly in advance

C  (contingent component) =  contingent-weight × s(p) × R_measured / E[R] × E[R]
                          =  contingent-weight × s(p) × R_measured
                             accrued quarterly from the measurement readout,
                             settled annually at true-up, subject to cap (§2.6)
```

- **What the fixed component is *for*:** it covers the cost of the deployed foundation
  slice this module occupies — agent operation, measurement-loop upkeep, audit
  operations, support — plus a margin floor (§2.6). It is the price of the module
  *existing and operating correctly*; it is never zero, because a module that runs,
  passes the correctness gate, and operates under governance has delivered a real
  thing even before the return lands.
- **What the contingent component is *for*:** it is the ROI share proper — the price
  of the *return*, paid against the measured readout. `R_measured` is the output of
  the module's own measurement loop (holdout / uplift / hard operating metric —
  evidence 12 §S5 patterns), which the contract designates as the **billing
  instrument** (kernel D8: "the measurement loop is the billing instrument").
- **True-up mechanics:** the readout accrues quarterly; annual settlement trues the
  contingent component to measured return. Over-performance above the cap (§2.6) is
  not billed mid-term — it carries into **renewal repricing** (the share band and
  `E[R]` reset at renewal on measured history; never mid-term). Under-performance
  settles down automatically; persistent under-performance (two consecutive true-ups
  below 50% realization) triggers the remediation path: the agent's improvement loop
  gets a named joint review, and if realization does not recover, either party may
  exit the module at renewal without penalty — a clean walk-away that protects the
  category's credibility.

### 2.5 Measurement-design risk and dispute resolution (kernel Q2, second half)

The contingent component is only as good as the instrument, so v2 makes the
instrument a **contract schedule agreed before deployment**, not an afterthought.
Allocation of measurement-design risk:

| Risk | Borne by | Mechanism |
|---|---|---|
| **Instrument validity** (holdout sized for significance, uplift design correct, as-of reconstruction honest — the documented pitfalls, evidence 12 §S5) | **Us (seller).** We design the instrument and warrant its statistical validity | The **measurement schedule** in the contract fixes, up front: the design (permanent randomized holdout, uplift A/B, champion/challenger, phased comparison, or hard operating metric — chosen per module family from the evidence 12 §S5 pattern table), holdout size and refresh policy, the metric definition, the accrual formula, and the fallback hierarchy |
| **Readout failure not attributable to customer breach** (design turns out underpowered; confounds emerge) | **Us.** Contingent settles at the conservative fallback | Fallback hierarchy, pre-agreed: (1) primary instrument → (2) named secondary operating metric → (3) modeled ROI at a **conservative percentile (P25) with a further 20% haircut** (planning assumption). We eat the haircut — that is what "seller bears measurement-design risk" means in cash |
| **Holdout/experiment integrity** (exceptions eroding the holdout, treatment leakage, ops overrides contaminating cells — evidence 12 §S5 pitfalls) | **Customer**, via adoption covenants | The contract names the outcome owner (kernel D1: no owner → p(success)→0), commits the action wiring, and commits holdout integrity. **Customer breach converts the contingent component to its p-weighted expected value** (`contingent-weight × s(p) × p × E[R]`) for the affected period — the customer cannot reduce the bill by breaking the meter |
| **Disagreement over the readout** | Shared, resolved by escalation ladder | (1) Joint measurement committee (quarterly, standing); (2) independent audit of the readout via below-the-line sampling — the same regulator-grade assurance pattern the solutions already use internally (evidence 12 §S5); (3) binding expert determination on the pre-agreed schedule. Because the instrument runs **in the customer's environment under the platform's governance** (identity-scoped, audited — kernel D2.5), both sides can inspect the full audit trail; there is no "trust our dashboard" asymmetry |

Two design notes worth making explicit:

1. **The conflict-of-interest is engineered out, not waved away.** A seller-operated
   meter that determines the seller's bill is a governance problem. Our answer: the
   meter's definition is contractual, its execution is audited under the customer's
   own governance regime, its raw trail is customer-inspectable, and the audit-sampling
   provision gives the customer a standing right to re-derive the number.
   (Flagged for kernel review as a governance-level property — Appendix A.3.)
2. **The measurement schedule is a reusable asset.** Per module family, the schedule
   template (design, power calculation, fallbacks) is a generalized asset (kernel
   D7.3): it is written once per family, hardened across deployments, and raises
   p(success) — and therefore the share — for every subsequent sale (§3.4).

### 2.6 Floors and ceilings

| Bound | Rule (planning assumption) | Rationale |
|---|---|---|
| **Fixed-component floor** | `F ≥ 2 × module cost-to-serve` (§3.3) | No module is ever operated below margin; protects against pool-size optimism at small customers |
| **Platform-base floor** | Base never discounted below **$500k/yr** (evidence 07 anchor ⚠️) | The foundation's price is the category signal; eroding it re-opens the "tool subscription" comparison we refuse |
| **Total-price ceiling (customer-protection)** | Annual module price ≤ **25% of measured annual return** — the customer always keeps ≥ 75% | Keeps net customer ROI ≥ 3:1 even after customer-side costs; keeps renewal a formality; keeps the meter unthreatening |
| **Contingent cap (budgetability)** | Contingent settles at ≤ **1.5× its target value** in any year; overage carries to renewal repricing | Enterprise budgets cannot absorb unbounded true-ups; blow-out years monetize at renewal instead, where they also reset `E[R]` upward |
| **Module-price floor vs base** | A module whose §2.2 arithmetic yields < **$150k/yr** total take is packaged into a bundle or not sold stand-alone | Below this, measurement + audit + true-up overhead consumes the margin (cost-to-serve, §3.3); small pools are served by attach bundles, not bespoke small contracts |

### 2.7 Worked examples — three Band-A modules, end-to-end

All three follow the same arithmetic: **pool → expected return → p(success) → share →
price → both sides' ROI check.** Every input is a planning assumption; pool math and
effect sizes cite the dossiers.

#### 2.7.1 S-1 Churn & retention (UC-1) — telecom

| Step | Quantity | Value | Basis |
|---|---|---|---|
| Customer | Mid-size telco | 1.8M subscribers, ARPU $55/mo, gross churn 22%/yr | Scoping data (assumed); churn benchmarks 15–25% telecom (evidence 11 A1) |
| Pool `V` | Revenue at risk | 396k churners/yr × $660/yr ≈ **$261M/yr** | Arithmetic |
| Effect | Relative churn reduction from targeted, uplift-designed retention | **10%** of churners retained (conservative end: documented telecom programs report ~15% churn reduction, Deloitte-derived benchmarks; UK insurer £16M/yr from 2pp reduction — evidence 11 A1.14, evidence 12 §1) | evidence 11/12 |
| `E[R]` | 39.6k subs retained × $660 × 60% contribution margin − offer costs (~30% of gross) | **≈ $11M/yr** measured via permanent randomized holdout | evidence 12 §S5 (holdout mandatory for churn) |
| `p(success)` | High: natural labels, existing KPIs, provable via holdout, mature deployment pattern (evidence 12 §S7 "established"); adoption owner named | **0.70** | rubric (docs 02/07) |
| Share `s(0.70)` | Standard-Band-A upper end | **16%** | §2.3 schedule |
| **Target annual take** | 16% × $11M | **≈ $1.76M/yr** | |
| Structure | 60% fixed / 40% contingent | **F ≈ $1.06M · C ≈ $0.70M at full realization** | §2.3 band |
| Ceiling check | $1.76M ÷ $11M = 16% ≤ 25% ✓ | Customer keeps ~$9.2M/yr | §2.6 |
| Customer net ROI | ($11M − $1.76M) ÷ ($1.76M + ~$0.6M integration) ≈ **3.9 : 1** | ✓ ≥ 3:1 target | §2.2 |

#### 2.7.2 S-4-class Collections prioritization — B2B manufacturer

| Step | Quantity | Value | Basis |
|---|---|---|---|
| Customer | Manufacturer, $1.2B revenue, DSO 58 days | Daily sales ≈ $3.3M → each DSO day ≈ $3.3M cash (evidence 11 D2.4: $2.7M per DSO day at $1B revenue — same arithmetic) | evidence 11 |
| Pool `V` | Working capital tied in receivables + bad debt + collector cost | ~$190M AR balance; bad debt ~0.3% of revenue | Scoping data (assumed) |
| Effect | −5 DSO days (vendor-reported range 10–20% DSO reduction; we assume ~9% — below range floor, since evidence quality is flagged thin, evidence 11 D2.14) | $16.4M working capital released | evidence 11 |
| `E[R]` | Carrying value of released cash at 8% + bad-debt reduction 0.1% of revenue + collector productivity | $1.3M + $1.2M + $0.4M ≈ **$2.9M/yr** measured via champion/challenger strategy cells (collections' native experiment culture — evidence 12 §17) | evidence 12 |
| `p(success)` | Moderate: tabular, well-labeled, hard KPI, mature vendor category — but independent evidence thin relative to plausibility (evidence 11 D2.14) and treatment-path adoption is the known stall | **0.60** | rubric |
| Share `s(0.60)` | Standard band, lower end | **14%** | §2.3 |
| **Target annual take** | 14% × $2.9M | **≈ $406k/yr** | |
| Structure | 55% fixed / 45% contingent | **F ≈ $223k · C ≈ $183k at full realization** | §2.3 band |
| Floor check | F ≥ 2 × cost-to-serve (~$85k) ✓ · total ≥ $150k module floor ✓ | | §2.6 |
| Customer net ROI | ($2.9M − $406k) ÷ ($406k + ~$200k integration) ≈ **4.1 : 1** | ✓ | |

#### 2.7.3 S-5-class Demand forecasting → replenishment — retail

| Step | Quantity | Value | Basis |
|---|---|---|---|
| Customer | Retailer, $2B revenue, $300M average inventory | Inventory distortion (stockouts + overstocks) is the pool; the global pool is $1.77T (IHL 2023, evidence 11 F1.4) | evidence 11 |
| Pool `V` | Lost sales ~2% of revenue ($40M) + carrying cost of excess inventory + markdown/waste | | Scoping data (assumed) |
| Effect | Forecast error −25% (documented range 20–50%, McKinsey 2024 via evidence 11 F1); lost-sales recapture 15% of the lost-sales pool; inventory −10% | | evidence 11/12 (Danone −30% lost sales; Otto ~20% surplus-stock reduction — evidence 12 §10) |
| `E[R]` | $6M recaptured sales × 30% margin + $30M inventory reduction × 12% carrying + $1.5M markdown/waste avoided | $1.8M + $3.6M + $1.5M ≈ **$6.9M/yr**, measured via phased rollout by category/region + FVA baselines (the family's standard instrument — evidence 12 §S5) | evidence 12 |
| `p(success)` | Higher variance: measurement is phased-comparison (noisier than a holdout), replenishment-action adoption is the documented long pole (ERP change management — evidence 12 §S6 cause 7), seasonal confounds | **0.55** | rubric |
| Share `s(0.55)` | Higher-variance band | **12%** | §2.3 |
| **Target annual take** | 12% × $6.9M | **≈ $828k/yr** | |
| Structure | 45% fixed / 55% contingent — the variance sits mostly with us | **F ≈ $373k · C ≈ $455k at full realization** | §2.3 band |
| Fallback note | If the phased design is confounded (season/region mix), settlement falls to the secondary metric (stockout-rate delta at matched service level), then to P25 modeled ROI − 20% | We bear the haircut | §2.5 |
| Customer net ROI | ($6.9M − $828k) ÷ ($828k + ~$350k integration) ≈ **5.2 : 1** | ✓ | |

**Reading the three together:** the account shape at three attached modules is
**$500k base + ~$3.0M module take ≈ $3.5M ACV** at full realization (planning
assumption), of which ~$1.2M is success-linked. The customer's aggregate measured
return across the three modules is ~$20.8M/yr — the account pays ~17% of it including
the base. That is the future-state account: **priced entirely off its own measured
return, auditable line by line.**

### 2.8 Pricing the marginal module (the expansion mechanics, quantified)

Apply §1.3 to the worked examples. Suppose the telco (§2.7.1) attaches collections
(consumer-collections variant) as its second module:

| Quantity | If sold stand-alone | As marginal module on the shared foundation |
|---|---|---|
| Customer integration investment | ~$200k | **~$40k** (connectors, entity resolution, governance, agent context already live — §1.3 assumption: 15–25% of first-module cost) |
| `p(success)` | 0.60 | **0.70** (data plumbing proven at this customer; owner and action culture demonstrated; agent has local operating history) |
| Share `s(p)` | 14% | **16%** |
| Take on the same `E[R]` | 14% × E[R] | 16% × E[R] — **we earn more** |
| Customer net ROI | ~4.1 : 1 | **~4.8 : 1 — they earn more too** (denominator collapsed faster than the share rose) |

This table is the kernel's D8 portfolio effect as arithmetic, and it is the single
most important commercial property of the architecture: **attach raises our take rate
and the customer's net ROI simultaneously.** Expansion needs no discounting, no
bundling gymnastics — the shared agent+data foundation does the selling.

---

## 3. Unit economics in the future state

### 3.1 The gross-margin shape of an agent-operated, customer-infra module

Two structural choices set the margin shape before any optimization: **the customer's
infrastructure runs the workload** (their compute, storage, network — kernel D3;
evidence 06/08), and **the agent operates the solution** (builds, runs, monitors,
explains, improves — kernel D2.1). Marginal COGS per module approaches the cost of
oversight, not the cost of operation:

| COGS line (per customer per year, at 3-module attach) | Planning assumption | What it is |
|---|---|---|
| Agent-operation oversight + support pool (allocated) | ~$60k–$90k | Human review of agent escalations, approval-gated actions, engine/agent upgrades, incident response |
| Measurement & audit operations | ~$30k–$50k | Readout upkeep, below-the-line audit sampling, true-up preparation, joint measurement committee |
| Base-model training + generalized-asset upkeep (allocated) | ~$30k–$60k | Amortized share of the Zetta agentic RL base model's continuous post-training and the generalized-asset library (schemas, playbooks, priors, measurement schedules — kernel D7.3) |
| Our own infra (build/eval/e2e — never customer workloads) | ~$10k–$20k | Eval harness, correctness-gate infrastructure, CI |
| **Total cost-to-serve** | **~$130k–$220k/yr** | |

Against the §2.7 account shape (~$3.5M ACV at 3-module attach, full realization), that
is a **~94% gross margin**; against a smaller single-module account (~$900k ACV), still
**~85%+**. The margin is a *consequence of the architecture*, not a pricing ambition:
near-zero marginal COGS is what "agent-operated on customer infrastructure" means in
accounting terms.

### 3.2 The services trap — and its structural elimination

The trap (evidence 08 "bespoke-SI trap"; evidence 12 §S6 failure cause 7): every
enterprise AI account quietly consumes unbounded custom integration and operations
labor, converting a ~90% software margin into a ~30% SI margin without anyone deciding
to. v1 answered this with services-hours budgets — a *policing* control. v2's answer
is structural: **the two inputs the trap consumes are exactly the two the architecture
automates.**

| What the trap consumes | The v1-era answer (policing) | The future-state answer (structural) |
|---|---|---|
| Integration labor (connectors, entity resolution, schema work, wiring) | Hours budgets, reuse mandates | **Generalized assets** (kernel D7.3): connector patterns, schema priors, playbooks, measurement schedules are catalog assets, written once per family and reused by the agent at each deployment. The Nth deployment is asset instantiation, not engineering |
| Operations labor (monitoring, retraining, explaining, tuning, reporting) | Support contracts, success teams | **The agent operates the solution** (kernel D2.1): monitoring, drift response, retraining, explanation, and improvement are agent actions under governance. Human labor appears only at approval gates and audits |
| The customer's "just one more customization" | Change-order friction | **Personalization is the product, not a service** (evidence 08 personalized intelligence): the agent personalizes to the customer as part of what it is — the request that used to be a change order is now the product working |

The residual human budget per account (planning assumption): **≤150 hours/yr**,
essentially all reviews, audits, and true-up committees — and every one of those hours
is either priced (inside the fixed components) or produces a generalized asset. The
financial control that remains is a *tripwire, not a budget*: *unpriced,
non-asset-producing hours per account* is tracked (§6), and any account trending above
the assumption gets a structural review — the question is never "who overspent" but
"which asset or agent capability is missing such that humans are doing this."

### 3.3 Cost-to-serve discipline and the module floor

The §2.6 module floor ($150k/yr minimum take) comes directly from §3.1: a module
carries ~$40k–$70k/yr of attributable serve cost (its slice of measurement, audit,
true-up, and oversight). At the floor, the worst-case module still clears a 2× cost
cover on its fixed component. Modules with genuinely small pools are packaged as
attach bundles (several small modules sharing one measurement committee and one
true-up) rather than sold stand-alone — the overhead is per-contract, so bundling
restores the margin without distorting the per-module ROI math.

### 3.4 The data-flywheel economics: p(success) compounds into pricing power

Kernel D7.3: per-customer data and weights are the customer's; cross-customer
**generalized** patterns are ours and raise every future agent's starting point. The
financial statement of that moat:

```
More deployments in a module family
  → more generalized assets (schemas, playbooks, priors, benchmarks,
    measurement schedules, calibration history)
  → higher ex-ante p(success) for the next customer in that family
  → (a) higher share s(p) on the next sale          [§2.3 — pricing power]
    (b) higher win rate at unchanged price           [risk-averse buyers]
    (c) lower deployment cost                        [asset reuse, §3.2]
    (d) tighter calibration → smaller reserves       [§4.3–4.4 — more revenue
                                                      recognized per dollar billed]
```

Planning assumption for scenario purposes: **each doubling of deployed module
instances within a family raises that family's baseline p(success) by ~0.05, capped
at 0.85.** The cap matters: p never reaches 1 because adoption and governance are
customer-side risks no asset library removes (kernel D1 drivers). Worked consequence:
a family that matures from p=0.60 to p=0.75 moves from the 14–17% share band to the
17–20% band — **a ~20% revenue increase per unit of E[R], with zero change in list
architecture,** plus the win-rate and cost effects. This is the moat expressed as a
take-rate curve rather than a slogan: the flywheel's output is measured in share
points and reserve releases (§6 tracks both).

The same flywheel disciplines the *portfolio*: families where deployments do **not**
move calibration (realized success stays flat while assets accumulate) are flagged —
that pattern means the family's p-drivers are customer-side and unpurchasable, and
the family's share schedule should stop climbing (a D1 portfolio signal produced by
finance).

---

## 4. Portfolio finance

### 4.1 The company as a portfolio of ROI streams

Under the §1.2 identity, the company's revenue is a **portfolio of per-module ROI
streams**, each with an expected value (`s(p) × E[R]`), a variance (realization risk
on the contingent component), and pairwise correlations (industry cycles, use-case
family commonalities, shared-methodology risks). Finance's job in the future state is
portfolio management of these streams — the same D1 calculus the product portfolio
runs on, applied to the revenue book:

| Portfolio quantity | Definition | Management use |
|---|---|---|
| Expected book | Σ fixed + Σ p-weighted contingent | The planning ARR number (§4.4 recognition) |
| Book variance | Var(Σ contingent realizations) | Sizes reserves (§4.4); sets the success-linked mix appetite (§6) |
| Concentration | Share of contingent book per industry / use-case family / methodology | Diversification limits below |
| Calibration | Ex-ante p vs realized success, by band | The control in §4.3 |

### 4.2 Diversification: why the risk-bearing pricing model is safe *for us*

§2.3 deliberately shifts variance from the customer onto us for higher-variance
modules. That is only sound if the book diversifies. With K quasi-independent
contingent streams of similar scale, the book's coefficient of variation shrinks
~1/√K — at 30+ attached modules across customers the contingent book's variance is
already dominated by *correlated* risk, not idiosyncratic risk. So the limits target
correlation (all planning assumptions, reviewed as the book grows):

| Concentration limit | Rule | Rationale |
|---|---|---|
| Industry | No industry > **30%** of the contingent book | Macro shocks correlate returns within an industry (a downturn simultaneously inflates churn pools and deflates collections recovery rates) |
| Use-case family | No family > **25%** of the contingent book | Family-level measurement designs share failure modes (e.g. all phased-rollout families are exposed to the same confounding classes — evidence 12 §S5) |
| Methodology | Monitored, no hard cap | Many solutions ≫ few methodologies (kernel §1) makes methodology concentration structural; the correctness gate is the control, not diversification |
| Single customer | No customer > **10%** of total ARR | Standard concentration hygiene; also protects the measurement relationship from too-big-to-dispute dynamics |
| Counter-cyclical pairing (positive screen) | Prefer attach mixes pairing pro-cyclical return pools (demand forecasting, lead scoring) with counter-cyclical ones (collections, fraud, retention) | The same recession that shrinks one pool grows the other — at the account level this stabilizes the customer's total measured return, and at the book level it stabilizes our contingent revenue |

### 4.3 p(success) calibration as a financial control

Kernel D9 names p(success) calibration a companion metric; this plan makes it a
**financial control with teeth**, because in an ROI-priced business **mispriced risk
is margin erosion in both directions:**

- **Overstated p** (we believed 0.70, realized success behaves like 0.55): modules
  were sold in too-high a share band with too-fixed a structure → true-downs, credits,
  remediation reviews, and renewal churn. The loss shows up *after* the revenue was
  celebrated — the worst kind.
- **Understated p** (we believed 0.55, realized 0.70): we under-priced the share and
  over-weighted contingency → revenue left on the table and a book that looks riskier
  than it is, inflating reserves (§4.4) and depressing recognized revenue.

The control loop (owned by finance, fed by the measurement loops):

1. **Measure:** per band, per family — realized success rate (true-ups meeting the
   agreed ROI model) vs the ex-ante p assigned at sale; Brier score on the p estimates;
   realization distribution (not just the mean — the tails price the reserves).
2. **Compare:** calibration error = mean(ex-ante p − realized success frequency) by
   band. Target: |error| ≤ **0.05** per band (planning assumption); alert at 0.10.
3. **Correct:** the s(p) schedule and the fixed/contingent weights are **repriced from
   calibration data** on a standing cadence — the rubric (docs 02/07) assigns p; finance
   verifies that p *means what it says* in realized frequency, and adjusts the money
   attached to each band when it doesn't. New sales inherit the corrected schedule;
   existing contracts correct at renewal.
4. **Attribute:** calibration failures decompose along the D1 drivers (data, action,
   measurement, adoption, governance) using the remediation reviews — so the fix lands
   in the right place: rubric weights (docs 02/07), measurement schedules (§2.5
   assets), or the anti-portfolio (kernel D4).

This is the financial meaning of kernel D9's "p(success) calibration": **the pricing
schedule is a promise about frequencies, and finance audits the promise.**

### 4.4 Recognition, reserves, and discount policy for success-linked revenue

| Policy | Rule (planning assumption) | Rationale |
|---|---|---|
| **Recognition** | Fixed components recognized ratably. Contingent components accrued quarterly at **p-weighted expected realization** per the module's band, trued to the measured readout at settlement | Accruing contingent revenue at face value would book the risk as if it were resolved; p-weighting makes the book's stated revenue mean what it says |
| **Reserve** | Hold a true-down reserve = **z × σ(contingent book)** sized for 90% adequacy (z ≈ 1.3 under normal approximation; recomputed from the realization distribution as calibration data accumulates) | The reserve is the balance-sheet mirror of the §2.3 decision to bear variance; §3.4(d): as calibration tightens, σ falls and reserve releases become a recurring earnings tailwind — the flywheel visible in the P&L |
| **Discounting** | Discounts apply to **fixed components only**, capped at **15%**, approval-laddered. The contingent share `s_c` and the share schedule are **never discounted** | The contingent share *is* the meter; discounting it debases the unit of account and teaches the market that the ROI share is an opening bid. Price flexibility lives in the fixed layer, where it is a margin decision, not a category decision |
| **Base integrity** | The $500k+ platform base is never discounted below floor (§2.6); concessions there are term/structure (multi-year, payment timing), not price | evidence 07 anchor discipline |
| **Credits** | True-downs settle as credits against the next fixed invoice, never cash-out mid-term | Cash-flow hygiene; keeps remediation inside the relationship |

---

## 5. Scale scenarios (calendar-free)

### 5.1 Ground rules

- **No calendar.** The scenarios are **operating states**, not years: they differ in
  **customer count** and **adoption depth** (modules attached per customer), never in
  launch stages, cohort waves, or gate timing (kernel D10.1–D10.2). Any of these
  states is a valid description of the business at some scale; the model asks what
  each state's economics are, not when it arrives.
- **All values are planning assumptions**, tabled below so each can be falsified
  independently. Outputs are arithmetic on the assumptions — corridors for sizing
  decisions, never forecasts.
- **Structure:** ARR(state) = N × [Base + attach × (avg module take × realization)],
  per the §1.2 identity, with the flywheel adjustment of §3.4 applied to depth.

### 5.2 Assumption table

| # | Assumption | Value (planning assumption) | Source/rationale |
|---|---|---|---|
| B1 | Platform base per customer | $500k/yr | evidence 07 anchor ⚠️; floor per §2.6 |
| B2 | Avg `E[R]` per attached Band-A module | $4.0M/yr | §2.7 worked examples span $2.9M–$11M; assumes a mid-market-weighted mix (large-enterprise-heavy books run higher) |
| B3 | Blended target share s(p) | 14% shallow · 15% mid · 16% deep | §2.3 schedule + §3.4 flywheel: deeper books have more marginal modules and more matured families, so blended p — and share — rises with depth |
| B4 | Realization (measured ÷ expected, book-wide) | 0.85 | Conservative: assumes calibration within the §4.3 target band but persistent partial shortfalls; 1.0 is not assumed anywhere |
| B5 | Avg module take (annualized, realized) | B2 × B3 × B4 ≈ **$476k** shallow · **$510k** mid · **$544k** deep | Derived |
| B6 | Modules per customer (attach) | **1.5** shallow · **3.0** established · **5.0** embedded | The three adoption depths; kernel D8 expansion economics (§1.3/§2.8) are what move a book rightward |
| B7 | Customer counts modeled | **25 · 75 · 200** | Three scale points; D3 says the addressable population (recurring high-value decisions + data exhaust + governance need) is far larger — these are operating states, not TAM claims |
| B8 | Cost-to-serve per customer | $130k shallow · $180k mid · $220k deep (§3.1) | Rises with attach (more measurement committees), sub-linearly (shared foundation) |
| B9 | Success-linked (contingent) share of module revenue | ~40% shallow · ~38% mid · ~33% deep | §2.3: deeper books skew to higher-p bands, which carry lower contingent weight |

### 5.3 Outputs: the ARR grid (derived, rounded)

**ARR per customer at each depth** (B1 + B6 × B5):

| Depth | Modules | ARR / customer | Of which success-linked |
|---|---|---|---|
| Shallow (land) | 1.5 | $500k + 1.5 × $476k ≈ **$1.21M** | ~$290k |
| Established | 3.0 | $500k + 3.0 × $510k ≈ **$2.03M** | ~$580k |
| Embedded | 5.0 | $500k + 5.0 × $544k ≈ **$3.22M** | ~$900k |

**The grid** (N customers × depth; total ARR, rounded):

| | **Shallow (1.5)** | **Established (3.0)** | **Embedded (5.0)** |
|---|---|---|---|
| **25 customers** | ~$30M | ~$51M | ~$81M |
| **75 customers** | ~$91M | ~$152M | ~$242M |
| **200 customers** | ~$243M | ~$406M | ~$645M |

**Gross margin at each state** (revenue − N × B8): ~89% at (25, shallow) rising to
**~93%** at (200, embedded) — margin *improves* with scale and depth because
cost-to-serve grows sub-linearly (B8) while the flywheel raises take (B3). Customer
aggregate measured return at (75, established): 75 × 3.0 × $4.0M × 0.85 ≈ **$765M/yr
of measured customer value**, of which the ~$152M ARR is ~20% including the base —
the whole book stays inside the §2.6 customer-protection ceiling with room to spare.

**How to read the grid:** movement **rightward** (depth) is product- and
flywheel-driven — it is the D8 expansion mechanics compounding, and it is the cheaper
direction (§1.3: marginal modules carry collapsed acquisition and integration cost).
Movement **downward** (count) is go-to-market-driven and carries full first-module
economics. A business at (75, embedded ≈ $242M) is financially superior to one at
(200, shallow ≈ $243M) at identical ARR: higher margin (fewer bases to serve), higher
NRR mechanics, tighter calibration (more instances per family), and a stronger moat
(§3.4). **Depth beats breadth at equal revenue — the plan's standing bias.**

### 5.4 Sensitivity (what actually moves the number)

Single-variable sensitivity on the **(75, established) state (~$152M ARR)**:

| Variable | −1 step | Base | +1 step | Swing | Note |
|---|---|---|---|---|---|
| **Attach (B6)** 2.5 ↔ 3.0 ↔ 3.5 | ~$133M | $152M | ~$171M | **±13%** | The product-controlled lever; every marginal module also raises margin |
| **Realization (B4)** 0.75 ↔ 0.85 ↔ 0.95 | ~$139M | $152M | ~$165M | ±9% | Realization is a *delivery* quantity — the agents' improvement loop and the D6 definition of done are what defend it |
| **Blended share (B3)** 13% ↔ 15% ↔ 17% | ~$137M | $152M | ~$167M | ±10% | Moves with flywheel maturity (§3.4) and calibration honesty — not with negotiation |
| **Avg E[R] (B2)** $3M ↔ $4M ↔ $5M | ~$124M | $152M | ~$181M | **±19%** | The largest single lever: *account selection within Band A* (kernel D1/D3 — sell where the pools are big) |
| **Calibration error (§4.3)** at 0.10 overstatement | ~$140M effective | $152M | — | −8% + reserve drag | Modeled as realization slipping to ~0.78 on the affected bands plus reserve growth; the silent eroder — it also poisons renewal and reference value, which the ARR line understates |
| **Customer count (B7)** ±15 | ~$122M | $152M | ~$182M | ±20% | Full first-module economics; the GTM lever |

**Implications, in rank order:** (1) **sell into big pools** — E[R] selection
dominates, which is the D1 calculus doing the CFO's work; (2) **depth is the cheap
lever** — attach moves the number at collapsed marginal cost; (3) **calibration is
the silent lever** — it compounds through realization, reserves, share credibility,
and renewals, which is why §4.3 is a standing control and not a dashboard curiosity.

---

## 6. Financial metrics (kernel D9)

### 6.1 The metric set

The kernel fixes ROI as the central metric with p(success) calibration and portfolio
risk-adjusted ROI as companions (D9). The financial layer reports:

| Metric | Definition | Target / guardrail (planning assumption) |
|---|---|---|
| **ARR** (base / module / contingent split) | Per §4.4 recognition: fixed ratable, contingent at p-weighted accrual | Grid corridor (§5.3); the split itself is a health metric |
| **NRR** | Net revenue retention across the customer book | > **125%** at established depth — driven by attach (§1.3), share-band migration (§3.4), and renewal repricing on measured returns (§2.4) |
| **Module attach** | Avg modules per customer; distribution, not just mean | Book migrating rightward on the §5.3 grid; stalled-at-1 accounts flagged |
| **Realized-ROI-share** | Billed module revenue ÷ measured customer return, per account and book-wide | **10–20%** band (§2.2), book-wide ≈ 15%; breaching 25% on any account triggers the ceiling (§2.6) |
| **Calibration error** | Ex-ante p vs realized success frequency, by band + Brier score (§4.3) | \|error\| ≤ **0.05** per band; alert at 0.10 |
| **Success-linked revenue mix** | Contingent ÷ total module revenue | Corridor **30–45%**: below it, pricing isn't credibly ROI-linked (category claim erodes); above it, revenue volatility outruns the reserve policy |
| **Realization** | Measured ÷ expected return, book-wide (B4 actual) | ≥ **0.85**; per-module < 0.5 for two true-ups → remediation path (§2.4) |
| **Gross margin / cost-to-serve** | §3.1 lines, per account | GM ≥ **85%** at any depth; cost-to-serve within B8 corridor |
| **Unpriced non-asset hours** | The services-trap tripwire (§3.2) | ≤ **150 hrs/yr/account**; breach → structural review (missing asset or agent capability), never a billing scramble |
| **Reserve adequacy** | True-down reserve vs realized true-downs | 90% adequacy (§4.4); releases tracked as the flywheel's P&L signature |
| **Concentration** | Contingent book by industry / family / customer | §4.2 limits (30% / 25% / 10%) |
| **Customer aggregate ROI** | Measured return ÷ (price + customer investment), per account | ≥ **3:1** net on first module, rising with attach — the kernel's central metric, reported in the finance pack because it *is* the pricing base |

### 6.2 Cadence

| Cadence | Review | Contents |
|---|---|---|
| Quarterly | True-up + accrual review | Readout accruals, realization by module, remediation-path candidates, reserve movement |
| Quarterly | Calibration review (§4.3) | Band-level calibration, Brier trend, s(p) schedule repricing for new sales |
| Per event | Sale / attach / renewal | ROI model + measurement schedule countersigned by finance before contract; renewal repricing on measured history |
| Annual | Pricing-architecture review | Share anchor and schedule vs realized book (Q1 answer re-audited); ceiling/floor levels; concentration limits; success-linked mix corridor |

---

## Appendix A — Tensions for kernel review

1. **The flat platform base vs ROI-purity (kernel D8).** The $500k+ base (evidence 07)
   is a flat, non-ROI-linked element in an otherwise ROI-derived architecture. This
   plan defends it as pricing the foundation's *option value* (§1.1) — but a purist
   reading of D8 ("price is set from the customer's return") could demand the base
   itself become a function of the customer's aggregate expected return (e.g. a % of
   total addressable pool). **Ask:** kernel to confirm the hybrid — flat base +
   ROI-shared modules — as the intended reading of D8.
2. **Ceiling vs premium-pricing at high p.** D8 says high-p solutions "carry premium
   pricing"; §2.6 caps any module at 25% of measured return. At p→0.85 and s→20%, a
   module under-realizing slightly can brush the ceiling, and the ceiling then
   overrides the premium. This plan makes the customer-protection ceiling dominant
   (the 3:1 customer-ROI floor is what keeps expansion obvious). **Ask:** confirm the
   ceiling dominates the premium when they conflict.
3. **The billing instrument's independence (kernel D2.5/D8).** The measurement loop is
   simultaneously the product's proof, the agent's reward signal (D7.2), and the bill.
   §2.5 engineers auditability in (contractual schedule, customer-inspectable trail,
   audit sampling, expert determination), but the three roles create a structural
   incentive question — the same instrument that trains our agents also sets our
   revenue. **Ask:** kernel to elevate readout-integrity (instrument governance,
   independence provisions) to an explicit product property under D2.5, not just a
   contract term in this plan.
4. **Success-linked mix vs revenue quality.** The §2.3 schedule pushes higher-variance
   modules toward majority-contingent pricing; capital markets discount contingent
   revenue relative to committed ARR. The §6.1 corridor (30–45% contingent mix) trades
   category credibility ("we price on your return" must be visibly true) against
   revenue-quality optics. This is an appetite decision above finance. **Ask:** kernel
   ratification of the corridor, or an explicit revision.
5. **Dependency on kernel Q3 (the p rubric).** The entire pricing architecture consumes
   p(success) as an input; §4.3 calibrates it *ex post* but cannot generate it. Until
   docs 02/07 land the ex-ante rubric (kernel open question 3), the §2.3 schedule
   rests on band definitions without an agreed scoring instrument. **Ask:** none —
   flagged as a hard dependency; the calibration control here is the enforcement half
   of whatever rubric 02/07 propose.
6. **No other contradiction found.** The anchor (Q1: 10–20% centered at 15%, share
   rising with p) and the structure (Q2: fixed covers deployment + floor, contingent
   trued to the readout, seller bears measurement-design risk, customer bears
   integrity covenants) are proposed here as answers *to* the kernel's open questions
   and become binding only when the kernel adopts them.
