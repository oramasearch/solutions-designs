# Executive strategy — the Orama Zetta solutions business

> **Status:** Draft v1 — 2026-07-15 · **Author:** CEO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits pricing, acquisition, and partner detail from
> evidence 07/08.
>
> The strategy kernel ([`00-strategy-kernel.md`](00-strategy-kernel.md)) is **binding**;
> this document elaborates its decisions and does not amend them. Genuine tensions
> discovered while writing are recorded in the final appendix for kernel review.

---

## 1. Vision & mission

### 1.1 Vision

**Anyone on a team can turn a question into deployed, running, correct intelligence —
in the time it takes to describe it.** That is the product's timeless vision (evidence
08), and the solutions business is how it becomes revenue before, during, and after the
product fully industrializes it. The website states the promise in the customer's
language (evidence 06): *"From a question to deployed, governed intelligence: models and
pipelines trained on your own data, running on your own infrastructure, correct by
construction. Production-grade systems your team can self-serve and deploy in minutes."*
Every solution we ship is that sentence made concrete for one named business problem.

The end state is larger than a catalog of modules. In the One Orama plan of record
(evidence 07), Zetta is **the platform for automated business** — the operator + Zetta
absorb the operational surface, Orama itself runs on Zetta (stage 8, "Automate Orama"),
and each automation Orama builds for itself becomes a new sellable use case. The
solutions business is therefore not a services sideline; it is the **revenue expression
of the platform thesis**: every deployed solution is a proof that the arc *intent →
architected → deployed → running → learning* actually closes, and every closed arc feeds
the learning loop that makes the next one faster. Zetta becomes the platform to run a
100% automated business — and a 100% automated portfolio of businesses (evidence 07) —
one correct, governed, deployed solution at a time.

### 1.2 Mission

**Build the solution factory: industrialize the delivery of deployed, correct, governed
intelligence on the customer's own infrastructure, one priced module at a time.** The
factory's inputs are a small set of methodology components built extremely well; its
outputs are solutions — methodologies *applied correctly* (point-in-time discipline,
leakage prevention, entity resolution) and *wired to a business action* (named actions,
owners, cadence, measurement) — sold as modules on the Orama Cloud v3 Enterprise base
(kernel D4/D6). The measure of the mission is the metric the product is named for:
**Intelligence Velocity** — median time from intent to deployed, correct, running
intelligence — minutes against an industry baseline of weeks to quarters (kernel D8,
evidence 06/08).

Three commitments define how we pursue it:

1. **Learning, not inference** (evidence 06): every solution trains models on the
   customer's own data. *"If you're not training on your data, you're not fully using
   AI."* We do not sell prompt-wrappers over rented models; we sell trained, explained,
   compounding predictive power.
2. **Correct by construction** (evidence 06): every solution passes the correctness
   gate — schema/type checks against real sources, leakage and point-in-time checks,
   entity resolution — before it deploys. *"Generating a workflow is easy. Generating a
   correct one is the product."*
3. **Governed self-serve** (evidence 06): every solution runs inside the customer's
   walls, identity-scoped through their SSO, audited, with approval gates. Zero data
   egress. Governance is the precondition for safe self-service, not a tax on it.

---

## 2. The strategic thesis, argued in full

The kernel states the thesis in one line: *Orama Zetta sells deployed, correct, governed
intelligence on the customer's own infrastructure — and the business is a solution
factory.* This section argues it from first principles, because every downstream
decision (waves, tiers, industries, pricing, gates) is a corollary.

### 2.1 The structural fact: many use cases ≈ many solutions ≫ few methodologies

The vocabulary is deliberate (evidence: `../vocabulary.md`): a **use case** is the
problem, a **methodology** is the arranged AI methods, a **solution** is the methodology
applied correctly and wired to the action. The three layers are asymmetric, and the
asymmetry is independently evidenced from four directions:

- **Our internal methodologies compendium** (evidence 10) enumerates 35 methodologies
  against hundreds of cataloged use cases and finds that "virtually every methodology
  shares extraction, feature/representation engineering, evaluation, serving, and
  monitoring stages with its neighbors, and many differ only in one or two stages" —
  learning-to-rank is tabular supervised learning with a group-aware loss; uplift
  modeling is tabular supervised learning with a treatment column and a causal estimand.
- **Our internal solutions compendium** (evidence 12, Synthesis 3) makes the fan-out
  explicit: roughly **ten methodology families generate all 34 cataloged solutions**,
  and the tabular supervised methodology alone underpins 15+ of them. Its corollary is
  the platform strategy in one sentence: *"a platform that industrializes the tabular
  methodology + the forecasting methodology + the LLM extraction/RAG methodologies
  covers roughly 30 of 34 solutions' methodology needs — the remaining differentiation
  is entirely in correctness adaptations and business wiring."*
- **The external Deep Research compendia** (evidence 13–15), run independently on the
  same prompts, reproduce the same cardinality: ~26 methodologies vs ~140 use cases vs
  43 solutions.
- **The market's own catalogs** agree: Databricks publishes 93 solution accelerators
  (evidence 04) and Snowflake 9 industry solution families (evidence 05) — many
  offerings, assembled from a much smaller set of underlying patterns; the retired
  amaro-desktop catalog held 400 example data apps across just 17 categories
  (evidence 09).

The economic consequence is the **factory equation** (kernel §1): each methodology wave
unlocks an order of magnitude more solutions than it costs, because components are
reused. Build the ~10 shared components extremely well — extract, entity-resolve,
feature-engineer, train, explain, evaluate, serve, monitor — and the marginal cost of
solution N is dominated by correctness adaptation and business wiring, not engineering.
That is what "solution factory" means: not a body shop that rebuilds the stack per
client, but a factory whose fixed capital is methodologies and whose products are
solutions.

### 2.2 The demand side: tabular decisions dominate, and the pool is enormous

