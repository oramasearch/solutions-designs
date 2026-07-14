# Orama Zetta website — what we promise users (verbatim transcription)

Readable transcription of the user-facing copy on the Orama Zetta product website,
organized by page and section. **The verbatim source of record is the snapshot under
[`source/`](source/)** (with [`SHA256SUMS.txt`](SHA256SUMS.txt)); this file transcribes
the copy from it for reading. Text is reproduced as written (including its own
punctuation). Section eyebrow numbers are the site's own.

---

## Site identity (`index.html` meta)

- **Page title:** Orama Zetta — Intelligence Velocity for big thinkers
- **Meta description:** Orama Zetta is Auto-AI for the enterprise, built on the world's first adaptive database. Turn a question into running, deployed intelligence — production-grade AI in minutes, trained on your own data, running on your own infrastructure, governed and correct by construction.
- **OG/Twitter title:** Orama Zetta — Intelligence Velocity for big thinkers
- **OG/Twitter description:** Auto-AI for the enterprise. Production-grade AI, deployed in minutes — trained on your own data, running on your own infrastructure, governed and correct by construction.
- **Author:** Orama

## Announcement bar (`TopBanner`)

> Orama Zetta is in **design-partner preview**. Request access →

## Navigation (`Nav`)

- Wordmark: **Orama** · Zetta
- Links: How it works · Technology · True hybrid · Who it's for · Pricing
- CTA: **Request access**

---

# Homepage (`/`)

## Hero

- **Eyebrow:** ORAMA ZETTA · AUTO-AI FOR THE ENTERPRISE
- **Heading:** Intelligence **Velocity** for Big Thinkers
- **Lead:** From a question to deployed, governed intelligence: models and pipelines **trained on your own data**, running on your own infrastructure, correct by construction. Production-grade systems your team can self-serve and deploy **in minutes**.
- **CTAs:** Request access → · See how it works
- **Credibility:** From the creator of OpenShift
- **Product mock:**
  - Intent: "Score every active account for churn risk — and tell me what's driving it." (chips: workflow.json, pipeline.sql, imported)
  - Architected execution graph: Connect → Clean → Model → Index → Serve
  - Correct by construction · leakage ✓ · point-in-time ✓
  - Metrics: Intent → deployed = **9 min** · Target = **your k8s** · Data egress = **0 bytes**

## 01 — The Problem

- **Heading:** The constraint is rarely the data.
- **Body:** In most enterprises, the path from a question to a credible answer runs through a small number of people who can do data engineering, modeling, and deployment together. Demand outpaces that capacity, a queue forms, and answers that already exist in the data arrive quarters late.
- Prototypes prove an idea, then stall. Turning one into a correct, governed, deployed system is a separate project that rarely reaches the top of the list. Most AI initiatives stall precisely there — not for want of data or ideas, but because operationalizing them is the hard part.
- **Queue visual — "Requests · waiting on the platform team":**
  - BizOps — What's driving mid-market churn? — 14d
  - Finance — Forecast Q3 collections risk — 21d
  - Support — Which accounts to call first? — 9d
  - Sales — Score the pipeline by win-likelihood — 30d+
  - Throughput: bounded by one team

## 02 — The Approach (`Disciplines`)

- **Heading:** The infrastructure three specialists would build.
- **Lead:** Getting the most out of AI takes production-grade infrastructure — the kind a platform engineer, a data engineer, and a data scientist would build together, and the handoffs between them are where months disappear. Orama Zetta produces that infrastructure from a single description, architected to professional standard and open to review.
- **Roles:**
  - **Platform engineer** — Provisions the infrastructure, scopes access and audit, and keeps the system deployed, observable, and self-healing.
  - **Data engineer** — Connects the sources, resolves the inconsistencies, and shapes the data into a foundation a model can trust.
  - **Data scientist** — Trains the models and pipelines a problem needs — often an ensemble — with measured accuracy, explained drivers, and real predictive power grounded in your own history.
- **Payoff line:** the work of three specialists → your team self-serves and deploys in minutes

## 03 — How It Works

