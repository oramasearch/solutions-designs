# Orama Platform — Vision & Strategy

*Intelligence Velocity for Big Thinkers.*

## Vision (timeless)

**Anyone on a team can turn a question into deployed, running, correct intelligence — in the time it takes to describe it.**

Today, getting from "I want to understand churn" (or fraud, or demand, or risk) to a *correct, governed, production system that answers it* takes the scarce few who can do platform engineering, data engineering, and data science at once — and everyone else waits in their queue. Orama Platform stands in for all three disciplines — the **platform engineer**, the **data engineer**, and the **data scientist** — delivering the production-grade infrastructure those three specialists would build: describe the problem in plain language, or hand over the artifacts you already have, and get back a robust, professionally-architected execution graph, deployed on infrastructure you control, running and indexed — with the guardrails an enterprise needs. The bottleneck stops being people; it becomes the speed of thought.

**Intelligence Velocity** is the single idea: collapse the arc *intent → architected → deployed → running → learning* from quarters to minutes, without giving up correctness or governance. **Production-grade AI, deployed in minutes** — your team can self-serve and deploy in minutes instead of waiting quarters in the platform team's queue.

**Auto-ANI for the enterprise.** Everyone's chasing AGI; what a company needs is **auto-ANI: automated, artificial _narrow_ intelligence** — production-grade, specialized to one job and your data, optimized for cost, governance, and personalized accuracy. **If you're not training on your data, you're not fully using AI** — true predictive power comes only from training on your own data.

**The unit is the AI/data project — and the real job is managing it to success.** *Most AI projects fail* (they start backward, bolt models onto messy foundations, overpromise, and never reach production). The central item in Orama Zetta is the **AI/data project** (the `Project`) — the thing a user creates, manages, and ships — and the product's job is the **data-project-management** discipline that makes it *succeed*: problem → right data → correct-by-construction models and pipelines (often an ensemble, rarely a single model) → governed deploy → monitor + iterate. A **use case** (e.g. churn intelligence) is a **generic AI-project type** any team instantiates on its own data — the first is churn (featurize → XGBoost → SHAP → ranked + explained, with optional action/playbook components). The engine is general AI (any model type — XGBoost, RL, LLM), not one method.

## What it is

A **desktop GUI control plane for Orama Zetta** that does four things in one flow:

