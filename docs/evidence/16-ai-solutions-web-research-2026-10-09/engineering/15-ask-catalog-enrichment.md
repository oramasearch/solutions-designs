# 15-ask-catalog-enrichment

- **Tool:** `mcp__perplexity__perplexity_ask` (search_context_size: high)
- **Query:** How are AI and LLMs used in production for product catalog enrichment and product information management at distributors, wholesalers and retailers in 2024-2026: extracting attributes from supplier spec sheets and PDFs, normalizing taxonomy, generating descriptions, matching duplicate SKUs? Give named company examples (e.g. Instacart, Walmart, Grainger, Ferguson, Zoro, Wayfair, Delivery Hero, Salsify, Akeneo, Syndigo customers) and reported results such as time to list new products, attribute coverage, search conversion lift.
- **Timestamp (UTC):** 2026-10-09T20:40:24.363Z

## Response (verbatim)

````
In 2024–2026, production catalog AI is being used mainly to turn messy supplier and item data into structured, searchable product records: extracting attributes from PDFs and images, filling gaps, mapping fields to taxonomies, drafting descriptions, and finding duplicates. Publicly reported evidence is strongest for Walmart, Instacart, Salsify customer Kerry Group, and Delivery Hero; the examples do **not** provide comparable, audited measures of search-conversion lift or attribute coverage.

## Named production examples

- **Walmart:** CEO Doug McMillon reported that generative AI had improved **850 million product-catalog data points** by August 2024, at a pace he said would have required **100 times the human workforce** to accomplish manually in the same timeframe. The reported figure is data points improved—not 850 million products—and the disclosure did not specify a product-listing-time or conversion lift.[2]

- **Instacart:** The company describes LLM use in production catalog pipelines to detect and fix errors such as inaccurate product sizes, and to add item attributes that support customer choice and search relevance.[8] In November 2025, it announced Catalog Engine for retail partners, using vision-language models plus human review to extract and verify nutrition, ingredients, allergens, health tags, taxonomy, and other details. Instacart said its system had processed **over 1.3 billion data points** and was designed to identify duplicates; it did not report a quantified conversion lift or end-to-end listing-time reduction.[9]

- **Kerry Group using Salsify:** Kerry used Salsify’s AI workflow tools to generate titles and descriptions in its brand voice and extract information from PDFs or packaging images, including nutrition details, with human validation. Kerry reported product validation falling from **20–30 minutes to about five minutes**, and a product launch taking **one day rather than two to three days**.[5]

- **Delivery Hero:** A publicly described 2023–2024 project used a multilingual transformer for category recommendations and competitor-product categorization, multimodal text-and-image classification for attributes such as vegan, gluten-free, and halal, and product matching across Delivery Hero and competitor catalogs. The available description names the systems and use cases but gives no measured coverage, time savings, or conversion result.[10]

## What these systems do in practice

1. **Extract:** Models read supplier spreadsheets, spec sheets, PDFs, and packaging images to propose structured values such as dimensions, ingredients, nutrition, materials, and compatibility.
2. **Normalize:** Classification and mapping systems align supplier wording and categories to a retailer’s or distributor’s product schema and taxonomy.
3. **Enrich:** LLMs draft or improve titles and descriptions, often under brand or channel-specific rules; image and text models can fill selected attributes.
4. **Match and validate:** Entity-matching models identify likely duplicate items or cross-catalog equivalents. Human review and business rules remain useful for uncertain or high-impact fields.

The clearest reported operational gains here are **Walmart’s scale/productivity comparison** and **Kerry’s faster validation and launch process**. Instacart reports scale of enrichment, while Delivery Hero’s cited example describes matching and attribute-classification use cases without public outcome metrics. For **Grainger, Ferguson, Zoro, Wayfair, Akeneo, and Syndigo customers**, the available results in this search do not establish a specific named production deployment with comparable metrics; claims about their results would need separate verification.

Citations:
[1] https://company.instacart.com/enterprise-platform/ai-solutions
[2] https://agora-intelligence.com/en/blog/walmart-ai-850-million-product-pages/
[3] https://company.instacart.com/pressreleases/instacart-announces-new-enterprise-ai-solutions-to-democratize-ai-for-grocers-of-all-sizes
[4] https://www.linkedin.com/posts/katyarozenoer_is-delivery-hero-starting-to-sound-like-a-activity-7427280979158839296-pLTz
[5] https://www.salsify.com/resources/case-study/kerry-group-decreases-manual-work-salsify-ai-intelligence-suite
[6] https://checkthat.ai/brands/akeneo/alternatives
[7] https://company.instacart.com/tech-innovation/our-early-journey-to-transform-instacart-s-discovery-recommendations-with-llms
[8] https://www.instacart.com/company/tech-innovation/simplifying-large-scale-llm-processing-across-instacart-with-maple
[9] https://www.instacart.com/company/updates/introducing-new-enterprise-ai-solutions-to-democratize-ai-for-grocers-of-all-sizes
[10] https://www.linkedin.com/in/riyagupta2805

````
