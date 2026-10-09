# 16 — perplexity_research — health-system operations and life sciences

- **Tool:** `mcp__perplexity__perplexity_research`
- **Query:** Deep dive on production machine learning in hospital and health-system operations and in life sciences, with measured outcomes. Cover: (1) operating room block scheduling and case-duration prediction (e.g. LeanTaaS iQueue, Opmed, Qventus), (2) inpatient capacity / discharge prediction and bed management (e.g. Qventus, Epic, GE command centers at Johns Hopkins), (3) nurse staffing and census forecasting, (4) infusion center scheduling, (5) clinical documentation / coding (CDI) query prioritization for revenue capture, (6) payer-side prior authorization auto-approval prediction, (7) clinical trial site selection and patient enrollment forecasting in pharma, (8) sepsis early warning measured mortality impact (e.g. TREWS at Johns Hopkins / Bayesian Health). For each name the organization, vendor, data, technique and measured result (minutes, dollars, LOS days, mortality points, enrollment time) with sources.
- **Timestamp (UTC):** 2026-10-09T20:39:00Z

````
**Production ML has measurable operational results across all eight areas, but the measures are not interchangeable.** The strongest figures below distinguish observed workflow outcomes from prediction accuracy and forecasted—not yet realized—trial timelines.

| Use case | Organization | Vendor | Data | Technique | Measured result | Sources |
|---|---|---|---|---|---|---|
| OR block scheduling | OSF HealthCare | LeanTaaS iQueue | EHR-derived OR schedules, block use, releases and case volume | Predicts unused block opportunities; supports earlier release and reassignment of time | In one year, unused block time fell **over 87,000 minutes**; block utilization rose **4.4%**, release lead time increased **14 to 23 days**, and case volume rose **4.5%**. | [web:8][web:7] |
| OR case-duration prediction | Mayo Clinic | Opmed | Historical cardiovascular procedures; patient and procedure characteristics, workflow data and physician notes | Multimodal deep-learning duration prediction | In a separate **643-procedure validation cohort**, mean absolute scheduling error fell from **1.13 hours to 0.564 hours per case**—approximately **68 to 34 minutes**. This measures prediction accuracy, not realized OR time saved. | [web:4] |
| OR scheduling and block release | Allina Health | Qventus | EHR scheduling and perioperative data, surgeon requests and available blocks | ML-based capacity prediction, automated offers and scheduling workflows | In the first four months, **3.5 additional cases per OR per month**; **over 100 hours of block time released early per month**; **two-thirds of elective cases** scheduled through Qventus. | [web:14] |
| Discharge prediction and bed capacity | OhioHealth | Qventus | Local patient records, provider notes, real-time patient and census data | ML-predicted discharge dates and dispositions; order-sequencing and care-plan prompts embedded in the EHR | In its **first month**, reported nearly **1,400 excess days** and approximately **$550,000** saved. The separately stated **16,800 days and $6.6 million** were *first-year forecasts*. | [web:19] |
| Discharge prediction | HonorHealth | Qventus | Patient records and census data; estimated discharge dates, dispositions and potential barriers | Continuously updated discharge predictions and ML prioritization of care-flow tasks | Over three years, reported average LOS **0.65 days shorter per patient**, **50,673 cumulative excess days saved**, and **$62 million** saved. | [web:26] |
| Post-acute-care and discharge planning | Parkview Health | Parkview-developed model on Epic | Four years of Epic discharge histories, patient and admission information | Predicts within 24 hours who will need post-acute care; care managers prioritize high-scoring admissions | Among patients flagged high-risk, average LOS fell **0.54 days**; Parkview reports **2,450 hospital days** and **$7.5 million** saved in one year. Early referrals and other workflow changes accompanied the model. | [web:107] |
| Discharge-date prediction | Virtua Health | Virtua-developed model on Epic Nebula | Epic Clarity admission data, diagnoses/problems, complaints and expected LOS benchmark | **XGBoost** classification of discharge timing, displayed for interdisciplinary rounds | Excess days fell **13,883, or 18.96%**, from 2022 to 2023. The authors attribute the change to the model **and accompanying technology and workflow changes**, not the model alone. | [web:112] |
| Bed-availability forecasting | UCSF Health | UCSF-developed model on Epic | Epic patient-flow and capacity data | Predicts bed availability **4, 8 and 12 hours** ahead for a capacity command center | Within 30 days of the center’s launch, discharge time of day improved **45 minutes** and ED boarding fell **six hours**. A discharge lounge, dashboards and staffing coordination launched alongside the forecast. | [web:117] |
| Bed management and capacity command center | Johns Hopkins Hospital | GE HealthCare, with Johns Hopkins | Real-time feeds including Epic, bed status, transfers, ED activity and OR progress | AI patient-volume forecasts and predictive analytics combined with centralized bed-placement and transport decisions | Bed utilization increased from **85% to about 94%**; Hopkins estimated capacity equivalent to **16 additional beds** and **$16 million in annual revenue**. These are command-center-wide results, not an isolated model effect. | [web:211][web:28] |
| Nurse staffing and census forecasting | Duke Health | GE HealthCare Command Center | Historical and current census, admissions, discharges, transfers, surgery schedules and staffing rules | Ensemble census forecasts—including tree-based and time-series models—translated into staffing demand up to **14 days** ahead | GE reports **95% staffing-need forecast accuracy**, **50% less temporary labor required**, and **$40 million in labor-cost savings**. Its published account does not define the 95% accuracy calculation. | [web:136][web:20] |
| Nurse deployment across hospitals | Indiana University Health | Delta Coverage Analytics Suite, developed with university researchers | Hospital-level census forecasts, acuity, nurse availability and deployment constraints | **Deep generative census forecasting** plus **stochastic optimization** of on-call and interhospital assignments | A six-week, six-hospital pilot reported **13% less understaffing** and **5% less overstaffing**. The published **$2.5 million annual saving** is an *estimate*, not six-week cash savings. | [web:150][web:198] |
| Open-shift staffing | Mercy | Works OnDemand | Open shifts, clinician availability, workforce pools, unit-level fill and cost targets | Predicts staffing gaps; automates clinician matching and shift incentives | Mercy attributes **over $100 million** in premium and agency labor savings over **three-plus years** to its broader Works collaboration; inpatient shift fill rose **85% to 93%**. The saving also includes procurement and workforce-model changes. | [web:147] |
| Infusion scheduling | MultiCare Tacoma General Hospital | LeanTaaS iQueue | Treatment durations, appointment demand, chairs and nurse capacity | ML-informed, level-loaded scheduling templates | Patient waits fell **65%**; daily volume rose **11%**; approximately **$1.25 million in value** was reported over **nine months**. | [web:36] |
| Infusion scheduling | Rush University Medical Center | LeanTaaS iQueue | Appointment patterns, treatment durations, chair and staffing capacity | Predictive templates distributing starts across the day | Infusion waits fell **50%** and daily completed appointments rose **26%**. | [web:36] |
| Infusion scheduling | SSM Health | LeanTaaS iQueue | Chair availability, nursing capacity, appointments, treatment durations and pharmacy workflow | ML and optimization to reduce morning scheduling bottlenecks | Volume rose **18%**; wait for a chair fell **44%**; wait for pharmacy drugs fell **25%**. | [web:36] |
| Infusion scheduling | Northwestern Medicine | LeanTaaS iQueue | Treatment demand and durations, staffing and chair capacity | Predictive, capacity-constrained appointment templates | Created capacity for **42 additional appointments per day** and reduced over-capacity days **63%**. | [web:36] |
| CDI query prioritization | AdventHealth | Iodine AwareCDI | Epic charts, clinical documentation and CDI review and query workflows | AI-ranked charts and documentation opportunities, with physician-query workflow tools | **30% more CDI queries**; **92%** concurrent-review rate; **98%** physician response rate; **90%** of queries answered within one day. An external **300-case audit** found the system prioritized nearly all **150** identified opportunities; no dollar gain is disclosed. | [web:46] |
| CDI and revenue capture | Unnamed health system with more than 20 hospitals | Iodine AwareCDI | Patient notes, historical successful queries and documentation supporting claims | ML and healthcare-specific language models score each note by query likelihood and potential impact | Reported **$15 million additional revenue in year one** and **$7 million in year two**; query rate increased from **20% to 37%** of claims submissions. The organization and detailed financial attribution are undisclosed. | [web:49] |
| Payer prior-authorization auto-approval | Humana | Cohere Health | Submitted clinical information, EMR integrations, proposed care pathways, prior practice patterns and evidence-based criteria | ML fast-tracks strong care patterns; clinical-policy rules automatically approve eligible requests and route exceptions to review | Humana case study reports **89% auto-approval**, **five days less** to requested service, and **54% fewer nurse-review hours**. It does not separate approvals caused by ML from those caused by policy rules. | [web:87][web:126] |
| Trial-site selection and enrollment | IQVIA-managed oncology studies | IQVIA | Disease- and region-specific healthcare data, patient pools, physicians and prospective sites | ML ranks sites by predicted access to eligible patients | Across ongoing oncology studies, IQVIA reports a **20.6% higher enrollment rate** for ML-recommended sites than for sites identified by traditional experience-based selection; it does not disclose study counts or absolute rates. | [web:161] |
| Trial-site selection and enrollment forecasting | PPD, for an unnamed rare-oncology sponsor | Medidata Intelligent Trials | PPD’s historical studies across **29-plus countries and 1,700-plus sites**, combined with Medidata site-performance and biomarker-specific data | ML-supported site ranking, country planning and enrollment-rate forecasting | PPD won a **$60 million study award**. Its proposed plan used **42% fewer sites** and forecast enrollment at **twice** the original rate, reducing *forecasted* study duration from **41 to 34 months**. **Seven months is not a reported realized enrollment-time saving.** | [web:75] |
| Trial-site selection | Unnamed top-10 biopharma sponsor | Medidata Intelligent Trials | Sponsor site records plus Medidata trial, site-enrollment and competition data | Predictive site segmentation and performance ranking | The pool classified as top-tier grew from **99 to 234 sites**, including **31 newly identified sites**. No achieved enrollment-time reduction is reported for this case. | [web:66] |
| Sepsis early warning and mortality | Five hospitals in the Johns Hopkins-led TREWS evaluation | TREWS, commercialized by Bayesian Health | Longitudinal EHR clinical data, including vital signs, laboratory results and clinical history | Continuously running ML sepsis alerts for clinician confirmation and treatment | Among **6,877** sepsis patients alerted before antibiotics, confirmation within **three hours** was associated with **3.3 percentage points lower adjusted in-hospital mortality**—an **18.7% relative reduction**—than later or absent confirmation. A companion analysis found the first antibiotic order **1.85 hours earlier** with prompt confirmation. | [web:92][web:166] |

