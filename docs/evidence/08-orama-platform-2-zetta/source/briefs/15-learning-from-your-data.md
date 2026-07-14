# 15 — It learns from your data

**Logline:** Everyone else rents a model and asks it questions. Orama Zetta trains models and pipelines *on your data* — so it actually learns your business, and gets sharper the more it sees. That's the difference between intelligence and a confident guess.

**For:** everyone, but it's the knockout punch for technical buyers and investors — the real differentiator vs. Glean, Cowork, and "an automation tool + an LLM."

---

Strip "AI" back to its definition: you do a task, you throw more data at it, and it gets *better* at that task. It **learns**. By that definition, most of what's sold as enterprise AI isn't learning at all — it's wiring a harness to someone else's frozen model and prompting it. That's **inference**. It's **transfer learning** at best: hoping what a model learned somewhere else transfers to your problem. The model never gets better at *your* business, because it never learned from *your* data.

Orama Zetta does the actual work of AI: it **trains models and pipelines on your data** — often an ensemble; real solutions are rarely a single model. *"If you're not training on your data, you're not fully using AI."* True predictive power comes only from training on your own data. That's the whole game. It's the difference between a churn score that's a language model guessing — and one with real predictive power, that can tell you *what's actually driving* the outcome, because it learned it from your history, not from the open web.

And learning **compounds**. The more of your data flows through it — and the more it runs — the better it gets at your tasks. A competitor wiring up frontier models re-derives every problem from scratch and plateaus at whatever the rented model already knew. A system that learns from your data pulls away and keeps pulling. That's the moat, and it's why the value-prop arc runs **search → answer engine → enterprise intelligence**: the end state is a system that can see your whole company's data *and learn from it.*

The catch this removes: actually training models on enterprise data is hard — distributed training is the domain of specialists and tools no business user can drive. Orama Zetta makes learning-from-your-data a thing you *get*, not a thing you staff a team for — and because the model lives where the data lives, your data never leaves to do it.

> Honest framing (for script-writers): the trained-model path is the design — see [`../../../meetings/2026-06-23-casey-steve/churn-architecture.md`](../../../meetings/2026-06-23-casey-steve/churn-architecture.md) for how it works (XGBoost + SHAP, point-in-time, no leakage). The on-engine training/experience loop is in flight; don't claim it as shipped (see [`../roadmap.md`](../roadmap.md)).

**Talking points**
- AI = do a task, add data, get better. If the model never gets better at *your* business, it isn't learning.
- Renting a frozen frontier model + prompting = inference / transfer learning, not learning.
- If you're not training on your data, you're not fully using AI — true predictive power comes only from training on your own data.
- Orama Zetta **trains models and pipelines on your data** (often an ensemble — real solutions are rarely a single model) — real predictive power + *why* (the drivers), not a guess.
- Learning **compounds**: more of your data + more runs → it pulls away; rented-model competitors plateau.
- The arc: search → answer engine → **enterprise intelligence** (see all your data *and learn from it*).
- It makes model-training accessible (no Ray cluster, no ML team) and keeps your data in place (the model trains where the data lives).

**Lines worth saying**
- "It doesn't rent a brain. It grows one on your data."
- "If you're not training on your data, you're not fully using AI — you're just guessing with extra steps."
- "True predictive power comes only from training on your own data."
- "Most 'AI' skips the learning. Add more of your data and it should get *better* — ours does."
- "A rented model plateaus at what it already knew. One that learns from you pulls away."

**Show (visual beats)**
- Split screen — **Them:** your question → a frozen, generic model → an answer (the model never changes). **Orama Zetta:** your data → a model that's *yours* → it visibly sharpens.
- A learning curve climbing as more of your data flows in, beside a flat line labeled "rented model."
- A "guess" (a wide, fuzzy probability) snapping into a confident, *explained* prediction with its top drivers listed.

**Sources:** [`../../../meetings/2026-06-23-casey-issac-steve/summary.md`](../../../meetings/2026-06-23-casey-issac-steve/summary.md) (the search→answer-engine→enterprise-intelligence arc; "learning vs. inference"), [`../../../meetings/2026-06-23-casey-steve/churn-architecture.md`](../../../meetings/2026-06-23-casey-steve/churn-architecture.md), [`07-correct-by-construction.md`](07-correct-by-construction.md), [`14-the-name-zetta.md`](14-the-name-zetta.md)
