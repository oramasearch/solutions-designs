# Research request: a comprehensive compendium of enterprise AI use cases

## Mission

Produce an **extensive, comprehensive compendium of enterprise AI use cases** — the business problems enterprises solve (or try to solve) with AI. This is a reference compendium, not an overview: enumerate as many distinct use cases as the evidence supports, describe each rigorously using the dossier template below, and organize them by business function and industry. Be exhaustive rather than selective — breadth first, then depth on every entry. Do not truncate for length.

## Definitions that scope this research (use these terms exactly)

- **Use case** — the subject of this research: **the business problem being solved**, stated independently of any particular way of solving it (e.g. churn, invoice fraud, demand forecasting, ticket triage). A use case is a *generic problem type* that many companies instantiate on their own data — not one company's project.
- **Methodology** — a reusable arrangement of AI methods (extract → feature-engineer → train → explain → report). **Not the subject of this research** — name it per use case only as a one-line orientation.
- **Solution** — a methodology applied correctly in context and wired to a business action. **Not the subject of this research.**

The relationship: many use cases ≈ many solutions ≫ few methodologies. This compendium catalogs the **problem layer**: what the problems are, who has them, what they're worth, and what it takes for them to be solvable.

**Anchoring example** (include and elaborate as an early entry): **churn** — the problem of customers leaving. Which entity is at risk (account, subscriber, merchant), over what horizon, what it costs the business, who owns it (customer success / growth / product), what data the problem naturally produces (usage, billing, support, CRM), and what actions a prediction would enable (outreach, offers, service recovery).

## Dossier template — complete EVERY field for EVERY use case

1. **Name + aliases** — the common name and synonyms used across industries.
2. **Problem statement** — one to three sentences, in business terms, with no method named.
3. **Who has it** — industries where it appears, the business function it lives in, and the role that owns the outcome.
4. **Economic pool** — what the problem costs (or what solving it is worth): revenue, margin, loss avoidance, working capital, labor hours, risk exposure. Cite estimates with source and year.
5. **Decision framing** — the **entity** being decided about (customer, SKU, transaction, machine, ticket…), the **decision** made, the **label/outcome** that defines success, and the **horizon** (how far ahead, how often decided).
6. **Decision frequency and scale** — how many of these decisions per day/month, and at what volume value concentrates.
7. **Data exhaust** — the data the problem naturally produces and the systems of record it lives in (CRM, ERP, billing, telemetry, tickets, logs…), including how commonly that data actually exists in usable form.
8. **Actionability** — the concrete business actions a correct prediction/decision enables, and the system of action they run through (CRM task, pricing engine, work order, replenishment order, containment playbook…).
9. **Measurability** — the KPIs the business already tracks for this problem, and how impact would be proven (A/B, holdout, before/after, hard operating metric).
10. **Prerequisites & feasibility** — data, labels, history depth, integrations, and organizational conditions required before this use case is realistically attackable.
11. **Industry variants** — how the problem shifts by industry (e.g. churn in SaaS vs telecom vs banking vs insurance), where the variants are material.
12. **Adjacent/overlapping use cases** — problems it is often bundled with or confused with, and the boundary between them.
13. **Prevalence & adoption** — how common the use case is in practice, with evidence (surveys, analyst reports, case-study density).
14. **Documented results** — 2–5 cited real-world examples with quantified outcomes (company or sector, metric moved, magnitude, source, year).
15. **Failure modes** — why attempts at this use case commonly fail (data, organizational, incentive, measurement), with evidence.
16. **Typical methodology** — one line only: the methodology family that usually serves it (orientation, not the subject).
17. **Key references** — analyst research, surveys, case studies, practitioner writing.

## Coverage checklist — cover ALL of these business functions at minimum; enumerate the distinct use cases inside each

