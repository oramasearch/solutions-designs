# 02-research-llm-agent-production-deployments

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** What production LLM and AI agent deployments at companies were publicly documented in 2024, 2025 and 2026 with measurable business results? Cover document extraction, RAG over internal knowledge, agentic workflows in operations, voice agents for call centers and scheduling, AI coding assistants inside companies, and customer support agents. Give company names, the specific use case, and reported metrics. Include sources such as the ZenML LLMOps database and company engineering blogs.
- **Timestamp (UTC):** 2026-10-09T20:21:46.603Z

## Response (verbatim)

````
The table lists **named company deployments with reported, measurable results** documented in 2024–2026. The year in the use-case column is the documentation year unless identified as a deployment year; reported savings and productivity figures are the companies’ or vendors’ claims, not independently audited estimates.

| Company names | Specific use case | Reported metrics |
|---|---|---|
| Grab | **Document and data classification (2024):** LLM-generated sensitivity tags for data entities, integrated with its production metadata systems. | Scanned **more than 20,000 data entities** within a month of rollout, averaging **300–400 per day**.[web:258] |
| AArete | **Document extraction (developed in 2024; results reported subsequently):** Doxy AI extracts metadata from healthcare and financial contracts and claims documents. | Reported **99% extraction accuracy**, **97% less manual effort**, and capacity of **up to 500,000 documents a week**. Its reported **$330 million in client savings** also includes downstream claims-overpayment recovery, not extraction alone.[web:49] |
| Uber | **Invoice extraction (2025):** TextSense uses OCR and an LLM to capture fields and line items from supplier invoices. | **90% overall accuracy**; **70% shorter average handling time**; reported **25–30% cost savings** against manual processing.[web:263] |
| Uber | **RAG over internal knowledge (2024):** Genie answers engineers’ Slack questions using internal wikis, engineering documents and prior answers. | Across **154 Slack channels**, answered **more than 70,000 questions**; **48.9% helpfulness rate**; estimated **13,000 engineering hours saved** since its 2023 launch.[web:262][web:264] |
| Grab | **Internal knowledge discovery (2024):** HubbleIQ helps employees find data-lake datasets; GPT-4 also generates table documentation. | Documentation coverage for frequently used tables rose from **20% to approximately 90%**; respondents who found datasets easy to discover rose **17 percentage points, to 73%**. Those results reflect the broader discovery improvements, not the chatbot in isolation.[web:115][web:255] |
| Amazon Finance Automation | **Internal financial-document RAG Q&A (documented in 2025).** | Reported answer accuracy increased from **49% to 86%** after changes to chunking, prompts and embeddings.[web:8] |
| HP | **Internal RAG chatbot for data-engineering operations (documented in 2025).** | Reported **20–30% lower operational costs**; built in **three weeks**.[web:8] |
| Grab | **RAG-assisted analytics and fraud investigations (2024):** tools retrieve and execute relevant queries, then summarize reports or investigations. | Automated report generation saved an estimated **3–4 hours per report**; fraud investigations that had been time-consuming could be completed **in minutes**.[web:71] |
| Grab | **Agentic fraud operations (2025):** an SOP-driven account-takeover investigation bot and fraud-investigation workflow. | Account-takeover investigations fell from **23 to 3 minutes**, with **87% of cases automated**; the fraud workflow cut average handling time **45%** and saved **more than 300 staff-hours monthly**. Grab describes these as real-world results but does not explicitly give a production launch date.[web:65] |
| Stripe | **Agentic compliance operations (2026):** agents assemble and assess information for financial-compliance reviewers, who retain final decision authority. | **26% reduction** in median review handling time; **more than 96%** reviewer helpfulness ratings.[web:181] |
| Grab | **Multi-agent internal data-warehouse support (2026):** agents answer data-lineage questions, investigate faults and prepare enhancement merge requests. | Reported **hundreds of engineering hours reclaimed monthly** and an **order-of-magnitude reduction** in issue-resolution time; repetitive requests had previously consumed about **40%** of the team’s time.[web:96] |
| Grab | **Self-service analytics agents (2026):** Slack-based agents answer metric, data-pull and SQL requests. | From March to May, requests answered without a person rose from **53% to 67%** for metrics, **63% to 90%** for data pulls and **50% to 81%** for SQL; overall analytics cycle times fell approximately **33%**. Grab does not attribute every change solely to agents.[web:87] |
| Pinterest | **Agents for internal engineering operations (documented in 2026):** MCP tools enable knowledge retrieval, debugging and other engineering tasks. | Reported **66,000 monthly tool invocations**, **844 monthly active users** and an estimated **7,000 hours saved per month**. Pinterest characterizes the time-saved calculation as directional.[web:90] |
| TripleTen | **Voice admissions and appointment-setting agent (deployed August 2024; results accumulated afterward).** | Reported **17,000 outbound calls monthly**, **200 advisor-hours saved monthly** and **more than 3,000 hours of talk time handled** since implementation. A branded-calling feature raised pickup and conversion rates **20%**.[web:281] |
| Matic Insurance | **Voice agents for after-hours calls, appointment follow-ups and insurance-data intake (results reported for Q1 2025).** | Handled **more than 8,000 AI calls in Q1 2025** and **3,000–4,500 scheduled calls monthly**; automated about **50% of low-value tasks** while maintaining an **NPS of 90**.[web:74] |
| UnityAI | **Healthcare voice scheduling across client clinics (2026):** agents call patients and update scheduling systems. | Reported **more than 250,000 patient calls monthly**, **50% lower cost** than traditional call centers and **5× company revenue growth** after adding voice AI; these are UnityAI’s reported comparisons.[web:160] |
| a360inc | **Voice agent for notary outreach and bid negotiation (2026).** | Reported **80% lower cost per call** and **$400,000 saved** on remote bid collection in under six months.[web:164] |
| Grab | **AI-assisted internal code and test migration (2026):** generates medium-test setups while scaling distroless-container adoption. | Effort fell from **1–3 engineer-days to roughly 0.1 day per service**; the agent raised **more than 100 test merge requests** in roughly six weeks.[web:97] |
| Spotify | **Honk internal background coding agent (2025):** makes production-code changes for migrations and upgrades. | **More than 1,500 AI-generated pull requests merged**; Spotify reported **60–90% time savings** on the migrations described versus writing the changes by hand.[web:111] |
| Spotify | **Honk dataset-consumer migration (2026):** automates changes to downstream pipelines following dataset-version changes. | Produced **240 automated migration pull requests** and saved an estimated **10 engineering weeks**.[web:136] |
| Spotify | **Company-wide AI coding tools and Honk (2026).** | **More than 99%** of engineers used AI coding tools weekly; **94%** said the tools made them more productive; pull-request frequency rose **76%**. The productivity figure is self-reported, while PR frequency measures activity.[web:130] |
| Coinbase | **Internal coding, review and support agents (documented in 2025):** AI assists code creation and pull-request review, alongside customer-contact automation. | Coinbase reported **approximately 40% of daily code AI-generated or AI-influenced**, an estimated **75,000 hours saved annually** by automated PR review, and **approximately 65% of customer contacts** handled automatically.[web:95] |
| Klarna | **Customer-support agent (2024):** handles shopping, payments, refunds and returns across chat. | In its first month: **2.3 million conversations**, or **two-thirds of support chats**; resolution time fell from **11 minutes to under 2**; repeat inquiries fell **25%**. Klarna *estimated*, rather than measured, a **$40 million** 2024 profit improvement.[web:119] |
| Lime | **Customer-support agents (2024):** automatically answer email and web cases and classify tickets for routing. | Automated **27% of cases**, cut time to first response **77%**, and achieved **98% automatic tagging accuracy** against a workload exceeding **1.7 million tickets annually**.[web:202] |
| DoorDash | **RAG-based Dasher support agent (2025):** retrieves support knowledge and applies an LLM guardrail to live replies. | Autonomously assisted **thousands of Dashers daily**; the guardrail reduced hallucinations **90%** and potentially severe compliance issues **99%**.[web:232] |
| Salesforce | **Agentforce customer-support agent (2025):** handles Salesforce Help self-service conversations. | Reported **more than 2.2 million autonomous conversations**, versus **1.5 million handled by human engineers**, and **more than $100 million in annualized cost savings**. The savings methodology was not disclosed.[web:204] |

