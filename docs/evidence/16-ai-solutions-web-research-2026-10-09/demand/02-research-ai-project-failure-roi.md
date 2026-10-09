# 02 — perplexity_research — why AI projects fail, where ROI is measured

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** "Why do enterprise AI projects fail in 2025-2026? Summarize the evidence: MIT NANDA 'GenAI Divide' report (95% of pilots fail), Gartner predictions on abandoned agentic AI and GenAI projects, RAND study on AI project failure root causes, S&P Global data on companies abandoning AI initiatives, IBM CEO study. What specifically distinguishes the projects that do deliver measurable ROI (use case type, back-office vs front-office, buy vs build, workflow integration)? Which use cases show the highest measured ROI?"
- **Timestamp (UTC):** 2026-10-09T20:17:30Z (response received; query issued minutes earlier, in parallel with 01 and 03)

## Response

````markdown
**Enterprise AI projects fail mainly at the transition from a convincing pilot to a useful, economical production workflow.** The recurring problems are an ill-defined business objective, unsuitable or inaccessible data, costs and risks that emerge at scale, and tools that do not fit how employees actually work. The headline failure figures measure *different things*—lack of measurable return, abandonment, or failure to meet an expected return—and should not be treated as one interchangeable failure rate.[web:60][web:25][web:47][web:17]

| Evidence | Finding | What it says about failure |
|---|---|---|
| MIT NANDA, *The GenAI Divide* (2025) | The report says **95% of organizations saw no measurable return** from enterprise GenAI, while 5% of integrated pilots generated substantial value. In its adoption funnel, 60% investigated task-specific GenAI, 20% piloted it, and 5% successfully implemented it. Its evidence includes 300-plus disclosed initiatives, interviews at 52 organizations, and 153 senior-leader survey responses. | “95% of pilots fail” is shorthand, **not a measured claim that 95% of every AI pilot was canceled**. MIT’s central explanation is a *learning gap*: enterprise tools often lack workflow context, memory, feedback and adaptation, even when their underlying models are capable.[web:60] |
| Gartner, GenAI forecast | Gartner predicted **at least 30% of GenAI projects would be abandoned after proof of concept by the end of 2025**, citing poor data quality, inadequate risk controls, rising costs and unclear business value. | This is a forecast of abandonment after proof of concept, not a measured enterprise-wide ROI rate.[web:32][web:43] |
| Gartner, agentic-AI forecast | Gartner predicted **more than 40% of agentic-AI projects would be canceled by the end of 2027**, citing escalating costs, unclear value and inadequate risk controls. It warns that many purported agentic use cases do not need an agent. | Autonomy adds integration, oversight and operating costs; a more complex architecture is not itself a business case.[web:31][web:44] |
| RAND, AI-project failure study | RAND interviewed **65 experienced data scientists and engineers** and identified five root causes: miscommunicated problems or changing priorities; inadequate data; technology-led rather than problem-led projects; underinvestment in data and deployment infrastructure; and tasks beyond current AI capabilities. | RAND cites “more than 80%” failure as **an existing estimate**, not a failure rate established by its interviews. Its practical emphasis is on business–technical alignment and sustained ownership of a real problem.[web:16][web:25] |
| S&P Global Market Intelligence, 2025 survey | Among 1,006 IT and business professionals, the share of companies **abandoning most AI initiatives before production rose from 17% to 42%** year over year. Organizations reported scrapping **46% of projects on average** between proof of concept and broad adoption. | Those are, respectively, a **share of companies** and an **average share of projects**. Privacy, security and cost were common obstacles; higher-failure organizations also reported more employee and customer resistance.[web:47][web:52] |
| IBM, 2025 CEO study | Of 2,000 CEOs surveyed, respondents said only **25% of AI initiatives delivered their expected ROI** over the preceding years and **16% scaled enterprise-wide**. Half said recent investment had left disconnected, piecemeal technology. | Buying or launching tools is not the same as connecting data, people and processes well enough to capture the expected return.[web:17] |

**What distinguishes projects that deliver measurable value**

