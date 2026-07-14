# apps/

400 synthetic Amaro data apps, organized by the business function each one supports. Each subdirectory below is a category — open it to see every app in that area along with a short description.

The corpus is built around a fictional medical-logistics company, so the examples lean toward shipping, healthcare, compliance, and the day-to-day reporting that the operations / sales / finance / HR / IT teams of a mid-sized 3PL would care about. The same patterns generalize to other industries.

---

### [`operations-logistics/`](operations-logistics/) — 40 apps

The dispatcher's, route planner's, and ops manager's working set. On-time delivery rates, dispatch dashboards, route optimization scorecards, exception tracking, SLA compliance, last-mile cost analysis, dwell-time analysis, and the carrier-performance ranking that decides who gets what business next quarter. *Examples: Daily Dispatch Dashboard · On-Time Delivery Rate Tracker · Carrier Performance Ranking · Last-Mile Cost per Delivery.*

### [`finance/`](finance/) — 30 apps

Anything the controller or CFO opens on a Monday morning. AR aging, budget vs. actual by department, billing error rates, capital-allocation scoring, cash-flow forecasts, fixed-asset tracking, tax provisioning, working-capital ratios. Closely linked to `executive-leadership/` (board-deck inputs) and `risk-insurance/` (provisioning). *Examples: Accounts Receivable Aging · Budget vs. Actual by Department · CapEx Tracker · Bad Debt Provision Tracker.*

### [`sales/`](sales/) — 30 apps

The revenue org's view of pipeline, deal velocity, account expansion, win/loss patterns, and competitive displacement. The `Customer 360` app lives here — the synthesized full-account view that pulls from CRM, support, billing, and product usage. Overlaps with `customer-success/` for renewal/expansion plays. *Examples: Average Contract Value Trend · Deal Velocity by Stage and Rep · Competitive Win/Loss by Region · Customer 360.*

### [`compliance-regulatory/`](compliance-regulatory/) — 28 apps

The audit, regulatory-reporting, and legal-risk toolkit. DEA chain-of-custody, HIPAA PHI access logs, SOC 2 evidence prep, training completion, audit finding remediation, conflict-of-interest disclosures, business-continuity test results. Gets touched the most by external auditors, so the data is structured to be defensible. *Examples: PHI Access Log Audit · Audit Finding Remediation · Annual Compliance Calendar · Background Check Status Tracker.*

### [`hr-people/`](hr-people/) — 28 apps

Headcount, attendance, comp benchmarks, DEI metrics, benefits utilization, driver turnover, training completion, performance review status. Designed for the People team plus operating managers who need to know who's on shift, who's expiring a certification, and where the workforce is shrinking. *Examples: Absenteeism Rate by Facility · Compensation Benchmarking Dashboard · DEI Metrics Report · Driver Turnover Rate.*

### [`customer-success/`](customer-success/) — 26 apps

CSMs and account managers — health scoring, churn risk, expansion readiness, communication-frequency tracking, onboarding progress, recurring-issue patterns. Built so a CSM can open a single app at the start of the week and know which accounts need attention before the QBR. *Examples: Account Health Scorecard · Churn Risk Monitor · Account Expansion Readiness Score · Client Onboarding Tracker.*

### [`it-engineering/`](it-engineering/) — 26 apps

Internal IT + platform engineering — access reviews, API rate-limit utilization, backup success rates, change failure rates, cloud spend by service, security incident logs, software license compliance. Useful for the IT director's monthly review and for SOC 2 evidence collection. *Examples: Cloud Infrastructure Cost by Service · Change Failure Rate · Backup Success and Recovery Test · Cybersecurity Incident Log.*

### [`warehouse-distribution/`](warehouse-distribution/) — 24 apps

The DC manager's view — cycle count variance, dock-door scheduling, batch/lot traceability, cross-dock vs put-away ratios, damaged-goods write-offs, cold-storage temperature monitoring (the largest data file in the corpus is here, ~98 MB of synthetic temperature readings). Pairs with `operations-logistics/` for the inbound-to-outbound flow. *Examples: Cold Storage Temperature Monitoring · Cycle Count Variance Report · Batch and Lot Traceability Log · Damaged Goods Write-Off Report.*

### [`fleet-management/`](fleet-management/) — 23 apps

Trucks, vans, drivers, maintenance, EV battery health, DOT inspection readiness, accident/incident logs, driver certification expiry, idle-time reports, telematics-derived safety scores. Distinct from `operations-logistics/` (route execution) — this is about the rolling stock itself. *Examples: Driver Safety Scorecard · DOT Inspection Readiness Checklist · Battery Health Report (EV Fleet) · Accident and Incident Report.*

### [`executive-leadership/`](executive-leadership/) — 22 apps

The CEO/COO/CFO inputs — annual planning scenario models, board-deck data packs, OKR progress across departments, customer concentration risk, cross-departmental dependency maps, board-action-item trackers. These pull from many other categories; they're the synthesis layer. *Examples: Board Deck Data Pack · Company-Wide OKR Progress · Annual Planning Scenario Model · Customer Concentration Risk.*

