import { FileInput, Workflow, Rocket, Activity } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STEPS = [
  {
    num: '01',
    label: 'INGEST',
    icon: FileInput,
    title: 'Plain language, or what you already built',
    body: 'Start with words — “score every account for churn risk and tell me why” — or drop in an artifact you already have: an existing automation workflow, a SQL script, a notebook, a schema. It reads the intent and the existing logic.',
  },
  {
    num: '02',
    label: 'ARCHITECT',
    icon: Workflow,
    title: 'A correct graph, validated before it runs',
    body: 'It compiles an execution graph — connect → clean → model → index → serve — the way a senior data + AI engineer would. Schemas type-check against the real sources; ML steps are checked for leakage and point-in-time correctness. You see the graph, not a black box.',
  },
  {
    num: '03',
    label: 'DEPLOY',
    icon: Rocket,
    title: 'One button, onto your infrastructure',
    body: 'One action provisions Orama Zetta nodes and the graph onto your target — your laptop, your Kubernetes cluster, your AWS / Azure / GCP, your on-prem box. The data stays put; the work is deployed to it.',
  },
  {
    num: '04',
    label: 'RUN + LEARN',
    icon: Activity,
    title: 'Answers with lineage — and it sharpens',
    body: 'The graph executes on the nodes: workflows run, indexes build, models score. Answers stream back with full lineage — which sources, which steps, how fresh, how confident. Each run is grounded experience the next graph learns from.',
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" id="how" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
          <span className="text-charcoal mr-2">03</span>HOW IT WORKS
        </div>
        <h2 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal" data-reveal>
          Ingest. Architect.
          <br />
          Deploy. Run.
        </h2>
        <p className="text-[19px] text-muted-foreground max-w-[60ch] leading-[1.5] mt-8" data-reveal>
          Four stages, one workflow: intent or an existing artifact in, a correct graph out, deployed onto your
          own infrastructure and running — with every step open to inspection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-16 bg-brand-border border border-brand-border rounded-2xl overflow-hidden">
          {STEPS.map((step) => (
            <div key={step.num} data-reveal className="bg-white p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-surface border border-brand-border flex items-center justify-center shrink-0">
                  <step.icon className="w-[18px] h-[18px] text-charcoal" strokeWidth={1.5} />
                </div>
                <div className="font-mono text-[11px] text-muted-foreground tracking-[0.06em] uppercase">
                  <span className="text-charcoal mr-2">{step.num}</span>
                  {step.label}
                </div>
              </div>
              <h3 className="text-[20px] font-medium tracking-[-0.02em] mb-3 text-charcoal">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.6]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
