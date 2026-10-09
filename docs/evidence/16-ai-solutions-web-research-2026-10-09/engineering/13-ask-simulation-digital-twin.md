# 13-ask-simulation-digital-twin

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** What are documented production uses of discrete-event simulation and digital twins combined with machine learning for business decisions (warehouse and distribution center design, call center staffing, hospital patient flow and bed management, supply chain what-if planning, manufacturing line throughput)? Name companies and vendors (AnyLogic, Simio, FlexSim, Amazon, Grab, DoorDash, Uber simulation platforms) and reported results such as capacity gains, cost savings or avoided capital spend.
- **Timestamp (UTC):** 2026-10-09T20:39:54.029Z

## Response (verbatim)

````
Documented examples show that **simulation and digital twins are used for concrete planning decisions**, but the evidence varies: some cases combine discrete-event simulation (DES) with machine learning, while others use simulation alone or describe machine learning as a future step. The reported outcomes below should not be treated as proof that every deployment used ML in production.

| Business decision | Company / platform | What was documented | Reported result |
|---|---|---|---|
| **Warehouse productivity and layout** | Intel / AnyLogic, with Ormae | A warehouse model tested workforce deployment, product placement, and automation scenarios.[3] | A proposed storage change was associated with **30% higher productivity**; another scenario picked **15% more boxes** and placed **40% more**.[3] |
| **Warehouse space planning** | Mahindra & Mahindra / AnyLogic | Simulation used SAP data and tested storage strategies and capacity assumptions.[8] | Planning time fell from days to **10–15 minutes**; the case reports improved forecasting and storage allocation, but no capital-savings figure.[8] |
| **Distribution and supply-chain planning** | AnyLogic digital-twin case | A DES model represented suppliers, distribution centers, and final-mile sites; Monte Carlo simulation forecast order-to-delivery times. The case says reinforcement learning was a planned next step, not an already deployed result.[6] | Reported **57% improvement in forecast accuracy** and **20% lower inventory-allocation logistics costs**; these are stated expected benefits.[6] |
| **Manufacturing capacity and investment planning** | Production/logistics planning case / AnyLogic | Simulation and optimization smoothed demand and tested production and storage configurations.[1] | The case reports about **40% lower required capacity** for critical production resources, equivalent to **millions of euros in avoided investment**, plus about **20% fewer storage transport/handling operations**.[1] |
| **Production-line control with machine learning** | AnyLogic + Pathmind deep reinforcement learning | A digital twin of a production process was used to train a policy for moving workpieces and avoiding bottlenecks.[5] | The case reports successful bottleneck avoidance and financial savings, but does **not** quantify the savings or throughput gain.[5] |
| **Manufacturing line planning** | Conaprole / AnyLogic | DES scenarios assessed seasonal demand, SKU production, line capacity, stock-outs, and warehouse constraints.[2] | The company used the model to improve capacity planning and line utilization; the published case gives no numerical capacity or cost result.[2] |

These examples support warehouse design, supply-chain what-if planning, and manufacturing capacity decisions. The available results do **not** substantiate specific production deployments or measured outcomes for **call-center staffing, hospital patient flow/bed management, Simio or FlexSim**, or simulation platforms at **Amazon, Grab, DoorDash, or Uber**. Simio’s surfaced case listing does mention a consultancy reporting **$66 million in value** for last-mile network optimization, but the available details do not establish an ML component or a direct company deployment.[7]

Citations:
[1] https://www.anylogic.com/upload/iblock/d81/d8150856167198f702eefc8a7e3c3eac.pdf
[2] https://prd.anylogic.cn/resources/case-studies/simulating-ice-cream-production-recognizing-constraints-and-optimizing-production-plan/
[3] https://prd.anylogic.cn/resources/case-studies/intel-s-warehousing-model-simulation-for-efficient-warehouse-operations/
[4] https://prd.anylogic.cn/warehouse-operations/
[5] https://www.anylogic.com/resources/case-studies/better-decision-making-with-manufacturing-simulation-digital-twin-technology-and-ai/
[6] https://www.anylogic.com/resources/case-studies/order-to-delivery-forecasting-with-a-smart-digital-twin/
[7] https://www.simio.com/case-studies
[8] https://www.anylogic.com/resources/case-studies/warehouse-optimization-mahindra-mahindra-enhances-space-utilization/
[9] https://prd.anylogic.cn/resources/case-studies/highly-automated-production-line-planning-and-optimization/
[10] https://www.simio.com/case-studies/tag/healthcare

````
