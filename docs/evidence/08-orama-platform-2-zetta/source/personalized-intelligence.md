# Personalized Intelligence — Auto-Suggest, Auto-RL, Personalized MCP

> **It knows you and your data.** The personalization thesis: Orama Zetta doesn't just train *on* your data — it understands *you and* your data well enough to tell you what to do with it, do it the way an expert would, and shape its own interface to you. This turns *"trained on your own data"* from the scary, human-in-the-loop **risk** into the headline **capability** — solved by AI itself, not a brittle hand-coded harness.

**Status:** Concept — captured 2026-06-29 from Steve's design thread. Communicated on the marketing site (new `/technology` "04 — Personalized Intelligence" section); to be projected into the **wtm `ORAMA-ZETTA`** blueprint as features. Engine-gated like the rest of `orama-platform-2` (see [README open questions](README.md)).

## The hard part this solves

*"Trained on your own data"* is the hard part — the part that has always required a human in the loop, and the area we expect to spend most of our time and get most wrong. It is also exactly where **most AI projects quietly fail** (see [`one-pager.md`](one-pager.md) and the [`README`](README.md) "Most AI projects fail right here"), and it maps to the open **graph-correctness "elephant"** in the [README open questions](README.md): *how do we guarantee a generated solution is robust, correct, professionally architected?*

The bet here: **solve it with AI itself, not a brittle hand-coded harness** — and make the whole loop *personalized*, because the user often doesn't even know **what** to do with their data.

## The three features

Each answers one thing a user doesn't know. Together they are the *learning-from-your-data* thesis ([`one-pager.md`](one-pager.md) "Why it's different") made personal and automatic.

| The unknown | Feature | What it does |
|---|---|---|
| *"What should I even do with my data?"* | **Auto-Suggest** | Studies the user **and** their data and hands back **personalized, high-value use cases** — ranked and ready. Takes the guesswork out of using AI. |
| *"Who builds & trains it?"* | **Auto-RL** | **Auto-trains a long-horizon, tool-calling (agentic) RL agent** on the customer's data — the *"trained on your data"* hard part, done by AI rather than a hand-coded harness. The agent arrives already fluent in the customer's systems. |
| *"How do I interact with it?"* | **Personalized MCP** | The user talks to Orama Zetta over **MCP**, and the **MCP interface itself adapts to their preferences** — same endpoint, personalized tools and responses, not one-size-fits-all. |

### Auto-Suggest — the *what*
The value is highest precisely when the user **doesn't know what to apply**. Orama Zetta gets an AI to understand the user and their data, then delivers **personalized suggestions** on what's worth doing. Generating those suggested use cases is also a *prerequisite* for Auto-RL (below): the suggestions define the tasks the agent is trained to perform. *"Auto-suggest takes the guesswork out of using AI."*

### Auto-RL — the *how*, trained for you
Trains **long-horizon agentic RL (an LLM for tool-calling)** on the customer's data, to actually *do* the suggested work. This is the killer move on the hard part: it produces an agent **already trained on the customer's world**, and it does so **with AI, not brittle hand-coded harnesses** — the same insight as "correct by construction," pushed from pipelines to the agent itself. Fits the [`README`](README.md) line that the engine is *general AI (any model type — XGBoost, RL, LLM), not one method*: RL is now a first-class, automated path, not a manual one.

### Personalized MCP — the *interface*
MCP is already the [distribution form factor](../../../CLAUDE.md) (agents/clients point at one MCP endpoint). The new idea: **personalize the MCP surface per user/preferences** — the endpoint that serves an agent shapes its tools and responses to that user. Personalization runs end to end: the **what** (suggestions), the **how** (your-data-trained agent), and the **interface** (personalized MCP).

## How it's communicated (the website)

Decided 2026-06-29 (framing + placement chosen with Steve):

- **Framing:** *personalization umbrella + named features* — lead with the outcome ("It knows you and your data"), with Auto-Suggest / Auto-RL / Personalized MCP as the three named supporting features. Auto-RL is visually accented (it's the one that solves the hard part).
- **Placement:** a **new `/technology` section "04 — Personalized Intelligence"**, immediately after **"03 — Learning, not inference"** (the section the homepage hero's *"trained on your own data"* link points to via `#learning`). 03 raises the hard part; 04 delivers the answer. "The name" renumbered 03 → 05.
- **Implementation:** `modules/amaro-marketingsite/src/pages/Technology.tsx`, section `id="personalized"`, on branch `feat/orama-zetta-site`.

Naming note: we use the `Auto-*` family deliberately (consistent with the site's *auto-AI* / *auto-ANI* category framing in [`one-pager.md`](one-pager.md)). This is distinct from the standalone "auto-ANI" homepage band, which was pulled on 2026-06-26 — the *concept* stays in the category framing; only that band was removed.

## Relationship to the rest of `orama-platform-2`

- **Sharpens the "learning from your data" differentiator** ([`one-pager.md`](one-pager.md) "It learns from your data") — from *we train on your data* to *we figure out what's worth training, train it for you, and personalize the result.*
- **Addresses the graph-correctness elephant** from the [README open questions](README.md): Auto-RL is the AI-driven path to a correct, trained solution without a hand-coded harness — but it raises its own validation/eval question (see below).
- **Feeds the AI-project framing** ([`README`](README.md) "the central item is the AI/data project"): Auto-Suggest proposes the **use cases** (generic AI-project types); Auto-RL instantiates one as a trained agent.
- **Personas** ([`personas.md`](personas.md)): Auto-Suggest is most valuable to the *waiting analyst* who has data but not the "what"; Auto-RL relieves the *bottlenecked platform/AI lead* and the *by-hand data scientist*.

## Open questions

- **Eval gate for Auto-RL.** "With AI, not hand-coded harnesses" still needs a correctness/eval bar before a trained agent is trusted or deployed — the same gate as generated graphs. What does it look like for an RL-trained agent?
- **Data/compute cost of training RL per customer.** Long-horizon agentic RL is expensive; how does this sit against Orama Zetta's *transformational cost* story (tiered storage, compute-near-data, fused kernels)?
- **Auto-Suggest grounding.** How are suggestions kept grounded in the customer's real data + governed (not hallucinated use cases)? Ties to the fidelity/correctness thesis.
- **Personalized MCP scope.** Per-user preference model — where do preferences live, how are they learned, and how does personalization interact with governance/identity scoping?
- **Sequencing vs the engine gap.** Same gating risk as the rest of the project — what's the minimum engine surface for a first Auto-Suggest/Auto-RL slice?

## Source

Steve Sperandeo's 2026-06-29 design thread:
- *"Trained on your own data is absolutely the hard part… If we get anything wrong, it will be in that section."*
- *"Auto RL training and auto suggest"* — (1) trains long-horizon agentic RL for tool-calling on their data; (2) requires generating suggested use cases on what to do with their data; (3) serves those back as auto-suggest. *"Auto-suggest takes the guesswork out of using AI."* *"Auto RL solves the 'trained on your own data' hard part… with AI itself (no brittle, hand-coded harnesses)."*
- *"Even if the user doesn't know what to apply, they can get an AI to understand them and their data, then deliver personalized suggestions."*
- *"Personalized MCP — you can talk to Orama Zetta with MCP, but it'll personalize the MCP interface based on your preferences."*
