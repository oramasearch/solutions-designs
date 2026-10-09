# 12-ask-entity-resolution-graph

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** How do companies use graph machine learning and entity resolution in production for business problems other than fraud? Examples: customer master data deduplication and householding, supplier/vendor master data matching, B2B account hierarchy and buying-group identification, product matching across retailers/competitor price monitoring, knowledge graphs for catalog. Give named company or vendor case studies (e.g. Senzing, Tamr, Quantexa, Zingg, Amperity, DoorDash, Walmart) and reported business results.
- **Timestamp (UTC):** 2026-10-09T20:39:55.417Z

## Response (verbatim)

````
Production systems generally use **entity resolution (ER) to decide which records refer to the same real-world entity**, then use the resulting identities and relationships to power customer profiles, account hierarchies, catalog search, analytics, and workflows. Graph methods help when the evidence is relational—for example, shared addresses, parent-subsidiary links, or products connected through attributes and seller listings—not just similar names.

## Named examples and reported results

| Business problem | Company / vendor example | Production use and reported result |
|---|---|---|
| **Customer identity and householding** | **Amperity / Alaska Airlines** | Amperity says it resolved customer identities into refreshed profiles for Alaska Airlines; targeted loyalty messaging reportedly increased email opens by 61.1%, click-throughs by 22.5%, and loyalty sign-ups by 198%.[9] Amperity also reports that New Look resolved 3.4 million profiles, saved £1 million in media spend, and lifted return on ad spend by 50%.[2] |
| **Customer 360 and marketing** | **Amperity / unnamed enterprise retailer** | The retailer connected siloed customer data and built Customer 360 profiles in 10 weeks; the company reports 16× more email clicks and 36% higher Facebook return on ad spend.[3] |
| **B2B entity resolution and hierarchy context** | **Quantexa / U.S. commercial insurer** | Quantexa describes resolving records across 20+ lines of business and more than 10 million customers. The insurer reportedly cut policy issuance from weeks to hours, automated 75% of pre-population and analytics modeling, and raised entity-match accuracy from about 60% to 98%.[6] This is an insurance example, but the same entity-and-relationship approach can support commercial account views and hierarchy analysis. |
| **Supplier, regulatory-site, and vendor-risk data** | **Zingg / Redica Systems** | Redica used Zingg to reconcile more than 10 million regulatory site records into 330,000 golden records. Zingg reports over 90% improvement in match accuracy versus legacy rule-based systems, and processing time falling from 5–6 hours to under 45 minutes.[10] This is a close analogue to supplier/vendor master matching, though the source describes regulatory sites rather than a procurement master. |
| **Large-scale identity resolution infrastructure** | **Senzing / Verisk** | Verisk used Senzing to integrate more than 1.6 billion records and resolve 420 million identities; reported search times fell below one second, and new data sources could be linked in days rather than months.[7] The cited case is fraud-oriented, so it demonstrates scale and platform operation more than a non-fraud business outcome. |
| **Cross-retailer product matching / catalog knowledge graph** | **No supported named result in the available sources** | The available results do not substantiate a named DoorDash or Walmart case with reported product-matching or catalog-graph metrics, so those examples should not be presented as verified here. |

## What the production pattern looks like

- **Ingest and normalize** records from CRM, ERP, transactions, supplier feeds, websites, or third-party datasets.
- **Generate candidate matches** using blocking, shared identifiers, text similarity, and domain-specific rules; ML or probabilistic scoring ranks likely matches.
- **Use graph context** to improve decisions: a person may connect to multiple addresses or accounts; a supplier may connect to subsidiaries and facilities; a product may connect to listings through brand, model, dimensions, and category.
- **Create durable entity IDs and relationships**, while retaining source records and match evidence so teams can inspect or reverse decisions.
- **Route uncertain matches to people** and feed adjudicated examples back into rules or models.
- **Measure business outcomes**, not only match accuracy: duplicates removed, time to resolve, profile coverage, media efficiency, quote speed, or downstream data quality.

The strongest published non-fraud outcomes in these results are customer-marketing improvements from Amperity and faster, more accurate regulatory-entity resolution at Redica. Supplier-master matching and retailer product matching are plausible applications of the same production pattern, but the available sources do not provide sufficiently supported named case results for those specific categories.

Citations:
[1] https://amperity.com/platform/customer-360
[2] https://amperity.com/solutions/customer-journey-orchestration
[3] https://amperity.com/resources/case-study-enterprise-retail-brand-powers-customer-360-initiative
[4] https://www.casestudies.com/company/amperity/case-study/enterprise-retail-brand-powers-customer-360-initiative-in-just-10-weeks-using-amperity
[5] https://amperity.com/resources
[6] https://www.quantexa.com/blog/smarter-underwriting-decisions-in-a-soft-market/
[7] https://senzing.com/insurance-fraud-threats-entity-resolution/
[8] https://www.zingg.ai/case-studies/blue-pencil-elevates-social-impact-with-ai-driven-entity-resolution
[9] https://assets.ctfassets.net/5vqt5w81x2im/4s1A9IvPChcUsNSlNz0l8I/194909cffeecb0719e51d748db2f8399/Amperity_IdentityResolutionGuide.pdf
[10] https://www.zingg.ai/post/when-customers-grow-we-grow-with-them-redicas-journey-with-zingg

````
