# 09-ask-marketing-mix-modeling

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** Which companies use open-source marketing mix modeling (Meta Robyn, Google Meridian, PyMC-Marketing) in production in 2024-2026, and what results have they reported? Is MMM being adopted by mid-sized advertisers spending $1M-$50M per year, and what does a typical consultancy MMM project deliver (budget reallocation, response curves, ROI per channel)?
- **Timestamp (UTC):** 2026-10-09T20:33:05.870Z

## Response (verbatim)

````
There is evidence of real production use, but public reporting is sparse and uneven. The clearest named example in the results is **Nürnberger**, using a PyMC-based Bayesian MMM; Google also reports broad Meridian use, but does not name most advertisers. The evidence does **not** support a reliable public roster of companies using each tool in production during 2024–2026, or a firm estimate of adoption among advertisers spending $1M–$50M annually.

## Publicly reported examples and outcomes

- **Nürnberger — PyMC / PyMC-Marketing:** PyMC Labs says the insurer’s team now runs and extends its funnel-aware model, and that it was approved for production rollout in 2026. The reported result was a **27%+ reduction in cost per lead over the first six months**; the case study attributes this to reallocating budget across the funnel.[1]
- **HelloFresh — PyMC-based MMM:** PyMC Labs reports that HelloFresh’s data science team built an MMM and that PyMC Labs later rebuilt the existing model. The available result does not quantify a business lift, so it establishes use, not a measurable outcome.[7]
- **Meridian — unnamed advertisers:** Google says thousands of advertisers have used Meridian since its January 2025 launch. In Google-commissioned APAC projects delivered by 12 partners, it reports a **14% increase in media-driven revenue or conversions** associated with optimizing allocations from Meridian results. A beverage manufacturer reportedly found about a **10% ROI improvement** for YouTube TV campaigns. These are vendor-reported project results, not independently established average effects.[3]
- **Meta Robyn:** The available results do not provide a named company with a verifiable 2024–2026 production deployment and quantified outcome. That is a limit of the evidence here, not proof that no such deployments exist.

A separate PyMC-Marketing tutorial reports potential—not realized client—gains of **10% sales uplift** and **26% higher channel contributions** in its example. Treat those as illustrative model outputs, not production case-study results.[9]

## Are $1M–$50M advertisers adopting MMM?

The sources show that MMM is being used by named enterprises and by a large, but unspecified, population of Meridian users. They do **not** break adoption out by annual ad spend, so they cannot establish how common MMM is among $1M–$50M advertisers. The practical answer is: **it is feasible for mid-sized advertisers, but adoption rates for that spend band are not demonstrated by these sources.**

## What a consultancy MMM project typically delivers

A decision-focused project commonly produces:

- **Channel contribution and ROI/ROAS estimates**, with uncertainty ranges rather than only point estimates.
- **Response or saturation curves** showing how expected returns change as spend rises or falls.
- **Budget reallocation and scenario plans**, including modeled “what-if” outcomes under alternative budgets.
- **Model validation and diagnostics**, plus forecasts and documentation to support ongoing use.

These are documented elements of a PyMC-Marketing workflow, including ROI estimation, saturation curves, forecasting, and budget optimization.[8] A project may recommend shifting spend toward channels with better marginal returns, but the recommendation is conditional on data quality, model assumptions, and whether the business can actually move the budget. A modeled uplift is not a guaranteed realized result.

Citations:
[1] https://www.pymc-labs.com/case-studies/nurnberger
[2] https://www.linkedin.com/posts/doubledome-digital-marketing_audiencetargeting-adstrategy-digitalmarketing2026-activity-7460686880808783874-z8k2
[3] https://business.google.com/aunz/think/measurement/google-meridian-marketing-mix-modelling/
[4] https://www.pymc-labs.com/blog-posts
[5] https://business.google.com/en-all/think/measurement/google-meridian-marketing-mix-modelling/
[6] https://business.google.com/in/think/measurement/google-meridian-marketing-mix-modelling/
[7] https://www.pymc-labs.com/case-studies/hellofresh
[8] https://www.linkedin.com/posts/pymc-labs_marketingmixmodeling-bayesianinference-activity-7404913747024179200-ZnZG
[9] https://www.pymc-marketing.io/en/latest/notebooks/mmm/mmm_case_study.html
[10] https://www.pymc-marketing.io/en/stable/notebooks/mmm/mmm_case_study.html

````
