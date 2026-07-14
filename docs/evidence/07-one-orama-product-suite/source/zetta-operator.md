# Operator ↔ Zetta — symbiosis + the `OramaZettaCluster` CRD

Part of [`README.md`](README.md) / [`orama-bridge#130`](https://github.com/oramasearch/orama-bridge/issues/130).
The technical facts referenced here are in [`zetta-headless-reference.md`](zetta-headless-reference.md).

## The symbiosis (target architecture)

Two control planes that bootstrap and feed each other:

```
Orama Zetta Desktop ──creates──▶ k8s cluster ──installs──▶ Orama operator
        │                                                      │
        │  (desktop is itself a Zetta node — data locality)    │ bootstraps
        ▼                                                      ▼
   ┌──────────────────────────  Zetta nodes (in-cluster)  ◀────┘
   │                                   ▲
   │  operator READS data/config ──────┘  (Zetta is the operator's datastore)
   └─ operator RECONCILES k8s ◀── Zetta WRITES intent into its own store
```

- **Bootstrap chain:** the **Desktop** creates the cluster and installs the **operator**; the operator
  then **bootstraps the Zetta nodes** inside the cluster. The Desktop also runs **as a Zetta node**
  itself (a rich headed app *and* a cluster member — video-game-grade UI + data locality).
- **Bi-directional control loop (once symbiosis lands):**
  - **operator → Zetta:** the operator **provisions Zetta nodes** (this doc's CRD) and, when it needs
    data/config, **asks Zetta** (Zetta is the operator's datastore).
  - **Zetta → operator:** when Zetta needs something done on k8s, it **writes intent into its own
    store**; the operator **picks that up and reconciles** it.
- **Progressive convergence:** during the integration period the operator manages many components
  (Postgres, RabbitMQ, ClickHouse, Typesense, …). As it settles, **each datastore is replaced by
  Zetta** until nothing external remains — everything is Zetta + the operator.

**MCP boundary:** Zetta's MCP service is the *voice of the platform*; **do not add functionality to it
without asking**. The stages below only *run* Zetta (including its MCP port) — they add nothing to MCP.

## Staging (operator side)

- **Stage 1 (this project): `OramaZettaCluster` — package + run Zetta headless.** A CRD + reconciler
  that deploys an N-node headless Zetta cluster. **No** symbiosis yet, **no** MCP changes. ← *now*
- **Stage 2: Symbiosis v0.** Define the Zetta-side schema/tables the operator reads for config and the
  intent table Zetta writes for the operator to reconcile; wire the loop. (Open question in the README.)
- **Stage 3: Desktop bootstrap.** Desktop creates the cluster + installs the operator; operator
  bootstraps the Zetta nodes (closes the bootstrap chain).
- **Stage 6: Datastore → Zetta.** Swap the operator's managed datastores for Zetta, one at a time.

## `OramaZettaCluster` CRD — Stage 1 design

Lives in the existing `orama-cloud-v1-operator` (the operator becoming the general "orama operator"),
API group `orama.cloud/v1alpha1`, following the established type → reconciler → `main.go` → `make
manifests` pattern.

### What the reconciler creates

A headless Zetta cluster models cleanly as a **StatefulSet** (equal-peer CRDT nodes need stable
identity + per-node storage):

| Object | Purpose |
|---|---|
| **StatefulSet** (`<name>-zetta`, N replicas) | Each pod runs `zetta --headless` with a per-pod PVC at `--data-dir`; equal peers. |
| **Headless Service** (`<name>-zetta-headless`) | Stable per-pod DNS (`<name>-zetta-0.<name>-zetta-headless.<ns>.svc:7777`) for peer discovery. |
| **Client Service** (`<name>-zetta`) | The 4800 HTTP API (MCP + REST + serving). |
| **PVC template** | One volume per replica at `--data-dir` (default `/data`); keeps `node_id` + CRDT + certs across restarts. |
| **Join-token Secret** | The cluster join token (node-0 mints it; peers adopt it) — mounted, or `--cluster-plaintext` + a NetworkPolicy inside a trusted namespace. |
| **Status** | Component-level readiness roll-up (`Ready n/total`, `Progressing`/`Degraded`, printcolumns). |

### Container args (the load-bearing detail)

Config is **CLI flags only** and the binary **does not read `ZETTA_SEED_PEER`** — so the operator must
render explicit `--peer` flags:

```
zetta --headless \
  --data-dir /data \
  --listen 0.0.0.0:7777 \
  --mcp-listen 0.0.0.0:4800 \
  --peer <name>-zetta-0.<name>-zetta-headless.<ns>.svc.cluster.local:7777 \
  --join-token <from mounted Secret>            # or --cluster-plaintext in a trusted ns
```

Every replica may carry the same `--peer …-0:7777` seed (node-0 seeds itself harmlessly; peers are
equal). Bind the API to `0.0.0.0` so kubelet probes reach it.

### Probes

- **readinessProbe:** HTTP `GET /v1/server_info` on 4800.
- **livenessProbe:** TCP 7777.
- **startupProbe:** generous — the default preflight rehashes every large-object body on boot
  (`--no-preflight` to skip on large PVCs).

### Proposed spec (first cut)

```yaml
apiVersion: orama.cloud/v1alpha1
kind: OramaZettaCluster
spec:
  replicas: 1                      # equal-peer headless nodes
  image: oramasearch/zetta:...     # the Zetta-headless Linux image (built like the other components)
  pullSecretName: oramasearch-dockerhub
  storage:
    size: 10Gi                     # per-node PVC at --data-dir
    storageClassName: ""           # default SC if empty
  resources: {}                    # per-node mem/cpu caps (right-sizing)
  clusterPlaintext: false          # true = skip mTLS join token (trusted ns + NetworkPolicy)
  # ports are operator-managed defaults (7777 peer, 4800 API); not user-facing.
status:
  phase: Progressing|Ready|Degraded
  readyNodes: n
  totalNodes: N
  conditions: [...]
```

### Explicitly out of scope for Stage 1

The bi-directional loop, Zetta-as-operator-datastore, MCP enveloping, and datastore replacement. Step 1
is: **the operator can stand up a healthy headless Zetta cluster.**

## The image

The reconciler points at a **Zetta-headless Linux/amd64 image** built the same way as the other
operator components (local `docker build` from submodule source → private Docker Hub `oramasearch/*`).
Because there is no headless-only build target yet, the image builds the full `zetta` binary (which
still links SDL3 — so the **build** stage needs the X11/Wayland/GL `-dev` headers) and runs it with
`--headless` (the **runtime** stage needs no display libs — only OpenSSL 3 + libc++). A slim
`zetta-headless` target is a follow-up Zetta code change. Build recipe:
[`zetta-headless-reference.md`](zetta-headless-reference.md) §6.
