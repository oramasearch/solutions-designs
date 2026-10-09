# 17 — perplexity_research — energy and utilities

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** Deep dive on production machine learning in energy and utilities with measured results. Cover: (1) utility vegetation management with satellite imagery prioritizing tree trimming cycles (e.g. AiDash, Overstory) and cost savings, (2) electricity theft / non-technical loss detection with smart meter data (e.g. Enel, CFE, Brazilian utilities, Itron, Oracle), (3) distribution transformer and cable failure prediction and asset health indices (e.g. Con Edison, E.ON, Hydro-Quebec), (4) storm outage prediction and crew pre-positioning (e.g. Eversource, UConn outage model, Duke), (5) gas leak and pipeline integrity risk prioritization, (6) wind and solar generation forecasting for trading and imbalance cost reduction, (7) commercial building HVAC energy optimization (e.g. BrainBox AI, Google DeepMind data center cooling), (8) oil and gas production optimization and artificial lift failure prediction. Name the organization, vendor, data, technique and measured outcomes (dollars, percent, megawatt-hours) with sources.
- **Timestamp (UTC):** 2026-10-09T20:44:00Z

````
**Production ML has its clearest measured returns here in vegetation planning, theft investigations, renewable forecasting, HVAC control, and oilfield operations.** Asset-health and storm models are also in operational use, but their published results more often measure prediction quality than dollars saved. The table distinguishes observed outcomes from estimated savings and avoids attributing an entire utility program’s results to a model alone.

