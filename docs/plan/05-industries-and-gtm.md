# Industries & go-to-market — who our customers will be (D3 elaborated)

> **Status:** v2 — 2026-07-15 · **Author:** CMO+CRO (combined executive team) ·
> **⚠️ Internal-confidential** · **Elaborates kernel v2** (future state · no sequencing ·
> ROI-central · Auto-RL-central).
>
> **v2 supersedes v1 entirely.** Per the kernel's v2 rules (D10): this document is
> **future-state only** — it answers *who our customers will be* and *why they buy*,
> never *whom we approach first*. All partner-cohort mechanics, program timelines,
> entry ordering, and gate scheduling from v1 are removed; the durable content
> (vertical fit, regulatory mapping, champion profiles, buying triggers, buyer
> vocabulary, anti-ICP) is retained and rebuilt on the kernel's ROI calculus (D1),
> Auto-RL centrality (D2), and ROI-based pricing (D8). Every claim cites its evidence
> item (`../evidence/`); external facts carry source + year, with the item-11 quality
> flags where they matter (**[M]** measured · **[C]** company/consultant · **[V]**
> vendor · **[T]** thin).

---

## 1. What this document decides

The kernel's D3 fixes *who our customers will be* in one paragraph. This document is
that paragraph at operating depth: the **customer thesis** (the three conditions and
the buying group behind them), the **industry map scored by ROI fit** (a full playbook
per D3 industry — ROI pools, regulatory-regime-as-selling-advantage, champions,
triggers, vocabulary, incumbent contrast, and the proof metric that wins the renewal),
the **segmentation and the anti-customer** argued on p(success) grounds, the
**positioning and messaging architecture** rebuilt around measured ROI and
your-data-trained agents, the **shape of the commercial motion** (not its calendar),
and the **GTM metrics** that keep the whole function honest against D9.

