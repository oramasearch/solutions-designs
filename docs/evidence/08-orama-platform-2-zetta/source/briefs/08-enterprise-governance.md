# 08 — Enterprise governance: safe self-serve

**Logline:** Pushing this power out to everyone only works if the guardrails come with it. Orama Zetta runs in your walls, scoped to who you are, with everything logged.

**For:** enterprise buyers, security, and platform owners.

---

Shifting the ability to build and deploy intelligence out to the edge — to analysts and developers, not just the central team — is the whole value. But do that without guardrails and you've just handed everyone a way to leak data and break things. So governance isn't a feature bolted on later; it's the precondition that makes self-serve safe.

Three things make it safe. **It runs where you control it** — your cloud, your cluster, your on-prem box; the data never leaves your environment, which is verifiable. **Access is scoped to identity** — sign in through your SSO / identity provider, and you only ever see and touch the data your role and keys already allow; it's a tailored view, not a shared service account. And **everything is audited** — every graph change, every deployment, every data access is logged, and risky actions can route through an approval gate before they happen.

The starting point is deliberately simple: you operate over exactly the data the key you logged in with already permits — inheriting the access controls you've already set up — and the finer-grained tiers (teams, partners, per-dataset rules) layer on from there. Simple and safe first; sophisticated as you need it.

Governance isn't only a safety rail — it's one of the three axes Orama Zetta automatically optimizes for. This is **auto-ANI for the enterprise**: automated artificial *narrow* intelligence (narrow, aimed at a specific job — not AGI), tuned across **cost, governance, and personalized accuracy**. Every deployed graph is shaped to run cheaply, stay inside the rules, and be accurate for *this* business. Governance is the axis that keeps the other two safe to push.

**Talking points**
- Governance is the precondition for safe self-serve, not an afterthought.
- Governance is one of the three auto-ANI optimization axes — cost, governance, personalized accuracy — not a bolt-on.
- Runs in your environment; data never leaves (verifiable — no egress).
- Identity-scoped access (your SSO / OAuth): a tailored view per user, not a service account.
- Full audit trail + approval gates for risky actions.
- Start key-scoped (inherit existing access); add tiers as needed.

**Lines worth saying**
- "Self-serve is only safe if the guardrails ship with it."
- "It's not a service account. It's a tailored view of exactly what you're allowed to see."
- "Auto-ANI for the enterprise: optimized for cost, governance, and accuracy on *your* data."

**Show (visual beats)**
- A workflow deploying *inside* a labeled company boundary; a "0 bytes egressed" check.
- Two users, same question, different scoped results based on identity.
- An audit log scrolling; a deploy pausing at an "approve?" gate.

**Sources:** [`../../motive-problem-definition/shift-left-platform-engineering.md`](../../motive-problem-definition/shift-left-platform-engineering.md) (guardrails make shift-left safe), [`../../../meetings/2026-06-23-casey-issac-steve/`](../../../meetings/2026-06-23-casey-issac-steve/) (V1 key-scoped access)
