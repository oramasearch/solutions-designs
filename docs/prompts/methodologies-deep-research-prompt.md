# Research request: a comprehensive compendium of enterprise AI methodologies

## Mission

Produce an **extensive, comprehensive compendium of AI/ML methodologies** used to solve enterprise data and AI problems. This is a reference compendium, not an overview: enumerate as many distinct methodologies as the evidence supports, describe each one rigorously using the dossier template below, and map how their components are reused across methodologies. Be exhaustive rather than selective — breadth first, then depth on every entry. Do not truncate for length.

## Definitions that scope this research (use these terms exactly)

- **Use case** — the business problem being solved (e.g. churn, fraud, demand forecasting). **Not the subject of this research.**
- **Methodology** — the subject of this research: a reusable arrangement of AI methods — a pipeline or graph of components such as data extraction → preparation → feature engineering → model training → explanation → evaluation → reporting/serving — described **independently of any single business use case or deployment**.
- **Solution** — a methodology applied correctly in a real-world context (e.g. in a timeseries-appropriate, leakage-free setup) and connected to a business action. **Not the subject of this research.**

The relationship: many use cases ≈ many solutions ≫ **few methodologies**. Methodologies and their components are the reusable layer — the same methodology serves many use cases. This compendium catalogs that reusable layer.

**Anchoring example** (include and elaborate it as the first entry): the standard **tabular supervised learning methodology** — extract tabular data → feature engineering to create model input features → train a gradient-boosted tree model (e.g. XGBoost) to build a model with predictive power → SHAP analysis on that model to measure feature importance → report. Note and evidence the claim that this is the single most common enterprise methodology because tabular data constitutes the majority of business data.

## Dossier template — complete EVERY field for EVERY methodology

1. **Name + aliases** — the common name and synonyms used in industry/literature.
2. **One-sentence definition.**
3. **Problem class(es)** — classification, regression, forecasting, ranking, anomaly detection, clustering/segmentation, recommendation, causal inference/uplift, optimization, sequential decisioning, generation, extraction, matching/deduplication, etc.
4. **Data modality(ies)** — tabular, time series, event/log streams, text, documents (scanned/layout), images, video, audio, graph/network, geospatial, mixed/multimodal.
5. **Component pipeline** — the ordered stages, with one line on what each stage does (extraction, cleaning, labeling, feature engineering, model training, tuning, explanation, evaluation, reporting/serving, monitoring/retraining).
6. **Canonical algorithms and model families per stage** — with the leading alternatives and when to prefer each (e.g. XGBoost vs LightGBM vs CatBoost vs tabular neural nets vs TabPFN-class foundation models).
7. **Feature engineering practices** specific to this methodology (e.g. aggregation windows, lags, encodings, embeddings).
8. **Correctness pitfalls and safeguards** — leakage modes (target leakage, temporal leakage, train/serve skew), point-in-time discipline, entity-resolution traps, label-definition traps, survivorship bias, and the standard safeguards for each.
9. **Evaluation methodology** — metrics, validation schemes (e.g. temporal/grouped cross-validation), baselines, calibration, statistical significance.
10. **Explainability methods** — e.g. SHAP, permutation importance, partial dependence, attention/attribution maps, counterfactuals — and what business stakeholders actually receive.
11. **Data requirements** — minimum viable volume, label availability, history depth, freshness.
12. **Compute profile** — CPU vs GPU, training vs inference cost, typical scale.
13. **Maturity and adoption** — research-stage vs emerging vs mainstream; evidence of production use at scale.
14. **Reusable components** — which of its components are shared with which other methodologies (this feeds the reuse matrix below).
15. **Representative use cases** — a short orientation list only (the use cases are not the research subject).
16. **Production failure modes** — drift, feedback loops, silent degradation — and the standard monitoring/retraining practices.
17. **Tooling landscape** — the leading open-source libraries and frameworks for it.
18. **Key references** — papers, authoritative documentation, well-regarded practitioner engineering blogs.

## Coverage checklist — cover ALL of these families at minimum, splitting into multiple distinct methodologies wherever the pipelines genuinely differ

