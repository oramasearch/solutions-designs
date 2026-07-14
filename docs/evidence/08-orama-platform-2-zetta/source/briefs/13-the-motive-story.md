# 13 — The Motive story (the proof case)

**Logline:** A real company, a real bottleneck, a real workflow we can point at — Motive's churn system is exactly the problem Orama Zetta is built to solve.

**For:** everyone — the concrete case study that grounds every other brief.

---

Motive is a ~5,000-person company with a CEO-level mandate to understand churn in the mid-market. Their platform lead, Charles, built a churn system by hand: an n8n workflow that pulls communications out of Snowflake, sends them to Gemini to summarize into "churn signatures," stores them in a database, and scores active accounts against them — with a calibration loop to track accuracy over time. It's genuinely clever. And it's a bottleneck: it's bespoke, only he can really run it, and the scoring is an LLM pattern-matching — no real predictive model — so its risk numbers don't hold up (his own numbers ran high-90s where a quick attempt came back at 75%, the signature of a model that isn't actually learning).

That's the whole thesis in one company. Everything funnels through Charles. The prototype works but isn't production-grade or self-serve. The "intelligence" is an LLM guessing, not a trained model. The business has been waiting.

Orama Zetta is the answer to exactly that: import his two n8n workflows, re-architect them into a correct graph — with a *real* predictive model (trained, explainable, checked for leakage) where the LLM was guessing — deploy it inside Motive's firewall behind their identity provider, and hand his developers a build they run themselves. Same problem he's been hand-cranking, now fast, correct, governed, and off his plate.

It's also the wedge: land Motive on churn, prove the loop, and the same motion repeats across the next enterprise — and the next. The Motive build is, in effect, Orama Zetta's first release scoped to one customer.

**Talking points**
- Real company, real CEO mandate (mid-market churn), real hand-built bottleneck.
- His system: n8n → Snowflake → Gemini summaries → DB → scoring + calibration. Clever, but bespoke and LLM-guessing (75% vs high-90s = no real predictive power).
- Orama Zetta: import the workflows → correct graph with a *real* model → deploy in his firewall → devs self-serve.
- The wedge: land one, prove it, repeat — the Motive build is R1 scoped to one customer.

**Lines worth saying**
- "Charles built something clever — and became the only person who could run it. That's the bottleneck."
- "Same churn problem he's been hand-cranking — now fast, correct, governed, and off his plate."

**Show (visual beats)**
- His real n8n graph (Snowflake → Gemini → Postgres → score) → the Orama Zetta version beside it with a "real model" node swapped in.
- "75% vs high-90s" — the tell that the old scoring isn't learning.
- One deal → a row of identical deals lighting up across a network.

**Sources:** [`../../../meetings/2026-06-03-casey-charles-issac-juan-matt-nathanael-steve/charles-n8n-workflows.md`](../../../meetings/2026-06-03-casey-charles-issac-juan-matt-nathanael-steve/charles-n8n-workflows.md), [`../../motive-delivery/`](../../motive-delivery/), [`../../../meetings/2026-06-23-casey-issac-steve/`](../../../meetings/2026-06-23-casey-issac-steve/)