**Interpretation:** Most operational savings above are vendor- or hospital-reported outcomes of a *model plus changed workflow*, rather than controlled estimates of the model’s independent effect. TREWS’s mortality comparison was an adjusted observational comparison of earlier versus later alert response, **not a randomized trial**.[web:92]

Citations:
[1] https://www.qventus.com/solutions/operating-room-utilization/
[2] https://www.opmed.ai/resources/or-scheduling-best-practices-a-practical-playbook-for-high-performance-surgical-services-2026
[3] https://www.opmed.ai/resources/how-to-improve-operating-room-utilization-the-metrics-that-actually-matter
[4] https://hlth.com/insights/news/opmed-and-mayo-clinic-present-ai-platform-to-improve-cardiovascular-procedure-scheduling
[5] https://www.opmed.ai/resources/1.2m-revenue-boost-and-500k-cost-savings-per-or-per-year-with-opmed.ai
[6] https://www.opmed.ai/blog-posts/why-or-schedule-falls-apart
[7] https://leantaas.com/products/operating-rooms/
[8] https://leantaas.com/blog/from-spreadsheets-to-surgical-efficiency-osf-healthcares-early-wins-with-iqueue-for-operating-rooms/
[9] https://www.opmed.ai/resources/transforming-cardiac-surgery-scheduling-at-mayo-clinic-with-opmed.ai
[10] https://www.opmed.ai/resources/nurse-burnout-in-the-or-how-ai-powered-scheduling-creates-happier-teams
[11] https://www.opmed.ai/procedural
[12] https://www.opmed.ai/platform
[13] https://www.technologyrecord.com/digital/magazine/issue36/113/
[14] https://www.prnewswire.com/news-releases/allina-health-partners-with-qventus-to-improve-or-efficiency-and-grow-surgical-program-301717307.html
[15] https://www.qventus.com/resources/blog/or-dashboard-metrics/
[16] https://www.qventus.com/solutions/inpatient-length-of-stay/
[17] https://www.qventus.com/company/newsroom/qventus-enables-health-systems-to-unlock-new-units-of-bed-capacity-and-address-staffing-challenges/
[18] https://www.qventus.com/solutions/discharge-planning/
[19] https://www.qventus.com/company/newsroom/qventus-launches-its-3rd-generation-inpatient-solution-to-optimize-hospital-discharge-planning-and-automate-care-planning-fully-embedded-into-ehr-workflows/
[20] https://www.gehccommandcenter.com/current-outcomes
[21] https://www.qventus.com/resources/customer-successes/ohiohealth/
[22] https://www.epic.com/software/hospital-patient-flow/
[23] https://www.qventus.com/resources/customer-successes/western-academic-medical-center/
[24] https://www.epicshare.org/share-and-learn/legacy-health-patient-throughput
[25] https://www.prnewswire.com/news-releases/qventus-closes-2020-with-premier-partnerships-and-new-automation-solutions-301218521.html
[26] https://www.qventus.com/resources/blog/how-honorhealth-improved-patient-flow-using-ai-and-automation/
[27] https://www.qventus.com/resources/blog/ai-in-action-5-tactical-plays-to-recover-margin/
[28] https://www.hfmmagazine.com/articles/2595-command-center-leads-to-more-efficient-facility-operations
[29] https://www.epicshare.org/share-and-learn/parkview-post-acute-predictive-model
[30] https://medstaff.chsbuffalo.org/wp-content/uploads/2026/04/New-Epic-Tools-May-2026.pdf
[31] https://leantaas.com/wp-content/uploads/2026/05/INF_CSSBooklet_2026Redesign_DIGITAL_FINAL_V2.pdf
[32] https://leantaas.com/wp-content/uploads/2023/12/iQueue-for-Infusion-Centers-Case-Study-Booklet-November-2023.pdf
[33] https://iqueue.leantaas.com/rs/775-GHN-578/images/INF_EndtoEnd_Whitepaper_Digital_FINAL_V2.pdf?version=0
[34] https://iqueue.leantaas.com/rs/775-GHN-578/images/iQueue%20for%20Infusion%20KLAS%20Report.pdf?version=0
[35] https://leantaas.com/wp-content/uploads/2023/06/iQueue-for-Infusion-Centers-Case-Study-Booklet-12022022.pdf
[36] https://leantaas.com/products/infusion-centers/
[37] https://iqueue.leantaas.com/iQueue-for-infusion-centers-lowering-wait-times-content-download.html
[38] https://leantaas.com/press-releases/leantaas-iqueue-for-infusion-centers-gains-momentum-in-2017/
[39] https://static1.squarespace.com/static/5ce49ef0a57c21000186d204/t/5d03cb5b73f6f10001a2ca74/1560529757353/Giridharadas-Mohan_LeanTaaS-Sponsor-Breakfast-Sess.pdf
[40] https://www.accc-cancer.org/docs/documents/oncology-issues/articles/2023/v38-n4/machine-learning-and-predictive-analytics-solution-transforms-infusion-center-operations.pdf?sfvrsn=60a38163_8
[41] https://research.gehealthcare.com/across-the-enterprise/the-science-behind-ge-healthcares-command-center-census-forecast-and-staffing-helping-hospitals-predict-resource-needs-with-astonishing-accuracy-jb33676xx/
[42] https://marketplace.aviahealth.com/compare/24919/24974
[43] https://www.fullcast.com/content/healthcare-demand-forecasting/
[44] https://viva-it.com/insights/ai-predictive-staffing-how-hospitals-prevent-workforce-shortages/
[45] https://www.ajentik.com/case-studies
[46] https://iodinesoftware.com/wp-content/uploads/2025/06/25.Advent-Casestudy.pdf
[47] https://iodinesoftware.com/customer-successes/adventhealth/
[48] https://iodinesoftware.com/customer-successes/m-health-fairview/
[49] https://hmacademy.com/insights/AI-Catalyst/health-technology/a-usd15-million-boost-one-systems-first-year-results-from-ai-powered-cdi
[50] https://music.amazon.com/es-ar/podcasts/40d55f47-24eb-4871-bb30-bb85212193b6/iodine-intelligence---empowering-intelligent-care
[51] https://www.linkedin.com/posts/jamie-huemme-mph-3420465_unlocking-15-million-in-one-year-how-ai-powered-activity-7310846157138599936-Rar1
[52] https://www.linkedin.com/posts/iodine-software_unlocking-15-million-in-one-year-how-ai-powered-activity-7310749747638661120-gnfW
[53] https://www.linkedin.com/posts/adam-zellner-57031424_unlocking-15-million-in-one-year-how-ai-powered-activity-7310760596017238016-8wBC
[54] https://www.linkedin.com/posts/michellejwhite_unlocking-15-million-in-one-year-how-ai-powered-activity-7311001573378138114-bc0n
[55] https://iodinesoftware.com/home
[56] https://quickintell.com/solutions/cdi-optimization
[57] https://www.codametrix.com/resources/codametrix-chosen-by-health-systems-representing-180b-in-net-patient-revenue
[58] https://www.tfsfventures.com/blog/ai-impact-clinical-documentation-improvement
[59] https://www.medicalrecords.com/ai-tools/category/cdi
[60] https://www.codametrix.com/
[76] https://www.coherehealth.com/utilization-management/in-house
[77] https://www.coherehealth.com/news/cohere-health-record-growth-2025-clinical-intelligence
[78] https://www.prnewswire.com/news-releases/cohere-health-commends-ahip-and-cms-for-unified-industry-action-on-prior-authorization-reform-302489430.html
[79] https://www.coherehealth.com/news/cohere-achieves-digital-adoption-blue-plan-prior-auth
[80] https://www.coherehealth.com/news/national-survey-ai-prior-authorization
[81] https://www.coherehealth.com/thought-leadership/payer-provider-discussion-prior-authorization
[82] https://www.cognizant.com/en_us/trizetto/documents/key-considerations-for-prior-authorization-compliance-and-automation.pdf
[83] https://www.prnewswire.com/news-releases/cohere-healths-review-assist-accelerates-clinical-reviews-for-health-plans-with-precision-ai-302482034.html
[84] https://www.coherehealth.com/utilization-management/delegated/sleep-management
[85] https://intuitionlabs.ai/pdfs/cohere-health-ai-in-prior-authorization-company-profile.pdf
[86] https://synapse.patsnap.com/organization/5e68a2436a82f64bf587ae23ff7b69e8
[87] https://www.coherehealth.com/case-study/how-humana-transformed-prior-authorization-to-improve-care-collaboration
[88] https://www.cognizant.com/en_us/trizetto/documents/solve-prior-authorization-challenges-today-trizetto-datasheet.pdf
[89] https://evolvancemarketresearch.com/reports/ai-prior-authorization-automation-market/
[90] https://logic.inc/resources/automated-prior-authorization-workflows
[61] https://www.iqvia.com/solutions/research-and-development/consulting/clinical-trial-planning
[62] https://ir.iqvia.com/press-releases/press-release-details/2026/IQVIAs-Predictive-Clinical-Development-Provides-Sponsors-With-Significant-Efficiencies-to-Get-Treatments-to-Market-Faster/default.aspx
[63] https://www.iqvia.com/solutions/research-and-development
[64] https://www.iqvia.com/solutions/research-and-development/patient-and-site-centric-solutions/patient-recruitment
[65] https://test-www.iqvia.com/-/media/iqvia/pdfs/library/white-papers/ai-in-clinical-development.pdf
[66] https://www.medidata.com/wp-content/uploads/2024/01/Medidata-Intelligent-Trials-Top-10-Pharma-Case-Study-Nov-22.pdf
[67] https://www.iqvia.com/library/infographics/accelerating-clinical-trial-enrollment-with-site-enrollment-and-engagement-leads
[68] https://www.iqvia.com/library/fact-sheets/iqvia-study-optimizer
[69] https://ar5iv.labs.arxiv.org/html/2111.07407
[70] https://globalforum.diaglobal.org/issue/june-2025/ai-powered-clinical-trial-feasibility-and-forecasting-four-strategic-applications/
[71] https://support.sas.com/resources/papers/proceedings19/3528-2019.pdf
[72] https://pmc.ncbi.nlm.nih.gov/articles/PMC10927105/
[73] https://www.iqvia.com.kh/-/media/iqvia/pdfs/library/white-papers/bcs2024-2345-08aug-pscs-feasibility-whitepaper.pdf
[74] https://www.ppd.com/wp-content/uploads/2025/04/Clinical-Trial-Forecasting-Suite-Overview.pdf
[75] https://www.medidata.com/wp-content/uploads/2023/04/Case-Study-MedidataAI_Supports-PPD.pdf
[91] https://www.bayesianhealth.com/insights/nature-medicine-research-summary-sepsis-mortaity-reduction-with-bayesian-health
[92] https://pure.johnshopkins.edu/en/publications/prospective-multi-site-study-of-patient-outcomes-after-implementa/
[93] https://hub.jhu.edu/2025/04/23/nsf-funding-suchia-saria-sepsis-detection/
[94] https://pmc.ncbi.nlm.nih.gov/articles/PMC12194786/
[95] https://www.bayesianhealth.com/insights/factors-driving-provider-adoption-of-the-trews-machine-learning-based-early-warning-system-and-its-effects-on-sepsis-treatment-timing
[96] https://www.mayoclinicplatform.org/2022/08/31/early-recognition-of-sepsis-looks-much-more-doable-now/
[97] https://www.diagnosticsworldnews.com/news/2025/02/04/high-value-opportunities-for-multimodal-ai-in-clinical-care-and-research
[98] https://www.bayesianhealth.com/sepsis-mortality-ai-adoption-nature-medicine/
[99] https://emerj.com/artificial-intelligence-at-cleveland-clinic/
[100] https://medicalxpress.com/news/2022-08-early-sepsis-patients.html
[101] https://pmc.ncbi.nlm.nih.gov/articles/PMC12997714/
[102] https://pmc.ncbi.nlm.nih.gov/articles/PMC13090662/
[103] https://www.aicerts.ai/news/fda-greenlights-sepsis-deterioration-alerts-platform/
[104] https://www.mayoclinicplatform.org/2024/05/02/using-ai-to-predict-the-onset-of-sepsis/
[105] https://pmc.ncbi.nlm.nih.gov/articles/PMC10111986/
[136] https://research.gehealthcare.com/across-the-enterprise/the-science-behind-ge-healthcares-command-center-census-forecast-and-staffing-helping-hospitals-predict-resource-needs-with-astonishing-accuracy-jb33676xx/
[137] https://research.gehealthcare.com/patient-care-pathways/removing-the-friction-in-care-where-healthcare-ai-is-headed/
[138] https://www.gehealthcare.com/en-us/products/software/command-center
[139] https://www.grandviewresearch.com/industry-analysis/healthcare-command-centers-market-report
[140] https://www.mordorintelligence.com/industry-reports/artificial-intelligence-in-hospital-operations-market
[141] https://www.fullcast.com/content/healthcare-demand-forecasting/
[142] https://www.linkedin.com/posts/tahak_the-ge-healthcare-research-site-is-a-serious-activity-7440224413624643584--Lww
[143] https://www.nucamp.co/blog/coding-bootcamp-wichita-ks-healthcare-how-ai-is-helping-healthcare-companies-in-wichita-cut-costs-and-improve-efficiency
[144] https://www.nucamp.co/blog/coding-bootcamp-austria-aut-healthcare-top-10-ai-prompts-and-use-cases-and-in-the-healthcare-industry-in-austria
[145] https://research.gehealthcare.com/patient-care-pathways/5-steps-to-deploy-ai-in-your-healthcare-system-in-a-thoughtful-and-measured-way-jb34692xx/
[146] https://research.gehealthcare.com/across-the-enterprise/5-steps-to-deploy-ai-in-your-healthcare-system-in-a-thoughtful-and-measured-way-jb34692xx/
[147] https://www.works.ai/case-studies/mercy
[148] https://www.mordorintelligence.com/industry-reports/ai-powered-workforce-planning-market
[149] https://www.works.ai/mercy-case-study?li_fat_id=02f587ad-ed1e-423f-938c-dc7f31f7adf1
[150] https://pubsonline.informs.org/doi/10.1287/inte.2024.0140
[106] https://www.epicshare.org/share-and-learn/legacy-health-patient-throughput
[107] https://www.epicshare.org/share-and-learn/parkview-post-acute-predictive-model
[108] https://open.epic.com/EHITables/GetTable/PAT_ENC_HSP_2.htm
[109] https://www.epicshare.org/share-and-learn/royal-devon-patient-flow-dashboards
[110] https://www.epic.com/software/hospital-patient-flow/
[111] https://leantaas.com/wp-content/uploads/2026/05/UPDATED.12.08.25_IPF.2025.05.20.002_CSSBooklet_2025Redesign_DIGITAL_FINAL.pdf
[112] https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2024.1455446/full
[113] https://www.epicshare.org/share-and-learn/monument-health-patient-flow
[114] https://leantaas.com/wp-content/uploads/2025/07/IPF.2025.05.20.002_CSSBooklet_2025Redesign_DIGITAL_FINALV5.pdf
[115] https://open.epic.com/EHITables/GetTable/PREDICTED_LOS.htm
[116] https://open.epic.com/EHITables/GetTable/LENGTH_OF_STAY.htm
[117] https://www.epicshare.org/share-and-learn/rethinking-patient-flow
[118] https://digitalcommons.wcupa.edu/cgi/viewcontent.cgi?article=1344&context=all_doctoral
[119] https://innovations.bmj.com/content/7/2/414
[120] https://www.legacyhealth.org/patients-and-visitors/about-your-care/patient-rights/medicare-rights
[151] https://www.medidata.com/wp-content/uploads/2023/04/Case-Study-MedidataAI_Supports-PPD.pdf
[152] https://www.medidata.com/wp-content/uploads/2025/05/Medidata_Intelligent-Trials_v1.2_20250527-2.pdf
[153] https://ir.iqvia.com/press-releases/press-release-details/2026/IQVIAs-Predictive-Clinical-Development-Provides-Sponsors-With-Significant-Efficiencies-to-Get-Treatments-to-Market-Faster/default.aspx
[154] https://www.iqvia.com/solutions/research-and-development/consulting/clinical-trial-planning
[155] https://www.medidata.com/en/clinical-trial-products/medidata-ai/
[156] https://www.medidata.com/wp-content/uploads/2022/09/Intelligent-Trials-Fact-Sheet-Sept-22.pdf
[157] https://www.medidata.com/en/study-experience/study-feasibility/
[158] https://www.iqvia.com/solutions/research-and-development/patient-and-site-centric-solutions/patient-recruitment
[159] https://intuitionlabs.ai/articles/accelerating-drug-development-ai-pharma
[160] https://www.medidata.com/wp-content/uploads/2023/06/Intelligent-Trials-Fact-Sheet-June-2023.pdf
[161] https://www.iqvia.com/-/media/iqvia/pdfs/library/white-papers/ai-in-clinical-development.pdf
[162] https://test-www.iqvia.com/-/media/iqvia/pdfs/library/fact-sheets/iqvia-data-query-system.pdf
[163] https://www.medidata.com/wp-content/uploads/2024/01/Medidata-Intelligent-Trials-Top-10-Pharma-Case-Study-Nov-22.pdf
[164] https://www.iqvia.com/blogs/2026/09/from-milestone-to-strategic-advantage
[165] https://www.medidata.com/en/life-science-resources/medidata-blog/clinical-trial-sponsors-ai/
[121] https://www.coherehealth.com/utilization-management/in-house
[122] https://assets.humana.com/is/content/humana/Humana_H2029_Prior_Auth_Metrics_PlanYear2025pdf
[123] https://assets.humana.com/is/content/humana/Humana_H4461_Prior_Auth_Metrics_PlanYear2025pdf
[124] https://www.coherehealth.com/case-study/how-humana-transformed-prior-authorization-to-improve-care-collaboration
[125] https://www.cognizant.com/en_us/trizetto/documents/key-considerations-for-prior-authorization-compliance-and-automation.pdf
[126] https://www.coherehealth.com/news/cohere-health-announces-national-expansion-of-humana-partnership
[127] https://www.coherehealth.com/news/cohere-humana-expand-prior-authorization-imaging-sleep
[128] https://policy.humana.com/news-and-resources/news-press/2026/making-healthcare-work-better-by-modernizing-prior-authorization
[129] https://www.coherehealth.com/solutions/providers
[130] https://www.mckinsey.com/industries/healthcare/our-insights/ai-ushers-in-next-gen-prior-authorization-in-healthcare
[131] https://www.linkedin.com/posts/praveen-kumar-priyadarshi_healthcareinnovation-priorauthorization-healthtech-activity-7490504693505314816-2h6V
[132] https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorizations-search-tool
[133] https://assets.humana.com/is/content/humana/Humana_OH_Prior_Auth_Metrics_PlanYear2025pdf
[134] https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorization-lists
[135] https://crescointl.com/transforming-prior-authorization-in-healthcare-the-value-of-ai-and-optimization/
[166] https://www.nature.com/articles/s41591-022-01895-z
[167] https://www.sciencedaily.com/releases/2022/07/220721132009.htm
[168] https://www.nature.com/subjects/bacterial-infection/nm
[169] https://www.mindinventory.com/blog/machine-learning-in-healthcare-guide/
[170] https://www.smithsonianmag.com/innovation/can-this-new-ai-tool-help-detect-blood-poisoning-180980930/
[171] https://www.nature.com/articles/s41591-022-01894-0
[172] https://pmc.ncbi.nlm.nih.gov/articles/PMC11694888/
[173] https://www.medrxiv.org/content/10.1101/2022.09.13.22279688v1
[174] https://www.sciencedirect.com/science/article/abs/pii/S2666634022003634
[175] https://healthcare-in-europe.com/en/news/early-detection-sepsis-ai.html
[176] https://engineering.jhu.edu/news/sepsis-detection-platform-is-preventing-thousands-of-deaths/
[177] https://www.webmd.com/a-to-z-guides/story/ai-and-sepsis
[178] https://pmc.ncbi.nlm.nih.gov/articles/PMC12194786/
[179] https://healthcare-in-europe.com/media/issue/537/issue.pdf
[180] https://www.ama-assn.org/practice-management/digital-health/what-it-takes-doctors-trust-ai-triggered-sepsis-alerts
[181] https://www.medidata.com/wp-content/uploads/2025/05/Medidata_Intelligent-Trials_v1.2_20250527-2.pdf
[182] https://www.medidata.com/wp-content/uploads/2024/01/Medidata-Intelligent-Trials-Top-10-Pharma-Case-Study-Nov-22.pdf
[183] https://www.medidata.com/wp-content/uploads/2022/09/Intelligent-Trials-Fact-Sheet-Sept-22.pdf
[184] https://www.medidata.com/wp-content/uploads/2021/08/Intelligent-Trials-Fact-Sheet.pdf
[185] https://globalforum.diaglobal.org/issue/june-2025/ai-powered-clinical-trial-feasibility-and-forecasting-four-strategic-applications/
[186] https://www.medidata.com/en/study-experience/study-feasibility/
[187] https://www.medidata.com/en/clinical-trial-products/medidata-ai/
[188] https://wjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-1292.pdf
[189] https://www.medidata.com/wp-content/uploads/2023/04/Case-Study-MedidataAI_Supports-PPD.pdf
[190] https://www.ppd.com/wp-content/uploads/2025/04/Clinical-Trial-Forecasting-Suite-Overview.pdf
[191] https://dataintelo.com/report/ai-powered-clinical-trial-recruitment-market
[192] https://www.medidata.com/en/casestudy/a-mid-sized-sponsor-increased-site-count-by-50-in-a-rare-disease-clinical-trial-with-medidata-ai-intelligent-trials/
[193] https://www.medidata.com/en/optimize-enrollment-through-ai-powered-site-selection-study-forecasting/
[194] https://www.medidata.com/en/clinical-trial-data-with-ai/
[195] https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0300109&type=printable
[211] https://www.hopkinsmedicine.org/news/articles/2021/03/capacity-command-center-celebrates-5-years-of-improving-patient-safety-access
[212] https://www.deloitte.com/us/en/insights/industry/government-public-sector-services/imagining-virtual-command-center-for-federal-health-system.html
[213] https://www.gehccommandcenter.com/current-outcomes
[214] https://hmpi.org/category/uncategorized/?pdf=6348
[215] https://www.beckershospitalreview.com/healthcare-information-technology/innovation/nasa-inspired-command-centers-boost-efficiency-at-health-systems/
[216] https://www.scribd.com/document/975763264/2019-Command-Center-Systems-Engineering
[217] https://www.advisory.com/daily-briefing/2018/06/11/command-center
[218] https://www.nationalnursesunited.org/sites/default/files/nnu/graphics/documents/0120_JHH_PreyingOnPatients_Hospital_Reports_JohnsHopkinsHospital-JohnsHopkinsHealthSystem.pdf
[219] https://hscrc.maryland.gov/Documents/Hospitals/ReportsFinancial/Audited/FY-2017/JHHS_AFS_FY17.pdf
[220] https://medicalarchives.jhmi.edu/portrait/reitz-judy/
[221] https://www.hopkinsmedicine.org/emergency-medicine/c3
[222] https://www.linkedin.com/pulse/johns-hopkins-command-center-designed-built-together-ge-eversgerd
[223] https://fortune.com/media/948ca870-835c-449e-88f6-7bbb43cdb7bf
[224] https://fortune.com/videos/watch/insights:-how-johns-hopkins'-ge-command-center-improves-patient-care/948ca870-835c-449e-88f6-7bbb43cdb7bf
[225] https://researchoutput.csu.edu.au/ws/portalfiles/portal/608686024/Command_Centre_Report-final-august_2025.pdf
[196] https://business.purdue.edu/daniels-insights/posts/2024/nurse-deployment-program-saves.php
[197] https://pubsonline.informs.org/doi/10.1287/inte.2024.0140
[198] https://business.purdue.edu/news/features/2023/shi-research-dc.php
[199] https://iuhealth.org/for-media/press-releases/iu-health-operating-income-improves-with-continued-investments-in-team-members-and-communities
[200] https://www.deltaops.health/about
[201] https://www.engineering.utoronto.ca/event/or-seminar-with-prof-jonathan-helm-delta-coverage-the-analytics-journey-to-implement-a-novel-nurse-deployment-solution/
[202] https://www.luc.edu/parkinson/researchandpractice/choir/health-informatics-seminar-series/deltacoverageanovelnursedeploymentsolution/
[203] https://www.deltaops.health/success-stories
[204] https://cdn.iuhealth.org/resources/42379_IUH_2023NursingAnnualReport_FNL_HI.pdf
[205] https://arxiv.org/pdf/2509.07387
[206] https://www.in.gov/health/cshcr/files/2023-Indiana-University-Health-Inc.-990H.pdf
[207] https://www.chalkbeat.org/indiana/2023/4/18/23686944/indiana-university-health-end-nursing-services-indianapolis-public-schools-shortage/
[208] https://www.in.gov/health/cshcr/files/2023-IU-HEALTH-150056-AFS.pdf
[209] https://www.census.gov/content/dam/Census/library/publications/2023/acs/acsbr-015.pdf
[210] https://iuhealth.org/for-media/press-releases/iu-health-operating-income-improves-with-continued-investments-in-team-members-and-communities
````
