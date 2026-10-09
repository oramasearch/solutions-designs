# 11-research-revenue-leakage-anomaly

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** What production ML solutions detect revenue leakage, billing errors, and operational anomalies in companies (beyond fraud and KPI dashboards)? Examples: unbilled services and contract compliance in B2B billing, freight invoice audit and carrier overbilling, utility meter anomalies and non-technical losses, duplicate payments and vendor overcharges in accounts payable (recovery audit), pricing errors and margin leakage in distribution, telecom revenue assurance, healthcare charge capture. For each: technique (anomaly detection, supervised classification, rules + ML), data needed, typical buyer, and documented recovered amounts or ROI with named companies or vendors.
- **Timestamp (UTC):** 2026-10-09T20:39:41.115Z

## Response (verbatim)

````
**Production solutions exist across all seven workflows.** They do more than display a suspicious KPI: they compare source records with the contract, rate, meter reading, payment, or clinical record that should have produced the transaction, then route exceptions for correction or recovery. The results below distinguish **recovered money** from **identified leakage, prevented costs, and margin improvement**.

| Production solution and leakage detected | Technique | Data needed | Typical buyer | Documented recovered amounts or ROI |
|---|---|---|---|---|
| **B2B service billing — QuantSpark ContractCube:** delivered services that were not billed, or were billed using the wrong contract logic. | Multimodal LLM extraction of contract terms; NLP matching of service records to contracts; comparison of expected and issued invoices. | Contracts and amendments, service-delivery records, pricing terms, issued invoices. | Revenue assurance, commercial finance, or billing operations at a complex B2B service provider. | For an **unnamed global airport-services operator**, QuantSpark reports **$3.5 million in *potential* leakage identified** across four regions; it does not quantify cash collected. [web:18] |
| **Freight invoice audit — Loop; Intelligent Audit:** carrier rate, fuel, accessorial, weight, and duplicate-billing errors. | Document-extraction AI and exception-pattern analysis combined with contractual rate and business-rule checks; disputed charges enter an audit-and-recovery workflow. | Carrier invoices, negotiated tariffs and contracts, shipment documents, weights, tracking IDs, and fuel/accessorial schedules. | Logistics or transportation leadership with finance/AP. | **Loop** reports **$10,000 in overcharges identified** and **6% transportation savings** for an unnamed polymer manufacturer; it does not separately state cash recovered. **Intelligent Audit** reports **$1.9 million in recoveries and prevented overcharges** for an unnamed large distributor auditing roughly 120,000 freight invoices annually. [web:4][web:1] |
| **Utility revenue protection — C3 Revenue Protection:** anomalous meters, unbilled consumption, and non-technical losses. | ML ranks meters or service points for investigation using consumption and other utility-system signals; field inspections determine whether energy can be billed or recovered. | Smart-meter/AMI readings, customer and service-point histories, billing records, and related utility-system data. | Utility revenue-protection or metering operations. | **Baltimore Gas and Electric** reported **$2.8 million in economic benefit** from identifying unbilled energy usage and fraud; a projected $20 million annual benefit was **not** a realized result. **Enel** reported **70% more energy recovered per inspection in Italy** and **more than three times as much in Spain** using C3’s ML-based prioritization. [web:33][web:34] |
| **Accounts-payable recovery audit — Oversight Payables Monitoring:** duplicate payments, vendor overbilling, missed credits, and cross-system payment errors. | ML/GenAI anomaly detection and outlier analysis layered over invoice, purchase-order, payment, and vendor-statement checks; exceptions are reviewed before payment or pursued afterward. | ERP/AP invoices and payments, purchase orders, receipts, vendor master data, and vendor statements. | AP leadership, controller, or internal audit. | **International Paper** reports **$62.2 million in combined preventions and recoveries of duplicate AP payments** after adopting Oversight’s payables monitoring. That figure is **not solely post-payment cash recovered**. [web:85][web:81] |
| **Distribution pricing and margin control — Zilliant Price IQ:** below-floor prices, inconsistent discounts, and margin erosion. | Predictive price optimization with business-defined minimum margins and other pricing constraints; recommendations are put into pricing decisions rather than left in a dashboard. | Customer–SKU transaction history, realized prices, costs, volumes, product relationships, and pricing policies. | VP of pricing, commercial finance, or sales operations at a distributor. | Zilliant reports that an **unnamed global foodservice distributor** achieved a **134-basis-point margin lift** and **50% fewer below-floor transactions**. This is margin improvement, not an amount recovered from past invoices. [web:147][web:159] |
| **Telecom revenue assurance — Subex Business Assurance:** usage not charged or billed, incorrect ratings, and provisioning-to-billing gaps. | Reconciliation and anomaly rules **plus ML** that detects unusual usage, rating, billing, and payment patterns and prioritizes cases by likely financial impact. | Usage/CDR events, charging and tariff data, provisioning, bills, payments, and partner records. | Telecom revenue-assurance or finance operations. | Subex says its work for an **unnamed Middle Eastern mobile operator** identified **14 leakage areas and saved $1.6 million in the first year**. Its product description documents ML alongside rule-based controls; the case-study summary does not attribute that entire saving specifically to ML. [web:48][web:59] |
| **Healthcare charge capture and prebill coding — R1 Charge Capture; SmarterDx SmarterPrebill:** delivered care or documented conditions missing from charges and claims. | R1 links physician and hospital billing and generates coder-reviewable predictions. SmarterDx uses clinical AI to review charts for missing diagnosis and procedure codes; staff validate findings before billing. | Clinical notes, orders, labs, medications and other encounter records; existing codes, charges, and physician/hospital billing records. | Hospital revenue integrity, clinical documentation improvement, or revenue-cycle leadership. | **R1** reports **$9 million recovered over two years** for an unnamed Midwestern health system through missed- and miscoded-charge capture. **McLaren Health Care** reports **$11.3 million in annualized new revenue uncovered** with SmarterDx SmarterPrebill; its annual report does not separately state cash collected. [web:102][web:111] |

