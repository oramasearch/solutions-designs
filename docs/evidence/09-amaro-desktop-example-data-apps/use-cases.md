# amaro-desktop example data apps — use-case catalog (400 apps, 17 categories)

Readable listing of every example data app (use case) in `source/apps.json` (generated_at 2026-04-29T02:04:15+00:00). Name + description are verbatim from the catalog; `source/apps.json` is the authoritative record. Grouped by category, category order by app count.

| Category | Apps |
|---|---|
| Operations / Logistics | 40 |
| Finance | 30 |
| Sales | 30 |
| Compliance / Regulatory | 28 |
| HR / People | 28 |
| Customer Success / Account Management | 26 |
| IT / Engineering | 26 |
| Warehouse / Distribution | 24 |
| Fleet Management | 23 |
| Executive / Leadership | 22 |
| Procurement / Supply Chain | 22 |
| Quality Assurance | 21 |
| Marketing | 20 |
| Cross-Functional and Special Purpose | 17 |
| Clinical and Lab Services | 16 |
| Data and Analytics | 15 |
| Risk and Insurance | 12 |


## Operations / Logistics (40)

- **Average Time to First Scan** — Time from dispatch to first in-transit scan, by facility  
  `average-time-to-first-scan`
- **Backhaul Utilization Report** — Empty miles on return legs, by route and vehicle type  
  `backhaul-utilization-report`
- **Carrier Performance Ranking** — Third-party carriers scored on OTD, damage rate, cost. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `carrier-performance-ranking`
- **Client Pickup Compliance** — Are clients ready at scheduled pickup time? No-access rate  
  `client-pickup-compliance`
- **Client Requested vs Standard Service Mix** — How often clients upgrade or downgrade service tier  
  `client-requested-vs-standard-service-mix`
- **Client Shipping Profile Snapshot** — Per-client summary of typical volume, products, corridors, SLA  
  `client-shipping-profile-snapshot`
- **Corridor Capacity vs Demand Forecast** — Demand projections overlaid on available capacity per lane  
  `corridor-capacity-vs-demand-forecast`
- **Courier Partner Invoice Reconciliation** — Billed vs contracted rate discrepancies by carrier  
  `courier-partner-invoice-reconciliation`
- **Cross-Border Shipment Compliance** — Customs clearance times, document rejection rates  
  `cross-border-shipment-compliance`
- **Cross-Dock Throughput Monitor** — Units processed per hour at each facility. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `cross-dock-throughput-monitor`
- **Daily Dispatch Dashboard** — Today's shipments, driver assignments, real-time status. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `daily-dispatch-dashboard`
- **Daily Exceptions by Hour** — Time-of-day pattern for when exceptions spike  
  `daily-exceptions-by-hour`
- **Delivery Attempt Rate** — First-attempt vs re-attempt delivery rates by region  
  `delivery-attempt-rate`
- **Delivery Volume Forecast** — Next 30/60/90 day shipment volume projections by region. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `delivery-volume-forecast`
- **Delivery Window Accuracy** — Predicted vs actual delivery windows, by corridor  
  `delivery-window-accuracy`
- **Dispatch Reassignment Log** — How often drivers get reassigned mid-shift, root causes  
  `dispatch-reassignment-log`
- **Driver Utilization Heatmap** — Hours worked vs available by day-of-week and region  
  `driver-utilization-heatmap`
- **Facility-to-Facility Transfer Log** — Inter-DC transfers with transit time and cost  
  `facility-to-facility-transfer-log`
- **Last Mile Cost per Delivery** — Unit economics by metro, client, package type. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `last-mile-cost-per-delivery`
- **Multi-Stop Route Efficiency** — Stops per route vs transit time, diminishing returns analysis  
  `multi-stop-route-efficiency`
- **On-Time Delivery Rate Tracker** — Weekly/monthly OTD by region, client, service tier. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `on-time-delivery-rate-tracker`
- **Origin-Destination Pair Heatmap** — Volume and performance by lane pair  
  `origin-destination-pair-heatmap`
- **Packaging Type Usage Report** — Thermal shipper, dry ice, ambient box usage rates and cost  
  `packaging-type-usage-report`
- **Priority Shipment Tracker** — STAT and critical-care shipments with real-time status  
  `priority-shipment-tracker`
- **Proof of Delivery Completion Rate** — POD capture rate by driver, client, service line  
  `proof-of-delivery-completion-rate`
- **Return Shipment Volume and Cost** — Reverse logistics volume, reasons, and unit cost  
  `return-shipment-volume-and-cost`
- **Route Optimization Scorecard** — Planned vs. actual miles, fuel efficiency per route. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `route-optimization-scorecard`
- **Same-Day Delivery Success Rate** — Hit rate on same-day commitments by metro and hour  
  `same-day-delivery-success-rate`
- **Seasonal Volume Overlay** — This year vs last year volume by week, with flu/RSV season markers  
  `seasonal-volume-overlay`
- **Service Level Downgrade Tracker** — Shipments that missed premium SLA and fell to standard  
  `service-level-downgrade-tracker`
- **Shipment Aging Report** — Shipments in transit beyond expected delivery window  
  `shipment-aging-report`
- **Shipment Chain of Custody Timeline** — Every handoff event for a single shipment, visual timeline  
  `shipment-chain-of-custody-timeline`
- **Shipment Consolidation Opportunities** — Same-client, same-corridor shipments that could merge  
  `shipment-consolidation-opportunities`
- **Shipment Dwell Time Analysis** — Time packages sit idle at each handoff point  
  `shipment-dwell-time-analysis`
- **Shipment Exception Report** — Late, damaged, rerouted, or held shipments with root cause. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `shipment-exception-report`
- **Shipment Weight and Dimension Audit** — Declared vs actual weight discrepancies  
  `shipment-weight-and-dimension-audit`
- **SLA Compliance by Client** — Which accounts are at risk of SLA breach this period. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `sla-compliance-by-client`
- **Surge Capacity Utilization** — Overflow carrier usage during peak periods  
  `surge-capacity-utilization`
- **Temperature Excursion Log** — Cold chain violations by shipment, carrier, corridor. Goal: Maximize on-time delivery, minimize cost per shipment, optimize routing.  
  `temperature-excursion-log`
- **Weekend and Holiday Volume Tracker** — Off-hours shipment patterns and staffing alignment  
  `weekend-and-holiday-volume-tracker`

## Finance (30)

- **Accounts Receivable Aging** — Outstanding invoices by client, 30/60/90 day buckets. Goal: Protect margins, forecast accurately, manage cash flow.  
  `accounts-receivable-aging`
- **Bad Debt Provision Tracker** — Allowance for doubtful accounts vs actual write-offs  
  `bad-debt-provision-tracker`
- **Billing Error Rate** — Invoice corrections and credit memos as percentage of total billing  
  `billing-error-rate`
- **Budget vs. Actual by Department** — Spend tracking against plan. Goal: Protect margins, forecast accurately, manage cash flow.  
  `budget-vs-actual-by-department`
- **CapEx Tracker** — Vehicle, facility, and technology capital spend vs. plan. Goal: Protect margins, forecast accurately, manage cash flow.  
  `capex-tracker`
