# New-solution research — candidates beyond the catalogue (2026-10-09)

> **Status:** v2 elaboration — 2026-10-09 · **Author:** CPO (combined executive team) ·
> **⚠️ Internal-confidential** · Elaborates kernel v2 (future state · no sequencing ·
> ROI-central · Auto-RL-central)
>
> **What this document is.** The analysis drawn from evidence item
> [`16`](../evidence/16-ai-solutions-web-research-2026-10-09/) — 130 verbatim Perplexity
> responses from four parallel web-research passes (buyer demand · AI-engineering
> practice · industry · business function), each looking for AI solutions that AI and
> ML engineers build for companies beyond the solutions the catalogue already held. The
> evidence folder holds only the verbatim responses; **every table, ranking and
> recommendation below is analysis**, which is why it lives here (plan rules,
> [`CLAUDE.md`](CLAUDE.md)). It is the research input behind the catalogue's
> S-14…S-23 (S-13, Automatic Quoting, comes from the founder's description and predates
> this research), scored in [`02-use-case-portfolio.md`](02-use-case-portfolio.md) and
> specified in [`04-solutions-catalog.md`](04-solutions-catalog.md).
>
> **How to read it.** §1 records which candidates the catalogue admitted and how each
> maps to its use case and module. §2 is the combined synthesis across the four angles.
> Appendices A–D are the four per-angle findings tables, kept whole so every row and
> its evidence trail survive. File numbers in the synthesis and the appendices (`09`,
> `file 05`, `15:` …) are response files **inside that angle's folder** of evidence 16 —
> e.g. a function-angle `15` is
> `../evidence/16-ai-solutions-web-research-2026-10-09/function/15-research-field-service.md`;
> row ids such as `D4` or `F27` are rows of the Appendix A (D) or Appendix D (F)
> tables (E = Appendix B, I = Appendix C). The research names companies, vendors and
> customers because that is what its sources publish; the catalogue specs that draw on
> it do not, and cite the evidence file instead. Most outcome figures are vendor- or
> company-published and measure the model *plus* a changed workflow — read them as
> evidence that buyers pay, not as expected ROI (the specs' ROI math is illustrative
> planning arithmetic, per the doc-04 convention).

---

## 1. From research to catalogue — what was admitted

Eleven modules joined the catalogue on 2026-10-09, matching the solutions now
described on the public website. Each pairs with a use case scored by the doc-02
rubric. **ID note:** `UC-13`…`UC-24` were already assigned (UC-13 credit-risk decisioning,
UC-14…UC-24 the Band-B entries), so the new use cases take the next free ids,
`UC-25`…`UC-34`; and S-19 pairs with the existing **UC-22** (quality, scrap & yield),
whose problem it is, rather than a duplicate use case (doc 02 Appendix A, T-9/T-10).

| Module | Use case | Band (doc 02) | Research basis (this document) | Main overlap reconciled in the spec |
|---|---|---|---|---|
| **S-13** Automatic Quoting | UC-25 Quote pricing & margin protection | B (RA ≈ 2.7) | Founder's description; demand-angle job-shop quoting rounds (D, "seen but not added") | B-1 quote-side variant (CPQ discount governance) |
| **S-14** Field-Service Dispatch & First-Time Fix | UC-26 Field-service dispatch & first-time fix | **A** (RA ≈ 3.3) | Tier 1 #1 — all four angles (D2, E5, I9, F27/F28) | S-8 (work orders it creates); C-3 routing |
| **S-15** Labor Forecasting & Shift Scheduling | UC-27 Labor demand & shift scheduling (promotes Band-C C-8) | B (RA ≈ 2.6) | Tier 1 #2 — all four angles (D6, E4, I24, F15) | S-5 forecasting machinery; UC-15 governance boundary |
| **S-16** Recovery Audit | UC-28 Payables recovery audit | **A** (RA ≈ 3.3) | Tier 1 #3 — D·E·F (D4, E2/E3, F3/F4/F5) | **B-4** document & workflow automation; UC-24 buy-side |
| **S-17** Revenue Leakage Detection | UC-29 Unbilled work & revenue leakage | B (RA ≈ 1.6) | Tier 1 #4 — four angles as variants (D5, E18/E19, I18, F37) | **B-4** contract-obligations leg; UC-24; B-6 |
| **S-18** Warranty & Field-Quality Early Warning | UC-30 Warranty & field-quality early warning | B (RA ≈ 1.6) | Tier 1 #5 — D·I·F (D22, I8, F31) | UC-22 warranty lever; S-7 anomaly machinery |
| **S-19** Scrap, Yield & Process Optimization | **UC-22** (scope widened) | B (RA ≈ 2.3) | Tier 1 #6 — D·E·I (D21, E20/E39, I7) | AP-8 vision-first inspection |
| **S-20** Delivery Date Promise | UC-31 Delivery-date promise & proactive delay | B (RA ≈ 2.3) | Tier 1 #7 — E·F·I (E7, F21, I12/I13) | UC-5/UC-6 order-promise component |
| **S-21** Construction Estimating & Bid Intelligence | UC-32 Construction estimating & bid/no-bid | B (RA ≈ 1.8) | Tier 1 #9 — D·E·I (D7/D8, E24, I3/I4/I6) | S-13 sets the price; doc-02 §7.1 RE/construction note |
| **S-22** Freight & Supplier Quoting | UC-33 Freight & supplier quote response | B (RA ≈ 1.8) | Tier 1 #10 — D·E·I (E10/E11, I10) | S-13 sibling; B-4 extraction; B-5 procurement |
| **S-23** Marketing Mix Modeling | UC-34 Channel budget allocation (test-calibrated MMM) | B (RA ≈ 1.8) | Tier 2 — E·F (E30, F10/F11) | **AP-5** MMM-as-oracle; UC-23; S-11 / uplift material |

**Not admitted in this round, and why.** Each stays a candidate; none is refused.

