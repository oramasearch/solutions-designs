# Enterprise AI Methodologies Compendium

_Generated July 14, 2026 PDT. Reference compendium of reusable methodologies, not a use-case catalog._

## Executive orientation

A **Methodology** is a reusable arrangement of AI methods — a pipeline or graph of components such as extraction, preparation, feature engineering, model training, explanation, evaluation, reporting, serving, monitoring, and retraining — described independently of a single deployment. A **Use case** is the business problem; a **Solution** is a methodology applied correctly in context and connected to a business action.
The reuse thesis is that many enterprise AI solutions reuse the same components: identity, point-in-time features, labels, validation, explainability, serving, and monitoring recur across tabular prediction, forecasting, recommendation, fraud, document AI, and LLM systems ([Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins); [ML Test Score](https://research.google.com/pubs/archive/aad9f93b86b7addfea4c419b9100c6cdd26cacea.pdf); [Hidden Technical Debt](https://papers.neurips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf)).
The prevalence headline is that standard tabular supervised learning is the best-supported candidate for the single most common traditional enterprise ML methodology, but the evidence is indirect: Kaggle reports high scikit-learn usage, and tabular-data surveys describe heterogeneous tabular data as among the most common real-world ML data while finding gradient-boosted trees hard to beat ([Kaggle 2022 report](https://ailab-ua.github.io/courses/resources/Kaggle_State_of_Machine_Learning_and_Data_Science_Report_2022.pdf); [tabular-data survey](https://pubmed.ncbi.nlm.nih.gov/37015381/); [tabular representation survey](https://pubmed.ncbi.nlm.nih.gov/41615982/)).
The claim that tabular business data constitutes the majority of business data should be treated as plausible but not precisely measured in public workload-share data; this report therefore ranks prevalence qualitatively rather than inventing percentages ([Kaggle 2022 survey](https://www.kaggle.com/kaggle-survey-2022); [Kaggle 2022 report](https://ailab-ua.github.io/courses/resources/Kaggle_State_of_Machine_Learning_and_Data_Science_Report_2022.pdf); [tabular-data survey](https://pubmed.ncbi.nlm.nih.gov/37015381/)).

## Methodology dossiers

## A. Tabular supervised learning

### M01. Standard tabular supervised learning with gradient-boosted trees and SHAP

1. **Name + aliases.** Standard tabular supervised learning with gradient-boosted trees and SHAP; GBT tabular ML; XGBoost/LightGBM/CatBoost predictive modeling.
2. **One-sentence definition.** Extract tabular data, engineer model-ready features, train a gradient-boosted tree, explain it with SHAP, and report/serve predictions.
3. **Problem class(es).** Classification and regression, with variants for ranking or survival.
4. **Data modality(ies).** Tabular, relational aggregates, entity-time tables.
5. **Component pipeline.** Extract rows and labels → clean/types/deduplicate → point-in-time feature engineering → temporal/grouped split → GBT training/tuning/calibration → SHAP/error analysis → batch/API scoring → monitoring/retraining.
6. **Canonical algorithms and model families per stage.** XGBoost for sparse/regularized strong baselines, LightGBM for very large histogram-based training, CatBoost for high-cardinality categorical features, GLM as sanity baseline, TabPFN for emerging small-data use ([XGBoost](https://arxiv.org/abs/1603.02754); [LightGBM](https://proceedings.neurips.cc/paper/6907-lightgbm-a-highly-efficient-gradient-boosting-decision-tree.pdf); [CatBoost](https://arxiv.org/abs/1706.09516); [TabPFN](https://www.nature.com/articles/s41586-024-08328-6)).
7. **Feature engineering practices.** Entity-window aggregates, recency/frequency/monetary features, ratios, target encodings computed out-of-fold, categorical encodings, lags, missingness indicators, monotonic constraints.
8. **Correctness pitfalls and safeguards.** Target leakage, temporal leakage, duplicate/entity leakage, label-window mistakes, and train/serve skew; safeguards are feature-availability audits, point-in-time joins, grouped/temporal validation, and shared feature code ([Kaufman et al. leakage paper](https://dl.acm.org/doi/10.1145/2020408.2020496); [Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins); [Google Rules of ML](https://developers.google.com/machine-learning/guides/rules-of-ml)).
9. **Evaluation methodology.** ROC-AUC, PR-AUC, log loss, Brier/calibration/lift for classification; MAE/RMSE/quantile loss for regression; temporal/grouped CV and bootstrap or paired holdout tests.
10. **Explainability methods.** SHAP summaries/dependence plots, permutation importance, PDP/ICE, reason codes, calibration and segment reports ([SHAP](https://arxiv.org/abs/1705.07874)).
11. **Data requirements.** Usually thousands to millions of labeled rows with timestamps, stable entity keys, and sufficient post-label observation delay.
12. **Compute profile.** Mostly CPU; GPU useful for large tuning; inference is cheap and often batchable.
13. **Maturity and adoption.** Mainstream and likely the most common traditional enterprise ML methodology: Kaggle reports scikit-learn as highly used and tabular surveys say heterogeneous tabular data is among the most common ML data while GBTs remain hard to beat ([Kaggle 2022 report](https://ailab-ua.github.io/courses/resources/Kaggle_State_of_Machine_Learning_and_Data_Science_Report_2022.pdf); [tabular-data survey](https://pubmed.ncbi.nlm.nih.gov/37015381/); [tabular representation survey](https://pubmed.ncbi.nlm.nih.gov/41615982/)).
14. **Reusable components.** Shared extraction, feature stores, labels, validation, SHAP, serving, monitoring with M02-M04, M11, M14-M17, M45.
15. **Representative use cases.** Churn, fraud propensity, credit risk, lead scoring, failure prediction, CLV.
16. **Production failure modes.** Covariate/base-rate drift, feedback loops, upstream schema breaks, category drift, calibration decay; monitor data, predictions, labels, KPIs, and slices ([ML Test Score](https://research.google.com/pubs/archive/aad9f93b86b7addfea4c419b9100c6cdd26cacea.pdf); [Hidden Technical Debt](https://papers.neurips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf); [Evidently](https://docs.evidentlyai.com/introduction)).
17. **Tooling landscape.** scikit-learn, XGBoost, LightGBM, CatBoost, Optuna, SHAP, Feast, MLflow, Evidently, Great Expectations.
18. **Key references.** [XGBoost](https://arxiv.org/abs/1603.02754); [LightGBM](https://proceedings.neurips.cc/paper/6907-lightgbm-a-highly-efficient-gradient-boosting-decision-tree.pdf); [CatBoost](https://arxiv.org/abs/1706.09516); [SHAP](https://arxiv.org/abs/1705.07874); [Kaggle 2022 report](https://ailab-ua.github.io/courses/resources/Kaggle_State_of_Machine_Learning_and_Data_Science_Report_2022.pdf); [tabular-data survey](https://pubmed.ncbi.nlm.nih.gov/37015381/); [Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins); [ML Test Score](https://research.google.com/pubs/archive/aad9f93b86b7addfea4c419b9100c6cdd26cacea.pdf).

### M02. Linear, GLM, GAM, and scorecard modeling

1. **Name + aliases.** Linear, GLM, GAM, and scorecard modeling; Logistic/linear regression; elastic net; GLM; GAM.
2. **One-sentence definition.** Fit additive or smooth tabular models when interpretability, stability, and governance matter more than maximum lift.
3. **Problem class(es).** Classification, regression, count modeling, interpretable risk scoring.
4. **Data modality(ies).** Tabular business data.
5. **Component pipeline.** Extract/clean → encode/standardize → specify interactions/splines → train regularized GLM/GAM → residual/calibration checks → coefficient/reason-code reporting → monitored deployment.
6. **Canonical algorithms and model families per stage.** Logistic/linear regression for coefficients and calibration, Poisson/negative-binomial for counts, elastic net for correlated sparse features, GAMs for smooth nonlinearities; GBT is runner-up for interactions.
7. **Feature engineering practices.** One-hot/WoE bins, splines, domain interactions, standardized numerics, missingness flags.
8. **Correctness pitfalls and safeguards.** Leakage, separation, multicollinearity, omitted nonlinearities, unstable rare categories; mitigate with regularization, grouped/time validation, residual and stability audits ([Kaufman et al. leakage paper](https://dl.acm.org/doi/10.1145/2020408.2020496)).
9. **Evaluation methodology.** Same split discipline as M01 plus deviance/likelihood, residuals, calibration, confidence intervals, and segment stability.
10. **Explainability methods.** Coefficient tables, odds ratios, marginal effects, GAM partial functions, calibration curves.
11. **Data requirements.** Lower volume than high-capacity models but still needs representative labels and events per parameter.
12. **Compute profile.** Very light CPU; can deploy in SQL/rules engines.
13. **Maturity and adoption.** Mainstream and production-safe, especially regulated scoring.
14. **Reusable components.** Shares extraction, encoding, validation, calibration, reporting with M01/M14.
15. **Representative use cases.** Credit scorecards, underwriting, pricing, propensity, compliance models.
16. **Production failure modes.** Coefficient drift, calibration decay, policy changes; monitor PSI-like drift and segment performance.
17. **Tooling landscape.** scikit-learn, statsmodels, R glm/gam, pyGAM, H2O GLM.
18. **Key references.** [Kaufman et al. leakage paper](https://dl.acm.org/doi/10.1145/2020408.2020496); [ML Test Score](https://research.google.com/pubs/archive/aad9f93b86b7addfea4c419b9100c6cdd26cacea.pdf); [Evidently](https://docs.evidentlyai.com/introduction).

### M03. Tabular AutoML

1. **Name + aliases.** Tabular AutoML; AutoML; CASH optimization; automated pipeline search.
2. **One-sentence definition.** Automate preprocessing, model-family selection, hyperparameter tuning, ensembling, and packaging under a validation budget.
3. **Problem class(es).** Classification, regression, sometimes forecasting/ranking.
4. **Data modality(ies).** Mostly tabular with optional text/image columns.
5. **Component pipeline.** Schema inference → preprocessing candidates → model/search space → HPO/meta-learning → ensembling → leaderboard/explainability → package best pipeline.
6. **Canonical algorithms and model families per stage.** auto-sklearn uses Bayesian optimization, meta-learning, and ensembles; auto-sklearn 2.0 adds portfolio/budget automation; stacking/blending often drives lift ([auto-sklearn](https://aaronkl.github.io/assets/pdf/autosklearn.pdf); [auto-sklearn 2.0](https://jmlr.org/papers/volume23/21-0992/21-0992.pdf); [stacked generalization](https://www.ijcai.org/Proceedings/97-2/Papers/011.pdf)).
7. **Feature engineering practices.** Automated imputation, scaling, one-hot/target encoding, feature selection, text embeddings, stacking features.
8. **Correctness pitfalls and safeguards.** Invalid validation and leakage are amplified by search; freeze split, block future features, review generated transformations ([Kaufman et al. leakage paper](https://dl.acm.org/doi/10.1145/2020408.2020496); [Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins)).
9. **Evaluation methodology.** Use deployment-faithful holdout, nested validation for claims, leaderboard with compute budget and baseline comparison.
10. **Explainability methods.** Model-agnostic SHAP/permutation and pipeline cards.
11. **Data requirements.** Same labels as M01 plus validation large enough to resist search overfit.
12. **Compute profile.** Potentially high training cost; inference depends on ensemble size.
13. **Maturity and adoption.** Mainstream as productivity/baseline layer, not replacement for problem framing.
14. **Reusable components.** Shares tuning, ensembling, evaluation, packaging with M01/M42.
15. **Representative use cases.** Rapid baselines, citizen DS, model refreshes.
16. **Production failure modes.** Leaderboard overfit, brittle preprocessing, huge ensembles; monitor provenance and component performance.
17. **Tooling landscape.** auto-sklearn, H2O AutoML, AutoGluon, FLAML, TPOT, Optuna.
18. **Key references.** [auto-sklearn](https://aaronkl.github.io/assets/pdf/autosklearn.pdf); [auto-sklearn 2.0](https://jmlr.org/papers/volume23/21-0992/21-0992.pdf); [stacked generalization](https://www.ijcai.org/Proceedings/97-2/Papers/011.pdf); [MLflow registry](https://mlflow.org/docs/latest/ml/model-registry/).

### M04. Deep tabular learning and tabular foundation models

1. **Name + aliases.** Deep tabular learning and tabular foundation models; TabNet/FT-Transformer/SAINT; tabular neural nets; TabPFN.
2. **One-sentence definition.** Use neural or pretrained models to learn tabular representations when transfer, multimodal signals, or small-data in-context prediction justify complexity.
3. **Problem class(es).** Classification, regression, representation learning.
4. **Data modality(ies).** Tabular and mixed tabular-text-image.
5. **Component pipeline.** Schema prep → numeric normalization/category embeddings → neural/pretrained model training or inference → GBT baseline comparison → calibration/explanation → deployment.
6. **Canonical algorithms and model families per stage.** MLP/TabNet/FT-Transformer/SAINT for learned representations; TabPFN for small tabular classification; GBTs remain mandatory baselines because tabular surveys find tree ensembles frequently outperform deep nets ([tabular-data survey](https://pubmed.ncbi.nlm.nih.gov/37015381/); [tabular representation survey](https://pubmed.ncbi.nlm.nih.gov/41615982/); [TabPFN](https://www.nature.com/articles/s41586-024-08328-6)).
7. **Feature engineering practices.** Category embeddings, masked/self-supervised objectives, numeric normalization, learned missingness, multimodal embeddings.
8. **Correctness pitfalls and safeguards.** Overfit, preprocessing leakage, benchmark leakage, uncalibrated probabilities; use nested temporal/group validation and GBT baseline.
9. **Evaluation methodology.** Task metrics plus calibration, ablation, compute-normalized comparison vs GBT/GLM.
10. **Explainability methods.** Attention/attribution with caveats, SHAP/permutation, ablations.
11. **Data requirements.** Often needs more data than GBT unless pretrained; TabPFN targets small-data cases.
12. **Compute profile.** GPU often useful; inference can be heavier than GBT.
13. **Maturity and adoption.** Emerging, with niche production value.
14. **Reusable components.** Shares representation/pretraining with M43 and tabular discipline with M01.
15. **Representative use cases.** Small-data prediction, multimodal scoring, healthcare risk.
16. **Production failure modes.** Embedding drift, GPU dependency, hard explanations; monitor calibration and slices.
17. **Tooling landscape.** PyTorch Tabular, TabPFN, AutoGluon, Lightning, SHAP.
18. **Key references.** [tabular-data survey](https://pubmed.ncbi.nlm.nih.gov/37015381/); [tabular representation survey](https://pubmed.ncbi.nlm.nih.gov/41615982/); [TabPFN](https://www.nature.com/articles/s41586-024-08328-6).

## B. Time-series forecasting

### M05. Classical univariate forecasting

1. **Name + aliases.** Classical univariate forecasting; ETS/ARIMA/SARIMA; exponential smoothing.
2. **One-sentence definition.** Fit statistical models per series using trend, seasonality, autocorrelation, and residual diagnostics.
3. **Problem class(es).** Point/probabilistic forecasting.
4. **Data modality(ies).** Regular time series.
5. **Component pipeline.** Calendarize → clean/outlier treat → transform/stationarize → fit ETS/ARIMA/SARIMA → rolling-origin validation → intervals/reporting.
6. **Canonical algorithms and model families per stage.** ETS for level/trend/seasonality, ARIMA/SARIMA for autocorrelation/differencing, naive/seasonal naive as baseline ([Forecasting: Principles and Practice](https://robjhyndman.com/uwafiles/fpp-notes.pdf)).
7. **Feature engineering practices.** Calendar flags, holidays, Box-Cox/log transforms, differencing, seasonal lags, rolling means.
8. **Correctness pitfalls and safeguards.** Future-value leakage, random splits, revised-data leakage, calendar misalignment; use rolling-origin and cutoff-versioned data ([Forecasting: Principles and Practice](https://robjhyndman.com/uwafiles/fpp-notes.pdf); [Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins)).
9. **Evaluation methodology.** Rolling-origin backtests, MAE/RMSE/sMAPE/MASE, interval coverage, naive baselines ([MASE](https://robjhyndman.com/papers/mase.pdf)).
10. **Explainability methods.** Decomposition, residual diagnostics, intervals, horizon error charts.
11. **Data requirements.** At least enough history for seasonality; actuals become labels.
12. **Compute profile.** CPU-light, parallel per series.
13. **Maturity and adoption.** Mainstream benchmark and production method.
14. **Reusable components.** Shares temporal evaluation/calendar features with M06-M10.
15. **Representative use cases.** Demand, revenue, call volume, capacity.
16. **Production failure modes.** Structural breaks and seasonality changes; monitor residuals and coverage.
17. **Tooling landscape.** R fable/forecast, statsmodels, sktime, statsforecast.
18. **Key references.** [Forecasting: Principles and Practice](https://robjhyndman.com/uwafiles/fpp-notes.pdf); [MASE](https://robjhyndman.com/papers/mase.pdf).

### M06. Prophet-style decomposable forecasting

1. **Name + aliases.** Prophet-style decomposable forecasting; Prophet; analyst-in-the-loop forecasting.
2. **One-sentence definition.** Model business series as trend plus seasonality plus holiday/event effects with analyst-adjustable components.
3. **Problem class(es).** Forecasting and planning.
4. **Data modality(ies).** Time series with calendar effects and irregular/missing observations.
5. **Component pipeline.** Prepare series/events → fit decomposable model → simulated historical forecasts → flag/review failures → publish forecast and components.
6. **Canonical algorithms and model families per stage.** Prophet is preferred when interpretable changepoints, holidays, and analyst adjustment matter; ETS/ARIMA and global deep models are runner-ups ([Forecasting at Scale](https://facebook.github.io/prophet/static/prophet_paper_20170113.pdf); [Forecasting: Principles and Practice](https://robjhyndman.com/uwafiles/fpp-notes.pdf)).
7. **Feature engineering practices.** Holiday regressors, changepoints, caps/floors, multiplicative seasonality, manual overrides.
8. **Correctness pitfalls and safeguards.** Future-event leakage, override bias, untracked adjustments; version cutoffs and overrides ([Forecasting at Scale](https://facebook.github.io/prophet/static/prophet_paper_20170113.pdf)).
9. **Evaluation methodology.** Simulated historical forecasts, horizon errors, baseline comparison, flagged outliers.
10. **Explainability methods.** Trend/seasonality/holiday components, changepoints, analyst notes.
11. **Data requirements.** Moderate history plus calendar/event metadata.
12. **Compute profile.** CPU-light per series.
13. **Maturity and adoption.** Mainstream business planning method.
14. **Reusable components.** Shares calendar/backtest/reporting with M05/M07-M10.
15. **Representative use cases.** Marketing forecasts, workforce, finance planning.
16. **Production failure modes.** Holiday drift, changepoint overfit; monitor horizon error and overrides.
17. **Tooling landscape.** Prophet, NeuralProphet, sktime, statsforecast.
18. **Key references.** [Forecasting at Scale](https://facebook.github.io/prophet/static/prophet_paper_20170113.pdf); [Forecasting: Principles and Practice](https://robjhyndman.com/uwafiles/fpp-notes.pdf).

### M07. Global deep learning forecasting

1. **Name + aliases.** Global deep learning forecasting; DeepAR; N-BEATS/N-HiTS; Temporal Fusion Transformer.
2. **One-sentence definition.** Train one neural model across many related series to learn shared dynamics and covariate effects.
3. **Problem class(es).** Multi-horizon point/probabilistic forecasting.
4. **Data modality(ies).** Panels of time series with covariates.
5. **Component pipeline.** Panel assembly → static/known/observed covariates → lag windows → global model → rolling backtest → interval calibration → batch serving.
6. **Canonical algorithms and model families per stage.** DeepAR for probabilistic autoregression, N-BEATS/N-HiTS for strong neural baselines, TFT for interpretable multi-horizon covariates ([DeepAR](https://arxiv.org/abs/1704.04110); [N-BEATS](https://arxiv.org/abs/1905.10437); [N-HiTS](https://arxiv.org/abs/2201.12886); [TFT](https://arxiv.org/abs/1912.09363)).
7. **Feature engineering practices.** Lag stacks, rolling stats, static embeddings, known-future covariates, scaling per series.
8. **Correctness pitfalls and safeguards.** Random split leakage, unknown future covariates, scaling leakage, cold starts; use creation-date cutoffs.
9. **Evaluation methodology.** Rolling-origin by horizon, pinball/CRPS, interval coverage, naive/classical baselines.
10. **Explainability methods.** TFT importances, covariate ablations, horizon plots, intervals.
11. **Data requirements.** Many related series or long histories; sparse panels need pooling.
12. **Compute profile.** GPU training; batch inference moderate-to-high.
13. **Maturity and adoption.** Mainstream in advanced forecasting teams.
14. **Reusable components.** Shares panel/temporal features with M08-M10 and M45.
15. **Representative use cases.** Retail demand, energy load, logistics, subscriptions.
16. **Production failure modes.** Covariate drift, cold-start, miscalibrated intervals; monitor horizon error and coverage.
17. **Tooling landscape.** GluonTS, Darts, NeuralForecast, PyTorch Forecasting.
18. **Key references.** [DeepAR](https://arxiv.org/abs/1704.04110); [N-BEATS](https://arxiv.org/abs/1905.10437); [N-HiTS](https://arxiv.org/abs/2201.12886); [TFT](https://arxiv.org/abs/1912.09363).

### M08. Time-series foundation-model forecasting

1. **Name + aliases.** Time-series foundation-model forecasting; Chronos/TimesFM; zero-shot forecasting.
2. **One-sentence definition.** Use pretrained time-series models for zero-shot, few-shot, or adapted forecasts.
3. **Problem class(es).** Forecasting and anomaly baselining.
4. **Data modality(ies).** Univariate/multivariate series and panels.
5. **Component pipeline.** Normalize/window series → provide context → zero-shot or fine-tune → compare to local baselines → calibrate/fallback → serve.
6. **Canonical algorithms and model families per stage.** Chronos tokenizes time series for language-model-style forecasting; TimesFM is a pretrained time-series foundation model; use as rapid baseline with classical/global challengers ([Chronos](https://arxiv.org/abs/2403.07815); [TimesFM](https://github.com/google-research/timesfm)).
7. **Feature engineering practices.** Context windows, scaling, optional adapters, ensembling with local models.
8. **Correctness pitfalls and safeguards.** Pretraining mismatch, benchmark leakage, weak business covariate handling; safeguard with honest backtests.
9. **Evaluation methodology.** Rolling-origin vs seasonal naive/classical/global models, by horizon/segment/cost.
10. **Explainability methods.** Intervals if available, examples, fallback-model explanations.
11. **Data requirements.** Needs recent context and representative backtests.
12. **Compute profile.** Inference may need GPU at scale; fine-tuning adds cost.
13. **Maturity and adoption.** Emerging.
14. **Reusable components.** Shares normalization/backtesting/ensembling with M05-M07/M42.
15. **Representative use cases.** Cold-start forecasts, rapid planning baselines.
16. **Production failure modes.** Domain shift, cost spikes, black-box failures; monitor error/fallback triggers.
17. **Tooling landscape.** Chronos, TimesFM, GluonTS, Darts.
18. **Key references.** [Chronos](https://arxiv.org/abs/2403.07815); [TimesFM](https://github.com/google-research/timesfm).

### M09. Hierarchical and grouped forecast reconciliation

1. **Name + aliases.** Hierarchical and grouped forecast reconciliation; Coherent forecasts; MinT reconciliation.
2. **One-sentence definition.** Make forecasts across rollup levels coherent by reconciling base forecasts to hierarchy constraints.
3. **Problem class(es).** Forecasting and planning.
4. **Data modality(ies).** Hierarchical/grouped time series.
5. **Component pipeline.** Define hierarchy/summing matrix → create base forecasts → estimate error covariance → reconcile → evaluate every level → publish coherent plan.
6. **Canonical algorithms and model families per stage.** Bottom-up for reliable low-level data, top-down for sparse bottoms, MinT/optimal reconciliation for covariance-aware coherence ([MinT reconciliation](https://robjhyndman.com/papers/mint.pdf)).
7. **Feature engineering practices.** Hierarchy IDs, aggregation keys, shared calendars, residual covariance.
8. **Correctness pitfalls and safeguards.** Hierarchy drift, double counting, leaked residual covariance; version hierarchy and historical cutoffs.
9. **Evaluation methodology.** Rolling-origin, accuracy/bias at all levels, reconciliation lift.
10. **Explainability methods.** Rollup waterfalls, coherence tables, level error heatmaps.
11. **Data requirements.** Stable hierarchy metadata and actuals per level.
12. **Compute profile.** Usually CPU-light; covariance can be heavy for large hierarchies.
13. **Maturity and adoption.** Mainstream in planning.
14. **Reusable components.** Shares base forecasts with M05-M08 and optimization with M39.
15. **Representative use cases.** Retail/product-location, sales territories, finance rollups.
16. **Production failure modes.** New nodes, biased low-level forecasts; monitor all levels.
17. **Tooling landscape.** R hts/fable, Nixtla HierarchicalForecast.
18. **Key references.** [MinT reconciliation](https://robjhyndman.com/papers/mint.pdf).

### M10. Intermittent and sparse-demand forecasting

1. **Name + aliases.** Intermittent and sparse-demand forecasting; Croston/SBA/TSB; zero-inflated demand.
2. **One-sentence definition.** Forecast series with many zeros by separating occurrence from positive size or using intermittent estimators.
3. **Problem class(es).** Forecasting, inventory planning.
4. **Data modality(ies).** Sparse count time series.
5. **Component pipeline.** Classify intermittency → clean stockouts/censoring → fit Croston/occurrence-size model → inventory-cost evaluation → publish reorder inputs.
6. **Canonical algorithms and model families per stage.** Croston-style methods separate intervals and sizes; SBA/TSB adjust bias/obsolescence; pooled zero-inflated GLM/GBT is runner-up with covariates ([Croston analysis](https://robjhyndman.com/papers/croston.pdf)).
7. **Feature engineering practices.** Demand occurrence, days since demand, nonzero size, stockout flags, lifecycle flags.
8. **Correctness pitfalls and safeguards.** Stockouts look like zero demand, promotions confound demand; use inventory-aware labels and rolling validation.
9. **Evaluation methodology.** Rolling-origin, bias, service-level/holding-stockout cost, scaled errors; avoid naive MAPE with zeros.
10. **Explainability methods.** Occurrence/size decomposition and inventory service reports.
11. **Data requirements.** Sparse history plus availability/stockout metadata.
12. **Compute profile.** CPU-light unless pooled ML at scale.
13. **Maturity and adoption.** Mainstream in inventory-heavy firms.
14. **Reusable components.** Shares forecasting and optimization with M05-M09/M39.
15. **Representative use cases.** Spare parts, long-tail SKU demand.
16. **Production failure modes.** Obsolescence, assortment changes, censoring; monitor zero-rate and service levels.
17. **Tooling landscape.** tsintermittent, statsforecast, sktime.
18. **Key references.** [Croston analysis](https://robjhyndman.com/papers/croston.pdf); [Forecasting: Principles and Practice](https://robjhyndman.com/uwafiles/fpp-notes.pdf).

## C. Survival / time-to-event

### M11. Survival and time-to-event modeling

1. **Name + aliases.** Survival and time-to-event modeling; Cox; random survival forest; discrete hazard.
2. **One-sentence definition.** Model whether and when an event occurs while handling censoring.
3. **Problem class(es).** Survival/time-to-event, churn timing, failure risk.
4. **Data modality(ies).** Longitudinal tabular/event histories.
5. **Component pipeline.** Define origin/event/censoring → risk sets/person-period rows → time-varying features → survival model → censoring-aware evaluation → survival/hazard reports.
6. **Canonical algorithms and model families per stage.** Cox for interpretable hazards, random survival forests for nonlinearities, discrete-time hazard for classification tooling ([Cox model](https://www.stat.cmu.edu/~ryantibs/journalclub/cox_1972.pdf); [random survival forests](https://arxiv.org/abs/0811.1645); [scikit-survival](https://scikit-survival.readthedocs.io/en/stable/user_guide/00-introduction.html)).
7. **Feature engineering practices.** Duration, exposure, time-varying covariates, recency/cumulative features, censoring flags.
8. **Correctness pitfalls and safeguards.** Immortal-time bias, censoring leakage, future covariates, wrong origin; freeze covariates at risk time.
9. **Evaluation methodology.** Concordance, time-dependent AUC, integrated Brier, survival calibration.
10. **Explainability methods.** Hazard ratios, survival curves, SHAP/permutation for nonlinear models.
11. **Data requirements.** Event timestamps, censoring, enough follow-up/events.
12. **Compute profile.** CPU for Cox/forests; GPU for deep survival.
13. **Maturity and adoption.** Mainstream in healthcare/reliability, underused in enterprise churn.
14. **Reusable components.** Shares temporal/label discipline with M01/M05.
15. **Representative use cases.** Churn timing, prepayment, equipment failure.
16. **Production failure modes.** Changing censoring, delayed events, interventions; monitor incidence/censoring/calibration.
17. **Tooling landscape.** lifelines, scikit-survival, survival R, XGBoost AFT.
18. **Key references.** [Cox model](https://www.stat.cmu.edu/~ryantibs/journalclub/cox_1972.pdf); [random survival forests](https://arxiv.org/abs/0811.1645); [scikit-survival](https://scikit-survival.readthedocs.io/en/stable/user_guide/00-introduction.html).

## D. Causal inference & uplift

### M12. Online experimentation and variance reduction

1. **Name + aliases.** Online experimentation and variance reduction; A/B testing; CUPED; switchback/geo tests.
2. **One-sentence definition.** Estimate causal effects through randomized assignment and pre-specified metrics.
3. **Problem class(es).** Causal inference, experimentation.
4. **Data modality(ies).** Event streams, user/session tables, geo/store panels.
5. **Component pipeline.** Hypothesis/unit → randomization → exposure logging → outcome/guardrails → CUPED/regression analysis → decision/ramp → archive.
6. **Canonical algorithms and model families per stage.** User A/B for independent user interventions, cluster/geo/switchback for interference/capacity, CUPED for pre-period covariate variance reduction ([CUPED](https://robotics.stanford.edu/~ronnyk/2013-02CUPEDImprovingSensitivityOfControlledExperiments.pdf)).
7. **Feature engineering practices.** Assignment hashes, pre-period covariates, exposure logs, cluster/time blocks.
8. **Correctness pitfalls and safeguards.** Sample-ratio mismatch, peeking, interference, carryover, logging bugs; use randomization checks and pre-registration.
9. **Evaluation methodology.** Difference in means/regression adjustment, robust/clustered SEs, MDE, guardrails, sequential policy.
10. **Explainability methods.** Experiment readout, lift/CI, guardrail dashboard, segment caveats.
11. **Data requirements.** Reliable assignment/exposure logs and adequate sample size.
12. **Compute profile.** CPU-light; platform/logging is main investment.
13. **Maturity and adoption.** Mainstream gold standard for digital interventions.
14. **Reusable components.** Shares logging/OPE with M14/M35.
15. **Representative use cases.** Product, marketing, pricing, operations tests.
16. **Production failure modes.** Instrumentation drift, ramp bugs, long-term effects; monitor guardrails and holdouts.
17. **Tooling landscape.** Statsmodels, experimentation platforms, PyMC/Stan.
18. **Key references.** [CUPED](https://robotics.stanford.edu/~ronnyk/2013-02CUPEDImprovingSensitivityOfControlledExperiments.pdf).

### M13. Quasi-experimental causal inference

1. **Name + aliases.** Quasi-experimental causal inference; Diff-in-diff; synthetic control; IV; RDD.
2. **One-sentence definition.** Estimate causal effects without full randomization by exploiting natural experiments or identification assumptions.
3. **Problem class(es).** Causal inference and policy evaluation.
4. **Data modality(ies).** Panel/tabular time series, geo/store panels.
5. **Component pipeline.** Define intervention/estimand → choose identification design → construct controls → test assumptions → estimate effect → placebo/sensitivity reporting.
6. **Canonical algorithms and model families per stage.** DiD for treated/control panels with parallel trends, synthetic control for few treated units, IV for valid instruments, RDD for threshold assignment ([difference-in-differences](https://pmc.ncbi.nlm.nih.gov/articles/PMC10683972/); [synthetic control](https://www.mit.edu/~jhainm/Paper/ccs.pdf)).
7. **Feature engineering practices.** Pre/post indicators, fixed effects, donor weights, running variables, instruments.
8. **Correctness pitfalls and safeguards.** Parallel-trend violations, spillovers, manipulated thresholds, weak IVs; use event studies/placebos/sensitivity checks.
9. **Evaluation methodology.** Event-study plots, placebo tests, robust SEs, pre-trend diagnostics.
10. **Explainability methods.** Counterfactual charts, treatment-effect ranges, assumption checklist.
11. **Data requirements.** Credible design, intervention timing, pre-period controls.
12. **Compute profile.** CPU-light to moderate.
13. **Maturity and adoption.** Mainstream analytical methodology, not usually serving model.
14. **Reusable components.** Shares causal reporting with M12/M14 and panels with M05/M40.
15. **Representative use cases.** Geo marketing, policy changes, store operations.
16. **Production failure modes.** Concurrent interventions and spillovers; monitor comparability.
17. **Tooling landscape.** EconML, DoWhy, statsmodels, synthdid.
18. **Key references.** [difference-in-differences](https://pmc.ncbi.nlm.nih.gov/articles/PMC10683972/); [synthetic control](https://www.mit.edu/~jhainm/Paper/ccs.pdf); [EconML](https://www.pywhy.org/EconML/).

### M14. Uplift modeling and heterogeneous treatment effects

1. **Name + aliases.** Uplift modeling and heterogeneous treatment effects; CATE; S/T/X/R learners; uplift trees; DML.
2. **One-sentence definition.** Predict incremental treatment effect rather than response probability.
3. **Problem class(es).** Causal inference/uplift, treatment targeting.
4. **Data modality(ies).** Tabular customer/user data with treatment/outcome logs.
5. **Component pipeline.** Assemble treatment/outcome/pre-treatment covariates → validate randomization/overlap → train meta-learner/uplift tree/DML → policy-value evaluation → target/deploy → monitor.
6. **Canonical algorithms and model families per stage.** S/T/X/R learners handle different imbalance/structure; DML orthogonalizes nuisance models; uplift trees split on effect heterogeneity ([double/debiased ML](https://arxiv.org/abs/1608.00060); [EconML](https://www.pywhy.org/EconML/); [CausalML](https://causalml.readthedocs.io/en/latest/examples/uplift_trees_with_synthetic_data.html)).
7. **Feature engineering practices.** Pre-treatment covariates, propensities, treatment interactions, residuals, cost-benefit features.
8. **Correctness pitfalls and safeguards.** Post-treatment features, confounding, treatment leakage, optimizing response not uplift; require randomized holdouts or strong assumptions.
9. **Evaluation methodology.** Qini/uplift curves, doubly robust policy value, CATE calibration, randomized holdout.
10. **Explainability methods.** Segment uplift, incremental profit, targeting policy, assumption caveats.
11. **Data requirements.** Best with experiments; observational use needs overlap/covariates.
12. **Compute profile.** Similar to tabular ML plus causal evaluation.
13. **Maturity and adoption.** Emerging-to-mainstream in marketing/product.
14. **Reusable components.** Shares M01 feature pipeline and M12 logs/OPE.
15. **Representative use cases.** Offer targeting, retention, outreach, treatment selection.
16. **Production failure modes.** Policy feedback, saturation, changing propensities; monitor exploration holdouts.
17. **Tooling landscape.** EconML, CausalML, DoWhy, DoubleML.
18. **Key references.** [double/debiased ML](https://arxiv.org/abs/1608.00060); [EconML](https://www.pywhy.org/EconML/); [CausalML](https://causalml.readthedocs.io/en/latest/examples/uplift_trees_with_synthetic_data.html).

## E. Anomaly / outlier detection

### M15. Batch anomaly and outlier detection

1. **Name + aliases.** Batch anomaly and outlier detection; Isolation forest; LOF; one-class SVM; autoencoders.
2. **One-sentence definition.** Detect unusual records using isolation, density/distance, boundary, or reconstruction signals.
3. **Problem class(es).** Anomaly/outlier detection, rare-event triage.
4. **Data modality(ies).** Tabular, embeddings, time-window aggregates.
5. **Component pipeline.** Define normal/reference data → feature engineering → train detector → threshold/review → feedback labels → monitor/retrain.
6. **Canonical algorithms and model families per stage.** Isolation Forest for scalable tabular anomalies, LOF for local density, one-class SVM for smaller boundary problems, autoencoders for high-dimensional continuous data ([Isolation Forest](https://www.lamda.nju.edu.cn/publication/icdm08b.pdf); [LOF](https://webdocs.cs.ualberta.ca/~zaiane/pub/check/breunig.pdf); [PyOD](https://pyod.readthedocs.io/)).
7. **Feature engineering practices.** Robust scaling, peer deviations, velocities, ratios, rolling z-scores, embedding distances.
8. **Correctness pitfalls and safeguards.** Contaminated normals, seasonality, threshold drift, alert-label bias; maintain clean reference windows and human audit.
9. **Evaluation methodology.** Precision at review budget, known-incident recall, PR-AUC if labels exist, alert latency/cost.
10. **Explainability methods.** Anomaly factor contributions, peer comparisons, reconstruction residuals, alert narratives.
11. **Data requirements.** Labels optional but confirmed anomalies improve thresholds.
12. **Compute profile.** CPU for tree/density; GPU for deep autoencoders.
13. **Maturity and adoption.** Mainstream for triage and monitoring.
14. **Reusable components.** Shares features with M01, streaming with M16, graph fraud with M17.
15. **Representative use cases.** Transaction alerts, quality exceptions, sensor faults.
16. **Production failure modes.** Alert fatigue, drift, adversarial adaptation; monitor alert volume and reviewer precision.
17. **Tooling landscape.** PyOD, scikit-learn, River, PyTorch/Keras.
18. **Key references.** [Isolation Forest](https://www.lamda.nju.edu.cn/publication/icdm08b.pdf); [LOF](https://webdocs.cs.ualberta.ca/~zaiane/pub/check/breunig.pdf); [PyOD](https://pyod.readthedocs.io/).

### M16. Streaming and online anomaly detection

1. **Name + aliases.** Streaming and online anomaly detection; Real-time anomaly scoring; change detection.
2. **One-sentence definition.** Score and update anomaly signals continuously from event streams.
3. **Problem class(es).** Anomaly detection, monitoring, streaming classification.
4. **Data modality(ies).** Event/log streams, telemetry, transactions.
5. **Component pipeline.** Stream ingest → real-time windows/features → online/frozen scoring → threshold/alert → feedback → drift/adaptation.
6. **Canonical algorithms and model families per stage.** EWMA/z-score for simple monitors; online trees/density and River models for incremental ML ([River](https://riverml.xyz/)).
7. **Feature engineering practices.** Sliding/tumbling windows, velocity counts, decayed aggregates, sketches, online standardization.
8. **Correctness pitfalls and safeguards.** Late/out-of-order events, adaptive thresholds hiding incidents, feedback contamination; use event-time processing and shadow eval.
9. **Evaluation methodology.** Time-to-detect, false alarms per unit time, delayed-label recall, prequential metrics.
10. **Explainability methods.** Live dashboards, root-cause deltas, timelines.
11. **Data requirements.** Low-latency streams and normal history; labels often delayed.
12. **Compute profile.** CPU streaming with state stores; strict latency SLAs.
13. **Maturity and adoption.** Mainstream in observability/fraud/security.
14. **Reusable components.** Shares online features with M45 and fraud with M17.
15. **Representative use cases.** Payment velocity, API abuse, sensor alarms.
16. **Production failure modes.** Alert storms, seasonality, pipeline lag; monitor event lag and alert budgets.
17. **Tooling landscape.** River, Flink, Kafka Streams, Spark Streaming.
18. **Key references.** [River](https://riverml.xyz/); [Evidently](https://docs.evidentlyai.com/introduction).

## E/K. Fraud-specific methodology

### M17. Fraud graph and velocity-feature detection

1. **Name + aliases.** Fraud graph and velocity-feature detection; Fraud rings; graph features plus ML.
2. **One-sentence definition.** Combine velocity features, entity resolution, and graph-derived risk signals for adversarial fraud.
3. **Problem class(es).** Anomaly, classification, link prediction, risk scoring.
4. **Data modality(ies).** Transactions, event streams, device/IP/account graphs.
5. **Component pipeline.** Resolve entities → build time-safe graph → compute velocities/graph aggregates → train rules/GBT/GNN → route alerts → investigator feedback.
6. **Canonical algorithms and model families per stage.** Velocity rules catch fast attacks, GBTs consume graph aggregates, GNN/link-prediction detect relational patterns, and entity resolution determines graph quality ([GraphSAGE](https://arxiv.org/abs/1706.02216); [GAT](https://arxiv.org/abs/1710.10903); [Fellegi-Sunter](https://www.cs.cornell.edu/~shmat/courses/cs6434/fellegi-sunter.pdf)).
7. **Feature engineering practices.** Counts per entity/device/IP window, shared-attribute counts, PageRank, component risk, neighbor label rates out-of-fold.
8. **Correctness pitfalls and safeguards.** Investigation-label bias, future-edge leakage, identity errors, adversarial adaptation; use temporal graph cuts and random audits.
9. **Evaluation methodology.** Precision at review budget, monetary recall, fraud dollars captured, temporal holdouts.
10. **Explainability methods.** Case graphs, shared-attribute explanations, ring visualizations, velocity timelines.
11. **Data requirements.** Event streams, identifiers, linkable attributes, delayed investigator labels.
12. **Compute profile.** Real-time features plus graph batch/distributed compute; GNN may need GPU.
13. **Maturity and adoption.** Mainstream in fraud/security.
14. **Reusable components.** Shares entity resolution M30, graph ML M31, streaming M16, GBT M01.
15. **Representative use cases.** Payments, ATO, insurance rings, promo abuse.
16. **Production failure modes.** Adaptive attackers, graph explosion, review bottlenecks; monitor graph stats and precision.
17. **Tooling landscape.** NetworkX, Neo4j GDS, PyG, DGL, Spark, Feast.
18. **Key references.** [GraphSAGE](https://arxiv.org/abs/1706.02216); [GAT](https://arxiv.org/abs/1710.10903); [Fellegi-Sunter](https://www.cs.cornell.edu/~shmat/courses/cs6434/fellegi-sunter.pdf); [Isolation Forest](https://www.lamda.nju.edu.cn/publication/icdm08b.pdf).

## F. Clustering & segmentation

### M18. Classical clustering and segmentation

1. **Name + aliases.** Classical clustering and segmentation; k-means; GMM; hierarchical; HDBSCAN; mixed-type clustering.
2. **One-sentence definition.** Partition entities into similarity-based groups without labels for exploration or operational segments.
3. **Problem class(es).** Clustering/segmentation.
4. **Data modality(ies).** Tabular, mixed-type, embeddings, geospatial.
5. **Component pipeline.** Define entity/window → scale/encode → optional dimensionality reduction → cluster → validate/profile → publish segments → monitor drift.
6. **Canonical algorithms and model families per stage.** k-means for large spherical numeric clusters, GMM for soft ellipses, hierarchical for dendrograms, HDBSCAN for variable-density/noise ([scikit-learn clustering](https://scikit-learn.org/stable/modules/clustering.html); [HDBSCAN](https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html)).
7. **Feature engineering practices.** Scaling, log transforms, RFM features, PCA/UMAP, one-hot/Gower, robust outlier handling.
8. **Correctness pitfalls and safeguards.** Scale artifacts, future-outcome leakage, unstable seeds, proxy segments; validate stability and interpretability.
9. **Evaluation methodology.** Silhouette/DB/CH, resampling stability, downstream lift, segment sizes.
10. **Explainability methods.** Cluster profiles, centroids/prototypes, segment cards, tree surrogate.
11. **Data requirements.** No labels; enough entities per stable segment.
12. **Compute profile.** CPU-light to moderate; pairwise distances can be heavy.
13. **Maturity and adoption.** Mainstream for analytics, often exploratory.
14. **Reusable components.** Shares features with M01, embeddings with M19/M25.
15. **Representative use cases.** Customer segments, product/store typologies.
16. **Production failure modes.** Segment drift and low actionability; monitor sizes/KPIs.
17. **Tooling landscape.** scikit-learn, hdbscan, scipy, kmodes, UMAP.
18. **Key references.** [scikit-learn clustering](https://scikit-learn.org/stable/modules/clustering.html); [HDBSCAN](https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html).

## F/I. Embedding clustering

### M19. Embedding-based clustering and topic discovery

1. **Name + aliases.** Embedding-based clustering and topic discovery; Semantic clustering; BERTopic; embedding topics.
2. **One-sentence definition.** Embed items, cluster vectors, and label groups with keywords/exemplars.
3. **Problem class(es).** Clustering, topic modeling, discovery.
4. **Data modality(ies).** Text, documents, images, products, multimodal embeddings.
5. **Component pipeline.** Embed → reduce dimension → cluster → label/exemplars → validate → publish taxonomy/segments → refresh.
6. **Canonical algorithms and model families per stage.** BERTopic combines embeddings, dimensionality reduction, clustering, and c-TF-IDF labels; LDA remains bag-of-words probabilistic baseline ([BERTopic](https://bertopic.readthedocs.io/); [LDA](https://jmlr.csail.mit.edu/papers/v3/blei03a.html); [BERT](https://arxiv.org/abs/1810.04805)).
7. **Feature engineering practices.** Sentence/document embeddings, UMAP/PCA, c-TF-IDF, exemplars, metadata summaries.
8. **Correctness pitfalls and safeguards.** Embedding bias/domain mismatch, duplicates, unstable clusters, misleading topic labels; use manual review and stability checks.
9. **Evaluation methodology.** Topic coherence, stability, human agreement, downstream usefulness.
10. **Explainability methods.** Topic labels, exemplars, keywords, cluster maps, change-over-time dashboards.
11. **Data requirements.** Representative corpus; labels optional.
12. **Compute profile.** GPU for embedding large corpora; CPU/GPU clustering.
13. **Maturity and adoption.** Mainstream for text analytics, emerging multimodal.
14. **Reusable components.** Shares embeddings with M25/M26 and clustering with M18.
15. **Representative use cases.** Ticket themes, VOC, taxonomy, KB gaps.
16. **Production failure modes.** Topic drift and embedding upgrades; monitor cluster stability.
17. **Tooling landscape.** BERTopic, sentence-transformers, UMAP, HDBSCAN, FAISS.
18. **Key references.** [BERTopic](https://bertopic.readthedocs.io/); [LDA](https://jmlr.csail.mit.edu/papers/v3/blei03a.html); [BERT](https://arxiv.org/abs/1810.04805).

## G. Recommendation

### M20. Collaborative filtering and matrix factorization

1. **Name + aliases.** Collaborative filtering and matrix factorization; MF; implicit ALS; BPR; item-item.
2. **One-sentence definition.** Learn user/item latent factors from interaction histories.
3. **Problem class(es).** Recommendation, personalization, candidate generation.
4. **Data modality(ies).** User-item matrices, clicks, purchases, ratings.
5. **Component pipeline.** Log interactions → define positives/negatives/time cutoffs → train factor model → top-K candidates → evaluate → online test/monitor.
6. **Canonical algorithms and model families per stage.** Matrix factorization is canonical; implicit ALS for confidence-weighted implicit data; BPR for pairwise ranking; item-item is robust baseline ([matrix factorization](https://dl.acm.org/doi/10.1109/MC.2009.263)).
7. **Feature engineering practices.** Interaction counts, recency weights, confidence, user/item IDs, popularity priors, side features for cold start.
8. **Correctness pitfalls and safeguards.** Future-interaction leakage, exposure/popularity bias, feedback loops; use temporal splits and exploration.
9. **Evaluation methodology.** Recall@K, NDCG@K, MAP@K, coverage/diversity, online A/B.
10. **Explainability methods.** Similar users/items, factor explanations, category contribution.
11. **Data requirements.** Needs many interactions; cold start needs content/popularity fallback.
12. **Compute profile.** CPU/distributed training; ANN/batch top-K serving.
13. **Maturity and adoption.** Mainstream for interaction-rich businesses.
14. **Reusable components.** Shares retrieval/ranking with M21-M23 and bandits M35.
15. **Representative use cases.** E-commerce/media/content recommendations.
16. **Production failure modes.** Popularity loops, stale factors, cold starts; monitor coverage/diversity/KPIs.
17. **Tooling landscape.** Spark ALS, implicit, Surprise, RecBole, TFRS, FAISS.
18. **Key references.** [matrix factorization](https://dl.acm.org/doi/10.1109/MC.2009.263).

### M21. Two-tower retrieval plus ranking recommendation

1. **Name + aliases.** Two-tower retrieval plus ranking recommendation; Candidate generation + ranking; neural retrieval.
2. **One-sentence definition.** Retrieve candidates with embeddings and rank them with richer context/features.
3. **Problem class(es).** Recommendation, personalization, matching, ranking.
4. **Data modality(ies).** User/item/event tables, metadata, embeddings.
5. **Component pipeline.** Log impressions/actions → train user/item towers → ANN index → retrieve top-K → rank/filter/diversify → A/B and monitor.
6. **Canonical algorithms and model families per stage.** Two-tower retrieval scales large catalogs; GBT/DNN/LambdaMART rankers improve final ordering; YouTube popularized candidate-generation plus ranking ([YouTube recommender](https://research.google.com/pubs/archive/45530.pdf); [TensorFlow Recommenders](https://www.tensorflow.org/recommenders/examples/basic_retrieval); [LightGBM ranker](https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMRanker.html)).
7. **Feature engineering practices.** User history, item metadata embeddings, context, cross features, popularity/freshness, diversity constraints.
8. **Correctness pitfalls and safeguards.** Exposure bias, negative-sampling mismatch, train/serve skew, stale ANN index; log impressions and refresh indexes.
9. **Evaluation methodology.** Recall@K for retrieval, NDCG/MAP for ranking, online CTR/conversion, diversity/guardrails.
10. **Explainability methods.** Reason labels, similar-items, feature importance, funnel metrics.
11. **Data requirements.** Impression/interaction logs, catalog metadata, online traffic.
12. **Compute profile.** GPU for neural training; ANN index for inference.
13. **Maturity and adoption.** Mainstream at digital platforms.
14. **Reusable components.** Shares embeddings M25, rankers M23, bandits M35.
15. **Representative use cases.** Product/content/job matching feeds.
16. **Production failure modes.** Filter bubbles, stale embeddings, exploration starvation; monitor diversity/freshness.
17. **Tooling landscape.** TFRS, PyTorch, RecBole, FAISS, Milvus, LightGBM.
18. **Key references.** [YouTube recommender](https://research.google.com/pubs/archive/45530.pdf); [TensorFlow Recommenders](https://www.tensorflow.org/recommenders/examples/basic_retrieval).

### M22. Sequence-aware recommendation

1. **Name + aliases.** Sequence-aware recommendation; Sequential/session recommenders; SASRec.
2. **One-sentence definition.** Model ordered user behavior so recommendations reflect recent context.
3. **Problem class(es).** Recommendation, next-best-action.
4. **Data modality(ies).** Event sequences, sessions, clickstreams.
5. **Component pipeline.** Sessionize → build sequences/targets → train RNN/Transformer/Markov/SASRec → retrieve/rank → temporal evaluation → real-time session serving.
6. **Canonical algorithms and model families per stage.** SASRec uses self-attention; Markov/GRU baselines help short sessions; two-tower stacks help long-term profiles ([SASRec](https://arxiv.org/abs/1808.09781)).
7. **Feature engineering practices.** Position/order encodings, item embeddings, dwell time, recency windows, repeat flags.
8. **Correctness pitfalls and safeguards.** Temporal leakage, sessionization errors, target leakage from future clicks, exposure bias.
9. **Evaluation methodology.** Next-item Recall@K/NDCG@K, time splits, online session conversion.
10. **Explainability methods.** Recent-behavior rationale, attention summaries, next-action explanations.
11. **Data requirements.** Ordered histories; sparse users need fallback.
12. **Compute profile.** GPU training; low-latency session-state serving.
13. **Maturity and adoption.** Mainstream in media/e-commerce, emerging in B2B journeys.
14. **Reusable components.** Shares sequence features with M07/M35/M45.
15. **Representative use cases.** Next product/article/action/cart.
16. **Production failure modes.** Stale session state, trend shifts, fatigue; monitor session KPIs.
17. **Tooling landscape.** RecBole, TFRS, PyTorch, Transformers4Rec.
18. **Key references.** [SASRec](https://arxiv.org/abs/1808.09781); [YouTube recommender](https://research.google.com/pubs/archive/45530.pdf).

## H. Learning-to-rank

### M23. Learning-to-rank

1. **Name + aliases.** Learning-to-rank; LTR; LambdaMART; pairwise/listwise ranking.
2. **One-sentence definition.** Train models to order items for a query/user/context using ranking losses.
3. **Problem class(es).** Ranking, search relevance, prioritization.
4. **Data modality(ies).** Query-item features, embeddings, interaction logs.
5. **Component pipeline.** Collect groups/impressions/relevance → engineer features → train ranker → evaluate top-K → interleaving/A-B → monitor.
6. **Canonical algorithms and model families per stage.** LambdaMART is canonical GBT LTR; LightGBM/XGBoost rankers implement ranking objectives; neural rankers suit semantic text ([LambdaRank/LambdaMART](http://www.cs.toronto.edu/~mvolkovs/www2011_lambdarank.pdf); [LightGBM ranker](https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMRanker.html)).
7. **Feature engineering practices.** Query-item cross features, BM25/embedding scores, leakage-safe CTR, freshness/popularity.
8. **Correctness pitfalls and safeguards.** Position/click bias, post-click leakage, query-group leakage; use debiasing and group/time splits.
9. **Evaluation methodology.** NDCG@K, MAP, MRR, Recall@K, interleaving, online guardrails.
10. **Explainability methods.** Per-query diagnostics, feature importance, counterfactual top results.
11. **Data requirements.** Grouped relevance/click labels; explicit judgments improve quality.
12. **Compute profile.** CPU for GBT; GPU for neural rerankers; latency-sensitive.
13. **Maturity and adoption.** Mainstream in search/recsys.
14. **Reusable components.** Shares features M01, recsys M21, retrieval M25.
15. **Representative use cases.** Search, product sort, lead/candidate ranking.
16. **Production failure modes.** Position-bias loops, spam, stale popularity; monitor relevance/guardrails.
17. **Tooling landscape.** LightGBM, XGBoost, Elasticsearch LTR, RankLib.
18. **Key references.** [LambdaRank/LambdaMART](http://www.cs.toronto.edu/~mvolkovs/www2011_lambdarank.pdf); [LightGBM ranker](https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMRanker.html).

## I. Text/language classic NLP

### M24. Classic supervised NLP classification, NER, and topic modeling

1. **Name + aliases.** Classic supervised NLP classification, NER, and topic modeling; Text classification; NER; sequence labeling; LDA.
2. **One-sentence definition.** Represent text and train classifiers/taggers/topic models for structured text outputs.
3. **Problem class(es).** Classification, extraction, routing, topic modeling.
4. **Data modality(ies).** Text, tickets, emails, chats, reviews.
5. **Component pipeline.** Label/collect text → clean/tokenize → represent → train classifier/tagger/topic model → evaluate by label/entity → deploy/monitor.
6. **Canonical algorithms and model families per stage.** TF-IDF+linear is strong baseline; BERT-style transformers dominate many supervised tasks; spaCy provides production NER; LDA is classic topic model ([BERT](https://arxiv.org/abs/1810.04805); [spaCy NER](https://spacy.io/api/entityrecognizer); [LDA](https://jmlr.csail.mit.edu/papers/v3/blei03a.html)).
7. **Feature engineering practices.** N-grams, TF-IDF, dictionaries, embeddings, gazetteers, topic proportions.
8. **Correctness pitfalls and safeguards.** Template leakage, duplicates, annotation drift, PII leakage, domain shift; dedupe by thread/time/source.
9. **Evaluation methodology.** Accuracy/F1/AUROC, macro F1, entity precision/recall/F1, adjudicated samples.
10. **Explainability methods.** Confusion matrices, token highlights, exemplar errors, topic words.
11. **Data requirements.** Labeled examples per class/entity; weak/active learning can reduce cost.
12. **Compute profile.** CPU for classical, GPU for transformers.
13. **Maturity and adoption.** Mainstream production-safe.
14. **Reusable components.** Shares embeddings M19/M25 and labels M43.
15. **Representative use cases.** Ticket routing, sentiment, compliance, NER.
16. **Production failure modes.** Vocabulary drift, annotation changes, PII; monitor audits and class mix.
17. **Tooling landscape.** scikit-learn, spaCy, Hugging Face, NLTK, BERTopic.
18. **Key references.** [BERT](https://arxiv.org/abs/1810.04805); [spaCy NER](https://spacy.io/api/entityrecognizer); [LDA](https://jmlr.csail.mit.edu/papers/v3/blei03a.html); [BERTopic](https://bertopic.readthedocs.io/).

## I. LLM-era text

### M25. Embedding retrieval and semantic search

1. **Name + aliases.** Embedding retrieval and semantic search; Vector search; dense retrieval; ANN.
2. **One-sentence definition.** Retrieve nearest-neighbor items in vector space for semantic matching.
3. **Problem class(es).** Search, matching, dedupe, recommendation retrieval.
4. **Data modality(ies).** Text, code, products, images, multimodal embeddings.
5. **Component pipeline.** Chunk/normalize corpus → embed → ANN index → embed query → retrieve/rerank/filter permissions → evaluate relevance → monitor freshness.
6. **Canonical algorithms and model families per stage.** FAISS supports efficient similarity search; BM25 is lexical baseline; hybrid dense+lexical and cross-encoder reranking improve precision ([Faiss](https://faiss.ai/index.html); [BERT](https://arxiv.org/abs/1810.04805)).
7. **Feature engineering practices.** Chunking, overlap, metadata filters, embedding normalization, hybrid scores, reranking.
8. **Correctness pitfalls and safeguards.** Stale indexes, permission leakage, duplicate chunks, embedding drift; audit ACLs and retrieval sets.
9. **Evaluation methodology.** Recall@K, precision@K, MRR/NDCG, relevance judgments, latency.
10. **Explainability methods.** Evidence snippets, similarity/reranker scores, coverage reports.
11. **Data requirements.** Indexed corpus plus relevance judgments for tuning.
12. **Compute profile.** GPU for corpus embedding; ANN CPU/GPU; storage grows with corpus.
13. **Maturity and adoption.** Mainstream with LLM/RAG adoption.
14. **Reusable components.** Shares with M19/M21/M26/M30.
15. **Representative use cases.** Enterprise search, FAQ, candidate matching, semantic dedupe.
16. **Production failure modes.** Index staleness, ACL bugs, low exact-ID recall; monitor audits.
17. **Tooling landscape.** FAISS, Milvus, Pinecone, Weaviate, pgvector, Elasticsearch.
18. **Key references.** [Faiss](https://faiss.ai/index.html); [BERT](https://arxiv.org/abs/1810.04805).

### M26. Retrieval-augmented generation

1. **Name + aliases.** Retrieval-augmented generation; RAG; grounded generation; knowledge QA.
2. **One-sentence definition.** Retrieve enterprise context and pass it to an LLM to generate grounded answers.
3. **Problem class(es).** Generation, QA, summarization, extraction.
4. **Data modality(ies).** Text, documents, code, structured snippets.
5. **Component pipeline.** Ingest/chunk/embed → retrieve/rerank → prompt with context/permissions → generate/cite → verify/evaluate → monitor.
6. **Canonical algorithms and model families per stage.** RAG combines retrieval with generation; use when knowledge changes, citations matter, or permissions matter; fine-tuning is runner-up for stable behavior ([RAG](https://dblp.org/rec/conf/nips/LewisPPPKGKLYR020); [Faiss](https://faiss.ai/index.html); [OpenAI prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering)).
7. **Feature engineering practices.** Chunk hierarchy, metadata filters, query rewriting, reranking, citations, abstention.
8. **Correctness pitfalls and safeguards.** Hallucination, poor retrieval recall, context injection, permission leakage, stale docs, citation mismatch.
9. **Evaluation methodology.** Retrieval recall, faithfulness/groundedness, citation accuracy, task success, red-team tests.
10. **Explainability methods.** Cited answers, source passages, retrieval traces, confidence/abstention.
11. **Data requirements.** Curated corpus, permissions, freshness, eval question set.
12. **Compute profile.** Embedding/indexing plus generation cost; caching helps.
13. **Maturity and adoption.** Mainstream, production-safe only with retrieval/eval/ACL discipline.
14. **Reusable components.** Shares retrieval M25, prompts M27, agents M38.
15. **Representative use cases.** Knowledge assistants, support copilots, policy QA.
16. **Production failure modes.** Corpus drift, prompt injection, hallucinations; monitor regression suites.
17. **Tooling landscape.** LangChain, LlamaIndex, Haystack, FAISS, Ragas, TruLens.
18. **Key references.** [RAG](https://dblp.org/rec/conf/nips/LewisPPPKGKLYR020); [Faiss](https://faiss.ai/index.html); [OpenAI prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering).

### M27. Prompt-based classification and extraction

1. **Name + aliases.** Prompt-based classification and extraction; Zero/few-shot LLM extraction; structured outputs.
2. **One-sentence definition.** Use an LLM with instructions/examples to classify, extract, transform, or summarize without task-specific training.
3. **Problem class(es).** Classification, extraction, summarization, routing.
4. **Data modality(ies).** Text, docs, transcripts, multimodal inputs.
5. **Component pipeline.** Define schema/rubric → prompt/examples → run model → validate JSON/schema → audit sample → compare baseline → deploy with guardrails.
6. **Canonical algorithms and model families per stage.** Prompt-only suits low-volume/changing schemas; fine-tune or classic NLP suits high-volume stable tasks ([OpenAI prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering); [BERT](https://arxiv.org/abs/1810.04805)).
7. **Feature engineering practices.** Few-shot examples, schemas, retrieval context, validation regex/JSON, rubrics.
8. **Correctness pitfalls and safeguards.** Prompt drift, nondeterminism, schema violations, PII leakage, injection, uncalibrated confidence.
9. **Evaluation methodology.** Field F1/exact match, JSON validity, audit agreement, latency/cost, regression tests.
10. **Explainability methods.** Structured output, highlights, audit samples, error categories.
11. **Data requirements.** Dozens of labeled audit cases to start; gold set for production.
12. **Compute profile.** No training cost; inference can be high.
13. **Maturity and adoption.** Mainstream internal automation.
14. **Reusable components.** Shares M26/M28/M29/M38/M43.
15. **Representative use cases.** Email triage, invoice fields, compliance classification.
16. **Production failure modes.** Model changes, schema breaks; monitor validation failures/audits.
17. **Tooling landscape.** OpenAI/Anthropic APIs, Instructor, Guardrails, Pydantic, LangChain.
18. **Key references.** [OpenAI prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering); [BERT](https://arxiv.org/abs/1810.04805).

### M28. Supervised fine-tuning, PEFT, and distillation

1. **Name + aliases.** Supervised fine-tuning, PEFT, and distillation; SFT; LoRA; PEFT; instruction tuning.
2. **One-sentence definition.** Adapt a foundation model to task/domain/style or smaller deployment using examples or teacher outputs.
3. **Problem class(es).** Classification, extraction, generation, ranking.
4. **Data modality(ies).** Text, code, documents, conversations.
5. **Component pipeline.** Collect instruction data → split/eval → choose LoRA/PEFT/full/distill → train → safety/task eval → deploy/monitor.
6. **Canonical algorithms and model families per stage.** LoRA trains low-rank adapters; PEFT implements adapter approaches; distillation trains smaller students; full fine-tuning is for strong control needs ([LoRA](https://arxiv.org/abs/2106.09685); [PEFT](https://huggingface.co/docs/peft/en/index); [DistilBERT](https://arxiv.org/abs/1910.01108)).
7. **Feature engineering practices.** Instruction templates, teacher labels, preference pairs, negatives, eval prompts.
8. **Correctness pitfalls and safeguards.** Eval leakage, memorization, catastrophic forgetting, safety regressions, overfit style.
9. **Evaluation methodology.** Held-out task metrics, human preference, safety red teams, regression vs prompt/RAG.
10. **Explainability methods.** Model card, eval dashboard, failure exemplars, ablations.
11. **Data requirements.** High-quality task examples; PEFT reduces trainable parameters but not data-quality needs.
12. **Compute profile.** GPU training; inference cost depends on base/adapters/quantization.
13. **Maturity and adoption.** Mainstream for specialized LLM products.
14. **Reusable components.** Shares selection M46, RAG M26, RLHF M37.
15. **Representative use cases.** Domain extraction, support tone, code assistants.
16. **Production failure modes.** Eval overfit, base upgrade drift; monitor regression suites.
17. **Tooling landscape.** Transformers, PEFT, TRL, Axolotl, vLLM, MLflow.
18. **Key references.** [LoRA](https://arxiv.org/abs/2106.09685); [PEFT](https://huggingface.co/docs/peft/en/index); [DistilBERT](https://arxiv.org/abs/1910.01108).

## J. Document intelligence

### M29. Document AI with OCR, layout, and table extraction

1. **Name + aliases.** Document AI with OCR, layout, and table extraction; IDP; OCR plus layout-aware extraction.
2. **One-sentence definition.** Convert scanned/digital documents into structured fields using OCR, layout, table extraction, classification, and review.
3. **Problem class(es).** Extraction, classification, matching.
4. **Data modality(ies).** Scanned docs, PDFs, forms, invoices, contracts, tables.
5. **Component pipeline.** Ingest → OCR/native parse → layout/table detection → classify type → extract fields → rule/human validation → export → monitor.
6. **Canonical algorithms and model families per stage.** Tesseract is classic OCR, LayoutLM models text+layout, Donut is OCR-free document understanding, Camelot extracts PDF tables ([Tesseract](https://tesseract-ocr.github.io/); [LayoutLM](https://arxiv.org/abs/1912.13318); [Donut](https://arxiv.org/abs/2111.15664); [Camelot](https://camelot-py.readthedocs.io/)).
7. **Feature engineering practices.** Page coordinates, reading order, table cells, key-values, regex/dictionaries, confidence.
8. **Correctness pitfalls and safeguards.** OCR errors, layout drift, template overfit, table merges, duplicate pages, review bias.
9. **Evaluation methodology.** Field precision/recall/F1, document accuracy, table cell accuracy, WER/CER, straight-through rate.
10. **Explainability methods.** Page overlays, highlighted fields, confidence, exception queues.
11. **Data requirements.** Representative docs and labeled fields/templates.
12. **Compute profile.** OCR/layout may need GPU; review queues dominate ops.
13. **Maturity and adoption.** Mainstream in operations; LLM extraction emerging.
14. **Reusable components.** Shares OCR/extraction M27, ER M30, RAG ingestion M26.
15. **Representative use cases.** Invoices, claims, KYC, contracts, shipping docs.
16. **Production failure modes.** Template/vendor changes and scan quality; monitor field accuracy/exceptions.
17. **Tooling landscape.** Tesseract, LayoutLM/Donut, cloud Document AI, Camelot, pdfplumber.
18. **Key references.** [Tesseract](https://tesseract-ocr.github.io/); [LayoutLM](https://arxiv.org/abs/1912.13318); [Donut](https://arxiv.org/abs/2111.15664); [Camelot](https://camelot-py.readthedocs.io/).

## K. Entity resolution

### M30. Entity resolution and record linkage

1. **Name + aliases.** Entity resolution and record linkage; Deduplication; identity resolution; fuzzy matching.
2. **One-sentence definition.** Identify records that refer to the same real-world entity across noisy systems.
3. **Problem class(es).** Matching/deduplication, data integration.
4. **Data modality(ies).** Tabular records, names/addresses, identifiers, text.
5. **Component pipeline.** Standardize fields → block candidate pairs → compute similarities → score/link → cluster → human-review uncertain pairs → persist golden IDs.
6. **Canonical algorithms and model families per stage.** Fellegi-Sunter is classical probabilistic linkage; supervised pair classifiers add string/embedding features; Splink/recordlinkage implement scalable workflows ([Fellegi-Sunter](https://www.cs.cornell.edu/~shmat/courses/cs6434/fellegi-sunter.pdf); [Splink](https://github.com/moj-analytical-services/splink); [recordlinkage](https://recordlinkage.readthedocs.io/en/latest/guides/data_deduplication.html)).
7. **Feature engineering practices.** Phonetic keys, edit/Jaro-Winkler, address normalization, embeddings, blocking keys.
8. **Correctness pitfalls and safeguards.** Blocking false negatives, false merges, transitive errors, label leakage from IDs, privacy risks.
9. **Evaluation methodology.** Pair precision/recall/F1, cluster metrics, review yield, false-merge/split cost.
10. **Explainability methods.** Match explanations, compared fields, confidence bands, cluster audit.
11. **Data requirements.** Overlapping identifiers or labeled pairs; scalable blocking.
12. **Compute profile.** Pair generation bottleneck; often Spark/SQL distributed.
13. **Maturity and adoption.** Mainstream and foundational.
14. **Reusable components.** Shared with M01/M17/M31/M29/M45.
15. **Representative use cases.** Customer 360, patient matching, supplier dedupe, fraud graphs.
16. **Production failure modes.** False merges/splits and identity drift; monitor clerical samples.
17. **Tooling landscape.** Splink, Dedupe, recordlinkage, Spark, SQL.
18. **Key references.** [Fellegi-Sunter](https://www.cs.cornell.edu/~shmat/courses/cs6434/fellegi-sunter.pdf); [Splink](https://github.com/moj-analytical-services/splink); [recordlinkage](https://recordlinkage.readthedocs.io/en/latest/guides/data_deduplication.html).

## K. Graph ML

### M31. Graph machine learning

1. **Name + aliases.** Graph machine learning; Node/edge classification; link prediction; GNN.
2. **One-sentence definition.** Use graph structure and node/edge attributes for node, edge, link, or graph predictions.
3. **Problem class(es).** Node/edge classification, link prediction, anomaly, recommendation.
4. **Data modality(ies).** Graphs/networks, knowledge graphs, transaction graphs.
5. **Component pipeline.** Construct graph → resolve entities → time-safe edges → graph features/GNN → negative sampling → temporal validation → embeddings/scores → monitor.
6. **Canonical algorithms and model families per stage.** GraphSAGE for inductive aggregation, GAT for attention over neighbors, centrality/community features as baselines, PyG/DGL for tooling ([GraphSAGE](https://arxiv.org/abs/1706.02216); [GAT](https://arxiv.org/abs/1710.10903); [PyG](https://pytorch-geometric.readthedocs.io/); [DGL](https://www.dgl.ai/dgl_docs/)).
7. **Feature engineering practices.** Degree/PageRank, components, communities, metapaths, embeddings, neighbor label rates without future leakage.
8. **Correctness pitfalls and safeguards.** Future-edge leakage, negative-sampling bias, bad ER, homophily failure, graph feedback.
9. **Evaluation methodology.** Temporal link splits, ROC/PR-AUC, Hits@K/MRR, ablations vs graph features.
10. **Explainability methods.** Subgraph explanations, influential neighbors, paths, embedding reports.
11. **Data requirements.** Reliable nodes/edges/timestamps; labels or proxy tasks.
12. **Compute profile.** Distributed graph prep; GPU/memory-sensitive GNNs.
13. **Maturity and adoption.** Emerging-to-mainstream in fraud/recsys/KG.
14. **Reusable components.** Shares ER M30, fraud M17, recsys M20/M21.
15. **Representative use cases.** Fraud rings, supplier risk, KG completion.
16. **Production failure modes.** Graph drift, stale embeddings, adversarial edges; monitor graph stats.
17. **Tooling landscape.** PyG, DGL, NetworkX, Neo4j GDS, GraphFrames.
18. **Key references.** [GraphSAGE](https://arxiv.org/abs/1706.02216); [GAT](https://arxiv.org/abs/1710.10903); [PyG](https://pytorch-geometric.readthedocs.io/); [DGL](https://www.dgl.ai/dgl_docs/).

## L. Computer vision

### M32. Image classification, detection, and segmentation

1. **Name + aliases.** Image classification, detection, and segmentation; CNN/ViT; object detection; semantic/instance segmentation.
2. **One-sentence definition.** Train visual models to classify images, localize objects, or segment pixels/instances.
3. **Problem class(es).** Classification, detection, segmentation.
4. **Data modality(ies).** Images, video frames, multimodal metadata.
5. **Component pipeline.** Collect/label → split by entity/site/time → augment → train → validate by slice → threshold/calibrate → deploy → monitor.
6. **Canonical algorithms and model families per stage.** ResNet is canonical CNN backbone, YOLO is real-time detector, Mask R-CNN is canonical instance segmentation, Detectron2 is production-quality toolkit ([ResNet](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf); [YOLO](https://arxiv.org/abs/1506.02640); [Mask R-CNN](https://arxiv.org/abs/1703.06870); [Detectron2](https://detectron2.readthedocs.io/)).
7. **Feature engineering practices.** Normalization, crops/tiles, augmentation, boxes/masks, hard negatives, metadata.
8. **Correctness pitfalls and safeguards.** Near-duplicate leakage, site/camera leakage, annotation drift, class imbalance, shortcut learning.
9. **Evaluation methodology.** Accuracy/F1/AUROC, mAP/IoU, calibration, per-site latency.
10. **Explainability methods.** CAM/saliency, boxes/masks, failure exemplars, slice dashboards.
11. **Data requirements.** Labeled images; transfer learning reduces volume.
12. **Compute profile.** GPU training/inference; edge may need quantization.
13. **Maturity and adoption.** Mainstream visual enterprise method.
14. **Reusable components.** Shares active learning M43, anomaly M33, monitoring M45.
15. **Representative use cases.** Inspection, safety, counting, medical support.
16. **Production failure modes.** Lighting/camera drift, rare misses; monitor input quality/slices.
17. **Tooling landscape.** PyTorch, Detectron2, MMDetection, YOLO, OpenCV.
18. **Key references.** [ResNet](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf); [YOLO](https://arxiv.org/abs/1506.02640); [Mask R-CNN](https://arxiv.org/abs/1703.06870); [Detectron2](https://detectron2.readthedocs.io/).

### M33. Industrial visual inspection

1. **Name + aliases.** Industrial visual inspection; Defect detection; visual anomaly detection.
2. **One-sentence definition.** Detect visual defects using supervised detectors or anomaly models trained on normal examples.
3. **Problem class(es).** Anomaly, classification, segmentation.
4. **Data modality(ies).** Production-line images/video.
5. **Component pipeline.** Controlled imaging → align/crop → label normal/defects → train supervised or anomaly model → threshold → integrate with line → audit.
6. **Canonical algorithms and model families per stage.** Supervised detectors work with defect labels; reconstruction/embedding anomaly works for rare defects; MVTec AD is a standard benchmark ([MVTec AD](https://www.mvtec.com/research-teaching/datasets/mvtec-ad)).
7. **Feature engineering practices.** Registration, part masks, texture patches, lighting normalization, synthetic defects, residuals.
8. **Correctness pitfalls and safeguards.** Adjacent-frame leakage, lighting changes, rare-defect undercoverage, false-reject costs.
9. **Evaluation methodology.** Defect recall/escape rate, false reject, pixel IoU, throughput, cost-weighted threshold.
10. **Explainability methods.** Heatmaps, masks, exemplar defects, shift/camera dashboards.
11. **Data requirements.** Controlled imaging and representative normal variation; defect labels if supervised.
12. **Compute profile.** GPU training; edge inference latency constraints.
13. **Maturity and adoption.** Mainstream in manufacturing but site-specific.
14. **Reusable components.** Shares CV M32 and anomaly M15.
15. **Representative use cases.** Manufacturing defects, packaging, corrosion.
16. **Production failure modes.** Product/lighting changes and unseen defects; monitor escapes/rejects.
17. **Tooling landscape.** OpenCV, anomalib, PyTorch, Detectron2.
18. **Key references.** [MVTec AD](https://www.mvtec.com/research-teaching/datasets/mvtec-ad); [ResNet](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf); [Mask R-CNN](https://arxiv.org/abs/1703.06870).

## M. Speech & audio

### M34. ASR-based speech analytics

1. **Name + aliases.** ASR-based speech analytics; Speech-to-text analytics; call-center transcription.
2. **One-sentence definition.** Transcribe speech and apply NLP/LLMs to transcripts for analytics or automation.
3. **Problem class(es).** Extraction, classification, summarization, compliance.
4. **Data modality(ies).** Audio, speech, transcripts, call metadata.
5. **Component pipeline.** Ingest audio → ASR/diarization → normalize transcript → NLP/LLM extraction/summarization → QA → CRM/BI export → monitor.
6. **Canonical algorithms and model families per stage.** Whisper uses large-scale weak supervision, wav2vec 2.0 uses self-supervised speech representations, Kaldi is classic ASR toolkit ([Whisper](https://cdn.openai.com/papers/whisper.pdf); [wav2vec 2.0](https://arxiv.org/abs/2006.11477); [Kaldi](https://www.danielpovey.com/files/2011_asru_kaldi.pdf)).
7. **Feature engineering practices.** Speaker turns, timestamps, silence/overlap, transcript embeddings, domain vocabulary.
8. **Correctness pitfalls and safeguards.** Accent/noise/channel WER variation, error propagation, PII/consent risks; sample human audits.
9. **Evaluation methodology.** WER/CER, diarization error, downstream F1, summary QA, latency.
10. **Explainability methods.** Timestamped transcripts, highlighted entities/topics, confidence.
11. **Data requirements.** Audio rights/consent, representative acoustic data, transcript/downstream labels.
12. **Compute profile.** GPU useful for ASR; streaming needs latency optimization.
13. **Maturity and adoption.** Mainstream in call centers.
14. **Reusable components.** Shares NLP M24-M28 and monitoring M45.
15. **Representative use cases.** QA, sales coaching, compliance, meeting summaries.
16. **Production failure modes.** Acoustic drift, privacy breaches, hallucinated summaries; monitor WER audits.
17. **Tooling landscape.** Whisper, Kaldi, HF wav2vec, pyannote, cloud speech APIs.
18. **Key references.** [Whisper](https://cdn.openai.com/papers/whisper.pdf); [wav2vec 2.0](https://arxiv.org/abs/2006.11477); [Kaldi](https://www.danielpovey.com/files/2011_asru_kaldi.pdf).

## N. RL & sequential decisioning

### M35. Contextual bandits and online policy learning

1. **Name + aliases.** Contextual bandits and online policy learning; Multi-armed/contextual bandits; exploration-exploitation.
2. **One-sentence definition.** Choose actions sequentially while balancing reward exploitation and exploration.
3. **Problem class(es).** Sequential decisioning, personalization, experimentation.
4. **Data modality(ies).** Event streams, contexts, actions, rewards, propensities.
5. **Component pipeline.** Log context/action/reward/propensity → train/update policy → constrained exploration → OPE → online rollout → monitor.
6. **Canonical algorithms and model families per stage.** Epsilon-greedy/UCB/Thompson for simple bandits; contextual bandits use features; Vowpal Wabbit provides practical tooling; OPE estimates policy value from logged propensities ([Vowpal Wabbit contextual bandits](https://vowpalwabbit.org/docs/vowpal_wabbit/python/latest/examples/contextual_bandit.html); [off-policy evaluation](https://proceedings.mlr.press/v70/wang17a.html)).
7. **Feature engineering practices.** Context features, action embeddings, reward windows, propensities, exploration buckets.
8. **Correctness pitfalls and safeguards.** Missing propensities, unsafe exploration, delayed rewards, non-stationarity, feedback loops.
9. **Evaluation methodology.** Online reward/regret, IPS/SNIPS/doubly robust OPE, randomized holdouts, guardrails.
10. **Explainability methods.** Policy dashboards, action distribution, value CIs, exploration reports.
11. **Data requirements.** Logged actions/rewards/propensities and safe exploration budget.
12. **Compute profile.** Low/moderate CPU; serving must be low latency.
13. **Maturity and adoption.** Mainstream in ads/recs, emerging in conservative enterprises.
14. **Reusable components.** Shares experimentation M12, uplift M14, recsys M21.
15. **Representative use cases.** Offer selection, ads, next-best-action.
16. **Production failure modes.** Reward hacking and policy collapse; monitor guardrails and randomization.
17. **Tooling landscape.** Vowpal Wabbit, MABWiser, Ray RLlib, OBP.
18. **Key references.** [Vowpal Wabbit contextual bandits](https://vowpalwabbit.org/docs/vowpal_wabbit/python/latest/examples/contextual_bandit.html); [off-policy evaluation](https://proceedings.mlr.press/v70/wang17a.html).

### M36. Offline reinforcement learning

1. **Name + aliases.** Offline reinforcement learning; Batch RL; conservative offline RL.
2. **One-sentence definition.** Learn long-horizon policies from logged trajectories without online exploration during training.
3. **Problem class(es).** Sequential decisioning, policy learning.
4. **Data modality(ies).** Trajectories, states, actions, rewards.
5. **Component pipeline.** Define MDP → clean trajectories → estimate behavior support → train conservative offline RL → OPE/simulation → gated rollout.
6. **Canonical algorithms and model families per stage.** Offline RL must address distribution shift between learned and behavior policies; conservative methods are designed for fixed logged data ([offline RL](https://arxiv.org/abs/2005.01643)).
7. **Feature engineering practices.** State histories, lagged actions, rewards, terminal flags, behavior propensities.
8. **Correctness pitfalls and safeguards.** Extrapolation outside support, reward misspecification, confounding, simulator mismatch, unsafe rollout.
9. **Evaluation methodology.** OPE, fitted Q evaluation, simulator validation, support diagnostics, staged tests.
10. **Explainability methods.** Policy value, action-support reports, counterfactual trajectories.
11. **Data requirements.** Rich trajectories with rewards and action coverage.
12. **Compute profile.** GPU often; simulation/evaluation can dominate.
13. **Maturity and adoption.** Emerging/high-risk outside narrow well-instrumented settings.
14. **Reusable components.** Shares OPE M35 and optimization M39/M40.
15. **Representative use cases.** Inventory, bidding, operations control.
16. **Production failure modes.** Model-error exploitation and distribution shift; canary with guardrails.
17. **Tooling landscape.** Ray RLlib, d3rlpy, Acme, simulators.
18. **Key references.** [offline RL](https://arxiv.org/abs/2005.01643); [off-policy evaluation](https://proceedings.mlr.press/v70/wang17a.html).

### M37. Reward modeling and RLHF/RLAIF post-training

1. **Name + aliases.** Reward modeling and RLHF/RLAIF post-training; RLHF; preference optimization; reward models.
2. **One-sentence definition.** Adapt generative models using preference data, reward models, and policy/preference optimization.
3. **Problem class(es).** Generation, alignment, ranking.
4. **Data modality(ies).** Text, conversations, code, multimodal outputs.
5. **Component pipeline.** Collect demos/preferences → SFT → train reward/preference model → optimize policy/DPO-like objective → human/safety eval → monitor.
6. **Canonical algorithms and model families per stage.** InstructGPT is the canonical RLHF reference; reward modeling and policy optimization are core, with direct preference methods as alternatives ([InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)).
7. **Feature engineering practices.** Preference pairs, rubrics, safety labels, synthetic critiques.
8. **Correctness pitfalls and safeguards.** Reward hacking, annotator bias, overfitting preferences, safety regressions.
9. **Evaluation methodology.** Preference win rate, task success, safety red-teams, reward calibration, regression tests.
10. **Explainability methods.** Preference dashboards, model card, safety report, failure exemplars.
11. **Data requirements.** High-quality preference data and clear rubric.
12. **Compute profile.** Accelerator-heavy training; final inference depends on model.
13. **Maturity and adoption.** Mainstream for model labs; enterprise-specific use emerging.
14. **Reusable components.** Shares fine-tuning M28 and labels M43.
15. **Representative use cases.** Assistant tone/safety, code assistant preferences.
16. **Production failure modes.** Behavior drift, unsafe outputs; monitor red teams/user feedback.
17. **Tooling landscape.** Hugging Face TRL, preference-eval platforms.
18. **Key references.** [InstructGPT/RLHF](https://arxiv.org/abs/2203.02155).

## O. Agentic / LLM-agent methodologies

### M38. Tool-calling and multi-step LLM agents

1. **Name + aliases.** Tool-calling and multi-step LLM agents; ReAct agents; function calling; workflow agents.
2. **One-sentence definition.** Use an LLM to plan, call tools/APIs, observe results, and iterate under guardrails.
3. **Problem class(es).** Generation, automation, decision support, extraction.
4. **Data modality(ies).** Text plus enterprise tools, APIs, databases, documents.
5. **Component pipeline.** Define tools/schemas/permissions → planner/executor prompt/graph → retrieve context → tool calls → validate observations → approval gates → eval/monitor traces.
6. **Canonical algorithms and model families per stage.** ReAct interleaves reasoning and acting, Toolformer studies learned tool use, AgentBench evaluates LLM agents; production systems constrain tools and approvals ([ReAct](https://arxiv.org/abs/2210.03629); [Toolformer](https://arxiv.org/abs/2302.04761); [AgentBench](https://arxiv.org/abs/2308.03688)).
7. **Feature engineering practices.** Tool schemas, memory/state, task decomposition, retrieval context, policy constraints, exemplars.
8. **Correctness pitfalls and safeguards.** Prompt injection, tool misuse, loops, permission escalation, partial completion, cost runaway.
9. **Evaluation methodology.** Task success, tool precision/recall, groundedness, cost/latency, safety violations, trace review.
10. **Explainability methods.** Execution trace, action log, cited evidence, approval prompts.
11. **Data requirements.** Well-described tools, permissions, benchmarks, observability.
12. **Compute profile.** Multiple model/tool calls; cost and latency can be high.
13. **Maturity and adoption.** Emerging-to-mainstream for internal copilots; risky for autonomous irreversible actions.
14. **Reusable components.** Shares RAG M26, prompts M27, eval M46.
15. **Representative use cases.** IT copilots, CRM updates, analytics agents.
16. **Production failure modes.** Prompt injection, stale credentials, silent failures; monitor traces/approvals.
17. **Tooling landscape.** LangChain, LlamaIndex, Semantic Kernel, AutoGen, LangGraph.
18. **Key references.** [ReAct](https://arxiv.org/abs/2210.03629); [Toolformer](https://arxiv.org/abs/2302.04761); [AgentBench](https://arxiv.org/abs/2308.03688).

## P. Optimization & OR

### M39. Mathematical optimization and OR pipelines

1. **Name + aliases.** Mathematical optimization and OR pipelines; MIP; CP-SAT; LP/IP; scheduling/routing.
2. **One-sentence definition.** Formulate decisions as constrained optimization and solve for best feasible plans.
3. **Problem class(es).** Optimization, scheduling, routing, allocation.
4. **Data modality(ies).** Operational tabular data, networks, geospatial, forecasts.
5. **Component pipeline.** Define variables/objective/constraints → ingest data → solve MIP/CP/heuristic → scenario/sensitivity → publish plan → monitor execution.
6. **Canonical algorithms and model families per stage.** OR-Tools supports routing/scheduling/CP-SAT, Pyomo is a modeling language, Gurobi is a commercial optimizer; heuristics handle huge problems ([OR-Tools](https://developers.google.com/optimization); [Pyomo](https://pyomo.readthedocs.io/); [Gurobi](https://docs.gurobi.com/)).
7. **Feature engineering practices.** Decision variables, constraints, distance/cost matrices, capacities, forecasts, scenarios.
8. **Correctness pitfalls and safeguards.** Wrong objective, missing constraints, infeasible data, stale forecasts, unit mismatch.
9. **Evaluation methodology.** Optimality gap, feasibility, runtime, sensitivity, realized KPI uplift.
10. **Explainability methods.** Plan tables, shadow prices/sensitivities, infeasibility diagnoses.
11. **Data requirements.** Accurate constraints/data; labels not required.
12. **Compute profile.** CPU-heavy for large MIPs; specialized solvers.
13. **Maturity and adoption.** Mainstream and production-safe when formulation stable.
14. **Reusable components.** Shares forecasts M05-M10 and hybrids M40.
15. **Representative use cases.** Routing, scheduling, workforce, inventory.
16. **Production failure modes.** Solver timeouts, plan noncompliance; monitor feasibility and realized KPIs.
17. **Tooling landscape.** OR-Tools, Pyomo, PuLP, Gurobi, CPLEX, SCIP.
18. **Key references.** [OR-Tools](https://developers.google.com/optimization); [Pyomo](https://pyomo.readthedocs.io/); [Gurobi](https://docs.gurobi.com/).

### M40. Predict-then-optimize and decision-focused learning

1. **Name + aliases.** Predict-then-optimize and decision-focused learning; ML+OR; SPO; differentiable optimization.
2. **One-sentence definition.** Use predictions inside optimizers or train predictive models against downstream decision loss.
3. **Problem class(es).** Optimization, forecasting-to-action, policy learning.
4. **Data modality(ies).** Forecasts, constraints, simulations, tabular/time-series data.
5. **Component pipeline.** Train predictor → optimize/simulate with predictions → evaluate decision loss → optionally differentiate/learn decision-focused model → deploy loop.
6. **Canonical algorithms and model families per stage.** Predict-then-optimize is easiest to govern; decision-focused learning trains to decision loss; simulation optimization handles stochastic systems ([decision-focused learning](https://arxiv.org/html/2307.13565v4)).
7. **Feature engineering practices.** Forecast distributions, cost curves, constraints, scenario samples, uncertainty.
8. **Correctness pitfalls and safeguards.** Optimizing RMSE not business loss, ignoring uncertainty, infeasible predictions, simulator mismatch.
9. **Evaluation methodology.** Decision regret, realized cost/profit, feasibility, robustness, prediction diagnostics.
10. **Explainability methods.** Decision-loss decomposition, scenario plans, sensitivity.
11. **Data requirements.** Historical decisions/outcomes or credible simulator plus constraints.
12. **Compute profile.** High: repeated solves/simulations plus ML.
13. **Maturity and adoption.** Emerging-to-mainstream in advanced operations.
14. **Reusable components.** Shares ML M01/M05 and OR M39.
15. **Representative use cases.** Inventory, staffing, pricing, energy dispatch.
16. **Production failure modes.** Model/solver mismatch and action feedback; monitor realized decision quality.
17. **Tooling landscape.** PyTorch/JAX, Pyomo, OR-Tools, Gurobi, SimPy.
18. **Key references.** [decision-focused learning](https://arxiv.org/html/2307.13565v4); [OR-Tools](https://developers.google.com/optimization).

## Q. Probabilistic / Bayesian

### M41. Probabilistic programming and hierarchical Bayesian modeling

1. **Name + aliases.** Probabilistic programming and hierarchical Bayesian modeling; Bayesian inference; hierarchical models; UQ.
2. **One-sentence definition.** Specify generative probabilistic models with priors and infer posterior uncertainty.
3. **Problem class(es).** Regression, forecasting, causal, anomaly, uncertainty quantification.
4. **Data modality(ies).** Tabular, time series, panels, experiments.
5. **Component pipeline.** Model/prior specification → posterior inference → diagnostics → posterior predictive checks → decision reports → monitoring.
6. **Canonical algorithms and model families per stage.** Stan and PyMC provide probabilistic programming; hierarchical models pool across groups; Bayesian Data Analysis is canonical workflow reference ([Stan](https://mc-stan.org/docs/reference-manual/); [PyMC](https://docs.pymc.io/); [Bayesian Data Analysis](https://sites.stat.columbia.edu/gelman/book/)).
7. **Feature engineering practices.** Hierarchical effects, priors, latent states, measurement error, posterior features.
8. **Correctness pitfalls and safeguards.** Bad priors, non-identifiability, divergent sampling, overconfident VI.
9. **Evaluation methodology.** Posterior predictive checks, LOO/WAIC, calibration, convergence, prior sensitivity.
10. **Explainability methods.** Credible intervals, threshold probabilities, uncertainty decomposition.
11. **Data requirements.** Can use smaller data with priors/pooling but needs identifiable structure.
12. **Compute profile.** MCMC CPU/GPU intensive; VI scales better with approximation risk.
13. **Maturity and adoption.** Mainstream in statistics-heavy domains.
14. **Reusable components.** Shares uncertainty with forecasting/causal/optimization.
15. **Representative use cases.** Demand uncertainty, experiments, reliability.
16. **Production failure modes.** Stale priors, slow inference; monitor calibration.
17. **Tooling landscape.** Stan, PyMC, NumPyro, TFP, ArviZ.
18. **Key references.** [Stan](https://mc-stan.org/docs/reference-manual/); [PyMC](https://docs.pymc.io/); [Bayesian Data Analysis](https://sites.stat.columbia.edu/gelman/book/).

## R. Ensembling & stacking

### M42. Ensembling and stacking

1. **Name + aliases.** Ensembling and stacking; Bagging; boosting; blending; model averaging.
2. **One-sentence definition.** Combine models to improve robustness or exploit complementary errors.
3. **Problem class(es).** Cross-cutting classification, regression, ranking, forecasting.
4. **Data modality(ies).** Any modality with model outputs.
5. **Component pipeline.** Train diverse base models on folds → generate out-of-fold predictions → train combiner/average → validate ablations → package/monitor.
6. **Canonical algorithms and model families per stage.** Stacked generalization learns a combiner; random forests/boosting are built-in ensembles; averaging is simpler and stable ([stacked generalization](https://www.ijcai.org/Proceedings/97-2/Papers/011.pdf); [scikit-learn ensembles](https://scikit-learn.org/stable/modules/ensemble.html)).
7. **Feature engineering practices.** Out-of-fold predictions, confidence scores, fold IDs, meta-features.
8. **Correctness pitfalls and safeguards.** Meta-learner leakage, correlated errors, inference cost, component failure.
9. **Evaluation methodology.** Task metric lift, ablations, diversity/error correlation, calibration, latency.
10. **Explainability methods.** Weights/contributions, error-overlap charts, ablations.
11. **Data requirements.** Enough validation data for meta-learning; small data may average.
12. **Compute profile.** Multiple-model cost; distillation can compress.
13. **Maturity and adoption.** Mainstream cross-cutting component.
14. **Reusable components.** Shared by M01/M03/M07/M08/M20-M23/M28.
15. **Representative use cases.** Forecasts, risk models, classifiers, rankers.
16. **Production failure modes.** Component drift and latency inflation; monitor components.
17. **Tooling landscape.** scikit-learn, mlxtend, H2O, AutoGluon, MLflow.
18. **Key references.** [stacked generalization](https://www.ijcai.org/Proceedings/97-2/Papers/011.pdf); [scikit-learn ensembles](https://scikit-learn.org/stable/modules/ensemble.html).

## S. Label-efficiency

### M43. Weak, semi-supervised, self-supervised, and active learning

1. **Name + aliases.** Weak, semi-supervised, self-supervised, and active learning; Snorkel; active learning; SSL; pseudo-labeling.
2. **One-sentence definition.** Reduce manual labels using heuristics, unlabeled data, pretraining, and model-guided labeling.
3. **Problem class(es).** Cross-cutting classification/extraction/detection.
4. **Data modality(ies).** Text, image, tabular, audio, documents, graphs.
5. **Component pipeline.** Small gold set → weak labels/pretraining → train → select uncertain/diverse samples → label → iterate → gold-set eval.
6. **Canonical algorithms and model families per stage.** Snorkel models labeling functions, active learning queries informative cases, semi/self-supervised learning uses unlabeled data/pretext tasks ([Snorkel](https://arxiv.org/abs/1711.10160); [active learning survey](https://burrsettles.com/pub/settles.activelearning.pdf); [semi-supervised survey](https://arxiv.org/abs/2103.00550); [self-supervised survey](https://arxiv.org/abs/2301.05712)).
7. **Feature engineering practices.** Labeling functions, uncertainty, diversity embeddings, pseudo-labels, contrastive/masked objectives.
8. **Correctness pitfalls and safeguards.** Weak-label bias, confirmation loops, sampling bias, pseudo-label amplification, gold-set contamination.
9. **Evaluation methodology.** Gold-set F1, LF coverage/conflict, annotation efficiency, learning curves.
10. **Explainability methods.** LF reports, uncertainty queues, guidelines, error taxonomy.
11. **Data requirements.** Unlabeled corpus, small representative gold set, labelers/rules.
12. **Compute profile.** Can reduce labels; self-supervised pretraining may be GPU-heavy.
13. **Maturity and adoption.** Mainstream as component; weak-supervision platforms emerging.
14. **Reusable components.** Shared by M24/M27-M29/M32-M34/M04.
15. **Representative use cases.** NER, document extraction, defects, safety classifiers.
16. **Production failure modes.** Label-policy drift and biased heuristics; monitor gold-set performance.
17. **Tooling landscape.** Snorkel, Label Studio, Prodigy, modAL, Cleanlab.
18. **Key references.** [Snorkel](https://arxiv.org/abs/1711.10160); [active learning survey](https://burrsettles.com/pub/settles.activelearning.pdf); [semi-supervised survey](https://arxiv.org/abs/2103.00550); [self-supervised survey](https://arxiv.org/abs/2301.05712).

## T. Privacy-preserving & synthetic

### M44. Federated learning, differential privacy, and synthetic data

1. **Name + aliases.** Federated learning, differential privacy, and synthetic data; FL; DP-SGD; synthetic data.
2. **One-sentence definition.** Train/share models or data artifacts while reducing raw-data centralization or leakage risk.
3. **Problem class(es).** Cross-cutting ML and synthetic data.
4. **Data modality(ies).** Tabular, text, images, mobile/edge, regulated records.
5. **Component pipeline.** Threat model → choose FL/DP/synthetic → train/generate → utility/privacy/bias tests → governance approval → deploy.
6. **Canonical algorithms and model families per stage.** Federated averaging trains decentralized clients, differential privacy adds formal privacy guarantees, Opacus implements DP-SGD, SDV generates synthetic tabular data ([federated learning](https://proceedings.mlr.press/v54/mcmahan17a.html); [differential privacy](https://dl.acm.org/doi/10.1561/0400000042); [Opacus](https://opacus.ai/); [SDV](https://docs.sdv.dev/sdv)).
7. **Feature engineering practices.** Client stats, clipped/noisy gradients, privacy budgets, synthetic constraints/distributions.
8. **Correctness pitfalls and safeguards.** Privacy theater, membership leakage, low-utility synthetic data, client drift, poisoning.
9. **Evaluation methodology.** Downstream utility, epsilon/privacy budget, membership-inference tests, fidelity, fairness.
10. **Explainability methods.** Privacy/utility report, data card, governance record.
11. **Data requirements.** Multiple clients or sensitive data plus governance-defined privacy goals.
12. **Compute profile.** FL communication and DP noise add cost/accuracy tradeoff.
13. **Maturity and adoption.** Mainstream in niches; emerging broadly.
14. **Reusable components.** Shared with sensitive-data variants of M01/M24/M32.
15. **Representative use cases.** Healthcare collaboration, mobile models, synthetic test data.
16. **Production failure modes.** Client drift, privacy-budget exhaustion, leakage; audit utility/privacy.
17. **Tooling landscape.** Flower, TensorFlow Federated, Opacus, SDV, Gretel.
18. **Key references.** [federated learning](https://proceedings.mlr.press/v54/mcmahan17a.html); [differential privacy](https://dl.acm.org/doi/10.1561/0400000042); [Opacus](https://opacus.ai/); [SDV](https://docs.sdv.dev/sdv).

## U. Online / streaming learning

### M45. Online learning and real-time feature computation

1. **Name + aliases.** Online learning and real-time feature computation; Incremental learning; streaming ML; prequential learning.
2. **One-sentence definition.** Update features and sometimes model parameters continuously from events for low-latency scoring.
3. **Problem class(es).** Classification, regression, anomaly, recommendation.
4. **Data modality(ies).** Event/log streams, transactions, telemetry.
5. **Component pipeline.** Stream ingest → event-time features → real-time scoring → optional model update → prediction/outcome logging → prequential eval → drift/adaptation.
6. **Canonical algorithms and model families per stage.** River provides online ML primitives; Feast documents historical point-in-time joins and online retrieval patterns ([River](https://riverml.xyz/); [Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins)).
7. **Feature engineering practices.** Sliding/decayed windows, sketches, freshness, session state, delayed-label queues.
8. **Correctness pitfalls and safeguards.** Out-of-order events, late labels, train/serve skew, runaway adaptation.
9. **Evaluation methodology.** Prequential metrics, delayed-label holdouts, latency, freshness, drift, online A/B.
10. **Explainability methods.** Freshness dashboards, drift alerts, update audit trail.
11. **Data requirements.** Reliable streams and outcome logging; frequent labels for updates.
12. **Compute profile.** Latency-sensitive services/state stores; CPU typical.
13. **Maturity and adoption.** Real-time features mainstream; online model updating less common.
14. **Reusable components.** Shared with M01/M16/M17/M21/M35.
15. **Representative use cases.** Fraud, next-best-action, dynamic pricing.
16. **Production failure modes.** State loss, late data, adaptation errors; monitor freshness/contracts.
17. **Tooling landscape.** River, Feast, Kafka, Flink, Spark Streaming, Redis.
18. **Key references.** [River](https://riverml.xyz/); [Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins).

## V. Foundation-model adaptation decision space

### M46. Foundation-model adaptation selection

1. **Name + aliases.** Foundation-model adaptation selection; Prompt vs RAG vs fine-tune vs train-from-scratch.
2. **One-sentence definition.** Select the least-complex foundation-model adaptation satisfying factuality, behavior, privacy, cost, and latency constraints.
3. **Problem class(es).** Generation, extraction, classification, agents, multimodal.
4. **Data modality(ies).** Text, documents, code, images, audio, structured context.
5. **Component pipeline.** Define task/failure cost → prompt baseline → add RAG for knowledge/citations → fine-tune/LoRA for stable behavior → distill for cost → train from scratch only for strategic scale/control → monitor.
6. **Canonical algorithms and model families per stage.** Prompt-only is fastest, RAG suits changing/cited knowledge, LoRA/PEFT suits task/style adaptation, distillation lowers cost; training from scratch is rare outside model builders ([OpenAI prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering); [RAG](https://dblp.org/rec/conf/nips/LewisPPPKGKLYR020); [LoRA](https://arxiv.org/abs/2106.09685); [PEFT](https://huggingface.co/docs/peft/en/index); [DistilBERT](https://arxiv.org/abs/1910.01108)).
7. **Feature engineering practices.** Task rubrics, eval sets, retrieval corpus, instruction/preference data, latency/cost profiles.
8. **Correctness pitfalls and safeguards.** Fine-tuning retrieval failures, RAG for reasoning failures, contaminated evals, lock-in, weak monitoring.
9. **Evaluation methodology.** Task success, faithfulness, safety, latency, cost, human preference, regression tests.
10. **Explainability methods.** Decision matrix, eval results, risk register, architecture recommendation.
11. **Data requirements.** Requires evaluation harness; data need ranges from none to massive.
12. **Compute profile.** Prompt/RAG inference cost; PEFT needs GPU; scratch training needs large clusters.
13. **Maturity and adoption.** Mainstream architecture decision methodology; thresholds are not settled science.
14. **Reusable components.** Connects M26-M28, M37-M38, M43-M45.
15. **Representative use cases.** Enterprise copilots, extraction, support assistants.
16. **Production failure modes.** Over-adaptation, stale retrieval, hallucinations; monitor task evals/user feedback.
17. **Tooling landscape.** OpenAI/Anthropic APIs, Hugging Face, PEFT, LangChain, Ragas, vLLM.
18. **Key references.** [OpenAI prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering); [RAG](https://dblp.org/rec/conf/nips/LewisPPPKGKLYR020); [LoRA](https://arxiv.org/abs/2106.09685); [PEFT](https://huggingface.co/docs/peft/en/index); [DistilBERT](https://arxiv.org/abs/1910.01108).

## Cross-cutting synthesis 1 — Component reuse matrix

Legend: `●` = core component; blank = optional/uncommon.
| Component | M01 | M02 | M03 | M04 | M05 | M06 | M07 | M08 | M09 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 | M25 | M26 | M27 | M28 | M29 | M30 | M31 | M32 | M33 | M34 | M35 | M36 | M37 | M38 | M39 | M40 | M41 | M42 | M43 | M44 | M45 | M46 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Data extraction/ingestion | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Entity resolution / identity | ● |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ● |  |  | ● | ● |  |  |  |  |  |  |  | ● | ● | ● |  |  |  |  |  |  |  |  |  |  |  |  |  | ● |  |
| Feature engineering / representation | ● | ● | ● | ● | ● | ● | ● | ● |  | ● | ● |  |  | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |  |  |  | ● |  | ● | ● | ● | ● | ● | ● |  |  | ● | ● | ● |  |  |  | ● |  |
| Labeling / outcome definition | ● | ● | ● | ● |  |  |  |  |  |  | ● | ● |  | ● | ● |  | ● |  |  | ● | ● | ● | ● | ● |  |  | ● | ● | ● |  |  | ● | ● | ● | ● | ● | ● |  |  |  |  |  | ● |  |  |  |
| Training / inference | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Tuning / model selection | ● |  | ● | ● | ● | ● | ● | ● |  |  |  |  |  | ● | ● |  |  | ● |  | ● | ● |  | ● | ● |  | ● | ● | ● |  |  |  | ● |  |  | ● | ● |  |  | ● | ● | ● | ● | ● |  |  | ● |
| Explainability / audit | ● | ● | ● | ● |  | ● | ● |  | ● |  | ● | ● | ● | ● | ● |  | ● | ● | ● |  | ● |  | ● | ● |  | ● | ● |  | ● | ● | ● | ● | ● | ● | ● |  | ● | ● | ● | ● | ● | ● |  | ● |  | ● |
| Evaluation / validation | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Serving / action integration | ● | ● | ● |  | ● | ● | ● | ● | ● | ● | ● |  |  | ● | ● | ● | ● |  |  | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |  | ● |  |  | ● | ● |
| Monitoring / retraining | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
The matrix shows that evaluation, extraction, and monitoring are nearly universal, while entity resolution, labels, and temporal features are concentrated in methods whose correctness depends on identity, outcomes, or time ([Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins); [Kaufman et al. leakage paper](https://dl.acm.org/doi/10.1145/2020408.2020496); [ML Test Score](https://research.google.com/pubs/archive/aad9f93b86b7addfea4c419b9100c6cdd26cacea.pdf)).

## Cross-cutting synthesis 2 — Selection guide

| Data modality × problem class | Recommended methodology | Runner-up | Deciding factors |
|---|---|---|---|
| Tabular × classification/regression | M01 GBT | M02 GLM / M03 AutoML | GBT for nonlinear accuracy; GLM for governance; AutoML for breadth. |
| Tabular × time-to-event | M11 survival | M01 fixed-horizon classification | Use survival when timing/censoring matters. |
| Time series × regular forecasting | M05/M07 | M06 | Classical for stable single series; global deep for many related series; Prophet for analyst-adjustable calendars. |
| Sparse demand | M10 | M09/M07 | Use intermittent occurrence-size logic when zeros dominate. |
| Panel forecast × rollups | M09 | M07 | Use reconciliation when coherent aggregates are mandatory. |
| Event stream × anomaly | M16 | M15 | Streaming when latency matters. |
| Text × labels | M24 | M27 | Supervised NLP for stable high-volume; prompt-based for flexible low-volume. |
| Documents × fields | M29 | M27 | Layout/OCR pipeline when visual layout matters. |
| Knowledge corpus × QA | M26 | M28 | RAG for fresh/cited knowledge; fine-tune for stable behavior. |
| User-item interactions | M21 | M20 | Two-stage for large catalogs; MF for simpler interactions. |
| Search/ranking | M23 | M25 | LTR when query groups/labels exist; vector search for semantic candidates. |
| Graph prediction | M31 | M17 graph features + GBT | Use GNNs when graph structure adds value beyond aggregates. |
| Images × localization | M32 | M33 | Detection/segmentation with labels; visual anomaly for rare defects. |
| Audio analytics | M34 | Direct audio classifier | ASR pipeline when text outputs/explanations are needed. |
| Action selection | M35 | M12 | Bandits for continuous exploration; A/B for causal measurement. |
| Long-horizon decisions | M36 | M39/M35 | Offline RL only with rich trajectories and safe eval. |
| Constrained planning | M39 | M40 | Pure OR when inputs known; hybrid when predictions drive decisions. |
| Uncertainty/small samples | M41 | M02 | Bayesian hierarchy when pooling/uncertainty matters. |
| Sensitive distributed data | M44 | Centralized governed ML | Use FL/DP/synthetic after threat model and utility trade-off. |
Choose the simplest methodology whose validation scheme matches the data-generating process; random splits are often wrong for temporal, grouped, causal, and recommendation settings ([Kaufman et al. leakage paper](https://dl.acm.org/doi/10.1145/2020408.2020496); [Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins)).

## Cross-cutting synthesis 3 — Prevalence ranking

| Rank | Family | Estimated prevalence | Evidence and caveat |
|---|---|---|---|
| 1 | M01 tabular supervised | Very high / likely largest traditional enterprise ML share | Indirect evidence: Kaggle reports common scikit-learn use, and tabular surveys say heterogeneous tabular data is common while GBTs remain strong ([Kaggle 2022 report](https://ailab-ua.github.io/courses/resources/Kaggle_State_of_Machine_Learning_and_Data_Science_Report_2022.pdf); [tabular-data survey](https://pubmed.ncbi.nlm.nih.gov/37015381/)). |
| 2 | M05-M10 forecasting | High | Forecasting is a standard business-planning discipline in FPP and Prophet’s business forecasting-at-scale paper ([Forecasting: Principles and Practice](https://robjhyndman.com/uwafiles/fpp-notes.pdf); [Forecasting at Scale](https://facebook.github.io/prophet/static/prophet_paper_20170113.pdf)). |
| 3 | M24/M27/M29 NLP, LLM extraction, document AI | High and rising | Classic NLP is mature and generative AI adoption is broad, but public surveys do not expose precise workload shares ([BERT](https://arxiv.org/abs/1810.04805); [McKinsey State of AI 2025](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)). |
| 4 | M20-M23 recommenders/ranking | High in digital businesses | Canonical platform references exist, but prevalence is concentrated in catalog/feed/search businesses ([matrix factorization](https://dl.acm.org/doi/10.1109/MC.2009.263); [YouTube recommender](https://research.google.com/pubs/archive/45530.pdf)). |
| 5 | M15-M17 anomaly/fraud | Medium-high | Common where rare-event triage matters; many systems blend rules, GBT, graph, and anomaly detectors ([PyOD](https://pyod.readthedocs.io/); [GraphSAGE](https://arxiv.org/abs/1706.02216)). |
| 6 | M12-M14 causal/uplift | Medium | Experimentation is mainstream; uplift/DML require randomized logs or causal assumptions ([CUPED](https://robotics.stanford.edu/~ronnyk/2013-02CUPEDImprovingSensitivityOfControlledExperiments.pdf); [double/debiased ML](https://arxiv.org/abs/1608.00060)). |
| 7 | M18-M19 clustering | Medium | Common analytically but less often a serving methodology ([scikit-learn clustering](https://scikit-learn.org/stable/modules/clustering.html); [HDBSCAN](https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html)). |
| 8 | M39-M40 optimization | Medium | OR is mature in operations-heavy enterprises; ML+OR hybrids are newer ([OR-Tools](https://developers.google.com/optimization); [decision-focused learning](https://arxiv.org/html/2307.13565v4)). |
| 9 | M32-M34 vision/speech | Medium overall | High in manufacturing/call-center verticals, lower where modalities are absent ([Detectron2](https://detectron2.readthedocs.io/); [Whisper](https://cdn.openai.com/papers/whisper.pdf)). |
| 10 | M31 graph ML | Lower-medium | Graph features are common; GNN deployment is narrower due graph serving complexity ([PyG](https://pytorch-geometric.readthedocs.io/)). |
| 11 | M35-M38 RL/bandits/agents | Emerging | Bandits have production tooling; offline RL and agents need stronger safety/evaluation ([Vowpal Wabbit contextual bandits](https://vowpalwabbit.org/docs/vowpal_wabbit/python/latest/examples/contextual_bandit.html); [offline RL](https://arxiv.org/abs/2005.01643); [AgentBench](https://arxiv.org/abs/2308.03688)). |
| 12 | M44 privacy/synthetic | Niche-to-emerging | Important in regulated settings but limited by utility/governance trade-offs ([federated learning](https://proceedings.mlr.press/v54/mcmahan17a.html); [differential privacy](https://dl.acm.org/doi/10.1561/0400000042); [SDV](https://docs.sdv.dev/sdv)). |
No public source found in this research provides audited methodology-level shares of enterprise ML workloads, so the ranking is qualitative and evidence-graded rather than percentage-based.

## Cross-cutting synthesis 4 — Maturity spectrum

| Tier | Methodologies | Rationale |
|---|---|---|
| Mainstream-production-safe | M01, M02, M03, M05, M06, M09, M10, M11, M12, M13, M15, M18, M20, M21, M23, M24, M29, M30, M32, M34, M39, M41, M42, M45 | Mature validation patterns, tooling, and operational precedents. |
| Emerging but usable with strong teams | M04, M07, M08, M14, M16, M17, M19, M22, M25, M26, M27, M28, M31, M33, M35, M37, M38, M40, M43, M44, M46 | Higher evaluation, governance, or infrastructure burden. |
| Research-stage or high-risk in many enterprises | M36 in open-ended domains, fully autonomous M38 for irreversible actions, train-from-scratch in M46 | Requires rich logs, safety controls, or capital scale. |
Production maturity depends on observability, data tests, validation, rollback, and monitoring, not only algorithm age ([ML Test Score](https://research.google.com/pubs/archive/aad9f93b86b7addfea4c419b9100c6cdd26cacea.pdf); [Hidden Technical Debt](https://papers.neurips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf); [Google MLOps guide](https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning)).

## Cross-cutting synthesis 5 — Correctness-discipline summary

| Discipline | Failure mode | Standard safeguard and source |
|---|---|---|
| Target leakage | Post-outcome or proxy target features | Availability audit and label-time review [Kaufman et al. leakage paper](https://dl.acm.org/doi/10.1145/2020408.2020496) |
| Temporal leakage | Future facts, random time splits, revised data | Point-in-time joins and rolling validation [Feast point-in-time joins](https://docs.feast.dev/getting-started/concepts/point-in-time-joins) |
| Entity leakage | Same entity in train/test | Grouped splits and deduplication [recordlinkage](https://recordlinkage.readthedocs.io/en/latest/guides/data_deduplication.html) |
| Train/serve skew | Training feature code differs from serving | Shared feature definitions and parity tests [Google Rules of ML](https://developers.google.com/machine-learning/guides/rules-of-ml) |
| Label traps | Delayed/censored/policy-contaminated outcomes | Explicit label windows/censoring rules [scikit-survival](https://scikit-survival.readthedocs.io/en/stable/user_guide/00-introduction.html) |
| Confounding | Post-treatment controls or missing common causes | Pre-treatment covariates and sensitivity checks [double/debiased ML](https://arxiv.org/abs/1608.00060) |
| Exposure/position bias | Clicks treated as unbiased preferences | Impression logging, propensities, OPE [off-policy evaluation](https://proceedings.mlr.press/v70/wang17a.html) |
| Calibration failure | Scores drift from probabilities | Calibration curves and recalibration |
| Monitoring gaps | Silent drift, schema breaks, feedback loops | Data/prediction/label/KPI monitoring [Evidently](https://docs.evidentlyai.com/introduction); [SageMaker Model Monitor](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html) |
The common discipline is to version data/code, freeze validation before modeling, retain baselines, evaluate on the deployment distribution, log predictions/actions/outcomes, and treat monitoring as part of the methodology ([Google MLOps guide](https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning); [MLflow registry](https://mlflow.org/docs/latest/ml/model-registry/); [Great Expectations](https://docs.greatexpectations.io/docs/0.18/oss/guides/validation/validate_data_overview/); [Evidently](https://docs.evidentlyai.com/introduction)).