Citations:
[16] https://hnmsystems.com/case-study-reduced-billing-discrepancies-and-improved-audit-compliance-through-ai-powered-contract-alignment/
[17] https://www.techtorch.io/case-studies/customer-story/how-techtorch-uncovered-10m-in-revenue-leakage-for-a-financial-services-leader/
[18] https://www.quantspark.com/case-studies/identified-revenue-leakage-across-4-regions
[19] https://www.yieldstoneadvisory.com/home-3
[20] https://www.hercules.ai/case-study-invoicing
[21] https://www.linkedin.com/posts/recvue_billingautomation-revenuemanagement-payments-activity-7480279322621079552-4tKZ
[22] https://scryai.com/case-studies/prevented-revenue-leakage-with-contract-aware-invoice-validation-for-a-global-information-services-firm/
[23] https://www.ledgerup.ai/revenue-leakage
[24] https://www.linkedin.com/posts/recvue_how-logistics-firms-prevent-revenue-loss-activity-7436807426131124224-aGU6
[25] https://www.recvue.com/blog/revenue-leakage-the-what-the-why-and-the-how-to-stop-it/
[26] https://www.iopex.com/blog/how-ai-prevents-revenue-leakage
[27] https://www.linkedin.com/posts/charles-hall-bb981115_revenueleak-ebitda-financialintegrity-activity-7435179822349385728-bV2o
[28] https://www.recvue.com/wp-content/uploads/2018/12/Network-Provider-Case-Study.pdf
[29] https://www.uniphore.com/use-cases/back-office/revenue-leakage/
[30] https://www.recvue.com/blog/contract-to-cash/
[1] https://www.intelligentaudit.com/case-studies/from-limited-insight-and-control-to-1-9m-in-savings
[2] https://www.intelligentaudit.com/case-studies/how-a-high-volume-north-american-manufacturer-unlocked-1-9m-in-freight-savings-and-897-roi
[3] https://www.intelligentaudit.com/resources/case-studies
[4] https://www.loop.com/customer-story/mid-market-process-manufacturer-finds-6-savings-with-loop
[5] https://www.freehand.ai/case-study/intelligent-audit-replacement-ai-freight-audit-system
[6] https://www.sphereinc.com/case-studies/ai-powered-invoice-auditing-for-carrier-cost-recovery
[7] https://www.intellyse.com/case-studies
[8] https://www.loop.com/solutions/freight
[9] https://www.freehand.ai/competitors/freehand-vs-loop
[10] https://www.cozentus.com/case-study/freight-audit-automation-for-a-us-logistics-leader
[11] https://www.loop.com/capabilities/freight-and-parcel-audit
[12] https://vijan.ai/case-studies/logistics/freight-auditing
[13] https://www.intellyse.com/case-studies/air-parcel-audit-machine-manufacturer
[14] https://www.intelligentaudit.com/answer-center/5-best-freight-audit-companies-to-optimize-transportation-spend-in-2026
[15] https://aisupplychain.ca/blog/ai-freight-auditing-payments
[31] https://na.itron.com/documents/120737/669761/United+Energy+Case+Study.pdf/c76f005a-d760-0673-193d-f72e7fc59dc3?version=1.0&t=1709320908647
[32] https://go.bidgely.com/rs/492-VKN-623/images/Bidgely-Energy-Theft-Detection-Technical-Brief.pdf
[33] https://bestpractice.ai/ai-use-cases/industries/energy-utilities/case-studies
[34] https://bestpractice.ai/ai-use-cases/case-studies/energy-utilities/enel-improved-the-average-energy-recovered-per-non-technical-loss-inspection-by-70-in-italy-and-more-than-300-in-spain-using-machine-learning
[35] https://www.esi-africa.com/industry-sectors/smart-technologies/smart-grids/utility-transformation-benchmarking-revenue-intelligence/
[36] https://www.bidgely.com/resources/avista-case-study
[37] https://orbilu.uni.lu/bitstream/10993/32255/1/Introduction%20to%20Detection%20of%20Non-Technical%20Losses%20using%20Data%20Analytics.pdf
[38] https://www.scribd.com/document/726447853/Bidgely
[39] https://www.bidgely.com/theft-detection
[40] https://www.casestudies.com/company/itron
[41] https://www.bidgely.com/resources/time-of-use-disaggregation/
[42] https://link.springer.com/chapter/10.1007/978-3-031-07654-1_4?error=cookies_not_supported&code=fe247c2e-2d8f-426c-910b-f8be16ef052e
[43] https://www.linkedin.com/posts/kishondey_smartgrid-aiinenergy-powertheft-activity-7345718986510069760-CrYV
[44] https://emea.itron.com/documents/d/asset-library-120736/revenue_assurance_product_overview
[45] https://link.springer.com/article/10.1007/s10618-023-00927-7
[76] https://www.oversight.com/hubfs/assets/Case-Studies/pdf/F500-freight-T&E-PCard-Payables.pdf?hsLang=en
[77] https://www.oversight.com/blog/harnessing-artificial-intelligence-to-deliver-real-time-intelligence
[78] https://www.prgx.com/expertise-powered-by-ai/
[79] https://www.featuredcustomers.com/vendor/oversight-systems
[80] https://www.linkedin.com/pulse/from-trapped-cash-measurable-impact-prgx-uayse
[81] https://www.oversight.com/en-gb/platform
[82] https://www.linkedin.com/posts/oversight_expenseautomation-auditinnovation-spendvisibility-activity-7452014737111887872-HH2t
[83] https://www.linkedin.com/posts/oversight_financetransformation-spendvisibility-activity-7429923681331548160-WjU2
[84] https://www.appzen.com/accounts-payable
[85] https://www.oversight.com/case-studies/international-paper-case-study
[86] https://www.casestudies.com/company/prgx/case-study/uk-bank-customer-case-study
[87] https://businessmodelcanvastemplate.com/products/appzen-marketing-mix
[88] https://www.linkedin.com/posts/prgx_prgx-retail-profitrecovery-activity-7486147305730101250-4y6h
[89] https://www.prgx.com/blog/predict-prevent-profit-the-future-of-recovery-audits-with-ai-and-ml/
[90] https://www.prgx.com/case-study/ap-profit-recovery-audit-manufacturer-multiple-erp/
[61] https://pros.com/learn/case-studies/distributor-improves-pricing-and-sales/
[62] https://pros.com/learn/blog/how-pros-helped-fortune-500-distributor-optimize-pricing-seven-billion-revenue/
[63] https://pros.com/b2b/learn/blog/how-pros-helped-fortune-500-distributor-optimize-pricing-seven-billion-revenue/?utm_member_status=LinkedIn_Organic
[64] https://www.vendavo.com/solutions/margin-leakage/
[65] https://www.vendavo.com/solutions/price-optimization/
[66] https://www.casestudies.com/company/pros
[67] https://www.vendavo.com/insights/blog/seize-your-edge-why-commercial-complexity-is-the-new-competitive-advantage/
[68] https://zilliant.com/case-studies
[69] https://zilliant.com/case-studies/topic/price-optimization
[70] https://www.vendavo.com/insights/blog/?jet_blog_ajax=1&page=6
[71] https://pros.com/b2b/learn/case-studies/
[72] https://zilliant.com/blog?page=12
[73] https://pros.com/learn/case-studies-testimonials/outperform-live-ai-powered-pricing-highline-warren/
[74] https://www.linkedin.com/posts/lance-golinghorst_new-case-study-foodservice-distributor-lifts-activity-7103056440004669440-Rwcl
[75] https://www.pricingsociety.com/post/guest-blog-the-impact-of-ai-on-b2b-pricing-a-double-edged-sword
[46] http://www.bswan.org/subex_business_assurance.asp
[47] https://web.mobileum.com/case-study-fighting-roaming-fraud-with-machine-learning-and-real-time-action-system
[48] https://info.subex.com/middle-eastern-telco-grows-business-with-effective-revenue-assurance
[49] https://www.mobileum.com/products/risk-management/revenue-assurance/proactive-revenue-assurance
[50] https://vijan.ai/case-studies/telecom/revenue-assurance
[51] https://web.mobileum.com/case-study-fighting-esim-misuse-and-roaming-revenue-leakage
[52] https://www.subex.com/case-studies/
[53] https://info.subex.com/optimising-revenue-reporting-with-subex-business-assurance
[54] https://www.mobileum.com/products/risk-management/revenue-assurance/usage-assurance
[55] https://info.subex.com/african-telco-partners-with-subex-for-revenue-assurance/
[56] https://www.subex.com/case-study/
[57] https://info.subex.com/tier-1-operator-achieves-19x-roi-with-subexs-business-assurance-and-managed-services
[58] https://www.mobileum.com/products/risk-management/business-assurance/collections-assurance
[59] https://www.subex.com/solutions/business-assurance/
[60] https://www.subex.com/case-study-category/revenue-assurance/
[91] https://www.smarterdx.com/resources/case-studies
[92] https://www.smarterdx.com/solution/smartercharges
[93] https://www.smarterdx.com/resources
[94] https://www.aha.org/system/files/media/file/2025/12/Trailblazers_Guidehouse_RevenueCycle.pdf
[95] https://identimedical.com/identiplatform-2/
[96] https://www.smarterdx.com/case-studies/novant-case-study
[97] https://www.smarterdx.com/case-studies/millions-captured-what-three-health-systems-realized-from-implementing-clinical-ai
[98] https://neurexhealth.ai/solutions/charge-capture-recovery
[99] https://akasa.com/blog/what-is-healthcare-revenue-cycle-management
[100] https://aiformedical.org/use-cases/medical-coding
[101] https://www.smarterdx.com/
[102] https://www.r1rcm.com/resources/r1-charge-capture-recovers-9m-in-revenue
[103] https://startups.aws.com/learn/smarterdx-uses-ai-to-help-hospitals-capture-earned-revenue
[104] https://www.smarterdx.com/solution/smarterutilization
[105] https://healthmanagement.org/c/hospital/guest-post/10-companies-building-custom-ai-powered-healthcare-rcm-solutions-in-2026
[106] https://www.smarterdx.com/case-studies/using-clinical-ai-to-uncover-11-3m-in-annual-net-new-revenue
[107] https://www.smarterdx.com/request-a-demo
[108] https://www.smarterdx.com/solution/smartercharges
[109] https://aihealthindex.io/vendors/smarterdx
[110] https://aihealthindex.io/categories/autonomous-medical-coding
[111] https://www.mclaren.org/Uploads/Public/Documents/corporate/McLaren_2025_AR_Digital.pdf.pdf
[112] https://www.smarterdx.com/solution/smarterutilization
[113] https://www.veehealthtek.com/why-us/points-of-view/charge-capture-ai-prevent-revenue-leakage
[114] https://www.smarterdx.com/resources/case-studies
[115] https://www.smarterdx.com/
[116] https://elion.health/categories/revenue-integrity/products
[117] https://www.smarterdx.com/case-studies/millions-captured-what-three-health-systems-realized-from-implementing-clinical-ai
[118] https://www.smarterdx.com/webinars/how-lakeland-regional-turned-coding-and-cdi-review-into-a-revenue-cycle-strategy
[119] https://www.progressiverobot.com/2026/09/27/insurers-claim-ai-increasing-healthcare-costs/
[120] https://intuitionlabs.ai/software/pdfs/r1-rcm-charge-capture.pdf
[121] https://zilliant.com/case-studies
[122] https://zilliant.com/case-studies/topic/distribution
[123] https://www.vendavo.com/insights/case-studies/
[124] https://www.erpresearch.com/erp-add-ons/distribution/zilliant
[125] https://www.featuredcustomers.com/vendor/vendavo/case-studies
[126] https://ai-best-practices.com/use-cases/commerce/sell/margin-erosion-detection-and-alerting
[127] http://hanadama-pearls.com/case-studies.html
[128] https://www.linkedin.com/posts/lance-golinghorst_new-case-study-foodservice-distributor-lifts-activity-7103056440004669440-Rwcl
[129] https://www.vendavo.com/insights/?page=2
[130] https://www.casestudies.com/company/vendavo
[131] https://zilliant.com/resources
[132] https://www.vendavo.com/solutions/price-optimization/
[133] https://www.staymodern.ai/solutions/zilliant
[134] https://www.casestudies.com/company/pros
[135] https://pros.com/learn/case-studies-testimonials/outperform-live-ai-powered-pricing-highline-warren/
[136] https://zilliant.com/case-studies/topic/distribution
[137] https://zilliant.com/case-studies
[138] https://zilliant.com/case-studies?page=2
[139] https://zilliant.com/case-studies/food-distributor-b2b-ecommerce-examples-zilliant
[140] https://zilliant.com/case-studies/transgourmet-unlocks-the-revenue-driving-power-of-data
[141] https://zilliant.com/case-studies/pricing-in-building-products-distribution
[142] https://zilliant.com/case-studies/industrial-supplies-company-conquers-the-valley-of-despair-with-pricing-technology
[143] https://zilliant.com/case-studies/topic/manufacturing
[144] https://zilliant.com/case-studies/distributor-partners-with-zilliant-for-future-proof-pricing-and-sales-transformation
[145] https://zilliant.com/case-studies/global-staffing-services-company-optimizes-rate-markup-and-accelerates-time-to-quote-with-zilliant
[146] https://zilliant.com/case-studies
[147] https://zilliant.com/products/price-iq
[148] https://zilliant.com/case-studies/topic/distribution
[149] https://www.linkedin.com/posts/lance-golinghorst_new-case-study-foodservice-distributor-lifts-activity-7103056440004669440-Rwcl
[150] http://hanadama-pearls.com/case-studies.html
[151] https://ai-best-practices.com/use-cases/commerce/sell/margin-erosion-detection-and-alerting
[152] https://www.erpresearch.com/erp-add-ons/distribution/zilliant
[153] https://zilliant.com/resources
[154] https://www.staymodern.ai/solutions/zilliant
[155] https://www.cuspera.com/products/zilliant-deal-manager-x-3260/customer-story
[156] https://zilliant.com/case-studies/transgourmet-unlocks-the-revenue-driving-power-of-data
[157] https://zilliant.com/blog?page=12
[158] https://zilliant.com/blog/case-study-distributor-moves-inventory-converts-lost-quotes
[159] https://docs.zilliant.com/docs/about-price-iq
[160] https://www.sap.com/india/products/crm/partners/zilliant-incorporated-zilliant-price-iq.html

````
