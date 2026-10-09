# 06-research-gig-economy-engineering-blogs

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** What production machine learning systems have Uber, Lyft, DoorDash, Instacart, Grab and Airbnb described on their engineering blogs between 2018 and 2026? For each company list the specific business problems solved (e.g. ETA prediction, dispatch/matching, marketplace pricing, supply positioning, incentive budget allocation, search ranking, fraud, catalog/item attribute extraction, substitution recommendations, address/geolocation correction, restaurant prep time), the ML technique used, and any reported business impact metrics.
- **Timestamp (UTC):** 2026-10-09T20:32:51.676Z

## Response (verbatim)

````
**The companies describe production ML systems for predicting travel and delivery times, matching supply to demand, allocating incentives, ranking search results and recommendations, detecting fraud, and maintaining product data.** The table separates measured business outcomes from model-quality or operating metrics; “not reported” means the cited account does not quantify an outcome.

| Company | Specific business problem solved | ML technique used | Reported business impact metrics |
|---|---|---|---|
| Uber | **DeepETA:** predict arrival times for ride matching, fares and deliveries. | Low-latency neural network with a linear-Transformer architecture that corrects routing-engine ETAs. | Reported improved production ETA metrics, **without a numerical lift**. [web:172][web:74] |
| Uber | **Ride dispatch and supply positioning:** match riders while accounting for where a trip will leave the driver and the value of future demand. | Reinforcement learning: a deep, temporal-difference-trained driver-state value function incorporated into the matching ranker. | Global switchback tests: **driver earnings +0.52%; rider cancellations −2.2%**. Deployed in more than 400 cities. [web:79] |
| Uber | **Tarot:** allocate driver and courier incentives across competing programs and budgets. | User–offer uplift and cost predictions, a budget-pacing feedback loop, and CP-SAT multiple-knapsack optimization. | Reported **99.99% simulated budget utilization**, versus roughly 68% for an earlier pacing design; no quantified live earnings or bookings lift. [web:83] |
| Uber | **Uber Eats search:** retrieve relevant restaurants, dishes and grocery items, including multilingual and semantically related results. | Fine-tuned Qwen-based two-tower embeddings; contrastive training, approximate-nearest-neighbor retrieval and optional neural reranking. | Reported **34% lower retrieval latency and 17% lower CPU use** from one tuning change; no numerical conversion lift in the engineering account. [web:223] |
| Uber | **Payment-fraud attacks:** identify emerging fraud patterns for analyst review and mitigation. | Project RADAR combines payment-activity time-series detection, automatically proposed rules and human approval. | Faster detection and investigation described; **no quantified fraud-loss reduction** reported. [web:289] |
| Lyft | **Ride matching:** choose rider–driver pairs based on a driver’s future earning opportunities, not just the immediate trip. | Online reinforcement learning estimates driver future earnings and feeds that value into matching. | Lyft’s published study estimates **millions of additional rides served annually and more than $30 million in incremental annual revenue**; global rollout occurred in 2021. *This figure comes from Lyft’s research paper rather than an engineering-blog post.* [web:142] |
| Lyft | **Personal Power Zones:** reposition idle drivers and allocate location-specific bonus budgets. | Stochastic driver-response and demand modeling, two convex optimization problems, and real-time geographic budget escrow. | Live experiments: **incremental bookings about +0.5%; pickup ETAs −1.1%; driver cancellations −12.5%**; tens of millions of dollars in additional annual bookings. *These results are from Lyft’s published paper.* [web:306] |
| Lyft | **Trip pricing and marketplace balancing:** estimate ride-serving costs and forecast local supply and demand for pricing decisions. | XGBoost cost-prediction models and streaming supply–demand forecasts feeding the pricing system. | **No isolated pricing-related business lift reported** in the located engineering description. [web:361] |
| Lyft | **ETA and destination suggestions:** estimate pickup/drop-off times and suggest likely destinations. | Models trained on past rides; destination predictions use location and behavioral history. | Lyft reports San Francisco average pickup ETAs accurate **within one minute**, drop-off ETAs **within two minutes**, and destination prediction correct roughly **60–70%** of the time. These are accuracy figures, not measured lifts. [web:357] |
| Lyft | **Marketplace representations:** capture relationships among drivers, riders, locations and times for downstream modeling. | *lyft2vec* graph embeddings learned from ride-interaction edges and negative samples. | Demonstrated ride-pattern signals; **no quantified downstream business lift** reported. The post describes an embeddings-platform initiative rather than attributing a gain to one production decision system. [web:258] |
| DoorDash | **DeepRed dispatch:** select Dashers, decide when to dispatch and whether to batch orders. | Models of restaurant ready time, travel time and offer acceptance feed an offer-ranking and mixed-integer optimization system. | **No numerical delivery-time or earnings lift** attributed to this system in the account. [web:22] |
| DoorDash | **Customer-facing delivery ETAs:** predict consistently across browsing and checkout while representing uncertainty. | *NextGen ETA* uses shared multi-task deep-learning layers, task-specific heads and probabilistic forecasts. | Reports improved consumer outcomes and substantially better Australian predictions, **without a numerical business lift** in that account. [web:21] |
| DoorDash | **More accurate delivery ETAs under changing local conditions.** | DeepNet, CrossNet and Transformer encoders combined in an MLP-based model; time-series signals and probabilistic prediction. | **20% relative improvement in ETA accuracy**; the post does not define the accuracy measure or report a separate bookings lift. [web:23] |
| DoorDash | **Restaurant prep-time prediction:** avoid sending Dashers too early or delaying food delivery. | Two-stage adjustment for censored observations followed by gradient-boosted regression. | Reports a **statistically and economically significant improvement in delivery speed**, without a percentage or seconds figure. [web:26] |
| DoorDash | **Auto Order Release:** time when restaurants begin preparing orders to reduce Dasher waiting. | LightGBM prep-time prediction compared with predicted Dasher arrival and pickup times. | Reports reduced Dasher wait and delivery times, **without a numerical lift**. [web:18] |
| DoorDash | **Dasher incentive allocation:** anticipate regional supply shortages and place peak-pay incentives within budget. | LightGBM supply–demand forecasts plus constrained mixed-integer optimization. | Reports reductions in delivery time, cancellations and extreme lateness, and more reliable budget performance; **no numerical lift supplied**. [web:196] |
| DoorDash | **Personalized promotions:** target consumers likely to respond rather than send offers broadly. | Heterogeneous-treatment-effect/conditional-average-treatment-effect models using causal meta-learners. | **Promotional costs fell 33%** for the identified target population. [web:189] |
| DoorDash | **Product and dish search:** retrieve and rank results reflecting search intent. | Learning-to-rank/personalization; later query-understanding and retrieval improvements use LLMs. | The later retrieval system reported **nearly 30% more popular-dish-carousel triggering** and **more than 2% higher weighted precision-recall** for dish-intent queries; an updated ranker added **1.6%** on that relevance measure. [web:322][web:329] |
| Instacart | **Item availability:** show whether a product is likely to be on a particular store’s shelves. | Hierarchical **General–Trending–Real-Time** model: historical availability estimates, XGBoost for recent deviations, and latest shopper/retailer signals. | New serving design cut **computation costs about 80%**; online business metrics improved but their lift was not specified. An earlier account reported scoring **over 500 million listings hourly**. [web:348][web:353] |
| Instacart | **Out-of-stock substitutions:** recommend products customers will accept, including retailer-specific alternatives. | Candidate retrieval followed by a Siamese/two-tower-style deep acceptance model, blended with historical-engagement scores and retailer-aware ranking. | Candidate retrieval covered **more than 95% of shopper-selected replacements**; retailer-aware ranking significantly improved *replacement issues per delivery*, without a numerical lift. [web:174] |
| Instacart | **Contextual product and ad recommendations:** suggest the next useful item during a shopping session. | BERT-like Transformer treats product-ID interaction sequences as next-product prediction; a common retrieval layer serves multiple surfaces. | Cart recommendations produced a **30% lift in user cart additions**. [web:345] |
| Instacart | **Personalized search ranking across competing objectives**, including relevance, price and availability. | Contextual-bandit modeling, including an X-learner experiment and a lower-latency XGBoost model selected for production. | Initial test: **cart adds per search +0.66%**; multi-objective tests: approximately **+0.6% for Android users**. GMV moved positively but not significantly. [web:347] |
| Instacart | **Catalog attributes:** extract filterable claims, such as dietary properties, from product text and images. | Production *PARSE* platform uses multimodal LLM extraction, confidence scoring and human review. | Multimodal extraction increased recall **10% over text-only models** in a sheet-count comparison; one organic-claim setup achieved **95% accuracy**. These are extraction-quality, not sales, metrics. [web:172] |
| Grab | **Bullseye merchant promotions:** select offers for individual consumers while controlling merchant sales goals and promotion spending. | Customer-response predictions, a campaign-impact simulator, automated offer design and objective-constrained assignment. | Reports increased sales and reduced promotional spend for some campaigns, **without quantified lifts**. [web:273] |
| Grab | **Fraud syndicates:** find linked fake accounts, device farms, payment fraud and money-laundering patterns. | Graph connectivity features, graph analytics and graph neural networks feeding fraud detection. | Reports a graph platform of **over one billion nodes**; **no quantified fraud-loss reduction**. [web:51] |
| Grab | **Previously unseen GrabFood/GrabMart fraud patterns.** | Unsupervised *GraphBEAN* graph-anomaly detection, without labels for each new fraud method. | Reports faster identification of new fraudulent behavior, **without a numerical business lift**. [web:53] |
| Grab | **Personalization, advertising, churn and fraud prediction across services.** | User foundation model: Transformer pre-trained on tabular data and event sequences with masked-token and next-action objectives; embeddings feed downstream models. | Embeddings refreshed for **millions of active users daily** and supplied to dozens of systems; **no application-specific A/B lift** reported. [web:45] |
| Grab | **Incorrect GrabFood restaurant locations:** correct pickup coordinates that cause failed pickups and cancellations. | Statistical inference from driver GPS-ping sequences and pickup events, followed by operations verification; **not described as a trained ML model**. | Cancellations because drivers could not find incorrectly located restaurants fell **5×** after periodic corrections. [web:66] |
| Airbnb | **Home-search retrieval:** select promising listings before more expensive ranking. | Contrastively trained query-and-listing **two-tower embeddings** with approximate-nearest-neighbor retrieval. | Fully launched in Search and email; A/B tests found a **statistically significant bookings gain**, but the percentage was not disclosed. [web:107] |
| Airbnb | **Personalized home-search and email ranking:** reflect a guest’s long-term travel history and recent views. | *JourneyFormer* Transformer guest-sequence embeddings combined with live-query ranking; a later setwise ranker compares candidates together. | Search tests reported **+0.55% uncancelled bookers and +0.82% uncancelled nights** with long- and short-term sequences; the setwise stage added **+0.28% uncancelled bookings**. Email ranking yielded **+5.04% clicks**. [web:109] |
| Airbnb | **Map-search ranking:** prioritize listings likely to be booked given how guests attend to map pins. | Booking-probability ranking with models of uniform, tiered and distance-discounted map attention. | Map-recentering test: **uncancelled bookings +0.27%; map moves −1.5%**. [web:108] |
| Airbnb | **Trust and safety:** improve predictions for users and listings with little direct history. | Batch-computed **SIGN** graph embeddings used as features in downstream online models. | Reports significant downstream model gains; graph-embedding components were often among the **top 10 features**, but no fraud or safety-outcome percentage was given. [web:116] |