- **Capital Allocation Score** — ROI ranking of active capital projects for prioritization  
  `capital-allocation-score`
- **Cash Flow Forecast** — 13-week rolling cash projection. Goal: Protect margins, forecast accurately, manage cash flow.  
  `cash-flow-forecast`
- **Client Profitability Waterfall** — Revenue to net margin decomposition per account. Goal: Protect margins, forecast accurately, manage cash flow.  
  `client-profitability-waterfall`
- **Contract Escalation Clause Monitor** — Accounts hitting contractual price escalation triggers  
  `contract-escalation-clause-monitor`
- **Cost per Shipment Trend** — Fully loaded cost trending over time by corridor. Goal: Protect margins, forecast accurately, manage cash flow.  
  `cost-per-shipment-trend`
- **Deferred Revenue Waterfall** — Monthly movement in deferred revenue balance  
  `deferred-revenue-waterfall`
- **Discount Approval Audit** — Discounts granted outside policy, by rep and approval chain  
  `discount-approval-audit`
- **DSO Trend by Client Tier** — Days sales outstanding trending by account segment  
  `dso-trend-by-client-tier`
- **Financial Covenant Compliance** — Debt covenant metrics vs thresholds, traffic light status  
  `financial-covenant-compliance`
- **FP&A Scenario Comparison** — Side-by-side comparison of base, upside, and downside forecasts  
  `fp-a-scenario-comparison`
- **Fuel Cost Impact Model** — How fuel price changes affect margin by service line. Goal: Protect margins, forecast accurately, manage cash flow.  
  `fuel-cost-impact-model`
- **Fuel Surcharge Recovery Rate** — Surcharges billed vs actual fuel cost increases  
  `fuel-surcharge-recovery-rate`
- **Gross Margin by Client** — Profitability per account after direct costs. Goal: Protect margins, forecast accurately, manage cash flow.  
  `gross-margin-by-client`
- **Insurance Claims vs Premiums** — Loss ratio by coverage type and facility  
  `insurance-claims-vs-premiums`
- **Intercompany Elimination Report** — Transfers between entities that need to wash out in consolidation  
  `intercompany-elimination-report`
- **Labor Cost per Shipment** — Fully loaded labor cost allocated per delivery  
  `labor-cost-per-shipment`
- **Monthly Close Variance Report** — Preliminary vs final close numbers, by line item  
  `monthly-close-variance-report`
- **Operating Expense Ratio Dashboard** — OpEx as percentage of revenue by category  
  `operating-expense-ratio-dashboard`
- **Procurement Savings Tracker** — Negotiated savings vs baseline by vendor and category  
  `procurement-savings-tracker`
- **Revenue by Service Line** — Monthly revenue broken down by logistics product. Goal: Protect margins, forecast accurately, manage cash flow.  
  `revenue-by-service-line`
- **Revenue Leakage Detection** — Shipments completed but never invoiced, by client and corridor  
  `revenue-leakage-detection`
- **Revenue per Employee Trend** — Revenue efficiency metric by department over time  
  `revenue-per-employee-trend`
- **Revenue Recognition Schedule** — Multi-year contract revenue allocation timeline. Goal: Protect margins, forecast accurately, manage cash flow.  
  `revenue-recognition-schedule`
- **Tax Jurisdiction Compliance** — Sales tax and use tax filing status by state  
  `tax-jurisdiction-compliance`
- **Working Capital Dashboard** — Current ratio, quick ratio, and cash conversion cycle trending  
  `working-capital-dashboard`

## Sales (30)

- **Average Contract Value Trend** — ACV trending over time by service line and segment  
  `average-contract-value-trend`
- **Client Acquisition Cost by Segment** — Fully loaded CAC: marketing + sales + onboarding per new logo  
  `client-acquisition-cost-by-segment`
- **Competitive Win/Loss by Region** — Where we win and lose geographically vs each competitor  
  `competitive-win-loss-by-region`
- **Competitor Displacement Log** — Deals won from named competitors with win themes. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `competitor-displacement-log`
- **Contract Renewal Pipeline** — Upcoming renewals with risk scores and revenue at stake. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `contract-renewal-pipeline`
- **Customer 360** — Unified view of account: contracts, shipment volume, tickets, contacts, revenue. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `customer-360`
- **Deal Slippage Report** — Opportunities that pushed close dates, by how many days and how often  
  `deal-slippage-report`
- **Deal Velocity by Stage and Rep** — Average days per stage broken down by sales rep  
  `deal-velocity-by-stage-and-rep`
- **Enterprise Deal Room Activity** — Document views, questions asked, stakeholder engagement per deal  
  `enterprise-deal-room-activity`
- **Expansion Revenue Tracker** — Upsell/cross-sell revenue from existing accounts. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `expansion-revenue-tracker`
- **Inbound vs Outbound Pipeline Split** — Source of pipeline by origination channel  
  `inbound-vs-outbound-pipeline-split`
- **Lost Deal Reason Analysis** — Why we lose, by competitor, objection, and segment  
  `lost-deal-reason-analysis`
- **Multi-Threading Score by Deal** — Number of contacts engaged per opportunity  
  `multi-threading-score-by-deal`
- **New Logo Win Rate** — Closed-won vs. closed-lost by segment, rep, quarter. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `new-logo-win-rate`
- **Partner Referral Pipeline** — Deals sourced through channel partners and referral programs  
  `partner-referral-pipeline`
- **Pipeline by Service Line** — Open opportunities by logistics service type. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `pipeline-by-service-line`
- **Pipeline Coverage Ratio** — Pipeline-to-quota ratio by rep and quarter  
  `pipeline-coverage-ratio`
- **Pricing Sensitivity Analysis** — Win rates by discount tier and deal size. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `pricing-sensitivity-analysis`
- **Product Attach Rate** — How often add-on services get bundled into new deals  
  `product-attach-rate`
- **Prospect Engagement Score** — Multi-signal score: email opens, site visits, demo attendance  
  `prospect-engagement-score`
- **Q3 Velocity for Specimen Transport** — Stage-to-stage conversion speed for a specific product line. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `q3-velocity-for-specimen-transport`
- **Quota Attainment Leaderboard** — Rep ranking by percent-to-quota, monthly and quarterly  
  `quota-attainment-leaderboard`
- **Revenue by Client Tier** — Top 20 accounts and their growth trajectory. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `revenue-by-client-tier`
- **RFP Response Win Rate** — Outcomes on formal RFP submissions vs direct sales  
  `rfp-response-win-rate`
- **Sales Forecast Accuracy** — Rep-submitted forecasts vs actual closed revenue  
  `sales-forecast-accuracy`
- **Sales Rep Activity Report** — Calls, demos, proposals per rep per week. Goal: Grow revenue, expand accounts, shorten sales cycles.  
  `sales-rep-activity-report`
- **Sales-to-Onboarding Handoff Quality** — Completeness of info passed from sales to CS at close  
  `sales-to-onboarding-handoff-quality`
- **Seasonal Booking Patterns** — Revenue closed by month-of-year, overlaid with budget seasonality  
  `seasonal-booking-patterns`
