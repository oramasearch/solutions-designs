# 06 — perplexity_research — freight brokerage, trucking, parcel

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** Deep dive on production machine learning in freight brokerage, trucking and parcel/courier operations. Cover: (1) freight brokerage spot-rate and load pricing prediction (e.g. Greenscreens.ai, DAT, Uber Freight, C.H. Robinson), (2) carrier-load matching and automated tendering, (3) shipment ETA prediction, (4) dock appointment / yard scheduling, (5) parcel delivery failed-delivery and address-quality prediction, (6) load consolidation and empty-mile reduction, (7) driver turnover prediction. For each, name deployments, the data, the technique, and measured business results (margin, cost per load, on-time %, savings) with sources.
- **Timestamp (UTC):** 2026-10-09T20:22:00Z

````
**Production evidence is strongest for freight pricing, load matching, ETA prediction, and driver retention.** Dock scheduling and parcel delivery also have measured deployments, but some published results measure booking automation or address-related defects—not reductions in truck wait time or failed first attempts. The figures below retain those distinctions.

| Use case | Deployment | Data | Technique | Measured business results |
|---|---|---|---|---|
| Spot-rate and load pricing | **Greenscreens.ai at Southland Transportation** | Southland’s booking rates and quotes, its TMS load history, current market data, and consortium rates. | Brokerage-specific ML predicts buy rates and guides sell prices; Southland compared predictions with historical quotes and used them to identify lanes. | Load count at the initial rollout office rose **21% in its first month**. The case study does not quantify margin lift or isolate the effect of pricing from other changes. [web:108][web:20] |
| Spot-rate and load pricing | **Greenscreens.ai and Tai Software at GLS US** | Brokerage pricing history and current market data, integrated into the TMS. | ML-based rate guidance replaces manual consultation of multiple sources. | GLS reduced its customer-quoting process from **seven steps to one**. It reports better wins and margins but publishes no percentage or dollar lift; the TMS changed alongside the pricing tool. [web:109][web:113] |
| Spot-rate and load pricing | **DAT iQ Ratecast** | Historical spot and contract transactions across lanes, shipment types and industries, plus lane-level supply-and-demand conditions. | Continuously updated ML rate forecasts, validated against subsequent market rates using a median absolute percentage-error measure. | DAT reports **more than 95% forecasting accuracy across over 7 million daily predictions**. That is a *rate-forecast* claim, not a measured broker-margin or shipper-savings result; DAT does not publish a quantified business saving in the cited explanation. [web:18][web:197] |
| Spot-rate and load pricing | **Uber Freight carrier upfront pricing** | Historical load costs and booking outcomes; pickup and delivery locations, distance, timing, lead time, and market conditions. | A sequential pricing **Markov decision process**, subsequently revised with ML-based estimates of the cost of similar loads; prices adjust as pickup approaches. | An A/B test and switchback experiment found a **statistically significant reduction in total cost to cover loads**, without a published dollar or percentage effect. The earlier framework priced **tens of thousands of loads daily**. [web:212][web:39] |
| Spot-rate and load pricing | **C.H. Robinson dynamic pricing and quoting agent** | Proprietary shipment and market data, plus emailed quote requests. | Dynamic pricing/cost discovery coupled to an AI agent that extracts requests and returns customer-specific quotes. | The agent had produced **more than 1 million quotes**, at about **32 seconds per quote**, by June 2025. Robinson reported **700 basis points** of year-over-year adjusted operating-margin expansion in Q1 2025 and said AI-assisted pricing contributed to gross-margin improvement; that company-wide margin change is **not an isolated pricing-model effect**. [web:133][web:130] |
| Carrier–load matching and automated tendering | **Uber Freight load recommendations** | Saved and clicked loads, previous bookings, carrier preferences and home-location proxy, load characteristics, route distance, and pickup lead time. | Candidate generation followed by an **XGBoost booking-probability ranker**. | A user-level A/B test found **12% more bookings among active users**, **3% more bookings overall**, and **5% more clicks overall**. These measure recommendation performance, not tender-acceptance lift. [web:210] |
| Carrier–load matching and automated tendering | **C.H. Robinson Navisphere Carrier load matching** | Nearly **1.2 million daily carrier searches**, real-time truck posts, prior booking patterns, preferred routes, equipment, and origins/destinations. | AI/data-science recommendations send individual matching loads by text or email as they become available. | Robinson reports carriers booked loads **four times faster** than through traditional methods and booked **40% of their Robinson loads** through the enhanced engine. No per-load cost saving is given. [web:36] |
| Carrier–load matching and automated tendering | **Uber Freight Market Access** | Shipper-tendered loads, marketplace carrier capacity and rates, lane knowledge, and shipper price guardrails. | AI-powered marketplace pricing and automated sourcing/execution, with the carrier’s realized cost plus an agreed fee passed to the shipper. | An unnamed high-volume customer reported **high-single-digit percentage savings** on low-volume lanes; another reported about **$50 in operational savings per load** from removing manual procurement. These are customer-reported outcomes, not a controlled matching-model test. [web:217] |
| Carrier–load matching and automated tendering | **McLeod PowerBroker TopMatch and Waterfall Tendering** | Historical carrier lane rates and work, equipment availability near pickup, and broker-configured matching weights. | Scores and ranks carriers, then feeds that ranking to automated sequential tender offers; McLeod describes ML in TopMatch. | **No measured acceptance, coverage-time, or cost result is published** in McLeod’s deployment description. It is evidence of an implemented workflow, not of quantified lift. [web:44] |
| Shipment ETA prediction | **project44 FTL ETA engine** | ELD, carrier EDI/API and driver-app positions; more than **150 features** including traffic, weather, lane, dwell, rest, driver and facility behavior. | Production ensemble of regressors, classifiers, transformers and residual-error correction; predictions update when new tracking events arrive. | Across a deployment serving **500-plus FTL shippers**, project44 reports a **28-percentage-point accuracy improvement** at a **10-hour prediction horizon**, judged within **±2 hours**. It does not translate that result into a network-wide on-time-delivery percentage. [web:3] |
| Shipment ETA prediction | **FourKites Dynamic ETA at a large food-and-grocery wholesaler** | More than **150 load-level inputs**, including shipper, carrier, lane, rest patterns, traffic and weather. | Continuously learning, combined ETA data models. | The unnamed customer, handling over **30,000 weekly deliveries**, achieved **91% of arrivals predicted within a one-hour window**. FourKites’ cited roughly 45% figure concerns traditional *day-of* tools and is not a like-for-like one-hour-window control. [web:1] |
| Shipment ETA prediction | **FedEx predictive visibility in Micron Technology’s control tower** | FedEx network systems, scans and sensors, integrated with Micron’s shipment visibility. | FedEx Surround and related visibility tools combine AI/ML prediction with alerts and intervention on at-risk shipments. | FedEx reports **44% improvement in estimated delivery dates**, **27% improvement in recovery of at-risk on-time shipments**, and **16% shorter overall transit time** for Micron. Results reflect the combined visibility-and-intervention deployment, not ETA modeling alone. [web:149] |
| Dock appointment and yard scheduling | **FourKites “Alan” at United States Cold Storage** | Live shipment status and ETAs, retailer-specific appointment requirements, email, web portals and phone workflows. | Contextual AI agent books appointments and can reschedule against live ETAs and disruptions. | In an **eight-week, 600-plus-shipment pilot**, it successfully booked **87%** of appointments; **96%** of booked appointments obtained the requested delivery date. FourKites estimates **36–40 staff hours saved**. These are pilot booking results, not a measured dwell-time reduction. [web:280] |
| Dock appointment and yard scheduling | **FourKites Appointment Manager at Kimberly-Clark** | Appointments across **16** distribution centers and plants, carrier communications and delivery schedules. | Digital appointment scheduling within a platform that supports predictive ETAs; the case study **does not establish that ML selected Kimberly-Clark’s appointment slots**. | Approximately **1,200 appointments per month**; **300 emails eliminated** and **480 minutes saved per day**. Live-unload on-time delivery reportedly improved **10%**. [web:168] |
| Dock appointment and yard scheduling | **project44 Yard Management at Georgia-Pacific** | Gate check-ins and yard activity integrated with warehouse and enterprise systems. | Self-service kiosks and automated check-in; the customer case **does not attribute these yard results to an ML scheduling model**. | Driver wait to enter the facility fell from **10 minutes to under two minutes**; the broader deployment reports **80% less manual work**. This is a useful automation comparator, not proof of predictive-ML lift. [web:166] |
| Parcel failed-delivery prediction | **Singapore delivery-company randomized field deployment** | Shipment- and driver-level delivery outcomes used to estimate the probability an attempted home delivery will fail; detailed model fields are not disclosed in the accessible study abstract. | Delivery-attempt probability predictor embedded in a **two-stage route-sequencing algorithm**; packages and drivers were randomized against the company’s existing algorithm. | The algorithm reduced the **share of failed attempts by 10% on average** and delivery cost by **$13 per route**. The abstract does not specify whether 10% is relative or percentage-point change. [web:184] |
| Parcel address-quality prediction | **Amazon customer-address matching and delivery-point geocoding** | Free-form addresses, parsed building/street components, historical delivery locations, spatial grids and successful deliveries. | Weakly supervised **BERT address-pair matching**, followed by aggregation of matched historical geocodes for difficult new addresses. | A live A/B rollout in Egypt and Saudi Arabia improved **delivery precision 8.09%** and reduced **delivery defects 11.78%** versus the baseline. These are address/geocode-related defects, **not a published first-attempt failure rate**. [web:141] |
| Parcel address-risk prediction | **UPS Capital DeliveryDefense at SunJoy** | Address geography, parcel delivery and claims history, and reports of package theft. | ML **address-confidence score** informs interventions such as redirecting a shipment or requiring an adult signature. | SunJoy reported **35% fewer losses** after acting on high-risk alerts. The outcome concerns **package loss/theft risk**, not unsuccessful first-attempt delivery; it should not be counted as a failed-delivery reduction. [web:93][web:99] |
| Load consolidation and empty-mile reduction | **Uber Freight load-and-reload bundles** | Dispatch and pickup events, app GPS pings, load routes, trip miles, carrier costs and bundle history. | Algorithmic load bundling; a regression analysis estimates the relationship between bundles and empty miles while controlling for trip and lane factors. | Estimated empty-mile share on its brokerage fell from **25% in 2023 to 22% in 2024**, equivalent to an estimated **4 million fewer empty miles**. In the regression, a bundled load was associated with **11.4 fewer empty miles per load**; that association is not a randomized causal estimate. [web:82] |
| Load consolidation and empty-mile reduction | **C.H. Robinson Navisphere Optimizer at a consumer-products company** | Supplier orders, shipment dates, historical shipping patterns, rates, routes, carriers and customer business constraints. | ML/data-science-assisted, constrained optimization of order aggregation, shipping date, mode and multi-stop routes. | The company **saved 10.2% on inbound shipment costs**. A further **5.5%** was identified as *expected*, not already achieved. Robinson separately cites **8% average** Optimizer savings across customers without publishing a comparable customer-level methodology. [web:227] |
| Load consolidation and empty-mile reduction | **Convoy Automated Reloads — historical deployment** | Available headhauls, backhauls, carrier routes and pickup/drop-off timing. | ML-assisted, real-time grouping of shipments into multi-load jobs. | Convoy reported **19% empty miles on bundled work**, versus its cited **35% industry reference**, and **45% lower associated carbon emissions**. These are historical Convoy claims: the original brokerage ceased operations in **2023**, and its technology was subsequently transferred; they are not a current result for the original company. [web:84][web:240] |
| Driver turnover prediction | **Omnitracs Analytics at Super Service** | Fleet historical operating and driver-behavior records associated with voluntary departures; the public case does not list individual feature columns. | Predictive risk ranking followed by targeted manager coaching, initially for the highest-risk **10%** of drivers. | Across a **950-truck fleet**, the reported annualized turnover rate in that high-risk group fell from **203% to 66%** over six months; Omnitracs estimated **20 drivers retained per month** and **more than $60,000 saved**. This combines prediction *and* coaching. [web:151] |
| Driver turnover prediction | **Omnitracs Analytics at Pride Transport** | Historical fleet and driver-behavior records associated with voluntary termination. | Turnover-risk model with recommended coaching actions, deployed across the fleet. | After six months, Pride reported turnover reduced **to 85%** and **714% ROI**. Its starting turnover rate is not specified in the cited report, so the absolute reduction cannot be calculated. [web:152] |
| Driver turnover prediction | **Trimble predictive driver-retention model** | Driver tenure, loaded and empty miles, load type, equipment, region, pay, and mobility/enterprise records. | ML risk scores over a **seven-day horizon**, connected to suggested dispatch, payroll or manager actions. | Trimble reports **90–95% accuracy** in identifying at-risk drivers, but publishes **no fleet-level retention saving** or precision/recall and class-balance details for that claim. It is a prediction-performance result, not a demonstrated turnover reduction. [web:51] |

