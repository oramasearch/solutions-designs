# Vocabulary — use case · solution · methodology

Three terms govern this exercise. They are **distinct**; keep them so in every doc.

## Definitions

- **Use case** — *the problem we're solving.* A real-world enterprise problem, stated
  independently of any particular way of solving it (e.g. **churn**).
- **Methodology** — *the AI methods we arrange to formulate into a solution to a use
  case.* The composable sequence/graph of methods — extract → feature-engineer → train →
  explain → report — described abstractly, apart from any one deployment.
- **Solution** — *how we solve that problem.* A methodology **applied** in a correct,
  real-world setup and **connected to a business outcome** — i.e. the methodology made
  correct-by-construction for the situation, and wired to the action that changes the
  business.

## Relationship

A **use case** (the problem) is answered by a **solution** (the how), and a solution is
a **methodology** (arranged AI methods) applied correctly and tied to an outcome.

```
use case ──── solved by ────▶ solution ──── composed from ────▶ methodology
(the problem)                 (how we solve it)                 (arranged AI methods)
```

The same **methodology** can serve many use cases; a **solution** is that methodology
instantiated for one use case, made correct for the real conditions, and joined to the
business action that realizes the value.

## Worked example — churn

- **Use case:** churn analysis. *(The problem: which customers will leave, and why.)*
- **Methodology** *(the arranged AI methods):*
  1. Extract tabular data.
  2. Perform feature engineering to create model input features.
  3. Train XGBoost to build a model with predictive power.
  4. Do SHAP analysis, using that predictive model, to measure feature importance.
  5. Which then produces a report.
- **Solution:** that methodology **applied in a timeseries-appropriate setup to prevent
  data leakage**, then **use the report to change the business to mitigate or reduce
  churn**. *(The methodology made correct for real time-ordered data, plus the business
  action that turns the report into reduced churn.)*

## Cardinality & reuse

The three layers do **not** map one-to-one, and that asymmetry is the point:

- **Methodologies are the reusable layer.** The same methodology — and especially its
  individual **components** (extract, feature-engineering, model training, explanation,
  reporting) — is reused across many different use cases to formulate many different
  solutions. We compose solutions largely out of methodology parts we already have.
- **Expected ratios:** use case → solution is roughly **1:1** (each use case tends to get
  its own tailored solution), but there are **far fewer methodologies** than use cases or
  solutions. So across the catalog: **many use cases ≈ many solutions ≫ few
  methodologies.**
- **The tabular methodology dominates.** The worked example above (extract tabular data →
  feature-engineering → XGBoost → SHAP → report) is the **single most common
  methodology**, because it is essentially *the* standard approach for **tabular data** —
  and **tabular data constitutes the majority of business data**. Expect this methodology,
  or its components, to underpin a large share of the solutions in this exercise.
