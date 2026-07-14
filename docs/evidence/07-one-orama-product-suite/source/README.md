# One Orama — the v3 convergence

**Status:** Active — kickoff 2026-07-09; Stage 1 shipped, **Stage 2 (symbiosis v0) in progress** · **Owner:** Steve · **Priority:** p1
**Tracking epic:** [oramasearch/orama-bridge#130](https://github.com/oramasearch/orama-bridge/issues/130)
**Confidential — internal strategy.** Contains pricing, an acquisition target, and design-partner names.

> **TL;DR.** Orama is collapsing its scattered product portfolio into **one product suite** anchored by
> **Orama Zetta**. We acquire **Clustera** (tech + founders) to run professional-services onboarding;
> we fold **Orama Cloud v1 + v2 + Clustera + ZettaDB/Orama Zetta** into **Orama Cloud v3**; and we
> migrate the scattered, AWS-hosted v1 into a **single Kubernetes-hosted deployment driven by the
> Orama operator** — **zero downtime**, full backward compatibility, old hardware decommissioned only
> after a **2-week cutback window**. As the dust settles, every datastore (Postgres, RabbitMQ,
> ClickHouse, …) is **progressively replaced by Zetta** until the whole platform *is* Zetta + the
> operator. Zetta is **auto-AI for enterprise** — and, ultimately, the platform to run a **100%
> automated business and a 100% automated portfolio of businesses**.

This folder is the durable plan of record for that convergence. It captures the strategy, the target
product suite, the zero-downtime migration, the symbiotic **operator ↔ Zetta** architecture, and a
source-verified **Zetta-headless technical reference** for the first build step.

> **Source of truth:** [`One Orama.md`](One%20Orama.md) is Steve's **verbatim, unedited** vision brief
> — the original words this plan synthesizes. Where the synthesis and the brief ever diverge, the
> **brief wins**; correct the synthesis. (Transcript-and-summary pattern: keep the original intact,
> evolve the plan around it.)

> **Engineering workflow — how the stages get built:** the day-to-day build → deploy → validate loop
> that advances this roadmap lives in the [`one-orama-dev`](../../../.claude/skills/one-orama-dev/SKILL.md)
> skill (the native-amd64 build box, the operator↔Zetta packaging loop, image builds via the bridge
> `build/images/build.sh`, and CR validation on the AKS sandbox). **Read this plan first**; use the
> skill to move it. Don't guess the operational handles — the skill owns them. To **connect to a
> deployed cluster** (addressing + the REST/SQL/MCP/web surfaces + the mTLS/token auth model), see the
> operator's [`docs/connecting.md`](https://github.com/oramasearch/orama-cloud-v1-operator/blob/main/docs/connecting.md).

---

## Documents in this project

| Doc | Covers |
|---|---|
| [`One Orama.md`](One%20Orama.md) | **The original brief — verbatim.** Steve's unedited statement of the vision (current state, the 4-product suite, the operator↔Zetta symbiosis, the migration, the MCP-as-voice rule). Source of truth. |
| **`README.md`** (this) | The whole-picture **synthesis** — current state, future state (the 4-product suite + pricing), the strategic thesis, the staged roadmap, and the governing conventions. |
| [`migration.md`](migration.md) | The **zero-downtime** v1(AWS)→k8s migration, backward-compat/UI-selectability, the progressive datastore→Zetta replacement, and the cutover/cutback + decommission strategy. |
| [`zetta-operator.md`](zetta-operator.md) | The **symbiotic operator ↔ Zetta** architecture (bootstrap chain, bi-directional control loop, Zetta-as-datastore) and the **`OramaZettaCluster` CRD** — step 1: package Zetta headless. |
| [`zetta-headless-reference.md`](zetta-headless-reference.md) | Source-verified facts for **packaging Zetta headless** — the `zetta` binary, `--headless`, ports (7777 / 4800), static-seed clustering + mTLS, the `--data-dir` PVC, the Linux/amd64 build, and the gaps that shape the reconciler. |
| [`session-2026-07-10.md`](session-2026-07-10.md) | **Session log (2026-07-09→10).** Proved one Zetta cluster across k0s + AKS + a laptop; the node-reachability model; three engine bugs found ([zetta#738/#739/#740](https://github.com/oramasearch/zetta/issues/739)); and the **comprehensive authn/authz build** (epic [zetta#743](https://github.com/oramasearch/zetta/issues/743)) — 11 issues → 11 open PRs. |
| [`session-2026-07-11.md`](session-2026-07-11.md) | **Session log (2026-07-10→11).** **Stage 2 symbiosis v0** landed its operator → Zetta half (operator provisions its schema on Zetta + syncs observed state — *Zetta is the operator's datastore*); the **e2e-as-a-CRD + exhaustive L2/L3** workstream (epic [zetta#774](https://github.com/oramasearch/zetta/issues/774)); the **elastic-capacity** ([operator#69](https://github.com/oramasearch/orama-cloud-v1-operator/issues/69)) + **multi-node bring-up** ([operator#93](https://github.com/oramasearch/orama-cloud-v1-operator/issues/93)) epics; and `dev`→`main` promotion. |

---

## Current state (2026-07-09)

Orama runs on three concurrent fronts plus an acquisition target:

- **Orama Cloud v1** — the live, paying-customer stack at **`app.orama.com`**. Scattered across AWS
  (OramaCore engine on EC2 + a GPU writer) + GCP (index-builder, HPES/DISCO/HARVEST, ClickHouse) +
  Vercel (dashboard) + Cloudflare (edge) + PlanetScale (control DB). Now also **modeled in-cluster by
  the [`orama-cloud-v1-operator`](https://github.com/oramasearch/orama-cloud-v1-operator)** — the
  whole stack deployable from one `OramaCloudV1` CR (see [`../orama-cloud-v1/`](../orama-cloud-v1/)).
- **Orama Cloud v2** — the hosted cloud on **Railway + Clerk**, home at **`oramasearch.com`**.
- **Orama Zetta** — the C++26 product (repo/binary codename `zetta`): an equal-peer, CRDT-replicated
  store with clustering, a Postgres-SQL subset, an MCP + REST API, and **headed** (SDL3 + Dear ImGui
  desktop) + **headless** modes. This is **auto-AI for enterprise** — what the current marketing site
  **`orama.com`** represents. The GUI control plane, tiered storage, compute-near-data, and the
  learning loop are in flight.
- **Clustera** *(acquisition target)* — a separate but similar tech company. We acquire its **tech and
  founders**; **Clustera runs the professional-services fulfillment** for onboarding clients into
  Orama Cloud.

**Marketing surfaces today:** `orama.com` = Orama Zetta (auto-AI) · `oramasearch.com` = Orama Cloud v2
· `app.orama.com` = Orama Cloud v1.

---

## Future state — the One Orama product suite

Four products, one suite, anchored by Zetta. After the migration, **`oramasearch.com` redirects to
`orama.com`**, which presents all four:

| # | Product | What it is | Pricing |
|---|---|---|---|
| 1 | **OramaJS** | The current **OSS** search library. | **Free.** |
| 2 | **Orama Search Desktop** | Search-only desktop app — **Zetta, watered down** (a second build target). | **$49 one-time** for a major-version license. |
| 3 | **Orama Cloud v3 — Pro** | The convergence of Orama Cloud **v1 + v2 + Clustera**. Deliberately **light on features — basically agentic search**. | **$200/mo** + **4 hours onboarding @ $125/hr**; **annual discount**. |
| 4 | **Orama Cloud v3 — Enterprise (Orama Zetta)** | The full **Orama Zetta** platform: on-prem / dedicated / dedicated-cloud-hosted (or both). | **$500k/year+**. |

**"Orama Cloud v3"** is the merged product; the **Pro** plan is the light agentic-search tier (what
v1/v2/Clustera offered), the **Enterprise** plan *is* Orama Zetta.

### Zetta's use-case catalog (revenue by module)

Orama Zetta is **use-case-driven** — each module is separately priced. The first three:

1. **Churn model pipeline** *(priority)* — the **Motive** design partner's workload. See the Motive
   project trio ([`../motive-problem-definition/`](../motive-problem-definition/),
   [`../motive-one-proposal/`](../motive-one-proposal/), [`../motive-delivery/`](../motive-delivery/)).
2. **Automated email outbound** *(secondary)*.
3. **Zetta's own agentic RL base model** — the model that **anchors** every other use case (and is a
   use case in its own right).

These are the first of a **large catalog**. New use cases are added as Orama itself automates more of
its own operations (below).

### The UI story

- **Default UI = the new Orama Zetta** experience. The **old v1 dashboard UI** and the **v2 UI** remain
  **selectable** — nobody is forced off their current surface.
- Inside the Orama Zetta **web and desktop** UI live **Orama Marketing Cloud** and **Orama Churn
  Cloud** (the productized use-case surfaces).
- **Orama Zetta Desktop** is a **rich, video-game-grade UI** — think **Blender / Roblox / k8s Lens /
  worktree-manager**. Today: modern C++ + **SDL3** + **Dear ImGui**. ImGui is a **crutch** to get the
  UI up fast; the target is **custom SDL3 UI controlling every pixel** into a beautiful, cross-platform
  experience. The desktop is the **headed** experience *and* acts as a **Zetta node** itself (data
  locality + latency).
- **Headless mode** runs just the node and **also serves the desktop-web and mobile-web** versions —
  **straight C++ + HTML**, no React and only **minimal client-side JavaScript** for maximal browser
  performance. *(Note: web/mobile serving from headless is designed, not yet built — see
  [`zetta-headless-reference.md`](zetta-headless-reference.md) §3.)*

---

## The strategic thesis — Zetta as the platform for automated business

The end state is not "a better search cloud." It is a platform where **everything runs on AI**:

- The **operator + Zetta** absorb the entire operational surface. During the integration period the
  operator manages many components (Postgres, RabbitMQ, ClickHouse, Typesense, …); **as it settles,
  each datastore is replaced by Zetta** until there is **no Postgres, no RabbitMQ, no ClickHouse —
  nothing but Zetta**, in keeping with Zetta's design.
- **Orama the company** uses **Orama Zetta to automate nearly its entire company** — social-media
  posts, software engineering, sales, and more. Each automation becomes a **new use case** in the
  catalog.
- Zetta thereby becomes the **platform to run a 100% automated business — and a 100% automated
  portfolio of businesses.**

---

## The operator ↔ Zetta symbiosis (one-paragraph orientation)

Full detail in [`zetta-operator.md`](zetta-operator.md). In short: **Orama Zetta Desktop** connects to
your cloud, **creates a k8s cluster**, and **deploys the Orama operator** into it. The **desktop
bootstraps the cluster + operator**; the **operator then bootstraps the Zetta nodes** inside the
cluster. From there the relationship is **bi-directional and symbiotic**: the **operator creates Zetta
nodes**, and **Zetta is the operator's datastore** — when the operator needs data it asks Zetta, and
when Zetta needs something done on k8s it **writes intent into its own store that the operator picks up
and reconciles**. Two control planes, one loop.

---

## Governing conventions

1. **Zetta's MCP service is the voice of the platform.** We use it to **envelop all other components
   and services**. **You must ask before integrating any functionality into that MCP server.** (This
   plan's step 1 only *runs* Zetta headless — including whatever MCP port it already binds — and adds
   **no** functionality to MCP.)
2. **Everything eventually lives in the Zetta codebase + the operator.** Prefer moving capability into
   Zetta/operator over adding new external components. The datastores are transitional.
3. **Zero downtime, backward compatibility, safe cutback.** No migration step removes a user's ability
   to keep working on their current surface; old hardware is decommissioned only after a **2-week**
   safe window (cutover *and* cutback both proven).
4. **Model infrastructure state as CRDs, reconciled** (the operator's existing production-migration
   principles apply — see the operator's `CLAUDE.md`). `OramaZettaCluster` is the first Zetta CRD.

---

## Staged roadmap

The convergence is broken into stages so each is shippable and reversible. (Detail + acceptance in
[`migration.md`](migration.md) and [`zetta-operator.md`](zetta-operator.md).)

| Stage | Goal | State |
|---|---|---|
| **0. v1 in-cluster** | The whole v1 stack deployable from one CR on k8s (the operator). | **Largely done** — engine data-path green, exhaustive e2e ([operator#44](https://github.com/oramasearch/orama-cloud-v1-operator/issues/44)); now hardened further — **datastore state as owned CRDs** (`RabbitMQTopology` + `PostgresSchema`, operator#95), **every component production-hardened** (probes/resources/securityContext/PDBs, operator#96), Cloudflare global LB as a CRD (operator#76); control-plane/edge gaps tracked. |
| **1. Package Zetta headless** | An `OramaZettaCluster` CRD + a Zetta-headless Linux image the operator can deploy. | **Done** (2026-07-09) — Zetta-headless amd64 image `oramasearch/zetta:headless-v1-sandbox` (built from source via the bridge `build/images/build.sh`) + the `OramaZettaCluster` CRD + reconciler in the operator; a sample CR reaches **Ready** on the AKS sandbox ([stage-1 comment](https://github.com/oramasearch/orama-bridge/issues/130#issuecomment-4930214649)). Scope stayed narrow — the operator only *runs* headless; **no** MCP functionality added. |
| **2. Symbiosis v0** | Operator ↔ Zetta bi-directional loop: operator provisions Zetta nodes; Zetta serves as a (first) operator datastore surface. | **In progress** — the **operator → Zetta** half has landed: the operator provisions its own schema onto a Zetta node (`orama_control` {components, reconcile_events} + `orama_data` {documents}) and **continuously syncs its observed CR state into `orama_control.components`**, namespaced per operator — *Zetta is the operator's datastore*, validated on AKS ([`c268508`](https://github.com/oramasearch/orama-cloud-v1-operator/commit/c268508), [`9301093`](https://github.com/oramasearch/orama-cloud-v1-operator/commit/9301093)). **Remaining:** the **Zetta → operator** intent/read loop + e2e coverage ([operator#100](https://github.com/oramasearch/orama-cloud-v1-operator/issues/100)). See [`session-2026-07-11.md`](session-2026-07-11.md). |
| **3. Desktop bootstrap** | Orama Zetta Desktop creates the cluster + installs the operator; operator bootstraps Zetta nodes. | Planned. |
| **4. v1→k8s cutover** | Migrate live `app.orama.com` off scattered AWS onto the k8s deployment, zero downtime; keep v1/v2 UIs selectable; default to the Zetta UI. | Planned. |
| **5. Fold in v2 + Clustera** | Merge v2 + Clustera into Orama Cloud v3; unify onboarding (Clustera pro-services). | Planned. |
| **6. Datastore → Zetta** | Progressively replace Postgres / RabbitMQ / ClickHouse / Typesense with Zetta. | Planned. |
| **7. Decommission** | Retire old hardware after the 2-week cutback window. | Planned. |
| **8. Automate Orama** | Orama runs itself on Zetta; grow the use-case catalog. | Vision. |

---

## Cross-cutting workstreams (in flight)

Several tracks run alongside the linear stages because they validate, secure, and scale *every* stage.
Detail + issue links in [`session-2026-07-11.md`](session-2026-07-11.md).

- **⚠️ Security / auth hardening — a gate for the Enterprise story.** The comprehensive authn/authz
  system shipped (epic [zetta#743](https://github.com/oramasearch/zetta/issues/743), merged) and peer
  traffic is now mTLS-only with a shared join token (operator#94), **but a security review then filed
  11 exploitable gaps — [zetta#759–#769](https://github.com/oramasearch/zetta/issues/762), all open**
  (auth off by default on network-facing nodes; a read-only user can mint an owner token / drop tables;
  RLS fail-open; replicated identity trusted with no proof of origin; column-mask bypass; …). The auth
  is **not production-safe until these land**; `--require-auth` today is necessary but not sufficient.
- **E2E as the forcing function.** A `ZettaClusterE2ETest` CRD runs the live-cluster end-to-end suite
  in-cluster (operator#86, merged), driven by a levels-2+3 runner (zetta#773, merged) + the
  `oramasearch/zetta-e2e` image; exhaustive **L2/L3 coverage** (query engine, `system.*` views,
  MCP/REST, serving, governance under `--require-auth`, multi-node CRDT, blobs/consent/audit) is
  tracked under a Zetta e2e epic (zetta#774). The operator's *"e2e as the forcing function"* principle
  applied to Zetta.
- **Elastic capacity — a symbiosis application.** Zetta drives its own autoscaling: **Zetta → operator
  → Karpenter → nodes → more Zetta nodes** (epic operator#69; Karpenter install landed, operator#90).
  The first concrete use of the symbiosis loop for a real capability.
- **Multi-node bring-up.** A real, **secure, 4-node Zetta cluster**, validated by e2e and **joinable
  from the desktop GUI** (epic operator#93) — refining `OramaZettaCluster` cross-cluster peering (an
  OZC is a *slice* of a globally-named Zetta cluster; siblings span k8s clusters, per the
  [2026-07-10 session](session-2026-07-10.md)).

---

## Open questions

- **Headless-only build target.** The `zetta` binary is one executable that always links SDL3/ImGui;
  a slim headless image needs a `zetta-headless` target or an `#ifdef` around the GUI (a Zetta code
  change). Stage 1 shipped by building the full binary and running it with `--headless`; do we want the
  slim target next? (See [`zetta-headless-reference.md`](zetta-headless-reference.md) §6.)
- **Operator repo identity.** The Zetta CRD lands in `orama-cloud-v1-operator` today. When does it get
  renamed to the general **"orama operator"** it is becoming?
- **Zetta-as-operator-datastore contract.** What is the exact schema/table shape Zetta exposes for the
  operator's read/write intent loop (Stage 2)? Needs design.
- **Cutback triggers.** The concrete health/SLO gates that must hold for the full 2-week window before
  decommission (Stage 7).
- **Clustera integration surface.** How Clustera's tech maps into v3 (and what the founders own).
