# Executive strategy — the Orama Zetta solutions business

> **Status:** v2 — 2026-07-15 · **Author:** CEO (combined executive team) ·
> **⚠️ Internal-confidential** — inherits pricing, acquisition, and partner detail from
> evidence 07/08.
>
> **Elaborates kernel v2** ([`00-strategy-kernel.md`](00-strategy-kernel.md)) — future
> state · no sequencing · ROI-central · Auto-RL-central. The kernel is **binding**; this
> document elaborates its decisions and does not amend them. Genuine tensions discovered
> while writing are recorded in the final appendix for kernel review.
>
> **v2 supersedes v1 entirely.** Everything here is future-state analysis: the product
> is assumed complete as promised (evidence 06), and every argument answers one
> question — *is this a good decision for us in the future?* There is no schedule in
> this document, no build order, no launch tiers, and no time dimension. The portfolio
> is scored, not scheduled (kernel D10.2).

---

## 1. The future state, narrated

### 1.1 What the customer buys

**Enterprises buy measured outcomes.** Not models, not platforms-as-potential, not
seats, not compute — a business result, delivered inside their own walls, with a number
attached that their CFO computed rather than accepted. In the future state an enterprise
states a problem — *"score every active account for churn risk and tell me what's
driving it"* (evidence 06) — and receives a **deployed, correct, governed solution
running on infrastructure they control, built and operated by an agent trained on their
own data, carrying a measured ROI they can see** (kernel §1).

Walk through what that means concretely. A regional bank's head of deposits names the
problem: deposit attrition. Zetta has already studied the bank and its data
(Auto-Suggest, evidence 06/08) and the use case is already ranked in the bank's own
personalized catalog — with an ROI model attached: the value pool (the deposit base at
risk), the customer-investment shape (module price + integration + data work + change
cost), the p(success) drivers scored, and the measurement design that will prove the
return (kernel D1, D4). The bank's agent — a long-horizon, tool-calling agent
**auto-trained on the bank's own data with reinforcement learning** (Auto-RL, evidence
06/08) — composes the solution from the methodology toolbox: entity resolution across
core-banking and CRM records, point-in-time features, a survival-augmented tabular
model, driver explanations, a retention decision policy with contact budgets and
approval gates. Every graph passes the correctness gate before it deploys — schemas
type-checked against the real sources, leakage and point-in-time discipline enforced,
entities resolved to the right subsidiary rather than an averaged, flattering blur
(evidence 06). The solution deploys onto the bank's Kubernetes, inside their SSO, with
zero data egress. It wires to a named action — the retention desk's queue — and a
measurement loop with a holdout. And then it runs, under governance, operated by the
agent: monitoring drift, explaining drivers, retraining, escalating what needs human
approval, acting autonomously where the governance class permits.

Two readouts come back to the buyer on a standing basis. The first is the business
outcome: retained deposits against the holdout, in dollars. The second is the same
number expressed as the contract's central quantity: **measured return ÷ customer
investment — the ROI** (kernel D1, D9). The price the bank pays was set from that ROI
model up front, and the measurement loop that proves the return to the bank is the same
instrument that trues up what they pay us (kernel D8). Nothing about the commercial
relationship rests on assertion. The bank is not buying our confidence; it is buying a
measured number and paying a share of it.

### 1.2 What the agent does

**The core of the product is the agent, not the pipeline** (kernel D2). The pipeline —
extract → clean → model → explain → serve → act — is what the agent *builds and
operates*; the agent is what the customer *has*. It arrives already fluent in the
customer's systems because it was post-trained on the customer's data from a base agent
we own (the Zetta agentic RL base model — evidence 07, catalog #3 — the asset that
anchors every other use case). It selects methodologies from the toolbox the way a
senior data scientist would, arranges them against the use case, adapts them to the
real conditions (time-ordered data, imbalanced labels, entities that don't join
cleanly), passes the result through the correctness gate, deploys it, watches it,
explains it, and improves it. Its actions run under the same governance as everything
else: identity-scoped, audited, approval-gated where the action class requires a human
(kernel D2.5). The customer's weights belong to the customer; the base model and the
generalized learnings belong to us (the IP split, evidence 08).

The interface personalizes too. The customer's people and the customer's other agents
reach the system over MCP, and the MCP surface itself adapts to how each user works —
personalized tools and responses, not one-size-fits-all (Personalized MCP, evidence
06/08). Personalization runs end to end: **what** to build (Auto-Suggest), **how** it is
built and run (the Auto-RL-trained agent), and **the interface** it is reached through
(Personalized MCP). "It knows you and your data" is the product's promise stated in
the customer's language (evidence 06); the strategy-language equivalent is that the
unit of production is a *personalized operator*, not a generic tool.

### 1.3 What Orama looks like at full operation

At full operation, Orama is the factory behind thousands of these agents, and the
factory itself runs on the product. The One Orama end-state (evidence 07) is explicit:
Zetta is **the platform to run a 100% automated business — and a 100% automated
portfolio of businesses.** Orama runs its own operations on Zetta — outbound, marketing,
engineering support, finance ops — and **every function Orama automates for itself
becomes a new sellable use case in the catalog** (evidence 07). The company is
simultaneously the factory's operator and its most instrumented customer: the first
place every new module's ROI is measured is our own P&L.

The catalog at full operation is the complete map of enterprise problems where
risk-adjusted ROI is strong (kernel D4), organized by ROI band, each entry carrying an
ROI dossier — value pool, investment shape, p(success) drivers, measurement design.
The toolbox behind it is complete (kernel D5): the ~two dozen methodology families of
enterprise AI (evidence 10/13), productized as components with correctness profiles,
composed by agents rather than staffed teams. Revenue scales with **customer ROI
delivered** — module attach across a growing catalog, priced against measured returns —
not with hours, seats, or compute (kernel §1). Headcount curves and revenue curves are
decoupled by construction: the marginal solution is composed by an agent from
components that already exist, adapted by an agent to conditions it has already
learned, and operated by an agent whose training compounds with every run.

Three properties define the operation, and none of them is a feature toggle — each is
a structural fact of how the business works:

1. **Measured, not asserted** (kernel D10.6). Every deployed solution carries a live
   measurement loop; a solution without an ROI readout is not done. The company's
   revenue reporting and the customers' value reporting are computed from the same
   instruments.
2. **In-environment, always** (evidence 06). The customer's data never leaves their
   walls; the work is deployed to the data. Orama holds no customer raw data centrally
   — the anti-customer definition (kernel D3) refuses anyone who requires us to.
3. **Governed by default** (kernel D10.5). Correctness gates, identity scoping, audit,
   approval gates are product properties present in every deployment — never traded,
   never optional, never a premium tier. Governance violations = 0 is the standing
   guardrail (kernel D9).