A. **Customer / revenue** — churn prediction & retention, customer lifetime value, next-best-action/offer, personalization & recommendations, lead scoring, opportunity/win prediction, sales forecasting, pricing & discount optimization, promotion effectiveness, market-basket/cross-sell, customer feedback & sentiment analysis, voice-of-customer mining.
B. **Customer service & support** — ticket triage & routing, response drafting/resolution automation, intent detection, agent assist, proactive care, call-center analytics (transcription → QA/insights), CSAT/escalation prediction, knowledge-base retrieval.
C. **Marketing** — audience segmentation, campaign response modeling, attribution & marketing-mix modeling, content generation & optimization, SEO/keyword intelligence, creative testing, email send-time/frequency optimization.
D. **Finance & accounting** — cash-flow and P&L forecasting, collections prioritization & DSO reduction, AP/AR exception handling, invoice matching & touchless processing, expense-fraud detection, journal-entry anomaly detection, financial-close automation, credit risk scoring, working-capital optimization, FP&A scenario modeling.
E. **Fraud, risk & compliance** — transaction fraud, account-takeover, AML/financial-crime detection, KYC screening, insurance claims fraud, underwriting risk, model risk & regulatory reporting, sanctions/adverse-media screening, policy compliance monitoring, contract-clause risk review.
F. **Supply chain, operations & logistics** — demand forecasting, inventory optimization & replenishment, supply planning, procurement spend analytics, supplier risk & selection, price/contract leakage detection, route optimization, ETA prediction, fleet management & telematics, warehouse slotting & labor planning, order-promise/fulfillment optimization, S&OP support.
G. **Manufacturing & industrial** — predictive maintenance, asset-failure prediction, quality inspection (visual and sensor), yield/process optimization, scrap & rework reduction, energy optimization, production scheduling, digital-twin simulation.
H. **IT, engineering & security** — incident prediction & triage (AIOps), root-cause analysis, alert correlation & noise reduction, capacity planning, code generation & review assistance, test generation, release-risk prediction, log anomaly detection, cybersecurity threat detection & response, phishing detection, vulnerability prioritization, identity/access anomaly detection.
I. **HR / people** — attrition prediction, workforce planning, recruiting funnel optimization, resume/job matching, skills inference, scheduling optimization, engagement-survey mining, internal mobility recommendation.
J. **Legal & document-heavy work** — contract review & extraction, document classification & routing, e-discovery, obligation tracking, regulatory-change monitoring, document summarization into structured records.
K. **Executive / cross-functional** — KPI anomaly detection & alerting, driver analysis ("why did the metric move"), scenario planning, board/ops reporting automation, M&A target screening, strategy research synthesis.
L. **Industry-specific families** (enumerate the distinct use cases in each): healthcare (prior authorization, claims/denials, clinical documentation, patient no-show, readmission risk, care-gap identification), banking/fintech (collections, limit management, transaction categorization), insurance (claims triage, severity prediction, subrogation detection), retail/CPG (assortment, shelf-space, shrink), telecom (network optimization, field-service dispatch), energy/utilities (load forecasting, grid anomaly, predictive asset care), public sector (benefits-fraud, case prioritization, records linkage), real estate/construction (project-risk, bid optimization).

If the evidence surfaces important use cases outside this checklist, include them — the checklist is a floor, not a ceiling.

## Cross-cutting syntheses to produce AFTER the dossiers

1. **Master taxonomy** — the full use-case inventory as a table: use case × business function × industries × entity/decision × economic pool × typical methodology (one word) — the map of the whole problem space.
2. **Value ranking** — the use cases ordered by expected value (economic pool × decision frequency × actionability × measurability), with the evidence behind each placement, and an explicit note where evidence is thin.
3. **Feasibility ranking** — ordered by how attackable they are today (data availability, label quality, integration difficulty, organizational friction).
4. **Value × feasibility grid** — the classic 2×2, placing every cataloged use case in a quadrant.
5. **Data-exhaust map** — systems of record (CRM, ERP, billing, ITSM, MES, EHR…) × the use cases each one's data enables.
6. **Prevalence reality-check** — which use cases are actually deployed at scale vs mostly piloted vs mostly talked about, with survey/analyst evidence.
7. **Failure-pattern synthesis** — the recurring reasons enterprise AI use cases fail, collected once, with the use cases most susceptible to each.

## Source and quality requirements

- Prefer **primary and authoritative sources**: analyst research (e.g. McKinsey, BCG, Gartner, Deloitte), peer-reviewed studies, industry surveys, named case studies with numbers, and practitioner engineering/data-science blogs. Use vendor marketing only for factual product claims, never for value or prevalence claims.
- **Cite every substantive claim** inline, with year. Distinguish measured results from projected/estimated value — never blur the two.
- Where sources conflict on value estimates, report the range and the disagreement.

## Output format

- A single, well-structured **markdown compendium**.
- Open with a short executive orientation (what a use case is, how the problem space is organized, the headline on where value concentrates) — then the full dossier per use case, grouped by the functions above — then the seven cross-cutting syntheses.
- Use tables for the master taxonomy, rankings, grid, and data-exhaust map.
- This is a compendium: **completeness beats brevity**. Do not summarize away detail; do not stop early.
