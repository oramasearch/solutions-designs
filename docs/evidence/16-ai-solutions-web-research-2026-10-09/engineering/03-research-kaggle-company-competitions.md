# 03-research-kaggle-company-competitions

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** List Kaggle competitions sponsored by companies (not academic) from 2012 to 2026 that reflect real business problems, grouped by problem type: e.g. sales/demand forecasting (Rossmann, Walmart, Favorita, M5), insurance claims and pricing (Allstate, Porto Seguro, Prudential), credit default (Home Credit, American Express), recommendation (Santander product recommendation, H&M, OTTO), click-through/ad prediction (Avazu, Criteo, Outbrain, Talkingdata), customer revenue (Google Analytics), manufacturing quality (Bosch production line), energy (ASHRAE), logistics/ride (NYC taxi trip duration, Mercari price), defect detection (Severstal steel), document/NLP (Feedback Prize, Jigsaw), retail (Instacart market basket), Zillow Zestimate, Mercedes-Benz test time, Santander transaction prediction, Two Sigma, Optiver, Jane Street, Rainforest, Airbus ship detection, etc. For each give sponsor, business problem, prize, and what the business decision would be.
- **Timestamp (UTC):** 2026-10-09T20:25:06Z

## Response (verbatim)

````
**Company-backed Kaggle competitions built around business decisions, 2012–2026**, are grouped below. “Prize” means the advertised total prize pool unless it says *recruitment*. The last column describes a plausible business use of the prediction—not a claim that the sponsor deployed a winning model.