- **Territory Coverage Map** — Geographic view of assigned accounts, open whitespace  
  `territory-coverage-map`
- **Time from Demo to Proposal** — Cycle time for the critical middle-funnel transition  
  `time-from-demo-to-proposal`

## Compliance / Regulatory (28)

- **Annual Compliance Calendar** — All regulatory filings, renewals, and deadlines in one view  
  `annual-compliance-calendar`
- **Audit Finding Remediation** — Open findings from internal/external audits with status. Goal: Zero violations, audit readiness, patient safety.  
  `audit-finding-remediation`
- **Background Check Status Tracker** — Pre-employment screening completion by role and location  
  `background-check-status-tracker`
- **Business Continuity Plan Test Results** — BCP drill outcomes, recovery times, gaps identified  
  `business-continuity-plan-test-results`
- **Conflict of Interest Disclosure Status** — Annual COI form completion rates by department  
  `conflict-of-interest-disclosure-status`
- **Controlled Substance Inventory Reconciliation** — DEA count discrepancies by substance and facility  
  `controlled-substance-inventory-reconciliation`
- **Corrective Action (CAPA) Tracker** — Open CAPAs, root cause, due date, owner. Goal: Zero violations, audit readiness, patient safety.  
  `corrective-action-capa-tracker`
- **Data Retention Compliance** — Records retention schedule adherence by document category  
  `data-retention-compliance`
- **DEA Controlled Substance Chain of Custody** — Tracking log for Schedule II-V shipments. Goal: Zero violations, audit readiness, patient safety.  
  `dea-controlled-substance-chain-of-custody`
- **Environmental Compliance Report** — Emissions, waste disposal, EPA reporting data. Goal: Zero violations, audit readiness, patient safety.  
  `environmental-compliance-report`
- **Export Control Screening Log** — Denied party screening results for cross-border shipments  
  `export-control-screening-log`
- **FDA 21 CFR Part 211 Checklist** — Pharmaceutical transport compliance status. Goal: Zero violations, audit readiness, patient safety.  
  `fda-21-cfr-part-211-checklist`
- **FDA Warning Letter Tracking** — Industry warning letters relevant to our operations  
  `fda-warning-letter-tracking`
- **GxP Qualification Status** — Good practice qualification for temperature-controlled facilities  
  `gxp-qualification-status`
- **HIPAA Compliance Dashboard** — PHI handling incidents, training completion, access audits. Goal: Zero violations, audit readiness, patient safety.  
  `hipaa-compliance-dashboard`
- **Incident Response Drill Results** — Tabletop exercise scores and gap identification  
  `incident-response-drill-results`
- **Patient Safety Event Report** — Near-misses and adverse events related to medical logistics  
  `patient-safety-event-report`
- **PHI Access Log Audit** — Who accessed protected health information, when, and why  
  `phi-access-log-audit`
- **Policy Acknowledgment Tracker** — Employee sign-off on updated policies by department  
  `policy-acknowledgment-tracker`
- **Regulatory Change Impact Assessment** — New rules mapped to affected processes and owners  
  `regulatory-change-impact-assessment`
- **Regulatory Correspondence Log** — All communications with FDA, DEA, DOT, EPA in one place  
  `regulatory-correspondence-log`
- **SOC 2 Control Evidence Tracker** — Control status and evidence collection for annual audit. Goal: Zero violations, audit readiness, patient safety.  
  `soc-2-control-evidence-tracker`
- **State Licensing Status** — Active permits/licenses by state, upcoming renewals. Goal: Zero violations, audit readiness, patient safety.  
  `state-licensing-status`
- **Subcontractor Compliance Scorecard** — Contract labor certification and insurance verification  
  `subcontractor-compliance-scorecard`
- **Training Recertification Forecast** — Who needs recertification in the next 30/60/90 days  
  `training-recertification-forecast`
- **Vendor Due Diligence Status** — Third-party risk assessment completion and scores  
  `vendor-due-diligence-status`
- **Waste Manifest Tracking** — Hazardous waste manifests from generation to disposal confirmation  
  `waste-manifest-tracking`
- **Whistleblower and Ethics Hotline Report** — Anonymous reports by category, investigation status  
  `whistleblower-and-ethics-hotline-report`

## HR / People (28)

- **Absenteeism Rate by Facility** — Unplanned absences by location, day-of-week, and department  
  `absenteeism-rate-by-facility`
- **Benefits Enrollment and Utilization** — Plan enrollment rates, claims utilization, cost per employee  
  `benefits-enrollment-and-utilization`
- **Commute Distance Analysis** — Employee commute data for facility planning and shift optimization  
  `commute-distance-analysis`
- **Compensation Benchmarking Dashboard** — Pay ranges vs market data by role and region  
  `compensation-benchmarking-dashboard`
- **DEI Metrics Report** — Diversity stats by level, department, hiring pipeline. Goal: Retain drivers and warehouse staff, reduce turnover, stay compliant.  
  `dei-metrics-report`
- **Driver Turnover Rate** — Monthly/quarterly churn for drivers, by region and tenure. Goal: Retain drivers and warehouse staff, reduce turnover, stay compliant.  
  `driver-turnover-rate`
- **Employee Engagement Survey Results** — Scores by team, trending over time. Goal: Retain drivers and warehouse staff, reduce turnover, stay compliant.  
  `employee-engagement-survey-results`
- **Employee Grievance and Resolution Log** — Formal complaints by type, resolution time, outcome  
  `employee-grievance-and-resolution-log`
- **Employee Referral Program Tracker** — Referrals submitted, hired, bonus paid, source quality  
  `employee-referral-program-tracker`
- **Exit Interview Theme Analysis** — NLP-clustered reasons for voluntary departures  
  `exit-interview-theme-analysis`
- **Headcount by Department and Location** — Current FTEs, open reqs, contractor count. Goal: Retain drivers and warehouse staff, reduce turnover, stay compliant.  
  `headcount-by-department-and-location`
- **I-9 and Work Authorization Audit** — Compliance status for employment eligibility verification  
  `i-9-and-work-authorization-audit`
- **Internal Mobility Report** — Promotions, lateral moves, and transfers by department  
  `internal-mobility-report`
- **Language and Certification Inventory** — Workforce capabilities: languages, CDL types, certifications  
  `language-and-certification-inventory`
- **Learning and Development ROI** — Training investment vs measurable skill improvement  
  `learning-and-development-roi`
- **Manager Span of Control** — Direct reports per manager, flagging overloaded supervisors  
  `manager-span-of-control`
- **New Hire 90-Day Retention Rate** — Percentage of new hires still employed after 90 days  
  `new-hire-90-day-retention-rate`
- **Organizational Network Analysis** — Collaboration patterns across teams from Slack and email metadata  
  `organizational-network-analysis`
- **Overtime Hours by Facility** — OT trending by location, flagging burnout risk. Goal: Retain drivers and warehouse staff, reduce turnover, stay compliant.  
  `overtime-hours-by-facility`
- **Payroll Accuracy Report** — Payroll corrections as percentage of total runs  
  `payroll-accuracy-report`
- **Performance Review Completion Rate** — Annual and mid-year review submission status  
  `performance-review-completion-rate`
