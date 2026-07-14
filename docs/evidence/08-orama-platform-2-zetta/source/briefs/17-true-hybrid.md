# 17 — True hybrid: one cluster, every vendor and architecture

**Logline:** Most "hybrid" just means you can deploy to more than one place. **True hybrid** means a single cluster spans them at once — and squeezes the most out of whatever hardware you give it.

**For:** the technical audience — platform leads, infrastructure owners, and anyone allergic to single-vendor lock-in.

---

When most vendors say "hybrid," they mean *portable* — pick a cloud, deploy there, maybe move later. Orama Zetta means something stronger: **one equal-peer cluster spanning vendors and architectures simultaneously.** The nodes are deliberately *not* uniform — a laptop, a GPU box, a TPU instance, a bare-metal server can all be peers in the same cluster — and work flows to whichever node runs it best. *From the creator of OpenShift.*

That breadth runs all the way down to the compute. Orama Zetta targets heterogeneous backends — **CPU, CUDA (NVIDIA), ROCm (AMD), MLX (Apple), Vulkan, SYCL, GCP TPU, and AWS Neuron ASIC** (Trainium for training, Inferentia for inference) — built in C++ with use-case-specific, **fused GPU kernels** for native speed and transformational cost profiles. Above the silicon it spans operating systems (macOS / Linux / Windows), architectures (x86 / ARM), and deploy targets (AWS / GCP / Azure / Oracle Cloud / Kubernetes / bare metal). One cluster, the whole matrix.

The payoff is **ultimate control over cost, flexibility, and resilience.** Cost: send each job to the cheapest hardware that runs it well, and burst only when you need to. Flexibility: you're not boxed into one vendor's stack or one chip's economics. Resilience: a cluster that spans clouds isn't susceptible to a single vendor's outages or degradations — spread a job across two clouds and your own metal, and any one of them can fail without stopping the work. That's the opposite of betting the company on one region of one provider.

> Honest framing (for script-writers): the local/equal-peer clustering and replication are real today, but the **breadth of cloud-burst compute backends is in flight** — **Azure is the reference cloud-burst backend; AWS and GCP mirror it.** Don't claim every backend as shipped — see [`../roadmap.md`](../roadmap.md) and [`../vision-and-strategy.md`](../vision-and-strategy.md) (Risks) and [`06-orama-zetta-spine-and-substrate.md`](06-orama-zetta-spine-and-substrate.md).

**Talking points**
- "Hybrid" usually means *portable*; **true hybrid** means a single cluster spans vendors and architectures *at once*.
- Equal-peer cluster of deliberately non-uniform nodes — work flows to whatever each node runs best.
- Heterogeneous backends: CPU, CUDA, ROCm, MLX, Vulkan, SYCL, GCP TPU, AWS Neuron (Trainium/Inferentia) — C++ fused kernels.
- Spans OS (macOS/Linux/Windows), arch (x86/ARM), targets (AWS/GCP/Azure/Oracle Cloud/k8s/bare metal).
- Payoff: ultimate control over **cost, flexibility, and resilience** — no single-vendor outage can stop the work.
- Credibility: *from the creator of OpenShift.*

**Lines worth saying**
- "Most 'hybrid' lets you pick a place. True hybrid spans them at once."
- "One cluster, every vendor and architecture — work goes to whatever runs it best."
- "Spread a job across two clouds and your own metal. Any one can fail; the work doesn't."
- "Not portable to one vendor — resilient across all of them."

**Show (visual beats)**
- One cluster ring whose nodes are different chips — NVIDIA, AMD, Apple, a TPU, a CPU box — all peers, work routing between them.
- A job splitting across "AWS + Azure + your data center"; one provider greys out (outage) and the job keeps running.
- A cost meter dropping as a workload reroutes from premium GPU to the cheapest backend that still runs it well.

**Sources:** [`../vision-and-strategy.md`](../vision-and-strategy.md) (True hybrid), [`../one-pager.md`](../one-pager.md), [`../roadmap.md`](../roadmap.md) (what's built vs. in flight), [`06-orama-zetta-spine-and-substrate.md`](06-orama-zetta-spine-and-substrate.md)
