# 05 — perplexity_ask — electric and gas utilities

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** Production machine learning at electric and gas utilities with measured results: short-term load forecasting, vegetation management risk prioritization, wildfire ignition risk, outage prediction and crew pre-staging, non-technical loss / energy theft detection, DER and solar forecasting, transformer failure prediction. Name utilities, vendors, and measured outcomes with sources.
- **Timestamp (UTC):** 2026-10-09T20:19:00Z

````
The available sources support a few **named, quantified deployments**, but not a complete set of utility-specific production case studies. In particular, they do not substantiate named utility/vendor results for energy-theft detection or transformer-failure prediction. I’ve separated measured outcomes from vendor claims and broader program results below.

| Use case | Utility and vendor | Reported outcome and evidence |
|---|---|---|
| DER load forecasting | EnergyHub; utility customer not named in the cited results | EnergyHub reports median forecast accuracy of **85.2% day-ahead, 87.8% in the morning, and 90.6% in the afternoon**; accuracy reached **93.4% on high-load days**. These are results from its Mercury DERMS forecasting feature, not a named utility case study.[3] |
| Load and solar forecasting | Camus Energy; partner utilities not named | Camus reports scaling its meter-level forecasting system to **more than one million meters**, producing day-ahead and hourly forecasts in minutes. It describes the system as machine-learning-based but gives no quantified accuracy result in the cited article.[5] |
| Short-term load forecasting | Utility users not named; EPRI/DOE workshop material | A workshop presentation describes a commercial-grade ANN short-term load forecaster, with typical stated accuracy of **1–2.5%**. It also reports an XGBoost project result with **16.7% lower 0–3-hour MAE than linear regression**; the excerpt does not identify a utility or vendor deployment.[8] |
| Wildfire ignition and vegetation risk | PG&E; vendor not established by the cited results | A wildfire-risk summary reports PG&E had a **68% decrease in equipment-related ignitions in one year**, while Enhanced Powerline Safety Settings were associated with a **65–74% ignition reduction**. It also reports vegetation-contact ignitions would have been **4.5 times higher** without integrated vegetation-risk reduction efforts. These are program outcomes; the source does not attribute them to a specific ML vendor or isolate model impact.[6] |
| Outage prediction and crew pre-staging | Vendor examples, with utilities mostly unnamed | A trade-press overview says one Northeastern utility cut storm-response costs **25%** using a vendor platform, but the excerpt does not name the utility or clearly identify the vendor tied to that result. The same article describes vendor capabilities for forecasting outages up to five days ahead and supporting crew positioning, but those capabilities are not themselves measured deployment results.[7] |

**What the evidence does not establish:** The available results do not provide a well-supported named utility/vendor/outcome pair for non-technical-loss or energy-theft detection, transformer failure prediction, or utility-specific vegetation-management risk prioritization. Nor do they establish that the PG&E wildfire figures were caused by machine learning. For diligence, treat those as gaps rather than infer a production ML success from general vendor claims.

Citations:
[1] https://www.amperon.co/
[2] https://www.amperon.co/products/load-forecasting
[3] https://www.energyhub.com/news/der-load-forecasting-derms
[4] https://assets.noviams.com/novi-file-uploads/fmea/Presentations/2025_ECC/7_TRC.pdf
[5] https://www.camus.energy/blog/how-forecasting-will-transform-grid-operations
[6] https://www.esmartsystems.com/wp-content/uploads/2026/02/Achieving-Cost-Effectove-Wildfire-Risk-Reduction-PreventionFirst-Wildfire-Partnership.pdf
[7] https://techli.com/before-during-and-after-the-storm-10-ai-companies-utilities-rely-on/11502/
[8] https://www.energy.gov/sites/prod/files/2019/08/f65/1.5.a.%20-%20SETO%20Modeling%20Workshop%20-%20EPRI.pdf
[9] https://www.sas.com/en_us/insights/articles/load-forecasting.html
[10] https://dataintelo.com/report/utility-vegetation-management-ai-market
````