- **PTO Balance and Usage Report** — Accrued, used, and forfeited PTO by department  
  `pto-balance-and-usage-report`
- **Seasonal Hiring Pipeline** — Applicants, interviews, offers, starts for peak season ramp  
  `seasonal-hiring-pipeline`
- **Staffing Agency Spend and Quality** — Temp agency cost, fill rate, and conversion-to-perm rate  
  `staffing-agency-spend-and-quality`
- **Succession Planning Readiness** — Key roles, identified successors, readiness level  
  `succession-planning-readiness`
- **Time to Fill Open Roles** — Recruiting velocity by role type. Goal: Retain drivers and warehouse staff, reduce turnover, stay compliant.  
  `time-to-fill-open-roles`
- **Training Completion Dashboard** — Required certifications by employee. Goal: Retain drivers and warehouse staff, reduce turnover, stay compliant.  
  `training-completion-dashboard`
- **Workers' Comp Claims Tracker** — Claims by facility, type, cost, return-to-work time. Goal: Retain drivers and warehouse staff, reduce turnover, stay compliant.  
  `workers-comp-claims-tracker`

## Customer Success / Account Management (26)

- **Account Expansion Readiness Score** — Composite signal: usage, satisfaction, whitespace, contract timing  
  `account-expansion-readiness-score`
- **Account Health Scorecard** — Composite score: volume trends, ticket frequency, NPS, payment status. Goal: Retain clients, increase NPS, drive adoption of new services.  
  `account-health-scorecard`
- **Churn Risk Monitor** — Accounts showing declining volume, rising complaints, or late payments. Goal: Retain clients, increase NPS, drive adoption of new services.  
  `churn-risk-monitor`
- **Client Communication Frequency** — Emails, calls, Slack messages per account per month  
  `client-communication-frequency`
- **Client Onboarding Tracker** — New account implementation milestones and delays. Goal: Retain clients, increase NPS, drive adoption of new services.  
  `client-onboarding-tracker`
- **Client Sentiment Trend** — NPS/CSAT over time per account with inflection point detection  
  `client-sentiment-trend`
- **Client Training Completion** — Customer-side training on portal, SOPs, and processes  
  `client-training-completion`
- **Client-Reported Issue Recurrence** — Same problem types surfacing repeatedly for specific accounts  
  `client-reported-issue-recurrence`
- **Contract Utilization Rate** — Committed volume vs actual volume consumed per contract  
  `contract-utilization-rate`
- **Customer Success Manager Book of Business** — Portfolio view per CSM: accounts, revenue, health, capacity  
  `customer-success-manager-book-of-business`
- **Escalation Tracker** — Open escalations, owner, age, client impact. Goal: Retain clients, increase NPS, drive adoption of new services.  
  `escalation-tracker`
- **Executive Sponsor Engagement** — When did we last meet with the economic buyer, per account  
  `executive-sponsor-engagement`
- **Feature Adoption Curve** — Which service capabilities each client is actually using over time  
  `feature-adoption-curve`
- **Implementation Milestone Velocity** — Are clients getting through onboarding faster or slower over time  
  `implementation-milestone-velocity`
- **Multi-Year Revenue Retention Cohort** — Revenue retained by cohort year, net of churn and expansion  
  `multi-year-revenue-retention-cohort`
- **NPS Survey Results** — Scores by segment, region, account manager. Goal: Retain clients, increase NPS, drive adoption of new services.  
  `nps-survey-results`
- **Post-Incident Recovery Score** — How fast satisfaction rebounds after a critical failure  
  `post-incident-recovery-score`
- **Proactive Outreach Log** — Scheduled vs actual proactive touchpoints per account per quarter  
  `proactive-outreach-log`
- **QBR Action Item Completion Rate** — Follow-through on commitments made during quarterly reviews  
  `qbr-action-item-completion-rate`
- **Quarterly Business Review Prep** — Auto-assembled QBR packet: volume, SLAs, savings, issues. Goal: Retain clients, increase NPS, drive adoption of new services.  
  `quarterly-business-review-prep`
- **Risk-Adjusted Revenue Forecast** — Revenue weighted by churn probability per account  
  `risk-adjusted-revenue-forecast`
- **Service Adoption Matrix** — Which clients use which service lines, whitespace map. Goal: Retain clients, increase NPS, drive adoption of new services.  
  `service-adoption-matrix`
- **Support Ticket Escalation Path Analysis** — How tickets move from L1 to L2 to L3, time at each level  
  `support-ticket-escalation-path-analysis`
- **Support Ticket Trends by Account** — Ticket volume, resolution time, repeat issues. Goal: Retain clients, increase NPS, drive adoption of new services.  
  `support-ticket-trends-by-account`
- **Time to Value by Client** — Days from go-live to first measurable ROI metric  
  `time-to-value-by-client`
- **Voice of Customer Theme Report** — NLP-clustered themes from survey verbatims and ticket descriptions  
  `voice-of-customer-theme-report`

## IT / Engineering (26)

- **Access Review Completion** — Quarterly access recertification status per system  
  `access-review-completion`
- **API Rate Limit Utilization** — How close we are to vendor API rate limits per integration  
  `api-rate-limit-utilization`
- **Backup Success and Recovery Test** — Backup completion rates and last successful restore test  
  `backup-success-and-recovery-test`
- **Change Failure Rate** — Deployments causing incidents as percentage of total releases  
  `change-failure-rate`
- **Cloud Infrastructure Cost by Service** — AWS/GCP spend allocation per application  
  `cloud-infrastructure-cost-by-service`
- **Cybersecurity Incident Log** — Threats detected, phishing attempts, remediation status. Goal: System uptime, integration health, security posture.  
  `cybersecurity-incident-log`
- **Data Pipeline Freshness** — Last successful sync time for each data source. Goal: System uptime, integration health, security posture.  
  `data-pipeline-freshness`
- **Data Quality Score by Source** — Null rates, format violations, duplicate rates per data feed  
  `data-quality-score-by-source`
- **Database Query Performance** — Slow query log, p95 latencies, and degradation trends  
  `database-query-performance`
- **Deployment Frequency by Service** — Release cadence per microservice or module  
  `deployment-frequency-by-service`
- **Developer Environment Health** — CI/CD pipeline success rate, build times, flaky test count  
  `developer-environment-health`
- **Endpoint Security Posture** — Devices with current patches, antivirus, disk encryption  
  `endpoint-security-posture`
- **Feature Flag Status Report** — Active feature flags, age, owner, and cleanup status  
  `feature-flag-status-report`
- **Incident Severity Distribution Over Time** — P1/P2/P3/P4 incident trends by system  
  `incident-severity-distribution-over-time`
- **Integration Health Monitor** — API call success rates across Salesforce, SAP, carrier APIs. Goal: System uptime, integration health, security posture.  
  `integration-health-monitor`
- **IT Ticket Volume and Resolution** — Helpdesk metrics by category and priority. Goal: System uptime, integration health, security posture.  
  `it-ticket-volume-and-resolution`
- **Mean Time to Detect (MTTD)** — How long before we know something is broken  
  `mean-time-to-detect-mttd`
