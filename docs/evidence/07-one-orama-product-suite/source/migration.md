# Migration — zero-downtime v1→k8s→v3, with safe cutback

Part of [`README.md`](README.md) / [`orama-bridge#130`](https://github.com/oramasearch/orama-bridge/issues/130).
The v1 in-cluster foundation is [`../orama-cloud-v1/`](../orama-cloud-v1/) (techops-docs) + the
[`orama-cloud-v1-operator`](https://github.com/oramasearch/orama-cloud-v1-operator).

## Goal + guarantees

Migrate the **scattered, AWS-hosted Orama Cloud v1** into a **single Kubernetes-hosted deployment**
(the operator), then **fold v2 + Clustera + Zetta** into it as **Orama Cloud v3** — with:

- **Zero downtime.** No cutover step interrupts live traffic on `app.orama.com`.
- **Full backward compatibility.** Every existing API + UI keeps working.
- **UI selectability.** Default to the **new Orama Zetta UI**; keep the **v1 dashboard** and the **v2
  UI** selectable. Inside the Zetta web/desktop UI: **Orama Marketing Cloud** + **Orama Churn Cloud**.
- **Safe cutback.** Old hardware is decommissioned **only after a 2-week window** in which both
  **cutover** (traffic on the new stack) and **cutback** (able to revert instantly) are proven.

## Current v1 topology being migrated

v1 is spread across AWS (OramaCore engine on EC2 + a GPU writer behind Global Accelerator → ALB →
Envoy) + GCP (index-builder on Cloud Run, HPES/DISCO/HARVEST VMs, ClickHouse) + Vercel (dashboard) +
Cloudflare (edge) + PlanetScale (control DB). The operator already **models this whole topology
in-cluster** from one `OramaCloudV1` CR; the engine data-path is green with an exhaustive e2e
([operator#44](https://github.com/oramasearch/orama-cloud-v1-operator/issues/44)). Remaining gaps
(control-DB schema, edge/Cloudflare, analytics wiring) are tracked on the operator.

## Migration stages

Ordered so each is shippable and **reversible**. (Cross-refs the README roadmap.)

### A. Solidify v1 in-cluster (Stage 0 — largely done)
The whole v1 stack deployable from one CR; engine green. Close the control-plane/edge gaps so an
in-cluster v1 can serve **all** of `app.orama.com`'s surfaces, not just the engine path.

### B. Stand up the new cluster + data sync (Stages 1–3)
- Deploy the k8s-hosted v1 alongside prod (not serving live traffic yet).
- Deploy Zetta headless (`OramaZettaCluster`, Stage 1) + wire the operator↔Zetta symbiosis (Stage 2).
- **Continuous data sync** from the live AWS/GCP/PlanetScale/ClickHouse stores into the in-cluster
  stores so the new cluster is warm and consistent before any traffic moves.

### C. Zero-downtime cutover (Stage 4)
- Shift `app.orama.com` traffic from scattered-AWS to the k8s deployment behind the existing edge
  (Cloudflare/Global Accelerator), **gradually** (canary % → full) with health/SLO gates.
- Default the UI to **Orama Zetta**; keep **v1 dashboard** + **v2 UI** selectable. No user is forced
  off their surface — backward compatibility is absolute.
- **Cutback ready at every step:** traffic can revert to AWS instantly (both stacks stay live + synced).

### D. Fold in v2 + Clustera (Stage 5)
Merge Orama Cloud v2 (Railway + Clerk) + Clustera into **Orama Cloud v3**. Unify onboarding under
Clustera's professional-services fulfillment. `oramasearch.com` → **redirect to `orama.com`** (the
four-product suite).

### E. Datastore → Zetta (Stage 6)
Progressively replace the operator-managed datastores with Zetta, **one store at a time**, each behind
its own dual-write + verify + cutover + cutback: **Postgres → Zetta**, **ClickHouse → Zetta**,
**RabbitMQ → Zetta**, **Typesense → Zetta**. End state: **no Postgres, no RabbitMQ, no ClickHouse —
nothing but Zetta**, per Zetta's design.

### F. Decommission (Stage 7)
After a **2-week** window in which the new stack has carried production and cutback has stayed proven,
**decommission the old AWS/GCP hardware**. Only then; not before.

## The cutover/cutback discipline (non-negotiable)

Every stage that moves traffic or data follows the same shape:

1. **Dual-run** — old and new both live, both fed (dual-write / continuous sync).
2. **Shadow / canary** — send a copy or a small % to the new path; compare results + SLOs.
3. **Cutover** — shift the majority, watching the gates.
4. **Cutback proven** — keep the old path hot + synced for the full window; a single command reverts.
5. **Decommission** — only after the window closes clean.

**Cutback gates (to define — README open question):** the concrete health/SLO thresholds (search
latency/propagation/error-rate, data-consistency checks, the Grafana alert set) that must hold for the
full 2 weeks before any hardware is retired.

## Risks / watch-items

- **Data consistency during dual-run** — the CRDT model helps, but cross-store sync (PlanetScale,
  ClickHouse) needs verified reconciliation before cutover.
- **Edge routing** — Cloudflare/Global-Accelerator reconfig is the live-traffic pivot; must be
  reversible in one step.
- **v2/Clerk identity** — folding v2 requires an auth-continuity plan (backward-compatible sessions).
- **Zetta maturity per store** — Stage 6 gates on Zetta actually covering each store's workload
  (analytics scale, queue semantics) before it replaces the incumbent.