- **Heading:** Ingest. Architect. Deploy. Run.
- **Lead:** Four stages, one workflow: intent or an existing artifact in, a correct graph out, deployed onto your own infrastructure and running — with every step open to inspection.
- **01 INGEST — Plain language, or what you already built:** Start with words — "score every account for churn risk and tell me why" — or drop in an artifact you already have: an existing automation workflow, a SQL script, a notebook, a schema. It reads the intent and the existing logic.
- **02 ARCHITECT — A correct graph, validated before it runs:** It compiles an execution graph — connect → clean → model → index → serve — the way a senior data + AI engineer would. Schemas type-check against the real sources; ML steps are checked for leakage and point-in-time correctness. You see the graph, not a black box.
- **03 DEPLOY — One button, onto your infrastructure:** One action provisions Orama Zetta nodes and the graph onto your target — your laptop, your Kubernetes cluster, your AWS / Azure / GCP, your on-prem box. The data stays put; the work is deployed to it.
- **04 RUN + LEARN — Answers with lineage — and it sharpens:** The graph executes on the nodes: workflows run, indexes build, models score. Answers stream back with full lineage — which sources, which steps, how fresh, how confident. Each run is grounded experience the next graph learns from.

## 04 — Why It's Different (`WhyDifferent`)

- **Heading:** Velocity, never traded for correctness.
- **Lead:** Speed matters only when the result is right. Velocity is paired with a trained model, a correctness gate, and governance — never set against them.
- **IT LEARNS FROM YOUR DATA — If you're not training on your data, you're not fully using AI.** Prompting a general-purpose model only borrows what that model already knew; it never gets better at your business. True predictive power comes only from training on your own data — models and pipelines that learn your business, surface the drivers behind every outcome, and sharpen the more they see. Real solutions are rarely a single model; often several work together as an ensemble. That is the difference between fully using AI and renting a confident guess.
- **IT KNOWS YOU AND YOUR DATA — You don't have to know what to build.** Training on your data is the hard part — and you may not even know where to start. So Orama Zetta studies you and your data, suggests the high-value use cases, then auto-trains an agent on your data to do them — with AI, not a brittle hand-coded harness. Even the way you talk to it over MCP personalizes to how you work. The hard part, solved — and personalized to you. (link: See how it personalizes to you →)
- **CORRECT BY CONSTRUCTION — Generating a workflow is easy. Generating a correct one is the product.** Every graph is validated before it can deploy: schemas type-check against the real sources, ML steps are checked for leakage and point-in-time discipline, and a correctness gate must pass first. Ask for one subsidiary's risk and it resolves to the right entity — never several blended into an averaged, flattering blur.
- **ORAMA ZETTA UNDERNEATH — The work comes to the data — fast, cheap, and inside your walls.** One engine is both the control-plane spine and the data/compute substrate. Compute runs on the node where the data lives. Expensive source data is pulled into fast in-memory indexes, aged to cheap cold storage, and re-warmed on demand — so you stop paying warehouse prices to ask the same question twice.
- **GOVERNED BY DEFAULT — Governance is the precondition for safe self-service.** Pipelines run where you control them — your cloud, your cluster, your on-prem environment — and the data never leaves. Access is scoped to identity through your own SSO provider: a tailored view per user, not a shared service account. Every change, deployment, and data access is audited, and sensitive actions route through an approval gate.

## 05 — Who It's For (`Audiences`)

- **Heading:** Built for everyone the bottleneck holds up.
- **Lead:** The leaders intelligence funnels through, the scientists who build it by hand, and the teams who wait on the answer — Orama Zetta shortens the distance for each of them.
- **PLATFORM & AI LEADERS — Leverage, without losing control.** When every request for intelligence routes through one team, that team becomes the constraint. Orama Zetta lets developers deploy and operate governed pipelines themselves, while architecture, access, and audit remain centrally owned.
- **DATA SCIENTISTS & ML ENGINEERS — Modeling is the smallest part of shipping a model.** Orama Zetta scaffolds the correct pipeline — featurize, train, explain, serve — with leakage and point-in-time checks built in, and deploys it onto governed infrastructure. The model gets the attention; the plumbing and the platform project do not.
- **BUSINESS & ANALYTICS TEAMS — Grounded answers, within governed boundaries.** Questions are asked in plain language and answered from live data — scoped to the access each person already holds, and returned with sources, freshness, and confidence. The result is an answer that holds up in the room, not another dashboard to maintain.