### 1.4 Why this future state is the right one to build toward

Because it is the only shape of the business in which the three scarce things compound
instead of deplete. **Expert labor** does not scale — the enterprise-AI failure record
(evidence 11 §S7, 12 §S6, 14, 15) is substantially a record of scarce experts spread
thin across the problem-and-plumbing layer. In our future state expert judgment is
encoded once — in methodology components, correctness gates, and the base agent — and
reused by every deployment. **Trust** does not scale when it must be re-earned
account-by-account with assertions; it scales when every account carries a measured
readout produced by an auditable loop. And **knowledge of what works** does not scale
inside consultancies, where it retires with the partner; it scales when every deployed
solution feeds refined, generalized learnings back into the base agent and the
component catalog (kernel D7). The future state is the arrangement in which all three
compound: agents carry the labor, measurement carries the trust, and the data supply
chain carries the knowledge.

---

## 2. The strategic thesis v2

### 2.1 ROI is the organizing quantity — one metric, three jobs

The single deepest change v2 makes is that **one quantity — risk-adjusted customer ROI
— governs selection, pricing, and agent reward** (kernel D1, D8, D7.2):

```
score = E[ROI] × p(success)

E[ROI]     = expected customer return ÷ customer investment
p(success) = probability the solution actually delivers that return in production
```

- **Selection.** What enters the catalog, which industries we serve, which accounts we
  pursue, which methodologies the toolbox admits — all scored on E[ROI] × p(success).
  A methodology belongs in the toolbox iff it raises the portfolio's risk-adjusted ROI
  (kernel D5); a use case belongs in the catalog iff its ROI dossier clears the bar
  (kernel D4); a customer is a customer iff the three ROI-maximizing conditions hold
  (kernel D3).
- **Pricing.** Price is set from the customer's return, not from our cost (kernel D8).
  Each module is priced as an anchor share of expected annual return, risk-adjusted —
  premium pricing where p(success) is high and well-evidenced, success-linked
  components where variance is higher — and the measurement loop is the billing
  instrument that trues it up.
- **Agent reward.** Auto-RL training optimizes toward the solution's measured ROI
  signal wherever the measurement loop can express it (kernel D7.2). **The metric the
  customer pays for is the metric the agent learns on.**

The unification is the strategy. Businesses degrade when their internal optimization
targets diverge: sales optimizes bookings while delivery optimizes margin while product
optimizes usage, and the customer's outcome is nobody's loss function. Here the
customer's outcome *is* the loss function — literally, in the RL sense, and
contractually, in the pricing sense, and organizationally, in the portfolio-scoring
sense. Every internal argument reduces to the same arithmetic. When the CPO and CFO
disagree about a use case, they are disagreeing about an E[ROI] or a p(success)
estimate, which is a factual dispute with a measurement path — not a values dispute
with a political one.

