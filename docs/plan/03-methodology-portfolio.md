# Methodology portfolio — the engineering assets and the platform build order

> **Status:** Draft v1 — 2026-07-15 · **Author:** CTO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits engine-state, security-gap, and roadmap detail
> from evidence 07/08.
>
> **Kernel-binding.** This document elaborates the
> [strategy kernel](00-strategy-kernel.md) — specifically **D2 (methodology waves)** and
> **D7 (gates)**, with supporting detail for D8 (metrics) — and **must not contradict
> it**. Where elaboration surfaced a genuine tension, it is recorded in
> [Appendix A](#appendix-a--tensions-for-kernel-review) and goes back to the kernel for
> resolution, per the kernel's own rule. Evidence citations use the item numbers in
> [`../evidence/`](../evidence/); dossier IDs are cited as **e10 M#** (internal
> compendium, item 10) and **e13 M##** (external Deep Research compendium, item 13).
> Portfolio methodology IDs `M-1`…`M-11` are the kernel's; they are distinct from the
> compendia's dossier numbering.

---

## 1. Engineering thesis — methodologies as productized components of the execution graph

Zetta's product promise (item 06) is a compiler pipeline: intent (or an existing
artifact) in → a **correct execution graph** out — `connect → clean → model → index →
serve` — validated by a **correctness gate** before it may deploy, then provisioned onto
infrastructure the customer controls. A *methodology*, in the vocabulary's sense (the
arranged AI methods, described apart from any deployment), is therefore not a document
or a notebook for us: **a methodology is a parameterized subgraph template** — a
reusable arrangement of graph nodes with typed inputs (source schemas, an entity
definition, a label spec, a horizon), typed outputs (a scored table, a served model, a
driver report), and a set of correctness obligations the gate enforces before that
subgraph is allowed to run. "Productizing a methodology" means shipping four artifacts:

1. **The subgraph template** — the canonical node arrangement (e.g. extract →
   point-in-time featurize → GBM train → SHAP → report) with its parameter surface.