## 06 — Positioning

- **Heading:** The whole arc — not just one slice of it.
- **Lead:** Plenty of tools compress one step — deploying a web app, or running a query, or drafting a workflow. None shrink the whole arc from "I have a question" to "a correct, governed system is answering it in production." That arc is what we compress.
- **Not demoware** — LLM-only tools and notebooks demo well, then stall before production. Orama Zetta ships a correct, governed, deployed system.
- **Not someone else's cloud** — You don't operate ours on their terms. It self-deploys into your environment, natural-language-first.
- **Not a web PaaS** — The same one-button deploy experience — but data/AI-native and enterprise-governed on private cloud.
- **Not just answers** — Answer engines retrieve and respond. We build, deploy, and train models and pipelines on your data.

## 07 — The Foundation

- **Heading:** The world's first adaptive database.
- **Lead:** Orama Zetta is more than a database, more than an AI compute cluster, more than an infrastructure orchestrator. It is the world's first adaptive database — the engine that makes deployed, governed intelligence fast, economical, and contained within your walls.
- Badge: From the creator of OpenShift
- **Heterogeneous compute** — The speed and utilization of native compute — CPUs, every major GPU, and ASICs for ML training (Trainium) and inference (Inferentia). Not one vendor's. (C++, CPU, CUDA, MLX, ROCm, Vulkan, SYCL, GCP TPU, AWS Neuron ASIC)
- **Every platform** — One engine across every operating system and architecture — from a laptop to a data center, the same kind of node. (macOS, Linux, Windows, x86, ARM)
- **Any cloud, hybrid** — All major clouds, Kubernetes, and bare metal. Hybrid cloud and hybrid architectures by design — never locked to one. (AWS, GCP, Azure, Oracle Cloud, Kubernetes, Bare metal)
- Logos: NVIDIA · AMD · Apple · Intel · Google · AWS

## Homepage CTA (`WaitlistCTA`, eyebrow 08 — DESIGN-PARTNER ACCESS)

- **Heading:** From intent to deployed intelligence — in minutes.
- **Lead:** Orama Zetta is available to a small group of design partners. Share the problem you would bring to it, and our team will be in touch.
- Footnote: IN YOUR FIREWALL · NO DATA LEAVES YOUR WALLS

---

# How It Works (`/how-it-works`)

- **Eyebrow:** HOW IT WORKS
- **Heading:** From intent to a running system, in four stages.
- **Lead:** Orama Zetta turns a stated problem — or an artifact you already have — into a correct, deployed, running data and AI system. Every stage is visible, every step open to inspection, and nothing advances until it is correct.
- **01 INGEST — Plain language, or what already exists:** A project begins with intent expressed in words, or with an artifact already in hand — an existing automation workflow, a SQL script, a notebook, a schema. Orama Zetta reads both the stated goal and the logic already encoded, and reconciles them into a single problem definition. (Natural-language intent · Existing workflows & scripts · Notebooks & schemas · Source profiles)
- **02 ARCHITECT — A correct graph, validated before it runs:** The problem is compiled into an execution graph — connect, clean, model, index, serve — laid out to professional standard. Schemas are type-checked against the real sources; modeling steps are checked for leakage and point-in-time discipline. The graph is visible and inspectable; gaps are surfaced as gaps, not papered over. (Connect → clean → model → index → serve · Schema type-checking · Leakage & point-in-time checks · Visible, editable graph)
- **03 DEPLOY — One action, onto infrastructure you control:** A validated graph is provisioned as Orama Zetta nodes and workflows onto the chosen target — a local environment, a Kubernetes cluster, a cloud account, or an on-prem host. The data stays where it lives; the work is deployed to it, with no egress out of the environment. (Local → cluster → cloud → on-prem · Node provisioning & reconciliation · No data leaves the environment · Self-healing runtime)
- **04 RUN & LEARN — Answers with lineage — and a system that sharpens:** The graph executes on the nodes: workflows run, indexes build, models score. Results return with full lineage — the sources used, the steps taken, how fresh and how confident. Each run is grounded experience the next architecture can learn from. (Live execution & monitoring · Source-level lineage · Freshness & confidence signals · Grounded improvement loop)
- **05 — The Correctness Gate — Generating a workflow is easy. Generating a correct one is the product.** A graph that ships confidently-wrong results is worse than a queue. Before deployment, every graph passes a correctness gate — and is blocked, with a reason, if it does not.
  - **Schema & type checks** — Every step is validated against the real source profiles. A reference to data that isn't there is flagged, not silently generated.
  - **Leakage & point-in-time** — Modeling steps are checked so models never train on information they wouldn't have had at prediction time.
  - **Entity resolution** — Results resolve to the right entity — a single subsidiary, not several blended into an averaged, flattering blur.

