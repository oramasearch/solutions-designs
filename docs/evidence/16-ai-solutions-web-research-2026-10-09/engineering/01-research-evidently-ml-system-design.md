# 01-research-evidently-ml-system-design

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** Survey the Evidently AI 'ML system design' database of 300+ (now 650+) case studies from companies. What are the most common categories of production ML use cases in it (e.g. recommendation, search ranking, fraud, ETA prediction, demand forecasting, pricing, content moderation, LLM/RAG, CV), and list specific notable case studies per category with company names. Which less obvious business problems appear (e.g. ETA prediction, dispatch, delivery time, supply positioning, image quality, listing quality, address resolution, catalog enrichment)?
- **Timestamp (UTC):** 2026-10-09T20:17:33.403Z

## Response (verbatim)

````
**Search and recommendation are the clearest recurring use cases** in Evidently AI’s collection: Evidently calls recommender systems, search and ranking, and fraud detection its most popular ML-use-case tags, and its later analysis finds that search and recommendations together account for roughly **one-quarter** of the cases. Operations automation is another dominant theme. The collection described as 650+ cases has since grown: Evidently’s published analysis counts **805 production applications from 185 companies**. Its tags overlap, so the categories below are not a ranking with mutually exclusive counts; LLM/RAG and computer vision describe technologies that can serve several business problems.[web:1][web:28][web:26]

| Category or business problem | Notable case studies (company — case) | What the system does |
|---|---|---|
| **Recommendations and personalization** | Netflix — *Foundation Model for Personalized Recommendation*; Pinterest — *PinSage: Graph Convolutional Neural Networks for Web-Scale Recommender Systems*; LinkedIn — *People You May Know*; DoorDash — *Homepage Recommendation with Exploitation and Exploration*.[web:179][web:178] | Selects content, connections, restaurants, or products for a particular user. |
| **Search, retrieval, and ranking** | Airbnb — *Improving Deep Learning for Ranking Stays at Airbnb*; Etsy — *Deep Learning for Search Ranking at Etsy*; Instacart — *Optimizing search relevance at Instacart using hybrid retrieval*; DoorDash — *Things Not Strings: Understanding Search Intent with Better Recall*.[web:178][web:179] | Finds plausible results, interprets queries, and orders listings or products. |
| **Fraud and marketplace trust** | Stripe — *How we built it: Stripe Radar*; Uber — *Project RADAR: Intelligent Early Fraud Detection System with Humans in the Loop*; Gojek — *Graph for fraud detection*; Wayfair — *Preventing Policy Abuse with Graph Neural Networks*.[web:178][web:179] | Scores transactions or behavior and flags suspicious activity and abuse. |
| **Demand and inventory forecasting** | DoorDash — *How DoorDash Built an Ensemble Learning Model for Time Series Forecasting*; Picnic — *Under the hood of Picnic’s demand forecasting model*; Uber — *Demand and ETR Forecasting at Airports*.[web:178][web:155] | Anticipates order volume, product demand, or ride demand so capacity can be planned. |
| **Pricing and valuation** | Lyft — *Pricing at Lyft*; Cars24 — *ML driven dynamic pricing @ CARS24*; Zillow — *Building the Neural Zestimate*.[web:178] | Sets or estimates prices for rides, used-car listings, and homes; Lyft combines ML with marketplace optimization.[web:181] |
| **Spam, harmful content, and moderation** | LinkedIn — *Viral spam content detection at LinkedIn*; Pinterest — *Fighting Spam using Clustering and Automated Rule Creation*; Yelp — *Yelp’s AI pipeline for inappropriate language detection in reviews*; Roblox — *Deploying ML for Voice Safety*.[web:178] | Reviews posts, accounts, text, or voice for policy violations. |
| **LLM, RAG, agents, and support** | DoorDash — *Path to high-quality LLM-based Dasher support automation*; Dropbox — *Building Dash: How RAG and AI agents help us meet the needs of businesses*; Microsoft — *How we built “Ask Learn”, the RAG-based knowledge service*; Uber — *Genie: Uber’s Gen AI On-Call Copilot*.[web:178][web:27] | Retrieves company knowledge to answer questions or automate support and internal workflows. **RAG is a method, not a separate business objective.**[web:28] |
| **Computer vision and visual product features** | Etsy — *Building Etsy’s Search by Image Feature*; Amazon — *How Project P.I. helps Amazon remove imperfect products*; Canva — *Ship Shape*; DoorDash — *How DoorDash Quickly Spins Up Multiple Image Recognition Use Cases*.[web:178][web:177] | Interprets images for visual search, product inspection, shape recognition, and other tasks. |
| **ETA and delivery-time prediction** | Uber — *DeepETA: How Uber Predicts Arrival Times Using Deep Learning*; DoorDash — *Improving ETAs with Multi-Task Models, Deep Learning, and Probabilistic Forecasts*; Swiggy — *Predicting Food Delivery Time at Cart*; OLX — *Machine Learning for Delivery Time Estimation*; Wayfair — *Delivery-Date Prediction*.[web:179] | Predicts not just travel time, but when an order or shipment will actually reach a customer. |
| **Dispatch and courier waiting time** | DoorDash — *Using ML and Optimization to Solve DoorDash’s Dispatch Problem* and *Reducing Dasher Wait Times*; Gojek — *How We Use Machine Learning to Match Drivers & Riders*.[web:179][web:159] | Estimates preparation time, travel time, and acceptance likelihood, then optimizes **who gets an order, whether orders are batched, and when to dispatch**.[web:182] |
| **Supply positioning and marketplace balance** | DoorDash — *Managing Supply and Demand Balance Through Machine Learning*; Uber — *Demand and ETR Forecasting at Airports* and its marketplace-forecasting work.[web:180][web:155][web:154] | Predicts where and when drivers will be needed, or how long they will wait for a request, to inform where supply should be positioned. |
| **Address resolution and location accuracy** | Swiggy — *Address Correction for Q-Commerce Part 1: Location Inaccuracy Classifier*, *Part 2: Geocoder*, and *Using deep learning to detect dissonance between address text and location*; Grab — *How We Harnessed the Wisdom of Crowds to Improve Restaurant Location Accuracy*.[web:179][web:52] | Detects mismatches between written addresses and map pins, corrects locations, and makes pickup and delivery more reliable. |
| **Image and listing quality** | Wayfair — *Predicting Image Quality in Product Reviews*; Cars24 — *Blur Classifier: Image Quality Detector*; Airbnb — *Wisdom of Unstructured Data: Building Airbnb’s Listing Knowledge from Big Text Data*.[web:76][web:179] | Prioritizes useful review photos, rejects blurry listing images, or extracts structured information from listing descriptions. |
| **Catalog enrichment and item matching** | DoorDash — *Building DoorDash’s Product Knowledge Graph with Large Language Models*; Walmart — *Extracting Product Attributes from PDFs using PAE Framework*; Coupang — *Matching duplicate items to improve catalog quality*; Instacart — *Scaling Catalog Attribute Extraction with Multi-modal LLMs*; Delivery Hero — *How Delivery Hero Uses Agentic AI for Building a Product Knowledge Base*.[web:179] | Turns messy merchant data into searchable attributes, matches duplicate products, and improves product discovery. |