- **Mean Time to Recovery (MTTR)** — From detection to resolution, trending over time  
  `mean-time-to-recovery-mttr`
- **Migration Progress Tracker** — Legacy-to-modern system migration completion by module  
  `migration-progress-tracker`
- **On-Call Load Distribution** — Pages per engineer per week, rotation fairness  
  `on-call-load-distribution`
- **Runbook Coverage** — Percentage of critical systems with up-to-date runbooks  
  `runbook-coverage`
- **SLA Performance by Internal Service** — Internal teams treating each other as customers  
  `sla-performance-by-internal-service`
- **Software License Utilization** — Seats purchased vs. active for each SaaS tool. Goal: System uptime, integration health, security posture.  
  `software-license-utilization`
- **System Uptime Dashboard** — TMS, WMS, ERP availability and incident history. Goal: System uptime, integration health, security posture.  
  `system-uptime-dashboard`
- **Technical Debt Inventory** — Known debt items with estimated remediation cost and risk  
  `technical-debt-inventory`
- **Third-Party Dependency Vulnerability Scan** — CVEs in open-source dependencies by severity  
  `third-party-dependency-vulnerability-scan`

## Warehouse / Distribution (24)

- **Batch and Lot Traceability Log** — Full chain from receipt to shipment for regulated products  
  `batch-and-lot-traceability-log`
- **Cold Storage Temperature Monitoring** — Real-time and historical readings, alert log. Goal: Maximize throughput, minimize errors, maintain cold chain integrity.  
  `cold-storage-temperature-monitoring`
- **Cross-Dock vs Put-Away Ratio** — What percentage of inbound goes straight to outbound  
  `cross-dock-vs-put-away-ratio`
- **Cycle Count Variance Report** — Inventory discrepancies by SKU, zone, frequency. Goal: Maximize throughput, minimize errors, maintain cold chain integrity.  
  `cycle-count-variance-report`
- **Damaged Goods Write-Off Report** — Product destroyed in warehouse by cause and category  
  `damaged-goods-write-off-report`
- **Dock Door Scheduling Compliance** — Scheduled vs actual dock appointments, no-shows  
  `dock-door-scheduling-compliance`
- **Dry Ice Consumption Tracker** — Usage rate, waste, reorder cadence by facility  
  `dry-ice-consumption-tracker`
- **Forklift Utilization and Maintenance** — Equipment hours, downtime, and certification compliance  
  `forklift-utilization-and-maintenance`
- **Hazmat Storage Compliance** — Regulated materials inventory and handling compliance. Goal: Maximize throughput, minimize errors, maintain cold chain integrity.  
  `hazmat-storage-compliance`
- **Inbound Quality Inspection Rate** — Rejection rate on receiving by vendor and product  
  `inbound-quality-inspection-rate`
- **Inventory Turns by Product Category** — How fast medical supplies move through each DC. Goal: Maximize throughput, minimize errors, maintain cold chain integrity.  
  `inventory-turns-by-product-category`
- **Labor Productivity by Shift** — Units per labor hour by facility, shift, and role  
  `labor-productivity-by-shift`
- **Order Cutoff Time Compliance** — Orders placed after cutoff vs shipped same day anyway  
  `order-cutoff-time-compliance`
- **Outbound Staging Time** — How long shipments sit on the dock after packing  
  `outbound-staging-time`
- **Packaging Waste and Sustainability Report** — Waste by material type, recycling rates, cost  
  `packaging-waste-and-sustainability-report`
- **Pallet Build Accuracy** — Mixed-SKU pallet errors by shift and facility  
  `pallet-build-accuracy`
- **Pick/Pack Error Rate** — Errors per thousand units by facility and shift. Goal: Maximize throughput, minimize errors, maintain cold chain integrity.  
  `pick-pack-error-rate`
- **Receiving Dock Wait Times** — Average time from arrival to unload by facility. Goal: Maximize throughput, minimize errors, maintain cold chain integrity.  
  `receiving-dock-wait-times`
- **Returns Processing Throughput** — Reverse logistics receiving speed and disposition outcomes  
  `returns-processing-throughput`
- **SKU Velocity Classification** — ABC analysis of product movement for slot optimization  
  `sku-velocity-classification`
- **Slotting Efficiency Analysis** — Pick path distances vs optimal slot placement  
  `slotting-efficiency-analysis`
- **Warehouse Capacity Utilization** — Space usage by zone, refrigerated vs. ambient. Goal: Maximize throughput, minimize errors, maintain cold chain integrity.  
  `warehouse-capacity-utilization`
- **Warehouse Staffing vs Volume Alignment** — Headcount overlay with daily shipment volume  
  `warehouse-staffing-vs-volume-alignment`
- **Zone Temperature Compliance Heatmap** — Color-coded map of zones passing/failing temp targets  
  `zone-temperature-compliance-heatmap`

## Fleet Management (23)

- **Accident and Incident Report** — Incidents by driver, location, severity, cost. Goal: Maximize uptime, control maintenance costs, ensure regulatory compliance.  
  `accident-and-incident-report`
- **Battery Health Report (EV Fleet)** — State of charge degradation for electric vehicles  
  `battery-health-report-ev-fleet`
- **DOT Inspection Readiness Checklist** — Compliance gaps by vehicle. Goal: Maximize uptime, control maintenance costs, ensure regulatory compliance.  
  `dot-inspection-readiness-checklist`
- **Driver Certification Expiry Tracker** — CDL, hazmat endorsement, medical card expirations  
  `driver-certification-expiry-tracker`
- **Driver Idle Time Report** — Engine-on, vehicle-stationary minutes by driver and location  
  `driver-idle-time-report`
- **Driver Safety Scorecard** — Hard braking, speeding, HOS violations per driver. Goal: Maximize uptime, control maintenance costs, ensure regulatory compliance.  
  `driver-safety-scorecard`
- **ELD Compliance Dashboard** — Hours of service violations, audit-ready logs. Goal: Maximize uptime, control maintenance costs, ensure regulatory compliance.  
  `eld-compliance-dashboard`
- **Fleet Age and Depreciation Summary** — Asset age, book value, replacement timeline. Goal: Maximize uptime, control maintenance costs, ensure regulatory compliance.  
  `fleet-age-and-depreciation-summary`
- **Fleet Insurance Cost per Vehicle** — Premium allocation and claims history per asset  
  `fleet-insurance-cost-per-vehicle`
- **Fleet Total Cost of Ownership** — Fully loaded cost per vehicle per mile over lifecycle  
  `fleet-total-cost-of-ownership`
- **Fuel Card Transaction Audit** — Unusual fuel purchases, mismatched locations, fraud flags  
  `fuel-card-transaction-audit`
- **Fuel Consumption Tracker** — MPG trends by vehicle, driver, route. Goal: Maximize uptime, control maintenance costs, ensure regulatory compliance.  
  `fuel-consumption-tracker`
- **GPS Geofence Violation Log** — Unauthorized stops or route deviations  
  `gps-geofence-violation-log`
- **License and Registration Renewal Calendar** — Plates, registrations, and permits by vehicle  
  `license-and-registration-renewal-calendar`
