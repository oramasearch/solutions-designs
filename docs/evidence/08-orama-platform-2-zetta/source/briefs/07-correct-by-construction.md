# 07 — Correct by construction (why it's not an automation tool with an LLM bolted on)

**Logline:** Anyone can generate a workflow. The hard part — and the whole point — is generating one that's *correct*: production-grade, not demoware. Orama Zetta validates before it deploys.

**For:** technical buyers and skeptics who've been burned by AI that's confidently wrong.

---

The easy version of this product is a toy: an LLM emits a workflow, you run it, and you find out later it was subtly wrong — a leaky feature, a join that quietly averaged two divisions into a rosy lie, a number with no real predictive power behind it. Fast wrong answers, at scale. That's demoware — impressive once, and worse in production than the bottleneck it replaced.

Orama Zetta is built the other way around: **correct by construction.** Every generated graph is validated *before* it can deploy. Schemas are type-checked against the real sources. ML steps are checked for data leakage and point-in-time discipline, so the model isn't cheating with information it wouldn't have had in production. And there's a correctness gate — does this graph compile, run, *and* produce the right answer on a known case — that a graph has to pass before it ships.

A concrete bar: ask "what's the churn risk for FedEx Freight," and the system has to resolve to the *right* division, not blend several into a flattering average. That kind of entity-resolution correctness is the difference between a demo and something a business runs on.

This is also why it's not just an automation tool with an LLM bolted on. Those tools are great for prototyping; they make no promise that the result is architecturally sound or statistically valid. Correct-by-construction is the promise — production-grade, not demoware — and it's what makes self-service safe to hand to people who aren't data scientists.

**Talking points**
- The easy product (LLM → workflow) ships confidently-wrong systems; that's the trap — demoware, not production-grade.
- Validation runs *before* deploy: schema type-checks, leakage + point-in-time checks, a correctness gate.
- The FedEx-Freight test: resolve to the right entity, never an averaged "rosy picture."
- Correctness is what makes self-service safe for non-experts — and what separates this from an automation tool with an LLM bolted on.

**Lines worth saying**
- "Generating a workflow is easy. Generating a *correct* one is the product."
- "It has to be right before it's allowed to ship."
- "Production-grade, not demoware."

**Show (visual beats)**
- A generated graph hits a validation gate: leakage check fails → blocked, with the reason.
- FedEx Freight: a wrong "averaged" answer crossed out; the correct division-level answer beside it.

**Sources:** [`../success-metrics.md`](../success-metrics.md) (the correctness gate), [`../../../meetings/2026-06-23-casey-steve/churn-architecture.md`](../../../meetings/2026-06-23-casey-steve/churn-architecture.md) (point-in-time / no-leakage discipline)
