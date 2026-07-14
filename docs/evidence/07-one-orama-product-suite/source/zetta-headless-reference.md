# Zetta headless — packaging reference

**Source-verified** against [`oramasearch/zetta`](https://github.com/oramasearch/zetta)
(`modules/zetta-bridge/modules/zetta`) on 2026-07-09. The facts the `OramaZettaCluster` reconciler and
the Zetta-headless Linux image are built on. Part of [`README.md`](README.md) /
[`orama-bridge#130`](https://github.com/oramasearch/orama-bridge/issues/130).

> **Headline.** One binary `zetta`; **headless is a runtime `--headless` flag, not a build variant**;
> config is **CLI flags only** (no env vars, no config file — and the binary does **not** read
> `ZETTA_SEED_PEER`); peer replication is **TCP 7777** (mTLS 1.3); **all HTTP — MCP + REST + serving —
> shares one port, default `4800`**; each node persists to a **`--data-dir` PVC**. There is **no
> Dockerfile, no k8s deploy, and no headless-only build target** in the repo today.

## 1. Invocation

- Executable target `zetta` → `build/bin/zetta` (`CMakeLists.txt:603,677`). Single static binary.
- `--headless` selects the server-only mode at runtime (`src/main.cpp:115`, dispatch `399`); default is
  headed (SDL3 + ImGui). **Same binary always contains both modes.**
- Flags (`src/main.cpp:66-91`): `--headed`/`--headless`, `--data-dir PATH` (default `./zetta-data`),
  `--listen HOST:PORT` (default `0.0.0.0:7777`), `--port-range N` (16), `--peer HOST:PORT` (repeatable
  seed list), `--join-token TOKEN`, `--cluster-plaintext`, `--mcp-listen H:P` (default
  `127.0.0.1:4800`), `--mcp-token T`, `--no-mcp`, `--log-cluster`, `--no-preflight`, `-h/--help`.
- **No env vars, no config file** — `NodeConfig`/`ClusterConfig` are populated only from flags.

## 2. Clustering

- **Static seed list — no mDNS/gossip discovery.** `--peer HOST:PORT` (repeatable) → `ClusterConfig::seeds`.
  All peers equal; a seed is just "somewhere to start." Membership then rides the CRDT (`node:<id>`
  keys) and gossips. Unconnected seeds re-dialed every 3s; silent peers dropped after 6s.
- **Transport:** TCP via Corosio; the same connection carries replication + large-object transfer +
  the RPC/event/task signal plane.
- **Security:** **mutual TLS 1.3 by default**, keyed off a join token → cluster CA. Node-0 mints the
  token into `data-dir/security/cluster-secret.json`; peers adopt it via `--join-token` or by sharing
  `security/`. `--cluster-plaintext` opts out (anyone who reaches the port can join).

## 3. Ports

| Purpose | Default | Protocol |
|---|---|---|
| Peer replication + signal plane + blob transfer | **7777** (range 7777–7792) | TCP, mTLS 1.3 |
| MCP + REST + model/index serving + OpenAPI + llms.txt (one HTTP server) | **4800**, bound `127.0.0.1` | HTTP/1 (Beast2) |

- The 4800 server is a single Beast2 HTTP server serving `POST /mcp` (MCP JSON-RPC), `GET/POST
  /v1/<capability>`, `POST /v1/models/{name}/predict`, `GET /v1/indexes/{name}/search`,
  `/v1/openapi.json`, `/v1/specs`, `/llms.txt`. **MCP, REST, and serving all share 4800.**
- **Postgres-SQL: no wire port** — SQL is in-process, exposed only via the `sql` capability over 4800.
  A Postgres wire protocol is future/not-built.
- **No HTTP web/mobile port** — the "serves desktop-web/mobile-web" framing is designed, **not
  implemented** in the repo. Headless serves only the 4800 API today.
- **No `/metrics` and no `/healthz`.**

## 4. Storage (one PVC per node)

- `--data-dir` (default `./zetta-data`). One dir per node → **one PVC per StatefulSet replica**.
- Layout: `replication.automerge` (the CRDT doc — source of truth); `node_id` (stable UUID — keep the
  PVC to keep identity); `security/` (join token + node cert/key); `checkpoints/`, `audit/`,
  `crashes/`; per-db `<uuid>/database.json` + JSONL chunks (10k rows/chunk) + `large_objects/…/blob`;
  `<model-uuid>/weights`. Large-object bodies + model weights stay **off** the CRDT (peer-transferred,
  SHA-256 verified).

## 5. Minimal N-peer config

```
# node 0 (bootstrap — mints the join token into <data-dir>/security/cluster-secret.json)
zetta --headless --data-dir /data --listen 0.0.0.0:7777 --mcp-listen 0.0.0.0:4800

# nodes 1..N (join node 0; TOKEN from node 0's cluster-secret.json)
zetta --headless --data-dir /data --listen 0.0.0.0:7777 --mcp-listen 0.0.0.0:4800 \
  --join-token <TOKEN> --peer zetta-0.zetta-headless.<ns>.svc.cluster.local:7777
```

Every StatefulSet replica can carry the same `--peer <sts>-0.<headless-svc>:7777` seed (node-0 seeds
itself harmlessly). Node identity persists in `data-dir/node_id`, so a replica keeps its actor id
across restarts as long as the PVC persists.

## 6. Linux/amd64 build

- **Toolchain:** CMake 3.28+, Ninja, **Clang 17+ for C++26** (auto-selects `clang++-{21..17}`; GCC 14+
  also works). **OpenSSL 3 required** (inter-node mTLS + cert minting).
- **Deps — vendored submodules** (`git submodule update --init --recursive`): `capy`, `corosio`,
  `automerge-cpp` (provides nlohmann/json), `beast2`, `http`, and **`oramacore-cpp` (PRIVATE)** —
  guarded: a checkout without it still builds green (full-text backend degrades). **FetchContent at
  configure time (needs network):** SDL3 (release-3.2.0), Dear ImGui (v1.91.5), GoogleTest,
  json-schema-validator (2.4.0), Boost core 1.91.
- **GUI gotcha (key):** there is **no headless-only target and no CMake flag to drop the GUI.** The
  `zetta` executable always compiles `src/gui/*.cpp` and links `imgui` + `SDL3::SDL3-static`, so a
  Linux build **must build SDL3** — needing the X11/Wayland/GL/audio `-dev` headers **at build time**
  (`scripts/install-deps.sh`). At **runtime**, `--headless` never calls `app.init()`, so no display/X
  server is needed to run; the runtime image needs only the OpenSSL 3 runtime + libc++/libstdc++.
  A slim headless image would require a Zetta code change (a `zetta-headless` target / `#ifdef`).
- **Build:** `cmake -S . -B build -G Ninja && cmake --build build` → `build/bin/zetta`. CUDA is opt-in
  (`-DZETTA_ENABLE_CUDA=ON`); leave OFF. Build **linux/amd64** (AKS nodes). Core links
  `-fexperimental-library` (libc++experimental) — build + run on the same libc++/toolchain; `ldd` the
  output to confirm the runtime base has matching libc++/libssl.
- **macOS→Linux:** all Mac-specific bits are `if(APPLE)`-guarded; the Linux path just needs clang 17+
  and OpenSSL 3.

## 7. Health / readiness

- No dedicated endpoint. **Readiness:** `GET /v1/server_info` on 4800 (returns node id, version,
  `cluster_members`) — **bind `--mcp-listen 0.0.0.0:4800`** so a kubelet probe from the pod IP can
  reach it (default is loopback-only). **Liveness:** TCP 7777. **Startup:** a preflight integrity
  check rehashes every large-object body by default (`--no-preflight` skips) — give a generous
  `startupProbe`/`initialDelay`.

## 8. Gaps that shape the reconciler

- **The binary does not consume `ZETTA_SEED_PEER`** — provisioners inject it but nothing reads it. The
  pod `args` **must render explicit `--peer` flags** (or an entrypoint wrapper maps the env → `--peer`).
- **Seed routability is a non-issue in-cluster** — with the default `0.0.0.0` bind, a node advertises
  its pod IP; StatefulSet DNS is routable. `--advertise` (proposed, not built) is unnecessary here.
- **No StatefulSet/operator/Helm/Dockerfile in the repo** — all net-new. (`docs/cloud/k8s-provisioner.md`
  is the *reverse*: a running Zetta node bursting ephemeral worker **Deployments** via `kubectl` — shape
  coded + unit-tested against fakes, never run live. Orthogonal to our operator.)
- **Built + usable today:** equal-peer clustering + static-seed join + join-token mTLS; the 4800 HTTP
  API incl. model/index serving; CRDT replication + on-disk projection.
