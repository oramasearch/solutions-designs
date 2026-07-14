# Orama Platform — Roadmap (as problems)

Problems in priority order, not features. Each: **impact**, **cost**, **rationale**, and the **Orama Zetta dependency** (the gating reality — most substrate capabilities are unbuilt; this roadmap must be co-sequenced with Orama Zetta's). R1 is the skateboard — the thinnest thing that delivers real Intelligence Velocity on *today's* Orama Zetta.

> Orama Zetta reality (verified against the code, 2026-06-23): **have** = CRDT-replicated JSON store, equal-peer cluster, large objects, Postgres-SQL *subset*, coroutine runtime, headed (SDL3/ImGui) + headless modes. **missing** = DDF API, embedded Lua, tiered storage, indexing, k8s/cloud deploy, Postgres wire protocol, auth/RBAC. Each problem below is tagged with what Orama Zetta must add.

---

## R1 — Skateboard: one artifact → a correct graph → running on a local Orama Zetta node

**Problem.** A team has a working-but-bespoke prototype (Charles's n8n churn workflows) and no fast path to a correct, runnable system. Prove the core loop end-to-end on the smallest real case.

- **Scope:** GUI imports **n8n JSON** (we have Charles's two workflows as ground truth) → compiles a **correct execution graph** → deploys **one local Orama Zetta node** → runs the graph → shows results + lineage. One artifact type, one target (local), one use case (churn).
- **Orama Zetta dependency:** *minimal* — runs on what exists (cluster + JSON store + SQL subset) + the smallest new surface to execute graph steps. **This is why R1 is local-first.**
- **Impact:** high — it's [`motive-delivery`](../motive-delivery/)'s first build, and the proof the bottle works.
- **Cost:** medium — the n8n→graph compiler + a thin GUI + local run.
- **Rationale:** deliver value on today's engine; everything else is earned from here. Ties directly to the Motive 2-week target.

## R2 — The graph must be *correct*, not just runnable

**Problem.** "Self-service" that ships confidently-wrong pipelines is worse than a ticket queue (orama-platform-1's open Q6, restated). A generated graph must be validated before it deploys.

- **Scope:** a validation/eval gate — schema/type-check the graph against data-source profiles; point-in-time / leakage checks for ML steps; a correctness eval (does it compile AND run AND produce the right answer, e.g. FedEx-Freight division-correct). Block deploy on failure; show *why*.
- **Orama Zetta dependency:** profiling of source schemas; deterministic execution.
- **Impact:** high — correctness is the whole differentiation vs. n8n/Zapier.
- **Cost:** high — this is the hard PM/eng problem. Lean on the churn RLVR/eval discipline from [`churn-architecture.md`](../../meetings/2026-06-23-casey-steve/churn-architecture.md).
- **Rationale:** without it, Intelligence Velocity is just *fast wrong answers*.

## R3 — One-button deploy of a Orama Zetta node + graph to a target

**Problem.** Going from "runs on my laptop" to "running on infrastructure I control" is a separate quarter-long project today.

- **Scope:** deploy a Orama Zetta node + the graph to **one** real target (start: a single k8s cluster, then on-prem VM). Target detection; provision node; run graph; self-heal.
- **Orama Zetta dependency:** **k8s/cloud deploy story (unbuilt)** + node-stand-up automation. Big gap.
- **Impact:** high — "deploy to your cloud" is the enterprise unlock.
- **Cost:** high — provisioning surface area; start with ONE target, resist the matrix.
- **Rationale:** the "Railway for private-cloud data/AI" promise begins here.

## R4 — Stop the data leaving / stop the warehouse bill: tiered storage

**Problem.** Raw-source queries at scale are slow + expensive; data can't always leave the firewall.

- **Scope:** pull source data (Snowflake first) into Orama Zetta **in-memory indexes** → age to **cold storage** → **re-warm on request**; serve queries from the local materialized copy; show freshness/lag.
- **Orama Zetta dependency:** **tiered storage + indexing (both unbuilt)** — the largest engine investment. Co-sequence tightly.
- **Impact:** high — the cost + locality story (and the `zetta-business` thesis); also the synthetic-data profiling path for [`motive-delivery`](../motive-delivery/).
- **Cost:** very high — core engine work.
- **Rationale:** this is what makes Platform 2 *cheaper and faster*, not just *easier*.

## R5 — Run user/agent code where the data lives: compute-near-data

**Problem.** A correct graph needs to run bespoke logic (cleaning, featurize, model scoring) without round-tripping data out.

- **Scope:** embedded **Lua** / a **DataFrame (DDF) API** so user- or agent-generated code executes on the node, calling a high-performance in-node API. Sandboxed.
- **Orama Zetta dependency:** **embedded Lua + DDF API (both unbuilt).**
- **Impact:** high — the data-locality moat; the "app inside the database" thesis.
- **Cost:** very high — engine work + sandboxing/security.
- **Rationale:** without it, "execution graph" is just remote orchestration, not the locality advantage.

## R6 — Make self-service *safe*: governance + access controls

**Problem.** Shifting capability to the edge without guardrails dumps risk on the enterprise (the load-bearing requirement from [`motive-problem-definition`](../motive-problem-definition/)).

- **Scope:** identity (Okta/OAuth), RBAC scoped per workflow/data, audit trail (every graph change + run + access), approval gates (propose→approve→apply for deploys), data residency. Start key-scoped (inherit the connection key's access — the [June 23 V1 decision](../../meetings/2026-06-23-casey-issac-steve/)), graduate to tiers.
- **Orama Zetta dependency:** **auth/RBAC (unbuilt).**
- **Impact:** high — gates every enterprise deal.
- **Cost:** high.
- **Rationale:** "enterprise governance" is the difference between this and n8n/Railway.

## R7 — The GUI as the product surface

**Problem.** The loop above must be usable by P1–P3 without a CLI.

- **Scope:** artifact-import panel → NL intent canvas → graph visualizer (wire/validate/see schema mismatches) → deployment picker (placement) → execution monitor (live results, cost, latency, lineage). Decide: extend Orama Zetta's SDL3/ImGui headed mode vs. a new Tauri/web shell.
- **Orama Zetta dependency:** stable control-plane reads/writes against the Orama Zetta store.
- **Impact:** high — it's literally "the GUI application" the near-term focus names.
- **Cost:** medium–high.
- **Rationale:** the velocity is only *felt* through the GUI; R1 can be CLI/scripted, but the product is the app.

## R8 — Multi-cloud + the learning loop *(later)*

**Problem.** One target isn't enough; and generated graphs should get better over time.

- **Scope:** AWS/Azure/GCP target detection + provisioning (generalize R3); the experience loop so deployed graphs feed back into better generation (the orama-platform-1 "Experience River" idea, Orama Zetta-native).
- **Orama Zetta dependency:** mature deploy + on-node training/inference.
- **Impact:** high (compounding moat) but **not** near-term.
- **Cost:** very high.
- **Rationale:** north-star; explicitly deferred so R1–R7 aren't starved.

---

## Sequencing notes

- **R1 + R7-lite + R2** are the near-term GUI focus (skateboard → correct → usable), runnable on/near today's Orama Zetta.
- **R4 + R5** are the **biggest Orama Zetta engine bets** (tiered storage, compute-near-data) — the largest risk and the deepest moat; they need a co-owned Orama Zetta roadmap, not just platform work.
- **R3 + R6** unlock the enterprise (deploy-to-your-cloud + governance).
- **R8** is the compounding north-star, deferred.
- **The Motive wedge ([`motive-delivery`](../motive-delivery/)) is R1 scoped to one customer** — ship that first, generalize after.