1. **Ingest** — natural language + artifacts (an existing workflow / automation tool's exported JSON, SQL, notebooks, schemas) describing the data/AI problem.
2. **Architect** — compile that into a *correct, professionally-architected* data-science / data-engineering **execution graph** (connect → clean → model → index → serve → act), validated before it runs.
3. **Deploy** — provision **Orama Zetta nodes** and the graph onto the target (local → Kubernetes → AWS / Azure / GCP / Oracle Cloud / bare metal / on-prem), one button.
4. **Run + learn** — execute the workflows and build indexes on the nodes; measure; improve.

It collapses three roles: the **platform engineer**, the **data engineer**, and the **data scientist**.

## Orama Zetta is the spine (and the substrate)

Orama Zetta is **the world's first adaptive database — more than a database, an AI compute cluster, or an infrastructure orchestrator.** Built in **C++ and use-case-specific, fused GPU kernels** for native speed and transformational cost profiles. **From the creator of OpenShift.**

There is **no separate Postgres control plane** (this supersedes the earlier orama-platform-1 decision). Orama Zetta is both:

- **The spine** — the platform's own state (deployed graph, node registry, run history, secrets-refs) lives in Orama Zetta's replicated store. The control plane self-hosts on the thing it deploys.
- **The substrate** — the data + compute layer the workflows run on:
  - **Tiered storage** — pull expensive source data (e.g. Snowflake) into cheap **in-memory indexes**, age it out to **cold storage**, **re-warm on request**. The cost story.
  - **Compute-near-data** — embedded **Lua** scripts / a **DataFrame (DDF) API** so user- or LLM-agent-generated code runs **on the node where the data lives** — no warehouse round-trip, no data exfiltration. The data-locality story.
  - **Indexing** — full-text / vector / graph indexes served from the node.
  - **True hybrid** — one cluster spans every vendor and architecture at once: heterogeneous compute backends (CPU, CUDA/NVIDIA, ROCm/AMD, MLX/Apple, Vulkan, SYCL, GCP TPU, AWS Neuron ASIC — Trainium/Inferentia), operating systems (macOS / Linux / Windows), architectures (x86 / ARM), and deploy targets (AWS / GCP / Azure / Oracle Cloud / Kubernetes / bare metal). The payoff: **ultimate control over cost, flexibility, and resilience — not susceptible to a single vendor's outages or degradations.** *(Cloud-burst backends are in-flight; Azure is the reference, AWS/GCP mirror it — see Risks.)*

## Strategy

### Goals + success measures
- **Compress Intelligence Velocity** — median time from intent/artifact → deployed, running graph (target: minutes, vs. weeks–quarters by hand). *The headline metric.*
- **Make self-service the default** — share of pipelines deployed without the platform team in the loop.
- **Hold correctness** — % of generated graphs that compile AND run AND produce correct results (release gate).
- **Capture the enterprise** — governed, in-your-cloud deployment is table-stakes for the buyers who'll pay. Full metrics: [`success-metrics.md`](success-metrics.md).

### Target users
The bottlenecked **platform/AI lead** (Charles @ Motive), the **data scientist** who builds the XGBoost+SHAP pipeline by hand, the **analyst/business user** stuck in the ticket queue, and the **AI agent** as a first-class operator. Detail: [`personas.md`](personas.md).

### Customer pains
- The **shift-left bottleneck** — everything funnels through the few who can build + deploy + govern intelligence ("you're too slow," for two years).
- The **prototype-to-production gap** — a flow from an existing workflow / automation tool, or a notebook, proves an idea but is not correct, governed, or deployed; making it real is a separate quarter-long project.
- **Cost + latency** — raw-source queries at scale are expensive and slow; the warehouse bill creeps; cold starts hurt.
- **Governance + residency** — data can't leave the firewall; access must be controlled and audited; DIY is infeasible under SOX.

### Market context
- **Databricks** — powerful, but *you* operate it and it runs largely on *their* terms; not a one-button private-cloud deploy, not NL-first.
- **Railway / Render** — beautiful deploy DX, but not data/AI-native, not enterprise-governed, not private-cloud/on-prem-first.
- **n8n / Zapier** — great for prototyping a flow, but the output isn't production-correct, isn't a real data/AI architecture, isn't governed, and doesn't deploy real infrastructure. (Charles literally runs n8n + a hand-built sidecar today.)
- **Glean / Cowork** — answer questions over data, but don't *learn from your data* (no model training), don't produce/deploy systems, and own the index.
- Orama Zetta's own market frame: the adaptive database that replaces the Frankenstein-of-twelve-databases (`zetta-business`); Platform is how teams *wield* it.

### Focus (what we build)
- The **GUI application** — the near-term hero (ingest → architect → deploy → run → monitor), driving **today's** Orama Zetta.
- The **NL + artifact → correct execution-graph** compiler (start with **n8n JSON** — we have Charles's two workflows as ground truth).
- **One-button deploy** of Orama Zetta nodes + the graph to a target.
- Orama Zetta substrate orchestration: **tiered storage** + **compute-near-data** + **indexing** (co-sequenced with the Orama Zetta roadmap).
- **Enterprise governance + access controls** (RBAC, audit, approval gates, residency).

### Non-focus (explicitly not, for now)
- A general PaaS for arbitrary web apps (Railway's lane) — we're data/AI-native.
- A public multi-tenant SaaS — **private-cloud / in-your-firewall first** (the Motive wedge).
- Replacing the IDE / notebook for hand-coders — we generate + deploy, we don't host editing.
- Re-deriving orama-platform-1's full federation architecture — borrow ideas, don't inherit the stack.

### Risks
1. **Orama Zetta maturity is the gating risk.** Verified against the code: Orama Zetta today is a CRDT-replicated JSON store + equal-peer cluster + a Postgres-SQL *subset*. The **DDF API, embedded Lua, tiered storage, indexing, k8s/cloud deploy, heterogeneous cloud-burst compute backends, Postgres wire protocol, and auth/RBAC are unbuilt.** Most of the substrate this product promises does not exist yet. → R1 must deliver value on what *exists*, and this roadmap must be co-sequenced with Orama Zetta's. (See [`roadmap.md`](roadmap.md).)
2. **Graph correctness** — "robust, correct, professionally architected" is a hard guarantee for generated systems (orama-platform-1's open Q6). Without a validation/eval gate, "self-service" ships broken pipelines confidently.
3. **Control-plane-on-Orama Zetta** — Orama Zetta lacks transactions + leader election today; trusting its CRDT store with control-plane state (registry, locks, cursors) is unproven until leadership-by-lease lands.
4. **Cloud-provisioning surface area** — k8s × AWS × Azure × GCP × on-prem × governance is enormous; over-reaching here sinks the timeline.
5. **Scope vs. orama-platform-1** — duplicating or contradicting the existing plan wastes effort; the relationship needs an explicit decision (merge vs. distinct).
6. **Cost claim** — the ~60% savings vs. incumbents is an *unvalidated hypothesis* in `zetta-business`; do not quote externally.

### Anti-positioning (one line each)
- **Not n8n** — n8n prototypes a flow; we produce a correct, governed, deployed data/AI *system*.
- **Not Databricks** — you don't operate our platform on their cloud; it self-deploys into yours, NL-first.
- **Not Railway** — same one-button DX, but data/AI-native and enterprise-governed on private cloud.
- **Not Glean/Cowork** — they answer; we *build, deploy, and learn from* your data.
- **Auto-ANI, not AGI** — we don't chase general intelligence; we ship automated, artificial *narrow* intelligence: production-grade, specialized to one job and your data.

## The wedge: Motive is R1 in disguise

[`motive-delivery`](../motive-delivery/) — the Motive build ("replace your n8n churn workflow, deploy it, run it, governed; bundle the predictive models and pipelines") — **is the first customer-shaped slice of this product.** We prove the loop on one customer (one artifact type, one target, one use case) before generalizing to the GUI product. Platform = the generalization of the Motive wedge.

---

## Related
- [`personas.md`](personas.md) · [`user-stories.md`](user-stories.md) · [`roadmap.md`](roadmap.md) · [`success-metrics.md`](success-metrics.md)
- [`../motive-delivery/`](../motive-delivery/) · [`../motive-problem-definition/`](../motive-problem-definition/) (the shift-left thesis, with evidence) · [`../cache/`](../cache/) (tiered-storage substrate).