| Distinction | What the evidence supports |
|---|---|
| **Use case and measurement** | Start with a persistent, specific business problem and an outcome that can be checked against a baseline—for example, external processing spend, cost per resolved case, cycle time or errors. RAND finds that optimizing a model for the wrong metric or chasing the newest technology is a common route to failure.[web:25] |
| **Back office versus front office** | MIT found its **clearest documented dollar savings** in repeatable operational work, notably customer-service and document-processing outsourcing and financial risk checks, despite disproportionate attention to sales and marketing. That does **not** establish that every back-office project outperforms every front-office one: MIT also records sales and retention gains, while S&P reports higher enterprise impact from some task-based applications, including sales outreach.[web:60][web:47] |
| **Buy/partner versus build** | In MIT’s interview sample, customized, learning-capable tools delivered through **external partnerships reached deployment about 67% of the time, versus about 33% for internal builds**. The useful distinction is a vendor partnership tailored to the process—not an off-the-shelf purchase with no integration. MIT cautions that these are sample associations, **not proof that buying causes success**.[web:60] |
| **Workflow integration and adoption** | Successful tools fit existing systems and approvals, retain relevant context, accept user corrections and improve with use; staff can use them in the work itself rather than repeatedly transferring context into a separate demo tool. IBM’s 2026 process-redesign survey reinforces the point: more than three-quarters of executives said improving isolated workflow steps has limited value without redesigning the whole process; respondents estimated that IT and business friction consumed **21% of AI ROI** in 2025.[web:60][web:21] |

**Highest *documented* returns in the cited MIT report:** these are reported savings or operational improvements, **not comparable ROI percentages**; the report does not supply the investment cost needed to rank them by return-on-investment ratio.[web:60]

| Use case | Measured outcome | Interpretation |
|---|---|---|
| Customer-service and document-processing automation replacing outsourced BPO work | **$2 million–$10 million saved annually** | Largest reported dollar-saving range; the return is tied to reducing an identifiable external bill.[web:60] |
| Automating outsourced financial-services risk checks | **$1 million saved annually** | A narrowly defined, recurring back-office expense.[web:60] |
| Reducing external creative and content agency work | **30% lower agency spend** | A measurable reduction in purchased services, though the report does not give a dollar total.[web:60] |
| AI-assisted lead qualification | **40% faster qualification** | A front-office speed gain; the report does not quantify resulting profit.[web:60] |
| AI-powered customer follow-ups and messaging | **10% better customer retention** | A front-office outcome; the report does not quantify resulting profit.[web:60] |

The defensible conclusion is **not “avoid AI” or “always buy back-office AI.”** It is to choose a measurable process, account for its full production costs and risks, integrate the tool into that process, and verify that the resulting savings or revenue actually outweigh those costs. The MIT comparisons are directional, while Gartner’s cancellation figures are forecasts rather than observed outcomes.[web:60][web:43][web:44]