---

# Technology (`/technology`)

- **Eyebrow:** TECHNOLOGY · THE ENGINE
- **Heading:** The engine underneath: Orama Zetta.
- **Lead:** Orama Zetta is more than a database, more than an AI compute cluster, more than an infrastructure orchestrator — it is the world's first adaptive database. It keeps data where it lives, runs the work next to it, and tiers it from fast memory down to cheap cold storage, so deployed intelligence is fast, economical, and contained within your walls. (badge: From the creator of OpenShift)
- **01 SPINE & SUBSTRATE — One engine, both control plane and substrate.** As the spine, Orama Zetta holds the platform's own state — the deployed graphs, the node registry, the run history — in a replicated store. The control plane lives on the same engine it deploys; there is no separate database to operate alongside it. As the substrate, it is where the data and compute live — indexes served from the node, and workflows that execute where the bytes already are. (Control plane: graphs · registry · run history / Data substrate: full-text · vector · graph indexes / Compute: workflows run on the node / Replication: equal-peer · self-healing)
- **02 WHY IT'S FAST & CONTAINED — The work comes to the data.**
  - **Compute near the data** — Rather than pulling data out to a warehouse, processing it, and pushing it back, the work runs on the node where the data sits. Generated and hand-written logic executes next to the bytes — lower latency, and nothing leaves the environment.
  - **Tiered storage** — Expensive source data is pulled into fast in-memory indexes, aged out to cheap cold storage as it cools, and re-warmed on request. The same questions stop carrying warehouse-scale cost every time they are asked.
  - **An equal-peer cluster** — Nodes form a replicated, self-healing cluster of equal peers — a laptop, a server, or a cloud instance are the same kind of node. Adding capacity is joining a node; the topology spans from a single machine to a private cloud.
  - Heterogeneous compute: Native compute across CPUs, every major GPU, and ASICs for ML training (Trainium) and inference (Inferentia) — not one vendor's.
  - Every platform: Every operating system and architecture — from a laptop to a data center, the same kind of node.
  - Any cloud, hybrid: All major clouds, Kubernetes, and bare metal — hybrid cloud and hybrid architectures by design, never locked to one.
- **03 LEARNING, NOT INFERENCE — If you're not training on your data, you're not fully using AI.** Prompting a general-purpose model only borrows what that model already knew; it never gets better at your business, because it never learned from your data. Orama Zetta does the actual work of learning — it trains the models and pipelines your problem needs on your own data. True predictive power comes only from training on your own data — and real solutions are rarely a single model: several often work together as an ensemble, each with measured accuracy and explained drivers. And learning compounds. The more of your data flows through it, the further it pulls ahead of a system that only retrieves and prompts.
  - Rented model: Retrieves & prompts. Plateaus at what it already knew.
  - Trained on your data: Learns your business. Sharpens as it sees more.
  - (Accuracy compounds with data seen)
