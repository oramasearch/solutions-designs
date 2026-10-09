# 31-ask-text-to-sql-agents

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** What documented production results exist for natural-language-to-SQL analytics agents (text-to-SQL, AI data analyst) inside companies in 2024-2026, e.g. Uber QueryGPT, LinkedIn SQL Bot, Grab, Pinterest, Swiggy Hermes, Instacart, Wayfair, and mid-sized companies using Snowflake Cortex Analyst, Databricks Genie, ThoughtSpot? Quantify query accuracy, analyst requests deflected, time saved.
- **Timestamp (UTC):** 2026-10-09T20:42:32.922Z

## Response (verbatim)

````
The public record is **thin on independently verified production metrics**. The clearest first-party result in the available sources is Uber QueryGPT; most figures for other companies are either not documented here or are vendor/product benchmarks rather than observed company-wide outcomes.

| Company or product | Documented result | How to interpret it |
|---|---|---|
| **Uber QueryGPT** | In a limited rollout to Operations and Support, about 300 daily active users; 78% said generated SQL reduced the time they would otherwise spend writing it. Uber reports query authoring falling from roughly 10 minutes to 3 minutes.[2] | First-party usage and self-reported time savings. The sources do **not** report a query-accuracy percentage or analyst-request deflection rate. |
| **Pinterest Querybook** | A secondary 2026 summary reports SQL writing 35% faster and first-shot acceptance rising from 20% to over 40%.[1] | Useful as a reported result, but the source available here is a secondary summary, not Pinterest’s underlying production write-up. |
| **LinkedIn SQL Bot** | The same secondary summary reports about 95% of users rated accuracy “passes” or better, and adoption increased 5–10× after platform integration.[1] | User-rated accuracy and adoption—not an independently measured execution-accuracy rate or deflection count. |
| **Snowflake Cortex Analyst** | Snowflake says it observed around 90% or higher accuracy in customer evaluations and internal benchmarks.[4] | Vendor-reported evaluation results, not a named customer’s measured production accuracy or time saved. |
| **Databricks Genie and ThoughtSpot Spotter** | A 2025 vendor-run test of 50 questions across two datasets and three runs reported average accuracy of 84.67% for Genie and 54.67% for Spotter; Cortex Analyst scored 88.67%.[6] | A limited benchmark, not production-company performance. It should not be compared directly with customer-reported results. |

For the named examples **Grab, Swiggy Hermes, Instacart, and Wayfair**, the available sources do not establish quantified production accuracy, requests deflected, or time saved. The sources also do not support treating Uber’s often-repeated “140,000 hours saved” figure as a verified realized outcome: Uber’s first-party report documents a per-query estimate and user survey, while the much larger aggregate appears in secondary summaries.[2][5]

**Bottom line:** The strongest defensible production claim here is Uber’s reported reduction in authoring time from about 10 to 3 minutes, alongside 300 daily active users and 78% positive self-reports. There is not enough comparable public evidence in these sources to quantify company-wide deflection or to rank the named deployments by production accuracy.

Citations:
[1] https://sequel.sh/blog/what-is-an-ai-data-analyst
[2] https://www.uber.com/us/en/blog/query-gpt/
[3] https://www.linkedin.com/posts/paramanantham_ai-llms-rag-activity-7418940523878436864-CFlW
[4] https://www.snowflake.com/en/blog/cortex-analyst-ai-self-service-analytics/
[5] https://www.getdot.ai/blog/uber-querygpt-data-agent
[6] https://runql.com/reports/conversational-analytics-technical-leaders-benchmark-2025.html
[7] https://www.databricks.com/dataaisummit/session/new-genie-data-qa-enterprise-agent
[8] https://www.getwren.ai/post/how-uber-is-saving-140-000-hours-each-month-using-text-to-sql-and-how-you-can-harness-the-same-power
[9] https://runql.com/cloud/reports/conversational-analytics-technical-leaders-benchmark-2025
[10] https://letsdatascience.com/blog/text-to-sql-system-design

````
