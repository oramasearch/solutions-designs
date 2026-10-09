# 18 — perplexity_ask — financial services beyond fraud, credit and churn

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** Production machine learning at banks, credit unions, wealth managers and asset managers with documented measured results, excluding fraud, AML, credit underwriting, collections and churn: corporate treasury / branch / ATM cash demand forecasting and cash logistics, deposit pricing and deposit beta / balance runoff prediction, mortgage prepayment prediction, commercial loan covenant breach early warning, relationship-manager next-best-prospect for commercial banking, payment exception and reconciliation break prediction, trade settlement failure prediction. Name institutions, vendors and measured outcomes with sources.
- **Timestamp (UTC):** 2026-10-09T20:47:00Z

````
The available evidence supports only a **narrow, qualified answer**: it includes cash-demand forecasting studies, but does not document the requested production deployments with named commercial institutions, vendors, and measured operating outcomes. The other requested use cases are not substantiated by the available sources.

| Use case | Institution/vendor and evidence | Measured result |
|---|---|---|
| Regional cash demand and logistics | Deutsche Bundesbank study using daily transactions from six regional branches. It is a benchmark study, not evidence that Bundesbank deployed the models in production; no external vendor is named.[1][6] | DeepAR outperformed the tested alternatives in forecast accuracy and inventory performance versus a seasonal-naive benchmark. The study reports potential for lower inventory at the same service level, but gives no realized production savings.[1][6] |
| ATM cash demand | An academic comparative study, with no named bank or production vendor.[3] | XGBoost achieved 14% SMAPE for daily cash demand and 11% for balance predictions over a three-month horizon.[3] |
| ATM cash demand | Another academic study, with no named institution or vendor.[4] | Prophet recorded 26.77% average MAPE versus 32.57% for ARIMA; DNN recorded 29.26%.[4] |

For **deposit pricing/beta or runoff, mortgage prepayment, commercial-loan covenant early warning, commercial relationship-manager prospecting, payment exceptions/reconciliation breaks, and trade settlement failures**, the available results do not identify a qualifying bank, credit union, wealth manager, asset manager, vendor, and measured production outcome. A deposit-beta example in the results is a hypothetical bank scenario, not a documented ML deployment.[5] McKinsey discusses ML as a best practice for prepayment and deposit modeling, but the cited material here does not provide a named deployment with measured results.[7]

**Bottom line:** These sources provide measurable model benchmarks for cash forecasting, not the production case studies requested. I can’t substantiate named, measured deployments for the remaining categories from the available sources.

Citations:
[1] https://www.bundesbank.de/resource/blob/925500/5a930f7994d64221bbe027c8eca1ebb5/mL/2024-10-01-dkp-39-data.pdf
[2] https://www.sciencedirect.com/science/article/abs/pii/S0957417414007842
[3] https://scholar.tecnico.ulisboa.pt/records/z1AvDX-clSqQlmN1sEchPgWXViwl1oCzvH1r?lang=en
[4] https://dergipark.org.tr/en/download/article-file/3407299
[5] https://southstatecorrespondent.com/banker-to-banker/bank-management/the-macrodata-refinement-of-scary-alm-numbers/
[6] https://www.suerf.org/publications/suerf-policy-notes-and-briefs/forecasting-regional-banknote-withdrawals-and-lodgements/
[7] https://www.mckinsey.de/capabilities/risk-and-resilience/our-insights/banking-on-interest-rates-a-playbook-for-the-new-era-of-volatility
[8] https://pinnaclepubs.com/index.php/EJBEM/article/download/178/180/544
[9] https://link.springer.com/article/10.1134/S1054661822040113
[10] http://www.iraj.in/journal/journal_file/journal_pdf/11-603-15766474837-11.pdf
````