- **04 PERSONALIZED INTELLIGENCE — It knows you and your data.** Training on your data is the hard part — it has always needed a scarce expert in the loop, and it is where most AI projects quietly fail. Orama Zetta solves it with AI itself, not a brittle hand-coded harness: it studies you and your data, proposes what is worth building, and trains the agent to do it — so you don't have to already know the answer.
  - **Auto-Suggest** — You don't have to know what to do with your data. Orama Zetta studies it — and how you work — and hands back personalized, high-value use cases, ranked and ready. It takes the guesswork out of using AI.
  - **Auto-RL** — It auto-trains a long-horizon, tool-calling agent on your data with reinforcement learning — the "trained on your data" hard part, done by AI rather than a brittle hand-coded harness. The agent arrives already fluent in your systems.
  - **Personalized MCP** — Talk to Orama Zetta over MCP, and the interface adapts to you. The same endpoint that serves your agents shapes its tools and responses to your preferences — every surface personalized, not one-size-fits-all.
  - Closing: What to build, the agent to build it, and the interface you reach it through — learned from your data and personalized to you, by AI rather than a hand-coded harness.
- **05 THE NAME — Zetta: a zettabyte is one billion terabytes.** The name is a statement about the ceiling, not your data. Scale runs one way: going bigger is the hard direction, and going smaller is free. An architecture built for the extreme — data where it lives, work next to it, storage that tiers from memory to cold and back — is exactly the architecture that is fast and economical at the scale you actually run. Solve the largest data problems, and the everyday ones come for free.

---

# True Hybrid (`/true-hybrid`)

- **Eyebrow:** TRUE HYBRID
- **Heading:** One cluster. Every vendor. Every architecture.
- **Lead:** Most "hybrid" means you can deploy to more than one place. True hybrid means a single cluster spans them at once — CPUs, GPUs, and ASICs from any vendor, across operating systems, architectures, on-prem, and multiple clouds — and squeezes the most out of whatever hardware you give it.
- **01 WHAT IT MEANS — Heterogeneous by design, not by exception.**
  - Conventional hybrid: Pick one target per deployment — this cloud or that one, on-prem or managed. Adding a different vendor or chip means a separate stack, and idle hardware stays idle.
  - True hybrid: One equal-peer cluster whose nodes are deliberately not uniform. Work flows to whatever each node runs best — a GPU box, a CPU rack, an on-prem server, and a cloud burst all contributing to the same job at once.
- **02 THE PAYOFF — Ultimate control over cost, flexibility, and resilience.** Because the cluster is never bound to one vendor's hardware, prices, or availability.
  - **Cost** — Run each workload on the cheapest hardware that fits, and spend the capacity you already own or have idle before renting more. Burst into a cloud only when needed, under a cost cap. No premium for standardizing on one vendor.
  - **Flexibility** — Mix any vendor, architecture, and cloud in a single cluster. Adopt new silicon as a backend, not a re-architecture — place each workload where it runs best instead of forcing the whole system onto one platform's terms.
  - **Resilience** — Not susceptible to a single vendor's outages or degradations. An outage or slowdown in one cloud, region, or GPU vendor does not take the cluster down — equal peers self-heal, healthy nodes pick up the pending work, and the job keeps running on whatever is still up.
- **03 WHAT IT SPANS — Every major vendor, in one cluster.** Heterogeneous compute — built in C++ and use-case-specific, fused GPU kernels for native speed and transformational cost profiles:
  - CPU — x86-64 · ARM
  - CUDA — NVIDIA GPU
  - ROCm — AMD GPU
  - MLX — Apple silicon
  - Vulkan — Cross-vendor GPU
  - SYCL — Intel · oneAPI / cross-vendor
  - GCP TPU — Google ASIC
  - AWS Neuron ASIC — Trainium · Inferentia
  - Platforms & architectures: macOS, Linux, Windows, x86, ARM
  - Clouds & deployment: AWS, GCP, Azure, Oracle Cloud, Kubernetes, Bare metal
  - Closing: Spread a job across two clouds and a rack of your own metal, and any one of them can fail without stopping it. New silicon arrives as a backend — additive, never a re-architecture.

---

# Who It's For (`/who-its-for`)

