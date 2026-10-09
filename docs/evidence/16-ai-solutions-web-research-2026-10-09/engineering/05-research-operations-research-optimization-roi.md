# 05-research-operations-research-optimization-roi

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** What operations research and mathematical optimization solutions do companies deploy in production with documented ROI (from Gurobi, FICO, Nextmv, INFORMS Franz Edelman award finalists 2015-2026, and company engineering blogs)? Cover workforce/shift scheduling, vehicle routing and last-mile delivery, production scheduling, network design, inventory allocation, promotion planning, marketing budget allocation, labor planning in warehouses and call centers, truck loading, and field service technician scheduling. For each give company examples, the decision optimized, the data needed, and the reported savings. Highlight which are adopted by mid-sized companies.
- **Timestamp (UTC):** 2026-10-09T20:29:08.956Z

## Response (verbatim)

````
**Production deployments with reported benefits span much more than vehicle routing.** The strongest mid-sized examples I found are Discher bakery’s shift rostering, Vera Bradley’s contact-center planning, and Seco Kältetechnik’s technician scheduling. “Reported savings” below preserves the source’s unit: a percentage of labor cost, miles, planning time, or revenue is **not** necessarily a cash saving. **Yes** in the last column means the source identifies the operation as medium-sized or gives a comparably modest operating scale; **unclear** avoids inferring company size from its product. 

