# Project: Orama Platform — Intelligence Velocity

> Slug `orama-platform-2`: the Orama Zetta-native productization, distinct from the earlier `modules/orama-platform` (prior art). **Working product name: "Orama Zetta"** (used in [`briefs/`](briefs/) — the audience-facing explainers / video-script source).

**Status:** Proposed / scoping — 2026-06-23. PM scope drafted; **near-term focus is the Orama Zetta desktop GUI application.** Gated on Orama Zetta engine maturity (see Risks). Wraps [`~/dev/homer6/zetta`](../../../) (Orama Zetta engine) + draws business context from `~/dev/homer6/zetta-business`.

**Tagline: *Orama Zetta — Intelligence Velocity for Big Thinkers.***

**Intelligence Velocity** — the product name *is* the metric: the time from **intent → deployed, running, correct intelligence.** Where Railway compressed *deploy-a-web-app* velocity and Databricks owns *data-platform* power, Orama Platform compresses the whole arc — *describe a data/AI problem → get a correct, governed, deployed system* — from quarters to minutes. **"For big thinkers"** names who it's for: the people whose ideas outrun their cycle time (see [`briefs/04-intelligence-velocity.md`](briefs/04-intelligence-velocity.md)).

## What this is

A **desktop GUI application + control plane for Orama Zetta** — **auto-ANI for the enterprise**: automated, production-grade *narrow* intelligence, built and deployed in minutes. You describe a data/AI problem in plain language — or hand over the artifacts you already have (an existing workflow, a SQL script, a notebook) — and the app produces a **robust, correct, professionally-architected data-science / data-engineering execution graph**, then **deploys Orama Zetta nodes and the workflows onto your infrastructure** (Kubernetes / AWS / Azure / GCP / Oracle Cloud / bare metal / on-prem) and runs them (workflows + indexes). It does the work of three disciplines — the **platform engineer**, the **data engineer**, and the **data scientist** — so your team can self-serve and deploy in minutes. Think **self-deploying Databricks**, or **Railway for private-cloud data/AI** — but with enterprise governance and access controls. *From the creator of OpenShift.*

**Orama Zetta is the spine — the world's first adaptive database** (more than a database, an AI compute cluster, or an infrastructure orchestrator). There is no separate Postgres control plane: the platform's own state (the deployed graph, node registry, run history) lives in Orama Zetta's replicated store, and Orama Zetta is also the data + compute substrate the workflows run on — tiered storage (move expensive source data into cheap in-memory indexes → cold storage, re-warm on request), **compute-near-data** (embedded Lua / a DataFrame API so user- or agent-generated code runs on the node where the data lives), and **true hybrid** execution: one cluster spanning every vendor and architecture (CPU / GPU / ASIC; macOS / Linux / Windows; x86 / ARM; AWS / GCP / Azure / Oracle Cloud / Kubernetes / bare metal), built in **C++ and use-case-specific, fused GPU kernels** for native speed and transformational cost profiles — ultimate control over cost, flexibility, and resilience, not susceptible to a single vendor's outages.

The product collapses three disciplines into one app: the **platform engineer** (provision + govern it on real infrastructure), the **data engineer** (connect, clean, shape the data), and the **data scientist** (train the models and pipelines — often an ensemble — over it).

**The central item is the AI/data project.** Orama Zetta is about *creating and managing* AI/data projects — and since **most AI projects fail**, its real job is the **data-project-management** discipline that makes them succeed (problem → right data → correct-by-construction models and pipelines → governed deploy → monitor + iterate). A **use case** (e.g. churn intelligence) is a **generic AI-project type** any team runs on its own data; the first is churn — *featurize → XGBoost → SHAP → ranked + explained*, with optional action/playbook components (Motive is the first instance, not a bespoke build). The first use case is built via a **wtm worktree plan** over its issues. The engine is general AI (any model type — XGBoost, RL, LLM), not one method.

## Why

The people who can take a problem from "natural language" to "a correct, governed, deployed data/AI system" are scarce, and everything funnels through them — the **shift-left platform-engineering bottleneck** (see [`motive-problem-definition`](../motive-problem-definition/)). Today a business user files a ticket and waits weeks; a prototype lives in an automation tool or a notebook and never becomes production-correct or governed; raw-source queries at scale are slow and expensive. Platform 2 is the bet that an AI-driven GUI can **shift that capability left** — to the developer or analyst at the edge — while keeping the guardrails (governance, residency, access control) that make self-service safe in an enterprise. It's the productization of the company's data-locality + learning-from-your-data thesis, with Orama Zetta as the engine.

The first customer-shaped slice already exists as [`motive-delivery`](../motive-delivery/) (the Motive build — "replace your n8n workflow, deploy it, run it, governed"). Platform 2 is the generalization of that wedge into a product.

