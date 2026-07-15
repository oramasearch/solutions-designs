# Methodology portfolio — the agent's complete toolbox

> **Status:** v2 — 2026-07-15 · **Author:** CTO (combined executive team) ·
> **⚠️ Internal-confidential** · Elaborates **kernel v2** (future state · no
> sequencing · ROI-central · Auto-RL-central).
>
> **Kernel-binding.** This document elaborates the
> [strategy kernel](00-strategy-kernel.md) — specifically **D2 (Auto-RL at the
> center)**, **D5 (the complete toolbox)**, and **D7 (data → agents → ROI)**, with
> supporting detail for D9 (metrics) — and **must not contradict it**. Genuine
> tensions are recorded in [Appendix A](#appendix-a--tensions-for-kernel-review)
> and resolve in the kernel first, per the kernel's own rule.
>
> **Future-state analysis only (kernel D10.1–D10.2).** Everything below describes
> the architecture as it **will exist**: the complete Zetta engine as promised
> (evidence 06 — adaptive database, compute-near-data, tiered storage, the
> correctness gate, governed self-serve, true hybrid) with the Auto-RL agent at its
> center (evidence 07/08). There is no build order, no phasing, and no dependency
> sequencing in this document; the portfolio is scored (D1), not scheduled. Every
> methodology is described as **present, productized, and agent-invocable.**
>
> Evidence citations use the item numbers in [`../evidence/`](../evidence/);
> dossier IDs are cited as **e10 M#** (internal compendium, item 10) and **e13
> M##** (external Deep Research compendium, item 13). Portfolio methodology IDs
> `M-1`…`M-21` follow kernel D5's list and are distinct from the compendia's
> dossier numbering. Component IDs are `C-1`…`C-11`. Use-case references follow
> kernel D4's ROI bands (Band A / Band B / Band C), elaborated in
> [`02-use-case-portfolio.md`](02-use-case-portfolio.md).

---

## 1. Engineering thesis v2 — the agent composing methodology tools over the complete engine

**The center of the architecture is the agent.** In the future state, every
customer runs a **long-horizon, tool-calling agent post-trained on their own data
with reinforcement learning** (Auto-RL — evidence 06 §04, 08). The agent's action
space is the use-case catalog (kernel D4); its **tools are the methodology
templates in this document** (kernel D2.2); its substrate is the complete Zetta
engine; its interface to humans and to other agents is **Personalized MCP**. A
solution (kernel D6) is what the agent produces and operates: a methodology
composition, applied correctly for the customer's real conditions, wired to a
named business action, with a measurement loop whose output is the ROI number the
customer pays against (D8).

**What a methodology is, architecturally.** Per the
[vocabulary](../vocabulary.md), a methodology is the arranged AI methods,
described apart from any one deployment. In the future-state architecture that
abstraction is concrete: **a methodology is a parameterized execution-graph
template exposed to the agent as a typed, governed tool.** Each template ships
five inseparable artifacts:

1. **The subgraph template** — the canonical node arrangement (e.g. `connect →
   clean(ER) → featurize(point-in-time) → train(GBM) → explain(SHAP) → evaluate →
   serve → monitor`) with a typed parameter surface: source schemas, an entity
   definition, a label spec, a horizon, an action binding.
2. **The gate profile** — the machine-checkable correctness obligations the
   template carries. The correctness gate (§5) runs them against every compiled
   graph — human-authored, generated from intent, or **agent-initiated** — and
   blocks deploy with a stated reason on failure (evidence 06: "blocked, with a
   reason, if it does not [pass]").
3. **The evaluation harness** — metrics, split scheme, mandatory baselines, and
   floors. Its outputs are simultaneously (a) the gate's empirical evidence, (b)
   the fidelity numbers the customer sees, and (c) **reward and eval signal for
   the agent** (§2.3).
4. **The tool contract** — the MCP/tool-schema through which the agent (and the
   customer's own agents) invoke the template: typed inputs, typed outputs,
   declared failure semantics, privilege requirements, and its **autonomy class**
   (§2.6). Tool design quality dominates model choice at the margin (e10 M28 §5);
   the tool contract is a first-class engineering artifact, not generated glue.
5. **The data-supply declaration (kernel D7)** — what the template's operation
   captures for agent training: decisions with stamped propensities, actions
   taken, outcomes observed, review corrections, gate verdicts, execution traces.
   **No methodology enters the toolbox without this declaration** — it is the
   admission rule D5 and D7 jointly impose.

**The engine underneath, as promised.** The templates run on the complete
future-state engine (evidence 06): the **adaptive database** that is at once
control-plane spine (graphs, node registry, run history, audit) and data/compute
substrate (full-text + vector + graph indexes, tiered hot→cold→re-warm storage);
**compute-near-data** — generated and hand-written logic, model training, solver
runs, and agent tool execution all run on the node where the bytes live, inside
the customer's walls, with zero egress; **the correctness gate** as a product
property of every deploy; **governed self-serve** — identity-scoped through the
customer's SSO, audited, approval-gated on sensitive actions; and **true hybrid**
— one equal-peer cluster across every vendor's silicon, so the cost profile of
training, indexing, and agent post-training is set by the cheapest hardware that
fits, not by a rented platform's margins. Nothing in this document assumes any
other substrate: external vector databases, external feature stores, and external
orchestration are architectural non-goals — the engine's own indexes, its own
point-in-time layer, and its own graph executor are the product (evidence 06 §07,
"one engine is both the control-plane spine and the data/compute substrate").

**The reuse economics, restated as agent-tool economics.** Both compendia
independently converge on the structural fact the kernel builds on (e10 §S1, e13
synthesis 1): the 35–46 catalogued enterprise methodologies decompose into **~10
shared components**, and most methodologies are the tabular anchor with one or
two stages swapped — learning-to-rank is tabular supervised with a group-aware
loss; uplift is tabular supervised with a treatment column and a causal estimand;
global forecasting is tabular supervised on lag features with rolling-origin
evaluation; discrete-time survival is *literally* the tabular classifier run on
entity-period rows. In v1 terms that meant cheap marginal methodologies. In v2
terms it means something stronger: **a compact toolbox is a learnable toolbox.**

- **Few tools, many compositions.** The agent that masters ~21 tools built from
  ~11 components can serve the entire use-case catalog (kernel: many use cases ≈
  many solutions ≫ few methodologies). Tool-use RL scales with the *product* of
  tool count and composition depth; a compact orthogonal toolbox is the
  difference between an agent that can be trained to competence and one that
  cannot. The component layer (§3) is therefore not just an engineering economy —
  it is **the agent's curriculum**.
- **Shared components mean transferable skill.** Because every tool's `featurize`
  is the same point-in-time layer and every tool's `evaluate` is the same harness
  contract, an agent that learns leakage discipline on churn has learned it for
  collections, claims triage, and maintenance simultaneously. Cross-tool transfer
  is the mechanism behind the generalized-learning asset (§2.8): what the base
  agent learns about *components* compounds across every customer.
- **Correctness is component-shaped, and therefore agent-independent.** The
  twelve correctness disciplines of e10 §S5 are methodology-independent
  infrastructure, and in the future state they are also **agent-independent**:
  the gate applies identically whether a graph was hand-drawn by the customer's
  ML engineer, compiled from a plain-language intent, or proposed by the agent
  at 3 a.m. (§5.4). This is what makes agent autonomy governable: the agent is
  free *inside* the gate, never around it (kernel D2.5).
- **Every run is training data.** Each template's data-supply declaration (D7)
  turns operations into the agent's improvement signal. The flywheel: the agent
  composes tools → the gate certifies → the solution runs → the measurement loop
  emits ROI → the ROI is the reward (D7.2) → the agent gets sharper → p(success)
  rises portfolio-wide → the D1 score of every candidate use case improves. The
  toolbox exists to spin this wheel.

**The justification calculus (kernel D5 admission rule).** A methodology belongs
in the toolbox **iff it raises the portfolio's risk-adjusted ROI** — it unlocks
Band-A/B use cases the toolbox cannot otherwise serve, or it raises p(success) of
use cases already served. Every dossier in §4 therefore carries an explicit **ROI
paragraph**: which bands and use cases it serves, and through which p(success)
driver (data availability, actionability, measurability, adoption, governance
fit — kernel D1) it moves the number. Methodologies are never justified by
elegance, novelty, or completeness for its own sake; the anti-portfolio logic
(D4) applies to methods too.

**Mapping components onto the graph stages.** The product's five-stage graph
vocabulary (evidence 06) and the component inventory align as follows; the gate
and the harness straddle stages because they validate the *whole* graph, and the
agent straddles everything because it composes, tunes, and operates all of it:

| Graph stage (evidence 06) | Components living there (§3) | Gate obligations anchored there (§5) |
|---|---|---|
| **connect** | C-1 connectors/extraction | schema type-check vs live source profiles; freshness assertions |
| **clean** | C-2 entity resolution; data validation | ER quality gates; distribution assertions; dedup before split |
| **model** | C-3 point-in-time features; C-4 labeling/outcome capture; C-5 training; C-6 tuning; C-7 explanation; C-8 evaluation harness | leakage + point-in-time checks; label-spec check; split integrity; baseline supremacy; explanation artifact required |
| **index** | C-11 index/retrieval; tiered materialization | index-vs-source freshness; ACL propagation into indexes; embedding-version match |
| **serve** | C-9 serving; C-10 monitoring/retraining | train/serve parity; no-egress placement; monitors + holdout wired; approval gates on actions |

---

## 2. The Auto-RL core — the agent, in engineering depth

This is the center of the product (kernel D2: "the product's core is the agent"),
so it is the first major section of the portfolio, not the last. Everything in
§3–§5 exists to make this section true: the components are the agent's shared
skills, the methodologies are its tools, the gate is its governor, and the
measurement loop is its reward.

### 2.1 The base agentic RL model

**What it is.** The **Zetta agentic RL base model** (evidence 07, catalog item
#3: "the model that anchors every other use case — and is a use case in its own
right") is a long-horizon, tool-calling policy: an LLM-class model post-trained
with reinforcement learning to plan, invoke, and compose the methodology toolbox
over the Zetta engine. It is *ours* — one base model, maintained as the anchor
asset — and it is **post-trained per customer** (§2.2) into the customer's agent.
The base model's competencies are deliberately toolbox-shaped:

- **Data understanding** — reading source profiles (C-1), schemas, freshness,
  entity structure; proposing entity definitions and label specs a domain expert
  would recognize as correct. This is the Auto-Suggest substrate (evidence 08):
  suggesting what is worth doing requires understanding what the data can
  support.
- **Methodology selection and composition** — the compendium's selection guide
  (e10 §S2, e13 synthesis 2) internalized as policy: given a data modality × a
  problem class × the D1 drivers, choose the template, the variant, and the
  composition (e.g. forecast → optimize; anomaly → triage → graduate-to-
  supervised; propensity + uplift + policy rules → next-best-action).
- **Template parameterization and tuning** — filling a template's typed
  parameter surface (windows, horizons, objectives, thresholds, budgets) and
  operating C-6's search within declared budgets.
- **Correctness anticipation** — the gate (§5) is the hard boundary, but a
  competent agent *predicts* verdicts before compiling: the base model is
  trained on gate verdicts as supervision (§2.3) so blocked graphs become rare
  rather than merely caught.
- **Operation and repair** — reading C-10's monitors, diagnosing drift,
  proposing retrains/recompositions, routing exceptions to review bands, and
  explaining every action through C-7's surfaces.
- **Self-measurement** — designing and defending the measurement loop (holdout,
  uplift readout, operating metric) that produces the solution's ROI number,
  because that number is simultaneously the customer's invoice basis (D8) and
  its own reward (D7.2).

**Why an RL-trained agent rather than a prompted harness.** The personalization
thesis (evidence 08) is explicit: "trained on your own data" is the hard part
where most AI projects quietly fail, and the bet is to solve it **with AI
itself, not a brittle hand-coded harness**. A prompted frontier model borrows
generic competence; it never becomes fluent in *this* customer's schemas, label
pathologies, seasonal calendar, approval culture, or cost asymmetries. The
post-trained agent does — "the agent arrives already fluent in your systems"
(evidence 06 §04) — and the fluency compounds with every operated solution
(evidence 06 §03: "learning compounds… the further it pulls ahead of a system
that only retrieves and prompts").

### 2.2 Per-customer post-training on customer data

Each customer's agent = the base model + a customer post-training stack, run
entirely inside the customer's environment on the customer's hardware (true
hybrid makes the economics work: post-training runs on whatever owned/idle
silicon fits, evidence 06). The stack has four rungs, all present in the future
state, applied per capability as the data supply supports them (this is a
capability ladder, not a rollout sequence):

1. **Contextual grounding** — the agent's retrieval memory (C-11) is loaded with
   the customer's schemas, entity maps (C-2), vocabulary, past graphs, gate
   verdicts, and playbooks. Cheap, immediate, and continuously refreshed.
2. **Supervised fluency (SFT/distillation, e10 M20; e13 M28)** — fine-tuning on
   curated traces of validated task completions over the customer's systems:
   correct graph compositions, correct label specs, correct repairs. Teaches
   *form*: the customer's tools, schemas, and procedures.
3. **Preference and verifier optimization (DPO/RLVR-class, e10 M27; e13 M37)** —
   optimization against (a) preference pairs harvested from review outcomes
   (approved vs corrected graphs, accepted vs overridden plans) and (b)
   programmatic verifiers — gate rules, harness floors, schema checks — which
   make large fractions of the agent's task space cheaply verifiable. The gate
   is not only the governor; **it is the largest single source of verifiable
   reward** the platform owns.
4. **Long-horizon RL on operating outcomes** — policy optimization over full
   tool-use trajectories (compose → gate → deploy → operate → measure) against
   the reward architecture of §2.3, with off-policy evaluation on logged
   trajectories before any policy update ships (e10 M27 §8: OPE + staged
   rollout as the discipline of record). Compute-near-data and tiered storage
   are what make per-customer long-horizon RL economical: trajectories, replay
   buffers, and reward readouts live in the same store the agent operates on,
   and training runs on owned silicon next to them.

**The IP split (kernel D2.3, D7.3).** Customer-specific weights, adapters,
preference data, and trajectories belong to the customer and never leave their
walls. The base model, and the **generalized** learnings that cross customers
(§2.8), are ours. The boundary is enforced mechanically, not contractually
alone: the post-training stack runs in-environment; what crosses out is the
generalized-asset classes of §2.8 under the D7.3/Q4 boundary that
[`08-data-strategy.md`](08-data-strategy.md) owns.

### 2.3 The reward architecture (kernel D7.2)

**The design rule: the metric the customer pays for is the metric the agent
learns on.** Wherever the solution's measurement loop can express ROI, ROI is
the reward. Where it cannot — long horizons, sparse events, non-attributable
lift — the reward is a **declared proxy with an eval harness guarding the
proxy**. The reward stack, from most to least direct:

| Tier | Reward signal | Source | Where it applies |
|---|---|---|---|
| **R-ROI** | Measured ROI deltas: holdout incremental lift (retention, NBA), realized-vs-plan value (optimization), loss avoided vs counterfactual (fraud, maintenance), forecast-value-added × inventory economics (demand) | The solution's own measurement loop (D6/D8 — the billing instrument doubles as the reward channel) | Every solution family whose measurement design supports attribution; the target state for all Band-A families |
| **R-verifier** | Programmatic pass/fail: gate verdicts, harness floors, schema checks, reconciliation coherence, calibration tolerances, constraint feasibility | The gate + harness (§5, C-8) | All composition/tuning/repair behavior — dense, cheap, unhackable-by-construction rewards for the agent's *builder* role |
| **R-preference** | Human judgments: approvals vs corrections in review bands, override decisions with reasons, waiver outcomes, planner acceptance | C-4's review/feedback primitives, the approval surfaces of §2.6 | Behavior where quality is human-legible but not programmatic: explanation quality, plan sensibility, suggestion relevance (Auto-Suggest) |
| **R-proxy** | Declared intermediate metrics: OOT AUC/MASE improvements, alert precision at budget, STP rate, golden-set recall | C-8 harness readouts | Capabilities whose ROI attribution lags (long label horizons) — always paired with the eval harness that checks the proxy still tracks the ROI readout when it eventually lands |

**Reward-hacking defenses (mandatory, not optional).** Reward hacking is "the
default outcome of sloppy rewards" (e10 M27 §7); the architecture assumes the
agent will find every seam:

- **The gate is not part of the learnable surface.** Gate rules, harness
  definitions, holdout assignment, and measurement-loop design are versioned
  artifacts the agent can *read* and *propose changes to* (through the same
  reviewed-change path as a human), but its reward can never flow from weakening
  them. An agent-proposed harness change invalidates reward continuity on the
  affected tasks until re-baselined.
- **Holdout inviolability.** The persistent randomized holdouts that produce
  R-ROI (e10 §S5.7–8) are owned by the platform, not the policy; the agent
  cannot treat, contact, or exclude holdout entities. Holdout-integrity is a
  gate check (§5.2) precisely so measurement survives the optimizer.
- **KL-anchored conservatism + reward red-teaming.** Policy updates are anchored
  to the previous certified policy; scheduled red-team suites probe for
  metric-gaming behaviors (threshold-riding, alert-budget stuffing,
  explanation-padding); discovered exploits become permanent regression
  fixtures.
- **ROI is risk-adjusted in the reward, too.** R-ROI rewards are credited at
  measurement confidence (CI-weighted), so the agent is not paid for noisy wins
  — the same D1 logic that prices modules also shapes the gradient.

### 2.4 Tool-use training over the methodology toolbox

The toolbox (§4) is the agent's action space, and each template's **tool
contract** (§1) is the unit of training:

- **Typed tools with declared failure semantics.** Every methodology template,
  every component capability (profile a source, resolve entities, materialize a
  snapshot, run a harness), and every serving surface is a typed tool. Failure
  modes are part of the contract — the agent trains on tool *errors* as much as
  tool successes, because production competence is mostly recovery.
- **Curriculum = the reuse structure.** Training tasks are organized along the
  component-reuse gradient (e10 §S1): master the tabular anchor first (it owns
  six of the ten canonical components), then the one-stage-swap neighbors
  (survival, ranking, uplift, global forecasting), then the composition families
  (NBA, predict-then-optimize), then the open-world families (documents,
  agentic ops). This mirrors how the transfer actually flows, and it is a
  *capability* curriculum, not a build order — all tools exist; the curriculum
  is how a fresh post-training run acquires them.
- **Scenario suites as the task distribution.** Each methodology's harness
  contributes scenario suites — realistic tasks with programmatic verification
  (compose a leakage-free churn graph from these sources; diagnose this drift
  alarm; repair this blocked graph given the gate's reason). Suites are
  versioned, grow from production incidents (every incident becomes a scenario),
  and double as the certification exams of §2.5.
- **Composition depth is trained explicitly.** Long-horizon credit assignment
  over multi-tool chains (forecast → reconcile → optimize → plan-review;
  anomaly → triage → label-capture → graduate) is the distinctive Auto-RL
  competence — the thing prompted agents demonstrably lack — and the reason the
  base model is an RL problem and not a prompt library.

### 2.5 Agent evaluation — harnesses, calibration, safety

The evaluation question evidence 08 raises ("what does the eval gate look like
for an RL-trained agent?") gets the same answer as every other artifact on the
platform: **a harness the gate consumes.** Three layers:

1. **Capability harnesses.** Per-tool and per-composition scenario suites with
   programmatic verification, scored as pass^k reliability (τ-bench style: the
   task must succeed k times under resampling, because a 90%-per-step agent is a
   35%-per-10-step-task agent). Floors are per-capability; an agent is
   *certified per tool and per autonomy class*, never globally.
2. **Calibration.** The agent's own confidence must be decision-grade: predicted
   gate-pass probability vs realized verdicts, predicted ROI vs measured ROI,
   predicted p(success) vs ex-post outcomes. This is the kernel's p(success)
   calibration metric (D9) pushed into the agent itself — an agent that cannot
   price its own uncertainty cannot be allowed to propose engagements (Auto-
   Suggest) or set autonomy expectations. Reliability curves per task family;
   miscalibrated families lose autonomy class until recalibrated.
3. **Safety and adversarial posture.** Injection resistance (tool returns and
   retrieved content treated as untrusted); privilege-separation attestation
   (the agent's credentials are per-tool, least-privilege, identity-scoped
   through the customer's SSO); blast-radius profiling per tool (what is the
   worst reachable state?); kill-switch and rollback drills as scheduled
   exercises; behavioral regression suites on every base-model or adapter
   update (nondeterministic regressions are the documented failure class —
   e10 M28 §8). Full execution traces are the audit artifact — "the agent-era
   audit log" — retained in the store under the same governance as every other
   lineage record.

### 2.6 Autonomy classes under governance (proposal for kernel Q5)

Kernel open question 5 asks which action classes default to
autonomous-under-audit vs approval-gated, per solution family. **Proposal —
four autonomy classes, bound to tool contracts and enforced by the gate:**

| Class | Definition | Default disposition |
|---|---|---|
| **AC-0 Observe & explain** | Read data, run analyses, produce reports/explanations, propose suggestions (Auto-Suggest), answer questions over governed surfaces | **Autonomous-under-audit.** Identity-scoped reads; every access audited; no approval friction — this is the self-serve promise |
| **AC-1 Build & certify** | Compose/parameterize/tune graphs, run training and harnesses, submit graphs to the gate, deploy **gate-passed** graphs whose serving is read-only intelligence (scores, forecasts, reports consumed by humans) | **Autonomous-under-audit.** The gate *is* the control; a certified read-only graph is exactly what the gate exists to make safe. Deploy records + verdicts fully audited |
| **AC-2 Operate & steer** | Retrain/promote champions, adjust thresholds within declared budgets, manage triage queues, route exceptions, recompose degraded solutions, feed action-*recommendations* into human-owned workflows (NBA lists, plans, queues) | **Autonomous-under-audit with sampled human QA.** Changes logged with before/after evidence; a declared sample of actions independently reviewed; budgets and rate limits in the tool contract |
| **AC-3 Act on the world** | Anything externally visible or irreversible: customer contact, pricing changes, order/blocking decisions, writes to systems of record, spend commitments | **Approval-gated by default.** A named human owner approves activation; per-action approval for irreversible actions. Graduation to bounded autonomy is *per action class, per solution*, only after: capability-harness floor met, calibration demonstrated, an incident-free assist period, and the customer's explicit governance sign-off — and always with holdout preservation, rate caps, and kill-switches |

**Per-family defaults** (the answer Q5 asks for, applied to the solution
families of [`04-solutions-catalog.md`](04-solutions-catalog.md)):

| Solution family | Typical methodology mix | Default class ceiling |
|---|---|---|
| Decision intelligence (churn/lead/collections scoring, KPI drivers) | M-1, M-3, M-5, M-17, M-18 | AC-1 (scores into human workflows); AC-2 for retrain/threshold ops |
| Forecast-to-plan (demand, collections forecasting, capacity) | M-4, M-16, M-17 | AC-2 (plans are recommendations to planners); AC-3 for auto-replenishment writes |
| Risk & integrity (fraud/fin-crime, supplier risk, claims triage) | M-7, M-12, M-21, M-1, M-9 | AC-2 for triage/queueing; AC-3 for blocking/denial decisions — always approval-gated; regulated-market governance fit is a selling point, not a constraint to minimize |
| Growth actions (NBA, outbound, pricing) | M-8, M-6, M-15, M-3 | AC-2 for list generation; AC-3 for autonomous send/price — approval-gated with graduation path (contact-policy budgets make bounded autonomy tractable here first) |
| Document & language ops (doc automation, ticket triage) | M-11, M-10, M-14, M-19 | AC-2 (straight-through processing under confidence routing *is* sampled-QA autonomy); AC-3 for payments/adjudication writes |
| Asset & operations (predictive maintenance, inspection) | M-7, M-4, M-13, M-16 | AC-2 for work-order recommendations; AC-3 for automated shutdown/dispatch |

The anti-portfolio line (kernel D4) is preserved by construction: "autonomous
high-stakes decisions without human gates" cannot exist on the platform because
AC-3 *is* the human gate, checked by the correctness gate like any other graph
property (§5.2 — a graph wiring an M-8 output to a send tool without the
approval node is rejected, whoever authored it).

### 2.7 Personalized MCP — the interface layer

The agent's surface to humans and to the customer's other agents is **MCP, and
the MCP surface itself is personalized** (evidence 06 §04, 08): the same
endpoint shapes its tools and responses per user — a CFO's tools speak in
collections risk and working capital; an ML engineer's expose harness detail and
graph internals; a planner's speak in plans, diffs, and binding constraints.
Engineering consequences:

- **Personalization is identity-scoped by construction.** The per-user tool
  shaping rides on the same SSO identity that scopes data access (evidence 06:
  "a tailored view per user, not a shared service account"). A personalized
  tool can never widen access — personalization composes *inside* the
  permission envelope, and the ACL-trimming checks of C-11 apply to every
  personalized response.
- **Preferences are learned, stored, and governed.** The preference model
  (vocabulary, detail level, cadence, preferred explanation surfaces, approval
  ergonomics) is customer-resident data like everything else, refined by C-4's
  feedback capture, and auditable — the user can see why their interface looks
  the way it does.
- **Methodology tools are MCP tools.** The toolbox's tool contracts (§1) *are*
  the MCP tool definitions — one governed registry serving the customer's
  agents, our agent, and human surfaces alike. Exposure of any tool on the
  shared Orama MCP voice follows the One Orama convention (evidence 07): the
  platform owner's explicit per-tool decision, recorded — noted in Appendix A
  (T-6).
- **Personalized MCP is also a data product.** Which tools each role actually
  invokes, and what they do with the results, is high-grade signal for
  Auto-Suggest ranking and for R-preference rewards — captured under the same
  D7 governance as everything else.

### 2.8 The generalized-learning asset base (kernel Q4 / D7.3 coordination)

What the base model and the cross-customer assets learn — **ours, compounding,
and the moat's second layer** (kernel D7.3) — versus what stays inside each
customer's walls. This portfolio's proposed classification, to be reconciled
with the boundary [`08-data-strategy.md`](08-data-strategy.md) owns (Appendix A
T-2):

**Ours (generalized assets):**

- **The base agentic model's weights** and its toolbox competence — selection
  policy, composition patterns, correctness anticipation, repair strategies —
  trained on generalized task distributions and synthetic corpora, improved by
  *distilled patterns* from customer engagements, never by customer rows.
- **Schema and playbook priors** — anonymized structural knowledge: what a
  billing system's churn-relevant surface typically looks like, which label
  pathologies recur in claims data, which feature families carry which use
  cases. Structure, not values.
- **The gate rule corpus and fixture library** — every incident anywhere
  becomes a rule + a seeded-bug fixture everywhere (§5.5); this is the most
  directly compounding correctness asset.
- **Scenario-suite and harness libraries** — the certification exams
  themselves, grown from de-identified failure shapes.
- **Benchmark distributions** — cross-customer performance envelopes per
  methodology × data-shape (what MASE is achievable on retail demand at this
  history depth), which power honest Auto-Suggest expectations and the
  p(success) priors D1 scoring needs.
- **Synthetic corpora** (M-20's product face) — generative models of *task
  shapes*, not of any customer's data, used to pre-train toolbox competence.

**The customer's (never crosses):** raw and derived data, features, labels,
entity maps, trajectories, preference data, customer-specific weights/adapters,
measured ROI readouts, and anything from which their rows or their identity are
recoverable. The boundary test the CDO function enforces (D7.4): *a generalized
asset must be something we could have plausibly learned from any sufficiently
similar customer* — if it is only true of this one, it is theirs.

---

## 3. The component inventory — shared components as agent tools

The eleven shared components, each a first-class, governed capability of the
engine and a typed tool (or tool family) in the agent's registry. For each: what
it is in the future state, which methodologies consume it (from e10 §S1 / e13
synthesis 1), the correctness checks it *owns* inside the gate, and **the data it
captures for agent training** (its D7 declaration). The consumption map first:

| # | Component | Consumed by (portfolio M-IDs) | Canonical owner (e10 §S1 ★) |
|---|---|---|---|
| C-1 | Connectors / extraction | all M-1…M-21 | M-1 (tabular extraction); M-21 (streams) |
| C-2 | Entity resolution | M-1, M-3, M-4, M-5, M-6, M-7, M-8, M-11, M-12, M-16, M-20, M-21 | M-2 |
| C-3 | Point-in-time feature layer | M-1, M-3, M-4, M-5, M-6, M-7, M-8, M-9, M-12, M-15, M-16, M-18, M-21 | M-1 (batch); M-21 (real-time) |
| C-4 | Labeling / outcome capture | M-1, M-4 (implicit), M-5 (censoring), M-6 (treatment logs), M-7 (triage feedback), M-8/M-9 (judgments/clicks), M-10/M-11 (golden sets, corrections), M-13/M-14 (annotation), M-15 (rewards), M-19 (manufactures labels) | M-1 (label specs); M-5 (censoring); M-19 (manufacture) |
| C-5 | Training | M-1, M-3 (surrogates), M-4, M-5, M-6 (nuisance+CATE), M-7 (graduation), M-8, M-9, M-10 (SFT/PEFT), M-12, M-13, M-15, M-17, M-18, M-19, M-21 | M-1 |
| C-6 | Tuning / search | same as C-5 | M-1 (Bayesian HPO) |
| C-7 | Explanation | every methodology (each with its own surface) | M-1 (SHAP); M-16 (duals); M-11 (evidence links); agent traces |
| C-8 | Evaluation harness | all — the gate's evidence engine and the agent's reward/eval source | M-1 (supervised); M-6 (Qini/OPE); M-4 (rolling-origin); M-9 (NDCG); M-17 (calibration) |
| C-9 | Serving | all | M-1 (batch + online predict); M-10/C-11 (retrieval); M-15 (decision endpoint) |
| C-10 | Monitoring / retraining | all | M-1 (PSI/KS + delayed-label); M-7 (alert health); M-21 (drift detection) |
| C-11 | Index / retrieval layer | M-10 (core), M-8 (candidate retrieval), M-2 (embedding blocking), M-11 (evidence), M-12 (graph queries), the agent's memory | M-10 |

Read row-wise, the table is each component team's customer list; read
column-wise (per methodology, in §4's dossiers) it is each tool's bill of
materials. The structural facts from the evidence hold in the future state
exactly as the compendia found them historically: extraction, training,
evaluation, and monitoring are used by effectively **all** dossiers (e13
synthesis 1); the tabular anchor owns six of the ten classic components outright
(e10 §S1); and the LLM-era rows replicate the classic components in mirrored
form — golden sets are labels, prompt design is feature engineering, regression
harnesses are evaluation, trace logs are monitoring (e10 §S1 reading note 3) —
which is why one component inventory serves both eras.

### C-1 — Connectors / extraction

**Future state.** Typed source connectors — warehouse SQL, SaaS APIs, files,
event streams, documents, media — with **profiling as a product property**:
schemas, null rates, cardinalities, freshness, volumetrics, and drift baselines,
maintained continuously and stored as the profile catalog every gate type-check
reads. Point-in-time extraction (as-of a snapshot date) is native, because the
store's tiered history makes historical snapshots a query, not an archaeology
project. Artifact ingestion (automation workflows, SQL scripts, notebooks —
evidence 06 "Ingest") is part of this component: existing logic is read as a
source of intent and of schema truth.

**Consumers.** Universal — the one component both matrices mark for every
methodology. Its as-of variant is what M-1/M-4/M-5/M-6-class correctness stands
on; its streaming variant (event-time watermarks, exactly-once semantics) is
M-21's spine.

**Gate checks owned.** Schema type-check vs live profile (a reference to data
that isn't there is flagged, not silently generated — evidence 06); source-
freshness assertions; row-count/null-rate/cardinality drift vs profile;
snapshot well-formedness (feature windows referencing a snapshot the source
cannot reconstruct → reject with reason).

**Data captured for agent training.** Profile catalogs and their evolution (the
agent's data-understanding curriculum); connector failure/recovery traces;
schema-mapping decisions with corrections (which candidate mapping a human
fixed, and how). This is the substrate of Auto-Suggest: knowing what the data
can support starts here.

### C-2 — Entity resolution

**Future state.** Store-resident, incremental entity resolution: blocking
(sorted-key and embedding-ANN via C-11) → pairwise scoring (Fellegi–Sunter
probabilistic weights and learned pair classifiers) → clustering into
**persistent entity IDs** with survivorship rules and full match-evidence
waterfalls per merge. Runs continuously as sources update; downstream graphs
consume entity IDs as a stable join surface. This is simultaneously component
C-2 and methodology M-2 (§4) — the platform is its own first customer, because
the gate's entity-consistency promise (evidence 06: "one subsidiary's risk…
never several blended into an averaged, flattering blur") reads C-2's output.

**Consumers.** Every entity-level methodology — duplicate entities split feature
history, double-count labels, and corrupt graph structure silently; e10 §S5.10
calls ER "the invisible bound" on the tabular, survival, uplift, clustering,
recommendation, and graph families. ER quality *precedes* model quality.

**Gate checks owned.** Entity-consistency check; grouped-split-by-resolved-
entity enforcement; cluster-size/over-merge alarms + hub-record detection;
blocking-recall measurement where labeled pairs exist; ID-stability across runs
(downstream joins must never silently re-key).

**Data captured for agent training.** Review-band adjudications (match/no-match
decisions with evidence — R-preference gold); merge/split audit outcomes;
per-source match-rate baselines (schema priors for §2.8, structure only).

### C-3 — Point-in-time feature layer

**Future state.** The as-of join and windowed-aggregation engine, **native to
the store that holds the data**: every feature computable as of any snapshot
date from data available then (e10 §S5.1, "the master rule"). One feature
definition serves training and serving — the registry *is* the train/serve-
parity mechanism. Windowed counts/sums/ratios, recency/RFM, deltas, out-of-fold
categorical encodings, lags at seasonal offsets, pre-treatment-only enforcement,
event-time real-time features with watermarks (the M-21 variant). Tiered
storage makes repeated window recomputation over deep history economical;
compute-near-data makes it fast. This layer is proprietary build, not
integration (§6): generic feature stores bolt point-in-time onto foreign
databases — ours is a property of the database.

**Consumers.** Thirteen of twenty-one methodologies directly; every solution.

**Gate checks owned.** Temporal-leakage check (no feature window overlaps the
label window); as-of enforcement per feature; out-of-fold discipline for
target-dependent encodings; train/serve parity attestation (serving reads the
same registry definition); feature-availability-at-scoring-time review.

**Data captured for agent training.** The feature-definition corpus with usage
and lift statistics (which feature families carry which use cases — a §2.8
generalized asset in structural form); leakage near-misses the gate caught
(R-verifier negatives, the most instructive training examples on the platform).

### C-4 — Labeling / outcome capture

**Future state.** Labels are *designed, not found* (e10 §S5.4): a versioned
**label spec** per solution — outcome definition, label window, censoring rules,
exclusions — compiled into the graph. Around it, the **outcome-capture fabric**
kernel D7.1 mandates: every decision a solution emits is logged with stamped
propensities; every action taken and result observed flows back as a joined
outcome row; review bands, triage queues, corrections, overrides, and approvals
are captured as first-class labeled events. Golden sets (retrieval judgments,
extraction gold docs, scenario suites) are labels in mirrored form and live in
the same registry. Label manufacture at scale (weak supervision, active
learning, LLM-assisted annotation with calibration sampling) is M-19's product
face over this component.

**Consumers.** Everything that learns; everything that measures. The RL reward
signal (kernel D7.1: "the *action taken* and the *result observed*") is this
component's defining deliverable — **C-4 is where the data flywheel is won or
lost**, which is why data-flywheel coverage is a D9 metric.

**Gate checks owned.** Label-spec presence + well-formedness (no spec, no
deploy); censoring correctness (incomplete windows excluded or routed to
survival); label/feature-window disjointness (with C-3); survivorship-bias check
(population reconstructed as-of history); propensity-logging schema present on
every decision-emitting graph (logs without propensities can never train a
policy or an uplift model later — e10 §S5.8, the platform's most unforgiving
one-way door).

**Data captured for agent training.** This component *is* data capture; its own
meta-signal is label-spec authoring decisions and their downstream quality —
teaching the agent to write label specs a domain expert would sign.

### C-5 — Training

**Future state.** The training node family, executing compute-near-data on
whatever silicon the cluster offers (true hybrid — GBMs on CPU nodes,
deep/foundation work on GPU/ASIC nodes, all one cluster): gradient-boosted trees
as the tabular default, GLM baselines always alongside (e10 M1 §6 — "the
interpretable baseline that should always be run"), survival/quantile/ranking
objectives as flags, per-series and global forecasters, unsupervised fits,
two-tower and sequence models where scale demands, SFT/PEFT/DPO/RL post-training
for language models and for the agent itself (§2.2). Deterministic seeds,
declared budgets, artifacts + full lineage written back to the store's model
registry (versions, champions, challengers).

**Gate checks owned.** Reproducibility (a result that can't be re-derived can't
pass); budget adherence; temporal early-stopping discipline; implausibly-high-
metric alarm (AUC > ~0.95 on behavioral problems triggers leakage investigation
— e10 M1 §8; a gate check, not a suggestion).

**Data captured for agent training.** Full training telemetry: which
configurations the agent chose, what they cost, what they scored — the raw
material of the agent's tuning policy and of the §2.8 benchmark distributions.

### C-6 — Tuning / search

**Future state.** Budget-capped Bayesian hyperparameter search (Optuna-class)
wrapped as a governed tool: declared search spaces, cost ceilings, early-stop
rules, multi-objective fronts (accuracy × latency × cost) — with the **agent as
the principal user**: tuning is the most immediately RL-shaped activity on the
platform (a sequential decision problem with a verifier reward), and the agent's
tuning policy learns across every job it runs.

**Gate checks owned.** Budget + search-space declaration; selection-on-
validation discipline (test set untouched by search); overfitting-to-validation
alarm (nested or rolling confirmation where re-tuning is frequent).

**Data captured for agent training.** Complete search trajectories → the agent's
warm-start priors per methodology × data shape (a §2.8 asset).

### C-7 — Explanation

**Future state.** The explanation surfaces, per family: TreeSHAP global/local
attributions and reason codes; forecast decomposition (trend/season/holiday —
"among the most stakeholder-legible explanations in all of ML," e10 M5 §10);
hazard ratios; uplift persuadability drivers; match-evidence waterfalls;
bounding-box evidence links; duals and binding-constraint narratives; and for
the agent itself, **execution traces** — every plan, tool call, and decision
inspectable per task. Explanation is the bridge from prediction to business
action: the driver→action→owner map that solutions wire (kernel D6) consumes
this component, and the Personalized MCP layer (§2.7) renders the same
explanation differently per audience.

**Gate checks owned.** Explanation-artifact-required (a scored table with no
driver report fails the gate for solution-class graphs); dominant-feature leak
detector (a top feature explaining an implausible share flags leakage — e10 M3
§8, applied universally); trace-completeness for agent actions (an unexplained
agent action is an audit failure by definition).

**Data captured for agent training.** Which explanations users accept, question,
or override (R-preference); explanation-quality judgments from review sampling.

### C-8 — Evaluation harness

**Future state.** The platform's evidence engine, and the single most
load-bearing component in the Auto-RL era: temporal out-of-time splits as the
primary gate, grouped/deduplicated splits where entities repeat, **mandatory
baselines per family** (base-rate and incumbent; seasonal-naive and ETS — only
7.5% of 5,507 M5 teams beat the tuned exponential-smoothing benchmark, e10 M5
§9; BM25; random targeting; best single model; the prompted-frontier baseline),
metric batteries per methodology (§4 dossiers), bootstrap CIs, slice/segment
breakdowns, calibration as a first-class property, scenario suites with pass^k
scoring for agent capabilities (§2.5), and **measurement-loop designs**
(persistent holdouts, uplift readouts, realized-vs-plan accounting) whose
outputs are the ROI numbers of D8. Versioned; re-run on every change; results
stored as artifacts the gate reads, the customer sees, and the reward
architecture consumes (§2.3).

**Gate checks owned.** All of §5's empirical tier: baseline supremacy (ship only
if the honest baseline is beaten, or the customer explicitly accepts a
documented, audited exception); floor enforcement per template; calibration
tolerances; scenario-suite floors per autonomy class; holdout integrity.

**Data captured for agent training.** Everything it produces *is* training
signal — R-verifier and R-proxy in §2.3's stack, plus the calibration record
that prices the agent's own confidence.

### C-9 — Serving

**Future state.** Four patterns, all identity-scoped and in-environment: (a)
**batch score/forecast/plan tables** written into the store and the customer's
systems with lineage; (b) **online prediction** (`/v1/models/{name}/predict`)
served from the node, feature fetch reading C-3's registry; (c) **retrieval
serving** (`/v1/indexes/{name}/search`, hybrid + ACL-trimmed) over C-11; (d)
**decision endpoints** — bandit/policy serving with logged propensities (the
M-15 pattern) and agent tool surfaces over MCP (§2.7). Report delivery — the
"report" terminus of the anchor methodology — renders C-7 artifacts per
audience.

**Gate checks owned.** Train/serve parity attestation; latency/probe sanity;
**no-egress placement** (serve nodes must resolve inside the customer
environment — evidence 06 "the data stays put"); decision-endpoint propensity
logging live before traffic.

**Data captured for agent training.** Serving telemetry (volumes, latencies,
consumers); which scores/plans are actually *used* downstream — the adoption
signal that feeds p(success) calibration (an unconsumed solution is a failing
solution regardless of AUC).

### C-10 — Monitoring / retraining

**Future state.** Graph-native monitors: input/score drift (PSI/KS),
delayed-label performance, forecast value added and interval coverage, alert
precision and investigator hit-rate, holdout incremental lift, golden-set
recall canaries, per-task agent success sampling, override rates —
champion/challenger retrain governance, and **persistent randomized holdouts as
infrastructure** (e10 §S5.7–8: the deployed system corrupts its own future
training data; the holdout is the permanent defense). A monitor is a node in
the same graph it watches; its alerts are typed events the agent consumes
(AC-2: diagnose → propose → repair), and the run+learn loop (evidence 06 §04)
is this component operating at platform scale.

**Gate checks owned.** Monitors-wired (a solution graph with no drift monitor
and no holdout/measurement loop fails — kernel D6's definition of done is
gate-enforced); holdout existence + integrity; retrain provenance
(champion/challenger evidence recorded); alert-budget vs declared human
capacity.

**Data captured for agent training.** The full operate-and-repair task
distribution: alarm → diagnosis → intervention → outcome, the trajectories on
which the agent's AC-2 competence trains.

### C-11 — Index / retrieval layer

**Future state.** The engine's native full-text, vector, and graph indexes
(evidence 06 §01: Zetta-native, not an external vector DB), fed by tiered
storage — hot in-memory indexes over warm/cold source data, re-warmed on demand
— with metadata filtering and **ACL trimming at query time** (e10 M17 §8's
security-critical stage; permission leakage through an index is a data breach).
Hybrid retrieval (lexical + dense + fusion) is the default (BEIR evidence:
hybrid beats either alone, e10 M17 §6). Powers M-10 outright, M-8's candidate
retrieval, M-2's embedding blocking, M-12's neighborhood queries, M-11's
evidence store, and the **agent's own memory** (§2.2 rung 1).

**Gate checks owned.** Index-vs-source freshness SLA; embedding-version
stamping (index and query encoders must match); filtered-recall audit under
production ACLs; ACL-propagation (permission-model changes must reach index
filters before the graph re-passes).

**Data captured for agent training.** Query/click/accept logs over governed
surfaces (retrieval judgments = labels, e10 §S1 note 3); golden-set drift; the
usage patterns Personalized MCP learns from (§2.7).

---

## 4. The complete methodology portfolio (kernel D5)

The full toolbox, all twenty-one methodologies **present and co-equal** —
organized by family for legibility, with **no ordering among them** (kernel
D10.2). IDs follow kernel D5's list; the family grouping mirrors the compendia's
(e10 families A–V; e13 A–V). Each dossier follows one skeleton:

- **Template** — scope as a productized, agent-invocable template.
- **Graph** — the execution-graph shape.
- **Canonical families** — algorithm choices with rationale (e10/e13 dossiers).
- **Correctness profile** — the gate checks specific to it (union with §5's
  baseline tier is its full gate profile).
- **Harness** — metrics, splits, mandatory baselines.
- **Explainability** — the surface C-7 renders for it.
- **ROI** — the D5 admission argument: which Band-A/B use cases it serves and
  how it raises p(success). (The consolidated methodology × use-case ROI map
  closes this section.)
- **Agent** — what the agent does with it: compose, tune, operate.
- **Data (D7)** — its data requirements and captures for agent training
  (elaborated in [`08-data-strategy.md`](08-data-strategy.md)).

### Family I — The tabular decision core

#### M-1 — Tabular supervised learning (the workhorse)

**Template.** Classification and regression on entity-level tabular data:
snapshot/label-window architecture, point-in-time features (C-3), GBM training
with an always-run GLM baseline, TreeSHAP driver reports and per-record reason
codes, batch + online serving, drift monitoring with a persistent holdout.
Quantile/Tweedie objectives are parameter flags. The single most common
enterprise methodology (e10 §S3 tier 1: plurality of all predictive workloads;
e13 synthesis 3 rank 1) — because tabular data is the majority of business
*decision* data, not the majority of business bytes (e10 §S3's corrected
premise).

**Graph.** `connect(profile) → clean(ER via M-2, validate) → model[label-spec →
snapshot → point-in-time featurize → split(temporal OOT + grouped-by-entity) →
train(GBM + GLM baseline) → tune(budgeted) → explain(TreeSHAP) → evaluate] →
serve(batch table | online predict) → monitor(PSI/KS, delayed-label, holdout)`.
This is the compendium's canonical arrangement (e10 M1 §5) in evidence 06's
five-stage vocabulary, and the vocabulary's own worked example (churn).

**Canonical families.** XGBoost as default (ecosystem maturity, exotic
objectives incl. survival, Apache-2.0), LightGBM for large-data speed (all
top-5 M5 solutions — e10 M1 §6), regularized GLM always alongside (the honesty
check and the regulated-market artifact — SR 11-7-shaped conversations expect
it; e10 M2). GBMs remain the accuracy-per-cost frontier on medium tabular data
(Grinsztajn et al. 2022 line; e13 M01) at CPU-only cost — exactly the profile
an on-customer-infrastructure product wants.

**Correctness profile.** Target-leakage audit (post-outcome field detection;
feature-vs-label cross-check); temporal-leakage window disjointness;
\>0.95-AUC investigation trigger; survivorship check; censoring routing
(incomplete label windows → exclude or route to M-5); imbalance handling
attestation (PR-AUC reported; threshold set on business costs); calibration
report mandatory.

**Harness.** Temporal OOT as the fidelity number of record (never CV); grouped
CV by resolved entity in-period; ROC-AUC + PR-AUC, Brier + reliability, lift by
decile, precision@k at the customer's action capacity; baselines: base rate,
last-state carry-forward, incumbent model/heuristic; bootstrap CIs; segment
slices.

**Explainability.** Ranked driver list with direction; beeswarm + dependence
plots; per-entity reason codes; segment-level driver breakdowns — the input to
every driver→action→owner map.

**ROI.** The widest Band-A surface in the portfolio: churn & retention (UC-1),
lead/opportunity scoring, collections, claims triage scoring, KPI driver
analysis, fraud triage scoring, predictive-maintenance risk scoring — plus
Band-B attrition and supplier risk. It raises p(success) chiefly through
**measurability and actionability**: calibrated scores with reason codes are
the form of intelligence existing business processes can consume tomorrow. As
the reuse anchor it also lowers the *customer investment* term of every other
solution's ROI (shared components, shared data work).

**Agent.** The agent's first mastery: composes the template from intent or
artifacts, writes the label spec, selects features from C-3's registry, tunes
under budget, anticipates the gate, operates retrains, and explains every score
through Personalized MCP. Most Auto-Suggest proposals bottom out in an M-1
composition.

**Data (D7).** Requires: systems-of-record history deep enough to reconstruct
snapshots; outcome capture wired at deploy. Captures: score→action→outcome
triples with propensities (the upgrade path to M-6), gate verdicts, driver-
report acceptance — the densest reward stream the agent gets.

#### M-5 — Survival / time-to-event

**Template.** *When*, not just whether: discrete-time hazard as the spine —
entities expanded to entity-period rows, the M-1 classifier fit on "event in
this period?" — plus Cox PH for hazard-ratio reporting; censoring-correct
labeling; per-period risk curves and expected-time-to-event feeding LTV and
intervention timing (e10 M8; e13 M11).

**Graph.** `connect → clean(ER) → model[spell assembly → label(duration +
censor flag) → period-expand → featurize(C-3 at entry + per-period) →
train(GBM-on-periods | Cox) → evaluate] → serve(risk curves, expected-TTE) →
monitor(cohort drift, censoring-pattern shifts)`.

**Canonical families.** Discrete-time GBM as the enterprise favorite (e10 M8
§6): reuses the entire M-1 stack, handles time-varying covariates, and emits
the per-period probabilities retention/maintenance programs schedule against.
Cox (lifelines) for hazard-ratio narratives; gradient-boosted survival via
XGBoost's native `survival:cox`/AFT objectives (license-clean — §6).

**Correctness profile.** Censored-as-negative rejection — the single most
valuable survival check, which also protects M-1 graphs by routing them here;
informative-censoring review ("data ends because the customer was acquired" is
not random); immortal-time-bias check (entry alignment); post-entry feature
leakage; proportional-hazards test (Schoenfeld) whenever Cox output is
reported.

**Harness.** Harrell's/Uno's C; time-dependent AUC; IPCW-Brier; **survival-curve
calibration at business horizons** (30/60/90-day); Kaplan–Meier-by-segment
baseline; temporal OOT cohorts.

**Explainability.** Hazard ratios ("1.8× the churn hazard"); per-period SHAP
drivers; segment survival curves — the artifact retention and maintenance teams
actually consume.

**ROI.** Upgrades Band-A timing decisions: churn/retention (when to intervene),
predictive maintenance (remaining useful life), collections (time-to-payment);
Band-B attrition (time-to-departure drives succession planning). Raises
p(success) through **actionability**: timing turns a score into a schedule.

**Agent.** The agent routes fixed-window problems here when censoring is
material (the e10 §S2 decision it internalizes), assembles spells, and composes
expected-TTE into LTV and maintenance-planning solutions.

**Data (D7).** Requires event/censor dates with reasons. Captures:
intervention-timing decisions and observed event times — the reward stream for
timing-sensitive policies.

#### M-17 — Bayesian / probabilistic modeling & uncertainty quantification

**Template.** Honest uncertainty as a product capability: hierarchical Bayesian
models for small/grouped data (many stores, few observations each), posterior
inference, prior encoding of domain knowledge, and **conformal wrappers** that
give distribution-free intervals over any C-5 model; media-mix-style structural
models where decisions need them (e10 M30; e13 M41).

**Graph.** `connect → model[structure(hierarchy, priors) → infer(MCMC/VI) |
wrap(conformal over any predictor) → check(PPC, coverage)] → serve(posteriors /
intervals) → monitor(coverage tracking)`.

**Canonical families.** PyMC/NumPyro-class probabilistic programming for
hierarchical structure; conformal prediction as the cheap universal
interval layer; posterior predictive checks as the correctness idiom. Rationale:
downstream consumers of uncertainty (M-16's optimizer, pricing, risk) need
calibrated intervals, not point scores — and hierarchical partial pooling is the
only honest answer at the long tail (new stores, rare segments).

**Correctness profile.** Coverage validation on OOT data (declared coverage must
hold); prior-sensitivity disclosure; convergence diagnostics gate (divergent
chains → reject); uncertainty-consumed-downstream check (intervals computed but
ignored by the consuming decision node → flag — shared with M-16).

**Harness.** Interval coverage vs nominal at business horizons; CRPS/pinball;
PPC suites; baseline: M-1 + conformal (the cheap alternative must be beaten or
the hierarchy must be justified by the data's structure).

**Explainability.** Posterior distributions and credible intervals per group;
shrinkage narratives ("this store's estimate borrows from its region");
prior-vs-data attribution.

**ROI.** Raises p(success) portfolio-wide rather than owning use cases: demand
intervals make M-16's plans robust (Band A), risk posteriors make pricing
defensible (Band B), small-sample honesty prevents the overconfident-pilot
failure mode that destroys credibility (a p(failure) driver in evidence 15's
failure catalog). Uncertainty is also what makes the agent's own confidence
reporting (§2.5 calibration) native to the platform.

**Agent.** The agent invokes conformal wrapping by default wherever a decision
consumes uncertainty, escalates to hierarchical structure when the data is
grouped-and-sparse, and uses posterior widths to decide when to recommend
collecting more data instead of shipping (an Auto-Suggest honesty behavior).

**Data (D7).** Requires: the group structure. Captures: realized-vs-interval
outcomes (coverage truth) — direct calibration food for both the models and the
agent.

#### M-18 — Ensembling & stacking

**Template.** The cross-cutting accuracy squeeze (e10 M31; e13 M42): out-of-fold
stacking, blending, and model averaging over C-5 outputs, with distillation
back to a single explainable model when reason codes are contractual. Real
solutions are rarely a single model (evidence 06 §03: "several often work
together as an ensemble") — this template is how that promise ships without
ops chaos.

**Graph.** `model[train base learners (any C-5 family) → OOF-predict →
train meta-learner → evaluate vs best single] → (optional) distill →
serve → monitor(per-component + ensemble)`.

**Canonical families.** OOF stacking with temporal discipline (temporal OOF is
the correctness variant — e10 §S5.1); simple weighted blends first (they
capture most of the gain); distillation when explanation or latency demands
one model.

**Correctness profile.** OOF integrity (meta-learner never sees in-fold
predictions); temporal OOF where time matters; ensemble-vs-best-single
supremacy (the ensemble ships only if the delta beats its added operational
cost — a stated, audited trade); per-component monitoring wired (a silent
component failure degrades the ensemble invisibly otherwise).

**Harness.** Delta over best single model with CIs; stability across periods;
cost accounting (serving + retrain complexity priced in).

**Explainability.** Component-attribution ("which model drove this score");
distilled SHAP where a single surrogate serves explanations.

**ROI.** Pure p(success) raiser: wherever the marginal accuracy point carries
real money (fraud loss pools, collections yield, demand at scale), ensembling
converts existing solutions into more valuable ones with zero new data work —
the cheapest ROI increment in the portfolio when it applies, and a pricing
lever for premium tiers (D8).

**Agent.** Ensembling is an *agent decision*: it composes candidate learners,
runs the supremacy test, and recommends ensemble-vs-single with the cost trade
made explicit — a template whose whole point is judgment the agent learns from
accumulated benchmark distributions (§2.8).

**Data (D7).** Captures: ensemble-vs-single deltas per data shape — feeding the
agent's prior on when ensembling pays.

### Family II — Identity & structure

#### M-2 — Entity resolution

**Template.** The methodology face of component C-2 (§3): cross-source identity
— normalization, blocking, probabilistic + learned pair scoring, clustering,
survivorship, persistent IDs, review bands, match-evidence waterfalls (e10 M23;
e13 M30). Sold rarely as a module; present in almost every solution's
`clean` stage; and the platform's own first dependency (the gate's
entity-consistency promise).

**Graph.** `connect → clean[normalize → block(keys + embedding-ANN via C-11) →
pair-score(FS weights | GBM pair classifier) → threshold(+review band) →
cluster → survivorship → persist IDs] → serve(entity map) → monitor(match
rates, cluster sizes, merge/split audits)`.

**Canonical families.** Fellegi–Sunter with EM-estimated weights (Splink-class:
unsupervised start — no customer has labeled pairs on day one; explainable by
construction; e10 M23 §6); GBM pair classifier as review-band labels accrue
(active learning without an annotation product); frequency-aware weighting
(rare-name evidence beats "John Smith"); embedding blocking for fuzzy/global
corpora.

**Correctness profile.** Blocking-recall measurement (missed candidates are
invisible errors — e10 M23 §8); cluster-size + hub-record alarms (transitive
over-merge is the catastrophic failure); threshold asymmetry set on business
costs (false merge ≫ false split in finance-tier deployments); ID stability
across runs.

**Harness.** Pairwise P/R/F1 on the adjudicated band, stratified by difficulty;
cluster-level B-cubed; blocking recall separately; duplicate-rate reduction as
the customer-visible number.

**Explainability.** Per-merge evidence waterfalls; side-by-side review views;
merge/split audit logs (a regulatory necessity in KYC-adjacent industries).

**ROI.** The portfolio's largest single **p(success) raiser**: entity errors
silently corrupt features, labels, and graphs across every entity-level
solution (e10 §S5.10). Directly serves Band-A fraud/financial-crime (identity
is the substrate of ring detection) and Band-B supplier risk and healthcare ops
(master-data-heavy); indirectly raises every Band-A tabular solution's ROI by
making its data trustworthy. Governance fit: regulated buyers already own the
false-merge liability problem — our waterfalls are the audit answer.

**Agent.** The agent proposes entity definitions from profiles, tunes blocking
and thresholds against business cost asymmetries, triages the review band, and
treats the entity map as the join spine of every composition it builds.

**Data (D7).** Requires quasi-identifier surfaces across sources. Captures:
adjudication decisions (R-preference), match-evidence outcomes, cross-source
schema priors (structure-only, §2.8).

#### M-3 — Segmentation / clustering

**Template.** Entity segmentation over C-3 aggregates: k-means/GMM, HDBSCAN
where density varies, stability validation, profile cards, surrogate
explanation, segment tags served back as store columns and as features to M-1;
embedding-based clustering and topic discovery (BERTopic-shape = C-11
embeddings + this template — e13 M19) over text corpora (e10 M13; e13 M18).

**Graph.** `connect → clean(ER) → model[featurize(decision-relevant C-3
aggregates | C-11 embeddings) → scale → cluster → stability(bootstrap ARI) →
profile → surrogate-explain(GBM on membership → SHAP)] → serve(segment tags) →
monitor(drift, mapping continuity, activation)`.

**Canonical families.** k-means++ for large-n tabular; GMM when soft membership
feeds M-1; HDBSCAN as the modern default for varying density (+ an explicit
noise bucket — "not everything must belong," e10 M13 §6); k selected jointly by
silhouette/BIC/stability *and* business tractability (a legitimate criterion,
e10 M13 §8). The supervised-surrogate explanation trick (e10 M13 §10) is pure
C-5/C-7 reuse — this is the thinnest template in the toolbox.

**Correctness profile.** Cluster-existence validation before interpretation
(stability under resampling; the gate refuses to ship segments that are noise);
standardization enforcement; **outcome-exclusion check** (segments must not be
built on the outcome you will act on — else they are outcome bins wearing
personas); segment-ID continuity across refreshes (downstream automations key
on IDs).

**Harness.** Internal (silhouette/DB/BIC) + bootstrap ARI stability + the
decisive external test: segments discriminate on the business outcome — "the
only metric stakeholders feel" (e10 M13 §9).

**Explainability.** Profile cards (per-cluster means vs population,
effect-size-ranked), surrogate SHAP, size + value per segment.

**ROI.** Serves Band-A automated outbound (audiences), churn (segment-level
driver views), and Band-B pricing (willingness-to-pay strata); raises
p(success) through **adoption** — segments are the lingua franca between model
output and marketing/CS execution.

**Agent.** The agent decides *whether* segmentation is the right lens (vs
supervised SHAP segments — the e10 §S2 fork), names candidate segments from
profiles, and monitors activation (segments computed but unconsumed are the
documented rot mode — the agent's job is to notice and escalate).

**Data (D7).** Captures: segment-activation and campaign-outcome joins — reward
signal for audience-shaped actions.

#### M-12 — Graph ML

**Template.** Learning on relationship structure: graph features
(degree/centrality/community/shared-neighbor velocity) served into M-1 first,
GNN embeddings and link prediction where multi-hop structure and scale justify
them (e10 M22; e13 M31 — production evidence concentrates at platform tier:
PinSage-class recsys, fraud rings, KYC networks). Runs over C-11's native graph
index with time-sliced snapshots.

**Graph.** `connect → clean(ER — the graph is only as real as its identity) →
model[graph-build(time-sliced) → graph-featurize → (tier 1) M-1 on graph
features | (tier 2) GNN/link-predict] → serve(risk scores, ring alerts,
embeddings) → monitor(structure drift)`.

**Canonical families.** Graph features → GBM as tier 1 (most of the lift at a
fraction of the complexity — e10 M22 §6's consistent finding); GraphSAGE-class
inductive GNNs as tier 2 (transductive embeddings break on new nodes —
inductive is the production discipline); temporal graph snapshots always (a
graph built from all-time edges leaks the future).

**Correctness profile.** Time-sliced graph construction (edges dated before the
label window — the graph version of point-in-time); inductive evaluation splits
(new-node performance is the deployed reality); ER-precedence hard dependency
(fake duplicate nodes manufacture fake structure); degree-leakage audit (hub
features can proxy the label).

**Harness.** Link-prediction AP / node-classification AUC on inductive temporal
splits; **lift over the M-1-on-graph-features baseline** (the tier the GNN must
beat to exist); ring-detection precision on adjudicated cases.

**Explainability.** Subgraph evidence (the neighborhood that fired), shared-
entity paths for investigators, community summaries.

**ROI.** Band-A fraud & financial-crime decisioning is the anchor (rings,
mules, collusion — the signal *is* relational); Band-B supplier risk
(concentration, hidden ownership). Raises p(success) via **data availability**
in disguise: relationships the tabular view cannot see are recovered from data
the customer already owns.

**Agent.** The agent proposes graph views over resolved entities, starts at
tier 1 by policy, and escalates to GNNs only on measured tier-1 saturation —
the reuse rule as learned behavior.

**Data (D7).** Requires: entity-resolved relational events. Captures:
investigator dispositions on ring alerts (labels for structure), tier-1-vs-
tier-2 deltas (§2.8 priors).

### Family III — Time & vigilance

#### M-4 — Time-series forecasting

**Template.** The two-tier design: classical per-series (ETS/ARIMA/Theta;
Croston-family for intermittent demand) as the mandatory baseline tier and the
few/short-series workhorse; global GBM-on-lags ("the M5 recipe") for many
related series with covariates; deep global forecasters (DeepAR/N-HiTS/TFT-
class) and zero-shot TS foundation models as escalation tiers where series
count, covariate richness, or cold-start demand them (e10 M5–M7; e13 M05–M10);
probabilistic outputs first-class; hierarchical reconciliation (MinT) as a
post-processor so item/store/region forecasts sum coherently.

**Graph.** `connect(panel: series × time + static + known-future covariates) →
clean(calendar align, gap fill, outlier flag) → model[(A) per-series fit | (B)
lag/window featurize(C-3) → global GBM → quantile heads | (C) deep/TSFM tier]
→ reconcile(hierarchy) → evaluate(rolling-origin) → serve(forecast tables +
intervals) → monitor(FVA, bias, coverage)`.

**Canonical families.** statsforecast-class classical engines (millions of
series on CPU); LightGBM for the global tier (all top-5 M5 solutions; >20%
WRMSSE over the best statistical benchmark — e10 M5 §9, M6 §6); MinT
reconciliation (planner trust dies on incoherent rollups); TSFMs as the
cold-start/long-tail tier with the classical baseline always in the harness
(e10 M7: benchmark-strong — the baseline keeps them honest). The tier decision
is made by measured FVA, not fashion: only 7.5% of 5,507 M5 teams beat tuned
exponential smoothing.

**Correctness profile.** Rolling-origin/temporal splits only (random splits
auto-rejected); train-window-only transforms (normalization leakage is the
classic global-model bug); **future-covariate parity** (a promo covariate known
in training must have an operational source at serve time — else reject);
lag-availability vs horizon consistency; hierarchy coherence post-
reconciliation; new-series cold-start routing declared.

**Harness.** Rolling-origin, multiple origins; MASE/WRMSSE vs **seasonal-naive
and ETS (mandatory)**; pinball + interval coverage; per-segment slices
(fast/slow movers, new/mature); FVA as both metric and permanent monitor.

**Explainability.** Tier A: decomposition plots — maximally stakeholder-legible;
tier B: SHAP on lags/covariates + counterfactual covariate scenarios ("the
forecast without the promotion" — often the actual business deliverable, e10
M6 §10).

**ROI.** Band-A demand forecasting outright, and the *predict* half of every
forecast-to-action pool: collections forecasting, replenishment (with M-16),
capacity/staffing, predictive-maintenance horizons; Band-B healthcare ops
(census/staffing). Raises p(success) through **measurability** (FVA is a clean,
continuous ROI readout — one of the best R-ROI channels in §2.3) and through
uncertainty honesty (intervals that downstream plans actually consume).

**Agent.** The agent assembles panels, chooses tiers by measured FVA, maintains
reconciliation hierarchies as org structures change, narrates forecast movements
to planners over Personalized MCP, and hands quantiles to M-16.

**Data (D7).** Requires: dated transactional history + calendars + known-future
covariates with operational sources. Captures: forecast-vs-actual streams
(dense, fast, unambiguous reward — the cleanest RL signal in the portfolio),
override decisions with reasons.

#### M-7 — Anomaly detection

**Template.** Batch and streaming detection of the unusual: point/collective
anomalies over entities, metrics, and event streams; forecast-residual
anomalies over M-4 outputs; triage queues with per-alert explanations;
alert-budget calibration; and the **graduation loop** — investigation outcomes
captured as labels (C-4) upgrade the graph to supervised M-1 scoring with the
unsupervised layer retained for novelty (e10 M12; e13 M15–M16).

**Graph.** `connect → clean(ER — behavioral history must be per-entity) →
model[featurize(velocity, ratio-to-own-history, peer-normalized) →
fit(IForest/ECOD | residuals from M-4 | streaming detectors via M-21) →
calibrate(threshold = review budget)] → serve(triage queue + explanations) →
monitor(alert precision, investigator hit-rate) → feedback(labels) →
graduate(M-1)`.

**Canonical families.** Isolation Forest + ECOD/COPOD as the tabular defaults
(ADBench's 57-algorithm finding: no universal winner, and minimal supervision
beats unsupervised — e10 M12 §6). The differentiator is therefore not the
detector but the **feedback loop as infrastructure** — which is the run+learn
promise (evidence 06 §04) in its most concrete form.

**Correctness profile.** Alert-budget check (alert rate must match declared
investigator capacity — a 0.1% rate on 10M events is a dead queue);
contamination handling declared; thresholds calibrated on held-out *time*;
seasonality-vs-anomaly separation (deseasonalize via M-4 residuals first);
below-threshold random sampling wired (unbiased labels — else feedback bias
corrupts graduation); ER precedence.

**Harness.** Pre-label: injection studies, stability, expert top-k review.
Post-label: PR-AUC + precision@budget (never ROC-AUC at extreme imbalance);
detection latency for streaming paths; the z-score/rule baseline ("often
embarrassingly competitive" — beaten honestly or composed).

**Explainability.** Per-alert feature contributions (mandatory for investigator
trust); peer-comparison views; queue-level precision trends.

**ROI.** Band-A fraud & financial-crime (triage tier), predictive maintenance
(sensor anomalies ahead of failure labels), KPI driver analysis (the "why did
this metric move" entry point); Band-B supplier risk and healthcare ops
(billing integrity). Raises p(success) through **label-free start**: it is the
toolbox's coldest-start methodology, producing value — and labels — before any
supervised solution can exist. The graduation loop then converts that value
into M-1-grade ROI.

**Agent.** The agent tunes budgets against real investigator capacity, runs the
graduation loop end-to-end (its first fully-autonomous composition under AC-2),
and routes novel-pattern alerts to humans while handling known patterns.

**Data (D7).** Captures: investigation outcomes (the label factory — e10 M12
§14), alert-fatigue signals, graduation deltas.

#### M-21 — Online / streaming learning

**Template.** Decisions at event speed: streaming feature computation
(event-time windows, watermarks, exactly-once), low-latency scoring at the
decision endpoint, drift detection as a first-class capability, incremental/
online model updates where drift is adversarial-fast, delayed-label joins
(e10 M34; e13 M45). Compute-near-data is the enabling engine property: the
stream is processed on the node where it lands.

**Graph.** `connect(streams, watermarks) → clean(ER, streaming) →
model[real-time featurize(C-3 streaming variant) → score(low-latency) |
incremental-update] → serve(decision endpoint) → monitor(prequential metrics,
drift detectors, delayed-label reconciliation)`.

**Canonical families.** Streaming features + frequently-retrained batch models
as the default (true per-event learning only when drift is adversarial —
fraud, adversaries; e10 §S2); River-class incremental learners for that case;
ADWIN/DDM-class drift detectors; prequential (test-then-train) evaluation.

**Correctness profile.** Event-time vs processing-time discipline (features as
they *would have been* at decision time — the streaming face of §S5.1);
delayed-label accounting (a fraud label arrives 60 days late; metrics must
respect it); backfill/replay parity (stream and batch recompute must agree);
degradation posture declared (what the endpoint does when a feature feed
stalls — fail open/closed is a business decision, stated and gated).

**Harness.** Prequential AUC/precision; decision-endpoint latency SLOs;
drift-detector calibration (false-alarm rate); batch-parity reconciliation.

**Explainability.** As-of decision logging: every real-time decision replayable
with the exact features it saw — the audit answer for disputed automated
decisions.

**ROI.** Band-A fraud & financial-crime decisioning (the authorization-time
tier — where loss avoidance is largest and latency is the constraint),
real-time NBA; Band-B ticket triage at ingestion. Raises p(success) through
**actionability at the moment of decision** — some Band-A pools are only
reachable in-flight.

**Agent.** The agent operates rather than composes here: watches drift
detectors, decides retrain-vs-adapt, manages degradation modes, and escalates
adversarial shifts — AC-2 vigilance over the fastest loop in the portfolio.

**Data (D7).** Captures: complete decision logs with propensities at event
grain — simultaneously the audit record, the uplift substrate, and the richest
trajectory data the agent's long-horizon training gets.

### Family IV — Action & decision

#### M-6 — Causal inference & uplift

**Template.** From *who will* to *who to treat*: CATE/uplift estimation on
experiment logs (gold path) and explicitly-flagged observational paths (DML +
sensitivity analysis); policy construction under budget; off-policy evaluation
before launch; **experimental validation of the policy as the evaluation of
record**; persistent randomized holdouts as permanent fixtures; a native
experimentation capability (assignment, SRM checks, CUPED variance reduction)
because e10 M9 is the evaluation-of-record for every action methodology
(e10 M9–M11; e13 M12–M14).

**Graph.** `connect(experiment logs | observational + propensities) →
clean(ER) → model[pre-treatment-only featurize → nuisance models(C-5) →
CATE(meta-learner/DML) → evaluate(Qini/AUUC + OPE) → policy(top-τ under
budget → M-16 when constrained)] → serve(policy tables + holdout assignment) →
validate(experiment vs BAU) → monitor(holdout incremental lift)`.

**Canonical families.** X-/T-learner meta-learners over C-5 GBMs (X-learner for
the common unbalanced-arms case); DML with cross-fitted nuisances for debiased
observational effects (e10 M11 §6); the S-learner's regularization-bias-toward-
zero documented as a trap, not a default. It is the most data-hungry tabular
methodology per unit of signal (second-order differences need 10⁴–10⁵ per arm —
e10 M11 §11), which the harness makes explicit rather than discovering in
production.

**Correctness profile.** Pre-treatment-only features (hard reject);
data-provenance stamping (observational estimates carry their assumptions into
the report — the gate stamps the disclaimer); outcome-metric rejection (uplift
"evaluated" with outcome AUC is rejected — AUC on Y is irrelevant to τ);
propensity-overlap check (trim/weight where positivity fails); holdout
existence + integrity (the business will try to treat everyone; the gate
defends measurement — and §2.3 defends it from the agent).

**Harness.** Qini/AUUC vs random targeting; uplift-by-decile; transformed-
outcome loss for selection; doubly-robust OPE pre-launch; **the decisive test
is the experiment** — incremental outcome per unit spend, with CIs. Fidelity is
reported as incremental value, never raw model metrics.

**Explainability.** SHAP on the CATE model ("what makes this customer
persuadable"); the persuadables/sure-things/lost-causes/do-not-disturbs
quadrants (the stakeholder lingua franca); policy statements with budgets.

**ROI.** The **measurement engine of the whole business model**: kernel D8
prices modules against measured ROI, and this template's holdout/uplift
machinery is what "measured" means for every action-shaped solution. Owns
Band-A retention (who to save), next-best-action (incremental, not correlational
targeting), collections treatments; Band-B pricing tests. Raises p(success)
through measurability *itself* — it converts "we think it helped" into a
billing-grade number, and its rewards are the purest R-ROI channel the agent
has.

**Agent.** The agent designs treatments and holdouts, checks power before
promising effects (calibration duty, §2.5), runs OPE before proposing launches,
and defends the holdout against the organization's own enthusiasm — a
governance behavior trained explicitly.

**Data (D7).** Requires: treatment logs with stamped propensities (C-4's
one-way door). Captures: policy → outcome trajectories with counterfactual
accounting — the template every other action tool's reward flows through.

#### M-8 — Recommendation / next-best-action

**Template.** Two tiers, one policy layer. **Propensity composition** (the
enterprise NBA shape): per-offer/action M-1 propensities + M-6 uplift where
logs allow + business-rule policy (eligibility, frequency caps, contact
governance, fairness) + calibration. **Catalog recommendation** (the retrieval
shape): candidate generation (matrix factorization/EASE at mid-scale; two-tower
retrieval over C-11's ANN at scale) → GBM/LambdaMART ranking → policy layer;
sequence-aware models where session dynamics dominate (e10 M14; e13 M20–M22).

**Graph.** `connect(interactions + catalog) → clean(ER) → model[event-time
featurize → propensities(C-5) | candidate-gen(MF/EASE/two-tower over C-11) →
rank(GBM) → calibrate → policy(rules, caps, fairness)] → serve(NBA feed |
decision endpoint) → monitor(engagement by cohort, coverage, calibration,
exploration integrity) → validate(experiment)`.

**Canonical families.** EASE as the "embarrassingly effective linear baseline"
(e10 M14 §6) and ALS at mid-scale; two-tower + ANN cascade where corpus and
latency demand it (the infrastructure-heavy tier C-11 makes native);
exploration slices reserved from day one — logs without exploration can never
be debiased later.

**Correctness profile.** Temporal interaction splits (random splits leak future
taste); position/exposure-bias disclosure (impression logging required);
feedback-loop containment (exploration-slice existence check; popularity
debiasing declared); cold-start routing; **offline-metrics-only deploys
rejected for action-wired solutions** (the offline→online gap is "the field's
defining epistemic problem" — e10 M14 §9); contact-policy rules present.

**Harness.** Offline pre-screen: recall@k/NDCG@k on temporal holdout, coverage/
diversity, calibration, popularity-stratified slices. Online: experiment on
engagement + net value with guardrails; OPE where propensities exist (M-6's
evaluator).

**Explainability.** Per-recommendation attributions; "because you…" rationales;
aggregate exposure-transparency reports.

**ROI.** Band-A next-best-action and automated outbound outright (the
composition UC: M-1 scores + M-3 segments + M-8 policy); cross-sell/upsell
pools. Raises p(success) through **actionability**: it is the template that
turns every propensity the platform produces into a governed action stream —
the last mile of most Band-A revenue pools.

**Agent.** NBA is the agent's signature composition — it assembles
propensities, uplift, segments, and rules into one policy; manages exploration
budgets; and negotiates contact-governance limits with the customer's owner
through approval surfaces (AC-2 list generation, AC-3 sends).

**Data (D7).** Captures: impression/action/outcome logs with propensities and
exploration stamps — jointly the recommender's food and the agent's.

#### M-9 — Learning-to-rank

**Template.** Ordering under a budget: LambdaMART-class ranking (natively an
M-1 objective flag — group-aware loss, group-aware splits) over
query/context × candidate features; judgment lists from explicit labels or
debiased clicks; interleaving-grade online evaluation (e10 M15; e13 M23).
Serves search relevance and — the enterprise-decision face — **queue ordering**:
which claims, leads, tickets, collections accounts to work first.

**Graph.** `connect(queries/contexts + candidates + judgments/clicks) →
model[match-featurize → train(LambdaMART) → evaluate(NDCG on grouped temporal
splits)] → serve(ranked lists | re-rank over C-11 retrieval) →
monitor(rank-quality canaries, click calibration)`.

**Canonical families.** LambdaMART via LightGBM/XGBoost ranking objectives
(near-free on the C-5 stack — the e10 §S1 one-stage-swap exemplar);
cross-encoder re-ranking atop C-11 retrieval where text understanding
dominates; click models with position-bias correction when clicks are the
label.

**Correctness profile.** Group integrity (query groups never split across
train/test); click-debiasing declared (position bias correction attested);
judgment-set governance (golden judgments versioned via C-4); leakage across
repeated queries (same query, different day → grouped).

**Harness.** NDCG@k/MRR on grouped temporal splits; golden-set regression
canaries; online interleaving where traffic supports it; baseline: the
incumbent ordering (recency, amount, BM25 — whatever the queue uses today).

**Explainability.** Per-pair "why ranked above" attributions; feature
contributions per ranking decision — what makes a queue ordering defensible to
the people worked by it.

**ROI.** Raises the yield of every queue-shaped Band-A pool: claims triage
(work the costly ones first), collections (call order is the capacity lever),
lead scoring (the ranked view is the consumed view), fraud triage. Rarely a
module alone; almost always the last node that converts a score table into the
operational artifact — an adoption (p(success)) multiplier.

**Agent.** The agent recognizes queue-shaped problems and applies ranking
objectives over existing propensities — the cheapest composition upgrade in its
repertoire.

**Data (D7).** Captures: worked-order vs outcome logs (did working rank-1 first
pay?) — queue-yield reward.

#### M-15 — Bandits & sequential decisioning

**Template.** Optimize-while-learning: multi-armed and contextual bandits
(Thompson sampling as the robust default) for adaptive allocation — offer/
creative/channel/timing selection, adaptive pricing within governance bands —
with **propensity-logged decision endpoints** (C-9d) and off-policy evaluation
as the native measurement idiom; offline RL for sequential policies where
trajectory logs are deep (e10 M26–M27; e13 M35–M36). The pragmatic hierarchy is
policy: experiments → bandits → offline RL, escalating only on measured
saturation (e10 M27 §13's "most enterprises correctly stop at bandits,"
encoded as agent behavior, not as a limitation).

**Graph.** `connect(context streams) → model[context featurize(C-3/M-21) →
policy(Thompson/LinUCB | offline-RL policy) → allocate(with logged
propensities)] → serve(decision endpoint) → monitor(regret vs uniform, arm
health, OPE dashboards) → learn(reward joins via C-4)`.

**Canonical families.** Thompson sampling (robust, delay-tolerant); LinUCB-class
contextual linear policies; doubly-robust OPE for any policy change; for
offline RL, conservative value estimation (CQL-class) with OPE + staged rollout
as the discipline of record.

**Correctness profile.** Propensity logging non-negotiable (a bandit without
propensities is unlearnable and unauditable); reward-delay accounting;
exploration bounds within contact/price governance (exploration is a governed
action, not a free pass — AC-2/AC-3 budgets apply); safe-fallback declared
(what plays when the policy is uncertain); reward-spec anti-gaming review
(shared with §2.3).

**Harness.** Cumulative regret vs uniform and vs the M-6 static policy;
OPE-estimated value with CIs before any policy promotion; arm-level
calibration; guardrail metrics (complaint rates, unsubscribe, margin floors).

**Explainability.** Arm dashboards (allocation shares, posterior estimates);
per-decision context attributions; "why this arm" summaries for marketing and
pricing owners.

**ROI.** Band-A next-best-action at its adaptive frontier and automated
outbound (send-time/creative optimization); Band-B pricing optimization within
approved bands. Raises p(success) through **measurability at low cost** —
bandits collect their own counterfactuals, shrinking the experimentation tax
that stalls action solutions.

**Agent.** Bandits are the agent's own decision idiom in miniature — it
configures arms and rewards, watches regret, retires losers, and proposes
graduation from static M-6 policies to adaptive ones when drift or volume
justifies (with the M-6 holdout still inviolate).

**Data (D7).** Captures: the cleanest decision→reward trajectories on the
platform — context, action, propensity, reward — which is exactly the schema
the agent's own long-horizon RL (§2.2 rung 4) trains on. M-15's logs are the
Auto-RL data model in production miniature.

#### M-16 — Optimization / operations research

**Template.** Predict-then-optimize: LP/MIP and CP-SAT solving over upstream
predictions — **quantile/scenario inputs, never point forecasts** — with
constraint/master-data validation, infeasibility explanation, plan-stability
penalties across re-solves, and planner-in-the-loop serving (e10 M29; e13
M39–M40). The decision layer that converts predictions into committed resource
allocations: replenishment, capacity, collections effort, campaign budgets,
maintenance scheduling.

**Graph.** `connect(constraints/master data + upstream forecast/score
artifacts) → clean(constraint validation vs live data, ER on master data) →
model[formulate(variables, objective, constraints) → solve(budgeted, gap
target) → scenario/sensitivity(robustness across forecast error)] →
serve(annotated plan: diffs, binding constraints, costs) → monitor(override
rate, realized-vs-plan, solver health) → feedback(realized outcomes)`.

**Canonical families.** CP-SAT for scheduling/assignment shapes; HiGHS for
LP/MIP as the open default; commercial solvers per-deal only (§6); scenario
generation from M-4's quantile heads (the reuse dividend); decision-focused
learning (SPO-class) tracked as a research-tier watch item (e10 M29 §6).

**Correctness profile.** **Point-forecast rejection for stochastic domains** (a
plan built on the mean shatters on error — quantile/scenario inputs or an
explicit audited waiver); constraint-data freshness; unit/dimension sanity on
objective coefficients; optimality-gap disclosure; prediction–decision
interface check (upstream model evaluated on decision-relevant slices);
double-counting check when uplift feeds allocation.

**Harness.** Objective value + gap; **realized-outcome vs incumbent planning**
(shadow accounting, then geo/regional experiments); robustness across
forecast-error scenarios; plan stability across re-solves; **override rate as a
first-class metric** (high overrides = missing constraints — e10 M29 §9).

**Explainability.** Binding-constraint narratives ("capacity at DC-3 is the
bottleneck") + shadow prices — genuinely decision-relevant explanations unique
to this family; plan diffs; IIS infeasibility explanations. Planners get an
annotated plan, never a black-box schedule.

**ROI.** The **conversion layer of the forecast-family pools**: Band-A demand
forecasting monetizes through replenishment/allocation; collections through
capacity assignment; predictive maintenance through scheduling; Band-B pricing
through constrained price setting. Raises p(success) through actionability and
adoption — the plan artifact is the business action, and realized-vs-plan is a
billing-grade R-ROI readout.

**Agent.** Formulation is requirements engineering, and the agent does it:
elicits constraints (and learns missing ones from override patterns —
overrides are its densest R-preference stream), maintains formulations as the
business changes, runs scenario robustness, and narrates plans through
Personalized MCP per audience.

**Data (D7).** Requires: constraint/master data with owners. Captures: plans,
overrides-with-reasons, realized outcomes — the trajectory data for
plan-quality learning.

### Family V — Language, documents & perception

#### M-10 — NLP / embeddings / RAG / fine-tuning

**Template.** The language stack as one governed capability with an explicit
**adaptation ladder** (e10 M35; e13 M46 — the decision methodology is part of
the template): (a) classic supervised NLP (classification/NER/topic) where
labels and volume exist; (b) embeddings + hybrid retrieval over C-11 (the
semantic-search substrate); (c) grounded generation/RAG *as a component inside
solutions* — claims-note summarization, KPI narrative drafting, evidence-cited
answer surfaces — never as an unmeasurable chatbot engagement (kernel D4
anti-portfolio); (d) prompt-based LLM classification/extraction inside
validation harnesses; (e) SFT/PEFT/distillation when prompt-based unit
economics or format control demand it — and as the machinery of the agent's own
post-training (§2.2). (e10 M16–M20; e13 M24–M28.)

**Graph (retrieval spine).** `connect(corpus) → clean(dedup, ACL mapping) →
model[chunk(structure-aware) → embed(versioned)] → index(C-11: hybrid + ACL) →
serve(search/grounded-answer surfaces) → evaluate(golden-set recall,
groundedness) → monitor(recall canaries, freshness)`. **(Classification/
extraction).** `connect → model[label(golden sets via C-4/M-19) →
train(classic | prompt | fine-tuned per the ladder) → evaluate(per-class F1 +
regression)] → serve → monitor(drift, calibration sampling)`.

**Canonical families.** Hybrid retrieval non-negotiable (BEIR: lexical catches
identifiers dense misses); open embedding families, version-stamped; the
adaptation ladder as policy — prompt → RAG → fine-tune escalation on *measured*
failure, mirroring the enterprise evidence (RAG the majority pattern,
fine-tuning the minority — Menlo 2024 economics via e10 §S3); distillation of
frontier behavior onto small in-environment models for high-volume narrow
steps; all LLM inference in-environment by default (egress governance — §6).

**Correctness profile.** ACL trimming (the security-critical stage);
embedding-version match; golden-set existence before any tuning (e10 §S5.4);
groundedness/citation checks on generation (answers carry sources, freshness,
confidence — evidence 06's "answers with lineage"); null-when-absent prompting
attested for extraction; version pinning + regression on every model/prompt
change (nondeterministic regressions are the documented failure class).

**Harness.** Retrieval: recall@k/MRR/NDCG on golden sets, per-query-type
slices, filtered-recall under production ACLs. Classification/extraction:
per-class F1 against gold, calibration sampling of LLM judgments.
Generation: groundedness/citation-accuracy suites, regression harnesses.
Baselines: BM25; the prompted-frontier baseline for any fine-tune.

**Explainability.** Citations with freshness and confidence; per-field
evidence; rationale sampling with human calibration.

**ROI.** Band-B ticket triage and document automation outright; the byte-
majority substrate (e10 §S3: most enterprise bytes are unstructured) feeding
Band-A solutions — claims notes → triage features, call notes → churn features,
contracts → supplier-risk features. Raises p(success) through **data
availability**: it converts the customer's largest unexploited data mass into
model-consumable signal. And it is the internal enabler of Auto-Suggest's
explanation surfaces and the agent's grounded memory.

**Agent.** The agent runs the adaptation ladder as learned policy (the
escalate-on-measured-failure behavior), builds golden sets before touching
architectures, and uses this template's retrieval spine as its own context
system — the one methodology the agent is literally made of.

**Data (D7).** Captures: query/click/accept logs, golden-set growth, judgment
calibrations, prompt/finetune regression histories — mirrored-form labels
across the board (e10 §S1 note 3).

#### M-11 — Document intelligence

**Template.** Documents → decisions: ingestion, OCR/text-layer recovery,
classification/splitting, field and table extraction (layout models and
multimodal-LLM prompting inside a **validation shell** — schema rules,
cross-field arithmetic, master-data lookups against M-2 entities),
confidence-routed straight-through processing with review bands, bounding-box
evidence links (e10 M21; e13 M29). The validation shell — not the extractor —
is the product.

**Graph.** `connect(ingest) → model[OCR/text-layer → classify/split →
extract(null-when-absent) → normalize → validate(schema, arithmetic, M-2
lookups)] → route(confidence: straight-through | review band) →
serve(structured records → systems of record / M-1 features) → monitor(STP
rate, per-field accuracy, exception aging)`.

**Canonical families.** Multimodal-LLM extraction inside the shell as the
modern default (the 2024–2026 shift favors prompt+validate over per-template
training — e10 M21 §6); OCR floor via open engines; cross-field arithmetic
catches most digit errors (e10 M21 §8); review bands reuse the C-4/M-2 queue
primitive.

**Correctness profile.** Null-when-absent attestation (hallucinated fields are
the failure class); validation-rule coverage per field; evidence-link required
(no bounding box, no straight-through); production-quality sample evaluation
(never clean-scan benchmarks); PII masking in review queues; STP-rate honesty
(accuracy at the declared confidence threshold, not headline accuracy).

**Harness.** Per-field accuracy/F1 (exact + normalized) on in-house gold docs
per type; STP rate at the accuracy bar; review-time per exception; exception-
aging distributions.

**Explainability.** Per-field bounding-box evidence + confidence — the
trust-building standard (e10 M21 §10); document-level validation reports.

**ROI.** Band-A claims triage (intake digitization is the gating step of the
whole pool) and Band-B document/claims automation, invoice/AP automation,
contract abstraction. ROI is unusually direct and measurable: STP rate ×
per-document handling cost is an R-ROI channel with daily cadence. Raises
p(success) through adoption — the review band gives operations a controllable
dial rather than a leap of faith.

**Agent.** The agent tunes confidence thresholds against review capacity
(the M-7 budget discipline transferred), watches per-field drift as document
mixes shift, extends schemas when new document types arrive, and feeds
extracted fields into downstream compositions.

**Data (D7).** Captures: field-level corrections (dense, cheap, perfectly
targeted labels), exception dispositions, document-type drift — one of the
fastest label flywheels in the portfolio.

#### M-13 — Computer vision

**Template.** Transfer-learning classification/detection/segmentation, and the
industrial-inspection anomaly mode (PatchCore-class: train on normal, flag
deviation — defects are rare by construction), with edge serving where line
rate demands it (e10 M24; e13 M32–M33). VLM zero/few-shot as the flexible
low-volume tier inside the same harness.

**Graph.** `connect(imaging, rig metadata) → model[annotate(C-4 QA'd) →
augment → fine-tune(pretrained backbone) | anomaly-fit(normal-only) →
evaluate(mAP/IoU, per-line slices)] → serve(edge | node) → monitor(image-
statistic drift, per-line/shift slices)`.

**Canonical families.** Pretrained-backbone fine-tuning as the default
(label-efficient, robust); anomaly-mode inspection where defect examples are
scarce; VLM prompting for heterogeneous low-volume tasks inside the same
evaluation harness; edge deployment as a C-9 pattern (the equal-peer cluster
extends to the line — evidence 06's laptop-to-datacenter node claim).

**Correctness profile.** Rig-consistency checks (train/serve imaging parity —
the CV face of train/serve parity); near-duplicate removal before splitting;
annotation QA with inter-annotator agreement (C-4); per-line/per-shift slice
floors (aggregate mAP hides the failing camera); new-defect-type routing
(anomaly tier catches what the classifier can't know).

**Harness.** mAP/IoU on grouped splits; per-line/shift slices; human-inspector
agreement as the baseline; escape-rate and false-reject-rate at the operating
point (the two numbers the plant manager owns).

**Explainability.** Localization overlays (the defect, circled); saliency for
audits; per-line drift dashboards.

**ROI.** Band-A predictive maintenance's visual arm and manufacturing
inspection (scrap/escape cost pools); Band-B healthcare ops imaging-adjacent
workflows where governance fit allows. Selective by design — pursued where the
D1 score clears the bar account-by-account (Band-C discipline for the exotic
cases), which is exactly what the admission rule asks of a perception
methodology.

**Agent.** The agent manages the annotation loop (active-learning selection via
M-19), watches drift from rig/lighting changes, and routes novel defect types
between the anomaly and supervised tiers.

**Data (D7).** Captures: inspector confirm/reject dispositions (labels),
rig-drift telemetry, escape postmortems.

#### M-14 — Speech & audio analytics

**Template.** ASR → language-stack composition: in-environment transcription,
diarization, then M-10 over the transcripts — QA scoring, compliance phrase
detection, intent/driver mining from calls (e10 M25; e13 M34). Almost entirely
a composition: the only speech-specific assets are the acoustic front-end and
WER governance.

**Graph.** `connect(audio, consent metadata) → model[ASR(+diarize) →
M-10 pipelines(classify, extract, summarize)] → serve(QA scores, compliance
alerts, driver feeds) → monitor(WER canaries, stratified)`.

**Canonical families.** Open ASR families in-environment (residency and
at-volume cost — the managed-suite alternative egresses the most sensitive
data a customer owns: its voice); custom-vocabulary adaptation; WER canary
sets stratified by accent/line quality/domain terms.

**Correctness profile.** Stratified WER floors (aggregate WER hides the
accents/lines it fails); downstream-metric evaluation (the compliance
classifier's F1 on *ASR output*, not on clean text); consent/retention
governance on raw audio; PII redaction before transcript indexing.

**Harness.** WER stratified; downstream per-class F1 on production transcripts;
calibration sampling of judgments; canary regression on every ASR upgrade.

**Explainability.** Span-level evidence (the utterance that fired the alert),
timestamped and playable for QA review.

**ROI.** Band-B ticket/interaction triage and QA at contact-center scale; feeds
Band-A churn and NBA (call-driver features are among the strongest churn
signals a B2C customer owns). Raises p(success) via data availability — voice
is the largest untapped interaction record in many verticals.

**Agent.** The agent treats speech as a connector with a WER budget: composes
transcripts into the language stack, watches canaries, and escalates
vocabulary drift.

**Data (D7).** Captures: QA dispositions on flagged spans, correction edits to
transcripts (targeted ASR adaptation data).

### Family VI — The data supply chain

#### M-19 — Label efficiency

**Template.** The label factory (e10 M32; e13 M43): active learning
(uncertainty/diversity sampling into review bands), weak supervision (labeling
functions + label models), semi/self-supervised pretraining on unlabeled mass,
LLM-assisted annotation with calibration sampling — all writing into C-4's
registry with provenance. The methodology that manufactures the supervision
every other methodology consumes.

**Graph.** `connect(unlabeled mass) → model[select(active) |
label-functions(weak) → label-model → denoise | LLM-annotate → calibrate] →
review(band, QA'd) → emit(labels with provenance → C-4) →
monitor(label-quality drift, agreement)`.

**Canonical families.** Uncertainty + diversity acquisition; labeling-function
programming over domain heuristics; LLM annotation bootstraps with human
calibration samples (the modern default for text — always calibrated, never
trusted blind); gold-set anchoring throughout.

**Correctness profile.** Provenance per label (which function/model/human,
what confidence — downstream training must be able to weight or exclude);
agreement floors on gold overlap; acquisition-bias accounting (actively-sampled
training sets are not i.i.d. — evaluation on random samples only); annotation-
guideline versioning (a guideline change is a label-distribution change).

**Harness.** Downstream-model lift per labeling dollar (the only metric that
matters); agreement vs gold; label-model calibration; cost-per-accepted-label
trends.

**Explainability.** Label provenance chains; per-function precision estimates;
disagreement surfacing.

**ROI.** Unlocks the label-scarce Band-B pools (ticket triage, document
automation at new customers, specialty NLP) and accelerates every cold-start:
p(success)'s **data-availability driver attacked directly**. In D1 terms it
shortens time-to-first-measured-ROI, which raises p(success) and lowers the
customer-investment denominator simultaneously.

**Agent.** Label acquisition is a budgeted sequential decision problem — the
agent's natural idiom (§2.4): it decides what to ask humans, when weak
supervision suffices, and when to stop labeling because the downstream lift
curve has flattened.

**Data (D7).** This template *is* D7 machinery; its own capture is the
acquisition-policy → downstream-lift record that teaches the agent
labeling-budget judgment.

#### M-20 — Privacy-preserving learning & synthetic data

**Template.** Learning across boundaries the data cannot cross (e10 M33; e13
M44): federated training across subsidiaries/regions/partners (the true-hybrid
cluster is natively multi-site); differential privacy where formal guarantees
are legally required, with budget ledgers; synthetic data generation with
TSTR (train-synthetic-test-real) validation and membership-inference attack
testing — including the §2.8 use: synthetic task corpora for base-agent
training that provably encode no customer's rows.

**Graph.** `connect(per-boundary) → model[federated-train(secure aggregation) |
DP-train(ε-budgeted) | synthesize → validate(TSTR + attacks)] →
serve(models/corpora with guarantee documents) → monitor(budget ledger,
attack regression)`.

**Canonical families.** Federated averaging with secure aggregation for
cross-boundary training; DP-SGD where guarantees are contractual; deep
generative synthesis validated adversarially (a synthetic corpus ships with its
attack results, or it doesn't ship).

**Correctness profile.** Guarantee-claim discipline (an ε is a stated,
ledgered number, never marketing); TSTR floors before any synthetic corpus is
used downstream; membership-inference regression suites; subgroup-utility
checks under DP (privacy noise degrades minorities first — a slice-evaluation
obligation, e10 §S5.9); boundary attestation (federated runs prove data
locality in the audit record).

**Harness.** TSTR deltas vs real-data training; attack success rates; ε-ledger
accounting; per-subgroup utility under the guarantee.

**Explainability.** Guarantee documents (what is protected, from whom, at what
ε); synthesis provenance; boundary-attestation reports.

**ROI.** Unlocks Band-B healthcare ops and multi-entity financial customers
(the governance-heavy segments D3 names as core ICP) where nothing ships
without formal guarantees — a **governance-fit p(success) driver** that is a
market-access key rather than a lift mechanism. Also the compliance substrate
of the §2.8 generalized-asset boundary: synthetic corpora and DP aggregates
are *how* cross-customer learning stays provably clean.

**Agent.** The agent selects the privacy mechanism per boundary (access control
vs DP vs federation — a governance decision it proposes and humans ratify,
AC-3-adjacent), maintains budget ledgers, and schedules attack regressions.

**Data (D7).** Captures: guarantee-vs-utility frontier measurements per data
shape — priors for honest privacy-cost conversations at the next
governance-heavy customer.

### The methodology × use-case ROI map

The consolidated D5 admission evidence: which Band-A/B use cases (kernel D4)
each methodology serves, and its principal p(success) contribution. ● = core
methodology of the solution family · ○ = composing/supporting role. Use-case
columns abbreviate kernel D4's Band-A list (churn & retention, collections,
demand forecasting, fraud & fin-crime, predictive maintenance, lead scoring,
next-best-action, claims triage, KPI drivers, automated outbound) and Band-B
(pricing, attrition, ticket triage, document automation, supplier risk,
healthcare ops).

| Methodology | Churn (A) | Collect. (A) | Demand (A) | Fraud (A) | PdM (A) | Leads (A) | NBA (A) | Claims (A) | KPI (A) | Outbound (A) | Pricing (B) | Attrition (B) | Tickets (B) | Docs (B) | Supplier (B) | Health (B) | Principal p(success) driver |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| M-1 tabular | ● | ● | ○ | ● | ● | ● | ○ | ● | ● | ○ | ○ | ● | ○ | ○ | ● | ○ | measurability + actionability |
| M-2 entity res. | ○ | ○ | ○ | ● | | ○ | ○ | ○ | | ○ | | | | ○ | ● | ● | data trustworthiness (all entity UCs) |
| M-3 segmentation | ○ | | | | | ○ | ○ | | ○ | ● | ● | ○ | | | | | adoption (business-legible units) |
| M-4 forecasting | | ● | ● | | ○ | | | | ● | | ○ | | | | | ● | measurability (FVA readout) |
| M-5 survival | ● | ○ | | | ● | | | | | | | ● | | | | | actionability (timing) |
| M-6 causal/uplift | ● | ● | | | | | ● | | | ○ | ● | | | | | | measurability (the ROI engine) |
| M-7 anomaly | | | | ● | ● | | | ○ | ● | | | | | | ○ | ○ | label-free start + label factory |
| M-8 rec/NBA | ○ | | | | | ○ | ● | | | ● | ○ | | | | | | actionability (the last mile) |
| M-9 rank | ○ | ● | | ○ | | ● | ○ | ● | | | | | ○ | | | | adoption (queue yield) |
| M-10 language | ○ | | | | | | ○ | ○ | ○ | ○ | | | ● | ● | ○ | ○ | data availability (byte majority) |
| M-11 documents | | | | ○ | | | | ● | | | | | ○ | ● | ○ | ● | measurable STP economics |
| M-12 graph | | | | ● | | | | | | | | | | | ● | | data availability (relational signal) |
| M-13 vision | | | | | ● | | | ○ | | | | | | ○ | | ○ | selective (D1-scored per account) |
| M-14 speech | ○ | | | | | | ○ | | | | | | ● | | | ○ | data availability (voice record) |
| M-15 bandits/RL | | | | ○ | | | ● | | | ● | ● | | | | | | cheap continuous measurement |
| M-16 optimization | | ● | ● | | ● | | ○ | | | ○ | ● | | | | | ○ | actionability (the plan is the action) |
| M-17 Bayesian/UQ | | ○ | ● | | ○ | | | | ○ | | ● | | | | | ○ | honest uncertainty portfolio-wide |
| M-18 ensembling | ○ | ○ | ○ | ● | ○ | ○ | | ○ | | | | | | | | | accuracy where the point carries money |
| M-19 label eff. | | | | ○ | ○ | | | ○ | | | | | ● | ● | ○ | ○ | data availability (label scarcity) |
| M-20 privacy/syn | | | | ○ | | | | | | | | | | | ○ | ● | governance fit (market access) |
| M-21 streaming | | | | ● | ○ | | ● | | ○ | | | | ○ | | | | in-flight actionability |

Two readings. **Column-wise:** every Band-A use case is served by ≥3
methodologies — the composition depth that makes solutions robust and gives
the agent alternatives when a p(success) driver fails (no labels → M-7/M-19
paths; no experiment culture → M-15's self-measuring allocation). **Row-wise:**
every methodology touches ≥2 Band-A/B pools or raises p(success) portfolio-wide
— the D5 admission rule, satisfied line by line. No methodology is admitted on
elegance.

---

## 5. The correctness gate as architecture

The gate is the differentiation made executable (evidence 06: "Generating a
workflow is easy. Generating a correct one is the product") and, in the Auto-RL
era, the load-bearing wall of agent governance (kernel D2.5: "correct by
construction applies to agents too"). Architecturally it is **a compiler pass
over the execution graph plus an evidence evaluator over harness artifacts** —
not a linter, not a checklist document, and not a stage that can be traded for
velocity (kernel D10.5).

### 5.1 Mechanics

1. **Every check is a typed rule bound to node types.** A `featurize` node
   carries point-in-time obligations; a `train` node carries split + baseline
   obligations; a `serve` node carries parity, placement, and monitoring
   obligations; an agent `act` tool carries autonomy-class and blast-radius
   obligations. Methodology templates bundle rules into **gate profiles** (§4);
   a solution graph inherits the union of the profiles of the templates it
   composes.
2. **Three check tiers.** *Static* (graph shape and metadata: label spec
   present, windows disjoint, holdout node exists, approval node present per
   the declared autonomy class) — evaluated at compile time. *Data-dependent*
   (profile-driven: schema type-check vs live sources, distribution assertions,
   ER cluster alarms, censoring audits) — evaluated against C-1's live profiles
   and samples. *Empirical* (harness-driven: OOT metrics vs baselines and
   floors, calibration, stability, scenario-suite pass rates) — evaluated from
   C-8 artifacts.
3. **Block-with-reason is a contract.** A failed gate emits a structured
   verdict: the failed rule, the implicated node(s), the evidence (numbers,
   samples), and where known the remediation ("feature `days_since_close`
   references a post-outcome field; remove or re-derive as-of snapshot").
   Verdicts are stored with the graph's lineage in the store — the same audit
   surface governance reads — and verdicts are *machine-consumable*: the
   agent's repair loop and its correctness-anticipation training (§2.1, §2.3
   R-verifier) are built on them. "Gaps are surfaced as gaps, not papered
   over" (evidence 06).
4. **Severity: reject vs waiver.** Hard rules (leakage, censored-as-negative,
   missing ACL trimming, missing approval node, missing propensity logging on
   decision endpoints) cannot be waived by anyone — human or agent. Soft rules
   (baseline margin, calibration tolerance) can be waived only by an
   identity-scoped, audited **human** waiver that appears in the deploy record;
   waiver authority is never delegated to the agent, at any autonomy class.
5. **The gate is versioned and self-tested.** Rules ship with seeded-bug
   fixtures (a deliberately leaky graph, a censored-as-negative graph, an
   over-merged entity set, a reward-hacking agent trajectory); a gate release
   that fails to catch its own fixtures does not ship. Every production
   incident anywhere becomes a rule + fixture everywhere — the §2.8
   generalized-asset flywheel in its most valuable form. The gate's
   false-negative rate is an engineering metric (§7).

### 5.2 Consolidated check catalog

The union of e10 §S5's twelve disciplines and e13 synthesis 5's
failure→safeguard table, expressed as the gate's rule families. Owner = the
component whose team maintains the rule; Applies to = the methodology profiles
that bind it (per §4's dossiers).

| # | Check family (owner) | Severity | Applies to |
|---|---|---|---|
| G-1 | Schema type-check vs live source profile (C-1) | hard | all M-1…M-21 |
| G-2 | Point-in-time / as-of enforcement; event-time discipline (C-3) | hard | M-1, M-3, M-4, M-5, M-6, M-7, M-8, M-9, M-12, M-15, M-16, M-18, M-21 |
| G-3 | Target-leakage audit + implausible-metric alarm (C-3/C-5/C-7) | hard | all supervised profiles (M-1, M-4…M-9, M-12, M-13, M-16 upstream, M-18) |
| G-4 | Split integrity: temporal + grouped-by-entity + dedup (C-8) | hard | all learning profiles |
| G-5 | Label-spec presence, censoring rigor, survivorship (C-4) | hard | M-1, M-4 (implicit), M-5, M-6, M-7, M-8, M-9, M-10, M-11, M-13, M-19 |
| G-6 | Train/serve parity via the feature registry (C-3/C-9) | hard | all serving profiles |
| G-7 | Baseline supremacy on the declared harness (C-8) | soft (audited waiver) | all — baselines per §4 dossiers |
| G-8 | Entity-consistency / ER precedence (C-2) | hard | all entity-level profiles |
| G-9 | Causal honesty: pre-treatment-only, provenance stamping, outcome-metric rejection (M-6 profile) | hard | M-6, M-8, M-15, M-16 (uplift-fed allocation) |
| G-10 | Feedback-loop containment: persistent holdouts, exploration slices, propensity logging (C-10/C-4) | hard | M-1, M-5, M-6, M-7, M-8, M-15, M-21 — and the agent's own reward loop (§2.3) |
| G-11 | Slice/segment evaluation + calibration tolerance (C-8) | soft | all |
| G-12 | Monitors + measurement loop wired; retrain provenance (C-10) | hard | all solution-class graphs (kernel D6 definition of done) |
| G-13 | Alert/review budget vs declared human capacity (C-10) | hard | M-2, M-7, M-9 queues, M-11, M-19 |
| G-14 | ACL trimming, PII handling, index-freshness (C-11) | hard | M-2, M-8, M-10, M-11, M-12, M-14; every retrieval surface incl. agent memory |
| G-15 | Uncertainty consumed downstream (quantile/scenario inputs; point-forecast rejection) (C-8/M-17) | hard in stochastic domains | M-4→M-16, M-17 consumers |
| G-16 | Version pinning + regression evidence on every model/prompt/tool change (C-8) | hard | all; most binding on M-10, M-11, M-14, and the agent |
| G-17 | Autonomy-class conformance: approval nodes present per AC declaration; blast-radius profile; scenario-suite floor per class (agent profile, §2.6) | hard | every agent-operated graph; every AC-3 action path |
| G-18 | Privacy-guarantee discipline: ε ledgers, TSTR floors, attack regressions (M-20 profile) | hard | M-20 and any synthetic-data consumer, incl. §2.8 corpora |
| G-19 | License/SBOM manifest per step image (§6 red-lines) | hard | all — a governance gate check |

Column-wise per methodology (§4 dossiers) this catalog is each template's gate
profile; row-wise it is each component team's obligations; and the whole table
is the contract with [`04-solutions-catalog.md`](04-solutions-catalog.md):
kernel D6's "passed the correctness gate" means *this*, for the solution's
methodology mix.

### 5.3 The block-with-reason contract (normative)

A gate verdict is a typed artifact:

```
verdict {
  graph_id, graph_version, author_kind: human | compiled-from-intent | agent,
  outcome: pass | block | pass-with-waivers,
  checks: [ { rule_id, tier, severity, result,
              evidence: {metrics, samples, nodes},
              remediation_hint } ],
  waivers: [ { rule_id, waived_by (human identity), justification, expiry } ],
  harness_artifacts: [refs], lineage: ref, timestamp
}
```

Three properties are normative. **(1) Reasons are actionable** — every blocking
check names its nodes and, where known, the remediation; a gate that says only
"no" trains neither humans nor agents. **(2) Verdicts are permanent lineage** —
pass or block, the verdict rides with the graph version forever; audit reads
the same record the agent learns from. **(3) Waivers expire** — a waived soft
rule re-evaluates at expiry; permanent exceptions do not exist.

### 5.4 One gate for three authors

The same gate, the same rules, the same evidence standards apply to
**human-authored**, **compiled-from-intent**, and **agent-initiated** graphs —
`author_kind` is recorded for analytics and never consulted by any rule. This
symmetry is a strategic property, not an implementation convenience:

- It is what makes **agent autonomy governable** (§2.6): AC-1's
  "deploy gate-passed read-only graphs autonomously" is safe *because* the
  gate does not relax for agents — and does not trust them either.
- It is what makes **self-service credible** (evidence 06: governed
  self-serve): the analyst's intent-compiled graph and the ML engineer's
  hand-tuned graph clear the same bar, so the organization can stop
  arbitrating by author status.
- It is what keeps the **reward architecture honest** (§2.3): R-verifier
  rewards mean something only if the verifier is incorruptible by its
  principal beneficiary.

### 5.5 The floor

Kernel D2's correctness commitment, given a unit: **each methodology template
carries a declared floor on its declared harness** — the share of gated
evaluation tasks its compiled graphs must pass — and self-service deployment of
a template is available only while its floor holds (measured continuously from
verdict history, not certified once). Floors are per-template, never pooled: a
strong M-1 cannot subsidize a weak M-4. Agent autonomy classes add their own
floors per §2.5 (capability pass^k + calibration), which compose with template
floors rather than replacing them. Floor values are set with kernel/exec
sign-off per template and reviewed against realized incident rates (Appendix A
T-4).

---

## 6. Build vs integrate

Policy unchanged in spirit from v1, restated for the future state: **integrate
the numerics, build the correctness — and now also: build the agent.** Mature
OSS numeric libraries are the right supply chain for algorithm families
(nothing in the compendia suggests we would out-implement XGBoost or HiGHS);
what no one sells is the correct-by-construction layer and the customer-trained
agent. The proprietary core is:

1. **The graph compiler + methodology templates** — intent/artifact → correct
   graph is the product.
2. **The correctness gate** (§5) — the differentiation made executable,
   including the fixture corpus (§2.8 asset).
3. **The point-in-time feature layer (C-3)** — native to the store that holds
   the data; generic feature stores bolt this on, ours *is* the database.
4. **The base agentic RL model + its training/eval harnesses** (§2) — the
   anchor asset (evidence 07 catalog #3); reward specs, scenario suites,
   verifiers, and the personalization layer are the moat, whatever open
   model weights sit underneath at any given time.
5. **The engine itself** — indexes (C-11), tiered storage, compute-near-data,
   the equal-peer cluster (evidence 06): never outsourced to external vector
   DBs, warehouses, or orchestration.

Integration runs through **sandboxed, pinned, checksummed step images**
executing compute-near-data: OSS runs inside the graph's nodes; the graph, the
gate, the store, and the agent never take a runtime dependency on any single
library ecosystem.

| Capability | Decision | Choice + license | Notes |
|---|---|---|---|
| Graph compiler + templates | **Build** | — | The product. |
| Correctness gate | **Build** | — | Assertion-library ideas (Great-Expectations-class) absorbed as rule patterns, never as a dependency. |
| Point-in-time feature layer (C-3) | **Build** | — | The single highest-leverage correctness asset. |
| Base agent + RL/eval harnesses | **Build** | open-weight LLMs underneath, reviewed per model license | Post-training toolkits (TRL/OpenRLHF-class, Apache-2.0) integrated; rewards, verifiers, suites, personalization are ours. |
| ER engine (C-2/M-2) | **Integrate → absorb** | Splink-class FS (MIT), libpostal (MIT) | Store-resident incremental ER is ours; **avoid Zingg (AGPL)**. |
| GBM training (C-5) | Integrate | XGBoost (Apache-2.0) default; LightGBM (MIT) at scale | Survival objectives via XGBoost native `survival:cox`/AFT — **avoids scikit-survival (GPLv3)**; lifelines (MIT) for Cox reporting. |
| Tuning (C-6) | Integrate | Optuna (MIT) | Budget wrapper + warm-start priors are ours. |
| Explanation (C-7) | Integrate | shap (MIT) | TreeSHAP path canonical. |
| Forecasting (M-4) | Integrate | statsforecast/mlforecast/hierarchicalforecast (Nixtla, Apache-2.0) | Prophet not a dependency (frequently beaten by ETS/ARIMA — e10 M5 §6). |
| Anomaly (M-7) | Integrate | PyOD (BSD-2), scikit-learn (BSD-3), River (BSD-3) for streaming | |
| Clustering (M-3) | Integrate | scikit-learn (BSD-3), hdbscan (BSD-3) | |
| Causal/uplift (M-6) | Integrate | EconML (MIT) primary; CausalML (Apache-2.0) reference | Holdout + OPE machinery ours. |
| Recsys candidate gen (M-8) | Integrate | implicit (MIT); EASE trivial on our stack | Two-tower/ANN cascade on C-11. |
| Ranking (M-9) | Integrate | LightGBM/XGBoost ranking objectives | Free on the C-5 stack. |
| Embeddings (M-10) | Integrate | BGE/GTE-class open encoders (Apache-2.0/MIT) | Version-stamped; commercial embedding APIs off by default (egress). |
| ANN / vector index (C-11) | **Build (engine-native)** | HNSW-class algorithms | External vector DBs contradict the substrate promise (evidence 06 §07). |
| OCR / doc parsing (M-11) | Integrate | Tesseract (Apache-2.0), PaddleOCR (Apache-2.0) | Cloud OCR off by default (egress); the validation shell is ours. |
| ASR (M-14) | Integrate | open ASR families, license reviewed per model | In-environment; managed suites egress voice data. |
| LLM inference (M-10/agent) | Integrate, customer-controlled | open-weight in-environment; provider APIs only with explicit customer consent | Pinning + regression gate-required either way (G-16). |
| Bandits/OPE (M-15) | Integrate-thin | standard estimators on our decision-endpoint schema | The propensity-logged endpoint is ours. |
| Optimization (M-16) | Integrate | OR-Tools CP-SAT (Apache-2.0), HiGHS (MIT) | Gurobi/CPLEX per-deal only — commercial licenses never a platform assumption. |
| Bayesian/UQ (M-17) | Integrate | PyMC/NumPyro-class (Apache-2.0); conformal libs (BSD) | Coverage governance ours. |
| Privacy (M-20) | Integrate | Flower/Opacus-class (Apache-2.0/BSD) | Guarantee ledgers + attack suites ours. |
| Experiment analysis (M-6 native) | Build-thin | statsmodels/scipy (BSD-3) underneath | Assignment + SRM + CUPED; not an experimentation platform. |
| Drift monitoring (C-10) | Build on the store | (Evidently, Apache-2.0, as reference behavior only) | Monitors are graph nodes over native run history. |

**License red-lines (unchanged, permanent).** **No GPLv3/AGPL in anything
shipped into a customer environment** — scikit-survival (GPLv3) and Zingg
(AGPL) are the two standing near-misses, named so they stay caught.
Apache-2.0/MIT/BSD only in step images. Every step image carries an SBOM +
license manifest generated at build and checked by the gate (G-19): an image
with an unvetted license fails deploy as a governance verdict, identical in
mechanics to any other block-with-reason. Model weights carry their own
licenses — reviewed per model, recorded in the registry; "open-weight" is a
license class to be read, not a vibe. Commercial per-seat/per-core solver or
OCR licenses are per-deal commercial decisions, never platform assumptions.

---

## 7. Engineering metrics (elaborating kernel D9)

All computable from the store's run history, gate verdicts, and decision logs —
the platform measures itself with the same lineage it sells. Kernel D9's
supporting metrics, given engineering definitions and instrumentation:

| Metric (D9) | Engineering definition | Instrumentation | Posture |
|---|---|---|---|
| **Correctness-gate pass rate** | Share of compiled graphs passing on first evaluation, per template per author_kind; plus continuous floor conformance (§5.5) | Gate verdict records | Floors hold per template; first-pass rate is a compiler/agent-quality signal, **not maximized** — a 100% first-pass gate is a gate that checks nothing |
| **Agent autonomy share** | Fraction of platform actions executed at AC-0/1/2 without human intervention, per solution family and action class; escalation and approval-latency distributions alongside | Trace store + approval surfaces (§2.6) | Rises only behind capability floors + calibration (§2.5); an autonomy share that rises while calibration degrades is an incident, not a win |
| **p(success) calibration** | Ex-ante p(success) (D1 scoring, incl. the agent's own estimates) vs ex-post solution outcomes; reliability curves per use-case family | D1 scoring records joined to measured-ROI readouts | The kernel's companion metric, owned jointly with 02/07; the agent's contribution measured separately (§2.5) |
| **Data-flywheel coverage** | Share of deployed solutions with complete D7 capture live: decisions with propensities + actions + outcomes joined; per-solution capture-completeness score | C-4 registry + decision-log audits | 100% by construction for new deploys (G-10/G-12 gate-enforced); tracked because capture *decays* — feeds break, owners change |
| Reward-integrity incidents | Detected reward-hacking behaviors, holdout violations, harness-gaming attempts (human or agent) | §2.3 red-team suites + holdout monitors | 0 tolerated; every detection becomes a permanent fixture |
| Gate false-negative rate | Seeded fixtures caught / total per release; production incidents a rule should have caught | Gate self-test + incident postmortems | 100% fixture catch to ship; postmortem-derived rules land within one release |
| Measured ROI per solution | The D8 readout itself (uplift, FVA×economics, STP×cost, realized-vs-plan) | C-8 measurement loops | The central metric (D9) — this document's contribution is that every methodology declares *which* readout it feeds |
| **Intelligence Velocity** (supporting, per kernel) | Median intent → gate-passed → running-on-target wall clock, per template, decomposed per stage span | Node-run span events | Tracked, explicitly not central (kernel v2); the agent should compress it as a side effect, never at the gate's expense |
| Governance violations | Unauthorized access, egress, unapproved AC-3 action, waiver misuse | Audit surface | **0** (kernel guardrail); any violation halts the affected autonomy class pending review |
| Toolbox economics | New-component code per additional solution; % of a new solution's nodes drawn from existing components; agent-composed share of new solutions | Template/component registry | The agent-tool-economics mirror of the kernel's structural thesis (§1); expected to trend toward composition-dominant |

---

## Appendix A — Tensions for kernel review

Recorded per the kernel's rule: elaborations don't contradict; genuine tensions
go here and resolve in the kernel first.

- **T-1 — Q5 proposal needs ratification.** §2.6's autonomy classes (AC-0…AC-3)
  and per-family defaults are this document's proposed answer to kernel open
  question 5 (filed jointly with 04's solution families). Until the kernel
  adopts them, the conservative reading holds: everything externally visible is
  approval-gated.
- **T-2 — The Q4 boundary is proposed here but owned by doc 08.** §2.8's
  generalized-asset classification (and its boundary test) overlaps kernel open
  question 4, which assigns the definition to the CDO in
  [`08-data-strategy.md`](08-data-strategy.md). If 08's boundary differs, 08
  wins and §2.8 is revised — flagging now so two documents don't ship two
  boundaries.
- **T-3 — ROI attribution across composed methodologies.** D8 prices modules
  against measured ROI, and §2.3 pays the agent from the same readout — but a
  solution composes several methodologies (demand = M-4 + M-16 + M-17), and
  neither the kernel nor 06-financial specifies how one measured ROI allocates
  across composed templates for portfolio scoring (D1 is per use case) or for
  reward shaping. Proposed: attribute at the solution level only; never
  decompose ROI to methodology grain (the decomposition would be fiction).
  Kernel/CFO to ratify.
- **T-4 — Floor values are undefined.** §5.5 defines the floor's *unit* (per
  template, on its declared harness, continuously measured) but kernel v2
  carries no numeric floor. Templates need declared values with exec sign-off;
  proposed to set them jointly with the D9 correctness-pass-rate review rather
  than in this document.
- **T-5 — Anti-portfolio wording vs Band-A fraud decisioning.** D4's
  anti-portfolio excludes "autonomous high-stakes decisions without human
  gates" while D4's Band A includes fraud & financial-crime *decisioning*.
  §2.6 reconciles them (AC-3: decisioning ships approval-gated with a
  per-action-class graduation path), but the kernel should state that reading
  explicitly so sales and governance narratives can't diverge.
- **T-6 — Shared-MCP exposure convention.** The One Orama convention (evidence
  07) requires the platform owner's explicit per-item decision before adding
  functionality to the shared Orama MCP voice. This document treats every
  methodology tool contract as MCP-exposable *within the customer's Zetta
  surface* (§2.7) and files exposure on the shared org-wide voice as per-item
  asks. Kernel may wish to pre-authorize the methodology-toolbox registry as a
  scoped surface to remove per-item friction.
- **T-7 — Reward-hacking guardrails deserve kernel-level standing.** §2.3's
  invariants (gate outside the learnable surface; holdout inviolability; waiver
  authority never delegated to the agent) are load-bearing for D2 and D7.2 but
  currently live only in this elaboration. Proposed: promote the three
  invariants into the kernel (D2 or D7) so no future elaboration can trade them
  away locally.
- **T-8 — Metrics addition.** Propose adding **reward-integrity incidents** and
  **toolbox economics** (§7) to D9's supporting metrics: the first is the
  guardrail D7.2 implies but doesn't name; the second directly measures the
  structural thesis the kernel states in §1 ("many use cases ≫ few
  methodologies") and currently tracks only by proxy.
