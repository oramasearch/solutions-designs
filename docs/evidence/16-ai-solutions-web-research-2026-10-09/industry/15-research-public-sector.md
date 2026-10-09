# 15 — perplexity_research — public sector

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** Deep dive on production machine learning and predictive analytics in the public sector (federal, state, local government) with documented results: tax audit case selection and tax gap collection, building / restaurant / fire inspection targeting (e.g. Chicago food inspections, New York fire risk), improper payment and unemployment insurance overpayment detection, child welfare and homelessness risk screening, lead pipe service line location prediction (e.g. Flint, BlueConduit), pothole and road maintenance prioritization, 311 demand forecasting, procurement and grant fraud. For each name the agency, vendor, data, ML technique and measured outcomes (dollars recovered, hit rate improvement, cost avoided) with sources.
- **Timestamp (UTC):** 2026-10-09T20:35:00Z

````
**The strongest documented production examples are New York’s tax-collection system, federal payment-integrity systems, Allegheny County’s child-welfare screener, Los Angeles County’s homelessness-prevention program, Flint’s lead-pipe targeting, and Memphis’s pothole detection.** Their reported results are not interchangeable: some are collected dollars or completed inspections, while others are pilot comparisons, projected savings, or outcomes associated with a service program rather than the algorithm alone.

