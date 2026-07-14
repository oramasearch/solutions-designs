# 06 — Orama Zetta: the spine and the substrate

**Logline:** Orama Zetta runs on Orama Zetta — the world's first adaptive database: more than a database, an AI compute cluster, or an infrastructure orchestrator. It keeps your data where it lives, runs the work next to it, and tiers it from fast memory to cheap cold storage.

**For:** the technical audience — engineers who want to know what's underneath.

---

Orama Zetta is both the **spine** and the **substrate**. As the spine, it holds the platform's own state — the deployed graphs, the node registry, the run history — in a replicated store, so the control plane lives on the same engine it deploys (no separate database to babysit). As the substrate, it's where the actual data and compute live. It's built in **C++** with **use-case-specific, fused GPU kernels** — that's what buys native speed and a transformational cost profile conventional stacks can't match. It comes **from the creator of OpenShift**: the same instinct applied a layer down — take the messy substrate beneath the work and turn it into something uniform you can deploy onto.

Several properties make it matter:

- **Data locality / compute-near-data.** Instead of pulling data out to a warehouse, running it, and pushing it back, Orama Zetta runs the work *on the node where the data sits* — via embedded scripts and a dataframe API. Your generated or hand-written logic executes next to the bytes. Faster, and nothing leaves your walls.
- **Tiered storage.** Expensive source data (say, Snowflake) gets pulled into cheap, fast **in-memory indexes**; as it ages it moves out to **cold storage**; when you need it again it **re-warms on request**. You stop paying warehouse prices to ask the same questions.
- **A cluster that just spreads.** Nodes form an equal-peer cluster that replicates and self-heals — laptop, server, or cloud, all the same kind of node. Adding capacity is joining a node.
- **A true hybrid.** One cluster spans every vendor and architecture at once — heterogeneous compute backends (CPU; CUDA on NVIDIA; ROCm on AMD; MLX on Apple; Vulkan; SYCL; GCP TPU; AWS Neuron on Trainium + Inferentia), every OS (macOS, Linux, Windows) and arch (x86, ARM), across AWS, GCP, Azure, Oracle Cloud, Kubernetes, and bare metal. That's **ultimate control over cost, flexibility, and resilience** — the cluster isn't susceptible to a single vendor's outages or degradations, and each piece of work can land on whatever backend is cheapest or fastest for it.

That's the honest current frontier, too: the clustering and replication are real today; the tiered storage, the dataframe/embedded-code path, the indexing, and the full heterogeneous-backend reach are the engine work in flight that this product is built to ride. (Script-writers: see [`../roadmap.md`](../roadmap.md) before claiming any of it as shipped.)

**Talking points**
- One engine is both the control-plane spine and the data/compute substrate — no extra database.
- The world's first **adaptive database** — more than a database, an AI compute cluster, or an infrastructure orchestrator.
- Built in C++ with use-case-specific, fused GPU kernels: native speed, transformational cost profile. From the creator of OpenShift.
- Compute-near-data: the work runs where the bytes live; data doesn't leave.
- Tiered storage: source → fast in-memory index → cold → re-warm on demand (kills the warehouse bill).
- Equal-peer, self-healing cluster: laptop to cloud, same node.
- True hybrid: one cluster across every compute backend, OS, arch, and cloud (down to bare metal) — ultimate control over cost, flexibility, and resilience, not hostage to one vendor's outage.

**Lines worth saying**
- "The work comes to the data, not the other way around."
- "Hot when you need it, cold when you don't, re-warmed the moment you ask."
- "One cluster, every vendor and architecture — so a single vendor's outage isn't your outage."

**Show (visual beats)**
- Animation: a query runs *inside* the node box, instead of data flying out to a warehouse and back.
- A storage thermometer: source → in-memory (hot) → cold → re-warm.
- Two laptops + a cloud icon snapping into one equal-peer cluster.
- One cluster boundary spanning a grid of backends — NVIDIA, AMD, Apple, the three clouds, Oracle, Kubernetes, bare metal — with work hopping to whichever is cheapest or still up.

**Sources:** [`../vision-and-strategy.md`](../vision-and-strategy.md) (Orama Zetta spine/substrate), `~/dev/homer6/zetta` (engine), [`../roadmap.md`](../roadmap.md) (what's built vs. in flight)