| Use case | Organization | Vendor / partner | Data | Technique | Measured outcomes |
|---|---|---|---|---|---|
| Vegetation: condition-based trim cycles | National Grid, US | AiDash | Satellite imagery, line locations, vegetation conditions and growth | Intelligent Vegetation Management System (IVMS) ranks spans and circuits for pruning instead of assigning every circuit the same cycle. | AiDash reports **over $5 million a year in efficiencies**, **16% fewer routine-maintenance line miles**, and approximately **5% better system SAIFI**. These are vendor-reported program results, not an isolated estimate of the model’s causal effect.[web:8][web:269] |
| Vegetation: trim-plan selection | Alabama Power | AiDash | Satellite-derived vegetation conditions, segment growth, customer-impact and reliability information | Adds condition-based, segment-level rankings to its existing trim-planning process. | For its **2024 plan**, removed **114 segments**, substituted **51**, and reduced the planned trimming scope by **200 miles**; no dollar saving is disclosed.[web:1] |
| Vegetation: contractor work and hotspots | Sho-Me Power Electric Cooperative, Missouri | Overstory | Satellite vegetation imagery, transmission-line locations and existing work-planning information | Identifies high-impact hotspots and scopes side-trimming and contractor bids. | Overstory reports **$600,000 saved during a pilot**, a **13× return** across two vegetation programs, and a **64% improvement in square feet trimmed per unit of effort**. The public pilot account does not detail its savings calculation.[web:262][web:257][web:268] |
| Vegetation: fall-in hazard trees | Central Virginia Electric Cooperative | Overstory | Remote-sensing vegetation intelligence and locations of hazard trees along approximately 3,000 overhead-line miles | Prioritizes trees likely to fall into lines and affect reliability. | The reported *fall-in-related share of SAIDI* fell from **94% to approximately 70%**; that is **not** a claim that total SAIDI fell by 24%.[web:259] |
| Vegetation: network-wide risk survey | Holy Cross Energy, Colorado | Overstory | Satellite imagery, vegetation health, overhang, wildfire zones and line spans | Ranks fall-in, grow-in and wildfire risks ahead of field work. | Analyzed **more than 18,000 spans** across **over 1,000 miles** in its first year and identified **five miles** in a wildfire-risk zone needing immediate attention. The case study gives **no realized dollar or outage reduction**.[web:6] |
| Electricity theft / non-technical loss | Enel, Italy and Spain | C3 IoT, identified in the case material as C3 Fraud Detection | **20 million smart meters**; seven source systems; meter and customer records | More than **500 ML features** continually update each meter’s fraud probability; inspection priority reflects both fraud likelihood and potential energy recovery. | **Energy recovered per inspection rose 70% in Italy and more than tripled in Spain.** This is yield per inspection, not a threefold reduction in system-wide theft.[web:150] |
| Electricity theft / faulty meters | Sacramento Municipal Utility District | Detectent RevEnhance/CustomerIP; Itron supplied meter-data management | Approximately **620,000 AMI meters**; kWh, voltage and tamper events, billing, premises, GIS, weather and investigation records | Scores consumption drops, tamper alerts and departures from peer and historical usage; analysts rank cases for inspection. | In the **12 months before versus after** deployment, theft-related billing rose from **$1.36 million to $3.11 million** and collections from **$334,000 to $723,000**. SMUD reports **15.5 million additional kWh billed** in the first year. Its **$8.6 million back-billed in 2007–12 predates this deployment** and should not be credited to it.[web:157] |
| Electricity theft / broken-meter recovery | Unnamed Texas utility; separately, an unnamed North American investor-owned utility | Oracle Utilities Analytics Insights | Utility meter-to-cash and AMI data; the sales sheet does not disclose customer-specific fields | Prebuilt ML insights identify potential theft and broken meters for investigation. | Oracle quotes the Texas utility as saving **over $1 million in theft and losses in year one**; it says the separate IOU **recovered over $10 million**. Both customers are anonymous, and calculation methods are undisclosed.[web:42] |
| Non-technical-loss investigation | Comisión Federal de Electricidad (CFE), Mexico | In-house AseMed | Billing histories for **43 million services** and meter/inspection information | Deployed AseMed v2.0 applies **90 analytic algorithms and business rules** across **150 distribution zones**. Its separately described AI-based v3.0 was **under development**, so v2.0 should not be presented as verified production ML. | Reported anomaly findings increased from **12 to 56 per 100 inspections**, and identified lost energy from **2,313 GWh in 2015 to 4,934 GWh in 2018**. Separately, CFE reported **8,250 GWh detected** and **3,190 GWh charged** in 2019 across its broader inspection effort; those totals cannot be assigned solely to AseMed.[web:199][web:206] |
| Non-technical-loss investigations | Neoenergia distributors, Brazil | In-house | Network energy-balance sensors, consumption records, meter information and satellite-to-register comparisons of public-lighting poles | Analytics direct inspections and expose discrepancies; the company’s account **does not establish that these particular tools use ML**. | Reported **more than 320 GWh recovered** through **478,000 inspections**, plus **113 GWh** through regularizing clandestine customers and **99 GWh** through public-lighting checks. These are results of a *combined enforcement program*, not measured ML-only gains.[web:158] |
| Feeder and cable-component failure | Con Edison, New York City | Columbia University and collaborators | Feeder and cable characteristics and age, electrical loading, transformer stress and outage history | The operational **ROAMS** learning-to-rank system repeatedly reprioritizes approximately **941 underground feeders** for operators and maintenance planners. | During **summer 2005**, **75% of feeders that failed** were in the model’s **highest-risk 25%**; by summer’s end, its top **100** feeders accounted for up to **40% of subsequent daily failures**. These measure targeting skill, **not failures prevented**.[web:23] |
| Underground-cable and manhole risk | Con Edison | Columbia University and MIT researchers | Cable inventory and age, inspection reports, trouble-ticket text, past events and manhole locations | SVM ticket classification and learning-to-rank identify vulnerable underground structures; rankings feed inspections and repairs. | A held-out Bronx test placed **44% of 2009 serious manhole events in the highest-risk 10%**. A matched observational analysis associated urgent repairs on the top **5,000** vulnerable structures with **25% lower subsequent event vulnerability**; it is not a randomized estimate of ML’s standalone benefit.[web:28] |
| Transformer asset-health index | Con Edison | In-house | Dissolved-gas and furan tests, loading, corrosion, oil leaks, tap-changer operation, age and asset criticality; AMI and remote-monitoring data | Health indices and lifecycle models prioritize replacement. Con Edison reports remote monitoring of approximately **27,000 network distribution transformers**. | The published plan gives the **27,000-transformer monitoring scale**, but **no quantified failures avoided or dollar saving attributable to its transformer health index**. A health index is an asset-ranking method; it should not automatically be labeled an ML model.[web:284] |
| Medium-voltage cable failure | E.ON’s Schleswig-Holstein Netz, Germany | E.ON in-house | Line age and type, maintenance and weather history, current loading | A self-learning fault forecast brings higher-risk maintenance projects forward. | After roughly **nine months** of use, E.ON said its ability to predict a defect was **two to three times** better and that **about a dozen projects** had been advanced. It did **not** publish a verified 30% realized outage reduction for this deployment.[web:215] |
| Power-transformer condition | Hydro-Québec | In-house; OSIsoft PI monitoring infrastructure | Transformer load, ambient and top-oil temperature, gas and moisture monitoring | Neural-network thermal estimator supports condition-based maintenance development alongside physical models. | On a **six-month 2011 test**, reported top-oil prediction mean error was **0.1°C**, maximum error **1°C**. The presentation describes monitoring and model-implementation plans but gives **no quantified field saving or failure reduction**.[web:25] |
| Distribution-transformer health classification | Schneider Electric and Transfo Services; utility customer not named | In-house | **65,600 oil analyses** concerning approximately **40,000 transformers**; dissolved gases, acidity, moisture and dielectric strength | Random forest plus expert and standards-based rules assigns three health states and escalates risky cases for review. | A **6,000-analysis test set** gave **99% precision** for the healthy class and **94% recall** for the critical class under its conservative setting. This is validation against expert health assessments, **not measured failures or maintenance dollars saved**.[web:217] |
| Storm damage and crew pre-positioning | Eversource | University of Connecticut’s Eversource Energy Center | High-resolution weather forecasts, historical outages, grid assets, soil, terrain, land cover and vegetation/leaf conditions | Regression-tree and statistical outage models forecast damage locations and counts **up to three days ahead**, updating **every six hours**; Eversource uses forecasts to pre-stage crews. | Research cross-validation reduced median territory-level absolute percentage error from **130% to 59%**. There is **no published dollar or restoration-time saving isolated for the model**. For Tropical Storm Isaias, Connecticut damage **exceeded predictions three- to fourfold**—an important operational limit.[web:295][web:46][web:183] |
| Storm resource staging | Duke Energy | In-house | Weather, historical system conditions and damage forecasts | Predictive damage modeling informs where crews, supplies and equipment are placed before storms. | Duke documents **operational pre-positioning**, but supplies **no measured restoration-time or cost improvement attributable to its forecast model**. Its separately reported self-healing-grid outage avoidance must not be counted as storm-model performance.[web:48][web:56][web:292] |
| Gas-leak repair priority | Con Edison gas network, New York | Environmental Defense Fund, Colorado State University and Google Street View vehicles | Geolocated vehicle methane measurements and estimated leak flow rates | Spatial analytics rank the largest *non-hazardous* leaks for repair rather than choosing repairs without leak-size information. | Repairing **52 ranked leaks** was estimated to eliminate **31% of surveyed backlog methane emissions**, versus **15%** for 52 randomly prioritized leaks. The comparison is a **Monte Carlo counterfactual**, not a measured cash saving; hazardous leaks remain a separate safety priority.[web:96] |
| Gas-distribution leak detection and repair | Italgas, Italy | Picarro | Vehicle-mounted methane/ethane spectroscopy, wind and geolocation data, followed by field validation | Leak-detection-and-repair program locates leaks and prioritizes major emitters using network analytics. | Italgas reports **83% lower methane emissions than its 2015 baseline** and **62% fewer third-party leak calls from 2017 to 2023**. These are outcomes of its **broader LDAR program**, not a controlled estimate for ML alone.[web:329] |
| Gas-main replacement priority | Unnamed northeastern US distribution utility | Picarro | Vehicle-measured methane plumes, pipeline GIS, existing integrity-risk rankings and estimated belowground leak densities | Re-ranks already planned pipe-replacement miles to remove more leaks at the same replacement mileage. | On a **276-mile system**, measurement-based analysis estimated **28 leaks** in the original **10 replacement miles**, versus **57** in an alternative ten-mile selection. The approximately **$1 million annual O&M avoidance** is **modeled potential**, not booked savings.[web:100] |
| Wind generation commitments and trading value | Google’s central-US wind portfolio | Google DeepMind | Weather forecasts and historical turbine generation across **700 MW** | Neural network forecasts output **36 hours ahead** and recommends hourly day-ahead grid commitments. | Google reports approximately **20% higher value for its wind energy** than a baseline with **no time-based commitments**. This is a value comparison, **not a stated 20% reduction in imbalance fees**.[web:61] |
| Solar dispatch forecasting and balancing charges | Genex Power’s **50-MW Kidston Solar Farm**, Australia | Fulcrum3D CloudCAM | Nine sky cameras, cloud movement, station weather data, inverter data and site SCADA | Site-specific power model submits **five-minute-ahead** forecasts for Australian Energy Market Operator dispatch. | During its trial, Fulcrum3D reported **over 80% lower average Causer Pays charges** at Kidston. Its final project report says live forecasts outperformed the market operator’s forecast; neither source states a dollar saving for Kidston.[web:247][web:246] |
| Solar dispatch forecasting and balancing charges | Five anonymized Australian trial solar farms; financial analysis for **SF1–SF3** | IMC, CSIRO and university consortium; resulting WattCloud technology | Plant SCADA, irradiance, weather, sky cameras and satellite imagery | Ensembles include random-forest autoregression and supervised sky-camera/irradiance models; live five-minute forecasts were submitted for dispatch. | Estimated **FCAS/Causer Pays savings from the live dispatch forecasts**, versus the market operator’s alternative forecast over the reported **August–November 2020** comparison, were **$3,078 / 3% at SF1**, **$37,300 / 18% at SF2**, and **$5,833 / 18% at SF3**. These are **modeled counterfactual fees using operational forecasts**, not audited cash receipts.[web:253] |
| Commercial-building HVAC | Westcliff’s Granby Galleries, Québec | BrainBox AI | Building HVAC controls, zone conditions, weather predictions and tariffs | Predicts building thermal behavior and adjusts equipment settings approximately every five minutes. | After **one year**, reported HVAC electricity savings were **205,214 kWh (21%)**, worth **C$19,249**, with **55% lower average equipment runtime**. The case figures were supplied through a partner listing, not an independent audit.[web:89] |
| Commercial-building HVAC | La Forgiatura business park, Milan | BrainBox AI | Building-management-system readings, indoor conditions, outdoor weather and predicted thermal load | Predictive start/stop and heating/cooling-water control across **nine buildings**. | Reported **183,300 kWh (26.1%)** less electricity on **AI-controlled equipment** and **€45,775** in calculated energy value from **February 2022 to August 2024**. Those figures do not represent a 26.1% reduction in *all* campus energy.[web:77] |
| Data-centre cooling, a related large-building control case | Google data centre | Google DeepMind | Thousands of temperature, power, pump-speed and set-point sensor readings | Deep neural-network ensembles predict future power-use effectiveness and temperature/pressure constraints before cooling adjustments. | Live on/off testing found **up to 40% less cooling energy** and **15% less overall power-use-effectiveness overhead**. The latter is **not** a 15% reduction in total electricity use.[web:76] |
| Oil production: gas-lift optimization | ExxonMobil, Bakken | In-house ML workflow | Daily oil production, gas-injection rates, surface pressures and temperatures, well characteristics and compressor constraints | ML forecasts well-specific gas-lift response; constrained optimization sets weekly injection rates across shared compressors. | Expanded to **more than 200 wells** after a pilot. Among the first **50 optimized wells**, **84%** operated near optimal rate without stressing compressors and average production uplift was approximately **7%**; the earlier approximately **30-well pilot** reported about **5%** uplift.[web:122] |
| Oil production and artificial-lift reliability | Unnamed Ecuadorian field operator | SLB | Water-injection and pump telemetry, SCADA, satellite connectivity and operating history | Edge analytics and ML predict water-handling failures and estimate injection rates so operators can act before production is constrained. | Horizontal-pump failures fell from **33 in 2022 to 10 in 2023**—approximately **70%**; producer-well ESP shutdowns fell **60%**. SLB estimates that over **2023–24** the system avoided **283,000 barrels of lost oil production**, with water-handling-related production losses down **over 90%**.[web:125] |
| Artificial-lift failure prediction | Unnamed European onshore/offshore operator | Baker Hughes Leucipa Predictive Failure Analytics | Historical production and surface/downhole ESP sensors from two fields | Combines AI time-series forecasts, physics and reliability models to predict damage, failure and remaining useful life for workover scheduling. | Reported correct advance predictions for **eight ESP electrical failures**; historical tests achieved **80% precision** and **60% recall**. Baker Hughes values avoided deferred production at an **estimated $8.9 million**, rather than documenting that amount as collected cash.[web:225] |

