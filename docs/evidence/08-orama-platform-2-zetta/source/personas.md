# Orama Platform — Personas

Grounded in the design-partner record (Charles/Motive across [2026-06-03](../../meetings/2026-06-03-casey-charles-issac-juan-matt-nathanael-steve/), [06-10](../../meetings/2026-06-10-casey-charles-issac-matt-steve/), [06-23](../../meetings/2026-06-23-casey-issac-steve/)) and the `zetta-business` briefs. Primary persona is P1; the others are secondary but real.

---

## P1 — Charles: the bottlenecked platform / AI lead *(primary)*

**Role.** Senior platform/AI engineer at a 5,000-person company (Motive). CEO-sponsored mandate to build "one intelligence platform." High technical comfort; fluent in n8n, Postgres, Snowflake, Gemini; not a research ML scientist.

**Goals.**
1. Get *out* of being the single point through whom every data/AI request funnels.
2. Hand his 4–5 developers a **deployable thing they run themselves** and tell the story with.
3. Answer the CEO's question — "what's driving churn in the mid-market" — credibly.
4. Run it **inside the firewall**, governed, no data exfiltration.

**Frustrations.**
1. "The business has told us for two years — *you're too slow.*" Everything routes through him.
2. His churn system is a hand-built **n8n + `:8001` sidecar + Postgres** contraption he has to babysit (see [the workflows](../../meetings/2026-06-03-casey-charles-issac-juan-matt-nathanael-steve/charles-n8n-workflows.md)).
3. Internal deploy is a one-man show; even a working build faces a ~3-month vendor process.
4. Raw-source queries at scale are "out to lunch"; the snapshotted layer matters more than the source.
5. His Gemini-only scoring has no real predictive power (~75% vs. high-90s).

**Key quotes.** *"He wants some sort of self-service… people come in and ask questions and it just gives them answers."* · *"As soon as I can get a version that can be downloaded, I want [my devs] to replicate the churn use cases and tell the story themselves."* · *"It's not a service account, it's a tailored view — the core challenge from day one."*

**System interaction.** Imports his n8n churn workflows → the app architects a correct execution graph (with a *real* predictive model bundled) → deploys Orama Zetta nodes into Motive's cloud behind Okta → his devs run + iterate self-service; business users ask questions over it.

**Success looks like.** First downloadable build in 2 weeks; devs reproduce churn unaided; FedEx-Freight resolves division-correct; it's faster/cheaper/cleaner than the n8n contraption; governed in his firewall.

---

## P2 — Dana: the by-hand data scientist / ML engineer *(secondary)*

**Role.** The person who *can* build the XGBoost + SHAP pipeline (or the long-horizon RL agent) by hand — today the scarce resource every churn/fraud/demand request waits on. High ML comfort, lower platform/k8s comfort.

**Goals.** Ship a *correct* model (proper scoring, no leakage, point-in-time discipline) without becoming a Kubernetes/Terraform expert; iterate fast on real-shaped data; not re-plumb connectors/installers/telemetry every time.

**Frustrations.** Most time goes to data wrangling + infra, not modeling; prototypes die in notebooks; getting a model *deployed and governed* is someone else's quarter-long project; can't get access to the real data (firewall) to even validate.

**Key quotes.** *"If you're not training on your data, you're not fully using AI."* · *"There are a lot of ways to fool yourself with data engineering."*

**System interaction.** Describes the modeling problem (or imports a notebook); the app scaffolds the correct graph (featurize → train → SHAP → serve), runs it on Orama Zetta compute-near-data, and deploys it — Dana reviews/tunes the generated graph rather than hand-building the plumbing.

**Success looks like.** A correct, deployed model in a day; iteration loop in minutes; the generated graph passes the correctness gate; synthetic-data bootstrap unblocks work before real-data access lands.

---

## P3 — Sam: the waiting analyst / business user *(secondary)*

**Role.** Ops/BizOps/analyst who lives in spreadsheets and reports, no engineering background. The "two years of *you're too slow*" voice.

**Goals.** Get answers and small automations without filing a ticket and waiting; "what should I focus on today," not a dashboard to maintain.

**Frustrations.** Dependent on IT/platform for everything; tools are slow and limited on the data they reach; self-serve tools (n8n/Zapier) can't touch governed enterprise data safely.

**Key quotes.** *"I don't want to be a dashboard builder. Nobody wants to be a dashboard builder."* · *"Just tell me what to focus on today."*

**System interaction.** Uses a preconfigured instance an admin deployed: asks questions / requests a recurring check in plain language; governance scopes what Sam can see; never touches infrastructure.

**Success looks like.** Self-serve answer in seconds within their access scope; a scheduled check delivered to Slack/email; zero tickets filed; zero governance violations.

---

## P4 — The Agent: AI as a first-class operator *(secondary, forward-looking)*

**Role.** An LLM agent (Claude/Gemini/local) operating the platform — generating execution graphs, calling the Orama Zetta compute-near-data API, running workflows. From `zetta-business` brief 06 ("built for agents").

**Goals.** Spend cycles *reasoning*, not on remote administration (API rate limits, grep-over-network, warehouse round-trips); read/write a **local replica of everything**; produce code that runs *where the data lives*.

**Frustrations.** "~1% of sales per 100ms latency" — administration tax; no local substrate; no governed way to run generated code against real data.

**Key quote.** *"Agents waste most of their cycles on administration instead of thinking."*

**System interaction.** The agent is the engine behind P1–P3's NL flow: it authors the execution graph, deploys embedded Lua / DDF code onto Orama Zetta nodes, and learns from grounded outcomes (the experience loop).

**Success looks like.** Generated graphs that compile + run + are correct on the first or second try; sub-second compute-near-data calls; the experience loop measurably improving graph quality over time.

---

> Every persona traces to the same strategic goal: **Intelligence Velocity** — collapse the time from their intent to deployed, correct, governed intelligence. P1 is the wedge ([`motive-delivery`](../motive-delivery/)); P2–P4 generalize it.