| Use case | Company example | Decision optimized | Data needed | Reported savings or return | Mid-sized adoption? |
|---|---|---|---|---|---|
| Workforce/shift scheduling | **Discher bakery**, using Complevo and Gurobi | Assign sales staff across seven branches while covering opening hours and balancing hours, leave, preferences and overtime. | Branch opening times and staffing needs; employee availability, requested hours, leave and flex-time balances. | **4% lower staff costs**, **6% fewer temporary staff**; rostering fell from three hours *weekly per branch* to three hours *monthly for all seven*. [web:35] | **Yes**—described as medium-sized. |
| Workforce/shift scheduling | **Swissport**, using Gurobi | Build monthly rosters and assign qualified staff to airport duties and disruptions. | Demand by duty and time, skills, contracts, shifts and employee preferences. | **More than $1 million saved annually**; planning takes about half as long and **95–100%** of preferences are met. The Zurich operation alone schedules roughly 2,000 staff. [web:37] | No—large operator. |
| Workforce/shift scheduling | **I-SEC**, using Syntro and Gurobi | Generate airport-security shifts that match staffing to changing demand rather than paying for idle hours. | Coverage demand by time, available personnel, shift rules and labor costs. | Reported **4–5% reduction in overall labor costs over five years**. [web:43] | Unclear. |
| Vehicle routing and last mile | **UPS**, ORION, 2016 Edelman winner | Sequence drivers’ stops subject to delivery and operating requirements. | Stops and addresses, driver routes, service requirements, road and vehicle data. | **More than $320 million saved by December 2015**; **$300–$400 million annually was the estimate at full deployment**, not an additional amount already realized then. [web:217] | No. |
| Vehicle routing and last mile | **Alibaba**, 2021 Edelman finalist | Optimize subsidiary pickup, delivery and warehouse-picking routes. | Pickup and delivery orders, locations, capacities and timing requirements. | Reported **more than $50 million in annual financial savings**. [web:125][web:237] | No. |
| Vehicle routing and last mile | **HopSkipDrive/RouteWise AI**, using Nextmv | Plan school pickup and drop-off routes and test vehicle and policy scenarios. | Student locations and accessibility needs, bell-time windows, vehicles, driver availability and eligibility rules. | One district reported on-time arrivals rising **85% to 99%** and emissions falling **31%**. A **40% reduction in its 10-year capital budget was an identified opportunity**, not a realized cash saving. [web:138] | Provider size unclear; applicable to individual districts. |
| Vehicle routing and last mile | **Oico**, using Nextmv | Assign construction-material pickups and deliveries to vehicles and sequence routes, including pickup-before-drop-off rules. | Orders and suppliers, delivery sites, vehicle capacity, driver availability, access restrictions and schedules. | **Production adoption in one week** and reported higher margins, but **no numerical saving disclosed**. This documents small-company adoption, not quantified ROI. [web:142] | **Yes—startup-scale example**; financial benefit unquantified. |
| Freight dispatch | **Traxión**, using FICO optimization | Reduce empty truck movements when dispatching freight. | Freight requests, vehicle and route availability and operational dispatch constraints. | **40% fewer empty trips** and **US$5 million saved annually**, as reported by FICO. [web:30] | Unclear. |
| Production scheduling | **PepsiCo**, using FICO Xpress | Repeatedly choose what and when to produce across manufacturing sites under changing demand and machine availability. | Demand, equipment availability and site-specific production constraints. | A live system runs **400–500 planning instances daily**; solver tuning cut model solve time **30%**. FICO gives **no dollar production saving** for this deployment. [web:151] | No. |
| Production scheduling | **Lenovo**, 2021 Edelman finalist | Assign and sequence orders on 43 laptop assembly lines, balancing output, changeovers and fulfillment. | Orders and priorities, line capability and capacity, changeover costs and fulfillment targets. | **20% smaller order backlog**, **23% better fulfillment rate** and scheduling shortened from six hours to 30 minutes; the case attributes **$1.91 billion in 2019 and $2.69 billion in 2020 increased revenue** to the work—not cost savings. [web:281] | No. |
| Production/resource planning | **Unnamed metallurgical-additives producer**, using Aimpoint Digital and Gurobi | Select raw-material blends that meet customers’ product requirements. | Material recipes and availability, customer specifications and formulation constraints. | **Estimated $1.5 million saved annually**; monthly modeling work fell from three–five days to under a minute per answer. The source does **not** establish the producer’s size. [web:253] | Unclear—potentially replicable, but not documented as mid-sized. |
| Network design | **Amazon Regionalization**, 2025 Edelman finalist; also described by Amazon Science | Configure regional fulfillment networks and route orders through them. | Geographic demand, fulfillment-center inventory and capacity, transport links, speeds and costs. | **$0.45 lower U.S. cost to serve per item in 2023**. Amazon separately reported the share of orders fulfilled wholly within their region rising from **62% to 76%**. [web:62][web:309] | No. |
| Network design | **McDonald’s China**, 2024 Edelman finalist | Choose food-factory and distribution-center locations and the resulting supply flows. | Restaurant demand and growth, candidate facilities, construction costs, transport distances and capacities. | Avoided **nearly $63.75 million** in factory investment and reported **$8.9 million in average annual transportation savings**. [web:169] | No. |
| Network design | **SF Express**, 2025 Edelman finalist | Plan its integrated parcel network and cargo-hub operations. | Parcel flows, service times, hub and transport capacity and network alternatives. | Reported **more than $1 billion saved since 2018** and shorter service times for over one billion parcels; this is **cumulative**, not annual. [web:62] | No. |
| Inventory allocation and replenishment | **ECCO Shoes**, 2026 Edelman finalist | Set store replenishment orders through a stochastic mixed-integer model. | Store demand and inventory, supply uncertainty, ordering costs and supply-chain constraints. | In 2025, automated nearly **300,000 orders monthly** for 536 stores; reported **1.09% lower key operating costs**, worth **several million euros annually**. [web:65] | No. |
| Inventory allocation and replenishment | **Chewy**, 2026 Edelman finalist | Set purchase orders, safety stock and inventory placement to avoid split shipments. | Demand and stock data, supplier constraints, supply uncertainty and fulfillment locations. | Causal analysis found improved placement, fewer split shipments and shorter shipping distances; **no financial amount disclosed**. [web:65] | No. |
| Promotion and markdown planning | **ALDI SÜD Germany**, 2024 Edelman finalist | Set special-buy order quantities and weekly clearance markdowns over each product’s life cycle. | Sales forecasts, inventory, price response, purchasing and handling costs, disposal losses and store requirements. | The published case reports **20.5% lower markdown/disposal losses** for its ordering model and **7.7%** for the later clearance model; it describes project-wide **additional annual profit in the double-digit millions of euros**, without assigning that sum to either model alone. [web:295] | No. |
| Promotion and markdown planning | **Apparel brands served by Veltys**, using Gurobi | Select each product’s discount and markdown period to maximize margin during sales. | Historical prices, sales, estimated discount response, product margins and sales-period rules. | Clients reportedly achieved **up to 10% higher gross margin during sales periods**; the case does not name individual brands or their sizes. [web:245] | Unclear—vendor serves brands, but client sizes undisclosed. |
| Promotion placement | **RSG Media**, using FICO Xpress | Allocate TV-program promos to time slots and channels, revising placement as campaigns progress. | Available promo spots, audience affinities, expected viewership, campaign goals and actual performance. | Reported **10–25% lift in viewership conversions**, **up to 17% of promo inventory freed**, and plans generated in 10 minutes rather than weeks. This is **media promotion**, not grocery trade promotion. [web:22] | Unclear. |
| Marketing budget allocation | **Global consumer-health advertiser**, served by Marketing Attribution and Gurobi | Allocate spending weekly across brands, countries and roughly 30 media channels. | Budgets and channel constraints, brand-country plans and estimated nonlinear advertising-response curves. | On **more than $1.4 billion in annual ad spend**, the client reports a **13% annual improvement in media ROI since 2019**; this is an ROI *improvement*, not a claimed 13% cash saving. [web:92] | No. |
| Marketing budget allocation | **360i’s paid-search clients**, 2016 Edelman finalist | Allocate search budgets and set bids across keywords, locations, devices and audiences. | Keyword performance, auction prices, forecasts, seasonality, audience and ad-response data. | The platform reported **$250 million in client cost savings and $1 billion in incremental client revenue**; these are aggregate client results, not annual results for one company. [web:301] | Client sizes vary; not identified. |
| Warehouse labor planning | **PepsiCo**, using FICO Xpress | Decide site-wide full-time, part-time and contractor headcount and when to start hiring; deployed at multiple manufacturing and warehouse sites. | Forecast demand, historical attrition, hiring lead times and projected staffing gaps. | Staffing-plan preparation fell from **two–three days per department** to **under five minutes for 80% of instances** and under an hour for all. **No dollar labor saving disclosed.** [web:151] | No. |
| Warehouse dispatch and labor productivity | **JD.com**, 2021 Edelman finalist | Dispatch warehouse robots among storage racks and picking stations to meet work demand. | Incoming picking work, rack locations, robot and station availability and travel times. | Reported warehouse operating efficiency up to **five times higher**, **50% lower average storage cost**, and **estimated annual savings of hundreds of millions of dollars**. These are for its broader intelligent-warehouse deployment, not a separately measured wage-scheduling effect. [web:123][web:237] | No. |
| Call-center labor planning | **Vera Bradley**, using NiCE CXone | Analyze required contact-center operating hours and automate agent schedules and intraday adjustments. | Contact demand and operating hours, roughly 70 agents’ time-off requests and skill availability. | **$1 million annual savings** attributed to workforce analysis that allowed the center to eliminate **23.5 operating hours per week**. This should not be represented as savings solely from rearranging shifts. [web:197] | **Yes**—case labels the 70-agent operation medium-sized. |
| Call-center labor planning | **Wayfair**, using Verint | Match full-time, part-time, seasonal and flexible agent schedules to interval-level contact demand. | Call forecasts, skills, availability, breaks, leave, labor rules, service targets and budgets. | Company **projected more than $7 million in savings for 2023–2025**, including **$3 million attributed to variable scheduling**; the source does not establish those sums as realized. [web:203] | No. |
| Truck routing and loading | **Walmart**, 2023 Edelman winner | Jointly plan daily truck routes and loads, alongside longer-term supply-chain investments. | Store shipments, vehicle and load capacity, routes, delivery requirements and investment alternatives. | INFORMS reported **$75 million saved in fiscal 2023** from the routing/loading application. [web:131] | No. |
| Field-service technician scheduling | **Seco Kältetechnik**, using VISITOUR | Assign and sequence refrigeration-technician appointments and dynamically respond to emergency work. | Job locations and appointments, technician availability and routes, service requirements and urgent calls. | Reported **over 52% fewer driving miles per order** and more than **900,000 kg less CO₂ annually**; **no euro saving disclosed**. It operates with over 250 employees and initially planned for 80 in-house technicians. [web:117] | **Yes**—approximately 250 employees. |

