# 13 — perplexity_ask — AI technician scheduling and dispatch for the trades

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** "AI technician scheduling and dispatch optimization for HVAC, plumbing and electrical service companies (e.g. ServiceTitan Dispatch Pro, Probook, others): what data does it use (skills, location, job type, revenue potential, membership), what measured results do customers report (revenue per technician, drive time, jobs per day, close rate), and what does it cost?"
- **Timestamp (UTC):** 2026-10-09T20:31:52Z

## Response

````markdown
AI dispatch tools typically optimize **which technician gets which job and in what order**, balancing technician fit and travel against expected job value. The strongest publicly documented specifics are from ServiceTitan; figures from other vendors are less consistently supported by named, independently verifiable customer cases.

## What data do they use?

- **Technician qualifications and performance:** skills matched to job type, plus history such as conversion rates, average ticket, sales, and membership sales. ServiceTitan says Dispatch Pro also considers whether a technician tends to generate leads.[1][2]
- **Job and customer context:** job type, tags, business unit, priority, location, and historical job data. The system uses these inputs to estimate job value, including potential follow-on work.[1]
- **Routing and capacity:** technician location, estimated drive time, and the day’s schedule. Other tools may incorporate traffic, job duration, parts availability, and customer preferences, but these capabilities vary by product.[1][3]
- **Revenue potential:** ServiceTitan describes simulating possible assignments and weighing predicted job value against drive cost. Membership history is one element of technician performance, rather than a universal dispatch input across all platforms.[1]

## What results do customers report?

| Measure | Publicly reported result | How to interpret it |
|---|---:|---|
| Revenue and ticket size | ServiceTitan reports **1.5× more revenue growth** and **1.75× more average-ticket growth** for select customers; it also cites a **14% average-ticket increase**.[2] | Vendor-reported, not a guaranteed or industry-wide outcome. |
| Drive time | ServiceTitan reports a **10% decrease** among select customers.[2] | A specific vendor-reported result; results depend on baseline routing and schedule density. |
| Dispatcher capacity | ServiceTitan reports **up to 2× dispatcher efficiency**.[2] | This is dispatcher efficiency, not necessarily twice as many completed jobs. |
| Jobs booked | A separate ServiceTitan comparison reports **67% higher growth in jobs booked** for Dispatch Pro users than non-users.[3] | This is growth in bookings, not a 67% increase in completed jobs per technician. |
| Jobs per day and close rate | The sources reviewed do **not** provide a reliable, apples-to-apples customer result for jobs per technician per day or close rate. | Treat broad claims for these metrics as vendor or reseller claims unless the provider supplies a defined baseline, measurement period, and customer reference. |

ServiceTitan says its headline results reflect select customers measured over six months before and after implementation, with customers going live between January 2023 and January 2025; individual results vary.[2]

## What does it cost?

- **ServiceTitan Dispatch Pro:** The public help material says a Dispatch Pro subscription is required but does not publish a standard price.[4] Pricing appears to depend on package and is typically quoted by ServiceTitan.
- **Other dispatch or scheduling tools:** One provider’s market overview estimates roughly **$200–$700 per month** for AI scheduling add-ons, usually in addition to an existing field-service platform; costs can rise for higher call volume or more complex operations.[5] This is a broad estimate, not a verified price list for every vendor.
- **Probook:** The available public result describes revenue forecasting but does not disclose a price or enough detail to establish comparable customer results.[6]

For a vendor comparison, ask for the full recurring and implementation cost, which metrics are included in any performance claim, and a reference customer with similar trade mix, technician count, and call volume. Also request a pilot that tracks revenue per technician, drive time, completed jobs per day, and close rate against your own baseline.

[1] ServiceTitan Dispatch Pro overview. [2] ServiceTitan Dispatch Pro. [3] The AI Trades Dispatch Pro comparison. [4] ServiceTitan Dispatch Pro help page. [5] SuperDupr home-services pricing overview. [6] Probook platform.

Citations:
[1] https://www.servicetitan.com/features/pro/dispatch
[2] https://superdupr.com/solutions/ai-scheduling/home-services
[3] https://help.servicetitan.com/docs/dispatch-pro
[4] https://help.servicetitan.com/roofing/docs/dispatch-pro-home
[5] https://insights.velocityaipartners.co/solutions/ai-dispatch-scheduling-hvac
[6] https://theaitrades.ai/blog/ai-dispatching-software-contractors
[7] https://www.probook.ai/platform
[8] https://theaitrades.ai/blog/how-to-use-ai-dispatching-home-service-business
[9] https://help.servicetitan.com/v1/docs/dispatch-pro-overview
[10] https://pipelineon.com/blog/ai-tools-for-hvac-plumbing-scheduling/
````
