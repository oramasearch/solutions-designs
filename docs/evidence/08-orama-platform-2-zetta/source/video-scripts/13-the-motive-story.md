# Script 13 — "The bottleneck has a name" (the Motive story)

> ⚠️ **INTERNAL — design partner under NDA.** This script names **Motive** and **Charles** and describes their internal system. **Do not publish externally** without Motive's written consent. For any public use, shoot the **anonymized variant** at the bottom of this file.

| | |
|---|---|
| **Runtime** | ~2:10 |
| **Audience** | Sales prospects / investors (internal narrative) |
| **Purpose** | Make the thesis concrete with a real, recognizable case |
| **Tone** | Documentary; honest; a builder's respect for what Charles made |
| **Music** | Understated doc score; warms at the turn |
| **Distribution** | ⚠️ Internal only (see banner) |
| **Source briefs** | [`../briefs/13-the-motive-story.md`](../briefs/13-the-motive-story.md), [`../../../meetings/2026-06-03-casey-charles-issac-juan-matt-nathanael-steve/charles-n8n-workflows.md`](../../../meetings/2026-06-03-casey-charles-issac-juan-matt-nathanael-steve/charles-n8n-workflows.md) |

---

### SCENE 1 — THE MANDATE  [0:00–0:16]
**VISUAL:** A big company at scale — fleets, screens, a packed floor. Then one engineer's desk inside it.
**VO:** "Motive is five thousand people. The CEO wants one answer above all others: which mid-market customers are about to leave — and why. That question landed on one engineer's desk. Charles."
**SUPER:** *A true story. Shared with permission. (internal)*

### SCENE 2 — WHAT HE BUILT  [0:16–0:38]
**VISUAL:** Charles's real architecture, animated honestly: n8n pulling comms out of Snowflake → an LLM (Gemini) summarizing them into "churn signatures" → a database → a scorer rating active accounts → a calibration loop checking itself over time.
**VO:** "So he built something. Communications out of Snowflake, summarized by an AI into churn signatures, scored against every active account, calibrated against what actually happened. It's clever. It works. And here's the problem with it working."

### SCENE 3 — THE TWO TRAPS  [0:38–1:02]
**VISUAL:** Two things highlight on the diagram. First: a glowing arrow showing *every* path runs through Charles. Second: zoom on the "AI summarize" step — a label appears: *pattern-matching, not a trained model.* A scorecard flashes: **his model ~high-90s · a quick check came back 75%.**
**VO:** "First — it's his. Only he can really run it, so the whole company waits on one person. Second — the intelligence is a language model guessing, not a model that learned from the data. The tell? His risk numbers ran in the high nineties, where a fair check came back at seventy-five. That gap is the sound of a model that isn't actually learning."
**SUPER:** *Bottleneck + no real predictive power*

### SCENE 4 — THE TURN  [1:02–1:30]
**VISUAL:** Charles's n8n JSON dragged into Orama Zetta. It re-draws as a clean execution graph — and the "AI guess" node is replaced by a *trained, explainable model* node, with a validation pass (leakage check, point-in-time check) ticking green.
**VO:** "This is the exact problem Orama Zetta is built for. Hand it the workflow he already made. It re-architects it — correctly — and swaps the guesswork for a real model: trained, explainable, checked so it can't cheat. Same idea Charles had. Done the way a data scientist would do it."

### SCENE 5 — DEPLOYED, GOVERNED, OFF HIS PLATE  [1:30–1:52]
**VISUAL:** Deploy → nodes stand up *inside Motive's firewall*, behind Okta. A developer — not Charles — downloads the build and runs it. Charles, in the background, visibly not in the loop.
**VO:** "Then it deploys inside Motive's own walls, behind their own login. His developers run it themselves. The data never leaves. And Charles — for the first time — isn't the manual step. Same churn problem he'd been hand-cranking, now fast, correct, governed, and off his plate."

### SCENE 6 — THE WEDGE  [1:52–2:10]
**VISUAL:** One deal closes (a checkmark). Then it multiplies — a row of identical deployments lighting up across a network of companies.
**VO:** "Land one company, on one painful question, and prove it. The second one is a fraction of the work of the first. That's not just a customer. That's a motion. Orama Zetta — intelligence velocity, one enterprise at a time."
**SUPER:** *Orama Zetta — Intelligence Velocity for Big Thinkers*

---

## Anonymized public variant (use this for any external cut)

Swap the specifics; keep the arc. No customer, no person, no internal numbers.

- **S1 mandate:** "A five-thousand-person company. One question from the top: which mid-market customers are about to leave — and why."
- **S2 what they built:** "Their platform lead built it by hand — data out of the warehouse, summarized by an AI, scored against every account."
- **S3 traps:** keep *both* traps but drop the exact figures: "Only one person could run it — so everyone waited. And the scoring was a language model guessing, not a model that had learned from the data." (No "75% vs high-90s.")
- **S4–S6:** unchanged in substance — import → re-architect with a real model → deploy in their firewall → repeat — with no name on screen and no real workflow shown.

> Even anonymized, run any external cut past the design partner if the description is recognizable.