- **Preventive Maintenance Schedule** — Upcoming service by vehicle, overdue alerts. Goal: Maximize uptime, control maintenance costs, ensure regulatory compliance.  
  `preventive-maintenance-schedule`
- **Refrigeration Unit Runtime Report** — Reefer hours, fuel consumption, and failure events  
  `refrigeration-unit-runtime-report`
- **Roadside Assistance Call Log** — Breakdown calls by vehicle, location, response time, cost  
  `roadside-assistance-call-log`
- **Telematics Alert Summary** — All Motive/Samsara alerts aggregated by type and severity  
  `telematics-alert-summary`
- **Tire Wear and Replacement Forecast** — Mileage-based tire lifecycle predictions per vehicle  
  `tire-wear-and-replacement-forecast`
- **Vehicle Acquisition Pipeline** — Ordered, in production, in transit, delivered status for new vehicles  
  `vehicle-acquisition-pipeline`
- **Vehicle Assignment History** — Which drivers drove which vehicles, and when  
  `vehicle-assignment-history`
- **Vehicle Downtime Root Cause** — Breakdown vs scheduled maintenance vs accident downtime split  
  `vehicle-downtime-root-cause`
- **Vehicle Utilization Report** — Active vs. idle hours per vehicle per day. Goal: Maximize uptime, control maintenance costs, ensure regulatory compliance.  
  `vehicle-utilization-report`

## Executive / Leadership (22)

- **Annual Planning Scenario Model** — Three-year plan with base, stretch, and conservative tracks  
  `annual-planning-scenario-model`
- **Board Action Item Tracker** — Open items from board meetings with owner and due date  
  `board-action-item-tracker`
- **Board Deck Data Pack** — Pre-assembled metrics for quarterly board meeting. Goal: Strategic visibility, board readiness, cross-functional alignment.  
  `board-deck-data-pack`
- **Company-Wide OKR Progress** — Objectives and key results by team with completion percentage  
  `company-wide-okr-progress`
- **Cross-Departmental Dependency Map** — Which teams are blocking which on strategic initiatives  
  `cross-departmental-dependency-map`
- **Customer Concentration Risk** — Revenue dependency on top 5/10 accounts. Goal: Strategic visibility, board readiness, cross-functional alignment.  
  `customer-concentration-risk`
- **ESG Scorecard** — Environmental, social, and governance metrics for investor reporting  
  `esg-scorecard`
- **Executive KPI Summary** — Top 10 company KPIs on one screen, trending arrows. Goal: Strategic visibility, board readiness, cross-functional alignment.  
  `executive-kpi-summary`
- **Geographic Expansion Readiness** — New market entry checklist and feasibility scores  
  `geographic-expansion-readiness`
- **Headcount vs Revenue Efficiency** — Revenue per FTE trending by quarter and department  
  `headcount-vs-revenue-efficiency`
- **Investor Relations Data Room** — Key metrics assembled for fundraising or due diligence  
  `investor-relations-data-room`
- **Key Risk Register** — Enterprise risks ranked by likelihood, impact, and mitigation status  
  `key-risk-register`
- **Leadership Team Capacity Report** — Executive bandwidth: open roles, span, and initiative load  
  `leadership-team-capacity-report`
- **M&A Target Screening** — Potential acquisition targets with financial and geographic fit. Goal: Strategic visibility, board readiness, cross-functional alignment.  
  `m-a-target-screening`
- **Market Share Estimate** — Amaro's position vs. competitors in key verticals. Goal: Strategic visibility, board readiness, cross-functional alignment.  
  `market-share-estimate`
- **Monthly Operating Review Pack** — Pre-assembled leadership meeting deck with commentary  
  `monthly-operating-review-pack`
- **Net Revenue Retention Rate** — NRR trending by cohort and segment  
  `net-revenue-retention-rate`
- **Quarterly Earnings Prep Pack** — Revenue, margin, guidance, and talking points  
  `quarterly-earnings-prep-pack`
- **Regulatory Risk Heatmap** — Upcoming regulatory changes and their business impact. Goal: Strategic visibility, board readiness, cross-functional alignment.  
  `regulatory-risk-heatmap`
- **Strategic Account Watch List** — Top 10 accounts requiring executive attention this quarter  
  `strategic-account-watch-list`
- **Strategic Initiative Tracker** — Major initiatives, milestones, owners, RAG status. Goal: Strategic visibility, board readiness, cross-functional alignment.  
  `strategic-initiative-tracker`
- **Technology Investment Portfolio** — All tech initiatives ranked by strategic value and cost  
  `technology-investment-portfolio`

## Procurement / Supply Chain (22)

- **Blanket PO Utilization** — Spend against blanket/standing orders vs ceiling  
  `blanket-po-utilization`
- **Contract Expiration Calendar** — Vendor and client contracts approaching renewal. Goal: Control input costs, ensure supply continuity, manage vendor relationships.  
  `contract-expiration-calendar`
- **Emergency Procurement Log** — Rush orders, justifications, and cost premium analysis  
  `emergency-procurement-log`
- **Fuel Hedging Position** — Current hedge coverage and exposure to spot pricing. Goal: Control input costs, ensure supply continuity, manage vendor relationships.  
  `fuel-hedging-position`
- **Green Procurement Report** — Sustainable sourcing metrics and eco-friendly product adoption  
  `green-procurement-report`
- **Import Duty and Tariff Tracker** — Duties paid by shipment type and country of origin  
  `import-duty-and-tariff-tracker`
- **Lease vs Buy Analysis** — Vehicle and equipment lease-vs-purchase cost comparison  
  `lease-vs-buy-analysis`
- **Maverick Spend Report** — Purchases made outside of contracted vendors or approved catalogs  
  `maverick-spend-report`
- **Packaging and Supplies Reorder Forecast** — When to reorder thermal shippers, labels, dry ice. Goal: Control input costs, ensure supply continuity, manage vendor relationships.  
  `packaging-and-supplies-reorder-forecast`
- **Procurement Approval Queue** — Open purchase requests awaiting approval, with aging  
  `procurement-approval-queue`
- **Purchase Order Cycle Time** — PO creation to delivery time by vendor and category  
  `purchase-order-cycle-time`
- **Raw Material Price Index** — Key input prices (fuel, packaging, dry ice) vs historical  
  `raw-material-price-index`
- **Reusable Container Tracking** — Reusable shipper inventory, location, and return rate  
  `reusable-container-tracking`
- **Savings Pipeline Tracker** — Negotiated savings initiatives with projected and realized impact  
  `savings-pipeline-tracker`
- **Sole Source Dependency Report** — Products with only one qualified supplier  
  `sole-source-dependency-report`
- **Supplier Diversity Dashboard** — Diverse supplier spend as percentage of total procurement  
  `supplier-diversity-dashboard`
- **Supplier Onboarding Pipeline** — New vendors in evaluation, qualification, and approval stages  
  `supplier-onboarding-pipeline`
- **Supplier Risk Scoring** — Financial health, geographic risk, and compliance scores per vendor  
  `supplier-risk-scoring`
- **Vendor Lead Time Trend** — Supplier delivery times trending by product category  
  `vendor-lead-time-trend`
