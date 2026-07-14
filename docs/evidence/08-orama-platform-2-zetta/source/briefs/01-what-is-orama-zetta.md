# 01 — What is Orama Zetta?

**Logline:** Describe a data or AI problem in plain language — or hand over the workflow you already have — and Orama Zetta builds it correctly, deploys it on infrastructure you control, and runs it. In minutes, not quarters.

---

Orama Zetta is a desktop app that turns *intent* into *running intelligence*. You tell it what you're trying to do — "find which mid-market accounts are about to churn, and why" — or you drop in an artifact you already built, like an existing workflow from an automation tool or a SQL script. It architects a correct, professional data pipeline + models, deploys the database and the workflow onto your cloud or your own servers, and runs it. You watch the answers come back, with the lineage of how they were computed.

It does the job of three people at once — the **data engineer** who wires and cleans the data, the **data scientist** who builds the models, and the **platform engineer** who deploys and governs it — so the one or two people who can normally do that are no longer the bottleneck for everyone else.

And here's the part most "AI products" skip: it **learns from your data.** If you're not training on your data, you're not fully using AI. Rather than rent a frontier model and ask it questions, Orama Zetta *trains models and pipelines on your data* — often an ensemble, not a single model — so the system gets better at your business the more it sees. True predictive power comes only from training on your own data. (Full thesis: [`15-learning-from-your-data.md`](15-learning-from-your-data.md).)

Underneath is the **Orama Zetta** engine — the world's first adaptive database: more than a database, an AI compute cluster, or an infrastructure orchestrator. Built in C++ with use-case-specific, fused GPU kernels for native speed and a transformational cost profile, it keeps your data where it lives, runs the work next to it, and tiers it from fast memory down to cheap cold storage. It's fast, it's cost-efficient, and your data never has to leave your walls. (Engine capabilities described here are the product direction — partly shipped, partly in flight.)

**Talking points**
- Plain language *or* your existing artifacts in → a correct, deployed, running system out.
- Three roles in one app: data engineer + data scientist + platform engineer.
- It **learns from your data** — trains models and pipelines on it, not just inference over someone else's — so it gets better the more it sees. True predictive power comes only from training on your own data.
- Category: **auto-ANI for the enterprise** — automated, artificial *narrow* intelligence: production-grade, specialized to one job and your data, optimized for cost, governance, and accuracy. Not AGI.
- Runs on *your* infrastructure (Kubernetes / AWS / GCP / Azure / Oracle Cloud / bare metal / on-prem) — your data stays put.
- The unit of value is time: intent → deployed intelligence in minutes.

**Lines worth saying**
- "You describe it. It builds it, deploys it, and runs it."
- "Three disciplines — data engineer, data scientist, platform engineer — in one workflow."
- "If you're not training on your data, you're not fully using AI."
- "Your data never leaves your walls. The work comes to the data."

**Show (visual beats)**
- Type one sentence → a clean execution graph assembles itself.
- One "Deploy" click → nodes light up on a cloud/k8s diagram.
- Answers + a lineage trail (which sources, which steps) stream back.

**Sources:** [`../vision-and-strategy.md`](../vision-and-strategy.md), [`../README.md`](../README.md)