| Application / system | Agency | Vendor / partner | Data | ML technique | Measured outcomes | Sources |
|---|---|---|---|---|---|---|
| **Correspondence-audit selection: Schedule A deductions** | IRS | In-house IRS researchers; no external vendor identified | Eligible returns and prior audit outcomes for particular Schedule A issues | Supervised gradient-boosted model ranked returns for audit; tested against existing selection in operational experiments | For tax year 2014, the ML-selected group produced **$59.10 million collected**, versus **$45.84 million** for the status-quo group—**$13.26 million more**. Results were mixed: the ML group collected less in 2013 and approximately the same amount in 2015. IRS subsequently used the method for all audits in this category for tax year 2017, without a control group. | [web:121] |
| **Correspondence-audit selection: Schedule C expenses** | IRS | In-house; no external vendor identified | Eligible returns, historical filings and completed audits concerning business expenses | Two-stage support-vector-machine classification of no-change audits and regression of revenue | In operational comparisons across tax years 2013–2016, the ML group’s **no-change rate was 5–8 percentage points lower**. It generally generated *less assessed revenue*; in 2016 it collected **$15.66 million versus $14.40 million** for the status-quo group. A later gradient-boosted-model study was validation, **not** an additional realized revenue gain. | [web:121] |
| **CISS for Collections: delinquent-tax action selection** | New York State Department of Taxation and Finance, Collections and Civil Enforcement Division | IBM Research and IBM Global Business Services | Tax returns, liabilities, payment and collection-action histories, external information and legal constraints; roughly 200 modeling features | Constrained reinforcement learning/Markov decision process, segmented regression and optimization chose feasible collection actions | After its December 2009 deployment, delinquent-tax collections rose **$83 million, or 8.22%, from 2009 to 2010** with the same resources. The authors estimate **$40 million–$50 million** of first-year incremental benefit after allowing for typical growth; the full $83 million is a before/after change, not a controlled causal estimate. | [web:126] |
| **CISS: pre-refund audit selection** | New York State Department of Taxation and Finance | IBM | Returns scored nightly, including refundable credits, itemized deductions and rental losses | Predictive return scoring combined with business rules and case selection | State figures show **$431 million in denied refunds in processing year 2011**, versus **$300 million in 2009**. These are *total denied refunds under the audit operation*, not a measured incremental saving attributable solely to the model. This refund application should not be confused with CISS for Collections above. | [web:228][web:126] |
| **Food-inspection forecasting** | Chicago Department of Public Health and Department of Innovation and Technology | Allstate pro-bono team; Civic Consulting Alliance | Inspection and violation histories, establishment type and age, licenses, nearby 311 sanitation complaints and burglaries, weather and inspector information | Historical-data model scored establishments for likelihood of a critical violation; the city does not name its algorithm on the evaluation page | In a **retrospective reordering** of 1,637 inspections, the model would have found **178 of 258** establishments with critical violations in the first half of the work, versus **141 of 258** under the actual order (**69% versus 55%**), discovering them **7.5 days earlier on average**. The city subsequently put an inspection-prioritization app into regular use; the quantified comparison is the retrospective test, not a randomized field outcome. | [web:16][web:23] |
| **High-risk illegal housing-conversion inspections** | New York City Mayor’s analytics team, Department of Buildings and FDNY | City-developed; no vendor identified | Illegal-conversion complaints, FDNY records, foreclosures, tax liens and neighborhood demographics | Predictive risk ranking of complained-about properties for joint inspection | Inspectors found unsafe conditions at **70%** of targeted properties—reported by the city as **five times** typical inspection effectiveness. This is the *illegal-conversion* initiative, **not** FireCast’s measured hit rate. | [web:138] |
| **FireCast / Risk Based Inspection System** | FDNY | City-developed; no vendor identified | Historical fires and injuries; building location, use, age, structure, sprinklers, occupancy, inspection and violation records; cross-agency building databases | Fire-risk scoring based on correlations with historical fires; scores prioritize and schedule inspections | FDNY reports **42,603 risk-based inspections in fiscal 2014**, alongside **50,224 mandatory inspections**. It says the risk metrics correlated with fire outcomes, but publishes **no comparable model-attributable dollar saving or inspection hit-rate improvement** in these records. The citywide fall in fires predates deployment and should not be credited to FireCast. | [web:146][web:137] |
| **Fraud Prevention System: improper Medicare payments** | Centers for Medicare & Medicaid Services | Vendor not specified in the cited agency result | Medicare fee-for-service claims, provider billing patterns and outlier claims | Real-time predictive analytics and billing-pattern anomaly detection; individual model architectures not disclosed | CMS reported **$820 million identified or prevented over its first three years**, including **$454 million in calendar 2014** and a reported **10:1 return on investment** that year. “Identified or prevented” is CMS’s combined measure, **not $820 million cash recovered**. | [web:6] |
| **Payment-integrity and check-fraud screening** | U.S. Treasury, Bureau of the Fiscal Service, Office of Payment Integrity | No vendor identified | Federal payment transactions and Treasury checks; detailed training fields not disclosed | Risk-based transaction prioritization and ML-assisted check-fraud detection | Treasury reported **over $4 billion prevented or recovered in FY2024 across multiple processes**. Its breakdown specifically assigns **$1 billion recovered** to expedited check-fraud identification using ML; it assigns **$2.5 billion prevented** to high-risk transaction prioritization and **$500 million prevented** to expanded risk screening. The $4 billion must **not** all be attributed to ML. | [web:204] |
| **UI Data Analytics and Predictive Modeling pilot** | New York Department of Labor UI Integrity Center of Excellence; pilots in New York, Idaho and Kansas | Elder Research and NTELX | State UI claims and claimant-association networks | k-nearest neighbors, support-vector machines and random forests; combined scores and network-contagion analysis | Vendor estimates that New York could identify **about 1,200 claims annually earlier** and save **$972,000 in recoverable plus nearly $392,000 in non-recoverable overpayments per year**. **Those dollar amounts are projections**, contingent on stopping flagged payments—not documented collections. | [web:251] |
| **Allegheny Family Screening Tool** | Allegheny County, Pennsylvania, Department of Human Services | Research team led by Auckland University of Technology; county-operated tool | Linked administrative records from **21 sources**, including child welfare, publicly funded behavioral-health services and jail bookings; over 100 initial predictive factors | Initial **logistic-regression** placement and re-referral scores; a later version used **LASSO** | Deployed for hotline screening in 2016. The county reported **0.70 AUC** for the initial placement model and **0.76 AUC** for the later LASSO model. An impact evaluation found **no increase in the overall investigation rate**, but increased screening-in of higher-risk children needing intervention. A subsequent evaluation found GPS investigation probability **2 percentage points higher overall**, with lower-risk referrals less and higher-risk referrals more likely to be investigated; concurrent policy changes limit attribution. | [web:51][web:52][web:53] |
| **Homelessness Prevention Unit risk screening** | Los Angeles County Department of Health Services and Chief Information Office | UCLA California Policy Lab | Linked county health, social-service and other administrative records of people at risk of homelessness | Predictive risk model selects people for proactive outreach; specific deployed algorithm not disclosed in the cited county result | In a **nonrandomized pilot comparison** of **335 enrollees** and **1,285 eligible non-enrollees**, enrollees were **71% less likely** to enter interim housing or contact street outreach within 18 months. By July 2025 the program had served **1,498 people**, and **86%** had retained housing at program completion. These measure the **model-targeted assistance program**, not the isolated effect of the model; randomized-trial results were still pending. | [web:168][web:173] |
| **Lead-service-line location prediction** | City of Flint, Michigan | University of Michigan researchers; subsequently BlueConduit | Historical pipe records, inspections and excavations; property age, value and location; utility maintenance information | Parcel-level statistical ML predicts the probability of a lead service line and prioritizes digs | BlueConduit reports an approximately **80% excavation hit rate** while predictions guided 2016–2017 work, versus **15%** under a different contractor’s 2018 excavation approach. The Rockefeller Foundation gives a broader-project comparison of **70% versus 14%** and describes **tens of millions of dollars in avoided unnecessary digs**. These are different periods and vendor/funder cost estimates, **not a randomized cost evaluation**. | [web:62][web:64][web:107] |
| **Camera-based pothole detection and work prioritization** | Memphis Public Works | Google Cloud and SpringML, now Egen | Bus and city-vehicle video, paving and location data, property records and 311 reports | TensorFlow computer-vision object detection; geolocated findings feed work orders | The National League of Cities reports **over 800 potholes approved for action in three months**, **75% more identified than before**, and **over 100** on state roads referred to Tennessee DOT. The vendor reports pothole-detection accuracy above **96%**. Memphis’s roughly **63,000 potholes repaired in a prior year** is a citywide baseline, **not 63,000 repairs caused by the model**; suggested **$10,000–$20,000 annual claims savings** were prospective. | [web:90][web:218][web:85] |
| **Contracts and Grants Analytics Portal (CGAP)** | HHS Office of Inspector General | Excella | Integrated grants, contracts, principal-investigator, payment and single-audit findings from multiple databases | ML-supported risk and pattern detection, unusual-payment/drawdown analysis and relationship analysis; specific model architecture undisclosed | Excella reports approximately **4,000 staff-hours of document review avoided annually**. It associates portal-enabled investigations with a **$10 million settlement** and describes a separate **$16 million recovery** from advanced analytics, but supplies neither case-level verification nor a causal allocation of those amounts to CGAP alone. | [web:206][web:197] |
| **Procurement and invoice risk analytics** | New York State Office of the Comptroller | In-house; no vendor identified | Historical contracts, invoices, payment vouchers and comparable-service prices | Statistical forecasting, comparison, risk indicators and visualization; **the report does not establish that the cited interventions used ML** | Analytics supported a **$4.96 million negotiated reduction** in one proposed contract and an elevator-contract ceiling reduction with **$11.5 million in anticipated five-year savings**. Review also **stopped payment** on **137 vouchers totaling $3.4 million** that circumvented procurement rules. These are negotiated or halted amounts, **not fraud recoveries**. | [web:93] |
| **311 demand forecasting: documented evidence gap** | Chicago sanitation data were used for research; Los Angeles operated a separately documented 311 staffing intervention | University researchers for the Chicago model; no vendor identified for Los Angeles | Historical Chicago 311 sanitation requests; separately, Los Angeles call volumes, schedules, sick time, waits and abandoned calls | Researchers validated an adaptive space-time-kernel forecast on Chicago requests, but the cited study does **not document operational city deployment**. Los Angeles used operational analysis, **not documented ML forecasting**. | The Chicago research reports better forecasting than conventional approaches but **no measured municipal service or cost outcome**. Los Angeles reduced average 311 wait from **5.9 to 0.6 minutes** between February 2013 and February 2014; that result **must not be presented as an ML-forecasting benefit**. | [web:159][web:183] |

