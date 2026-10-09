# 16 — perplexity_ask — restaurant AI labor scheduling from sales forecasts

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** "Restaurant AI labor scheduling driven by sales forecasts (e.g. Nory, 7shifts, Fourth, Lineup.ai, Crunchtime): how accurate are the forecasts, what measured labor cost or prime cost reductions do multi-unit operators report with named customers, and what does it cost per location per month?"
- **Timestamp (UTC):** 2026-10-09T20:32:38Z

## Response

````markdown
**Short answer:** vendors’ accuracy and savings claims look promising, but the public evidence is mostly vendor-reported customer anecdotes—not independent, apples-to-apples studies. The clearest public per-location price among these products is Lineup.ai’s: **$79/month for forecasting only or $149/month for forecasting plus scheduling**.[1]

| Product | Forecast accuracy evidence | Reported labor / prime-cost results | Public price |
|---|---|---|---|
| **Nory** | Nory reports roughly **97%** site-level accuracy; its customer pages cite Tasty African Food at **98.5%** and Masa at **97%**. These are vendor-published figures, and the pages don’t consistently state the forecast horizon or how accuracy is calculated.[3][4][9] | Nory reports Roasting Plant at **18% lower labor cost** and Josie’s at **23% lower labor cost**; it also cites Black Sheep holding labor variance below 1% of sales. These are customer case-study claims, not audited causal estimates.[4][9] | No public per-location price found in the available results. |
| **Lineup.ai** | The company claims forecasts are **35% more accurate than traditional methods**; Cabo Bob’s says forecasts were within **2–3% of actual sales** after a few months. The comparison method and measurement window are not fully specified in the available results.[2] | Carrot Express reports payroll down about **300 basis points** across 17 restaurants, with projected annual savings of **$1.1–$1.3 million**. This is a customer testimonial on Lineup’s site.[1] | **$79/location/month** forecasting only; **$149/location/month** forecasting plus scheduling.[1] |
| **7shifts** | No accuracy metric surfaced in the available results. | No named-customer quantified savings surfaced in the available results. | No public location-level price surfaced in the available results. |
| **Fourth** | No accuracy metric surfaced in the available results. | No named-customer quantified savings surfaced in the available results. | No public location-level price surfaced in the available results. |
| **Crunchtime** | No accuracy metric surfaced in the available results. | No named-customer quantified savings surfaced in the available results. | No public location-level price surfaced in the available results. |

### How to read the numbers

Treat “97% accuracy” cautiously until the vendor specifies **what is being forecast** (daily sales, hourly sales, covers, or item demand), the time horizon, and the error metric. A forecast can be “97% accurate” under one definition and much less useful for building a shift-by-shift schedule under another. The available Nory and Lineup results provide some named-customer examples, but not enough common methodology to compare the vendors directly.[1][2][3][4]

The reported savings also aren’t interchangeable: Lineup’s **300-basis-point payroll reduction** is a change in payroll as a share of sales, while Nory’s **18% or 23% labor-cost reductions** are stated as relative reductions. None of the surfaced claims establishes that the software alone caused the result or provides a consistent baseline and control group.[1][4][9]

**Practical takeaway:** use Lineup’s published price as a transparent benchmark, but request a site-level pilot from every vendor. Ask for forecast error by hour/day and sales band, labor cost as a percentage of sales before and after, service-level guardrails, and references from operators of similar size and format.

Citations:
[1] https://www.lineup.ai/pricing/
[2] https://www.lineup.ai/
[3] https://get.nory.ai/restaurant-analytics-software
[4] https://www.nory.ai/blog/how-restaurant-business-intelligence-fuels-performance
[5] https://get.nory.ai/restaurant-management-software
[6] https://www.nory.ai/blog/buyers-guide-to-restaurant-tech-2026
[7] https://www.nory.ai/blog/ai-restaurant-ordering
[8] https://www.g2.com/products/nory-nory/reviews
[9] https://get.nory.ai/beyond-your-pos
[10] https://www.nory.ai/blog/ai-for-restaurants-in-2026-what-actually-works
````
