# Industries & go-to-market — the D5/D6 elaboration

> **Status:** Draft v1 — 2026-07-15 · **Author:** CMO+CRO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits pricing and partner detail from evidence 07/08.
>
> **Kernel-binding.** This document elaborates the [strategy kernel's](00-strategy-kernel.md)
> **D5 (industries — §7)** and **D6 (commercial anchors — §8)** and must not contradict the
> kernel. Where elaboration surfaced a genuine tension, it is recorded in
> [Appendix A](#appendix-a--tensions-for-kernel-review) for resolution *in the kernel first*.
> Every claim cites its evidence item (`../evidence/`), and external facts carry source + year.

---

## 1. What this document decides

The kernel fixes *which* industries, in *what* order, with *what* commercial shape. This
document turns those decisions into an operating go-to-market: a full playbook per vertical
(regulatory driver → our governance primitives, beachhead solutions, champion, triggers,
outreach angle, competitor terrain, proof metric), the ICP + scorecard as a working
qualification instrument, the design-partner cohort as the sales process, the messaging
architecture built from the live website promises (evidence 06), the channel plan, and the
pipeline model with its metrics.

**The GTM thesis in three sentences.** We sell **deployed, correct, governed intelligence
on the customer's own infrastructure**, one named use case at a time, to the
**prototype-to-production owner** in late-mid-market regulated firms. The incumbents sell
notebooks (Databricks's 93 accelerators, evidence 04) or industry framing (Snowflake's 9
industry solutions, evidence 05); **we deliver the deployed solution itself, as a priced
module** on a $500k+/yr Enterprise base (evidence 07). The first cohort of 3–6 **paid** design
partners (~10–25% of expected ACV, credited to conversion — evidence 08) *is* the sales motion,
the reference-architecture factory, and the case-study pipeline, all at once.

**What GTM optimizes for (from kernel D8):** partner→customer conversion,
time-to-value ≤16 weeks per solution, module attach rate, NRR — with **governance
violations = 0** as the non-negotiable guardrail, because "correct by construction is the
brand — never trade the gate for velocity" (kernel D9-2).

---

## 2. Industry strategy — the tier map, operationalized

The kernel D5 table is binding. Reproduced here with the GTM columns this document adds:

| Tier | Industry | Beachhead solutions (kernel) | Regulatory driver | First proof metric | Warm-path status |
|---|---|---|---|---|---|
| **1a** | Financial services / banking (regional/mid, ~$30B+ assets) | UC-4 collections · UC-1 deposit/customer attrition · UC-7 KPI drivers | SR 11-7 + GLBA | DSO / recovered-$ per contact-hour; saved deposit balances vs holdout | Build list; no anchor intro yet |
| **1b** | Insurance (specialty/MGA) | UC-1 lapse/retention · UC-7 · claims triage (T2, gated) | NAIC AI Model Bulletin | Lapse-rate delta on renewal cohort vs holdout | Build list; InsureTech Connect |
| **1c** | One operational account (logistics/fleet or manufacturing) | UC-8 PdM (assistive) · UC-5/6 · UC-1 | None hard (safety-adjacent) | Prevented-downtime hours; forecast-error reduction | **Motive is in hand** (evidence 08) |
| **2** | Healthcare/LS · manufacturing · logistics/fleet · telecom (TELUS path) · B2B SaaS | no-show/denials · PdM/yield · UC-1/UC-2 | HIPAA · (none) · (none) · residency/sovereignty · (none) | Vertical-specific, §2.5 | Pick by warmest intro (evidence 08) |
| **3** | Retail/CPG · energy/utilities | UC-5/6 · pricing (T3) · load forecasting | — | — | After reference architectures repeat |
| Deferred | Public sector / federal / classified | — | FedRAMP etc. | — | Anti-ICP as first deals (evidence 08) |

Three GTM rules that govern the whole map:

1. **One reference architecture per environment class before widening** (kernel D7-4;
   evidence 08 calls this "the single best execution guardrail against the
   bespoke-integration death spiral"). The three classes: regulated cloud VPC · K8s
   private cloud · bare-metal/on-prem GPU. The tier-1 trio is deliberately chosen so the
   first three partners can cover all three classes.
2. **Lead every conversation with one named use case** (kernel D9-4) — never a generic
   AI-platform demo. The vertical playbooks below each fix that named use case.
3. **Low-liability first; shadow production; assistive before automated** (kernel D9-3).
   No first engagement proposes autonomous decisioning, real-time fraud action, or
   anything the anti-portfolio excludes.

### 2.1 Tier 1a playbook — Financial services / banking

**Who exactly.** Regional and mid-size banks, **~$30B+ in assets** — the threshold where
OCC model-risk guidance bites hardest (evidence 08 "sharpest evidence") — up to the point
where procurement outlasts a pre-PMF vendor (the scorecard's disqualifier). The US band
of $10B–$100B-asset regional banks contains roughly **134 institutions** (USAFacts, 2022
data) — a finite, listable market: the ~50-account list can literally enumerate the
qualifying segment.

**Regulatory driver → our governance primitives (the 1:1 map).** This mapping *is* the
pitch; evidence 08's council found our primitives map ~1:1 onto SR 11-7 + GLBA:

| What the regulation demands | The regulation | Our primitive (evidence 06 website language) |
|---|---|---|
| Model inventory, documentation, development evidence | SR 11-7 (Fed/OCC model risk management) | Visible, inspectable execution graph — "you see the graph, not a black box"; run history in the engine spine |
| Independent validation & effective challenge | SR 11-7 | The **correctness gate**: schema type-checks against real sources, leakage + point-in-time checks, blocked-with-a-reason before deploy |
| Ongoing monitoring, change control | SR 11-7 | Every change/deployment audited; lineage, freshness, confidence on every answer |
| Customer-data safeguards, access control | GLBA Safeguards Rule | In-your-VPC/on-prem deploy, **zero egress**; identity-scoped access via *your* SSO — "a tailored view per user, not a shared service account"; approval gates on sensitive actions |
| Explainability to examiners & internal audit | SR 11-7 / fair-lending adjacency | Trained, explainable models — measured accuracy, explained drivers (SHAP per M-1) |

The one-line version for outreach: *"SR 11-7 documentation as a by-product of deployment,
not a quarter of write-up afterwards."*

**Beachhead solutions.** UC-4 **collections prioritization** first (finance family,
measurable in DSO and recovered dollars, low fair-lending surface when scoped to
contact-ordering rather than credit decisioning), UC-1 **deposit/customer attrition**
(the churn archetype transplanted; deposit flight is a board-level topic at regionals),
UC-7 **KPI anomaly & driver analysis** (the exec surface). Explicitly **not** first:
credit-risk scoring (T2, SR 11-7 discipline required), real-time fraud decisioning (T3),
AML beyond assistive triage (T2). Say so in the room — declining the hot use case on
governance grounds *is* the brand.

**Champion profile + titles.** The prototype-to-production owner: **Head of ML
Platform · Director of Data Science Platform · VP Data Engineering · Head of MLOps**;
budget-adjacent sponsor: **Head of Consumer/Retail Banking** (attrition), **SVP
Collections / CFO office** (UC-4), **Chief Data & Analytics Officer** as air cover — but
per evidence 08, *not the CDAO alone*. Model Risk Management (the validators) are not the
champion but must be met by week 2: they are the people the correctness gate was built
to delight — treat MRM as an internal design partner, not an obstacle.

**Buying triggers.**
- **Governance pressure:** exam findings / MRAs touching model documentation; the bank's
  own AI-usage policy blocking data science from shipping (Databricks's evidence that
  governance-tooling users move **>12× more projects to production** is the trigger's
  mirror image — evidence 08).
- **Cloud-cost / repatriation:** 84% struggle to manage cloud spend (Flexera, 2025);
  67% of enterprise leaders plan to move some AI data off public cloud within 12 months
  (CIO.com, 2025) — frame as **workload placement**, never anti-cloud.
- **Stuck prototypes:** a churn/collections model living in a notebook or a vendor POC
  that cannot pass MRM. The queue visual on our own homepage (evidence 06 §01) is this
  trigger verbatim: "Finance — Forecast Q3 collections risk — 21d."

**Named-use-case outreach angle.** *"Deposit-attrition early warning for [bank], deployed
in your own VPC behind your SSO, with the SR 11-7 evidence generated as a by-product.
Scored accounts with explained drivers in shadow production inside 90 days — your data
never leaves your boundary."* One use case, one environment, one KPI (evidence 08 scope rule).

**Competitor presence (evidence 04/05).** Snowflake carves Financial Services into Banking ·
Insurance · Payments · Asset & Wealth Management (evidence 05 #2). Databricks fields a dense FS
accelerator shelf: AML/KYC compliance (#3), credit-card transaction analytics (#14),
rule-based fraud (#30), fraud with geospatial AI (#38), market risk (#49), **model risk
management with EY (#52)** — note: even *their* MRM answer is a notebook plus a
consultancy — regulatory reporting (#48, #74), reputation risk (#75), incident
investigation (#39), IOC matching (#40), modern investment data platform (#53). The
contrast writes itself: **they give you a notebook (and a partner SOW); we deliver the
deployed, validated, governed solution in your environment.** Both incumbents assume the
data comes to *their* platform; our zero-egress deploy inverts that.

**Vertical proof metric.** UC-4: **DSO reduction** and **recovered dollars per
contact-hour** vs. the pre-existing contact ordering, measured on a holdout. UC-1
(deposits): **saved balances** in the treated-vs-holdout cohort. Both are CFO-legible
within one quarter — the 120-day program's shadow-production phase is sized to produce
exactly this number.

### 2.2 Tier 1b playbook — Insurance (specialty / MGA)

**Who exactly.** Specialty insurers and **MGAs (managing general agents)** — chosen over
national carriers for access speed and decision velocity: a specialty carrier's head of
data science can green-light a paid pilot in weeks; a top-10 carrier's cannot. Keep one
lighthouse slot (The Hartford, Travelers, Progressive, USAA — evidence 08 lighthouse list)
warm-intro-only.

**Regulatory driver → our governance primitives.** The **NAIC Model Bulletin on the Use
of Artificial Intelligence Systems by Insurers** — adopted by **24 states as of March
2025** (Quarles & Brady / NAIC, 2025) — requires insurers to run a written **AIS program**:
governance over AI systems, risk management proportionate to impact, vendor-AI oversight,
and audit-ready documentation for market-conduct exams.

| NAIC bulletin expectation | Our primitive |
|---|---|
| Written AIS program: governance & controls over AI systems | Deployed-in-your-environment control plane; every graph, change, and access audited |
| Risk management proportionate to decision impact | Assistive-first solution design; approval gates on sensitive actions; shadow production before any automation (kernel D7-5) |
| Documentation & audit trail for regulator/market-conduct exams | Run history + lineage on every prediction — "sources, freshness, confidence shown" (evidence 06) |
| Third-party/vendor AI oversight | The inspectable graph: the insurer can *show* its regulator what the vendor system does — no black-box vendor score |
| Data governance & security | Zero-egress deploy; identity-scoped access through the insurer's own SSO |

**Beachhead solutions.** UC-1 **lapse/retention** (policyholder churn — the anchor
methodology transplanted; renewals are a high-frequency, measurable decision), UC-7
**KPI anomaly & driver analysis** (loss-ratio drivers, exec surface). **Claims triage is
Tier 2** (kernel D5): position it as the *expansion* module, assistive-only, and gate it
on the governance maturity the kernel requires. Underwriting decisioning: declined for
the first engagement, on the record.

**Champion profile + titles.** **Head of Data Science / Chief Actuary's modernization
lead / VP Claims Analytics / Head of Data & Analytics**; sponsor: **Chief Underwriting
Officer** (lapse economics) or **Chief Claims Officer** (triage expansion). At an MGA,
this is often one person two titles down from the CEO — the access-speed advantage.

**Buying triggers.** A state DOI adopting the bulletin (rolling trigger — each new
adoption is an outreach event); an AI-usage questionnaire from a reinsurer or fronting
carrier; a lapse spike in a book; a stuck actuarial-side ML prototype that IT won't
productionize; cloud-cost pressure on data platforms (same Flexera/CIO.com evidence).

**Named-use-case outreach angle.** *"Policy-lapse early warning for [carrier]'s
[line-of-business] book, running inside your environment, with the NAIC-bulletin AIS
documentation generated as a by-product — renewal-cohort lift measured against a holdout
inside the 120 days."*

**Competitor presence (evidence 04/05).** Snowflake: Insurance as an FS sub-industry (item
05 #2). Databricks: Claims Management Automation (#11), Smart Claims (#84), LLMs for
customer-service analytics in insurance (#43), Medicare Risk Adjustment (#51). All
notebooks-plus-platform; none ships a deployed, governed system into the insurer's own
environment, and none produces bulletin-ready governance evidence as an artifact.

**Vertical proof metric.** **Lapse-rate reduction on the treated renewal cohort vs
holdout**, expressed in retained premium dollars; secondary: retention-offer efficiency
(uplift discipline prevents discounting policyholders who would have stayed — the exact
trap evidence 02/03 warn about).

### 2.3 Tier 1c playbook — the one operational account (logistics/fleet or manufacturing)

**Who exactly.** **One** account, on purpose — the kernel's low-liability first
technical proof (D5 tier 1c). **Motive is this account and is in hand** (kernel D5;
evidence 07/08): the churn pipeline (UC-1/S-1) is the live wedge, and Charles (persona P1,
evidence 08 personas) is the archetype champion. Kernel open question #1 — whether Motive is
formally design partner #1 — is a kernel decision, not ours; GTM plans as if yes.

**Driver → primitives.** No hard regulator; the drivers are **economic and
operational**: uptime, forecast accuracy, fleet utilization, and the platform-team
bottleneck itself ("the business has told us for two years — *you're too slow*," P1).
Governance still matters — Okta-scoped access, no data exfiltration were Motive
requirements from day one ("it's not a service account, it's a tailored view — the core
challenge from day one," evidence 08 personas) — but it sells as *safe self-service*, not
compliance.

**Beachhead solutions.** UC-1 churn (live), then UC-8 **predictive maintenance
(assistive)** — the council's prescribed low-liability operational proof (evidence 08) — and
UC-5/6 demand forecasting / replenishment support. PdM context: the global predictive
maintenance market is roughly **USD 10–12B in the mid-2020s growing at ~25–30% CAGR**
(analyst-consensus synthesis via Perplexity, 2025 — treat as order-of-magnitude).

**Champion profile + titles.** The P1 archetype: **senior platform/AI lead with a
CEO-sponsored mandate**, fluent in the duct-tape stack (n8n + sidecar + Postgres), 4–5
developers he wants to hand a deployable thing. Titles: **Head of AI Platform · Director
of Data Platform · VP Engineering (data)**. Sponsor: COO/CEO directly at this size.

**Buying triggers.** The hand-built contraption becoming unmaintainable; a "one
intelligence platform" exec mandate; vendor-security review friction (the ~3-month
internal deploy process P1 describes); Gemini-only scoring with no real predictive power
(~75% vs high-90s — the "rented model plateaus" story from evidence 06 §Technology 03,
verbatim from the field).

**Named-use-case outreach angle** (for the *second* operational account, when the time
comes): *"Replicate what your team built by hand — churn scoring with explained drivers —
as a deployed, governed system your devs run themselves. First downloadable build in two
weeks; your devs reproduce it unaided."* (Success criteria lifted directly from P1.)

**Competitor presence (evidence 04/05).** Databricks operational shelf: Digital Twins (#23),
OEE & KPI monitoring (#58), product quality inspection (#65), supply-chain distribution
optimization (#86), order-picking optimization (#57), scalable route generation (#82),
safety stock (#79), demand forecasting (#21, #93); churn itself four ways (#60, #77, #87,
#88). Snowflake: Manufacturing with Automotive/Energy/Logistics-and-Transportation
sub-industries (evidence 05 #4). None of it deploys into the customer's environment as a
governed, self-serve system — the notebook-vs-solution contrast again, plus the
mid-market reality that a Motive-sized platform team cannot staff a lakehouse buildout.

**Vertical proof metric.** UC-1: churn saves vs holdout (dollar-denominated ARR).
UC-8: **prevented-downtime hours / maintenance cost avoided** on the pilot asset class.
UC-5: **forecast-error reduction** (industry benchmark: 20–50% error reduction, McKinsey
via evidence 01 — use as the credibility bracket, promise only what the holdout shows).

### 2.4 Why these three first — the portfolio logic

The tier-1 trio is not three independent bets; it is one **coverage design** (evidence 08
program: "ideally one FS/insurance, one healthcare, one operational" — amended by kernel
D5, which pulls healthcare to the second wave; see Appendix A, T2):

| Coverage axis | 1a FS/banking | 1b Insurance | 1c Operational |
|---|---|---|---|
| Environment class (D7-4) | Regulated cloud VPC | K8s private cloud | Bare-metal/on-prem or cloud K8s |
| Governance story proven | SR 11-7/GLBA (hardest) | NAIC (rolling adoption) | Safe self-service (no regulator) |
| Solution families proven | Finance ops (UC-4) + churn | Retention + exec analytics | Churn + PdM + forecasting |
| Sales evidence produced | "Passes MRM" case study | "Bulletin-ready" case study | "Replaced the contraption" case study |
| Liability profile | Medium (assistive-only scoping) | Medium (no underwriting) | **Low — the technical proof leads here** |

The **first** partner to reach build phase should be 1c (lowest liability, warmest path,
engine-readiest use case); the FS and insurance partners can run their qualify/secure-env
phases in parallel so their build phases start as reference architecture #1 hardens.

### 2.5 Second wave playbooks (compact)

Second-wave order is deliberately unranked — **pick by strongest warm intro** (evidence 08
resolved divergence). Each entry below is the playbook skeleton to be expanded to full
§2.1-depth *when its intro materializes*, not before.

**Healthcare / life sciences** — the council's close #3, wave-2 per kernel (longer
cycles). *Driver:* HIPAA (PHI never leaves the covered entity — our zero-egress deploy is
the compliance posture, not a workaround) + payer/provider margin pressure. *Beachheads:*
no-show prediction, denials prevention (both kernel T2, partner-led) — high-volume,
measurable, assistive; healthcare revenue cycle is "probably the strongest first vertical
template" per evidence 02's build-order analysis, which is exactly why we must resist it
until governance maturity (kernel gates it T2). *Champion:* VP Revenue Cycle · Head of
Data Science (provider); CMIO as sponsor. *Vocabulary:* Mayo's **"Data Behind Glass"**
federated model (evidence 08) — use it verbatim; it is the customer's own language for our
architecture. *Competitor terrain:* Databricks's densest accelerator shelf (~18 of 93:
ADE detection #1, PHI removal #4, radiology LLMs #7, patient cohorts #12, FHIR #28,
HL7v2 #37, X12 claims #35, HEDIS #36, disease-risk #61, price transparency #62, RWE #71,
SDOH #41/#85, pathology #22/#59, GWAS #32, TCGA #24, NBA #55); Snowflake HCLS with
HL7/FHIR/OMOP framing (evidence 05 #3). Their density proves demand; their form factor
(notebook + platform migration) is our opening. *Proof metric:* denial-rate reduction /
recovered reimbursement vs holdout; no-show fill-rate lift.

**Manufacturing** — *Driver:* none hard; OT/IT convergence cost, scrap/yield, downtime.
*Beachheads:* UC-8 PdM, UC-5/6, quality/yield drivers (UC-7 shape). *Champion:* VP
Manufacturing Excellence · plant digital lead; CFO sponsor via scrap dollars.
*Terrain:* Databricks digital twins/OEE/quality shelf (§2.3); Snowflake Manufacturing
(evidence 05 #4). *Proof:* OEE-point gain or scrap-% reduction on one line, one plant.
*Note:* becomes the second operational account only after 1c's reference architecture
repeats (D7-4).

**Logistics / fleet** — the 1c archetype generalized (Maersk, UPS, J.B. Hunt, Ryder on
the evidence 08 lighthouse list — warm-intro only). *Beachheads:* UC-8 PdM on assets, UC-5
demand/volume forecasting, UC-1 customer churn (3PL account attrition). *Champion:* the
P1 archetype; VP Ops sponsor. *Proof:* downtime hours, forecast error, saved accounts.

**Telecom — incl. the TELUS / Vancouver warm path.** *Driver:* **data residency and
sovereignty** — and the ground has shifted in our favor: TELUS launched **Canada's first
fully sovereign AI factory** (Rimouski, September 2025; second planned in **Kamloops,
BC**), partnered with OpenText on a **Canadian Sovereign Cloud** (July 2025), and is a
named proponent in the Government of Canada's sovereign-AI-infrastructure work (ISED,
2026). A Vancouver-based team selling *deployed-in-your-environment, zero-egress, trained-
on-your-data* intelligence to a Vancouver-adjacent carrier that has staked its brand on
sovereign AI is the single warmest strategic path on the board (evidence 08 flagged it; the
2025–26 announcements upgrade it). *Beachheads:* UC-1 subscriber churn (Databricks's own
telco-churn accelerator #33 proves the demand; theirs is a notebook), UC-7 network-KPI
anomaly drivers (assistive — **not** AIOps automation, which is T3). *Champion:* Head of
AI Platform / data-platform engineering within TELUS Digital; sponsor via the sovereign-AI
program office. *Angle:* *"Sovereign AI needs workloads, not just data centers — churn
intelligence trained on your data, running in your sovereign facilities, zero egress."*
Our system can literally run *inside* the sovereign AI factory — we are a workload their
infrastructure story needs. *Proof:* churn saves vs holdout; a public co-marketable
sovereign-AI-workload story (their incentive to reference us is structural).

**B2B SaaS / tech** — *Driver:* none regulatory; velocity + the platform-team bottleneck
+ cloud-cost (FinOps) pressure. *Beachheads:* UC-1 churn, UC-2 lead/opportunity scoring,
UC-3 CLV — the revenue-intelligence composition (kernel D3). *Champion:* Head of Data /
RevOps platform owner; CRO sponsor. *Caution:* this vertical is also where the anti-ICP
concentrates (LLM-copilot seekers, no-platform-team SMBs) — score hard. *Proof:* net
revenue retention lift; saved-ARR vs holdout. *Role in portfolio:* fast-cycle validation
accounts and case-study volume, not the governance flagship.

### 2.6 Tier 3 and deferred (what we say when asked)

Retail/CPG and energy/utilities: "after our reference architectures repeat" — take the
meeting, park in the bench (§5.2), no active pursuit. Public sector / federal /
classified: anti-ICP **as first deals** (evidence 08); the honest line is *"we will meet you
at FedRAMP when our governance maturity earns it — not before."* Politely declining
federal interest early is cheaper than the procurement cycle that buries a pre-PMF
product (scorecard disqualifier).

---

## 3. ICP + scorecard, operationalized

### 3.1 Firmographics + technographics (the default box)

From evidence 08 (3-model council, settled findings), adopted by kernel D5:

| Dimension | Default band | Rationale / exceptions |
|---|---|---|
| Employees | **~1,000–25,000** | Below: no platform team (disqualifier). Above: sales cycle buries a pre-PMF product. |
| Revenue | **~$500M–$10B** | Lower band favored pre-PMF for access speed (evidence 08). |
| Banking-specific | **~$30B+ assets** | OCC model-risk guidance bites hardest above this line (evidence 08). |
| Ceiling exception | Warm-intro lighthouse only | Capital One, Discover, USAA, Mayo, TELUS, Maersk-class (evidence 08 list) — validation accounts, never cold-sourced. |
| Technographics — must see | A real VPC / K8s / on-prem deployment surface; an identity provider (Okta/Entra); accessible labeled data for the named use case | Mirrors the scorecard must-haves. |
| Technographics — love to see | On-prem GPU investment; multi-cloud footprint; a live stuck prototype (n8n / notebook / LLM-only scoring); FinOps program | Each is a strong-fit signal (§3.2). |
| Organizational | A named prototype-to-production owner **and** a business sponsor with budget adjacency | The champion pair (evidence 08 personas + council). |

**The buyer ICP vs the design-partner ICP.** These are the same box with different
gates: a design partner must additionally be able to **start fast (~30–60 days)** and
tolerate co-building with founders; the eventual buyer can be slower but must clear the
$500k+/yr Enterprise anchor (kernel D6). Every design partner is inside the buyer ICP by
construction — the credit-to-conversion pricing only works if conversion is plausible.

### 3.2 The selection scorecard (verbatim-faithful from evidence 08)

Gate on **"no disqualifier + a strong, budget-adjacent champion."** The weighted-100 vs
0–3 rubric debate is cosmetic (council finding); what matters is the gate.

| Must-have (all required) | Strong-fit signal (the more the better) | Disqualifier (any = pass) |
|---|---|---|
| A **named, urgent, high-value** predictive use case (dollar attached) | Governance / residency pressure (regulated vertical) | Wants an **LLM copilot / RAG search**, not a trained model |
| **Accessible, labeled** data for that use case | Cloud-cost / repatriation / FinOps pressure | Demands we hold **raw data in our cloud** |
| A **real VPC / K8s / on-prem** deployment surface | On-prem GPU investment or multi-cloud footprint | **No platform team** / no prototype-to-production owner |
| A **strong champion** (prototype-to-production owner) | A live, stuck prototype (notebook / automation tool / LLM-only) | "AI tourist" innovation lab, no production mandate |
| **Economic-buyer access** + budget | Exec ("internal intelligence platform") mandate | Federal / classified as a *first* deal; procurement that outlasts the pilot |
| Can **start fast** (~30–60 days) | Late mid-market / lower-enterprise size band | SMB without budget; or so large the cycle buries a pre-PMF product |

**Operating mechanics.** Score at two points: after discovery call 1 (provisional) and
after the technical-validation call (final, gates entry to the paid program). Any
disqualifier ends pursuit *politely and reversibly* — log the reason; a disqualified
account that later hires a platform lead or kills its copilot RFP re-enters the bench.
The scorecard is also the **anti-ICP in operation**: the disqualifier column *is* the
anti-ICP (evidence 08), and kernel D3's anti-portfolio (generic chatbots/copilots,
RAG-only engagements, autonomous high-stakes decisioning, vision-first inspection,
federal-first) tells sellers which *requests* to decline even from qualified accounts.

### 3.3 Worked qualification example (archetype, not a real account)

**Account:** "Cascade Bancorp" — archetype of a **$45B-asset regional bank**, ~6,500
employees, ~$2.1B revenue. Consumer + commercial lines, AWS-primary with an on-prem
core-banking estate, Okta SSO, a 9-person data-platform team under a VP Data Engineering.

| Gate | Evidence gathered in discovery | Verdict |
|---|---|---|
| Named, urgent, high-value use case | Deposit attrition named in the last two earnings calls; retail-banking head owns a save-desk budget; finance quantified $X00M at-risk balances | ✅ dollar attached |
| Accessible, labeled data | Core-banking + CRM histories in Snowflake; closed-account labels exist; 24 months usable history | ✅ (data-access paperwork ~3 wks — inside the 30–60-day start window) |
| Real deployment surface | AWS VPC (regulated-cloud class) + EKS; on-prem core stays put — fits compute-near-data story | ✅ |
| Strong champion | VP Data Engineering: two stuck notebook models that failed MRM review; wants a system MRM can pass | ✅ the prototype-to-production owner, with scar tissue |
| Economic-buyer access | Retail-banking EVP joined call 2; save-desk budget is hers; CDAO supportive but not the axis | ✅ |
| Start fast | Security review is 4 weeks (pre-cleared vendor tier); data-access 3 weeks, parallelizable | ✅ ~45 days |
| Strong-fit signals | SR 11-7 exam finding on model documentation (governance pressure ✓) · Snowflake spend escalating, FinOps program live (cost pressure ✓) · two stuck prototypes ✓ · multi-cloud + on-prem ✓ | 4 of 6 signals |
| Disqualifiers | Innovation lab exists but is *not* the entry point (we entered via platform team) — no other flags | ✅ none |

**Decision:** qualified — offer the design-partner engagement scoped to **UC-1
deposit-attrition early warning · AWS-VPC environment · saved-balances-vs-holdout KPI ·
14 weeks**, priced per kernel D6 at ~10–25% of expected ACV (on the $500k+ Enterprise
anchor: a **$75k–$125k engagement**, credited to year-one conversion).

**Counter-example (fails the gate).** Same bank, but the entry point is the innovation
lab wanting "a copilot for our relationship managers grounded in our documents": two
disqualifiers (LLM-copilot/RAG want; AI-tourist lab without a production mandate) — pass,
log, and route to the bench with the note *"re-engage if the platform org names a
predictive use case."* The kernel's anti-portfolio makes this a fast, unemotional no.

---

## 4. The design-partner cohort plan

### 4.1 Program shape (kernel D6, binding)

- **3–6 paid active partners**, ~**10–25% of expected ACV** (= $50k–$125k+ against the
  $500k+/yr Enterprise anchor), **credited to year-one conversion** (evidence 07/08).
- **Scope per partner:** one use case · one environment · one KPI · **12–16 weeks**,
  inside the **120-day program** (§4.5).
- **No broad exclusivity** — at most a narrow 3–6-month feature-preview right (evidence
  08; exclusivity blocks cross-partner pattern recognition).
- **IP split:** customer owns their data + customer-specific weights; we own the engine,
  connectors, templates, generalized learnings (evidence 08 — avoids the bespoke-SI trap).
- **A 20–40-account discovery bench** feeds the active cohort; expand to 8–12 partners
  only after deployment patterns repeat (council's resolved divergence, evidence 08).

### 4.2 Constructing the ~50-account list

Build from archetypes (evidence 08 inner-ring + lighthouse), not purchased lead lists:

| Segment | Count | Construction | Sourced via |
|---|---|---|---|
| Regional/mid banks, ~$30B–$100B assets | ~15 | Enumerate from the ~134-institution band (USAFacts, 2022) filtered by: public AI/ML job postings for platform roles, Snowflake/Databricks case-study presence (= data estate exists), recent exam-cycle pressure signals | FFIEC/Call Report data + practitioner-community presence |
| Specialty insurers / MGAs | ~12 | NAIC-bulletin-adopting states first (24 as of Mar 2025); filter for carriers/MGAs with named data-science leadership | InsureTech Connect speaker/attendee lists, LinkedIn platform-role census |
| Operational (logistics/fleet/manufacturing) | ~8 | Motive-archetype firms: 1k–25k employees, asset-heavy, with a platform team and a hand-built analytics stack | MLOps Community, KubeCon corridor, existing network |
| Healthcare IDNs (bench-only until wave 2) | ~5 | IDNs with public data-platform initiatives; enters active pursuit only on warm intro (kernel D5) | HIMSS, Mayo-adjacent network |
| Telecom (TELUS path) + B2B SaaS | ~5 | TELUS entities (sovereign-AI program adjacency) + fast-cycle SaaS accounts from the founder network | Vancouver network; direct |
| Lighthouse (warm-intro-only) | ~5 | From evidence 08's named list: Capital One, Discover, The Hartford, Travelers, Progressive, USAA, Mayo Clinic Platform, Maersk, UPS, TELUS, Siemens-class. Discover + Capital One have *public* AI-governance / policy-enabled-K8s mandates — tailor outreach to those | Board/investor/founder intros exclusively |

List hygiene: every entry carries (a) the named use case we'd lead with, (b) the
hypothesized champion title, (c) the warm-path owner, (d) scorecard-priors. An account
with no plausible named use case doesn't make the list — the list *is* the outreach.

### 4.3 The discovery motion (~50 → 20–30 calls)

**Call 1 — problem discovery (champion).** Led entirely by the named use case ("we
deploy deposit-attrition early warning inside your VPC — is that a problem with a dollar
attached here?"). Outputs: provisional scorecard, named-champion confirmation, the
dollar. **Never** a platform demo (kernel D9-4).

**Call 2 — technical validation (champion + platform team).** The graph walkthrough:
ingest → architect → correctness gate → deploy-to-their-target → shadow production. Map
their environment class, data access path, SSO. Outputs: final scorecard, environment
class recorded, security-review entry point.

**Call 3 — economic alignment (sponsor + economic buyer).** The 120-day program, the
paid engagement (10–25% of ACV, credited), the conversion gate, the KPI contract.
Output: a scoped one-pager both sides sign.

Cadence discipline: 20–30 discovery calls total across the list (evidence 08 motion);
founder-led (CRO-hatted) with the champion-persona fluency of evidence 08's personas —
we are selling to Charles (P1) and must sound like people who have met him.

### 4.4 Conversion gates (bench → partner → customer)

| Gate | Criterion | Kernel tie |
|---|---|---|
| Bench → discovery | List entry + plausible named use case + a path to the champion | D9-4 |
| Discovery → qualified | Scorecard: all must-haves, no disqualifier, ≥2 strong-fit signals | D5 firmographics |
| Qualified → paid partner | Signed scoped engagement (use case · environment · KPI · 12–16 wks · fee) **and** cohort has founder-bandwidth headroom (§4.6) **and** environment-class slot open (D7-4: don't take a 4th VPC partner before a K8s/on-prem one) | D6, D7-4 |
| Partner → customer | 120-day exit: KPI met vs holdout · zero governance violations · champion converts to internal advocate · Enterprise contract at $500k+/yr with engagement fee credited | D6, D8 |
| Customer → expansion | Module attach: second solution scoped within 90 days of conversion (§8.3) | D6 expansion motion |

**Security-gate overlay (kernel D7-1):** no partner advances into *production*
deployment while the 11 auth gaps (zetta#759–#769, evidence 07) are open. The 120-day
program is sequenced so phases 1–2 (qualify, secure-environment setup) and the
shadow-production design consume the early calendar; see Appendix A T1 for the timing
tension this creates and how we manage it honestly with partners.

### 4.5 The 120-day program as the sales process

The program (evidence 08) is not post-sales delivery — it **is** the sales process: each
phase advances the commercial close while building the technical proof. Exit artifacts
make progress inspectable and create the conversion file.

| Phase (indicative weeks) | What happens | Exit artifact | Commercial function |
|---|---|---|---|
| **1. Qualify** (wk 0–3) | Scorecard finalized; use case + KPI + holdout design contracted; data-access + security review launched | Signed scope one-pager; KPI/holdout definition doc | The close of the paid engagement |
| **2. Secure environment setup** (wk 3–6) | Deploy target provisioned in *their* environment; SSO integration; access scoping; connector to labeled data | Environment-readiness report; access-audit baseline (**reference-architecture draft** for the environment class) | Proves "in your walls" — the claim competitors can't copy |
| **3. Build + govern** (wk 6–10) | Graph architected from intent/artifacts; correctness gate passed; MRM/compliance walkthrough | Gate-pass report (leakage, point-in-time, entity resolution); model card + audit trail | Turns governance stakeholders into references |
| **4. Shadow production** (wk 10–16) | Predictions run alongside the human process; holdout measurement accrues; weekly driver reviews with the business sponsor | KPI readout vs holdout; driver/action report; ops runbook | Produces the dollar number the economic buyer needs |
| **5. Convert** (wk 16–17+) | Exit review: KPI, governance record, expansion map | Conversion memo; Enterprise proposal (fee credited); module-attach roadmap | The $500k+ close |

Program-level definition of done mirrors kernel D6/§8: *deployed in the customer
environment · passed the correctness gate · wired to at least one named business
action · measured against a holdout · zero governance violations.*

### 4.6 Founder-bandwidth budget

Evidence 08 is blunt: enterprise infra partners cost **~10–15 founder-hours/week each**.
Budget:

| Cohort state | Founder hrs/wk | Feasibility |
|---|---|---|
| 3 active partners | 30–45 | Sustainable ceiling for the current team — the **real capacity constraint** on cohort size, more binding than demand |
| 4–5 active | 40–75 | Only with staggered phase alignment (≤2 partners in build phase simultaneously) |
| 6 active | 60–90 | Not credible without a dedicated forward-deployed engineer; defer until one is hired |

Rules: **stagger starts by ≥3 weeks**; Motive (in flight) counts against the budget now;
discovery-bench upkeep is capped at ~6 hrs/wk (CRO); the optional monthly "validation
council" of bench accounts (evidence 08) only if hours remain — it is explicitly cuttable.

---

## 5. Positioning & messaging architecture

Built from the live website promises (evidence 06) — the messaging below *extends* the
shipped copy; it never contradicts it. Where a phrase is quoted, it is the site's own.

### 5.1 The master narrative

**One sentence:** *Orama Zetta turns a question into deployed, governed intelligence —
production-grade AI in minutes, trained on your own data, running on your own
infrastructure, correct by construction* (evidence 06, meta description — canonical).

**The narrative arc (use in every deck, in this order):**

1. **The constraint is rarely the data** (evidence 06 §01): the path from question to
   credible answer runs through a few people who can do data engineering, modeling, and
   deployment together; a queue forms; answers arrive quarters late.
2. **Prototypes prove an idea, then stall** — operationalizing is the hard part; most AI
   initiatives die exactly there. (Externally corroborated: governance tooling users move
   >12× more projects to production — Databricks via evidence 08. Use their own evidence
   in the room.)
3. **We compress the whole arc** — "plenty of tools compress one step… none shrink the
   whole arc from 'I have a question' to 'a correct, governed system is answering it in
   production'" (evidence 06 §06). Ingest → Architect → Deploy → Run+Learn.
4. **Velocity, never traded for correctness** (evidence 06 §04) — the correctness gate,
   trained-on-your-data models, governance-by-default. This is the brand (kernel D9-2).
5. **The proof is a module, not a demo** — one named use case, deployed in your
   environment, measured vs a holdout in 120 days. (The kernel's solution DoD, spoken
   as a promise.)

### 5.2 The four "not-" contrasts (evidence 06 §06, verbatim anchors)

The site's positioning rows are the objection-preempting frame; sellers memorize them:

| Contrast | Site language (anchor) | GTM extension — whom it disarms |
|---|---|---|
| **Not demoware** | "LLM-only tools and notebooks demo well, then stall before production. Orama Zetta ships a correct, governed, deployed system." | Databricks/Snowflake accelerator comparisons; the internal notebook prototype |
| **Not someone else's cloud** | "You don't operate ours on their terms. It self-deploys into your environment, natural-language-first." | SaaS AI vendors; "send us your data" platforms; the raw-data-in-our-cloud disqualifier inverted into a differentiator |
| **Not a web PaaS** | "The same one-button deploy experience — but data/AI-native and enterprise-governed on private cloud." | "Isn't this Vercel/Heroku for ML?" analogies |
| **Not just answers** | "Answer engines retrieve and respond. We build, deploy, and train models and pipelines on your data." | Copilot/RAG expectations; "we already have ChatGPT Enterprise" |

### 5.3 Message houses per audience (evidence 06 audiences)

**A. Platform & AI leaders (the champion — P1, the buyer's axis).**
- *Roof:* **Leverage, without losing control.** (site headline)
- *Pillars:* (1) Developers self-serve on governed builds — the queue dissolves without
  the team losing architecture/access/audit ownership; (2) "What would have been a
  quarter-long productionization effort becomes something a team runs this sprint"
  (evidence 06); (3) Governance is the *precondition* for safe self-service — scoped
  identity via your SSO, audit, approval gates.
- *Proof points:* the 120-day exit artifacts; the reference architecture for their
  environment class; zero-egress deployment ("Data egress = 0 bytes", site hero mock).
- *P1 empathy notes (evidence 08 personas):* he wants out of being the funnel; he wants
  his devs to "replicate the churn use cases and tell the story themselves"; he has
  been told "you're too slow" for two years. Sell him *leverage*, not AI.

**B. Data scientists & ML engineers (the influencer — P2).**
- *Roof:* **Modeling is the smallest part of shipping a model.** (site headline)
- *Pillars:* (1) The correct pipeline scaffolded — featurize, train, explain, serve —
  with leakage and point-in-time checks built in; (2) deployed onto governed
  infrastructure without a separate platform project; (3) "There are a lot of ways to
  fool yourself with data engineering" (P2 verbatim) — the gate is on *their* side.
- *Proof points:* gate-pass report contents; SHAP-explained drivers; the inspectable,
  editable graph ("you see the graph, not a black box").
- *Trap to avoid:* P2 can hear "we automate your job." Correct frame: the plumbing and
  the platform project go away; the modeling judgment stays theirs.

**C. Business & analytics teams (the beneficiary — P3, and the sponsor's constituency).**
- *Roof:* **Grounded answers, within governed boundaries.** (site headline)
- *Pillars:* (1) Plain-language questions answered from live data, scoped to existing
  access; (2) sources, freshness, confidence shown — "an answer that holds up in the
  room, not another dashboard to maintain"; (3) "Just tell me what to focus on today"
  (P3 verbatim) — recurring checks delivered where they work.
- *Role in the sale:* not the buyer — the *evidence*. Shadow-production driver reviews
  put P3 in the room; their pull is what converts the sponsor.

### 5.4 Message houses per vertical (roof + lead pillar; §2 playbooks carry the rest)

| Vertical | Roof line | Lead pillar |
|---|---|---|
| FS/banking | *"Intelligence your examiners can read."* | SR 11-7 evidence as a by-product of deployment; zero-egress GLBA posture |
| Insurance | *"AI your DOI filing can point to."* | NAIC AIS-program documentation generated by the system that runs the models |
| Operational | *"Replace the contraption — keep the control."* | From hand-built n8n/notebook stack to a governed system your devs run themselves |
| Healthcare (wave 2) | *"The intelligence comes to the PHI — never the reverse."* | Data-behind-glass deployment; assistive revenue-cycle wins |
| Telecom/TELUS (wave 2) | *"Sovereign AI needs sovereign workloads."* | Trained-on-your-data intelligence running inside sovereign facilities |
| B2B SaaS (wave 2) | *"Revenue intelligence, shipped this sprint."* | Churn + lead scoring + CLV composed on one deployed base |

### 5.5 The "one named use case" outreach rule (kernel D9-4)

Every outbound artifact — email, event talk, landing page, discovery call — leads with
**one named use case with a dollar attached**, drawn from the vertical's beachhead row.
Never "an AI platform," never a feature tour, never the architecture first. The
architecture is the *third* conversation. Enforcement: outreach templates are built per
(vertical × use case) pair; a generic template does not exist, deliberately. This is
also the anti-ICP filter working upstream: copilot-seekers don't answer a
deposit-attrition email, which is the point.

### 5.6 Objection handling

| Objection | Response frame | Evidence to cite |
|---|---|---|
| **"Why not a Databricks/Snowflake accelerator?"** | An accelerator is a notebook: you still staff the productionization, the governance, and the deployment — the exact gap where projects die. Even their model-risk answer ships with a consulting firm attached (MRM with EY, evidence 04 #52). We deliver the deployed, gate-passed, governed solution in *your* environment, priced as a module with a measured KPI. If you have the platform team and the quarters, accelerators are fine; our buyers don't. | Evidence 04 (93 notebooks); Databricks's own >12× governance finding (evidence 08); kernel thesis |
| **"Why not a copilot / we have ChatGPT Enterprise?"** | Copilots retrieve and respond — they never train on your data, so they plateau at what the rented model already knew (~75% vs high-90s in our field experience — P1's Gemini-only scorer, evidence 08). For predictive decisions you need a trained model with explained drivers and a holdout. If a copilot is what's wanted, we're honestly the wrong vendor — that's our anti-ICP. | Evidence 06 "learning, not inference"; personas P1; scorecard disqualifier |
| **Data residency / sovereignty** | Not an objection — our home turf. Zero egress, deploys into your VPC/on-prem, identity via your SSO. 67% of enterprise leaders plan to move AI data off public cloud within 12 months (CIO.com, 2025); ~21% of workloads repatriated in 2025 (Flexera). Frame as **workload placement**, not anti-cloud. | Evidence 08; §6 vocabulary |
| **Build vs buy** | Your platform team *could* build this — that's exactly why they won't get to: the queue (site §01) is the reason the prototype is stuck. We give the same team leverage: they own architecture, access, and audit; the system does the plumbing. The 120-day program costs less than one platform-engineer-year and ends with a measured KPI, not a roadmap. | Evidence 06 §02 (three specialists); pricing anchors (evidence 07) |
| **"You're early / security posture?"** | Honest answer: we are in design-partner preview, and we sequence production hardening gates ahead of production deployment — that discipline is the product's whole point. The engagement is structured so environment setup and shadow production come first; nothing automates until the gates pass. (Internally: kernel D7-1, zetta#759–#769 — never oversell against an open gate.) | Kernel D7; Appendix A T1 |
| **"Why is Enterprise $500k+?"** | Priced against the alternative: a platform team + a data-science team + quarters of integration per use case, repeated for every next use case. One deployed module with a measured KPI typically covers the base; every additional module rides the same deployment (the attach economics, §8.3). Design-partner pricing (10–25% of ACV, credited) exists precisely to de-risk the first proof. | Evidence 07 (kernel D6); §8.3 |
| **"Will you hold our data?"** | Never — structurally. The engine deploys to your infrastructure; raw-data-in-our-cloud is *our* disqualifier before it's your concern. | Scorecard; evidence 06 §05 |

---

## 6. Buyer vocabulary — the words that open doors

Adopt the buyer's existing language rather than teaching ours (evidence 08 banked these):

| Term | Origin | What it means to the buyer | Where we use it |
|---|---|---|---|
| **AI sovereignty** | IDC | Control across data, infra, ops, *and* lifecycle — not just data location | Exec/CIO conversations; telecom + public-adjacent; the TELUS angle (§2.5). Distinguish residency (where bytes sit) from sovereignty (whose law + whose control) — the buyer who knows the difference is our buyer |
| **Data behind glass** | Mayo Clinic (federated model) | The data never moves; the compute visits it | Healthcare, verbatim — it is *their* term for our architecture; also useful with any privacy officer |
| **Workload placement** | FinOps practice | Choosing where each workload runs on cost/governance/latency merit — the polite framing of repatriation | CFO/FinOps and platform-lead conversations; never say "anti-cloud" (evidence 08). Anchor stats: Flexera 84% struggle with cloud spend, ~21% of workloads repatriated (2025); CIO.com 67% moving some AI data off public cloud (2025) |
| **Model risk / effective challenge / MRM** | SR 11-7 | The bank's own control language for model governance | FS/banking only — using it correctly signals we've been in the building (§2.1 map) |
| **AIS program** | NAIC bulletin | The insurer's written AI governance program | Insurance; our audit artifacts are "AIS-program-ready" |
| **Prototype-to-production gap** | Practitioner MLOps vernacular | Where projects die | Universal — it names the champion's pain without blame; it is also our category story |
| **Intelligence Velocity** | Ours (evidence 06/08, kernel D8) | Median time from intent to deployed, correct, running | Ours to *introduce* after their terms establish common ground — the one term we teach, because it's the primary metric we sell against |

Usage discipline: mirror first, introduce second. A discovery call that opens with our
vocabulary instead of theirs reads as demoware marketing — the opposite of the brand.

---

## 7. Channels & sourcing

### 7.1 Practitioner-first channels (evidence 08: "practitioner-first, not lead lists")

The champion is a practitioner (P1/P2); we source where practitioners already are, and
we show up with named use cases and working systems, not booths.

| Channel | Vertical(s) served | Mode of presence | Named-use-case hook |
|---|---|---|---|
| **MLOps Community** | All (champion-dense) | Talks + honest war-story posts (the correctness gate; leakage horror stories; "shadow production" practice) | "How we make a churn model pass model-risk review" |
| **KubeCon / CNCF** | All platform-led; operational | Talk track: self-deploying data/AI systems on k8s; the operator story | "One-button deploy of a governed ML pipeline onto *your* cluster" |
| **NVIDIA GTC** | Operational, manufacturing, telecom | Heterogeneous-compute story (true hybrid, evidence 06); on-prem GPU buyers concentrate here | "Train on your own GPUs — spend idle capacity before renting more" |
| **Money20/20** | FS/banking | Targeted meetings off the ~15-bank list; no booth pre-PMF | Deposit attrition / collections prioritization |
| **InsureTech Connect** | Insurance | Same motion; MGA density is the draw | Lapse early warning with NAIC-ready evidence |
| **HIMSS** | Healthcare (wave 2 — bench building only) | Walk the floor, build the bench, take warm intros; no active pursuit until kernel opens the wave | Data-behind-glass; denials prevention |
| **FinOps X** | Cross-vertical (CFO/platform) | Workload-placement talk; repatriation economics | "Stop paying warehouse prices to ask the same question twice" (evidence 06) |

Plus the two non-event channels that outrank all events: **warm intros** (the lighthouse
list is warm-intro-only by rule) and the **Vancouver network** (TELUS path, §2.5).

### 7.2 Content strategy — keyed to the solutions catalog

Content mirrors the catalog (`04-solutions-catalog.md`): every S-n module gets the same
four-asset kit, produced in beachhead order (S-1 churn first, matching UC tiering):

1. **Solution brief** (2 pages, per vertical variant): the named use case, the deployed
   anatomy, the KPI + holdout design, the governance artifacts produced. The
   "accelerator vs deployed solution" contrast table is a standing section.
2. **Correctness deep-dive** (practitioner content): the specific leakage/point-in-time/
   entity-resolution failure the gate catches for this use case — written for P2, who
   shares it with P1. This is the content moat: incumbents can't publish "our notebook
   won't catch this" pieces.
3. **Named-use-case demo** (recorded, per environment class): intent → graph →
   gate-pass → deploy → scored output with drivers. "9 min, your k8s, 0 bytes egress"
   (site hero mock) is the demo's grammar.
4. **Reference-architecture note** (post-partner, per environment class): the D7-4
   artifact doubled as content — regulated VPC first, then K8s private cloud, then
   bare-metal/on-prem GPU.

Editorial rules: every piece names one use case (D9-4); every claim that could be read
as a promise carries the holdout discipline ("measured vs a holdout" — never naked lift
percentages from other people's case studies); competitor mentions stay factual-count
only (93 accelerators, 9 industries — evidence 04/05).

### 7.3 Marketing surfaces — One Orama consistency (evidence 07)

The One Orama plan fixes the surface map; GTM must not fork it:

- **orama.com presents the suite** — after the migration it is the single front door
  (oramasearch.com redirects), presenting OramaJS (free) · Orama Search Desktop ($49) ·
  Orama Cloud v3 Pro ($200/mo, light agentic search) · **Orama Cloud v3 Enterprise =
  Orama Zetta ($500k/yr+)** (evidence 07 — ⚠️ pricing internal-confidential; the public
  page stays price-free for Enterprise, per the shipped stance).
- **The Zetta pages keep the shipped pricing posture** (evidence 06): "engagements are
  shaped around your deployment target and the use cases in play rather than a public
  price list" — the design-partner CTA ("Tell us the use case. We'll scope the rest.")
  *is* the funnel's top and already enforces the named-use-case rule.
- **Solutions/modules pages grow with the catalog:** as S-n modules reach their DoD, the
  site gains a per-module page (the solution-brief content, §7.2) under the Zetta
  surface — "revenue by module" (evidence 07) needs a *marketing* surface per module.
- **Vertical landing paths** (FS · insurance · operational) reuse the §5.4 message
  houses; they are variants of the same design-partner CTA, not separate funnels.
- **Waitlist mechanics stay** (evidence 06 `/waitlist`): the design-partner scarcity
  posture ("available to a small group of design partners") is true — 3–6 slots,
  founder-bandwidth-bound (§4.6) — and scarcity honestly stated is the correct
  pre-PMF stance.

---

## 8. Pipeline model + GTM metrics

### 8.1 The funnel (cohort 1, next ~2 quarters)

Planning ratios, not forecasts (the CFO doc owns financial scenarios):

| Stage | Volume (plan) | Conversion | Basis |
|---|---|---|---|
| Named-account list | ~50 | — | §4.2 construction (evidence 08 motion) |
| Discovery calls (call 1) | 20–30 | ~40–60% of list reached | Warm-path density decides; cold segments underperform this |
| Qualified (scorecard passed) | 8–12 | ~40% of discovered | Gate: no disqualifier + budget-adjacent champion |
| Paid design partners | **3–6** | ~40–50% of qualified | Capped by founder bandwidth (§4.6) + environment-class slots (D7-4), *not* by demand — excess qualified accounts go to the bench |
| Partner → Enterprise conversion | **2–4** | target ≥60% | The program is engineered for conversion (fee credited, KPI contracted); below 50% indicates scoping or gate failures, not sales failure |
| Year-one revenue shape | 3–6 × $50k–$125k engagement fees + 2–4 × $500k+ Enterprise (fees credited) | — | Kernel D6 anchors (evidence 07/08) |

Bench discipline: the 20–40-account discovery bench (evidence 08) is a maintained asset —
quarterly re-scores, disqualification-reason tracking, re-entry triggers (§3.2). Cohort 2
(expansion to 8–12 partners) opens **only after deployment patterns repeat** (evidence
08), i.e., at least one environment class has a reference architecture exercised twice.

### 8.2 CAC-adjacent discipline (pre-PMF honesty)

Classical CAC is meaningless at n=5; we track its leading indicators instead:

- **Founder-hours per stage transition** (the real acquisition cost): hrs/discovery,
  hrs/qualification, hrs/partner-phase. Budget in §4.6; variance is the signal.
- **Paid-engagement coverage of delivery cost:** the 10–25% ACV fee should cover
  marginal delivery cost (excluding founder time) — if it doesn't, scope creep is
  eating the program (the one-use-case rule is the defense).
- **Channel yield:** qualified accounts per channel (§7.1) per quarter — kill or double
  channels on evidence, one review per quarter, no mid-quarter thrash.
- **Anti-ICP leakage rate:** % of discovery calls that hit a disqualifier — above ~40%
  means outreach targeting (not the market) is wrong; the named-use-case rule usually
  fixes it upstream.

### 8.3 The module-attach expansion motion (kernel D6: land one solution, expand along the reuse frontier)

Post-conversion, the account plan is the **reuse frontier**: the next module that shares
the most methodology components with what is already deployed — the factory economics
(kernel §1) applied to account management.

| Landed with | Natural attach path (shared spine) | Vertical example |
|---|---|---|
| UC-1 churn (M-1) | UC-2 lead scoring → UC-3 CLV (same tabular spine, same connectors) → UC-7 KPI drivers | B2B SaaS / operational: "revenue intelligence" composition (kernel D3) |
| UC-4 collections (M-1) | UC-1 deposit attrition → UC-7 exec drivers → (T2, gated) fraud-triage assistive | Banking |
| UC-1 lapse (M-1) | UC-7 loss-ratio drivers → (T2, gated) claims triage | Insurance |
| UC-8 PdM (M-1/M-5) | UC-5 demand forecasting → UC-6 replenishment (W2 wave) → UC-7 | Operational/manufacturing |

Mechanics: the **module-attach roadmap is a phase-5 exit artifact** (§4.5) — expansion
is scoped before the ink dries; the second module is proposed within 90 days of
conversion; each attach re-runs a compressed program (the environment, governance
baseline, and connectors already exist — target ≤8 weeks to shadow production, which is
the Intelligence-Velocity story becoming account economics). Attach pricing is per-module
(kernel D6; mechanics per the CFO doc — kernel open question #4).

### 8.4 GTM metrics (kernel D8, assigned to this function)

| Metric | Target | Cadence | Owner |
|---|---|---|---|
| Partner → customer conversion | ≥60% (≥50% floor) | Per cohort | CRO |
| Time-to-value per solution | ≤16 weeks (D8) | Per engagement | CRO + delivery |
| Module attach rate | ≥1 attach per customer in yr 1; 2nd module ≤90 days post-conversion | Quarterly | CRO |
| NRR | >120% once ≥3 customers (attach-driven) | Annual | CRO |
| Governance violations | **0** (guardrail — a violation stops the cohort, full stop) | Continuous | All |
| Qualified-account coverage | ≥2× open partner slots on the bench | Monthly | CMO |
| Channel yield | ≥1 qualified account/channel/quarter or kill | Quarterly | CMO |
| Named-use-case compliance | 100% of outbound leads with a named use case | Continuous | CMO |
| Intelligence Velocity (marketing claim ↔ measured) | Published claims never exceed measured medians | Per release | CMO |

---

## Appendix A — Tensions for kernel review

Recorded per the kernel's rule: elaborations don't contradict; they surface tensions for
resolution *in the kernel*.

**T1 — Security gate vs cohort calendar (timing tension, not contradiction).** Kernel
D7-1: no production enterprise deployment while zetta#759–#769 are open. The 120-day
program has partners entering **secure environment setup** by week ~3 and **shadow
production** by week ~10. Shadow production is not automation, but it *is* a deployment
in a regulated customer's environment processing real data. GTM's working interpretation:
phases 1–3 may proceed under preview terms with the gate status disclosed (the §5.6
"you're early" answer), and phase-4 shadow production requires either (a) the auth gaps
closed, or (b) an explicitly scoped, isolated deployment the customer's security team
signs off with the gaps disclosed. **Ask:** kernel to confirm or tighten this
interpretation — it determines whether cohort recruiting can start before the auth work
lands, which is a quarter of calendar.

**T2 — Healthcare's cohort slot.** Evidence 08's program design says the 3–5 partner
cohort is "ideally one FS/insurance, one healthcare, one operational," and healthcare is
the council's unanimous close-#3 vertical. Kernel D5 places healthcare in the second
wave ("longer cycles"). This document follows the kernel (healthcare = bench-building
only, activated by warm intro), but the divergence from the council's cohort composition
should be acknowledged in the kernel — otherwise a strong healthcare warm intro (e.g.,
Mayo-adjacent) creates an ambiguity about whether it may take a tier-1 slot. **Ask:**
kernel to state whether a healthcare warm intro can occupy one of the 3–6 slots ahead of
the second wave.

**T3 — Enterprise price anchor vs the lower ICP band.** Kernel D6 anchors Enterprise at
**$500k/yr+**; kernel D5/evidence 08 set the ICP's lower band at ~$500M revenue /
~1,000 employees, favored pre-PMF for access speed. At that band, $500k+ is a
board-visible line item, and the design-partner fee arithmetic (10–25% of *expected*
ACV) presumes the anchor holds there. Likely fine for regulated verticals (the
alternative is headcount), but the B2B-SaaS wave-2 motion may find the anchor heavy at
the band's bottom. **Ask:** kernel/CFO doc to confirm the anchor is uniform across the
band or whether module pricing (open question #4) gives the lower band a lighter landing
that still nets to $500k+ at attach.

**T4 — UC-9 (automated email outbound) in regulated-vertical messaging.** UC-9 is
kernel T1 (One Orama catalog #2). An *automated outbound* module sits awkwardly beside
the "assistive before automated / shadow production first" story this GTM leads with in
FS/insurance rooms (§2.1–2.2). No kernel contradiction — UC-9 isn't a regulated-vertical
beachhead — but messaging needs a ruling on kernel open question #2 (internal-first vs
customer-facing): if internal-first (Orama automating Orama), it becomes a *case study*
of the factory rather than a regulated-vertical SKU, which resolves the tension cleanly.
**Ask:** resolve open question #2 with the GTM implication noted.

**T5 — Public website claim vs D8 measurement.** The site hero mock states "Intent →
deployed = 9 min" (evidence 06). D8's primary metric (Intelligence Velocity, median
intent → deployed-correct-running) will be *measured* across real partner engagements
whose end-to-end includes environment setup and governance — weeks, not minutes. Both
are true (graph-deploy time vs engagement time), but sellers need the sanctioned
two-clock language ("minutes for the system, weeks for the enterprise's first proof —
both records we intend to keep") so marketing claims and D8 reporting never collide in
front of a buyer. **Ask:** none for the kernel; flagged for the CMO style guide — kernel
may wish to bless the two-clock framing in D8.

---

## Evidence map (what grounds what, this document)

| Section | Primary evidence |
|---|---|
| §2 tier map + playbooks | Kernel D5 · evidence 08 (council) · evidence 04/05 (competitor catalogs) · external: USAFacts 2022 (bank count), Quarles/NAIC 2025 (24 states), TELUS/ISED 2025–26 (sovereign AI), analyst synthesis 2025 (PdM market ~$10–12B, ~25–30% CAGR) |
| §3 ICP + scorecard | Evidence 08 (verbatim-faithful scorecard, firmographics) · kernel D5 |
| §4 cohort plan | Evidence 08 (program, 120 days, bandwidth, bench) · kernel D6/D7 |
| §5 messaging | Evidence 06 (site copy, verbatim anchors) · evidence 08 (personas P1–P3) · kernel D9 |
| §6 vocabulary | Evidence 08 (IDC "AI sovereignty", Mayo "Data Behind Glass", FinOps framing; Flexera/CIO.com 2025) |
| §7 channels + surfaces | Evidence 08 (channel list) · evidence 07 (One Orama surface map, pricing ⚠️) · evidence 06 (design-partner CTA) |
| §8 pipeline + metrics | Evidence 08 (motion ratios) · kernel D6/D8 |