**p(failure) is a first-class quantity** (kernel D1). The evidence is unambiguous that
enterprise AI fails at the problem-and-plumbing layer, rarely the model layer: only a
minority of projects reach production, the great majority of GenAI pilots produce no
measurable P&L impact, and the canonical post-mortems — a >$500M write-down from drift
meeting autonomous purchasing, a sepsis model collapsing in external validation, a
nine-figure oncology abandonment — all localize the failure in leakage, drift,
unowned actions, unmeasured outcomes, and unconsulted governance (evidence 11 §S7,
12 §S6, 14, 15). We therefore price failure, manage the portfolio against it, and
build the five p(success) drivers — data availability and label quality,
actionability, measurability, adoption, governance fit — into every dossier as scored
inputs, not hopes. Intelligence Velocity — intent → deployed — remains tracked and
remains real (it is the product's name-metric, evidence 06/08), but it is a
**supporting metric** (kernel D9): velocity matters because faster deployment pulls
returns forward and lowers customer investment, i.e. because it moves ROI. It is an
input to the central quantity, not the quantity.

### 2.2 The factory cardinality: many use cases ≈ many solutions ≫ few methodologies

The factory's economics rest on a structural fact evidenced from five independent
directions (kernel §1; `../vocabulary.md`):

- Our internal methodologies compendium enumerates ~35 methodologies and finds that
  virtually all of them share extraction, feature-engineering, evaluation, serving,
  and monitoring stages — many differ in only one or two stages (learning-to-rank is
  tabular supervised learning with a group-aware loss; uplift modeling is tabular
  supervised learning with a treatment column and a causal estimand) (evidence 10).
- Our internal solutions compendium makes the fan-out explicit: roughly **ten
  methodology families generate all 34 cataloged solutions**, and the tabular
  supervised methodology alone underpins more than a third of the catalog, because
  tabular data is the majority of business data (evidence 12).
- The external Deep Research compendia, run independently on the same prompts,
  reproduce the same cardinality: ~26 methodologies vs ~140 use cases vs 43 solutions
  (evidence 13/14/15).
- The market's own catalogs agree: 93 Databricks solution accelerators (evidence 04)
  and 9 Snowflake industry solution families (evidence 05) — many offerings assembled
  from a much smaller set of underlying patterns; the retired amaro-desktop catalog
  held 400 example data apps across just 17 categories (evidence 09).
- The demand side is correspondingly wide: the use-case compendia map ~124–140 distinct
  enterprise problems across twelve business-function families, almost all reducible to
  the same skeleton — an entity, a repeated decision, a label, a horizon (evidence
  11/14).

The consequence is the **factory equation**: a compact toolbox of methodology
components composes into solutions for a very large catalog of business problems, so
the fixed capital (components, correctness adaptations, the base agent) is amortized
across a catalog whose breadth is set by demand, not by our staffing. The marginal cost
of the next solution is dominated by correctness adaptation and business wiring — and
in the future state **the composer is the agent** (kernel §1): Auto-RL agents select,
arrange, and operate methodologies against use cases, personalized to each customer.
The cardinality is what makes an agent-composed catalog *possible* (a small action
space of well-specified tools over a large space of problems is exactly the shape RL
handles well); the agent is what makes the cardinality *cash* (the fan-out is realized
without a services army).

### 2.3 Why Auto-RL at the center changes the business model

Put the agent at the center and the production function of the business changes kind.

**Outcomes scale with agents, not headcount.** In every existing delivery model for
enterprise AI — consultancies, forward-deployed engineering, solution-accelerator
field teams — the binding constraint is expert hours, so revenue growth requires
proportional hiring, margins are structurally services margins, and quality varies with
the individual assigned. When the operator is an agent trained on the customer's data:
the marginal deployment consumes training compute and component reuse rather than
expert hours; quality is a property of the gate and the base model rather than of who
showed up; and — decisively — **the marginal unit of capacity improves with use**. An
hour of consulting delivered is gone; a run executed by an agent is training data. The
cost curve of a body shop is flat-to-rising per unit; ours bends down, because every
deployment makes every future deployment cheaper and more likely to succeed (p(success)
rises with accumulated priors — §5).

**The agent is also what makes ROI-pricing sustainable.** Pricing on the customer's
return is only a good trade for the seller if the seller can *systematically move* the
return and the probability of achieving it. A consultancy pricing on outcomes is
gambling on its staffing; we are compounding on our training. The agent optimizes
toward the measured ROI signal (kernel D7.2), which means the thing we charge a share
of is the thing the product mechanically improves. Sellers who cannot operate the
solution cannot responsibly price on its outcome — which is precisely why none of our
competitors do (§4).

**And it changes what the customer owns.** The customer ends up with an asset —
an agent fluent in their systems, their vocabulary, their outcomes, running on their
infrastructure, whose customer-specific weights are theirs (evidence 08). That is a
fundamentally stickier and more honest relationship than a subscription to someone
else's inference: churn on our side means walking away from an appreciating asset, not
canceling a rental. Renewal is not a persuasion event; it is arithmetic in the ROI
readout.

### 2.4 The double moat: own-data training + generalized-learning assets

The moat has two layers, and they reinforce (kernel D7.3; evidence 06).

**Layer one — own-data training, per customer.** "Prompting a general-purpose model
only borrows what that model already knew; it never gets better at your business"
(evidence 06). Every solution trains on the customer's own history — churn labels,
collections outcomes, failure records, and crucially the *action taken* and the
*result observed*, the RL reward signal (kernel D7.1). The customer's agent pulls
further ahead of any retrieve-and-prompt system with every run, and the advantage is
unreachable by any vendor whose architecture never trains in-environment. This layer
belongs to the customer (their data, their weights) — which is exactly why they buy it.

**Layer two — generalized learnings, across the portfolio.** Cross-customer
**generalized** patterns — schemas, playbooks, priors, correctness adaptations,
benchmarks, synthetic corpora, and above all the base agent's improved starting point —
are ours, and they raise every future agent's floor (kernel D7.3). This is the layer
competitors cannot buy their way into: it is manufactured only by operating many
correct, measured, governed deployments, and it feeds a base model (evidence 07
catalog #3) that is simultaneously a product in its own right and the anchor under
every other module. The two layers form a ratchet: layer one wins and retains each
customer; each customer's operation (under the IP split and governance — nothing
customer-specific crosses the boundary) refines layer two; layer two raises p(success)
for the next customer, which raises the D1 score of the whole catalog, which widens
what we can profitably sell, which grows layer two again.

### 2.5 The thesis, restated in one line

**One metric (risk-adjusted customer ROI) selects the portfolio, sets the price, and
trains the agent; a small toolbox composes into a large catalog; agents — not headcount
— deliver and operate the catalog in-environment; and every measured outcome makes the
data assets, the agents, and therefore the economics better.** Everything else in this
document is the elaboration of that sentence.

---

## 3. Who our customers will be & what we'll go after

### 3.1 The customer definition (kernel D3, elaborated)

The future-state customer is any enterprise where three conditions intersect —
**recurring, high-value decisions**, **owned data exhaust**, and **a governance
requirement** — because that intersection is where risk-adjusted ROI is structurally
largest (kernel D3; evidence 01–03, 08, 11, 14). Each condition maps to a term of the
D1 equation:

- **Recurring, high-value decisions** set E[ROI]'s numerator. A decision made once is a
  consulting engagement; a decision made ten thousand times a month on a measurable
  entity — which account to save, which claim to fast-track, which machine to service,
  which invoice to release — is a return pool an agent can compound against. The
  use-case evidence reduces nearly every valuable enterprise problem to the same
  skeleton: an entity, a repeated decision, a label, a horizon (evidence 11/14). That
  skeleton is our customer screen in miniature.
- **Owned data exhaust** sets p(success)'s largest driver and the agent's fuel. Systems
  of record — CRM, ERP, billing, telemetry, tickets, claims, sensors — already capture
  decision-grade history and, critically, can capture the action taken and the result
  observed: the RL reward signal (kernel D7.1). A customer whose data exhaust is thin
  or unowned cannot train an agent worth paying for.
- **A governance requirement** is — counterintuitively — a *positive* selector. Buyers
  who need identity-scoped access, audit, approval gates, and in-environment deployment
  are buyers for whom our product properties (kernel D10.5) are requirements with
  budget attached, and for whom most competitors are disqualified at security review.
  Governance-demanding customers are our best-fit customers precisely because
  governance is where we are structurally strongest.

The profile that falls out: organizations with systems of record producing
decision-grade data, **a named owner for the outcome**, and infrastructure they control
(cloud VPC, K8s, on-prem). They buy own-data training and in-environment deployment —
not rented inference (kernel D3; evidence 06/08). The named-owner clause carries more
weight than it looks: the failure evidence is emphatic that adoption is a first-class
p(success) driver — a solution whose output no one is accountable for acting on
converges to a dashboard, and dashboards die (evidence 12 §S6, 03). No outcome owner ⇒
p(success) → 0 ⇒ not a customer (kernel D3).

### 3.2 The industry map, scored by future ROI fit

All industries below are in-scope in the future state; the map orders them by
**ROI fit** — the size and probability of the return pools they hold — never by entry
order (kernel D3). Account selection *within* any industry follows D1 scoring.

| Industry | Why the ROI fit is strong | Characteristic Band-A pools (evidence 11/14) |
|---|---|---|
| **Financial services / banking** | Regulated, data-rich, loss-avoidance pools; model-risk governance maps ~1:1 onto our primitives (audit, approval gates, in-environment, explainability) — governance is budgeted, not resisted (evidence 08) | Collections & recovery · deposit/customer attrition · fraud & financial-crime decisioning · credit decisioning support · KPI driver analysis |
| **Insurance** | Same governance-fit thesis; claims and underwriting are high-frequency, high-value, label-rich decisions with hard operating KPIs | Claims triage & fraud referral · lapse/retention · underwriting support · subrogation identification |
| **Healthcare / life-sciences** | Enormous administrative-ROI pools where the return is cost and cycle-time, measurable against hard operating metrics | Denials management & prevention · prior-authorization automation · no-show & capacity forecasting · revenue-cycle prioritization |
| **Manufacturing / industrial + logistics / fleet** | Asset and operations ROI on sensor exhaust; loss avoidance (downtime, scrap, fuel) is measured natively by the business already | Predictive maintenance · quality/yield optimization · demand forecasting · route & dispatch optimization |
| **Telecom** | Churn and network economics at extreme scale; per-decision value modest but decision frequency immense | Churn & retention · network fault prediction · usage-based upsell targeting |
| **Retail / CPG** | Forecasting, pricing, and personalization pools; dense transaction exhaust | Demand forecasting → replenishment · pricing & promotion optimization · personalization |
| **Energy / utilities** | Load and asset ROI; regulated governance fit; sensor-rich | Load forecasting · asset maintenance · outage prediction |
| **B2B SaaS / tech** | Churn/expansion-native, data-ready, fastest measurement loops (product telemetry) | Churn & expansion scoring · lead/opportunity scoring · usage-driven next-best-action |

The map's common denominator is deliberate: each row is an industry where **returns are
loss-avoidance or revenue-retention measured by instruments the business already
trusts**. We are not asking these buyers to believe a new metric; we are wiring into
KPIs their operators already report on. That is what keeps measurability — a p(success)
driver — high across the whole map (kernel D1).

### 3.3 The Band-A demand thesis

The catalog is organized by **ROI band, not launch tier** (kernel D4). Band A — churn &
retention (UC-1), collections, demand forecasting, fraud & financial-crime decisioning,
predictive maintenance, lead/opportunity scoring, next-best-action, claims triage, KPI
driver analysis, automated outbound — is where the D1 score concentrates, and the
concentration has a common structure worth stating as a thesis:

**Band A is the set of problems where a repeated decision, a rich label history, a
named action path, and a hard operating KPI already coexist — so E[ROI] is large and
every p(success) driver starts high.** The value pools are independently sized as
enormous: the classic tabular decision problems (forecasting, risk scoring, pricing,
maintenance) carry an estimated $11–17.7T annual pool — several times the generative-AI
pool — and measured value clusters exactly where data exhaust, actionability, and
measurability coincide (evidence 11, citing McKinsey 2023/2025). Band A is also where
the reward signal for Auto-RL is cleanest (kernel D7.2): actions and outcomes are
logged by the systems of record (the save offer made, the account retained; the work
order issued, the failure avoided), so the agent trains on the same loop the customer
pays on. And Band A fans out across the whole industry map — churn alone instantiates
in banking (deposits), insurance (lapse), telecom, SaaS, and retail — so the same
module anatomy, adapted per vertical, sells across every row of §3.2's table. Band B
(pricing optimization, attrition, ticket triage, document/claims automation, supplier
risk, healthcare ops) carries strong ROI with higher variance — priced accordingly with
success-linked components (kernel D8); Band C is real but selective, pursued
account-by-account when D1 scores well (kernel D4).

The demand thesis has a second leg: **the failure record is a demand signal.** The
market has spent a decade and two AI generations proving it cannot reliably execute the
applied layer — most projects never reach production, and the ones that do frequently
cannot attribute P&L impact (evidence 11 §S7, 12 §S6, 14, 15). Every one of those
failures is a buyer who wanted a Band-A outcome and bought the wrong shape of product
to get it. The unmet demand is not for more models; it is for **delivered, measured
outcomes with the failure modes engineered out** — which is the exact definition of our
module (kernel D6): ROI model agreed up front, p(success) assessment with risk drivers
named, agent operating definition, data plan, and a definition of done that ends in
*ROI measured against the agreed model, zero governance violations*.

### 3.4 The anti-customer and the anti-portfolio: refusal as portfolio management

What we refuse protects the D1 score of everything we accept.

**Anti-customers** (kernel D3): buyers wanting a copilot/RAG toy rather than a trained
system; anyone requiring us to hold their raw data in our cloud; organizations with no
outcome owner. Each is a p(success) sink, not merely a weak deal. The copilot buyer is
purchasing the segment where measurable P&L impact has been vanishingly rare (evidence
12 §S6) — their engagement would produce an unmeasurable readout that weakens our
evidence base and our pricing credibility. The hold-our-data buyer would have us break
the in-environment property that anchors both the governance moat and the
zero-egress promise (evidence 06) — one exception converts a structural guarantee into
a negotiation. The ownerless organization fails the adoption driver by definition.

**Anti-portfolio** (kernel D4, ROI/risk grounds only): problems with unmeasurable
returns, problems with no action path, and problems whose governance exposure caps
p(success) — generic chatbots (unmeasurable), autonomous high-stakes decisions without
human gates (p(failure) and liability dominate; the canonical >$500M write-down is the
standing exhibit — evidence 12 §S6), vanity analytics (no action path). The refusal
logic is portfolio arithmetic: portfolio risk-adjusted ROI is a weighted average, and
admitting a low-p(success) engagement doesn't just add a weak term — it consumes
data-supply-chain and agent-training capacity (kernel D7), pollutes the p(success)
calibration record (kernel D9) with entries that were doomed by selection, and puts
unmeasured or ungoverned deployments next to our brand. A business that prices on
measured ROI cannot afford a portfolio segment that cannot be measured; a business
whose guardrail is zero governance violations cannot afford action classes whose
liability is unbounded. Saying no is how the average stays high and the calibration
stays honest.

---

## 4. Competitive positioning in the future state

### 4.1 The structural test

The category is defined by one arc (evidence 06): *"Plenty of tools compress one step —
deploying a web app, or running a query, or drafting a workflow. None shrink the whole
arc from 'I have a question' to 'a correct, governed system is answering it in
production.'"* In the future state we sharpen that into a two-part structural test that
every competitor class fails and our whole model is built to pass:

1. **Can they price on the customer's measured ROI?** Only a vendor who (a) operates
   the solution end-to-end, (b) owns a measurement loop the customer trusts, and
   (c) can systematically move the outcome, can afford to tie price to return. A
   vendor who ships an artifact and leaves — a notebook, a model, a workflow, a deck —
   cannot underwrite the outcome, because the failure modes (leakage, drift, unowned
   actions, unmeasured value) live in the part they don't ship.
2. **Can they operate trained agents inside the customer's environment?** Owning the
   outcome requires standing inside the customer's walls: training on their data
   without egress, acting through their systems under their SSO, auditing every step.
   That requires the in-environment substrate, the governance stack, and the Auto-RL
   capability together — an architecture, not a feature.

These two capabilities are the same thing seen commercially and technically:
**outcome custody**. The competitor classes below each hold custody of one artifact
stage and hand the outcome back to the customer — which is precisely where the failure
statistics accumulate (evidence 12 §S6, 15).

### 4.2 The classes, one by one

| Competitor class | What they sell | Why they fail the structural test | Our contrast (evidence 06) |
|---|---|---|---|
| Accelerator vendors (Databricks, evidence 04; Snowflake, evidence 05) | Notebooks, reference architectures, quickstarts — patterns the customer productionizes | Custody ends at the artifact; productionization, correctness, wiring, measurement are the customer's problem; economics tied to their platform/warehouse consumption, not the customer's return | **Not demoware** |
| Cloud data platforms as a home for AI | The environment your data must move into | Return accrues to consumption pricing regardless of outcome; in-*their*-environment by construction | **Not someone else's cloud** |
| AutoML vendors | Automated modeling + MLOps | Automate the stage that was never the constraint; no business wiring, no action path, no measurement loop, no agent operating the result | *(the modeling slice of demoware)* |
| Copilot / answer-engine vendors | RAG + inference over rented models | Never train on the customer's outcomes; unmeasurable returns are the segment norm; plateau at what the base model knew | **Not just answers** |
| Consultancies / FDE models | Expert hours assembling bespoke systems | Can stand in-environment but scale with headcount; knowledge retires with the team; outcome pricing is a staffing gamble, so they bill time instead | *(the factory vs the body shop)* |
| Deploy-DX platforms | One-button deploys for web apps | Not data/AI-native, not enterprise-governed, no training, no correctness gate | **Not a web PaaS** |

**Accelerator vendors** (evidence 04/05). The catalogs are real market intelligence —
93 Databricks accelerators and 9 Snowflake industry families are a map of demand — but
the delivery unit is a recipe, not a meal: the customer still owns the exact stages
where projects die. Neither vendor can price on customer ROI because their revenue is
consumption of their platform, an *input* cost in the customer's ROI denominator; their
incentive gradient points toward more compute consumed, ours toward more return
delivered per unit of customer investment. And neither operates in the customer's
environment on the customer's terms — the accelerator exists to pull workloads deeper
into *their* environment. In the future state, every accelerator catalog is a
confirmation of our demand map and an advertisement for the gap between a pattern and
a measured outcome.

**AutoML vendors.** Automated model search compresses the modeling stage — the stage
the failure evidence consistently exonerates (evidence 12 §S6: post-mortems localize
failure in the applied layer, "far more rarely because the methodology itself was
wrong"). A vendor whose product ends at the model artifact cannot name the business
action, cannot own the measurement loop, and cannot see the ROI — so they price per
seat or per node, and the customer absorbs all outcome risk. Inside our model, automated
model search is one component inside one methodology family (kernel D5) — useful,
commoditized, and nowhere near the value.

**Copilot vendors.** The architecture is retrieval + rented inference: it can tell you
what your churn policy document says; it cannot tell you which accounts will churn,
why, and what to do about each — because it never trained on your outcomes. "If you're
not training on your data, you're not fully using AI" (evidence 06) is the permanent
dividing line: their systems plateau at what the base model knew, ours sharpen with
every run. Commercially they are seat-priced assistants whose value case is
productivity anecdotes — the segment where measurable P&L impact has been rarest
(evidence 12 §S6) — which is why they cannot and do not price on ROI. Their buyers who
want a toy are our anti-customers (kernel D3); their buyers who wanted an outcome and
got an assistant are our demand.

**Consultancies and forward-deployed models.** The only class that genuinely stands
in-environment and wires outcomes — which is why enterprises pay them platform-plus
prices — and the class whose economics we structurally invert. Their unit of production
is the expert hour: capacity scales with hiring, quality varies with staffing,
learnings leave with people, and marginal cost per deployment is flat forever. Ours is
the trained agent: capacity scales with compute, quality is a property of the gate and
the base model, learnings compound into the generalized-asset layer (kernel D7.3), and
marginal cost falls with every deployment. A consultancy offered ROI-linked pricing is
taking a wager on its roster; we are compounding on a base model that our entire
operating history trains. They can match our posture on any single account; they cannot
match a cost curve that bends down or a p(success) that rises portfolio-wide.

### 4.3 The four "not-" contrasts as future-state advantages

The website's four contrasts (evidence 06) restate as permanent structural advantages:

- **Not demoware → we sell definitions of done.** A module is not shipped until it is
  deployed in the customer environment, gated, wired to a named action, agent-operated
  under governance, and **ROI-measured against the agreed model** (kernel D6). The
  future-state advantage: our evidence base is composed entirely of measured outcomes,
  while accelerator ecosystems accumulate PoCs. Evidence quality compounds into pricing
  power (§5).
- **Not someone else's cloud → outcome custody without data custody.** We operate the
  outcome inside the customer's walls while holding none of their raw data — the only
  posture that satisfies governance-demanding buyers *and* enables agents to act on
  live systems. Vendors whose economics require workload gravity into their cloud
  cannot follow without abandoning their business model.
- **Not a web PaaS → the deploy button is table stakes, the gate is the product.**
  One-button deployment is necessary and insufficient; what deploys is a
  correct-by-construction, governed system (kernel D10.5). "Generating a workflow is
  easy. Generating a correct one is the product" (evidence 06).
- **Not just answers → assets, not sessions.** Every engagement leaves the customer
  with an appreciating asset (their trained agent, their weights) and leaves us with
  generalized learnings (kernel D7.3). Answer engines leave a chat log. The gap between
  those two residues, compounded across a portfolio and years, is the moat (§2.4).

**Positioning synthesis, one sentence:** *accelerator vendors hand you a recipe,
AutoML a model, copilots an answer, and consultancies an invoice — Orama Zetta operates
a trained agent inside your walls that delivers a measured return, and prices on it.*

---

## 5. The flywheel, rebuilt around ROI + data

v1's flywheel ran on deployed evidence. v2's runs on **ROI and data together**, because
the kernel makes them the same loop: the measurement loop that produces the ROI readout
is the same instrument that produces the agent's reward signal and the data supply
chain's outcome labels (kernel D1, D7). Seven stages, each with the quantity it moves:

```
solutions deployed ─▶ ROI measured ─▶ data collected & refined ─▶ agents improve
        ▲                                                             │
        │                                                             ▼
catalog compounds ◀─ pricing power grows ◀─ p(success) rises ◀───────┘
```

1. **Solutions deployed.** Every module that meets its definition of done (kernel D6)
   is a running, governed, agent-operated system wired to a named action — and,
   critically, an *instrumented* system: the data plan (kernel D7.1) means every
   deployment captures sources, entities, labels, the action taken, and the result
   observed. Deployment is not the end of delivery; it is the start of collection.
2. **ROI measured.** The measurement loop (holdout, uplift, or hard operating metric —
   kernel D1) emits the solution's return as a number. This single readout does triple
   duty: it is the customer's value proof, our billing instrument (kernel D8), and the
   scalar the training system optimizes toward (kernel D7.2). One number, three
   contracts — with the customer, with our revenue, with the agent.
3. **Data collected & refined.** The CDO function (kernel D7; sibling doc 08) turns
   operations into training assets: labeling, outcome attribution, drift surveillance,
   data-quality contracts. Refinement is what converts raw operational exhaust into
   reward-grade signal — the difference between "the campaign ran" and "this action, on
   this entity, produced this measured result." Per-customer data and weights stay the
   customer's; **generalized** patterns — schemas, playbooks, priors, benchmarks,
   synthetic corpora — cross into our asset base under the D7.3 boundary.
4. **Agents improve.** The customer's agent post-trains on its own accumulating
   history; the base model absorbs the generalized layer. Improvement is measured in
   the reward currency: more return captured per unit of customer investment — better
   compositions, tighter correctness adaptations, sharper decision policies, better
   escalation judgment.
5. **p(success) rises.** Improved agents and richer priors raise every driver in the
   D1 risk model: data problems are anticipated from schema priors, actionability is
   designed in from playbooks that worked, measurement designs are reused rather than
   invented, adoption patterns are known. The p(success) calibration record (kernel D9)
   is the flywheel's instrument panel: ex-ante estimates converging to ex-post outcomes
   is the proof the wheel is actually turning, not just spinning.
6. **Pricing power grows.** The D8 mechanics translate risk into price: higher
   p(success), evidenced by calibration history, carries premium anchor shares; the
   success-linked component shrinks as variance shrinks. A rising p(success) therefore
   converts directly into margin — we capture more of the expected return because less
   of it is at risk. No competitor can follow this pricing curve without our
   calibration history, because underwriting outcomes without calibrated risk models is
   how outcome-pricing bankrupts a seller.
7. **The catalog compounds.** Higher scores across the D1 calculus admit more use
   cases into the economic frontier: problems that scored marginal at lower p(success)
   clear the bar as the drivers improve — Band B entries behave like Band A, Band C
   becomes selectively attackable (kernel D4). Each admission adds deployments, which
   feed stage 1. Meanwhile module attach compounds within each account: the marginal
   module rides the data supply chain and agent fluency already in place, so its
   customer investment falls while its return holds — expansion priced to be obvious
   (kernel D8).

**The internal loop.** Orama's own automation (evidence 07) runs the same wheel with
the shortest possible measurement path: each function Orama automates on Zetta is a
deployment whose ROI is measured on our own P&L, whose data plan we control end to end,
and whose generalized learnings enter the asset base with no boundary negotiation. The
automated-business end-state and the flywheel are the same machine at two scales — the
portfolio of customers and the portfolio of our own operations both feed the base
model, and "a 100% automated portfolio of businesses" (evidence 07) is the flywheel's
asymptote.

**Why competitors can't copy the wheel.** Each stage requires custody of the previous
one. No in-environment operation → no trustworthy measurement. No measurement → no
reward-grade data. No refined data → no improving agents. No improving agents → no
rising p(success) → no calibrated basis for ROI pricing → no compounding catalog.
Accelerator vendors enter the loop with no operation; copilots with no measurement;
AutoML with no wiring; consultancies with no data asset that survives staff turnover.
The wheel is not a feature set — it is a chain of custody, and we are the only
participant whose business model holds every link (§4.1).

---

## 6. Executive decision log — CEO rationale for D1–D10

*The decisions are the kernel's; these paragraphs record why I, as CEO, am committing
the company to each.*

**D1 — The decision calculus: risk-adjusted customer ROI.** I want one number that
makes the company legible to itself, and E[ROI] × p(success) is that number. It forces
every advocate — for a use case, an industry, a methodology, an account — to state a
return, an investment, and a probability, all of which are eventually checkable against
reality. The kernel's insistence that p(failure) is first-class is the part I hold
hardest: the enterprise-AI failure record (evidence 11 §S7, 12 §S6, 14, 15) is a
graveyard of projects that scored infinite on enthusiasm and were never scored on
probability. A company that prices, selects, and trains on measured ROI is a company
whose incentives cannot silently drift away from its customers' outcomes. That
alignment is worth more than any single product decision in this document.

**D2 — Auto-RL at the center.** Committing to the agent as the product's core — not a
feature on a pipeline tool — is the decision that changes our economics in kind
(§2.3): outcomes scale with agents, not headcount, and every deployment improves the
capacity that delivers the next one. It is also the honest reading of our own promise:
"trained on your own data" is the hard part (evidence 08), and solving it with AI
itself rather than a hand-coded harness is the only version that scales past our
staffing. Methodologies-as-tools and catalog-as-action-space (D2.2) is the framing that
keeps the toolbox honest — components exist for the agent to wield, so their interfaces
and correctness profiles are specified for machine composition, not human heroics. And
D2.5 — agent actions pass the same correctness gate and governance as any graph — is
the clause that lets me sleep: autonomy is a governed capability, never an exemption.

**D3 — The customer.** Defining the customer by three structural conditions —
recurring high-value decisions, owned data exhaust, governance requirement — rather
than by vertical or size gives every seller and every agent the same screen, and it is
a screen that arithmetic can audit (each condition maps to a D1 term — §3.1). I
particularly endorse treating the governance requirement as a positive selector: our
strongest structural advantages are worth the most to buyers who are hardest for
competitors to serve. The anti-customer clause is the other half of the definition:
refusing the copilot buyer, the hold-our-data buyer, and the ownerless organization is
what keeps our evidence base measurable and our calibration honest (§3.4).

**D4 — The use-case portfolio (ROI bands, ROI dossiers, anti-portfolio).** Bands
instead of tiers-by-time is the correct future-state geometry: the catalog is a scored
map of where return concentrates, and account-level selection walks the map by D1
score. Requiring an ROI dossier per use case — pool, investment shape, p(success)
drivers, measurement design — before anything enters the catalog turns "we should do X"
conversations into reviewable documents, which is how a portfolio stays governed as it
grows. The anti-portfolio earns its place on ROI/risk grounds alone: unmeasurable,
actionless, or ungovernable problems are not small opportunities — they are negative
contributions to portfolio risk-adjusted ROI and to the calibration record (§3.4).

**D5 — The methodology portfolio (complete toolbox, single admission rule).** A
complete toolbox is the right future-state posture because the agent's competence is
bounded by its action space: gaps in the toolbox are gaps in what any customer's agent
can compose. The admission rule — a methodology belongs iff it raises the portfolio's
risk-adjusted ROI — is the factory's quality control on its own capital: it admits by
fan-out (unlocking Band-A/B use cases) or by risk reduction (raising p(success) of
existing ones), and it excludes methodology enthusiasm, including our own. Requiring
every methodology to declare its data requirements for agent training (D5 ↔ D7) is the
clause that keeps the toolbox and the fuel supply co-designed.

**D6 — Solutions: the sellable unit with an ROI contract.** The module anatomy plus
the four v2 additions — ROI model up front, named p(success) risks, agent operating
definition, data plan — makes every sale a falsifiable proposition, and the definition
of done makes every delivery a measured one. This is the anti-demoware constitution:
nothing ships that we couldn't put in front of the customer's CFO and their regulator
simultaneously. The agent operating definition deserves emphasis: writing down what the
agent does autonomously versus with approval, per module, converts the scariest part of
the sale (an agent in my environment?) into the most legible part of the contract.

**D7 — The data strategy (CDO): data → agents → ROI.** New in v2, and in my view the
decision that separates companies that *use* Auto-RL from companies that *are* an
Auto-RL business. Training data is our cost of goods; a business whose COGS is data
must manage collection and refinement as a supply chain, not exhaust (kernel D10.7) —
designed per solution, owned by an executive, quality-contracted, governed. The
reward-is-ROI clause (D7.2) is the single most elegant decision in the kernel: it
closes the loop between what customers pay for and what agents learn, making product
improvement and revenue growth the same gradient. The generalized-learning boundary
(D7.3) is the moat's legal architecture — precisely because it must survive every
customer's scrutiny, it must be defined once, centrally, by the CDO (kernel open
question 4), not negotiated per deal.

**D8 — Pricing: ROI-based.** Pricing from the customer's return rather than our cost is
the commercial expression of the whole thesis: it is only rational for a seller who can
measure outcomes credibly and move them systematically, so the pricing model itself
communicates the product claim — and prices the competition out of imitating our
posture (§4). Risk-adjustment is what makes it sustainable: premium anchor shares where
calibration supports confidence, success-linked components where variance is real,
true-ups on the same instrument the customer already trusts. The retained anchors
(Enterprise platform $500k/yr+; solutions priced as modules — evidence 07) keep us in
the value band the market already validates for delivered enterprise outcomes. The
portfolio effect (D8) — marginal module investment falls while return holds — is the
attach engine: expansion should feel to the customer like arithmetic, not persuasion.

**D9 — Metrics: ROI first.** A company measures what it is; making customer ROI the
central metric with p(success) calibration and portfolio risk-adjusted ROI as
companions declares that we are an outcomes business with an underwriting discipline.
Calibration is the metric I will personally read first: a company that knows when it is
wrong about probability is a company that can safely price on outcomes; one that
doesn't is a casino. Demoting Intelligence Velocity to supporting status was correct
and slightly painful — it is the product's name-metric — but velocity is an input to
ROI (it pulls returns forward and cuts investment), and inputs must not govern.
Guardrail unchanged and absolute: governance violations = 0. One violation converts our
best structural asset into our worst liability.

**D10 — Operating principles.** Seven lines that keep a thousand future debates short.
Future-state-only analysis (D10.1) and no-sequencing (D10.2) are decisions about
*decision quality*: arguments from "where we are" smuggle sunk costs and schedule
anxiety into questions about where to go, and the portfolio stays better-governed when
scoring and scheduling live in different rooms. ROI before everything (D10.3) and
agents at the center (D10.4) are §2 compressed. Correctness and governance as product
properties (D10.5) is the brand's constitution — never traded, never staged. Measured,
not asserted (D10.6) is the epistemology; data as supply chain (D10.7) is the
metabolism. Together they are the tiebreaker for anything the kernel doesn't
explicitly decide.

---

## 7. What must be true — future-state conditions & org implications

### 7.1 Conditions that must hold in the future state

These are not milestones — they are **standing invariants**: properties the future
state must exhibit continuously for the strategy to be sound. Each is testable, and
each names the executive who owns its truth.

1. **The measurement loop is trusted by both sides.** Customers accept the holdout /
   uplift / operating-metric readout as the value proof; our billing runs on the same
   readout; disputes are rare and resolvable by inspection of the loop's design
   (kernel D1c, D8). If measurement is contested, ROI pricing collapses into
   negotiation. *(Owner: CFO for the billing instrument; COO for measurement-design
   standards — doc 06/07.)*
2. **p(success) estimates are calibrated.** Ex-ante probabilities match ex-post
   outcomes within a stated tolerance, portfolio-wide, and the rubric that produces
   them is versioned and auditable (kernel D9; open question 3). Calibration is the
   license for risk-adjusted pricing. *(Owner: COO — doc 07.)*
3. **The correctness gate holds at agent speed.** Every graph and every agent action
   passes the gate — schema/type checks, leakage and point-in-time discipline, entity
   resolution — with block-with-a-reason semantics, at the cadence of autonomous
   operation, not human review (kernel D2.5, D10.5; evidence 06). *(Owner: CTO —
   doc 03.)*
4. **The reward channel is faithful.** The ROI signal agents train on is derived from
   the same measurement loop the customer pays on, and it is hardened against proxy
   gaming — the agent cannot improve its reward without improving the customer's
   measured return (kernel D7.2; Appendix T1). *(Owners: CDO + CTO — docs 08/03.)*
5. **The generalized-learning boundary is precise and provable.** What crosses from
   customer-specific data/weights (theirs) into generalized assets (ours) is defined
   contractually and enforced technically, and we can demonstrate compliance inside
   any customer's audit (kernel D7.3; open question 4). The moat's second layer exists
   only if the boundary survives scrutiny. *(Owner: CDO — doc 08.)*
6. **Every solution's data supply chain runs.** Sources connected, entities resolved,
   labels and outcomes captured (action taken + result observed), refinement and drift
   surveillance operating, quality contracts honored — per solution, as designed
   (kernel D7.1, D7.4). No supply chain, no improving agent, no flywheel. *(Owner:
   CDO — doc 08.)*
7. **Autonomy is governed per action class.** Each module's agent operating definition
   assigns every action class to autonomous-under-audit or approval-gated, and the
   assignment is enforced by the platform, not by convention (kernel D6c; open
   question 5). Agent autonomy share is read as a *health* indicator strictly inside
   governance bounds — never a target that erodes them (kernel D9; Appendix T4).
   *(Owners: CTO + CPO — docs 03/04.)*
8. **Zero-egress and outcome custody coexist.** We operate outcomes inside customer
   walls while holding no raw customer data centrally, and the generalized-asset flow
   (condition 5) operates within that constraint (evidence 06; kernel D3; Appendix
   T3). *(Owners: CTO + CDO.)*
9. **The catalog stays scored and the anti-portfolio stays enforced.** Every entry
   carries a live ROI dossier; refusals hold under revenue pressure (kernel D4). The
   test of the anti-portfolio is not whether we wrote it down but whether we decline
   the deal. *(Owner: CPO — doc 02.)*
10. **The company runs on its own product.** Orama's own operations are Zetta
    deployments with measured ROI, and the automated-business end-state (evidence 07)
    is continuously demonstrated on ourselves — the catalog's newest entries keep
    coming from our own automation. *(Owner: COO, with every seat contributing.)*

### 7.2 Org implications — the executive team of the future state

The org chart follows the kernel's decision structure: one seat per governing quantity.

- **CPO — owns the demand map** (doc 02, with 04 jointly). The scored catalog by ROI
  band, the ROI dossiers, the intake rubric, and the anti-portfolio. The CPO is the
  executive who says no to the off-catalog deal and keeps Band assignments honest
  against measured results.
- **CTO — owns the toolbox and the gate** (doc 03, with 04 jointly). The complete
  methodology portfolio as agent tools — each component specified for machine
  composition with a correctness profile — the correctness gate as a product property,
  and the agent platform (base model architecture, autonomy enforcement, in-environment
  substrate). Enforces the D5 admission rule against methodology enthusiasm.
- **CDO — the new seat, owning the fuel** (doc 08). Data collection and refinement as
  a supply chain: per-solution data plans, reward engineering (the ROI signal as
  training target — condition 4), outcome attribution, drift surveillance, data-quality
  contracts, and the generalized-learning boundary (condition 5). The CDO seat exists
  because in an Auto-RL business, data refinement is the cost-of-goods function and
  the moat's manufacturing line — too structural to be a sub-function of engineering
  or analytics (kernel D7).
- **CMO + CRO — own the customer definition in the market** (doc 05). CMO owns the
  positioning system: the four future-state contrasts (§4.3), "priced on your return,"
  "learning, not inference," and the discipline that every conversation opens with a
  named use case and its ROI model, never a generic platform. CRO owns account
  selection by D1 score, the ROI-contract sale (module + measurement design +
  p(success) assessment as one artifact), and attach expansion along the portfolio
  effect (kernel D8).
- **CFO — owns the pricing machine** (doc 06). Anchor-share mechanics, risk-adjusted
  premiums and success-linked structures, true-up cadence on the measurement
  instrument, module unit economics, and portfolio finance — including the reserve
  logic for success-linked revenue at the portfolio's calibrated p(success) (kernel
  open questions 1–2).