| Problem type | Competition | Sponsor | Business problem | Prize | Business decision |
|---|---|---|---|---|---|
| Sales and demand forecasting | Walmart Recruiting – Store Sales Forecasting (2014) | Walmart | Forecast weekly store-department sales. | Recruitment: potential interviews; no cash prize. | Set department inventory and staffing. [web:57][web:337] |
| Sales and demand forecasting | Rossmann Store Sales (2015) | Rossmann | Forecast daily sales across German drugstores. | $35,000, including a $5,000 implementation award. | Schedule store staff and plan promotions. [web:52][web:54] |
| Sales and demand forecasting | Grupo Bimbo Inventory Demand (2016) | Grupo Bimbo | Forecast fresh-bakery demand by product and customer. | Cash prizes; total not verified. | Set delivery quantities to avoid stockouts and unsold bread. [web:308][web:461] |
| Sales and demand forecasting | Corporación Favorita Grocery Sales Forecasting (2017–18) | Corporación Favorita | Forecast grocery sales across stores and products. | $30,000. | Replenish stores and allocate inventory. [web:47] |
| Sales and demand forecasting | M5 Forecasting – Accuracy (2020) | Walmart supplied data and financial support; M5 had multiple sponsors | Produce 28-day point forecasts of Walmart item sales. | $50,000 for this track. | Plan replenishment across products, stores and locations. [web:17][web:233][web:234] |
| Sales and demand forecasting | M5 Forecasting – Uncertainty (2020) | Walmart supplied data and financial support; M5 had multiple sponsors | Estimate uncertainty around 28-day Walmart sales forecasts. | $50,000 for this track. | Set safety stock according to demand risk. [web:417][web:418][web:234] |
| Insurance claims, risk and pricing | Allstate Purchase Prediction Challenge (2014) | Allstate | Predict which combination of insurance coverage a shopper will buy. | $50,000. | Tailor quotes and simplify the purchase path. [web:373][web:377] |
| Insurance claims, risk and pricing | Liberty Mutual Group – Fire Peril Loss Cost (2014) | Liberty Mutual Group | Predict expected fire losses on insured properties. | $25,000. | Price fire coverage and manage exposure. [web:380][web:382] |
| Insurance claims, risk and pricing | Liberty Mutual Group: Property Inspection Prediction (2015) | Liberty Mutual Group | Estimate property hazards before an inspection. | $25,000. | Prioritize inspections and assess underwriting risk. [web:372][web:380] |
| Insurance claims, risk and pricing | Prudential Life Insurance Assessment (2015–16) | Prudential | Automate classification of life-insurance applicant risk. | $30,000. | Streamline underwriting and quotes. [web:69][web:80] |
| Insurance claims, risk and pricing | Allstate Claims Severity (2016) | Allstate Insurance | Predict the cost or severity of an insurance claim. | Recruitment: job opportunity; no cash pool listed. | Triage claims and estimate reserves. [web:327][web:331] |
| Insurance claims, risk and pricing | Porto Seguro’s Safe Driver Prediction (2017) | Porto Seguro | Predict whether a driver will file a claim next year. | $25,000. | Price and underwrite auto policies. [web:49] |
| Credit risk and payments fraud | Home Credit Default Risk (2018) | Home Credit Group | Predict whether a loan applicant can repay. | $70,000. | Approve loans and choose appropriate terms. [web:67][web:73] |
| Credit risk and payments fraud | IEEE-CIS Fraud Detection (2019) | IEEE Computational Intelligence Society, with Vesta Corporation as data partner | Detect fraudulent e-commerce payments using Vesta transactions. | $20,000. | Flag payments for review or rejection. [web:387] |
| Credit risk and payments fraud | American Express – Default Prediction (2022) | American Express | Predict future customer default. | $100,000. | Manage credit exposure and intervene early. [web:45] |
| Credit risk and payments fraud | Home Credit – Credit Risk Model Stability (2024) | Home Credit | Predict defaults while keeping scores stable over time. | $105,000, including a $10,000 stability prize. | Make lending decisions using a score that remains useful as conditions change. [web:391] |
| Recommendations and product discovery | Otto Group Product Classification Challenge (2015) | Otto Group | Classify products into categories from product attributes. | $10,000. | Organize the catalog for merchandising and discovery. [web:324] |
| Recommendations and product discovery | Expedia Hotel Recommendations (2016) | Expedia | Predict which hotel group a shopper will book. | $25,000. | Rank hotel suggestions. [web:326] |
| Recommendations and product discovery | Santander Product Recommendation (2016) | Banco Santander | Predict which banking products a customer will acquire next. | $60,000. | Select personalized product offers. [web:87][web:370] |
| Recommendations and product discovery | H&M Personalized Fashion Recommendations (2022) | H&M | Predict clothing articles customers will purchase. | $50,000. | Personalize fashion recommendations. [web:82][web:92] |
| Recommendations and product discovery | OTTO – Multi-Objective Recommender System (2022–23) | OTTO | Predict session clicks, cart additions and orders. | $30,000. | Rank products for shopper engagement and sales. [web:84][web:368] |
| Advertising and click-through prediction | Display Advertising Challenge (2014) | Criteo | Predict clicks on display advertisements. | $16,000. | Rank ads and inform bidding. [web:97] |
| Advertising and click-through prediction | Avazu Click-Through Rate Prediction (2014–15) | Avazu | Predict clicks on mobile ads. | $15,000. | Allocate mobile-ad impressions and bids. [web:98] |
| Advertising and click-through prediction | TalkingData Mobile User Demographics (2016) | TalkingData | Infer user demographics from mobile usage. | $25,000. | Build advertising audience segments. [web:141] |
| Advertising and click-through prediction | Outbrain Click Prediction (2016–17) | Outbrain | Rank promoted content by click likelihood. | $25,000. | Choose which sponsored articles to show. [web:101][web:105] |
| Advertising and click-through prediction | TalkingData AdTracking Fraud Detection Challenge (2018) | TalkingData | Predict whether an ad click leads to an app install, helping identify fraudulent traffic. | $25,000. | Filter suspect clicks and protect ad spending. [web:127][web:134] |
| Customer revenue and transactions | Google Analytics Customer Revenue Prediction (2018) | Google | Predict GStore customer spending. | $45,000, including special R-usage awards. | Prioritize customer acquisition and marketing. [web:128] |
| Customer revenue and transactions | Santander Customer Transaction Prediction (2019) | Banco Santander | Identify customers likely to make a specified future transaction. | $65,000. | Target customer outreach. [web:142][web:144] |
| Retail basket and search | Walmart Recruiting – Trip Type Classification (2015) | Walmart | Classify shopping trips from purchased items. | Recruitment; cash prize not verified. | Understand missions such as routine shopping and tailor merchandising. [web:62][web:63] |
| Retail basket and search | Home Depot Product Search Relevance (2016) | The Home Depot | Score how relevant a product is to a shopper’s search. | $40,000. | Improve search ranking and product discovery. [web:432][web:444] |
| Retail basket and search | Instacart Market Basket Analysis (2017) | Instacart | Predict previously purchased items in a customer’s next order. | $25,000, plus recruiting opportunities. | Suggest reorders and plan fulfillment. [web:487] |
| Manufacturing quality and cost | Caterpillar Tube Pricing (2015) | Caterpillar | Predict a supplier’s quote for a tube assembly. | $30,000. | Evaluate bids and estimate procurement costs. [web:310][web:317] |
| Manufacturing quality and cost | Bosch Production Line Performance (2016) | Bosch | Predict which manufactured parts will fail quality control. | $30,000. | Inspect or rework high-risk parts. [web:113][web:120] |
| Manufacturing quality and cost | Mercedes-Benz Greener Manufacturing (2017) | Mercedes-Benz | Predict vehicle test-bench time. | $25,000. | Schedule tests and reduce test-bench time. [web:118][web:123] |
| Manufacturing quality and cost | Severstal: Steel Defect Detection (2019) | Severstal | Locate and classify defects in steel-sheet images. | $120,000, including an efficiency award. | Divert defective material for inspection or rework. [web:112][web:115] |
| Energy and buildings | ASHRAE – Great Energy Predictor III (2019) | ASHRAE, a professional association **rather than a company** | Predict metered building energy use. | $25,000. | Identify abnormal consumption and evaluate efficiency work. [web:227][web:221] |
| Travel, transport and marketplace pricing | Airbnb New User Bookings (2015) | Airbnb | Predict a new user’s first booking destination country. | Recruitment: potential interview; no cash prize. | Personalize listings and forecast destination demand. [web:328][web:334] |
| Travel, transport and marketplace pricing | New York City Taxi Trip Duration (2017) | Kaggle **rather than a taxi operator** | Predict trip duration using NYC taxi data. | $30,000 in dataset and notebook awards. | A ride operator could improve ETAs and dispatch. [web:188][web:192] |
| Travel, transport and marketplace pricing | Mercari Price Suggestion Challenge (2017–18) | Mercari | Suggest a price for a seller’s listing. | $100,000. | Offer listing-price guidance to sellers. [web:187][web:197] |
| Property valuation | Sberbank Russian Housing Market (2017) | Sberbank | Predict Russian property prices. | $25,000. | Inform mortgage collateral valuation and property decisions. [web:321][web:363] |
| Property valuation | Zillow Prize: Zillow’s Home Value Prediction (2017–19) | Zillow | Improve home-sale-price estimates and the Zestimate. | $1.2 million advertised across rounds; $1 million grand prize subject to its benchmark. | Publish more accurate valuations for home shoppers and sellers. [web:343] |
| Trading and market forecasting | Two Sigma Financial Modeling Challenge (2016–17) | Two Sigma | Find signals predictive of financial-instrument outcomes. | $100,000. | Test signals for investment models. [web:173][web:175] |
| Trading and market forecasting | Two Sigma: Using News to Predict Stock Movements (2018–19) | Two Sigma | Predict stock performance from news and market data. | $100,000. | Incorporate news signals into trading research. [web:403][web:408] |
| Trading and market forecasting | Jane Street Market Prediction (2020–21) | Jane Street | Build a model tested against future market data. | $100,000. | Decide when a predicted trading opportunity warrants action. [web:402] |
| Trading and market forecasting | Optiver Realized Volatility Prediction (2021) | Optiver | Forecast short-term stock volatility. | $100,000. | Inform options pricing and risk management. [web:174][web:177] |
| Trading and market forecasting | Optiver – Trading at the Close (2023–24) | Optiver | Predict stock-price movements around the closing auction. | $100,000. | Adjust closing-auction trading and risk. [web:406] |
| Trading and market forecasting | Jane Street Real-Time Market Data Forecasting (2024–25) | Jane Street | Predict a market-response variable from streaming trading data. | $120,000. | Evaluate real-time trading signals. [web:157][web:161] |
| Trading and market forecasting | MITSUI&CO. Commodity Prediction Challenge (2025–26) | Mitsui & Co. | Predict stable signals for future commodity-related returns. | $100,000. | Inform commodity trading and hedging research. [web:497] |
| Trading and market forecasting | Hull Tactical – Market Prediction (2025–26) | Hull Tactical | Predict excess S&P 500 returns subject to volatility constraints. | $100,000. | Adjust market exposure while controlling risk. [web:292] |
| Geospatial detection and conservation | Planet: Understanding the Amazon from Space (2017) | Planet | Label satellite imagery to track land cover and human activity. | $60,000. | Direct imagery analysis and monitoring resources. [web:202][web:214] |
| Geospatial detection and conservation | Airbus Ship Detection Challenge (2018) | Airbus | Detect ships accurately and quickly in satellite images. | $60,000. | Automate maritime-image screening. [web:204][web:205] |
| Geospatial detection and conservation | Rainforest Connection Species Audio Detection (2020–21) | Rainforest Connection, a **nonprofit rather than a company** | Identify bird and frog species in rainforest recordings. | $15,000. | Prioritize recordings and locations for conservation review. [web:203][web:451] |
| Documents, language and moderation | Jigsaw Toxic Comment Classification Challenge (2017–18) | Jigsaw / Conversation AI | Detect types of toxic online comments. | $35,000. | Queue or moderate harmful comments. [web:265] |
| Documents, language and moderation | Jigsaw Unintended Bias in Toxicity Classification (2019) | Jigsaw | Detect toxicity while reducing errors tied to identity mentions. | $65,000. | Apply fairer comment-moderation thresholds. [web:249][web:256] |
| Documents, language and moderation | Jigsaw Rate Severity of Toxic Comments (2021–22) | Jigsaw | Rank comments by relative toxicity. | $50,000. | Prioritize the most severe comments for review. [web:247][web:252] |
| Documents, language and moderation | Feedback Prize – Evaluating Student Writing (2021–22) | Georgia State University, with philanthropic support—**not a company-sponsored example** | Identify argumentative elements in student writing. | $160,000 across the listed awards. | Help educators target writing feedback. [web:263][web:273] |