## Initial scope (near-term = the GUI app)

- [`vision-and-strategy.md`](vision-and-strategy.md) — the three-disciplines vision; strategy (target users, pains, market, focus/non-focus, risks, anti-positioning); the Orama Zetta-as-spine model.
- [`personas.md`](personas.md) — the bottlenecked platform/AI lead (Charles), the by-hand data scientist, the waiting analyst, the AI agent.
- [`user-stories.md`](user-stories.md) — key stories with acceptance criteria.
- [`roadmap.md`](roadmap.md) — problems in priority order; **R1 skateboard = the GUI app doing the thinnest valuable thing on *today's* Orama Zetta**; the foundational problems are the Orama Zetta capability gaps.
- [`success-metrics.md`](success-metrics.md) — intent→deployed time, generated-graph correctness, self-service rate, cost, governance guardrails.
- [`ideal-design-partners.md`](ideal-design-partners.md) — who to recruit as design partners (researched via a 3-model council): the decision + 120-day program, the ICP + selection scorecard, ranked target verticals, champion profile + buying signals, a candidate shortlist, and the reusable research prompt. Raw council output in [`research/`](research/).
- [`personalized-intelligence.md`](personalized-intelligence.md) — the **personalization thesis** ("it knows you and your data") and its three named features: **Auto-Suggest** (personalized use-case suggestions — the *what*), **Auto-RL** (auto-trained long-horizon agentic RL on your data — the *how*, and the AI-driven answer to the "trained on your own data" hard part), and **Personalized MCP** (the MCP interface adapts to your preferences). Communicated as the `/technology` "04 — Personalized Intelligence" section; to be projected into the wtm `ORAMA-ZETTA` blueprint.

## GitHub

- Tracking issue: https://github.com/oramasearch/amaro-bridge/issues/128

## Related projects

- [`../motive-delivery/`](../motive-delivery/) — the **first customer-shaped slice** of this product (Motive build); proves the loop on one customer before generalizing.
- [`../motive-problem-definition/`](../motive-problem-definition/) — the shift-left platform-engineering / developer-velocity problem this productizes.
- [`../cache/`](../cache/) · [`../oramacore-as-turbopuffer-alternative/`](../oramacore-as-turbopuffer-alternative/) — the materialization/tiered-storage substrate thesis Orama Zetta carries.
- [`../desktop-ecosystem/`](../desktop-ecosystem/) — desktop component/runtime patterns; the GUI app is a control-plane sibling.
- [`modules/orama-platform`](../../../modules/orama-platform/) — **prior art only** (the earlier federation/`orly`/frameset/experience-river architecture). Platform 2 borrows ideas (an execution-graph IR, placement dial, controller→k8s mapping) but is **not** structured as inheriting it, and supersedes its Postgres-spine decision (Orama Zetta is the spine).

## Open questions

- **The Orama Zetta gap is the gating risk.** Today Orama Zetta = CRDT cluster + JSONL storage + a Postgres-SQL *subset*. The DDF API, embedded Lua, tiered storage, indexing, k8s/cloud deploy, Postgres wire protocol, and auth/RBAC are **unbuilt** (verified against the code). What's the minimum Orama Zetta surface the GUI needs for R1, and what's the build order? (This roadmap and Orama Zetta's roadmap must be co-sequenced.)
- **GUI substrate:** build on Orama Zetta's existing headed mode (SDL3 + Dear ImGui, "desktop is a cluster member") or a new Tauri/web shell? Does the control-plane GUI ship inside the `zetta` repo or as a separate Orama app?
- **Control-plane-on-Orama Zetta:** Orama Zetta lacks transactions + leader election today — is its CRDT store trustworthy enough to hold control-plane state (registry, run cursors, locks) in R1, or does that need the planned leadership-by-lease first?
- **Execution-graph IR:** reuse `orly` (from orama-platform 1) as the graph representation, or define a Orama Zetta-native one?
- **Graph correctness** (the elephant): how do we guarantee a generated graph is "robust, correct, professionally architected" — what's the validation/eval gate before it deploys?
- **Relationship to orama-platform 1:** does this graduate into / merge with the `modules/orama-platform` repo, or stay a distinct Orama Zetta-native product?

## Source

The 2026-06-23 sessions ([Casey/Steve](../../meetings/2026-06-23-casey-steve/), [Casey/Issac/Steve](../../meetings/2026-06-23-casey-issac-steve/)) — the "AI engineer in a bottle" / app-inside-the-database thesis; Orama Zetta engine (`~/dev/homer6/zetta`) + business context (`~/dev/homer6/zetta-business`); Charles's n8n workflows ([analysis](../../meetings/2026-06-03-casey-charles-issac-juan-matt-nathanael-steve/charles-n8n-workflows.md)) as the canonical input artifact.