- **COO — owns the risk model and the operating fabric** (doc 07). The p(success)
  factor model and its calibration (condition 2), failure modes as priced risk
  factors, measurement-design standards (condition 1), and the operating model of the
  agent-run factory — including running Orama's own operations on the product
  (condition 10).
- **CEO — owns the kernel.** Kernel changes are deliberate, small, PR-style edits;
  tensions arrive through the appendices and resolve in the kernel first. My personal
  metric set, in reading order: portfolio risk-adjusted ROI · p(success) calibration ·
  module attach · governance violations (which must always read zero).

---

## Appendix — Tensions for kernel review

Elaborating kernel v2 surfaced four genuine tensions. None are contradictions I have
resolved unilaterally; each is recorded for kernel-level disposition per the kernel's
own protocol.

**T1 — Reward integrity vs. the billing instrument (D7.2 × D8).** The kernel makes the
measured ROI signal simultaneously the customer's value proof, our billing basis, and
the agent's training reward. The unification is the strategy's elegance, but it
concentrates incentive on one instrument: an agent trained to maximize the readout, and
a vendor paid on the readout, both benefit from measurement designs that flatter. Two
sub-risks: (a) *reward hacking* — long-horizon agents are optimizers, and if any gap
exists between the measured proxy and true customer value, training pressure will find
it; (b) *auditor independence* — who verifies the measurement loop when its output sets
our invoice? Proposed kernel addition: measurement designs are standardized and
versioned (COO), customer-inspectable by default, with agent reward derived only from
designs meeting an integrity standard — and a named audit path (internal or third-
party) for the billing readout. Owners: COO (doc 07) + CDO (doc 08) to propose jointly.

