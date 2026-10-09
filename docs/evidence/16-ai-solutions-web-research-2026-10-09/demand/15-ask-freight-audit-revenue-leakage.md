# 15 — perplexity_ask — freight invoice audit and accessorial revenue recovery

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** "AI freight invoice audit and accessorial / revenue leakage recovery for shippers and trucking carriers (e.g. Freehand, Loop, Trax, and carrier-side unbilled detention and accessorial detection): how does it work, what data does it need, what percentage of freight spend or revenue is typically recovered, and how is it priced (contingency share of savings, per invoice, subscription)?"
- **Timestamp (UTC):** 2026-10-09T20:32:38Z

## Response

````markdown
AI freight audit compares what was **billed** with what was **contracted and actually performed**. Shipper tools such as Loop and Freehand check invoices against rates, accessorial terms, shipment records, and policy rules; they flag exceptions and may handle disputes through resolution. The same basic idea works in reverse for carriers: compare completed loads and operational events with invoices to find billable charges that were never invoiced. [1][2][6]

## How it works

- **Ingest and extract:** Import carrier invoices and shipment documents, then extract charges and key fields. Loop says it can read invoices in varying formats and pull out charge details. [2]
- **Match shipment, terms, and evidence:** Link invoice lines to shipment records and compare them with contracted or spot rates, accessorial schedules, discounts, service terms, and required documentation. [2][6]
- **Detect discrepancies:** For shippers, this can mean incorrect rates, duplicate bills, or unsupported or mispriced accessorials. For carriers, the analogous checks look for qualifying events—such as detention—that appear in operational data but are missing from the invoice. [2][6]
- **Resolve or bill:** Route exceptions for review or dispute them with the counterparty. Loop describes opening and tracking carrier disputes; carrier-side recovery typically means substantiating the missing charge and adding it to a customer invoice or claim. [2]

## Data it needs

At minimum, an effective system needs:

- **Invoice data:** invoice and line-item charges, dates, carrier/customer, shipment references, and payment or dispute status.
- **Rate and contract data:** lane or shipment rates, fuel rules, accessorial rates, discounts, exceptions, and customer-specific billing terms. [2][6]
- **Shipment and execution data:** load identifiers, pickup/delivery details, service level, and the records needed to verify whether a charge was valid. [2][6]
- **For carrier-side accessorial recovery:** event evidence such as arrival/departure or gate timestamps, appointment and tender details, detention/free-time rules, stop or layover records, and supporting documents. This is the operational counterpart to matching charges against shipment details and terms; exact requirements vary by accessorial and contract.

Data quality and linkability matter: if invoice lines, rate terms, and shipment events cannot be reliably joined, the tool may find fewer defensible exceptions or send more cases for manual review.

## What is typically recovered?

For **shipper-side overcharges**, vendor-published figures vary. Freehand cites roughly **1.5–2.5% of freight spend** as recoverable through full-coverage audit, while Loop materials cite **2%** in one product claim and **2–7%** in a comparative marketing page. These are vendor claims, not a universal benchmark; actual results depend on existing controls, freight mix, contract accuracy, and how much of the invoice population was already audited. [3][5][9]

For **carrier-side unbilled accessorials**, the sources available here do not establish a reliable industry-wide recovery percentage. It is better to measure the share of eligible, documented accessorial events that were omitted, then track what gets accepted and collected; “identified” revenue is not necessarily cash recovered.

## How pricing works

Common models include:

- **Per invoice or transaction:** fee scales with documents processed; common in audit and payment services. [9][10]
- **Share of recovered savings:** provider earns a negotiated percentage of validated savings or recovered claims. This aligns fees with results, but the contract should define eligible claims, baseline, dispute outcomes, and whether credits or avoided payments count.
- **Subscription or volume-based software pricing:** recurring fee, often tied to invoice volume rather than user seats. Freehand says it prices by invoices processed; exact terms are quoted. [10]

Ask vendors to separate **gross exceptions found**, **validated disputes**, and **cash or credits actually recovered**, and to specify whether the fee applies to each.

Citations:
[1] https://www.loop.com/solutions/freight
[2] https://www.loop.com/capabilities/freight-and-parcel-audit
[3] https://www.freehand.ai/articles/freight-audit
[4] https://www.freehand.ai/articles/freight-procurement
[5] https://www.loop.com/plp/automate-audit-and-pay-workflows
[6] https://www.loop.com/technology/loop-ai
[7] https://www.loop.com/solutions/air
[8] https://www.freehand.ai/articles/freight-audit-and-payment
[9] https://www.freehand.ai/articles/best-ai-freight-audit-and-payment-software
[10] https://www.freehand.ai/solutions/freight-audit-and-payment-software
````