Citations:
[1] https://www.aidash.com/resource/national-grid-and-alabama-power-shifted-to-condition-based-trim-cycles/
[2] https://www.overstory.com/case-studies
[3] https://www.overstory.com/solutions
[4] https://www.overstory.com/case-study/roi
[5] https://www.casestudies.com/company/overstory/case-study/how-one-fortune-500-utility-uses-vegetation-analytics-to-support-wildfire-mitigation
[6] https://holycross.com/wp-content/uploads/2023/07/HCE_OverstoryCaseStudy_2023.pdf
[7] https://www.aidash.com/lp/abm/ameren/
[8] https://www.aidash.com/resource/how-national-grid-improved-grid-reliability-with-data-driven-insights-from-space/
[9] https://pages.overstory.ai/satellite-ai-vegetation-management-red-electrica-1
[10] https://www.blits.ai/ai-use-cases/power-line-vegetation-management
[11] https://www.aidash.com/customer-stories/
[12] https://www.aidash.com/resource/how-national-grid-cut-vegetation-related-impacts-by-up-to-43-per-cent/
[13] https://www.aidash.com/resource/aidash-transforming-vegetation-management-for-national-grid-using-satellite-analytics-and-ai/
[14] https://www.overstory.com/
[15] https://www.aidash.com/industry/electric-utilities/
[31] https://bestpractice.ai/ai-use-cases/industries/energy-utilities/case-studies
[32] https://www.linkedin.com/pulse/hidden-goldmine-utility-data-opportunities-ai-andre-wxbse
[33] https://www.specture.com/wp-content/uploads/2018/01/Enel-worldwide.pdf
[34] https://www.klover.ai/enel-ai-strategy-analysis-of-dominance-in-energy-utility-ai/
[35] http://www.esna.org/uploads/2010-06;%20Smart%20Grid%202dot0.pdf
[36] https://nano-ntp.com/index.php/nano/article/download/4660/3608/9010
[37] https://www.casestudies.com/company/itron
[38] https://www.rse-web.it/applications/webwork/site_rse/local/doc-rse/RSE-Snapshot-31-7/files/basic-html/page6.html
[39] https://na.itron.com/what-we-offer/revenue-assurance
[40] https://ijcrt.org/papers/IJCRT2604649.pdf
[41] https://jp.itron.com/o/commerce-media/accounts/-1/attachments/3827457
[42] https://www.oracle.com/a/ocom/docs/industries/utilities/utilities-analytics-insights-sale-sheet.pdf
[43] https://it.itron.com/o/commerce-media/accounts/-1/attachments/3801580
[44] https://www.academia.edu/97400167/SHAPE_The_load_prediction_and_non_technical_losses_modules
[45] https://www.cfe.gob.mx/finanzas/financial-economic-information/Quarterly%20Investor%20Presentations%20Doc/2025/120525_Presentaci%C3%B3n_Inversionistas_Ingles_SFC.pdf
[16] https://cse.cigre.org/cse-n027/d1-development-and-implementation-of-transformer-condition-monitoring-models-for-the-interpretation-of-sensor-and-scada-data.html
[17] https://www.osti.gov/servlets/purl/1922416
[18] https://www.scribd.com/document/460341071/68634
[19] https://ifdtech.com/wp-content/uploads/Case-StudyHydro-Quebec-Case-Study.pdf
[20] https://www.scribd.com/document/875190270/A2-101-2012-New-Technologies-for-Monitoring-Transformer-Tap-changers-and-Bushings-And
[21] https://www.linkedin.com/posts/aieq_aieq-110thanniversarycelebrations-digitalforum2026-activity-7430342844197871616-lNPd
[22] https://research.engineering.nyu.edu/power/sites/engineering.nyu.edu.power/files/uploads/Prioritizing%20the%20Restoration%20of%20Network%20Transformers%20using%20Distribution%20System%20Loading%20and%20Reliability%20Indices.pdf
[23] https://cdn.aaai.org/AAAI/2006/AAAI06-285.pdf
[24] https://cigreconference.ca/papers/2019/CIGRE-160.pdf
[25] https://cdn.osisoft.com/corp/en/media/presentations/2014/UsersConference2014/PDF/UC2014_HydroQuebec_Vouligny_AMIAnalyticsAndPowerTransformerSimulationLaboratoryforProactiveMaintenanceII.pdf
[26] https://patents.google.com/patent/US20130232094A1/en
[27] https://documents.dps.ny.gov/public/Common/ViewDoc.aspx?DocRefId=%7B831E5C6C-E6D1-4FCB-B10B-60DFDFC88D22%7D
[28] http://www.cs.columbia.edu/~xie/pdf/rudinEtAlInterfaces2014.pdf
[29] https://investor.conedison.com/static-files/c92780b5-03bc-487a-bf33-9788c01488ee
[30] https://www.scribd.com/document/431082452/A2-101-2014-pdf
[46] https://www.eversource.uconn.edu/predicting-outages/
[47] https://www.linkedin.com/pulse/powering-future-implementing-artificial-intelligence-andre-eurue
[48] https://www.duke-energy.com/our-company/environment/climate-resilience-and-adaptation
[49] https://www.eversource.uconn.edu/outage-prediction-modeling-and-emergency-response/
[50] https://www.eversource.uconn.edu/high-resolution-weather-forecasting/
[51] https://www.eversource.uconn.edu/storm-outage-forecasting/high-resolution-weather-forecasting-old/
[52] https://pitchgrade.com/research/duke-energy-ai-margin-pressure
[53] https://www.eversource.uconn.edu/storm-outage-forecasting/did-you-know/
[54] https://www.businessinsider.com/utilities-modernize-energy-grid-generative-ai-predictive-maintenance-2025-7
[55] https://cee.engr.uconn.edu/new-partnership-to-bring-innovative-storm-outage-prediction-technology-to-utilities.html
[56] https://news.duke-energy.com/releases/duke-energy-strengthens-the-grid-increases-resiliency-ahead-of-the-2024-hurricane-season
[57] https://news.duke-energy.com/releases/duke-energy-strengthens-the-grid-increases-resiliency-ahead-of-the-2024-hurricane-season-6903392
[58] https://techpark.uconn.edu/category/eversource-energy-center/
[59] https://www.arxiv.org/pdf/2512.20719
[60] https://www.eversource.com/residential/outages/restoration-process/preparing-for-a-storm
[91] https://lite.conedison.com/ehs/2024-sustainability-report/our-commodities/electric/
[92] https://www.picarro.com/gas/videos/pcg_volume_5_redefining_leak_prioritization_with_a_modern_toolset
[93] https://www.picarro.com/sites/default/files/product_documents/Energy%20White%20Paper_Risk-Based%20Leak%20Survey%20Implementations_190426.pdf
[94] https://www.picarro.com/sites/default/files/product_documents/Network%20Intel_End%20to%20End%20Tech%20Stack.pdf
[95] https://www.picarro.com/gas/videos/panel_3_emissions_management_pcc_spring_2023
[96] https://www.edf.org/climate/methanemaps/con-edison
[97] https://www.picarro.com/gas/knowledge_center_blogs
[98] https://www.picarro.com/gas
[99] https://mexicobusiness.news/cloudanddata/news/data-analytics-leverages-pipeline-safety-cost-reductions
[100] https://northeastgas.org/files/galleries/a_vanpelt_2020.pdf
[101] https://www.picarro.com/gas/videos/opening_keynote_speaker_alex_balkanski_president_ceo_picarro_pgc_spring_2024
[102] https://conedison.gcs-web.com/static-files/581d8cfb-ad57-46b9-ba21-686e80edb68f
[103] https://www.picarro.com/gas/videos/panel_3_managing_the_risk_of_your_business_pgc_spring_2024
[104] https://www.edf.org/media/con-edison-partners-edf-google-map-and-measure-methane-leaks-prioritize-infrastructure
[105] https://lite.conedison.com/ehs/2024-sustainability-report/our-commodities/gas/
[61] https://deepmind.google/blog/machine-learning-can-boost-the-value-of-wind-energy/
[62] https://www.platformexecutive.com/journals/energy-journal/the-role-of-ai-in-energy-trading-algorithmic-forecasting-and-market-optimisation/
[63] https://arxiv.org/abs/1907.07580v3
[64] https://www.meteomatics.com/en/weather-model-europe/euro1k-for-offshore-wind-power/
[65] https://www.datacenterknowledge.com/sustainability/google-and-france-s-engie-team-up-to-accelerate-wind-power
[66] https://www.meteomatics.com/en/energy-industry/
[67] https://www.engadget.com/2019-02-26-google-machine-learning-wind-power.html
[68] https://www.sciencedirect.com/science/article/pii/S0306261921002452
[69] https://www.mdpi.com/1996-1073/18/24/6460
[70] https://www.tarrysingh.com/blog/what-the-grid-paid-for-and-what-arrived
[71] https://www.theverge.com/2019/2/26/18241632/google-deepmind-wind-farm-ai-machine-learning-green-energy-efficiency
[72] https://jua.ai/articles/ai-solar-power-forecasting/
[73] https://marketintelo.com/report/renewable-energy-forecasting-ai-market
[74] https://www.nature.com/articles/s41598-025-05250-3
[75] https://marketintelo.com/report/ai-based-power-forecasting-market
[76] https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/
[77] https://www.rehva.eu/rehva-journal/chapter/results-from-the-application-of-smart-ready-technologies
[78] https://www.zdnet.com/article/google-just-put-an-ai-in-charge-of-keeping-its-data-centers-cool/
[79] https://www.casestudies.com/company/brainbox-ai/case-study/australian-shopping-mall-results-encourage-portfolio-wide-implementation
[80] https://www.zdnet.com/article/deepmind-ai-helps-google-slash-datacenter-energy-bills/
[81] https://www.rehva.eu/rehva-journal/chapter?tx_wbjournals_chapterdetail[action]=download&tx_wbjournals_chapterdetail[chapter]=1134&tx_wbjournals_chapterdetail[controller]=Chapter&cHash=3884dd22aaa5d639be6c2ab2333a0804
[82] https://newatlas.com/deepmind-data-center-cooling/44481/
[83] https://brainboxai.com/en/case-studies/australian-shopping-mall-saves-energy-while-reducing-equipment-runtime
[84] https://datacenternews.asia/story/google-cuts-energy-usage-data-centers-deepminds-ai
[85] https://www.slashgear.com/google-put-deepmind-in-charge-of-data-center-cooling-and-the-ai-wowed-20449027/
[86] https://www.marsdd.com/our-story/foundational-change-how-ai-can-help-reduce-emissions-in-buildings/
[87] https://www.311institute.com/deepmind-ai-reduces-googles-data-centre-cooling-bills-by-40/
[88] https://www.ashb.com/wp-content/uploads/2023/12/IS-2023-186.pdf
[89] https://ukgbc.org/resources/autonomous-ai-hvac-optimisation/
[90] https://www.tomshardware.com/news/google-deepmind-energy-data-center,32290.html
[106] https://vroc.ai/case_study/increased-reliability-for-oilfield/
[107] https://www.ijsat.org/papers/2021/1/1902.pdf
[108] https://apidots.com/blog/ai-oil-gas-industry/
[109] https://www.slb.com/products-and-services/innovating-in-oil-and-gas/completions/artificial-lift
[110] https://apidots.com/blog/ai-uses-oil-gas-industry/
[111] https://www.sensiaglobal.com/getmedia/9f389c57-198c-41d5-9d93-d4258e2ad75a/spas-calgary-march-29-final_3.pdf
[112] https://dam.bakerhughes.com/asset/460ab485-2e32-45ae-a64b-59e518cbff75/spe-214462-ms-bkr-licensed.pdf
[113] https://www.slb.com/products-and-services/innovating-in-oil-and-gas/completions/artificial-lift/artificial-lift-systems-for-mine-dewatering
[114] https://www.slb.com/solutions/digital-operations
[115] https://www.linkedin.com/pulse/beyond-hype-practical-applications-ai-ml-production-upstream-melhem-vxgtf
[116] https://jpt.spe.org/tag/machine-learning
[117] https://www.sciencedirect.com/science/article/abs/pii/S0957582024010310
[118] https://www.linkedin.com/posts/sensiaglobal_sensiaglobal-avalon-gasliftoptimisation-activity-7439687092357595136-y3Gy
[119] https://www.shell.com/what-we-do/digitalisation/artificial-intelligence.html
[120] https://www.ogj.com/members/article/55234052/ml-models-improve-field-level-artificial-lift
[150] https://www.specture.com/wp-content/uploads/2018/01/Enel-worldwide.pdf
[151] https://g1.globo.com/ba/feira-de-santana-regiao/noticia/2026/10/07/fraudes-de-energia-sao-identificadas-na-ba.ghtml
[152] https://bahiaeconomica.com.br/wp/2026/10/07/no-terceiro-trimestre-neoenergia-coelba-realiza-mais-de-3-mil-operacoes-contra-furto-de-energia-em-salvador-e-recupera-energia-para-68-mil-pessoas-por-30-dias/
[153] https://www.correio24horas.com.br/minha-bahia/23-mil-fraudes-energia-recuperada-da-para-abastecer-feira-de-santana-por-45-dias-1026
[154] https://specture.com/projects-archive/big-dataiot-services/
[155] https://emea.itron.com/documents/d/asset-library-120736/revenue_assurance_product_overview
[156] https://jornalgrandebahia.com.br/2026/10/neoenergia-coelba-realiza-mais-de-28-mil-operacoes-contra-furto-de-energia-e-recupera-1875-gwh-na-bahia/
[157] https://na.itron.com/documents/120737/669761/Itron+Sacramento+Municipal+Utility+District+Case+Study.pdf/0a112549-448c-942a-98f2-f4337a6712a1?version=1.0&t=1706834306942
[158] https://www.neoenergia.com/en/w/neoenergia-realiza-diversas-acoes-e-investe-em-tecnologia-para-combate-a-desvios-de-energia
[159] https://na.itron.com/products/revenue-assurance
[160] https://na.itron.com/what-we-offer/revenue-assurance
[161] https://www.klover.ai/enel-ai-strategy-analysis-of-dominance-in-energy-utility-ai/
[162] https://learntoconserve.com/static/media/Itron-ConservationStation-VFT-EdGuide-V0.2.3937113c.pdf
[163] https://pixforce.com/en/pt-br/case-a-inteligencia-artificial-pode-ajudar-no-controle-de-perdas-de-energia
[164] https://www.neoenergia.com/en/w/maior-operacao-contra-desvio-de-energia-do-brasil-recupera-3-5-milhoes-de-kwh-em-4-estados
[136] https://www.scribd.com/document/875190270/A2-101-2012-New-Technologies-for-Monitoring-Transformer-Tap-changers-and-Bushings-And
[137] https://www.marketsizeandtrends.com/report/primary-transmission-distribution-equipment-market/
[138] https://cdn.osisoft.com/corp/en/media/presentations/2014/UsersConference2014/PDF/UC2014_HydroQuebec_Vouligny_AMIAnalyticsAndPowerTransformerSimulationLaboratoryforProactiveMaintenanceII.pdf
[139] https://www.linkedin.com/pulse/hydro-qu%C3%A9bec-ai-transformation-strategy-pierre-c%C3%B4t%C3%A9-cps-p-6kmge
[140] https://cse.cigre.org/cse-n027/d1-development-and-implementation-of-transformer-condition-monitoring-models-for-the-interpretation-of-sensor-and-scada-data.html
[141] https://www.scribd.com/document/548879539/X-FosmonitoringCIGRE2012
[142] https://energiforsk.se/media/29411/hydroquebec_roy.pdf
[143] https://www.osti.gov/servlets/purl/1922416
[144] https://pmc.ncbi.nlm.nih.gov/articles/PMC11679142/
[145] https://www.linkedin.com/pulse/project-ai-horizon-strategic-proposal-hydro-qu%C3%A9becs-next-c%C3%B4t%C3%A9-cps-p-ujphe
[146] https://scispace.com/pdf/a-review-of-health-assessment-techniques-for-distribution-1nqlgamkfm.pdf
[147] https://arxiv.org/pdf/2504.15310
[148] https://pmc.ncbi.nlm.nih.gov/articles/PMC11617860/
[149] https://papers.phmsociety.org/index.php/phme/article/download/4102/2433
[165] https://link.springer.com/article/10.1186/s40807-026-00242-x?error=cookies_not_supported&code=605ec7c9-e839-419b-ac2c-6b8e3a987941
[166] https://www.statkraft.com/IR/results-reports-and-presentations/quarterly-results-q2-2026-ceo-review-and-key-figures/
[167] https://www.mdpi.com/2073-431X/13/9/235
[168] https://arena.gov.au/projects/solcast-nowcasting-solutions-for-solar-farms/
[169] https://www.ijfmr.com/papers/2024/6/30731.pdf
[170] https://onlinelibrary.wiley.com/doi/full/10.1002/sd.2885
[171] https://arxiv.org/html/2608.02088v1
[172] https://www.energy.gov/cmei/systems/seto-2020-artificial-intelligence-applications-solar-energy
[173] https://www.energy.gov/sites/prod/files/2019/10/f67/10%20Solar-Forecasting-2-Annual-Review_EPRI.pdf
[174] https://link.springer.com/content/pdf/10.1186/s40807-026-00242-x.pdf?error=cookies_not_supported&code=e00038a3-1bc0-4f42-bf89-67c897f502e3
[175] https://solcast.com/
[176] https://arena.gov.au/assets/2022/06/gridded-renewables-nowcasting-demonstration-over-sa-public-report.pdf
[177] https://www.mdpi.com/1996-1073/19/8/1847
[178] https://link.springer.com/article/10.1186/s43067-026-00382-6?error=cookies_not_supported&code=b19fe393-1712-42b5-aa2a-e6cf75f26e62
[179] https://solcast.com/pricing/energy-data
[121] https://www.slb.com/solutions/digital-operations
[122] https://www.ogj.com/members/article/55234052/ml-models-improve-field-level-artificial-lift
[123] https://dam.bakerhughes.com/m/4033f3e86bba5565/original/MaxRate-software-increased-production-20-percent-eliminated-shutdowns-us-cs.pdf
[124] https://www.offshore-mag.com/drilling-completion/article/55286167/baker-hughes-otc-2025-new-approach-mitigates-esp-risks-in-critical-offshore-applications
[125] https://www.slb.com/resource-library/case-study-with-navigation/di/integrated-digital-solution-for-water-handling-in-a-remote-field-in-ecuador
[126] https://www.bakerhughes.com/oilfield-services-and-equipment-digital/leucipa-automated-field-production-solution
[127] https://www.slb.com/products-and-services/delivering-digital-at-scale/edge-and-iot
[128] https://www.bakerhughes.com/production/artificial-lift/artificial-lift-digital-solutions/remote-monitoring-and-surveillance-services/advanced-esp-predictive-failure-analytics
[129] https://dam.bakerhughes.com/m/41853ba20e9be966/original/PRIMERA-premium-artificial-lift-service-delivered-high-reliability-in-subsea-field-cs.pdf
[130] https://www.slb.com/resource-library/case-study-with-navigation/di/2026/integrated-production-transforms-a-mature-ecuadorian-field
[131] https://www.slb.com/products-and-services/delivering-digital-at-scale/artificial-intelligence-solutions/innovation-factori/tailored-solutions/compressor-health-and-reliability
[132] https://www.bakerhughes.com/production/artificial-lift
[133] https://www.bakerhughes.com/sites/bakerhughes/files/2021-03/ProductionLink-delivered-significant-cost-savings-with-proactive-surveillance-of-ESPs-Permain-cs.pdf
[134] https://www.slb.com/products-and-services/innovating-in-oil-and-gas/integrated-services/integrated-production
[135] https://www.bakerhughes.com/production/artificial-lift/electrical-submersible-pump-systems/esp-intakes/boosted-gassep-gas-separator
[195] https://elmanana.com.mx/nacional/2026/3/25/cfe-se-moderniza-con-medidores-con-bluetooth-ia-como-funcionaran-172718.html
[196] https://noticiasambientales.com/innovacion/energia-inteligente-el-rol-de-la-inteligencia-artificial-en-la-optimizacion-energetica-en-mexico-2/
[197] https://www.informador.mx/Retrocede-CFE-en-combate-al-robo-de-luz-l201909160001.html
[198] https://wradio.com.mx/2026/04/24/medidores-cfe-con-bluetooth-es-el-fin-de-los-diablitos-asi-funcionan-los-nuevos-lectores-de-luz-inteligentes/
[199] https://es.slideshare.net/slideshow/12-perdidas-tecncias-y-no-tecncias-sener_preliminar_v7-pptx/271100356
[200] https://arxiv.org/html/2411.06649v1
[201] https://www.milenio.com/negocios/lanza-cfe-licitacion-para-medidores-inteligentes
[202] https://www.debate.com.mx/tecnologia/cfe-apuesta-por-la-innovacion-tecnologica-y-moderniza-su-red-electrica-con-ia-para-mejorar-el-servicio-20260317-0159.html
[203] https://es.scribd.com/document/847263458/3-s2-0-S2352484722001433-main
[204] https://onlinelibrary.wiley.com/doi/10.1155/2024/6225510
[205] https://scholarsmine.mst.edu/engman_syseng_facwork/1614/
[206] https://www.cfe.mx/cdn/2019/Archivos/Boletines/Conferencia%2019%20feb%202020.pdf
[207] https://revistas.udes.edu.co/aibi/article/view/5635
[208] https://publications.iadb.org/publications/spanish/document/Energizados-los-beneficios-de-una-herramienta-basada-en-las-metodologias-de-machine-learning-para-facilitar-la-deteccion-de-robo-electrico.pdf
[209] https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2024.1383090/full
[210] https://www.linkedin.com/pulse/hidden-goldmine-utility-data-opportunities-ai-andre-wxbse
[211] https://www.linkedin.com/pulse/smart-grids-artificial-intelligence-future-energy-andre-wep5e
[212] https://amplyfi.com/blog/ai-optimised-smart-grids-how-eu-and-us-utilities-are-transforming-energy-management/
[213] https://pmarketresearch.com/auto/%E2%80%8B%E2%80%8Bcable-distributed-fault-diagnosis-device-market/
[214] https://www.startus-insights.com/innovators-guide/ai-in-energy-market-report/
[215] https://www.powerengineeringint.com/smart-grid-td/td-infrastructure/eon-deploys-ai-for-predictive-power-grid-maintenance/
[216] https://ijetcsit.org/index.php/ijetcsit/article/download/297/254
[217] https://papers.phmsociety.org/index.php/phme/article/download/4102/2433
[218] https://pmc.ncbi.nlm.nih.gov/articles/PMC11617860/
[219] https://annualreport.eon.com/content/dam/eon-annualreport/documents/de/GB24-gesamt-DE_final.pdf
[220] https://www.eon.hu/content/dam/eon/eon-hungary/documents/rolunk/rolunk_uj/fenntarthat%C3%B3s%C3%A1g/5_500%20fenntarthatosagi%20kivonat%202024_fin.pdf
[221] https://conference.ut.ac.id/index.php/isst/article/download/5233/2108/12409
[222] https://sure.sunderland.ac.uk/view/creators_id/15920.html
[223] https://www.eon.com/content/dam/eon/eon-com/eon-com-assets/documents/investor-relations/en/presentations/2025-02-26_Facts_Figures_FY2024_final.xlsx
[224] https://publikasi.dinus.ac.id/index.php/technoc/article/download/10896/4708
[180] https://www.eversource.uconn.edu/predicting-outages/
[181] https://www.eversource.uconn.edu/storm-outage-forecasting/did-you-know/
[182] https://www.eversource.uconn.edu/storm-outage-forecasting/high-resolution-weather-forecasting-old/
[183] https://www.eversource.uconn.edu/wp-content/uploads/2021/05/EEC_annual_report_2020-Reduced-size.pdf
[184] https://www.eversource.uconn.edu/outage-prediction-modeling-and-emergency-response/
[185] https://www.eversource.uconn.edu/wp-content/uploads/2020/03/EEC-Annual-Report-2019-Web-Version.pdf
[186] https://today.uconn.edu/2020/08/vulnerable-trees-high-winds-factors-combined-strong-storm-damage-isaias/
[187] https://cee.engr.uconn.edu/new-partnership-to-bring-innovative-storm-outage-prediction-technology-to-utilities.html
[188] https://www.eversource.uconn.edu/author/amg02015/
[189] https://portal.ct.gov/-/media/AG/Press_Releases/2019/AG-Brief_Docket-No-20-08-03_020521.pdf
[190] https://www.eversource.com/content/residential/about/community/partnerships/working-with-uconn
[191] https://today.uconn.edu/2022/01/predicting-power-outages-with-uconns-diego-cerrai/
[192] https://today.uconn.edu/2019/05/quantifying-chaos-eversource-energy-uconn-tech-park/
[193] https://www.albany.edu/news-center/news/2026-ualbany-uconn-researchers-launch-initiative-improve-power-outage-predictions
[194] https://hartfordbusiness.com/article/eversource-facility-aims-to-predict-storm-severity-ct-threats/
[225] https://dam.bakerhughes.com/asset/d4d350ac-7f39-4be1-9db9-6a640932ac6e/PFA-predicts-failures-in-ESPs-saves-8-million-Europe-cs.pdf
[226] https://dam.bakerhughes.com/m/1a5279bc5b2ed282/original/PFA-predicts-failures-in-ESPs-saves-8-million-Europe-cs.pdf
[227] https://www.bakerhughes.com/production/artificial-lift/artificial-lift-digital-solutions/remote-monitoring-and-surveillance-services/advanced-esp-predictive-failure-analytics
[228] https://dam.bakerhughes.com/asset/460ab485-2e32-45ae-a64b-59e518cbff75/spe-214462-ms-bkr-licensed.pdf
[229] https://www.bakerhughes.com/production/artificial-lift/electrical-submersible-pump-systems
[230] https://www.bakerhughes.com/case-study
[231] https://dam.bakerhughes.com/asset/2145a967-01f1-4ffa-8ee1-37b085e6fff1/spe-221571-ms-bkr-licensed.pdf
[232] https://www.bakerhughes.com/company/stories/groundbreaking-production-solution-applied-permian
[233] https://www.bakerhughes.com/jp/node/60236
[234] https://dam.bakerhughes.com/asset/d955317b-5700-49ea-a875-5ecb9f99268a/iptc-23971-ea-bkr-licensed.pdf
[235] https://www.bakerhughes.com/sites/bakerhughes/files/2021-03/ProductionLink-delivered-significant-cost-savings-with-proactive-surveillance-of-ESPs-Permain-cs.pdf
[236] https://www.bakerhughes.com/oilfield-services-and-equipment-digital
[237] https://www.bakerhughes.com/oilfield-services-and-equipment-digital/remote-operations/monitoring-analytics
[238] https://zenn.dev/kiiwami/articles/3441fff36c643abf?locale=en
[239] https://www.bakerhughes.com/oilfield-services-and-equipment-digital/leucipa-automated-field-production-solution/leucipa-esp-optimizer
[240] https://arena.gov.au/projects/solcast-nowcasting-solutions-for-solar-farms/
[241] https://arena.gov.au/assets/2021/02/solcast-nowcasting-lessons-learnt-report-3.pdf
[242] https://assets.cleanenergycouncil.org.au/documents/events/event-docs-2019/SIF-2019/Presentations/04-Lucy-Cooper-and-Ross-Gillett.pdf
[243] https://arena.gov.au/assets/2020/07/solcast-nowcasting-lessons-learnt-report-2.pdf
[244] https://www.energymagazine.com.au/self-forecasting-is-the-future-for-solar/
[245] https://www.aemo.com.au/-/media/files/stakeholder_consultation/working_groups/other_meetings/5-minute-forecast/feedback---market-participant-self-forecasting-workshop.pdf?rev=f8b03e0255c549bdb27a7293d5622f26&sc_lang=en
[246] https://arena.gov.au/assets/2021/07/fulcrum3d-cloudcam-solar-forecasting-final-report.pdf
[247] https://www.pv-magazine-australia.com/2020/06/12/meet-the-sydney-startup-forecasting-our-renewable-energy-future/
[248] https://www.solcast.com/forecast-solar-irradiance-data
[249] https://solcast.com/
[250] https://www.aemc.gov.au/sites/default/files/2019-11/ERC0274%20submission%20consultation%20ARENA.pdf
[251] https://solcast.com/pricing/energy-data
[252] https://www.aemo.com.au/-/media/files/stakeholder_consultation/working_groups/other_meetings/awefs-asefs/2020/intermittent-generator-forum---session-1---arena-presentation-slides---30-november-2020.pdf?rev=cce3bee3519f441394374f4db5c982b5&sc_lang=en
[253] https://arena.gov.au/assets/2021/06/solar-power-ensemble-forecast-final-report.pdf
[254] https://www.aemo.com.au/-/media/files/electricity/nem/planning_and_forecasting/solar-and-wind/participant-forecasting-faq.pdf
[255] https://www.overstory.com/case-studies
[256] https://www.overstory.com/midwest-pilot
[257] https://www.overstory.com/blog/announcing-new-investment-and-customer-growth
[258] https://www.overstory.com/webinar/optimizing-om-costs
[259] https://www.overstory.com/case-study/cvec
[260] https://www.overstory.com/blog/fac-or-fiction-the-truth-about-vegetation-risk-and-transmission-resilience
[261] https://www.overstory.com/solutions
[262] https://www.overstory.com/blog/how-to-execute-a-successful-pilot-program
[263] https://www.overstory.com/explorer-pilot
[264] https://www.overstory.com/demo
[265] https://www.aidash.com/resource/how-national-grid-improved-grid-reliability-with-data-driven-insights-from-space/
[266] https://www.overstory.com/
[267] https://www.overstory.com/blog?offset=1734699327425
[268] https://www.overstory.com/case-study/shome-power-electric-cooperative
[269] https://www.aidash.com/5-practical-steps-to-reduce-fall-in-risk-now/
[270] https://www.scribd.com/document/430688320/AAAI06-285-pdf
[271] https://www.scribd.com/document/460341071/68634
[272] https://www.scribd.com/document/385005462/Machine-Learning-for-NY-Power-Grid
[273] https://patents.google.com/patent/US20130232094A1/en
[274] https://arxiv.org/list/stat.ML/2020-05?skip=625&show=100
[275] https://www.rocq.inria.fr/axis/modulad/archives/numero-36/Becker/Becker_slides_36.pdf
[276] https://restservice.epri.com/publicdownload/000000000001013001/0/Product
[277] https://www.cs.upc.edu/~marias/papers/ewdsa.pdf
[278] https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=d1b7750312190afdc3339748d2122c6fc26ac413
[279] https://www.scribd.com/document/397831771/Machine-Learning-for-Power-Grids
[280] https://www.coned.com/-/media/files/coned/documents/our-energy-future/our-energy-vision/long-range-plans/electric-long-range-plan.pdf
[281] https://www.coned.com/-/media/files/coned/documents/our-energy-future/our-energy-vision/storm-hardening-enhancement-plan/climate-change-resilience-plan-2023-appendices.pdf
[282] https://www.coned.com/-/media/files/coned/documents/our-energy-future/our-energy-vision/storm-hardening-enhancement-plan/climate-change-vulnerability-study-appendix.pdf
[283] https://www.coned.com/-/media/files/coned/documents/our-energy-future/our-energy-projects/integrated-long-range-plan.pdf
[284] https://www.coned.com/-/media/files/coned/documents/our-energy-future/our-energy-vision/distribution-system-platform/2020-distributed-system-implementation-plan.pdf
[285] https://www.eversource.uconn.edu/uconn-eversource-energy-center-partners-with-dominion-energy/
[286] https://www.eversource.uconn.edu/outage-prediction-modeling-and-emergency-response/
[287] https://www.eversource.uconn.edu/predicting-outages/
[288] https://cee.engr.uconn.edu/wp-content/uploads/2024/09/CV-2024-CerraiDiego.pdf
[289] https://www.eversource.uconn.edu/recognizing-excellence-2026-eec-student-poster-competition-winners/
[290] https://www.duke-energy.com/our-company/environment/climate-resilience-and-adaptation
[291] https://www.eversource.uconn.edu/storm-outage-forecasting/did-you-know/
[292] https://www.duke-energy.com/resource-hub/business/for-your-safety/illumination/how-duke-energy-is-preparing-for-hurricane-season
[293] https://news.duke-energy.com/releases/duke-energy-strengthens-the-grid-increases-resiliency-ahead-of-the-2024-hurricane-season
[294] https://arxiv.org/html/2604.04916v1
[295] https://digitalcommons.lib.uconn.edu/dissertations/2110/
[296] https://www.duke-energy.com/info/carolinas-restoration
[297] https://www.sciencedirect.com/science/article/abs/pii/S2352467723000243
[298] https://www.eversource.uconn.edu/category/storm-preparedness/
[299] https://cleanearth-engr.media.uconn.edu/wp-content/uploads/sites/3516/2025/11/Connecticut-Grid-Resilience-Assessment-2025.pdf
[300] https://www.eon.com/en/innovation/future-of-energy/intelligent-networks.html
[301] https://lqa-annualreport.eon.com/content/dam/eon-annualreport/documents/en/GB24-gesamt-EN_final.pdf
[302] https://www.eon.com/en/innovation/future-of-energy/energy-and-beyond/local-balancing-eons-reliable-renewable-energy-tech.html
[303] https://www.eon.com/en/innovation/future-of-energy/eon-trend-radar.html
[304] https://www.eon.com/en/innovation/future-of-energy/ai/smart-mobility-initiatives-5-european-cities-that-are-getting-it-right.html
[305] https://www.eon.com/en/innovation/future-of-energy/communities-and-living/how-technology-can-help-housebuilders-overcome-new-network-challenges.html
[306] https://www.eon.com/en/innovation/innovation-frontline/success-stories/success-story-omne.html
[307] https://www.eon.com/content/dam/eon/eon-com/eon-com-assets/documents/investor-relations/en/quarterly-statement/h1-2025/tables_english_Q2_2025.xlsx
[308] https://annualreport.eon.com/content/dam/eon-annualreport/documents/en/EON_2021_Sustainability_Report.pdf
[309] https://www.eon.com/content/dam/eon/eon-com/eon-com-assets/documents/investor-relations/de/bilanzpressekonferenz/2025/20250226_tabellen.xlsx
[310] https://www.eon.com/de/innovation/innovation-in-aktion/erfolgsgeschichten.html
[311] https://one.eon.com/content/dam/eon-one/documents/Optimum%20Pakete.pdf
[312] https://www.eon.com/en/about-us/business-units/eon-energy-projects.html
[313] https://www.eon.com/en/innovation/future-of-energy/intelligent-networks/energiemonitor-the-german-technology-spearheading-energy-transparency.html
[329] https://www.italgas.it/en/projects/solutions/picarro/
[330] https://www.picarro.com/sites/default/files/product_documents/Network%20Intel_End%20to%20End%20Tech%20Stack.pdf
[331] https://www.picarro.com/gas
[332] https://www.picarro.com/gas/company/blog/blog_gas_utilities_seek_digital_solutions_to_reduce_methane_emissions_and_ensure
[333] https://mexicobusiness.news/cloudanddata/news/data-analytics-leverages-pipeline-safety-cost-reductions
[334] https://www.picarro.com/sites/default/files/product_documents/Gas%20Technology%20Brief.pdf
[335] https://www.picarro.com/gas/major_methane_emission_abatement_achieved_with_direct_measurements_italgas
[336] https://www.italgas.it/progetti/picarro/
[337] https://www.picarro.com/sites/default/files/product_documents/Picarro_Gas_TechnologyBrief_091323%20(1).pdf
[338] https://www.picarro.com/sites/default/files/product_documents/Picarro_Gas_Italgas%20Case%20Study_041924%20v7.pdf
[339] https://www.picarro.com/gas/company/blog/blog_picarro_surveyortm_for_natural_gas_rapid_accurate_leak_detection_for_improved
[340] https://www.picarro.com/sites/default/files/case_studies/Picarro_Gas_Italgas%20Case%20Study_260707.pdf
[341] https://www.picarro.com/gas/case_study_major_methane_emission_abatement_achieved_with_direct_measurements_italgas
[342] https://www.linkedin.com/posts/picarro-inc-_networkintelligence-naturalgas-methanereduction-activity-7455004276202033152-15P1
[343] https://unece.org/sites/default/files/2021-10/8.%20Lukasz%20Kroplewski%20-%20presentation%20for%20web.pdf
[314] https://www.aidash.com/resource/how-national-grid-improved-grid-reliability-with-data-driven-insights-from-space/
[315] https://www.overstory.com/blog/announcing-new-investment-and-customer-growth
[316] https://www.overstory.com/midwest-pilot
[317] https://www.aidash.com/resource/real-results-from-national-grids-vegetation-program/
[318] https://www.overstory.com/
[319] https://www.overstory.com/webinar/optimizing-om-costs
[320] https://www.aidash.com/lp/abm/national-grid-uk/
[321] https://www.aidash.com/resource/how-national-grid-cut-vegetation-related-impacts-by-up-to-43-per-cent/
[322] https://www.aidash.com/resource/national-grid-and-alabama-power-shifted-to-condition-based-trim-cycles/
[323] https://www.linkedin.com/posts/indradenbakker_josh-holland-on-getting-exec-buy-in-activity-6962535904313757696-Bl6F
[324] https://www.aidash.com/industry/construction/
[325] https://www.aidash.com/customer-stories/
[326] https://www.overstory.com/solutions
[327] https://www.aidash.com/resources_product/ivms/
[328] https://www.blits.ai/ai-use-cases/power-line-vegetation-management

````