Citations:
[1] https://www.zenml.io/llmops-tags/langchain
[2] https://www.zenml.io/llmops-database/panel-discussion-real-world-llm-production-use-cases
[3] https://www.zenml.io/category/llmops?63c5cb56_page=7
[4] https://www.zenml.io/llmops-database/multimodal-rag-solution-for-oil-and-gas-drilling-data-processing
[5] https://www.zenml.io/llmops-tags/rag
[6] https://www.zenml.io/llmops-database/end-to-end-llm-observability-for-rag-powered-ai-assistant
[7] https://www.zenml.io/llmops-database/large-scale-semantic-search-platform-for-food-delivery
[8] https://www.zenml.io/blog/llmops-in-production-457-case-studies-of-what-actually-works
[9] https://www.zenml.io/llmops-database/enhanced-agentic-rag-for-on-call-engineering-support
[10] https://www.zenml.io/llmops-database/building-production-finops-ai-agents-with-amazon-bedrock-agentcore
[11] https://www.zenml.io/llmops-database/intelligent-model-routing-for-cost-optimization-and-operational-resilience
[12] https://www.zenml.io/llmops-database/building-a-custom-llm-for-automated-documentation-generation
[13] https://www.zenml.io/llmops-database/enterprise-grade-rag-system-for-internal-knowledge-management
[14] https://www.zenml.io/llmops-database/scaling-vector-search-infrastructure-for-ai-powered-workspace-search
[15] https://www.zenml.io/llmops-database/contact-center-transformation-with-ai-powered-customer-service-and-agent-assistance
[16] https://github.com/primaprashant/llms-in-production
[17] https://tianpan.co/blog/2025/10/03/year-of-building-with-llms-lessons
[18] https://reruption.com/en/knowledge/blog/ai-trends-2025-stuttgart-mechanical-engineering-agentic-systems-private-llms
[19] https://tensoria.fr/en/blog/enterprise-rag-use-cases-roi
[20] https://azati.com/blog/schema-guided-reasoning-llm-pipelines/
[21] https://introl.com/blog/rag-infrastructure-production-retrieval-augmented-generation-guide
[22] https://dev.morphik.ai/blog/retrieval-augmented-generation-strategies
[23] https://arxiv.org/html/2510.10138v1
[24] https://www.llamaindex.ai/blog?tag=Cli
[25] https://aliac.eu/blog/agentic-rag-in-production
[26] https://www.appther.com/blogs/how-to-implement-rag-in-your-ai-system-architecture-process-and-cost-breakdown-2025
[27] https://www.dotzlaw.com/insights/benchmarking-and-optimizing-graphrag-systems-performance-insights-from-production-part-4-of-4/
[28] https://dextralabs.com/blog/production-rag-in-2025-evaluation-cicd-observability/
[29] https://www.3l3c.ai/blog/ai-technology/llm-research-2024
[30] https://ragflow.io/blog/rag-review-2025-from-rag-to-context
[31] https://optivustechnologies.com/our-insights/agentic-ai-use-cases-enterprise
[32] https://vapi.ai/blog/category/case-studies
[33] https://marketintelo.com/report/ai-agents-market
[34] https://synthflow.ai/blog/best-10-ai-voice-agents-for-contact-centers-and-enterprises-tested-and-reviewed
[35] https://ar5iv.labs.arxiv.org/html/2509.19708
[36] https://callsphere.ai/blog/parallel-tool-calling-openai-agents-sdk-eval
[37] https://unctad.org/system/files/official-document/tir2025ch2_en.pdf
[38] https://www.regal.ai/blog
[39] https://www.regal.ai/blog/2025-in-review
[40] https://www.bignewsnetwork.com/news/279328510/why-call-centers-are-finally-seeing-real-ai-call-center-roi
[41] https://www.regal.ai/blog/measuring-ai-agent-success
[42] https://www.nextiva.com/blog/voice-ai-trends.html
[43] https://synthflow.ai/blog/conversational-ai-architecture-playbook
[44] https://243608892.fs1.hubspotusercontent-na2.net/hubfs/243608892/AI_Engineering_Impact_Report_July_2025_Faros_AI.pdf
[45] https://murf.ai/blog/best-voice-agents-for-call-centers
[46] https://www.zenml.io/llmops-database/genai-powered-invoice-document-processing-and-automation
[47] https://www.zenml.io/llmops-database/customer-service-transformation-with-ai-based-email-automation-and-chatbot-implementation
[48] https://www.zenml.io/llmops-database/enterprise-document-data-extraction-using-agentic-ai-workflows
[49] https://www.zenml.io/llmops-database/document-metadata-extraction-at-scale-using-generative-ai-for-healthcare-and-financial-services
[50] https://www.zenml.io/llmops-database/enhanced-agentic-rag-for-on-call-engineering-support
[51] https://www.zenml.io/llmops-database/building-and-evaluating-legal-ai-at-scale-with-domain-expert-integration
[52] https://www.zenml.io/llmops-database/building-an-ai-agent-platform-with-cloud-based-virtual-machines-and-extended-context
[53] https://www.zenml.io/llmops-database/transforming-agent-and-customer-experience-with-generative-ai-in-health-insurance
[54] https://www.zenml.io/llmops-database/large-scale-semantic-search-platform-for-food-delivery
[55] https://www.zenml.io/llmops-database/automated-carrier-claims-management-using-ai-agents
[56] https://www.zenml.io/llmops-database?9c3da900_page=2
[57] https://www.zenml.io/llmops-database/scaling-ai-evaluation-for-legal-ai-systems-through-multi-modal-assessment
[58] https://www.zenml.io/llmops-database/post-training-open-weight-models-for-long-horizon-legal-agent-tasks
[59] https://www.zenml.io/llmops-database/comprehensive-llm-benchmarking-for-financial-automation-tasks
[60] https://www.uber.com/blog/research/multinet-real-time-joint-semantic-reasoning-for-autonomous-driving/
[61] https://www.uber.com/blog/pennsylvania/
[62] https://www.uber.com/blog/reno/
[63] https://www.uber.com/blog/minnesota/page/2/
[64] https://www.uber.com/blog/philadelphia/page/2/
[65] https://engineering.grab.com/introducing-the-sop-drive-llm-agent-framework
[66] https://www.uber.com/blog/baltimore/
[67] https://www.uber.com/blog/green-bay/
[68] https://www.uber.com/blog/where-to-request-rides-from-crave/
[69] https://www.uber.com/blog/uber-eats-sales/
[70] https://www.uber.com/blog/the-perils-of-migrating-a-large-scale-service-at-uber/
[71] https://engineering.grab.com/transforming-the-analytics-landscape-with-RAG-powered-LLM
[87] https://engineering.grab.com/how-ai-is-transforming-analytics
[88] https://www.zenml.io/llmops-database/transforming-product-development-with-ai-first-workflows-and-agent-orchestration
[89] https://www.zenml.io/llmops-database/ai-powered-developer-tools-for-code-quality-and-test-generation
[90] https://www.zenml.io/llmops-database/building-a-production-model-context-protocol-mcp-ecosystem-for-ai-agents
[91] https://engineering.grab.com/how-grab-builds-and-runs-ai-agents-at-scale
[92] https://engineering.grab.com/powering-ai-led-research-through-simulation
[93] https://engineering.grab.com/introducing-the-sop-drive-llm-agent-framework
[94] https://www.zenml.io/llmops-database/enterprise-llm-deployment-with-multi-cloud-data-platform-integration
[95] https://www.zenml.io/llmops-database/scaling-customer-support-compliance-and-developer-productivity-with-gen-ai
[96] https://engineering.grab.com/from-firefighting-to-building
[97] https://engineering.grab.com/scaling-out-distroless-adoption-with-ai
[98] https://www.zenml.io/llmops-database/ai-powered-code-generation-for-support-team-bug-fixing
[99] https://engineering.grab.com/grab-bench-evaluating-ai
[100] https://www.zenml.io/llmops-database/ai-powered-automated-graphql-schema-cleanup
[101] https://engineering.grab.com/palana-part-1-secure-platform-for-ai-agents
[72] https://www.retellai.com/blog/best-ai-phone-systems-small-businesses
[73] https://www.retellai.com/blog/hosted-contact-center-solution
[74] https://www.retellai.com/case-study/matic-insurance-ai-call-automation-case-study
[75] https://www.retellai.com/blog/best-ai-voice-platforms-virtual-receptionists
[76] https://www.retellai.com/blog/generative-ai-customer-service
[77] https://www.retellai.com/use-cases/receptionists
[78] https://vapi.ai/industries/healthcare
[79] https://www.retellai.com/blog/how-to-build-ai-voice-agent-less-than-30-minutes
[80] https://www.retellai.com/case-study/tripleten-ai-call-automation-admissions-case-study
[81] https://vapi.ai/blog
[82] https://vapi.ai/blog/bringing-voice-to-access-panel
[83] https://www.retellai.com/features/book-appointments
[84] https://www.retellai.com/blog/contact-center-automation-trends
[85] https://www.zenml.io/llmops-database/hipaa-compliant-ai-voice-scheduler-for-healthcare-appointment-management
[86] https://vapi.ai/library/receptionist-vs-ai-assistant-real-dental-clinic-call-using-vapi-gpt-4o-french-english
[102] https://engineering.grab.com/spellvault-evolution-beyond-llm
[103] https://engineering.atspotify.com/podcasts/nerdout-at-spotify
[104] https://engineering.grab.com/categories/engineering/
[105] https://engineering.atspotify.com/2025
[106] https://engineering.grab.com/categories/data-science/
[107] https://engineering.grab.com/blog/7/
[108] https://engineering.atspotify.com/2026/3/inside-the-archive-2025-wrapped
[109] https://engineering.grab.com/grab-ai-gateway
[110] https://engineering.grab.com/blog/24/
[111] https://engineering.atspotify.com/2025/11/spotifys-background-coding-agent-part-1
[112] https://engineering.grab.com/authors
[113] https://engineering.grab.com/transforming-the-analytics-landscape-with-RAG-powered-LLM
[114] https://engineering.grab.com/blog/2/
[115] https://engineering.grab.com/hubble-data-discovery
[116] https://engineering.atspotify.com/tag/data
[129] https://engineering.grab.com/scaling-out-distroless-adoption-with-ai
[130] https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint
[131] https://engineering.atspotify.com/2026/9/ai-changed-how-spotify-builds-what-we-learned-and-fixed-about-quality-at-higher-velocity
[132] https://engineering.atspotify.com/2026/4/anthropic-agentic-development
[133] https://engineering.grab.com/how-ai-is-transforming-analytics
[134] https://engineering.grab.com/how-grab-builds-and-runs-ai-agents-at-scale
[135] https://engineering.atspotify.com/2026
[136] https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4
[137] https://engineering.atspotify.com/2026/6/encoding-your-domain-expert-the-context-layer-behind-spotifys-data-assistant
[138] https://engineering.atspotify.com/2019/5/scio-0-7-a-deep-dive
[139] https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90
[140] https://engineering.grab.com/powering-ai-led-research-through-simulation
[141] https://engineering.grab.com/brix
[142] https://engineering.grab.com/counter-service-storage-migration
[143] https://engineering.atspotify.com/2026/2/how-we-release-the-spotify-app-part-2
[117] https://www.intercom.com/blog/whats-new-with-fin-3
[118] https://www.intercom.com/customers
[119] https://openai.com/index/klarna/
[120] https://community.intercom.com/fin-faqs-97
[121] https://www.intercom.com/why-choose-intercom
[122] https://www.intercom.com/drlp/ai-agent
[123] https://www.intercom.com/solutions/technology
[124] https://www.intercom.com/blog/preparing-for-the-customer-agent-future
[125] https://www.intercom.com/blog/ecommerce-customer-service-fin-ai-agent/
[126] https://www.intercom.com/help/en/articles/7022438-reporting-metrics-attributes
[127] https://www.intercom.com/solutions/fintech
[128] https://engineering.grab.com/how-ai-is-transforming-analytics
[144] https://www.uber.com/blog/research/understanding-neural-networks-via-feature-visualization-a-survey/
[145] https://www.uber.com/blog/the-perils-of-migrating-a-large-scale-service-at-uber/
[146] https://www.uber.com/blog/solar-eclipse/
[147] https://www.uber.com/blog/baltimore/
[148] https://www.uber.com/blog/case-study-shows-our-impact-in-austin/
[149] https://www.uber.com/blog/pennsylvania/
[150] https://www.uber.com/blog/where-to-request-rides-from-crave/
[151] https://www.uber.com/blog/mapway/
[152] https://www.uber.com/blog/minnesota/page/2/
[153] https://www.uber.com/blog/weave/
[154] https://doordash.engineering/blog/page/4/
[155] https://doordash.engineering/category/backend/page/6/
[156] https://doordash.engineering/2023/01/04/selecting-the-best-image-for-each-merchant-using-exploration-and-machine-learning/
[172] https://www.zenml.io/llmops-database/panel-discussion-real-world-llm-production-use-cases
[173] https://www.zenml.io/llmops-database/ai-powered-code-maintenance-and-migration-at-scale
[174] https://www.zenml.io/llmops-database/ai-powered-marketing-intelligence-platform-accelerates-industry-analysis
[175] https://www.zenml.io/llmops-database/scaling-ai-driven-code-automation-and-engineering-productivity-at-spotify
[176] https://www.zenml.io/llmops-database/multi-agent-mortgage-assistant-on-amazon-bedrock
[177] https://www.zenml.io/llmops-database/llm-powered-security-incident-response-and-automation
[178] https://www.zenml.io/llmops-database/plus-one-internal-llm-platform-for-cross-company-ai-adoption
[179] https://www.zenml.io/llmops-database/advanced-fine-tuning-techniques-for-multi-agent-orchestration-at-scale
[180] https://www.zenml.io/llmops-database/ai-powered-wealth-management-assistant-for-financial-advisors
[181] https://www.zenml.io/llmops-database/production-grade-ai-agents-for-financial-compliance-review-automation
[182] https://www.zenml.io/llmops-database/building-pat-an-ai-analyst-for-investment-research-at-scale
[183] https://www.zenml.io/llmops-database/gen-ai-on-call-copilot-for-engineering-support
[184] https://www.zenml.io/llmops-database/ai-powered-healthcare-building-reliable-care-agents-in-production
[185] https://www.zenml.io/llmops-database/llm-powered-personalized-music-recommendations-and-ai-dj-commentary
[186] https://www.zenml.io/llmops-database/enterprise-ai-assistant-spanning-knowledge-management-data-analytics-and-process-orchestration
[157] https://www.retellai.com/case-study/how-pine-park-health-elevates-senior-care-with-intelligent-voice-automation
[158] https://www.retellai.com/case-study/how-medical-data-systems-scales-280-000-in-monthly-collections-with-ai-voice-agents-on-retell
[159] https://www.regal.ai/blog/2025-in-review
[160] https://vapi.ai/blog/case-study-unityai
[161] https://vapi.ai/blog/bringing-voice-to-access-panel
[162] https://www.regal.ai/blog/april-2025-releases
[163] https://www.regal.ai/blog/may-2025-releases
[164] https://www.regal.ai/blog/a360inc-negotiator-agent
[165] https://www.regal.ai/blog/real-time-customer-data
[166] https://www.regal.ai/blog/october-2025-releases
[167] https://vapi.ai/blog
[168] https://vapi.ai/blog/category/case-studies
[169] https://www.regal.ai/blog/measuring-ai-agent-success
[170] https://www.regal.ai/blog/measuring-customer-experience
[171] https://www.regal.ai/blog/customer-spotlight-kin-insurance-a360inc-blog
[187] https://stripe.com/blog/can-ai-agents-build-real-stripe-integrations
[188] https://www.uber.com/blog/orange-county/page/4/
[189] https://www.uber.com/blog/detroit/engineering/page/2/
[190] https://www.uber.com/blog/new-orleans/page/4/
[191] https://stripe.com/blog/global-checkout-trends
[192] https://stripe.com/blog/stripe-projects-adds-new-agents-providers-developer-controls
[193] https://stripe.com/blog/shoptalk-2026
[194] https://stripe.com/blog/10-lessons
[195] https://stripe.com/blog/page/2
[196] https://stripe.com/blog/top-product-updates-sessions-2025
[197] https://stripe.com/blog/stripe-atlas-startups-in-2025-year-in-review
[198] https://stripe.com/blog/saas-platforms-are-surging-despite-the-saaspocalypse
[199] https://stripe.com/blog/agentic-commerce-suite
[200] https://www.uber.com/blog/navigating-uber-engineering-interviews/
[201] https://www.uber.com/blog/cto-thuan-pham-interview/
[202] https://www.zenml.io/llmops-database/ai-powered-customer-support-automation-for-global-transportation-service
[203] https://www.intercom.com/customers
[204] https://www.zenml.io/llmops-database/building-an-agentic-enterprise-with-ai-agents-in-production
[205] https://www.intercom.com/customers/bailey-nelson
[206] https://www.intercom.com/customers/livingspaces
[207] https://www.zenml.io/llmops-database/enterprise-scale-ai-agent-deployment-in-insurance
[208] https://www.zenml.io/llmops-database/building-economic-infrastructure-for-ai-with-foundation-models-and-agentic-commerce
[209] https://www.zenml.io/llmops-database/scaling-go-to-market-ai-agents-at-production-scale
[210] https://www.zenml.io/llmops-database/agentic-ai-for-sap-digital-transformation-on-amazon-bedrock-agentcore
[211] https://www.intercom.com/customers/frame-io
[212] https://www.zenml.io/llmops-database/forward-deployed-engineering-for-enterprise-llm-adoption
[213] https://www.zenml.io/llmops-database/building-a-production-voice-ai-agent-for-customer-support-in-100-days
[214] https://www.zenml.io/llmops-database/multi-agent-property-investment-advisor-with-continuous-evaluation
[215] https://www.intercom.com/customers/hospitable
[216] https://www.zenml.io/llmops-database/scaling-ai-agents-for-financial-advisory-services-with-compliance-and-observability
[217] https://github.blog/changelog/2024-07-31-repository-updates-july-31st-2024/
[218] https://github.blog/changelog-sitemap3.xml
[219] https://github.blog/ai-and-ml/github-copilot/copilot-faster-smarter-and-built-for-how-you-work-now/
[220] https://github.blog/ai-and-ml/github-copilot/whats-new-with-github-copilot-july-2024/
[221] https://github.blog/news-insights/product-news/introducing-code-referencing-for-github-copilot/
[222] https://github.blog/tag/github-copilot/page/6/
[223] https://github.blog/changelog/2024-01-12-global-code-search-on-github-mobile/
[224] https://github.blog/ai-and-ml/github-copilot/page/9/
[225] https://github.blog/changelog/month/02-2025/
[226] https://github.blog/news-insights/product-news/universe-2024-previews-releases/
[227] https://github.blog/ai-and-ml/generative-ai/how-companies-are-boosting-productivity-with-generative-ai/
[228] https://github.blog/changelog/2024-10-21-copilot-secret-scanning-for-generic-passwords-is-generally-available/
[229] https://github.blog/changelog/2025-11-18-github-copilot-cli-new-models-enhanced-code-search-and-better-image-support/
[230] https://github.blog/ai-and-ml/github-copilot/what-can-github-copilot-do-examples/
[231] https://github.blog/ai-and-ml/github-copilot/github-for-beginners-essential-features-of-github-copilot/
[262] https://www.uber.com/us/en/blog/genie-ubers-gen-ai-on-call-copilot/
[263] https://www.uber.com/gb/en/blog/advancing-invoice-document-processing-using-genai/
[264] https://content.hopsworks.ai/hubfs/Feature%20Store%20Summit%202024/FS%20Summit%2024%20-%20Ubers%20-%20GenAI%20Oncall%20Co-Pilot.pdf
[265] https://www.uber.com/se/en/blog/page/10/
[266] https://www.uber.com/us/en/blog/enhanced-agentic-rag/
[267] https://www.infoq.com/news/2024/10/uber-genie-rag-copilot/
[268] https://www.infoq.com/news/2025/04/uber-genai-document-processing/
[269] https://www.uber.com/uy/en/blog/engineering/page/8/
[270] https://www.linkedin.com/posts/lewiswalkerai_ubers-generative-ai-on-call-copilot-activity-7262509913040416770-ISek
[271] https://www.linkedin.com/posts/rishabh-daal-972a99a4_genai-ai-bigtech-activity-7253107468254289920-5OI6
[272] https://securityboulevard.com/2025/04/unlocking-genai-real-world-use-cases-innovations-across-industries/
[273] https://www.linkedin.com/posts/systemdesignengineer_uber-saved-13000-engineering-hours-leveraging-activity-7386642488272351232-SVVc
[274] https://www.reddit.com/r/LLMDevs/comments/1k64ajp/how_uber_used_ai_to_automate_invoice_processing/nn6v8rz/
[275] https://www.uber.com/hk/en/blog/engineering/page/6/
[276] https://www.datatinkerer.io/p/how-uber-cut-invoice-handling-time-by-70-percent-with-genai
[247] https://engineering.grab.com/
[248] https://engineering.grab.com/categories/engineering/
[249] https://engineering.grab.com/blog/24/
[250] https://engineering.grab.com/blog/7/
[251] https://engineering.grab.com/authors
[252] https://engineering.grab.com/tags
[253] https://engineering.grab.com/custom-vision-llm-at-grab
[254] https://engineering.grab.com/metasense-v2
[255] https://engineering.grab.com/hubble-data-discovery
[256] https://engineering.grab.com/how-grab-builds-and-runs-ai-agents-at-scale
[257] https://engineering.grab.com/categories/data/
[258] https://engineering.grab.com/llm-powered-data-classification
[259] https://engineering.grab.com/blog/11/
[260] https://engineering.grab.com/blog/13/
[261] https://engineering.grab.com/how-ai-is-transforming-analytics
[232] https://careersatdoordash.com/blog/large-language-modules-based-dasher-support-automation/
[233] https://airbnb.tech/ai-ml/listening-learning-and-helping-at-scale-how-machine-learning-transforms-airbnbs-voice-support-experience/
[234] https://doordash.engineering/blog/page/4/
[235] https://airbnb.tech/blog/
[236] https://airbnb.tech/research/academic-papers/
[237] https://careersatdoordash.com/blog/building-a-unified-chat-experience-at-doordash/
[238] https://careersatdoordash.com/blog/part-1-doordash-2024-summer-intern-projects/
[239] https://airbnb.tech/category/ai-ml/feed/
[240] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Learning-and-Applying-Airbnb-Listing-Embeddings-.pdf
[241] https://airbnb.tech/ai-ml/eval-driven-development-lessons-from-evaluating-genai-at-scale/
[242] https://airbnb.tech/infrastructure/from-vendors-to-vanguard-airbnbs-hard-won-lessons-in-observability-ownership/
[243] https://doordash.engineering/category/backend/page/6/
[244] https://airbnb.tech/ai-ml/beyond-the-model-engineering-ai-infra-with-scientific-judgement/
[245] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Understanding-User-Booking-Intent-at-Airbnb.pdf
[246] https://careersatdoordash.com/blog/revamping-dasher-faq-hub-through-server-driven-content-and-webview/
[277] https://aws.amazon.com/solutions/case-studies/doordash-bedrock-case-study/
[278] https://news.hamidun.com/en/cases/doordash-claude-contact-center
[279] https://www.zenml.io/llmops-database/generative-ai-contact-center-solution-with-amazon-bedrock-and-claude
[280] https://delight.ai/blog/ai-for-cx/ai-customer-service
[281] https://www.retellai.com/case-study/tripleten-ai-call-automation-admissions-case-study
[282] https://www.brillio.com/wp-content/uploads/2024/07/Healthcare_leader_improves_customer_engagement_by_72percent_with_conversational_AI.pdf
[283] https://aiqlabs.ai/blog/how-much-does-a-good-appointment-setter-cost
[284] https://voicefleet.ai/blog/ai-voice-agents-revolutionising-healthcare-phone-systems
[285] https://cleartalk.ai/resources
[286] https://www.usefini.com/guides/which-industries-run-ai-voice-agents-customer-support-platforms-compared
[287] https://www.verint.com/wp-content/uploads/2024/09/IncreasingAgentCapacitywithIVAs.pdf
[288] https://www.speechmatics.com/company/articles-and-news/voice-ai-in-2025-7-real-world-enterprise-use-cases-you-can-deploy-now
[289] https://portfolio.stackup.solutions/case-studies/ai-voice-agent
[290] https://www.five9.com/blog/how-ai-catapulting-customer-experience-contact-center
[291] https://crushingmeetings.realwave.com/

````
