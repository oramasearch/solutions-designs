# 06 — Financial plan

> **Status:** Draft v1 — 2026-07-15 · **Author:** CFO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits pricing and partner detail from evidence 07/08.
>
> **Kernel-binding.** This document elaborates the [strategy kernel](00-strategy-kernel.md)
> — specifically **D6 (commercial anchors)**, **D4 (the solution as the sellable unit)**,
> **D7 (gates, as they constrain revenue recognition-worthy milestones)**, and **D8
> (metrics)** — and answers kernel **open question #4** (module pricing mechanics). It
> must not contradict the kernel; genuine tensions are recorded in
> [Appendix A](#appendix-a--tensions-for-kernel-review) and resolved in the kernel first.
>
> **⚠️ Every number in this document is a planning assumption, not a forecast.** The
> business is pre-revenue on the Zetta line (one design partner in hand — Motive). All
> scenario outputs exist to size decisions and set gate thresholds, not to promise
> outcomes. Assumptions are tabled explicitly so they can be falsified one at a time.

---

## 1. Revenue architecture

### 1.1 The shape: Enterprise base + module attach

The kernel (D6, evidence 07) fixes the commercial anchors:

| Line | What it is | Price anchor | Role in this plan |
|---|---|---|---|
| **Orama Cloud v3 — Enterprise (Orama Zetta)** | The full platform, deployed on-prem / dedicated / dedicated-cloud in the **customer's** environment | **$500k/yr+** | **The base contract.** Every solutions-revenue dollar in this plan sits on top of an Enterprise base |
| **Solution modules (S-1…S-9, then T2)** | Separately priced modules on the Enterprise base — a solution per kernel D4 (methodology + correctness adaptations + business wiring + measurement + governance) | Proposed in §2 | **The expansion engine.** Land with one module, expand along the reuse frontier (kernel D6) |
| **Design-partner fees** | Paid pilots, ~10–25% of expected ACV, credited to year-one conversion (evidence 08) | ~$50k–$125k per partner (derived, §3.1) | **Pre-revenue.** Cash-flow support + commitment signal, *not* recognized as durable ARR |
| **Orama Cloud v3 — Pro** | Light agentic search, $200/mo + 4h onboarding @ $125/hr (evidence 07) | Out of scope | **Funnel only.** Pro is not solutions revenue; it may surface Enterprise leads. No Pro economics are modeled here |

Three structural consequences follow:

1. **Revenue = (# Enterprise bases) × ($500k+ base + Σ attached module fees).** The
   two levers are base count (GTM-constrained: 3–6 design partners, warm-intro
   verticals per kernel D5) and attach rate (product-constrained: the wave build order
   D2 determines which modules *exist* to attach).
2. **The factory economics (kernel §1) show up financially as attach-rate leverage.**
   Because methodologies are reused (many solutions ≫ few methodologies), the marginal
   engineering cost of the Nth module on an existing methodology wave is low, while its
   price is set by solution value. Gross margin on attach expands with catalog maturity.
3. **Design-partner fees are deliberately *not* the business.** They exist to qualify
   commitment (evidence 08: "paid pilots fit mission-critical software"), defray
   founder-time cost, and create the conversion gate. Treat them as contra-CAC, not ARR.

### 1.2 What we recognize when (gate-linked milestones)

The kernel's hard gates (D7) bound what we may *sell into production*, and therefore
what revenue quality we can claim. This plan adopts the following recognition-quality
ladder (management-accounting discipline, not GAAP language):

| Milestone | Gate condition (kernel D7/D8) | Revenue treatment |
|---|---|---|
| Design-partner fee invoiced | Partner signed, 120-day program started | Pilot revenue (one-time; credit accrues against conversion) |
| Shadow production running | Correctness gate passing on the partner's workload; **zero governance violations** | Still pilot revenue — no ARR claimed |
| **Conversion** | Security gate closed (zetta#759–#769) **for any production deployment**; solution meets DoD (D4): deployed · gate-passed · action-wired · measured · zero violations | **Enterprise base ARR starts**; pilot fee credited to year one |
| Module attach (post-conversion) | Attached solution meets the same DoD | **Module ARR** added |
| Renewal | D8 guardrails held (violations = 0, incident rate within bound); measured value (holdout/uplift) presented at renewal | NRR event |

**CFO position:** no ARR is booked, forecast externally, or celebrated internally for a
deployment that has not passed the security gate. This is the financial restatement of
kernel D7.1 — the 11 open auth gaps (zetta#759–#769, evidence 07) make any earlier
"production" claim a liability, not revenue.

### 1.3 The Pro tier boundary (explicit)

Pro ($200/mo) is **out of scope** for this plan except as funnel. Rationale: (a) its
unit economics are a different business (self-serve, low-touch, ~3 orders of magnitude
smaller ACV); (b) the anti-ICP filter (kernel D5) explicitly disqualifies LLM-copilot /
RAG-only buyers — many Pro users will look like that; (c) mixing Pro MRR into solutions
ARR would flatter the metrics this plan gates on. The single financial hook we keep:
**track Pro→Enterprise qualified-lead count** as a funnel metric, reported quarterly,
zero revenue attribution until a conversion occurs.

---

## 2. Module pricing proposal (answers kernel open question #4)

### 2.1 The three candidate mechanics

| Mechanic | How it works | Pros | Cons | Evidence fit |
|---|---|---|---|---|
| **A. Per-module flat** | Each S-n has a list price (e.g. $X/yr flat), tiered only by deployment size band | Simple to quote, simple to buy, predictable for the customer's budget cycle; matches "solutions as SKUs" (kernel D1/D4); easy for a 2-person GTM motion to run | Leaves value on the table for high-value deployments; invites per-seat/per-volume haggling anyway at Enterprise procurement | Matches evidence 07's "each module is separately priced"; matches how Databricks/Snowflake package accelerators as fixed-scope attachments (evidence 04/05) |
| **B. Value-indexed** | Price set per-customer as a % of measured or modeled value (e.g. 10–20% of retained revenue for S-1 churn) | Maximal value capture; the measurement loop (D4) provides the meter; aligns us with customer outcome | Requires trustworthy uplift attribution *before* pricing can settle → long negotiation; puts our revenue at the mercy of holdout erosion (evidence 12 §S6 failure cause 2); procurement teams resist open-ended %-of-value contracts; audit burden per deal | The measurement discipline exists in the DoD, but evidence 12 §S6 shows measurement is exactly where programs are weakest — pricing on the weakest link is fragile |
| **C. Usage-tiered** | Price per scored entity / prediction volume / node-hours | Familiar cloud mechanic; scales with adoption | **Wrong meter for this product**: we deploy in the *customer's* environment (their compute, their COGS), so usage doesn't track our cost; usage-metering inside a customer VPC creates a telemetry/governance tension with the "data never leaves" promise (evidence 06/08); penalizes exactly the deep adoption we want | Poor. Compute-near-data + customer-infra deployment (evidence 08 R4/R5) means customer usage costs *them*, not us |

### 2.2 Recommendation: **per-module flat, value-anchored bands, with a value-review escalator**

**Mechanic A as the contract structure, with B used as the price-setting input, C rejected.**

Concretely:

1. **Each S-n carries a flat annual module fee**, quoted in one of three bands
   (Standard / Extended / Strategic — defined below) chosen at sale by deployment
   scope (one business unit vs. enterprise-wide; one geography vs. global; entity
   volume band as a *band selector*, not a meter).
2. **The band placement is value-anchored:** the sales motion uses the solution's
   measured-value math (the same holdout/uplift discipline the DoD already requires)
   to justify the band — "S-1 at Motive protects $Y of revenue; the Strategic band at
   $Z is <10% of that." Value evidence *justifies* the flat price; it does not *meter* it.
3. **A value-review escalator at renewal:** each renewal may move a module one band up
   (never mid-term) when the measured value from the module's own measurement loop
   supports it. This captures value growth without open-ended %-of-value exposure.
4. **No usage meter.** The only quantity that appears in the contract is the band
   selector (entity-volume range), fixed at signature and revisited at renewal.

**Why this wins:** it keeps quoting simple enough for a founder-led motion (we have no
pricing ops team); it is congruent with the customer-infra deployment model (their
compute, their cost); it makes the measurement loop *commercially load-bearing* (the
same artifact that proves the solution works justifies the renewal band — one
discipline, two payoffs); and it preserves the module-attach expansion story the kernel
mandates (D6) with clean per-SKU ARR accounting.

### 2.3 Illustrative price bands (planning assumptions — anchored on the $500k/yr+ base)

Design logic: the Enterprise base ($500k/yr+) buys the platform — deploy surface,
governance, correctness gate, the engine. Modules price the *applied, wired solution*.
A module should be (a) small enough relative to the base that attach is an easy
expansion decision, (b) large enough to matter — target **15–30% of base per module**,
so that 2–3 attached modules roughly double the account.

| Band | Illustrative fee (per module per year) | When | Example placements |
|---|---|---|---|
| **Standard** | **$75k–$100k** | One business unit, one geography, entity volume in the module's base band | S-2 lead scoring for one sales org; S-7 KPI anomaly for one exec team |
| **Extended** | **$125k–$175k** | Multi-BU or enterprise-wide within one region; higher entity band | S-1 churn across all consumer lines; S-5 demand forecast across a full DC network |
| **Strategic** | **$200k–$300k** | Enterprise-wide, mission-embedded, regulator-facing (SR 11-7 / NAIC documentation posture included) | S-4 collections at a $30B+ bank; S-8 PdM across a national fleet |

Worked illustration (assumption, not forecast): a converted FS account = $500k base +
S-4 Strategic ($250k) + S-1 Extended ($150k) + S-7 Standard ($90k) ≈ **$990k ACV** at
three-module attach. This is the "land ~$600k, expand toward ~$1M" account shape the
scenario model in §4 uses.

### 2.4 Pricing the upgrade path (M-6/M-7 upgrades)

The kernel's wave plan (D2) makes some methodologies *upgrades to existing solutions*
rather than new SKUs: M-6 (survival/time-to-event) upgrades S-1's churn *scoring* into
churn *timing*; M-7 (causal/uplift) upgrades any "score" solution into an *action
policy* (kernel D2 W3; evidence 02/03 "closed loop beats score").

**Proposal: upgrades are priced as band moves, not new modules.**

| Upgrade | What the customer gets | Pricing treatment |
|---|---|---|
| S-1 + M-6 (churn timing) | *When* each customer will churn, not just who — enables intervention scheduling | S-1 moves up one band (e.g. Standard→Extended, +$50k–75k/yr) |
| S-n + M-7 (uplift/action policy) | Targeting by *persuadability*, not risk — measurable incremental lift | One band up on the affected module, **plus** eligibility for the value-review escalator at next renewal (uplift is precisely where measured value becomes demonstrable) |
| S-5/S-6 + M-11 (predict-then-optimize) | Forecast→decision automation | One band up; requires shadow-production sign-off first (kernel D7.5) |

Rationale: keeping upgrades inside the module's SKU (rather than minting S-1a, S-1b…)
keeps the catalog legible (one S-n per UC-n, per kernel D1), concentrates NRR into a
clean per-module band-migration metric, and mirrors how the engineering actually works
— the upgrade *is* the same solution with a deeper methodology, so the price should be
the same SKU with a deeper band.

### 2.5 What is deliberately not priced

- **Correctness gate, governance, audit** — never priced as add-ons. They are the brand
  (kernel D9.2) and the Enterprise base's justification. Unbundling them would invite
  customers to buy "fast wrong answers" — the exact failure the product exists to prevent.
- **Reference architectures** — the per-environment-class architecture work (kernel
  D7.4) is our IP and our cost (see §5); customers pay for it through the base, never
  as NRE line items (NRE pricing is the bespoke-SI trap, evidence 08 IP split).
- **The Auto-RL base model (One Orama catalog #3, evidence 07)** — strategic and
  continuous; it anchors every module's quality. Priced *into* the base and the module
  bands, not as its own SKU, until W4 maturity forces a rethink (flagged in Appendix A).

---

## 3. Unit economics

### 3.1 Per design partner (the 120-day engagement)

**Revenue side (evidence 08, adopted verbatim as anchors):** pilot fee ≈ **10–25% of
expected ACV**, credited to year-one conversion. Using the §2.3 account shape
(land ≈ $500k base + one Standard module ≈ $600k expected ACV):

| Assumption | Low | Mid | High |
|---|---|---|---|
| Expected ACV at conversion | $575k | $625k | $750k |
| Pilot fee % | 10% | 15% | 25% |
| **Pilot fee (one-time)** | **~$58k** | **~$94k** | **~$188k** |

Planning anchor: **~$75k–$125k per partner**, invoiced against 120-day program phase
exits (suggested: 30% at qualification/kickoff, 40% at build+govern exit, 30% at
shadow-production exit — keeps cash aligned to delivered phases and gives both sides a
clean walk-away point).

**Cost side.** The evidence-fixed inputs: 12–16-week scope; ~10–15 founder/senior-eng
hours per week per partner (evidence 08); plus non-founder engineering, and a share of
platform/infra.

| Cost line | Assumption | Per-partner cost (mid) |
|---|---|---|
| Founder/senior hours | 12.5 hrs/wk × 14 wks = ~175 hrs @ $250/hr loaded-opportunity rate | ~$44k |
| Supporting engineering | ~0.5 FTE for the engagement window (~7 wk-FTE) @ $4.5k/wk loaded | ~$32k |
| Solutions/correctness work (feature specs, gate evals, business wiring workshops) | ~100 hrs @ $150/hr blended | ~$15k |
| Infra share (build box amortization, AKS sandbox, CI) — see §5.3 | flat allocation | ~$5k |
| Travel/misc (regulated-vertical onsite expectations) | 2 onsites | ~$6k |
| **Total engagement cost (mid)** | | **~$102k** |

**Read:** at the mid pilot fee (~$94k) a partner engagement is roughly **cash-neutral
(-$8k)**; at the low fee it's a ~$45k investment; at 25% it's modestly cash-positive.
**This is by design** — the partner program is a customer-acquisition and
reference-architecture-acquisition program, not a services P&L. The valuable outputs
are (a) a convertible account, (b) one reference architecture per environment class
(kernel D7.4 — an asset reused across every later deal in that class), (c) generalized
learnings we own outright (evidence 08 IP split). Finance treats partner engagement
cost net of pilot fees as **CAC**, target < 0.5× first-year converted ACV.

**Founder-hours are the binding constraint, not cash.** 3 concurrent partners ×
10–15 hrs/wk = 30–45 founder hrs/wk — at the top of what two founders can give while
the engine ships W1/W2. This is why the kernel caps the cohort at 3–6 and why the
scenario model (§4) treats cohort size, not marketing spend, as the growth throttle.

### 3.2 Per converted customer (steady state)

**Gross-margin shape.** Deployment is in the *customer's* environment (kernel D6;
evidence 06/08): the customer pays for compute, storage, and network. Our COGS per
account is therefore unusually low for the price point:

| COGS line | Assumption (per account per year) |
|---|---|
| Support + maintenance engineering (patches, engine upgrades, gate re-evals) | ~$40k–$60k (shared pool, allocated) |
| Success/solution engineering (quarterly value reviews, measurement-loop upkeep, band-review prep) | ~$25k–$40k |
| Telemetry/eval infra share (in *our* environment: eval harness, e2e-as-CRD suites) | ~$5k–$10k |
| **Total COGS** | **~$70k–$110k** |

Against a $600k–$1M account, that is an **~85–90% gross margin at maturity** — *if and
only if* the services trap is avoided.

**The services trap (named, and countered structurally).** The known failure mode
(evidence 08 "bespoke-SI trap"; evidence 12 §S6 failure cause 7 — integration, not
modeling, is the long pole) is that every account quietly consumes unbounded custom
integration work, converting a software gross margin into an SI gross margin (~30%)
without anyone deciding to. Counters, all already kernel-mandated, restated here as
financial controls:

1. **The IP split is the margin defense** (evidence 08): customer owns data + weights;
   *we own engine, connectors, templates, generalized learnings.* Every hour spent in
   an account must either be (a) priced, or (b) produce a reusable asset. Hours that
   are neither are margin leakage — tracked per account (see §6).
2. **One reference architecture per environment class before widening** (D7.4): the
   first account in a class bears architecture cost (accepted, it's CAC); the second
   account in the same class must *reuse* it. If account #2 in a class needs >20%
   novel integration effort, that is a red flag reviewed at the monthly finance/ops sync.
3. **Connector/template work is capitalized as catalog assets**, not expensed as
   account service — the accounting mirrors the strategy (the factory reuses components).
4. **A services-hours budget per account** (suggested: ≤300 hrs/yr post-conversion
   included; beyond that, paid professional services at $250/hr or a Clustera-run
   engagement per evidence 07's pro-services model). Clustera (One Orama, evidence 07)
   is the designated absorber of onboarding services — Zetta engineering is not a
   services bench.

**Payback (planning assumption):** with CAC ≈ net partner cost + sales effort
(~$50k–$150k) and first-year gross profit ≈ $500k–$800k on a converted account,
payback is **< 6 months** in every scenario where conversion happens at all. The
economics of this business fail at the *conversion* step, not the payback step — which
is why the risk register (doc 07) weights partner-conversion risk so heavily.

---

## 4. Scenario model (explicitly illustrative)

### 4.1 Ground rules

- **All values are planning assumptions.** No line here is a forecast, commitment, or
  external statement. The model exists to (a) size the revenue consequence of the
  gates, (b) find which assumption the outcome is most sensitive to, (c) set the
  thresholds at which we would change plan.
- **Clock:** Year 1 = first 12 months from cohort start (assume 2026-Q4 cohort start,
  gated on the security work); Year 2 = the following 12.
- **Structure:** partners → conversions → base ARR → module attach → Year-1/2 ARR.
- Motive is counted inside the cohort (kernel open question #1 notes it is in hand).

### 4.2 Assumption table

| # | Assumption | Conservative | Base | Upside | Source/rationale |
|---|---|---|---|---|---|
| A1 | Design partners signed (cohort 1) | 3 | 4 | 6 | Kernel D6: 3–6; founder-hours cap (§3.1) |
| A2 | Pilot fee per partner (one-time) | $60k | $95k | $150k | §3.1 band |
| A3 | Partner→customer conversion rate | 33% | 50% | 67% | No internal history; enterprise design-partner conversions commonly land 30–70%; gate-quality scorecard (evidence 08) should push toward the upper half |
| A4 | Conversions in Year 1 (rounded) | 1 | 2 | 4 | A1 × A3 |
| A5 | Enterprise base ACV at conversion | $500k | $525k | $600k | Kernel D6 floor $500k+; upside assumes Strategic-band-heavy regulated accounts |
| A6 | Modules attached at conversion (incl. the pilot module) | 1 | 1.5 | 2 | Land-with-one (kernel D9.4); base assumes half the accounts take a second module at signing |
| A7 | Avg module fee | $90k | $120k | $175k | §2.3 bands (Standard→Extended mix) |
| A8 | Year-2 new partners (cohort 2) | 3 | 5 | 8 | Expansion to 8–12 only after patterns repeat (evidence 08); upside assumes reference architectures landed |
| A9 | Year-2 conversion rate (both cohorts' pending) | 33% | 50% | 60% | As A3 |
| A10 | Year-2 additional module attach per live customer | +0.5 | +1 | +1.5 | The reuse frontier: W2 modules (S-5/S-7/S-8) become attachable; upgrade band-moves (M-6) count as +0.5 |
| A11 | Gross churn of converted accounts | 0% Y1–Y2 | 0% | 0% | Multi-year enterprise contracts; churn risk is real but appears post-Y2 — see doc 07 risk register |
| A12 | Security gate closes (production unlock) | 2026-Q4 late | 2026-Q4 | 2026-Q3 late | zetta#759–#769 all open as of 2026-07-11 (evidence 07); conservative assumes slippage compresses Y1 |

### 4.3 Outputs (derived, rounded)

| Line | Conservative | Base | Upside |
|---|---|---|---|
| Pilot fees (Y1, one-time) | ~$180k | ~$380k | ~$900k |
| Converted customers, end Y1 | 1 | 2 | 4 |
| Base ARR, end Y1 | $500k | $1.05M | $2.4M |
| Module ARR, end Y1 | ~$90k | ~$360k | ~$1.4M |
| **Total ARR, end Y1** | **~$0.6M** | **~$1.4M** | **~$3.8M** |
| Converted customers, end Y2 (cumulative) | 2 | 4–5 | 8–9 |
| Base ARR, end Y2 | $1.0M | ~$2.4M | ~$5.1M |
| Module ARR, end Y2 (attach + upgrades) | ~$270k | ~$1.1M | ~$3.4M |
| **Total ARR, end Y2** | **~$1.3M** | **~$3.5M** | **~$8.5M** |
| Implied NRR on Y1 cohort (Y2/Y1, existing accounts only) | ~110% | ~125–135% | ~140%+ |

**How to read this:** the conservative case is survivable but slow — it funds
continued engine work only alongside other capital; the base case validates the
factory (module ARR becomes ~⅓ of total by Y2 — the attach engine visibly working);
the upside case is what "reference architectures repeating + warm-intro verticals
converting" looks like, and is the case in which cohort-2 expansion to 8+ partners is
justified.

### 4.4 Sensitivity (what actually moves the number)

Single-variable sensitivity on **Year-2 total ARR, base case** (~$3.5M):

| Variable | -1 step | Base | +1 step | Swing |
|---|---|---|---|---|
| **Conversion rate (A3/A9)** 33%↔50%↔67% | ~$2.3M | $3.5M | ~$4.7M | **±~35%** — dominant lever |
| **Module attach (A6/A10)** -0.5 ↔ base ↔ +0.5/acct | ~$3.0M | $3.5M | ~$4.0M | ±~15% |
| Avg module fee (A7) ±$30k | ~$3.2M | $3.5M | ~$3.8M | ±~9% |
| Cohort size (A1/A8) ±1 partner | ~$3.0M | $3.5M | ~$4.1M | ±~15% |
| Security-gate slip (A12) +1 quarter | ~$2.7M | $3.5M | — | -~22% (compresses Y1→Y2 conversions) |

**Implications, in order:**

1. **Conversion rate dominates.** Every dollar of program design should optimize for
   conversion quality: the scorecard gate ("no disqualifier + strong budget-adjacent
   champion", evidence 08), the 120-day exit artifacts, and shadow-production proof.
   A marketing dollar that adds a weak partner is worth less than an engineering
   dollar that converts a strong one.
2. **A one-quarter security slip costs more than a whole partner.** The security gate
   (D7.1) is not just an engineering gate — it is the single largest financial risk in
   the Year-1 plan. Finance co-owns tracking it (§6).
3. **Attach is the compounding lever** — smaller per-step than conversion but it
   compounds through NRR and is fully under product control (wave sequencing D2).

---

## 5. Cost structure & investment gates

### 5.1 Engineering investment by wave (relative sizing)

The engine roadmap prices in relative units (evidence 08 R1–R8 cost tags). We adopt
those tags as the investment currency — converting to dollars prematurely would imply
precision we don't have. For planning: **medium ≈ 1 unit, high ≈ 2, very high ≈ 4**
(one "unit" ≈ one senior engineer-quarter of focused work, order-of-magnitude).

| Wave (kernel D2) | Engine dependencies | Cost tags (evidence 08) | Relative units | Revenue it unlocks |
|---|---|---|---|---|
| **W1** (M-1/M-2/M-3) | R1 local run (medium) + R2 correctness gate (high) | medium + high | ~3 | S-1…S-4, S-7, S-9 pilots; the entire cohort-1 program |
| **W2** (M-4/M-5/M-6) | R3 one-button deploy (high) + R4-lite materialization (part of very-high R4) | high + partial very-high | ~4 | Production conversions (deploy-to-customer-cloud is the enterprise unlock); S-5/S-6/S-8 attach |
| **W3** (M-7/M-8/M-9) | R4 tiered storage/indexing (very high) + R6 governance (high) | very high + high | ~6 | Upgrade revenue (M-7 band-moves), document family, regulated-vertical depth (R6 gates every enterprise deal) |
| **W4** (M-10/M-11) | R5 compute-near-data (very high) + R8 learning loop (very high) | 2 × very high | ~8 | The moat (Auto-RL, agentic); pricing power rather than near-term ARR |
| Cross-cutting | R7 GUI (medium–high) + security gate (zetta#759–#769) + e2e/eval harness | — | ~3 | R7: self-service rate; security: **all** production revenue |

**Total through W4: ~24 relative units** — front-loaded ~7 units (W1 + security +
harness) before the first conversion dollar. The shape is normal for
infrastructure-led products; the discipline that matters is *gating* (below).

### 5.2 The two big engine bets (R4, R5) as gated investments

R4 (tiered storage/indexing) and R5 (compute-near-data) are tagged **very high** and
are the deepest moat *and* the largest write-off risk (evidence 08 sequencing notes:
"the biggest Orama Zetta engine bets"). CFO treatment — **stage-gate them like
internal venture investments:**

| Bet | Tranche 1 (committed) | Gate to Tranche 2 | Tranche 2 (full build) | Kill/park criterion |
|---|---|---|---|---|
| **R4** | R4-lite materialization only (what W2 needs: pull → materialize → serve one source, Snowflake first) | ≥2 converted customers whose measured query-cost / locality pain is documented in the account's value review; W3 use cases (M-9 document family) with signed demand | Full tiered hot→cold→re-warm + indexing | If by W2-exit no customer's measurement loop shows material warehouse-cost/locality value, R4-full parks; the ~60% cost-reduction figure stays an unvalidated hypothesis (evidence 08 success-metrics: do not quote externally) |
| **R5** | Design + sandbox prototype only (embedded Lua/DDF API spike) | A converted customer workload that *cannot* meet latency/locality needs via R4 materialization; W4 entry criteria met (governance + eval maturity per kernel D2) | Full sandboxed compute-near-data | If W3 solutions ship fine on remote orchestration, R5 defers — "execution graph as remote orchestration" is acceptable until the moat claim is revenue-tested |

This staging keeps the kernel's co-sequencing rule (D7.3) intact — no wave starts
before its dependency is *credibly scheduled* — while refusing to spend 8 units of
very-high engineering ahead of demand evidence.

### 5.3 Infrastructure & other operating costs

Customer-env-first economics keep our infra bill structurally small — we run
build/test/eval, not customer workloads:

| Line | What | Planning assumption (annual) |
|---|---|---|
| Build box (native amd64, `192.168.123.175`) | All engine/image builds; owned hardware | ~$5k–$10k (power, upkeep, refresh reserve) |
| AKS sandbox (`orama-production-cluster-01`) | CR validation, e2e-as-CRD suites, multi-node bring-up | ~$25k–$50k (scale with e2e coverage; watch elastic-capacity/Karpenter experiments — cap with budget alerts) |
| CI + Docker Hub private repos + misc SaaS | Pipelines, registries, telemetry | ~$15k–$25k |
| **Total infra** | | **~$50k–$85k/yr** — a rounding error vs. engineering payroll; the customer pays for production compute, always |
| Design-partner program (net, §3.1) | 3–6 engagements | ~$0–$150k net of pilot fees |
| GTM (events, travel: MLOps Community, KubeCon, Money20/20, ITC per evidence 08 channels) | practitioner-first sourcing | ~$40k–$80k |

**The dominant cost is engineering payroll + founder time.** Everything above is noise
by comparison; the CFO's cost job in 2026–27 is sequencing engineering units (§5.1–5.2)
and defending founder hours (§3.1), not trimming infra.

### 5.4 Investment gates tied to kernel D7 (financial restatement)

| Kernel gate | Financial rule |
|---|---|
| D7.1 security | No revenue recognized as production ARR before gate closure; security work is priority-0 in every engineering allocation until zetta#759–#769 land |
| D7.2 correctness ≥90% | Self-service packaging (and any pricing predicated on it) blocked until the floor holds on the evaluated task set |
| D7.3 co-sequencing | No wave's engineering units released until its engine dependency is credibly scheduled; R4/R5 tranche gates per §5.2 |
| D7.4 reference architectures | Cohort-2 expansion spend (A8 upside) blocked until ≥1 architecture per targeted environment class is landed and reused once |
| D7.5 shadow production | No automation-tier upsell (M-11 band-moves, agentic W4 SKUs) sold before the account has completed shadow production on the assisted tier |

---

## 6. Financial metrics & reporting cadence

### 6.1 Metric set

Two layers: **financial metrics** (this doc's additions) and the **kernel D8
operational metrics** that gate whether milestones are revenue-recognition-worthy.
The point of running them together: a revenue number that outruns its operational
gates is a mistake being amortized, not growth.

| Metric | Definition | Target/guardrail | Layer |
|---|---|---|---|
| **ARR (base / module split)** | Recognized per §1.2 ladder only | Scenario table §4.3 as planning corridor | Financial |
| **Module attach rate** | Avg modules per converted account; band-mix | ≥1.5 by end Y1 accounts' first renewal | Financial (kernel D8 names it) |
| **NRR** | Net revenue retention, converted accounts | >120% (attach + band escalators) | Financial (kernel D8) |
| **Partner→customer conversion** | Cohort conversions / cohort size | ≥50% (base case A3) | Financial (kernel D8) |
| **CAC & payback** | Net partner cost + sales effort vs. first-year gross profit | Payback <6 months (§3.2) | Financial |
| **Services-hours per account** | Unpriced, non-reusable hours | ≤300/yr post-conversion; overage → paid services or Clustera | Financial (margin defense §3.2) |
| **Pilot-fee cash** | One-time, phase-linked | Cash-neutral program (§3.1) | Financial |
| **Pro→Enterprise funnel** | Qualified leads originating in Pro | Tracked only, no attribution | Financial (boundary §1.3) |
| **Intelligence Velocity** | Median intent → deployed correct running (kernel D8 primary) | Minutes vs. weeks–quarters | Operational gate |
| **Correctness-gate pass rate** | ≥90% floor (D7.2) | Release- and packaging-blocking | Operational gate |
| **Governance violations** | Data egress / RBAC / audit breaches | **= 0, always** — a single violation freezes recognition of new milestones in that account | Operational gate |
| **Generated-graph incident rate** | Passed gate, failed in production | Trending ↓; if velocity ↑ while this ↑, the gate is too loose (evidence 08) | Operational gate |
| **Deploy reliability** | One-button deploys succeeding + self-healing | Trending ↑; gate for R3-dependent selling | Operational gate |
| **Time-to-value per solution** | Contract → DoD met | ≤16 weeks (kernel D8) | Operational gate |

### 6.2 Reporting cadence

| Cadence | Review | Contents | Owner |
|---|---|---|---|
| **Weekly** | Solution/engineering review (shared with COO, doc 07) | Security-gate burndown (until closed), correctness pass rate, partner-phase status | COO runs; CFO attends for gate items |
| **Monthly** | Finance/ops sync | ARR ladder movements, pilot-fee invoicing vs. phase exits, services-hours per account, infra spend vs. budget alerts, CAC accrual | CFO |
| **Quarterly** | Scenario re-base | Re-run §4 with actuals replacing assumptions (A-table updated in-place, versioned); sensitivity re-ranked; tranche-gate reviews for R4/R5 | CFO + CTO |
| **Per event** | Conversion / attach / renewal | DoD checklist verified (all five D4 conditions) before ARR is booked; band placement justified with measurement-loop artifact | CFO countersigns |
| **Annual** | Pricing review | Band levels vs. measured value across accounts; escalator outcomes; open question #5 (LLM-era T3 re-admission) revisited with CPO | CFO + CPO |

### 6.3 What finance escalates to the kernel

Only three things warrant proposing a kernel edit from this document's domain:
(1) evidence that the $500k+ base or the module-band structure blocks conversions
(pricing is D6 — kernel-level); (2) a partner cohort outcome outside the A3
conservative bound in either direction (changes D6 cohort mechanics); (3) an R4/R5
tranche-gate decision (changes D2/D7.3 sequencing). Everything else is elaboration.

---

## Appendix A — Tensions for kernel review

1. **Pilot-fee % vs. the $500k+ base.** Evidence 08 prices pilots at 10–25% of
   expected ACV. At the kernel's $500k+ Enterprise base, 25% = $125k+ — potentially
   heavy for a 12–16-week scoped pilot in the lower firmographic band ($500M revenue
   companies), and possibly a conversion-friction source. This plan assumes the % is
   computed on *expected first-year ACV including modules* and invoiced phase-linked
   (§3.1). If real negotiations force pilot fees materially below 10% ($60k), the
   kernel's "PAID at ~10–25%" anchor should be revisited rather than silently eroded.
   **Ask:** confirm the computation base (base-only vs. base+modules) in D6.
2. **The Auto-RL base model as an unpriced anchor.** Evidence 07 lists it as catalog
   item #3 — a use case in its own right — while kernel D2 places M-10 in W4 and this
   plan prices it *into* the base/bands rather than as a SKU (§2.5). If W4 delivers a
   distinctly sellable Auto-RL capability, D6 will need an explicit pricing decision;
   parking it inside the base forever forfeits a module. **Ask:** none now; flag for
   the W4-entry kernel review.
3. **Module fees vs. "solutions are separately priced" for the pilot module.** During
   the 120-day program the partner effectively receives S-1 (or equivalent) before any
   module fee exists; at conversion, §2.3 prices it. A partner may argue the pilot fee
   *was* the module fee. This plan treats the pilot fee as credited to the *base*
   year-one only. **Ask:** confirm in D6 that the credit applies to the base, with the
   module separately priced at conversion — or accept crediting against total ACV
   (base case in §4 assumed total-ACV credit; the difference is ~$90k per account).
4. **No contradiction found** between this plan and D1–D9 otherwise. The scenario
   corridor (§4.3) is consistent with D6's cohort size and D7's gate timing; the
   pricing recommendation (§2.2) resolves open question #4 without touching any
   binding decision.
