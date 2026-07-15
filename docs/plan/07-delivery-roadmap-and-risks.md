# 07 — Delivery roadmap & risk register

> **Status:** Draft v1 — 2026-07-15 · **Author:** COO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits pricing, partner, and security detail from
> evidence 07/08.
>
> **Kernel-binding.** This document elaborates the [strategy kernel](00-strategy-kernel.md)
> — specifically **D7 (sequencing gates)** as an executable roadmap, **D8 (metrics)** as
> an operating cadence, and the delivery consequences of **D2 (waves)**, **D5
> (industries)**, and **D6 (the partner program)**. It must not contradict the kernel;
> genuine tensions are recorded in
> [Appendix A](#appendix-a--tensions-for-kernel-review) and resolved in the kernel first.
>
> Companion: the financial consequences of this roadmap (investment tranches, the
> revenue-recognition ladder tied to these same gates) live in
> [`06-financial-plan.md`](06-financial-plan.md).

---

## 1. The delivery roadmap

### 1.1 Reading the roadmap

Three clocks run simultaneously and this roadmap interleaves them:

1. **The engine clock** — R1–R8 (evidence 08 roadmap): what Zetta can actually do.
2. **The methodology clock** — waves W1–W4 (kernel D2): which solution families can
   be built, co-sequenced to the engine by kernel D7.3.
3. **The customer clock** — the 120-day design-partner program per partner
   (qualify → secure environment → build + govern → shadow production → convert;
   evidence 08), 3–6 partners staggered.

The kernel's D7 gates are **hard**: a phase does not exit — regardless of calendar
pressure, partner pressure, or revenue pressure — until its gate conditions hold.
Gates are verified in the gate review (§2.2), never self-certified by the team that
built the thing being gated.

### 1.2 Phase plan

Dates are planning targets, not commitments; gates are the real boundaries. "Today" =
2026-07-15: Stage 1 of One Orama is done (Zetta headless + `OramaZettaCluster` CRD on
AKS), Stage 2 symbiosis v0 is in progress, and **all 11 security gaps
(zetta#759–#769) are open** (evidence 07).

#### Phase 0 — "Blocker zero" + W1 foundations (now → ~2026-Q4)

| | |
|---|---|
| **Theme** | Close the security gate; make W1 runnable end-to-end on today's engine; qualify cohort 1 |
| **Engine** | **zetta#759–#769 — all 11 auth gaps closed and re-reviewed** (priority-0, ahead of all feature work) · R1 hardening (local run: n8n import → graph → local node → results + lineage) · R2 build-out (the correctness gate: schema/type checks vs. source profiles, point-in-time/leakage checks, correctness evals incl. the FedEx-Freight division-correct class) · e2e L2/L3 coverage expansion (zetta#774) as the forcing function |
| **Solutions** | M-1 componentized from the UC-1 churn work; M-2 entity-resolution thin v1 (the gate needs it); M-3 on M-1 features · S-1 reference implementation advanced at Motive (shadow scope only — **no production deployment behind the open security gate**) |
| **GTM/partners** | Build the ~50-account list → 20–30 discovery calls → scorecard qualification (evidence 08); sign cohort 1 (3–6, target ≥1 FS/banking, ≥1 insurance-or-healthcare, ≥1 operational; Motive counted) |
| **Entry criteria** | None — this is now |
| **Exit gate (hard)** | ① Security: zetta#759–#769 closed + an independent re-review finds no critical gap (kernel D7.1) · ② Correctness: R2 gate operational and ≥90% pass on the evaluated task set for M-1 graphs (kernel D7.2) · ③ ≥3 partners signed with phase-exit artifacts defined · ④ Instrumentation: the intent→deploy arc emits timing spans per stage (the D8 primary metric is measurable — see §2.4) |

#### Phase 1 — W1 delivery: pilots to shadow production (~2026-Q4 → 2027-Q1)

| | |
|---|---|
| **Theme** | Run cohort-1 builds; prove S-1 end-to-end; land the first reference architecture |
| **Engine** | R2 continuous hardening against real partner data · R3 development starts (one-button deploy to **one** target: single k8s cluster first — resist the matrix, evidence 08) · R7-lite GUI so the loop is drivable without a CLI |
| **Solutions** | S-1 to full DoD at Motive (deployed · gate-passed · action-wired · measured · zero violations, kernel D4) · S-2/S-4/S-7 builds at the other cohort partners (each: one use case, one environment, one KPI) · every partner runs **shadow production before any automated action** (kernel D7.5) |
| **GTM/partners** | Each partner progresses qualify → secure-env → build+govern → shadow (120-day program); steering cadence per §2.3 |
| **Entry criteria** | Phase 0 exit gate held |
| **Exit gate (hard)** | ① S-1 meets the full DoD at Motive with a measured holdout/baseline result · ② **First reference architecture landed** for the first environment class (kernel D7.4) and documented well enough that partner #2 in the same class reuses ≥80% of it · ③ Correctness-gate pass rate holding ≥90% on the widened (multi-partner) task set · ④ Governance violations = 0 across the cohort |

#### Phase 2 — W2 × R3/R4-lite: conversion wave (~2027-Q1 → Q2)

| | |
|---|---|
| **Theme** | Convert cohort-1 partners onto Enterprise contracts; open the W2 solution families |
| **Engine** | R3 to production quality (deploy + self-heal; deploy-reliability metric live) · R4-lite materialization (pull source → materialized copy → serve; Snowflake first) · R6 groundwork (key-scoped access → identity/RBAC design) |
| **Solutions** | M-4 (forecasting) + M-5 (anomaly) + M-6 (survival) built · S-5/S-6/S-8 available for attach · M-6 band-move upgrades offered to converted S-1 accounts |
| **GTM/partners** | Conversion pushes per the 120-day exits; second-environment-class partner starts (toward the second reference architecture); cohort-2 discovery bench warmed (no signing yet) |
| **Entry criteria** | Phase 1 exit gate held **and** R3/R4-lite credibly scheduled (kernel D7.3) |
| **Exit gate (hard)** | ① ≥1 partner converted with production deployment through the closed security gate · ② R3 deploy reliability trending up with self-heal demonstrated · ③ Second reference architecture in progress with a real account · ④ Time-to-value ≤16 weeks held for every W2 solution delivered (kernel D8) |

#### Phase 3 — W3 × R4/R6: governance depth + the action layer (~2027-Q2 → Q4)

| | |
|---|---|
| **Theme** | Deepen regulated-vertical fitness; upgrade scores into action policies; widen the cohort |
| **Engine** | R6 full governance (Okta/OAuth identity, RBAC per workflow/data, audit trail, approval gates, residency) · R4 full tiered storage/indexing **only if its investment tranche gate passed** (financial plan §5.2) · R7 GUI as the product surface |
| **Solutions** | M-7 causal/uplift (band-move upgrades across deployed score solutions) · M-8 NBA-lite · M-9 embeddings/document intelligence (MCP-native — **kernel governing convention: integrating into Zetta's MCP service requires explicit approval first**, evidence 07) · T2 entries begin (fraud/AML triage, claims triage) under heightened governance |
| **GTM/partners** | Cohort 2 signs (expand toward 8–12 **only after deployment patterns repeat** — evidence 08); third environment class (bare-metal/on-prem GPU) reference architecture |
| **Entry criteria** | Phase 2 exit gate held; R4/R6 credibly scheduled; ≥2 reference architectures landed |
| **Exit gate (hard)** | ① R6 governance passes an external-facing review posture (SR 11-7-shaped documentation for the FS account, NAIC-shaped for insurance) · ② ≥1 M-7 upgrade measured with an uplift design (not response) · ③ All three environment classes have a landed reference architecture before any further widening (kernel D7.4) |

#### Phase 4 — W4 × R5/R8: the compounding moat (2028+, gated)

| | |
|---|---|
| **Theme** | Agentic + Auto-RL + predict-then-optimize; the learning loop |
| **Engine** | R5 compute-near-data and R8 learning loop — **both enter only through their tranche gates** (financial plan §5.2) and only after governance + eval-harness maturity (kernel D2 W4 rationale) |
| **Solutions** | M-10 agentic (graduated authority — shadow → assisted → automated, always) · M-11 predict-then-optimize upgrades on S-5/S-6 |
| **Entry criteria** | Phase 3 exit gate held · eval harness mature (evidence 12 §S7: the agentic tier is where cancellation forecasts are worst — >40% by 2027 per Gartner; we enter it with the routine tier's disciplines or not at all) |
| **Exit gate** | Defined at Phase-3 exit review; deliberately not pre-committed |

### 1.3 The design-partner cohort overlay (the customer clock)

Each partner runs the 120-day program; the cohort is staggered ~3–4 weeks apart so
that founder attention (10–15 hrs/wk/partner) never stacks more than 3 partners in
their most intensive phase (build + govern) simultaneously.

| 120-day phase | Duration | Exit artifact | Roadmap dependency |
|---|---|---|---|
| **1. Qualify** | ~2 wks | Scorecard passed ("no disqualifier + strong budget-adjacent champion"); one named use case + one KPI + dollar attached; signed pilot agreement with phase-linked fees | None (can run during Phase 0) |
| **2. Secure environment** | ~3–4 wks | Deploy surface reachable (VPC/K8s/on-prem); data access granted; environment-class identified against the reference-architecture map | R1 (local) for early partners; R3 needed for in-environment deploy — early partners run local/shadow topologies until R3 lands |
| **3. Build + govern** | ~5–6 wks | Solution built; **correctness gate passed** on the partner's data (point-in-time, leakage, entity resolution); governance posture documented | R2 operational — hard dependency |
| **4. Shadow production** | ~4–6 wks | Predictions running alongside the human process; measured vs. holdout/baseline; **zero governance violations**; action wiring rehearsed with the named owner | Kernel D7.5 — non-negotiable; no automation before this completes |
| **5. Convert** | ~2 wks | Enterprise contract; pilot fee credited; module band placed with the measurement artifact | **Security gate closed** — hard dependency for any production conversion |

**Cohort scheduling rule:** a partner may *start* (phases 1–2) before Phase 0 exits,
but **no partner reaches phase 5 before the security gate closes**, and no partner
enters phase 4 without the R2 gate passing on *their* data. If the security gate slips,
partners hold in an extended shadow phase — explicitly communicated as the governance
discipline they are buying, not hidden as a delay.

### 1.4 The reference-architecture workstream (kernel D7.4 as a deliverable)

"One reference architecture per environment class before widening" is a **workstream
with artifacts**, not a slogan (evidence 08: "the single best execution guardrail
against the bespoke-integration death spiral"):

| Environment class | Target first account | Artifact set | Status target |
|---|---|---|---|
| Regulated cloud VPC | FS/banking or insurance partner | Deploy topology, network/egress posture (verifiable "data never leaves" under network capture), identity integration, audit-trail wiring, gate-eval harness config, runbook | Phase 1–2 |
| K8s private cloud | Operational account (Motive-class) | Same set + operator/CRD deployment path (`OramaZettaCluster`), self-heal validation | Phase 1 (Motive first) |
| Bare-metal / on-prem GPU | Second-wave manufacturing/telecom partner | Same set + hardware provisioning + air-gap variant | Phase 3 |

Rules: (a) the *first* account in a class pays the architecture cost (accounted as
CAC, financial plan §3.1); (b) the *second* account in a class must reuse ≥80% of the
artifact set — measured, not vibes; a reuse miss >20% triggers a delivery review;
(c) no third environment class is attempted while any class has zero landed
architecture; (d) architecture artifacts are owned IP (evidence 08 IP split) and live
in the product repos, not in customer-specific folders.

### 1.5 Critical path analysis

What blocks what, explicitly:

```
[zetta#759–#769 security gate]  ──────────────► blocks ALL production deployment,
        │                                        every conversion, all module ARR
        ▼
[R2 correctness gate ≥90%] ────► blocks phase-4 shadow entry per partner,
        │                        blocks self-service packaging (D7.2)
        ▼
[R3 one-button deploy] ────────► blocks in-customer-environment deployment,
        │                        therefore blocks the DoD's "deployed" clause
        │                        for non-local topologies → blocks conversion at scale
        ▼
[Reference architecture #1] ───► blocks partner #2 in the same class being cheap;
        │                        all three classes block cohort-2 widening (D7.4)
        ▼
[R4-lite] ─────────────────────► blocks W2 modules (S-5/S-6/S-8) → blocks attach growth
[R6 governance] ───────────────► blocks T2 regulated use cases + Phase-3 exam-posture
[R4 full · R5 · R8] ───────────► gated bets; block only W3-deep/W4 (by design)
```

**Blocker zero is the security gate.** Everything monetizable sits behind it; a
one-quarter slip costs more than losing an entire design partner (financial plan
§4.4). Consequences for operations: (a) security burndown is the first item in every
weekly review until closed; (b) no engineering capacity is diverted from it to feature
work without a COO+CTO joint decision recorded in the decision log; (c) the burndown
is reported with independent verification (the e2e L2/L3 suite exercising
`--require-auth` paths, zetta#774), because "necessary, not sufficient" (kernel D7.1)
means closure claims need adversarial testing, not just merged PRs.

**Second-order path to watch:** R3 is on the critical path to *conversion* but not to
*shadow production* — so a slow R3 doesn't stall partner progress, it stalls revenue.
Conversely R2 is on the critical path to partner phase 4 — a slow R2 stalls *every*
partner simultaneously. R2 is therefore the schedule's highest-leverage engineering
investment after security (and they overlap: the gate evals run under auth).

---

## 2. Operating model

### 2.1 The cadences (who runs what)

| Cadence | Meeting | Owner | Standing agenda |
|---|---|---|---|
| **Weekly** | **Solution review** | COO | Security burndown (until closed) · per-partner 120-day phase status vs. exit artifacts · correctness-gate pass rate this week · generated-graph incidents · founder-hours actuals vs. the 10–15/wk/partner budget · blockers escalated |
| **Weekly** | Engineering review (existing) | CTO | R-track progress vs. the phase plan; co-sequencing check (D7.3): is the next wave's dependency credibly scheduled? |
| **Bi-weekly** | **Partner steering** (per partner) | Solution lead for that partner | Phase progress vs. exit artifact · KPI trajectory · named action owner engaged ("name the person whose Monday changes" — evidence 12 §S6) · risks specific to the account |
| **Monthly** | **Gate review** | COO chairs; CTO + CFO attend | Formal check of any phase-exit claims against D7; tranche-gate reviews (R4/R5) when triggered; reference-architecture reuse measurement; services-hours per account (the margin defense, financial plan §3.2) |
| **Monthly** | Catalog intake | CPO | New use-case candidates via the **`add-use-case` runbook only** (kernel D1/D9.5): research dossier → kernel criteria → tier placement → wtm blueprint sync. No use case enters the portfolio through a sales conversation directly |
| **Quarterly** | Kernel review | Exec team | Tensions appendices from docs 01–07 · open-question status · scenario re-base (with CFO) · risk-register re-score (§4) |

Two rules make the cadences honest:

1. **Gates are reviewed by non-builders.** The monthly gate review is chaired by the
   COO and requires evidence artifacts (eval outputs, e2e runs, network captures,
   signed exit documents) — a gate claim without its artifact is not reviewed, it is
   returned.
2. **Every review consumes instrumented data, not narrative.** See §2.4.

### 2.2 Gate reviews (the D7 enforcement mechanism)

Each kernel D7 gate has a named verification method and a standing owner:

| Gate | Verification | Owner |
|---|---|---|
| D7.1 security | zetta#759–#769 closed · independent re-review · e2e L2/L3 auth suite green under `--require-auth` · no critical finding open | CTO (delivery) / COO (verification) |
| D7.2 correctness ≥90% | The evaluated task set is versioned; pass rate computed by the harness, not by hand; first-try vs. after-one-edit tracked (evidence 08) | CTO |
| D7.3 co-sequencing | "Credibly scheduled" = named owner + design doc + capacity allocated in the current quarter; checked before any wave kickoff | COO |
| D7.4 reference architectures | Artifact set complete per §1.4 · reuse ≥80% measured on account #2 | COO |
| D7.5 shadow production | Shadow logs show side-by-side operation ≥ the phase window · measured vs. holdout/baseline · sign-off from the customer's named action owner | Solution lead, countersigned COO |

### 2.3 Shadow production as a standard operating procedure

Shadow production (kernel D7.5; evidence 08's 120-day program) is written down as an
SOP, identical across accounts, because it is both a safety discipline and the
measurement instrument:

1. **Setup:** the solution scores/predicts on live data; outputs land in a review
   surface, not in the system of action. The incumbent human process continues
   unchanged. A holdout design is chosen *now* (permanent randomized holdout or
   phased rollout per the evidence-12 §S5 pattern that fits the use case) — not
   retrofitted after go-live.
2. **Operation:** weekly comparison of model outputs vs. human decisions vs. outcomes;
   every disagreement triaged (model wrong / human wrong / definition wrong — the
   FedEx-Freight entity-resolution class of failure most often surfaces here as
   "definition wrong").
3. **Graduation criteria (all required):** correctness gate holding on live data ·
   measured lift vs. holdout/baseline · action owner signed the playbook (driver →
   recommended action → owner) · zero governance violations in the window.
4. **Graduation is to *assisted*, never directly to *automated*** — the automation
   ladder (shadow → assisted → automated) climbs one rung per review cycle with
   evidence (evidence 12 §S6 "what the successes did differently" #4).

### 2.4 Instrumentation-first (the rule)

Adopted verbatim from evidence 08 success-metrics: **"a success metric without
instrumentation is a wish."** Operationalized:

- **No solution ships whose DoD metrics aren't emitted by the system itself.** The
  intent→deploy arc emits timing spans per stage (Intelligence Velocity is computed,
  never estimated); the gate emits pass/fail with reasons; deploys emit
  success/self-heal events; governance surfaces emit audit records continuously.
- **No roadmap phase exits on un-instrumented criteria.** If a gate condition can't be
  read from telemetry or a durable artifact, the gate isn't ready to be reviewed.
- **Per-account measurement is part of the build**, not the QBR prep: the
  holdout/uplift design is stood up during build + govern (phase 3), so shadow
  production produces decision-grade measurement from its first week.
- **The two weekly tests** (evidence 08): did Intelligence Velocity measurably improve
  for a user; did the work strengthen the business — asked at the weekly solution
  review, answered from data.

---

## 3. Capacity plan (qualitative)

### 3.1 The binding constraints

1. **Founder hours.** 10–15 hrs/wk per active partner (evidence 08). At 4 active
   partners this is 40–60 hrs/wk of founder time on partner work *alone* — the hard
   ceiling that justifies the kernel's 3–6 cap. Mitigation is staggering (§1.3) and
   ruthless anti-ICP filtering (a disqualified partner costs the same hours as a good
   one and converts to nothing).
2. **Engine engineering.** The security gate, R2, and R3 compete for the same senior
   engineers. Phase 0 resolves this by fiat: security first, R2 second, everything
   else third.
3. **The single-owner problem.** Deep knowledge of the engine (C++26/CRDT), the
   operator, and the partner relationships is concentrated in very few people. This is
   a risk-register entry (O-2) with structural mitigations, not just a hiring line.

### 3.2 What each wave needs staffed

| Wave/phase | Engine side | Solutions side | GTM side |
|---|---|---|---|
| Phase 0 | Security closure (senior, ~2 people focused) + R2 gate build + e2e harness | M-1/M-2 componentization from UC-1 churn work; eval task-set authorship | Discovery calls (founder-led), scorecard runs |
| Phase 1 | R3 single-target deploy; R7-lite GUI | 1 solution lead per active partner (may be fractional early, but *named*); correctness/gate work per account | Partner steering, conversion prep |
| Phase 2 | R4-lite; R6 groundwork; deploy reliability | W2 methodology builds (M-4/M-5/M-6); attach delivery | Conversion execution; cohort-2 bench |
| Phase 3 | R6 full; R4 tranche-2 if gated in; R7 | M-7/M-8/M-9; T2 governance-heavy solutions; exam-posture documentation | Cohort 2; second/third environment classes |
| Phase 4 | R5/R8 (tranche-gated) | M-10/M-11 with graduated-authority discipline | Expansion motion |

**First-hire priorities implied by the plan** (sequenced, not simultaneous):
(1) a **solutions/delivery engineer** who owns partner builds end-to-end — directly
converts founder hours into capacity; (2) a **second senior engine engineer** —
halves the single-owner risk on the C++ core; (3) a **customer/solutions success
role** at ≥3 converted accounts — owns measurement-loop upkeep and band-review
artifacts (which is revenue work, per the financial plan's escalator).

### 3.3 The team boundary: engine/operator vs. solutions

Per the One Orama governing conventions (evidence 07): **everything eventually lives
in the Zetta codebase + the operator** — capability moves *into* the engine over time,
and Zetta's MCP service is the platform's voice (integration into it requires explicit
approval).

Operational consequences:

- **The solutions team builds *on* the engine, never *around* it.** A partner need
  that the engine can't meet becomes an engine backlog item (with the wave/tranche
  discipline), or the solution scope changes. Solutions-side workarounds (side
  services, glue infrastructure, customer-specific forks) are treated as debt with a
  named retirement plan — they are how the bespoke-SI spiral starts.
- **The boundary artifact is the reference architecture** (§1.4): everything in it
  must be product (engine/operator/CRD/template), not account-specific scaffolding.
- **Generalized learnings flow back monthly**: the catalog intake review (§2.1) also
  reviews what partner work produced that should become engine/template capability —
  the IP-split's "we own generalized learnings" made operational.
- **Clustera (evidence 07) is the designated professional-services absorber** for
  onboarding-shaped work once integrated; Zetta engineering is not a services bench
  (financial plan §3.2). Until the Clustera integration lands, the services-hours
  budget per account is the only defense — watch it weekly.

---

## 4. Risk register

### 4.1 Method

- **Scoring:** Likelihood and Impact each H/M/L, assessed for the Phase-0→2 horizon
  (the next ~12 months) unless noted. Priority = the pair, worst-first (H/H top).
- **Every risk carries:** statement · likelihood · impact · leading indicator (what we
  watch *before* it lands) · mitigation (what we do now) · owner (role) · **containing
  kernel gate** (which D7 gate, if any, structurally contains it — "—" means the risk
  is not gate-contained and lives on management attention alone; those get extra
  cadence scrutiny).
- **Re-scored quarterly** at the kernel review (§2.1); a risk whose leading indicator
  fires moves to the weekly solution review until cleared.
- Sources: engine reality + session logs (evidence 07/08), the failure-mode syntheses
  (evidence 12 §S6/§S7, evidence 15 incl. its process note), partner-program research
  (evidence 08), and the kernel's own gates.

### 4.2 Engine & platform risks

| ID | Risk statement | L | I | Leading indicator | Mitigation | Owner | Kernel gate |
|---|---|---|---|---|---|---|---|
| **E-1** | **R4 (tiered storage/indexing) — very-high-cost bet overruns or underdelivers**, starving W2/W3 and stalling the warehouse-cost story; the ~60% cost-reduction figure is an unvalidated hypothesis (evidence 08) | M | H | R4-lite slipping its Phase-2 window; scope creep from "materialize one source" toward "build the full tiered engine"; the tranche gate being argued around | Tranche-gated investment (financial plan §5.2): R4-lite only until ≥2 converted customers document the locality/cost pain; never quote the 60% externally; Snowflake-first single-source scope held by the gate review | CTO | D7.3 |
| **E-2** | **R5 (compute-near-data) — very-high-cost bet built ahead of demand**; sandboxing/security surface is large, and remote orchestration may serve W3 fine | M | H | Pressure to start R5 before a converted customer workload demonstrably needs it; sandbox design expanding pre-tranche | Tranche gate: design + spike only until a real workload fails on R4 materialization; W4 entry requires governance + eval maturity (kernel D2) | CTO | D7.3 |
| **E-3** | **CRDT control-plane trust: lost/conflicting state** — the operator's datastore *is* Zetta (symbiosis v0, evidence 07); control-plane state on an equal-peer CRDT store has known transactions/leadership-gap risk (evidence 08 guardrail: "control-plane integrity") | M | H | Lost/conflicting state events in the control-plane integrity metric; reconcile loops fighting; replicated-identity gaps (part of zetta#759–#769) re-emerging in multi-cluster peering | Instrument control-plane integrity events from day one (the D8 guardrail); e2e multi-node CRDT coverage (zetta#774); keep the Zetta→operator intent loop (operator#100) narrow and observable before widening; production topologies stay single-cluster until the multi-node bring-up epic (operator#93) validates | CTO | D7.1 (partially) |
| **E-4** | **Headless build target debt**: the `zetta` binary always links SDL3/ImGui; the slim headless target is an open question (evidence 07) — image size, attack surface, and GUI-dependency drift accumulate in every customer deployment | M | M | Image CVE/scan findings against GUI libs; customer security reviews questioning the desktop deps in a server image; build breaks from GUI-side changes rippling into headless releases | Decide the `zetta-headless` target (or `#ifdef`) before the first regulated-VPC reference architecture freezes; treat the slim image as part of that architecture's artifact set | CTO | D7.4 (via architecture DoD) |
| **E-5** | **R3 deploy story slips** — "deploy to your cloud" is the enterprise unlock and is unbuilt beyond the operator/AKS path; provisioning surface area is the known trap (evidence 08: "resist the matrix") | M | H | R3 scope listing >1 target for v1; partner environments demanding bespoke provisioning during phase 2 of their program | One target first (single k8s cluster), then on-prem VM; the operator/CRD path (`OramaZettaCluster`) as the spine; environment-class map (§1.4) filters partners whose environment doesn't match a scheduled class | CTO | D7.3 |
| **E-6** | **E2E/eval coverage lags the surface area** — auth, MCP/REST, multi-node, governance paths grow faster than L2/L3 coverage (zetta#774), so gate claims outrun verification | M | H | Gate-review artifacts increasingly manual; incidents in paths with no e2e coverage; the security re-review finding untested claims | "E2E as the forcing function" (evidence 07) held as policy: no phase exit on un-covered paths; coverage tracked in the weekly engineering review | CTO | D7.1/D7.2 |

### 4.3 Security risks

| ID | Risk statement | L | I | Leading indicator | Mitigation | Owner | Kernel gate |
|---|---|---|---|---|---|---|---|
| **S-1** | **The 11 auth gaps (zetta#759–#769) stay open past the Phase-0 window** — production blocker zero; every conversion, all ARR, and the Y1 plan sit behind it (a one-quarter slip ≈ −22% of Y2 ARR, financial plan §4.4) | M | **H** | Burndown flat for >2 weeks; engineers reassigned to feature work; "necessary not sufficient" caveats multiplying in review notes | Priority-0 staffing by fiat (§3.1); weekly burndown first on the solution-review agenda; independent re-review + adversarial e2e before closure is claimed; partner comms pre-drafted for the hold-in-shadow contingency (§1.3) | CTO (fix) / COO (verification) | **D7.1** |
| **S-2** | **New critical gaps found after "closure"** — the first review found 11 exploitable gaps *after* a comprehensive authn/authz epic merged (evidence 07); priors say one review is not the last | M | H | Closure declared without an independent re-review; auth-adjacent code churn (peering, replication, MCP surface) without security review | Institutionalize the review: security re-review at every phase exit that touched auth surfaces; the L2/L3 governance suite runs `--require-auth` paths continuously; a standing "security gate" section in the monthly gate review even after D7.1 closes | CTO | D7.1 |
| **S-3** | **Cross-cluster identity/peering trust** — replicated identity trusted without proof of origin was among the filed gaps; multi-cluster OZC peering (an OZC as a slice of a global cluster) widens exactly that surface | M | H | Multi-node bring-up (operator#93) proceeding while identity-origin issues remain open; customer topologies requesting cross-cluster before Phase 3 | Sequence: single-cluster production topologies only until the identity/peering gaps are closed and e2e-covered; cross-cluster is a Phase-3+ capability | CTO | D7.1 |

### 4.4 Correctness risks

| ID | Risk statement | L | I | Leading indicator | Mitigation | Owner | Kernel gate |
|---|---|---|---|---|---|---|---|
| **C-1** | **The correctness gate never stably clears the ≥90% floor** on a widening task set — and self-service (and its pricing story) stays blocked, or worse, the floor gets quietly renegotiated | M | H | Pass rate oscillating as partners add task types; pressure to shrink the evaluated set to protect the number; first-try vs. after-one-edit gap widening | The task set is versioned and only grows; floor breaches block packaging, not get explained; R2 investment is second only to security (§1.5); lean on the churn RLVR/eval discipline (evidence 08 R2) | CTO | **D7.2** |
| **C-2** | **Generated-graph incidents in production** — graphs pass the gate, then fail or misbehave live; if velocity rises while incidents rise, the gate is too loose (evidence 08 guardrail) | M | H | Incident rate ticking up in any account; gate pass-rate rising *while* shadow-production disagreement triage worsens | The D8 guardrail instrumented per account; every incident becomes a gate task-set addition (the gate learns); velocity celebrated only alongside the incident guardrail | CTO | D7.2 |
| **C-3** | **The FedEx-Freight class of failure: entity resolution produces confidently-wrong aggregates** (division-averaged rosy pictures); M-2 is deliberately thin in W1, so this class is under-defended exactly when the first partners arrive | M | H | Shadow-production disagreements triaged as "definition wrong"; partner data with known entity complexity (fleets, subsidiaries, householding) entering phase 3 | The division-correct test class is mandatory in every account's gate evals (kernel D8 names it canonical); M-2 investment pulled forward if two accounts hit ER-class triage findings; entity-complexity screened during partner qualification | Solution leads | D7.2 |
| **C-4** | **Correctness debt surfaces late in a partner build** — leakage-inflated pilot metrics that collapse in shadow production (the 0.99-AUC churn pattern, evidence 12 §S6 cause 3) — burning the partner's trust and the reference story | M | H | Pilot metrics "too good"; point-in-time reconstruction faked from current tables (the known backtest trap); shadow results far below build-phase results | Point-in-time discipline enforced by the gate, not by review; as-of reconstruction validated during build+govern (phase-3 exit artifact); "suspiciously good" is a standing triage trigger in the weekly review | Solution leads | D7.2/D7.5 |

### 4.5 Delivery risks

| ID | Risk statement | L | I | Leading indicator | Mitigation | Owner | Kernel gate |
|---|---|---|---|---|---|---|---|
| **D-1** | **The bespoke-SI death spiral** — each partner's environment/needs pull delivery into custom integration; margins and the roadmap dissolve into services (the trap evidence 08 names; §S6 cause 7: integration is the long pole everyone underestimates) | M | **H** | Reference-architecture reuse <80% on account #2; solutions-side glue services appearing; engine backlog items bypassed by account-specific workarounds | The reference-architecture rule as a hard gate (D7.4, §1.4); the team boundary (§3.3): everything in the architecture must be product; monthly reuse measurement at the gate review | COO | **D7.4** |
| **D-2** | **The services trap post-conversion** — converted accounts quietly consume unbounded unpriced hours; software margin becomes SI margin without a decision (financial plan §3.2) | M | M | Services-hours per account trending toward the 300/yr budget; "quick favors" not logged; the same integration built twice for two accounts | Services-hours tracked monthly per account with an explicit budget; overage → paid services or Clustera; hours must be priced or produce a reusable asset (the IP-split rule made operational) | COO + CFO | — (cadence-watched) |
| **D-3** | **Widening before the pattern repeats** — cohort-2/vertical expansion under revenue pressure before all targeted environment classes have landed architectures | M | H | Cohort-2 signing conversations ahead of the Phase-3 entry criteria; a fourth vertical entering the pipeline "because the intro was warm" | D7.4 blocks expansion spend (financial plan §5.4); the kernel's own expansion rule (8–12 only after patterns repeat, evidence 08) checked at gate review | COO | D7.4 |
| **D-4** | **Partner scope creep** — "one use case · one environment · one KPI" becomes two of something mid-program; the 12–16-week box breaks, founder hours blow past budget | H | M | Steering meetings surfacing "while we're at it" asks; exit artifacts being renegotiated mid-phase; founder-hours actuals >15/wk on one partner | The scope triple is in the pilot contract with phase-linked fees (§1.3); scope changes are a new phase-1 (re-qualification), not an amendment; hours tracked weekly | Solution leads | D7.5 (indirectly) |
| **D-5** | **Time-to-value exceeds 16 weeks** — programs drag (environment access, data access, security review queues at the customer), pushing conversions right and souring the reference story | H | M | Phase-2 (secure environment) exceeding 4 weeks — the classic drag point; customer-side approvals unowned | Environment/data access made a phase-1 exit precondition (no kickoff without named access owner + dates); the D8 time-to-value metric reviewed per partner weekly; hold-points formally pause the 120-day clock with the steering committee's sign-off (honesty over heroics) | COO | D8 (metric-gated) |

### 4.6 Market & commercial risks

| ID | Risk statement | L | I | Leading indicator | Mitigation | Owner | Kernel gate |
|---|---|---|---|---|---|---|---|
| **M-1** | **Design-partner conversion underperforms** — the plan's dominant sensitivity (±35% of Y2 ARR, financial plan §4.4); pilots complete but Enterprise contracts don't follow | M | **H** | Phase-4 exits without conversion conversations scheduled; champion turnover mid-program; pilot fee negotiated down below 10% (weak commitment signal) | Scorecard gate held ruthlessly (no disqualifier + budget-adjacent champion); phase-linked fees keep skin in the game; conversion terms (credit mechanics) agreed at pilot signature, not at pilot end; measured shadow-production value is the conversion artifact | CRO/CEO | D7.5 (the proof) |
| **M-2** | **LLM-copilot demand distraction** — inbound and even signed partners really want RAG/copilot (the explicit disqualifier); serving them burns capacity on the anti-portfolio and positions us into the 95%-no-P&L-impact pilot population (MIT NANDA via evidence 12 §S6) | H | M | Discovery calls trending copilot-shaped; partner steering asks drifting toward chat interfaces; internal temptation to demo "Zetta as copilot" | The anti-ICP is a hard filter at qualification (kernel D5); kernel D9.4: lead every conversation with one named use case; open question #5 (LLM-era re-admission) has a kernel-level owner — until it changes, the filter stands | CRO | D5 (anti-portfolio) |
| **M-3** | **Incumbent accelerator response** — Databricks (93 accelerators) or Snowflake (industry solutions) package "deployed correct solutions" language, compressing our differentiation window (evidence 04/05) | M | M | Incumbent launches moving from notebooks toward deployed/governed claims; competitive losses citing platform consolidation | Differentiation is structural, not messaging: customer-infra deployment + correctness gate + own-data training (kernel §1); speed through the wave plan; reference architectures + measured value as proof incumbents can't fake quickly; monitor quarterly | CEO/CMO | — |
| **M-4** | **Warm-intro pipeline thinner than assumed** — the 50-account list doesn't yield 20–30 discovery calls in the target verticals; cohort 1 signs slow or off-vertical | M | M | List-building stalling below ~50; discovery-call conversion <30%; the TELUS/Vancouver path not materializing | Practitioner-first sourcing channels (MLOps Community, KubeCon, Money20/20, ITC — evidence 08); the vertical order is intro-led by design (kernel D5 tier-2 rule); Motive as the in-hand anchor de-risks cohort minimum | CRO | — |
| **M-5** | **Pilot-fee resistance in the lower firmographic band** — $60k–$125k pilots stall procurement at $500M-revenue companies, slowing cohort formation (flagged as financial-plan tension #1) | M | M | Negotiations repeatedly stuck on fee, not scope; fee erosion below 10% of expected ACV | Phase-linked invoicing (§1.3) lowers the ask-at-signature; credit-to-conversion framing; if the pattern repeats across ≥2 negotiations, escalate to kernel review (D6) rather than eroding silently | CFO/CRO | D6 |

### 4.7 Measurement risks

| ID | Risk statement | L | I | Leading indicator | Mitigation | Owner | Kernel gate |
|---|---|---|---|---|---|---|---|
| **X-1** | **Holdout erosion** — the permanent holdout gets exception-ed away ("we can't not-treat that account"), leaving programs unable to prove incrementality — the most documented churn-program failure (evidence 12 §S5/§S6) | H | H | Exception requests against the holdout; holdout never sized for significance; ops teams treating holdout members | Holdout design is a phase-3 exit artifact with the customer's sign-off; exceptions require the steering committee, are logged, and shrink the claimable lift; holdout health is a standing steering-meeting item | Solution leads | D7.5 |
| **X-2** | **Uplift attribution fails or is dishonest** — measuring response instead of lift, contaminated cells, victory declared off before/after comparisons — value claims that don't survive scrutiny kill renewals and the band-escalator (financial plan §2.2) | M | H | Value reviews citing raw response rates; no contemporaneous control; save-rate-style gamed metrics appearing in customer decks | The §S5 pattern catalog is the menu: each solution picks its proof design during build; the measurement artifact is required for band placement and renewal; internal rule — no external value claim without a control | Solution leads + CFO | D8 |
| **X-3** | **Instrumentation gaps make the metrics wishes** — D8 metrics (Intelligence Velocity, gate pass rate, violations) reported from anecdote because spans/events were never emitted | M | H | Reviews consuming narrative instead of dashboards; a metric "estimated" twice in a row; Phase-0 exit criterion ④ slipping | Instrumentation-first rule (§2.4): no ship without emitted metrics, no gate review without artifacts; the Phase-0 exit gate includes the telemetry arc explicitly | CTO | D8 (Phase-0 gate ④) |

### 4.8 Organizational risks

| ID | Risk statement | L | I | Leading indicator | Mitigation | Owner | Kernel gate |
|---|---|---|---|---|---|---|---|
| **O-1** | **Founder bandwidth exhausts** — 3–6 partners × 10–15 hrs/wk + engine leadership + GTM exceeds sustainable capacity; quality drops silently across all three | H | **H** | Founder-hours actuals >45/wk on partner work; steering meetings rescheduled repeatedly; security/gate review prep done at midnight | Cohort staggering (§1.3); the cap is 3 active-in-build partners at once regardless of cohort size; first hire = solutions/delivery engineer (§3.2); the weekly review tracks founder-hours as a first-class metric | COO | D6 (cohort cap) |
| **O-2** | **Single-owner concentration (bus factor)** — engine internals, operator, build box, and partner trust each live in one head; any loss/outage stalls the critical path | M | H | Reviews where one person answers every question; undocumented operational handles; vacation = schedule slip | Second senior engine hire (§3.2); reference architectures + runbooks as knowledge sinks; the one-orama-dev skill/runbook discipline (operational handles written down, not remembered); rotate gate-review presenters | COO | — |
| **O-3** | **Clustera integration slips or sours** — the designated services absorber (evidence 07 acquisition) doesn't land on time; services load defaults back onto Zetta engineering (compounding D-2/O-1) | M | M | Acquisition timeline drifting; onboarding-shaped work accumulating with no absorber; integration surface still an open question (evidence 07) | Until Clustera is operational, the services-hours budget is the only defense — enforced monthly; onboarding playbooks written as if for handoff (so the absorber can absorb) | CEO/COO | — |
| **O-4** | **Engine vs. solutions contention** — the same senior people serve partner deadlines and wave builds; partner urgency systematically wins and the wave plan starves (or vice versa) | H | M | Wave milestones slipping in weeks where partner escalations spiked; engine backlog items aging while account workarounds multiply | Explicit capacity split reviewed monthly; the co-sequencing gate (D7.3) makes wave starvation visible as a *gate* failure, not a quiet drift; workarounds tracked as debt with retirement plans (§3.3) | COO | D7.3 |

### 4.9 Regulatory & governance risks

| ID | Risk statement | L | I | Leading indicator | Mitigation | Owner | Kernel gate |
|---|---|---|---|---|---|---|---|
| **G-1** | **SR 11-7 model-risk posture fails a bank's validation/exam** — the FS beachhead (kernel D5 1a) requires model-risk documentation, independent validation support, and change control our young product may not evidence yet | M | H | The FS partner's model-risk team engaging late (the classic late-veto pattern, evidence 12 §S6 cause 6); documentation requests we answer manually | Governance-as-design-input: SR 11-7-shaped artifacts (development evidence, validation support, monitoring plans) built into S-4/S-1's DoD for FS accounts; engage the customer's MRM function during phase 1, not phase 4; R6 roadmap carries the exam-posture requirements | Solution lead (FS) + CTO | D7.2/D7.5, Phase-3 exit ① |
| **G-2** | **NAIC AI-bulletin / state-insurance compliance gaps** — insurance beachhead (D5 1b) triggers AI-governance attestations; lapse/claims models face unfair-discrimination scrutiny | M | M | Insurance partner's compliance team requesting AI-governance program docs; state-specific bulletin variance surfacing mid-program | Same design-input pattern; the governance primitives (audit, approval gates, identity-scoped access) mapped to the bulletin's expectations in the vertical playbook (doc 05); assistive-not-automated posture held (kernel D9.3) | Solution lead (insurance) | D7.5 |
| **G-3** | **HIPAA/healthcare exposure arrives with T2** — no-show/denials work (partner-led, kernel D5 tier 2) brings PHI handling, BAAs, and breach liability | L | H | A healthcare partner accelerating ahead of Phase 3; PHI appearing in a pilot dataset without a BAA | Healthcare explicitly second-wave (kernel D5); no PHI in any environment until the regulated-VPC reference architecture + R6 are landed; BAA template prepared before the first healthcare qualification call | COO | D7.4/D7.3 |
| **G-4** | **EU AI Act high-risk classification** — solutions touching employment (T2 attrition), credit-adjacent scoring, or essential services fall into high-risk classes with conformity obligations phasing in 2025–27 (evidence 15's governance detail; evidence 12 §S7 notes people-domain deployments legally constrained) | M | M | EU-exposed prospects entering the pipeline; T2 attrition/credit use cases being pulled forward by a partner; conformity-assessment questions in procurement | Geography + use-case screening at qualification (EU + high-risk class = not a cohort-1/2 deal); the anti-portfolio already excludes autonomous high-stakes decisioning (kernel D5); when EU deals qualify, the R6 governance artifacts double as conformity evidence — assessed per-deal | CEO/COO | D5 (anti-portfolio) |
| **G-5** | **HR-domain governance (employee attrition, T2)** — individual-flag attrition is among the most reputationally scarred patterns (Amazon recruiting; LL144; works-council vetoes — evidence 12 §S6/§S7) | M | M | An existing partner requesting attrition scoring as an attach; individual-level outputs requested instead of cohort-level | T2 gating held (kernel D5: "heightened HR governance"); cohort/aggregate-level product shape preferred; works-council/legal engagement as a phase-1 requirement for any HR use case; individual-flag automation stays anti-portfolio | CPO | D5 |
| **G-6** | **A governance violation in any account** — data egress, RBAC breach, or audit gap; the D8 guardrail is zero-tolerance and the brand *is* governed correctness (kernel D9.2) | L | **H** | Any near-miss in audit review; network-capture verification skipped at an architecture handoff; violation guardrail not instrumented in an account | The guardrail is instrumented per account (network-capture verifiable egress posture in the reference architecture); a single violation freezes new-milestone recognition in that account (financial plan §6.1) + triggers a root-cause review at exec level; violations = 0 reported weekly | COO | D8 (guardrail) |

### 4.10 Register-level notes

- **The concentration pattern:** the H/H cluster (S-1 security, M-1 conversion, O-1
  founder bandwidth, X-1 holdout erosion, D-1 bespoke spiral) all share one property —
  they are *slow-onset* risks whose leading indicators are visible weeks before
  impact. The weekly solution review exists to read exactly those indicators; the
  register is only as good as that cadence's honesty.
- **Gate coverage check:** every H-impact risk except M-3 (incumbents), M-4 (pipeline),
  O-2 (bus factor), and O-3 (Clustera) is structurally contained by a kernel gate.
  Those four live on management attention — they are standing items at the monthly
  gate review by policy, precisely because no gate catches them.
- **What we deliberately did not register:** generic macro risks (funding markets,
  AI-hype reversal) — real, but not actionable at this plan's altitude; they enter
  through the CFO's quarterly scenario re-base instead.

---

## Appendix A — Tensions for kernel review

1. **Partner starts vs. the security gate.** The kernel (D7.1) forbids *production*
   deployment behind the open security gate; the 120-day program and the Phase-0
   cohort-signing plan have partners in build/shadow phases before closure. This plan
   resolves it by policy (§1.3: shadow-only topologies, hold-at-phase-4 contingency,
   pre-drafted comms), which we believe is kernel-consistent — but the kernel doesn't
   explicitly say whether *shadow production in a customer environment* (customer data,
   non-production actions) is permissible pre-closure. **Ask:** confirm in D7.1 that
   shadow-scope deployments with customer data are allowed behind the gate under
   documented compensating controls, or tighten the language if not.
2. **"Credibly scheduled" (D7.3) needs a definition.** This plan operationalizes it as
   *named owner + design doc + capacity allocated in the current quarter* (§2.2). If
   the exec team means something stronger (e.g. a working prototype), Phase-2/3 entry
   timing changes. **Ask:** ratify or amend the §2.2 definition in the kernel.
3. **UC-9 (automated email outbound) sequencing.** Kernel open question #2
   (internal-first vs. customer-facing) has delivery consequences this plan couldn't
   schedule: internal-first consumes engine/solutions capacity in Phase 1–2 with no
   partner attached, customer-facing needs a partner none of the cohort archetypes
   obviously supply. This plan leaves UC-9 unscheduled pending the kernel answer.
   **Ask:** answer open question #2 with a phase attachment.
4. **No other contradictions found.** The phase plan preserves the wave/engine
   co-sequencing exactly as D7.3 tables it; the roadmap's gates are the kernel's gates
   verbatim; the risk register's containment mapping (§4.10) surfaced no gate that
   needed weakening — only the two definitional clarifications above.