**Interpretation:** “Hit rate” means a larger share of inspected or excavated sites yielded the sought finding; it does not establish that fires, illness or lead exposure fell by the same percentage. Likewise, flagged payments, denied refunds, settlements, projected savings and money actually collected are distinct outcomes. The 311 and procurement rows make those evidence boundaries explicit rather than assigning a documented operational improvement to an undocumented ML model.

Citations:
[31] https://arxiv.org/html/2509.16294v1
[32] https://tax.thomsonreuters.com/news/ai-powered-irs-audits-are-here-but-taxpayers-have-new-relief-options-tax-pros-say/
[33] https://taxpolicycenter.org/sites/default/files/irs-tpc_conference_slides-200616-session4.pdf
[34] https://www.irs.gov/pub/irs-prior/p1500--2021.pdf
[35] https://www.oversight.gov/sites/default/files/documents/reports/2025-05/2025308022fr.pdf
[36] https://taxpolicycenter.org/sites/default/files/irs-tpc_conference_abstracts-200615.pdf
[37] https://www.linkedin.com/posts/kareemyusuf_ai-watsonx-think2025-activity-7323834334061223936-RbnM
[38] https://www.irs.gov/pub/irs-soi/12resconincoroporating.pdf
[39] https://public.dhe.ibm.com/software/data/sw-library/cognos/pdfs/whitepapers/wp_strategic_use_of_analytics_in_government.pdf
[40] https://www.govloop.com/community/blog/using-data-analytics-to-counter-fraud-new-york-state-tax-case-study/
[41] https://thehill.com/policy/finance/162549-new-york-ibm-team-up-to-stop-false-tax-refunds/
[42] https://www.irs.gov/pub/irs-pdf/p3744b.pdf
[43] https://www.govtech.com/education/IBM-Too-Much-Data-Stymies-Effective-Analysis.html
[44] https://www.nber.org/system/files/working_papers/w30777/w30777.pdf
[45] https://link.springer.com/article/10.1007/s10994-013-5424-x
[16] https://chicago.github.io/food-inspections-evaluation/
[17] https://www.cityleadership.harvard.edu/resources/saving-lives-time-and-money-using-data-to-find-unsafe-and-unhealthy-buildings-faster/
[18] https://journals.lww.com/jphmp/fulltext/2022/03000/using_integrated_city_data_and_machine_learning_to.42.aspx
[19] https://data.cityofchicago.org/Health-Human-Services/Food-Inspections/4ijn-s7e5/data
[20] https://manhattan.institute/article/how-new-york-city-can-use-artificial-intelligence-to-improve-quality-of-life
[21] https://cityleadership.harvard.edu/wp-content/uploads/2024/08/BHCLI_ActionInsights_Saving-Lives-Times-Money.pdf
[22] https://www.route-fifty.com/digital-government/2013/10/how-analytics-is-making-nycs-streets-and-buildings-safer/281525/
[23] https://www.govtech.com/data/chicago-uses-advanced-analytics-to-enhance-city-operations.html
[24] https://www.govtech.com/dc/articles/Predictive-Analytics-Optimize-Chicagos-Food-Inspection-Process.html
[25] https://github.com/kh1z3r/chicago-food-inspections
[26] https://ash.harvard.edu/wp-content/uploads/2024/02/281995_hvd_ash_paper_v4.pdf
[27] https://www.route-fifty.com/digital-government/2013/08/how-fdny-uses-analytics-to-find-potential-fire-traps/281441/?oref=rf-next-story
[28] https://www.foodprotection.org/members/fpt-archive-articles/2020-01-predictive-models-for-food-code-violations/
[29] https://www.deloitte.com/us/en/insights/industry/government-public-sector-services/automation-and-generative-ai-in-government/use-of-generative-ai-in-government-to-transform-regulatory-operations.html
[30] https://www.nyc.gov/assets/operations/downloads/pdf/pmmr2025/fdny_idf.pdf
[1] https://www.dlapiper.com/en-us/insights/publications/2023/05/how-artificial-intelligence-will-change-administrative-law-in-canada
[2] https://www.hhs.gov/about/agencies/asl/testimony/2026/03/17/cms-testimony-on-combatting-medicare-and-medicaid-fraud.html
[3] https://themarkup.org/newsletter/hello-world/the-seven-year-struggle-to-hold-an-out-of-control-algorithm-to-account
[4] https://undark.org/2020/06/01/michigan-unemployment-fraud-algorithm/
[5] https://www.cms.gov/newsroom/press-releases/cms-fraud-prevention-system-identified-or-prevented-210-million-improper-medicare-payments-2nd-year
[6] https://www.cms.gov/newsroom/press-releases/cms-cutting-edge-technology-identifies-prevents-820-million-improper-medicare-payments-first-three
[7] https://deepblue.lib.umich.edu/bitstream/handle/2027.42/195290/stpp-midas-explainer.pdf?sequence=1&isAllowed=y
[8] https://security.cms.gov/pia/fraud-prevention-system-20
[9] https://wlr.law.wisc.edu/automated-stategraft-faulty-programming-and-improper-collections-in-michigans-unemployment-insurance-program/
[10] https://www.govtech.com/data/Michigan-Integrated-Data-Automated-System-Experiences-93-Percent-Error-Rate-During-Nearly-Two-Years-of-Operation.html
[11] https://www.courthousenews.com/software-firms-sued-michigan-jobless-system/
[12] https://www.cbsnews.com/detroit/news/michigan-reverses-44000-jobless-fraud-cases-refunds-21-million/
[13] https://www.cms.gov/about-cms/components/cpi/widgets/fraud_prevention_system_2ndyear.pdf
[14] https://www.bridgemi.com/michigan-government/broken-human-toll-michigans-unemployment-fraud-saga
[15] https://www.elderresearch.com/resource/case-studies/improving-unemployment-insurance-claim-fraud-detection/
[46] https://analytics.alleghenycounty.us/category/topics/innovation-reform/
[47] https://www.hiltonfoundation.org/wp-content/uploads/2025/11/33395-Hilton-Homelessness-Prevention-At-Risk-Populations_Final_8.19.25.pdf
[48] https://statescoop.com/la-county-ai-predictive-model-reducing-homelessness/
[49] https://newsroom.ucla.edu/stories?&page=4&t=UCLA%20in%20the%20community
[50] https://cascw.umn.edu/cw360deg-spring-2025/how-child-welfare-workers-reduce-racial-disparities-algorithmic-decisions
[51] https://www.alleghenycounty.us/files/assets/county/v/1/services/dhs/documents/allegheny-family-screening-tool/faqs-from-16-acdhs-26_predictiverisk_package_050119_final-8.pdf
[52] https://analytics.alleghenycounty.us/wp-content/uploads/2024/05/23-ACDHS-19_FamilyScreeningToolUpdate_Summary.pdf
[53] https://www.alleghenycounty.us/Services/Human-Services-DHS/DHS-News-and-Events/Accomplishments-and-Innovations/Allegheny-Family-Screening-Tool
[54] https://homeless.lacounty.gov/wp-content/uploads/2023/12/FY-24-25-Draft-Proposed-Allocations-Public-Release.pdf
[55] https://file.lacounty.gov/SDSInter/lac/1184876_HomelessInitiativeQuarterlyReportNo.31.pdf
[56] https://onlinelibrary.wiley.com/doi/full/10.1002/pam.70121
[57] https://file.lacounty.gov/SDSInter/bos/bc/1195702_HousingforHealthBiannualReport.pdf
[58] https://newsroom.ucla.edu/releases/los-angeles-homeless-prevention-services-predictive-analytics
[59] https://dash.harvard.edu/server/api/core/bitstreams/29d28bdd-4107-4225-b44b-7b18f9459922/content
[60] https://onlinelibrary.wiley.com/doi/10.1002/pam.70121
[61] https://blueconduit.com/post/how-artificial-intelligence-improves-efforts-to-find-and-replace-lead-service-lines/
[62] https://blueconduit.com/post/flint-case-study/
[63] https://www.consumernotice.org/environmental/water-contamination/flint-michigan/
[64] https://www.rockefellerfoundation.org/grantee-impact-stories/the-race-to-eliminate-lead-contaminated-drinking-water/
[65] https://www.route-fifty.com/management/2019/01/artificial-intelligence-lead-flint/153911/
[66] https://blueconduit.com/post/lead-out-water-systems-nationwide-miss-crucial-deadline-to-identify-their-lead-pipes/
[67] https://www.mlive.com/news/flint/2020/06/new-map-shows-where-lead-water-pipes-remain-in-flint.html
[68] https://blueconduit.com/lsl-predictions/
[69] https://www.prnewswire.com/news-releases/omnisci-powers-new-website-enabling-public-to-view-house-by-house-information-on-flint-water-crisis-301087027.html
[70] https://www.datanami.com/2020/03/26/how-data-science-is-fighting-the-flint-water-crisis/
[71] https://www.flintregistry.org/wp-content/uploads/2021/02/Flint-Lead-Free-Report-2021v2-.pdf
[72] https://blueconduit.com/post/the-atlantic-how-machine-learning-found-flints-lead-pipes/
[73] https://blueconduit.com/the-company/
[74] https://www.flintregistry.org/wp-content/uploads/2021/02/Flint-Lead-Free-Report-2021-.pdf
[75] https://www.wateronline.com/doc/statistical-modeling-in-support-of-lead-service-line-identification-inventory-and-replacement-0001
[76] https://skylarklabs.ai/use-cases/road-maintenance.html
[77] https://www.nucamp.co/blog/coding-bootcamp-memphis-tn-government-how-ai-is-helping-government-companies-in-memphis-cut-costs-and-improve-efficiency
[78] https://www.linkedin.com/posts/rad-k_mmai-schulich-schulichschoolofbusiness-activity-7491564363825356801-EFDp
[79] https://oxmaint.com/industries/government/usage-based-maintenance-for-highways-assets-using-iot-data
[80] https://arxiv.org/html/2508.16503v1
[81] https://publicpolicy.google/resources/city-of-memphis-case-study/
[82] https://www.cbc.ca/news/canada/calgary/ai-calgary-roadwork-potholes-1.7003767
[83] https://ifactoryapp.com/industries/government/road-analytics-management-complete-municipal-guide
[84] http://eprints.umsida.ac.id/16491/
[85] https://publicsector.google/ai/data-driven-solutions-helped-memphis-find-and-fix-63-000-potholes/
[86] https://www.urbansdk.com/resources/ai-road-maintenance-minimizing-costs-disruptions-city-streets
[87] https://marketintelo.com/report/asphalt-quality-analytics-ai-market
[88] https://github.com/Rl16193/311_service_requests
[89] https://www.startlandnews.com/2017/07/smart-city-tech-enables-kcmo-predict-potholes-happen/
[90] https://www.nlc.org/article/2022/10/28/using-ai-and-machine-learning-to-proactively-address-urban-blight/
[91] https://www.sas.com/content/dam/SAS/documents/marketing-whitepapers-ebooks/sas-whitepapers/en/government-procurement-offices-107129.pdf
[92] https://www.cgi.com/us/en-us/blog/federal-government/building-resilience-against-fraud-cgis-nine-pillar-approach
[93] https://www.osc.ny.gov/files/reports/special-topics/pdf/data-analytics-2017.pdf
[94] https://www.osc.ny.gov/files/reports/pdf/enterprise-fraud-2024.pdf
[95] https://grantedai.com/grants/ai-for-disaster-response-and-recovery-federal-emergency-management-agency-fema-029d3fdf
[96] https://www.squaredcompass.com/blog/feds-using-ai-to-trim-budgets-small-businesses-must-adapt-to-data-driven-procurement
[97] https://www.diligent.com/resources/blog/invoice-fraud-detection
[98] https://www.excella.com/wp-content/uploads/2025/03/Excella-HHS-Using-AI-to-Combat-Fraud-Waste-and-Abuse.pdf
[99] https://www.adamwesterski.com/files/publications/itor2021/explainable_procurement_itor2021_preprint.pdf
[100] https://www.osc.ny.gov/state-agencies/contracts/oversight
[101] https://www.gao.gov/assets/gao-23-104382.pdf
[102] https://purchasing.ri.gov/rivip/stateagencybids/7551433.pdf
[103] https://www.oversight.gov/sites/default/files/documents/default/2026-05/CombatingFraudGrants_StateLocalGovt%20(final).pdf
[104] https://www.mckinsey.com/industries/public-sector/our-insights/procurement-efficiency-a-modern-strategy-for-state-and-local-leaders
[105] https://www.alteryx.com/solutions/industry/public-sector/government-efficiency
[136] https://www.deloitte.com/us/en/insights/industry/government-public-sector-services/breaking-trade-offs-innovation-in-government-services.html
[137] https://www.nyc.gov/office-of-the-mayor/news/163-13/mayor-bloomberg-fire-commissioner-cassano-new-risk-based-fire-inspections-citywide
[138] https://www.nyc.gov/office-of-the-mayor/news/337-12/mayor-bloomberg-chief-policy-advisor-feinblatt-michael-p-flowers-director-of
[139] https://www.cio.com/article/286563/big-data-how-big-data-save-lives-in-new-york-city.html
[140] https://www.oreilly.com/content/predictive-data-analytics-big-data-nyc/
[141] https://www.nyc.gov/assets/operations/downloads/pdf/mmr2019/fdny.pdf
[142] https://ccnmtl.columbia.edu/projects/caseconsortium/casestudies/127/casestudy/www/layout/case_id_127_id_887.html
[143] https://www.oliverhaimson.com/PDFs/MadaioIdentifyingPrioritizingFireInspections.pdf
[144] https://www.nyc.gov/html/ops/downloads/pdf/mmr2013/fdny.pdf
[145] https://www.osc.ny.gov/files/reports/osdc/pdf/gss-for-dob-june-26-approved.pdf
[146] https://www.nyc.gov/html/ops/downloads/pdf/mmr2014/fdny.pdf
[147] https://www.sipa.columbia.edu/sites/default/files/2023-01/Case_Big%20Data%20for%20Public%20Safety.pdf
[148] https://coteincendie.ca/assets/img/FUS_Building_Fire_Risk_Validation_Project.pdf
[149] https://council.nyc.gov/budget/wp-content/uploads/sites/54/2022/03/FDNY.pdf
[150] https://comptroller.nyc.gov/reports/audit-of-the-new-york-city-department-of-buildings-enforcement-of-building-codes/
[121] https://www.irs.gov/pub/irs-prior/p1500--2021.pdf
[122] https://www.tigta.gov/sites/default/files/reports/2025-08/2025308022fr.pdf
[123] https://www.tigta.gov/sites/default/files/reports/2025-08/202530802fr.pdf
[124] https://www.oversight.gov/sites/default/files/documents/reports/2025-06/TIGTA%20Semiannual%20Report%20to%20Congress_SPRING%202025_508.pdf
[125] https://www.oversight.gov/sites/default/files/documents/reports/2025-02/annualauditplanfy2025R.pdf
[126] https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=ddb1fab21ebf37b1eb71c90844ec273d38ebf1bc
[127] https://www.tigta.gov/sites/default/files/reports/2025-08/2025ier003fr_3.pdf
[128] https://www.oversight.gov/sites/default/files/documents/reports/2026-05/Semiannual%20Report%20to%20Congress_TIGTA_Spring%202026_508.pdf
[129] https://www.irs.gov/statistics/soi-tax-stats-2021-irs-tpc-research-conference
[130] https://thehill.com/policy/finance/162549-new-york-ibm-team-up-to-stop-false-tax-refunds/
[131] https://journals.ezenwaohaetorc.org/index.php/NAU-JLCLE/article/download/3830/3945
[132] https://www.irs.gov/pub/irs-pdf/p5456.pdf
[133] https://www.irs.gov/pub/irs-access/p3744a_accessible.pdf
[134] https://www.irs.gov/pub/irs-prior/p1500--2023.pdf
[135] https://www.congress.gov/118/meeting/house/117423/documents/HHRG-118-GO24-20240613-SD004.pdf
[151] https://www.boston.gov/sites/default/files/embed/v/vol_1_06_-_data_analytics.pdf
[152] https://www.nyc.gov/assets/globalpartners/downloads/pdf/NYC_Technology_311.pdf
[153] https://www.calgary.ca/content/dam/www/ca/city-manager/documents/2023-2026-service-plans/updates/citizen-information-services.pdf
[154] https://www.sphereinc.com/solution/aws-smart-city-platform
[155] https://regisportfolio.com/profiles/kjavvaji/kjavvaji_practicum1_report.pdf
[156] https://www.calgary.ca/content/dam/www/ca/city-manager/documents/2023-2026-service-plans/citizen-information-services-service-plan.pdf
[157] https://eil.mie.utoronto.ca/wp-content/uploads/2015/06/311-Toronto-Analysis-2may2017.pdf
[158] https://www.boston.gov/departments/analytics-team/cityscore
[159] https://experts.illinois.edu/en/publications/predicting-demand-for-311-non-emergency-municipal-services-an-ada/
[160] https://www.civicplus.com/case-studies/crm/tamarac-reduces-wait-times-by-40-saves-30-staff-time-and-increases-satisfaction-by-20/
[161] https://www.citygov.com/article/heatmaps-hearings-and-honesty-building-public-trust-with-data-informed-leadership
[162] https://www.creatio.com/page/customer-success/city-of-boston
[163] https://www.govtech.com/artificial-intelligence/boston-311-services-shaped-by-adaptable-ai-powered-platform
[164] https://publications.iadb.org/publications/english/document/Innovations-in-Public-Service-Delivery-Issue-No-01-Can-311-Call-Centers-Improve-Service-Delivery-Lessons-from-New-York-and-Chicago.pdf
[165] https://www.cityofboston.gov/images_documents/03%20Civic%20Engagement_tcm3-53295.pdf
[106] https://blueconduit.com/post/flint-case-study/
[107] https://www.rockefellerfoundation.org/grantee-impact-stories/the-race-to-eliminate-lead-contaminated-drinking-water/
[108] https://michiganross.umich.edu/news/episode-401-blueconduit-and-flint-water-project
[109] https://blueconduit.com/post/how-artificial-intelligence-improves-efforts-to-find-and-replace-lead-service-lines/
[110] https://blueconduit.com/post/the-atlantic-how-machine-learning-found-flints-lead-pipes/
[111] https://arxiv.org/html/1610.00580v1
[112] https://blueconduit.com/post/blueconduit-statement-for-u-s-house-of-representatives-committee-on-science-space-and-technology/
[113] https://static1.squarespace.com/static/6169b39ae0caf173106fc5cd/t/6270027a1a4b767cace242a4/1651507835485/CNT_Community+Playbook-Inventories+Using+Predictive+Analytics_Final-2.pdf
[114] https://kresge.org/news-views/kresge-supports-innovative-approach-to-finding-lead-in-detroit-water-lines/
[115] https://ar5iv.labs.arxiv.org/html/1707.01591
[116] https://pmc.ncbi.nlm.nih.gov/articles/PMC11160116/
[117] https://www.prnewswire.com/news-releases/omnisci-powers-new-website-enabling-public-to-view-house-by-house-information-on-flint-water-crisis-301087027.html
[118] https://smartwatermagazine.com/news/blueconduit/our-platform-brings-data-management-regulatory-compliance-decision-support-our
[119] https://dep.nj.gov/wp-content/uploads/dsr/lsl-predictive-modeling-rationale.pdf
[120] https://blueconduit.com/post/flint-service-line-map-powered-by-blueconduit-highlights-progress-and-remaining-work/
[166] https://file.lacounty.gov/SDSInter/dhs/1197686_BiAnnual2025-final.pdf
[167] https://socialprotectionai.org/use-case/USA-001
[168] https://lacounty.gov/2025/07/10/new-report-early-signs-of-success-from-la-countys-homelessness-prevention-pilot/
[169] https://capolicylab.org/wp-content/uploads/2025/07/HPU-Early-Outcomes-Report.pdf
[170] https://file.lacounty.gov/SDSInter/bos/bc/1195702_HousingforHealthBiannualReport.pdf
[171] https://www.hiltonfoundation.org/news/advancing-homelessness-prevention-through-research-and-policy-a-conversation-with-janey-rountree-of-the-california-policy-lab/
[172] https://newsroom.ucla.edu/stories/homeless-prevention-unit-helps-keep-people-off-streets-california-policy-lab-at-ucla
[173] https://capolicylab.org/early-outcomes-from-the-los-angeles-county-homelessness-prevention-unit/
[174] https://file.lacounty.gov/SDSInter/bos/supdocs/209283.pdf
[175] https://calmatters.org/housing/homelessness/2026/03/homelessness-prevention-pilot/
[176] https://homeless.lacounty.gov/homelessness-prevention-unit/
[177] https://www.hiltonfoundation.org/wp-content/uploads/2025/11/33395-Hilton-Homelessness-Prevention-At-Risk-Populations_Final_8.19.25.pdf
[178] https://capolicylab.org/the-homelessness-prevention-unit-a-proactive-approach-to-preventing-homelessness-in-los-angeles-county/
[179] https://newsroom.ucla.edu/stories?&page=4&t=UCLA%20in%20the%20community
[180] https://file.lacounty.gov/SDSInter/bos/supdocs/199856.pdf
[196] https://www.excella.com/wp-content/uploads/2025/03/Excella-HHS-Using-AI-to-Combat-Fraud-Waste-and-Abuse.pdf
[197] https://www.excella.com/resource/ai-to-combat-fraud-hhs
[198] https://files.gao.gov/reports/GAO-25-108172/index.html
[199] https://www.excella.com/news/excella-awarded-9-8m-contract-to-support-hhs-oig
[200] https://www.excella.com/news/excella-awarded-contract-to-expand-support-for-hhs-oig
[201] https://www.linkedin.com/posts/excella-consulting_combating-fraud-waste-and-abuse-using-ai-activity-7452045707357835265-HltM
[202] https://fedgovtoday.com/guests/11.7-billion-saved-how-treasurys-ai-driven-do-not-pay-system-is-crushing-fraud
[203] https://www.linkedin.com/posts/excella-consulting_combating-fraud-waste-and-abuse-using-ai-activity-7439362130878861313-03Ob
[204] https://home.treasury.gov/news/press-releases/jy2650
[205] https://oig.hhs.gov/documents/sar/11794/Spring_2026_SAR.pdf
[206] https://www.excella.com/insights/the-new-playbook-for-fraud-prevention-building-a-strong-foundation
[207] https://www.linkedin.com/pulse/fraud-fragmentation-federal-fragility-swathi-young-fzqke
[208] https://www.hhs.gov/sites/default/files/fy-2027-oig-cj.pdf
[209] https://files.gao.gov/reports/GAO-25-108412/index.html
[210] https://www.linkedin.com/posts/excella-consulting_combating-fraud-waste-and-abuse-using-ai-activity-7425244104566939649-6Rn9
[181] https://arxiv.org/html/2508.16503v1
[182] https://www.chicago.gov/content/dam/city/sites/oerj/cohort-1-reaps/DSS_REAP_2023.pdf
[183] https://www.nlc.org/wp-content/uploads/2016/10/CSAR-Performance-Management-Report-2014.pdf
[184] https://www.calgary.ca/content/dam/www/ca/city-manager/documents/2023-2026-service-plans/updates/citizen-information-services.pdf
[185] https://www.jetir.org/papers/JETIR2605125.pdf
[186] https://publicsector.google/ai/data-driven-solutions-helped-memphis-find-and-fix-63-000-potholes/
[187] https://experts.illinois.edu/en/publications/predicting-demand-for-311-non-emergency-municipal-services-an-ada/
[188] https://onlinelibrary.wiley.com/doi/10.1111/grow.12578
[189] https://illinoisanswers.org/2024/10/22/chicago-tree-trim-strategy-produces-big-results-despite-complaints/
[190] https://media.neliti.com/media/publications/731977-applying-predictive-analytics-to-optimiz-afa34ba0.pdf
[191] https://www.chicago.gov/content/dam/city/depts/obm/supp_info/2025Budget/2025BudgetOpeningStatements/2025%20Department%20Hearing%20Opening%20Statement%20DSS%20-%20Final.pdf
[192] https://par.nsf.gov/servlets/purl/10538460
[193] https://www.arxiv.org/pdf/2502.08649
[194] https://blogs.sas.com/content/statelocalgov/2012/01/24/analysis-of-311-call-data-can-lead-to-better-service-lower-costs/
[195] https://icma.org/sites/default/files/3592_.pdf
[211] https://www.indystar.com/story/opinion/columnists/jacob-stewart/2026/03/24/indianapolis-potholes-ai-detection-memphis-accountability/89288696007/
[212] https://publicsector.google/ai/data-driven-solutions-helped-memphis-find-and-fix-63-000-potholes/
[213] https://statescoop.com/memphis-ai-video-tech-equipped-city-trucks-fix-infrastructure-issues/
[214] https://www.linkedin.com/posts/saleem-janmohamed_creating-intelligent-infrastructure-solutions-activity-7223807762843975681-SNlA
[215] https://www.nucamp.co/blog/coding-bootcamp-memphis-tn-government-how-ai-is-helping-government-companies-in-memphis-cut-costs-and-improve-efficiency
[216] https://egen.ai/insights/egen-recognized-as-a-2026-google-public-sector-partner-expertise-badge-awardee/
[217] https://egen.ai/industries/public-sector/
[218] https://egen.ai/client-stories/city-of-memphis-detecting-potholes-for-better-driving-experiences/
[219] https://egen.ai/customer-stories/city-of-memphis-detecting-potholes-for-better-driving-experiences/
[220] https://www.nlc.org/article/2022/10/28/using-ai-and-machine-learning-to-proactively-address-urban-blight/
[221] https://www.designlogic.com.au/egen
[222] https://www.willkie.com/news/2024/10/willkie-advises-egen-on-acquisition-of-qarik
[223] https://www.cbinsights.com/company/springml
[224] https://cloud.google.com/blog/topics/public-sector/four-ways-states-use-digital-tools-deliver-critical-services
[225] https://thehill.com/policy/finance/162549-new-york-ibm-team-up-to-stop-false-tax-refunds/
[226] http://web.stanford.edu/class/ee380/Abstracts/110928-slides.pdf
[227] https://www.govloop.com/community/blog/using-data-analytics-to-counter-fraud-new-york-state-tax-case-study/
[228] https://www.tax.ny.gov/help/outreach/fall_2012_tax_update.pdf
[229] https://www.grantthornton.com/insights/alerts/tax/2024/salt/k-o/ny-affirms-foreign-affiliate-royalties-payment-requirement-06-14
[230] https://oversight.house.gov/wp-content/uploads/2012/01/Cammer_Testimony_TnT_Bio_2011_0217.pdf
[231] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/Edelman-Fact-Sheet-NYS-Dept-Taxation
[232] https://www.reuters.com/article/usa-tax-newyork-crackdown/new-york-state-tax-department-attacks-fraud-on-new-front-idINL2E8JQ00320120906/
[233] https://www.slideshare.net/slideshow/the-power-of-analytics-for-public-sector-gbe03392-usen-02/7319133?nway-=,
[234] https://www.budget.ny.gov/pubs/archive/fy1011archive/eBudget1011/economicRevenueOutlook/economicRevenueOutlook.pdf
[235] https://www.supremecourt.gov/DocketPDF/24/24-332/326346/20240919131511034_IBM%20v.%20%20NY%20Cert%20Petition.pdf
[236] https://www.nyc.gov/assets/omb/downloads/pdf/tax/methodology_2012_04.pdf
[237] https://www.budget.ny.gov/pubs/archive/fy20/exec/agencies/appropData/TaxationandFinanceDepartmentof.html
[238] https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=ddb1fab21ebf37b1eb71c90844ec273d38ebf1bc
[239] https://www.nyc.gov/assets/omb/downloads/pdf/methodology_2012_04.pdf
[240] https://www.gao.gov/products/gao-24-107471
[241] https://thefga.org/research/a-dozen-states-enact-bipartisan-program-integrity-laws-to-protect-unemployment-insurance-programs/
[242] https://rga.lis.virginia.gov/Published/2025/RD123/PDF
[243] https://thefga.org/wp-content/uploads/2023/03/Memo_DozenStatesEnactUI-ProgramIntegrity.pdf
[244] https://rga.lis.virginia.gov/Published/2025/RD901/PDF
[245] https://urbanmilwaukee.com/pressrelease/dwd-releases-new-report-highlighting-advances-in-efforts-to-combat-ui-fraud/
[246] https://archive.legmt.gov/content/Committees/Interim/2023-2024/Economic-Affairs/Reports/2024-09-09_UI_Program_Integrity_Act_Report.pdf
[247] https://files.gao.gov/reports/GAO-25-108172/index.html
[248] https://www.gao.gov/assets/gao-24-107471.pdf
[249] https://www.route-fifty.com/finance/2024/07/unemployment-insurance-fraud-during-pandemic-cost-states-135band-counting/398329/
[250] https://dhr.idaho.gov/wp-content/uploads/2022/12/SQSP-Integrity-Action-Plan-IAP-for-FY-2023-FINAL-PDF.pdf
[251] https://www.elderresearch.com/wp-content/uploads/2020/11/Elder-Research-Case-Study-Improving-Unemployment-Insurance-Claim-Fraud-Detection_NY-DOL_2020.pdf
[252] https://wdc.idaho.gov/wp-content/uploads/2022/09/Unemployment-Insurance-Program.pdf
[253] https://www.labor.idaho.gov/wp-content/uploads/publications//SFY_2023-2026_Labor_Strategic_Plan.pdf
[254] https://citizenspotal.ai/articles/6344215/Idaho-Department-of-Labor-outlines-UI-rules-fraud-recovery-and-workforce-services
````