- **Trade-promotion post-event ROI + deduction recovery** (Tier 1 #8). Strong cash
  evidence (deduction recovery is a recovery-audit cousin on the AR side), but gated by
  retailer POS access and confined to CPG; the deduction-recovery leg is the natural
  extension point of S-16's reconcile-and-recover machinery on the receivables side.
- **Inbound call capture and booking** (Tier 2). The loudest small-business demand
  signal, but crowded, platform-native and conversational — AP-1's ground unless it is
  the front end of S-14 (booking into dispatch) or S-17 (captured revenue).
- **PO / email order → ERP sales order** (Tier 2). A revenue-side lane of B-4's
  extraction anatomy; folds into B-4 rather than a module of its own.
- **Insurance litigation propensity + subrogation; submission intake** (Tier 2). The
  best controlled evidence in the whole research (industry `09`), and a natural
  attach to S-12's claims family; held for an insurance-family extension of S-12.
- **Healthcare operations** (discharge/LOS, census staffing, OR blocks, prior auth,
  coding, CDI) (Tier 2). Extends B-6; EHR integration dominates the investment.
- **Route / fleet optimization, HVAC control, inspection targeting, contact-center
  driver analytics, treasury cash forecasting, catalog enrichment, kitchen waste**
  (Tier 2). Each is either OR-heavy with a mature buy market (C-3), hardware- or
  BMS-dependent, buyer-narrow, or already a UC (UC-20 cash-flow forecasting).

---

## 2. Combined synthesis across the four angles

*(The synthesis as written by the research pass; only the file-location sentence is
adjusted to point at evidence 16.)*

**Sources.** Four parallel research passes, run through Perplexity:
- **D**, demand: 33 responses;
- **E**, AI-engineering practice: 38 responses;
- **I**, industry: 29 responses;
- **F**, business function: 30 responses.

That is 130 verbatim responses, captured as evidence 16 in [`demand/`](../evidence/16-ai-solutions-web-research-2026-10-09/demand/), [`engineering/`](../evidence/16-ai-solutions-web-research-2026-10-09/engineering/), [`industry/`](../evidence/16-ai-solutions-web-research-2026-10-09/industry/) and [`function/`](../evidence/16-ai-solutions-web-research-2026-10-09/function/). Each angle's findings table is an appendix below (A demand · B engineering · C industry · D function), where row numbers such as `D4` or `F27` refer to rows.

**Baseline.** These candidates are measured against the current 13 solutions and the 8 Band-B sketches.

**Caveat.** Almost every outcome figure is published by a vendor and measures the model *plus* a changed workflow. Treat the figures as evidence that buyers pay, not as expected ROI. The few results backed by a control group are marked ✓.

### Ranking

The ranking rests on four things:
1. How many independent angles surfaced the candidate. Four out of four is the strongest signal.
2. Whether it fits our anatomy: predict → decide by policy → act in the system of record → measure against a holdout.
3. Whether a non-tech mid-market company can buy it.
4. Whether the ROI is cash that can be counted.

#### Tier 1: surfaced by 3–4 angles, strong fit

| # | Candidate | Angles | Why it is strong | Best evidence |
|---|---|---|---|---|
| 1 | **Field-service dispatch + first-time-fix / parts prediction.** The right technician arrives with the right part. | D·E·I·F (4) | Data already sits in field-service software. A real ML decision followed by an optimizer. FTFR and jobs per tech are easy to measure. | F28 Comfort Systems −49% resolution cost, TOMRA FTF 84→96%; F27 PHS 18.5→26 jobs/tech; D2 ServiceTitan +14% avg ticket |
| 2 | **Labor demand forecast → shift schedule** | D·E·I·F (4) | Labor is the largest cost an operator controls. Builds on demand forecasting, but adds an optimizer and a different action (the published schedule). | E4 Discher −4% staff cost; D6 Carrot Express −300 bps payroll; F15 discount retailer ~$10M |
| 3 | **Recovery audit**: freight invoice audit, duplicate supplier payments, invoice-vs-contract price compliance | D·E·F (3) | ROI is recovered cash, so success-share pricing is natural. Bounded workflow. Fastest to a first result. | F3 International Paper $62.2M; D4 Freehand 3–5% of freight spend; F4 McKinsey ~4% leakage |
| 4 | **Revenue-leakage / unbilled-work detection**: unbilled accessorials, contract-to-invoice gaps, field-service work never invoiced, healthcare charge capture | D·E·F·I (4, as variants) | The records already exist, scattered across FSM, ERP, contracts and invoices. The action is a direct invoice. The strongest custom-build fit. | D5 carrier 4.2% of revenue (vendor); E18 McLaren $11.3M; I18 Iodine $15M |
| 5 | **Warranty / field-quality early warning** | D·I·F (3) | Mid-size manufacturers already hold the data (claims, technician text, lots, suppliers). Clear actions: contain, charge back the supplier, redesign. | F31 Sub-Zero −50% incidents, found 4–5 months sooner; I8 IBM auto ~€30M; SAS/Honda −20% |
| 6 | **Scrap, yield and process-setpoint optimization**, plus visual inspection | D·E·I (3) | Plants have MES and historian data. An advisory setpoint mode avoids touching control systems. | I7 ProcessMiner −25% scrap, refinery FCC $6–9M/yr; E39 OYAK Cement $39M; E20 Federal Package >99% caught |
| 7 | **Delivery-date promise + proactive exception handling** ("where is my order", WISMO) | E·F·I (3) | The most-replicated system in engineering blogs. Can be A/B tested on conversion and WISMO contacts. Uses order and carrier history the company already has. | E7/F21 Harry Rosen +13% conversion, −16% WISMO; I13 Singapore randomized trial ✓ |
| 8 | **Trade-promotion post-event ROI + deduction recovery** (CPG) | E·I·F (3) | Mid-size CPG brands spend heavily on trade promotion and measure little of it. Deduction recovery is cash. | F1 Danone $25.5M/yr; I21 Tredence +5.4 ROI points; F14 loss-making events 55%→31% |
| 9 | **Construction: takeoff from drawings, bid/no-bid, schedule-delay risk, drawing error check** | D·E·I (3) | Extends **Automatic Quoting** upstream (drawings → quantities → priced bid). Matches the construction prospects already in our pipeline. | D7 Bobyard −65% takeoff time; I3 nPlan/Suffolk $1.25M, 20 days avoided; D8 Buildcheck $622K on an $80M job |
| 10 | **Freight and supplier quoting**: email-to-quote, spot-rate prediction, supplier RFQ comparison | D·E·I (3) | Documents become a priced decision, with a human approving. A sibling of Automatic Quoting on the buy side. | I10/E11 Greenscreens/Southland +21% loads; E10 RFQ accuracy 96% at a firm with $4M revenue |

#### Tier 2: strong evidence, narrower buyer, or crowded

| Candidate | Angles | Note |
|---|---|---|
| **Inbound call capture and booking** (voice receptionist) | D·E·F | The loudest small-business demand signal, but crowded and being built into field-service platforms. Only worth doing as the front end of #1 or #4, not on its own. |
| **PO / email order → ERP sales order** | D·E | A clean mid-market LLM project (E1 MCR Safety 91% touchless). The revenue-side sibling of the sketched document automation, and could be folded into it. |
| **Insurance: litigation propensity + subrogation; submission intake triage** | I·D·E | Litigation propensity has the best controlled evidence in the whole research (I1 Gallagher Bassett vs control ✓: −18% attorney involvement, −10% incurred). Pairs with the existing claims triage. |
| **Healthcare ops: discharge/LOS prediction, census staffing, OR block release, prior auth, autonomous coding, CDI** | D·E·I | Large, repeated outcomes (I15 HonorHealth $62M; I16 Duke $40M). Community hospitals are mid-market buyers, but EHR integration is the cost. Extends the healthcare sketch. |
| **Marketing mix modeling / incrementality / uplift-targeted offers** | E·F | Needs about $1M+ in ad spend and 2–3 years of history. A natural extension of our holdout-measurement story. |
| **Inspection / field-work targeting**: utility theft, lead service lines, municipal inspections, vegetation | E·I | One reusable pattern, "rank sites by the expected yield of a visit". Strong controlled results (I34 BlueConduit 80% vs 15%; I26 Enel 3×). Buyers are co-ops, cities and regulators. |
| **Route / fleet / load optimization** | D·E·I·F | Strong ROI, but this is operations research rather than ML, and a mature software category. Best bundled into #1. |
| **Building HVAC control, demand-charge optimization** | D·E·I | 20–26% HVAC energy savings measured repeatedly. Needs a compatible building-management system. |
| **Contact-center driver analytics + 100% QA scoring** | E·F | Value comes from joining conversation themes to orders and defects. Contact-center tools don't do that join. |
| **Treasury cash-flow forecasting** | E·F | Easy to prove and data-ready, but the P&L impact is modest. A good first project to build trust. |
| **Catalog enrichment → B2B search** | E | For distributors with large supplier catalogs. Only one angle surfaced it, but the deployments are deep. |
| **Kitchen food-waste / prep forecasting** | E·I | Consistent 36–66% less overproduction. Needs hardware. |

#### Seen and set aside

- **Crowded vertical SaaS where buying beats building:** ambient clinical scribes, dental X-ray AI, legal invoice review, PI demand letters, review management.
- **Enterprise or government only:** autonomous tail-spend negotiation, regulatory-change mapping, tax-collection action optimization, telecom RAN energy.
- **Thin evidence:** construction change-order prediction, journal-entry risk scoring, should-cost modeling.

### Cross-cutting patterns

1. **Document → decision → system record.** An email, PDF, call or drawing becomes a quote, an order, a claim or a booking, with exceptions routed to a person. This **sells fastest** to non-tech mid-market buyers.
2. **Forecast → optimizer → published action.** A schedule, route, promise or setpoint. This has the **most defensible ROI**, because the action can be measured before and after, or against a holdout.
3. **Reconcile and recover.** Audits and leakage detection return **cash**. This has the cleanest ROI and suits success-share pricing.
4. **Mid-market buyers mostly buy from outside providers.** Partner-led builds reached deployment about 2× as often as internal ones (MIT NANDA, D02). That supports a delivered "program" over self-serve tooling.

---

## Appendix A — demand angle: buyer demand and willingness to pay

*(The demand-angle findings table as written by the research pass. File numbers refer to [`../evidence/16-ai-solutions-web-research-2026-10-09/demand/`](../evidence/16-ai-solutions-web-research-2026-10-09/demand/); original title: “Findings: buyer demand and willingness to pay”.)*

This is analysis only. The verbatim Perplexity responses are in files `01` to `33` in this folder, and every figure below comes from them. Most outcome figures are reported by vendors, and the source files say so. The confidence ratings take that into account.

### Context from the demand data

**Where the money goes**
- Ramp sees 56% of US businesses paying for AI, and 66.8% of mid-market firms (August 2026). But the median firm spends about $11 per employee per month, mostly on model subscriptions (`01`, `12`).
- Menlo puts 2025 enterprise generative-AI spend at $37bn. Coding ($4.0bn) and copilots ($7.2bn) dominate it.
- The vertical lines with real dollars are healthcare (about $1.5bn, of which scribes are about $600m), legal ($650m) and government ($350m) (`01`).

**Mid-market companies buy outside help**
- In RSM's 2026 survey, 52% of mid-market firms use outside AI consultants and 52% buy capabilities from outside providers. In 2025, 70% said they needed outside help (`11`).
- MIT NANDA found that builds done with a vendor partner reached deployment about 67% of the time, against 33% for internal builds (`02`).
- In the US Chamber survey, 63% of small-business AI users rely mostly on AI built by other companies (`11`).

**Why projects fail** (`02`, `11`)
- There is no baseline to measure against.
- Data quality: 34–53% cite it in RSM's surveys.
- Integration with legacy systems: 28–47%.
- Skills.
- Tools that never learn the workflow.

The clearest dollar returns MIT found came from replacing an identifiable external bill: outsourced customer-service and document work, outsourced risk checks, and agency spend.

**What owners say they want solved** (`03`, `19`)
- **Home services:** owners name jobsite coordination (48%), customer communication (40%) and quoting (37%) as their biggest time drains. Only 20% reply to a lead within an hour.
- **Dental:** falling reimbursements, rising overhead and staff shortages.
- **Small medical practices:** 88% call repetitive documentation their biggest time-waster.
- **Accountants:** manual data cleanup and chasing client documents, losing about 5 hours a week.
- **Law firms:** capturing inquiries when lawyers are unavailable.

**How small and mid-size companies pay** (`03`, `04`, `05`)
- Software add-ons cost $29–$600 a month per location or per user.
- Boutique agencies sell fixed builds for $3k–$15k, or $25k–$60k for integrated production work, plus retainers of $500–$3k a month.
- The median Upwork rate for AI engineers is $35–$60 an hour.
- Healthcare and freight-audit vendors increasingly charge per transaction or take a share of the money they recover (`15`, `18`, `30`).

### Candidate solutions not already covered

How to read the last two columns:
- **Mid-market buy?** "yes" means a non-tech mid-market company or small business could buy and run it with vendor help. "maybe" means it needs specific volume, data or integration. "no" means only enterprises or governments buy it in practice.
- **Confidence** rates the evidence that buyers pay for it, not the evidence for its ROI.

| # | Name | Problem | Buyer | Industries | Data | ML technique | Action | ROI measured by | Evidence | Price seen | Mid-market buy? | Conf. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Inbound call capture and job booking (AI receptionist or CSR) | Missed and after-hours calls, and slow lead response, lose booked work | Owner, office manager, call-center or dealership BDC lead | Home services, dental, medical, dealerships, restaurants, small law firms | Call audio and transcripts; CRM or field-service records; price book; schedule; service area | Speech recognition plus LLM dialogue; intent and urgency classification; lead qualification | Books into the field-service, practice or dealer system's calendar; transfers emergencies | Answer rate, booking rate, booked revenue, after-hours bookings | `03`, `19` (Avoca: booking rate 70%→90%; Yost & Campbell +20% revenue; Aire Serv after-hours bookings 58→208); `09` (Avoca >$125M raised; Slang $36M B, 2,000+ locations; Mia Labs $20M A, 350+ dealers; Flai $27M A; STELLA $22.1M B; allO €12M A); `04`, `05` | $39–$500+/mo software; dental $299–$1,499 per location/mo; dealer AI-BDC $1k–$5k+/mo; agency build $2k–$15k plus $200–$1.5k/mo | yes | High |
| 2 | Technician dispatch and schedule optimization | Assigning the right technician to each job by skill, location and expected job value | Dispatch or operations manager | HVAC, plumbing, electrical and other field service | Job history; technician skills and conversion; location and drive time; schedule; memberships | Job-value regression plus constrained assignment and routing | Auto-assigns or recommends jobs and resequences the day | Revenue per technician, average ticket, drive time, dispatcher capacity | `13` (ServiceTitan: +14% average ticket, −10% drive time, up to 2× dispatcher efficiency); `09` (Probook $34M A; 2,542 jobs in month one for a 260-technician customer); `31` (ranked 4th; plumbing case +18% completed calls, −27% drive time) | $120–$138 per technician/mo; add-ons $200–$700/mo | yes | High |
| 3 | Maintenance request triage and vendor dispatch | Every resident request becomes a truck roll | Property manager or rental operator | Multifamily, single-family rental, self-storage | Work orders, unit and asset data, resident messages and photos, vendor list and rates, approval limits | LLM troubleshooting; urgency and trade classification; vendor ranking | Resolves the request at intake, de-escalates it, or dispatches a vendor within approval rules | Dispatches avoided, cost per work order, time to resolution | `14` (Latchel: 23% solved at intake, 48% of emergencies de-escalated, about 20% fewer dispatches); `09` (Lula $28M A; Uniti $12M A, 214% ROI for one operator; Boom $15M A); `31` (ranked 6th) | $3–$10 per unit/mo, with a $400/mo minimum at Vendoroo; Lula charges per completed job | yes | High |
| 4 | Freight invoice audit and overcharge recovery (shipper side) | Carriers bill wrong rates, duplicates and unsupported extra charges | CFO, controller, logistics manager | Manufacturing, distribution, retail, consumer goods | Carrier invoices, rate contracts, shipment and TMS records, proof of delivery | Document extraction; matching invoice to shipment to contract; anomaly and rule checks | Short-pays or disputes the invoice; approves clean ones | Recovered or avoided overcharges as % of freight spend (vendors claim 1.5–5%) | `15`; `09` (Freehand $75M B, about 50 enterprise customers, 3–5% of freight spend); `31` (ranked 1st, payback 3–6 months); `08` | Per invoice, subscription, or a share of savings | yes | High |
| 5 | Unbilled accessorial and revenue-leakage detection (carrier side) | Detention and other earned extra charges never reach the invoice | Carrier CFO or billing manager | Trucking, 3PLs, any time-and-materials billing | GPS and telematics dwell times, appointments, contract terms, draft invoices | Event detection; contract-term extraction; rule and anomaly matching | Adds the missing charge to the invoice, with evidence | Revenue recovered, cash collected | `08` (100-truck carrier: €15,400 in month one, 4.2% of revenue, 12× ROI; vendor case, carrier unnamed); `15` | Not established; success fees are common | maybe | Medium |
| 6 | Forecast-driven labor scheduling | Over- and under-staffing against hourly demand | Multi-unit restaurant or retail operator | Restaurants, retail, hospitality | Hourly POS sales, labor and payroll, weather, events | Time-series forecasting plus schedule optimization | Publishes the schedule; cuts or adds shifts during the day | Labor as % of sales, sales per labor hour | `16` (Carrot Express −300 bps payroll across 17 units; Nory customers −18% and −23% labor cost); `09` (Nory $37M B); `31` (ranked 5th) | $79–$149 per location/mo (Lineup.ai) | yes | High |
| 7 | Blueprint quantity takeoff (vision) | Estimators spend hours measuring plans before they can bid | Estimating lead | Construction trades, roofing, landscaping, building-product distribution | Drawing PDFs, aerial imagery, assemblies and catalogs, past bids | Computer vision on drawings and imagery, plus LLM reading of specs | Produces quantities and a priced bid | Hours per takeoff, bids per estimator | `09` (Bobyard $35M A: −65% takeoff time, 3–5× bids; Attentive/Beam $30.5M B, 1,100+ customers; XBuild $19M A; Parspec $20M A); `07`; `03`. A variant of covered automatic quoting, but the input is drawings and imagery | Roofr $0–$349/mo plus $13–$19 per report; others quote | yes | High |
| 8 | Drawing and spec error detection before bid | Coordination errors become change orders and rework | Preconstruction manager, GC, developer | Commercial and multifamily construction | Drawing sets, specs, revisions | Vision plus LLM checks for consistency across sheets and against code rules | Issues RFIs or redesigns before award | Change-order dollars avoided, days saved | `24` (Buildcheck: $622K and 56 days saved on an $80M project; claims 10–35× ROI); `09` (Buildcheck $12M A, 110+ customers); `31` (ranked 11th) | Per project or per sheet | maybe | Medium |
| 9 | Underwriting submission intake and appetite triage | Underwriters can't keep up with broker submissions, so quotes go out slowly | Head of underwriting at an MGA, carrier or wholesaler | Commercial P&C insurance | Broker emails, ACORD forms, schedules of values, loss runs, appetite rules, enrichment data | Document extraction; appetite classification; risk scoring; queue priority | Declines, requests missing information, or routes to an underwriter | Quote turnaround, hit ratio, premium per underwriter | `17` (Sixfold up to +30% premium per underwriter; Pibit −70% turnaround); `09` (Sixfold $30M B; Pibit $7M A; FurtherAI $25M A); `31` (MGA case: 32 min→1 min per submission) | Quote, volume-based | maybe (MGAs yes) | High |
| 10 | Loss-run and policy analysis for agencies | Agencies re-key loss runs to prepare renewals | Independent agency or broker | Insurance distribution | Loss-run PDFs, policies, quotes | Extraction, normalization, summarization | Prepares renewal and remarketing submissions | Intake hours, submission-to-quote time | `17` (Outmarket: −80% intake time, 5–20 days→under 4 hours); `09` (Outmarket $17M A and $34.5M B, 300+ agencies) | Quote | yes | Medium |
| 11 | Prior authorization automation | Staff spend hours per provider each week getting payer approvals | Practice administrator, revenue-cycle director | Specialty practices, imaging centers, health systems | Orders, EHR notes, payer rules, past authorization outcomes | Classifier for "authorization required?"; approval-likelihood model; LLM evidence assembly | Skips unneeded authorizations; submits, tracks and escalates the rest | Minutes per authorization, turnaround, authorization-related denials | `18` (Cohere 9M+ authorizations; CMS estimates about 13 hours per provider per week); `09` (Latent $80M A, 45+ health systems; Ethermed $8.5M A); `31` (ranked 8th) | About $2–$8 per authorization; enterprise quotes | maybe | High (demand) / Medium (small-practice fit) |
| 12 | Autonomous medical coding and charge capture | Manual coding is slow and causes denials and missed charges | Revenue-cycle lead, billing company | Physician groups, radiology, urgent care | Clinical notes, encounters, payer rules | LLM code assignment with confidence thresholds | Finalizes codes; routes exceptions to human coders | Cost per chart, % of charts with no human touch, days to bill, coding denials | `30` (Arintra: coding cost down nearly a third; Nym est. $0.50–$1 per claim); `09` (Arintra $21M A and $25M B: +5.1% revenue, −32% coding cost, −43% coding denials). Distinct from the sketched denials solution because it acts before the claim | Per chart or enterprise | maybe | High |
| 13 | Ambient clinical documentation (scribe) | Clinicians chart after hours | Clinician owner, medical group | Clinics, behavioral health, dental, veterinary | Visit audio, EHR templates | Speech recognition plus LLM summarization | Drafts the note in the EHR for sign-off | Documentation minutes, visits per day | `01` (about $600m market; >50% less documentation time); `03` (MGMA: leading 2025 AI expansion area; Tebra: 88% cite documentation) | $39–$119 per clinician/mo | yes (buy, not build; crowded) | High |
| 14 | Dental radiograph detection and treatment opportunities | X-ray findings go unexplained, so patients don't accept treatment | Dentist owner, DSO | Dental | Radiographs, charting, practice-management data | Computer-vision detection | Shows findings chairside; follows up treatment plans | Case acceptance, diagnosed production | `03` (Pearl $250–$595 per office/mo plus $3,500 setup); `25` (Overjet est. $1k–$3k/mo) | $250–$3,000 per office/mo | yes (buy) | Medium |
| 15 | Insurance eligibility and benefits verification | Front desks spend 8–20 hours a week checking coverage | Office manager, practice owner | Dental, medical, physical therapy | Schedule, insurance cards, payer portal and eligibility responses | Extraction, rules, LLM interpretation of benefits | Verifies coverage before the visit; produces the patient's cost estimate | Staff hours, eligibility denials | `25` (Zuub about $299–$799/mo; category claims of 12–15 hours a week saved, up to −70% denials) | $100–$800 per location/mo | yes | Medium |
| 16 | Personal-injury medical chronology and demand drafting | Paralegals spend days turning records into a demand package | PI firm owner | Plaintiff personal injury, mass tort | Medical records and bills, case facts, past settlements | LLM extraction and timelines; settlement-value models | Sends the demand; sets the settlement ask | Hours per demand, cases per paralegal | `20` (EvenUp 2,000+ firms, up to −75% desk time); `09` (Supio $60M B; Eve $103M B, 450+ firms; Tavrn $15M A, about 6× ROI); `31` (ranked 9th) | Per case, or $150–$400 per user/mo (unverified) | yes | High |
| 17 | Legal intake qualification and consult booking | Good cases go to the firm that answers first | Managing partner, intake manager | PI, family, immigration, small general-practice firms | Call and form transcripts, acceptance criteria, past case outcomes | LLM conversation plus case-merit classification | Accepts, refers or declines; books the consult | Signed cases per inquiry, cost per signed case | `03` (27% of solo-lawyer AI users use virtual receptionists; Clio Grow AI charges per lead converted to a client); `09` (Finch $20M A: paralegals handle 300–400 cases vs about 100) | $0–$500+/mo; $130 per user/mo; outcome-based | yes | Medium |
| 18 | Tax-return preparation and client document intake | Tax-season capacity is capped by data entry and chasing documents | CPA or tax-firm owner | Accounting and tax firms | Source documents (W-2, 1099, K-1), prior returns, tax software | Document classification and extraction; mapping to return lines | Pre-fills the return for review; requests missing documents automatically | Returns per preparer, minutes per return | `23` (Black Ore claims up to −98% prep time; Soraban 15–60 minutes saved per return, $1k–$4.5k onboarding); `09` (Accrual $75M A; Soraban 300+ firms; Basis $100M B) | Per-return credits; quote | yes | High |
| 19 | Month-end close, reconciliation and variance explanation | Close takes days of manual matching and commentary | Controller, CFO | Any mid-market company; CPA client-accounting practices | General ledger, subledgers, bank feeds | Transaction matching, anomaly detection, LLM variance narratives | Auto-reconciles; proposes journal entries; drafts variance explanations | Days to close, hours per close | `09` (Numeric $51M B; Stacks $23M A, Nivoda −8 days of close); `01` (BCG: median finance-AI ROI 10%) | Quote | maybe | Medium |
| 20 | Emailed purchase order to ERP sales order | Reps re-key PDF and email orders into the ERP | VP operations or customer service | Wholesale distribution, manufacturing | Order emails and attachments, customer and item masters, price lists | Extraction; fuzzy matching of items and customers; price validation | Creates the ERP sales order; routes exceptions | Touchless rate, minutes per order, order errors | `27` (Conexiom claims 85–87% touchless, −50% errors); `31` (ranked 3rd; Delicato 15→5–6 minutes per order, deployed in 11 weeks). A revenue-side variant of the sketched document automation | By order volume; quote | yes | Medium |
| 21 | Visual quality inspection on the line | Manual inspection misses defects | Plant or quality manager | Discrete manufacturing, packaging, food, electronics | Images of good and bad parts, reject signals, PLC link | Few-shot classification and anomaly detection | Rejects or diverts the part; flags defect trends | Escape rate, scrap, inspector hours, yield | `21` (Overview.ai 99.6% vs 84% for the best inspector; Elementary +27% yield); `09` (SixSense $8.5M A); `31` (ranked 10th: 3–6 months to reach production) | Hardware plus project fee plus software; quote | maybe | Medium |
| 22 | Early detection of field-quality and warranty issues | Product failures show up months late in warranty and service data | VP quality, warranty manager | Industrial equipment, HVAC, appliances, vehicles | Warranty claims, service notes, fault codes, returns, production lots, supplier data | NLP clustering, trend and anomaly detection, root-cause correlation | Opens an investigation; contains lots; charges back suppliers | Warranty cost as % of sales, time to fix | `32` (Axion: $500K avoided on one issue; HVAC supplier $10M+ in 5 months; SharkNinja $8M; SAS: Volvo/Mack −4–6% warranty cost); `09` (Axion $37M B) | Quote; entry warranty tools about $549/mo | maybe | Medium |
| 23 | Commercial HVAC energy optimization | HVAC runs on fixed schedules | Facilities director, multi-site owner | Retail chains, offices, schools, hotels | Building-automation points, meters, weather, tariffs | Reinforcement learning or model-predictive control | Writes setpoints back to the building controls | Weather-normalized kWh and $ saved | `22` (BrainBox: Dollar Tree 600 sites, about 8M kWh and >$1M a year); `31` (ranked 12th: payback under 1 year to 5 years) | About $0.25/sq ft/yr | maybe | Medium |
| 24 | Delivery and service route optimization | Fuel, overtime and empty miles | Fleet or logistics manager | Distribution, regional carriers, field service | Stops, time windows, capacity, GPS, traffic | Vehicle-routing optimization plus ML travel-time prediction | Publishes routes; matches backhauls | Fuel, overtime, on-time delivery | `08` (unnamed fleets: −25–30% fuel; $2M a year); mature category, more operations research than ML | Not established | yes | Medium |
| 25 | Freight dispatch and carrier communications | Hours spent on carrier calls and check-calls | Broker or carrier operations lead | Brokerage, trucking, 3PL | TMS and load board data, carrier profiles, call audio, rate history | Voice AI plus LLM negotiation within rate bounds; carrier matching | Books the carrier; updates tracking | Loads per rep, cost per load | `09` (HappyRobot $44M B, 70+ enterprise customers; Cargofy $11M A, 2,000 customers, >$10M ARR; Alvys $40M B, +28% monthly loads) | Not established | yes | High |
| 26 | Dealership follow-up on declined repairs | Declined repairs and lapsed service customers never get a follow-up | Fixed-ops director | Dealers, repair shops | Dealer-system repair orders, declined lines, mileage, contacts | Propensity scoring plus LLM outreach | Books the service appointment | Incremental repair orders and fixed-ops revenue | `33` (Numa: 211 extra repair orders in month one; $1.5M for a group; Podium/Madera Chevrolet $348K). Close to covered next-best-action and outbound | About $1k–$1.5k per agent/mo | yes | Medium |
| 27 | Automated building-permit plan review | Permit backlogs; first submittals fail | City or county building department | Local government | Plan sets, codes, past review comments | Vision plus LLM checks against code rules | Returns correction lists before staff review | Review time, first-round acceptance, resubmittals | `28` (Austin–Archistar about $1.1M a year, ~50% less review time; Denver–CivCheck $4.6M over 5 years, proposed; Naples–Blitz $514K, −85% resubmissions); `06` | $0.5M–$1.1M per year per city | no | Medium |
| 28 | Staffing candidate matching and screening | Searching and screening for each requisition eats recruiter time | Staffing-agency owner | Staffing agencies, high-volume hourly hiring | ATS records, job orders, placement history | Semantic matching and ranking; conversational screening | Shortlists and submits candidates; books interviews | Fill rate, placements per recruiter, time to fill | `26` (Bullhorn: +22% fill rate, +24% placements per recruiter; Paradox/Chipotle 12→4 days) | $99–$165 per user/mo; Paradox $1k+/mo | yes | Medium |
| 29 | Review generation and response | Local businesses need a steady flow of reviews and replies | Owner, marketing lead | Any local business | Completed-job records, contacts, review text | LLM replies plus sentiment classification | Requests reviews; replies to them; escalates unhappy customers | Review count and rating, local search rank | `03` (NiceJob $75–$125/mo; 89% of consumers expect owners to reply) | $75–$125/mo | yes | Medium (little ML) |

#### Seen but not added

- **Denied-claim recovery.** Amperos raised a $16M Series A and says it recovers about $700M a year (`09`). This is already sketched as healthcare denials.
- **Industrial RFQ and quoting for job shops.** Atira, Uptool and CloudNC's Quote Agent (`10`) are variants of the covered automatic quoting. Still worth noting: job-shop quoting is drawing seed and Series A money.
- **Reactivating dormant leads** (`04`). A variant of covered automated outbound.
- **Sales-tax compliance.** Numeral raised a $100M Series C and serves 3,500+ businesses, but the product is mainly a rules engine.
- **Government contact centers, identity-fraud checks and records redaction** (`06`). Procurement is real, but the evidence is lists of use cases, not priced awards.
- **Collision and restoration damage estimating** (`29`). No verifiable customer results or prices for independent shops surfaced.

### Strongest candidates

1. **Inbound call capture and booking (row 1).** This is the clearest small-business demand signal in the research. Owners rank customer communication as a top time drain, and only 20% answer a lead within an hour. Funding rounds repeat across verticals: Avoca, Slang, Mia Labs, Flai, STELLA and allO. Booked jobs give a direct revenue counter. The risks are crowding and the field-service platforms building it in (Jobber, Housecall Pro, ServiceTitan). A builder's edge would be vertical integration and booking rules, not the voice itself.
2. **Freight audit and recovery (rows 4–5).** Query `31` ranked it first for ROI within six months, because the return is recovered cash and the vendor can charge a share of it. Freehand's $75M round supports the demand. The carrier-side version, which finds unbilled detention and other extra charges, is less served. It also matches MIT's finding that the clearest returns come from stopping an identifiable leak.
3. **Technician dispatch (row 2).** This is a real ML decision: job value, technician fit and drive time. Per-technician pricing is published at $120–$138 a month, and Probook raised a $34M Series A.
4. **Forecast-driven labor scheduling (row 6).** Labor is the largest cost an operator controls. Prices are transparent ($79–$149 per location a month), there are savings reported by named customers, and Nory raised a $37M Series B. It builds on demand forecasting, but the deliverable, the schedule, is different.
5. **Maintenance triage and vendor dispatch (row 3).** It charges $3–$10 per unit, several companies are funded, and "dispatches avoided" is a clean metric. It suits mid-size property managers.
6. **Underwriting submission triage and loss-run analysis (rows 9–10).** These are heavily funded, and Outmarket raised two rounds in 2026. The metrics are clear: turnaround, hit ratio, and premium per underwriter. MGAs are mid-market non-tech buyers; smaller agencies are better served by the narrower loss-run product.
7. **Prior authorization and autonomous coding (rows 11–12).** These had the largest rounds in this angle (Latent $80M, Arintra twice) and per-transaction pricing. Integration with EHRs and payers is the cost.
8. **Sales-order entry for distributors (row 20).** Distribution is a large, under-served mid-market. The problem is universal and the KPI is per order; `31` ranks it third. It sits on the revenue side of the sketched document automation, which makes it easier to justify.
9. **PI chronology and demand drafting (row 16).** Strong proof that small firms pay per case: EvenUp has 2,000+ firms, Eve raised $103M and Supio $60M. But it is crowded and hard to enter.
10. **Field-quality and warranty early detection (row 22).** Fewer buyers, but large documented outcomes (Axion; SAS with Volvo and Mack). It uses data that mid-size manufacturers already hold. A good custom-build candidate where vertical software has not reached the mid-market.

### Caveats

- Nearly all outcome numbers are published by vendors, and many customers are unnamed. Treat them as evidence that buyers pay, not as expected ROI.
- The answer to query 07 was thin, so the deep-research query 09 carries the funding evidence. It covers rounds up to 6 October 2026, as the companies announced them.

---

## Appendix B — engineering angle: what AI and ML engineers build in production

*(The engineering-angle findings table as written by the research pass. File numbers refer to [`../evidence/16-ai-solutions-web-research-2026-10-09/engineering/`](../evidence/16-ai-solutions-web-research-2026-10-09/engineering/); original title: “Findings: what AI and ML engineers actually build in production”.)*

**Angle:** this is the practitioner side. Sources are the ML system-design collections (Evidently, Chip Huyen), company engineering blogs, company-sponsored Kaggle competitions, MLOps and optimization vendor case studies, the 2024–2026 LLM and agent production write-ups (the ZenML LLMOps database and company blogs), and the freelance, consulting and job market.

**Method:** I made 41 Perplexity calls. Three `perplexity_research` calls hit a 429 rate limit and returned nothing; they were re-run later as calls 01 and 02. The 38 calls that succeeded are saved verbatim as `01`–`38` in this folder:

- 9 `perplexity_research`
- 27 `perplexity_ask`
- 1 `perplexity_search`
- 1 `perplexity_reason`

Every evidence cell below cites a file number. The URLs are in that file's citation list.

**How to read the evidence.** Most of the quantified results are published by vendors or by the customers themselves. None are independent audits. The confidence column takes this into account:

- **High:** several named deployments, plus repeated demand signals.
- **Medium:** named deployments, but the evidence is thin or comes mostly from vendors.
- **Low:** plausible, but the evidence is sparse, or it comes from big tech only.

### 1. What the practitioner sources show

1. **The decisions behind a transaction matter more than the screen the user sees.** The Evidently database holds 805 applications from 185 companies (file 01). Search and recommendations make up about a quarter of it. The rest is mostly operational inputs:
   - ETAs and delivery dates;
   - dispatch;
   - address correction;
   - catalog enrichment;
   - image and listing quality;
   - supply positioning.

   Mid-market companies rarely build the consumer-facing ranking. The operational systems do transfer to them.
2. **Most ML in the gig-economy blogs predicts a value and then optimizes over it** (files 05, 06):
   - DoorDash dispatch uses prep-time, travel-time and acceptance models, then a mixed-integer program.
   - Uber Tarot uses uplift scores, then a knapsack solver.
   - Lyft's driver repositioning uses response models, then convex optimization.

   The prediction alone is rarely the product. In operations, **forecast → optimizer → action** is the standard pattern.
3. **The LLM work that pays off is turning unstructured input into a system record.** The 2025–2026 job postings and freelance briefs (file 34) rarely ask for "a chatbot". They ask for something that takes an email, call, PDF or image and produces a record in a CRM, EHR, ERP, TMS or accounting system, with exceptions routed to a person. The most frequent asks:
   - AI receptionist that books appointments;
   - lead intake and routing;
   - accounts-payable processing;
   - supplier RFQ extraction;
   - email-to-freight-quote;
   - insurance submission intake;
   - prior authorization;
   - catalog enrichment;
   - forecasting tied to purchase orders.
4. **Internal agents show the largest named, measured results.** Examples (file 02):

   | Company | Result |
   |---|---|
   | Grab | Account-takeover investigations cut from 23 minutes to 3 |
   | Grab | Self-service analytics: 50% → 81% of SQL requests answered without a person |
   | Spotify | More than 1,500 merged migration PRs |
   | Uber | Invoice extraction: 70% less handling time |
   | Stripe | Compliance reviews: 26% less handling time |

   These are big-tech internal tools. The mid-market versions are invoice and order processing, plus analytics agents.
5. **Kaggle shows the classic tabular decision problems** (files 03, 24):
   - forecasting (Rossmann, Favorita, M5);
   - insurance risk and claims (Allstate, Porto Seguro, Prudential);
   - credit (Home Credit, AmEx);
   - recommendation (Santander, H&M, OTTO);
   - ad CTR (Criteo, Avazu);
   - manufacturing quality (Bosch line failure prediction, Severstal defect detection, Mercedes test-bench time);
   - procurement price prediction (Caterpillar tube pricing);
   - valuation (Zillow, Mercari);
   - energy (ASHRAE, Enefit prosumer balancing).

   Since 2022, the company-sponsored competitions are mostly trading firms (Optiver, Jane Street, Mitsui) and education. The new business-problem signal there is weak.
6. **Consultancy and freelance demand, ranked** (file 04, an estimate rather than a census):
   1. LLM workflow integration
   2. RAG assistants
   3. Document extraction
   4. Classical predictive ML
   5. MLOps
   6. Agents
   7. Computer vision
   8. Recommendation
   9. Pricing
   10. Routing and scheduling
   11. Voice

   Operations-research work is underrepresented in freelance marketplaces. The ROI evidence for it is among the strongest, though (file 05: Discher, Vera Bradley, Seco).

### 2. Each technique mapped to the business solutions it powers

| Technique | Business solutions it powers (★ = candidate in §3; *covered* = already in our catalogue) |
|---|---|
| **Tabular prediction** | ★ Delivery-date promise · ★ cash-flow forecasting · ★ fit and size recommendation to cut returns · ★ spot freight rate prediction · item availability / out-of-stock prediction · *covered:* churn, lead scoring, CLV, collections, claims, credit |
| **Forecasting** | ★ Labor demand forecast feeding shift scheduling · ★ energy load and peak forecast for demand charges · *covered:* demand forecasting, replenishment |
| **Optimization / OR** | ★ Shift rostering · ★ field-technician scheduling · ★ delivery routing and dispatch · ★ least-cost blend / recipe · ★ production scheduling and changeovers · ★ warehouse slotting and pick batching · ★ marketing budget allocation · markdown / clearance (variant of pricing) · network design |
| **Recommendation and ranking** | ★ B2B site search and attribute-driven discovery · out-of-stock substitution · ad bid / ROAS control · creative selection for paid acquisition · *covered:* next-best-action |
| **Computer vision** | ★ Visual quality inspection · ★ retail shelf execution for CPG · ★ PPE and safety zones · ★ construction progress tracking · ★ kitchen food-waste tracking · ★ drone inventory and stockpile measurement · yard / gate recognition · photo damage estimation (*covered* under claims) |
| **NLP and document AI** | ★ PO-to-ERP order entry · ★ supplier RFQ comparison · ★ email-to-freight-quote · ★ catalog attribute enrichment · ★ insurance submission intake · ★ prior-authorization packets · ★ construction takeoff from drawings · ★ healthcare charge capture · ★ call-to-CRM notes · ★ contact-center auto-QA · *covered / sketched:* AP, contracts, KYC, ticket triage |
| **LLM / RAG and agents** | ★ Voice receptionist that books appointments · ★ RFP and security-questionnaire drafting · ★ self-service analytics (text-to-SQL) agent · ★ legacy code and test migration agents · internal knowledge / on-call copilot (overlaps AIOps, *sketched*) · SOP-driven investigation agents (overlaps fraud, *covered*) |
| **Graph and entity resolution** | ★ Customer and supplier master-data matching / householding · fraud rings (*covered*) · catalog product matching |
| **Causal / uplift** | ★ Marketing mix modeling · ★ trade-promotion post-event analysis and deduction recovery · uplift-targeted promotions (variant of next-best-action) · localization and content incrementality |
| **Simulation / digital twin** | ★ Warehouse and plant capacity what-if · marketplace simulators (big tech only) |
| **Anomaly detection / reconciliation** | ★ Freight invoice audit · ★ AP duplicate-payment and recovery audit · ★ B2B contract-to-invoice leakage · ★ utility non-technical loss · telecom revenue assurance · process setpoint / raw-material optimization (prediction plus optimization) · *covered:* KPI anomaly, fraud |

### 3. Candidate solutions not already covered

"Mid-mkt?" asks whether a non-tech mid-market company could buy it (yes / maybe / no). "Conf." is the confidence rating.

| # | Name | Problem (one line) | Typical buyer | Industries | Data needed | ML technique | Business action | ROI measured by | Evidence (files; the URLs are in each file) | Mid-mkt? | Conf. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **PO-to-ERP sales order automation** | Customer purchase orders arrive as email, PDF or fax and are keyed in by hand | VP customer service / order-to-cash, COO | Distribution, manufacturing, medical supply | Inbound order emails and attachments, customer and SKU master, price lists, ERP order history | Document AI / LLM extraction, SKU and customer matching, confidence routing | Create the sales order in the ERP; send exceptions to a CSR | Share of orders with no manual touch, minutes per order, error rate, orders per CSR | 30 (MCR Safety: 91% touchless, <1 hr vs 12–24 hr, errors 75→28/month; allnex: 70% automation); 37 (ranked #2) | Yes | High |
| 2 | **Freight invoice audit and carrier overbilling recovery** | Carriers overbill on rates, fuel, accessorials, weights and duplicates | CFO, logistics / transportation director | Manufacturing, distribution, retail, 3PL | Carrier invoices, tariffs and contracts, BOLs, shipment weights, tracking | Extraction plus rate-rule checks plus anomaly detection | Short-pay or dispute the invoice; recover the overcharge | Dollars recovered or prevented, % of freight spend | 11 (Intelligent Audit: $1.9M; Loop: 6% transport savings); 37 (ranked #1) | Yes | High |
| 3 | **AP duplicate-payment and recovery audit** (variant of the sketched AP automation) | Duplicate payments, missed credits and vendor overcharges leak cash after the invoice is approved | Controller, internal audit | All industries with high AP volume | AP invoices and payments, POs, receipts, vendor master, vendor statements | Anomaly detection, fuzzy matching across systems | Block the payment before release, or claw it back | Dollars prevented or recovered | 11 (International Paper: $62.2M prevented plus recovered) | Yes | Medium |
| 4 | **Labor demand forecast plus automated shift scheduling** | Store, branch and contact-center staffing does not match demand by hour | COO, VP operations, WFM lead | Retail, restaurants, bakeries, grocery, contact centers, airports | POS / transaction history, traffic, employee availability, skills, labor rules | Time-series forecast plus MIP / constraint-programming rostering | Publish schedules; adjust during the day | Labor cost as % of sales, overtime, understaffed intervals, manager hours | 05 (Discher bakery: −4% staff cost; Vera Bradley: $1M; Swissport: >$1M/yr); 18 (Legion TEI: −6–7% hours, forecast 87→96%); 37 (#3) | Yes | High |
| 5 | **Field-technician scheduling and routing** | Dispatchers hand-assign jobs, so technicians drive too far and urgent work waits | VP service, dispatch manager | HVAC, refrigeration, pest control, elevators, utilities contractors | Job locations and time windows, skills, technician calendars, SLAs, FSM history | VRP with time windows, skill matching, dynamic re-optimization | Assign and sequence appointments; re-plan around emergencies | Miles per job, jobs per tech per day, overtime, on-time arrival | 05 (Seco Kältetechnik, ~250 staff: −52% miles per order); 19 (benchmarks, mostly from vendors); 37 (#5) | Yes | Medium |
| 6 | **Delivery fleet route optimization and dispatch** | Regional delivery routes are planned by hand, with empty miles and missed windows | Logistics / fleet manager | Food and beverage distribution, building materials, wholesale, 3PL | Orders, addresses, vehicle capacities, driver hours, time windows | VRP / pickup-and-delivery solvers | Build daily routes and loads; dispatch | Miles, fuel, stops per route, empty trips, on-time rate | 05 (Traxión: −40% empty trips, $5M/yr; Oico in production in 1 week; Walmart: $75M); 19 (Hardie's Fresh Foods: −20% mileage) | Yes | High |
| 7 | **ML delivery-date promise at checkout** | Delivery dates that are vague or padded cost conversions and create WISMO ("where is my order") contacts | Head of e-commerce, VP ops | E-commerce, omnichannel retail, B2B webshops | Order, fulfillment, inventory and carrier scan history | Quantile gradient boosting (CatBoost), multi-task deep ETA models | Show a calibrated delivery date on product pages and at checkout | A/B conversion lift, promise accuracy, WISMO per order | 08 (Wayfair: promise gap halved); 20 (Narvar / Harry Rosen: +13% conversion, −16% WISMO; IWA: −47% WISMO); 01, 06 (DoorDash, Uber, Swiggy ETAs) | Yes (e-commerce); maybe (B2B) | High |
| 8 | **Product catalog attribute extraction and enrichment** | Supplier spec sheets and spreadsheets never become complete, filterable product data | VP e-commerce / merchandising, PIM owner | Distribution, wholesale, retail, grocery, CPG | Supplier files, PDFs, images, existing catalog, taxonomy | Multimodal LLM extraction, taxonomy classification, duplicate matching, human review | Publish enriched SKUs to the webshop, PIM and marketplaces | Time to list a SKU, attribute coverage and accuracy, zero-result searches, conversion | 01 (Instacart PARSE, Walmart PAE, Coupang, Delivery Hero); 06 (Instacart: +10% recall); 15 (Kerry / Salsify: 1 day vs 2–3 days per launch; Walmart: 850M data points); 34 (freelance briefs) | Yes | High |
| 9 | **B2B site search relevance and attribute-driven discovery** | Distributor buyers search by part number and spec, get zero results, and phone in the order instead | Head of digital commerce | Industrial / electrical / foodservice distribution | Search logs, clicks, orders, enriched catalog | Learning-to-rank, hybrid / semantic retrieval, query understanding | Rerank results; suggest substitutes and add-ons | Null-search rate, search conversion, revenue per search | 27 (RS Group: −47% null searches, +3.2% search conversion); 06 (Instacart, DoorDash, Uber search); 37 (#14) | Maybe | Medium |
| 10 | **Supplier RFQ extraction and quote comparison** | Buyers re-key quotes from emails and PDFs before they can compare suppliers | Procurement / purchasing manager | Manufacturing, distribution, construction | Outbound RFQs, supplier quote emails / PDFs / spreadsheets, item master | LLM extraction and normalization; optimization for awards | Present normalized offers; draft the award or counteroffer | Buyer hours per RFQ, cycle time, landed-cost savings | 34 (Toptal: a $4M-revenue supply-chain firm, RFQ accuracy to 96%); 35 (Keelvar: $60M cost avoidance; Fairmarkit claims); 37 (#4) | Yes | Medium |
| 11 | **Email-to-freight-quote and spot rate pricing** | Brokers answer quote requests slowly and price lanes by gut feel | Freight broker owner / VP brokerage | Freight brokerage, 3PL | Quote emails, lane history, market rate feeds, carrier base | LLM extraction plus gradient-boosted rate prediction | Send the quote; set the sell price; match a carrier | Quote response time, quotes per rep, load count, margin per load | 34 (solo-broker and 3PL briefs); 35 (Southland / Greenscreens: +21% loads in month 1; WorldWide / Vooma: −95% response time) | Yes | Medium |
| 12 | **AI voice receptionist that books appointments** | Missed and after-hours calls lose jobs and patients | Owner / GM, practice manager | Home services, dental / medical clinics, auto repair, property management, restaurants, insurance agencies | Calendar / FSM / EHR availability, booking rules, call recordings, CRM | Speech LLM agent with tool calls to the booking system | Book, reschedule or transfer; log the call to the CRM | Booked jobs from captured calls, booking rate, cost per call | 16 (ServiceTitan / Bill Joplin's: >90% booked, 72% handled without a person; Avoca customers: 85–90% booking, +20% revenue); 02 (TripleTen, Matic Insurance, UnityAI); 34 (rated "very high" frequency in briefs) | Yes | High |
| 13 | **Contact-center auto-QA (100% call scoring)** | Manual QA samples only 1–5% of calls, so compliance and coaching gaps go unseen | Contact-center director, compliance | Insurance, healthcare, financial services, collections, retail support | Call recordings / transcripts, QA scorecards | ASR plus LLM rubric scoring, calibrated against human graders | Flag violations; build agent coaching queues | QA coverage, cost per review, compliance incidents, AHT | 17 (Observe.AI claims; insurance case: −67% AHT for new agents; another case: −30% compliance incidents); 34 (Tribe AI / GoTo); 37 (#7) | Yes (if call volume is high) | Medium |
| 14 | **Sales-call-to-CRM capture** | Reps don't log call outcomes, so pipeline data and follow-ups decay | VP sales, RevOps | B2B services, agencies, insurance, real estate | Call recordings, CRM | ASR plus LLM summarization and field extraction | Write notes, next steps and tasks into the CRM | Logging completeness, follow-up rate, rep time saved | 34 ("high" frequency; HubSpot / Salesforce briefs) | Yes | Medium |
| 15 | **RFP and security-questionnaire drafting** | Every RFP costs 15–25 hours of re-answering the same questions | Proposal manager, CISO, sales ops | B2B software, services, utilities suppliers, healthcare suppliers | Past answers, product and security docs | RAG with source-linked drafting and human approval | Produce a first draft; flag answers that are missing or low-confidence | Hours per RFP, RFPs answered per year, win rate | 21 (AutoRFP: a utility went from 14 to 29 RFPs/yr; Cubiko: −85% questionnaire time); 34; 37 (#6) | Yes | Medium |
| 16 | **Insurance submission intake for brokers / MGAs** | Broker submission packs are read and keyed in by hand before an underwriter can quote | Head of underwriting ops, agency principal | Commercial P&C brokers, MGAs, benefits advisers | Submission emails, ACORD forms, loss runs, appetite rules | Document AI, LLM extraction, appetite classification | Pre-fill the quote file; flag missing items and fit with appetite | Time to quote, submissions per underwriter, quote ratio | 34 ("high" frequency; YC jobs and Upwork briefs); 12 (Quantexa insurer: policy issuance from weeks to hours, 75% automated) | Yes | Medium |
| 17 | **Prior-authorization packet preparation** (pre-service variant of the sketched denials work) | Staff hunt through the chart to build a medical-necessity packet for each payer | Revenue-cycle / practice ops leader | Specialty clinics, imaging, home health, hospitals | EHR notes, labs, payer criteria | LLM evidence extraction and criteria matching | Draft and submit the packet; track and appeal | Turnaround days, approval rate, staff hours | 34 (Upwork and YC briefs; Quantiphi) | Maybe | Low |
| 18 | **Healthcare charge capture / prebill coding review** | Care that was delivered and documented is never charged or coded | Revenue-integrity director, CFO | Hospitals, health systems, ASCs | Clinical notes, orders, existing charges and codes | Clinical NLP plus coder-review queue | Add the missed charge or code before billing | Recovered revenue | 11 (R1: $9M over 2 years; McLaren / SmarterDx: $11.3M annualized) | Maybe | Medium |
| 19 | **B2B contract-to-invoice leakage detection** | Services delivered under complex contracts go unbilled or are billed wrong | CFO, billing operations | B2B services, facilities, staffing, logistics, SaaS | Contracts, service logs, invoices | LLM contract-term extraction plus reconciliation and anomaly detection | Issue catch-up invoices; fix billing rules | Leakage identified and then recovered | 11 (QuantSpark: $3.5M potential at an airport-services operator); 34 (contractor receivables brief) | Yes | Medium |
| 20 | **Visual quality inspection** | Manual inspection misses defects or slows the line | Plant manager, quality director | Discrete manufacturing, packaging, textiles, electronics, food | Line cameras, labeled good / bad images, MES rejects | CNN / edge learning, anomaly detection | Reject or divert the unit; alert on drift; trigger root cause | Defect escapes, false rejects, scrap and rework, inspector hours | 10 (Federal Package: 100% inspected, >99% caught; Toast / Instrumental: 5.3× ROI); 03 (Severstal, Bosch); 34 (textile 12-camera brief) | Yes | Medium |
| 21 | **Retail shelf execution for CPG field teams** | Brands cannot see out-of-stocks, facings or planogram compliance across stores | VP sales / retail execution at a CPG brand | CPG, beverage, snacks | Rep shelf photos, SKU images, planograms | Object detection and SKU recognition | Send reps to fix gaps; set per-store tasks | Distribution points, OOS rate, sales growth in compliant outlets | 10 (GoGo SqueeZ / Trax: +11% distribution points, outlets grew 3× faster) | Maybe | Medium |
| 22 | **CV safety / PPE and danger-zone monitoring** | Safety violations surface only after an incident happens | EHS director | Manufacturing, construction, warehousing, agri-processing | Existing CCTV, site rules | Object detection, zone rules, human review | Alert and coach supervisors; trend hazards | Violations per shift, incident rate | 10 (Alliad / viAct: −41.7% PPE non-compliance; AB Agri / Protex: −99%) | Yes | Medium |
| 23 | **Construction progress tracking from site imagery** | Progress against plan is checked by site visits, so payments and re-plans lag | Specialty contractor / GC operations | Construction | 360° site captures, plans, schedule, takeoffs | Image classification mapped to the BIM / plan | Re-assign crews; substantiate pay applications | Hours of site visits saved, schedule variance, pay-app cycle | 10 (RG Construction / OpenSpace: ≥40 hrs/month saved) | Maybe | Low |
| 24 | **AI construction takeoff and estimating** | Estimators spend days per bid measuring drawings | Chief estimator at a GC or subcontractor | Construction (GCs, flooring, drywall, painting) | Plan PDFs, specifications, past bids | Vision segmentation of drawings plus LLM scope extraction | Produce quantities and scope; submit more bids | Hours per takeoff, bids per estimator, win rate | 36 (Kansas study: −70–76% takeoff time; Coastal Construction: ~14,000 hrs in year 1); 34 (GC brief); 37 (#12) | Yes | Medium |
| 25 | **Kitchen food-waste CV tracking** | Kitchens cannot see what they throw away | F&B director, executive chef | Hotels, contract catering, hospitals, restaurants | Bin camera plus scale | Food image classification plus weights | Change batch sizes, portions and purchasing | Waste kg, food cost | 10 (Hilton Rotterdam / Winnow: −25% waste, €16k/yr) | Yes | Medium |
| 26 | **Drone / CV inventory counting and stockpile measurement** | Cycle counts and stockpile surveys are slow, so book and physical stock disagree | DC / quarry / plant operations | 3PL, cold storage, aggregates, mining | Drone imagery, WMS expected quantities, survey control | CV counting, photogrammetry | Reconcile inventory; correct WMS locations | Count labor, variance, write-downs | 10 (Taylor Logistics: 87% more efficient than manual counting; Boral: survey data in 24 hrs vs 2–3 months) | Maybe | Low |
| 27 | **Least-cost blend / recipe formulation** | Recipes use costlier inputs than the spec requires | Plant / R&D / procurement lead | Animal feed, chemicals, metals, food, aggregates | Recipes, ingredient specs and prices, constraints | LP / MIP; Bayesian optimization for new formulations | Reformulate each batch to the cheapest feasible mix | Raw-material cost per unit, on-spec rate | 05 (metallurgical producer: ~$1.5M/yr estimated); 26 (Format Solutions, Citrine, Tata Steel); 32 (Gerdau / Fero: $3/t, 500k lb alloy avoided) | Maybe | Medium |
| 28 | **Production scheduling and changeover sequencing** | Line schedules built in spreadsheets cause backlog and changeover waste | Plant scheduler, VP manufacturing | Discrete and process manufacturing, bakeries, CPG | Orders, routings, line capacities, changeover matrix | MIP / constraint programming | Publish the line schedule; re-plan daily | Backlog, fill rate, changeover hours, OTIF | 05 (Lenovo: −20% backlog, scheduling 6 hrs → 30 min; PepsiCo: 400–500 runs/day); 03 (Mercedes test-bench time) | Maybe | Medium |
| 29 | **Warehouse slotting, pick batching and labor standards** | Pickers walk too far and labor is not measured against standards | DC manager, 3PL ops | 3PL, distribution, e-commerce fulfillment | WMS orders and locations, SKU velocity, labor scans | Slotting optimization, batching heuristics, productivity models | Re-slot SKUs; batch orders; set incentive standards | Travel distance, lines per hour, cost per line | 28 (Lucas Systems: 30–70% less travel; Easy Metrics / C.H. Robinson: $450k; Dock High: +50%); 13 (Intel / AnyLogic: +30% productivity) | Maybe | Medium |
| 30 | **Marketing mix modeling and budget allocation** | Mid-size advertisers cannot see the incremental return of each channel | CMO, performance-marketing lead | Consumer brands, insurance, multi-location services, e-commerce | 2–3 years of weekly spend by channel, sales, promotions | Bayesian MMM (Meridian, PyMC, Robyn) plus a response-curve optimizer | Reallocate spend across channels and weeks | Media ROI, CPL / CPA, validated with geo or holdout tests | 09 (Nürnberger: −27% cost per lead; Meridian: +14% media-driven revenue); 05 (Marketing Attribution / Gurobi: +13% media ROI per year); 34 (Aimpoint, >50-gym chain) | Maybe (≥ ~$1M ad spend) | Medium |
| 31 | **Trade-promotion post-event analysis and deduction recovery** | CPG brands cannot tell which retailer promotions paid off, and they lose money to invalid deductions | CPG finance / sales ops | Emerging and mid-size CPG brands | Retailer POS, trade calendar, deductions and remittances | Baseline / lift models (causal), deduction matching and anomaly detection | Cut losing promotions; dispute invalid deductions | Promo ROI, deductions recovered | 38 (Health-Ade: $700k recovered; Perfect Snacks: forecast +23%); 34 (Mu Sigma, Tiger Analytics) | Yes | Medium |
| 32 | **Uplift-targeted promotions and incentive budgets** (variant of NBA) | Blanket coupons subsidize customers who would have bought anyway | CMO / CRM lead | Delivery, retail, subscriptions, telco | Randomized holdout campaigns, customer features | CATE meta-learners / uplift trees plus a budget knapsack | Send offers only where the incremental margin exceeds the cost | Incremental margin against a holdout, promo cost | 06 (DoorDash: −33% promo cost; Uber Tarot); 07 (Uber CausalML: 30% targeted for the same lift) | Maybe (needs an experimentation habit) | Medium |
| 33 | **Cash-flow forecasting and liquidity** | Treasury forecasts in spreadsheets, so it holds idle cash or borrows needlessly | CFO, treasurer | Mid-size and large corporates | Bank feeds, AR / AP ledgers, ERP orders | Time-series ML on AR and AP behavior | Set borrowing and investment; time payments | Forecast accuracy, interest saved, DSO | 22 (Konica Minolta: $400k interest, $30M working capital freed; Cenveo / Kyriba: 93% accuracy) | Maybe | Medium |
| 34 | **Customer / supplier master-data entity resolution** | Duplicate and fragmented records break reporting, marketing and spend analysis | CDO, finance / procurement ops, CRM owner | Retail, insurance, distribution, healthcare | CRM, ERP, vendor master, transactions | Probabilistic / ML matching, graph context, steward review | Merge into golden records; build hierarchies | Duplicate rate, match accuracy, downstream lift | 12 (Zingg / Redica: 10M records → 330k golden; Amperity / New Look: £1M media saved; Quantexa insurer: match accuracy 60% → 98%) | Maybe | Medium |
| 35 | **Utility non-technical-loss detection** | Theft, broken meters and unbilled usage leak revenue | Revenue-protection manager | Utilities, municipal / co-op electric and water | AMI interval data, billing, service-point history | Supervised ranking plus anomaly detection | Prioritize field inspections; back-bill | Energy recovered per inspection, dollars | 11 (BGE / C3: $2.8M; Enel: +70% recovered per inspection) | Maybe | Medium |
| 36 | **Demand-charge and peak energy optimization** | Shift-start spikes set expensive monthly or annual demand peaks | Facilities / energy manager | Manufacturing, cold storage, grocery, campuses | Interval meter data, tariffs, controllable loads / battery | Load and peak forecasting plus dispatch optimization | Discharge the battery or curtail loads before the peak | Demand-charge dollars, peak kW | 29 (Stem: Ontario plant ~C$1.6M; Granite Construction: $860k across 5 sites) | Maybe | Medium |
| 37 | **Self-service analytics agent (text-to-SQL)** | Business users wait on analysts for routine metrics and data pulls | Head of data / BI | Any company with a governed warehouse | Warehouse plus a semantic layer / metric definitions | LLM text-to-SQL with retrieval over the schema | Answer the question; hand off to a human when needed | Requests answered without a person, analyst hours | 02 (Grab: SQL 50% → 81% self-served, cycle −33%); 31 (Uber QueryGPT: 10 → 3 min) | Maybe | Low |
| 38 | **Legacy code and test migration agents** | Framework and test migrations take engineer-years | CTO / engineering lead | Companies with large in-house codebases | Repository, test suite, CI | LLM agents with validation loops | Open merge-ready migration PRs | Engineer-weeks saved | 23 (Airbnb: est. 1.5 eng-years → 6 weeks); 02 (Spotify Honk: 1,500+ PRs, 60–90% time saved; Grab) | No / maybe | Medium |
| 39 | **Process setpoint and raw-material optimization** | Operators run conservative recipes and setpoints that waste alloy, energy or yield | Plant manager, process engineering | Steel, cement, chemicals, food processing | Historian / sensor data, lab quality, costs | Interpretable ML (quality prediction) plus constrained optimization | Recommend each heat's or batch's setpoints and additions | Raw-material cost per good unit, quality variance | 32 (Gerdau / Fero: $3/t; Chobani / Seeq: $10–20k/week); 14 (OYAK Cement / DataRobot: $39M; Michelin root cause: months → 1 hr) | Maybe | Medium |
| 40 | **Fit and size recommendation to cut returns** | Bracketing and wrong sizes drive apparel returns | Head of e-commerce | Apparel, footwear | Order and return history, product measurements | Collaborative and fit models | Recommend a size at the product page | Fit-related return rate, bracketing | 33 (M&Co: −9.8% returns among users; Moosejaw: −24% bracketing) | Maybe (mostly through vendors) | Low |
| 41 | **Address and geolocation correction** | Wrong pins and addresses cause failed deliveries and cancellations | Last-mile / delivery ops | Delivery, field service, e-grocery | Address text, GPS pings, delivery outcomes | Classifiers plus geocoding / statistical inference | Correct the pin; flag the address before dispatch | Failed deliveries, cancellations | 01 (Swiggy series); 06 (Grab: 5× fewer can't-find cancellations) | Maybe | Low |

**Considered and left out as covered.** Each of these is a variant of an item already in the catalogue, not a new solution:

- photo damage estimation (claims triage);
- price-floor / margin leakage (pricing governance);
- SOP fraud-investigation agents (fraud);
- on-call engineering copilots (AIOps);
- merchant cash-advance underwriting (credit);
- markdown optimization (ALDI SÜD −20.5% markdown loss, file 05) — a close variant of dynamic pricing;
- support-inbox triage (ticket triage);
- lead intake (lead scoring).

### 4. The strongest candidates

1. **PO-to-ERP sales order automation (#1).** This is the clearest mid-market LLM project with a hard end point: an order posted in the ERP. Named results are strong (MCR Safety 91% touchless; allnex 70%), and it ranked #2 for feasibility (file 37). Every distributor and manufacturer has the inputs, and it works on the revenue side, unlike the AP work we already sketched. (Files 30, 37, 34.)
2. **Freight invoice audit plus AP recovery audit (#2, #3).** ROI is counted in recovered cash, the workflow is bounded, and it ranked #1 for feasibility. It pairs naturally with the existing anomaly-detection work, recast as reconciliation against contracts and rates. (Files 11, 37.)
3. **Labor demand forecast plus automated shift scheduling (#4).** It reuses our demand-forecasting capability but adds the optimizer and the action, a published schedule. Small companies have documented results: a 7-branch bakery cut staff cost 4%, and a 70-agent contact center saved $1M. (Files 05, 18, 37.)
4. **Delivery-date promise at checkout (#7).** This is one of the most-replicated systems in the engineering literature (Wayfair, DoorDash, Uber, Swiggy, OLX). Its ROI can be A/B tested on conversion and WISMO, with +13% conversion and −16% WISMO at Harry Rosen. The data is order and carrier history the company already holds. (Files 01, 08, 20.)
5. **Product catalog attribute extraction and enrichment (#8), with B2B search (#9) as the follow-on.** It recurs in Evidently, the gig-economy blogs, and freelance briefs (Walmart, Instacart, DoorDash, Coupang, Delivery Hero, Kerry). Distributors with thousands of supplier SKUs are natural buyers, and the enriched attributes feed search, filters and the marketplace. (Files 01, 06, 15, 27, 34.)
6. **AI voice receptionist that books appointments (#12).** Freelance and startup briefs ask for this more often than anything else (file 34). Named home-services results exist: over 90% of calls booked, 72% handled without a person. It is the inbound, revenue-capture side of the healthcare no-show work. Agencies already sell it heavily, so differentiation would have to come from deep integration with the booking system and CRM. (Files 16, 02, 34.)
7. **Field-technician and delivery-fleet routing (#5, #6).** These are operations-research projects with long-documented ROI, at small scale too: Seco, about 250 staff, cut miles per order 52%; Traxión saved $5M a year. Freelance marketplaces under-supply this work relative to its value. (Files 05, 19.)
8. **Supplier RFQ and freight-quote extraction (#10, #11).** Documents become a quote decision. One named buyer in the briefs is a company with $4M in revenue. Quick to deploy, with a human approving the award or sell price. (Files 34, 35, 37.)
9. **Visual quality inspection (#20).** This is the computer-vision use case with the best mid-market evidence (Federal Package, Toast) and live freelance demand. It needs on-site camera work, so it ranks lower on effort but high on defensibility. (Files 10, 37.)
10. **Marketing mix modeling with budget reallocation (#30).** Open-source tools (Meridian, PyMC-Marketing) have made it feasible for advertisers spending $1M or more, with named results (Nürnberger −27% cost per lead). It is the causal-inference entry point, and it needs geo or holdout validation before savings are claimed. (Files 09, 05, 34.)

**Patterns across the list:**

- Most candidates turn a document into a decision (1, 2, 8, 10, 12), or forecast and then optimize (3, 4, 7).
- The first group sells fastest to non-tech mid-market buyers.
- The second has the most defensible ROI, because the action is a published schedule, route or promise that can be measured before and after.

---

## Appendix C — industry angle: industry-specific solutions

*(The industry-angle findings table as written by the research pass. File numbers refer to [`../evidence/16-ai-solutions-web-research-2026-10-09/industry/`](../evidence/16-ai-solutions-web-research-2026-10-09/industry/); original title: “Findings: industry-specific AI and ML solutions”.)*

**How to read the evidence column.** Almost every published result is **vendor-reported** and measures **the model plus a changed workflow**, not the model alone. Only a few results used a control or test group:
- the Gallagher Bassett litigation pilot (09);
- the Intertop markdown test (10);
- the Uber Freight matching A/B test (06);
- the Singapore parcel field randomization (06);
- the IRS audit-selection experiments (15);
- the TREWS adjusted cohort, which is observational (16).

The confidence rating reflects how strong that evidence is. It also reflects whether the solution is a distinct "data → model → decision → action" loop.

**Excluded from the table** because they are already covered or sketched: churn, lead scoring, CLV, collections, demand forecasting, replenishment, KPI anomaly, predictive maintenance, outbound, fraud, next-best-action, claims triage, quoting, pricing, employee attrition, ticket triage, document automation, supplier risk, healthcare no-show and denials, credit, and AIOps.

### Candidate solutions table

| # | Name | Problem | Buyer | Industries | Data | ML | Action | ROI measure | Evidence (file: source) | Mid-market? | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Litigation / attorney-involvement propensity | Litigated claims cost 4–6× more and settle late | Claims VP, TPA, self-insured employer | Insurance (WC, auto BI, GL), self-insured fleets | FNOL facts, injury, jurisdiction, report lag, notes, litigation flags | GBM / logistic; NLP on notes | Route to senior adjuster; early settlement | Attorney-involvement %, incurred, paid, LAE | 09: Gallagher Bassett pilot against a control (−18% attorney-involved, −10% incurred, −8% paid), gallagherbassett.com waypoint PDF; Pinpoint FNOL; SAS WC paper | Maybe | High |
| 2 | Subrogation recovery detection | Recoverable claims closed without pursuit | Claims and recovery leader | P&C, TPAs, self-insured fleets | Claims, liability facts, notes, recovery outcomes | Classifier plus NLP | Auto-refer to recovery | Recovery $ per 10k claims, rate, cycle time | 08: ValueMomentum (+12% recovery, up to $6M); Megaputer (+$270k per 10k claims) | Maybe | Med-High |
| 3 | Construction schedule-delay risk forecasting | Delays surface after the critical path slips | GC operations and project controls | Construction, EPC, infrastructure owners | Historical P6/MSP schedules, progress, delay outcomes | Deep learning on activity durations | Re-sequence; accelerate a trade | Days and $ of delay avoided | 01: nPlan/Suffolk (accuracy 48→74%, $1.25M and 20 days avoided); Buildots/GTM (about 20 days); ALICE/Suffolk (42 days) | Maybe (pooled data helps) | Med-High |
| 4 | Bid/no-bid and win probability | Bid hours wasted on unwinnable jobs | Preconstruction / estimating head | Construction, specialty trades, engineering, government contractors | Bid register with win/loss, price, scope, client | GBM classifier | Pursue or decline; prioritize estimators | Win rate, margin of won work | 01: AnswerRocket/Western Specialty (>70% accuracy, in Salesforce, no $ published); 28 | Yes | Medium |
| 5 | Job-site safety-incident risk ranking | Safety staff cannot visit every site | EHS director | Construction, industrial services | Observations, staffing, weather, photos, incidents | Risk ranker; CV | Weekly targeted visits | TRIR, recordables | 01: Newmetrix/JE Dunn (top 7 projects held 75% of recordables); Construction IQ/BAM (−20% issues) | Maybe | Medium |
| 6 | AI takeoff / estimating from drawings | Manual takeoff caps bid volume | Estimating head | Construction, trades, roofing | Plan sets | CV detection and segmentation | Faster, more bids | Hours per bid, revenue | 01: Togal/Coastal (14.5 h per set, about $1M); Beam/SIPC (−50% takeoff time) | Yes | Medium |
| 7 | Process-parameter / scrap and yield optimization | Drifting setpoints cause scrap and giveaway | Plant manager, process engineering | Plastics, chemicals, refining, food | MES and historian data, cavity pressure, lab quality | GBM/CNN plus SHAP ranges; RL closed loop | Recommend or write setpoints | Scrap %, PPM, yield, OEE, $/bbl | 04: ProcessMiner −25% scrap; cavity-pressure CNN −52%; auto plant 2.57→1.41%. 20: Imubit/Big West (+2% throughput, +0.6% yield), Canadian FCC $6–9M per year | Yes (advisory mode) | High |
| 8 | Warranty early warning / field-failure prediction | Defects found months late | Quality VP, warranty manager | Auto, equipment OEMs, appliances, ag equipment | Serial/VIN, build date, claims, failure codes, diagnostics | Survival models plus ML, clustering, anomaly detection | Containment, supplier recovery, design fix | Warranty % of sales, claims per unit, lead time | 27: Bosch/UK OEM (−7% cost, 2-month lead); IBM auto OEM (1.1→0.85 claims per vehicle, about €30M); SAS/American Honda (−20%) | Yes | Med-High |
| 9 | Field-service parts and first-time-fix prediction | Techs arrive without the right part or skill | Service ops leader | HVAC, appliances, OEM service, telecom, utilities | Work orders, symptoms, model and age, parts used, repeats, skills | Multi-label classifier plus ranking | Pre-stage van parts; skill-based dispatch | FTFR, repeat visits, jobs per tech | 21: Oxmaint HVAC (FTFR 74→91%, −64% callbacks); Fieldproxy (64→92%); Bruviti (−41% repeats). 28 ranks it a top mid-market buy | Yes | Medium (vendor-only) |
| 10 | Freight buy-rate / carrier cost prediction | Spot loads mispriced | Broker owner, pricing desk | Brokerage, 3PL, shippers | TMS loads, lanes, market or consortium rates | GBM; MDP pricing | Quote and buy guidance | Margin per load, cost to cover | 06: Greenscreens/Southland (+21% loads); Uber Freight A/B (lower cost to cover) | Yes (needs a network; buy) | Medium |
| 11 | Load consolidation / empty-mile reduction | Empty or under-filled trucks | Transportation manager | Trucking, inbound logistics, 3PL | Orders, windows, lanes, rates | Constrained optimization plus ML | Bundle, consolidate, multi-stop | Empty-mile %, inbound $ | 06: Uber Freight (25→22% empty miles); CHR Optimizer (−10.2% inbound cost) | Maybe | Medium |
| 12 | Shipment ETA and exception management | Late loads found at the dock | Shipper logistics | Mfg, CPG, retail, 3PL | ELD/GPS, EDI, weather, dwell | Ensemble regression | Reschedule; alert customers | ETA accuracy, OTIF | 06: project44 (+28 pts); FourKites (91% within 1 h); FedEx/Micron | Maybe (vendor) | Medium |
| 13 | Failed-delivery / address-risk prediction | Failed attempts and theft | Last-mile ops | Parcel, couriers, e-commerce | Attempts, address text, theft and claims | Classifier; BERT matching | Re-sequence; signature; locker | Failed-attempt %, $/route, losses | 06: Singapore randomized trial (−10% failed attempts, −$13 per route); Amazon (−11.8% defects); UPS DeliveryDefense (−35% losses) | Maybe | Med-High |
| 14 | Driver accident-risk scoring and coaching | Few drivers cause most collisions | Fleet safety director | Trucking, delivery, service fleets | Dashcam, telematics, claims | CV events plus scoring | Targeted coaching | Collisions, claims $ | 02: Motive/Estes (−89% collisions) | Yes (dashcams needed) | Medium |
| 15 | Discharge-date / LOS prediction | Avoidable bed days | Hospital COO, case management | Hospitals | EHR admissions, orders, notes, census | XGBoost | Clear barriers; early post-acute referral | Excess days, LOS, $ | 16: HonorHealth/Qventus (−0.65 days, $62M over 3 years); Parkview ($7.5M); Virtua (−19% excess days); 03 | Maybe | High |
| 16 | Census-driven nurse staffing forecast | Agency and overtime spend | CNO, workforce management | Hospitals, senior care | Census, ADT, OR schedule, acuity | Ensemble time series plus stochastic optimization | Float pool; cut agency | Agency $, under/overstaffing | 16: Duke/GE (−50% temp labor, $40M); IU Health (−13% understaffing) | Maybe | Med-High |
| 17 | OR block and infusion scheduling | Unused OR blocks and infusion peaks | Periop and oncology directors | Hospitals, ASCs, infusion centers | Durations, block use, chairs, staff | Duration prediction plus optimization | Release blocks; level-load templates | Unused minutes, cases, waits | 16: OSF/LeanTaaS (−87k minutes); Allina/Qventus (+3.5 cases per OR per month); MultiCare (−65% waits, $1.25M) | Maybe | High |
| 18 | CDI query prioritization | Lost DRG revenue | Revenue cycle / CDI director | Hospitals | Notes, labs, meds, past queries | NLP and ML ranking | Rank charts; physician queries | $ per year, CMI | 16: Iodine ($15M year 1, unnamed system); AdventHealth (+30% queries) | Maybe | Med-High |
| 19 | Payer prior-auth auto-approval | Manual utilization review | Health-plan UM | Payers | Requests, clinical data, criteria | ML plus rules | Auto-approve | Auto-approval %, nurse hours | 16: Cohere/Humana (89% auto-approval, −54% review hours) | No | Medium |
| 20 | Trial site selection / enrollment forecast | Under-enrolling sites | Pharma or CRO feasibility | Pharma, CROs | Site history, patient pools | Ranking | Choose sites | Enrollment rate | 16: IQVIA (+20.6%); PPD/Medidata (forecast only) | No | Medium |
| 21 | Trade-promotion optimization / post-event ROI | About half of trade spend does not pay back | CPG revenue-growth / sales VP | CPG, food and beverage | Promo calendar, spend, shipments, retailer POS | Baseline/uplift regression, random forest | Kill bottom events; reallocate | Trade ROI pts, incremental margin | 26: Tredence ($400M budget, +$10M, +5.4 pts); PepsiCo PromoAI (85% adoption); Genpact deductions ($21M per year); 07 | Maybe (needs POS data) | Med-High |
| 22 | Markdown / clearance optimization (distinct pricing variant) | Blanket clearance discounts | Merchandising VP | Apparel, footwear, specialty and home retail | SKU-store-week sales, inventory, price history | Elasticity plus optimization | Set markdown timing and depth | Clearance margin, sell-through | 10: Competera/Intertop against a control (+2% margin, +10.3% GP); Peak (£2.4M); McKinsey (4–8%) | Maybe | Med-High |
| 23 | Kitchen food-waste / prep forecasting | Over-production | F&B director | Hotels, contract catering, hospitals, universities | Bin camera or scale logs, covers, menu | CV plus forecasting | Adjust prep and menus | Food cost %, kg waste | 14: Winnow/Hilton (−66% overproduction); Mandarin Oriental ($207k per year); Leanpath/Sheraton (−64%) | Yes (hardware plus SaaS) | Med-High |
| 24 | Labor scheduling from demand forecast (forecast variant; the action is labor) | Interval over- and under-staffing | Ops VP | Restaurants, retail, hospitality | POS by interval, schedules, events | Time-series ML | Generate schedules | Labor % of sales | 22: Lineup.ai/Carrot Express (−300 bps payroll); Legion | Yes | Medium |
| 25 | Utility vegetation-management prioritization | Fixed trim cycles | Utility vegetation VP | Electric utilities, co-ops, rail | Satellite and LiDAR imagery, spans, outages | CV plus risk ranking | Condition-based trim plan | Trim miles, $, SAIFI | 17: AiDash/National Grid (>$5M per year, −16% miles); Overstory/Sho-Me ($600k pilot) | Maybe | Med-High |
| 26 | Non-technical-loss (theft) inspection targeting | Low-yield inspections | Revenue protection | Electric, water and gas utilities | AMI, billing, tamper events, inspection outcomes | GBM plus peer anomaly detection | Rank inspections by expected recovery | Recovery per inspection | 17: Enel/C3 (+70% Italy, 3× Spain); SMUD/Detectent (theft billing $1.36M→$3.11M) | Maybe (needs AMI) | High |
| 27 | Storm outage prediction / crew pre-staging | Crews mis-positioned before storms | Utility emergency management | Electric utilities | Weather, GIS, vegetation, outages | Tree ensembles | Pre-stage crews | Restoration time, cost | 17: Eversource/UConn (error 130→59%), no $ isolated | No | Low-Med |
| 28 | Gas-leak and main-replacement prioritization | Wrong leaks and miles fixed | Gas integrity manager | Gas utilities | Mobile methane surveys, GIS | Spatial ranking | Re-rank repairs | Emissions or leaks per $ | 17: EDF/Con Edison (31% vs 15%); Picarro (57 vs 28 leaks per 10 mi) | No | Medium |
| 29 | Renewable generation forecasting for bids | Imbalance charges | IPP, asset owner | Solar and wind | SCADA, weather, sky cameras | NN ensembles | Market bids | Imbalance $, value per MWh | 17: DeepMind wind (+20% value); Fulcrum3D/Kidston (−80% causer-pays charges) | Maybe | Medium |
| 30 | Autonomous building HVAC control | Static HVAC schedules | Facilities director | Office, retail, hospitals, universities, data centers | BMS points, weather, tariffs | Thermal model plus predictive/RL control | Write setpoints every few minutes | kWh, $ | 17: BrainBox (−21% to −26% HVAC kWh); DeepMind cooling (−40% cooling energy); 19: JLL (about −20%) | Yes (compatible BMS) | High |
| 31 | Artificial-lift / gas-lift optimization | Misallocated lift gas; pump failures | Production engineering | Upstream oil and gas | SCADA, well tests, pump telemetry | ML response curves plus optimization | Set injection rates | Production uplift, failures | 17: ExxonMobil Bakken (+7%, 200+ wells); SLB Ecuador (−70% pump failures, 283k bbl) | Maybe | Med-High |
| 32 | RAN energy saving / cell capex prioritization | Idle cells powered; capex to the wrong sites | Network planning | Telecom | Cell KPIs, traffic, power | Forecast plus closed loop | Cell sleep; rank upgrades | kWh per site, capex % | 11: NEC (970 sites, $474k per year); SAS (3–5% RAN capex) | No | Medium |
| 33 | Risk-based inspection targeting (government, regulated) | Random or complaint-driven inspections | Agency director; franchise QA | Public health, fire, buildings, regulators | Inspection history, permits, complaints, 311 | Classifier ranking | Re-order the queue | Violations per inspection, days earlier | 15: Chicago food (69% vs 55%, 7.5 days earlier, retrospective); NYC illegal conversions (70%, 5×) | Yes (local agencies) | Med-High |
| 34 | Lead service-line prediction | Digs find copper, not lead | Water utility capital lead | Water utilities | Parcels, build year, past digs | Parcel classifier | Rank excavations; regulatory inventory | Hit rate, $ per lead line | 15: Flint/BlueConduit (80% vs 15% hit rate) | Yes | High |
| 35 | Tax / revenue collection action optimization (adjacent to collections) | Wrong action per delinquent case | Revenue agency | Tax agencies, municipal fines, utility arrears | Liabilities, payments, prior actions | Constrained RL / MDP | Choose an action per case | $ collected, same staff | 15: NY State CISS (+$83M, about $40–50M incremental); IRS (+$13.3M vs control) | No | High |
| 36 | Proactive social-risk outreach targeting | Services arrive after the crisis | County human services, health plans | Public sector | Linked admin records | Risk classifier | Proactive outreach | Shelter entry avoided | 15: LA County HPU (−71%, non-randomized) | No | Medium |
| 37 | Bank deposit pricing elasticity (funding-cost pricing variant) | Overpaying rate-insensitive depositors | Treasurer / ALCO | Banks, credit unions | Balances, rate history, flows | Price response plus optimization | Rate grids; targeted promos | NIM bps, funding cost | 25: Nomis (31× ROI); Canadian bank (+20 bps NIM on new balances) | Yes (vertical SaaS) | Medium |
| 38 | PS resource / bench forecasting | Bench time and late staffing | PS firm COO | Consulting, engineering, agencies | PSA pipeline, skills, utilization | Forecast plus matching | Hire, contract or redeploy early | Utilization, margin | 12: Kantata (+5% utilization, +10 pts margin, unnamed) | Yes | Low |
| 39 | Grain coop yield / storage / sell-timing suite | Mistimed sales and storage | Coop GM | Agriculture | Yield, weather, storage, contracts | Forecast plus optimization | Plan storage and sales | Price, losses | 29: Futurism AI (vendor claim, $6.2M); 13: dairy studies are accuracy only | Maybe | Low |

**Variants folded into covered areas:**
- Trucking driver turnover is a variant of employee attrition. Omnitracs at Super Service cut high-risk-group turnover from 203% to 66%, and Pride Transport reported 714% ROI (06).
- Multifamily renewal risk is a variant of churn. Renew reports +7% renewals (24).
- Feeder, cable and transformer ranking is a variant of predictive maintenance (17).
- Contract-risk review and RFI / submittal automation are variants of document automation (01).
- Dock appointment booking is agent workflow, not ML (06).

**Gaps (no named, measured production case found):**
- construction change-order *prediction*, which exists only as academic models (23);
- premium-audit and loss-control targeting (08);
- telecom truck-roll and installation-fallout prediction (11);
- law-firm fee and write-off prediction (12);
- bank covenant, reconciliation-break and settlement-fail prediction (18);
- hotel overbooking and housekeeping (14);
- precision-agriculture ROI (13).

### Strongest candidates
1. **Field-service parts and first-time-fix prediction (#9).** It is the most horizontal: HVAC, appliances, OEM service, elevators, utilities and telecom. The data is already in field-service software and the action is concrete. FTFR is easy to measure. The reasoning pass (28) ranked it a top mid-market buy. The weakness is that the evidence comes only from vendors.
2. **Scrap and yield optimization (#7).** Several cases report 25–52% scrap reduction, plus refinery closed-loop gains. Mid-market plants have MES data. An advisory setpoint mode avoids integrating with the control system.
3. **Litigation propensity (#1), paired with subrogation (#2).** This has the best causal evidence in the set: a control-group pilot showing −18% attorney involvement and −10% incurred. The buyers are TPAs, regional carriers and self-insured fleets.
4. **Warranty early warning (#8).** OEMs already hold structured claim data. Published results are −7% to −20% warranty cost, and the actions are clear: containment, supplier chargeback and design fixes.
5. **Construction schedule-delay (#3) plus bid/no-bid (#4).** There is a large mid-market of GCs and specialty contractors, and nearly all have P6 schedules and bid registers. A single firm's history may be thin, so benchmark data helps.
6. **Hospital discharge and LOS (#15) plus staffing forecast (#16).** Outcomes are large and repeated ($62M at HonorHealth, $40M at Duke). Community hospitals are mid-market buyers.
7. **Trade-promotion post-event ROI (#21).** Mid-size CPG firms spend heavily on trade promotion with little measurement. Results include +5.4 ROI points and $21M a year from deduction validation. It is gated by access to retailer POS data.
8. **Inspection and field-work targeting as a reusable pattern (#25, #26, #33, #34).** The loop is the same each time: rank sites by the expected yield of a visit. The results are strong: Enel 3× recovery per inspection, BlueConduit 80% vs 15%, NYC 5×. Buyers include co-ops, cities, regulators and franchisors.
9. **Autonomous HVAC control (#30).** Savings are measured repeatedly at 20–26%. Whether a site qualifies depends on BMS compatibility.
10. **Kitchen food-waste forecasting (#23).** Results are consistent at 36–66% less overproduction. It needs bin hardware.

---

## Appendix D — function angle: solutions by business function

*(The function-angle findings table as written by the research pass. File numbers refer to [`../evidence/16-ai-solutions-web-research-2026-10-09/function/`](../evidence/16-ai-solutions-web-research-2026-10-09/function/); original title: “Findings: AI solutions by business function”.)*

**Excluded as already covered:**
- CPQ price guidance and deal desk. They overlap *dynamic pricing & discount governance* and *automatic quoting*.
- Contract clause extraction. It overlaps *document & workflow automation*.
- Sanctions false-positive reduction. It overlaps *fraud & financial-crime decisioning*.
- Generic demand forecasting, churn, ticket routing and supplier risk.

**How to read the table:**
- *(variant)* marks a row that sits next to a covered item but is materially different.
- Most evidence is vendor-published and uncontrolled.
- **Confidence:**
  - **H**: several named deployments with figures.
  - **M**: one or two named deployments, or anonymous ones with figures.
  - **L**: mostly vendor claims.
- **Mid-market buy:** could a non-tech company with $50M–$1B revenue buy this and get value?

| # | Name | Problem | Buyer | Industries | Data | ML technique | Action | ROI measure | Evidence (file and URL) | Mid-mkt | Conf |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Deduction / short-pay validity scoring and recovery | Retailer short-pays are written off unexamined | VP Finance, AR | CPG, food, distributors selling to big-box | AR open items, remittances, retailer portal claims, promotion calendar, proof of delivery, EDI | Validity classifier, evidence matching, recovery ranking | Auto-dispute with an evidence pack, or close against the promotion accrual | $ recovered, days deduction outstanding (DDO) | 18: Danone NA $25.5M a year and DDO −25 days (https://pages.highradius.com/hubfs/highradius.com/case-study/Content%20COE%20New/Case%20Studies/danone_casestudy.pdf); Hershey's −70% manual Kroger deductions (https://www.highradius.com/resources/case-studies/hersheys/); 24, 29 | Yes | H |
| 2 | Cash application / remittance matching *(variant, AR side)* | Unapplied cash | AR manager | Distribution, manufacturing, CPG | Lockbox/EDI 820, remittances, open invoices | Probabilistic matching, extraction | Auto-post payments | Auto-match rate | 18: Clorox from 50–55% to 80% (https://www.casestudies.com/company/highradius/case-study/cloroxs-ar-transformation-helps-bypass-erp-constraints-with-80-automation-in-cash-application) | Yes | M |
| 3 | Duplicate-payment and AP/T&E spend-anomaly audit | 0.1–0.5% of AP spend leaks | Controller, AP, audit | All | AP and payments, vendor master, T&E, P-card | Fuzzy duplicate detection, anomaly scoring | Block or claw back payments | $ prevented and recovered | 03: International Paper $62.2M (https://www.oversight.com/case-studies/international-paper-case-study); Westbury £774k in 4 months (https://www.appzen.com/westbury-street-holdings-ai-invoice-processing); Databricks $483k; HD Supply $117k; 24 | Yes | H |
| 4 | Invoice-to-contract price compliance | Invoices above contracted rates; missed rebates | CPO, AP | Manufacturing, distribution, facilities | Contracts, PO and invoice lines, units of measure, rebates | Term extraction, item entity resolution, rules plus anomaly | Short-pay, dispute, claim credit | Verified leakage as % of spend | 08: McKinsey 4% leakage, over $10M (https://www.mckinsey.com/~/media/mckinsey/business%20functions/operations/our%20insights/mitigating%20procurement%20value%20leakage%20with%20generative%20ai/mitigating-procurement-value-leakage-with-generative-ai.pdf); a US manufacturer $4.2M; 29 | Yes | M |
| 5 | Freight and parcel audit | Carrier misbilling and missed late-delivery refunds | Logistics manager | Shippers | Carrier invoices, rates, tracking | Rules plus anomaly, refund eligibility | Dispute, claim refunds | Credits as % of freight spend | 21: 3.8% of freight and 5.1% of parcel spend (https://intunelogistics.com/case-studies/); 24 ranks it fastest to first result | Yes | M |
| 6 | Treasury cash-flow forecasting | Spreadsheet forecasts off by about 30% | Treasurer, CFO | Multi-entity companies | Bank, AR/AP, customer payment behaviour | Time-series/ML, payment-timing models | Revolver draws, investment of surplus | Forecast accuracy, interest saved | 03: Danone 99.3% (https://pages.highradius.com/hubfs/highradius.com/case-study/content_coe_new/case_studies/danone_treasury_casestudy.pdf); Konica Minolta $400k interest saved; Emerald 94% | Yes | H |
| 7 | Driver-based revenue forecasting, multi-site *(variant)* | Budgets ignore weather and site mix | FP&A | Car washes, fitness, restaurants | Daily site revenue, weather, calendar | ML time series with external drivers | Re-forecast, site budgets | Accuracy gain | 03: Quick Quack +45–50% (https://www.polestaranalytics.com/case-study/how-quick-quack-car-wash-leveraged-ml-in-anaplan) | Yes | M |
| 8 | Pipeline forecast and open-deal win-probability | Forecasts rest on rep judgment | CRO, RevOps | B2B | CRM history, activity | Gradient-boosted win-probability | Commit forecast, intervene on deals | Forecast accuracy, win rate | 01: Aviso/LaunchDarkly 98%; Clari/Fortinet 97%; Gong/Experian +25% win rate | Maybe | M |
| 9 | Territory and quota optimization | Unbalanced territories | RevOps | B2B field sales | Account potential, attainment | Propensity plus constraint optimization | Reassign accounts, set quotas | Planning time, attainment spread | 01: Pure Storage/Anaplan; Udemy/Fullcast −80% planning time. ML lift not proven | Maybe | L |
| 10 | Marketing mix modeling | Budgets set on last-click ROAS | CMO | CPG, DTC, lead-gen, multi-location services | 2–3 years of weekly spend and sales | Bayesian MMM (Robyn, Meridian) | Reallocate channels | CPA/ROAS, incremental sales | 02: Leafguard −12% CAC (https://tinuiti.com/work/omnichannel-case-study-leafguard/); Resident; INDOCHINO −31% CPA. 27: WNS +3% sales and +5% profit; Gain Theory $19M | Maybe | H |
| 11 | Incrementality / geo-holdout measurement | Platform ROAS overstated | Head of growth | DTC, omnichannel | Geo-level sales and spend | Synthetic control, geo experiments | Cut or keep tactics | Incremental ROAS | 02: Caraway 1.95×, 33% overstatement (https://www.haus.io/case-study/caraway-maximizes-pmax-via-3-cell-incrementality-test); The North Face UK | Maybe | M |
| 12 | Discount-avoidance offer targeting *(variant of NBA)* | Blanket promotions give away margin | E-commerce or marketing lead | Retail, restaurants | Sessions, offer history with control groups | Uplift / heterogeneous-treatment models | Offer incentives only to persuadable customers | Incremental revenue per visit, promotion $ saved | 02: Forever 21 +23.6% conversion; a retailer −35% promotion spend; Dunn Brothers 51% ROI against control | Yes | M |
| 13 | Direct-mail household targeting with holdouts | Mail sent to the whole list, never tested | Marketing director | Home services, regional retail, auto dealers, credit unions | CRM/POS, household data, web visits | Response/uplift models plus holdout design | Mail or suppress households | Incremental CPA/ROAS | 28: Epsilon 1.5–3.9× incremental lift (https://www.epsilon.com/files/epsilon-data-direct-mail-strategic-growth-channel.pdf); Mizzen+Main 6.35× incremental ROAS | Yes | M |
| 14 | Trade promotion optimization | 55% of promotions lose money | VP Sales or revenue-growth management | CPG/food | Promotion calendar, shipments, POS | Lift and elasticity models, scenario optimization | Cut or redesign events | Promotion ROI, net revenue | 19: loss-making events from 55% to 31% and $3M+ (Wipro PDF); 27: Mu Sigma +8% sales; 24 ranks it #3 for return | Maybe | M |
| 15 | Labor demand forecasting and shift scheduling | Hand-built shifts cause overtime and overstaffing | COO, HR | Multi-site retail, restaurants, contact centers, healthcare | POS/traffic, time clock, labor rules | Forecast plus MIP schedule optimization | Publish schedules, pre-empt overtime | Labor % of sales, overtime $, turnover | 06, 25: discount retailer about $10M and +500 bps (https://legion.co/resources/case-studies/national-discount-retailer-gets-56x-return-on-cost-per-store-and-10m-in-savings-with-legion-wfm/pdf/); a Forrester TEI composite reported −10% overtime and −5% turnover. 10: Oscar Health. 24 ranks it #2 for return | Yes | H |
| 16 | Predictive hiring for 90-day retention, hourly roles *(variant: pre-hire)* | Early quits | CHRO, talent acquisition | Senior living, healthcare aides, restaurants, warehouses | ATS, assessments, tenure outcomes | Tenure classifier with adverse-impact testing | Rank and match applicants | 90-day retention | 26: Sunrise Senior Living +27% (https://www.seniorlivingnews.com/sunrise-senior-living-reduces-staff-turnover-and-costs-through-arenas-ai-tool/); Mount Sinai −77.6% 90-day turnover. 29: legal risk | Maybe | M |
| 17 | High-volume hiring screening and scheduling | Applicant drop-off | Talent acquisition | Restaurants, retail, hospitality | Applications, calendars | Matching plus conversational automation | Auto-screen, schedule | Time-to-hire | 05: Chipotle from 12 to 4 days; GM $2M; Eaton $2.4M (https://www.herohunt.ai/blog/ai-recruiting-roi-2026-real-cost-savings-data/) | Yes (SaaS) | M |
| 18 | Contact-driver analytics to cut repeat contacts | 20% or more of contacts are fixable repeats | VP Customer Service | Utilities, home services, insurance, e-commerce | Transcripts, cases, orders, IVR | Speech-to-text, intent classification, repeat prediction joined to operational events | Fix root causes | Contact and repeat rate | 10: HomeServe −10% calls (https://www.verint.com/case-studies/homeserve-reduces-customer-effort/); UK ISP $4.9M; SaaS −78% contact rate; 29 | Yes | M |
| 19 | QA auto-scoring of 100% of calls | 1–5% QA sampling | Contact-center director | 30+ agents | Recordings, scorecard | Speech-to-text plus LLM rubric calibrated to human graders | Coaching and compliance alerts | QA cost per call | 23: an MSP cut QA cost from $14 to $0.42 per call (https://keydelta.com/case-studies/ai-call-center-qa); Verint | Yes | M |
| 20 | Real-time agent assist | Uneven agent skill | Contact-center director | Consumer finance, insurance, home services | Outcome-labelled transcripts | Conversation models plus retrieval | In-call guidance | AHT, conversion, save rate | 12: Snap Finance −40% AHT (https://cresta.com/customers/snap-finance); Aptive $2.37M | Yes (SaaS) | M |
| 21 | Delivery-date prediction and proactive notifications | "Where is my order" (WISMO) contact flood | E-commerce or customer service | E-commerce, distributors | Orders, tracking, lead times | Quantile/delay-risk models | Accurate promise dates, proactive alerts | WISMO contacts, conversion | 11: Harry Rosen −16% WISMO and +13 points conversion; Branch −37% | Yes | M |
| 22 | Returns abuse scoring | Serial or fraudulent returns | Loss prevention | Retail | Returns, POS history | Risk scoring | Warn, approve or deny | Return $ | 11: Appriss vendor-level 8–12%, no named retailer | Maybe | L |
| 23 | Outside legal invoice review | Guideline violations in law-firm bills | General counsel, legal ops | $1M+ legal spend | LEDES invoices, guidelines | Line-item classification | Reject or adjust | % of legal spend | 09: Ocado 5%; SMBC $2.7M; Syngenta 10%; AccuWeather about 30%. 29: buy it | Yes (SaaS) | H |
| 24 | Full-population journal-entry risk scoring | Sampled audits miss errors | Controller, internal audit | Upper mid-market | GL and subledgers | Unsupervised anomaly detection plus rules | Investigate before close | Errors caught | 04: Turo, Chevron via MindBridge. Thin numbers | Maybe | L |
| 25 | Cloud commitment and Kubernetes rightsizing | Uncommitted on-demand spend, idle clusters | CIO, FinOps | Material cloud spend | Billing exports, utilization | Forecast plus commitment optimization, bin-packing | Auto-buy commitments, rightsize | Effective savings rate | 13: Collibra from 17.8% to 34.5%. 14: Iterable over 60%; Genial about 50% | Maybe | H |
| 26 | SaaS license reclamation | Unused seats | CIO | Any | SSO usage, invoices, HRIS | Usage anomaly detection | Reclaim, cancel | $ saved | 13: ModMed 3,359 licenses | Yes (SaaS) | M |
| 27 | Technician dispatch and scheduling optimization | Manual dispatch, high drive time | COO, service director | HVAC/MEP, equipment service, hygiene, utilities | Work orders, skills, SLAs, travel | Job-duration prediction plus VRP/constraint optimization | Auto-assign and route | Jobs per tech per day, miles, SLA | 15: PHS from 18.5 to 26+ jobs and −35% travel (https://www.ifs.com/en/insights/customer-stories/phs-group); Konica Minolta +20–25%; Any Hour Services −30% drive time; Diebold +33% | Yes | H |
| 28 | Pre-dispatch triage and first-time-fix prediction (parts and skill) | Second truck rolls | VP Service | OEM service, HVAC/MEP, appliances, lab equipment | Work-order text, asset history, parts, fix outcomes | Fault text classification, parts recommender, first-time-fix probability | Remote-resolve, right tech, stock the van | First-time-fix rate, repeat visits, truck rolls | 15: Comfort Systems USA +9% FTF and −49% cost (https://www.aquant.ai/customer-stories/comfort-systems); 3D Systems −39% repeats; TOMRA NA 84% to 96–97%; ADT 1M rolls avoided. 29: hybrid build | Yes | H |
| 29 | Recurring-route density optimization | Inefficient recurring routes | Owner, operations | Pest, pool, lawn, mobile tyre-fitting | Locations, visit frequencies | Periodic VRP (optimization, not ML) | Rebuild routes | Stops per day, miles | 15: Atomic Pest from 10 to 18–20 stops; Halfords +194%; Telgian −82% planning hours | Yes | H (not ML) |
| 30 | Service-parts positioning *(variant of replenishment)* | Missing or bloated field stock | VP Service | OEMs, dealers | Usage, installed base, van stock | Intermittent-demand forecasting, multi-echelon optimization | Stock by location and van | Inventory $, fill rate | 15: Toshiba GCS −23% inventory at 98% fill; Aston Martin −18%; Al Masaood −15–20% | Maybe | M |
| 31 | Warranty claims early warning | Defects found months late | VP Quality, Engineering | Appliances, vehicles, heavy equipment, HVAC makers | Claims, technician free text, build/lot/supplier data | NLP defect topics, change-point detection, Weibull | Alert, contain lots, recover from suppliers | Days to detect, warranty $ per unit | 17: Sub-Zero −50% incidents, 4–5 months sooner (https://media.journoportfolio.com/users/34897/uploads/e233b00c-6fdc-4444-a6ca-4711f9a32adf.pdf); automaker 174 to 52 days and $2M (https://www.sas.com/en_us/software/field-quality-analytics.html) | Yes | M |
| 32 | Formulation and experiment optimization | Months of trial and error | VP R&D | Chemicals, coatings, adhesives, food | Formulations, tests | Bayesian optimization / active learning | Choose next experiments | Experiments avoided, time to market | 16: Dorfner from 6 months to 1 month; adhesives 4 months against a 5-year estimate (https://citrine.io/leveraging-ai-and-machine-learning-in-coatings-adhesives-and-sealants/) | Maybe | M |
| 33 | Should-cost modeling | Blind negotiation | CPO, sourcing | Discrete manufacturing | CAD/BOM, rates, quotes | Process cost plus ML | Target-price negotiation | Savings | 08: Alstom 40%, LiuGong (secondary sources) | Maybe | L |
| 34 | Spend classification | Spend not categorized | CPO | Multi-site | AP/PO lines | Text classification | Feed sourcing waves | Opportunities identified | 08: about 95% accuracy, $30M identified; 27: CCEP. Realized savings thin | Yes | L |
| 35 | Autonomous tail-spend negotiation | Small suppliers never negotiated | CPO | Large retail, industrials | Supplier spend, terms | LLM negotiation agent | Negotiate at scale | Savings, terms | 07: Honeywell/Pactum $500M+; Walmart | No | M |
| 36 | Freight sourcing bid optimization | Carrier RFPs awarded by spreadsheet | Logistics procurement | Shippers | Bids, lanes | Combinatorial MIP | Award lanes | Savings | 07: ocean RFP −20%; €15M (Keelvar) | Maybe | M |
| 37 | Unbilled-work / revenue-leakage detection (field and project services) | Jobs never invoiced, parts unbilled, change orders and warranty credits unclaimed | CFO, controller | HVAC/MEP, equipment service, contractors, utilities | FSM work orders, time, parts, pricebook, contracts, invoices | Reconciliation plus anomaly/classification; LLM reading of tech notes and photos | Bill items, draft change orders, file warranty claims | Recovered revenue as % of revenue | 20: a utility about $800k a year (https://genta.dev/resources/revenue-leakage-utility-billing-ai). 30: Spaid claims $80–150k a year per 50 techs (https://spaid.com/pages/revenue-leakage); 29 calls it a strong custom build | Yes | L–M |
| 38 | AI call answering and booking for trades *(inbound genAI)* | Missed calls worth $300–800 each | Owner | HVAC, plumbing, electrical | Calls, booking rules, FSM calendar | Speech agent plus booking logic | Answer and book | Booking rate, captured revenue | 22: Brody Pennell from 70% to 90%; Yost & Campbell +20% revenue (https://www.avoca.ai/customers) | Yes (SaaS) | M |
| 39 | In-home sales conversation coaching | Uneven close rates | Sales manager | HVAC replacement, roofing, solar | In-home recordings, outcomes | Outcome-linked speech analytics | Coach reps | Close rate, average ticket | 22: Aire Serv flips from 20–30% to about 70%; A to Z +24% revenue | Yes (SaaS) | M |
| 40 | Regulatory-change obligation mapping | Manual mapping of rules to controls | CCO | Banks, insurers, broker-dealers | Regulatory texts, control library | NLP extraction and mapping | Update controls | Analyst hours | 09: ING and Commonwealth Bank 2.5 minutes against about 1,800 hours | No | L |

### Strongest candidates

1. **Deduction / short-pay validity scoring and recovery (#1).**
   - It has the clearest named dollar result: Danone recovered $25.5M a year and cut DDO by 25 days. Hershey's is a second named case.
   - Every mid-market CPG maker and distributor selling to big-box retail has the problem, and the data is in ERP/AR plus retailer portals.
   - ROI is cash recovered. File 29 supports a custom validity-scoring layer that writes reason codes back into AR.

2. **Field-service dispatch plus first-time-fix and parts prediction (#27, #28).**
   - This is the deepest pool of named results: PHS from 18.5 to 26+ jobs per technician, TOMRA NA first-time fix from 84% to 96–97%, Comfort Systems −49% resolution cost, 3D Systems −39% repeat visits, Any Hour Services −30% drive time.
   - Trades and equipment-service firms already run FSM systems, so the data exists.
   - The custom opening is a company-specific prediction of the right part and skill, written into dispatch before the van leaves.

3. **Warranty claims early warning (#31).**
   - Sub-Zero, a mid-size privately held company, cut service incidents 50% and found problems 4–5 months sooner. An automaker cut detection from 174 to 52 days and saved $2M.
   - The signal is in technician free text joined to build, lot and supplier data, which favours a tailored NLP build.

4. **Labor demand forecasting and scheduling (#15).**
   - File 24 ranks it #2 for return, at about 0.2–1.4% of revenue where labor is 25–35% of sales.
   - Legion's evidence: overtime −10–20%, about $10M at one retailer.
   - It is mostly bought as SaaS. A custom build pays only where demand drivers are unusual.

5. **Recovery-audit bundle (#3, #4, #5): duplicate payments, invoice-to-contract compliance, freight audit.**
   - These are the fastest to a first result and the highest for data readiness (file 24).
   - Results are cash: International Paper $62.2M, Westbury £774k in 4 months, McKinsey's 4% verified leakage.
   - Invoice-to-contract compliance is the best custom fit, because amendments, units of measure, rebates and ERP item codes defeat packaged tools.

6. **Unbilled-work / revenue-leakage detection in field and project services (#37).**
   - It is the strongest custom-build fit because the records already exist, fragmented across FSM, ERP, pricebook and contracts.
   - The action is direct: bill the items, draft change orders, file warranty claims.
   - Public evidence is mostly vendor claims, so confidence is low to medium even though demand is evident.

7. **Contact-driver analytics to cut repeat contacts (#18), paired with delivery-date prediction (#21).**
   - HomeServe −10% calls, a UK ISP $4.9M saved, a SaaS company −78% contact rate; Harry Rosen −16% "where is my order" contacts.
   - The value comes from joining conversation themes to orders and defects, which contact-center tools don't do.

8. **Trade promotion optimization and MMM for mid-size CPG (#14, #10).**
   - Returns are high: 0.2–1% of revenue, and one case cut loss-making events from 55% to 31%.
   - The limit is data readiness: both need POS data and 2–3 years of history. They suit brands with $200M+ revenue.

9. **Predictive hiring for 90-day retention, hourly roles (#16).**
   - This is a pre-hire variant, distinct from the post-hire attrition already sketched.
   - Sunrise Senior Living +27% 90-day retention; Mount Sinai −77.6% 90-day turnover.
   - Hiring scores are regulated selection procedures, so adverse-impact validation is required.

10. **Treasury cash-flow forecasting (#6).**
    - Named evidence is strong (Danone 99.3%, Konica Minolta $400k interest saved) and the data is ready.
    - The direct P&L return is modest, so it works best as an entry project that builds trust.

**Deprioritized for this audience:**
- Legal invoice review: proven, but buy the SaaS.
- Cloud and Kubernetes rightsizing: only material where cloud spend is.
- Autonomous negotiation: enterprise only.
- Regulatory mapping and communications surveillance: regulated financial services only.
- Journal-entry risk scoring and should-cost modeling: thin evidence.

---

*End of new-solution research. Evidence: item 16 (verbatim). Scoring of the admitted
candidates: [`02-use-case-portfolio.md`](02-use-case-portfolio.md) UC-22, UC-25…UC-34.
Module specs: [`04-solutions-catalog.md`](04-solutions-catalog.md) S-13…S-23.*
