# 23-ask-legacy-code-migration

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** What are documented production results from AI agents and LLM tools used for legacy code modernization and migration inside companies (COBOL to Java, framework upgrades, large codebase migrations) in 2024-2026? Name companies (Airbnb test migration, Google, Amazon Q Java upgrades, Morgan Stanley DevGen.AI, Spotify Honk, Grab) and consultancies offering it, with reported time and cost savings.
- **Timestamp (UTC):** 2026-10-09T20:41:29.325Z

## Response (verbatim)

````
**The strongest publicly documented result in the available sources is Airbnb’s test-framework migration.** For several other companies named in the question, the sources available here do not substantiate specific production time or cost savings. Treat vendor and consultancy ROI claims separately from measured results reported by the companies themselves.

| Company | Documented work and reported result |
|---|---|
| **Airbnb** | Migrated nearly 3,500 React component test files from Enzyme to React Testing Library. Airbnb said a manual effort was estimated at 1.5 engineering years; its LLM-plus-automation pipeline completed the migration in six weeks. It migrated 75% of files in four hours, reached 97% after four days, and handled the remaining cases with engineering help. The company reported maintaining test intent and code coverage, but did **not** publish a dollar-savings figure in its engineering write-up.[1][3][10] |
| **Google** | No Google-specific primary result with a quantified modernization time or cost saving is established by the available sources. Broad claims that Google halved migration time need a link to the particular project or company report before they can be treated as documented production results.[8] |
| **Amazon Q Developer** | No Amazon-specific production result with quantified time or cost savings is established by the available sources. |
| **Morgan Stanley / DevGen.AI** | No quantified legacy-modernization or migration outcome is established by the available sources. |
| **Spotify / Honk** | No quantified production migration result is established by the available sources. |
| **Grab** | No quantified production migration result is established by the available sources. |

### What Airbnb’s numbers do—and don’t—show

Airbnb’s write-up is evidence for a specific, bounded migration: a large batch of similar test files, processed through automated refactoring and validation loops, with engineers addressing the long tail. It does **not** establish that comparable savings apply to COBOL-to-Java conversions, whole-system rewrites, or other migrations with different risks and dependencies.[1][3][10]

A **roughly $500,000 savings** figure appears in a LinkedIn post, not in the Airbnb engineering report; the company’s article says the overall cost was more efficient than its manual estimate but does not give a dollar amount.[1][4] For a defensible comparison, keep the engineering estimate and completion time separate from that externally stated cost estimate.

### Consultancies and service providers

The available sources do not document named consultancies’ independently verified, company-specific production outcomes or comparable savings for these cases. Providers may market AI-assisted modernization services, but their claims should be labeled as **vendor-reported** unless they disclose the client, project scope, baseline, measurement method, and whether the result was production-validated. In particular, don’t present a consultancy’s general percentage-saving claim as evidence for any of the named companies above.

**Bottom line:** Airbnb supplies a concrete, company-authored benchmark—about 3,500 test files, six weeks versus an estimated 1.5 engineering years, with human intervention for the remaining work. For Google, Amazon Q, Morgan Stanley, Spotify, Grab, and consultancies, the supplied sources are insufficient to quote reliable production time or cost savings.

Citations:
[1] https://airbnb.tech/infrastructure/accelerating-large-scale-test-migration-with-llms/
[2] https://almcorp.com/blog/airbnb-ai-writes-60-percent-of-new-code/
[3] https://www.infoq.com/news/2025/03/airbnb-llm-test-migration/
[4] https://www.linkedin.com/posts/markkovarski_accelerating-large-scale-test-migration-with-activity-7308526460250529795-Q1eq
[5] https://blog.pragmaticengineer.com/the-pulse-we-need-to-talk-about-migrations-with-ai/
[6] https://www.softwareseni.com/how-airbnb-compressed-years-of-technical-debt-into-weeks-using-ai-coding-assistants/
[7] https://airbnb.tech/blog/
[8] https://www.linkedin.com/posts/pranayagrawal-scaleupally_aiengineering-codemigration-airbnb-activity-7342766383211888640-18rR
[9] https://blog.bytebytego.com/p/inside-airbnbs-ai-powered-pipeline
[10] https://airbnb.tech/uncategorized/accelerating-large-scale-test-migration-with-llms/

````
