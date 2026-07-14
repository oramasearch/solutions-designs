# 10 — For the data scientist / ML engineer

**Logline:** You can build the model. What kills you is the wrangling, the plumbing, and the deploy. Orama Zetta does that part — and won't let a leaky or unsound graph ship.

**For:** the data scientist / ML engineer (the Dana persona). Strong on modeling, less interested in Kubernetes.

---

Most of your time isn't modeling — it's wrangling data, fighting connectors, and waiting on someone to deploy what you built. The model is the part you're good at and the smallest part of the job. And the prototype you finally get working in a notebook tends to die there, because turning it into something deployed and governed is a separate project you don't own.

Orama Zetta scaffolds the boring 90%. Describe the problem or import a notebook, and it stands up the correct graph — featurize, train, explain (SHAP), serve — wired to the sources, with the point-in-time and leakage checks already in place so you're not fooling yourself. You review and tune the graph instead of building the plumbing from scratch. Then it deploys, on your infrastructure, without you learning Terraform.

It also won't let you ship something unsound: the correctness gate catches leakage, the averaged-away entity, the models with no real predictive power. That's a backstop *for* you, not a constraint on you — it's the stuff a careful reviewer would flag, done automatically.

And when you can't get the real data yet (it's behind a firewall), it can profile the shape and generate synthetic data so you can build and validate now, then swap to real data when access lands.

**Talking points**
- The model is the small part; wrangling + plumbing + deploy is where your time goes — Zetta takes that.
- Correct graph scaffolded: featurize → train → SHAP → serve — often an ensemble of models, not one — with leakage + point-in-time checks built in.
- You review/tune; you don't hand-build plumbing or learn k8s to deploy.
- Synthetic-data bootstrap unblocks you before real-data access lands.

**Lines worth saying**
- "You own the modeling judgment. It trains the models and pipelines around it — often an ensemble — and deploys them."
- "The correctness gate is a careful reviewer that never gets tired."

**Show (visual beats)**
- A pie chart: tiny "modeling" slice vs. huge "wrangling + plumbing + deploy" slice → Zetta eats the big slice.
- A leakage check firing on a generated graph, with the fix suggested.

**Sources:** [`../personas.md`](../personas.md) (P2), [`../../../meetings/2026-06-23-casey-steve/churn-architecture.md`](../../../meetings/2026-06-23-casey-steve/churn-architecture.md)