**How to read the evidence:** Discher, Vera Bradley and Seco show deployable approaches at substantially smaller operating scales than the Edelman enterprise cases. Nextmv’s Oico case likewise shows that routing can be put into production quickly, but it should **not** be counted as a case with documented *numerical* ROI. Conversely, the 40% district capital-budget opportunity, Wayfair’s projection and the additives producer’s estimate should remain labeled as opportunities, projections and estimates—not booked savings. [web:35][web:197][web:117][web:142][web:138][web:203][web:253]

Citations:
[31] https://www.gurobi.com/resources/case-studies/polymathian-optimising-crew-schedules-to-improve-operational-efficiency
[32] https://www.gurobi.com/jp/case-studies
[33] https://www.gurobi.com/solutions/industries/industrial-automation-machinery
[34] https://www.gurobi.com/solutions/business-problems/workforce
[35] https://www.gurobi.com/resources/case-studies/complevo-optimal-workforce-planning
[36] https://www.gurobi.com/resources/case-studies/i-sec-syntro-designing-optimal-shifts-for-airport-security-staff
[37] https://www.gurobi.com/case_studies/swissport-automating-airport-staff-scheduling/
[38] https://www.gurobi.com/resources/case-studies/yutong-bus-production-planning
[39] https://www.gurobi.com/wp-content/uploads/2022/08/CaseStudy-2018Dec-Yutong_Eng.pdf?x39087
[40] https://www.gurobi.com/resources/case-studies/swissport-automating-airport-staff-scheduling
[41] https://www.gurobi.com/case_studies/yutong-bus-production-planning/
[42] https://www.gurobi.com/wp-content/uploads/2022/08/IndustrySolutionSheet-Agriculture.pdf
[43] https://www.gurobi.com/company/newsroom/i-sec-optimizes-airport-security-workforce-planning-with-gurobi-and-syntro
[44] https://www.gurobi.com/resources/case-studies/kaneka-production-planning-optimization
[45] https://www.gurobi.com/case_studies/eurodecision-geneva-airport-shift-and-personnel-planning-optimization/
[16] https://www.fico.com/blogs/blogs/experience-faster-mixed-integer-programming-optimization-with-xpress
[17] https://www.fico.com/en/industries/manufacturing
[18] https://www.fico.com/blogs/pepsico-uses-fico-optimization-orchestrate-daily-production-align-staffing-and-accelerate-new-ideas
[19] https://www.fico.com/en/platform/optimization
[20] https://www.fico.com/en/industries/energy-and-utilities
[21] https://www.fico.com/blogs/could-optimization-help-break-supply-chain-gridlocks
[22] https://www.fico.com/blogs/media-planning-optimization
[23] https://www.fico.com/blogs/linear-and-mixed-integer-linear-programming-software-guide-its-applications-benefits-and-business-impact
[24] https://www.fico.com/blogs/how-southwest-airlines-uses-fico-optimization-boost-operations
[25] https://www.fico.com/blogs/how-decision-optimization-improves-credit-line-management
[26] https://www.fico.com/blogs/guide-mathematical-optimization-what-why-and-how
[27] https://www.fico.com/en/newsroom/fico-platform-produced-significant-return-investment-businesses-according-new-total-economic-impact-study
[28] https://www.fico.com/blogs/digital-transformation-success-stories-fico-platform-users-speak-out
[29] https://www.fico.com/en/newsroom/rsg-media-uses-fico-optimization-hyper-targeted-media-planning-and-scheduling-improving-viewership-10-25-percent
[30] https://www.fico.com/en/newsroom/fico-partners-tcs-deliver-businesses-major-efficiency-gains-through-analytics
[1] https://www.nextmv.io/category/customer-story
[2] https://www.nextmv.io/blog/to-change-my-decision-model-or-not-thats-not-a-question-its-a-test
[3] https://www.nextmv.io/blog/solving-a-fleet-scheduling-problem-from-calculating-demand-to-building-a-shift-schedule
[4] https://www.nextmv.io/videos/order-fulfillment-and-carrier-selection-experiment-comparing-handling-costs
[5] https://www.nextmv.io/author/ryan-oneil
[6] https://www.nextmv.io/category/explainer?3966f067_page=2
[7] https://www.nextmv.io/author/renuka-gough?2d3d6081_page=3
[8] https://www.nextmv.io/category/feature?3966f067_page=4
[9] https://www.nextmv.io/blog/simulate-what-if-questions-for-decision-models-with-scenario-testing-and-nextmv
[10] https://www.nextmv.io/category/feature?3966f067_page=3
[11] https://www.nextmv.io/blog/assign-workers-to-shifts-with-a-low-code-scheduling-app
[12] https://www.nextmv.io/videos/shift-scheduling-algorithm-comparison-optimizing-for-shift-coverage
[13] https://www.nextmv.io/author/carolyn-mooney
[14] https://www.nextmv.io/blog/configuring-three-types-of-vehicle-routing-problems-delivery-sourcing-and-distribution
[15] https://www.nextmv.io/blog/optimizing-your-ai-investment-with-decision-services
[61] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award
[62] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/2025-INFORMS-Franz-Edelman-Award-Finalists-Announced
[63] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/Microsoft-Awarded-the-2026-INFORMS-Edelman-Award-for-Cloud-Supply-Chain-Optimization-and-Generative-AI-Innovation
[64] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Academy
[65] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/INFORMS-Names-Six-Finalists-for-the-2026-Franz-Edelman-Award-the-World-s-Leading-Honor-in-Analytics-Operations-Research-and-Management-Science
[66] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases
[67] https://www.informs.org/Impact/O.R.-Analytics-Success-Stories/Microsoft-Cloud-Supply-Chain
[68] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Academy/Franz-Edelman-Academy-Class-of-2003
[69] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/USA-Cycling-Awarded-the-2025-INFORMS-Edelman-Award-for-Data-Driven-Olympic-Gold-Strategy
[70] https://www.informs.org/About-INFORMS/Governance/Committees/Awards/Franz-Edelman-Award-Committee
[71] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Academy/Franz-Edelman-Academy-Class-of-2026
[72] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Laureates2
[73] https://pubsonline.informs.org/doi/pdf/10.1287/inte.2023.intro.v54.n1
[74] https://pubsonline.informs.org/toc/ijaa/55/1
[75] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/HP-Wins-INFORMS-Edelman-Prize
[76] https://www.amazon.science/publications/learning-to-staff-offline-reinforcement-learning-and-fine-tuned-llms-for-warehouse-staffing-optimization
[77] https://www.amazon.science/blog/navigating-uncertainty-in-amazons-middle-mile-network
[78] https://www.uber.com/blog/simulated-marketplace/
[79] https://www.amazon.science/tag/stochastic-models
[80] https://doordash.engineering/2023/02/15/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/
[81] https://assets.amazon.science/7e/58/c730144345d9aed8a5063b308b4f/cloud-based-hybrid-simulation-model-for-optimizing-warehouse-yard-operations.pdf
[82] https://assets.amazon.science/84/59/9dbc747c4ea4a452c0fc85446736/pick-planning-strategies-for-large-scale-package-manipulation.pdf
[83] https://www.amazon.science/publications/deep-neural-network-and-mixed-integer-programming-framework-for-scheduling-textual-construction-workplace-audits
[84] https://doordash.engineering/2021/10/12/doordash-2021-summer-intern-survey-post/
[85] https://doordash.engineering/2021/02/02/building-a-more-reliable-checkout-service-with-kotlin/
[86] https://doordash.engineering/2020/06/29/doordashs-new-prediction-service/
[87] https://www.amazon.science/research-areas/operations-research-and-optimization?trk=public_post_comment-text&0000016e-8c9a-d8c3-a56e-fe9b76920001-page=11&00000175-e724-d918-a3f7-e7ae8af00000-page=8
[88] https://www.uber.com/blog/building-ubers-fulfillment-platform/
[89] https://www.amazon.science/publications/pick-planning-strategies-for-large-scale-package-manipulation
[90] https://www.amazon.science/publications/revolutionizing-order-fulfillment-a-neural-network-approach-to-optimal-warehouse-selection-in-supply-chain-simulation
[46] https://www.gurobi.com/case_studies/decision-lab-packing-equipment-for-military-grade-logistics/
[47] https://www.gurobi.com/resources/case-studies/leanlogistics-supply-chain-optimization
[48] https://www.gurobi.com/resources/case-studies/decision-lab-optimizing-scarce-water-resources
[49] https://www.gurobi.com/resources/case-studies/mondelz-a-smarter-way-to-ship-snacks
[50] https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/THANKS-A-BILLION!-April-30-1998
[51] https://cdn.gurobi.com/wp-content/uploads/2024_Decision-Spot_Gurobi-Connect-Chicago.pdf?x58142
[52] https://www.gurobi.com/wp-content/uploads/2022/08/CaseStudy-2022Jun-Delhivery_Eng.pdf?x58432
[53] https://www.gurobi.com/case_studies/polymathian-optimising-crew-schedules-to-improve-operational-efficiency/
[54] https://pubsonline.informs.org/doi/10.1287/stsy.2021.0008
[55] https://www.gurobi.com/solutions/business-problems/supply-chain
[56] https://www.gurobi.com/jp/case-studies
[57] https://www.gurobi.com/solutions/industries/transportation
[58] https://pubsonline.informs.org/doi/10.1287/opre.2021.0651
[59] https://pubsonline.informs.org/doi/pdf/10.1287/opre.51.1.17.12801
[60] https://pubsonline.informs.org/doi/10.1287/inte.2021.1107
[106] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/2017-INFORMS-Franz-Edelman-Award-finalists-selected-from-leading-analytics-teams-around-the-world
[107] https://www.cloudcreations.com/resource/field-service-playbook-for-utilities/
[108] https://tei.forrester.com/go/salesforce/agentforcefieldservice/
[109] https://www.fieldproxy.ai/articles/route-optimization-utilities-field-service-crews
[110] https://fieldworkhq.com/2026/02/05/smart-scheduling/
[111] https://www.nomadia.com/en/cas-client-en/spie-nomadia-en/
[112] https://www.road.com/corp/images/adberdeen_fieldservice_ii.pdf
[113] https://www.servicepower.com/hubfs/Building%20a%20Business%20Case%20for%20FSM.pdf
[114] https://www.salesforce.com/ap/service/field-service-management/workforce-optimization/?bc=OTH
[115] https://aexinc.com/blog/man-vs-field-squared-advanced-scheduling/
[116] https://timefold.ai/blog/how-much-fuel-can-route-optimization-actually-save-an-roi-guide-for-field-service-fleets
[117] https://solvares-fieldservice.com/en/case-study/seco-optimizes-scheduling-and-saves-a-lot-of-mileage/
[118] https://www.fieldcircle.com/software/field-service-management/routing/
[119] https://nextbillion.ai/feeds/service/field-service-management-software-energy-utilities
[120] https://www.ibm.com/think/insights/ai-in-field-service-management
[121] https://pubsonline.informs.org/doi/10.1287/opre.10.4.518
[122] https://www.scribd.com/document/933790817/2021%E4%BA%AC%E4%B8%9C%E5%85%A5%E5%9B%B4Franz-Edelman%E5%A5%96%E8%AE%BA%E6%96%87
[123] https://jdcorporateblog.com/jd-com-selected-as-a-franz-edelman-award-finalist-by-informs/
[124] https://www.gurobi.com/solutions/business-problems/workforce
[125] https://pubsonline.informs.org/doi/10.1287/inte.2021.1107
[126] https://informs-sim.org/wsc23papers/cea157.pdf
[127] https://www.gurobi.com/company/newsroom/workforce-analytics-uses-gurobi-to-revolutionize-resource-allocation
[128] https://www.informs.org/Resource-Center/Video-Library/Edelman-Competition-Videos/2021-Edelman-Competition-Videos/2021-Edelman-Finalist-JD.com
[129] https://www.linkedin.com/posts/joshua-louey-bentley_workforce-scheduling-workforcemanagement-activity-7426811200694329345-9B3P
[130] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/Finalists-Selected-for-the-World-s-Leading-Operations-Research-and-Analytics-Award-2021-INFORMS-Franz-Edelman-Competition-Elevates-Research-that-is-Saving-Lives-Saving-Money-and-Solving-Problems
[131] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/Operations-Research-Enhances-Retail-Truck-Routing-and-Load-Planning-Walmart-Awarded-the-2023-INFORMS-Edelman-Award
[132] https://pubsonline.informs.org/doi/pdf/10.1287/opre.1040.0160
[133] https://pubsonline.informs.org/do/10.1287/orms.2021.03.22/full/
[134] https://optimization-online.org/wp-content/uploads/2016/03/5379.pdf
[135] https://www.gurobi.com/resources?_insight_hub=case-studies
[91] https://www.gurobi.com/resources/case-studies/blue-yonder-retail-pricing-decisions
[92] https://www.gurobi.com/resources/case-studies/marketing-attribution-driving-smarter-media-investments
[93] https://www.gurobi.com/solutions/industries/advertising-and-marketing
[94] https://www.gurobi.com/company/newsroom/marketing-attribution-gurobis-partnership-boosts-roi-by-13
[95] https://www.gurobi.com/resources/3-times-in-my-career-when-mathematical-optimization-would-have-saved-my-skin/
[96] https://www.informs.org/Resource-Center/Video-Library/Edelman-Competition-Videos/2016-Edelman-Competition-Videos/2016-Edelman-Award-Finalist-360i
[97] https://www.gurobi.com/wp-content/uploads/2022/08/CaseStudy-2021Jun-Emesa_Eng.pdf?x47079
[98] https://www.gurobi.com/resources/case-studies/statkraft-croatia-cracking-the-code-on-battery-profitability
[99] https://www.gurobi.com/resources/case-studies/emesa-marketing-campaign-optimization
[100] https://www.gurobi.com/resources/case-studies/analytics-for-a-better-world-maximizing-mission-driven-impact-with-optimization
[101] https://www.gurobi.com/resources/case-studies/c3-ai-optimizing-business-processes-with-customized-ai-solutions
[102] https://www.fico.com/blogs/answering-million-dollar-marketing-questions
[103] https://www.fico.com/blogs/choosing-right-analytics-uplift-models
[104] https://www.informs.org/Resource-Center/Video-Library/Edelman-Competition-Videos/2020-Edelman-Competition-Videos/2020-Edelman-Finalist-Carnival-Corporation-plc
[105] https://www.informs.org/Resource-Center/Video-Library/Edelman-Competition-Videos/2013-Edelman-Competition-Videos/2013-Edelman-Finalist-Dell
[166] https://www.linkedin.com/posts/shouwei-tang-6b5a7932_finalists-selected-for-the-worlds-leading-activity-7153516760627822592-PWV0
[167] https://www.linkedin.com/posts/leiwangaimms_finalists-selected-for-the-worlds-leading-activity-7153516227355643904-yIvJ
[168] https://www.aldi-sued.de/de/newsroom/alle-pressemitteilungen/unternehmen/2024/guenstig-ins-neue-jahr-ganz-einfach-mit-dem-original-aldi-preis.html
[169] https://pubsonline.informs.org/doi/10.1287/inte.2024.0179
[170] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/Finalists-Selected-for-the-World-s-Leading-Operations-Research-and-Analytics-Award-2024-INFORMS-Franz-Edelman-Award-Competition-Elevates-Research-that-is-Saving-Lives-Saving-Money-and-Solving-Problems
[171] https://pubsonline.informs.org/toc/ijaa/55/1
[172] https://www.ebsco.com/articles/social-sciences-and-humanities/acf2cd29-2c4e-5069-91db-b4088410da5a/introduction-2024-franz-edelman-award-for-achievement-in-advanced-analytics-operations-research-and-management-science
[173] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Laureates2/Franz-Edelman-Laureates-U-Z
[174] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Laureates2/Franz-Edelman-Laureates-A-E
[175] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Academy/Franz-Edelman-Academy-Class-of-2024
[176] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Laureates2/Franz-Edelman-Lauresates-Class-of-2024
[177] https://cdn.aldi-sued.de/is/content/aldi/ALDI_SUED__Ernaehrungsreport_2024.pdf
[178] https://s7g10.scene7.com/is/content/aldi/20240213_Pressemitteilung_Preisreduzierungen.pdf
[179] https://www.theorsociety.com/ORS/ORS/Publications/Magazines/eNews-Months/February-24/Finalists-selected-for-INFORMS-Franz-Edelman-Award.aspx
[180] https://www.latterly.org/aldi-marketing-strategy/
[136] https://www.nextmv.io/category/customer-story
[137] https://www.nextmv.io/author/haley-eshagh
[138] https://www.nextmv.io/blog/optimizing-routes-for-student-pickup-and-dropoff-with-hopskipdrive-and-nextmv
[139] https://www.nextmv.io/
[140] https://www.nextmv.io/blog/gobolt-delivering-on-third-party-logistics-with-a-sustainable-mindset
[141] https://www.nextmv.io/blog?05173aab_page=3
[142] https://www.nextmv.io/blog/oico-streamlining-construction-material-delivery-and-transportation
[143] https://www.nextmv.io/blog?05173aab_page=1&730e0d6d_page=9
[144] https://www.nextmv.io/blog?05173aab_page=6&730e0d6d_page=2
[145] https://www.nextmv.io/category/feature
[146] https://www.nextmv.io/category/announcement?3966f067_page
[147] https://www.nextmv.io/blog/a-2022-look-back-and-2023-preview
[148] https://www.nextmv.io/blog/milk-moovement-digitizing-and-optimizing-raw-milk-delivery
[149] https://www.nextmv.io/blog/model-and-solve-a-custom-vrp-using-software-paradigms-with-a-food-retailer-example
[150] https://www.nextmv.io/author/carolyn-mooney
[151] https://www.fico.com/blogs/pepsico-uses-fico-optimization-orchestrate-daily-production-align-staffing-and-accelerate-new-ideas
[152] https://www.fico.com/blogs/linear-and-mixed-integer-linear-programming-software-guide-its-applications-benefits-and-business-impact
[153] https://www.fico.com/en/industries/manufacturing
[154] https://www.fico.com/blogs/blogs/experience-faster-mixed-integer-programming-optimization-with-xpress
[155] https://www.fico.com/en/customers
[156] https://www.fico.com/en/platform/optimization
[157] https://www.fico.com/es/latest-thinking/case-study/nestle-usa-applies-optimization-models-save
[158] https://www.fico.com/blogs/author/fico
[159] https://www.fico.com/blogs/guide-mathematical-optimization-what-why-and-how
[160] https://www.fico.com/fico-xpress-optimization/docs/dms2018-02/examples/bcl/C/GUID-268090C2-F7B5-3112-8F9E-2C0B44D0CCF1.html
[161] https://www.fico.com/fico-xpress-optimization/docs/latest/dmp/GUID-733E9136-FC32-3605-9E8E-9F2DB879A905.html
[162] https://www.fico.com/en/newsroom/fico-platform-produced-significant-return-investment-businesses-according-new-total-economic-impact-study
[163] https://www.fico.com/en/latest-thinking/article/how-financial-services-leaders-are-using-enterprise-intelligence-optimise-efficiency-ratios
[164] https://www.fico.com/blogs/could-optimization-help-break-supply-chain-gridlocks
[165] https://investors.fico.com/stock-information
[196] https://www.fico.com/blogs/relieving-call-center
[197] https://www.nice.com/resources/vera-bradley-embraces-digital-first-omnichannel-with-nice-cxone
[198] https://www.cisco.com/c/dam/en/us/products/collateral/contact-center/tei-study-cisco-webex-contact-center.pdf
[199] https://www.verint.com/workforce-management-software-wfm-solutions/forecasting-and-scheduling/
[200] https://www.verint.com/guides/workforce-engagement-management/
[201] https://www.zs.com/insights/contact-center-operations-through-ai-and-ml
[202] https://wjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-1668.pdf
[203] https://www.constellationr.com/case-study/2024/prasanna-chand
[204] https://www.verint.com/ja/case-studies/total-economic-impact/
[205] https://www.verint.com/case-studies/leading-healthcare-provider-cuts-costs-by-185k-every-3-months-with-smarter-wfm/
[206] https://www.linkedin.com/posts/1paulfriedman_our-partner-verint-has-developed-ai-powered-activity-7457802675645018112-mB0x
[207] https://www.verint.com/Assets/resources/resource-types/case-study/state-social-services-agency-case-study.pdf
[208] https://www.gurobi.com/resources/faq/gurobi-optimization-example-faq-practical-models-and-results
[209] https://www.linkedin.com/in/bhath
[210] https://www.gurobi.com/resources/prescriptive-analytics-examples-with-optimization-and-gurobi/
[211] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/INFORMS-Names-Six-Finalists-for-the-2026-Franz-Edelman-Award-the-World-s-Leading-Honor-in-Analytics-Operations-Research-and-Management-Science
[212] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/INFORMS-R-Awards-UPS-its-2016-Edelman-Prize-The-leading-award-in-Analytics-and-Operations-Research
[213] https://resoundinglyhuman.com/episodes/from-kibble-to-clicks-chewys-path-to-the-edelman-award-competition/
[214] https://www.informit.com/articles/article.aspx?p=2992600&seqNum=6
[215] https://www.globenewswire.com/news-release/2016/04/12/828097/30428/en/ups-wins-2016-informs-franz-edelman-award-for-changing-the-future-of-package-delivery.html
[216] https://www.odbms.org/blog/2017/08/big-data-at-ups-interview-with-jack-levis/
[217] https://www.informs.org/Impact/O.R.-Analytics-Success-Stories/Optimizing-Delivery-Routes
[218] https://www.informs.org/Resource-Center/Video-Library/Edelman-Competition-Videos/2016-Edelman-Competition-Videos/2016-Franz-Edelman-Award-Winner-UPS
[219] https://www.ebsco.com/articles/social-sciences-and-humanities/5083e0bb-ebd7-57e4-b901-2d0c497017ba/introduction-2025-franz-edelman-award-for-achievement-in-advanced-analytics-operations-research-and-management-science/
[220] https://www.informs.org/Recognizing-Excellence/Award-Recipients/UPS-2016-Edelman
[221] https://www.informs.org/Impact/O.R.-Analytics-Success-Stories/Success-Stories-Promos/Success-Stories-Edelman/UPS
[222] https://pubsonline.informs.org/do/10.1287/orms.2016.03.10/full/
[223] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/World-s-best-analytics-teams-selected-for-2016-INFORMS-Franz-Edelman-Award-competition
[224] https://resoundinglyhuman.com/episodes/2025-franz-edelman-award-finalist-wm/
[225] https://www.rivo.io/blog/chewys-autoship-retention-strategy
[181] https://www.gurobi.com/solutions/industries/industrial-automation-machinery
[182] https://www.gurobi.com/wp-content/uploads/Report-2211-Forrester-TEI.pdf
[183] https://www.gurobi.com/resources/case-studies/cosentino-optimizing-sales-routes-and-production-lines-for-enhanced-efficiency
[184] https://www.gurobi.com/wp-content/uploads/2022/08/CaseStudy-2018Dec-Yutong_Eng.pdf?x39087
[185] https://www.gurobi.com/resources/case-studies/yutong-bus-production-planning
[186] https://www.gurobi.com/case_studies/pentair-water-solutions-production/
[187] https://www.gurobi.com/jp/case-studies
[188] https://www.gurobi.com/solutions/business-problems/scheduling
[189] https://www.gurobi.com/case_studies/yutong-bus-production-planning/
[190] https://www.gurobi.com/solutions/industries/semiconductor-hw-sw-it
[191] https://www.fico.com/es/latest-thinking/case-study/nestle-usa-applies-optimization-models-save
[192] https://www.gurobi.com/case_studies/kaneka-production-planning-optimization/
[193] https://www.gurobi.com/jp/case-studies/case019
[194] https://www.gurobi.com/resources/blog/optimization-with-linear-programming-examples-tips-and-use-cases
[195] https://www.gurobi.com/resources/faq/gurobi-mip-example-practical-mixed-integer-models-in-business
[238] https://www.gurobi.com/resources/case-studies/marketing-attribution-driving-smarter-media-investments
[239] https://pubsonline.informs.org/doi/10.1287/inte.2017.0927
[240] https://www.informs.org/Recognizing-Excellence/Award-Recipients/Holiday-Retirement
[241] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/INFORMS-awards-Holiday-Retirement-its-2017-Edelman-Award
[242] https://pubsonline.informs.org/do/10.1287/orms.2017.03.10/full/
[243] https://www.informs.org/Recognizing-Excellence/Award-Recipients/Shamim-Wu
[244] https://pubsonline.informs.org/doi/10.1287/inte.2017.0933
[245] https://www.gurobi.com/case_studies/veltys-optimizing-apparel-pricing-with-a-streamlined-sales-solution/
[246] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/2017-INFORMS-Franz-Edelman-Award-finalists-selected-from-leading-analytics-teams-around-the-world
[247] https://www.gurobi.com/resources/case-studies/blue-yonder-retail-pricing-decisions
[248] https://maxccohen.github.io/Promotions-Practice.pdf
[249] https://arxiv.science/abs/2011.03447
[250] https://arxiv.science/abs/2411.06028
[251] https://arxiv.science/abs/1804.06464
[252] https://www.gurobi.com/solutions/business-problems/workforce
[253] https://www.gurobi.com/case_studies/metallurgical-additives-producer-aimpoint/
[254] https://www.gurobi.com/solutions/industries/industrial-automation-machinery
[255] https://www.gurobi.com/solutions/industries/pulp-paper
[256] https://www.gurobi.com/solutions/industries/semiconductor-hw-sw-it
[257] https://www.gurobi.com/product/training
[258] https://www.nextmv.io/blog/matchback-systems-eliminating-historical-drayage-inefficiencies-for-imports-and-exports
[259] https://www.gurobi.com/wp-content/uploads/2022/08/CaseStudy-2022Jun-Delhivery_Eng.pdf?x58432
[260] https://docs.gurobi.com/projects/examples/en/current/examples/vb/multiscenario_vb.html
[261] https://www.nextmv.io/videos/order-fulfillment-and-carrier-selection-experiment-comparing-handling-costs
[262] https://www.gurobi.com/solutions/industries/supply-chain
[263] https://www.gurobi.com/resources/case-studies/zozo-research-optimizing-inventory-allocation-for-scalable-e-commerce-logistics
[264] https://www.gurobi.com/solutions/business-problems/supply-chain
[265] https://www.gurobi.com/resources/faq/distribution-optimization-with-gurobi-faq-for-supply-chain-leaders
[266] https://www.gurobi.com/resources/case-studies/leanlogistics-supply-chain-optimization
[267] https://docs.gurobi.com/projects/examples/en/current/examples/cs/multiscenario_cs.html
[226] https://endlesscommerce.com/playbook/warehouse-automation-roi-investment-framework/
[227] https://cognitops.com/warehouse-labor-costs-metrics-driving-expenses/
[228] https://cpcongroup.com/insights/article/warehouse-management-system-cost-guide/
[229] https://cognitops.com/roi-calculator/
[230] https://scg-mmh.s3.amazonaws.com/pdfs/kardexremstar_wp_calculating_true_cost_productivity_080317.pdf
[231] https://www.logiwa.com/blog/warehouse-management-system-for-maximum-roi
[232] https://camcode.com/blog/what-is-warehouse-optimization/
[233] https://scg-mmh.s3.amazonaws.com/pdfs/kardex_remstar_CalculatingTrueCostofProductivity_Final.pdf
[234] https://cognitops.com/6-river-systems-ocado-roi-gap/
[235] https://www.slideshare.net/slideshow/briggs-stratton-case-study-65026594/65026594
[236] https://pubsonline.informs.org/doi/10.1287/mnsc.2021.3990
[237] https://pubsonline.informs.org/doi/10.1287/inte.2021.1107
[279] https://pubsonline.informs.org/doi/10.1287/inte.2024.0183
[280] https://connect.informs.org/practice/events/past-webinars
[281] https://pubsonline.informs.org/doi/10.1287/inte.2021.1109
[282] https://meetings.informs.org/wordpress/analytics2024/tracks/
[283] https://pubsonline.informs.org/doi/10.1287/inte.2021.1107
[284] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Laureates2/Franz-Edelman-Laureates-A-E
[285] https://www.fico.com/es/latest-thinking/case-study/nestle-usa-applies-optimization-models-save
[286] https://pubsonline.informs.org/toc/ijaa/55/1
[287] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Laureates2/Franz-Edelman-Laureates-P-T
[288] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/Operations-Research-Enhances-Data-Driven-Ferry-Operations-Molslinjen-Awarded-the-2024-INFORMS-Edelman-Award
[289] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Laureates2/Franz-Edelman-Laureates-K-O
[290] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Laureates2/Franz-Edelman-Lauresates-Class-of-2024
[291] https://www.informs.org/Recognizing-Excellence/INFORMS-Prizes/Franz-Edelman-Award/Franz-Edelman-Academy/Franz-Edelman-Academy-Class-of-2024
[292] https://www.informs.org/Resource-Center/Video-Library/Edelman-Competition-Videos/2021-Edelman-Competition-Videos/2021-Edelman-Finalist-Lenovo
[293] https://pubsonline.informs.org/do/10.1287/0425c13c-4665-478b-8638-31e675ed2844/full/
[268] https://www.easymetrics.com/wp-content/uploads/2025/04/EM2025-7-Easy-Metrics-Case-Studies_CH-Robinson.pdf
[269] https://www.aimms.com/use-cases/
[270] https://www.datexcorp.com/csw-datex-endeavor-labs-case-study/
[271] https://simplerose.com/case-studies/
[272] https://www.e3s-conferences.org/articles/e3sconf/pdf/2023/63/e3sconf_icobar23_01060.pdf
[273] https://www.ryder.com/globalassets/media/documents/insights/case-studies/case-studies-case-study-conagra-brands-and-ryder-ada.pdf
[274] https://leverx.com/case-studies/warehouse-management-transformation
[275] https://datexcorp.com/csw-datex-endeavor-labs-case-study-2/
[276] https://www.loginextsolutions.com/resource/casestudy
[277] https://ctl.mit.edu/sites/default/files/documents/designing-a-labor-optimization-model-for-wesco-capstone.pdf
[278] https://www.fico.com/blogs/pepsico-uses-fico-optimization-orchestrate-daily-production-align-staffing-and-accelerate-new-ideas
[294] https://www.gurobi.com/resources/case-studies/marketing-attribution-driving-smarter-media-investments
[295] https://pubsonline.informs.org/doi/10.1287/inte.2024.0182
[296] https://pubsonline.informs.org/doi/10.1287/inte.2016.0881?mobileUi=0
[297] https://www.informs.org/Resource-Center/Video-Library/Edelman-Competition-Videos/2016-Edelman-Competition-Videos/2016-Edelman-Award-Finalist-360i
[298] https://dl.acm.org/doi/abs/10.1287/inte.2016.0879
[299] https://pubsonline.informs.org/toc/ijaa/55/1
[300] https://www.informs.org/Resource-Center/Video-Library/Edelman-Competition-Videos/2016-Edelman-Competition-Videos
[301] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/World-s-best-analytics-teams-selected-for-2016-INFORMS-Franz-Edelman-Award-competition
[302] https://www.gurobi.com/solutions/industries/advertising-and-marketing
[303] https://www.informs.org/News-Room/INFORMS-Releases/Awards-Releases/Finalists-Selected-for-the-World-s-Leading-Operations-Research-and-Analytics-Award-2024-INFORMS-Franz-Edelman-Award-Competition-Elevates-Research-that-is-Saving-Lives-Saving-Money-and-Solving-Problems
[304] https://www.gurobi.com/resources/case-studies/leanlogistics-supply-chain-optimization
[305] https://www.gurobi.com/company/newsroom/marketing-attribution-gurobis-partnership-boosts-roi-by-13
[306] https://www.gurobi.com/news/marketing-attribution-uses-gurobi-to-transform-global-media-optimization/
[307] https://www.gurobi.com/resources/case-studies/blue-yonder-retail-pricing-decisions
[308] https://www.gurobi.com/resources/case-studies/tata-steel-streamlining-steel-production
[324] https://engineering.atspotify.com/2023/11/how-we-automated-content-marketing-to-acquire-users-at-scale
[325] https://engineering.atspotify.com/2026/02/our-multi-agent-architecture-for-smarter-advertising
[326] https://engineering.atspotify.com/2026/2/our-multi-agent-architecture-for-smarter-advertising
[327] https://doordash.engineering/2021/10/12/doordash-2021-summer-intern-survey-post/
[328] https://engineering.atspotify.com/2022/7/what-it-took-to-scale-spotifys-marketing-efforts
[329] https://engineering.atspotify.com/2022/07/what-it-took-to-scale-spotifys-marketing-efforts
[330] https://engineering.atspotify.com/2026/3/inside-the-archive-2025-wrapped
[331] https://doordash.engineering/2020/10/09/using-display-modules-to-enable-rapid-experimentation/
[332] https://engineering.atspotify.com/2026/5/spotify-ads-api-claude-plugins
[333] https://engineering.atspotify.com/2020/2/spotify-unwrapped-how-we-brought-you-a-decade-of-data
[334] https://doordash.engineering/2020/06/29/doordashs-new-prediction-service/
[335] https://doordash.engineering/2023/02/15/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/
[336] https://engineering.atspotify.com/2023/10/exclude-from-your-taste-profile
[337] https://www.uber.com/blog/airport-expressmatch/
[338] https://www.uber.com/blog/simulated-marketplace/
[309] https://www.amazon.science/news-and-features/how-amazon-reworked-its-fulfillment-network-to-meet-customer-demand
[310] https://doordash.engineering/2021/10/12/doordash-2021-summer-intern-survey-post/
[311] https://doordash.engineering/2022/10/26/2022-doordash-summer-intern-projects-article-2/
[312] https://doordash.engineering/blog/page/4/
[313] https://doordash.engineering/2023/02/15/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/
[314] https://www.amazon.science/blog/maximizing-the-efficiency-of-amazons-own-delivery-networks
[315] https://doordash.engineering/2016/10/21/data-at-doordash-transparent-ubiquitous-and-still-just-getting-started/
[316] https://doordash.engineering/2021/02/02/building-a-more-reliable-checkout-service-with-kotlin/
[317] https://www.amazon.science/blog/navigating-uncertainty-in-amazons-middle-mile-network
[318] https://www.amazon.science/blog/using-hypergraphs-to-improve-product-retrieval
[319] https://www.amazon.science/latest-news/solving-some-of-the-largest-most-complex-operations-problems
[320] https://www.amazon.science/blog/optimizing-neural-networks-for-special-purpose-hardware
[321] https://www.amazon.science/blog/why-do-you-want-that-and-whos-it-for
[322] https://doordash.engineering/locations/new-york/
[323] https://www.amazon.science/tag/inventory-planning?0000017d-914a-d46b-a5ff-d34ea3500000-page=2&p=3

````