A. **Tabular supervised learning** — gradient-boosted trees (XGBoost/LightGBM/CatBoost), linear/GLM, AutoML, tabular deep learning, tabular foundation models (TabPFN-class).
B. **Time-series forecasting** — classical (ETS/ARIMA), Prophet-style, global deep models (DeepAR, N-BEATS/N-HiTS, Temporal Fusion Transformer), time-series foundation models, hierarchical reconciliation, intermittent/sparse demand.
C. **Survival / time-to-event analysis** — Cox models, survival forests, discrete-time hazard (incl. churn-timing framing).
D. **Causal inference & uplift modeling** — experimentation (A/B, CUPED, switchback), quasi-experimental (diff-in-diff, synthetic control, IV, RDD), meta-learners (S/T/X/R), double/debiased ML, uplift trees, off-policy evaluation.
E. **Anomaly / outlier detection** — isolation forest, density- and distance-based, autoencoder/reconstruction, spectral, streaming/online variants; fraud-specific practices (velocity features, graph features).
F. **Clustering & segmentation** — k-means/GMM, HDBSCAN, embedding-based clustering, mixed-type data.
G. **Recommendation & personalization** — collaborative filtering/matrix factorization, two-tower retrieval + ranking, sequence-aware recommenders, contextual bandits for exploration.
H. **Learning-to-rank.**
I. **Text & language — classic NLP** — text classification, NER/extraction, topic modeling; and **LLM-era** — embeddings + vector retrieval, RAG, prompt-based classification/extraction, supervised fine-tuning (incl. LoRA/PEFT), distillation.
J. **Document intelligence** — OCR, layout-aware models, table extraction, document classification-and-extraction pipelines.
K. **Graph ML** — node/edge classification, link prediction, GNNs, graph features for fraud rings; **entity resolution / record linkage** as its own methodology.
L. **Computer vision** — classification, detection, segmentation; industrial visual inspection pipelines.
M. **Speech & audio** — ASR-based analytics pipelines (e.g. call-center transcription → NLP), where enterprise-relevant.
N. **Reinforcement learning & sequential decisioning** — multi-armed/contextual bandits, offline RL, RL for long-horizon agent training (incl. RLHF/RLAIF-style post-training and reward modeling).
O. **Agentic / LLM-agent methodologies** — tool-calling agents over enterprise systems, multi-step planning, agent evaluation harnesses.
P. **Mathematical optimization & OR hybrids** — predict-then-optimize, MIP/CP, simulation-optimization, scheduling/routing.
Q. **Probabilistic / Bayesian methods** — probabilistic programming, hierarchical Bayesian models, uncertainty quantification.
R. **Ensembling & stacking** as a cross-cutting methodology component.
S. **Label-efficiency methodologies** — semi-supervised, self-supervised pretraining, active learning, weak supervision (Snorkel-style).
T. **Privacy-preserving & synthetic** — federated learning, differential privacy, synthetic data generation.
U. **Online / streaming learning** — incremental training, real-time feature computation.
V. **Foundation-model adaptation decision space** — fine-tune vs RAG vs prompt-only vs train-from-scratch, treated as a methodology-selection question.

If the evidence surfaces important methodologies outside this checklist, include them — the checklist is a floor, not a ceiling.

## Cross-cutting syntheses to produce AFTER the dossiers

1. **Component reuse matrix** — rows = shared components (data extraction, entity resolution, feature engineering, labeling, training, tuning, explanation, evaluation, serving, monitoring); columns = methodologies; show which methodologies share which components. Make the reuse structure explicit.
2. **Selection guide** — a table mapping (data modality × problem class) → the recommended methodology and the main runner-up, with the deciding factors.
3. **Prevalence ranking** — the methodologies ordered by estimated share of real enterprise ML/AI workloads, with the evidence for each estimate (surveys, Kaggle/state-of-ML reports, practitioner surveys, cloud-vendor usage reports). Explicitly evidence (or challenge) the claim that tabular supervised learning dominates because tabular data is the majority of business data.
4. **Maturity spectrum** — which methodologies are mainstream-production-safe today vs emerging vs research-stage.
5. **Correctness-discipline summary** — the leakage/point-in-time/evaluation safeguards that recur across methodologies, collected once as a shared discipline.

## Source and quality requirements

- Prefer **primary and authoritative sources**: peer-reviewed papers and surveys, official library documentation, and engineering blogs from recognized practitioner organizations. Use vendor marketing pages only for factual product claims, never for prevalence claims.
- **Cite every substantive claim** inline. Where evidence is weak, disputed, or opinion-based, say so explicitly rather than presenting it as settled.
- Report numbers (adoption shares, benchmark results) with their source and year; do not fabricate precision.

## Output format

- A single, well-structured **markdown compendium**.
- Open with a short executive orientation (what a methodology is, the reuse thesis, the prevalence headline) — then the full dossier per methodology, grouped by the families above — then the five cross-cutting syntheses.
- Use tables for the reuse matrix, selection guide, and prevalence ranking.
- This is a compendium: **completeness beats brevity**. Do not summarize away detail; do not stop early.
