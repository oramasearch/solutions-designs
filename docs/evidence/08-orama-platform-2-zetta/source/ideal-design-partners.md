# Orama Zetta — Ideal Design Partners

**Status:** Researched — 2026-06-26. Validated via a **3-model research council** (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro), each independently researching the brief. Raw output: [`research/model-council-synthesis.md`](research/model-council-synthesis.md). This doc is the **actionable synthesis** — the decision, the program design, the ICP + scorecard, ranked verticals, the candidate shortlist — reconciled against our prior hypothesis. The reusable research prompt is in the appendix.

> Companion docs: [`vision-and-strategy.md`](vision-and-strategy.md) (the wedge + target users), [`personas.md`](personas.md) (the champion), [`success-metrics.md`](success-metrics.md), and the Motive wedge ([`../motive-delivery/`](../motive-delivery/), [`../motive-problem-definition/`](../motive-problem-definition/)).

---

## TL;DR — the decision

- **Run a small, PAID, tightly-scoped first cohort: ~3–6 design partners.** Not a wide free beta.
- **Target late mid-market / lower-enterprise regulated firms** (~1,000–25,000 employees, ~$500M–$10B revenue) — **not** megabanks or defense primes as the first partners.
- **Top verticals: financial services / banking (#1), insurance (#2), healthcare / life sciences (#3 — close).** Second wave: manufacturing · logistics/fleet · telecom (pick by warm intro).
- **The wedge is two things at once:** lead *positioning* with the **production-gap + governance** story; prove it first on a **low-liability use case** (predictive maintenance / forecasting / triage — human-reviewed, never autonomous high-stakes).
- **Champion = the prototype-to-production owner** (Head of ML Platform / MLOps Lead / AI Platform Lead / VP Data Engineering) + a business sponsor — *not the CDAO alone*.
- **Protect the roadmap:** ship exactly **one reference architecture per environment class** (regulated cloud VPC, K8s private cloud, bare-metal/on-prem GPU) before widening.
- **Motion:** build a **~50-account list** → ~20–30 discovery calls → qualify on the scorecard → convert **3–5 paid partners**, ideally one FS/insurance, one healthcare, one operational. Each scoped to **one use case + one environment + one KPI, ~12–16 weeks**, under a **120-day phased program**. Lead every outreach with **one named use case**, never a generic "AI platform" demo.

---

## Findings

### Settled — all three models converge (treat as reliable)

- **Small, paid, tightly-scoped first cohort (~3–6).** Enterprise infra partners are high-touch (~10–15 founder hrs/wk each); paid pilots fit mission-critical, compliance-touching software.
- **Pricing:** ~**10–25% of expected ACV**, credited toward year-one conversion — creates commercial gravity and a clean conversion gate.
- **Scope:** one narrow predictive use case · one data domain · one deployment environment · one measurable KPI, time-boxed ~12–16 weeks.
- **Verticals:** **FS/banking #1, insurance #2, healthcare/life sciences #3** — unanimous. Our primitives (own-data training, in-environment deploy, auditability, model validation, approval gates) map ~1:1 onto **GLBA + SR 11-7 model-risk** (banking), the **NAIC AI Model Bulletin** (insurance), and **HIPAA** (healthcare).
- **IP split:** customer owns their data + customer-specific weights; we own the engine, connectors, templates, and generalized learnings. Avoids the bespoke-SI trap.
- **No broad/vertical exclusivity** — at most a narrow 3–6 month feature-preview right (exclusivity blocks cross-partner pattern recognition).
- **Champion = the prototype-to-production owner** (Head of ML Platform / MLOps Lead / AI Platform Lead / VP Data Eng) + business sponsor — not the CDAO alone.
- **Cloud-cost / repatriation / FinOps pressure is a real buying trigger** — framed as intelligent *workload placement*, not anti-cloud.
- **Anti-ICP (hard filters):** AI-tourist innovation labs with no production owner · SMBs without platform teams · prospects who really want an LLM copilot / RAG search · anyone demanding we take raw data into *our* cloud · direct federal/classified deals as a *first* cohort.

### Resolved divergences (the council's recommended resolution)

- **Program structure →** 3–6 paid *active* partners now + a **20–40 account discovery bench** feeding them; expand to 8–12 only after deployment patterns repeat. (An optional monthly "validation council" only if founder bandwidth allows.)
- **#4–5 verticals →** manufacturing / logistics-fleet / telecom are a high-fit **second wave** below the FS/insurance/healthcare top tier; their exact order is low-stakes — **pick by strongest warm intro**, not marginal rank.
- **The wedge →** use **both**: lead *positioning* with the **governance / production-gap** wedge (Gemini), and choose a **low-liability use case** for the first technical proof (Opus). Start partners on human-reviewed prediction / triage / forecasting, never autonomous high-stakes decisions.
- **Firmographics →** default **~1,000–25,000 employees, $500M–$10B revenue** (lower band = access speed pre-PMF); keep a higher ceiling for the occasional warm-intro lighthouse.
- **Scorecard mechanics →** weighted-100 vs 0–3 rubric is cosmetic; all gate identically on **"no disqualifier + a strong, budget-adjacent champion."**

### Sharpest evidence worth banking

- **Databricks:** orgs using AI-governance tooling move **>12× more projects to production**; evaluation tooling ~6× more → **governance is the wedge, not a feature.**
- **CIO.com:** **67%** of enterprise leaders plan to move some AI data **off public cloud within 12 months**. **Flexera:** 84% struggle to manage cloud spend; **~21% of workloads repatriated in 2025.**
- **OCC model-risk guidance bites hardest at banks > ~$30B assets** — a clean targeting threshold.
- **One reference architecture per environment class** (GPT) before widening — the single best execution guardrail against the bespoke-integration death spiral.
- **Vancouver-adjacent warm path:** TELUS / Canadian telecom under data-residency pressure (the team is in Vancouver).
- **Buyer vocabulary:** IDC's "AI sovereignty" (control across data, infra, ops, lifecycle — not just data location); Mayo's "Data Behind Glass" federated model.

### Design-partner selection scorecard

Gate on **no disqualifier + a strong, budget-adjacent champion.** Score each candidate:

| Must-have (all required) | Strong-fit signal (the more the better) | Disqualifier (any = pass) |
|---|---|---|
| A **named, urgent, high-value** predictive use case (dollar attached) | Governance / residency pressure (regulated vertical) | Wants an **LLM copilot / RAG search**, not a trained model |
| **Accessible, labeled** data for that use case | Cloud-cost / repatriation / FinOps pressure | Demands we hold **raw data in our cloud** |
| A **real VPC / K8s / on-prem** deployment surface | On-prem GPU investment or multi-cloud footprint | **No platform team** / no prototype-to-production owner |
| A **strong champion** (prototype-to-production owner) | A live, stuck prototype (notebook / automation tool / LLM-only) | "AI tourist" innovation lab, no production mandate |
| **Economic-buyer access** + budget | Exec ("internal intelligence platform") mandate | Federal / classified as a *first* deal; procurement that outlasts the pilot |
| Can **start fast** (~30–60 days) | Late mid-market / lower-enterprise size band | SMB without budget; or so large the cycle buries a pre-PMF product |

### The 120-day program (adopt as the operating playbook)

**Qualify → Secure environment setup → Build + govern → Shadow production → Convert**, with an exit artifact per phase. The **"shadow production"** phase proves lift without unsafe automation (run predictions alongside the human process, measure, then graduate).

### Candidate shortlist

- **Inner-ring (true first targets) — archetypes, sourced for access speed:** regional / mid-market **banks (~$30B+ assets)**, **specialty insurers / MGAs**, **integrated health systems (IDNs)**, plus **one operational account** (logistics/fleet or manufacturing) for the low-liability deployment proof.
- **Lighthouse / validation accounts (later, warm-intro only):** Capital One, Discover, The Hartford, Travelers, Progressive, USAA, Mayo Clinic Platform, Cleveland Clinic, Kaiser/Optum, Maersk, UPS, J.B. Hunt, Ryder, Verizon, AT&T, **TELUS**, Siemens/Bosch/Caterpillar, Shell, investor-owned utilities. (Discover and Capital One have *public* AI-governance / policy-enabled-K8s mandates — tailor outreach to those.)
- **Sourcing channels (practitioner-first, not lead lists):** MLOps Community, KubeCon / CNCF, NVIDIA GTC, Money20/20, InsureTech Connect, HIMSS, FinOps X.

---

## Reconciliation vs. our pre-research hypothesis

| Our hypothesis | Verdict | Update |
|---|---|---|
| FS / insurance Tier 1; healthcare Tier 2 | **Confirmed + sharpened** | Healthcare is a **close #3** (top tier), with the caveat of longer cycles. |
| Logistics/fleet Tier 1 (the Motive wedge) | **Reframed** | Logistics is a **second-wave** vertical for *value*, **but** the recommended **low-liability first technical proof** — so it stays strategically central, just repositioned. |
| Mid-to-large enterprise (~1k–10k+) | **Sharpened** | Default band **~1,000–25,000 employees, $500M–$10B revenue**; late mid-market / lower-enterprise, **not** megabanks/primes first. |
| Champion = senior platform/AI lead + exec | **Confirmed** | Specifically the **prototype-to-production owner** + a business sponsor; **not the CDAO alone**. |
| Anti-ICP (no residency need / no use case / no champion) | **Confirmed + expanded** | Add: LLM-copilot/RAG-only; anyone wanting us to hold raw data; federal/classified first. |
| Drivers: residency, cost, governance | **Confirmed, with hard evidence** | Governance = the wedge (Databricks >12×); repatriation is real (CIO.com 67%, Flexera 21%). |
| *(new)* | **New** | Paid pilots @ 10–25% ACV · 3–6 partners · 12–16wk scope · IP split · no exclusivity · **one reference architecture per environment class** · the 120-day program. |

---

## Open questions (several now answered)

- ✅ **How many design partners?** ~3–6 paid active (+ a 20–40 discovery bench).
- ✅ **Paid vs free?** Paid, ~10–25% of expected ACV, credited to conversion.
- ◻ **Which single low-liability use case** leads the first technical proof (predictive maintenance? forecasting? a churn-style triage)?
- ◻ **Which vertical for the very first partner** — FS, insurance, or healthcare — given warm-intro availability (incl. the Vancouver / TELUS path)?
- ◻ **Map the ~50-account list** to real warm intros and run the discovery calls.

---

## Sources

3-model council ([`research/model-council-synthesis.md`](research/model-council-synthesis.md)). Key evidence: [GrowthX pilot guide](https://growthx.com/blog/founder-guide-pilot/), [Allston Labs design partners](https://allstonlabs.com/library/design-partners/case-for-design-partners), [FTC GLBA](https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act), [Fed SR 11-7](https://www.federalreserve.gov/supervisionreg/srletters/SR1107.htm), [NAIC AI](https://content.naic.org/insurance-topics/artificial-intelligence), [Databricks governance/eval](https://www.databricks.com/blog/enterprise-ai-agent-trends-top-use-cases-governance-evaluations-and-more), [Flexera cloud spend](https://www.flexera.com/about-us/press-center/new-flexera-report-finds-84-percent-of-organizations-struggle-to-manage-cloud-spend), [CIO.com cloud repatriation](https://www.cio.com/article/4012882/cios-rethink-public-cloud-as-ai-strategies-mature.html).

---

## Appendix — the research prompt (reusable)

Run in **Perplexity Deep Research** mode (or fan out across models as a council). Generic on purpose — describes the product category and ICP, names no design partner or confidential detail.

> Act as a GTM / market-research analyst. I run an early-stage enterprise software startup and need to identify and prioritize **design partners**.
>
> **The product (context):** a desktop control plane + engine that turns a plain-language problem (or an existing workflow / notebook) into a **production-grade, narrow predictive AI system** — e.g. customer churn, fraud, credit / underwriting risk, demand forecasting, predictive maintenance, lead scoring — **trained on the company's own data** (not inference over a rented frontier LLM). It **deploys onto the customer's own infrastructure** (Kubernetes, AWS / GCP / Azure / Oracle Cloud, on-prem, bare metal) with enterprise governance: **data never leaves the firewall**, identity-scoped access, full audit trail, approval gates. It runs **heterogeneous "true hybrid" compute** (CPU / GPU / ASIC across vendors; multi-cloud + on-prem) optimized for **cost, governance, and accuracy**. It exists to close the **prototype-to-production gap** — replacing hand-built prototypes (automation tools, notebooks, LLM-only scoring) that prove an idea but never become correct, governed, deployed systems.
>
> Deliver a structured report with citations: (1) design-partner program best practices (count, stage/size, paid vs free, scope, exclusivity, IP, success criteria, timeline, common mistakes); (2) the **ICP for a design partner** (firmographics, technographics, organizational + pain signals, sponsorship) — distinguished from the eventual *buyer* ICP; (3) **ranked target verticals** (FS/banking, insurance, healthcare/life-sciences, logistics & transportation/fleet, telecom, manufacturing, energy/utilities, government/defense, retail, tech/SaaS) with rationale weighing data residency/sovereignty, regulatory/compliance (SOX, HIPAA, GDPR, PCI-DSS, GLBA, FedRAMP), proprietary-data sensitivity, cloud/warehouse cost, multi-cloud/heterogeneous hardware, and prototype-to-production gaps — plus canonical high-value use cases per vertical; (4) a **selection scorecard** (must-haves, strong-fit, disqualifiers); (5) the **champion profile** per vertical + how to reach them; (6) **buying/readiness signals**; (7) the **anti-ICP**; (8) a **shortlist of 15–25 candidate companies or archetypes** + where to source them. Format with a ranked vertical table and a scorecard table. Cite sources throughout.
