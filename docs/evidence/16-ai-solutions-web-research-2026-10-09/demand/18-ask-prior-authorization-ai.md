# 18 — perplexity_ask — prior authorization AI

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** "Prior authorization AI for physician practices, imaging centers and health systems in 2025-2026 (e.g. Latent, Ethermed, Cohere, Infinitus, Rhyme, AKASA, Waystar): what does it automate or predict (whether auth is required, approval likelihood, payer rules, form submission), what measured outcomes are reported (turnaround time, staff hours, denials), how is it priced, and is it sold to small and mid-size practices?"
- **Timestamp (UTC):** 2026-10-09T20:33:23Z

## Response

````markdown
Prior-authorization AI generally automates the **administrative work around a clinical decision**—checking whether authorization is needed, finding payer-specific requirements, assembling and submitting documentation, and tracking the request. Some products also estimate approval prospects or support clinical review, but vendor outcome claims are not directly comparable, and public pricing and independent evaluations are sparse.

| Vendor | What it automates or predicts | Reported outcomes | Pricing and fit for smaller practices |
|---|---|---|---|
| **Latent** | The available results don’t provide enough reliable vendor-specific detail to verify its current capabilities, outcomes, or pricing. | No substantiated figures found in the available sources. | Pricing and small-practice availability could not be verified. |
| **Ethermed** | The available results don’t provide enough reliable vendor-specific detail to verify its current capabilities, outcomes, or pricing. | No substantiated figures found in the available sources. | Pricing and small-practice availability could not be verified. |
| **Cohere Health** | AI-supported prior authorization and clinical review; reported capabilities include real-time approvals. | A 2026 vendor-comparison article reports more than 9 million authorizations processed and “up to 80%” real-time approvals; these are company/product claims, not a head-to-head independent benchmark.[1] | Typically sold by enterprise contract; positioned for health systems and specialty clinics, though one comparison says it supports small and mid-size practices.[1] |
| **Infinitus** | The available results don’t provide enough reliable detail to confirm its current PA-specific automation, outcomes, or pricing. | No substantiated PA-specific figures found in the available sources. | Pricing and small-practice availability could not be verified. |
| **Rhyme** | Described as an AI-first platform with predictive detection of authorization needs and EHR-embedded workflow support.[1] | The available results provide no dependable vendor-specific turnaround-time, staff-hour, or denial figures. | Pricing appears to be quote-based/enterprise in one comparison; small-practice access and minimums aren’t clear.[1] |
| **AKASA** | The available results associate AKASA with broader revenue-cycle automation, but don’t establish specific PA prediction or submission features.[1][7] | No substantiated PA-specific outcomes found. | Pricing and small-practice availability could not be verified. |
| **Waystar** | PA workflow within a broader revenue-cycle platform; detailed current automation scope depends on the product and implementation. | One 2026 comparison claims roughly 70% less submission time, about 85% auto-approval, and payer waits falling from over four days to a day or less; treat these as reported vendor/platform claims, not independently validated results.[3] | Enterprise/custom pricing is typical; the results characterize it as better suited to existing Waystar customers and larger organizations.[1][10] |

### What the tools typically handle

- **Check whether authorization is required:** Some systems identify orders that do not need PA, potentially preventing unnecessary submissions. A rehab-focused vendor comparison reports that one practice found 4,028 of 5,007 checked cases needed no authorization; that example is not evidence for the vendors in your list.[2]
- **Apply payer rules and predict approval:** Systems may match a service to payer-specific requirements and flag missing documentation. “Approval likelihood” is less consistently documented than workflow automation; a predicted score should not be treated as a payer decision.
- **Prepare and submit requests:** Many products aim to gather chart information, complete forms, submit through a payer portal or electronic connection, and track status. Actual end-to-end automation varies by payer, specialty, and EHR.
- **Reduce manual follow-up:** Some vendors automate status checks and route requests needing human or clinical attention. Public claims rarely isolate the hours saved from other process changes.

### Outcomes and pricing: what can be concluded

The available sources do **not** support a reliable cross-vendor comparison of turnaround time, staff hours saved, or authorization-related denials for Latent, Ethermed, Cohere, Infinitus, Rhyme, AKASA, and Waystar. Treat specific percentages as vendor or secondary-source claims, and ask vendors for the baseline, case volume, payer mix, measurement period, and whether results cover only automated cases.

Public pricing is also limited: the sources describe enterprise contracts or quote-based pricing for several platforms, while a broad pricing guide estimates approximately **$2–$8 per authorization** across the market—not as verified quotes for each named vendor.[1][4] Some tools are described as serving smaller or mid-size practices, but this does not establish that every product has a small-practice plan or that the economics work at low authorization volume.[1]

**Practical takeaway:** Small and mid-size practices can find PA automation, but should verify that the vendor supports their specialty, EHR, and actual payer mix—and request a pilot that reports no-auth detection, staff minutes per case, first-pass approval, turnaround, and PA-related denials separately.

Citations:
[1] https://omnimd.com/blog/ai-prior-authorization-tools/
[2] https://www.sprypt.com/blog/prior-authorization-software-pricing-comparison
[3] https://www.honeyhealth.ai/articles/10-best-prior-authorization-software-2026
[4] https://www.medicalrecords.com/ai-tools/pricing/prior-authorization
[5] https://www.honeyhealth.ai/articles/10-best-ai-prior-authorization-tools-2026
[6] https://www.getprosper.ai/blog/automated-prior-authorization-software
[7] https://www.medicalrecords.com/ai/spine/best-ai-rcm-and-prior-auth-tools-2026
[8] https://www.getprosper.ai/blog/best-healthcare-insurance-verification-services
[9] https://arstechnica.com/health/2026/09/trump-admin-using-ai-to-deny-medical-care-for-seniors-in-disastrous-experiment/
[10] https://www.guideflow.com/blog/prior-authorization-software
````