**The GTM thesis in three sentences.** Our customer is any enterprise where
**recurring, high-value decisions** meet **owned data exhaust** and **a governance
requirement** — the three conditions under which risk-adjusted ROI is largest (kernel
D3). We sell them **agent-operated solution modules**: agents trained on *their* data
(Auto-RL, kernel D2), operating *their* solutions inside *their* environment, each
module carrying an **ROI contract** — the return named up front, measured in
production, and used as both the price basis (D8) and the renewal instrument (D9). The
incumbents sell ingredients — notebooks (Databricks's 93 accelerators, evidence 04),
industry data-platform framing (Snowflake's 9 industry solutions, evidence 05), rented
inference (copilots), or hours (consultancies); **we sell the measured return itself,
and we are priced on it.**

**What GTM optimizes for (D9):** customer ROI delivered — with p(success) calibration,
module attach, NRR, and ROI-readout-to-renewal conversion as the working instruments,
and **governance violations = 0** as the non-negotiable guardrail. "Correct by
construction and governed by default are product properties — never traded, never
staged" (kernel D10-5); the brand *is* that sentence.

---

## 2. The customer thesis (kernel D3 at full depth)

### 2.1 The three conditions — and why they are the whole theory

The future-state customer is defined by the intersection of three conditions. Each one
maps directly onto a term of the D1 calculus (`score = E[ROI] × p(success)`); the
intersection is where the product's economics and the customer's economics coincide.

| Condition | What it looks like inside the account | Which D1 term it drives | Why it is non-negotiable |
|---|---|---|---|
| **Recurring, high-value decisions** | The same decision made hundreds-to-millions of times per period with dollars attached: which account to save, which invoice to chase, which claim to route, which asset to service, which price to quote | **E[ROI] numerator** — the return pool. Frequency × per-decision value = the pool a module can address (evidence 11 Synthesis 2's ranking logic: pool × frequency × actionability × measurability) | One-off decisions cannot repay an agent-operated system; a decision made continuously can be measured continuously — and measurement is the ROI readout, the price basis, and the agent's reward signal (D7-2) all at once |
| **Owned data exhaust** | Systems of record producing decision-grade history as a by-product of operating: CRM, ERP, billing, telemetry, tickets, claims, sensors — with the *outcomes* recorded, not just the inputs | **p(success)** — data availability and label quality are its first two drivers (D1); and **D7** — this exhaust is the fuel Auto-RL trains on | An agent trained on the customer's own data is the product (D2). No exhaust ⇒ nothing to train on ⇒ no personalized agent ⇒ we would be selling rented inference, which is the anti-portfolio |
| **A governance requirement** | A regulator, an examiner, an auditor, a privacy office, or a board policy that constrains where data may go, who may act on it, and what must be evidenced | **p(success)** — governance fit is a first-class driver; and **differentiation** — governance is where our primitives beat every incumbent form factor | Governance is the moat's demand side: the harder the account's governance, the fewer alternatives survive procurement, and the more our identity-scoped, audited, in-environment, approval-gated architecture reads as *the compliance posture itself* rather than a feature (evidence 06/08) |

Two corollaries the whole GTM inherits:

1. **Industry is a proxy; the conditions are the test.** The D3 industry map (§3)
   exists because these three conditions cluster by industry — but account selection
   *within* any industry is D1 scoring on the conditions, not the SIC code. A
   mid-market logistics firm with rich telemetry and a named outcome owner outscores a
   money-center bank whose data is inaccessible to its own teams.
2. **The conditions predict renewal, not just the sale.** Recurring decisions keep
   generating measurable return; data exhaust keeps sharpening the agent (learning
   compounds — evidence 06 "the more of your data flows through it, the further it
   pulls ahead"); the governance requirement keeps the switching cost of leaving a
   governed, audited, in-environment system high. The thesis is a *retention* thesis.

### 2.2 The buying group — three roles that must all exist

Evidence 08 (the design-partner research, durable content) and the personas record
(evidence 08 `personas.md`) converge on a stable buying-group anatomy. The v1 language
("design partner") is retired; the roles are permanent.

**The economic buyer — the P&L owner of the decision pool.** Head of Consumer Banking
(deposit attrition), SVP Collections / CFO office (DSO), Chief Underwriting or Claims
Officer (lapse/triage), VP Revenue Cycle (denials), COO/VP Manufacturing (downtime,
yield), CRO (pipeline, churn). They buy one thing: **a measured return on a decision
pool they already own** — which is why every proposal opens with the ROI model (§6.2),
in their ledger's units, and why the price is expressed as a share of *their* return
(D8), not as our seat count. The economic buyer is also the **renewal buyer**: the ROI
readout is written for them (§6.4).

**The champion — the prototype-to-production owner.** Head of ML Platform · MLOps
Lead · AI Platform Lead · VP Data Engineering · Director of Data Science Platform
(evidence 08, unanimous council finding: *not the CDAO alone*). The archetype is
persona P1 (evidence 08): CEO-sponsored mandate, fluent in the duct-tape stack, a
small dev team he wants to hand "a deployable thing they run themselves," two years of
*"you're too slow"* behind him. In the future state this person's job title is
increasingly **the agent's supervisor**: they own architecture, access policy, and
audit while agent-operated modules do the plumbing, the operating, and the improving.
Our system is the leverage that ends their bottleneck without ending their control —
"architecture, access, and audit remain centrally owned" (evidence 06 §05).

**The outcome owner — the person who acts on the output.** The save-desk lead, the
collections queue manager, the maintenance planner, the renewal underwriter, the RCM
appeals team. D1 names organizational adoption as a p(success) driver: *no owner ⇒
p(success)→0* (kernel D3 anti-customer, verbatim). The outcome owner is where the
solution's "wired to at least one named business action" (D6 definition of done)
becomes real, and where the agent's recommendations meet the human approval gates the
governance model requires. GTM's job is to get the outcome owner into the room before
the ROI model is signed — a proposal without a named outcome owner is a p(success)
misestimate, and we decline it on our own calculus.

Supporting cast, by industry: **the validator** (Model Risk Management in banking, the
AIS-program owner in insurance, the privacy office in healthcare) is not the champion
but must be treated as an internal design authority — the correctness gate, lineage,
and audit trail were built to delight exactly this person, and in regulated accounts
they are the fastest route from vendor to system of record. **The CISO/security
review** is a standing gate in every enterprise; in-environment deployment, zero
egress, and identity via the customer's own SSO make ours the shortest such review in
the category (evidence 06 §05).

### 2.3 Why they choose us — agent-operated, in-environment, ROI-priced

The future-state buyer has four alternatives. Each fails one or more of the three
conditions' consequences; the table is the entire competitive argument, and every
seller conversation is a walk through some row of it.

| Alternative | What it actually delivers | Where it breaks on our buyer's conditions | Our contrast (the sentence to say) |
|---|---|---|---|
| **Accelerators** (Databricks's 93 notebooks — evidence 04; Snowflake's industry catalogs — evidence 05) | A starting-point notebook + a platform to migrate data into; the customer still staffs productionization, governance, and operation | The prototype-to-production gap is *retained by design* — the accelerator ends where the failure evidence says projects die (evidence 11 Synthesis 7, 12 §S6, 14/15: enterprise AI fails at the problem-and-plumbing layer); data moves to *their* platform, colliding with the governance condition | "An accelerator is the first 10% — you still own the 90% where projects fail. We deliver the deployed, governed, agent-operated solution in your environment, and we are priced on its measured return." |
| **Copilots / rented inference** (ChatGPT Enterprise, embedded assistants) | Retrieval + prompting over a general model; plateaus at what the rented model already knew (evidence 06 "learning, not inference") | Never trains on the customer's data ⇒ no compounding, no explained drivers, no holdout-provable return; unmeasurable-return engagements are the anti-portfolio (D4) | "A copilot borrows what a general model knew. Your agent is trained on your data, operates your solution, and gets sharper with every run — and you can measure the difference in dollars." |
| **Consultancies / SIs** (incl. accelerator+SOW bundles — Databricks's own model-risk accelerator ships with EY attached, evidence 04 #52) | Hours; a bespoke build; knowledge that leaves when the engagement ends | Cost scales with effort, not return; nothing compounds — the next use case is another SOW; the IP boundary is murky | "You can rent effort or buy a return. Our price is set from your measured ROI, the agent keeps improving after the engagement would have ended, and your data and your weights stay yours (evidence 08 IP split)." |
| **Internal build** | The platform team *could* build it — which is exactly why it won't get to: the queue is the reason the prototype is stuck (evidence 06 §01) | Opportunity cost of the scarce platform/DS team; every solution is a quarter-long, single-shot project with no shared agent+data foundation; the champion's bottleneck *is* the status quo | "Your team keeps architecture, access, and audit. The agents do the plumbing and the operating. What was a quarter-long productionization becomes something your team runs — and the second module rides the same foundation." |

The positive case, stated once, plainly: **the customer's agents, trained on the
customer's data, operating the customer's solutions, in the customer's environment,
priced on the customer's measured return.** Every clause of that sentence is a kernel
decision (D2, D7, D6, D3, D8); §5 turns it into messaging.

---

## 3. The industry map by ROI fit

All industries below are **in-scope in the future state, with no ordering among
them** (kernel D3: "all are in-scope… account selection *within* any industry follows
D1 scoring"). Each playbook gives: the dominant ROI pools (which Band-A/B solutions,
with evidence-11/14 numbers and quality flags), the regulatory regime mapped onto our
governance primitives *as a selling advantage*, the champion titles and buying
triggers, the buyer vocabulary that opens doors, the incumbent terrain (evidence
04/05) and our contrast, and the industry proof metric — **the ROI readout that wins
the renewal** (§6.4). Band assignments are the kernel D4 bands; the full ROI dossiers
live in `02-use-case-portfolio.md`.

Reading note on the numbers: pool figures size the *industry decision pool*, not our
revenue; per D1, "ROI must be measured, not asserted" — sellers quote pools as
credibility brackets and promise only what the customer's own measurement loop shows.

### 3.1 Financial services / banking

**Why the ROI fit is structural.** Banking is the densest intersection of the three
conditions in the economy: millions of recurring dollar-denominated decisions
(transactions, credit, collections, deposit retention), complete labeled ledgers as
data exhaust, and the hardest governance regime in the private sector — which for us
is an *advantage*, because our primitives map ~1:1 onto it (evidence 08, unanimous
council finding).

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Fraud & financial-crime decisioning (A) | **$33.4B** measured annual card-fraud pool (Nilson 2024) [M]; AML compliance costs **$206B** with **>90% false positives** — enormous efficiency headroom (LexisNexis 2023) [M-pool] | evidence 11 E1/E2, 14 |
| Collections prioritization / DSO (A) | Hard working-capital math on complete AR ledgers with natural labels; among the most attackable problems in the catalog (evidence 11 Synthesis 3, Tier F1) — public deltas thin [T/V], mechanism strong | evidence 11 D2 |
| Deposit/customer attrition — churn (A, UC-1) | Retention economics: acquiring costs **5–25×** retaining; **25–95%** profit sensitivity to retention (Bain/HBR) [M-economics]; deposit flight is board-level at regionals | evidence 11 A1, 01–03 |
| Credit risk scoring (B, governance-gated) | Trillions outstanding; regulator-documented ML delta **+27% approvals at equal loss** (CFPB 2019) [M] | evidence 11 D3 |
| Lead/opportunity scoring, NBA (A) | CRM-native, high-frequency; the revenue-side pool for commercial banking and wealth | evidence 11 A4/A6 |
| KPI driver analysis (A) | The exec surface — "why did the metric move" over governed data | evidence 11 K1/K2 |

**Regulatory regime → our primitives (the map that *is* the pitch):**

| The regulation demands | Regulation | Our primitive (evidence 06 language) |
|---|---|---|
| Model inventory, documentation, development evidence | **SR 11-7** (Fed/OCC model risk) | The visible, inspectable execution graph — "you see the graph, not a black box"; run history in the engine spine |
| Independent validation & effective challenge | SR 11-7 | The **correctness gate**: schema type-checks against real sources, leakage + point-in-time checks, blocked-with-a-reason before deploy |
| Ongoing monitoring & change control | SR 11-7 | Every change, deployment, and access audited; lineage, freshness, confidence on every answer; drift surveillance is a CDO-owned function (D7-4) |
| Customer-data safeguards & access control | **GLBA** Safeguards Rule | In-VPC/on-prem deploy, **zero egress**; identity-scoped access via the bank's own SSO — "a tailored view per user, not a shared service account"; approval gates on sensitive actions |
| Explainability to examiners & audit | SR 11-7 / fair-lending adjacency | Trained, explainable models — measured accuracy, explained drivers |
| Agent actions under control | SR 11-7 read onto agents | **Agent operations pass the same gate and governance as any graph** (kernel D2-5): identity-scoped, audited, approval-gated — the answer to "what does the AI do unsupervised?" is a policy object, not a shrug |

The one-line version: *"SR 11-7 evidence as a by-product of operating the system, not
a quarter of write-up afterwards."* Note the incumbent contrast hiding in evidence 04:
even Databricks's model-risk-management answer is a notebook **plus EY** (#52) — the
governance work is outsourced to a consultancy because the platform can't produce it.

**Champions & triggers.** Champion: Head of ML Platform · VP Data Engineering ·
Director of DS Platform (the prototype-to-production owner — evidence 08); economic
buyers per pool (retail-banking head, SVP Collections/CFO, CRO for commercial);
MRM as the validator to court, never to dodge. Buying triggers: exam findings/MRAs on
model documentation; an internal AI policy blocking data science from shipping (the
mirror image of Databricks's own finding that governance-tooling users move **>12×
more projects to production** — evidence 08); cloud-cost/repatriation pressure (84%
struggle with cloud spend — Flexera 2025; 67% plan to move some AI data off public
cloud — CIO.com 2025), framed as **workload placement**, never anti-cloud; a stuck
notebook model that failed MRM review (champion scar tissue — the single best
qualification signal we know).

**Buyer vocabulary:** *model risk · effective challenge · MRM · SR 11-7 · GLBA
safeguards · fair-lending adjacency* — using the bank's own control language correctly
signals we've been in the building. OCC model-risk guidance bites hardest above ~$30B
assets (evidence 08) — a durable intensity threshold for governance pressure, used as
a D1 scoring input, not an account-sequencing rule.

**Incumbent terrain & contrast (evidence 04/05).** Snowflake carves FS into Banking ·
Insurance · Payments · Asset & Wealth Management (evidence 05 #2). Databricks fields a
dense FS shelf: AML/KYC (#3), credit-card analytics (#14), rule-based fraud (#30),
fraud with geospatial AI (#38), market risk (#49), MRM with EY (#52), regulatory
reporting (#48, #74), reputation risk (#75). All assume the data comes to *their*
platform and the bank staffs the production gap. Our contrast: the deployed, governed,
agent-operated solution inside the bank's boundary, with the examiner's evidence
generated by the system itself — and a price set from the measured return, which no
notebook can even express.

**The proof metric (the renewal instrument).** Per pool: **recovered dollars per
contact-hour and DSO reduction** vs holdout (collections); **saved deposit balances**
in treated-vs-holdout cohorts (attrition); **fraud losses avoided at equal false
positives** (decisioning); each readout stated in the economic buyer's ledger and
signed against the ROI model the deal opened with. In banking the readout does double
duty: it is simultaneously the renewal case and MRM-grade ongoing-monitoring evidence
— one artifact, two audiences.

### 3.2 Insurance

**Why the ROI fit is structural.** Insurance runs on recurring priced decisions
(renewals, claims, underwriting referrals) over decades of labeled loss history, under
a governance regime that is actively tightening — the **NAIC Model Bulletin on the Use
of AI Systems by Insurers** (adopted by 24 states as of March 2025 — NAIC/Quarles,
2025) makes a written, auditable AI governance program a market-conduct expectation.
Every new state adoption raises the value of an architecture that produces the
program's evidence natively.

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Lapse/retention — churn (A, UC-1 shape) | The retention economics above applied to renewal books: retained premium is the highest-margin premium; uplift discipline prevents discounting policyholders who would have stayed (the causal trap evidence 02/03 flag) | evidence 11 A1, 02/03 |
| Claims triage & straight-through processing (A) | Cycle-time + LAE pools; insurtech proof points [C/V]; assistive triage keeps the liability profile inside governance appetite | evidence 11 L10 |
| Claims fraud detection (A) | **~$308B** attributed US insurance-fraud pool (CAIF) [T-attributed]; label-bias discounts argue for assistive designs with measured referral quality | evidence 11 E3 |
| Document/claims automation (B) | 4–5× unit-cost deltas on measured document-processing benchmarks [M]; FNOL-to-settlement document volume is enormous | evidence 11 D1/J2 |
| KPI driver analysis (A) | Loss-ratio drivers by book/segment — the chief actuary's and CUO's standing question | evidence 11 K2 |

**Regulatory regime → our primitives:**

| NAIC bulletin expectation | Our primitive |
|---|---|
| A written AIS program: governance & controls over AI systems | The in-environment control plane; every graph, agent action, change, and access audited — the AIS program's evidence base is the system's operating record |
| Risk management proportionate to decision impact | Per-solution **agent operating definitions** (D6c): what the agent does autonomously vs with approval, as a declared, auditable policy — proportionality made concrete |
| Documentation & audit for market-conduct exams | Run history + lineage on every prediction — "sources, freshness, confidence shown" (evidence 06) |
| Third-party / vendor-AI oversight | The inspectable graph: the insurer can *show* its regulator what the vendor system does — no black-box vendor score; customer-owned weights (evidence 08 IP split) mean the insurer's model is actually *the insurer's* |
| Data governance & security | Zero-egress deploy; identity-scoped access through the insurer's own SSO |

**Champions & triggers.** Champion: Head of Data Science · the Chief Actuary's
modernization lead · VP Claims Analytics; economic buyers: Chief Underwriting Officer
(lapse economics), Chief Claims Officer (triage/LAE). At specialty carriers and MGAs
this is often one person two titles from the CEO — decision velocity is a p(success)
input. Triggers: a state DOI adopting the bulletin (a rolling, per-state trigger); an
AI-usage questionnaire from a reinsurer or fronting carrier; a lapse spike in a book; a
stuck actuarial-side prototype IT won't productionize; the same cloud-cost pressure as
everywhere (Flexera/CIO.com, 2025).

**Buyer vocabulary:** *AIS program · market conduct · LAE · straight-through
processing · loss ratio / combined ratio · rate adequacy*. Our audit artifacts are
described as **"AIS-program-ready"** — their term, our output.

**Incumbent terrain & contrast (evidence 04/05).** Snowflake: Insurance as an FS
sub-industry (evidence 05 #2). Databricks: Claims Management Automation (#11), Smart
Claims (#84), insurance customer-service LLMs (#43), Medicare Risk Adjustment (#51).
All notebooks-plus-platform; none ships a governed system into the insurer's
environment, none produces bulletin-ready governance evidence as an operating
artifact, and none can price against retained premium. Ours does all three.

**The proof metric.** **Lapse-rate reduction on the treated renewal cohort vs
holdout, expressed in retained premium dollars** (the CUO's ledger); claims-side:
**cycle-time and LAE reduction at equal-or-better leakage** on triaged cohorts. The
readout doubles as the AIS program's ongoing-monitoring exhibit — again one artifact,
two audiences, which is precisely why the renewal conversation in insurance is short.

### 3.3 Healthcare / life sciences

**Why the ROI fit is structural.** Kernel D3 names healthcare's "huge
administrative-ROI pools" — and administrative is the operative word: the future-state
portfolio in healthcare is revenue-cycle and operations intelligence, not clinical
decisioning (which the anti-portfolio's governance-exposure test caps — autonomous
high-stakes decisions are refused, D4). The three conditions are extreme here:
denials, prior auth, no-shows, and scheduling are recurring dollar decisions; claims
and EHR exhaust is standardized (X12, HL7/FHIR); HIPAA makes in-environment deployment
the *only* comfortable posture — PHI never leaves the covered entity, because the
compute visits the data.

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Denials management & prevention (B — healthcare ops) | **$19.7B** annual provider cost of fighting denials (AHA 2022) [M-pool]; exceptional labels (every claim adjudicated); hard financial KPIs | evidence 11 L1 |
| Prior-authorization automation (B) | **>$13B** admin pool with a regulatory forcing function (CMS 2024 rule) [M-pool] | evidence 11 L2 |
| No-show prediction & capacity (B) | Fill-rate economics on fixed clinical capacity [T-pool]; assistive scheduling action path | evidence 11 L4 |
| Demand forecasting / supply & staffing (A) | The $1.77T global inventory-distortion pool (IHL 2023) [M-survey] has a healthcare supply-chain slice; workforce scheduling adjacent | evidence 11 F1/I6 |
| Document intelligence (B) | X12/claims + clinical documentation volume; measured 4–5× unit-cost deltas on document processing [M] | evidence 11 D1/J2 |
| KPI driver analysis (A) | Service-line margin and throughput drivers for the COO/CFO | evidence 11 K2 |

**Regulatory regime → our primitives:**

| The regime demands | Regulation | Our primitive |
|---|---|---|
| PHI never leaves the covered entity / BAA-minimal surface | **HIPAA** Privacy & Security Rules | Zero-egress, in-environment deployment — the compute comes to the PHI; "Data Behind Glass" (Mayo's own federated vocabulary — evidence 08) is literally our architecture |
| Minimum-necessary access | HIPAA | Identity-scoped access through the system's SSO integration — per-user tailored views, not service accounts |
| Auditability of access & disclosure | HIPAA | Every data access audited with lineage; the audit trail is native, not bolted on |
| Payer/CMS documentation & appeal evidence | CMS rules | Run history + explained drivers per prediction — appeal-ready reasoning on every denial-risk flag |
| AI-transparency expectations (emerging) | HHS/ONC transparency push; **EU AI Act** for LS/pharma operations in Europe | The inspectable graph + declared agent operating definitions — transparency as an artifact, not an aspiration |

**Champions & triggers.** Champion: VP Revenue Cycle (the RCM owner is unusually both
champion-adjacent and outcome owner) · Head of Data Science (provider systems) ·
Director of Clinical/Operational Informatics; CMIO and privacy office as validators;
CFO as economic buyer for RCM pools. Triggers: denial-rate escalation from specific
payers; the CMS prior-auth rule's compliance clock; margin compression forcing
administrative-cost programs; a payer-side AI arms race (payers automate denials —
providers need symmetric intelligence, a durable structural driver).

**Buyer vocabulary:** *Data Behind Glass* (Mayo — use verbatim, it is their term for
our architecture) · *revenue cycle / RCM · denials overturn rate · clean-claim rate ·
prior auth turnaround · minimum necessary*. The privacy officer's first question —
"where does our data go?" — has the shortest answer in the category: nowhere.

**Incumbent terrain & contrast (evidence 04/05).** Databricks's densest vertical shelf
(~18 of 93): ADE detection (#1), PHI removal (#4), radiology LLMs (#7), patient
cohorts (#12), FHIR (#28), HL7v2 (#37), X12 claims (#35), HEDIS (#36), disease risk
(#61), price transparency (#62), RWE (#71), SDOH (#41/#85), pathology (#22/#59). The
density proves the demand; the form factor is our opening — every one is a notebook
plus a platform migration of PHI. Snowflake frames HCLS around HL7/FHIR/OMOP standards
(evidence 05 #3) — again, data-to-platform. Our contrast: the intelligence comes to
the PHI, never the reverse, and the return is measured in recovered reimbursement.

**The proof metric.** **Denial-rate reduction and recovered reimbursement vs holdout**
(the CFO's ledger); **prior-auth turnaround** against the CMS clock; **no-show
fill-rate lift** on treated clinics. Healthcare's readouts have a second audience by
construction: the compliance narrative (HIPAA posture + explainable operations) that
keeps the privacy office a renewal ally rather than a renewal risk.

### 3.4 Manufacturing / industrial

**Why the ROI fit is structural.** Asset-heavy operations produce the purest data
exhaust in the economy — sensors, MES/SCADA, quality records — attached to decisions
whose downside is measured in halted lines. Kernel D3: "asset & operations ROI; sensor
exhaust." Governance here is operational rather than statutory (safety cases, change
control, OT/IT separation), and our in-environment, approval-gated architecture reads
as *engineering discipline*, which is the culture's own language.

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Predictive maintenance (A) | **$864B** Fortune-Global-500 annual unplanned-downtime pool; **~$532k/hour** average downtime cost (Siemens/Senseye) [C-modeled]; label scarcity and fleet heterogeneity are the p(success) discounts — priced accordingly per D8's risk adjustment | evidence 11 G1 |
| Demand forecasting & inventory (A) | **$1.77T** global inventory-distortion pool (IHL 2023) [M-survey]; adopter cohorts show **−20–35% inventory** [C]; forecast-error reductions of **20–50%** (McKinsey, evidence 01) [C] | evidence 11 F1/F2, 01 |
| Quality inspection & yield (B) | BMW-class results: **95→99% detection, −50% inspection labor** [C]; yield points worth $10M+s in capital-intensive plants; DeepMind's −40% energy exemplar for process optimization [M-company] | evidence 11 G2/G3 |
| KPI driver analysis (A) | Scrap, OEE, and margin drivers — the plant manager's and CFO's shared surface | evidence 11 K2 |
| Supplier risk (B) | Rare-event, weak-label problem — Band B's higher variance priced with success-linked components (D8) | evidence 11 F6 |

**Regime → primitives.** No hard statutory regulator on the analytics itself; the
governance sale is **operational trust**: change control (every graph versioned and
gated before deploy), OT/IT boundary respect (compute-near-data means the OT
historian's data never leaves the plant network), approval gates on any
recommendation that touches a physical process, and audit for the safety case. The EU
AI Act's risk-tiering (for EU plants) rewards exactly this declared-and-audited
posture. Sell governance here as *"the discipline your process engineers already
demand, applied to AI."*

**Champions & triggers.** Champion: VP Manufacturing Excellence · plant digital lead ·
Head of Industrial Data/AI platform; economic buyer: plant P&L owner / COO; CFO enters
via scrap and downtime dollars. Outcome owners: maintenance planners, quality leads.
Triggers: an unplanned-downtime incident with a board postmortem; an OEE program
stalling at the dashboard stage; scrap/energy cost escalation; a hyperscaler-cloud
data-platform bill colliding with thin plant margins (workload placement lands well
with operations CFOs); a stuck pilot from a point-solution PdM vendor that never
generalized past one asset class.

**Buyer vocabulary:** *OEE · unplanned downtime · scrap/first-pass yield · MES/SCADA/
historian · OT/IT convergence · change control · condition monitoring*. Note the
p(success) honesty that builds trust in this vertical: PdM's failure-label scarcity is
real (evidence 11 places G1 in the hard quadrant) — proposing an assistive,
survival-analysis-grounded design with an explicit measurement plan *is the
differentiator* against vendors who promise autonomous prognostics.

**Incumbent terrain & contrast (evidence 04/05).** Databricks: Digital Twins (#23),
OEE & KPI monitoring (#58), product quality inspection (#65), safety stock (#79),
demand forecasting (#21/#93). Snowflake: Manufacturing with Automotive/Energy/
Logistics sub-industries (evidence 05 #4). Both assume plant data moves to their cloud
— the exact thing OT security exists to prevent. Our contrast: the system deploys to
the plant's own environment (down to bare metal — evidence 06 true-hybrid), trains on
the historian's exhaust in place, and is priced on prevented downtime.

**The proof metric.** **Prevented-downtime hours and maintenance cost avoided** on the
pilot asset class vs run-to-failure baseline (PdM); **forecast-error (MAPE) reduction
and inventory-dollars released** (forecasting); **scrap-percentage / OEE-point gain**
on one line, one plant — plant-legible, CFO-convertible, and the renewal case writes
itself across the remaining lines and plants (the expansion motion, §6.3).

### 3.5 Logistics / fleet

**Why the ROI fit is structural.** Fleets are rolling sensor networks: telematics,
routes, service records, driver events — data exhaust attached to per-vehicle,
per-route, per-day decisions. The archetype account (persona P1's employer, evidence
08) is the durable proof that the champion profile and the conditions hold in this
vertical; the account's *particulars* are history, the *archetype* is the playbook.

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Predictive maintenance on fleet assets (A) | The downtime pool above, fleet-shaped: a vehicle out of service is revenue out of service; PdM economics per asset class | evidence 11 G1 |
| Demand/volume forecasting (A) | Network volume forecasting drives asset positioning and labor; the ORION exemplar — **$300–400M/yr**, the best audited single case in the compendium [M] — shows route-and-network optimization pools at majors | evidence 11 F1/F3 |
| Customer churn — 3PL/account attrition (A, UC-1) | The churn anchor applied to contract logistics accounts; same retention economics as everywhere | evidence 11 A1 |
| ETA / service-level prediction (B) | Vendor-mature [V]; sells as a service-quality wrapper on the forecasting spine | evidence 11 F8 |
| KPI driver analysis (A) | Utilization, cost-per-mile, and on-time drivers | evidence 11 K2 |

**Regime → primitives.** Light statutory touch (DOT/ELD compliance data handling;
driver-privacy sensitivities in telematics); the governance sale is **safe
self-service**: the champion's own requirement — Okta-scoped access, no data
exfiltration — was the design-from-day-one demand in the archetype account ("it's not
a service account, it's a tailored view — the core challenge from day one," evidence
08 personas). Driver-facing recommendations stay assistive; approval gates keep labor
relations clean.

**Champions & triggers.** Champion: the P1 archetype — senior platform/AI lead,
CEO-sponsored "one intelligence platform" mandate, 4–5 developers, a hand-built
n8n/notebook/sidecar contraption he babysits. Economic buyer: COO/CEO directly at
mid-market scale. Triggers: the contraption becoming unmaintainable; rented-model
scoring with no real predictive power (~75% vs high-90s — the field's own words,
evidence 08; the "rented model plateaus" story of evidence 06 §Technology 03 verbatim
from a customer's mouth); a vendor security review measured in months; the two-year
drumbeat of "you're too slow."

**Buyer vocabulary:** *telematics · utilization · deadhead · cost-per-mile · on-time
percentage · the contraption* (they will name their own duct-tape stack — mirror it).

**Incumbent terrain & contrast (evidence 04/05).** Databricks: scalable route
generation (#82), order-picking optimization (#57), supply-chain distribution
optimization (#86), demand forecasting (#21); churn four separate ways (#60, #77,
#87, #88 — the demand signal for UC-1 could not be clearer). Snowflake files logistics
under Manufacturing (evidence 05 #4). Neither gives a mid-market platform team a
governed system it can actually run — a Motive-sized team cannot staff a lakehouse
buildout, which is the entire opening.

**The proof metric.** **Saved-account ARR vs holdout** (churn); **prevented-downtime
hours per asset class** (PdM); **forecast-error reduction** converted to positioning
and labor dollars. The renewal narrative in this vertical is uniquely visceral:
*the contraption is gone, the devs run it themselves, and here is the measured
number* — leverage delivered, control retained.

### 3.6 Telecom

**Why the ROI fit is structural.** Kernel D3: "churn/network scale." Telecom has the
largest subscriber-churn decision pools in the B2C economy, network-operations exhaust
at petabyte scale, and — decisively — **data-residency and sovereignty pressure** as a
national-policy matter: carriers are building sovereign AI infrastructure (TELUS's
sovereign AI factories — Rimouski 2025, Kamloops planned; the OpenText Canadian
Sovereign Cloud partnership, 2025; ISED sovereign-AI proponency, 2026) and need
**sovereign workloads** to justify it. An in-environment, zero-egress,
trained-on-your-data system is not merely compliant with that story — it is the story.

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Subscriber churn & retention (A, UC-1) | The retention economics at maximal frequency: millions of subscribers, monthly decision cadence; Databricks ships a dedicated telco-churn accelerator (evidence 04 #33) — the incumbents' own catalog proves the demand | evidence 11 A1, 04 |
| Network KPI anomaly & driver analysis (A) | Company-reported outage reductions of **26–50%** at majors [C-self-reported]; big opex pools in network operations — sold assistive, explicitly not autonomous AIOps (anti-portfolio discipline) | evidence 11 L16/K1 |
| Next-best-action / personalization (A) | Offer/retention arbitration across huge bases; uplift discipline mandatory (don't discount the loyal) | evidence 11 A6/A3 |
| Collections (A) | Consumer AR at scale; the D2 mechanics | evidence 11 D2 |
| Demand/capacity forecasting (A) | Network buildout capital steered by load forecasts | evidence 11 F1/L18 |

**Regime → primitives.** The regime is **sovereignty policy + privacy law** (PIPEDA/
GDPR-class regimes; lawful-intercept adjacency makes carriers institutionally
paranoid about data movement — in our favor):

| The demand | Our primitive |
|---|---|
| Data residency: subscriber data stays in-country, in-carrier | In-environment deployment into the carrier's own (sovereign) facilities; zero egress by architecture |
| Sovereignty beyond residency: control across data, infra, ops, lifecycle (IDC's "AI sovereignty" — evidence 08) | The customer owns the deployment, the weights (evidence 08 IP split), and the operating policy — sovereignty over the *model lifecycle*, which residency-only vendors cannot offer |
| Privacy-law data minimization | Identity-scoped access; per-purpose views; audit on every access |
| National-champion optics | The carrier's AI runs in the carrier's sovereign infrastructure, trained on the carrier's data — a public story their program office *wants* to tell |

**Champions & triggers.** Champion: Head of AI Platform / data-platform engineering;
economic buyers: consumer-division P&L (churn/NBA), network operations (KPI pools);
the **sovereign-AI program office** as a structural sponsor. Triggers: sovereign-AI
infrastructure investments needing workloads; churn spikes in competitive markets;
regulator or public commitments on data residency; hyperscaler-dependence reviews.

**Buyer vocabulary:** *AI sovereignty* (IDC — control across data, infra, ops,
lifecycle; distinguish from mere residency — the buyer who knows the difference is our
buyer) · *ARPU · churn/save desk · NPS · AIOps · sovereign cloud*. The opening frame:
*"Sovereign AI needs sovereign workloads — intelligence trained on your data, running
in your facilities, zero egress."*

**Incumbent terrain & contrast (evidence 04/05).** Snowflake: Telecom as a top-level
industry — "break down data silos… securely access data" (evidence 05 #8). Databricks:
the telco-churn accelerator (#33) plus generic CDP/personalization assets. Both
require the carrier's data in the vendor's cloud — the exact move sovereignty policy
exists to resist. Our contrast is categorical, not comparative.

**The proof metric.** **Churn saves vs holdout in subscriber dollars** (consumer
P&L); **incident/outage reduction on assisted network domains** (network ops); plus a
metric unique to this vertical: **the co-marketable sovereignty story** — a publicly
referenceable sovereign-AI workload, which the carrier's program office is
structurally incented to publicize. Renewal here is reinforced by national narrative,
not just the ledger.

### 3.7 Retail / CPG

**Why the ROI fit is structural.** Kernel D3: "forecasting/pricing/personalization
pools." Retail decisions are the highest-frequency in commerce — price points, facings,
replenishment quantities, offers — over POS/e-commerce exhaust that is deep, labeled,
and continuous. Governance is lighter-statute but real: consumer-privacy law
(GDPR/CCPA-class), pricing-fairness scrutiny, and a competitive-secrecy culture in
which margin data leaving the building is unthinkable — the governance condition in
commercial rather than regulatory clothing.

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Demand forecasting & inventory/replenishment (A) | **$1.77T** global inventory-distortion pool (IHL 2023) [M-survey]; adopter cohorts **−20–35% inventory** [C]; forecast-error reduction **20–50%** (McKinsey — evidence 01) | evidence 11 F1/F2, 01 |
| Pricing & discount optimization (B — higher variance, priced with success-linked components per D8) | **1% price improvement → ~8% operating-profit lift** (McKinsey) [M/C]; controlled-group return-on-sales gains **+4–8pp** documented; causal discipline (elasticity needs price variation) is the p(success) driver | evidence 11 A2 |
| Personalization & recommendations (A — NBA family) | Extreme frequency, zero-latency action, A/B-native measurement — the best measurement culture of any pool [C-anchors] | evidence 11 A3 |
| Churn/retention — loyalty & subscription commerce (A, UC-1) | Retention economics on loyalty programs and subscription lines | evidence 11 A1 |
| Shrink & loss prevention (B-adjacent) | Measured pool, vendor-grade deltas [M-pool/V-delta] | evidence 11 L15 |

**Regime → primitives.** Consumer-privacy law (identity-scoped, purpose-limited
access; audited use of customer data), pricing-governance optics (explainable pricing
drivers — "why did the price move" answered with lineage, an emerging
regulatory-adjacent need), and commercial secrecy (margin and elasticity models are
crown jewels — in-environment training with customer-owned weights means the crown
jewels never leave; the copilot alternative literally sends prompts about them to a
third party).

**Champions & triggers.** Champion: Head of Data/AI Platform · VP Merchandising
Analytics; economic buyers: Chief Merchant (pricing/assortment), SVP Supply Chain
(forecasting), CMO (personalization). Triggers: a margin-compression program; markdown
waste postmortems; a personalization stack renewal (CDP fatigue); forecast misses with
board visibility; privacy-office pushback on data-sharing with SaaS analytics vendors.

**Buyer vocabulary:** *sell-through · markdown/promo lift · out-of-stock/overstock ·
elasticity · CDP · same-store comps*. The credibility move in retail is measurement
literacy: this vertical has run A/B tests for decades — leading with holdout design
(§6.2) speaks native.

**Incumbent terrain & contrast (evidence 04/05).** Snowflake: Retail & Consumer Goods
(evidence 05 #6). Databricks's retail shelf is broad — demand forecasting (#21/#93),
customer segmentation (#18/#19), CLV (#17), recommendations (#10), real-time POS
analytics — plus churn again. Same form factor, same contrast: notebooks and a
platform to move data into vs a deployed, agent-operated system priced on measured
margin. Retail's twist on the contrast: our uplift discipline (don't discount
customers who would have stayed/bought anyway) is a *correctness-gate* argument the
notebook can't make — the gate is what stands between a promo model and a margin fire.

**The proof metric.** **Forecast-error reduction converted to inventory dollars
released and stockout revenue recovered**; **margin per category vs control stores/
cohorts** (pricing); **incremental revenue per session vs A/B control**
(personalization). Retail renewals ride the A/B culture: the readout is in the format
the merchant already trusts.

### 3.8 Energy / utilities

**Why the ROI fit is structural.** Kernel D3: "load + asset ROI." Utilities combine
the two heaviest operational pools — load/demand forecasting (steering capital and
market positions) and asset health (grid, generation, field) — over SCADA/AMI sensor
exhaust, under regulatory regimes (NERC CIP for critical infrastructure; state
rate-case scrutiny) that make cloud-egress of operational data somewhere between
painful and prohibited. Rate-case economics add a unique wrinkle: demonstrable,
audited efficiency gains are *regulatorily valuable* — the ROI readout can literally
support a rate filing.

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Load/demand forecasting (A) | Domain-mature, measured value [C-domain]; forecast error converts directly to market and capacity dollars | evidence 11 L18 |
| Predictive maintenance / grid asset care (A/B) | The downtime pool in its most asset-intensive form; grid asset analytics [C]; storm/outage response optimization adjacent | evidence 11 G1/L20 |
| Grid anomaly detection (B) | Sensor-native anomaly pools; assistive-only in control-room contexts (anti-portfolio discipline on autonomous actions) | evidence 11 L19 |
| Collections & customer programs (A) | Regulated-utility AR + program-targeting pools | evidence 11 D2 |
| KPI driver analysis (A) | SAIDI/SAIFI and O&M cost drivers for the reliability office | evidence 11 K2 |

**Regime → primitives.** **NERC CIP**: critical-infrastructure operational data
handled inside the security perimeter — in-environment, zero-egress deployment isn't a
preference, it's the shortest path to a CIP-compatible AI program; identity-scoped
access and full audit map onto CIP access-control and monitoring families. **State
regulators / rate cases**: audited, explained efficiency gains (our measurement loop's
native output) are presentable evidence in prudency reviews — the ROI readout gains a
third audience. **EU AI Act** (for European utilities): risk-tiered, documented,
human-overseen AI — the declared agent operating definition (D6c) is the compliance
artifact.

**Champions & triggers.** Champion: Head of Grid Analytics / Director of Asset
Management · utility data-platform lead; economic buyers: VP T&D Operations (asset
pools), the trading/resource-planning desk (load), CFO via O&M programs. Triggers: a
reliability event with regulatory attention (SAIDI/SAIFI excursions); AMI/sensor
investments producing data nobody exploits; storm-cost postmortems; rate-case cycles
seeking demonstrable efficiency; grid-modernization programs with an analytics line
item and no delivery capacity.

**Buyer vocabulary:** *SAIDI/SAIFI · NERC CIP · AMI · prudency/rate case · O&M vs
capex · situational awareness*. Conservative-culture note: utilities buy *assistive,
audited, reversible* — the approval-gated agent posture is the culturally correct
offer, not a downgrade.

**Incumbent terrain & contrast (evidence 04/05).** Snowflake files Energy under
Manufacturing (evidence 05 #4); Databricks's utility-relevant assets are the
IoT/digital-twin family (#23) plus forecasting. Neither addresses the CIP-perimeter
problem — their architecture *is* the perimeter violation. Ours deploys inside it,
down to bare metal (evidence 06 true-hybrid: "run entirely within your own data
center… no dependency on a public cloud").

**The proof metric.** **Load-forecast error reduction converted to market/capacity
dollars**; **avoided outage-hours / O&M cost per asset class vs run-to-failure**;
readouts formatted for the third audience — the rate case. A measured, auditable
efficiency gain a utility can cite to its regulator is the strongest renewal
instrument in this vertical.

### 3.9 B2B SaaS / technology

**Why the ROI fit is structural.** Kernel D3: "churn/expansion-native, data-ready."
SaaS companies are born with the three conditions half-met: subscription churn and
expansion are *the* recurring decisions of the business model; product telemetry, CRM,
and billing exhaust is clean and centralized; and while statutory governance is light,
**customer-data stewardship is contractual** (their enterprise customers' DPAs flow
down — a SaaS vendor training models on tenant-adjacent data has real governance
obligations, and knows it). This vertical is also where the **anti-customer
concentrates** (§4.3) — copilot-seekers and no-outcome-owner tool collectors — so D1
scoring discipline is at its most load-bearing here.

**Dominant ROI pools (Band A/B):**

| Solution (band) | The pool | Evidence |
|---|---|---|
| Churn & retention (A, UC-1 — the native anchor) | Retention economics at their purest: NRR is the valuation metric of the sector; 5–25× CAC, 25–95% profit sensitivity (Bain/HBR) [M-economics] | evidence 11 A1 |
| Lead/opportunity scoring (A) | CRM-native data + routing action; leakage-aware build is the only craft [C] | evidence 11 A4 |
| Next-best-action / expansion targeting (A) | Expansion propensity on product telemetry — the "revenue intelligence" composition on one shared foundation | evidence 11 A6/A5 |
| Collections (A) | AR on subscription billing; quick, measurable | evidence 11 D2 |
| Ticket triage & support intelligence (B) | Labels free from history; platform-native action; the best-measured gen-AI productivity result lives here (**+14%**, NBER 2023 [M]) | evidence 11 B1/B3 |
| KPI driver analysis (A) | "Why did NRR move" — the board-meeting question, answered with lineage | evidence 11 K2 |

**Regime → primitives.** Contractual governance: flowed-down DPA obligations, SOC 2
optics, tenant-data isolation — in-environment deployment plus identity-scoped access
means the vendor's customer-data promises survive its own AI program (a real,
recurring failure mode among SaaS companies bolting LLMs onto tenant data).
Customer-owned weights close the "are you training on our tenants' data?" question
cleanly: yes — *your* instance, *your* weights, nobody else's benefit.

**Champions & triggers.** Champion: Head of Data · RevOps platform owner · VP Data
Engineering; economic buyers: CRO (churn/expansion/scoring), CFO (collections), VP
Support (triage). Triggers: an NRR miss with board attention; a RevOps consolidation
program; a data team drowning in exec ad-hoc questions; DPA/security-review friction
blocking a SaaS-AI vendor they were about to buy (we win those bake-offs on
architecture).

**Buyer vocabulary:** *NRR/GRR · expansion/contraction · PQL · health score · DPA ·
tenant isolation*. Measurement literacy is high; holdout-first proposals read as
competence, not caution.

**Incumbent terrain & contrast (evidence 04/05).** Databricks ships churn four ways
(#60, #77, #87, #88) and Snowflake's Technology vertical exists (evidence 05 #7) —
demand proven, form factor unchanged. The nearer competitors here are point SaaS tools
(customer-success platforms with black-box health scores). Contrast: a black-box score
rented monthly vs an explained, holdout-measured model trained on your own telemetry,
whose weights you own, composing with scoring/NBA/collections on one foundation.

**The proof metric.** **Saved-ARR vs holdout** and **NRR movement attributable via
treated-cohort design**; scoring: **win-rate and cycle-time lift on treated
segments**. In a sector valued on NRR, an audited NRR instrument is a renewal argument
that compounds — churn intelligence that provably moves the company's own multiple.

### 3.10 The map in one table

| Industry | Dominant Band-A pools | Headline number(s) (evidence 11/14) | Governance regime → advantage | Proof metric (renewal instrument) |
|---|---|---|---|---|
| FS / banking | Fraud/AML · collections · deposit churn · scoring/NBA · KPI drivers | $33.4B fraud pool [M]; $206B AML cost, >90% FP [M]; +27% approvals at equal loss [M] | SR 11-7 + GLBA ≈ 1:1 onto our primitives | Recovered $/contact-hour · saved balances vs holdout (doubles as MRM evidence) |
| Insurance | Lapse/retention · claims triage · fraud · doc automation | ~$308B fraud pool [T-attr]; 4–5× doc-processing deltas [M] | NAIC AIS program — evidence generated natively | Retained premium vs holdout (doubles as AIS exhibit) |
| Healthcare / LS | Denials · prior auth · forecasting · doc intelligence | $19.7B denials-fight pool [M]; >$13B prior-auth pool + CMS rule [M] | HIPAA — "Data Behind Glass" is our architecture | Recovered reimbursement vs holdout |
| Manufacturing | PdM · forecasting/inventory · quality/yield | $864B downtime pool, ~$532k/hr [C]; $1.77T distortion pool [M-survey]; 95→99% detection [C] | Operational trust: change control, OT/IT boundary | Prevented downtime-hours · scrap/OEE delta |
| Logistics / fleet | PdM · volume forecasting · account churn | ORION $300–400M/yr [M-audited] | Safe self-service; driver-privacy discipline | Downtime-hours · forecast error · saved-account ARR |
| Telecom | Subscriber churn · network KPI drivers · NBA · collections | Outage −26–50% at majors [C]; churn at maximal frequency | Sovereignty/residency — we are the sovereign workload | Churn saves vs holdout + the public sovereignty story |
| Retail / CPG | Forecasting/replenishment · pricing · personalization | $1.77T pool [M-survey]; 1% price → ~8% profit [M/C]; −20–35% inventory [C] | Privacy + commercial secrecy — crown jewels stay home | Inventory $ released · margin vs control · A/B lift |
| Energy / utilities | Load forecasting · asset care · anomaly | Domain-measured load value [C]; downtime pool asset-intensive | NERC CIP perimeter + rate-case-grade audit | Forecast error → market $ · avoided outage-hours (rate-case-ready) |
| B2B SaaS / tech | Churn · lead scoring · expansion NBA · collections · triage | 5–25× CAC, 25–95% sensitivity [M]; +14% support productivity [M-NBER] | Contractual (DPA flow-down) — customer-owned weights close it | Saved ARR / NRR movement vs holdout |

---

## 4. Segmentation & the anti-customer

### 4.1 The firmographic / technographic profile (future state)

Evidence 08's researched profile is retained as the **durable shape of the customer**,
restated without its program framing. These are D1 scoring inputs — where p(success)
and E[ROI] are jointly maximized — not admission gates by size.

| Dimension | The profile | Why (in D1 terms) |
|---|---|---|
| Scale | Enterprises large enough to own systems of record and a platform team; roughly the ~1,000–25,000-employee / ~$500M–$10B-revenue band as the density center, with no ceiling — larger enterprises qualify whenever the three conditions hold (evidence 08 kept a "lighthouse" ceiling exception; in the future state the ceiling simply isn't a rule) | Below the band, the outcome-owner and platform-owner roles usually don't exist ⇒ p(success) collapses; above it, the conditions hold and E[ROI] pools are larger — the historical caution was a company-stage artifact, not a customer-truth |
| Sector intensity | Regulated and asset-heavy industries over-index (the §3 map) — banking above the ~$30B-asset model-risk threshold (evidence 08) is a canonical governance-pressure cell | The governance condition is strongest where a regulator names the requirement |
| Data estate (must see) | Systems of record producing decision-grade, labeled history: CRM/ERP/billing/telemetry/tickets/claims/sensors; **accessible** for the named use case | D1 p(success) drivers #1–2: data availability & label quality; D7: the agent's training supply chain must exist |
| Infrastructure (must see) | A real deployment surface they control: cloud VPC, K8s, on-prem/bare metal; an identity provider (SSO) | In-environment deployment and identity-scoped governance are product properties (D2-5); no surface ⇒ no product |
| Technographic strong-fit | On-prem GPU investment; multi-cloud footprint; a FinOps program; a live, stuck prototype (notebook / automation-tool / LLM-only scorer) | Each raises E[ROI] (idle capacity → true-hybrid economics, evidence 06) or p(success) (a stuck prototype = a named problem + an educated champion + proof the internal path failed) |
| Organizational (must see) | A named **outcome owner** for the decision; a **prototype-to-production owner** as champion; **economic-buyer access** | D1 driver #4: no adoption owner ⇒ p(success)→0 (kernel D3, verbatim) |

**One profile, one funnel.** v1 distinguished a design-partner ICP from a buyer ICP;
v2 needs no such split — there is one customer profile, and every engagement of any
size runs the same motion (§6): a named use case, an ROI model, a measurement loop, a
priced module.

### 4.2 Segmentation that matters: by decision pool, not by size band

The operative segmentation is **which Band-A pool dominates the account**, because it
determines the economic buyer, the proof metric, and the landing module:

| Segment (dominant pool) | Typical industries | Economic buyer | Landing module family |
|---|---|---|---|
| Revenue-retention-dominant | SaaS, telecom, insurance (lapse), banking (deposits), subscription retail | CRO / consumer P&L | Churn & retention (UC-1 shape) + scoring/NBA attach |
| Working-capital-dominant | Banking, utilities, SaaS, any AR-heavy enterprise | CFO office | Collections/DSO + doc automation attach |
| Loss-avoidance-dominant | Banking (fraud/AML), insurance (claims fraud), security-sensitive ops | CRO(risk)/CFO | Fraud & financial-crime decisioning (assistive designs) |
| Asset-and-operations-dominant | Manufacturing, logistics, energy/utilities | COO / plant & network P&L | PdM + forecasting + quality/yield |
| Administrative-cost-dominant | Healthcare (denials/prior-auth), insurance (claims ops), doc-heavy back offices | CFO / VP Revenue Cycle / COO | Healthcare-ops & document-automation family |
| Exec-intelligence-dominant (attach-first, rarely lands alone) | All | CEO/CFO staff | KPI driver analysis — sold as the attach that makes every other module legible |

### 4.3 The anti-customer — argued on p(success)

The anti-customer list (kernel D3; evidence 08 anti-ICP, durable) is not taste — each
entry is a **structural p(success) failure**, which the D1 calculus prices at
approximately zero regardless of E[ROI]. Declining these is portfolio management, and
sellers decline them by naming the failed driver:

| Anti-customer | The p(success) failure | The decline (said aloud) |
|---|---|---|
| Wants an LLM copilot / RAG search, not a trained system | **Measurability fails**: no holdout-provable return exists for "answers feel better"; unmeasurable returns are the anti-portfolio (D4) — and an unmeasured module cannot be ROI-priced (D8) at all | "For that, buy a copilot — honestly. We sell measured returns; a copilot's return can't be measured, so we can't price it, and you couldn't hold us to it." |
| Requires us to hold their raw data in our cloud | **Governance fit fails** — and the product thesis with it: own-data training *in their environment* is what we are (D2/D3); holding raw data would make us the residency risk our customers buy us to avoid | "Never — structurally. The engine deploys to your infrastructure. That's not a policy; it's the architecture." |
| No named outcome owner (the "AI tourist" innovation lab; the tool collector) | **Adoption fails**: predictions nobody acts on produce no return; kernel D3 verbatim — no adoption ⇒ p(success)→0 | "When a named owner will act on the output weekly, we're the right call. Until then a pilot would only measure our ability to be ignored." |
| No platform team / no controlled deployment surface | **Actionability & environment fail**: nowhere to deploy, nobody to own the governed surface | "We deploy into infrastructure you control. When that surface exists, so does this deal." |
| Wants autonomous high-stakes decisioning out of the gate | **Governance exposure caps p(success)** (D4 anti-portfolio: p(failure) and liability dominate); also violates the agent-governance property (D2-5) | "Our agents act under declared autonomy policies with approval gates. If you want unsupervised high-stakes automation, we are deliberately the wrong vendor." |
| Buys projections, resists measurement (no holdout, no baseline, "just deploy it") | **Measurability fails** by refusal: without the measurement loop there is no ROI readout, no true-up, no renewal instrument — the commercial machinery of D8/D9 cannot run | "Our price is set from your measured return. Refusing measurement isn't a discount — it's a different product, and not ours." |

The anti-customer discipline compounds: every declined mis-fit protects **p(success)
calibration** (D9) — the portfolio-wide credibility that our ex-ante scores mean
something, which is itself a selling asset ("we turned down your copilot RFP last
year" is the most convincing sentence in a later, correctly-shaped deal).

---

## 5. Positioning & messaging architecture v2

Built from the shipped website promises (evidence 06 — quoted phrases are the site's
own) and rebuilt around the kernel's two center-poles: **measured ROI** (D1/D8/D9) and
**your-data-trained agents** (D2/D7).

### 5.1 The master narrative — "we are priced on your return"

**One sentence:** *Orama Zetta delivers agents trained on your data, operating your
solutions in your environment — and we are priced on your measured return.*

**The arc (every deck, this order):**

1. **The constraint is rarely the data** (evidence 06 §01). The path from a question
   to a credible answer runs through a few people who can do data engineering,
   modeling, and deployment together; a queue forms; answers arrive quarters late —
   and prototypes that prove ideas stall exactly at productionization (the failure
   evidence: items 03, 11 §S7, 14, 15 — enterprise AI fails at the problem-and-
   plumbing layer, rarely the model layer).
2. **Renting inference doesn't fix it.** "Prompting a general-purpose model only
   borrows what that model already knew; it never gets better at your business"
   (evidence 06). The unfixed constraint just acquires a chatbot.
3. **Agents trained on your data, operating your solutions.** Zetta studies you and
   your data (Auto-Suggest), auto-trains a long-horizon, tool-calling agent on your
   data with reinforcement learning (Auto-RL), and personalizes every interface to how
   you work (Personalized MCP) — evidence 06/08. The agent builds, runs, monitors,
   explains, and improves each solution inside your walls, under your governance
   (kernel D2). Learning compounds: "the more of your data flows through it, the
   further it pulls ahead" (evidence 06).
4. **Correct by construction, governed by default** (evidence 06 §04) — the
   correctness gate before every deploy; identity-scoped, audited, approval-gated
   operations — for the agent's actions exactly as for any graph (D2-5). Never traded,
   never staged (D10-5).
5. **And you can hold us to it — because you pay on it.** Every module ships with an
   ROI contract: the return named up front, measured against a holdout or hard
   operating metric in production, read out in your ledger's units — and the price is
   an anchor share of that measured return, risk-adjusted (D8). *The measurement loop
   that proves your ROI is the same instrument that justifies our invoice.* No other
   vendor category can say this sentence: accelerators can't measure, copilots can't
   train, consultancies can't compound.

**The two flagship claims, always paired:** *your agents, trained on your data*
(the product story) · *priced on your measured return* (the commercial story). Each
makes the other credible — ROI pricing is believable *because* the agent measurably
improves; the agent story is buyable *because* the price is tied to its measured
output.

### 5.2 The four "not-" contrasts (evidence 06 §06, extended to v2)

The shipped site rows remain the anchors; v2 adds the ROI/agent extension to each.

| Contrast | Site anchor (verbatim) | v2 extension — the ROI/agent clause |
|---|---|---|
| **Not demoware** | "LLM-only tools and notebooks demo well, then stall before production. Orama Zetta ships a correct, governed, deployed system." | …and the system carries an ROI contract — a demo can't sign one, because a demo has no measurement loop. |
| **Not someone else's cloud** | "You don't operate ours on their terms. It self-deploys into your environment, natural-language-first." | …and your agent's weights are yours (evidence 08 IP split) — sovereignty over the model lifecycle, not just the data's location. |
| **Not a web PaaS** | "The same one-button deploy experience — but data/AI-native and enterprise-governed on private cloud." | …operated by agents rather than left for your platform team to babysit — deployment is where a PaaS stops and where our agents start. |
| **Not just answers** | "Answer engines retrieve and respond. We build, deploy, and train models and pipelines on your data." | …and we price on what they return, measured — answers have opinions; solutions have readouts. |

### 5.3 Message houses per buyer role

**A. The economic buyer (the decision-pool P&L owner).**
- *Roof:* **You buy a measured return, and the price is set from it.**
- *Pillars:* (1) The proposal *is* the ROI model — the return named, the lever
  specified, the measurement design agreed before a dollar moves (§6.2); (2) the
  readout arrives in your ledger's units against a holdout — never a vendor slide;
  (3) risk is priced, not hidden: higher-variance solutions carry lower entry pricing
  with success-linked components tied to the measured readout (D8).
- *Proof points:* the industry proof metrics (§3, per vertical); the true-up mechanics
  (the measurement loop is the billing instrument — D8); the anti-portfolio (what we
  refuse to sell you, and why that protects you).

**B. The champion (the prototype-to-production owner — P1).**
- *Roof:* **Leverage, without losing control** (evidence 06 §05, verbatim).
- *Pillars:* (1) Agent-operated modules end the queue — the plumbing, operating, and
  improving are the agent's job, while "architecture, access, and audit remain
  centrally owned"; (2) the correctness gate is on your side — every graph and every
  agent action validated before it runs, blocked-with-a-reason if not; (3) your team's
  standing rises with every module: you become the executive who ships measured ROI,
  not the bottleneck who queues requests.
- *Empathy notes (evidence 08 personas, durable):* two years of "you're too slow"; a
  hand-built contraption he babysits; devs he wants to hand "a deployable thing they
  run themselves." Sell leverage, not AI.

**C. The data scientist / ML engineer (the influencer — P2).**
- *Roof:* **Modeling is the smallest part of shipping a model** (evidence 06,
  verbatim).
- *Pillars:* (1) The correct pipeline scaffolded — featurize, train, explain, serve —
  with leakage and point-in-time checks built in ("there are a lot of ways to fool
  yourself with data engineering" — P2, verbatim); (2) the agent handles plumbing and
  operations; the modeling judgment stays yours — review and tune the generated graph
  rather than hand-building the harness; (3) your work finally gets measured in
  production dollars instead of dying in a notebook.
- *Trap to avoid:* P2 can hear "we automate your job." The correct frame: we automate
  the 80% that was never their job to love.

**D. The outcome owner (the beneficiary — P3, and the renewal's ground truth).**
- *Roof:* **Grounded answers, within governed boundaries** (evidence 06, verbatim).
- *Pillars:* (1) "Just tell me what to focus on today" (P3, verbatim) — ranked,
  explained, delivered where they work; (2) scoped to the access they already hold,
  with sources, freshness, confidence shown; (3) their acted-on recommendations are
  literally the ROI evidence — and the agent's training signal (D7: action taken +
  result observed = the reward).
- *Role in the sale:* not the buyer — the evidence. Their adoption is what the
  economic buyer's readout measures.

**E. The validator (MRM / AIS owner / privacy office / CISO).**
- *Roof:* **The evidence your regulator wants is the system's operating record.**
- *Pillars:* (1) inventory, lineage, audit, and change control generated natively;
  (2) declared agent autonomy policies with approval gates (D2-5) — "what does the AI
  do unsupervised?" answered as a policy object; (3) zero egress, identity-scoped,
  your SSO. The validator is courted as an internal design authority, never managed
  as an obstacle.

### 5.4 Message houses per industry (roof + lead pillar; §3 carries the depth)

| Industry | Roof line | Lead pillar |
|---|---|---|
| FS / banking | *"Intelligence your examiners can read."* | SR 11-7/GLBA evidence as a by-product of operation; ROI readout doubles as ongoing-monitoring |
| Insurance | *"AI your DOI filing can point to."* | AIS-program-ready artifacts from the system that runs the models; retained-premium readouts |
| Healthcare / LS | *"The intelligence comes to the PHI — never the reverse."* | Data-behind-glass architecture; recovered-reimbursement readouts |
| Manufacturing | *"Downtime, measured before it happens."* | Agent-operated PdM/forecasting inside the plant boundary; plant-legible readouts |
| Logistics / fleet | *"Replace the contraption — keep the control."* | From hand-built stack to an agent-operated, governed system your devs run |
| Telecom | *"Sovereign AI needs sovereign workloads."* | Trained-on-your-data intelligence in your sovereign facilities; churn readouts + a public story |
| Retail / CPG | *"Margin, measured against control stores."* | Forecasting/pricing/personalization with A/B-native readouts; crown jewels never leave |
| Energy / utilities | *"Efficiency your rate case can cite."* | CIP-perimeter deployment; audited readouts a regulator can read |
| B2B SaaS / tech | *"NRR intelligence, with a readout the board trusts."* | Churn+expansion on one foundation; saved-ARR vs holdout |

### 5.5 Objection handling (the answer to every hard question is the measurement loop)

| Objection | Response frame | Grounding |
|---|---|---|
| **"Why not a Databricks / Snowflake accelerator?"** | An accelerator is a notebook: you still staff productionization, governance, and operation — the exact layer where the failure evidence says projects die. Even their model-risk answer ships with a consultancy attached (evidence 04 #52). We deliver the deployed, gate-passed, agent-operated solution in your environment — and we're priced on its measured return, which a notebook cannot even express. | evidence 04/05; 11 §S7/14/15 failure layer; D8 |
| **"We have ChatGPT Enterprise / why not a copilot?"** | Copilots retrieve and respond; they never train on your data, so they plateau at what the rented model knew (evidence 06; the field's own numbers: ~75% vs high-90s, evidence 08). For recurring dollar decisions you need a trained, explained, holdout-measured system. If a copilot is what's wanted, we're honestly the wrong vendor — that's our anti-customer (§4.3). | evidence 06 "learning, not inference"; 08 |
| **Build vs buy** | Your team could build one of these in a quarter — that's the queue's whole tragedy. With us they keep architecture, access, and audit while agents do the plumbing and operating; the second module rides the same agent+data foundation, so the build-vs-buy math worsens for "build" with every attach. And you pay on the measured return, which your internal build would never dare offer. | evidence 06 §02/§05; §6.3 |
| **Data residency / sovereignty** | Our home turf, not an objection: zero egress, your VPC/on-prem, your SSO, your weights. 67% of enterprise leaders plan to move some AI data off public cloud within 12 months (CIO.com 2025); ~21% of workloads repatriated (Flexera 2025). Framed as **workload placement** — run each workload where cost, governance, and latency say it belongs (never "anti-cloud"). | evidence 08; 06 true-hybrid |
| **"Prove the ROI before we buy."** | The ask *is* the product. Every engagement opens with the ROI model — return, lever, measurement design, holdout — agreed before deployment; the readout is measured in production, in your ledger's units; and the price trues up against it (D8). You are not asked to believe a projection; you are asked to agree on how we'll both count. **The answer to "prove it" is the measurement loop itself.** | D1 corollary (b); D8; D6 ROI contract |
| **"What does the agent do unsupervised?"** | A declared policy, not a discovery: each module ships an agent operating definition — which action classes run autonomously-under-audit, which route through approval gates (D6c, D2-5). Your validator signs it; the audit trail enforces it; governance violations = 0 is a guardrail metric, not a hope. | D2-5, D6, D9 |
| **"Whose model is it? Are you learning from our data for others?"** | Your data and your customer-specific weights are yours; the base model and *generalized* patterns (schemas, playbooks, priors, benchmarks) are ours (evidence 08 IP split; kernel D7-3). The boundary is contractual and precise — the kernel keeps it under explicit definition (kernel open question 4). | evidence 08; D7-3 |
| **"Why is the price tied to our return? Just quote a license."** | Because it aligns us: a license rewards shelfware; an ROI-anchored price rewards your measured outcome. Higher-p(success), well-evidenced modules carry premium fixed pricing; higher-variance ones carry lower entry with success-linked components — the risk is priced where it lives (D8). The Enterprise anchor ($500k/yr+, evidence 07 ⚠️) is the floor the portfolio math is built on; the module prices above it are your-return-shaped. | D8; evidence 07 |

### 5.6 Vocabulary discipline — mirror first, introduce second

The durable buyer-vocabulary bank (evidence 08) is a GTM asset: **AI sovereignty**
(IDC — control across data, infra, ops, lifecycle), **Data Behind Glass** (Mayo),
**workload placement** (FinOps), **model risk / effective challenge / MRM** (SR 11-7),
**AIS program** (NAIC), **prototype-to-production gap** (practitioner MLOps). The rule:
open in *their* language, then introduce ours — **the ROI contract**, **the
measurement loop / the readout**, **your agent** (always possessive — never "our AI"),
**the correctness gate**, **agent operating definition**. A conversation that opens
with our vocabulary instead of theirs reads as demoware marketing — the opposite of
the brand. Intelligence Velocity remains in the bank but is supporting vocabulary only
(kernel: still tracked, explicitly not central).

---

## 6. The commercial motion in the future state

Motion **shape**, not calendar: no phases, no week numbers, no cohort counts. Five
durable behaviors define how we sell, deliver, expand, and renew — each one an
elaboration of a kernel decision.

### 6.1 Named-use-case-first selling

Every outbound artifact and first conversation leads with **one named use case with a
dollar attached**, drawn from the account's dominant pool (§4.2) and the industry
playbook (§3) — never "an AI platform," never a feature tour, never the architecture
first (the architecture is the third conversation). Outreach templates exist only as
(industry × use case) pairs; a generic template deliberately does not exist. This rule
is simultaneously: the E[ROI] conversation-starter (the pool is the hook), the
anti-customer filter working upstream (copilot-seekers don't answer a
deposit-attrition email — which is the point), and the Auto-Suggest story in
miniature — the product itself opens engagements the same way, by studying the
customer and proposing the highest-value use cases ranked (evidence 06 §04).

### 6.2 The ROI model as the proposal

**Every deal opens with the ROI contract draft** (D6a made commercial). The first
substantive document a prospect receives is not a deck or a quote — it is *their* ROI
model:

| ROI-model section | Contents | Kernel tie |
|---|---|---|
| The return | Which lever (revenue lift · cost reduction · loss avoidance · working-capital release · risk reduction), sized against the account's own baselines and the industry pool brackets (§3) | D1 numerator |
| The customer investment | Module price + integration effort + data work + change cost — *all four named*, not just our line | D1 denominator, verbatim |
| The measurement design | Holdout / uplift / hard operating metric; the readout's cadence, owner, and ledger units; what counts as attribution | D1 corollary (b); D6a |
| The p(success) assessment | The named risk drivers (data, labels, action path, adoption owner, governance fit) with our scored estimate — shared openly | D6b; D1 |
| The agent operating definition | What the customer's agent does autonomously vs with approval — the validator's section | D6c; D2-5 |
| The data plan | Sources, entities, labels (action taken + result observed), the feedback loop that turns operations into training data | D6d; D7-1 |
| The price | The anchor share of expected annual return, risk-adjusted; fixed vs success-linked split per the p(success) band; true-up cadence against the readout | D8 (mechanics: `06-financial-plan.md`) |

Selling with the ROI model does three things no pitch can: it forces the outcome-owner
conversation early (the measurement design needs one — §2.2), it makes our
risk-adjustment honesty visible (we mark down our own price when p(success) is
lower — trust bought cheaply), and it means **the close is a signature on the same
document the renewal will be judged by.** Proposal, contract, and renewal instrument
are one artifact aging gracefully.

### 6.3 Land with one module, expand on the shared agent + data foundation

The landing module is the dominant-pool solution (§4.2). Expansion is not a second
sale — it is the **factory economics arriving at the account** (kernel §1, D8
portfolio effect): the environment, governance baseline, connectors, entity
resolution, and — decisively — the **customer's trained agent and its data supply
chain** already exist, so the marginal module's customer investment falls while its
return holds. "Expansion is priced to be obvious" (D8, verbatim).

| Landed with | Natural attach path (what the foundation already carries) | Why the D1 score of the attach beats the original |
|---|---|---|
| Churn & retention | → lead/opportunity scoring → NBA/expansion targeting → KPI drivers | Same tabular spine, same entities, same CRM connectors; the agent already knows the customer's accounts |
| Collections/DSO | → deposit/customer attrition → doc automation → KPI drivers | Same AR/billing exhaust; the finance data plan extends, not restarts |
| PdM | → demand forecasting → quality/yield → KPI drivers | Same sensor/historian supply chain; the plant's governance baseline is done |
| Denials | → prior auth → no-show/capacity → doc intelligence | Same claims/EHR connectors; the privacy-office review amortizes |
| Fraud decisioning | → AML triage → collections | Same transaction spine and case-action wiring |

Mechanics: the **expansion map is a standing section of every ROI readout** (§6.4) —
the readout that proves the last module proposes the next one, with the attach's D1
score computed on the now-cheaper investment base. Auto-Suggest makes this literal:
the customer's own agent, having studied their data, ranks their next use cases
(evidence 06) — **the product generates its own pipeline inside the account.**

### 6.4 Renewal = the ROI readout

There is no "renewal motion" separate from delivery: **the renewal instrument is the
ROI readout the module has been producing all along** (D8: "the measurement loop is
the billing instrument"). The readout's discipline:

- **In the economic buyer's ledger units** — saved balances, retained premium,
  recovered reimbursement, prevented downtime-hours, released inventory dollars
  (§3 proof metrics), against the holdout/baseline the ROI model fixed at signature.
- **Dual-audience by design** in regulated verticals: the same artifact is renewal
  case and regulator-grade evidence (MRM ongoing-monitoring, AIS exhibit,
  rate-case-ready) — one document, two rooms.
- **True-up honesty runs both ways** (D8): readouts above model can trigger
  success-linked components; readouts below trigger the price's risk-adjustment —
  which is why the readout is *credible* as a sales document: it has teeth against us.
- **The agent's compounding is the renewal's second act**: reward-linked training
  (D7-2 — the metric the customer pays for is the metric the agent learns on) means
  the readout should trend, not just hold; a flat readout is a data-plan or adoption
  flag the account team treats as churn risk — we run our own churn playbook on
  ourselves.

### 6.5 Channels — where the champions live

Practitioner-first, durable (evidence 08's channel research retained as *strategy*,
not event calendar): the champion is a practitioner (P1/P2), so presence means working
systems and honest war stories, not booths.

| Channel | Who it reaches | The durable hook (always a named use case or a correctness story) |
|---|---|---|
| MLOps Community | Champions across all industries | "How a churn model passes model-risk review" · leakage war stories · agent-operations-under-governance practice |
| KubeCon / CNCF | Platform-led champions | Self-deploying, agent-operated data/AI systems on your cluster — the operator story |
| NVIDIA GTC | Operational/manufacturing/telecom | True-hybrid heterogeneous compute (evidence 06): "spend the capacity you already own before renting more" |
| Money20/20 | FS economic buyers + platform leads | Deposit attrition / collections with examiner-readable evidence |
| InsureTech Connect | Insurance champions (specialty/MGA density) | Lapse early warning with AIS-ready artifacts |
| HIMSS | Healthcare RCM + informatics | Data-behind-glass denials prevention |
| FinOps X | Cross-industry CFO/platform | Workload placement: "stop paying warehouse prices to ask the same question twice" (evidence 06) |
| Warm networks | Everywhere | Outrank every event; the future-state referral engine is §6.4 — a customer holding a true ROI readout is a channel |

Content strategy keyed to the catalog: every S-n module carries a **solution brief**
(the ROI-model skeleton for that use case, per-industry variants), a **correctness
deep-dive** (the specific leakage/point-in-time/entity-resolution failure the gate
catches — written for P2, unpublishable by notebook vendors), a **named-use-case
demo** per environment class, and a **readout exemplar** (an anonymized ROI readout —
the artifact that does the selling). Editorial rules: every piece names one use case;
every number carries measurement discipline ("measured vs a holdout" — never naked
lift percentages from other people's case studies); competitor mentions stay
factual-count only (93 accelerators, 9 industries — evidence 04/05).

Marketing-surface consistency (evidence 07 ⚠️): orama.com presents the suite; the
Enterprise tier *is* Orama Zetta ($500k/yr+ anchor — internal; the public posture
stays price-free: "engagements are shaped around your deployment target and the use
cases in play rather than a public price list," evidence 06). The public CTA — *"Tell
us the use case. We'll scope the rest."* — already enforces §6.1 at the funnel's top;
per-module pages grow with the catalog ("revenue by module," evidence 07), each one a
solution brief with an industry-keyed proof-metric section.

---

## 7. GTM metrics (D9-aligned)

The function's scoreboard derives from the kernel's metric set — customer ROI central,
p(success) calibration and portfolio risk-adjusted ROI as companions, module
attach/NRR as supporting, governance violations = 0 as guardrail. GTM's additions
instrument the *selling* of that system, not a parallel funnel ideology.

| Metric | Definition | Why it is the right instrument | Owner |
|---|---|---|---|
| **Pipeline quality by predicted D1 score** | Every qualified opportunity carries its scored `E[ROI] × p(success)`; pipeline is weighted by score, not stage-count | Pipeline volume rewards indiscriminate selling; D1-weighted pipeline rewards finding the largest, most probable returns — the kernel's calculus applied to our own funnel | CRO |
| **Win rate vs p(success) calibration** | Do deals we scored high close and deliver at the modeled rate? Ex-ante scores vs ex-post outcomes, tracked as a calibration curve | The GTM face of D9's p(success) calibration: mis-calibration is either mis-scoring (fix the rubric) or mis-selling (fix the motion); both are findable only if measured | CRO + COO (doc 07 rubric) |
| **ROI-readout-to-renewal conversion** | Share of modules whose readout met/beat the ROI model that renew (and at what true-up) | The central metric's commercial shadow: if measured ROI doesn't convert to renewal, either the readout's ledger units are wrong or the economic buyer wasn't the reader — both GTM failures, not product failures | CRO |
| **Module attach rate** | Modules per customer; share of readouts whose expansion map converts to a scoped next module | D8's portfolio effect realized; the factory economics visible in account economics | CRO |
| **NRR** | Net revenue retention across the customer base | The compounding thesis (§2.1 corollary 2) in one number; attach + true-up driven | CRO |
| **Anti-customer discipline rate** | Share of declined opportunities with a named p(success) failure logged; leakage rate of anti-customer deals that entered pipeline anyway | Protects calibration (§4.3); a rising leakage rate means outreach targeting is drifting off the three conditions | CMO |
| **Named-use-case compliance** | 100% of outbound artifacts lead with a named use case + pool | §6.1 enforced mechanically | CMO |
| **Message-measurement integrity** | Published claims never exceed measured readouts; every public number traces to a holdout-disciplined source | The brand is "measured, not asserted" (D10-6) — marketing is bound by the same rule as the product | CMO |
| **Governance violations** | **0** — across sales demos, pilots, and production alike | The guardrail is unconditional (D9); a violation anywhere is a stop-everything event | All |

What is deliberately absent: stage-conversion percentages by date, account counts per
period, program-phase velocity — all sequencing artifacts (D10-2). The funnel's health
is read through D1-weighted quality and calibration, not through calendar throughput.

---

## Appendix A — Tensions for kernel review

Recorded per the kernel's rule: elaborations don't contradict; they surface tensions
for resolution *in the kernel first*.

**T1 — The ROI-share anchor vs the $500k+ Enterprise anchor (kernel open question 1,
GTM angle).** D8 prices each module as an anchor share of expected annual return,
risk-adjusted; evidence 07 retains the Enterprise platform anchor at $500k/yr+. For
accounts at the profile's density center (~$500M revenue), several Band-A pools
(collections at mid-market AR scale, no-show fill rates) produce expected annual
returns where a defensible anchor share sits *below* the platform anchor. GTM can sell
the platform+modules bundle above the floor in most cases, but needs the kernel/CFO
ruling on which governs when they conflict: the ROI share (price follows the return,
floor be damned) or the floor (some returns are too small to serve — effectively a
minimum-E[ROI] account gate). **Ask:** resolve in `06-financial-plan.md` under kernel
open question 1; GTM's preference is the floor-as-account-gate reading, which keeps
"priced on your return" literally true wherever we sell.

**T2 — Success-linked pricing vs measurement-design ownership (kernel open question 2,
GTM angle).** The measurement loop is the billing instrument (D8), but the customer
controls part of the apparatus (holdout integrity, action logging by the outcome
owner, offer-policy stability). When a customer's own adoption failure degrades the
readout, the success-linked component punishes us for their organizational miss — yet
policing their adoption is exactly the p(success) driver we scored. GTM needs the
kernel's allocation of measurement-design risk (who bears a broken holdout) expressed
as standard ROI-contract clauses. **Ask:** kernel open question 2 to specify the
default risk split; GTM proposes: we bear model-performance risk, the customer bears
action-execution risk, and the contract's measurement section names the tripwires.

**T3 — Auto-Suggest as pipeline vs account-selection governance.** §6.3 celebrates the
product generating its own expansion pipeline (the agent ranks the customer's next use
cases). But D1 says *we* score what we sell, and the anti-portfolio refuses some
things customers will ask for — including things their own Auto-Suggest ranking may
surface (e.g., an autonomous decisioning variant of a deployed assistive module).
The seller-facing rule needs kernel blessing: **Auto-Suggest proposes; the D1/D4
discipline disposes** — an agent-suggested use case still passes the same intake
scoring and anti-portfolio screen before it may be quoted. **Ask:** kernel to confirm
the agent's suggestions are advisory to the portfolio calculus, never a bypass of it
(a D2/D4 interaction the kernel doesn't currently address).

**T4 — The generalized-learning boundary in the sales conversation (kernel open
question 4, GTM angle).** §5.5's IP answer ("your weights are yours; generalized
patterns are ours") is the right shape, but sophisticated validators — especially bank
MRM and insurance AIS owners — will ask precisely what crosses the boundary, and
"under definition" weakens an otherwise airtight governance story. GTM's need is a
customer-facing one-pager version of the D7-3 boundary once the CDO defines it in
`08-data-strategy.md`. **Ask:** prioritize kernel open question 4; GTM will not
improvise the boundary in the room.

**T5 — Regulated-industry marketing of "automated outbound."** Band A includes
automated outbound (kernel D4). An *automation-forward* module sits awkwardly beside
the assistive-first, approval-gated posture §3 leads with in FS/insurance/healthcare
rooms. No kernel contradiction — the agent operating definition (D6c) already scopes
autonomy per solution — but messaging needs a sanctioned line for regulated buyers who
read "automated outbound" as a governance red flag. GTM proposes: in regulated
industries the module is presented under its operating definition ("agent-drafted,
human-released, fully audited — autonomy is a dial your validator sets"), and the word
"automated" is reserved for contexts where the autonomy policy actually permits it.
**Ask:** kernel/CPO blessing for the presentation rule, so the catalog name and the
regulated-room framing stop diverging.

---

## Evidence map (what grounds what, this document)

| Section | Primary evidence |
|---|---|
| §2 customer thesis | Kernel D1/D2/D3/D7 · evidence 08 (champion research, personas — durable content) · evidence 06 (product promises) · evidence 11 §S7 / 14 / 15 (failure layer) |
| §3 industry playbooks | Kernel D3/D4 bands · evidence 11 (Synthesis 2/3 pools + quality flags) paired with 14 · evidence 04/05 (incumbent catalogs) · evidence 08 (regulatory mapping, vocabulary, triggers) · evidence 06 (primitive language) · external: Nilson 2024, LexisNexis 2023, CFPB 2019, Bain/HBR, IHL 2023, McKinsey, Siemens/Senseye, AHA 2022, CMS 2024, NBER 2023, NAIC/Quarles 2025, Flexera/CIO.com 2025, TELUS/ISED 2025–26 |
| §4 segmentation & anti-customer | Evidence 08 (firmographics/technographics/anti-ICP — durable, future-stated) · kernel D1/D3 (p(success) argumentation) |
| §5 positioning & messaging | Evidence 06 (verbatim anchors, four "not-" rows) · kernel D1/D2/D8 (ROI + agent center-poles) · evidence 08 (personas, vocabulary bank, IP split) · evidence 07 ⚠️ (Enterprise anchor) |
| §6 commercial motion | Kernel D6 (ROI contract anatomy) · D8 (pricing/true-up/portfolio effect) · D7 (data plan, reward) · evidence 06 (Auto-Suggest, CTA posture) · evidence 07 ⚠️ (suite surfaces, revenue by module) · evidence 08 (channel strategy — durable) |
| §7 metrics | Kernel D9 (metric set) · D1 (score-weighted pipeline) · D10 (guardrails, no sequencing) |