### [`procurement-supply-chain/`](procurement-supply-chain/) — 22 apps

Sourcing, vendor management, contract expirations, blanket-PO utilization, fuel hedging, import duty/tariff tracking, emergency procurement logs, green-procurement reporting. Where the spend lives before it becomes a finance line item. *Examples: Contract Expiration Calendar · Blanket PO Utilization · Fuel Hedging Position · Import Duty and Tariff Tracker.*

### [`quality-assurance/`](quality-assurance/) — 21 apps

QA/QC team dashboards — calibration schedules, deviation reports, corrective-action effectiveness, customer audit readiness, complaint resolution times, continuous-improvement project tracking. Heaviest in regulated industries (medical, food, aviation); pairs with `compliance-regulatory/` for evidence. *Examples: Calibration Schedule and Status · Customer Complaint Resolution · Deviation Report Summary · Corrective Action Effectiveness Review.*

### [`marketing/`](marketing/) — 20 apps

The CMO's funnel — ABM campaign tracking, analyst relations activity, brand-awareness survey tracking, case-study pipeline, competitive intelligence digests, content performance, attribution. Lighter on data volume than the operational categories; heavier on narrative and trend lines. *Examples: Account-Based Marketing Campaign Tracker · Brand Awareness Survey Tracker · Content Performance Report · Competitive Intelligence Digest.*

### [`cross-functional/`](cross-functional/) — 17 apps

Reports that don't sit in one functional silo — annual insurance renewal prep, peer benchmarking, client-site audit preparation, customer advisory board prep, disaster recovery activation logs, multi-entity consolidation reports, franchise/license agreement monitors. Good for *"this question spans three departments and nobody owns it"* shapes. *Examples: Annual Insurance Renewal Prep Pack · Disaster Recovery Activation Log · Multi-Entity Consolidation Report · Customer Advisory Board Prep.*

### [`clinical-lab/`](clinical-lab/) — 16 apps

Healthcare-specific operations: blood-product inventory, clinical-trial shipment tracking, courier SLA by hospital, home-health delivery schedules, lab-result turnaround, medical-device recall response, patient-specimen chain-of-identity. The vertical that exercises HIPAA + DEA + cold-chain workflows in one place. *Examples: Clinical Trial Shipment Tracker · Lab Result Turnaround Time · Medical Device Recall Response · Blood Product Inventory by Type.*

### [`data-analytics/`](data-analytics/) — 15 apps

The Amaro platform's own observability — app creation velocity, business-rule registry utilization, cache hit rates, cost per insight, data-freshness SLA compliance, data lineage tracing, query cost and performance. Useful as a meta-layer: *the data-app analytics that watch the data-app system itself.* The largest synthetic data file in this category is `Data Lineage Trace` (~55 MB). *Examples: Cache Hit Rate Report · Data Freshness SLA Compliance · Cost per Insight · Data Lineage Trace.*

### [`risk-insurance/`](risk-insurance/) — 12 apps

Smallest category — risk-management workflows: business-interruption scenario modeling, claims reserving accuracy, contractual liability matrices, cyber-insurance coverage analysis, fleet-accident frequency, professional-liability exposure, total cost of risk dashboards, workers-comp experience-mod forecasts. Pairs with `compliance-regulatory/` and `finance/`. *Examples: Total Cost of Risk Dashboard · Cyber Insurance Coverage Analysis · Workers Comp Experience Mod Forecast · Fleet Accident Frequency Rate.*

---

## How to use this folder

- **Browse a category.** Click into any category subdirectory and read its `README.md` — every app is listed with its full name and one-line description from `spec.json`.
- **Find a specific shape.** Use the flat [`../apps.json`](../apps.json) to grep / filter / sort by `name`, `description`, or `data_sources` — every app is one record.
- **Run an app in the desktop.** Pick any app dir; it ships with `spec.json`, `app.py`, and `data.json` ready for the Amaro runner. Requires `git lfs install && git lfs pull` to materialize `data.json`, and `just install-runner-python` once for the Amaro runtime.
- **Use the ranking benchmark.** [`../questions/`](../questions/) holds 9 hand-curated prompts mapped to expected top-N apps by name. Good for testing search / ranking / chat-routing.

## Don't hand-edit anything under here

The corpus is regenerated as a batch from the Synthetic Data Lab pipeline. Edits to individual app files, category folder names, or the per-category `README.md` files get overwritten on the next regen. If a description or category label is wrong, fix it at the generator. The per-category `README.md` files specifically are written by [`../scripts/build_index.py`](../scripts/build_index.py) and re-emitted any time `apps.json` is rebuilt.

## Related

- [`../README.md`](../README.md) — repo-level layout, schema reference, regen + LFS workflow.
- [`../apps.json`](../apps.json) + [`../apps.schema.json`](../apps.schema.json) — flat machine-readable index + JSON Schema. Validate with `python3 ../scripts/validate_index.py`.
- [`../questions/`](../questions/) — TSV ranking benchmark.
- [`../CLAUDE.md`](../CLAUDE.md) — Claude Code conventions for this repo.