- **Vendor Payment Term Optimization** — Early pay discounts captured vs available  
  `vendor-payment-term-optimization`
- **Vendor Scorecard** — On-time delivery, quality, pricing compliance per supplier. Goal: Control input costs, ensure supply continuity, manage vendor relationships.  
  `vendor-scorecard`
- **Vendor Spend Analysis** — Total spend by vendor, category, trending. Goal: Control input costs, ensure supply continuity, manage vendor relationships.  
  `vendor-spend-analysis`

## Quality Assurance (21)

- **Calibration Schedule and Status** — Instrument calibration due dates, overdue flags  
  `calibration-schedule-and-status`
- **Continuous Improvement Project Tracker** — Kaizen, Lean, and Six Sigma projects with status and savings  
  `continuous-improvement-project-tracker`
- **Corrective Action Effectiveness Review** — CAPAs verified as effective vs reopened  
  `corrective-action-effectiveness-review`
- **Customer Audit Readiness Score** — Client-initiated audit preparation status by account  
  `customer-audit-readiness-score`
- **Customer Complaint Resolution** — Complaints by category, time to resolution, recurrence. Goal: Maintain service quality, reduce defects, drive continuous improvement.  
  `customer-complaint-resolution`
- **Deviation Report Summary** — Planned vs unplanned deviations by category and severity  
  `deviation-report-summary`
- **Document Control Change Log** — SOP and work instruction revision history and approval chain  
  `document-control-change-log`
- **First Pass Yield by Process** — Percentage completing a process step without rework  
  `first-pass-yield-by-process`
- **Internal Audit Schedule and Findings** — Planned vs completed audits, finding trends  
  `internal-audit-schedule-and-findings`
- **Management Review Meeting Pack** — Auto-assembled quality metrics for quarterly management review  
  `management-review-meeting-pack`
- **Packaging Integrity Failure Rate** — Damaged packaging incidents by product type and carrier. Goal: Maintain service quality, reduce defects, drive continuous improvement.  
  `packaging-integrity-failure-rate`
- **Process Capability Index (Cpk) Dashboard** — Statistical process control for key operations  
  `process-capability-index-cpk-dashboard`
- **Quality Cost Report** — Prevention, appraisal, internal failure, and external failure costs  
  `quality-cost-report`
- **Quality Incident Trend Report** — Incidents by type, facility, severity over time. Goal: Maintain service quality, reduce defects, drive continuous improvement.  
  `quality-incident-trend-report`
- **Root Cause Analysis Summary** — Top recurring root causes across all incidents. Goal: Maintain service quality, reduce defects, drive continuous improvement.  
  `root-cause-analysis-summary`
- **Specimen Viability Rate** — Percentage of biological specimens arriving within spec. Goal: Maintain service quality, reduce defects, drive continuous improvement.  
  `specimen-viability-rate`
- **Stability Study Tracker** — Ongoing product stability testing milestones and results  
  `stability-study-tracker`
- **Standard Operating Procedure (SOP) Review Status** — SOPs due for review, overdue count. Goal: Maintain service quality, reduce defects, drive continuous improvement.  
  `standard-operating-procedure-sop-review-status`
- **Supplier Quality Nonconformance Log** — NCRs by vendor, material, and resolution time  
  `supplier-quality-nonconformance-log`
- **Supplier Scorecard with Quality Metrics** — OTD, defect rate, responsiveness per material supplier  
  `supplier-scorecard-with-quality-metrics`
- **Trend Analysis: Top 5 Defect Types** — Monthly trending of the five most common defect categories  
  `trend-analysis-top-5-defect-types`

## Marketing (20)

- **Account-Based Marketing Campaign Tracker** — ABM program engagement per target account  
  `account-based-marketing-campaign-tracker`
- **Analyst Relations Activity Log** — Briefings, reports, and mentions from Gartner, Forrester, KLAS  
  `analyst-relations-activity-log`
- **Brand Awareness Survey Tracker** — Aided/unaided awareness in target segments. Goal: Generate qualified leads, build brand in healthcare logistics.  
  `brand-awareness-survey-tracker`
- **Case Study Production Pipeline** — In-progress, published, and retired case studies with performance  
  `case-study-production-pipeline`
- **Competitive Intelligence Digest** — Competitor news, product launches, and pricing changes  
  `competitive-intelligence-digest`
- **Content Performance Report** — Blog, whitepaper, webinar engagement and lead gen. Goal: Generate qualified leads, build brand in healthcare logistics.  
  `content-performance-report`
- **Customer Reference Program Status** — Available references by segment, usage count, freshness  
  `customer-reference-program-status`
- **Email Campaign Performance** — Open rate, click rate, unsubscribe rate by campaign  
  `email-campaign-performance`
- **Event ROI Calculator** — Cost vs. pipeline generated per trade show or conference. Goal: Generate qualified leads, build brand in healthcare logistics.  
  `event-roi-calculator`
- **Lead Source Attribution** — Leads by channel with conversion. Goal: Generate qualified leads, build brand in healthcare logistics.  
  `lead-source-attribution`
- **Marketing Budget Pacing** — Spend vs plan by channel and quarter, with forecast  
  `marketing-budget-pacing`
- **Marketing Qualified Lead to SQL Conversion** — MQL-to-SQL handoff rate and speed by source  
  `marketing-qualified-lead-to-sql-conversion`
- **Partner Marketing Co-Investment** — Joint campaigns with partners, cost sharing, lead splits  
  `partner-marketing-co-investment`
- **PR and Media Mention Tracker** — Earned media coverage, sentiment, and reach  
  `pr-and-media-mention-tracker`
- **SEO Keyword Ranking Report** — Target keyword positions, changes, and organic traffic  
  `seo-keyword-ranking-report`
- **Social Media Engagement Dashboard** — Impressions, engagement rate, follower growth by platform  
  `social-media-engagement-dashboard`
- **Thought Leadership Content Calendar** — Planned vs published content with gap analysis  
  `thought-leadership-content-calendar`
- **Trade Show and Conference Calendar** — Upcoming events, investment, goals, and past performance  
  `trade-show-and-conference-calendar`
- **Webinar Funnel Report** — Registrations, attendance, engagement, and downstream pipeline  
  `webinar-funnel-report`
- **Website Traffic and Conversion** — Visits, form fills, demo requests by page. Goal: Generate qualified leads, build brand in healthcare logistics.  
  `website-traffic-and-conversion`

## Cross-Functional and Special Purpose (17)

- **Annual Insurance Renewal Prep Pack** — Assembled data for broker submission  
  `annual-insurance-renewal-prep-pack`
- **Benchmarking Against Industry Peers** — Key metrics vs published industry benchmarks  
  `benchmarking-against-industry-peers`
- **Client Site Audit Preparation** — Assembled evidence and metrics for a specific client's audit  
  `client-site-audit-preparation`
- **Customer Advisory Board Prep** — Assembled metrics and topics for advisory board meeting  
  `customer-advisory-board-prep`
- **Disaster Recovery Activation Log** — DR events, systems recovered, RTO/RPO compliance  
  `disaster-recovery-activation-log`