- **Eyebrow:** WHO IT'S FOR
- **Heading:** Built for everyone the bottleneck holds up.
- **Lead:** The same constraint shows up in three roles: the leaders intelligence funnels through, the scientists who build it by hand, and the teams who wait on the answer. Orama Zetta shortens the distance from intent to deployed, correct intelligence for each of them.
- **01 PLATFORM & AI LEADERS — Leverage, without losing control.**
  - Situation: When every request for intelligence over company data routes through one team, that team becomes the constraint — and demand only grows. Building each pipeline by hand does not scale past the hours of the people who can build it.
  - Change: Orama Zetta lets developers deploy and operate governed pipelines themselves. Architecture, access policy, and audit remain centrally owned; the manual step in the middle goes away. What would have been a quarter-long productionization effort becomes something a team runs this sprint.
  - (Developers self-serve on governed builds · Architecture & governance stay centralized · Deployed inside your own environment)
- **02 DATA SCIENTISTS & ML ENGINEERS — Modeling is the smallest part of shipping a model.**
  - Situation: Most of the effort in delivering a model is data wrangling, connector plumbing, and deployment — not modeling. Prototypes that work in a notebook tend to die there, because turning one into a deployed, governed system is a separate project owned by someone else.
  - Change: Orama Zetta scaffolds the correct pipeline — featurize, train, explain, serve — with leakage and point-in-time checks already in place, then deploys it onto governed infrastructure. The model gets the attention; the plumbing and the platform project do not.
  - (A correct pipeline scaffolded, not hand-built · Leakage & point-in-time checks built in · Deployed without a separate platform effort)
- **03 BUSINESS & ANALYTICS TEAMS — Grounded answers, within governed boundaries.**
  - Situation: Getting an answer that isn't already on a dashboard usually means asking a technical team and waiting. Decisions get made on stale reports while the answer sits in data nobody had time to query.
  - Change: Once a platform is set up, questions are asked in plain language and answered from live data — scoped to the access each person already holds, and returned with their sources, freshness, and confidence shown. A recurring check can be scheduled and delivered where teams already work.
  - (Plain-language questions, grounded answers · Scoped to existing access · Sources, freshness & confidence shown)

---

# Pricing (`/pricing`)

- **Eyebrow:** DEPLOYMENT & ENGAGEMENT
- **Heading:** Deployed where you run. Scoped to the work.
- **Lead:** Orama Zetta runs inside your environment, so engagements are shaped around your deployment target and the use cases in play rather than a public price list. We are working with a small group of design partners first.
- **01 WHERE IT RUNS — Your infrastructure, your boundary.**
  - **Your cloud** — Provision Orama Zetta nodes into your own AWS, Azure, or GCP account, or your Kubernetes cluster. Data stays inside your boundary; nothing egresses.
  - **On-prem** — Run entirely within your own data center for the most regulated environments — same workflow, same governance, no dependency on a public cloud.
  - **Local-first** — Start on a single machine to validate a use case end-to-end before any cloud footprint, then promote the same graph to a shared target.
- **02 THE DESIGN-PARTNER PROGRAM — One use case, taken all the way.** A design-partner engagement takes a single high-value use case from intent to a deployed, governed system running on your infrastructure — and builds the relationship with the team behind the engine while doing it.
  - What an engagement includes:
    - A use case architected, validated, and deployed end-to-end
    - Deployment into your environment, behind your identity provider
    - Governance baseline: scoped access, audit trail, approval gates
    - Trained, explainable models and pipelines — not inference over a rented one
    - Direct collaboration with the team building the engine
- **CTA:** Tell us the use case. We'll scope the rest.

---

# Waitlist confirmation (`/waitlist`)

- **Heading:** You're on the list!
- **Body:** We'll reach out as design partner access opens up. In the meantime, watch your inbox: launch details land there first.
- Counter: PEOPLE AHEAD OF YOU (base count seed: 74)

---

# Footer

- Tagline: Intelligence Velocity for big thinkers.
- Product: How it works · Technology · True hybrid · Pricing
- Audience: Who it's for · Design partners
- Resources: Orama Search (oramasearch.com) · Join waitlist
- © 2026 ORAMA · By the team behind Orama Search
