# Orama Platform — User Stories

Format: `As a [persona], I want to [action] so that [benefit]`. Priority via the bridge's `p1`–`p4` labels (per [`docs/issue-tracking.md`](../../issue-tracking.md)) — these stories carry the priority they'd get as issues. Acceptance criteria as `Given/When/Then`. Personas: [`personas.md`](personas.md). When a story becomes actionable it's filed as a GitHub issue per `github-ops`.

---

## S1 — Import an existing workflow and get a correct graph *(p1, R1)*
**As** Charles (P1), **I want to** drop my n8n workflow JSON into the app **so that** I get a correct, professionally-architected execution graph without rebuilding it by hand.

- [ ] **Given** Charles's Churn Pattern Extractor + Risk Scoring Engine JSON, **when** he imports them, **then** the app produces an execution graph (connect → extract → model → index → serve) it can explain step-by-step.
- [ ] **Given** the import, **when** the graph references data the source doesn't have, **then** the app flags the mismatch rather than silently generating a broken step.
- [ ] **Given** the Gemini-only scoring in his workflow, **when** the graph is architected, **then** a real predictive step (XGBoost+SHAP) is proposed in its place (bundled, per the [Motive positioning](../../meetings/2026-06-23-casey-issac-steve/proposal-positioning.md)).

## S2 — Describe a problem in plain language *(p1, R1)*
**As** Dana (P2), **I want to** describe a modeling problem in natural language **so that** I get a scaffolded, correct graph instead of starting from a blank notebook.

- [ ] **Given** "predict mid-market churn from our Snowflake + support data," **when** Dana submits it, **then** the app produces a graph with featurize → train → SHAP → serve steps and names the inputs it needs.
- [ ] **Given** the generated graph, **when** Dana edits a step, **then** the app re-validates and shows the impact.

## S3 — Trust that the graph is correct before it runs *(p1, R2)*
**As** Dana (P2), **I want** the platform to validate the graph **so that** I'm not deploying a confidently-wrong pipeline.

- [ ] **Given** a graph with an ML step, **when** validation runs, **then** point-in-time / leakage checks pass or the step is blocked with a reason.
- [ ] **Given** the churn graph, **when** the FedEx-Freight test runs, **then** it resolves division-correct (not an averaged "rosy picture").
- [ ] **Given** a failing validation, **when** Charles views it, **then** he sees *why* (schema mismatch / leakage / source error), not a stack trace.

## S4 — Run it locally first *(p1, R1)*
**As** Dana (P2), **I want to** run the graph on a local Orama Zetta node **so that** I can see real results before touching cloud infrastructure.

- [ ] **Given** a validated graph, **when** Dana clicks Run, **then** a local Orama Zetta node executes it and streams results + lineage (which inputs, which steps, how many rows).
- [ ] **Given** synthetic data (no real-data access yet), **when** the graph runs, **then** it produces a result Dana can inspect (the [synthetic-data bootstrap](../../meetings/2026-06-23-casey-issac-steve/data-access-and-synthetic-data.md)).

## S5 — Deploy to my own infrastructure, one button *(p2, R3)*
**As** Charles (P1), **I want to** deploy the Orama Zetta nodes + graph into my own cloud **so that** my devs run it where we control it, without me hand-provisioning.

- [ ] **Given** a validated graph + a target (k8s cluster / VM), **when** Charles clicks Deploy, **then** Orama Zetta node(s) are provisioned and the graph runs there.
- [ ] **Given** a node failure, **when** it drops, **then** the control plane repairs it (reconcile).
- [ ] **Given** the deploy, **when** it completes, **then** nothing left Charles's environment (verifiable — no data egress).

## S6 — Keep cost + latency down with tiered storage *(p3, R4)*
**As** Charles (P1), **I want** expensive source data pulled into fast local indexes and aged to cold storage **so that** queries are fast and cheap and re-warm on demand.

- [ ] **Given** a Snowflake source, **when** the graph indexes it, **then** queries answer from the local materialized copy (faster than the source) with visible freshness/lag.
- [ ] **Given** cold data, **when** it's requested, **then** it re-warms on demand.

## S7 — Run my code where the data lives *(p3, R5)*
**As** Dana (P2) / the Agent (P4), **I want** my cleaning/featurize/scoring code to run on the node **so that** there's no warehouse round-trip and no data exfiltration.

- [ ] **Given** a graph step with custom logic, **when** it executes, **then** it runs as embedded Lua / a DDF call on the node holding the data.
- [ ] **Given** generated code, **when** it runs, **then** it's sandboxed within the node's access scope.

## S8 — Self-serve safely under governance *(p2, R6)*
**As** Sam (P3), **I want to** ask questions / schedule checks within my access scope **so that** I get answers without a ticket and without seeing data I shouldn't.

- [ ] **Given** Sam's identity (Okta), **when** Sam queries, **then** results are scoped to what Sam's keys/role can access.
- [ ] **Given** any deploy or graph change, **when** it happens, **then** it's recorded in an audit trail; risky changes route through an approval gate.

## S9 — See and operate it in one app *(p2, R7)*
**As** Charles (P1), **I want** one GUI to import → architect → deploy → monitor **so that** I'm not stitching CLIs and consoles.

- [ ] **Given** the app, **when** Charles opens it, **then** he can import an artifact, see the graph, pick a placement, deploy, and watch live execution (results, cost, latency, lineage) in one place.

---

> Every story serves **Intelligence Velocity** — shrinking the time from a persona's intent to deployed, correct, governed intelligence. S1–S4 + S9-lite are the near-term GUI focus.