**Scope distinction:** ASHRAE, Rainforest Connection and Feedback Prize are included because you named those examples, but they do **not** meet a strict company-sponsor test. Likewise, M5 used Walmart business data but had academic organizers and multiple backers; the NYC taxi contest was sponsored by Kaggle, not a taxi business. [web:218][web:451][web:263][web:234][web:188]

Citations:
[30] https://aiwiki.ai/wiki/kaggle
[31] https://www.kaggle.com/competitions?group=all
[32] https://www.kaggle.com/competitions?new=true
[33] https://www.kaggle.com/competitions?prestigeFilter=money
[34] https://www.kaggle.com/competitions/national-ai-competition/rules
[35] https://storage.googleapis.com/kaggle-forum-message-attachments/3248842/23482/Kaggle_Chronicles.pdf
[36] https://www.kaggle.com/competitions/meta-kaggle-hackathon/writeups/kaggle-chronicles-15-years-of-competitions-communi
[37] https://github.com/professor314/Kaggle/blob/master/docs/kaggle_guide.md
[38] https://notes.dsgt-arc.org/competition/venues/kaggle/
[39] https://www.kaggle.com/competitions/competitions-ai-challenge/rules
[40] https://www.kaggle.com/
[41] https://www.cgi.com/en/blog/big-data-analytics/kaggle-predictive-analytics-lessons-learned
[42] https://www.kaggle.com/competitions/come-and-join-this-competition/rules
[43] https://www.kaggle.com/competitions/find-your-subject/rules
[44] https://www.kaggle.com/competitions/the-perfect-fit/rules
[16] https://www.kaggle.com/competitions/m5-forecasting-accuracy/models
[17] https://www.kaggle.com/competitions/m5-forecasting-accuracy/overview
[18] https://www.kaggle.com/competitions/m5-forecasting-accuracy/writeups/rdizzl3-178th-place-recursive-model-with-regressio
[19] https://www.kaggle.com/competitions/m5-forecasting-accuracy/discussion/150568
[20] https://www.kaggle.com/competitions/m5-forecasting-accuracy/data?select=sample_submission.csv
[21] https://www.kaggle.com/competitions/rossmann-store-sales/leaderboard
[22] https://www.kaggle.com/competitions/m5-forecasting-accuracy/writeups/mf-3rd-place-solution-nn-approach
[23] https://www.kaggle.com/competitions/m5-forecasting-accuracy/writeups/monsaraida-4th-place-solution
[24] https://www.kaggle.com/competitions/rossmann-store-sales/discussion/17895
[25] https://www.kaggle.com/competitions/m5-forecasting-accuracy
[26] https://www.kaggle.com/competitions/rossmann-store-sales/
[27] https://www.kaggle.com/competitions/allstate-claims-severity/discussion/25394
[28] https://www.kaggle.com/competitions/allstate-claims-severity/discussion/24527
[29] https://www.kaggle.com/competitions/allstate-claims-severity/discussion/24823
[1] https://aiwiki.ai/wiki/kaggle
[2] https://www.kaggle.com/competitions?sortBy=prize&group=all&page=1&site=main
[3] https://www.kaggle.com/competitions?prestigeFilter=money
[4] https://www.kaggle.com/docs/competitions-setup
[5] https://www.kaggle.com/competitions?hostSegmentIdFilter=1
[6] https://www.kaggle.com/competitions/data-science-bowl-2018/overview/prizes
[7] https://github.com/Kaggle/kaggle-cli/blob/main/docs/competitions.md
[8] https://www.kaggle.com/datasets/kevinbnisch/competition-writeups-with-technologies-and-summary
[9] https://www.kaggle.com/datasets/anthony35813/webpage-data-for-kaggle-competitions
[10] https://www.kaggle.com/internetassociation/machinelearningawards?sortBy=null&group=competition
[11] https://www.kaggle.com/docs/competitions
[12] https://github.com/cab524/KaggleCompetitions
[13] https://github.com/Xmen3em/Kaggle-Competitions
[14] https://www.kaggle.com/competitions/2026-ai-34/rules
[15] https://www.kaggle.com/competitions/titanic
[47] https://www.kaggle.com/competitions/favorita-grocery-sales-forecasting/overview
[48] https://www.kaggle.com/competitions/rossmann-store-sales/overview/timeline
[49] https://www.kaggle.com/competitions/porto-seguro-safe-driver-prediction/overview
[50] https://www.kaggle.com/competitions/porto-seguro-safe-driver-prediction/overview/description
[51] https://www.kaggle.com/competitions/allstate-claims-severity/overview/timeline
[45] https://www.kaggle.com/competitions/amex-default-prediction/overview
[46] https://www.kaggle.com/competitions/home-credit-credit-risk-model-stability/overview/description
[52] https://www.kaggle.com/c/rossmann-store-sales
[53] https://www.kaggle.com/c/rossmann-store-sales/overview/citation
[54] https://www.linkedin.com/in/nimashahbazi
[55] https://opentimeseries.com/datasets/kaggle/
[56] https://www.linkedin.com/in/gertjacobusse
[57] https://www.kaggle.com/competitions/walmart-recruiting-store-sales-forecasting
[58] https://www.linkedin.com/in/nicolas-gaude-6680b52
[59] https://www.kaggle.com/c/walmart-recruiting-store-sales-forecasting
[60] https://www.kaggle.com/c/walmart-sales-forecasting
[61] https://www.linkedin.com/in/quocnamle
[62] https://www.linkedin.com/in/1aguschin
[63] https://www.linkedin.com/in/aksbond
[64] https://studylib.net/doc/25325832/rossmann-sales-analysis
[65] https://www.linkedin.com/in/xiao-wang-shawn-202aa029
[66] https://www.kaggle.com/dserdyuk/competitions
[67] https://www.kaggle.com/competitions/home-credit-default-risk/overview/description
[68] https://www.kaggle.com/c/home-credit-default-risk
[69] https://www.kaggle.com/c/prudential-life-insurance-assessment
[70] https://m.leiphone.com/category/yanxishe/zVI1pdC3oL3S6oXK.html
[71] https://www.kaggle.com/competitions/home-credit-default-risk/rules
[72] https://aiwiki.ai/wiki/kaggle
[73] https://www.linkedin.com/in/nthanhtam
[74] https://www.kaggle.com/c/allstate-claims-severity
[75] https://www.linkedin.com/in/ziwen-ye-8ab6b5160
[76] https://www.kaggle.com/c/home-credit-default-risk/kernels?sortBy=scoreDescending&group=everyone&pageSize=20&competitionId=9120
[77] https://github.com/kelli2/Credit_Default
[78] https://gitlab.com/explore/projects/topics/kaggle
[79] https://speakerdeck.com/hoxomaxwell/home-credit-default-risk-2nd-place-solutions
[80] https://datascience.fm/top-kaggle-competitions-that-can-make-you-a-lots-of-money/
[81] https://www.linkedin.com/in/matiasthayer
[82] https://www.kaggle.com/c/h-and-m-personalized-fashion-recommendations/
[83] https://www.kaggle.com/competitions/h-and-m-personalized-fashion-recommendations/overview
[84] https://www.otto.de/jobs/en/blogs/techblog/otto-machine-learning-competition/
[85] https://www.kaggle.com/c/santander-pr
[86] https://www.linkedin.com/in/yasuhiro-h
[87] https://github.com/kweonwooj/kaggle_santander_product_recommendation
[88] https://www.linkedin.com/in/pjankiewicz
[89] https://www.kaggle.com/competitions/h-and-m-personalized-fashion-recommendations/code
[90] https://www.linkedin.com/in/giba1
[91] https://weeklykagglenews.substack.com/p/weekly-kaggle-news-164
[92] https://www.kaggle.com/competitions/h-and-m-personalized-fashion-recommendations/data
[93] https://www.linkedin.com/in/tzu-hao-liu-58453a205
[94] https://github.com/pacificlion/h-m-recommendations
[95] https://www.linkedin.com/in/ynot
[96] https://www.linkedin.com/in/chryzal
[97] https://www.kaggle.com/c/criteo-display-ad-challenge
[98] https://www.kaggle.com/c/avazu-ctr-prediction
[99] https://www.kaggle.com/competitions/criteo-display-ad-challenge/leaderboard
[100] https://ailab.criteo.com/display-advertising-challenge-criteo/
[101] https://www.linkedin.com/in/minseong-kim-2a9589136
[102] https://www.linkedin.com/in/wei-sheng-chin-9745b879
[103] https://www.linkedin.com/in/darragh-hanley-76a6302
[104] https://smist08.wordpress.com/2017/03/02/playing-the-kaggle-two-sigma-challenge/
[105] https://speech.ee.ntu.edu.tw/~tlkagk/courses/ML_2016/Lecture/project2.pdf
[106] https://www.linkedin.com/in/guocong-song-1b9b9b3
[107] https://www.linkedin.com/in/giuliano-janson-49a3124
[108] https://williamqliu.github.io/2015/06/07/kaggle-avazu-adclick.html
[109] https://www.linkedin.com/in/yong-zhuang-64226b37
[110] https://www.kaggle.com/competitions/outbrain-click-prediction/overview
[111] https://smist08.wordpress.com/tag/two-sigma/
[127] https://www.kaggle.com/c/talkingdata-adtracking-fraud-detection/rules
[128] https://www.kaggle.com/c/ga-customer-revenue-prediction
[129] https://www.kaggle.com/competitions/ga-customer-revenue-prediction
[130] https://github.com/ShawnyXiao/2018-Kaggle-AdTrackingFraud
[131] https://sites.google.com/view/takashi-oya
[132] https://github.com/brightertiger/kaggle
[133] https://www.linkedin.com/in/matiasthayer
[134] https://www.kaggle.com/competitions/fraud-detection-clicks
[135] https://www.linkedin.com/in/weichen-qi-62078559
[136] https://github.com/stys/kaggle-talkingdata-adtracking-fraud-detection
[137] https://www.linkedin.com/in/konstantinos-fanopoulos
[138] https://impuls.vntu.edu.ua/index.php?option=com_content&view=article&id=5230:-5-049&catid=4:2014-02-07-12-35-57&Itemid=2&lang=en
[139] https://www.linkedin.com/in/ryuichi-kanoh-43ab4316b
[140] https://www.linkedin.com/in/%E7%90%AA-%E9%BD%90-908899141
[141] https://www.kdnuggets.com/2016/07/talkingdata-data-science-competition-mobile-users.html
[112] https://www.kaggle.com/c/severstal-steel-defect-detection
[113] https://www.kaggle.com/c/bosch-production-line-performance
[114] https://www.kaggle.com/competitions/bosch-production-line-performance
[115] https://www.kaggle.com/competitions/severstal-steel-defect-detection/rules
[116] https://www.linkedin.com/in/shivam-g-4347b668
[117] https://albumentations.ai/adoption/competitions/kaggle/severstal-steel-defect-detection/
[118] https://www.kaggle.com/competitions/mercedes-benz-greener-manufacturing/leaderboard
[119] https://www.linkedin.com/in/avijeetkartikay
[120] https://www.kaggle.com/competitions/bosch-production-line-performance/data
[121] https://albumentations.ai/adoption/competitions/
[122] https://deepwiki.com/zdaiot/Kaggle-Steel-Defect-Detection
[123] https://github.com/naive666/Kaggle_Benz
[124] https://www.linkedin.com/in/darragh-hanley-76a6302
[125] https://www.linkedin.com/in/sobhan-hemati-b5baab11b
[126] https://aiwiki.ai/wiki/kaggle
[172] https://kaggle.com/competitions/optiver-realized-volatility-prediction
[173] https://www.kaggle.com/c/two-sigma-financial-modeling
[174] https://www.kaggle.com/c/optiver-realized-volatility-prediction/rules
[175] https://www.kaggle.com/c/two-sigma-financial-modeling/rules
[176] https://quantchallenges.com/challenges/forecasting
[177] https://www.businesswire.com/news/home/20210707005384/en/Optiver-Launches-First-Data-Science-Competition-on-Realized-Volatility-With-$100k-Prize-Money-for-Best-Models
[178] https://www.linkedin.com/in/wencheng-bao
[179] https://aiwiki.ai/wiki/kaggle
[180] https://smist08.wordpress.com/tag/two-sigma/
[181] https://smist08.wordpress.com/2017/03/02/playing-the-kaggle-two-sigma-challenge/
[182] https://www.linkedin.com/in/nimashahbazi
[183] https://www.analyticsinsight.net/data-science/exciting-kaggle-competitions-with-cash-prizes-in-data-science
[184] https://www.linkedin.com/in/andrew-wang-31b8ba234
[185] https://www.datasciencegraduateprograms.com/2016/12/attracting-quants-to-hedge-funds-with-100000-in-prize-money/
[186] https://www.linkedin.com/posts/puzzledquant_quant-hft-quantitativeanalysis-activity-7188423136357289986-jGbT
[157] https://www.kaggle.com/competitions/jane-street-real-time-market-data-forecasting
[158] https://github.com/yuanxu-finance/Jane-Street-Real-Time-Market-Data-Forecasting-2025/blob/main/README.md
[159] https://www.kaggle.com/certification/competitions/ahahahaheihei/jane-street-real-time-market-data-forecasting
[160] https://www.linkedin.com/posts/abh15h3k_kaggle-janestreet-datascience-activity-7350938193850003456-AOBK
[161] https://www.kaggle.com/competitions/jane-street-real-time-market-data-forecasting/overview/abstract
[162] https://www.alphanova.tech/blog/the-jane-street-kaggle-competition-explained
[163] https://www.linkedin.com/posts/nlztrk_kaggle-competition-machinelearning-activity-7177940949182914560-UN64
[164] https://www.linkedin.com/in/md-khairul-islam-711460134
[165] https://www.linkedin.com/in/sebastian-j%C3%B8rgensen
[166] https://www.linkedin.com/posts/kaggle_jane-street-real-time-market-data-forecasting-activity-7272989544159883265-JGlw
[167] https://quantchallenges.com/challenges/forecasting
[168] https://mlcontests.com/state-of-machine-learning-competitions-2025/
[169] https://www.linkedin.com/in/xiaoli-c-41ab9925
[170] https://quantchallenges.com/challenges/optiver-trading-at-the-close-qc-2762
[171] https://www.linkedin.com/posts/kaggle_competition-launch-alert-real-time-market-activity-7251649777002582016-bBuk
[142] https://www.kaggle.com/c/santander-customer-transaction-prediction/overview
[143] https://www.kaggle.com/competitions/santander-customer-transaction-prediction
[144] https://www.kaggle.com/competitions/meta-kaggle-hackathon/writeups/kaggle-chronicles-15-years-of-competitions-communi
[145] https://www.linkedin.com/posts/repushko_kaggle-santander-activity-6522115300169641984-B7G6
[146] https://www.linkedin.com/in/nanqiao
[147] https://www.kaggle.com/competitions/santander-customer-transaction-prediction/data
[148] https://www.coursesidekick.com/computer-science/3164949
[149] https://www.linkedin.com/pulse/winning-13th-place-kaggles-magic-competition-corey-levinson
[150] https://www.kaggle.com/competitions/santander-customer-transaction-prediction/discussion/88854
[151] https://www.linkedin.com/in/ziwen-ye-8ab6b5160
[152] https://www.kaggle.com/c/sberbank-russian-housing-market/overview
[153] https://www.linkedin.com/in/epatekha
[154] https://www.linkedin.com/in/gphilippis
[155] https://github.com/ykang/ftp/blob/main/data.Rmd
[156] https://nycdatascience.com/blog/student-works/kaggle-competition-russian-housing-price-prediction/
[187] https://about.mercari.com/press/news/articles/20171122_kaggle/
[188] https://www.kaggle.com/c/nyc-taxi-trip-duration/rules
[189] https://www.linkedin.com/in/nimashahbazi
[190] https://mercari.connpass.com/event/84299/
[191] https://damir.cavar.me/l665_18/Carlos_Sathler_Presentation.pdf
[192] https://www.kaggle.com/competitions/nyc-taxi-trip-duration
[193] https://github.com/aniket-mish/price-prediction-at-mercari/blob/master/README.md
[194] https://github.com/aniket-mish/price-prediction-at-mercari
[195] https://www.kaggle.com/competitions/mercari/data
[196] https://www.kaggle.com/c/mercari-price-suggestion-challenge/data?select=train.tsv.7z
[197] https://engineering.mercari.com/en/blog/entry/2018-11-14-172509/
[198] https://github.com/aerdem4/mercari-price-suggestion
[199] https://www.kaggle.com/datasets/yasserh/nyc-taxi-trip-duration
[200] https://github.com/yihong-chen/instacart-market-basket-analysis
[201] https://github.com/emindeniz/Instacart
[217] https://arxiv.org/pdf/2202.02898
[218] https://ar5iv.labs.arxiv.org/html/2007.06933
[219] https://en.wikipedia.org/wiki/Global_Energy_Forecasting_Competition
[220] https://www.kaggle.com/c/riiid-test-answer-prediction/leaderboard
[221] https://ar5iv.labs.arxiv.org/html/2106.13475
[222] https://github.com/yoonseok312/riiid-answer-correctness-prediction
[223] https://www.tandfonline.com/doi/abs/10.1080/23744731.2020.1795514
[224] https://github.com/Johann-Huber/riiid_lgbm_sakt
[225] https://github.com/Raymond-Xue/Ashrae-Great-Energy-Predictor-III
[226] https://www.linkedin.com/in/duc-kinh-le-tran-3bbb9999
[227] https://www.kaggle.com/c/ashrae-energy-prediction
[228] https://github.com/rbind/robjhyndman.com/blob/master/content/hyndsight/2014-08-18-gefcom-2014.md
[229] https://www.linkedin.com/in/g%C3%A1bor-simon-42a4b81b
[230] https://www.kaggle.com/competitions/ashrae-energy-prediction/discussion/125017
[231] https://sites.google.com/view/takashi-oya
[202] https://www.kaggle.com/c/planet-understanding-the-amazon-from-space/
[203] https://albumentations.ai/adoption/competitions/kaggle/rfcx-species-audio-detection/
[204] https://signalprocessingsociety.org/our-story/news-updates/2018/10/airbus-ship-detection-challenge
[205] https://albumentations.ai/adoption/competitions/
[206] https://www.linkedin.com/in/charlescadman
[207] https://www.linkedin.com/in/b12ny
[208] https://www.kaggle.com/competitions/rfcx-species-audio-detection/writeups/hiraiwa-17th-place-solution
[209] https://www.kaggle.com/competitions/rfcx-species-audio-detection/writeups/watercooled-1st-place-solution
[210] https://signalprocessingsociety.org/newsletter/2018/10/airbus-ship-detection-challenge
[211] https://www.linkedin.com/in/eduardo-rocha-de-andrade-3a06b5b7
[212] https://www.jiqizhixin.com/articles/2017-08-28-11
[213] https://albumentations.ai/adoption/verticals/geospatial-earth-observation/competitions/
[214] https://www.soa.org/programs/predictive-analytics/2017-kaggle-program/
[215] https://www.kaggle.com/competitions/airbus-ship-detection/data/
[216] https://www.linkedin.com/pulse/my-first-gold-medal-kaggle-competitions-antonio-marin
[232] https://www.kaggle.com/c/m5-forecasting-accuracy/
[233] https://www.kaggle.com/competitions/m5-forecasting-accuracy/discussion/163414
[234] https://forecasters.org/blog/2020/03/05/press-release-launch-m5-forecasting-competition/
[235] https://www.kaggle.com/competitions/m5-forecasting-accuracy/data
[236] https://www.kaggle.com/competitions/m5-forecasting-accuracy/models
[237] https://www.kaggle.com/c/m5-forecasting-accuracy/data
[238] https://www.unic.ac.cy/iff/research/forecasting/m-competitions/m5/
[239] https://www.unic.ac.cy/iff/startups-community/m-conference-series/
[240] https://en.wikipedia.org/wiki/Makridakis_Competitions
[241] https://statmodeling.stat.columbia.edu/wp-content/uploads/2021/10/M5_accuracy_competition.pdf
[242] https://massmarketretailers.com/tag/walmart/
[243] https://www.phonearena.com/phones/compare/Apple-iPad-11th-Gen-A16-2025,Apple-iPad-Pro-11-inch-M5-2025/phones/12656,12868
[244] https://www.phonearena.com/phones/compare/Apple-iPad-Pro-11-inch-M4-2024,Apple-iPad-Pro-13-inch-M5-2025/phones/12233,12867
[245] https://www.zdnet.com/tech/macbook-m5-air-amazon-prime-day-deal-2026/
[246] https://www.carwale.com/bmw-cars/m5/competition/
[262] https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1224/reports/custom_116660070.pdf
[263] https://www.kaggle.com/c/feedback-prize-2021
[264] https://www.kaggle.com/competitions/feedback-prize-effectiveness/overview/timeline
[265] https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge
[266] https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge
[267] https://www.kaggle.com/c/feedback-prize-english-language-learning/rules
[268] https://www.kaggle.com/competitions/feedback-prize-2021/data?select=train.csv
[269] https://www.linkedin.com/in/ducky-hyunbyungpark
[270] https://www.linkedin.com/in/takfarines-guergueb-b898b2218
[271] https://www.linkedin.com/in/mohammed-ateeq-a13855180
[272] https://x.com/WikiResearch/status/948663578218741760
[273] https://chanzuckerberg.com/education/impact/feedback-prize-by-the-learning-agency-lab/
[274] https://www.kaggle.com/hudada666/competitions
[275] https://the-learning-agency.com/case-study/revolutionizing-student-writing-with-ai-powered-feedback/
[276] https://www.kaggle.com/competitions/feedback-prize-effectiveness
[247] https://www.kaggle.com/competitions/jigsaw-toxic-severity-rating/rules
[248] https://www.kaggle.com/competitions/jigsaw-multilingual-toxic-comment-classification/leaderboard
[249] https://www.kaggle.com/c/jigsaw-unintended-bias-in-toxicity-classification/overview
[250] https://www.kaggle.com/competitions/jigsaw-unintended-bias-in-toxicity-classification
[251] https://www.kaggle.com/competitions/jigsaw-toxic-severity-rating/discussion/286856
[252] https://www.kaggle.com/code/crischir/inter-annotator-agreement-test-model/input
[253] https://www.kaggle.com/competitions/jigsaw-multilingual-toxic-comment-classification/rules
[254] https://www.kaggle.com/competitions/jigsaw-unintended-bias-in-toxicity-classification/writeups/qishen-ha-8th-place-solution-4-models-simple-avg
[255] https://www.hs-anhalt.de/en/university/service/list-of-people/person/aleksandr-perevalov.html
[256] https://t.me/s/Machinelearning_Kartal?before=1600
[257] https://www.linkedin.com/in/phiratath-nopratanawong-47b976158
[258] https://www.linkedin.com/in/raja-biswas
[259] https://github.com/anishazaveri/jigsaw
[260] https://github.com/dimitreOliveira/Jigsaw-Multilingual-Toxic-Comment-Classification
[261] https://www.kaggle.com/hudada666/competitions
[291] https://www.kaggle.com/competitions
[292] https://www.kaggle.com/competitions/hull-tactical-market-prediction
[293] https://www.kaggle.com/competitions?prestigeFilter=money
[294] https://www.kaggle.com/competitions?new=true
[295] https://www.kaggle.com/competitions?sortOption=reward
[296] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/data
[297] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/discussion/650534
[298] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/discussion/596837
[299] https://www.kaggle.com/competitions/hull-tactical-market-prediction/discussion/693242
[300] https://www.kaggle.com/competitions/competition-2026-1/rules
[301] https://www.kaggle.com/competitions?tagIds=14101-Tabular
[302] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/overview
[303] https://www.kaggle.com/competitions/98082dab881caa827f1f4f49ffa8ae4f
[304] https://www.kaggle.com/competitions?listOption=active&sortOption=default&participationFilter=open&hostSegmentIdFilter=10
[305] https://www.kaggle.com/competitions/ml-ef-2026-dt
[277] https://www.kaggle.com/competitions/hull-tactical-market-prediction
[278] https://www.kaggle.com/competitions/child-mind-institute-problematic-internet-use
[279] https://www.kaggle.com/competitions/child-mind-institute-problematic-internet-use/overview/code-requirements
[280] https://www.kaggle.com/competitions/child-mind-institute-problematic-internet-use/writeups/underfit-squad-4th-place-solution-for-the-child-mi
[281] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/discussion/650534
[282] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/discussion/591282
[283] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/discussion/596837
[284] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/discussion/591053
[285] https://www.kaggle.com/competitions/hull-tactical-market-prediction/discussion/670090
[286] https://www.kaggle.com/competitions/hull-tactical-market-prediction/discussion/692582
[287] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/overview
[288] https://www.kaggle.com/competitions/child-mind-institute-problematic-internet-use/discussion/552492
[289] https://www.kaggle.com/competitions/child-mind-institute-problematic-internet-use/discussion/549868
[290] https://www.kaggle.com/competitions/hull-tactical-market-prediction/discussion/693242
[306] https://www.kaggle.com/c/allstate-purchase-prediction-challenge/rules
[307] https://www.cgi.com/en/blog/big-data-analytics/kaggle-predictive-analytics-lessons-learned
[308] https://www.linkedin.com/in/nimashahbazi
[309] https://www.kaggle.com/rsakata/competitions
[310] https://onlinelibrary.wiley.com/doi/full/10.1111/1756-2171.70019
[311] https://onlinelibrary.wiley.com/doi/10.1111/1756-2171.70019
[312] https://www.linkedin.com/in/giba1
[313] https://www.slideshare.net/slideshow/kaggle-49005240/49005240?nway-=
[314] https://www.linkedin.com/pulse/modern-approaches-sales-predictive-analytics-bohdan-pavlyshenko
[315] https://www.kaggle.com/competitions
[316] https://www.linkedin.com/in/mathurin-ache-11004218/en
[317] https://revistas.um.es/rcsar/article/download/401331/317301?inline=1
[318] https://mdpi-res.com/data/data-04-00015/article_deploy/data-04-00015.pdf?attachment=1&filename
[319] https://pdfs.semanticscholar.org/1532/148e402951db1a89ffa1633eb0447de1fb0a.pdf
[320] https://github.com/alzmcr/allstate
[321] https://www.kaggle.com/c/sberbank-russian-housing-market/discussion/32312
[322] https://www.kaggle.com/c/sberbank-russian-housing-market/dataB
[323] https://www.kaggle.com/c/grupo-bimbo-inventory-demand/data
[324] https://www.kaggle.com/c/otto-group-product-classification-challenge
[325] https://www.kaggle.com/c/expedia-hotel-recommendations/overview/citation/timeline/evaluation/prizes
[341] https://www.linkedin.com/in/giba1
[342] https://www.linkedin.com/in/nimashahbazi
[343] https://www.zillow.com/news/zillow-launches-1-million-zestimate-competition-for-data-scientists/
[344] https://www.kaggle.com/competitions/zillow-prize-1/models
[345] https://www.gormanalysis.com/projects/grupo-bimbo-inventory-demand/
[346] https://rlgm.github.io/papers/55.pdf
[347] https://www.mindle.ai/nimashahbazi_speaker
[348] https://scispace.com/ai-agent-seo/page-files/marketing-datasets-ylzzftda.pdf
[349] https://www.linkedin.com/in/dominic-brassard
[350] https://mdpi-res.com/data/data-04-00015/article_deploy/data-04-00015.pdf?attachment=1&filename
[351] https://www.linkedin.com/in/dongsun-moon-3b6b30a1
[352] https://tkm2261.github.io/
[353] https://www.kaggle.com/c/zillow-prize-1/code?competitionId=6649&sortBy=voteCount&excludeNonAccessedDatasources=true
[354] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand/models
[355] https://siliconangle.com/2018/03/24/solve-really-hard-data-science-problems-throw-contest/
[356] https://www.otto.de/jobs/de/blogs/techblog/otto-machine-learning-wettbewerb/
[357] https://www.linkedin.com/in/giba1
[358] https://github.com/kweonwooj/kaggle_santander_product_recommendation
[359] https://www.otto.de/jobs/en/blogs/techblog/otto-machine-learning-competition/
[360] https://www.kaggle.com/c/santander/data
[361] https://ttvand.github.io/Second-place-in-the-Santander-product-Recommendation-Kaggle-competition/
[362] https://www.linkedin.com/in/yasuhiro-h
[363] https://www.linkedin.com/in/agnis-liukis-3936b16a
[364] https://www.kaggle.com/competitions/santander-product-recommendation/overview/citation
[365] https://www.kaggle.com/c/sberbank-russian-housing-market/overview
[366] https://www.docswell.com/s/MatsuoInstitute/KEXNWQ-2024-08-23-135044
[367] https://www.linkedin.com/in/%E5%8B%87%E8%BC%9D-%E4%BB%B2%E6%9D%91-536249196
[368] https://www.kaggle.com/datasets/otto/recsys-dataset
[369] https://github.com/jmyrberg/kaggle-santander-product-recommendation
[370] https://www.linkedin.com/in/nimashahbazi
[326] https://www.kaggle.com/competitions/expedia-hotel-recommendations/overview
[327] https://www.kaggle.com/c/allstate-claims-severity
[328] https://www.kaggle.com/competitions/airbnb-recruiting-new-user-bookings/data
[329] https://www.kaggle.com/organizations/airbnb
[330] https://www.kaggle.com/competitions?tagIds=16467-Hotels+and+Accommodations
[331] https://blog.socratesk.com/kaggle.html
[332] https://onlinelibrary.wiley.com/doi/full/10.1111/1756-2171.70019
[333] https://www.kaggle.com/competitions/airbnb-recruiting-new-user-bookings
[334] https://github.com/RoyMachineLearning/Airbnb-New-User-Bookings
[335] https://github.com/tyronecragg/airbnb-new-user-bookings
[336] https://onlinelibrary.wiley.com/doi/10.1111/1756-2171.70019
[337] https://www.kaggle.com/questions-and-answers/156247
[338] https://github.com/Keiku/kaggle-airbnb-recruiting-new-user-bookings
[339] https://www.linkedin.com/in/manel-sanch%C3%B3n-rodellar-61042340
[340] https://github.com/SantyagoSeaman/Kaggle-Expedia-Hotel-Recommendations
[371] https://www.kaggle.com/competitions/santander-product-recommendation/overview/citation
[387] https://www.kaggle.com/c/ieee-fraud-detection
[388] https://www.kaggle.com/competitions/ieee-fraud-detection/overview/prizes
[389] https://cis.ieee.org/images/files/Publications/newsletter/IEEE_CIS_NSLTR_Issue_84.pdf
[390] https://ru.mitsubishielectric.com/global/common/pdf/global-news/pr/2024/240621-a_3714_en_g.pdf
[391] https://www.kaggle.com/competitions/home-credit-credit-risk-model-stability
[392] https://developer.nvidia.com/blog/leveraging-machine-learning-to-detect-fraud-tips-to-developing-a-winning-kaggle-solution/
[393] https://lotusaiplatform.com/resources/ieee-cis-fraud-detection-ml-on-real-transaction-data
[394] https://de.mitsubishielectric.com/de/news/releases/global/2024/0621-a/pdf/240621-a_3714_de_de.pdf
[395] https://github.com/gestalt-howard/santander-value-prediction
[396] https://github.com/iphysresearch/DataSciComp/blob/master/README_old.md
[397] https://huggingface.co/datasets/liqiang888/DSBench/blob/fe8d2487a7eda91f9890380d5dcaec4286fcfd8d/data_modeling/data.json
[398] https://github.com/leozhoujf/DataSciComp?search=1
[399] https://huggingface.co/datasets/liqiang888/DSBench/blob/main/data_modeling/data.json
[400] https://towardsdatascience.com/ieee-cis-fraud-detection-top-5-solution-5488fc66e95f/
[401] https://www.linkedin.com/in/ratansairohith
[372] https://www.kaggle.com/competitions/liberty-mutual-group-property-inspection-prediction/leaderboard
[373] https://www.kaggle.com/c/allstate-purchase-prediction-challenge/rules
[374] https://www.kaggle.com/competitions/liberty-mutual-group-property-inspection-prediction/models
[375] https://www.linkedin.com/in/qingchenwang
[376] https://github.com/alzmcr/allstate
[377] https://www.cgi.com/en/blog/big-data-analytics/kaggle-predictive-analytics-lessons-learned
[378] https://www.slideshare.net/slideshow/kaggle-49005240/49005240?nway-=
[379] https://github.com/VikramBansall/Allstate-Purchase-Prediction-Challenge
[380] https://onlinelibrary.wiley.com/doi/10.1111/1756-2171.70019
[381] https://www.linkedin.com/in/anshulgoyal1
[382] https://www.linkedin.com/in/pjankiewicz
[383] https://aicsjournal.wordpress.com/wp-content/uploads/2014/01/a049-predicting-purchased-policy-saba-arslan.pdf
[384] https://g-marshall.github.io/kaggle3.pdf
[385] https://github.com/xuewei4d/KaggleSolutions
[386] https://github.com/paulperry/kaggle
[417] https://www.kaggle.com/c/m5-forecasting-uncertainty
[418] https://storage.googleapis.com/kaggle-forum-message-attachments/772349/15032/M5-Competitors-Guide-Final-10-March-2020.pdf
[419] https://www.scribd.com/document/467865924/M5-Competitors-Guide-Final-10-March-2020-docx
[420] https://www.linkedin.com/in/nimashahbazi
[421] https://www.scribd.com/document/637419587/M5-Competitors-Guide-Final-10-March-2020
[422] https://www.linkedin.com/in/giba1
[423] https://en.wikipedia.org/wiki/Makridakis_Competitions
[424] https://rlgm.github.io/papers/55.pdf
[425] https://www.gormanalysis.com/projects/grupo-bimbo-inventory-demand/
[426] https://www.kaggle.com/c/m5-forecasting-uncertainty/leaderboard
[427] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand
[428] https://www.kaggle.com/loikaggle/competitions
[429] https://purehost.bath.ac.uk/ws/portalfiles/portal/221178522/_IJDS_2021_FFC.pdf
[430] https://www.kaggle.com/competitions/m5-forecasting-accuracy/overview
[431] https://mdpi-res.com/data/data-04-00015/article_deploy/data-04-00015.pdf?attachment=1&filename
[402] https://www.kaggle.com/c/jane-street-market-prediction
[403] https://www.linkedin.com/posts/wenjiezheng_think-the-news-influences-stock-movement-activity-6450887611769769984-XthG
[404] https://www.jietjodhpur.ac.in/happenings/8xtlgsw8kdk32qq0fhwxu5aa2xss4n
[405] https://quantchallenges.com/challenges/optiver-trading-at-the-close-qc-2762
[406] https://www.kaggle.com/competitions/optiver-trading-at-the-close
[407] https://quantchallenges.com/challenges/forecasting
[408] https://www.kaggle.com/competitions?tagIds=11108-Finance
[409] https://datasciencedojo.com/tags/kaggle-competition/
[410] https://datasciencedojo.com/blog/upcoming-kaggle-competitions/
[411] https://www.linkedin.com/in/ziyuewang0125
[412] https://www.kaggle.com/competitions/optiver-trading-at-the-close/discussion/441590
[413] https://www.kcl.ac.uk/news/kings-student-success-in-market-prediction-ai-competition
[414] https://www.linkedin.com/in/ernesto-budia
[415] https://github.com/moualexander23-eng/optiver-trading-at-the-close
[416] https://www.kaggle.com/competitions/two-sigma-financial-news/discussion/91586
[432] https://www.kaggle.com/c/home-depot-product-search-relevance
[433] https://www.kaggle.com/competitions/home-depot-product-search-relevance/overview
[434] https://www.linkedin.com/in/nimashahbazi
[435] https://www.kaggle.com/competitions/home-depot-product-search-relevance/rules
[436] https://kaggle.com/competitions/csc-575-hw5-winter-2024
[437] https://www.albertaai.org/albertai-kaggle-event/
[438] https://www.mindle.ai/nimashahbazi_speaker
[439] https://www.linkedin.com/in/ambarish-ganguly
[440] https://www.linkedin.com/in/ajmemilio
[441] https://m.leiphone.com/category/yanxishe/YoMbUNqRlasrpgle.html
[442] https://m.leiphone.com/category/yanxishe/X2NTBDXGARIUTWVs.html
[443] https://www.mastersindatascience.org/resources/getting-started-with-kaggle-competitions/
[444] https://www.linkedin.com/pulse/home-depot-kicks-off-kaggle-competition-40000-prize-money-coombs
[445] https://www.linkedin.com/in/ashoklathwal
[446] https://www.kaggle.com/
[469] https://github.com/PixelSenseiAvi/Kaggle-Instacart-Market-Basket-Analysis
[470] https://maielld1.github.io/posts/2017/08/Instacart-Kaggle
[471] https://queirozf.com/entries/winning-solutions-overview-kaggle-instacart-competition
[472] https://github.com/p-mckenzie/Instacart-market-basket-analysis
[473] https://github.com/ChristopherCochet/Market-Basket-Analysis
[474] https://github.com/Corneth/Instacart-Marketbasket-Analysis
[475] http://www.samplayle.com/instacart.html
[476] https://github.com/tstreamDOTh/Instacart-Market-Basket-Analysis
[477] https://github.com/yudong-94/Kaggle-Instacart-Market-Basket-Analysis
[478] https://www.kaggle.com/datasets/psparks/instacart-market-basket-analysis
[455] https://www.gormanalysis.com/projects/grupo-bimbo-inventory-demand/
[456] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand/data
[457] https://www.linkedin.com/in/nimashahbazi
[458] https://mdpi-res.com/data/data-04-00015/article_deploy/data-04-00015.pdf?attachment=1&filename
[459] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand/models
[460] https://www.linkedin.com/in/burenoreus
[461] https://mtalavera.wordpress.com/2016/09/25/kaggle-bimbo-group-wrap-up/
[462] https://github.com/mariotalavera/Grupo-Bimbo
[463] https://github.com/topics/demand-forecasting?o=asc&s=updated
[464] https://github.com/hepnerthomas/Grupo-Bimbo-Inventory-Demand
[465] https://vbn.aau.dk/ws/files/483966133/Kaggle_3_.pdf
[466] https://www.kaggle.com/c/grupo-bimbo-inventory-demand/data
[467] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand/discussion/21729
[468] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand/discussion/90748
[447] https://www.kaggle.com/c/porto-seguro-safe-driver-prediction/rules
[448] https://www.kaggle.com/c/porto-seguro-safe-driver-prediction
[449] https://www.kaggle.com/c/porto-seguro-safe-driver-prediction/submit
[450] https://www.kaggle.com/c/porto-seguro-safe-driver-prediction/overview/description
[451] https://www.kaggle.com/c/rfcx-species-audio-detection/discussion/213065
[452] https://www.kaggle.com/c/rfcx-species-audio-detection/data
[453] https://www.kaggle.com/c/airbus-ship-detection
[454] https://www.kaggle.com/c/porto-seguro-safe-driver-prediction/discussion/43453
[485] https://queirozf.com/entries/winning-solutions-overview-kaggle-instacart-competition
[486] https://maielld1.github.io/posts/2017/08/Instacart-Kaggle
[487] https://www.kaggle.com/competitions/basket-analysis
[488] https://github.com/denistanjingyu/Instacart-Market-Basket-Analysis/blob/master/README.md
[489] https://github.com/p-mckenzie/Instacart-market-basket-analysis
[490] http://www.samplayle.com/instacart.html
[491] http://rstudio-pubs-static.s3.amazonaws.com/284199_5c498037acc64051862e0829c2702ce5.html
[492] https://github.com/yihong-chen/instacart-market-basket-analysis
[493] https://github.com/yudong-94/Kaggle-Instacart-Market-Basket-Analysis
[494] https://www.kaggle.com/datasets/psparks/instacart-market-basket-analysis/data
[479] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand/discussion/21729
[480] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand/data
[481] https://www.kaggle.com/competitions/grupo-bimbo-inventory-demand
[482] https://www.kaggle.com/competitions/allstate-claims-severity/overview/timeline
[483] https://www.kaggle.com/competitions/allstate-claims-severity/discussion/24598
[484] https://www.kaggle.com/competitions/allstate-claims-severity/discussion/24527
[495] https://www.kaggle.com/c/
[496] https://speakerdeck.com/gamella/lineyahu-detasaiensu-meetup-san-jing-wu-chan-komodeiteiyu-ce-tiyarenzi-nowu-tai-li-alpacatechpato
[497] https://prtimes.jp/main/html/rd/p/000000056.000123546.html
[498] https://www.linkedin.com/in/ajmemilio
[499] https://quantchallenges.com/challenges/forecasting
[500] https://quantchallenges.com/challenges/mitsui-and-co-commodity-prediction-challenge-qc-2739
[501] https://www.linkedin.com/posts/sitraka-matthieu-forler_machinelearning-quantfinance-datascience-activity-7354752341155225606-tXzt
[502] https://www.kaggle.com/competitions/mitsui-commodity-prediction-challenge/discussion/650534
[503] https://www.kaggle.com/code/ravi20076/mitsui2025-targetinsights/input
[504] https://www.linkedin.com/posts/eshwar-kanuru_kaggle-datascience-machinelearning-activity-7420560627972194304-ykv0
[505] https://www.kaggle.com/code/ravi20076/mitsui2025-public-baseline-v1/input
[506] https://www.linkedin.com/in/houjp
[507] https://www.kaggle.com/c/quora-question-pairs/data
[508] https://www.kaggle.com/c/quora-in-class
[509] https://m.leiphone.com/category/yanxishe/X2NTBDXGARIUTWVs.html

````
