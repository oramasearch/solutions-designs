# 01 — perplexity_research — enterprise AI spend surveys

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** "Which AI use cases are companies actually paying for and deploying in production in 2025-2026, according to surveys from McKinsey (State of AI), BCG, Gartner, Deloitte, Menlo Ventures (State of Generative AI in the Enterprise), a16z enterprise CIO survey, and Ramp AI Index spend data? List the specific use cases by function with adoption rates and spend figures, distinguish mid-market and SMB from large enterprise where possible, and note where measured ROI is reported."
- **Timestamp (UTC):** 2026-10-09T20:17:30Z (response received; query issued minutes earlier)

## Response

````markdown
**The clearest paid, production AI use case in 2025–26 is software development.** The other established spending areas are general-purpose copilots and search, IT operations, marketing content, customer support, and healthcare documentation. The distinction is that **paying for a tool, using AI in a function, and scaling a particular workflow into production are different measures**; the surveys do not report a comparable adoption rate or ROI for every use case. [web:16][web:2][web:19]

| Function | Specific use cases companies are paying for or deploying | Adoption or production rate | Spend | Measured ROI or outcome | SMB/mid-market versus large enterprise |
|---|---|---|---|---|---|
| **Software engineering** | Code completion and generation, coding agents, testing, review, refactoring, deployment and site-reliability work. [web:16][web:33] | In BCG’s 2025 tech-function survey, **two-thirds used AI in software development** and **36% had scaled or fully deployed** it. Menlo reports **50% of developers use coding tools daily**. [web:33][web:16] | **$4.0bn in 2025**, or **55% of Menlo’s departmental-AI spending**. [web:16] | BCG respondents reported a **25% productivity boost to date**; Menlo reports **15%+ software-development velocity gains**. These are productivity measures, not audited financial ROI. [web:33][web:16] | The a16z CIO surveys cover large enterprises; they identify coding as a leading purchased application but provide **no SMB coding-adoption rate**. [web:20][web:18] |
| **IT operations and service desk** | Incident response, infrastructure management, IT service-desk automation and knowledge retrieval for support staff. [web:16][web:33] | BCG identifies the service desk among its six strongest-adoption tech use cases but gives **no separate scaled-deployment percentage** for it. McKinsey identifies IT service-desk management among the leading agent uses; its 2025 survey found **no more than 10% scaling agents in any single function**. [web:33][web:2] | **$700m in 2025** for departmental IT AI, in Menlo’s estimate. [web:16] | BCG reports **20–30% shorter handling times** and **25–40% higher first-contact resolution** among early AI-service-desk adopters. [web:33] | McKinsey’s 2026 survey found **40% of organizations above $1bn revenue** scaling agents in at least one function, versus **22% of smaller organizations**; these are *all-function*, not IT-specific, rates. [web:3] |
| **Data management and IT governance** | Data ingestion, cleaning, labeling and pipeline automation; compliance monitoring; IT project management; procurement/RFP drafting; legacy-code analysis. [web:33] | BCG reports **36% scaled or fully deployed** data-management AI, **35%** compliance-monitoring AI and **over 30%** IT project-management AI. Across its top ten tech use cases, the average scaled/full-deployment rate was **28% in 2025**, versus 9% in 2024. [web:33] | No separate surveyed spend figure. | BCG reports **over 25% productivity gains** to date in data management and **over 20%** in compliance monitoring. Its RFP and legacy-modernization results are company examples, not survey-wide ROI rates. [web:33] | BCG’s tech study surveyed **1,250 companies worldwide**; the cited use-case percentages are not broken out for SMBs. [web:33] |
| **Cross-functional knowledge work** | Paid chatbots and copilots for enterprise search, research, information capture, drafting and answering questions; personal productivity and meeting-workflow tools. [web:2][web:16][web:18] | McKinsey found **88% regularly used AI in at least one function** in 2025—not necessarily these tools—and reported information capture and delivery among the most common individual use cases. In 2026, **47% said they were scaling chatbots across the enterprise**. [web:2][web:3] | Menlo estimates **$8.4bn** in horizontal AI applications in 2025: **$7.2bn copilots**, **$750m agent platforms** and **$450m personal-productivity tools**; categories are rounded. [web:16] | Deloitte’s 2026 report finds **66% of organizations report productivity/efficiency gains** from AI overall, but does not attribute that figure to copilots or report a copilot-specific financial ROI. [web:44] | The 2026 a16z survey is explicitly of **Global 2000** companies, not SMBs. [web:18] |
| **Customer service and customer success** | Contact-center automation, agent assistance, case summaries, ticket routing, sentiment analysis, proactive outreach and customer-facing chat or voice assistants. [web:2][web:16][web:90] | Menlo says customer-facing use cases account for **41% of use cases enterprises identify**, not 41% of deployed tools. In Gartner’s service-leader survey, **5% had deployed a customer-facing GenAI voicebot**, **11% were piloting** and **44% exploring** one; the survey was conducted in 2024 about 2025 priorities. [web:16][web:71] | **$630m in 2025** for Menlo’s departmental *customer-success* category; this is not a total for every contact-center AI product. [web:16] | McKinsey identifies contact-center automation as a commonly reported use case, but gives no comparable use-case ROI in its summary. Gartner reports **only 10% of service leaders achieved their primary GenAI investment objectives**—a different measure from voicebot deployment. [web:2][web:70] | Published rates here do **not** establish a separate SMB production rate. Gartner’s **85%** headline concerns leaders who *would explore or pilot* conversational AI, not those already deployed. [web:71] |
| **Marketing and sales** | Content and creative development, marketing-strategy drafting, campaign planning and optimization, campaign evaluation/reporting, and sales-support content. [web:16][web:75][web:2] | Among **marketing organizations that had adopted GenAI**, Gartner found **77% used it for creative development** and **48% for strategy development**; these are conditional usage rates, **not production rates for all marketers**. McKinsey identifies marketing strategy content as a common AI use case. [web:75][web:2] | **$660m in 2025** for Menlo’s departmental marketing AI. The cited reports do **not** give a separate comparable sales-AI spend figure. [web:16] | Gartner’s 2025 CMO survey reports GenAI benefits in **time efficiency (49%)**, **cost efficiency (40%)** and **content/business-handling capacity (27%)**; **22%** said it helped reduce reliance on external creative/strategy agencies. These are reported benefits, not dollar ROI. [web:77] | Gartner says the **vast majority** of its 2025 CMO-spend respondents worked at companies above **$1bn revenue**; the results should not be presented as SMB rates. [web:77] |
| **Finance and accounting** | Transaction and statutory accounting, reconciliation, treasury, fraud/anomaly detection, financial forecasting, cash-flow modeling and scenario analysis. [web:46] | In BCG’s survey of finance executives at **large companies**, **more than half** said their teams used AI in accounting and treasury; **44%** had moved finance AI initiatives into scaled deployment. The typical finance function reported **five use cases in production** and six in proof of concept. These are function-level figures, not production rates for each named task. [web:46] | No separate finance-function dollar spend in these surveys; a16z reports enterprise-wide model and application budgets, not finance allocations. [web:18][web:46] | BCG reports **10% median stated finance-AI ROI** and roughly **one in five** reporting ROI of **20% or more**; only **45% could quantify ROI**. A forecasting company example cut report-generation time **50%** and delivered forecasts **30% faster**. [web:46] | BCG’s finance sample comprises **over 280 executives from large companies**; it does not supply an SMB equivalent. [web:46] |
| **Supply chain and manufacturing** | Supply-chain desk-work assistance; inventory and manufacturing-process agents; operational planning and forecasting. [web:63][web:3][web:46] | Gartner said **72% of surveyed supply-chain organizations were deploying GenAI**, without establishing that each named workflow was in production. McKinsey’s 2026 survey identifies inventory and manufacturing-process agents particularly among advanced manufacturers. [web:63][web:3] | No separately reported comparable spend figure for these workflows. | Gartner measured **4.11 hours saved weekly per desk-based worker**, falling to **1.5 hours per team member** at team level, with **no correlation at team level to better output or quality**. McKinsey says supply chain and manufacturing are among functions most often reporting AI cost reductions in 2026, without amounts in its summary. [web:63][web:3] | No reliable SMB-versus-enterprise rate for a specific supply-chain production workflow is reported here. |
| **Healthcare** | Clinical documentation, especially **ambient AI scribes**, plus administrative and clinical-adjacent workflows. [web:16] | Menlo reports adoption and a live market, but **no percentage of healthcare organizations with scribes in production**. [web:16] | Approximately **$1.5bn in 2025** for healthcare vertical AI, including an approximately **$600m ambient-scribe market**; the $600m is **part of**, not additional to, healthcare spend. [web:16] | Menlo describes scribes reducing documentation time by **more than 50%**; it does not provide a sector-wide financial ROI percentage. [web:16] | No comparable SMB/large-health-system adoption split is supplied. |
| **Legal, design, HR and other vertical applications** | Legal-workflow AI; design tools; HR tools; creator and government-sector AI applications. [web:16] | Menlo’s spending estimates establish purchases, but it reports **no comparable production-adoption percentage** for each of these functions. [web:16] | Menlo estimates **$650m legal**, **$360m creator tools** and **$350m government vertical AI** in 2025. Within its **$7.3bn departmental** total, design represents **7%** and HR **5%**; it does not state separate exact dollar totals for those two in the cited report. [web:16] | No measured, function-wide ROI figure supplied for these categories. | No defensible SMB/enterprise comparison supplied for these individual uses. |
| **Company-wide purchasing and production—not a single use case** | Provides the denominator needed to interpret the functional figures above. | Menlo reports **47% of AI deals reached production once an organization committed to exploring a solution**; this is *deal conversion*, not the share of all companies with production AI. Deloitte’s 2026 survey found only **25% of respondents had moved at least 40% of their AI pilots into production**. McKinsey reports enterprise-wide scaling of **44% in 2026**. [web:16][web:109][web:3] | Menlo estimates **$37bn total enterprise GenAI spending in 2025**, including about **$19bn in applications**. In a16z’s large-enterprise CIO survey, average reported **LLM spending was about $7m** and **application spending nearly $6m** per enterprise; respondents *expected*, rather than had already spent, about **$11.6m on LLMs** in 2026. [web:16][web:18] | McKinsey reports **39% attributed some enterprise EBIT impact to AI in 2025**, versus **37% in 2026**; its “high performers” were about **6%** of respondents. Deloitte reports **40% achieved cost reductions** and **20% achieved revenue increases** from AI overall. Neither set of figures establishes ROI for every paid seat. [web:2][web:3][web:44] | McKinsey’s 2026 enterprise-scaling rate was **54% at organizations with at least $1bn revenue**, versus **about one-third at smaller organizations**. [web:3] |
| **Observed U.S. business payments, including smaller firms** | Ramp observes payments for AI products—including subscriptions, models, tokens and APIs—not whether the purchaser put a particular business workflow into production. [web:19] | In **August 2026, 56.1% of Ramp businesses** made an observed AI payment. Ramp data published through FRED put **mid-market paid adoption at 66.8%** that month. These are rates within the Ramp customer base, not U.S.-economy-wide production rates. [web:19][web:121] | Ramp reported **$11.38 per employee per month for the median firm** in its June 2026 analysis, versus **$611 for the top 10%** and **$7,449 for the top 1%**. In its later report, top-1% spend was **$7,205 per employee in August**. Those are *spend-intensity groups*, **not company-size groups**. [web:51][web:24] | Transaction data verify payment, **not realized ROI**. Ramp says its sample exceeds **70,000 U.S. businesses** and misses free or personally paid use. [web:19] | Ramp supports a **mid-market payment rate**, but its cited published summaries do not provide a matching, use-case-level SMB-versus-large-enterprise ROI or production table. [web:19][web:121] |

