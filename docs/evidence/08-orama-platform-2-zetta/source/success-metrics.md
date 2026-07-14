# Orama Platform — Success Metrics

The product name *is* the headline metric: **Intelligence Velocity**. Define metrics before building; instrument before launch (a success metric without instrumentation is a wish).

## Primary metric — Intelligence Velocity

**Median time from intent → deployed, running, correct intelligence.** From "user submits NL/artifact" to "a validated execution graph is deployed and producing correct results on a target."

- **Target:** **minutes**, against a by-hand baseline of **weeks–quarters** (Charles faces a ~3-month vendor deploy even *with* shipping code; a churn pipeline by hand is a multi-week data-science + platform effort).
- **R1 instrumented checkpoint:** intent/artifact → **graph running locally with correct output** in **< 1 day** (the Motive 2-week build is the first real-world stopwatch).
- Sub-metrics on the arc: time-to-graph (ingest→architected), time-to-validated (architected→passes the gate), time-to-deployed (validated→running on target).

## Correctness gate (release-blocking)

**% of generated execution graphs that compile AND run AND produce correct results.** This is orama-platform-1's open Q6 made into a gate — without it, velocity is just *fast wrong answers*.

- **Target:** set a floor (e.g. ≥ 90% on the evaluated task set) **before** "self-service deploy" ships to non-engineers; gate releases on it.
- **Canonical correctness case:** the **FedEx-Freight division-correct** test (entity resolution, not an averaged rosy picture) — borrowed from the Motive eval gates.
- Track first-try vs. after-one-edit correctness (P4-relevant: how good is generation unaided).

## Velocity / shift-left

**Self-service rate — share of pipelines deployed without the platform team in the loop.** The direct measure of "shifting the bottleneck off people."

- **Target:** trend up; the inverse signal is tickets-filed and "waiting on Charles."
- Companion: **# of distinct non-engineer users (P3)** who deploy or run a graph.

## Cost

**Warehouse-spend reduction via tiered storage / materialization** (queries served from local indexes vs. raw-source compute).

- **Target:** *directional only for now* — the ~60% figure from `zetta-business` is an **unvalidated hypothesis**; do not quote externally. Instrument actual local-vs-source query cost once R4 lands and report measured deltas.
- Companion: query latency (local materialized copy vs. raw source) — beat the source on common questions.

## Guardrail metrics (must not regress while chasing the above)

- **Governance violations = 0** — no data egress from the customer environment (verifiable under network capture); RBAC enforced; audit trail complete for every deploy / graph change / data access.
- **Generated-graph incident rate** — graphs that pass the gate but fail/misbehave in production; if velocity rises while this rises, the gate is too loose.
- **Deploy reliability** — % of one-button deploys that succeed + self-heal without manual intervention.
- **Control-plane integrity** — if control-plane state lives in Orama Zetta (no Postgres), track lost/conflicting state events (the transactions/leadership-gap risk).

## Per-persona "success looks like"

| Persona | Primary signal |
|---|---|
| **P1 Charles** | First downloadable build in 2 weeks; devs reproduce churn unaided; deployed + governed in his firewall; faster/cheaper than his n8n contraption |
| **P2 Dana** | Correct model deployed in a day; iteration loop in minutes; generated graph passes the gate |
| **P3 Sam** | Self-serve answer/scheduled check with zero tickets and zero governance violations |
| **P4 Agent** | Generated graphs correct first/second try; sub-second compute-near-data calls; quality improving via the experience loop |

## After launch

Assess each shipped capability as **success** (double down), **partial** (investigate + iterate), or **failure** (sunset + learn); record on the tracking issue or in `docs/projects/updates/`. Apply the two weekly tests: did Intelligence Velocity measurably improve for a user, and did it strengthen the business (enterprise progression, moat)?

> Instrumentation note: lean on the existing telemetry discipline ([`docs/projects/telemetry/`](../telemetry/)) — the intent→deploy arc must emit timing spans per stage, or the primary metric can't be measured.