**Evidence boundary:** Vendor-reported before/after figures can reflect operational changes alongside ML. The clearest controlled outcomes here are Uber Freight’s matching A/B test and the Singapore parcel-routing field experiment; projected savings, forecast accuracy and company-wide margins should not be read as model-attributable profit. [web:210][web:184][web:227][web:130]

Citations:
[16] https://www.dat.com/resources/historical-rate-trends-analysis
[17] https://www.mcleodsoftware.com/assets/pdfs/Sunset_DAT_CaseStudy_202502_Email.pdf
[18] https://www.dat.com/resources/wp-content/uploads/resource-assets/product-sheet/General-Shipper-Ratecast-Product-Sheet.pdf
[19] https://www.dat.com/solutions/supply-chain-planning
[20] https://www.greenscreens.ai/greenscreens-core
[21] https://www.dat.com/resources/freight-broker-software-solutions
[22] https://www.dat.com/rateview/tab-dat-trendlines
[23] https://www.dat.com/solutions/supply-chain-transportation
[24] https://ultraship.ai/blogs/best-freight-analytics-tools
[25] https://support.cargochief.com/knowledge/greenscreens-integration
[26] https://www.dat.com/blog/4-keys-to-freight-rate-forecasting-with-artificial-intelligence
[27] https://www.inboxpilot.co/blog/ai-for-freight-brokers
[28] https://www.linkedin.com/posts/aziz-satarov-06b80357_supplychain-logistics-freighttech-activity-7474881182841823232--vsE
[29] https://www.linkedin.com/posts/cckennedy_dat-freight-analytics-forecasts-rates-and-activity-7434941963956723712-bzaB
[30] https://drive.kenmei.app/us/industries/transportation-logistics/reports/top-us-3pls-and-freight-platforms-competing-amid-m-a-wave-and-digital-transforma-competitive-benchmark-april-2026
[31] https://www.chrobinson.com/en-us/navisphere/
[32] https://www.chrobinson.com/en-us/resources/blog/ai-tools-for-carriers-in-the-freight-recession/
[33] https://inferensys.com/integration/transportation-management-platforms/ai-integration-for-ch-robinson-tms-navisphere
[34] https://rolefate.com/occupation/freight-broker?lang=en
[35] https://www.chrobinson.com/en-gb/technology/shipper-technology/navisphere/
[36] https://www.chrobinson.com/en-us/about-us/newsroom/press-releases/2024/load-matching-for-carriers/
[37] https://www.linkedin.com/pulse/how-ch-robinson-grew-margins-using-ai-agents-answer-more-gordhandas-gcjsc
[38] https://www.osforyour.business/freight-brokerage/how-to-integrate-ai-with-your-existing-freight-brokerage-tech-stack
[39] https://www.uber.com/us/en/blog/freight-markov/
[40] https://scg-lm.s3.amazonaws.com/pdfs/convoy_5_fundamentals_supply_chain_resilience_072120b.pdf
[41] https://www.freightwaves.com/news/c-h-robinson-deploys-a-suite-of-ai-agents-into-navisphere
[42] https://marketintelo.com/report/ai-powered-freight-brokerage-with-large-language-models-market
[43] https://www.tommasomariaricci.com/blog/ai-for-freight-brokers
[44] https://www.mcleodsoftware.com/why-mcleod/resources/press-releases/mcleod-software-introduces-new-topmatch-technology-for-brokers-at-2019-tia-annual-convention/
[45] https://www.truckingdive.com/news/ch-robinson-to-buy-rxo-for-58b-combining-3pl-heavyweights/832137/
[1] https://www.fourkites.ai/press/fourkites-fine-tunes-predictions-for-shipment-arrivals-2
[2] https://www.fourkites.ai/blogs/data-science-breakthrough-in-air-freight-tracking
[3] https://www.project44.com/blog/eta-reimagined-transforming-project-44s-prediction-engine/
[4] https://www.fourkites.ai/blogs/ushering-in-a-new-era-in-ltl-freight-visibility-and-management
[5] https://inferensys.com/differences/logistics-and-supply-chain-visibility-ai/multi-modal-route-optimization-ai/project44-vs-fourkites
[6] https://www.getapp.com.au/software/2067549/uber-freight
[7] https://www.linkedin.com/posts/project-44_getting-etas-right-isnt-just-about-when-activity-7379628777498349568-gDQf
[8] https://www.uberfreight.com/en-US/blog/estimating-shipment-arrival-ai
[9] https://www.fourkites.com/blogs/revolutionizing-the-status-quo/
[10] https://www.tradlinx.com/resources/product-comparison/an-in-depth-comparison-tradlinx-vs-project44
[11] https://www.project44.com/blog/5-ways-machine-learning-makes-visibility-more-valuable/
[12] https://ar5iv.labs.arxiv.org/html/2206.02127
[13] https://marketintelo.com/report/dynamic-eta-prediction-platform-market
[14] https://www.project44.com/resources/accurate-dependable-etas/
[15] https://finance.yahoo.com/news/value-does-lsp-p44-135118052.html
[61] https://www.fourkites.ai/digital-workforce/alan
[62] https://www.project44.com/platform/yard/yard-management/
[63] https://www.fourkites.ai/outcomes/predictive-appointment-capacity-intelligence
[64] https://www.fourkites.ai/outcomes/customer-pickup-scheduling-automation
[65] https://www.linkedin.com/posts/project-44_the-truck-arrived-now-what-thats-the-activity-7458599366728208384-sfQs
[66] https://www.shipwell.com/solutions/dock-scheduling
[67] https://www.fourkites.ai/press/fourkites-introduces-industry-first-dynamic-etas-for-ltl-freight
[68] https://www.fourkites.ai/outcomes/cross-dock-orchestration
[69] https://terminal-industries.com/terminal-at-the-dock
[70] https://inferensys.com/integration/warehouse-management-platforms/ai-for-dock-door-scheduling-optimization
[71] https://loadmaster.ai/reducing-yard-and-gate-congestion-using-haulier-arrival-predictions-in-deepsea-container-ports/
[72] https://ifactoryapp.com/industries/delivery-operations-management/Warehouse-dock-management-AI-inbound-delivery-scheduling
[73] https://datagrid.com/blog/ai-agent-meeting-scheduling
[74] https://www.linkedin.com/posts/arnavparihar_ai-dock-scheduling-cuts-dwell-time-20-40-activity-7475303508808859648-z88l
[75] https://cxtms.com/blog/yard-management-ai-dock-scheduling-dwell-times-2026
[91] https://codewave.com/feeds/blog/ai-last-mile-delivery
[92] https://parcelpath.com/shipping-companies/ups/ups-address-validation/
[93] https://cloud.google.com/blog/products/data-analytics/ups-leverages-bigquery-and-striim-for-ai-secured-package-delivery
[94] https://learningcenter-ihub.ups.com/Solutions/DigitalInc/UPSCapital/DeliveryDefense
[95] https://webisoft.com/articles/machine-learning-in-logistics
[96] https://www.dhl.com/discover/en-mx/logistics-advice/logistics-insights/ai-in-logistics-and-last-mile-delivery
[97] https://digitaldefynd.com/IQ/ups-use-ai-case-study/
[98] https://www.ups.com/worldshiphelp/WSA/ENG/AppHelp/mergedProjects/CORE/TASKS/About_the_Address_Validation_and_Classification_Tool.htm
[99] https://www.insureshield.com/us/en/resources/insights/delivery-defense-transforms-ecommerce-logistics.html
[100] https://www.dhl.com/discover/en-gb/logistics-advice/logistics-insights/ai-in-logistics-and-last-mile-delivery
[101] https://www.postgrid.com/ups-address-validation/
[102] https://www.dhl.com/discover/en-us/global-logistics-advice/logistics-insights/ai-in-logistics-and-last-mile-delivery
[103] https://www.dhl.com/discover/en-ng/logistics-advice/logistics-insights/ai-in-logistics-and-last-mile-delivery
[104] https://www.dhl.com/discover/en-ke/logistics-advice/logistics-insights/ai-in-logistics-and-last-mile-delivery
[105] https://www.dhl.com/discover/en-in/logistics-advice/logistics-insights/ai-in-logistics-and-last-mile-delivery
[76] https://www.worldfinance.com/strategy/convoy-is-driving-towards-a-greener-future
[77] https://www.freightwaves.com/news/convoy-touts-45-reduction-in-empty-mile-emissions-as-its-automated-reloads-program-grows
[78] https://arxiv.org/html/2408.14913v1
[79] https://www.uberfreight.com/en-US/resources/case-studies
[80] https://ctl.mit.edu/news/how-uber-freight-leveraging-ai-make-truck-routes-more-efficient
[81] https://ijapt.org/index.php/journal/article/download/937/743
[82] https://www.uberfreight.com/en-US/blog/journey-to-fuel-efficiency
[83] https://www.linkedin.com/posts/dr-fabian-struck-6b5b74146_the-ongoing-debate-about-%3F%3F%3F%3F%3F%3F-%3F%3F-activity-7427270061926739968-Z2zk
[84] https://convoy.com/wp-content/uploads/2022/10/Convoy-Company-Fact-Sheet_-10.22.pdf
[85] https://www.geekwire.com/2019/convoys-latest-digital-trucking-breakthrough-100-percent-automation-brokering-process/
[86] https://www.chrobinson.com/en-us/about-us/newsroom/press-releases/2025/chrobinson-introduces-cross-border-freight-consolidation/
[87] https://21784537.fs1.hubspotusercontent-na1.net/hubfs/21784537/Uber%20Freight_Network%20Optimization%20White%20Paper.pdf
[88] https://www.fleetowner.com/news/news/55409746/ch-robinson-acquires-rxo-in-58b-freight-logistics-deal
[89] https://www.businesswire.com/news/home/20201119005340/en/Convoy-Announces-Three-Industry-Leading-Innovations-for-Nationwide-Drop-and-Hook-Service
[90] https://aws.amazon.com/blogs/startups/convoy-helps-reduce-co2-emissions-with-machine-learning/
[46] https://www.fleetequipmentmag.com/machine-learning-trucking/
[47] https://www.ccjdigital.com/business/article/14929940/predictive-analytics-stay-metrics
[48] https://www.enterpriseengagement.org/articles/content/8634715/stay-metricsat-the-front-lines-of-turnover/
[49] https://www.prweb.com/releases/stay_metrics_partners_with_twegos_to_launch_driver_matching_application/prweb14461279.htm
[50] https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5229341
[51] https://transportation.trimble.com/sites/default/files/file/2020-11/Machine-Learning-Whitepaper_9.4.18-1.pdf
[52] https://www.tenstreet.com/wp-content/uploads/2023/06/Timco-Logistics-Case-Study.pdf
[53] https://www.tenstreet.com/blog/category/driver-retention
[54] https://www.ccjdigital.com/business/article/14932567/stay-metrics-study-shows-time-off-policies-help-drivers-be-more-productive-profitable
[55] https://www.ccjdigital.com/business/article/14931878/ccj-study-fleets-using-driver-rewards-to-combat-turnover
[56] https://www.ccjdigital.com/business/article/14934634/predicting-truck-driver-turnover-the-model-sends-a-message
[57] https://npr-brightspot.s3.amazonaws.com/legacy/sites/wglt/files/201904/WIT_Whitepaper_Retention.pdf
[58] https://www.tenstreet.com/blog/driver-retention/introducing-insights-helping-you-improve-driver-engagement-retention-2
[59] https://www.tenstreet.com/blog/press-releases/analysis-reveals-drivers-prioritize-stability-and-connection-amid-ai-shift
[60] https://www.prweb.com/releases/stay_metrics_chosen_by_grand_island_express_and_halvor_lines_to_enhance_driver_experience/prweb13202678.htm
[106] https://brokers.greenscreens.ai/news/4-ways-to-help-make-the-most-of-the-freight-market-downturn
[107] https://blog.metafora.net/how-freight-brokers-increase-profitability
[108] https://brokers.greenscreens.ai/news/customerstories-southland
[109] https://www.greenscreens.ai/news/greenscreens-ais-dynamic-pricing-helps-gls-exceed-high-pressure-growth-goals
[110] https://www.globenewswire.com/news-release/2022/04/06/2417593/0/en/3Gtms-and-Greenscreens-ai-announce-partnership-delivering-intelligent-pricing-and-load-optimization-empowering-freight-brokers-and-3PLs.html
[111] https://www.linkedin.com/posts/kevin-c-46a8a129_freight-market-recovery-isnt-going-to-be-activity-7100123962822565888-pGf4
[112] https://www.greenscreens.ai/resource/customer-case-study-nfi
[113] https://www.greenscreens.ai/greenscreens-core
[114] https://help.greenscreens.ai/en/articles/10045983-greenscreens-illuminate
[115] https://help.greenscreens.ai/en/articles/8371238-greenscreens-ai-best-practices
[116] https://www.greenscreens.ai/content-library
[117] https://www.greenscreens.ai/news/greenscreens-ai-announces-new-product-greenscreens-ignite
[118] https://www.greenscreens.ai/greenscreens-insights
[119] https://brokers.greenscreens.ai/blog
[120] https://help.greenscreens.ai/en/articles/4227738-getting-a-rate-prediction
[121] https://za.investing.com/news/stock-market-news/c-h-robinson-at-citis-2026-global-tmt-conference-ai-drives-margin-gains-93CH-4456728
[122] https://www.investing.com/news/transcripts/c-h-robinson-at-citis-2026-global-tmt-conference-ai-drives-margin-gains-93CH-4892033
[123] https://quartr.com/events/c-h-robinson-worldwide-inc-chrw-citi-s-2026-global-tmt-conference_3gS2bJJZ
[124] https://www.chrobinson.com/en-us/about-us/newsroom/news/2026/q1-2026-earnings-summary/
[125] https://investor.chrobinson.com/news/press-releases/news-details/2026/C-H--Robinson-Reports-2026-Second-Quarter-Results/default.aspx
[126] https://www.chrobinson.com/en-gb/about-us/newsroom/news/2026/q4-2025-earnings-summary/
[127] https://www.chrobinson.com/en-us/about-us/newsroom/news/2025/q3-2025-earnings-summary/
[128] https://in.investing.com/news/stock-market-news/c-h-robinson-at-citis-2026-global-tmt-conference-ai-drives-margin-gains-93CH-5584942
[129] https://www.chrobinson.com/en-us/about-us/newsroom/news/2025/chrobinson-delivers-four-quarters-of-earnings-growth/
[130] https://www.chrobinson.com/en-us/about-us/newsroom/news/2025/q1-2025-earnings-summary/
[131] https://www.chrobinson.com/en-au/about-us/newsroom/news/2025/investment-community-recognizes-chrobinson-as-ai-leader/
[132] https://www.uber.com/us/en/blog/freight-markov/
[133] https://www.chrobinson.com/en-us/about-us/newsroom/news/2025/ch-robinson-scales-fleet-of-ai-agents-past-30/
[134] https://www.chrobinson.com/en-us/resources/blog/what-is-lean-ai/
[135] https://www.chrobinson.com/en-us/resources/blog/benefits-of-lean-ai-beyond-productivity/
[136] https://www.amazon.science/publications/an-address-intelligence-framework-for-e-commerce-deliveries
[137] https://assets.amazon.science/69/8d/2249945a4e10ba8fc758f7523b0c/getting-your-package-to-the-right-place-supervised-machine-learning-for-geolocation.pdf
[138] https://www.amazon.science/author/aman-gulati
[139] https://assets.amazon.science/9e/61/3206dd79460c952bbd790b6fd165/learning-geolocations-for-cold-start-and-hard-to-resolve-addresses-via-deep-metric-learning.pdf
[140] https://www.amazon.science/author/srinivas-virinchi
[141] https://assets.amazon.science/46/d5/4cea0a164c0892a63201b2568e24/accurate-customer-address-matching-via-weak-supervision-for-geocode-learning.pdf
[142] https://www.amazon.science/blog/using-learning-to-rank-to-precisely-locate-where-to-deliver-packages
[143] https://www.amazon.science/latest-news/amazon-delivery-experience-the-bridge-between-supply-and-demand
[144] https://www.fedex.com/en-ph/small-business/getting-started/last-mile-delivery.html
[145] https://www.amazon.science/research-areas/machine-learning?0000016e-8c94-d8b7-af6f-eff4081f0001-page=8&00000172-1b4b-de11-adf7-3ffba7a80000-page=9
[146] https://www.fedex.com/en-us/digital/blog/logistics-data-gap-ai.html
[147] https://www.fedex.com/en-jp/business-insights/tech-innovation/ai-supply-chain-visibility.html
[148] https://www.amazon.science/research-areas/machine-learning?00000172-1b4b-de11-adf7-3ffba7a80000-page=6&0000016e-8c94-d8b7-af6f-eff4081f0001-page=10
[149] https://www.fedex.com/en-hk/business-insights/tech-innovation/microns-role-in-semiconductor-supply-chains.html
[150] https://www.dpd.com/wp-content/uploads/sites/262/2026/04/DPD_EasyShip_Web_Services.pdf
[165] https://blog.opendock.com/yard-management-automation
[166] https://www.project44.com/customer-stories/ocean-visibility-helps-georgia-pacific-improve-on-time-delivery-by-50-shrinks-manual-efforts-by-80/
[167] https://www.fourkites.com/press/fourkites-releases-powerful-automation-and-communication-capabilities-to-significantly-streamline-warehouse-and-distribution-center-deliveries/
[168] https://www.fourkites.com/press/fourkites-recognizes-customers-for-achieving-significant-roi-with-supply-chain-visibility/
[169] https://www.fourkites.com/es/industries/food-and-beverage/
[170] https://www.fourkites.com/press/fourkites-launches-universal-appointment-manager-solution-in-apac/
[171] https://www.fourkites.com/es/supply-chain-visibility-software/
[172] https://www.fourkites.com/customer-success/kb-transportation/
[173] https://blog.opendock.com/hubfs/Red%20Gold%20Case%20Study%20with%20Loadsmart.pdf
[174] https://opendock.com/en/industries/food-logistics/
[175] https://blog.opendock.com/trailer-yard-management-dwell-time
[176] https://blog.opendock.com/dock-scheduling-software-vs-warehouse-automation-software
[177] https://www.fourkites.com/es/yard-management-system/?wtime=%7Bseek_to_second_number%7D
[178] https://www.project44.com/platform/yard/yard-management/
[179] https://blog.opendock.com/trailer-management-system
[151] https://www.fleetowner.com/technology/article/21689723/dry-van-carrier-implements-omnitracs-analytics-driver-retention-model
[152] https://www.fleetowner.com/operations/article/21690151/pride-transport-adopts-driver-retention-model-from-omnitracs-analytics
[153] https://transportation.trimble.com/sites/default/files/file/2020-11/Machine-Learning-Whitepaper_9.4.18-1.pdf
[154] https://www.ccjdigital.com/business/article/14933745/new-omnitracs-module-predicts-driver-turnover-using-e-log-data
[155] https://www.truckinginfo.com/news/pride-transport-invests-in-driver-retention
[156] https://www.omnitracs.com/wp-content/uploads/2024/02/OM22-066-Video-Based-Safety-eBook-US.pdf
[157] https://www.omnitracs.com/wp-content/uploads/2023/08/SD21-000_SmartIQ_eBook_Omnitracs_KQ_v2.pdf
[158] https://www.ccjdigital.com/business/article/14931438/omnitracs-analytics-marks-10-year-anniversary-offers-free-trial-of-recruiting-model
[159] https://try.omnitracs.com/driver-incentive-ebook/
[160] https://www.worktruckonline.com/articles/improving-driver-retention-practices-during-a-pandemic
[161] https://www.omnitracs.com/industries/commercial-trucking/truckload
[162] https://www.tenstreet.com/blog/driver-retention/introducing-insights-helping-you-improve-driver-engagement-retention-2
[163] https://transportation.trimble.com/en/transportation-management/blog/3-driver-retention-strategies-that-work
[164] https://www.tenstreet.com/wp-content/uploads/2021/02/Insights-Cutsheet.pdf
[180] https://www.bringg.com/resources/podcast/building-last-mile-delivery-from-scratch
[181] https://www.sciencedirect.com/science/article/abs/pii/S0965856423002379
[182] https://www.correlation-one.com/hubfs/Datafolios/Empowerment%202.0%20Capstone%20Project%20Datafolio/Team18_Datafolio.pdf
[183] https://www.arxiv.org/pdf/1810.09944
[184] https://journals.sagepub.com/doi/10.1111/poms.13926
[185] https://www.bringg.com/resources/podcast/why-some-last-mile-kpis-lie-about-customer-experience-with-paula-natoli
[186] http://www.iiakm.org/ojakm/articles/2021/volume9_1/OJAKM_Volume9_1pp46-61.pdf
[187] https://www.bringg.com/resources/insights/bringg-launches-ai-powered-predictive-time-on-site
[188] https://iaeme.com/MasterAdmin/Journal_uploads/IJRCAIT/VOLUME_8_ISSUE_1/IJRCAIT_08_01_151.pdf
[189] https://www.bringg.com/resources/blog/delivery-exception
[190] https://www.mdpi.com/2071-1050/18/8/3877
[191] https://arxiv.org/html/2508.01032v1
[192] https://www.bringg.com/resources/inbound-and-outbound-logistics
[193] https://www.bringg.com/blog/delivery/what-does-out-for-delivery-mean/
[194] https://ijfmr.com/papers/2024/6/32057.pdf
[210] https://www.uberfreight.com/en-US/blog/better-load-matching-with-ai
[211] https://www.uberfreight.com/en-US/carrier-services/freight-bidding-exchange
[212] https://www.uberfreight.com/en-US/blog/reimagining-uber-freights-carrier-pricing-algorithm-to-drive-better-outcomes
[213] https://www.uberfreight.com/en-US/blog/uber-freight-touchless-loads
[214] https://www.uberfreight.com/es/blog/reimaginar-el-algoritmo-de-precios-de-uber-freight-para-obtener-mejores-resultados/
[215] https://www.uberfreight.com/en-US/newsroom/uber-freight-advances-vision-for-industry-wide-procurement-platform-with-uber-freight-exchange-spot
[216] https://www.uberfreight.com/es-US/blog/reimaginando-el-algoritmo-de-precios-para-transportistas-de-uber-freight-para-impulsar-mejores-resultados
[217] https://www.uberfreight.com/en-US/blog/uber-freight-market-access
[218] https://www.uberfreight.com/en-US/technology/exchange
[219] https://www.uberfreight.com/en-US/blog/reimagining-procurement-with-uber-freight
[220] https://www.uber.com/us/en/blog/freight-markov/
[221] https://www.uber.com/us/en/newsroom/uberfreightexpansion/
[222] https://www.uberfreight.com/es-US/blog/mejor-asignacion-de-cargas-con-ia
[223] https://www.chrobinson.com/en-us/resources/resource-center/videos/lean-ai-engineer/
[224] https://www.chrobinson.com/en-us/about-us/newsroom/press-releases/2025/chrobinson-introduces-cross-border-freight-consolidation/
[225] https://www.chrobinson.com/en-us/about-us/newsroom/press-releases/2025/ch-robinson-agentic-supply-chain-advance-2025/
[226] https://www.chrobinson.com/en-us/about-us/newsroom/news/2025/gartner-recognition-chr-technology-platform/
[227] https://www.chrobinson.com/en-us/technology/shipper-technology/navisphere/navisphere-optimizer/?_sp=08e01a2e-c7c2-473b-9691-e1a7174930c8
[228] https://www.chrobinson.com/en-us/technology/shipper-technology/navisphere/
[229] https://www.chrobinson.com/en-us/shippers/industries/automotive-logistics/
[230] https://www.chrobinson.com/en-us/resources/resource-center/case-studies/automotive-aftermarket-case-study/
[231] https://www.chrobinson.com/en-us/resources/resource-center/case-studies/retail-consolidation-that-delivers/
[232] https://www.chrobinson.com/en-gb/resources/resource-center/white-papers/supply-chain-savings/
[233] https://www.chrobinson.com/en-us/shippers/supply-chain-and-logistics-services/cross-border/
[234] https://www.chrobinson.com/en-gb/about-us/newsroom/press-releases/2026/ch-robinson-lean-ai-engineer-launch/
[235] https://www.chrobinson.com/en-us/shippers/supply-chain-management/managed-solutions/
[236] https://www.chrobinson.com/en-us/shippers/lean-ai-supply-chains/orchestration/
[237] https://www.chrobinson.com/en-us/resources/blog/ai-truckload-network-optimization/
[195] https://www.dat.com/rateview/ratecast
[196] https://www.dat.com/solutions/supply-chain-transportation
[197] https://www.dat.com/blog/4-keys-to-freight-rate-forecasting-with-artificial-intelligence
[198] https://www.dat.com/rateview
[199] https://www.dat.com/resources/wp-content/uploads/resource-assets/product-sheet/General-Shipper-Ratecast-Product-Sheet.pdf
[200] https://www.dat.com/products
[201] https://www.dat.com/company/news-events/news-releases/ken-adamo-dat-chief-of-analytics-named-2021-pro-to-know-by-supply-demand-chain-executive
[202] https://www.dat.com/network-analytics
[203] https://www.dat.com/solutions/supply-chain-planning
[204] https://www.dat.com/resources/get-modern-get-lean-freshpets-logistics-transformation
[205] https://www.dat.com/resources/ratecast-confidently-plan-for-the-future
[206] https://iq.support.dat.com/ratecast-a1d238ab/
[207] https://www.dat.com/sales-inquiry/ratecast
[208] https://www.dat.com/resources/inflation-shipping-costs-analysis
[209] https://www.dat.com/resources/freight-broker-software-solutions
[250] https://www.fourkites.ai/golden-kite-awards
[251] https://www.fourkites.ai/digital-workforce/alan
[252] https://www.fourkites.ai/blogs/3-reasons-invest-supply-chain-visibility
[253] https://www.fourkites.ai/blogs/manifest-2026-autonomous-ai-where-to-start
[254] https://www.fourkites.ai/case-studies/kehe-cutting-manual-tasks-and-boosting-revenue-with-real-time-visibility
[255] https://www.fourkites.ai/industries/energy-chemicals
[256] https://www.fourkites.ai/domains/site-intelligence
[257] https://www.fourkites.ai/resources/effectively-manage-exceptions-with-ocean-visibility
[258] https://www.fourkites.ai/blogs/how-to-make-a-winning-lsp-bid-package
[259] https://www.fourkites.ai/case-studies/henkel-improving-customer-experience-and-operations
[260] https://www.fourkites.ai/company/customer-advisory-board
[261] https://www.fourkites.ai/newsroom
[262] https://www.fourkites.com/es/platform/
[263] https://www.fourkites.com/blogs/scale-outbound-supply-chain-with-leaner-teams/
[264] https://www.fourkites.ai/webinars/5-inspiring-stories-of-supply-chain-transformation-amid-chaos
[238] https://sacra.com/c/convoy/
[239] https://www.freightwaves.com/news/tag/convoy
[240] https://www.flexport.com/blog/why-we-bought-built-and-sold-the-convoy-platform/
[241] https://en.wikipedia.org/wiki/Convoy_(company)
[242] https://www.truckinginfo.com/news/flexport-launches-convoy-platform-brings-back-digital-freight-app
[243] https://cdllife.com/2024/digital-freight-broker-convoy-resurrected-after-company-closure-last-year/
[244] https://www.owler.com/company/convoy
[245] https://www.uberfreight.com/en-US/blog/journey-to-fuel-efficiency
[246] https://convoy.com/wp-content/uploads/2022/10/Convoy-Company-Fact-Sheet_-10.22.pdf
[247] https://www.prnewswire.com/news-releases/flexport-launches-the-convoy-platform-restores-leading-trucking-technology-to-market-302068490.html
[248] https://www.digitalcommerce360.com/2024/02/23/convoy-a-retooled-b2b-marketplace-for-truckers-gets-back-on-the-road-under-flexport/
[249] https://www.freightwaves.com/news/some-convoy-carriers-say-collapsed-startup-owes-them-thousands-of-dollars
[265] https://ai-best-practices.com/case-studies/logistics-support-agents
[266] https://www.gminsights.com/industry-analysis/dock-scheduling-software-market
[267] https://terminal-industries.com/all-resources/yard-dock-management-boost-efficiency-with-ai-and-yms-solutions
[268] https://www.fourkites.com/press/fourkites-releases-powerful-capabilities-to-significantly-streamline-warehouse-and-distribution-center-deliveries-in-emea/
[269] https://www.c3solutions.com/case-studies/c3-reservations-a-solution-rich-in-functionality-and-easy-to-deploy/
[270] https://www.fourkites.com/blogs/building-the-industrys-most-intelligent-yms-starts-with-unification/
[271] https://www.3plogistics.com/3pl-case-studies/open-sky-group-case-study/
[272] https://blog.loadsmart.com/hubfs/Red%20Gold%20Case%20Study%20with%20Loadsmart.pdf
[273] https://www.fourkites.com/platform/implementation/
[274] https://blog.loadsmart.com/case-study-red-gold?hs_amp=true
[275] https://www.fourkites.com/press/fourkites-releases-powerful-automation-and-communication-capabilities-to-significantly-streamline-warehouse-and-distribution-center-deliveries/
[276] https://www.autonoly.com/integrations/automation/circleci/dock-scheduling-system
[277] https://www.autonoly.com/integrations/automation/perplexity-ai/dock-scheduling-system
[278] https://www.fourkites.com/es/supply-chain-visibility-software/
[279] https://www.fourkites.com/es/platform/appointment-management/
[280] https://www.fourkites.ai/press/us-cold-storage-ai-agent-alan-scheduling-success
[281] https://www.fourkites.ai/digital-workforce/alan
[282] https://www.fourkites.ai/
[283] https://www.fourkites.ai/outcomes/appointment-automation-eta-rescheduling
[284] https://www.fourkites.ai/industries/retail-grocery
[285] https://www.fourkites.ai/case-studies
[286] https://www.fourkites.ai/blogs/supply-chain-sustainability-how-to-optimize-operations-to-reduce-waste
[287] https://www.fourkites.ai/domains/customer-fulfillment
[288] https://www.fourkites.ai/blogs/digitally-driven-cold-chains-how-to-upgrade-your-temperature-tracking
[289] https://www.fourkites.ai/press/fourkites-introduces-the-industrys-first-digital-workforce-for-supply-chain-orchestration
[290] https://www.fourkites.ai/team/matt-elenjickal
[291] https://www.fourkites.ai/company/leadership
[292] https://fareye.com/resources/blogs/fourkites-pricing
[293] https://fareye.com/au/en/resources/blogs/fourkites-pricing
[294] https://www.businesswire.com/news/home/20251218023312/en/FourKites-Launches-Consumer-Packaged-Goods-Customer-Advisory-Board
[295] https://journals.sagepub.com/doi/10.1111/poms.13926
[296] https://onlinelibrary.wiley.com/doi/10.1111/jbl.70086
[297] https://onlinelibrary.wiley.com/doi/full/10.1111/jbl.70086
[298] https://www.chrobinson.com/en-us/resources/blog/agentic-ai-faster-smarter-power-up-for-small-business/
[299] https://www.chrobinson.com/en-us/about-us/newsroom/news/2025/ch-robinson-scales-fleet-of-ai-agents-past-30/
[300] https://onlinelibrary.wiley.com/doi/abs/10.1111/poms.13926
[301] https://stanley-lim.com/publications/
[302] https://www.chrobinson.com/en-gb/resources/blog/benefits-of-lean-ai-beyond-productivity/
[303] https://scholar.google.com/citations?user=WEa0iJAAAAAJ&hl=en
[304] https://sigmaun.github.io/-webster/papers.htm
[305] https://bnaic2023.tudelft.nl/static/media/BNAICBENELEARN_2023_paper_79.978cd3ad376e3fbd3e4b.pdf
[306] https://www.chrobinson.com/en-us/resources/blog/what-is-lean-ai/
[307] https://onlinelibrary.wiley.com/doi/10.1111/jbl.12397
[308] https://onlinelibrary.wiley.com/doi/full/10.1111/jbl.12397
[309] https://arxiv.org/html/2602.03135v1
````