**Scope qualification:** Some highly relevant published results are not production-blog results. In particular, Lyft’s two quantified marketplace results above are from company-authored research papers, and Grab’s restaurant-coordinate correction is statistical/geospatial inference rather than an expressly trained ML model. DoorDash’s separately reported **6-second delivery-speed** and **1.5-second Dasher-efficiency** gains for deep-Q-learning dispatch were from an *offline simulator comparison*, so they are not presented above as production impact. [web:142][web:306][web:66][web:330]

Citations:
[2] https://www.uber.com/blog/raising-the-bar-on-ml-model-deployment-safety/
[3] https://www.uber.com/blog/tuning-model-performance/
[4] https://www.uber.com/blog/evolution-and-scale-of-ubers-delivery-search-platform/
[5] https://www.uber.com/blog/ml-education-at-uber-program-design-and-outcomes/
[6] https://www.uber.com/blog/supply-demand-big-data-platform/
[7] https://www.uber.com/blog/elastic-xgboost-ray/
[8] https://www.uber.com/blog/women-in-data-science-moving-the-world-with-data/
[9] https://www.uber.com/blog/slashing-ci-costs-at-uber/
[10] https://www.uber.com/blog/engineering-routing-engine/
[11] https://www.uber.com/blog/three-approaches-to-scaling-machine-learning-with-uber-seattle-engineering/
[12] https://www.uber.com/blog/simulated-marketplace/
[13] https://www.uber.com/blog/ml-education-at-uber/
[14] https://www.uber.com/blog/from-batch-to-streaming-accelerating-data-freshness-in-ubers-data-lake/
[15] https://www.uber.com/blog/optimal-feature-discovery-ml/
[16] https://www.uber.com/blog/capacity-recommendation-engine/
[1] https://eng.lyft.com/feed
[17] https://careersatdoordash.com/blog/doordash-customize-notifications-how-gnn-work/
[18] https://careersatdoordash.com/blog/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/
[19] https://careersatdoordash.com/blog/supercharging-doordashs-marketplace-decision-making-with-real-time-knowledge/
[20] https://careersatdoordash.com/blog/monitor-machine-learning-model-drift/
[21] https://careersatdoordash.com/blog/improving-etas-with-multi-task-models-deep-learning-and-probabilistic-forecasts/
[22] https://careersatdoordash.com/blog/using-ml-and-optimization-to-solve-doordashs-dispatch-problem/
[23] https://careersatdoordash.com/blog/deep-learning-for-smarter-eta-predictions/
[24] https://careersatdoordash.com/blog/data-at-doordash-transparent-ubiquitous-and-still-just-getting-started/
[25] https://careersatdoordash.com/blog/category/engineering/data-science-and-machine-learning/deep-learning/
[26] https://careersatdoordash.com/blog/solving-for-unobserved-data-in-a-regression-model/
[27] https://careersatdoordash.com/blog/how-artificial-intelligence-powers-logistics-at-doordash/
[28] https://careersatdoordash.com/blog/homepage-recommendation-with-exploitation-and-exploration/
[29] https://careersatdoordash.com/blog/how-doordash-leverages-llms-for-better-search-retrieval/
[30] https://careersatdoordash.com/blog/unleashing-the-power-of-large-language-models-at-doordash-for-a-seamless-shopping-adventure/
[31] https://careersatdoordash.com/blog/doordash-llms-to-evaluate-search-result-pages/
[32] https://tech.instacart.com/feed
[33] https://tech.instacart.com/enhancing-foodstorm-with-ai-image-generation-d76a74867fa4
[44] https://engineering.grab.com/
[45] https://engineering.grab.com/user-foundation-models-for-grab
[46] https://engineering.grab.com/categories/engineering/
[47] https://engineering.grab.com/powering-ai-led-research-through-simulation
[48] https://engineering.grab.com/peak-shift-demand-travel-trends
[49] https://engineering.grab.com/attribution-platform
[50] https://engineering.grab.com/tags
[51] https://engineering.grab.com/graph-networks
[52] https://engineering.grab.com/categories/data-science/
[53] https://engineering.grab.com/graph-anomaly-model
[54] https://engineering.grab.com/the-data-and-science-behind-grabshare-part-i
[55] https://engineering.grab.com/techblog_-dispatchgym
[56] https://engineering.grab.com/blog/24/
[57] https://engineering.grab.com/graph-for-fraud-detection
[58] https://engineering.grab.com/introducing-the-sop-drive-llm-agent-framework
[34] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Understanding-Guest-Preferences-and-Optimizing-.pdf
[35] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Predicting-Potential-Customer-Support-Needs-and-OptimizingSearch-Ranking.pdf
[36] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Learning-and-Applying-Airbnb-Listing-Embeddings-.pdf
[37] https://airbnb.tech/feed/
[38] https://airbnb.tech/infrastructure/academic-publications-airbnb-tech-2025-year-in-review/
[39] https://airbnb.tech/wp-content/uploads/sites/19/2023/12/CIKM.pdf
[40] https://airbnb.tech/wp-content/uploads/sites/19/2026/01/Quality-Externalities-Full-Paper.pdf
[41] https://airbnb.tech/wp-content/uploads/sites/19/2025/10/kdd2023-inexp.pdf
[42] https://airbnb.tech/research/academic-papers/
[43] https://airbnb.tech/ai-ml/personalizing-airbnb-search-by-learning-from-the-guest-journey/
[89] https://arxiv.org/pdf/2310.13810v2
[90] https://blog.bytebytego.com/p/how-lyft-built-an-ml-platform-that
[91] https://www.lyft.com/blog/posts/how-lyft-uses-ai-to-get-you-where-you-want-to-go-faster
[92] https://www.alphaxiv.org/abs/2310.13810v2
[93] https://github.com/TurboML-Inc/awesome-real-time-ml
[94] https://www.deeplearning.ai/blog/working-ai-at-the-office-with-research-scientist-or-cohen
[95] https://blog.bytebytego.com/p/how-lyft-uses-ml-to-make-100-million
[96] https://www.emergentmind.com/papers/2310.13810
[97] https://eng.lyft.com/feed
[98] https://www.datacamp.com/podcast/machine-learning-for-ride-sharing-at-lyft
[99] https://www.gurobi.com/resources/case-studies/lyft-optimizing-driver-incentive-plans-and-adapting-to-market-changes
[100] https://www.lyft.com/blog/posts/lets-talk-about-lyft-pricing
[101] https://arxiv.org/pdf/2104.14740
[102] https://www.lyft.com/blog/posts/lyft-nvidia-agentic-ai
[103] https://www.scribd.com/document/780298842/azagirre-et-al-2024-a-better-match-for-drivers-and-riders-reinforcement
[74] https://www.uber.com/in/en/blog/deepeta-how-uber-predicts-arrival-times/
[75] https://www.markhub24.com/post/uber-s-real-time-driver-tracking-and-eta-system
[76] https://dev.to/lovestaco/how-uber-knows-your-driver-is-7-minutes-away-ao3
[77] https://www.louisbouchard.ai/uber-deepeta/
[78] https://www.uber.com/ua/en/blog/engineering/page/18/
[79] https://www.uber.com/gb/en/blog/reinforcement-learning-for-modeling-marketplace-balance/
[80] https://www.uber.com/in/en/blog/scaling-real-time-traffic/
[81] https://news.lavx.hu/article/uber-s-deepeta-system-cuts-long-trip-errors-by-6-worth-100-million-annually
[82] https://www.marktechpost.com/2022/02/15/uber-explores-deep-learning-to-develop-deepeta-a-low-latency-deep-neural-network-architecture-for-eta-prediction/
[83] https://www.uber.com/de/en/blog/solving-multiple-knapsack/page/2/
[84] https://sixtenet.com/blog/inside-great-systems/inside-uber-the-engineering-decisions-behind-the-worlds-largest-real-time-mobility-platform
[85] https://thewillseducation.com/case-studies/uber
[86] https://arxiv.org/html/2206.02127v1
[87] https://eng.uber.com/
[88] https://unanswered.io/guide/how-uber-uses-ai-and-machine-learning
[59] https://engineering.grab.com/how-ai-is-transforming-analytics
[60] https://engineering.grab.com/powering-ai-led-research-through-simulation
[61] https://engineering.grab.com/from-firefighting-to-building
[62] https://engineering.grab.com/how-grab-builds-and-runs-ai-agents-at-scale
[63] https://engineering.grab.com/blog/10/
[64] https://engineering.grab.com/the-data-and-science-behind-grabshare-part-i
[65] https://engineering.grab.com/categories/engineering/
[66] https://engineering.grab.com/correcting-restaurant-locations-harnessing-wisdom-of-the-crowd
[67] https://engineering.grab.com/tags
[68] https://engineering.grab.com/techblog_-dispatchgym
[69] https://engineering.grab.com/user-foundation-models-for-grab
[70] https://engineering.grab.com/grabx-decision-engine
[71] https://engineering.grab.com/pharos-searching-nearby-drivers-on-road-network-at-scale
[72] https://engineering.grab.com/using-real-world-patterns-to-improve-matching
[73] https://engineering.grab.com/search-architecture-revamp
[105] https://tech.instacart.com/feed
[106] https://tech.instacart.com/enhancing-foodstorm-with-ai-image-generation-d76a74867fa4
[104] https://eng.lyft.com/feed
[107] https://airbnb.tech/ai-ml/embedding-based-retrieval-for-airbnb-search/
[108] https://airbnb.tech/ai-ml/improving-search-ranking-for-maps/
[109] https://airbnb.tech/ai-ml/personalizing-airbnb-search-by-learning-from-the-guest-journey/
[110] https://airbnb.tech/ai-ml/the-guest-journey-updated-in-real-time-extending-airbnbs-sequence-recommender-with-chronon/
[111] https://airbnb.tech/ai-ml/recommending-travel-destinations-to-help-users-explore/
[112] https://airbnb.tech/ai-ml/
[113] https://airbnb.tech/ai-ml/listening-learning-and-helping-at-scale-how-machine-learning-transforms-airbnbs-voice-support-experience/
[114] https://airbnb.tech/ai-ml/beyond-the-model-engineering-ai-infra-with-scientific-judgement/
[115] https://airbnb.tech/ai-ml/how-airbnb-measures-listing-lifetime-value/
[116] https://airbnb.tech/ai-ml/graph-machine-learning-at-airbnb-2/
[142] https://arxiv.org/abs/2310.13810
[143] https://www.linkedin.com/in/baptisterichard
[144] https://api.emergentmind.com/papers/2310.13810
[145] https://insight.kellogg.northwestern.edu/article/at-their-best-self-learning-algorithms-can-be-a-win-win-win
[146] https://www.alphaxiv.org/@sebastien-martin
[147] https://web.mit.edu/1.041/www/lectures/L13-markov-decision-processes-2026sp.pdf
[148] https://dblp.org/pid/144/4708.html
[149] https://dblp.uni-trier.de/pid/359/3265.html
[150] https://www.linkedin.com/in/dj-rich-90b91753
[151] https://www.alphaxiv.org/abs/2310.13810v2
[152] https://www.lyft.com/blog/posts/lets-talk-about-lyft-pricing
[153] https://github.com/ashishps1/awesome-engineering-articles
[154] https://www.lyft.com/blog/posts/how-lyft-uses-ai-to-get-you-where-you-want-to-go-faster
[155] https://devblogs.sh/library/lyft
[156] https://www.datainterview.com/blog/lyft-machine-learning-engineer-interview
[117] https://www.uber.com/blog/engineering/data/page/4/
[118] https://www.uber.com/blog/engineering/ai/page/3/
[119] https://www.uber.com/blog/engineering/page/8/
[120] https://www.uber.com/blog/page/23/
[121] https://www.uber.com/blog/search/data+analytics/page/4/
[122] https://www.uber.com/blog/introducing-the-prompt-engineering-toolkit/
[123] https://www.uber.com/blog/evolution-and-scale-of-ubers-delivery-search-platform/
[124] https://www.uber.com/blog/research/page/6/
[125] https://www.uber.com/blog/raising-the-bar-on-ml-model-deployment-safety/
[126] https://www.uber.com/blog/uber-open-summit-sofia/
[127] https://company.instacart.com/tech-innovation/supercharging-ml-ai-foundations-at-instacart
[128] https://blogboard.io/source-feed/source/instacart-engineering-&-product-blog
[129] https://tech.instacart.com/feed
[130] https://daily.dev/posts/agentic-machine-learning-modeling-at-instacart-6gqxijbzq
[131] https://company.instacart.com/tech-innovation/page/3
[132] https://github.com/ausgustos/study-awesome-engineering-articles/blob/main/README.md
[133] https://github.com/ashishps1/awesome-engineering-articles/blob/main/README.md
[134] https://www.predictiveanalyticsworld.com/machinelearningtimes/redhow-to-build-a-recommendation-system-at-scale-insights-from-instacart/14098/
[135] https://www.zenml.io/llmops-database/human-supervised-agentic-modeling-for-marketplace-and-catalog-ml
[136] https://www.linkedin.com/posts/shishirkumarprasad_how-instacart-uses-machine-learning-to-suggest-activity-7260387505827426304-rRG0
[137] https://www.predictiveanalyticsworld.com/machinelearningtimes/how-to-build-a-recommendation-system-at-scale-insights-from-instacart/14098/
[138] https://www.instacart.com/company/how-its-made/page/3/
[139] https://investors.instacart.com/static-files/1af2ce08-4b94-4251-b9fe-99d8715a124b
[140] https://company.instacart.com/tech-innovation/ai-driven-development-at-instacart-scaling-impact-and-increasing-velocity
[141] https://www.linkedin.com/posts/hannahgardner_how-instacart-uses-machine-learning-to-suggest-activity-7260662194428628992-GvLH
[172] https://www.instacart.com/company/tech-innovation/scaling-catalog-attribute-extraction-with-multi-modal-llms
[173] https://docs.instacart.com/storefront/learn_about_your_storefront/shopping/catalog/stock_levels
[174] https://www.predictiveanalyticsworld.com/machinelearningtimes/how-instacart-uses-machine-learning-to-suggest-replacements-for-out-of-stock-products/14118/
[175] https://docs.instacart.com/storefront/concepts/recommendations
[176] https://www.instacart.com/company/how-its-made/the-story-behind-an-instacart-order-part-3-predicting-the-shop/
[177] https://www.instacart.com/company/tech-innovation/the-story-behind-an-instacart-order-part-3-predicting-the-shop
[178] https://docs.instacart.com/storefront/learn_about_your_storefront/cart_and_checkout/replacements/
[179] https://podcasts.apple.com/pe/podcast/out-of-stock-product-recommendations-with/id1709920384?i=1000737082178&l=en-GB
[180] https://www.instacart.com/company/how-its-made/the-story-behind-an-instacart-order-part-1-building-a-digital-catalog/
[181] https://www.instacart.com/company/tech-innovation/building-an-on-demand-fulfillment-engine-is-hard
[182] https://tech.instacart.com/feed
[183] https://www.instacart.com/company/how-its-made/page/3/
[184] https://www.instacart.com/company/tech-innovation/how-instacart-uses-machine-learning-driven-autocomplete-to-help-people-fill-their-carts
[185] https://www.instacart.com/company/how-its-made/how-instacart-uses-machine-learning-driven-autocomplete-to-help-people-fill-their-carts/
[186] https://spectrum.ieee.org/the-algorithms-that-make-instacart-roll
[157] https://www-api.ibm.com/adobe/assets/urn:aaid:aem:907ebb67-b27f-4340-a4af-04169b5861e0/original/as/generating-roi-with-ai.pdf
[158] https://www.lyft.com/blog/posts/lets-talk-about-lyft-pricing
[159] https://blog.bytebytego.com/p/how-lyft-built-an-ml-platform-that
[160] https://www.linkedin.com/pulse/data-pill-039-unleashing-ml-power-lyft-spotify-bigdata-adam-kawa
[161] https://eng.lyft.com/feed
[162] https://github.com/TurboML-Inc/awesome-real-time-ml
[163] https://odsc.com/speakers/powering-millions-of-real-time-decisions-with-distributed-model-serving/
[164] https://link.springer.com/chapter/10.1007/979-8-8688-0376-5_5?error=cookies_not_supported&code=3ba9698f-03f4-4643-8f2f-22aa24c017a5
[165] https://github.com/ashishps1/awesome-engineering-articles/blob/main/README.md
[166] https://www.evidentlyai.com/blog/how-to-build-ml-platform
[167] https://github.com/ashishps1/awesome-engineering-articles
[168] https://www.simplyhired.com/job/vmqwnSMQHlHD--mFS2zydLvUXuI8dwOuaO48lxM43vrE6CLP0dL2JA
[169] https://www.simplyhired.com/job/LdE3basE5L9m76VQUZuZ95n4FA-_X-KQCFMCcAUUnGwcwn5nFYGsvA
[170] https://help.lyft.com/hc/en-us/all/articles/115012925707-Ride-pricing-and-charges
[171] https://github.com/themanojdesai/genai-llm-ml-case-studies/blob/main/case-studies/by-company/lyft/pricing-at-lyft.md
[187] https://careersatdoordash.com/blog/part-1-doordash-2024-summer-intern-projects/
[188] https://careersatdoordash.com/blog/optimizing-marketing-spend-with-ml/
[189] https://careersatdoordash.com/blog/causal-modeling-to-get-more-value-from-flat-experiment-results/
[190] https://careersatdoordash.com/blog/how-doordash-is-scaling-its-data-platform/
[191] https://careersatdoordash.com/blog/enabling-efficient-machine-learning-model-serving/
[192] https://careersatdoordash.com/blog/ship-to-production-darkly-moving-fast-staying-safe-with-ml-deployments/
[193] https://careersatdoordash.com/blog/how-we-designed-road-distances-in-doordash-search-2/
[194] https://careersatdoordash.com/blog/using-twin-neural-networks-to-train-catalog-item-embeddings/
[195] https://careersatdoordash.com/blog/experiment-faster-and-with-less-effort/
[196] https://careersatdoordash.com/blog/managing-supply-and-demand-balance-through-machine-learning/
[197] https://careersatdoordash.com/blog/scaling-geospatial-innovation-with-a-location-simulator/
[198] https://careersatdoordash.com/blog/privacy-engineering-at-doordash-drive/
[199] https://careersatdoordash.com/blog/doordash-fast-travel-estimates/
[200] https://careersatdoordash.com/blog/increasing-operational-efficiency-with-scalable-forecasting/
[201] https://careersatdoordash.com/blog/doordash-2022-summer-intern-survey-post/
[232] https://engineering.grab.com/correcting-restaurant-locations-harnessing-wisdom-of-the-crowd
[233] https://engineering.grab.com/how-ai-is-transforming-analytics
[234] https://engineering.grab.com/how-grab-builds-and-runs-ai-agents-at-scale
[235] https://engineering.grab.com/how-we-improved-agent-chat-efficiency-with-ml
[236] https://engineering.grab.com/pharos-searching-nearby-drivers-on-road-network-at-scale
[237] https://engineering.grab.com/user-foundation-models-for-grab
[238] https://engineering.grab.com/ml-predictive-autoscaling-for-flink
[239] https://engineering.grab.com/grabx-decision-engine
[240] https://engineering.grab.com/powering-ai-led-research-through-simulation
[241] https://engineering.grab.com/blog/24/
[242] https://engineering.grab.com/peak-shift-demand-travel-trends
[243] https://engineering.grab.com/grab-bench-evaluating-ai
[244] https://engineering.grab.com/grab-posisi
[245] https://engineering.grab.com/grabshare-at-the-intelligent-transportation-engineering-conference
[246] https://engineering.grab.com/the-data-and-science-behind-grabshare-part-i
[202] https://airbnb.tech/feed/
[203] https://airbnb.tech/category/ai-ml/feed/
[204] https://airbnb.tech/blog/
[205] https://airbnb.tech/research/academic-papers/
[206] https://airbnb.tech/infrastructure/academic-publications-airbnb-tech-2025-year-in-review/
[207] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Predicting-Potential-Customer-Support-Needs-and-OptimizingSearch-Ranking.pdf
[208] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Understanding-User-Booking-Intent-at-Airbnb.pdf
[209] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Learning-and-Applying-Airbnb-Listing-Embeddings-.pdf
[210] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Understanding-Guest-Preferences-and-Optimizing-.pdf
[211] https://airbnb.tech/ai-ml/personalizing-airbnb-search-by-learning-from-the-guest-journey/
[212] https://airbnb.tech/ai-ml/embedding-based-retrieval-for-airbnb-search/
[213] https://airbnb.tech/ai-ml/the-guest-journey-updated-in-real-time-extending-airbnbs-sequence-recommender-with-chronon/
[214] https://airbnb.tech/ai-ml/graph-machine-learning-at-airbnb-2/
[215] https://airbnb.tech/infrastructure/scaling-airbnbs-identity-graph-with-a-unified-knowledge-graph-infrastructure/
[216] https://airbnb.tech/wp-content/uploads/sites/19/2025/10/TB-290-CIKM25-4.pdf
[247] https://eng.lyft.com/feed
[248] https://github.com/ashishps1/awesome-engineering-articles/blob/main/README.md
[249] https://investor.lyft.com/financials/sec-filings/content/0001759509-22-000062/lyft-20220630.htm
[250] https://investor.lyft.com/sec-filings/all-sec-filings/content/0001759509-22-000043/lyft-20220331.htm
[251] https://github.com/ashishps1/awesome-engineering-articles
[252] https://github.com/ausgustos/study-awesome-engineering-articles
[253] https://investor.lyft.com/news-events-presentations/press-releases/detail/132/lyft-announces-q422-and-fiscal-2022-results
[254] https://github.com/ausgustos/study-awesome-engineering-articles/blob/main/README.md
[255] https://s27.q4cdn.com/263799617/files/doc_financials/2022/q4/lyft-q4-2022-earnings-supplemental-datafV.pdf
[256] https://investor.lyft.com/financials/sec-filings/content/0001759509-23-000028/lyft-20221231.htm
[257] https://smart-lab.ru/q/LYFT/GAAP/cost_of_production/
[217] https://www.uber.com/blog/engineering/ai/page/3/
[218] https://www.uber.com/blog/engineering/data/page/5/
[219] https://www.uber.com/blog/personalized-marketing-at-scale/
[220] https://www.uber.com/blog/elastic-xgboost-ray/
[221] https://www.uber.com/blog/analyzing-customer-user-experience/
[222] https://www.uber.com/blog/uber-eats-risk-team/
[223] https://www.uber.com/blog/evolution-and-scale-of-ubers-delivery-search-platform/
[224] https://www.uber.com/blog/raising-the-bar-on-ml-model-deployment-safety/
[225] https://www.uber.com/blog/women-in-data-science/
[226] https://www.uber.com/blog/orders-near-you/
[227] https://www.uber.com/blog/managing-data-workflows-at-scale/
[228] https://www.uber.com/blog/machine-learning-capacity-safety/
[229] https://www.uber.com/blog/lucene-version-upgrade/
[230] https://www.uber.com/blog/restaurants-path-to-purchase/
[231] https://www.uber.com/blog/slashing-ci-costs-at-uber/
[258] https://www.dataengineeringweekly.com/p/data-engineering-weekly-124
[259] https://x.com/lyfteng
[260] https://help.lyft.com/hc/en-us/all/articles/115013080508-Phone-software-recommendations-and-settings
[261] https://zw.linkedin.com/posts/panwu_lyft2vecembeddings-at-lyft-activity-7048647842961240064-X6Fl
[262] https://github.com/ausgustos/study-awesome-engineering-articles
[263] https://eng.lyft.com/feed
[264] https://github.com/ashishps1/awesome-engineering-articles
[265] https://github.com/ashishps1/awesome-engineering-articles/blob/main/README.md
[266] https://www.lyft.com/?locale_language
[267] https://github.com/ausgustos/study-awesome-engineering-articles/blob/main/README.md
[268] https://github.com/themanojdesai/genai-llm-ml-case-studies/blob/main/case-studies/by-company/lyft/the-recommendation-system-at-lyft.md
[269] https://www.linkedin.com/in/leventi
[270] https://www.lyft.com/blog/posts/how-lyft-uses-ai-to-get-you-where-you-want-to-go-faster
[271] https://www.linkedin.com/in/matthewphsmith
[272] https://builtin.com/job/software-engineer-pricing/3069565
[288] https://www.uber.com/us/en/blog/fraud-detection/
[289] https://www.uber.com/us/en/blog/project-radar-intelligent-early-fraud-detection/
[290] https://www.uber.com/ma/en/blog/engineering/uber-ai/page/5/
[291] https://www.uber.com/gh/en/blog/evolution-and-scale-of-ubers-delivery-search-platform/
[292] https://scholar.google.com/citations?user=mFvN1icAAAAJ&hl=en
[293] https://static.sched.com/hosted_files/opensearchconna2025/62/Shanshan%20Song%20V3.pdf
[294] https://www.uber.com/au/en/blog/uber-eats-search-pipeline/
[295] https://habr.com/en/articles/562134/
[296] https://ar5iv.labs.arxiv.org/html/2603.06586
[297] https://www.zenml.io/llmops-database/large-scale-semantic-search-platform-for-food-delivery
[298] https://github.com/spotify2junkie/applied-fraud-ml
[299] https://github.com/TheDeepakverma/GenAI-LLM-ML-case-studies/blob/main/case-studies/by-company/uber/project-radar-intelligent-early-fraud-detection-system-with-humans-in-the-loop.md
[300] https://www.linkedin.com/pulse/ai-search-integration-enterprises-lessons-from-doordash-bkvjc
[301] https://seattledataguy.substack.com/p/can-palantir-take-over-the-entire
[302] https://www.infoq.com/presentations/optimization-search-uber/
[273] https://engineering.grab.com/scaling-marketing-for-merchants
[274] https://engineering.grab.com/cdp-scenarios
[275] https://engineering.grab.com/user-foundation-models-for-grab
[276] https://engineering.grab.com/categories/engineering/
[277] https://engineering.grab.com/how-ai-is-transforming-analytics
[278] https://engineering.grab.com/the-data-and-science-behind-grabshare-part-i
[279] https://engineering.grab.com/peak-shift-demand-travel-trends
[280] https://engineering.grab.com/experiment-chat-booking-cancellations
[281] https://engineering.grab.com/powering-ai-led-research-through-simulation
[282] https://engineering.grab.com/understanding-supply-demand-ride-hailing-data
[283] https://engineering.grab.com/ml-predictive-autoscaling-for-flink
[284] https://engineering.grab.com/how-we-improved-agent-chat-efficiency-with-ml
[285] https://engineering.grab.com/pharos-searching-nearby-drivers-on-road-network-at-scale
[286] https://engineering.grab.com/grabshare-at-the-intelligent-transportation-engineering-conference
[287] https://engineering.grab.com/big-data-real-time-presto-talariadb
[303] https://www.lyft.com/blog/posts/lets-talk-about-lyft-pricing
[304] https://eng.lyft.com/feed
[305] https://help.lyft.com/hc/en-us/all/articles/115012925707-Ride-pricing-and-charges
[306] https://arxiv.org/pdf/2104.14740
[307] https://www.lyft.com/rider
[308] https://x.com/lyfteng
[309] https://help.lyft.com/hc/en-us/all/articles/115013080508-Phone-software-recommendations-and-settings
[310] https://help.lyft.com/hc/en-us/all/articles/115013079948-driver-and-passenger-ratings
[311] https://help.lyft.com/hc/en-us/all/articles/115012926147-How-to-navigate-a-ride
[312] https://help.lyft.com/hc/en-us/all/articles/115012925707-The-rider-s-guide-to-Lyft-charges-and-payments
[313] https://help.lyft.com/business/hc/en-us/articles/360018624554-Sending-rides-for-your-people-with-Concierge
[314] https://help.lyft.com/hc/en-us/all/articles/4819516913-Preferred-Driver-for-riders
[315] https://help.lyft.com/hc/en-us/all/articles/115013081128-Using-location-filters
[316] https://www.lyft.com/blog/posts/how-lyft-uses-ai-to-get-you-where-you-want-to-go-faster
[317] https://www.lyft.com/?locale_language
[333] https://airbnb.tech/ai-ml/how-airbnb-measures-listing-lifetime-value/
[334] https://airbnb.tech/ai-ml/how-we-knew-covid-was-over-and-what-our-models-had-to-unlearn/
[335] https://airbnb.tech/ai-ml/
[336] https://airbnb.tech/ai-ml/personalizing-airbnb-search-by-learning-from-the-guest-journey/
[337] https://airbnb.tech/ai-ml/embedding-based-retrieval-for-airbnb-search/
[338] https://airbnb.tech/ai-ml/beyond-the-model-engineering-ai-infra-with-scientific-judgement/
[339] https://airbnb.tech/ai-ml/graph-machine-learning-at-airbnb-2/
[340] https://airbnb.tech/ai-ml/improving-search-ranking-for-maps/
[341] https://airbnb.tech/ai-ml/recommending-travel-destinations-to-help-users-explore/
[342] https://airbnb.tech/ai-ml/the-guest-journey-updated-in-real-time-extending-airbnbs-sequence-recommender-with-chronon/
[343] https://airbnb.tech/ai-ml/listening-learning-and-helping-at-scale-how-machine-learning-transforms-airbnbs-voice-support-experience/
[344] https://airbnb.tech/ai-ml/t-leaf-taxonomy-learning-and-evaluation-framework/
[345] https://tech.instacart.com/feed
[346] https://tech.instacart.com/enhancing-foodstorm-with-ai-image-generation-d76a74867fa4
[347] https://www.instacart.com/company/tech-innovation/using-contextual-bandit-models-in-large-action-spaces-at-instacart
[348] https://www.instacart.com/company/tech-innovation/how-instacart-modernized-the-prediction-of-real-time-availability-for-hundreds-of-millions-of-items-while-saving-costs
[349] https://www.instacart.com/company/tech-innovation/building-the-intent-engine-how-instacart-is-revamping-query-understanding-with-llms
[350] https://www.instacart.com/company/tech-innovation/how-instacart-uses-machine-learning-driven-autocomplete-to-help-people-fill-their-carts
[351] https://www.instacart.com/company/tech-innovation/instacarts-item-availability-architecture-solving-for-scale-and-consistency
[352] https://www.instacart.com/company/tech-innovation/turbocharging-customer-support-chatbot-development-with-llm-based-automated-evaluation
[353] https://www.instacart.com/company/tech-innovation/the-story-behind-an-instacart-order-part-3-predicting-the-shop
[354] https://www.instacart.com/company/tech-innovation/distributed-machine-learning-at-instacart
[355] https://www.instacart.com/company/tech-innovation/personalizing-recommendations-for-a-learning-user
[356] https://www.instacart.com/company/tech-innovation/the-story-behind-an-instacart-order-part-2-browsing-and-buying
[318] https://careersatdoordash.com/blog/deep-learning-for-smarter-eta-predictions/
[319] https://careersatdoordash.com/blog/solving-for-unobserved-data-in-a-regression-model/
[320] https://careersatdoordash.com/blog/monitor-machine-learning-model-drift/
[321] https://careersatdoordash.com/blog/part-2-doordash-2024-summer-intern-projects/
[322] https://careersatdoordash.com/blog/3-changes-to-expand-doordashs-product-search/
[323] https://careersatdoordash.com/blog/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/
[324] https://careersatdoordash.com/blog/managing-supply-and-demand-balance-through-machine-learning/
[325] https://careersatdoordash.com/blog/understanding-search-intent-with-better-recall/
[326] https://careersatdoordash.com/blog/how-doordash-built-an-ensemble-learning-model-for-time-series-forecasting/
[327] https://careersatdoordash.com/blog/improving-etas-with-multi-task-models-deep-learning-and-probabilistic-forecasts/
[328] https://careersatdoordash.com/blog/improving-experimental-power-through-control-using-predictions-as-covariate-cupac/
[329] https://careersatdoordash.com/blog/how-doordash-leverages-llms-for-better-search-retrieval/
[330] https://careersatdoordash.com/blog/reinforcement-learning-for-on-demand-logistics/
[331] https://careersatdoordash.com/blog/retraining-ml-models-covid-19/
[332] https://careersatdoordash.com/blog/homepage-recommendation-with-exploitation-and-exploration/
[357] https://www.lyft.com/blog/posts/how-lyft-uses-ai-to-get-you-where-you-want-to-go-faster
[358] https://ride.guru/content/newsroom/how-lyft-uses-machine-learning-to-optimize-rides-in-2024
[359] https://algomaster.io/learn/eng-blogs
[360] https://eng.lyft.com/feed
[361] https://devpress.csdn.net/k8s/62f4e8b77e66823466189300.html
[362] https://github.com/ashishps1/awesome-engineering-articles/blob/main/README.md
[363] https://www.linkedin.com/posts/sarthakrastogi_ai-llms-activity-7267511236345360384-mSBR
[364] https://github.com/themanojdesai/genai-llm-ml-case-studies/blob/main/case-studies/by-company/lyft/pricing-at-lyft.md
[365] https://github.com/ashishps1/awesome-engineering-articles
[366] https://github.com/ausgustos/study-awesome-engineering-articles
[367] https://www.techinterview.org/post/3233460306/lyft-interview-guide-2026-rideshare-engineering-real-time-dispatch-and-safety-systems/
[368] https://github.com/ausgustos/study-awesome-engineering-articles/blob/main/README.md
[369] https://www.lyft.com/blog/posts/lyft-ads-rider-graph
[370] https://www.datacamp.com/podcast/machine-learning-for-ride-sharing-at-lyft
[371] https://github.com/nikitosssobur/applied-ml-papers-and-tech-blogs

````