- **Franchise or License Agreement Monitor** — Obligations, fees, and performance against franchise terms  
  `franchise-or-license-agreement-monitor`
- **Government Contract Compliance** — Federal and state contract-specific reporting requirements  
  `government-contract-compliance`
- **Merger Integration Checklist** — Post-acquisition integration tasks across all departments  
  `merger-integration-checklist`
- **Multi-Entity Consolidation Report** — Financial consolidation across subsidiaries and divisions  
  `multi-entity-consolidation-report`
- **New Facility Launch Readiness** — Checklist and status tracker for opening a new distribution center. Goal: Situational awareness that doesn't fit neatly into one department.  
  `new-facility-launch-readiness`
- **New Service Line Launch Tracker** — Go-to-market readiness for a new logistics product  
  `new-service-line-launch-tracker`
- **Pandemic Response Readiness** — PPE inventory, remote work capacity, essential worker coverage  
  `pandemic-response-readiness`
- **Post-Mortem: Critical Shipment Failure** — Deep dive into a specific high-impact delivery failure with timeline, root cause, and remediation. Goal: Situational awareness that doesn't fit neatly into one department.  
  `post-mortem-critical-shipment-failure`
- **Snow Day Contingency Impact** — Weather event impact on operations, staffing, and client SLAs  
  `snow-day-contingency-impact`
- **Sustainability Report Data Pack** — ESG metrics assembled for annual sustainability report  
  `sustainability-report-data-pack`
- **Town Hall Metrics Pack** — Company-wide metrics assembled for all-hands presentation  
  `town-hall-metrics-pack`
- **Year-End Close Checklist** — Cross-departmental tasks for fiscal year-end  
  `year-end-close-checklist`

## Clinical and Lab Services (16)

- **Blood Product Inventory by Type** — Blood bank distribution center inventory and expiry dates  
  `blood-product-inventory-by-type`
- **Clinical Courier SLA by Hospital** — Courier performance at each hospital system  
  `clinical-courier-sla-by-hospital`
- **Clinical Trial Shipment Tracker** — Active trial shipments with protocol compliance status  
  `clinical-trial-shipment-tracker`
- **Home Health Delivery Schedule** — Patient-facing medical supply deliveries with satisfaction  
  `home-health-delivery-schedule`
- **Lab Result Turnaround Time** — Time from specimen pickup to result delivery by lab partner  
  `lab-result-turnaround-time`
- **Medical Device Recall Response** — Active recalls, affected inventory, retrieval completion rate  
  `medical-device-recall-response`
- **Organ Transport Response Time** — Time from request to wheels-up for time-critical organs  
  `organ-transport-response-time`
- **Pathology Slide Transit Time** — Turnaround for physical pathology specimen transport  
  `pathology-slide-transit-time`
- **Patient Specimen Chain of Identity** — Full identity verification chain for regulated specimens  
  `patient-specimen-chain-of-identity`
- **Pharmacy Distribution Volume** — Prescription medication shipment volume by class and corridor  
  `pharmacy-distribution-volume`
- **Point-of-Care Testing Supply Chain** — Rapid test kit distribution and expiry management  
  `point-of-care-testing-supply-chain`
- **Reference Lab Routing Optimization** — Which reference lab gets which test type, by geography  
  `reference-lab-routing-optimization`
- **Specimen Collection Kit Distribution** — Kit inventory, fulfillment rate, and lead times  
  `specimen-collection-kit-distribution`
- **Specimen Rejection Rate by Reason** — Why labs reject specimens: temperature, labeling, quantity  
  `specimen-rejection-rate-by-reason`
- **Transplant Logistics Dashboard** — Cross-match to delivery timeline for transplant organs  
  `transplant-logistics-dashboard`
- **Vaccine Cold Chain Compliance** — End-to-end temperature compliance for vaccine distribution  
  `vaccine-cold-chain-compliance`

## Data and Analytics (15)

- **App Creation Velocity** — New apps created per week, by department and creator  
  `app-creation-velocity`
- **Business Rule Registry Utilization** — Which rules are applied, which are orphaned  
  `business-rule-registry-utilization`
- **Cache Hit Rate Report** — How often the semantic cache serves results vs live query  
  `cache-hit-rate-report`
- **Cost per Insight** — Infrastructure and compute cost allocated per app execution  
  `cost-per-insight`
- **Data Freshness SLA Compliance** — Which sources are meeting their freshness targets  
  `data-freshness-sla-compliance`
- **Data Lineage Trace** — Full upstream-to-downstream dependency graph per dataset  
  `data-lineage-trace`
- **Data Quality Trend by Source** — Completeness, accuracy, and timeliness scores trending  
  `data-quality-trend-by-source`
- **Data Source Catalog** — All connected sources with schema, owner, and freshness  
  `data-source-catalog`
- **Entity Resolution Audit** — Fuzzy matching accuracy: correct merges vs false positives  
  `entity-resolution-audit`
- **Fidelity Score Distribution** — Breakdown of all apps by fidelity tier  
  `fidelity-score-distribution`
- **Model Accuracy Tracker** — Prediction accuracy for forecasting apps over time  
  `model-accuracy-tracker`
- **Natural Language Query Classification** — How user questions map to intent types and sources  
  `natural-language-query-classification`
- **Query Cost and Performance** — Snowflake credit consumption by app and query pattern  
  `query-cost-and-performance`
- **User Adoption Dashboard** — Active users, session frequency, and feature engagement  
  `user-adoption-dashboard`
- **Work App Usage Analytics** — Which apps get run, how often, by whom  
  `work-app-usage-analytics`

## Risk and Insurance (12)

- **Business Interruption Scenario Model** — Revenue impact estimates for facility closure scenarios  
  `business-interruption-scenario-model`
- **Cargo Loss and Damage Claim Trend** — Claims filed, approved, denied, and average payout  
  `cargo-loss-and-damage-claim-trend`
- **Claims Reserving Accuracy** — Reserves set vs actual payout on closed claims  
  `claims-reserving-accuracy`
- **Contractual Liability Matrix** — Indemnification and liability cap provisions by client contract  
  `contractual-liability-matrix`
- **Cyber Insurance Coverage Analysis** — Coverage limits vs estimated exposure by threat type  
  `cyber-insurance-coverage-analysis`
- **Fleet Accident Frequency Rate** — Accidents per million miles, trending with benchmarks  
  `fleet-accident-frequency-rate`
- **Professional Liability Exposure** — Errors and omissions risk by service line  
  `professional-liability-exposure`
- **Property Risk Assessment by Facility** — Natural disaster, theft, and fire risk per location  
  `property-risk-assessment-by-facility`
- **Risk Appetite Dashboard** — Current risk profile vs board-approved risk appetite thresholds  
  `risk-appetite-dashboard`
- **Subcontractor Insurance Verification** — Certificate of insurance status for all contractors  
  `subcontractor-insurance-verification`
- **Total Cost of Risk Dashboard** — Premiums + retained losses + risk management costs  
  `total-cost-of-risk-dashboard`
- **Workers Comp Experience Mod Forecast** — Projected EMR based on current claim trends  
  `workers-comp-experience-mod-forecast`