The less obvious pattern is that production ML often improves the **inputs and decisions behind a transaction**, not just what a user sees: a correct address, a trustworthy image, a complete catalog entry, an accurately timed courier assignment, or enough drivers in the right place.[web:179][web:182][web:154]

Citations:
[1] https://www.evidentlyai.com/ml-system-design
[2] https://www.evidentlyai.com/blog-tag/case-study
[3] https://github.com/mallahyari/ml-practical-usecases
[4] https://www.linkedin.com/posts/kalyanksnlp_ml-llms-systemdesign-activity-7394217782843760640-_LC_
[5] https://www.evidently.com/case-studies
[6] https://www.linkedin.com/posts/ranadheer18_artificialintelligence-machinelearning-llm-activity-7385596827921870848-h4EQ
[7] https://www.evidentlyai.com/blog-category/community
[8] https://www.evidentlyai.com/blog
[9] https://arxiv.org/html/2502.05782v1
[10] https://www.linkedin.com/posts/elenasamuylova_650-ml-and-llm-use-cases-to-learn-from-activity-7361726707147448320-YlCi
[11] https://ethical.institute/mle/349.html
[12] https://ethical.institute/newsletter/349/
[13] https://www.evidently.com/use-cases
[14] https://www.linkedin.com/posts/abhishekrp2002_evidently-ai-ml-system-design-450-case-activity-7186671682835693568-uzai
[15] https://www.evidentlyai.com/
[16] https://www.evidentlyai.com/ml-system-design
[17] https://www.linkedin.com/posts/elenasamuylova_650-ml-and-llm-use-cases-to-learn-from-activity-7361726707147448320-YlCi
[18] https://www.linkedin.com/posts/ranadheer18_artificialintelligence-machinelearning-llm-activity-7385596827921870848-h4EQ
[19] https://www.linkedin.com/pulse/issue-238-ml-engineer-alejandro-saucedo
[20] https://www.evidentlyai.com/blog-tag/case-study
[21] https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/awesome.md
[22] https://www.evidently.com/case-studies
[23] https://www.evidentlyai.com/
[24] https://www.evidentlyai.com/blog
[25] https://docs.evidentlyai.com/docs/library/overview
[26] https://www.evidentlyai.com/blog/gen-ai-use-cases
[27] https://www.evidentlyai.com/blog/llm-applications
[28] https://www.evidentlyai.com/blog/gen-ai-applications
[29] https://www.evidentlyai.com/blog/how-to-build-ml-platform
[30] https://www.evidentlyai.com/blog/rag-examples
[31] https://www.evidentlyai.com/blog/gen-ai-applications
[32] https://www.evidentlyai.com/blog/how-to-build-ml-platform
[33] https://www.evidentlyai.com/blog/best-machine-learning-blogs
[34] https://www.evidentlyai.com/blog/llm-applications
[35] https://docs.evidentlyai.com/docs/library/overview
[36] https://docs.evidentlyai.com/introduction
[37] https://www.evidentlyai.com/blog/ai-risk
[38] https://www.evidentlyai.com/blog/how-wayflyer-creates-ml-model-cards
[39] https://www.evidentlyai.com/blog/rag-examples
[40] https://evidentlyai.github.io/evidently/api-reference/main/evidently.html
[41] https://github.com/evidentlyai/docs-old
[42] https://www.evidentlyai.com/blog/ml-monitoring-metrics
[43] https://www.evidentlyai.com/blog
[44] https://docs.evidentlyai.com/docs/platform/monitoring_overview
[45] https://github.com/evidentlyai/evidently/blob/main/README.md
[46] https://doordash.engineering/2016/10/21/data-at-doordash-transparent-ubiquitous-and-still-just-getting-started/
[47] https://doordash.engineering/2023/02/15/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/
[48] https://eng.uber.com/
[49] https://doordash.engineering/2020/06/29/doordashs-new-prediction-service/
[50] https://doordash.engineering/blog/page/4/
[51] https://doordash.engineering/2022/03/08/ship-to-production-darkly-moving-fast-staying-safe-with-ml-deployments/
[52] https://engineering.grab.com/correcting-restaurant-locations-harnessing-wisdom-of-the-crowd
[53] https://doordash.engineering/2021/10/12/doordash-2021-summer-intern-survey-post/
[54] https://doordash.engineering/2021/01/26/computational-graph-machine-learning-ensemble-model-support/
[55] https://doordash.engineering/blog/page/15/
[56] https://engineering.grab.com/pharos-searching-nearby-drivers-on-road-network-at-scale
[57] https://doordash.engineering/2023/04/04/2022-summer-intern-projects-article-3/
[58] https://doordash.engineering/category/backend/page/6/
[59] https://engineering.grab.com/categories/engineering/
[75] https://arxiv.org/html/2603.01486v1
[76] https://www.aboutwayfair.com/careers/tech-blog/predicting-image-quality-in-product-reviews
[77] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Understanding-Product-Quality-with-Unstructured-Data.pdf
[78] https://arxiv.org/html/2605.28733v1
[79] https://pubsonline.informs.org/doi/10.1287/mnsc.2022.4616
[80] https://www.aboutwayfair.com/careers/tech-blog/vision-language-models-in-the-wild-damage-diagnostics-from-customer-photos
[81] https://arxiv.org/html/2601.11769v1
[82] https://www.psc.edu/airbnb/
[83] https://academic.oup.com/jcr/advance-article-abstract/doi/10.1093/jcr/ucaf021/8108404
[84] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Learning-and-Applying-Airbnb-Listing-Embeddings-.pdf
[85] https://huggingface.co/datasets/zenml/llmops-database/raw/main/markdown_data/doordash-2024-909219f6-25e5-4c2a-9cb5-0550bb28b464.md
[86] https://academic.oup.com/jcr/article/52/4/800/8108404
[87] https://www.aboutwayfair.com/tech-blog/machine-learning-to-aid-3d-modeling-at-wayfair
[88] https://arxiv.org/html/2508.20396v1
[89] https://huggingface.co/datasets/zenml/llmops-database/blob/main/markdown_data/doordash-2024-909219f6-25e5-4c2a-9cb5-0550bb28b464.md
[60] https://www.evidentlyai.com/blog/llm-applications
[61] https://www.globalbigdataconference.com/134488/speaker-details/gary-ren.html
[62] https://www.zenml.io/mlops-tags/retraining
[63] https://careersatdoordash.com/career-areas/ai-ml/
[64] https://www.evidentlyai.com/blog/gen-ai-applications
[65] https://www.zenml.io/mlops-database/doordash-doordashs-ml-platform-end-to-end-ml-platform-for-real-time-and-batch-inference-with-lightgbmpytorch-and-cicd-tr
[66] https://digitaldefynd.com/IQ/doordash-using-ai/
[67] https://www.evidentlyai.com/blog/gen-ai-use-cases
[68] https://www.loopcv.pro/companies/doordash/
[69] https://www.evidentlyai.com/blog/best-machine-learning-blogs
[70] https://umbrex.com/resources/company-profiles/doordash/
[71] https://www.linkedin.com/in/joshua-l-b5632b3
[72] https://www.zenml.io/mlops-tags/model-registry
[73] https://www.datainterview.com/blog/doordash-machine-learning-engineer-interview
[74] https://www.evidentlyai.com/blog/ai-risk
[90] https://careersatdoordash.com/blog/improving-etas-with-multi-task-models-deep-learning-and-probabilistic-forecasts/
[91] https://www.uber.com/us/en/blog/forecasting-introduction/
[92] https://careersatdoordash.com/page/4/?search=data
[93] https://www.uber.com/us/en/blog/machine-learning/
[94] https://www.linkedin.com/posts/doordash_improving-etas-with-multi-task-models-deep-activity-7173422513538981889-ja-L
[95] https://doordash.engineering/blog/page/15/
[96] https://app.daily.dev/posts/improving-etas-with-multi-task-models-deep-learning-and-probabilistic-forecasts-e07ulbazy
[97] https://www.linkedin.com/in/adithya-chittajallu
[98] https://www.uber.com/us/en/blog/demand-and-etr-forecasting-at-airports/
[99] https://www.linkedin.com/in/saurabhdingolia
[100] https://digitaldefynd.com/IQ/top-data-science-case-studies/
[101] https://jobs.anitab.org/companies/uber/jobs/72068046-staff-machine-learning-engineer-mobility-verticals
[102] https://careersatdoordash.com/blog/deep-learning-for-smarter-eta-predictions/
[103] https://techbullion.com/from-algorithms-to-ai-how-uber-revolutionized-ride-hailing-using-advanced-data-techniques/
[104] https://beam.apache.org/case-studies/lyft/
[105] https://aman.ai/hidden/airbnb/
[106] https://arxiv.org/html/2407.00091v1
[107] https://arxiv.org/html/2601.06873v1
[108] https://arxiv.org/html/2408.13399
[109] https://arxiv.org/pdf/1810.09591
[110] https://cs229.stanford.edu/proj2019aut/data/assignment_308832_raw/26647491.pdf
[111] https://ar5iv.labs.arxiv.org/html/2508.20396
[112] https://airbnb.tech/wp-content/uploads/sites/19/2024/12/Understanding-Product-Quality-with-Unstructured-Data.pdf
[113] https://airbnb.tech/category/ai-ml/feed/
[114] https://www.infoq.com/presentations/dl-airbnb/
[115] https://www.linkedin.com/in/ran-li-dakula87
[116] https://www.themuse.com/jobs/uber/staff-software-engineer-maps-a0cdcf
[117] https://developer.uber.com/docs/employees-trips/references/api/v2/get-v2-employees-address-autocomplete
[118] https://prachub.com/companies/uber
[119] https://www.uber.com/us/en/blog/umetric/
[120] https://www.uber.com/in/en/blog/enabling-deep-model-explainability-with-integrated-gradients/
[121] https://www.slideshare.net/slideshow/dynamic-pricing-in-ridehailing-platforms-257447743/257447743?nway-content_model=D
[122] https://www.slideshare.net/slideshow/dynamic-pricing-in-ridehailing-platforms-257447743/257447743?nway-content_model=A
[123] https://ijsred.com/volume9/issue3/IJSRED-V9I3P316.pdf
[124] https://dmitry.pt/2023/detecting-risk-in-real-time-technology
[125] https://ar5iv.labs.arxiv.org/html/2104.00087
[126] https://www.ideaplan.io/case-studies/airbnb-experience-redesign
[127] https://www.irma-international.org/viewtitle/388280/?isxn=9798337332215
[128] https://www.arxiv.org/pdf/2512.22749
[129] https://arxiv.org/pdf/2506.15278
[130] https://sloanreview.mit.edu/audio/detecting-the-good-and-the-bad-with-ai-airbnbs-naba-banerjee/
[131] https://oa.upm.es/84936/1/10042967.pdf
[132] https://news.airbnb.com/what-were-doing-to-prevent-fake-listing-scams
[133] https://www.microsoft.com/en-us/research/video/matching-dynamic-pricing-ride-hailing-platforms/
[164] https://github.com/hackthacker-sec/awesome-ai-system-design
[165] https://arxiv.org/abs/2401.08537
[166] https://www.uber.com/us/en/blog/scaling-ai-ml-infrastructure-at-uber/
[167] https://www.zenml.io/mlops-database/grab-catwalk-feature-store-ai-gateway-notebook-platform-ray-based-distributed-training-for-multimodal-user-centric-found
[168] https://www.uber.com/us/en/blog/machine-learning-model-life-cycle-version-control/
[169] https://github.com/Engineer1999/A-Curated-List-of-ML-System-Design-Case-Studies
[170] https://engineering.grab.com/categories/engineering/
[171] https://www.uber.com/gb/en/blog/machine-learning/
[172] https://engineering.grab.com/
[173] https://www.uber.com/en-KR/blog/enhancing-the-quality-of-machine-learning-systems-at-scale/
[174] https://www.grab.com/inside-grab/how-we-got-more-accurate-estimated-time-of-arrivals-in-the-app-while-pushing-down-tech-costs/
[175] https://www.uber.com/us/en/blog/ml-education-at-uber/
[176] https://github.com/mallahyari/ml-practical-usecases
[177] https://engineering.grab.com/how-grab-builds-and-runs-ai-agents-at-scale
[178] https://engineering.grab.com/blog/2/
[149] https://www.uber.com/us/en/blog/scaling-michelangelo/
[150] https://www.gojek.io/blog/feast-bridging-ml-models-and-data
[151] https://www.uber.com/us/en/blog/forecasting-introduction/
[152] https://www.uber.com/in/en/blog/demand-and-etr-forecasting-at-airports/
[153] https://www.uber.com/en-AU/blog/forecasting-introduction/
[154] https://www.uber.com/en-BE/blog/scaling-michelangelo/
[155] https://www.uber.com/en-SV/blog/demand-and-etr-forecasting-at-airports/
[156] https://www.uber.com/gb/en/blog/reinforcement-learning-for-modeling-marketplace-balance/
[157] https://www.uber.com/us/en/blog/fabric-weaver-to-software-engineer/
[158] https://www.uber.com/us/en/blog/gairos-scalability/
[159] https://www.gojek.io/blog/how-we-use-machine-learning-to-match-drivers-riders
[160] https://www.uber.com/in/en/blog/m4-forecasting-competition/
[161] https://www.gojek.io/blog/an-introduction-to-gojeks-machine-learning-platform
[162] https://www.gojek.io/blog/scaling-our-geo-search-service-for-10x-load
[163] https://www.gojek.io/blog/how-we-do-what-we-do-at-gojek
[134] https://doordash.engineering/2021/02/24/why-good-forecasts-treat-human-input-as-part-of-the-model/
[135] https://doordash.engineering/2023/02/15/lifecycle-of-a-successful-ml-product-reducing-dasher-wait-times/
[136] https://doordash.engineering/2016/10/21/data-at-doordash-transparent-ubiquitous-and-still-just-getting-started/
[137] https://doordash.engineering/2020/06/29/doordashs-new-prediction-service/
[138] https://engineering.grab.com/grab-ai-gateway
[139] https://engineering.grab.com/scalable-ads-server
[140] https://doordash.engineering/2021/01/26/computational-graph-machine-learning-ensemble-model-support/
[141] https://engineering.grab.com/attribution-platform
[142] https://engineering.grab.com/powering-ai-led-research-through-simulation
[143] https://engineering.grab.com/understanding-supply-demand-ride-hailing-data
[144] https://doordash.engineering/blog/page/4/
[145] https://doordash.engineering/2023/01/04/selecting-the-best-image-for-each-merchant-using-exploration-and-machine-learning/
[146] https://engineering.grab.com/categories/engineering/
[147] https://doordash.engineering/2021/10/12/doordash-2021-summer-intern-survey-post/
[148] https://engineering.grab.com/improved-translation-experience-with-cost-efficiency
[179] https://github.com/mallahyari/ml-practical-usecases
[180] https://github.com/mallahyari/ml-practical-usecases

````
