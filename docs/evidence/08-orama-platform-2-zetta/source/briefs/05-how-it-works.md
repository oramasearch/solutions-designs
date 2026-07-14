# 05 — How it works: ingest → architect → deploy → run

**Logline:** Four steps, one app: bring intent or an artifact, get a correct graph, deploy it on your infrastructure, watch it run.

**For:** the technically-curious — the segment that wants to see the machine, not just the promise.

---

**1. Ingest.** Start with words ("score every active account for churn risk and tell me why") or with an artifact you already have — a workflow exported from an existing automation tool, a SQL script, a notebook, a schema. Orama Zetta reads both: the intent *and* the existing logic.

**2. Architect.** It compiles that into an **execution graph** — connect → clean → model → index → serve → act — laid out the way a senior data engineer and data scientist would. You see the graph, not a black box. Before anything runs, it's validated: schemas type-check against the real sources, model and pipeline steps are checked for leakage and point-in-time correctness, and it tells you what's missing instead of guessing. Correct by construction — production-grade, not demoware.

**3. Deploy.** One action provisions **Orama Zetta nodes** and the graph onto your target — your laptop, your Kubernetes cluster, your AWS / GCP / Azure / Oracle Cloud, your bare-metal or on-prem box. The data stays in your environment; the work is deployed *to* it.

**4. Run.** The graph executes on the nodes — workflows run, indexes build, models score — and the answers stream back with full lineage: which sources, which steps, how fresh, how confident. Something failed? You see exactly which step and why, not a stack trace.

Then it gets better: each run is grounded experience the system learns from, so the next graph it builds for you is sharper.

**Talking points**
- Two kinds of input: natural language *and* the artifacts you already built.
- The graph is visible and validated *before* it runs — correct by construction, production-grade, not demoware.
- Deploy is one action; data never leaves your environment (work comes to the data).
- One cluster, true hybrid: the engine is designed to target CPU, NVIDIA CUDA, AMD ROCm, Apple MLX, Vulkan, SYCL, GCP TPU, and AWS Neuron — across macOS / Linux / Windows and x86 / ARM — for control over cost, flexibility, and resilience (engine direction; partly in flight).
- Output carries lineage + freshness + confidence; failures point at the exact step.

**Lines worth saying**
- "Ingest, architect, deploy, run — and you can see every step it took."
- "It shows you the graph before it ships it. No black box."

**Show (visual beats)**
- Drop a workflow file from an existing automation tool → a clean graph assembles next to the messy original.
- A validation pass: green checks, one red "missing NPS feed — here's the gap."
- Deploy → nodes appear on a topology map; results + lineage stream in.

**Sources:** [`../user-stories.md`](../user-stories.md), [`13-the-motive-story.md`](13-the-motive-story.md)