The factory needs a big market for its dominant product line, and the evidence says the
dominant methodology maps onto the dominant demand. Tabular data dominates enterprise
*decision workloads* — not by bytes (80–90% of new enterprise data is unstructured, per
Gartner/IDC) but by spend and by decisions: IDC found ~60% of data-technology spend goes
to structured-data projects, and the ML literature consistently characterizes tables as
"the dominant working data format across machine learning practice" (evidence 10 §S3,
citing Grinsztajn et al. 2022 et al.). Gradient-boosted models dominate tabular ML: in
the M5 forecasting competition every top-5 solution used LightGBM (Makridakis et al.
2022, via evidence 10). And the value pool for exactly these classic decision problems —
forecasting, risk scoring, pricing, maintenance — is sized by McKinsey at **$11–17.7T
annually**, versus $2.6–4.4T for generative AI (McKinsey 2023, via evidence 11). The
LLM-era layer is the fastest-growing (RAG at ~51% of enterprise GenAI deployments,
Menlo Ventures 2024, via evidence 10) but it sits *beside* the tabular core, not instead
of it. Our W1 tabular spine (kernel D2) is therefore not conservatism; it is aiming the
factory at the largest measured pool of repeatable decisions.

### 2.3 The moat: correct application + business wiring, not modeling

If methodologies are few and well-documented, why doesn't everyone win? Because the
evidence is unanimous that **value is won or lost at the applied layer** — and the
applied layer is precisely what the market does not ship.

The failure statistics are the demand signal (evidence 12, Synthesis 6; evidence 11):
88% of organizations use AI in at least one function, but only ~39% can attribute any
EBIT impact and just ~6% attribute more than 5% (McKinsey, 2025); only ~48% of AI
projects reach production (Gartner, 2024); ~95% of enterprise GenAI pilots produced no
measurable P&L impact (MIT NANDA, 2025); ≥30% of GenAI projects forecast abandoned after
PoC by end-2025 and >40% of agentic-AI projects to be canceled by end-2027 (Gartner,
2024/2025). The documented post-mortems localize the failure: Zillow Offers' >$500M
write-down came from drift meeting autonomous high-stakes purchasing (2021); the Epic
sepsis model collapsed to AUC 0.63 in external validation (JAMA Internal Medicine,
2021); IBM Watson for Oncology ended in a ~$62M abandonment (2017). In every case the
methodology was standard; what failed was **correctness discipline** (leakage, drift,
external validity, blast radius) and **wiring** (actions nobody owned, measurement
nobody designed, governance nobody consulted). The compendium's diagnostic is the one we
operationalize: *"name the person whose Monday changes when the model ships. No name, no
solution"* (evidence 12 §S6).

Our closed-loop evidence (evidence 03) reaches the same conclusion from the use-case
side: the highest-value pipelines are the ones that close the loop from prediction to
remediation to measured outcome — a score that never becomes an action is a dashboard,
and dashboards die in budget cycles. And the external solutions compendium (evidence 15)
independently confirms the anatomy: methodology + correctness adaptations + decision
policy + action integration + measurement loop + governance + adoption, with failures
concentrated in the latter five.

This is the moat because it is **structural for us and residual for everyone else**.
Competitors sell the methodology layer (notebooks, AutoML, orchestration) and leave
correct application and wiring as the customer's problem — the exact place where 50–95%
of projects die. Our product *is* that layer: the correctness gate enforces point-in-time
discipline, leakage checks, and entity resolution mechanically (evidence 06); the
solution definition-of-done (kernel D4) requires a named business action, a measured
holdout, and zero governance violations before we call anything shipped. We are not
betting we can out-model the market; we are betting we can industrialize the two stages
the market has proven, for a decade and across two AI generations, that it cannot
reliably execute.

### 2.4 The compounding layer: own-data training

