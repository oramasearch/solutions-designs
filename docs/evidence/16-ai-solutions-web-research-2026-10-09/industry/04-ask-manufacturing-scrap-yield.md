# 04 — perplexity_ask — manufacturing scrap, yield and process parameters

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** Documented case studies of machine learning in manufacturing for scrap reduction, yield optimization, and process parameter optimization (e.g. injection molding, chemicals, steel, semiconductors). Which companies deployed it, what data and ML technique, and what measured results (percent scrap reduction, yield gain, dollars saved)?
- **Timestamp (UTC):** 2026-10-09T20:19:00Z
- **Note:** a first attempt at 20:17Z returned `429 Too Many Requests`; this is the retry.

````
The strongest quantified examples in the available sources are mostly injection-molding cases. The evidence is uneven: some reports name the plant, while others describe the customer only by product or industry; several report scrap or yield changes but not dollar savings.

| Company or setting | Data and ML approach | Reported result |
|---|---|---|
| **Unnamed specialty-bottle manufacturer; ProcessMiner pilot** | Production data used to monitor defects and recommend settings for temperature, pressure, and dryer controls; the report describes AI recommendations and later closed-loop control, but does not specify the model type. | Scrap fell **25%**. Subsequent autonomous parameter control was associated with **annualized six-figure operational savings**; the exact amount and savings calculation are not given.[1] |
| **Dishwasher and refrigerator-part production; company not named in the source excerpt** | Per-cycle **cavity-pressure sensor curves** linked to part quality and machine settings; a **CNN-based** learner identified a reliable operating range and suggested corrective actions. | In a six-month dishwasher-cover application: **800 fewer scrap PPM**, an **18% shorter cycle time**, and 500 fewer minutes of line downtime. For a refrigerator inner part: visual defects were eliminated, scrap fell **52%**, and start-up scrap fell **49%**.[2] |
| **Automotive injection-molding plant; unnamed** | MES/IoT production and defect-event data; the paper describes supervised classification of defect root causes and regression for scrap rate or downtime, using a 5M problem-solving framework. It does not clearly identify the specific model algorithms. | Scrap rate fell from **2.57% to 1.41%**, a reported **45% reduction**; OEE rose from **73.1% to 80.3%**.[3] |
| **Vipex, Portugal** | Real production-process data from injection and stretch/blow molding; quality prediction and alerts for process quality loss. The available excerpt does not specify the model algorithm. | OEE increased by up to **12.25%** on a Negri Bossi machine and **10.97%** on a Tederic machine; the study also reports improved first-pass yield and fewer defects, but the excerpt gives no percentage for either.[4] |
| **Unnamed IC-packaging-tray and electronic-part manufacturer** | Injection-machine sensor data; **XGBoost** feature selection, **GRU** time-series prediction of machine parameters, and **SVM** classification of good versus defective products. | The quality classifier reached **93% accuracy**. The paper reports improved process capability after parameter adjustments, but the available excerpt provides no numerical yield gain, scrap reduction, or dollar savings.[5] |
| **Injection-molding pilot; company not named** | Process data used to predict defects and identify influential settings; **XGBoost and LightGBM** classifiers, with SHAP and individual-conditional-expectation analyses to identify influential features and operating ranges. | The study’s adjusted datasets show defect rates falling from **1.00%** to **0.21%** with XGBoost and **0.13%** with LightGBM. These are study results from adjusted data, not clearly documented production-line savings.[6] |

**What the evidence supports:** The clearest reported production outcomes are scrap reductions of **25%**, **45%**, and **52%** in injection-molding applications, plus a reported **800-PPM** decrease in another case.[1][2][3] The sources do not provide comparably specific, well-documented semiconductor, steel, or chemical plant examples with named companies, described ML methods, and measured scrap/yield or dollar outcomes; one chemical result in the available material lacks enough company and methodological detail to treat it as a strong case study.  

**Caveat:** These are reported case-study outcomes, not independently validated or directly comparable: baseline periods, product mix, measurement definitions, and attribution to ML vary across sources.### Sources
- ProcessMiner injection-molding pilot, *ManufacturingTomorrow*[1]
- Injection molding study with CNN and cavity-pressure sensors[2]
- Automotive injection-molding REACT-5 case study[3]
- Vipex injection-molding quality-prediction study[4]
- Hybrid ML injection-molding study[5]
- XGBoost/LightGBM injection-molding pilot[6]

Citations:
[1] https://link.springer.com/article/10.1007/s00170-025-15611-x?error=cookies_not_supported&code=86bb795a-0851-40ae-a703-b57f9841992a
[2] https://www.iieta.org/journals/jesa/paper/10.18280/jesa.590312
[3] https://www.patsnap.com/resources/blog/articles/ai-driven-injection-molding-25-patents-analyzed/
[4] https://ebooks.iospress.nl/pdf/doi/10.3233/ATDE230636
[5] https://www.manufacturingtomorrow.com/article/2023/04/business-case-for-artificial-intelligence-in-the-plastic-injection-molding-business/20371
[6] https://www.manufacturingtomorrow.com/content.php?post=20371
[7] https://www.numberanalytics.com/blog/real-time-optimization-in-action-case-studies
[8] https://www.aspentech.com/-/media/aspentech/home/resources/case-study/pdfs/fy22/q2/at-07409-nissan-case-study_final.pdf?dates=1714435200000&src=seo-petrophysical-analysis
[9] https://core.ac.uk/download/560745178.pdf
[10] https://arxiv.org/pdf/2503.02338
````