2. **The gate profile** — the machine-checkable correctness obligations that template
   carries (leakage checks, split rules, baseline requirements), which the gate runs and
   which **block deploy with a stated reason** on failure (item 06: "blocked, with a
   reason, if it does not [pass]").
3. **The evaluation harness** — the metrics, temporal-validation scheme, and mandatory
   baselines that produce the pass/fail evidence the gate consumes and the fidelity
   numbers the customer sees.
4. **The serving/monitoring pattern** — how the trained output is exposed (batch score
   table, `/v1/models/{name}/predict`, `/v1/indexes/{name}/search`) and which drift
   monitors + retrain triggers ship with it.

**The reuse economics, stated in engineering terms.** Both compendia independently
converge on the same structural fact (e10 §S1, e13 synthesis 1): the 35–46 catalogued
enterprise methodologies decompose into **~10 shared components** — extraction, entity
resolution, feature engineering, labeling, training, tuning, explanation, evaluation,
serving, monitoring — and most methodologies are the tabular anchor (e10 M1) **with one
or two stages swapped**: learning-to-rank is M1 with a group-aware loss; uplift is M1
with a treatment column and a causal estimand; global forecasting is M1 with lag
features and rolling-origin evaluation; discrete-time survival is *literally* M1 run on
entity-period rows. The internal reuse matrix shows the tabular anchor **owns six of
the ten canonical components outright** (e10 §S1 reading note); the external matrix
shows extraction, training, evaluation, and monitoring are used by effectively **all
46** dossiers (e13 synthesis 1). Two consequences drive this whole document:

- **Marginal methodology cost collapses after Wave 1.** Once the ten components exist
  as graph node types with gate profiles, a new methodology is mostly *template
  assembly + a specialized stage or two + a gate-profile extension* — not a new stack.
  This is the mechanism behind the kernel's strategic equation ("every new methodology
  wave unlocks an order of magnitude more solutions than it costs").
- **Correctness is component-shaped, not methodology-shaped.** The twelve correctness
  disciplines of e10 §S5 (point-in-time, leakage audits, split integrity, label rigor,
  train/serve parity, baseline supremacy, causal honesty, feedback-loop containment,
  slice-level evaluation, ER precedence, drift governance, review economics) are
  **methodology-independent**, and e10 §S5 draws the conclusion we build on: *"a
  platform that enforces them as infrastructure … makes every methodology safer
  simultaneously."* That platform is the correctness gate (§4). It is why the gate is a
  **component of the engine**, not a per-solution checklist — and why R2 sits in Wave 1.

**Mapping components onto the graph stages.** The product's five-stage graph vocabulary
(item 06) and the compendium's ten components align as follows; the gate and the
evaluation harness straddle stages because they validate the *whole* graph:

| Graph stage (item 06) | Components that live there | Gate obligations anchored there |
|---|---|---|
| **connect** | extraction/connectors | schema type-check vs live sources; freshness/profiling |
| **clean** | entity resolution; data validation | ER quality gates; schema/distribution assertions; dedup before split |
| **model** | point-in-time features; labeling; training; tuning; explanation | leakage + point-in-time checks; label-spec check; split integrity; baseline supremacy; explanation artifact required |
| **index** | index build (full-text/vector), tiered materialization | index-vs-source freshness; ACL propagation into indexes |
| **serve** | serving; monitoring/retraining | train/serve parity; drift monitors wired; approval gates on actions |

**The engine-reality constraint.** The roadmap (item 08) is blunt about what exists:
*have* = CRDT-replicated JSON store, equal-peer cluster, Postgres-SQL subset, large
objects, coroutine runtime, headed+headless modes, and — verified in item 07's headless
reference — a working **4800 HTTP API that already serves models and indexes**
(`POST /v1/models/{name}/predict`, `GET /v1/indexes/{name}/search`, MCP, OpenAPI).
*missing* = DDF API, embedded Lua (compute-near-data), tiered storage, indexing at the
engine level, k8s/cloud deploy, Postgres wire protocol, production-safe auth/RBAC (the
zetta#759–#769 gaps). The wave plan below therefore does two things at once: it orders
methodologies by reuse (kernel D2), and it **co-sequences each wave with the engine
problem that unlocks it** (kernel D7.3: W1→R1/R2 · W2→R3/R4-lite · W3→R4/R6 · W4→R5/R8).
Until R5 (compute-near-data) lands, methodology compute (GBM training, SHAP, solvers)
runs as **sandboxed worker steps orchestrated by the graph executor** — containerized
jobs colocated with the node, the shape already prototyped in the engine's
k8s-provisioner design — with results, lineage, and artifacts written back into the
Zetta store. That is an explicit architectural bridge, not a compromise we hide:
the graph, the gate, the lineage, and the store are Zetta-native from day one; the
numeric kernels migrate inward as R5 matures (§6).

---

## 2. The component inventory

The ten shared components, in dependency order. For each: what it is as a product
component, who consumes it (from e10 §S1 / e13 synthesis 1), what Zetta has today vs
must build (mapped to the item 08 roadmap), and the correctness checks the component
*owns* inside the gate. The wave column says when the component must reach v1 quality.

| # | Component | Consumed by (portfolio) | Wave needed |
|---|---|---|---|
| C1 | Extraction / connectors | all M-1…M-11 | W1 |
| C2 | Entity resolution | M-1, M-3, M-5, M-6, M-7, M-8 (+ every entity-level solution) | W1 (thin) |
| C3 | Point-in-time feature layer | M-1, M-3, M-4, M-5, M-6, M-7, M-8, M-10, M-11 | W1 |
| C4 | Labeling / outcome definition | M-1, M-4 (implicit), M-5 (triage feedback), M-6, M-7, M-8, M-10 | W1 |
| C5 | Training + tuning | M-1, M-3, M-4, M-5, M-6, M-7, M-8, M-10 | W1 |
| C6 | Explanation | M-1, M-3 (surrogate), M-4, M-5, M-6, M-7, M-8, M-11 (duals) | W1 |
| C7 | Evaluation harness | all — the gate's evidence engine | W1 |
| C8 | Serving | all | W1 (batch + `/v1` predict), W2 (deployed targets) |
| C9 | Monitoring / retraining | all | W1 (basic drift), W2 (FVA/coverage), W3 (OPE/holdout) |
| C10 | Index / retrieval layer | M-8 (ANN), M-9 (core), M-2 (blocking), M-10 (tools) | W3 (engine R4) |

### C1 — Extraction / connectors

**What.** Typed source connectors (warehouse SQL, SaaS APIs, files, event streams) +
source **profiling** (schemas, null rates, cardinalities, freshness) + population/
snapshot definition. In graph terms: the `connect` nodes and the schema catalog every
downstream type-check reads. Profiling is not optional garnish — R2 names "profiling of
source schemas" as the gate's own dependency, because the gate type-checks graphs
*against data-source profiles*, not against declared schemas.

**Consumers.** Universal — the one component both matrices mark for every methodology
(e13 synthesis 1 row 1). Its *point-in-time* variant (extract as-of a snapshot date) is
what M-1/M-4/M-6/M-7 correctness stands on.

**Zetta today vs build.** Today: SQL-subset ingestion into the store, JSONL storage,
large objects; the n8n-import path (R1) is the first artifact connector, with Charles's
two churn workflows as ground truth. Build: the connector SDK (typed source
descriptors, incremental sync, snapshot semantics), the profiler, and Snowflake-first
warehouse pull (R4's stated first source). No engine blocker for W1 — batch pull into
the store runs on today's engine.

**Gate checks owned.** Schema type-check vs live profile; source-freshness assertion;
row-count/null-rate/cardinality drift vs profile; snapshot-date well-formedness
(a graph whose feature windows reference a snapshot the source cannot reconstruct is
rejected with that reason).

### C2 — Entity resolution

**What.** Blocking → pairwise similarity → match scoring → clustering into persistent
entity IDs with survivorship rules (e10 M23; e13 M30). In the portfolio this is
**methodology M-2** *and* component C2: the kernel admits it to W1 explicitly "thin v1 —
the correctness gate needs it," and the product copy makes it a launch promise ("Ask
for one subsidiary's risk and it resolves to the right entity — never several blended
into an averaged, flattering blur," item 06).

**Consumers.** Every entity-level methodology: duplicate entities split feature
history, double-count labels, and corrupt graph structure silently — e10 §S5.10 calls
ER "the invisible bound" on M1/M8/M11/M13/M14/M22. The compendium's strongest
architecture hint: ER quality *precedes* model quality.

**Zetta today vs build.** Nothing engine-side exists. Build (thin v1): deterministic +
probabilistic matching (Fellegi–Sunter weights, Splink-class; §6) over normalized
quasi-identifiers, persistent entity IDs stored in Zetta, match-evidence waterfall per
merge, cluster-size alarms. Blocking via sorted keys first; embedding-ANN blocking
waits for C10 (W3). Runs as worker steps on today's engine.

**Gate checks owned.** Entity-consistency check (the item 06 subsidiary promise);
grouped-split-by-resolved-entity enforcement; cluster-size/over-merge alarms;
blocking-recall measurement where labeled pairs exist; ID-stability check across runs
(downstream joins must not silently re-key).

### C3 — Point-in-time feature layer

**What.** The as-of join + windowed-aggregation engine: every feature computable *as of
the snapshot date* from data available then (e10 M1 §7's "cardinal rule"). Windowed
counts/sums/ratios (7/30/90/365d), recency, RFM, deltas, categorical encodings computed
out-of-fold, lags at seasonal offsets (the M-4 variant), pre-treatment-only enforcement
(the M-7 variant). **This is a build, not an integration** (§6): it is the single
highest-leverage correctness asset, the thing e10 §S5.1 calls "the master rule," and
the thing generic feature stores bolt on while we make it native to the store that
already holds the data.

**Consumers.** M-1 owns the canonical version; M-3 consumes its entity aggregates; M-4
its lag/window variant; M-5 velocity features; M-6 entry-date/per-period features; M-7
pre-treatment features; M-8 impression-time features; M-10 state/context features; M-11
forecast inputs. Nine of eleven portfolio methodologies.

**Zetta today vs build.** The SQL subset + JSONL store can express batch as-of joins
today (worker-executed); build the feature-definition registry (one definition, train
*and* serve — the train/serve-parity anchor), window/aggregation primitives, and
snapshot materialization. R4 tiered storage later makes repeated feature computation
cheap; R5 moves it on-node. W1 needs the *correct* version, not the fast version.

**Gate checks owned.** Temporal-leakage check (no feature window overlaps the label
window); as-of enforcement per feature; out-of-fold discipline for target-dependent
encodings; train/serve parity (serving reads the same registry definition); feature
availability-at-scoring-time review flags.

### C4 — Labeling / outcome definition

**What.** Labels are *designed, not found* (e10 §S5.4): a written, versioned **label
spec** per solution — outcome definition, label window, censoring rules, exclusions —
compiled into the graph, plus the correction/feedback loops (triage outcomes, review
corrections) that manufacture labels for methodologies that start unlabeled (M-5, M-9).

**Consumers.** M-1/M-6/M-7 (outcome labels), M-4 (implicit — the future window *is* the
label), M-5 (investigation feedback), M-8 (implicit feedback + negative sampling
design), M-10 (scenario suites + reward specs — the LLM-era mirror, e10 §S1 note 3).

**Zetta today vs build.** Build entirely: label-spec schema + compiler, censoring
handling (exclude-or-survival routing per e10 M1 §8), feedback-capture tables in the
store. No engine blocker.

**Gate checks owned.** Label-spec presence + well-formedness (no spec, no deploy);
censoring-correctness check (entities whose window hasn't elapsed are excluded or the
graph routes to M-6); label-window/feature-window disjointness (with C3); survivorship-
bias check (population reconstructed as-of historical snapshots, not from currently
active entities).

### C5 — Training + tuning

**What.** The supervised training node family (GBM first: XGBoost/LightGBM/CatBoost;
GLM baseline always — e10 M1 §6 "the interpretable baseline that should always be
run"), early stopping on time-respecting validation, Optuna-class hyperparameter search
under an explicit budget, model artifacts (weights already have a home: the store's
per-model `weights` layout, item 07 headless reference §4).

**Consumers.** M-1 canonical; M-3 (surrogate models), M-4 (GBM-on-lags), M-5 (graduated
supervised scorer), M-6 (discrete-time GBM), M-7 (nuisance + CATE models), M-8
(rankers), M-10 (post-training, its own regime).

**Zetta today vs build.** Model *serving* exists (`/v1/models/{name}/predict`);
training runs as sandboxed worker steps (§1) writing weights + lineage back to the
store. Build: the training node contract (deterministic seeds, budget caps, artifact +
metadata write-back), the tuning search wrapper, and the model registry semantics
(versions, champion/challenger) on the store.

**Gate checks owned.** Budget + determinism recorded (a result that can't be reproduced
can't pass); early-stopping split is temporal; implausibly-high-metric alarm (AUC >
~0.95 on behavioral problems triggers leakage investigation, e10 M1 §8 — a *gate*
check, not a suggestion).

### C6 — Explanation

**What.** TreeSHAP global + local attributions, dependence plots, driver reports with
direction, per-record reason codes; decomposition plots for forecasting (e10 M5 §10 —
"among the most stakeholder-legible explanations in all of ML"); match-evidence
waterfalls for ER; duals/binding-constraint narratives for optimization; execution
traces for agents. Explanation is the **bridge from prediction to business action** —
the driver→action map is what the solution layer (04-solutions-catalog) wires to
owners; without C6 a solution can't meet the kernel's D4 anatomy.

**Consumers.** Every methodology surfaces one (§3 per-wave "explainability surface").

**Zetta today vs build.** Build: SHAP worker step + report renderer; report artifacts
stored with lineage. No engine blocker.

**Gate checks owned.** Explanation artifact **required** for deploy (a scored table
with no driver report fails the gate for solution-class graphs); dominant-feature leak
detector (top SHAP feature explaining an implausible share flags leakage — the e10 M3
§8 trick, applied universally).

### C7 — Evaluation harness

**What.** The gate's evidence engine: temporal out-of-time splits as the primary gate,
grouped/deduplicated splits where entities repeat, mandatory baselines
(base-rate/naive, seasonal-naive + ETS, incumbent model, random targeting — per
methodology), metric batteries (discrimination + calibration + lift for M-1-class;
MASE/pinball/coverage for M-4; PR-AUC/precision@budget for M-5; C-index/IPCW-Brier for
M-6; Qini/AUUC for M-7; recall@k/NDCG on golden sets for M-8/M-9; scenario-suite pass
rates for M-10; realized-vs-plan for M-11), bootstrap CIs, slice/segment breakdowns.
Versioned, re-run on every change, results stored as first-class artifacts the gate
reads and the customer sees.

**Zetta today vs build.** Build entirely (worker-executed); the *harness contract* —
"every methodology template declares its metrics, its split scheme, its baselines, and
its floor" — is the productization of e10 §S5.6/§S5.9 and the substance of the kernel's
D7.2 correctness floor (≥90% on the evaluated task set before self-service deploy).

**Gate checks owned.** All of §4's evaluation-tier checks; baseline-supremacy
enforcement (ship only if the honest baseline is beaten *or* the customer explicitly
accepts a documented exception — logged, audited).

### C8 — Serving

**What.** Three patterns: (a) **batch score tables** written back into the store /
customer warehouse — the W1 default and the plurality pattern for tabular solutions;
(b) **online prediction** via the existing `/v1/models/{name}/predict`; (c) **index
serving** via `/v1/indexes/{name}/search` (W3, engine R4). Plus report delivery (the
"report" terminus of the anchor methodology).

**Zetta today vs build.** (a) and (b) run on today's engine — serving is the *most*
built component. Build: score-table write-back conventions + lineage, serving-side
feature fetch reading C3's registry (train/serve parity), and — gated on R3 —
one-button deploy of node+graph to a customer target. R3 is what turns "runs" into
"deployed"; it gates **W2**, and the kernel's Intelligence Velocity metric is measured
through it.

**Gate checks owned.** Train/serve parity attestation; latency/probe sanity for online
endpoints; no-egress placement check (the graph's serve nodes must resolve inside the
customer environment — item 06 "the data stays put").

### C9 — Monitoring / retraining

**What.** PSI/KS input + score drift, delayed-label performance dashboards, FVA
(forecast value added) and interval-coverage tracking for M-4, alert-precision /
investigator hit-rate for M-5, holdout incremental-lift for M-7, golden-set recall
canaries for M-9, per-task success sampling for M-10, override rates for M-11;
champion/challenger retrain governance; **persistent randomized holdouts** as the
feedback-loop defense (e10 §S5.7–8). Monitoring is also the measurement loop the
kernel's D4 solution anatomy requires ("measured against a holdout or baseline").

**Zetta today vs build.** Build: monitor node types + scheduled evaluation runs; store
already holds run history (the control-plane spine, item 06). Retrain triggers are
graph-native (a monitor node emits intent; the run+learn loop, R8-lite).

**Gate checks owned.** Monitors-wired check (a solution graph with no drift monitor and
no holdout fails the gate); holdout-integrity check (the do-not-treat slice actually
exists and is untouched); retrain provenance (champion/challenger comparison recorded).

### C10 — Index / retrieval layer

**What.** Full-text + vector + (later) graph indexes over store data; ANN (HNSW-class)
with metadata filtering and **ACL trimming at query time** — the e10 M17 §8
"security-critical stage." Powers M-9 outright, M-8's candidate retrieval, C2's
embedding blocking, and M-10's retrieval tools.

**Zetta today vs build.** The serving *route* exists (`/v1/indexes/{name}/search`);
engine-level indexing + tiered storage are the two "largest engine investment" items
(R4). This is why the document-intelligence/retrieval methodology family sits in
**W3** and not earlier — kernel D7.3's W3→R4 co-sequencing is load-bearing, not
prudential decoration.

**Gate checks owned.** Index-freshness vs source SLA; embedding-version stamping
(index and query encoders must match); filtered-recall audit; ACL-propagation check
(permission model changes must reach index filters before the graph re-passes).

---

## 3. Wave-by-wave build plans (elaborating kernel D2)

Each methodology entry follows one skeleton: **scope v1** (in/out) · **execution
graph** · **canonical choices** (with rationale from e10/e13 dossiers) · **gate
adaptations** (what the correctness gate enforces specifically for it) · **evaluation
harness** · **explainability surface** · **serving/monitoring** · **engine
dependencies** (R1–R8; buildable-today vs blocked) · **reuse ledger** (inherits vs
adds) · **definition of done**. The wave×engine dependency map first:

| Wave | Portfolio methodologies | Engine gate (kernel D7.3) | What "blocked" means concretely |
|---|---|---|---|
| **W1** | M-1 tabular supervised · M-2 entity resolution (thin) · M-3 segmentation | R1 (local run) + R2 (correctness gate) | Nothing blocked: batch worker execution + existing `/v1` serving suffice |
| **W2** | M-4 forecasting · M-5 anomaly detection · M-6 survival | R3 (one-button deploy) + R4-lite (materialization) | Recurring scheduled runs + deployed-target serving need R3; repeated window recompute needs materialized snapshots (R4-lite, defined in [Appendix A](#appendix-a--tensions-for-kernel-review) T5) |
| **W3** | M-7 causal/uplift · M-8 recommendation/NBA-lite · M-9 embeddings + retrieval / document intelligence | R4 (tiered storage/indexing) + R6 (governance) | M-9 and M-8 retrieval need engine indexes (C10); action-policy methodologies (M-7, M-8) need R6 approval gates before touching customer actions |
| **W4** | M-10 agentic + Auto-RL base model · M-11 optimization/OR pairing | R5 (compute-near-data) + R8 (learning loop) | Agent tool execution near data needs R5's sandbox; Auto-RL *is* R8's learning loop grown up |

### Wave 1 — the tabular spine (now)

Rationale (kernel D2): the dominant methodology + the gate + the cheapest adjacency.
W1 serves UC-1 (churn — Motive, live), UC-2 (lead scoring), UC-3 (CLV), UC-4
(collections), UC-7 (KPI drivers, M-1 half), UC-9 (email outbound scoring+segments).
Prevalence evidence: e10 §S3 tier 1 ("plurality of all predictive workloads"); e13
synthesis 3 rank 1. Everything in W1 runs on today's engine (R1) — the binding work is
the gate (R2), which the roadmap itself calls "the hard PM/eng problem."

#### M-1 — Tabular supervised (GBM + SHAP) — *the anchor; the churn pipeline*

**Scope v1.** *In:* binary/multiclass classification + regression on entity-level
tabular data; snapshot/label-window architecture; GBM training with tuned baseline GLM;
TreeSHAP driver reports + per-record reason codes; batch score write-back + online
`/v1` predict; drift monitoring + scheduled retrain. Quantile/Tweedie objectives
included (they're objective flags, not new stages). *Out (v1):* AutoML-style model
search (a tuning-budget preset, later); tabular deep learning / TabPFN-class (e10 M4 —
watch item; its ≤10–50k-row sweet spot matters for SMB data but adds a GPU serving
dependency we don't want in the reference implementation); multimodal fusion.

**Execution graph.** `connect(sources, profile) → clean(ER via M-2, validate) →
model[ label-spec compile → snapshot materialize → point-in-time featurize → split
(temporal OOT + grouped-by-entity) → train(GBM + GLM baseline) → tune(budgeted) →
explain(TreeSHAP) → evaluate(harness) ] → serve(batch score table | /v1 predict) →
monitor(PSI/KS, delayed-label, holdout)`. The gate runs between `evaluate` and
`serve` — this graph *is* the compendium's canonical arrangement (e10 M1 §5) expressed
in item 06's five stages, and it is deliberately the R1 skateboard's generalization:
the n8n churn import compiles to exactly this template.

**Canonical choices.** Training: **XGBoost as the default library** — ecosystem
maturity, exotic objectives (including `survival:cox`/AFT, which M-6 reuses), Apache-2.0
— with **LightGBM selectable for large-data speed** (leaf-wise growth; all top-5 M5
solutions; e10 M1 §6) and CatBoost deferred (its ordered-target-encoding advantage is
real for high-cardinality categoricals but a third library is catalog surface without
a demanding use case — reuse rule applied to dependencies). Always-run **regularized
logistic/GLM baseline** (e10 M1 §6, M2 §14): it is the honesty check, the regulated
fallback (SR 11-7 conversations in industry tier 1a expect it), and nearly free.
Tuning: Optuna-class Bayesian search, budget-capped, early stopping on temporal
validation. Explanation: **TreeSHAP** (exact, polynomial-time on trees; e10 M1 §6) —
not sampling-based SHAP variants. Rationale summary: the e10/e13 dossiers agree GBMs
remain SOTA on medium tabular data (Grinsztajn et al. 2022 line) at CPU-only cost —
"orders of magnitude below deep-learning methodologies" (e10 M1 §12), which is exactly
the cost profile an on-customer-infra product wants.

**Gate adaptations (M-1 profile).** The full §4 baseline tier plus: target-leakage
audit (feature-vs-label-definition cross-check; post-outcome field detection);
temporal-leakage check (window disjointness); >0.95-AUC investigation trigger;
survivorship check (population as-of history); censoring routing (incomplete label
windows → exclude or route to M-6); class-imbalance handling attestation (PR-AUC
reported; threshold chosen on business costs); calibration report mandatory.

**Evaluation harness.** Primary gate: **temporal OOT split** (train ≤ T, test T+1);
grouped CV by resolved entity within the training period. Metrics: ROC-AUC + PR-AUC,
Brier + reliability curve, lift/gains by decile, precision@k at the action capacity
(retention team seats, collector hours). Baselines: base rate, "predict last state,"
incumbent heuristic/model. Bootstrap CIs; segment/cohort slices. The fidelity number
shown to the customer is the OOT metric, never CV.

**Explainability surface.** Ranked driver list with direction; SHAP beeswarm +
dependence plots for top drivers; per-entity reason codes ("why 0.87"); segment-level
driver breakdown. This is the input to the solution layer's driver→action→owner map.

**Serving/monitoring.** Default: nightly/weekly batch score table with lineage; online
predict for CRM-triggered scoring. Monitors: input PSI/KS, score-distribution drift
(earliest warning, e10 M1 §16), delayed-label AUC tracking, null-rate alarms on feature
feeds (the "silent feature-pipeline breakage" killer), **persistent random holdout**
(the feedback-loop defense — treated customers stop churning and poison retrains
otherwise). Champion/challenger retrains.

**Engine dependencies.** R1+R2 only. Buildable end-to-end on today's engine with
worker-step compute; `/v1/models/{name}/predict` already serves. R3 turns it from
"runs locally" into "deployed on the customer target" — required for the Motive
production story but not for W1 completion. Nothing blocked.

**Reuse ledger.** *Inherits:* nothing — it seeds C1, C3, C4, C5, C6, C7, C8, C9.
*Adds:* the canonical versions of six components (e10 §S1: M1 owns ★ on extraction,
features, labeling, training, tuning, SHAP, supervised evaluation, batch serving,
drift monitoring). Every later methodology's ledger debits this one.

**Definition of done.** The churn reference (UC-1/S-1) compiles from intent *and* from
the n8n artifact to this template; passes the gate with all M-1 profile checks
green; OOT metrics beat both baselines with CIs; driver report renders; batch +
online serving live with monitors + holdout wired; a second use case (UC-2 lead
scoring) instantiates from the *same template* with **zero new component code** —
the reuse proof, which is the actual W1 exit criterion.

#### M-2 — Entity resolution (thin v1)

**Scope v1.** *In:* two-source customer/account resolution (CRM + billing is the
churn-adjacent shape); normalization/standardization; deterministic keys + Fellegi–
Sunter probabilistic scoring; persistent entity IDs + survivorship; match-evidence
waterfalls; human review band. *Out (v1):* embedding/LLM adjudication tiers (W3, needs
C10/M-9); real-time incremental linkage (W3); cross-source graph identity (W4-adjacent,
with graph features); privacy-preserving linkage.

**Execution graph.** `connect(sources) → clean[ normalize/standardize → block →
pair-score(FS weights | GBM pair classifier when labels accrue) → threshold(+review
band) → cluster → survivorship → persist entity IDs ] → serve(entity map table) →
monitor(match rates, cluster sizes, merge/split audits)`. It is the only W1 methodology
whose primary consumer is the *platform itself*: the gate's entity-consistency check
reads its output.

**Canonical choices.** **Splink-class Fellegi–Sunter with EM-estimated m/u weights**
(e10 M23 §6: "the unsupervised standard," public-sector-proven, MIT-licensed, runs on
DuckDB/Spark — trivially portable into worker steps); libpostal-class address
normalization; Jaro–Winkler/token similarity menus per field type; frequency-aware
weighting (rare-name evidence beats "John Smith"). GBM pair classifier (C5 reuse) once
review-band labels accumulate — the active-learning pattern without building an
annotation product. Rationale: unsupervised start (no customer has labeled pairs on day
one), explainable by construction (weight waterfalls), CPU-cheap.

**Gate adaptations.** Blocking-recall measurement wherever labeled pairs exist (missed
candidates are invisible errors — e10 M23 §8); cluster-size alarms + hub-record
detection (transitive over-merge is the catastrophic failure: wrong credit history on a
person); threshold asymmetry set on business costs (false merge ≫ false split for
finance-tier customers); ID-stability across runs.

**Evaluation harness.** Pairwise P/R/F1 on the labeled review band, stratified by
difficulty; cluster-level B-cubed; blocking recall separately; duplicate-rate reduction
as the customer-visible number.

**Explainability surface.** Per-merge evidence waterfall (which fields, what weight);
side-by-side record view in the review band; merge/split audit log (a regulatory
necessity in the KYC-adjacent tier-1a industries).

**Serving/monitoring.** Entity-map table consumed by every downstream graph; per-source
match-rate trends, cluster-size distribution drift, review-band volume, audit-sample
outcomes.

**Engine deps.** R1/R2 only; worker-executed. Nothing blocked.

**Reuse ledger.** *Inherits:* C1 extraction, C5 (pair classifier), C7 harness shape,
C9 monitors. *Adds:* C2 for everyone; the review-band/human-queue primitive (reused by
M-5 triage and M-9 corrections — e10 M23 §14); survivorship/golden-record logic.

**DoD.** Churn data resolves through it; the gate's entity-consistency check is
*driven by* its output on the reference solution; review band functioning; over-merge
alarms tested with injected duplicates; downstream M-1 features measurably deduplicated.

#### M-3 — Segmentation / clustering

**Scope v1.** *In:* entity segmentation on C3 aggregates (k-means/GMM) + HDBSCAN for
non-globular cases; stability validation; profile cards + naming workshop artifact;
segment tags written back as store columns *and* served as features to M-1. *Out:*
embedding-based clustering (needs C10/M-9 — the BERTopic-style composition lands in
W3), streaming segment refresh.

**Execution graph.** `connect → clean(ER) → model[ featurize(C3 aggregates, decision-
relevant only) → scale → cluster(k-means/GMM/HDBSCAN) → stability(bootstrap ARI) →
profile(per-cluster distinguishing features) → surrogate-explain(GBM predicts
membership → SHAP) ] → serve(segment tags) → monitor(drift, segment-mapping
continuity)`.

**Canonical choices.** k-means++ for large-n tabular; GMM when soft membership feeds
M-1; **HDBSCAN as the modern default where density varies** (+ a noise bucket — "not
everything must belong," e10 M13 §6). k selected jointly by silhouette/BIC/stability
*and* business tractability (an explicitly legitimate criterion, e10 M13 §8). The
**supervised-surrogate explanation trick** (train M-1 on cluster membership, read its
SHAP — e10 M13 §10) is the whole explainability story and pure C5/C6 reuse: this is
why M-3 is "cheap adjacency" (kernel D2) — it adds essentially one node type.

**Gate adaptations.** Cluster-existence validation before interpretation (stability
under resampling; Hopkins-style checks) — the gate refuses to ship segments that are
noise; standardization enforcement; outcome-exclusion check (segments must not be
built *on* the outcome you'll act on — else they're outcome bins wearing personas);
segment-ID continuity across refreshes (centroid matching; downstream automations key
on IDs).

**Evaluation harness.** Silhouette/DB/BIC internal; bootstrap ARI stability; the
decisive external test: segments discriminate on the business outcome (churn rate,
response rate) — "the only metric stakeholders feel" (e10 M13 §9).

**Explainability surface.** Profile cards (per-cluster means vs population, effect-
size-ranked distinguishing features), surrogate SHAP, sizes + value.

**Serving/monitoring.** Segment tags to CRM/CDP and as M-1 features; drift +
activation monitoring ("segments computed but nothing consumes them" is the documented
rot mode — measure activation, not refresh).

**Engine deps.** R1/R2. Nothing blocked.

**Reuse ledger.** *Inherits:* C1–C3, C5 (surrogate), C6, C7, C9 — nearly everything.
*Adds:* cluster node types, stability validator, profile-card renderer. The thinnest
methodology in the portfolio; exists in W1 because UC-9 (outbound = scoring +
segmentation) and the churn solution's segment-level driver views both want it now.

**DoD.** Segments on the churn reference discriminate OOT churn rates; stability
gate passes; segment tags flow into M-1 as features with measured (even if small)
lift; profile cards render; refresh continuity verified.

### Wave 2 — time, timing, and the unusual (next)

Rationale (kernel D2): unlocks forecast-to-action (UC-5/UC-6) + ops/finance families
(UC-7 full, UC-8 PdM) with heavy M-1 component reuse. Engine gate: **R3** (recurring
deployed execution — forecasts are useless as one-offs) + **R4-lite** (materialized
panel snapshots so nightly window recomputation doesn't re-query sources; see
Appendix A T5 for the proposed definition the kernel should ratify).

#### M-4 — Time-series forecasting (classical + GBM-global first; deep later)

**Scope v1.** *In:* the **two-tier design** the kernel names: (a) **classical
per-series** (ETS/auto-ARIMA/Theta; Croston-family for intermittent demand) for few/
short series and as the *mandatory baseline tier*; (b) **global LightGBM-on-lags**
("the M5 recipe") for many related series with covariates; probabilistic outputs
(quantiles) first-class; hierarchical reconciliation (MinT/bottom-up) as a
post-processor node. *Out (v1):* deep forecasters (DeepAR/N-HiTS/TFT — admitted later
when a paying use case demands covariate-heavy probabilistic depth; e10 M6 §6 puts
LightGBM first on accuracy-per-cost), TS foundation models (e10 M7: "benchmark-strong,
production-thin" — watch item for cold-start tiers).

**Execution graph.** `connect(panel assembly: series × time + static + known-future
covariates) → clean(calendar align, gap fill, outlier flag) → model[ (tier A)
per-series fit → residual diagnostics | (tier B) lag/window featurize(C3 variant) →
global GBM train → quantile heads ] → reconcile(hierarchy) → evaluate(rolling-origin)
→ serve(forecast tables + intervals) → monitor(FVA, bias, coverage)`.

**Canonical choices.** **statsforecast (Nixtla)** for tier A — fits millions of series
on one machine, CPU (e10 M5 §12), Apache-2.0; **LightGBM for tier B** — the M5
evidence is unambiguous (all top-5 solutions; >20% WRMSSE over the best statistical
benchmark) and it reuses C5 wholesale; **MinT reconciliation** so item/store forecasts
sum coherently (planner trust dies on incoherent rollups, e10 M6 §8). The
classical-vs-deep decision is made *for* v1 by the strongest fact in the forecasting
literature: only 7.5% of 5,507 M5 teams beat the tuned exponential-smoothing benchmark
(e10 M5 §9) — so the product's honest default is a strong cheap tier A, a
cross-learning tier B where series count justifies it, and *measured* FVA between them.

**Gate adaptations.** Rolling-origin/temporal splits only (random splits on series are
auto-rejected); train-window-only transforms (outlier/holiday adjustments, target
scaling — normalization leakage is the classic global-model bug); future-covariate
parity check (a promo covariate known-in-future at train time must have an operational
source at serve time, else the graph is rejected); lag-availability vs horizon
consistency (a lag-7 feature with a 28-day recursive horizon gets flagged); hierarchy
coherence check post-reconciliation; new-series cold-start routing (flagged, not
silently global-mean).

**Evaluation harness.** Rolling-origin, multiple origins; MASE/WRMSSE vs
**seasonal-naive and ETS baselines (mandatory)**; pinball loss + interval coverage for
quantiles; per-segment breakdowns (fast/slow movers, new/mature). FVA is both an
evaluation metric and the permanent monitor.

**Explainability surface.** Tier A: decomposition plots (trend/season/holiday) —
maximally stakeholder-legible; tier B: SHAP on lags/covariates ("what drove the dip")
+ counterfactual covariate scenarios ("forecast without the promotion") — which e10 M6
§10 notes is often the actual business deliverable.

**Serving/monitoring.** Scheduled (nightly/weekly) forecast tables with intervals —
this is what makes R3 the gate: recurring deployed runs on a customer target. Monitors:
FVA vs naive, rolling bias (systematic under-forecast of growing series), coverage,
segment drilldowns; stock-out/censored-demand flag where demand is truncated.

**Engine deps.** R3 (scheduled deployed execution) + R4-lite (materialized panel
snapshots). Buildable today for local/one-off runs; *blocked for production cadence*
until R3.

**Reuse ledger.** *Inherits:* C1, C3 (lag/window variant), C5 (LightGBM), C6 (SHAP),
C7 (rolling-origin extends the harness), C8/C9. *Adds:* series prep + calendar nodes,
per-series fit node, quantile heads, reconciliation post-processor, FVA monitor.
Feeds M-11 (forecasts are the "predict" in predict-then-optimize) and M-5 (residuals).

**DoD.** UC-5 demand forecasting reference passes the gate; tier B beats tier A on
FVA where series count supports it (and is *not shipped* where it doesn't — baseline
supremacy applied to ourselves); coherent hierarchy; intervals calibrated (coverage
within tolerance OOT); scheduled runs on a deployed target for two consecutive weeks
without manual touch.

#### M-5 — Anomaly detection

**Scope v1.** *In:* batch + micro-batch scoring of entities/metric-windows; Isolation
Forest + ECOD as defaults; forecast-residual anomalies over M-4 outputs (the UC-7 KPI
path); triage queue with per-alert explanations; alert-budget calibration; label
capture from investigations → graduation to supervised M-1 scoring. *Out (v1):*
true streaming/sub-second detection (needs R5-class in-node compute + streaming
features; W4-adjacent), adversarial fraud decisioning (kernel anti-portfolio for now —
fraud *triage* is T2).

**Execution graph.** `connect → clean(ER — behavioral history must be per-entity) →
model[ featurize(velocity, ratio-to-own-history, peer-normalized — C3 variants) →
fit(IForest/ECOD | residual-score from M-4) → calibrate(threshold = review budget) ]
→ serve(triage queue + alert explanations) → monitor(alert precision, investigator
hit-rate) → feedback(labels) → graduate(M-1 supervised, unsupervised layer retained)`.

**Canonical choices.** **Isolation Forest** as the tabular default (fast, few
assumptions) + **ECOD/COPOD** (parameter-free, strong ADBench performers) as the
second opinion; **PyOD** as the library umbrella (BSD-2). The design center comes from
ADBench's 57-algorithm finding: *no universal winner, and minimal supervision beats
unsupervised* (e10 M12 §6) — so the product's differentiator is not the detector, it's
the **feedback loop as infrastructure**: investigation outcomes are captured as labels
(C4) and the graph *graduates itself* to supervised scoring. That loop is also the
item 06 "run + learn" promise in its most concrete form.

**Gate adaptations.** Alert-budget check (alert rate must match declared investigator
capacity — a 0.1% rate on 10M events is 10k alerts/day and a dead queue); training-
contamination handling declared (robust fit or explicit contamination rate);
threshold calibrated on held-out *time*; seasonality-vs-anomaly check (deseasonalize
via M-4 residuals first for metric streams); below-threshold random sampling wired
(unbiased labels — else feedback bias corrupts graduation); ER precedence enforced.

**Evaluation harness.** Pre-label: injection studies (synthetic anomalies), stability,
expert top-k review sessions. Post-label: PR-AUC + precision@budget (never ROC-AUC at
extreme imbalance); detection latency for near-real-time paths; z-score/rule baseline
comparison ("often embarrassingly competitive" — shipped only if honestly beaten or
composed).

**Explainability surface.** Per-alert feature contributions ("which features made this
unusual" — mandatory for investigator trust, e10 M12 §10); peer-comparison view
(entity vs cohort); queue-level precision trends visible to the customer.

**Serving/monitoring.** Triage queue (reuses M-2's review-band primitive); monitors:
investigator hit-rate (the system is dead when they stop looking — the true health
metric), alert-volume drift, retrain cadence vs behavior drift.

**Engine deps.** R3 for scheduled scoring on deployed targets; R4-lite for cheap
velocity-window recompute. Batch v1 buildable today; streaming variant deferred.

**Reuse ledger.** *Inherits:* C1–C3, C5 (graduation), C7, C9; M-2's review band; M-4's
residuals. *Adds:* unsupervised fit nodes, budget calibrator, injection-study harness,
the label-graduation loop (which then serves M-1 and C4 everywhere — the "label
factory," e10 M12 §14).

**DoD.** UC-7 KPI anomaly + UC-8 PdM-assistive references pass the gate; alert budget
honored over a 4-week shadow run; investigator hit-rate ≥ agreed floor; at least one
graduation cycle executed (unsupervised → labels → supervised uplift measured).

#### M-6 — Survival / time-to-event (churn-timing upgrade)

**Scope v1.** *In:* **discrete-time hazard as the spine** — expand entities into
entity-period rows, fit the M-1 classifier on "event in this period?" — plus Cox PH
for hazard-ratio reporting where stakeholders want the clinical-grade artifact;
censoring-correct labeling; per-period risk curves + expected-time-to-event feeding
LTV (UC-3) and intervention timing. *Out (v1):* competing-risks models (DeepHit-class),
deep survival, time-varying-coefficient exotica — until a tiered use case demands them.

**Execution graph.** `connect → clean(ER) → model[ spell assembly(entry, event/censor
date, indicator) → label(duration + censor flag — the core correctness task) →
period-expand → featurize(C3 at entry + per-period) → train(M-1 GBM on periods | Cox)
→ evaluate(C-index, IPCW-Brier, horizon calibration) ] → serve(per-period risk +
survival curves) → monitor(cohort drift, censoring-pattern shifts)`.

**Canonical choices.** **Discrete-time GBM is the pragmatic enterprise favorite for a
reason** (e10 M8 §6): it reuses the *entire* M-1 stack (training, tuning, SHAP,
serving), handles time-varying covariates naturally, and outputs the per-period churn
probabilities retention programs actually schedule against. Cox via **lifelines**
(MIT) for hazard-ratio narratives; **avoid scikit-survival as a dependency — GPLv3**
(§6); XGBoost's native `survival:cox`/AFT objectives cover the gradient-boosted
survival path license-cleanly. Rationale: M-6 exists because M-1's fixed-window
framing mislabels censored entities — the classic churn error that biases risk
downward (e10 M8 §8) — and because *when* beats *whether* for intervention timing.

**Gate adaptations.** Censored-as-negative rejection (the gate's single most valuable
survival check — it catches the error in *M-1 graphs too* and routes them here);
informative-censoring review (censoring reasons examined — "data ends because customer
was acquired" is not random); immortal-time-bias check (entry alignment); post-entry
feature leakage (point-in-time at entry); proportional-hazards test when Cox output is
reported (Schoenfeld residuals; stratify on violation).

**Evaluation harness.** Harrell's C (Uno's under heavy censoring); time-dependent AUC
+ IPCW-Brier; **calibration of survival curves at business-relevant horizons** (30/60/
90-day for churn); Kaplan–Meier-by-segment baseline; temporal OOT cohorts.

**Explainability surface.** Hazard ratios ("1.8× the churn hazard") for the Cox view;
SHAP-per-period drivers for the GBM view; segment survival curves — the artifact
retention teams consume.

**Serving/monitoring.** Per-period risk tables; expected-time-to-event feed into UC-3
LTV; monitors: cohort drift (newer cohorts differ), censoring-pattern shifts (a
retention-policy change masquerades as a hazard change — e10 M8 §16).

**Engine deps.** R3 for cadence; period expansion multiplies rows (manageable; prune
post-event) — R4-lite helps. Buildable today for local validation.

**Reuse ledger.** *Inherits:* nearly all of M-1 (the discrete-time trick is the point),
C2, C3, C7. *Adds:* spell/censoring labeler (which upgrades C4 for everyone), period
expansion node, censoring-aware metrics in C7. The cheapest W2 item; its main cost is
the labeling rigor.

**DoD.** Churn reference upgraded: timing-aware risk beats fixed-window M-1 on
horizon-calibrated decisions for UC-1; censoring checks demonstrably catch a seeded
censored-as-negative graph; LTV (UC-3) consumes expected-time-to-event.

### Wave 3 — the action layer and the document family

Rationale (kernel D2): W3 turns *scores into policies* (M-7 upgrades every "score"
solution into an action policy; M-8 composes propensities into next-best-action) and
opens the byte-majority substrate (documents/text) that the tabular core doesn't touch
(e10 §S3's honesty note: the unstructured byte-majority is what the GenAI-era
methodologies industrialize). Engine gates: **R4** (tiered storage/indexing — C10 is
the substrate for M-9 and M-8 retrieval) + **R6** (governance — W3 methodologies
*touch customer actions and customer documents*, so identity scoping, audit, and
approval gates stop being roadmap and become prerequisites). Evidence 02/03's
closed-loop finding is the demand driver: the value is in prediction→action loops,
not prediction alone.

#### M-7 — Causal / uplift (the score→policy upgrade)

**Scope v1.** *In:* CATE/uplift estimation on experiment logs (gold path) with an
explicitly-flagged observational path (DML + sensitivity analysis, labeled as
assumption-carrying); X-learner/T-learner meta-learners over C5 GBMs + DML for
debiased effects; policy construction (treat top-uplift deciles under budget);
off-policy evaluation (IPS/DR) pre-launch; **experimental validation of the policy
itself as the evaluation-of-record**; persistent randomized holdout as a permanent
fixture. A thin experimentation capability ships *inside* M-7 v1 (assignment +
SRM checks + CUPED analysis) because e10 M9 is the evaluation-of-record for every
action methodology — we need enough of it to validate policies, not a full
experimentation platform. *Out (v1):* full experimentation-platform ambitions
(sequential testing, interleaving at scale), causal forests with per-x CIs
(admit on demand), bandit-adaptive targeting (W4-adjacent, M-26-class).

**Execution graph.** `connect(experiment logs | observational + propensity fields) →
clean(ER) → model[ pre-treatment-only featurize(C3 variant, enforced) → nuisance
models(C5) → CATE(meta-learner/DML) → evaluate(Qini/AUUC + OPE) → policy(top-τ under
budget → hand off to M-11 when constrained) ] → gate(+causal profile) → serve(policy
tables + holdout assignment) → validate(experiment: policy vs BAU) → monitor(holdout
incremental lift)`.

**Canonical choices.** **EconML (MIT) as the estimator library** with meta-learners +
DML; CausalML as a secondary reference implementation. X-learner where treatment arms
are unbalanced (the common enterprise case — most customers weren't treated);
**DML with cross-fitted C5 nuisance models** where confounding adjustment is needed,
because it reuses our GBM stack and yields valid inference (e10 M11 §6). The
S-learner's regularization-bias-toward-zero is a documented trap (e10 M11 §8) — not
the default. Rationale for W3 (not earlier): M-7 is "the most data-hungry tabular
methodology per unit of signal" (e10 M11 §11 — second-order differences need 10⁴–10⁵
per arm) *and* it presupposes deployed M-1 solutions generating treatment logs —
kernel open question 3's answer from engineering: uplift needs the logs that only
deployed W1 solutions produce.

**Gate adaptations (the causal profile).** Pre-treatment-only feature enforcement
(post-treatment covariates destroy the contrast — hard reject); data-provenance check
(experiment logs vs observational — observational paths *must* carry the
unconfoundedness disclaimer into the report; the gate stamps it); outcome-metric
rejection (a graph "evaluating" uplift with outcome AUC is rejected — AUC on Y is
irrelevant to τ ranking, e10 M11 §8); propensity-overlap check (trim/weight where
positivity fails); holdout-existence + holdout-integrity (the business will try to
treat everyone; the gate defends measurement); propensity logging schema-required for
anything the policy touches (enables all future off-policy work — e10 §S5.8).

**Evaluation harness.** Qini curves/AUUC vs random-targeting baseline;
uplift-by-decile; transformed-outcome loss for model selection; doubly-robust OPE as
the pre-launch estimate; **the decisive test is the M9-style experiment** (policy vs
business-as-usual, incremental outcome per unit spend). Fidelity reported as
incremental value with CIs, never as raw model metrics.

**Explainability surface.** SHAP on the CATE model ("what makes this customer
persuadable"); the four-quadrant persuadables/sure-things/lost-causes/do-not-disturbs
segmentation (the stakeholder lingua franca, e10 M11 §10); policy statements
("treat segments A, C while budget < X").

**Serving/monitoring.** Policy tables with logged propensities; holdout incremental
lift as the permanent monitor (raw outcome rates are explicitly *not* the health
metric); effect-drift tracking; confounding-creep watch as personalization compounds.

**Engine deps.** R6 (this is the first methodology whose output *is* an intervention
policy — approval gates + audit are prerequisites, kernel D7.5 shadow-first applies);
R4 for cheap repeated cohort scans. Estimators themselves are worker-step buildable
earlier — the *governance*, not the math, is the gate.

**Reuse ledger.** *Inherits:* C1–C3, C5 (nuisance models), C6, C7 (+causal metrics),
C9; M-1's features wholesale. *Adds:* treatment-log schema + propensity capture, CATE
node family, OPE evaluator (shared forward with M-8/M-10), holdout-management
primitive, the thin experiment-validation capability.

**DoD.** UC-1 retention upgraded from "who churns" to "who to save": a policy
validated by experiment shows positive incremental value vs BAU on the reference
partner; holdout defended for a full cycle; observational-path disclaimer machinery
demonstrated; M-11 handoff (budget-constrained targeting) exercised at least once.

#### M-8 — Recommendation / next-best-action-lite (propensity composition first)

**Scope v1.** *In:* the **propensity-composition tier**: per-offer/per-action M-1
propensity models + M-7 uplift where logs allow + business-rule policy layer +
calibration — i.e. NBA as *composition of components we already have* (the kernel's
"propensity composition first"). Mid-scale collaborative filtering (ALS/EASE) + GBM
ranker for catalog cases; leave-last-out/temporal interaction splits. *Out (v1):*
two-tower deep retrieval + large-scale ANN cascades (e10 M14 §12 calls the full
cascade "among the most infrastructure-heavy methodologies" — that scale of consumer
recsys is not our T1/T2 demand), sequence-aware models (SASRec-class), real-time
session personalization.

**Execution graph.** `connect(interaction events + offer catalog) → clean(ER) →
model[ event-time featurize → per-action propensity(C5) | ALS/EASE candidate gen →
rank(GBM) → calibrate → policy(rules: eligibility, frequency caps, fairness/contact
governance) ] → gate → serve(next-best-action feed | /v1 predict) →
monitor(engagement by cohort, coverage, calibration drift) → validate(experiment)`.

**Canonical choices.** **EASE + ALS (`implicit`, MIT)** as candidate generators — e10
M14 §6 flags EASE as the "embarrassingly effective linear baseline" and the honest
mid-scale start; **GBM ranker (C5 reuse)** over user×candidate features — "widespread
mid-scale" practice; **LambdaMART objective available via LightGBM/XGBoost natively**
when true ranking labels exist (the M15 pattern is M-1 with a group-aware loss — near-
free to expose). Exploration slice reserved from day one (a fixed random slice, not
yet a bandit) because logs without exploration can never be debiased later.

**Gate adaptations.** Temporal interaction splits (random splits leak future taste —
reject); position/exposure-bias disclosure (logs contain only what was shown; the gate
requires impression logging + flags propensity-less training data); feedback-loop
containment (exploration slice existence check; popularity-debiasing declared);
cold-start routing check; offline-metrics-only deploys rejected for action-wired
solutions (experiment validation required — the offline→online gap is "the field's
defining epistemic problem," e10 M14 §9); contact-policy/frequency-cap rules present.

**Evaluation harness.** Offline pre-screen: recall@k/NDCG@k on temporal holdout,
coverage/diversity, calibration; popularity-stratified slices. Online: experiment on
engagement + net value with guardrails. OPE where propensities exist (M-7's evaluator).

**Explainability surface.** Per-recommendation attributions from the GBM ranker
(SHAP); "because you…" nearest-neighbor rationales where CF is used; aggregate
exposure-transparency reports (what share of exposure each offer class gets).

**Serving/monitoring.** Batch NBA feeds into CRM/campaign tools (UC-9's outbound
composition: M-1 scores + M-3 segments + M-8 policy); `/v1` predict for triggered
decisions; monitors: engagement by cohort, coverage, calibration, exploration-slice
integrity.

**Engine deps.** R4 (ANN/index layer for candidate retrieval beyond linear models —
C10), R6 (customer-facing actions → approval gates + contact governance). The
propensity-composition tier is buildable on W2 infrastructure; the retrieval tier
waits for C10 — which is exactly why the kernel phrase is "NBA-lite."

**Reuse ledger.** *Inherits:* C1–C3, C5, C6, C7, C9; M-7's OPE + holdout machinery;
M-3 segments; M-2 identity. *Adds:* interaction-event schema, candidate-generation
nodes (ALS/EASE), ranking objective exposure, policy-rule layer (eligibility/caps —
reused by M-10's action governance), exposure logging.

**DoD.** UC-9 (outbound) served end-to-end by composition; one catalog-style
reference (cross-sell) with temporal-split offline metrics + experiment-validated
lift; exploration slice running; contact-governance rules enforced by the gate.

#### M-9 — Embeddings + retrieval / document intelligence (MCP-exposure gated)

**Scope v1.** *In:* the **retrieval substrate** — chunking, embedding, hybrid
(BM25 + dense + RRF) retrieval over C10 indexes with metadata filtering and **ACL
trimming**; golden-set retrieval evaluation; and the **document-intelligence shell** —
ingestion, OCR/text-layer recovery, LLM-prompted field extraction *inside a validation
harness* (schema rules, cross-field arithmetic, confidence-routed review), bounding-box
evidence. Together they open the finance/legal/insurance ops document family the
kernel names. *Out (v1):* full conversational RAG assistants (kernel anti-portfolio:
"LLM-copilot/RAG-only engagements" are a disqualifier as engagements — we ship
retrieval + extraction as *components inside solutions*, e.g. claims triage intake,
contract-field feeds into M-1 features); per-doc-type layout-model training (the
2024–2026 shift favors prompt+validate over per-template training, e10 M21 §6);
speech/vision families.

**Execution graph (retrieval).** `connect(corpus connectors) → clean(dedup, ACL
mapping) → model[ chunk(structure-aware) → embed(versioned encoder) ] → index(C10:
vector + lexical, metadata + ACL) → serve(/v1/indexes/{name}/search, hybrid + trimmed)
→ evaluate(golden set recall@k) → monitor(recall canaries, freshness, filtered-recall)`.
**(Document intelligence).** `connect(ingest) → model[ OCR/text-layer → classify/split
→ extract(LLM-prompted, null-when-absent) → normalize → validate(schema, arithmetic,
master-data lookups vs M-2 entities) ] → route(confidence: straight-through | review
band) → serve(structured records → M-1 features / systems of record) → monitor(STP
rate, per-field accuracy, exception aging)`.

**Canonical choices.** Hybrid retrieval as the non-negotiable default — BEIR's
finding that lexical catches identifiers dense misses (e10 M17 §6); HNSW-class ANN in
the engine (C10/R4 — this is engine work, not an external vector DB: the item 06
"substrate" promise names full-text/vector/graph indexes as Zetta-native); open
embedding families (BGE/GTE-class, Apache-2.0) with **embedding-version stamping**;
golden judgment set (~100+ queries) built *before* tuning anything (e10 §S5.4).
Extraction: multimodal-LLM prompting inside the validation shell, with the harness —
not the model — as the product (cross-field arithmetic catches most digit errors; e10
M21 §8); Tesseract/PaddleOCR for the OCR floor; review band reuses M-2/M-5's queue.

**Gate adaptations.** ACL-trimming check (the security-critical stage — permission
leakage through an index is a data breach, e10 M17 §8); embedding-version match;
index-freshness SLA; golden-set-existence requirement (no golden set, no retrieval
deploy); extraction: null-when-absent prompting attested (hallucinated fields),
validation-rule coverage per field, evidence-link (bounding box) required,
production-quality sample evaluation (not clean-scan benchmarks); PII handling in
review queues (masking; R6 identity scoping).

**Evaluation harness.** Retrieval: recall@k/MRR/NDCG on the golden set; per-query-type
slices; ANN-vs-exact recall audit; filtered-recall under production ACLs. Extraction:
per-field accuracy/F1 (exact + normalized), STP rate at an accuracy bar, review-time
per exception; in-house golden docs per type (50–200) decide deployment.

**Explainability surface.** Retrieval results *are* their own evidence (with source +
freshness); extraction: per-field bounding-box evidence + confidence — the
trust-building UI standard (e10 M21 §10).

**Serving/monitoring.** `/v1/indexes/{name}/search` (exists as a route today; the
engine index beneath it is R4); structured-record feeds; monitors: golden-set recall
canaries in CI, freshness lag, STP + per-source accuracy drilldowns, exception aging.

**⚠️ MCP boundary (item 07 governing convention).** Retrieval is the natural MCP
surface — "Zetta's MCP service is the voice of the platform" — but the One Orama rule
is explicit: **ask before integrating any functionality into that MCP server.** This
plan therefore ships M-9 on the `/v1` REST surface by default and files MCP exposure
of search/extraction tools as an explicit ask per solution. Recorded as Appendix A T1.

**Engine deps.** **R4 hard** (engine vector/full-text indexing + tiered storage — the
"largest engine investment," roadmap R4) + R6 (ACL/identity — index trimming without
real authn/authz is theater; also the zetta#759–#769 gate bites here hardest). Interim
worker-side FAISS/HNSW prototypes are allowed for design-partner validation but are
explicitly *not* the product path.

**Reuse ledger.** *Inherits:* C1, C4 (golden sets are labels — e10 §S1 note 3), C7
(golden-set harness extends it), C9; M-2 (master-data validation + review band), M-5
(confidence routing). *Adds:* C10 consumption patterns (chunking, embedding
versioning, hybrid fusion), the extraction-validation shell, evidence-linking,
PII-aware review queues. Feeds *back*: document-derived features into M-1 (claims
notes → triage features), embedding blocking into M-2, retrieval tools into M-10.

**DoD.** One document-family reference (insurance claims intake or contract
abstraction) live: golden-set retrieval metrics green on engine indexes; STP ≥ agreed
bar with review band; ACL trimming verified by adversarial test; extracted fields
consumed as M-1 features in a downstream solution; MCP exposure decision explicitly
asked-and-answered, not assumed.

### Wave 4 — the compounding moat

Rationale (kernel D2): the learning loop (R8) and compute-near-data (R5) turn the
catalog from a set of solutions into a system that improves itself. Admitted only
after governance + eval-harness maturity — the W4 methodologies act on the world
(agents) or command it (optimizers), so they inherit every prior gate plus the
strictest approval surfaces. Graph ML and vision stay opportunistic/partner-led per
the kernel ("not building… until a paying tiered use case demands them").

#### M-10 — Agentic (tool-calling agents + the Auto-RL base model)

**Scope v1.** *In:* (a) **workflow-first agents** — fixed workflows with LLM steps and
bounded tool use over Zetta surfaces (SQL capability, `/v1` predict, retrieval,
report rendering), least-privilege typed tools, approval checkpoints for anything
irreversible, full trace logging; (b) **the evaluation harness as co-equal
deliverable** — scenario suites with programmatic success checks, trace-based judging,
regression runs on every model/prompt/tool change (e10 M28 §5 names the harness
"load-bearing"); (c) **Auto-RL base model, staged** — §5 below. *Out (v1):* open-ended
autonomous agents; multi-agent architectures without measured benefit ("workflows
before agents," the consensus design guidance e10 M28 §6); write-access to customer
systems of record without human approval (kernel D7.5 shadow-first + D5 anti-portfolio
"autonomous high-stakes decisioning").

**Execution graph.** `connect(tool registry: typed tools over Zetta capabilities +
customer APIs, least-privilege credentials) → model[ orchestration(workflow | bounded
loop) → context(memory, retrieval via M-9) → act(tool calls, per-step validation,
budget/step caps) ] → gate(scenario-suite pass rate + safety profile) →
serve(assist-with-approval → bounded autonomy, staged) → monitor(live-sample success
rate, escalations, cost per task, injection detection)`. Note the structural novelty:
for M-10 the "model" being gated is a *policy over tools*, and the harness — not an
OOT metric — is the gate's evidence.

**Canonical choices.** Tool interface: typed tool schemas with documented failure
semantics (tool design quality dominates model choice at the margin, e10 M28 §5);
frontier models for hard open-ended steps, smaller fine-tuned models for narrow
high-volume steps (the M20-distillation pattern); τ-bench-style pass^k reliability
scoring; trace logs as the audit artifact. Every prior methodology becomes a tool: an
agent can call M-1's scorer, M-4's forecaster, M-11's optimizer — e10 M28 §14 calls
agents "the integration layer of the catalog," which is exactly the role the One Orama
suite assigns Zetta's MCP voice — **and therefore every MCP tool exposure is an
explicit ask first** (item 07; Appendix A T1).

**Gate adaptations.** Blast-radius profile (tool privilege inventory; irreversible
actions must carry approval gates — hard reject otherwise); scenario-suite floor
(pass rate ≥ the kernel's correctness floor on the declared suite before any
autonomy tier upgrade); injection posture (tool returns + retrieved content treated
as untrusted; privilege separation attested); budget/step caps present; version
pinning + regression evidence on every change (nondeterministic regressions are the
documented failure class); scope registry (agents may not act outside evaluated
territory without re-gating).

**Evaluation harness.** Scenario suites (dozens–hundreds of realistic tasks,
programmatic verification where possible) + trace-level judging (tool choice,
grounding, rule adherence) calibrated against human audit; cost/latency per completed
task; staged: shadow → assist-with-approval → bounded autonomy, each stage with its
own floor. Live: sampled-task success, escalation/approval rates, incident tracking.

**Explainability surface.** Full execution traces — "the agent-era audit log" —
inspectable per task; approval-gate presentations ("the agent wants to do X because
Y"); success-rate dashboards + incident reviews for stakeholders.

**Serving/monitoring.** Runs *on* the platform it serves (Zetta store holds traces,
scenario suites, tool registry); monitors as above + injection-attempt detection.

**Engine deps.** R5 (sandboxed compute-near-data is where agent tool execution wants
to live — user/agent code on the node, sandboxed, per roadmap R5) + R8 (the learning
loop: traces + outcomes feeding policy improvement); R6 mandatory (identity-scoped
tools). Workflow-first agents over existing `/v1` surfaces are buildable earlier for
internal use (UC-9 internal-first is the obvious sandbox — kernel open Q2).

**Reuse ledger.** *Inherits:* M-9 retrieval, all methodology endpoints as tools, C7
(harness discipline is "the LLM-era mirror of experiment culture"), M-7/M-8's OPE +
policy governance, M-2→C4's review primitives (approval queues). *Adds:* tool
registry + typed tool contracts, trace store + judging, scenario-suite registry,
autonomy staging machinery, reward/verifier specs (shared with Auto-RL).

**DoD (agentic shell).** One internal agent (Orama automating Orama — the catalog's
growth mechanism per item 07) in bounded-autonomy production with a passing scenario
suite, full traces, zero unapproved irreversible actions, and a regression harness
that has demonstrably caught at least one model/prompt-change regression. Auto-RL DoD
is staged separately in §5.

#### M-11 — Optimization / OR pairing (predict-then-optimize)

**Scope v1.** *In:* LP/MIP + CP-SAT solving over upstream predictions (M-4 forecasts,
M-1/M-7 scores/uplifts) with **quantile/scenario inputs, never point forecasts**;
planner-in-the-loop recommendation serving; constraint/master-data validation;
infeasibility explanations; re-solve cadence with plan-stability penalties. First
targets: UC-6 replenishment support (assistive), M-7 budget-constrained targeting,
collections capacity allocation (UC-4 upgrade). *Out (v1):* automated execution
without planner review (D7.5), decision-focused learning (SPO — research-to-early-
adopter, e10 M29 §6; watch item), simulation-optimization.

**Execution graph.** `connect(constraint/master data + upstream forecast/score
artifacts) → clean(constraint validation vs live data) → model[ formulate(variables,
objective, constraints — the requirements-engineering stage) → solve(time budget, gap
target) → validate(feasibility vs reality, planner review) → scenario/sensitivity
(robustness across forecast error) ] → gate → serve(annotated plan: diffs, binding
constraints, costs) → monitor(override rate, realized-vs-plan, solver health) →
feedback(realized outcomes)`.

**Canonical choices.** **OR-Tools CP-SAT (Apache-2.0)** for scheduling/assignment
shapes + **HiGHS (MIT)** for LP/MIP as the open default; commercial solver (Gurobi)
only when a customer instance demonstrably needs it (a per-deal licensing decision,
not a platform dependency — §6). Quantile inputs from M-4's probabilistic heads
(the reuse dividend: e10 M29 §7 — scenario generation from forecast distributions).
Rationale: OR predates ML in enterprises by decades and is the canonical "decision
layer" (e10 M29 §13) — the *product* novelty is the correctness pairing: the same
gate that validated the forecast validates that the plan consumed its uncertainty.

**Gate adaptations.** Point-forecast rejection for stochastic domains (a plan built on
the mean shatters on error — the gate requires quantile/scenario inputs or an explicit
deterministic waiver); constraint-data freshness check (infeasibility from stale
capacities); unit/dimension sanity on objective coefficients; optimality-gap
disclosure (metaheuristic/timeout solutions must carry their gap); prediction–decision
interface check (upstream model evaluated on decision-relevant slices, not just
aggregate accuracy); double-counting check when uplift feeds allocation (consistent
counterfactual accounting, e10 M29 §8).

**Evaluation harness.** Objective value + gap; **realized-outcome vs incumbent
planning** in shadow runs, then regional/geo experiments where feasible; robustness
across forecast-error scenarios; plan-stability across re-solves; **override rate as a
first-class metric** (high overrides = missing constraints — e10 M29 §9).

**Explainability surface.** Binding-constraint narrative ("capacity at DC-3 is the
bottleneck") + shadow prices — "genuinely decision-relevant explanations unique to
this family"; plan diffs vs previous; IIS infeasibility explanations. Planners get an
annotated plan, not a black-box schedule.

**Serving/monitoring.** Recommended plans into planner workflows (assistive, per
kernel UC-6 framing); monitors: override rates, realized-vs-planned gaps, upstream FVA
propagation, solver time/infeasibility alarms, constraint-review cadence.

**Engine deps.** R5 (solver as near-data compute; interim: worker-step solvers — fully
functional) + R8 (realized-outcome feedback loop). The governance load is lower than
M-10's (plans are reviewed by construction), which is why M-11 is the tractable half
of W4.

**Reuse ledger.** *Inherits:* M-4 quantile forecasts, M-1/M-7 scores/uplift, C1
(constraint/master data through the same profiled connectors), C7 (shadow-run
evaluation), C9, M-2 (master-data integrity). *Adds:* formulation node family, solver
integration + budgets, scenario machinery (shared with M-4's probabilistic outputs),
plan-diff/duals explainers, override telemetry.

**DoD.** UC-6 replenishment-support reference in shadow: plans beat incumbent
planning on realized outcomes over a full cycle; override rate below the agreed
ceiling *and* every override analyzed; robustness demonstrated across forecast-error
scenarios; zero automated executions (assistive by definition of done, not just
policy).

---

## 4. The correctness gate as architecture

The gate is the product's differentiation made executable (item 06: "Generating a
workflow is easy. Generating a correct one is the product"; roadmap R2: without it,
"Intelligence Velocity is just *fast wrong answers*"). Architecturally it is **a
compiler pass over the execution graph plus an evidence evaluator over harness
results**, not a linter and not a checklist document.

### 4.1 Mechanics

1. **Every check is a typed rule bound to node types.** A `featurize` node carries
   point-in-time obligations; a `train` node carries split + baseline obligations; a
   `serve` node carries parity + monitoring obligations. Methodology templates
   (§3) bundle rules into **gate profiles**; a solution graph inherits the union of the
   profiles of the templates it composes.
2. **Three check tiers.** *Static* (graph-shape and metadata: label spec present,
   windows disjoint, holdout node exists, approval gate present on irreversible
   actions) — run at compile time. *Data-dependent* (profile-driven: schema type-check
   vs live sources, distribution assertions, ER cluster alarms, censoring audit) — run
   against source profiles and samples. *Empirical* (harness-driven: OOT metrics vs
   baselines and floors, calibration, stability, scenario-suite pass rates) — run as
   evaluation jobs whose artifacts the gate reads.
3. **Block-with-reason is a contract.** A failed gate emits a structured verdict:
   the failed rule, the node(s) implicated, the evidence (numbers, samples), and where
   known the remediation ("feature `days_since_close` references a post-outcome field;
   remove or re-derive as-of snapshot"). Verdicts are stored with the graph's lineage
   in the Zetta store — the same audit surface R6 governs. "Gaps are surfaced as gaps,
   not papered over" (item 06).
4. **Severity: reject vs waiver.** Hard rules (leakage, censored-as-negative, missing
   ACL trimming, missing approval gate) cannot be waived. Soft rules (baseline margin,
   calibration tolerance) can be waived only by an identity-scoped, audited waiver that
   appears in the deploy record — governance-visible, never silent.
5. **The gate is versioned and self-tested.** Gate rules ship with seeded-bug fixtures
   (a deliberately leaky graph, a censored-as-negative graph, an over-merged entity
   set); a gate release that fails to catch its fixtures does not ship. The gate's own
   false-negative rate is an engineering metric (§8).

### 4.2 Consolidated check catalog (per methodology)

The union of e10 §S5's twelve disciplines and e13 synthesis 5's failure→safeguard
table, allocated to portfolio methodologies. ✔ = enforced in that methodology's gate
profile; (w) = waivable with audited justification.

| Check (owner component) | M-1 | M-2 | M-3 | M-4 | M-5 | M-6 | M-7 | M-8 | M-9 | M-10 | M-11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Schema type-check vs live profile (C1) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Point-in-time / as-of enforcement (C3) | ✔ | — | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | — | — | ✔ |
| Target-leakage audit + high-metric alarm (C3/C5) | ✔ | — | — | ✔ | ✔ | ✔ | ✔ | ✔ | — | — | — |
| Split integrity: temporal + grouped + dedup (C7) | ✔ | ✔ | — | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | — | — |
| Label-spec presence + censoring rigor (C4) | ✔ | — | — | — | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | — |
| Train/serve parity via feature registry (C3/C8) | ✔ | — | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | — | — |
| Baseline supremacy (C7) | ✔ | ✔ | (w) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Entity-consistency / ER precedence (C2) | ✔ | ✔ | ✔ | — | ✔ | ✔ | ✔ | ✔ | ✔ | — | ✔ |
| Causal honesty: pre-treatment only, provenance stamp (M-7) | — | — | — | — | — | — | ✔ | ✔ | — | ✔ | ✔ |
| Feedback-loop containment: holdout/exploration/propensities (C9) | ✔ | — | — | — | ✔ | ✔ | ✔ | ✔ | — | ✔ | — |
| Slice/segment evaluation + calibration (C7) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Monitors + retrain governance wired (C9) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Alert/review-budget vs human capacity (C9) | — | ✔ | — | — | ✔ | — | — | — | ✔ | ✔ | ✔ |
| ACL trimming + PII handling (C10/R6) | — | ✔ | — | — | — | — | — | — | ✔ | ✔ | — |
| Approval gate on irreversible/externally-visible actions (R6) | — | — | — | — | — | — | ✔ | ✔ | — | ✔ | ✔ |
| Uncertainty consumed downstream (quantiles/scenarios) (C7) | — | — | — | ✔ | — | — | — | — | — | — | ✔ |
| Version pinning + regression evidence (C7) | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Scenario-suite floor + blast-radius profile (M-10) | — | — | — | — | — | — | — | — | — | ✔ | — |

Reading it column-wise gives each methodology's gate profile; reading it row-wise
gives each component team its obligations. The matrix is the *contract* between this
document and 04-solutions-catalog: a solution's definition of done (kernel D4) includes
"passed the correctness gate," and this is what "passed" means for its methodology mix.

### 4.3 The floor

Kernel D7.2: **≥90% on the evaluated task set before self-service deploy ships to
non-engineers.** Engineering interpretation (proposed; Appendix A T3): the floor
applies **per methodology template, on its declared harness**, measured as the share
of gated evaluation tasks the compiled graph passes — not pooled across methodologies
(pooling lets a strong M-1 subsidize a weak M-4). Until a template's floor holds,
its solutions ship expert-in-the-loop only.

---

## 5. The Auto-RL base model strategy (M-10's strategic core)

**What it is.** One Orama catalog **#3** (item 07): "Zetta's own agentic RL base model
— the model that anchors every other use case (and is a use case in its own right)."
The personalized-intelligence thesis (item 08) gives it its job description: **Auto-RL
auto-trains a long-horizon, tool-calling agent on the customer's data**, so the agent
"arrives already fluent in the customer's systems" — attacking "trained on your own
data," the hard part where "most AI projects quietly fail," with AI rather than a
brittle hand-coded harness.

**Why it anchors the catalog.** Three compounding reasons. (1) *Product:* it is the
"learning, not inference" differentiator (item 06 §03) pushed from pipelines to the
agent itself — every deployed solution generates traces, outcomes, and corrections;
Auto-RL is the mechanism that converts that exhaust into capability, which is R8's
learning loop with a concrete engineering shape. (2) *Portfolio:* Auto-Suggest (the
sibling feature) proposes use cases from the customer's data — feeding the kernel's
use-case-first growth loop with generated demand; the suggestions "define the tasks
the agent is trained to perform" (item 08), so catalog growth and agent capability are
the same flywheel. (3) *Moat:* per-customer trained agents are non-portable by
construction (customer owns data + weights per kernel D6's IP split; we own the
harness + generalized learnings) — the compounding asset competitors renting frontier
inference cannot replicate.

**Staged approach.** The evidence is sober about offline/long-horizon RL: e10 M27 §13
splits the verdict — enterprise-operations RL is *emerging* and "most enterprises
correctly stop at bandits," while the post-training branch (RLHF/DPO/RLVR) is
*mainstream inside model providers*. We are becoming a model provider for our
customers' agents, so we stage along that gradient:

- **Stage A — harness before learning (with W1–W2).** Scenario suites, verifiers, and
  reward specs for the churn-family tasks; trace + outcome logging as schema-level
  requirements (propensities and decisions stamped — e10 §S5.8 — because logs without
  them can never train a policy later). Deliverable: the *evaluation* half of Auto-RL,
  which the item 08 open questions call out as the unsolved eval-gate for a trained
  agent. No RL yet.
- **Stage B — supervised fluency (with W3).** SFT/distillation on curated traces of
  expert-validated task completions over the customer's systems (M20-class methods,
  single-node feasible); the agent learns the customer's schemas, tools, and
  procedures. Gate: scenario-suite floor + safety regressions.
- **Stage C — preference/verifier optimization (early W4).** DPO-first on preference
  pairs from review outcomes and verifier signals (RLVR-style where checks are
  programmatic — the cheap-verification domains lead, as coding agents did). Guarded
  by reward red-teaming (reward hacking is "the default outcome of sloppy rewards,"
  e10 M27 §7) and KL-anchored conservatism.
- **Stage D — long-horizon RL (full W4, R5+R8 mature).** On-node training over
  tool-use trajectories with OPE + staged rollout (shadow → constrained pilot →
  expansion with kill-switches). Only where Stage C measurably plateaus; the e10 M27
  pragmatic hierarchy ("exhaust experiments/bandits/optimization first") is our
  admission rule, mirrored from the kernel's own reuse rule.

**Cost posture.** Long-horizon RL per customer is expensive (item 08 open question);
the staging is also the cost answer — A/B are cheap, C is single-node-class, D is
gated on R4/R5 economics (tiered storage + compute-near-data are precisely the
"transformational cost" substrate the one-pager claims). D does not start on rented
GPU economics.

**MCP relationship.** The natural end state is the trained agent speaking through
**Personalized MCP** (item 08: the endpoint "shapes its tools and responses to that
user"). The One Orama convention is unambiguous — MCP is the voice of the platform and
**we must ask before integrating functionality into it**. The Auto-RL plan therefore
treats each MCP-surface addition (serving a trained agent, personalizing tool shapes,
exposing methodology tools) as a per-item ask to the platform owner, sequenced with
R6 identity scoping (per-user personalization without per-user identity is
incoherent). Appendix A T1/T2.

**Definition of done (per stage).** A: harness catches seeded misbehavior; 100% of
agent-relevant solutions log decisions with propensities. B: SFT agent beats the
prompted-frontier baseline on the customer scenario suite (the honest baseline per
e10 M20/M35 discipline). C: DPO agent beats B with zero safety-regression failures.
D: OPE-bounded improvement confirmed in shadow before any autonomy expansion, kill
criteria pre-registered.

---

## 6. Build-vs-integrate decisions

Policy: **integrate the numerics, build the correctness.** OSS ML libraries are
mature, CPU-cheap, and license-clean at the layers we need; nothing in the compendia
suggests we would out-implement XGBoost or HiGHS. What no one sells — and what the
kernel says is where value is won or lost — is the correct-by-construction layer:
the gate, the point-in-time feature layer, the graph compiler, the lineage. We build
those. Worker-step execution (§1) is the integration seam: OSS runs in sandboxed,
pinned, checksummed step images; the graph, gate, and store never depend on Python.

| Capability | Decision | Choice + license | Notes |
|---|---|---|---|
| Graph compiler + templates | **Build** | — | The product. Intent/artifact → graph is R1's core; nothing to buy. |
| Correctness gate (§4) | **Build** | — | The differentiation (roadmap R2 "the hard PM/eng problem"). Great-Expectations-class assertion ideas absorbed as rule patterns, not as a dependency. |
| Point-in-time feature layer (C3) | **Build** | — | Feature stores (Feast-class) bolt this onto foreign stores; ours is native to the store that holds the data. The single highest-leverage correctness asset. |
| ER (C2/M-2) | **Integrate → absorb** | Splink (MIT), libpostal (MIT) | Splink-class FS engine inside worker steps now; native store-resident incremental ER later. **Avoid Zingg (AGPL).** |
| GBM training (C5) | **Integrate** | XGBoost (Apache-2.0) default; LightGBM (MIT) for scale | Both; CatBoost deferred. Survival objectives via XGBoost — **avoids scikit-survival (GPLv3)**; lifelines (MIT) for Cox reporting. |
| Tuning | Integrate | Optuna (MIT) | Budget-capped wrapper is ours. |
| Explanation | Integrate | shap (MIT) | TreeSHAP path only in v1. |
| Classical forecasting | Integrate | statsforecast/mlforecast/hierarchicalforecast (Nixtla, Apache-2.0) | Millions of series, CPU. Prophet (MIT) not a dependency — ETS/ARIMA/Theta cover it (e10 M5 §6: frequently beaten by ETS/ARIMA). |
| Anomaly detection | Integrate | PyOD (BSD-2), scikit-learn (BSD-3) | IForest/ECOD/LOF. River (BSD-3) later for streaming. |
| Clustering | Integrate | scikit-learn (BSD-3), hdbscan (BSD-3) | |
| Causal/uplift | Integrate | EconML (MIT) primary; CausalML (Apache-2.0) reference | OPE evaluators built on their estimators; holdout machinery is ours. |
| Recsys candidate gen | Integrate | implicit (MIT); EASE is ~20 lines on our stack | Two-tower/ANN cascade deferred with C10. |
| Embeddings | Integrate | BGE/GTE-class open encoders (Apache-2.0/MIT); sentence-transformers (Apache-2.0) tooling | Version-stamped; commercial APIs disallowed by default (data egress vs the no-egress promise). |
| ANN / vector index | **Build (engine, R4)** | HNSW algorithm; interim FAISS (MIT)/hnswlib (Apache-2.0) in workers | Zetta-native indexes are the item 06 substrate promise; external vector DBs contradict "nothing but Zetta" (item 07). |
| OCR / doc parsing | Integrate | Tesseract (Apache-2.0), PaddleOCR (Apache-2.0) | Cloud OCR APIs off by default (egress). Extraction-validation shell is ours. |
| LLM inference (M-9/M-10) | Integrate, customer-controlled | Open-weight models in-environment; provider APIs only with explicit customer consent | Egress + governance dominate the choice; pinning + regression required by the gate either way. |
| Post-training (Auto-RL B/C) | Integrate | TRL/OpenRLHF-class (Apache-2.0) | Harness, verifiers, reward specs are ours (the moat). |
| Optimization | Integrate | OR-Tools CP-SAT (Apache-2.0), HiGHS (MIT) | Gurobi/CPLEX per-deal only — commercial licenses never a platform assumption. |
| Experiment analysis (M-7 thin) | Build-thin | statsmodels/scipy (BSD-3) underneath | Assignment + SRM + CUPED only; not an experimentation platform. |
| Drift monitoring | Build on C9 | (Evidently is Apache-2.0 if we want reference behavior) | PSI/KS + delayed-label dashboards native to the store's run history. |

**License red-lines.** No GPL/AGPL in anything we ship into a customer environment
(scikit-survival GPLv3 and Zingg AGPL are the two near-misses already caught);
Apache-2.0/MIT/BSD only in step images; per-image SBOM + license manifest generated at
build, reviewed at gate time (a step image with an unvetted license fails the deploy —
a *governance* gate check, R6-adjacent). Model weights carry their own licenses
(open-weight LLMs vary — reviewed per model, recorded in the registry).

---

## 7. Security & governance engineering

**The hard blocker.** Kernel D7.1, restated as an engineering fact: the authn/authz
system shipped (zetta#743) but the security review filed **11 exploitable gaps —
zetta#759–#769, all open** — auth off by default on network-facing nodes; a read-only
user able to mint an owner token / drop tables; RLS failing open; replicated identity
trusted without proof of origin; column-mask bypass (item 07). Consequences this plan
enforces: **no production enterprise deployment of any methodology while those issues
are open**; `--require-auth` is necessary, not sufficient; design-partner work runs in
isolated environments on non-production data postures until the gate clears. The
security gate is *prior to* the correctness gate — a graph cannot be "correct" on an
engine that can't hold its permissions.

**Identity-scoped everything (R6).** The product promise is governed self-service
(item 06: SSO-scoped access "a tailored view per user, not a shared service account";
start key-scoped per the June 23 V1 decision, graduate to tiers). Engineering
consequences per component: C1 connectors hold least-privilege credentials in the
store's secret handling; C3/C8 serve features and scores under the caller's identity;
C10 trims indexes at query time (§3 M-9 — the leakage class unique to retrieval);
M-10 tools execute under scoped credentials with per-tool privilege inventories.

**Audit as a store property.** Every graph change, gate verdict, waiver, deploy,
data access, review-band decision, and agent action writes to the audit surface the
engine already scaffolds (`audit/` in the data dir; R6 makes it a governed API).
Lineage (item 06 "answers with lineage") and audit are the same substrate read two
ways.

**Approval gates per methodology risk class.** Mapped to the kernel's
low-liability-first principle (D9.3) and shadow-production rule (D7.5):

| Risk class | Methodologies (typical) | Human involvement floor |
|---|---|---|
| **Read-only intelligence** (reports, scores consumed by analysts) | M-1, M-3, M-4, M-6, M-9-retrieval | Gate + monitors; no per-action approval |
| **Triage** (routes human attention) | M-5, M-9-extraction review bands, M-2 review band | Review-band capacity honored; below-threshold sampling |
| **Action-recommending** (touches customers/ops via humans) | M-7 policies, M-8 NBA, M-11 plans | Shadow first; named owner approves activation; holdout preserved |
| **Action-taking** (writes to external systems) | M-10 agents | Approval checkpoint per irreversible action; bounded autonomy only after scenario-suite floor + incident-free assist period |

Risk class is declared in the graph metadata and *checked* by the gate (an M-8 graph
wired directly to a send-email tool without the approval node is rejected — the same
mechanism as every other block-with-reason).

**Data residency.** No methodology step egresses customer data: step images run
in-environment; embedding/LLM calls to external APIs are off by default (§6);
telemetry exported to us is metadata-only (metrics, verdicts), never rows.

---

## 8. Engineering metrics (elaborating kernel D8)

The kernel's D8 metrics, given owners and instrumentation. All are computable from
the store's run history + gate verdicts — the platform measures itself with the same
lineage it sells.

| Metric (kernel D8) | Engineering definition | Instrumentation | Target/floor |
|---|---|---|---|
| **Intelligence Velocity** (primary) | Median wall-clock from intent/artifact ingestion → gate-passed graph running on the target, **decomposed per stage-span**: connect → clean → model → index → serve, plus gate latency and deploy latency as first-class spans | Span events on every graph node run; stage spans rolled up per solution | Minutes–hours for W1 templates on reference data; tracked per template |
| Correctness-gate pass rate | Share of compiled graphs passing the gate on first evaluation, per template; plus the ≥90% floor of D7.2 (§4.3 interpretation) | Gate verdict records | ≥90% floor before self-service (per template); first-pass rate tracked as a compiler-quality signal, not maximized (a 100% first-pass gate is a gate that checks nothing) |
| Generated-graph incident rate | Production incidents attributable to a generated graph (wrong answer, pipeline breakage, governance event) per graph-month | Incident registry linked to graph lineage | Trends to zero; every incident becomes a gate rule or fixture (§4.1.5) |
| Deploy reliability | Deploy success rate + mean time to Ready per target class; rollback success rate | R3 deploy records; operator conditions | One reference architecture per environment class proven (D7.4) before widening |
| Gate false-negative rate | Seeded-bug fixtures caught / total (per release); incidents that a gate rule *should* have caught | Gate self-test suite (§4.1.5) + incident postmortems | 100% fixture catch to ship; postmortem-derived rules land within one release |
| Monitoring coverage | Share of deployed solutions with drift monitors + holdout/exploration slice live and reporting | C9 registry | 100% (gate-enforced — it cannot drift below by construction) |
| Governance violations | Unauthorized access, egress, unapproved action, waiver misuse | Audit surface (R6) | **0** (kernel guardrail); any violation halts the risk class pending review |
| Reuse ratio (portfolio health) | New-component code per additional solution shipped (should fall wave over wave); % of a new solution's graph nodes drawn from existing components | Template/component registry | The W1 exit criterion generalized: UC-2 from UC-1 with zero new component code; measured every wave |

The reuse ratio is the engineering mirror of the kernel's strategic equation and the
one metric this document adds beyond D8 — proposed for kernel adoption (Appendix A T6).

---

## Appendix A — Tensions for kernel review

Recorded per the kernel's rule: elaborations don't contradict; genuine tensions go
here and are resolved in the kernel first.

- **T1 — "MCP-native" (D2, W3 row) vs the MCP-as-voice ask-first convention (item
  07).** The kernel describes M-9 as "MCP-native" and W4's agent story naturally wants
  MCP tools, but the One Orama governing convention requires asking before integrating
  *any* functionality into Zetta's MCP server. This document ships M-9/M-10 on the
  `/v1` REST surface by default and files each MCP exposure as an explicit per-item
  ask. Kernel should either ratify that reading or pre-authorize a scoped MCP surface
  for methodology tools.
- **T2 — Personalized MCP presupposes R6 identity.** Item 08's Personalized MCP
  (per-user tool shaping) is incoherent before per-user identity scoping exists
  (zetta#759–#769 + R6). Proposed: kernel notes Personalized MCP as R6-gated so the
  marketing surface and the engine sequence can't diverge.
- **T3 — The ≥90% floor needs a unit.** D7.2 says "≥90% on the evaluated task set."
  Proposed interpretation (§4.3): per methodology template on its declared harness,
  not pooled across templates. Needs kernel ratification because it changes when
  self-service unlocks per wave.
- **T4 — Auto-RL vs the reuse rule and the anti-portfolio.** D3's admission rule
  (≥3 tiered use cases) and the "not building bespoke deep-learning research" default
  don't obviously admit the Auto-RL base model — it is admitted as a strategic anchor
  (D9.6, item 07 catalog #3) rather than by reuse arithmetic. This document stages it
  (§5) so the expensive part (Stage D) waits for R5/R8 economics, but the kernel
  should record the exception explicitly so the anti-portfolio line stays credible.
- **T5 — "R4-lite" is undefined in the roadmap.** D7.3 gates W2 on "R3 + R4-lite,"
  but item 08 defines only R4. Proposed definition for kernel adoption: *R4-lite =
  scheduled materialization of source snapshots and feature/panel tables into the
  store, without tiered aging/re-warming or engine-level indexing* — sufficient for
  M-4/M-5/M-6 cadence, deliberately short of the R4 engine bet.
- **T6 — Metrics addition.** Propose adding the **reuse ratio** (§8) to D8 as a
  supporting metric; it is the direct measurement of the thesis D8 currently tracks
  only by proxy.
- **T7 — M-6 pull-forward option (timing, not contradiction).** Discrete-time
  survival is nearly free once M-1 exists (§3 M-6 reuse ledger), and the
  censored-as-negative gate check protects even W1 churn graphs. If UC-1's partner
  needs timing-aware retention earlier than W2, the kernel can pull M-6 into late W1
  at ~zero engine cost (R3 unaffected). Related to kernel open question 3's shape.