The third pillar is the one that makes the moat deepen over time. The website's sharpest
positioning line (evidence 06, Technology §03 "Learning, not inference"): *"Prompting a
general-purpose model only borrows what that model already knew; it never gets better at
your business... The more of your data flows through it, the further it pulls ahead of a
system that only retrieves and prompts."* Every deployed solution trains on the
customer's own history — churn labels, collection outcomes, failure records — and
therefore produces an asset the customer owns (their data, their weights — kernel D6 IP
split) and an advantage we accumulate (generalized learnings, templates, connectors,
and eventually the Auto-RL base model, One Orama catalog #3, evidence 07).

The compounding is two-sided. **Per customer**: each solution's measurement loop
generates labeled outcomes (which retention offer worked, on whom) that upgrade the next
solution (uplift models need treatment data — kernel W3). **Across the portfolio**: each
deployment hardens a reference architecture, each correctness adaptation joins the
catalog, and each run is "grounded experience the next graph learns from" (evidence 06).
A rented-model competitor plateaus at what the frontier model already knew; our unit
economics improve with every module shipped. This is why "learning, not inference" is
not marketing copy — it is the difference between a services business with flat margins
and a factory whose cost curve bends down.

### 2.5 The brand: the correctness gate

Speed is table stakes in the AI market of 2026; every vendor claims minutes-to-value.
What no one else will claim — because their architecture cannot back it — is *velocity
never traded for correctness* (evidence 06). A generated system that ships
confidently-wrong results is worse than the queue it replaced; the website says exactly
this ("a graph that ships confidently-wrong results is worse than a queue"), and the
failure post-mortems in §2.3 are the market-wide proof. The correctness gate — schemas
type-checked against real sources, leakage and point-in-time checks, entity resolution,
block-with-a-reason — is therefore the **brand promise**, the demo centerpiece, and the
hard floor in our own metrics (≥90% correctness-gate pass rate before self-service deploy
ships to non-engineers — kernel D7.2). The strongest external validation we hold:
Databricks' own research finds organizations using AI-governance tooling move **>12×
more projects to production** (evidence 08) — governance and correctness are not
compliance overhead, they are the production-rate multiplier. We price and position
accordingly: the gate is why an enterprise pays $500k+/yr for the platform and a module
price on top, instead of $200/mo for agentic search (kernel D6).

### 2.6 The thesis, restated as an equation

**Revenue = (few methodologies × high reuse) → (many solutions × module price) on
(Enterprise base × governed environments), compounding via (own-data training × deployed
evidence).** Grow the catalog use-case-first (demand-led), build methodologies
wave-by-wave (reuse-led), ship solutions as the sellable unit (revenue-led) — kernel §1.
Everything else in this document is the operationalization of that line.

---

## 3. Where we play / how we win

### 3.1 Where we play: industries and tiers (kernel D5)

The industry order comes from a unanimous 3-model design-partner research council
(evidence 08) cross-checked against the market catalogs (evidence 04/05), and I endorse
it without modification:

| Tier | Industry | Beachhead solutions | CEO rationale |
|---|---|---|---|
| **1a** | Financial services / banking (regional/mid, ~$30B+ assets) | UC-4 collections · UC-1 deposit/customer attrition · UC-7 KPI drivers | The one vertical where our governance primitives are not a nice-to-have but a *regulatory requirement with budget attached*: SR 11-7 model-risk discipline and GLBA map ~1:1 onto own-data training, in-environment deploy, audit, approval gates (evidence 08). The OCC guidance bites hardest above ~$30B in assets — a clean targeting threshold. |
| **1b** | Insurance (specialty/MGA) | claims triage (T2) · UC-1 lapse/retention · UC-7 | Same governance fit under the NAIC AI Model Bulletin; specialty/MGA scale means reachable champions and faster cycles than carriers. |
| **1c** | One operational account (logistics/fleet or manufacturing) | UC-8 PdM · UC-5/6 · UC-1 | The **low-liability first technical proof** the partner research prescribes — and Motive *is* this account, already in hand. Predictive maintenance and forecasting are assistive, human-reviewed, measurable, and nobody's civil-rights lawsuit. |
| **2** | Healthcare/life-sciences · manufacturing · logistics · telecom (TELUS warm path) · B2B SaaS | no-show/denials · PdM/yield · UC-1/UC-2 | Second wave, picked by warmest intro, not marginal rank — the council found the #4–5 ordering low-stakes (evidence 08). |
| **3** | Retail/CPG · energy/utilities | UC-5/6 · pricing (T3) · load forecasting | After reference architectures repeat. |
| Deferred | Public sector / federal / classified | — | Anti-ICP as first deals: procurement cycles and clearance overhead would consume the founder bandwidth the design-partner program needs. |

Firmographics: ~1,000–25,000 employees, ~$500M–$10B revenue — large enough to have a
platform team and a real deployment surface, small enough that we reach the
prototype-to-production owner without an 18-month procurement gauntlet (evidence 08).
The champion is that owner (Head of ML Platform / MLOps lead / VP Data Engineering) plus
a business sponsor — *not* the CDAO alone, because the CDAO owns strategy and our buyer
owns the queue.

Within those industries, the use-case portfolio is the kernel's T1 nine (UC-1…UC-9),
which I read as three families: **revenue intelligence** (churn, lead scoring, CLV —
one pipeline shape, three modules, natural attach path), **money & operations**
(collections, demand forecasting, inventory support, predictive maintenance — the
finance and supply-chain beachheads), and **the executive surface** (KPI anomaly &
driver analysis — the "report" solution generalized, sellable in every vertical, and the
natural first renewal conversation because the CFO sees it monthly).

### 3.2 The wedge: governance positioning + low-liability proof

The wedge is deliberately two things at once (evidence 08, council-resolved):

1. **Lead positioning with the production-gap + governance story.** The buyer's lived
   pain is the queue (the website's own visual: "BizOps — what's driving mid-market
   churn? — 14d… throughput bounded by one team," evidence 06) and the pilot graveyard
   (§2.3 statistics). The pitch is not "better models"; it is *"the 60–95% of projects
   that die between prototype and production stop dying, inside your walls, under your
   SSO, with an audit trail your regulator recognizes."* Two market currents make this
   land in 2026: 67% of enterprise leaders plan to move some AI data off public cloud
   within 12 months (CIO.com, via evidence 08), and ~21% of workloads were repatriated
   in 2025 with 84% struggling to manage cloud spend (Flexera, via evidence 08). We
   frame it as intelligent *workload placement*, never anti-cloud.
2. **Prove it first on a low-liability use case.** The first technical proof in any
   account is human-reviewed prediction/triage/forecasting — predictive maintenance,
   demand forecasting, churn scoring — never autonomous high-stakes decisioning
   (kernel D9.3). Shadow production before automation (kernel D7.5) is both risk
   management and sales strategy: it produces the side-by-side evidence ("the model
   called 34 of the 40 failures your process caught, plus 11 it missed") that converts a
   12–16-week engagement into a multi-year platform commitment.

Every conversation opens with **one named use case** (kernel D9.4) — "deposit attrition
for a $40B regional bank," never "an AI platform." The generic-platform demo is how
competitors get relegated to innovation-lab budgets; the named use case is how we reach
the operating budget.

### 3.3 How we win: land one module, expand along the reuse frontier

The commercial motion (kernel D6) is land-and-expand where the expansion path is an
engineering fact, not a sales hope. Land with S-1 (churn & retention) or the vertical
beachhead module on the Enterprise base. The second module is nearly free to deliver
because it reuses the pipeline spine already deployed and validated in that environment:
churn → lead scoring is the same tabular methodology with a different label; churn →
CLV composes the same features; collections reuses the finance extraction already
built. **Module attach rate** (kernel D8) is therefore the single best indicator of
whether the factory thesis is working inside an account: attach ≥2 within the first
year means the reuse economics are real *for the customer*, not just for us.

Design partners are the ignition sequence: 3–6, **paid** at ~10–25% of expected ACV
credited to year-one conversion, each scoped to one use case · one environment · one
KPI · 12–16 weeks, run through the 120-day program (qualify → secure env → build+govern
→ shadow production → convert), no broad exclusivity, IP split preserving our engine/
templates/generalized learnings (kernel D6, evidence 08). Paid matters: it filters
AI-tourists, creates commercial gravity, and makes the conversion gate clean.

And we protect the roadmap with the single best execution guardrail the council
produced: **one reference architecture per environment class** — regulated cloud VPC ·
K8s private cloud · bare-metal/on-prem GPU — **before widening** (kernel D7.4). The
bespoke-integration death spiral is how enterprise infra startups die; the reference
architecture rule is how we stay a factory instead of becoming an SI.

### 3.4 The anti-portfolio: why saying no is strategic

The anti-portfolio (kernel D5) is as load-bearing as the portfolio. We say no to:

- **Generic chatbots / LLM-copilot / RAG-only engagements.** A prospect who wants a
  RAG search box is a *disqualifier, not a wedge* (evidence 08 anti-ICP): they are
  buying inference over a rented model — the exact thing our brand defines itself
  against ("not just answers," evidence 06) — the segment is a knife-fight of
  undifferentiated vendors, and MIT NANDA's 95%-no-P&L population lives there
  (evidence 12 §S6). Taking those deals would burn design-partner bandwidth building
  the wrong reference evidence.
- **Autonomous high-stakes decisioning** as an entry point. Zillow is the canonical
  catastrophe (evidence 12); the automation ladder (shadow → assisted → automated,
  evidence 12 §S4) is earned with measurement, not sold in a contract. We will climb it
  with customers — after patterns 1–3 have built the evidence.
- **Vision-first industrial inspection, speech stacks, bespoke deep-learning research,
  federated learning** — until ≥3 tiered use cases demand them (the reuse rule, kernel
  D1). Each is a methodology investment with a fan-out of ~1; the factory only admits
  methodologies with high fan-out.
- **Federal/classified as early deals** — the cycle time is incompatible with a 3–6
  partner cohort and a 120-day program.

Saying no is what keeps the denominator of the factory equation small. Every methodology
we decline to build early, every bespoke engagement we decline to staff, preserves the
reuse ratio that makes solution N cheaper than solution N−1. The anti-portfolio is the
factory's quality control on its own inputs.

---

## 4. Competitive landscape & positioning

The category insight (evidence 06, Positioning): *"Plenty of tools compress one step —
deploying a web app, or running a query, or drafting a workflow. None shrink the whole
arc from 'I have a question' to 'a correct, governed system is answering it in
production.' That arc is what we compress."* Every competitor below owns a slice of the
arc; nobody sells the deployed, correct, governed solution itself as a priced module on
the customer's own infrastructure.

| Competitor class | What they sell | Where the arc breaks | Our positioning row (evidence 06) |
|---|---|---|---|
| Databricks Solution Accelerators | Notebooks + patterns, idea→PoC | PoC→production is the customer's problem | **Not demoware** |
| Snowflake industry solutions | Reference architectures + quickstarts in their cloud | Runs on their terms, in their cloud | **Not someone else's cloud** |
| DataRobot / H2O AutoML | Automated modeling + MLOps | Modeling was never the bottleneck; wiring is absent | **Not demoware** (the modeling slice) |
| Palantir Foundry/AIP | Data/AI OS + embedded FDE services | Bespoke, consultant-heavy, seven-figure lock-in | The factory vs the body shop |
| n8n / Zapier-class automation | Workflow orchestration | No correctness gate, no training, no governance of ML lifecycle | **Not a web PaaS** (and not a prototype tool) |
| LLM-copilot / answer engines (Glean-class) | RAG retrieval + inference over rented models | Never trains on your data; plateaus | **Not just answers** |

**Databricks (Solution Accelerators — evidence 04).** The closest analog to our catalog
and the clearest contrast to our unit of delivery. Their 93 accelerators (our verbatim
capture) are, in Databricks' own words, *"fully functional notebooks"* designed to go
*"from idea to proof of concept in less than 2 weeks"* and explicitly *"not designed to
be a one-size-fits-all full solution… they can be extended, customized, and integrated"*
(Databricks blog, 2021; Databricks Industry Solutions GitHub, 2023 — via Perplexity,
2026). The customer still owns productionization, correctness, governance wiring, and
operations — the stages where the failure statistics live. Structurally, Databricks is
also a platform *you operate, largely on their cloud terms* (evidence 08). Their own
governance research (>12× production rate, §2.5) proves our wedge for us. Where they
have 93 notebooks, we will have a smaller catalog of *deployed, priced modules with a
definition-of-done* — the difference between a recipe and a meal.

**Snowflake (industry solutions — evidence 05).** Nine industry solution families in our
capture; delivered as reference architectures + code + quickstarts (a published "Bill of
Materials" per solution: architecture diagram, Snowflake-Labs code, quickstart, blog,
video — Snowflake Medium, 2024, via Perplexity, 2026), with an internal
DataOps.live-powered "Solution Central" that auto-deploys ~25+ industry demos *for
Snowflake's own field teams* (DataOps.live, 2023–24, via Perplexity, 2026). Two limits
define our contrast: the deployment automation is a field-sales demo tool, not a
customer capability; and everything runs inside Snowflake's cloud and pricing gravity —
the warehouse economics our tiered-storage story attacks directly ("you stop paying
warehouse prices to ask the same question twice," evidence 06). For a regulated buyer
moving AI data off public cloud (67%, §3.2), "industry solution inside our warehouse" is
the wrong answer arriving fluently.

**DataRobot / H2O (AutoML).** They automate the stage that was never the constraint.
DataRobot positions as an end-to-end governed enterprise AutoML platform, SaaS-first,
with on-prem "more constrained" than open-source alternatives and per-seat economics
that get expensive at scale (vendor comparisons, 2025–26, via Perplexity, 2026). H2O is
the flexible, open-source-rooted alternative with genuine on-prem/air-gapped support —
but it demands strong internal DevOps/DS teams and carries enterprise licensing around
~$390k/3yr for Driverless AI (estimates, 2025, via Perplexity, 2026). Both stop at the
model artifact: neither compiles a correct end-to-end pipeline from intent, neither
deploys the full serving/action system into the customer's environment, neither wires
the business action or the measurement loop. AutoML is one component *inside* our M-1
methodology; it is their whole company. When a prospect says "we have DataRobot," the
answer is: "and how many of its models changed anyone's Monday?"

**Palantir (Foundry/AIP).** The competitor that validates the category and defines the
delivery model we refuse. Palantir sells a data/AI operating system plus embedded
forward-deployed engineers, at mid-six to seven figures per year, in multi-month
high-touch engagements (analyst coverage through 2024, via Perplexity, 2026). It proves
enterprises will pay platform-plus-outcome prices for *deployed* intelligence — our
price point sits deliberately in the credible band Palantir established. But the FDE
model is a body shop with platform margins on the invoice and services economics in the
cost line: every new customer needs new engineers. Our factory inverts it — the
correctness gate and methodology components do mechanically what FDEs do manually, so
marginal delivery cost falls with each module while Palantir's stays flat. Against
Palantir we sell speed-to-value (120 days vs multi-year), the customer's own
infrastructure and IP split, and a priced module instead of an open-ended engagement.

**n8n / Zapier-class automation.** The prototyping layer — and, at Motive, literally the
incumbent artifact (Charles runs n8n + a hand-built sidecar today, evidence 08). n8n
positions as self-hosted, AI-native workflow orchestration with 70+ AI nodes; Zapier as
cloud no-code automation with packaged AI steps. Neither provides model training,
feature stores, leakage/point-in-time enforcement, evaluation harnesses, or ML
governance — they orchestrate; correctness and the ML lifecycle are explicitly external
(comparisons, 2025–26, via Perplexity, 2026). Our relationship to them is judo, not
war: **n8n JSON is an ingest format** (evidence 06/08 — "drop in an artifact you already
have"). The prototype proves the intent; we compile it into a correct, governed,
deployed system. "Not n8n — n8n prototypes a flow; we produce a correct, governed,
deployed data/AI *system*" (evidence 08).

**LLM-copilot / answer-engine vendors (Glean-class, plus every "AI copilot for X").**
The loudest segment and the one our anti-portfolio filters out as buyers. Their
architecture is retrieval + inference: index the customer's corpus, retrieve at query
time, generate with a rented foundation model; training on customer data is limited to
tenant-scoped retrieval/ranking tuning, not predictive models of the business
(industry practice, 2024–26, via Perplexity, 2026). Evidence 08's line is the
positioning: "they answer; we *build, deploy, and learn from* your data." A copilot can
tell you what your churn policy document says; it cannot tell you which 400 accounts
will churn next quarter, why, and what to do about each — because it never trained on
your outcomes. The kernel's open question 5 (when to re-admit LLM-era solutions to the
catalog) does not change the positioning: when we ship document intelligence and RAG
(W3, M-9), it will be as *components inside governed solutions with measurement loops*,
not as a standalone answer box.

**Positioning synthesis.** One sentence, usable in every deck: *Databricks gives you a
notebook, Snowflake a quickstart, DataRobot a model, Palantir an engagement, n8n a
prototype, and Glean an answer — Orama Zetta gives you the deployed, correct, governed
solution, trained on your data, running inside your walls, priced as a module.*

---

## 5. The flywheel

The factory becomes a flywheel when its outputs feed its inputs. Five stages, each
evidenced, each with an owner:

```
 solutions shipped ──▶ deployed evidence ──▶ catalog growth ──▶ Auto-RL base model ──▶ faster solutions ──▶ (more solutions shipped)
```

1. **Solutions shipped → deployed evidence.** Every S-n that passes its
   definition-of-done (deployed · gated · wired to an action · measured vs holdout ·
   zero governance violations — kernel D4) produces the two artifacts the market cannot
   fake: a measured business outcome and a hardened reference architecture. The shadow-
   production discipline (kernel D7.5) means the evidence is side-by-side and honest —
   the kind that survives a CFO's scrutiny, which the MIT-NANDA 95% cannot produce.
2. **Deployed evidence → catalog growth.** Evidence converts three ways: it converts
   the design partner (10–25% ACV credit → year-one Enterprise), it unlocks the next
   module in-account (attach along the reuse frontier, §3.3), and it qualifies the next
   use case for the catalog via the `add-use-case` runbook and the kernel's admission
   criteria (kernel D9.5). Each new deployed environment class also retires a
   reference-architecture gate (kernel D7.4), widening the addressable market.
3. **Catalog growth → the Auto-RL base model.** This is the step that separates the
   flywheel from a mere pipeline. Every deployed solution generates traces — graphs
   compiled, corrections made, runs executed, outcomes labeled. The **Auto-RL base
   model** (One Orama catalog #3, evidence 07; website "Auto-RL," evidence 06) trains a
   long-horizon, tool-calling agent on exactly this experience: it is simultaneously a
   product module in its own right *and* the anchor that every other use case rides on.
   The website's promise — "it studies you and your data, suggests the high-value use
   cases, then auto-trains an agent on your data" — is this stage productized
   (Auto-Suggest + Auto-RL + personalized MCP).
4. **Auto-RL → faster solutions.** A base model fluent in our own methodology
   components compiles the next customer's graph faster and more correctly: Intelligence
   Velocity falls, correctness-gate pass rates rise, and the marginal cost of solution N
   drops again. "Each run is grounded experience the next graph learns from"
   (evidence 06) — at portfolio scale, not just per-customer.
5. **The internal loop: Orama automates Orama.** One Orama stage 8 (evidence 07) makes
   Orama itself the flywheel's test track: each function Orama automates — social
   posts, engineering, sales, and **UC-9 automated email outbound** first — becomes a
   new catalog entry that was proven on the lowest-liability customer possible: us. The
   kernel's open question 2 (UC-9 internal-first vs customer-facing first) is, in my
   reading, answered by the flywheel's own logic: **internal-first** is the shadow
   production of the module itself — we run our own outbound on it, harvest the
   evidence, then sell the module with a measured case study. (Recorded as a
   recommendation, not a kernel change — see Appendix.)

The flywheel's strategic property is that every stage is something competitors would
have to *already have the previous stage* to copy. Notebook vendors have no deployed
evidence; deployment vendors have no correctness discipline generating trustworthy
traces; nobody else's traces feed a base model trained on correct-by-construction
pipeline construction. The moat compounds precisely because the gate holds.

---

## 6. Three horizons

The kernel's waves (D2) and the One Orama staged roadmap (evidence 07) interlock into
three executive horizons. Each horizon has an engine dependency (R1–R8, evidence 08
roadmap), a commercial motion, and a gate that must clear before the next opens
(kernel D7).

| | **Horizon 1 — Prove the factory** (now → ~2 quarters) | **Horizon 2 — Scale the catalog** (~2–6 quarters) | **Horizon 3 — Compound the moat** (6+ quarters) |
|---|---|---|---|
| Methodology waves | W1: M-1 tabular · M-2 entity resolution · M-3 segmentation | W2: M-4 forecasting · M-5 anomaly · M-6 survival; then W3: M-7 uplift · M-8 NBA-lite · M-9 documents/retrieval | W4: M-10 agentic + Auto-RL · M-11 predict-then-optimize |
| Solutions | S-1 churn (reference implementation) + first FS/insurance beachhead modules | S-2…S-9 across T1; T2 admitted as governance matures | T3 re-admission (NBA, pricing, agentic) under mature governance |
| Engine dependency | R1 local run + R2 correctness gate (runnable today) | R3 one-button deploy + R4 tiered storage · R6 governance | R5 compute-near-data + R8 learning loop |
| One Orama stages | 0–2: v1 in-cluster · Zetta headless packaged · symbiosis v0 | 3–5: desktop bootstrap · v1→k8s cutover · fold in v2 + Clustera | 6–8: datastores→Zetta · decommission · **Automate Orama** |
| Commercial motion | 3–6 paid design partners; Motive anchor; 120-day programs | Partner→customer conversions; module attach; second-wave verticals by warm intro | Module catalog at scale; Auto-RL as anchor module; automated-business positioning |
| Hard gate to exit | Security gate: 11 auth gaps (zetta#759–#769) closed before any production enterprise deployment | Correctness-gate ≥90% before self-service to non-engineers; one reference architecture per environment class | Governance + eval-harness maturity before any agentic/automated action ships |

**Horizon 1 — prove the factory.** One thesis to prove: a solution built from W1
components, passed through the correctness gate, deployed in a real customer
environment, and wired to a named action, converts a skeptical enterprise in 120 days.
Motive is the anchor (UC-1 is live wtm work; the Motive build *is* R1 in disguise,
evidence 08); the FS/insurance partner and the operational account fill out the cohort.
Everything else — including revenue optimization — is subordinate to producing 2–3
unimpeachable deployed proofs and the S-1 reference implementation the whole catalog
copies. The security gate is absolute: **no production enterprise deployment while
zetta#759–#769 are open** (kernel D7.1); shadow-mode partner work on non-production
data proceeds meanwhile.

**Horizon 2 — scale the catalog.** W2 opens the forecast-to-action and ops/finance
families (UC-5/6/8 at full strength); W3 upgrades every "score" module into an action
policy (M-7 uplift) and opens the document family (M-9). Commercially this is the
attach-and-convert horizon: partner conversions land the Enterprise bases, modules
attach along the reuse frontier, and the second-wave verticals open by warm intro
(TELUS path, healthcare partner-led). The One Orama cutover (stages 3–5) matters to
solutions because it collapses our own operational surface onto the same platform we
sell — every internal migration is a rehearsal of a customer deployment. The
kernel-level timing question (M-7 before or after 3 deployed M-1 solutions — open
question 3) I read conservatively: uplift needs treatment data, and treatment data
comes from deployed M-1 solutions running retention programs with holdouts; the
measurement loops of H1 are the training set of H2.

**Horizon 3 — compound the moat.** W4 is deliberately last (kernel D2: "only after
governance + eval harness maturity") because agentic autonomy is where the market is
burning trust — Gartner's >40% agentic cancellation forecast (evidence 12 §S7) is a
prediction about competitors who skipped the ladder. We arrive with what they lack:
years of graduated-authority evidence, an eval harness hardened across a catalog, and
the Auto-RL base model trained on our own correct-by-construction traces. Stage 8
("Automate Orama") makes us the first reference customer for the automated-business
end state; the catalog then grows as fast as Orama automates itself. This is where
"Zetta as the platform for automated business" stops being vision language and becomes
the pricing conversation.

---

## 7. Executive decision log — CEO rationale for D1–D9

*The decisions are the kernel's; these paragraphs record why I, as CEO, am committing
the company to each.*

**D1 — Portfolio architecture (three catalogs).** Separating the demand map (use
cases), the engineering assets (methodologies), and the SKUs (solutions) is the
organizational encoding of the vocabulary's cardinality — and it prevents the two
classic drifts: engineering building methodologies nobody demanded (the reuse rule —
≥3 tiered use cases before a methodology is admitted — makes demand the gatekeeper),
and sales promising solutions engineering can't compose (the solutions catalog only
admits S-n whose M-n exists or is wave-scheduled). Three catalogs, three owners, one
kernel — the factory's org chart is its architecture diagram.

**D2 — Methodology build order (waves, tabular spine first).** The wave order is
compound interest applied to engineering: W1 maximizes fan-out per component because
the tabular methodology underpins the plurality of enterprise decision workloads
(evidence 10 §S3, 13) and 15+ of 34 cataloged solutions (evidence 12 §S3). Entity
resolution in W1 is the non-obvious call I want on record: it is thin, unglamorous, and
absolutely required — the correctness gate's "right entity, not an averaged, flattering
blur" promise (evidence 06) is unfulfillable without it, and evidence 12 names entity
resolution among the long poles that kill integrations. Each later wave is admitted
only when its engine dependency (R3/R4/R6/R5/R8) is credibly scheduled — the co-
sequencing discipline that keeps us from selling promises the engine can't cash.

**D3 — Use-case tiers.** The T1 nine are chosen by a criteria product (economic pool ×
frequency × closed-loop actionability × data availability × measurability × governance
fit × engine feasibility) that all three Deep Research reports and both compendium
pairs converge on (evidence 01–03, 11, 14). I underline the governance-fit factor: it
is the one criterion competitors don't screen on, and it is why our T1 skews toward
low-liability, high-measurability problems where shadow production is cheap and proof
is fast. T2/T3 are not rejections; they are sequencing — fraud triage and credit-risk
scoring enter when SR 11-7-grade governance is production-proven, and the LLM-era T3
solutions enter when they can pass the same gates everything else passes.

**D4 — Solutions as the sellable unit (priced modules with a DoD).** This is the
revenue model matching the value model. The customer's alternative costs are a
quarter-long productionization project per use case; our module price captures a slice
of that avoided cost, repeatably. The definition-of-done — deployed · gated · wired ·
measured · zero governance violations — is the anti-demoware constitution: nothing
ships that we couldn't put in front of the customer's regulator and our next prospect
simultaneously. It also disciplines *us*: a module that can't name its business action
and holdout design isn't a module yet, it's a model.

**D5 — Industries.** I accept the council's unanimous verdict (FS #1, insurance #2,
one operational account) because it triangulates three independent models against our
actual assets: regulatory fit that maps 1:1 onto product primitives, firmographics we
can reach with founder-led sales, and Motive already in hand as the operational
account. The "pick by warmest intro" rule for the second wave is deliberate humility —
the marginal rank between manufacturing, logistics, and telecom is noise, and intro
warmth is signal.

**D6 — Commercial anchors.** $500k+/yr Enterprise with separately priced modules
positions us in the Palantir-validated band while the Pro tier ($200/mo) keeps a
self-serve on-ramp that is explicitly *not* this plan's focus. Paid design partners at
10–25% of expected ACV is the single most important early commercial decision: free
pilots select for AI tourists (the anti-ICP), paid pilots select for budget-adjacent
champions, and the year-one credit makes conversion the default rather than a second
sale. The IP split (customer owns data + weights; we own engine, connectors, templates,
generalized learnings) is what lets the flywheel spin without a lawyer in the loop.

**D7 — Sequencing gates.** The gates are the brand's immune system. The security gate
(11 open auth gaps, zetta#759–#769) is non-negotiable because our entire positioning is
governance — being breached through a fail-open RLS while selling "governed by default"
is an extinction event, not an incident. The correctness floor (≥90%) keeps self-service
honest; engine co-sequencing keeps sales honest; the reference-architecture rule keeps
delivery honest; shadow-production-first keeps the automation ladder honest. Velocity
is what we sell; the gates are why anyone believes us.

**D8 — Success metrics.** Intelligence Velocity as the primary metric is the name made
operational — it is also the metric competitors structurally cannot chase without our
architecture (a notebook vendor cannot measure intent→deployed because they never
deploy). The guardrail metric — **governance violations = 0** — is deliberately
absolute: one violation converts our best marketing asset into our worst liability.
Module attach rate and partner→customer conversion are the two numbers I will read
first in every board pack, because they measure the factory thesis and the wedge
respectively.

**D9 — Operating principles.** Six lines that fit on one slide, each the compression of
an evidence base: use-case-first/reuse-led/solution-priced (the factory, §2.1); never
trade the gate (the brand, §2.5); low-liability first (the wedge, §3.2); one named use
case per conversation (the anti-platform-demo discipline, evidence 08); evidence-based
catalog growth (the `add-use-case` runbook keeps the catalog honest); own-data training
as the moat (the compounding layer, §2.4). When a decision doesn't obviously follow
from the kernel, these six are the tiebreaker.

---

## 8. What must be true / leading indicators / org implications

### 8.1 What must be true, per horizon

**Horizon 1.**
- The 11 auth gaps (zetta#759–#769) close before any production enterprise deployment
  (kernel D7.1) — engineering's top priority alongside UC-1 delivery.
- The correctness gate runs on today's engine (R1/R2) well enough to demo as the brand
  centerpiece: leakage + point-in-time + entity-resolution checks blocking real graphs
  with real reasons.
- Motive converts from design partner to reference: S-1 deployed, shadow-run against
  the incumbent n8n workflow, measured on the retention KPI.
- 3–6 paid partners signed on the scorecard (no disqualifier + budget-adjacent
  champion), at least one FS/insurance, one operational.
- S-1's definition-of-done is fully exercised once — the reference implementation
  every later module copies.

**Horizon 2.**
- R3 one-button deploy is real in at least two environment classes; the three
  reference architectures exist and repeat.
- Correctness-gate pass rate ≥90% sustained on the evaluated task set, unlocking
  self-service deploy for non-engineers (kernel D7.2).
- ≥2 partner→Enterprise conversions with year-one credits consumed; first module
  attaches (a second S-n in a live account) observed.
- Holdout/uplift measurement loops running in deployed accounts — the treatment data
  that gates M-7's start (kernel open question 3).
- The One Orama cutover (stages 3–5) proceeds without breaking the "zero downtime,
  cutback-safe" convention — our own migration is a sales asset only if it's boring.

**Horizon 3.**
- The eval harness + governance stack is mature enough that an automated action can be
  granted graduated authority with audit-grade evidence (the D7.5 ladder climbed, not
  skipped).
- Auto-RL base model v1 trains on accumulated pipeline traces and measurably improves
  compile correctness/velocity — the flywheel's step 4 demonstrated internally before
  it is sold.
- UC-9 runs Orama's own outbound (internal-first) with measured lift — stage 8's first
  concrete instance.
- Module attach ≥2 average across the Enterprise base; NRR reflects expansion along
  the reuse frontier.

### 8.2 Leading indicators (read weekly/monthly, per kernel D8)

| Horizon | Leading indicators (ahead of revenue) |
|---|---|
| H1 | Auth-gap burndown (11→0) · correctness-gate pass rate on internal task set · discovery-call→scorecard-qualified rate on the ~50-account list · Motive shadow-production KPI deltas · Intelligence Velocity on internal builds |
| H2 | Time-to-value per solution (≤16 weeks, kernel D8) · self-service rate · module attach rate · reference-architecture reuse count (deployments per architecture) · holdout coverage (% of deployed solutions with live measurement loops) · generated-graph incident rate |
| H3 | Auto-RL eval-harness scores vs baseline compiler · % of Orama's own operations running on Zetta (stage 8 progress) · catalog admission rate via `add-use-case` · NRR · governance violations (must stay 0 across all horizons) |

### 8.3 Org implications — who owns what

- **CPO — owns the demand map and the SKUs** (`02-use-case-portfolio.md`,
  `04-solutions-catalog.md` jointly with CTO). Guards the intake rubric and the
  anti-portfolio; runs the `add-use-case` pipeline; owns module definitions-of-done and
  the attach roadmap per account. The CPO is the person who says "no" to the
  off-catalog deal.
- **CTO — owns the waves** (`03-methodology-portfolio.md`). Sequences M-1…M-11 against
  engine dependencies R1–R8; owns the correctness gate as a product artifact and the
  ≥90% floor; owns the security-gate burndown (zetta#759–#769) as the top engineering
  priority; enforces the reuse rule (≥3 tiered use cases) against methodology
  enthusiasm — including our own.
- **CMO/CRO — own the partner cohort and the wedge** (`05-industries-and-gtm.md`).
  CMO owns the positioning system (§4's rows, the named-use-case discipline, the
  governance/production-gap narrative, "learning, not inference"); CRO owns the
  ~50-account list → 20–30 discovery calls → 3–6 paid partners motion, the scorecard
  gate, and the 120-day program cadence. Jointly accountable for
  partner→customer conversion.
- **CFO — owns module pricing mechanics** (`06-financial-plan.md`). Resolves kernel
  open question 4 (per-module flat vs value-indexed) with a proposal to the kernel;
  owns partner-fee structure (10–25% ACV, year-one credit), module unit economics, and
  the attach-rate revenue model. Ensures design-partner discounting never leaks into
  list pricing.
- **COO — owns the roadmap and the gates** (`07-delivery-roadmap-and-risks.md`).
  Sequences the horizons, enforces D7 (no wave before its engine dependency, no
  widening before the reference architecture, no automation before shadow production),
  and owns the risk register — including the One Orama migration's interaction with
  solutions delivery capacity.
- **CEO — owns the kernel.** Kernel changes are deliberate, small, PR-style edits;
  tensions arrive through the appendices and are resolved in the kernel first. I also
  personally own the design-partner relationships in H1 — at 3–6 partners and ~10–15
  founder-hours/week each (evidence 08), the cohort *is* the CEO's calendar.

---

## Appendix — Tensions for kernel review

Elaborating the kernel surfaced four genuine tensions. None are contradictions I have
resolved unilaterally; each is recorded here for kernel-level disposition per the
kernel's own protocol.

**T1 — "Minutes" vs "12–16 weeks": the two velocities need canonical language.** The
website promises intent→deployed in minutes (evidence 06: "9 min" in the hero mock);
the solutions motion promises time-to-value ≤16 weeks per solution (kernel D8) with a
120-day partner program. Both are true — *deploy velocity* is minutes once the
environment and data are connected; *trust velocity* (secure env, shadow production,
measured holdout) is weeks by design — but sales conversations will collide the two
numbers unless the kernel blesses a canonical framing (e.g., "deployed in minutes,
proven in a quarter"). Proposed owner: CMO drafts, kernel adopts.

**T2 — Design-partner fee base is ambiguous when the land is one module.** D6 prices
partners at 10–25% of *expected ACV*. For a partner landing on Enterprise
($500k+/yr) *plus* one priced module, is the fee base the platform ACV, platform+module,
or module-only? At 10–25% the answers differ by >$50k and change the qualification
signal the fee is meant to send. Interacts with kernel open question 4 (module pricing
mechanics); recommend the CFO's pricing proposal resolve both together.

**T3 — UC-9 (automated email outbound) sits in tension with low-liability-first unless
internal-first is made explicit.** Customer-facing automated outbound carries brand and
deliverability liability and is pattern-4 automation (closed-loop acting on the world),
while D9.3 mandates assistive-before-automated and D7.5 mandates shadow production. The
tension dissolves if UC-9 is formally designated **internal-first** (Orama's own
outbound as the shadow production, per One Orama stage 8) — which is kernel open
question 2. This document's flywheel section (§5) argues internal-first; recording here
that the kernel should decide, not inherit my argument silently.

**T4 — "Correct by construction" (absolute) vs the ≥90% gate floor (statistical).** The
brand language promises every graph passes a correctness gate before deploy (absolute,
and true — the gate always runs); D7.2's ≥90% is a pass-*rate* floor on an evaluated
task set for unlocking self-service. These measure different things (gate coverage vs
gate outcome), but a diligence-minded buyer or a journalist can read them as
contradiction ("so 10% of what it builds is wrong?"). The kernel should adopt one
sentence distinguishing them — e.g., "every graph is gated; ≥90% of attempted tasks
pass the gate unaided, and failures are blocked with reasons, never shipped" — and
propagate it to the website's technical FAQ when self-service launches.

---

*End of draft v1. Sibling elaborations: 02 (CPO) · 03 (CTO) · 04 (CPO+CTO) · 05
(CMO+CRO) · 06 (CFO) · 07 (COO). The kernel remains the spine.*
