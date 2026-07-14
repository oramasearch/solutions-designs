import { FileInput, Workflow, Rocket, Activity, ShieldCheck } from 'lucide-react';
import Nav from '@/components/zetta/Nav';
import Footer from '@/components/zetta/Footer';
import WaitlistCTA from '@/components/zetta/WaitlistCTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STAGES = [
  {
    num: '01',
    label: 'INGEST',
    icon: FileInput,
    title: 'Plain language, or what already exists',
    body: 'A project begins with intent expressed in words, or with an artifact already in hand — an existing automation workflow, a SQL script, a notebook, a schema. Orama Zetta reads both the stated goal and the logic already encoded, and reconciles them into a single problem definition.',
    points: ['Natural-language intent', 'Existing workflows & scripts', 'Notebooks & schemas', 'Source profiles'],
  },
  {
    num: '02',
    label: 'ARCHITECT',
    icon: Workflow,
    title: 'A correct graph, validated before it runs',
    body: 'The problem is compiled into an execution graph — connect, clean, model, index, serve — laid out to professional standard. Schemas are type-checked against the real sources; modeling steps are checked for leakage and point-in-time discipline. The graph is visible and inspectable; gaps are surfaced as gaps, not papered over.',
    points: ['Connect → clean → model → index → serve', 'Schema type-checking', 'Leakage & point-in-time checks', 'Visible, editable graph'],
  },
  {
    num: '03',
    label: 'DEPLOY',
    icon: Rocket,
    title: 'One action, onto infrastructure you control',
    body: 'A validated graph is provisioned as Orama Zetta nodes and workflows onto the chosen target — a local environment, a Kubernetes cluster, a cloud account, or an on-prem host. The data stays where it lives; the work is deployed to it, with no egress out of the environment.',
    points: ['Local → cluster → cloud → on-prem', 'Node provisioning & reconciliation', 'No data leaves the environment', 'Self-healing runtime'],
  },
  {
    num: '04',
    label: 'RUN & LEARN',
    icon: Activity,
    title: 'Answers with lineage — and a system that sharpens',
    body: 'The graph executes on the nodes: workflows run, indexes build, models score. Results return with full lineage — the sources used, the steps taken, how fresh and how confident. Each run is grounded experience the next architecture can learn from.',
    points: ['Live execution & monitoring', 'Source-level lineage', 'Freshness & confidence signals', 'Grounded improvement loop'],
  },
];

function StageRow({ stage, flip }: { stage: (typeof STAGES)[number]; flip: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className={flip ? 'md:order-2' : ''} data-reveal>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-surface border border-brand-border flex items-center justify-center shrink-0">
            <stage.icon className="w-[18px] h-[18px] text-charcoal" strokeWidth={1.5} />
          </div>
          <div className="font-mono text-[11px] text-muted-foreground tracking-[0.06em] uppercase">
            <span className="text-charcoal mr-2">{stage.num}</span>
            {stage.label}
          </div>
        </div>
        <h3 className="text-[26px] font-semibold tracking-[-0.02em] text-charcoal mb-4 leading-[1.15]">{stage.title}</h3>
        <p className="text-[16px] text-muted-foreground leading-[1.6]">{stage.body}</p>
      </div>
      <div className={flip ? 'md:order-1' : ''} data-reveal>
        <div className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground mb-4">In this stage</div>
          <div className="space-y-2.5">
            {stage.points.map((p) => (
              <div key={p} className="flex items-center gap-3 bg-surface border border-brand-border rounded-lg px-3.5 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                <span className="text-[14px] text-charcoal">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  const heroRef = useScrollReveal();
  const stagesRef = useScrollReveal();
  const gateRef = useScrollReveal();

  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        {/* Intro */}
        <section className="py-[clamp(48px,6vw,88px)]" ref={heroRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              HOW IT WORKS
            </div>
            <h1 className="text-[clamp(40px,5vw,64px)] font-semibold tracking-[-0.04em] leading-[0.98] text-charcoal mb-8 max-w-[18ch]" data-reveal>
              From intent to a running system, in four stages.
            </h1>
            <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.6]" data-reveal>
              Orama Zetta turns a stated problem — or an artifact you already have — into a correct, deployed,
              running data and AI system. Every stage is visible, every step open to inspection, and nothing
              advances until it is correct.
            </p>
          </div>
        </section>

        {/* Stages */}
        <section className="py-[clamp(64px,8vw,120px)] border-t border-brand-border bg-surface" ref={stagesRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)] space-y-[clamp(56px,7vw,96px)]">
            {STAGES.map((stage, i) => (
              <StageRow key={stage.num} stage={stage} flip={i % 2 === 1} />
            ))}
          </div>
        </section>

        {/* Correct by construction */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-white" ref={gateRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              <span className="text-charcoal mr-2">05</span>THE CORRECTNESS GATE
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal max-w-[20ch]" data-reveal>
              Generating a workflow is easy. Generating a correct one is the product.
            </h2>
            <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.5] mt-8" data-reveal>
              A graph that ships confidently-wrong results is worse than a queue. Before deployment, every graph
              passes a correctness gate — and is blocked, with a reason, if it does not.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {[
                { t: 'Schema & type checks', d: 'Every step is validated against the real source profiles. A reference to data that isn’t there is flagged, not silently generated.' },
                { t: 'Leakage & point-in-time', d: 'Modeling steps are checked so models never train on information they wouldn’t have had at prediction time.' },
                { t: 'Entity resolution', d: 'Results resolve to the right entity — a single subsidiary, not several blended into an averaged, flattering blur.' },
              ].map((c) => (
                <div key={c.t} data-reveal className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="w-11 h-11 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center mb-5">
                    <ShieldCheck className="w-5 h-5 text-coral" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-medium text-charcoal mb-2.5 tracking-[-0.01em]">{c.t}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaitlistCTA eyebrowNum="06" />
      </main>
      <Footer />
    </>
  );
}
