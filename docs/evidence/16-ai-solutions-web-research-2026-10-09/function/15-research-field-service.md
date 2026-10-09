# 15 — perplexity_research — field service dispatch, routing, first-time-fix, parts

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** Documented machine learning deployments in field service operations with measured results: technician dispatch and scheduling optimization, route optimization for service fleets, first-time-fix rate prediction (parts and skill matching before dispatch), remote diagnosis / triage before truck roll, truck roll avoidance, service parts inventory positioning. Name vendors (e.g. Salesforce Field Service, ServiceTitan, IFS PSO, ServiceMax, Aquant, Optimal/ClickSoftware, Descartes, OptimoRoute, Workwave) and named customers with numbers like first-time-fix improvement, truck rolls avoided, jobs per technician per day, miles reduced. Also cover mid-market trades (HVAC, plumbing, pest control, home services).
- **Timestamp (UTC):** 2026-10-09T20:36:19Z

```
**The strongest named-customer evidence is for AI-assisted dispatch, routing and diagnosis—not for a separately measured first-time-fix prediction model.** The table distinguishes deployments described as using AI or machine learning (**AI/ML**) from route optimization (**optimization**) and live visual support (**remote video**). Results are customer-reported outcomes for the deployed solution, not isolated estimates of the ML component’s effect.

| Vendor | Named customer | Field-service use case and technology | Measured result |
|---|---|---|---|
| Salesforce Field Service | TOMRA Collection Australia | **AI-assisted scheduling** of recycling-machine technicians. | Technician response time fell **26%** after Enhanced Scheduling and Optimization was enabled; first-time-fix rate exceeded **99%**. No starting fix rate was given.[web:61] |
| Salesforce Service Cloud Visual Remote Assistant | ADT | **Remote video** troubleshooting and installation support before a home-service dispatch. | **1 million truck rolls avoided in the first year**. About **40%** of service appointments became virtual, and roughly **80%** of those were resolved without a truck.[web:90] |
| IFS Planning and Scheduling Optimization (PSO) | PHS Group | **AI/ML scheduling and routing** for UK hygiene-service technicians. | Average jobs per technician per day rose from **18.5 to more than 26**—reported as **40% higher productivity**; travel time fell **35%**, miles between visits fell from **6.5 to about 4.5**, and **95%** of visits were automatically scheduled.[web:45] |
| IFS PSO | Konica Minolta | **AI-driven scheduling** and dynamic replanning for **770 UK engineers**, including assignment when a fault cannot be resolved remotely. | Engineer productivity rose **20–25%**; closed incidents per technician rose **17%**; SLA attainment rose **21%**; **83.5%** of calls sent to PSO were scheduled automatically. Its goal of raising remote resolution above 50% is **not** a reported achieved result.[web:314] |
| IFS Cloud / PSO | TOMRA North America | **AI-enabled field-service platform** combining scheduling, service data and parts-fulfillment visibility. This is a separate reported operation from TOMRA Collection Australia above. | First-time-fix rate rose from **84% to 96–97%**; TOMRA reports a **27% overall operational-efficiency gain**. The case does not isolate the contribution of the AI component.[web:313] |
| ClickSoftware | Diebold | **AI-assisted technician–job matching and routing** for ATM service, using skills as well as location. | Daily jobs per technician increased **33.1%**; a separate account reports **300,000 fewer technician miles in a year**.[web:330][web:328] |
| ClickSoftware | EPM | **AI/ML-described predictive routing and schedule optimization** for a Colombian utility. | After optimization tuning, travel time fell **24%** and job response time fell **18%**.[web:384] |
| ClickSoftware | Anglian Water | **Optimization** of water-service engineer schedules and travel. | Average travel per job fell **24%**; service levels rose **33%**; backlog fell **95% in some process areas**.[web:342] |
| ClickSoftware ClickSchedule | Unisys | **Automated scheduling and street-level routing** of field-service calls. | Jobs completed per day improved **40%**; more than **90%** of next-day calls were automatically scheduled. The case does not establish a distinct ML effect.[web:380] |
| ServiceTitan Dispatch Pro | Any Hour Services | **AI-driven dispatch and routing** for electrical, plumbing, heating and air-conditioning work. | Drive time fell **30%** across its **50 technicians** during Dispatch Pro’s beta use; the customer also reported fewer reschedules, without quantifying them.[web:12] |
| ServiceTitan Dispatch Pro | Besser Garage Door | **AI-assisted technician assignment** using skills, job needs and routing. | Average ticket increased **30%** and sold-lead ratio **9%**. The **10% drive-time reduction** published alongside the story is an aggregate for other Dispatch Pro users, **not a Besser-specific result**.[web:5] |
| ServiceTitan Dispatch Pro | Above and Beyond Service Company | **AI-assisted dispatch** for an HVAC and plumbing fleet. | **One dispatcher supports 25 trucks**. Management estimated it would need **at least two additional dispatchers** without the product; that staffing comparison is an estimate, not a measured before-and-after saving.[web:295] |
| ServiceMax + Aquant | 3D Systems | **AI diagnosis and prediction** from service history: attempt remote resolution first, then identify likely parts before an on-site visit. | **39% fewer repeat visits** and **62% less parts usage**; truck rolls also declined, but no truck-roll percentage is published. Results are attributed to the **combined** deployment.[web:82] |
| ServiceMax / PTC Connected Field Service | McKinley Equipment | **Predictive failure alerts and parts-stock visibility** for warehouses and technician vehicles. | First-time-fix rate reached **90%**; service revenue rose **38% in the first year** of ServiceMax. The source gives no quantified inventory reduction or first-time-fix baseline.[web:4] |
| Aquant | Comfort Systems USA | **AI troubleshooting and triage knowledge** drawn from assets and technicians’ experience for mechanical, electrical and plumbing service. | First-time-fix rate increased **9%** and resolution costs fell **49%**. The source says *9%*, not nine percentage points.[web:3] |
| Aquant | Beckman Coulter | **AI-assisted diagnosis and remote-resolution support** for laboratory equipment. | Repair-return performance improved **22% over eight months** while case volume rose **7–9%** and resolution time declined. The case does not supply a truck-roll count.[web:210] |
| Aquant | Powerscreen | **AI-guided pre-visit diagnosis and parts identification**, intended to replace a diagnosis visit followed by a parts visit. | Reports **up to one hour saved per technician per day** and single-trip fixes in place of some repeat visits; it does **not** quantify the reduction in repeat-visit rate.[web:214] |
| SightCall | MacDermid Graphics Solutions | **Remote video** diagnosis and assistance for printer maintenance before dispatch. | Work orders requiring an on-site technician fell **20%** after several months.[web:222] |
| SightCall | iFit Health & Fitness | **Remote video** triage of home fitness-equipment repair calls and identification of replacement parts. | **80–90% of repair calls** were resolved remotely, an increase of **more than 20%**; the company reports savings of **up to 4,000 hours a week**. These are video-support outcomes, not a measured ML effect.[web:227] |
| SightCall | Fike | **Remote video** support for technicians and diagnosis before a necessary site visit. | Travel costs fell **90%** and customer response times fell **70%**; the source does not count truck rolls avoided.[web:226] |
| TechSee | Vodafone Group | **Remote visual assistance** to resolve telecom faults before technician dispatch. | Technician dispatch rate fell **10%**; first-contact resolution rose **five percentage points**. The reported deployment result is for visual assistance; the customer story describes the AI self-service assistant as a *potential subsequent deployment*.[web:356] |
| Descartes | Halfords Mobile Expert | **Dynamic appointment and route optimization** for a mobile tyre-fitting fleet. | Jobs per van per day increased **194%** and mileage fell **13%** across a fleet reported as **400+ vehicles**. The case describes scoring and optimization, not a separately measured ML effect.[web:153] |
| Descartes | Tyres on the Drive | **Dynamic appointment scheduling and routing** for mobile tyre-fitting technicians. | Jobs per route increased **9.9%**; average mileage between jobs also fell, without a published percentage.[web:159] |
| OptimoRoute | Gallagher Pools and Spas | **Route and schedule optimization** for pool installation and maintenance crews. | Fleet mileage fell **at least 8,000 miles per month**; planning became **twice as fast**.[web:199] |
| OptimoRoute | Clarke Customer Care | **Skills-matched scheduling and dynamic routing** for appliance installation and service. | Daily completed orders rose **10–15%**, described as approximately **20 additional jobs per day** or **one more per technician**. The reported **80% first-time-fix rate** is a level, not a measured improvement.[web:188] |
| OptimoRoute | Telgian | **Multi-constraint route planning** for fire and life-safety inspectors. | Monthly planning effort fell **82%**, from **312 to 56 person-hours**, while the operation handled substantially more orders. No separate ML contribution is established.[web:180] |
| OptimoRoute | J&S Landscape | **Optimized crew routing** for landscaping and pest-control work. | Crew travel time and fuel costs each fell **more than 15% in the first year**.[web:190] |
| WorkWave PestPac RouteOp | Atomic Pest Control | **Route optimization** for recurring pest-control visits. | Stops per technician per day increased from roughly **10 to 18–20**, reported as **80–100% more jobs per technician**.[web:124] |
| WorkWave PestPac RouteOp | Cowleys Pest Services | **Recurring-route planning** for a New Jersey pest-control business. | Reports **20–25 appointments per technician per day**, **6,400 jobs per month**, and **30–60 minutes of drive time saved per technician per day**; monthly route planning fell from weeks to about one business day.[web:120][web:266] |
| Baxter Planning BaxterPredict | Toshiba Global Commerce Solutions | **Predictive service-parts positioning** across technician stock, field inventory and forward stocking locations. | Field inventory fell **23%** while same-day parts fulfillment reached **98%**, up **seven percentage points**.[web:111] |
| Baxter Planning | Leidos | **Service-parts network planning** for airport-security equipment. | On-time parts fill rate improved **10%**; the published summary does not quantify first-time-fix or truck-roll effects.[web:111] |
| Baxter Planning | Palo Alto Networks | **Service-stock optimization** as the installed base expanded. | Inventory dollars per contract fell **50%** and service levels exceeded **99%**, despite **500% installed-base growth**. The cited outcome is for the planning solution and expertise together.[web:111] |
| ToolsGroup SO99+ | Aston Martin | **Machine-learning demand forecasting and safety-stock replenishment** for approximately **80,000 aftermarket spare-parts SKUs**. | Within two months, safety-stock value for the affected items fell **18%** while **first-time parts availability reached 97.1%**. Parts availability is **not** technician first-time-fix rate.[web:165] |
| Syncron Inventory | JCB | **Forecasting, replenishment and redistribution** of service parts across its dealer and warehouse network. | Parts customer-service level rose **7.4 percentage points**. The customer case does not isolate an ML-specific effect.[web:305] |
| Syncron Inventory | Al Masaood Automobiles | **Parts forecasting and replenishment** for automotive service centres and dealers. | National inventory fell **15%**, branch inventory **20%**, and emergency ordering **6.5%**.[web:298][web:303] |

**Evidence boundary:** IFS documents an actual *first-time-fix prediction* feature that scores a proposed visit using material availability, skill match, service history and other inputs. Its illustrated **79.42% score is an example prediction, not a measured customer result**. Accordingly, the first-time-fix gains above should not be presented as proof that a standalone pre-dispatch prediction model caused them. Likewise, SightCall and TechSee’s quantified remote-video results should not automatically be labelled ML results.[web:364][web:227][web:356]

Citations:
[30] https://ifs-p-001.sitecorecontenthub.cloud/api/public/content/ifs_pso_benchmarking_manufacturing.pdf-f7c747?v=4e8b8359
[31] https://blog.ifs.com/customer-interview-how-konica-minolta-plan-to-transform-field-service-management-with-ifs/
[32] https://blog.ifs.com/2023/04/customer-interview-how-konica-minolta-plan-to-transform-field-service-management-with-ifs/
[33] https://www.salesforce.com/blog/forrester-roi-field-service/?bc=OTH
[34] https://www.linkedin.com/posts/novera-solutions_salesforce-fieldservice-digitaltransformation-activity-7435314486313459712-tZKD
[35] https://marketplace.microsoft.com/en-us/product/saas/ifs.ifs_field_service_management
[36] https://noltic.com/stories/the-ultimate-guide-to-salesforce-field-service-lightning-fsl
[37] https://ifs-p-001.sitecorecontenthub.cloud/api/public/content/click_ebook_v2.pdf-8c25aa?v=cdd37868
[38] https://www.salesforce.com/au/blog/how-anz-trade-organisations-get-the-job-done-faster-with-field-service-tech/?bc=OTH
[39] https://www.ifs.com/-/media10/Project/IFS/IFS/Assets/IFS_Partner_Choice_for_CSPs_MobileTechCompanies_2023.pdf
[40] https://www.ifs.com/-/media10/project/ifs/ifs/assets/ifs_planning_and_scheduling_optimisation_wp_03_2023.pdf
[41] https://www.ifs.com/it/insights/assets/service-operations-real-time-precision
[42] https://www.ksolves.com/case-studies/salesforce/field-service-lightning-agentforce-service-implementation
[43] https://www.ifs.com/en/insights/assets/ai-powered-utility-planning-scheduling-optimization
[44] https://www.tcs.com/what-we-do/industries/communications-media-information-services/case-study/tdc-automates-100-percent-field-agent-dispatch
[1] https://www.servicetitan.com/features/pro/dispatch
[2] https://ptc-p-001.sitecorecontenthub.cloud/api/public/content/e536bf0654134e3b9819e5014de12838?v=31ca7860
[3] https://www.aquant.ai/customer-stories/comfort-systems
[4] https://www.ptc.com/en/case-studies/mckinley-becoming-proactive-service-partner
[5] https://www.servicetitan.com/blog/success-story-besser-garage-door-ai-powered-dispatching
[6] https://www.aquant.ai/solutions/increase-remote-resolutions
[7] https://www.ptc.com/en/case-studies/jf-petroleum-servicemax-field-service
[8] https://discover.aquant.ai/case-study-waters
[9] https://www.aquant.ai/solutions/customer-self-service
[10] https://www.casestudies.com/company/servicemax/case-study/global-implementation-of-lean-service-processes-delivers-increased-efficiencies-focus-on-high-performance
[11] https://www.aquant.ai/customer-stories/waters
[12] https://www.servicetitan.com/blog/success-story-alyssa-briggs
[13] https://help.servicetitan.com/docs/dispatch-pro-overview
[14] https://ptc-p-001.sitecorecontenthub.cloud/api/public/content/88fa16db33164c5fb03c814e1a955b99?v=03d450ff
[15] https://21176235.fs1.hubspotusercontent-na1.net/hubfs/21176235/Hologic%20-%20Case%20Study%203%2024%2025.pdf
[16] https://www.descartes.com/solutions/routing-mobile-and-telematics/customer-success
[17] https://www.descartes.com/solutions/routing-mobile-and-telematics/route-planning-optimization-and-dispatch
[18] https://engage.descartes.com/f407e4/home/propelling-the-customer-experience-to-new-heights-with-descartes-last-mile-delivery-technology
[19] https://www.descartes.com/resources/knowledge-center/optimizing-food-service-distribution-dynamic-route-planning-during
[20] https://engage.descartes.com/fleet-fundamentals
[21] https://www.descartes.com/node/16723
[22] https://www.descartes.com/resources/knowledge-center/how-us-foods-transformed-fleet-visibility
[23] https://www.descartes.com/resources/knowledge-center/customer-success-sanimax
[24] https://www.descartes.com/resources/knowledge-center/descartes-optimized-route-planning-software-provides-ideal-supply-real-time-visibility
[25] https://routinguk.descartes.com/customer-successes
[26] https://insights.workwave.com/industry/pest-control/will-your-pest-control-company-benefit-from-route-planning-software/
[27] https://www.casestudies.com/company/workwave
[28] https://optimoroute.com/business-type/pest-control/
[29] https://kanopylabs.com/blog/ai-for-pest-control-field-operations
[45] https://www.ifs.com/-/media10/project/ifs/ifs/assets/ifs_cs_phs_06-25.pdf
[46] https://www.ifs.com/en/insights/customer-stories/phs-group
[47] https://blog.ifs.com/2024/07/the-power-of-ai-in-workforce-management-phs-story/
[48] https://blog.ifs.com/the-power-of-ai-in-workforce-management-phs-story/
[49] https://www.e-ssinc.com/case-studies/ifs-field-service-operations-optimization
[50] https://www.linkedin.com/posts/cathiehall_the-power-of-ai-in-workforce-management-activity-7227670485436641280-nMCP
[51] https://www.ifs.com/it/insights/assets/service-operations-real-time-precision
[52] https://www.linkedin.com/posts/ifs_the-power-of-ai-in-workforce-management-activity-7216743063983902720-umBm
[53] https://www.ifs.com/tr/insights/assets/phs-recognize-power-ifsai
[54] https://www.linkedin.com/posts/linkedin-hgts_hoist-ifs-tipoftheweek-activity-7349423785302769667-GAXj
[55] https://www.linkedin.com/posts/isintegrasi_eam-predictivemaintenance-ai-activity-7363427772452491265-_3JO
[56] https://www.linkedin.com/posts/provglobal_ifsupgrade-manufacturingmastery-ifscloud-activity-7288271421707878401-aLi6
[57] https://www.linkedin.com/posts/krystaldelaney_fsm-servicemanagement-innovation-activity-7264364277833084929-iulK
[58] https://ifs-p-001.sitecorecontenthub.cloud/api/public/content/click_ebook_v2.pdf-8c25aa?v=cdd37868
[59] https://www.itqlick.com/compare/clicksoftware/service-cloud-field-service
[60] https://www.salesforce.com/au/blog/how-anz-trade-organisations-get-the-job-done-faster-with-field-service-tech/?bc=OTH
[61] https://www.salesforce.com/blog/tomra-field-service-management/?bc=OTH
[62] https://www.linkedin.com/posts/mikeadiamond_expertsofexperience-tomra-arcturious-activity-7369657202313211906-SC_K
[63] https://www.ksolves.com/case-studies/salesforce/field-service-lightning-agentforce-service-implementation
[64] https://www.linkedin.com/posts/vibrantapex_how-one-manufacturer-cut-service-resolution-activity-7370064494326267904-Inao
[65] https://www.salesforce.com/service/field-service-management/asset-management/?bc=OTH
[66] https://podcasts.apple.com/nz/podcast/experts-of-experience/id1713550839
[67] https://www.salesforce.com/service/field-service-management/?bc=OTH
[68] https://www.hyperlinkinfosystem.com/case-study/salesforce-field-service-work-order-optimization
[69] https://www.salesforce.com/eu/blog/3-field-service-mistakes-you-can-fix-first-time/?bc=OTH
[70] https://www.salesforce.com/blog/reduce-operating-costs-field-service/?bc=OTH
[71] https://noltic.com/stories/the-ultimate-guide-to-salesforce-field-service-lightning-fsl
[72] https://www.linkedin.com/posts/alliumit_salesforce-allium-fieldservice-activity-7468678058388934656-aCh9
[73] https://tei.forrester.com/go/salesforce/agentforcefieldservice/
[74] https://www.arcturious.com/tomra-case-study/
[75] https://sightcall.com/solutions/field-service/
[76] https://techsee.com/
[77] https://appexchange.salesforce.com/image_host/10670862-91bb-4fda-8384-b64136f953b3.pdf
[78] https://get.sightcall.com/field-service-demo
[79] https://www.aquant.ai/solutions/increase-remote-resolutions
[80] https://sightcall.nyc3.cdn.digitaloceanspaces.com/images/FSM-Report.pdf
[81] https://www.prnewswire.com/il/news-releases/techsee-launches-the-first-visual-ai-platform-to-extend-network-visibility-across-the-entire-home-302700722.html
[82] https://www.ptc.com/en/case-studies/3d-systems-ai-predictive-customer-service
[83] https://www.hostcomm.co.uk/blogs/remote-visual-assistance-software-field-service-onsight-rvx-vs-sightcall-teamviewer-ibm-2025-comparison
[84] https://sightcall.com/blog/augmented-reality-in-power-and-utilities/
[85] https://codestra.ai/en/blog/improve-first-time-fix-rate
[86] https://blog.midstage.org/p/094-techsee-if-i-can-see-it-i-can-solve-it
[87] https://techsee.com/blog/ai-risks-in-contact-center-agent-assist/
[88] https://techsee.com/telecom_old-2/
[89] https://www.newswire.ca/news-releases/techsee-launches-first-scalable-ar-assistant-platform-powered-by-computer-vision-ai-835063144.html
[90] https://www.salesforce.com/resources/customer-stories/adt-reduced-customer-service-cost/?bc=OTH
[91] https://www.salesforce.com/service/visual-remote-assistant/?bc=OTH
[92] https://www.salesforce.com/eu/engineering-construction-real-estate/residential-commercial-services-software/?bc=OTH
[93] https://www.hostcomm.co.uk/blogs/remote-visual-assistance-software-field-service-onsight-rvx-vs-sightcall-teamviewer-ibm-2025-comparison
[94] https://blitzz.co/blog/remote-visual-assistance-ultimate-guide-2026
[95] https://sightcall.com/solutions/field-service/
[96] https://sightcall.com/blog/augmented-reality-in-power-and-utilities/
[97] https://sightcall.com/case-studies/
[98] https://diginomica.com/salesforce-enable-field-technicians-customer-experience
[99] https://newsroom.adt.com/safe-stories/how-adts-remote-services-are-empowering-customers-and-supporting-smarter-homes
[100] https://sightcall.com/blog/how-to-reduce-truck-rolls/
[101] https://sightcall.nyc3.cdn.digitaloceanspaces.com/images/FSM-Report.pdf
[102] https://sightcall.com/blog/remote-support-software-what-it-is-and-how-it-is-enhanced-by-augmented-reality/
[103] https://www.cuspera.com/products/sightcall-x-14690/customer-story
[104] https://www.featuredcustomers.com/vendor/sightcall/case-studies
[105] https://www.marketopia.org/blog/syncron-company/
[106] https://www.fieldproxy.ai/resources/blog/case-study-appliance-repair-chain-achieves-98-first-time-fix-rate-d1-45
[107] https://www.casestudies.com/company/syncron/case-study/parts-availability-helps-northland-jcb-gain-repeat-business-with-support-of-syncron-solutions
[108] https://www.casestudies.com/company/syncron/case-study/jcb-boosts-service-parts-availability-and-customer-service-levels-by-74-with-syncron
[109] https://www.delos.so/blog/ai-powered-field-service-management-first-time-fix-dispatch
[110] https://www.fieldproxy.ai/resources/blog/case-study-appliance-repair-chain-increases-first-time-fix-rate-to-92-d1-45
[111] https://baxterplanning.com/resources/customer-stories/
[112] https://46597540.fs1.hubspotusercontent-na1.net/hubfs/46597540/Syncron_2025/Document/SYN_CS-003-Syncron-Customer-Case-Studies_Elit.pdf
[113] https://www.casestudies.com/company/syncron
[114] https://www.featuredcustomers.com/vendor/syncron/case-studies
[115] https://www.syncron.com/hubfs/Syncron_2025/Document/Syncron-Award-Write-Up97.pdf
[116] https://www.fieldproxy.ai/blog/case-study-appliance-repair-chain-achieves-98-first-time-fix-rate-d1-45
[117] https://www.linkedin.com/posts/vibrantapex_how-one-manufacturer-cut-service-resolution-activity-7370064494326267904-Inao
[118] https://bestpractice.ai/ai-use-cases/functions/supply-chain/case-studies
[119] https://www.fieldproxy.ai/blog/case-study-appliance-repair-chain-increases-first-time-fix-rate-to-92-d1-45
[120] https://insights.workwave.com/resources/cowleys-case-study/
[121] https://www.casestudies.com/company/workwave
[122] https://optimoroute.com/business-type/pest-control/
[123] https://demg.ai/blog/ai-route-optimization-home-service-fleets-cut-drive-time/
[124] https://www.pestpac.com/resources/atomic-pest-control-case-study
[125] https://optimoroute.com/business-type/hvac-services/
[126] https://cdn.featuredcustomers.com/customer_success_report/FC-CUSTOMER-SUCCESS-REPORT-SUMMER-2020-FIELD-SERVICE-MANAGEMENT.pdf
[127] https://www.cuspera.com/products/service-by-workwave-x-8143/customer-story
[128] https://www.pestpac.com/blog/best-ai-powered-pest-control-software-2026
[129] https://optimoroute.com/business-type/installation-maintenance/
[130] https://insights.workwave.com/industry/pest-control/will-your-pest-control-company-benefit-from-route-planning-software/
[131] https://marketplace.workwave.com/routeop/
[132] https://www.featuredcustomers.com/vendor/optimoroute
[133] https://myquoteiq.com/best-route-optimization-software-hvac-2026/
[134] https://buildops.com/resources/field-service-routing
[150] https://www.linkedin.com/posts/descartes-systems-uk-ltd_routeplanning-fieldservice-customerexperience-activity-7491100776807776256-7Mqc
[151] https://www.descartes.com/solutions/routing-mobile-and-telematics/route-planning-optimization-and-dispatch
[152] https://www.descartes.com/node/16723
[153] https://routinguk.descartes.com/customer-successes/halfords-mobile-expert
[154] https://www.descartes.com/solutions/routing-mobile-and-telematics/route-optimization
[155] https://www.descartes.com/solutions/routing-mobile-and-telematics/customer-success
[156] https://routinguk.descartes.com/media/transfer/doc/cs_agediss_case_study.pdf
[157] https://www.descartes.com/node/15065
[158] https://engage.descartes.com/fleet-fundamentals
[159] https://routinguk.descartes.com/customer-successes/tyres-on-the-drive-dynamic-appointment-scheduling-and-routing
[160] https://engage.descartes.com/fleet-expert-insights/items/strategic-route-planning-a-blueprint-for-profitability
[161] https://www.descartes.com/resources/knowledge-center/wimsatt-boosts-distribution-efficiency-descartes-dynamic-routing-software
[162] https://www.halfords.com/motoring/mobile-fitting-services/
[163] https://www.linkedin.com/posts/descartes-systems-uk-ltd_descartes-arrowxlbyjphome-routeoptimisation-activity-7493260001529057280-pLvP
[164] https://www.descartes.com/resources/news/halfords-implements-descartes-last-mile-delivery-solution-enable-dynamic-delivery
[180] https://optimoroute.com/optimization-inspection-services/
[181] https://www.casestudies.com/company/optimoroute
[182] https://optimoroute.com/business-type/installation-maintenance/
[183] https://optimoroute.com/business-type/inspection-services/
[184] https://optimoroute.com/field-service-management/
[185] https://optimoroute.com/category/case-studies/?page=3
[186] https://optimoroute.com/pl/optymalizacja-uslug-inspekcyjnych/
[187] https://optimoroute.com/route-management/
[188] https://optimoroute.com/route-optimization-installation-maintenance/
[189] https://optimoroute.com/routing-scheduling/
[190] https://optimoroute.com/pest-control-landscaping/
[191] https://www.getapp.ca/software/107281/optimoroute
[192] https://www.fieldroutes.com/blog/pest-control-routing-apps
[193] https://optimoroute.com/the-basics-of-field-service-route-scheduling-software/
[194] https://wrenchstack.com/tools/optimoroute/
[135] https://www.servicepower.com/clicksoftware
[136] https://www.cioapplications.com/clicksoftware
[137] https://www.scribd.com/document/206031610/Mobile-WorkForceManagement-Utilities
[138] https://www.slideshare.net/ClickSoftware/customer-service-33029819
[139] https://www.casestudies.com/company/atos/case-study/atos-helps-a-us-energy-and-utility-company-to-recharge-its-workforce-management
[140] https://www.aquilliance.de/en/case-study-en/beeline-case-study-2/
[141] https://community.sap.com/t5/technology-blog-posts-by-members/integrated-workforce-management-workforce-scheduling-and-optimisation-ws/ba-p/13179963
[142] https://www.slideshare.net/slideshow/ai-33029815/33029815
[143] https://www.technologydecisions.com.au/content/cloud-and-virtualisation/white-paper/taking-the-frustration-out-of-field-work-1018346356/download
[144] https://www.capterra.com/resources/ai-in-field-service-management/
[145] https://pt.slideshare.net/slideshow/clicksoftware-case-studyohiodeptcommercenew-v2/34439039
[146] https://www.ifs.com/-/media10/Project/IFS/IFS/Assets/IFS_Partner_Choice_for_CSPs_MobileTechCompanies_2023.pdf
[147] https://www.linkedin.com/pulse/top-cloud-field-service-management-companies-how-compare-yxjof
[148] https://www.forcemanagement.com/click-case-study
[149] https://m.digitalisationworld.com/blogs/55518/your-ai-questions-answered
[165] https://www.toolsgroup.com/customer-stories/aston-martin/
[166] https://baxterplanning.com/resources/customer-stories/
[167] https://www.casestudies.com/company/syncron/case-study/parts-availability-helps-northland-jcb-gain-repeat-business-with-support-of-syncron-solutions
[168] https://www.casestudies.com/company/toolsgroup/case-study/driving-away-with-improved-service-levels-and-reduced-inventory
[169] https://www.toolsgroup.com/industries/aftermarket/
[170] https://www.casestudies.com/company/syncron/case-study/jcb-boosts-service-parts-availability-and-customer-service-levels-by-74-with-syncron
[171] https://www.casestudies.com/company/syncron
[172] https://www.casestudies.com/company/toolsgroup/case-study/aston-martin-reduces-safety-stock-18-and-lifts-fta-to-971-with-toolsgroup
[173] https://www.toolsgroup.com/wp-content/uploads/2025/02/2025_Industrial-Sales-Plays_Wholesale-Distribution_Condensed.pdf
[174] https://bestpractice.ai/ai-use-cases/functions/supply-chain/case-studies
[175] https://decisionbrain.com/8-best-aftermarket-parts-predictive-analytics-and-dealer-replenishment-solutions-in-2026/
[176] https://www.slideshare.net/slideshow/syncron-overview-brochure/71212824
[177] https://www.toolsgroup.com/wp-content/uploads/2020/08/CS_EN_AstonMartin.pdf
[178] https://www.syncron.com/hubfs/2026%20Syncron%20Parts%20Planning%20Brochure.pdf
[179] https://www.toolsgroup.com/news/toolsgroup-helps-manufacturers-build-winning-aftermarket-parts-supply-chains/
[195] https://optimoroute.com/de/planung-und-terminierung-der-poolwartung/
[196] https://optimoroute.com/pool-maintenance-schedule/
[197] https://optimoroute.com/planned-maintenance/
[198] https://optimoroute.com/de/pool-wartungsplan/
[199] https://optimoroute.com/pool-maintenance-planning-scheduling/
[200] https://optimoroute.com/fr/planification-et-programmation-de-lentretien-des-piscines/
[201] https://optimoroute.com/starting-a-pool-cleaning-business/
[202] https://optimoroute.com/route-management/
[203] https://optimoroute.com/field-sales/
[204] https://optimoroute.com/what-is-route-optimization/
[205] https://www.aquant.ai/solutions/increase-remote-resolutions
[206] https://www.aquant.ai/solutions/drive-service-revenue
[207] https://www.aquant.ai/platform
[208] https://www.aquant.ai/customer-stories/terex
[209] https://www.aquant.ai/solutions/scale-service-teams
[210] https://www.aquant.ai/customer-stories/beckman-coulter
[211] https://www.aquant.ai/customer-stories/makino
[212] https://www.aquant.ai/
[213] https://www.aquant.ai/industries/manufacturing-plants
[214] https://www.aquant.ai/customer-stories/powerscreen
[215] https://clpmag.com/lab-management/lab-equipment-service-navigating-challenges-and-seizing-opportunities/
[216] https://www.aquant.ai/resources/customer-stories
[217] https://www.trimedx.com/resource/how-ai-is-powering-smarter-medical-equipment-service
[218] https://www.aquant.ai/solutions/field-technicians
[219] https://superkind.ai/blog/ai-mechanical-engineering
[235] https://www.linkedin.com/posts/hemanthrajg_servicenow-fsm-fieldservicemanagement-activity-7493494734691393536-xptp
[236] https://www.wisdominterface.com/wp-content/uploads/2024/11/2024-SER-Service-Centric-ERP-Final.pdf
[237] https://ifs-p-001.sitecorecontenthub.cloud/api/public/content/ifs_pso_benchmarking_telco_4_2025.pdf-1802f5?v=fcc7ed8d
[238] https://www.servicenow.com/docs/r/field-service-management/machine-learning-fsm.html
[239] https://www.servicenow.com/products/field-service-management.html
[240] https://ifs-p-001.sitecorecontenthub.cloud/api/public/content/ifs_pso_benchmarking_manufacturing.pdf-f7c747?v=4e8b8359
[241] https://www.servicenow.com/ai/use-cases/proactively-manage-parts.html
[242] https://www.servicenow.com/workflow/news/users-rank-servicenow-crm-g2-leader.html
[243] https://www.g2.com/products/servicenow-field-service-management/reviews/servicenow-field-service-management-review-13137590
[244] https://marketplace.microsoft.com/en-us/product/saas/ifs.ifs_field_service_management?tab=overview
[245] https://blogs.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/data-sheet/ds-field-service-management.pdf
[246] https://newsroom.servicenow.com/press-releases/details/2021/ServiceNow-Innovates-Field-Service-Management-to-Drive-Exceptional-Experiences-05-11-2021-12-00-AM/default.aspx
[247] https://servicenow.digitall.com/field-service-management
[248] https://www.servicenow.com/products/field-service-management/what-is-field-technician.html
[249] https://www.ifs.com/en/insights/customer-stories/tomra-north-america
[220] https://sightcall.com/blog/how-to-reduce-truck-rolls/
[221] https://sightcall.com/blog/calculating-roi-for-visual-assistance-strategies-from-industry-leaders/
[222] https://sightcall.com/case-studies/macdermid-graphics-solutions/
[223] https://sightcall.com/blog/augmented-reality-for-manufacturing/
[224] https://sightcall.com/blog/remote-support-software-what-it-is-and-how-it-is-enhanced-by-augmented-reality/
[225] https://sightcall.com/wp-content/uploads/SightCall_Aging_Workforce.pdf
[226] https://sightcall.com/case-studies/fike/
[227] https://sightcall.com/case-studies/icon-health-and-fitness/
[228] https://sightcall.com/assets/uploads/images/Sightcall-for-Healthcare_Global.pdf
[229] https://sightcall.com/case-studies/
[230] https://sightcall.com/wp-content/uploads/Voice_of_the_Field_Service_Engineer___ServiceCouncil.pdf
[231] https://sightcall.com/blog/augmented-reality-in-power-and-utilities/
[232] https://sightcall.com/case-study-keyword/field-service/
[233] https://get.sightcall.com/customer-service-demo
[234] https://sightcall.com/case-study-keyword/customer-service/
[265] https://www.pestpac.com/roi-calculator/
[266] https://www.pestpac.com/blog/will-your-pest-control-company-benefit-from-route-planning-software
[267] https://www.pestpac.com/blog/best-ai-powered-pest-control-software-2026
[268] https://www.pestpac.com/resources/cowleys-case-study
[269] https://www.cowleys.com/our-work.html
[270] https://insights.workwave.com/shared_tags/technology/page/2/
[271] https://www.cowleys.com/
[272] https://www.cowleys.com/about-us/pest-control-services.html
[273] https://www.cowleys.com/residential-service-plans.html
[274] https://www.cowleys.com/allentown-nj.html
[275] https://www.cowleys.com/pests-we-treat.html
[276] https://www.cowleys.com/terms-of-use.html
[277] https://www.cowleys.com/residential-service-plans/platinum-service-plan.html
[278] https://www.cowleys.com/about-us/qa.html
[279] https://www.cowleys.com/south-amboy-nj.html
[280] https://www.servicetitan.com/features/pro/dispatch
[281] https://www.servicetitan.com/features/pro
[282] https://www.servicetitan.com/blog/success-story-alyssa-briggs
[283] https://help.servicetitan.com/v1/docs/dispatch-pro-overview
[284] https://help.servicetitan.com/docs/dispatch-pro-overview
[285] https://www.servicetitan.com/blog/success-story-besser-garage-door-ai-powered-dispatching
[286] https://www.servicetitan.com/blog/webinar-recap-turbocharge-your-average-ticket-dispatch-pro
[287] https://help.servicetitan.com/roofing/docs/dispatch-pro-home
[288] https://www.servicetitan.com/features/pro/dispatch-neighborly
[289] https://help.servicetitan.com/docs/dispatch-pro
[290] https://help.servicetitan.com/docs/dispatch-pro-settings-reference-guide-in-servicetitan-max
[291] https://www.servicetitan.com/blog/success-story-john-henrys
[292] https://www.servicetitan.com/blog/success-story-rainforest-plumbing-air-dispatch-pro
[293] https://www.servicetitan.com/blog/success-story-above-and-beyond
[294] https://www.servicetitan.com/blog/webinar-recap-dispatch-pro
[250] https://help.salesforce.com/s/articleView?id=service.pfs_optimization.htm&language=en_US&type=5
[251] https://help.salesforce.com/s/articleView?id=service.fs_key_indicators.htm&language=en_US&type=5
[252] https://www.linkedin.com/posts/annieweinberger_winning-is-great-being-validated-by-our-activity-7429930712805584896-MteR
[253] https://help.salesforce.com/s/articleView?id=service.pfs_set_up_jobs_enhanced.htm&language=en_US&type=5
[254] https://help.salesforce.com/s/articleView?id=service.pfs_scheduling.htm&language=en_US&type=5
[255] https://www.salesforce.com/blog/small-business/field-service-features-for-smbs/?bc=OTH
[256] https://help.salesforce.com/s/articleView?id=service.pfs_get_started_sched_auto.htm&language=en_US&type=5
[257] https://www.salesforce.com/news/topics/customer-service-and-support/page/6/?bc=OTH
[258] https://help.salesforce.com/s/articleView?id=service.pfs_scheduling_services.htm&language=en_US&type=5
[259] https://www.salesforce.com/service/field-service-management/?bc=OTH
[260] https://help.salesforce.com/s/articleView?id=pfs_schedule_policy.htm&language=en_US&type=5
[261] https://help.salesforce.com/s/articleView?id=release-notes.rn_fieldservice_resource.htm&language=en_US&release=246&type=5
[262] https://www.salesforce.com/blog/category/field-service-2/?bc=OTH
[263] https://investor.salesforce.com/news/news-details/2025/Salesforce-Delivers-Record-Third-Quarter-Fiscal-2026-Results-Driven-by-Agentforce--Data-360/default.aspx
[264] https://investor.salesforce.com/news/news-details/2026/Salesforce-Delivers-Record-Fourth-Quarter-Fiscal-2026-Results/default.aspx
[328] https://www.cioapplications.com/clicksoftware
[329] https://www.slideshare.net/slideshow/ai-33029815/33029815
[330] https://www.capterra.com/resources/ai-in-field-service-management/
[331] https://www.slideshare.net/ClickSoftware/customer-service-33029819
[332] http://media.corporate-ir.net/media_files/irol/12/122672/07CKSWADCOOMay242011pdf.pdf
[333] https://www.itqlick.com/clicksoftware
[334] https://image-us.samsung.com/SamsungUS/home/resources/business-transformation-for-the-next-mobile-economy/Samsung_BusinessTransformationForTheNextMobileEconomy_10112018.pdf?cid=com-btb-sky-blg-us-other-na-100219-112001-na-na-na
[335] https://community.clicksoftware.com/s/
[336] https://www.linkedin.com/company/clicksoftware
[337] https://pt.slideshare.net/slideshow/clicksoftware-case-studyohiodeptcommercenew-v2/34439039
[338] https://pt.slideshare.net/slideshow/click-software-casestudy3dieboldv2/33075152
[339] https://www.partnerbase.com/clicksoftware
[340] https://www.iqpc.com/media/1004283/78196.pdf
[341] http://librestream.com/media/Samsung-Diebod-Case-Study.pdf
[342] https://pt.slideshare.net/slideshow/clicksoftware-case-study-anglian-water/33331110
[313] https://www.ifs.com/en/insights/customer-stories/tomra-north-america
[314] https://www.ifs.com/en/insights/customer-stories/konica-minolta
[315] https://www.ifs.com/nl/customer-success/customer-stories-directory/konica-minolta-customer-story
[316] https://www.ifs.com/-/media10/project/ifs/ifs/files/legal/policies/ifs-support-policy-oct-2025.pdf
[317] https://www.ifs.com/news/cloud/rolls-royce-chooses-ifs-cloud-industrial-ai
[318] https://community.ifs.com/ifs-solutions-1/index82.html
[319] https://www.ifs.com/en/insights/news/rolls-royce-chooses-ifs-cloud-industrial-ai
[320] https://www.ifs.com/-/media10/project/ifs/ifs/assets/ifs_cs_konica_03-25.pdf
[321] https://www.ifs.com/-/media10/project/ifs/ifs/assets/ifs_wp_eam_v_fsm_telco_guide_august_2023.pdf
[322] https://www.ifs.com/en/industries/service/property-services
[323] https://www.ifs.com/en/insights
[324] https://www.ifs.com/en/insights/customer-stories/global-medtech-manufacturer
[325] https://community.ifs.com/ifs-service-collaborative-396/service-collaborative-june-2025-r-d-roadmap-q-a-59688
[326] https://www.ifs.com/-/media10/project/ifs/ifs/assets/industrial-ai---instant--mission-critical-decisioning-in-service.pdf
[327] https://www.ifs.com/-/media10/project/ifs/ifs/assets/ifs_fs_servicemanagementinifscloud-_04_2022_.pdf
[298] https://www.syncron.com/hubfs/Syncron_2025/Document/Syncron-Customer-Story-Al-Masaood-English.pdf
[299] https://www.syncron.com/industries/dealers-distributors
[300] https://www.syncron.com/hubfs/2026%20Syncron%20Parts%20Planning%20Brochure.pdf
[301] http://www.syncron.com/wp-content/uploads/2018/02/SYN_CS-003-Syncron-Customer-Case-Studies_Elit.pdf
[302] https://www.syncron.com/resources/elit-group-improves-branch-inventory-management-with-syncron-inventory
[303] https://www.syncron.com/resources/al-masaood-automobiles-improves-spare-parts-inventory-management-with-syncron
[304] https://www.syncron.com/blog/related-category/inventory/feed/
[305] https://www.syncron.com/resources/jcb-uses-syncron-inventory-for-improved-service-parts-availability
[306] https://www.syncron.com/customer-stories/jcb-uses-syncron-inventory-for-improved-service-parts-availability
[307] https://www.syncron.com/resources/page/8
[308] https://www.syncron.com/resources/tag/customer-stories
[309] https://www.syncron.com/resources/page/10
[310] https://www.syncron.com/resources/tag/customer-stories/page/4
[311] https://www.syncron.com/resources/tag/automotive/page/2
[312] https://www.syncron.com/fr/blog/related-industry/automotive-fr/
[295] https://www.servicetitan.com/blog/success-story-above-and-beyond
[296] https://www.servicetitan.com/blog/success-story-rainforest-plumbing-air-dispatch-pro
[297] https://www.servicetitan.com/blog/success-story-john-henrys
[373] https://decisionbrain.com/facility-management-maintenance-2/
[374] https://www.infosys.com/oracle/insights/documents/oracle-field-service-cloud.pdf
[375] https://wifitalents.com/best/field-force-management-software/
[376] https://www3.technologyevaluation.com/solutions/16365/click-field-service-edge
[377] https://techwave.net/wp-content/uploads/2025/02/Intelligent-Predictive-Site-Maintenance.pdf
[378] https://www.mobiloitte.com/ai-solutions/field-force-and-operations-automation
[379] https://autofleet.io/field-service-routing
[380] https://pt.slideshare.net/slideshow/clicksoftware-case-study-unisysnewv2/34433121
[381] https://techwave.net/wp-content/uploads/2025/04/Intelligent-Predictive-Site-Maintenance-1.pdf
[382] https://www.digitalsarthi.ca/case-studies/field-service-intelligent-dispatch
[383] https://www.iic.com/case-study/empowering-next-gen-telecom-strategic-staffing-for-tomorrows-networks
[384] https://www.cioapplicationseurope.com/clicksoftware
[385] https://ijrti.org/papers/IJRTI2506222.pdf
[386] https://crozdesk.com/compare/optimoroute-vs-clicksoftware-vs-loginext-mile
[387] https://www.fieldproxy.ai/resources/blog/case-study-appliance-repair-chain-increases-first-time-fix-rate-to-92-d1-45
[343] https://techsee.com/
[344] https://www.eesel.ai/blog/best-mavenoid-alternatives
[345] https://techsee.com/consumer-electronics/
[346] https://blog.midstage.org/p/094-techsee-if-i-can-see-it-i-can-solve-it
[347] https://techsee.com/blog/reduce-truck-rolls/
[348] https://www.casestudies.com/company/techsee
[349] https://www.fierce-network.com/telecom/vodafone-keeps-customers-connected-during-covid-19-by-using-techsee
[350] https://www.donnabrook.com/partners/techsee/
[351] https://techsee.com/resources/ebooks/visual-assistance-kpi-data/
[352] https://techsee.com/resources/reports/visual-assistance-kpi-data/
[353] https://techsee.com/telecom_old-2/
[354] https://techsee.com/customer-success/
[355] https://www.prnewswire.com/il/news-releases/techsee-launches-value-meter-giving-enterprises-a-real-time-view-of-ai-business-impact-302820639.html
[356] https://techsee.com/resources/success-stories/vodafone-group-success-story/
[357] https://techsee.com/blog/customer-service-kpis/
[358] https://www.ifs.com/en/insights/customer-stories/william-grant-and-sons
[359] https://www.ifs.com/en/insights/customer-stories/tomra-north-america
[360] https://www.aquant.ai/customer-stories/comfort-systems
[361] https://community.ifs.com/ifs-service-collaborative-396/service-collaborative-october-2023-tech-talk-with-stephen-jeffs-watts-svp-service-applications-40231
[362] https://www.ptc.com/en/case-studies/mckinley-becoming-proactive-service-partner
[363] https://docs.ifs.com/ifsclouddocs/25r2/lang/en/KnowledgeManagementSRV/AboutFirstTimeFixPrediction.htm
[364] https://docs.ifs.com/ifsclouddocs/26r1/lang/en/KnowledgeManagementSRV/AboutFirstTimeFixPrediction.htm
[365] https://docs.ifs.com/ifsclouddocs/26r1/KnowledgeManagementSRV/AboutFirstTimeFixPrediction.htm
[366] https://www.ifs.com/-/media10/project/ifs/ifs/assets/ifsfs25r1whatsnew0525.pdf
[367] https://www.ptc.com/en/industries/industrials/campaigns/servitization
[368] https://blog.ifs.com/how-integrated-alm-reduces-network-downtime-and-maintenance-cost-for-telecom-operators/
[369] https://www.aquant.ai/solutions/field-technicians
[370] https://blog.ifs.com/liberating-maintenance-technicians-to-focus-on-the-highest-value-work/
[371] https://www.ifs.com/en/insights/assets/optimize-telecom-service-with-real-time-precision
[372] https://www.aquant.ai/customer-stories/waters
```