Citations:
[1] https://github.com/HimJoe/MIT-Nanda-s-The-GenAI-Divide-STATE-OF-AI-IN-BUSINESS-2025/blob/main/The_GenAI_Divide_STATE_OF_AI_IN_BUSINESS_2025_1755905697.pdf
[2] https://my.ai.se/resources/6487
[3] https://www.slideshare.net/slideshow/state-of-ai-in-business-2025-mit-nanda/282804851
[4] https://github.com/HimJoe/MIT-Nanda-s-The-GenAI-Divide-STATE-OF-AI-IN-BUSINESS-2025
[5] https://www.linkedin.com/posts/avielran_v01stateofaiinbusiness2025reportpdf-activity-7365668227043000320-k_YQ
[6] https://my.ai.se/resources/the-genai-divide-state-of-ai-in-business-2025
[7] https://www.aigl.blog/state-of-ai-in-business-2025/
[8] https://news.ycombinator.com/item?id=44941374
[9] https://github.com/dgirard/fiches-veille/blob/main/fiches/2025-08/mit-nanda-genai-divide-95-percent-pilots-fail-legalio-2025-08-23.md
[10] https://www.linkedin.com/posts/marknyquist_v01stateofaiinbusiness2025reportpdf-activity-7389033185839349761-F69F
[11] https://www.linkedin.com/posts/tajankenkre_here-is-a-summary-of-the-key-takeaways-activity-7364726877250338816-eG5h
[12] https://letsdatascience.com/news/mit-report-documents-genai-pilot-roi-gap-e0924d7d
[13] https://aiwiki.ai/wiki/mit_genai_divide_report
[14] https://www.linkedin.com/posts/darlenenewman_mit-the-genai-divide-state-of-ai-in-business-activity-7363199330637250560-P9h4
[15] https://www.bankinfosecurity.com/most-ai-pilots-never-take-flight-a-29361
[31] https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
[32] https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025
[33] https://www.reuters.com/business/over-40-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says-2025-06-25/
[34] https://www.moneycontrol.com/artificial-intelligence/over-40-of-agentic-ai-projects-will-be-cancelled-by-2027-end-says-gartner-article-13175137.html
[35] https://www.techmonitor.ai/digital-economy/ai-and-automation/gartner-forecasts-30-abandonment-rate-for-generative-ai-projects-by-2025
[36] https://thejournal.com/articles/2024/08/06/gartner-30-of-gen-ai-projects-will-be-abandoned.aspx
[37] https://www.linkedin.com/posts/ahmedghadani_httpswwwgartnercomennewsroompress-releases-activity-7493613322806861824-2tfC
[38] https://www.silicon.co.uk/cloud/ai/gartner-ai-agent-620013
[39] https://www.outlookbusiness.com/deeptech/artificial-intelligence/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-says-gartner
[40] https://www.cfodive.com/news/agentic-ai-deployment-triples-despite-risks-kpmg/751789/
[41] https://www.zdnet.com/article/a-third-of-all-gen-ai-projects-will-be-abandoned-says-gartner/
[42] https://www.scribd.com/document/889765289/Gartner-article
[43] https://www.beri.net/article/40-percent-agentic-ai-projects-canceled-2027-gartner
[44] https://www.informatica.com/blogs/is-your-data-ready-for-ai-why-data-quality-and-governance-matter-in-automotive.html
[45] https://www.informatica.com/blogs/the-surprising-reason-most-ai-projects-fail-and-how-to-avoid-it-at-your-enterprise.html
[16] https://www.rand.org/pubs/research_reports/RRA2680-1.html
[17] https://newsroom.ibm.com/2025-05-06-ibm-study-ceos-double-down-on-ai-while-navigating-enterprise-hurdles
[18] https://www-api.ibm.com/adobe/assets/urn:aaid:aem:4ae921b8-79ab-4dfc-8891-4938f738f656/original/as/2025-ceo-study-5-mindshifts-to-supercharge-business-growth-report.pdf
[19] https://www.ibm.com/think/perspectives/agentic-ai-is-your-workforce-ready
[20] https://uk.newsroom.ibm.com/2025-CEO-study
[21] https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/ai-process-redesign
[22] https://datatech.disruptsmedia.com/ai-ml/why-42-cent-enterprise-ai-projects-are-abandoned
[23] https://www.linkedin.com/pulse/why-42-companies-abandoned-most-ai-projects-2025-what-other-b65kc
[24] https://www.ibm.com/think/insights/ai-roi
[25] https://www.rand.org/content/dam/rand/pubs/research_reports/RRA2600/RRA2680-1/RAND_RRA2680-1.pdf
[26] https://galileosearch.com.au/insights/why-42-percent-of-companies-abandon-ai-initiatives
[27] https://www.computer.org/publications/tech-news/build-your-career/ai-adoption-gap
[28] https://www.linkedin.com/posts/jesse-debear_sp-globals-2025-survey-found-that-42-of-activity-7465824869608263684-BNbD
[29] https://www.pythian.com/blog/corporate-ai-implementation-failure-why-95-of-projects-never-reach-production
[30] https://newsroom.ibm.com/2025-05-06-ibm-accelerates-enterprise-gen-ai-revolution-with-hybrid-capabilities
[46] https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/10/generative-ai-shows-rapid-growth-but-yields-mixed-results
[47] https://www.spglobal.com/market-intelligence/en/news-insights/research/ai-experiences-rapid-adoption-but-with-mixed-outcomes-highlights-from-vote-ai-machine-learning
[48] https://www.ciodive.com/news/AI-project-fail-data-SPGlobal/742590/
[49] https://www.pertamapartners.com/insights/ai-project-failure-statistics-2026
[50] https://www.linkedin.com/posts/andylauret_2025-42-of-organisations-abandoned-their-activity-7482765863419338752-PEqU
[51] https://www.financialexpress.com/business/digital-transformation-bridging-the-gap-between-ai-ambition-and-execution-in-india-4004505/
[52] https://www.linkedin.com/posts/neildmorris_42-of-companies-abandoned-most-of-their-activity-7417985242076200960-xgBF
[53] https://www.linkedin.com/pulse/why-42-companies-abandoned-most-ai-projects-2025-what-other-b65kc
[54] https://www.ciklum.com/blog/why-enterprise-ai-projects-fail/
[55] https://www.cio.com/article/4116299/beyond-the-hype-4-critical-misconceptions-derailing-enterprise-ai-adoption.html
[56] https://www.spglobal.com/market-intelligence/en/news-insights/research/451-it-insider-a-roundup-for-it-decision-makers3
[57] https://www.spglobal.com/market-intelligence/en/news-insights/articles/2025/9/ai-upskilling-navigating-the-urgent-need-for-workforce-transformation-92695030
[58] https://www.spglobal.com/en/research-insights/special-reports/ai-and-banking-leaders-will-soon-pull-away-from-the-pack
[59] https://www.spglobal.com/market-intelligence/en/news-insights/research/ai-infrastructure-trends-thoughts-and-a-2025-research-agenda
[60] https://www.ml4devs.com/pdf/papers/mit-nanda-state-of-ai-in-business-2025-report.pdf
[61] https://www.linkedin.com/posts/pillaisanil_aireport2025pdf-activity-7363228983041159169-w-Pa
[62] https://www.aigl.blog/state-of-ai-in-business-2025/
[63] https://www.thinkdigital.travel/research-directory/the-genai-divide-state-of-ai-in-business-2025
[64] https://www.theregister.com/software/2025/08/18/generative-ai-does-nothing-for-95-percent-of-companies/1118115
[65] https://www.slideshare.net/slideshow/state-of-ai-in-business-2025-mit-nanda/282804851
[66] https://virtualizationreview.com/articles/2025/08/19/mit-report-finds-most-ai-business-investments-fail-reveals-genai-divide.aspx
[67] https://www.linkedin.com/pulse/production-without-scale-governance-gap-stalling-ai-gmvve
[68] https://intuitionlabs.ai/pdfs/enterprise-ai-deployment-outcomes.pdf
[69] https://www.linkedin.com/posts/selcen_aireport2025pdf-activity-7366368567782518785-ZpWz
[70] https://www.scribd.com/document/905322535/v0-1-State-of-AI-in-Business-2025-Report
[71] https://www.linkedin.com/posts/andrew-davies-3830b821_v01stateofaiinbusiness2025reportpdf-activity-7364517018110164992-aAkZ
[72] https://my.ai.se/resources/6487
[73] https://www.slideshare.net/slideshow/state-of-ai-in-business-2025-mit-nanda/282804851?nway-content_model=D
[74] https://my.ai.se/resources/the-genai-divide-state-of-ai-in-business-2025
[75] https://www.cloudzero.com/blog/generative-ai-roi/
[76] https://dataconsultingfirms.com/insights/enterprise-genai-roi
[77] https://sparkeighteen.com/blog/the-ai-agents-making-it-to-production-12-agentic-ai-case-studies-with-measurable-roi-from-2025-2026/
[78] https://svitla.com/blog/generative-ai-roi-for-enterprises-use-cases-and-returns-explained/
[79] https://alicelabs.ai/en/insights/ai-roi-by-use-case
[80] https://heeya.fr/en/blog/generative-ai-enterprise-roi-use-cases-2026
[81] https://www.stackai.com/blog/state-of-generative-ai-in-the-enterprise
[82] https://axis-intelligence.com/enterprise-generative-ai-2026-guide/
[83] https://statisticsfundamentals.com/blog/technology/generative-ai-statistics/
[84] https://alicelabs.ai/en/insights/generative-ai-for-enterprise
[85] https://timewell.jp/en/columns/generative-ai-roi-enterprise-comparison-2026
[86] https://alicelabs.ai/en/insights/ai-agents-enterprise-roi
[87] https://www.crv.com/content/generative-ai-for-enterprise
[88] https://alicelabs.ai/en/insights/ai-automation-payback-period
[89] https://iternal.ai/generative-ai-enterprise-use-cases
````