**T2 — The pricing fixed point (D1 × D8).** E[ROI]'s denominator includes the module
price; the module price is set as a share of expected return informed by E[ROI]. The
circularity is resolvable — e.g., score selection on price-exclusive return vs.
non-price investment, then set price as an anchor share of expected *net* return — but
the kernel should bless one canonical convention, because the D1 score, the D8 anchor
share, and the customer-facing ROI readout will otherwise be computed on silently
different denominators by different documents. Owner: CFO (doc 06) to propose the
convention; kernel to adopt.

**T3 — Zero egress vs. the generalized-learning flow (evidence 06 × D7.3).** The
product promises "data egress = 0 bytes" and the anti-customer clause refuses anyone
requiring us to hold raw data (D3) — yet the moat's second layer requires generalized
patterns (schemas, playbooks, priors, benchmarks, synthetic corpora, base-model
improvement) to accrue to us from in-environment operations. These are compatible in
principle (generalized ≠ customer raw data), but the kernel currently leaves the
*mechanism* undefined: what representation crosses the boundary, how it is provably
free of customer-specific information (the D7.3 boundary, kernel open question 4), and
how the crossing is disclosed so the zero-egress promise stays honest in a diligence
review. This is the strategy's most valuable asset flow and its most sensitive claim
sitting on the same wire; it deserves kernel-level language, not per-contract
improvisation. Owner: CDO (doc 08), with CTO for the technical mechanism.

**T4 — The autonomy-share metric vs. the human-gate anti-portfolio (D9 × D4).** The
kernel tracks *agent autonomy share* as a supporting metric (D9) while the
anti-portfolio excludes autonomous high-stakes decisions without human gates (D4) and
D6c requires per-module autonomy definitions. A supporting metric that rises when
agents act without intervention will, over time, exert soft pressure toward autonomy —
including at the boundary the anti-portfolio protects. The tension is manageable but
should be made explicit: autonomy share is a *within-governance-class* health
indicator (are agents using the autonomy they are granted?), never a cross-class
target (should agents be granted more?). Class-assignment changes should be governed
by the D6c/open-question-5 rubric, not by metric momentum. Proposed: one kernel
sentence stating that autonomy share is measured per governance class and is not a
maximization target. Owners: CTO + CPO (docs 03/04).

---

*End of v2. Sibling elaborations: 02 (CPO — the scored demand map) · 03 (CTO — the
toolbox and the gate) · 04 (CPO+CTO — module specs with ROI contracts) · 05 (CMO+CRO —
customers and GTM) · 06 (CFO — ROI pricing mechanics) · 07 (COO — ROI risk and the
operating model) · 08 (CDO — the data strategy). The kernel remains the spine.*