**Bottom line:** coding has the strongest combination of identifiable category spend, scaled-deployment rates and measured productivity gains. Finance has an explicitly reported—though only partly quantifiable—financial ROI; marketing, IT service desks and healthcare documentation have reported operational gains. Treat customer-facing autonomous agents and the broad promise of “AI everywhere” more cautiously: the strongest cross-survey evidence still separates extensive experimentation and payments from production at scale and enterprise-wide profit. [web:16][web:33][web:46][web:77][web:71][web:2]

Citations:
[1] https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/2025/the-state-of-ai-how-organizations-are-rewiring-to-capture-value_final.pdf
[2] https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025
[3] https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai?issue=64
[4] https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/the-state-of-ai-in-2026-on-the-road-to-roi.pdf
[5] https://www.mckinsey.com.br/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage
[6] https://www.techtarget.com/ai/feature/10-AI-business-use-cases-that-produce-measurable-ROI
[7] https://github.com/hancengiz/research_reports/blob/main/2-analysis/analysis.md
[8] https://www.libertify.com/interactive-library/state-of-ai-2025-mckinsey-report/
[9] https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value
[10] https://www.mckinsey.com.br/capabilities/tech-and-ai/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work
[11] https://www.mckinsey.com.br/our-insights/capturing-central-europes-ai-opportunity
[12] https://kanerika.com/blogs/the-state-of-ai-report-mckinsey/
[13] https://partners.wsj.com/mckinsey/leading-change/the-ai-boom-is-real-the-payoff-is-stalled/
[14] https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33?page=33
[15] https://www.mckinsey.de/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier
[31] https://www.bcg.com/publications/2025/closing-the-ai-impact-gap
[32] https://www.bcg.com/publications/2025/cios-role-in-ai-transformation-and-productivity
[33] https://www.bcg.com/publications/2026/how-ai-is-paying-off-in-the-tech-function
[34] https://www.bcg.com/publications/2025/how-finance-leaders-can-get-roi-from-ai
[35] https://web-assets.bcg.com/0b/f6/c2880f9f4472955538567a5bcb6a/ai-radar-2025-slideshow-jan-2025-r.pdf
[36] https://www.bcg.com/assets/2025/executive-perspectives-ai-enabled-engineering-excellence-23april.pdf
[37] https://www.articsledge.com/post/enterprise-ai-statistics
[38] https://www.bcg.com/publications/2025/ai-adoption-puzzle-why-usage-up-impact-not
[39] https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html%23:~:text=7.%2520Strategically%2520ready%252C%2520operationally%2520unsure
[40] https://www.bcg.com/press/26june2025-beyond-ai-adoption-full-potential
[41] https://web-assets.bcg.com/0b/6c/b825b93f4bc98453893d877f1dd0/ai-radar-2025-slideshow-jan-2025.pdf
[42] https://web-assets.bcg.com/fd/0d/bcc5dfae4cbaa08c718b95b16cf5/ai-at-work-2025-slideshow-june-2025-edit-02.pdf
[43] https://www.deloitte.com/ce/en/issues/generative-ai/state-of-ai-in-enterprise.html
[44] https://www.deloitte.com/global/en/what-we-do/capabilities/ai/research/state-of-ai-in-enterprise.html
[45] https://www.deloitte.com/au/en/issues/generative-ai/state-of-ai-in-enterprise.html
[16] https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/
[17] https://menlovc.com/wp-content/uploads/2025/12/menlo_ventures_enterprise_ai_report-2025-123125.pdf
[18] https://a16z.com/leaders-gainers-and-unexpected-winners-in-the-enterprise-ai-arms-race/
[19] https://ramp.com/data/ai-index
[20] https://a16z.com/ai-enterprise-2025/
[21] https://github.com/danielithomas/AI-Articles/blob/main/articles/enterprise-ai-arms-race-cio-survey-a16z-20260203.md
[22] https://menlovc.com/perspective/
[23] https://ramp.com/data/april-2026-ai-index
[24] https://ramp.com/data/ai-index-sept-2026
[25] https://econlab.substack.com/p/how-much-does-it-cost-to-be-ai-pilled
[26] https://www.linkedin.com/posts/digitaworld_ramp-is-an-expense-management-company-it-activity-7474197638540779520-Sh0p
[27] https://windowsforum.com/news/enterprise-ai-arms-race-openai-leads-as-anthropic-and-google-close-in.399656/
[28] https://www.5wpr.com/new/the-accounting-finance-software-ai-visibility-index-2026/
[29] https://menlovc.com/perspective/page/10/
[30] https://ramp.com/data
[60] https://www.gartner.com/en/topics/generative-ai
[61] https://www.gartner.com/en/newsroom/press-releases/2025-06-30-gartner-survey-finds-forty-five-percent-of-organizations-with-high-artificial-intelligence-maturity-keep-artificial-intelligence-projects-operational-for-at-least-three-years
[62] https://www.gartner.com/en/newsroom/press-releases/2025-03-19-gartner-finance-survey-reveals-the-top-ten-technologies-for-future-investment-in-finance
[63] https://www.gartner.com/en/newsroom/press-releases/2025-02-05-gartner-survey-supply-chain-genai-productivity-gains-at-individual-level-while-creating-new-complications-for-organizations
[64] https://www.gartner.com/en/newsroom/press-releases/2025-03-25-gartner-says-cfos-should-reset-expectations-about-ais-impact-on-workforce-productivity-and-headcount
[65] https://www.gartner.com/doc/reprints?id=1-2JSL4QPK&ct=241224&st=sb
[66] https://www.gartner.com/en/articles/hype-cycle-for-genai
[67] https://www.gartner.com/en/newsroom/press-releases/2025-07-15-gartner-forecasts-worldwide-it-spending-to-grow-7-point-9-percent-in-2025
[68] https://www.gartner.com/en/newsroom/press-releases/2025-03-31-gartner-forecasts-worldwide-genai-spending-to-reach-644-billion-in-2025
[69] https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-identifies-three-trends-that-will-shape-the-future-of-customer-service
[70] https://www.gartner.com/en/webinar/741550/1675336-ai-use-cases-for-customer-service-transformation
[71] https://www.gartner.com/en/newsroom/press-releases/2024-12-09-gartner-survey-reveals-85-percent-of-customer-service-leaders-will-explore-or-pilot-customer-facing-conversational-genai-in-2025
[72] https://www.gartner.com/en/customer-service-support/insights/service-leaders-priorities
[73] https://www.gartner.com/en/newsroom/press-releases/2025-07-10-gartner-forecasts-worldwide-end-user-spending-on-generative-ai-models-to-total-us-dollars-14-billion-in-2025
[74] https://www.gartner.com/en/articles/ai-in-finance
[48] https://ramp.com/data/ai-index
[49] https://ramp.com/data/ai-index-august-2026
[50] https://ramp.com/data/ai-index-sept-2026
[51] https://ramp.com/data/ai-index-june-2026
[52] https://ramp.com/data
[53] https://ramp.com/data/april-2026-ai-index
[54] https://ramp.com/data/how-ramp-data-works
[55] https://ramp.com/data/ai-index-july-2026
[56] https://ramp.com/data/ai-jobs-impact/paper
[57] https://ramp.com/data/ai-index-march-2026
[58] https://ramp.com/data/ai-jobs-impact
[59] https://ramp.com/data/ai-companies-influencer-marketing
[46] https://www.bcg.com/publications/2025/how-finance-leaders-can-get-roi-from-ai
[47] https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/
[75] https://www.gartner.com/en/newsroom/press-releases/2025-02-18-gartner-survey-reveals-over-a-quarter-of-marketing-organizations-have-limited-or-no-adoption-of-genai-for-marketing-campaigns
[76] https://www.pin.com/blog/ai-adoption-recruiting-report/
[77] https://www.gartner.com/en/newsroom/press-releases/2025-05-12-gartner-2025-cmo-spend-survey-reveals-marketing-budgets-have-flatlined-at-seven-percent-of-overall-company-revenue
[78] https://www.novelvista.com/blogs/ai-and-ml/generative-ai-for-marketing
[79] https://www.shno.co/marketing-statistics/ai-adoption-in-marketing-statistics
[80] https://finance.yahoo.com/media-advertising/articles/state-cmo-090000953.html
[81] https://www.gartner.com/en/marketing/topics/marketing-technology
[82] https://irisagent.com/customer-support-statistics-2026/
[83] https://www.feedough.com/ai-marketing-statistics/
[84] https://gloat.com/blog/ai-in-hr/
[85] https://www.5mins.ai/resources/blog/ai-in-hr
[86] https://www.lyzr.ai/blog/ai-in-hr/
[87] https://www.linkedin.com/posts/louis-qirui-liu_hrtech-hcm-consulting-activity-7456785960605876224-SjTy
[88] https://www.linkedin.com/posts/alibabacloudglobal_aiforcreativity-alibabacloud-ainnovation-activity-7330872227841658881-7kKV
[89] https://stealthagents.com/research/ai-human-customer-support-workforce-statistics-2026
[90] https://www.gartner.com/en/articles/customer-service-ai
[91] https://www.gartner.com/en/customer-service-support/trends/customer-service-ai-use-case-assessment
[92] https://www.gartner.com/en/newsroom/press-releases/2023-08-03-customer-service-and-support-leaders-should-assess-generative-ai-technology-options-to-enhance-their-organizations-function
[93] https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-identifies-three-trends-that-will-shape-the-future-of-customer-service
[94] https://www.gartner.com/en/customer-service-support
[95] https://www.gartner.com/en/customer-service-support/research
[96] https://gcom.pdo.aws.gartner.com/en/insights/generative-ai-for-business
[97] https://gcom.pdo.aws.gartner.com/en/customer-service-support/insights/service-leaders-priorities
[98] https://www.gartner.com/en/webinar/741550/1675336-ai-use-cases-for-customer-service-transformation
[99] https://www.gartner.com/en/customer-service-support/trends/ai-powered-customer-service
[100] https://www.gartner.com/en/newsroom/press-releases/2024-12-09-gartner-survey-reveals-85-percent-of-customer-service-leaders-will-explore-or-pilot-customer-facing-conversational-genai-in-2025
[101] https://www.gartner.com/en/newsroom/press-releases/2025-06-02-gartner-survey-finds-60-percent-of-customer-service-agents-fail-to-promote-self-service
[102] https://www.gartner.com/en/customer-service-support/trends/customer-service-leadership-vision
[103] https://www.gartner.com/en/newsroom/press-releases/2025-06-10-gartner-predicts-50-percent-of-organizations-will-abandon-plans-to-reduce-customer-service-workforce-due-to-ai
[104] https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290
[105] https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html
[106] https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html%23:~:text=Deloitte%2527s,-2026
[107] https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html%23:~:text=7.%2520Strategically%2520ready%252C%2520operationally%2520unsure
[108] https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html%23:~:text=Deloitte%2527s%25202026%2520AI%2520report%2520tracking%2520adoption%2520and%2520impact
[109] https://www.deloitte.com/us/en/about/press-room/state-of-ai-report-2026.html
[110] https://www.deloitte.com/nl/en/about/press-room/state-of-ai-in-the-enterprise-2026.html
[111] https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html%23:~:text=The%2520untapped%2520edge,-Organizations%2520today%2520stand%2520at%2520the
[112] https://www.deloitte.com/cy/en/about/press-room/state-of-ai-in-the-enterprise.html
[113] https://www.deloitte.com/cz-sk/en/services/consulting/research/the-state-of-ai-in-the-enterprise.html
[114] https://www.deloitte.com/global/en/what-we-do/capabilities/ai/research/state-of-ai-in-enterprise.html
[115] https://www.deloitte.com/au/en/issues/generative-ai/state-of-ai-in-enterprise.html
[116] https://www.deloitte.com/southeast-asia/en/about/press-room/agentic-and-physical-ai-set-for-rapid-growth-in-singapore-in-the-next-two-years.html
[117] https://www.deloitte.com/content/dam/assets-shared/docs/about/2025/quarter-4.pdf
[118] https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/articles/b2b-agentic-commerce.html
[119] https://www.deloitte.com/global/en/what-we-do/capabilities/ai/research/ai-roi-the-paradox-of-rising-investment-and-elusive-returns.html
[120] https://ramp.com/data/ai-index
[121] https://fred.stlouisfed.org/series/RAMPAIMIDMARKET
[122] https://ramp.com/data/april-2026-ai-index
[123] https://ramp.com/vendors/runway
[124] https://ramp.com/data/ai-index-august-2026
[125] https://ramp.com/vendors/midjourney
[126] https://ramp.com/vendors/fal-ai
[127] https://ramp.com/data/ai-index-sept-2026
[128] https://am.jpmorgan.com/us/en/asset-management/institutional/insights/market-themes/artificial-intelligence/
[129] https://ustechautomations.com/resources/blog/ramp-ai-index-explained-what-it-changes
[130] https://ramp.com/data/ai-index-january-2026
[131] https://ramp.com/data/ai-jobs-impact/paper
[132] https://techinformed.com/top-ai-adopters-are-spending-up-to-620x-more-on-ai/
[133] https://ramp.com/data/ai-index-june-2026
[134] https://ramp.com/data
[135] https://fred.stlouisfed.org/series/RAMPAIMIDMARKET
[136] https://fred.stlouisfed.org/tags/series?t=ai&et=&pageID=4
[137] https://ramp.com/data/ai-index
[138] https://alfred.stlouisfed.org/category?cid=33492
[139] https://ramp.com/vendors/xai
[140] https://ramp.com/data/ai-index-august-2026
[141] https://ramp.com/vendors/granola
[142] https://ramp.com/data/ai-index-sept-2026
[143] https://fred.stlouisfed.org/news/2026/10/fred-adds-data-from-ramp-com
[144] https://techcrunch.com/2026/09/09/ai-spend-per-employee-slumped-at-top-firms-in-august-summer-doldrums-or-a-warning-sign/
[145] https://ramp.com/data
[146] https://ustechautomations.com/resources/blog/ramp-ai-index-explained-what-it-changes
[147] https://www.linkedin.com/posts/bwellisch_interesting-data-from-ramp-this-month-adoption-activity-7493826229293219840-KWEI
[148] https://www.kucoin.com/news/flash/ramp-reports-10-drop-in-ai-spending-among-top-businesses-in-august-2026
[149] https://fred.stlouisfed.org/release?rid=6
````
