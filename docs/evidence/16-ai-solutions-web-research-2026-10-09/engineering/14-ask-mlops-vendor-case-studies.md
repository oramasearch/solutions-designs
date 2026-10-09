# 14-ask-mlops-vendor-case-studies

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** What production use cases do Databricks, DataRobot, Dataiku and H2O.ai customer case studies (2023-2026) most often describe for mid-sized, non-tech companies (manufacturers, distributors, retailers, insurers, utilities, healthcare providers)? List specific named customer stories with the business problem, model type and reported business outcome, focusing on use cases other than churn, demand forecasting, fraud and predictive maintenance.
- **Timestamp (UTC):** 2026-10-09T20:40:23.849Z

## Response (verbatim)

````
Across the available 2023–2026 stories, the strongest recurring **non-excluded** production themes are improving product or process quality, optimizing operations and costs, supporting clinical decisions, and accelerating model development/deployment. The evidence is uneven: several stories are from large enterprises rather than mid-sized firms, and public summaries often omit the model class or quantified outcome.

| Customer and provider | Business problem and production use case | Model type or method reported | Reported outcome |
|---|---|---|---|
| **Michelin — Dataiku** | Factory engineers needed to find root causes of recurring production defects across complex process data. | Dataiku Parameters Analyzer; the public story describes analysis of correlated production variables and scenario testing, but does not specify a model family. | Analysis that could take up to six months was reduced to about one hour; the tool was used by 600+ engineers and technicians across 10+ factories.[9] |
| **Macnica Networks — H2O.ai** | Improve manufacturing production yield and identify what drives it. | H2O Driverless AI; yield prediction, with drivers surfaced by the platform. | The available summary identifies the use case but gives no quantified business outcome.[3] |
| **Kaiser Permanente — H2O.ai** | Predict patient deterioration to help prevent unplanned ICU transfers. | Predictive machine-learning model; the available summary does not name the algorithm. | The case-study listing reports reduced unplanned ICU transfers, without a figure in the summary.[8] |
| **ArmadaHealth — H2O.ai** | Use patient-review information to support specialist matching and improve patient experience. | Natural-language processing of patient reviews. | Improved specialist matching and patient outcomes, with model-building time cut from months to days; no numerical patient-outcome measure is given.[3][8] |
| **Jewelers Mutual — H2O.ai** | Give insurance underwriters more explainable decisions and price jewelry coverage more competitively. | H2O Driverless AI models with transparent, reason-coded decisions; the specific model class is not stated. | More competitive rates and stronger customer relationships are reported, without a quantified impact.[3][8] |
| **OYAK Cement — DataRobot** | Optimize cement fuel use and operating processes while reducing emissions. | AI-based process optimization; the public summary does not specify the model type. | The story reports $39 million saved and nearly 200,000 tons less CO₂ emitted annually.[2] |
| **Cegid — DataRobot** | Identify more viable business opportunities in a business unit. | The summary describes predictive analytics but does not identify the model type or target variable. | 20% more viable opportunities in one year, generating €15 million in additional volume.[2] |
| **Hortifrut — H2O.ai** | Assess blueberry quality through the supply chain and improve global distribution. | H2O Driverless AI quality prediction; specific algorithm not stated. | The available summary reports optimized distribution and fewer spoilage claims, without a quantified amount.[3][8] |

A separate DataRobot healthcare example, **Phoenix Children’s**, reports improvements in patient care and operations, but the available result does not identify the specific problem, model type, or measured outcome, so it is less useful for a like-for-like comparison.[2]

**Overall pattern:** quality/root-cause analysis and operational optimization have the clearest concrete examples; healthcare decision support and explainable underwriting also appear, but public summaries provide fewer model details and metrics. The sources do not establish how often these uses occur across all four vendors’ customer bases, nor do they consistently identify company size.

Citations:
[1] https://h2o.ai/case-studies/
[2] https://www.datarobot.com/customers/page/2/
[3] https://h2oai-web-qa.h2o.ai/case-studies
[4] https://www.featuredcustomers.com/vendor/h2oai/case-studies
[5] https://www.dataiku.com/company/customers
[6] https://www.analytics8.com/wp-content/uploads/2024/12/DBX-Customer-Stories-Case-Studies.pdf
[7] https://www.beyondkey.com/casestudy/databricks-real-time-manufacturing-iot-erp
[8] https://www.casestudies.com/company/h2oai
[9] https://www.dataiku.com/blog/michelin
[10] https://h2o.ai/case-studies/tokio-marine-optimizing-insurance-claims-with-ai/

````
