import { GraduationCap, ShieldCheck, Layers, Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PILLARS = [
  {
    icon: GraduationCap,
    kicker: 'IT LEARNS FROM YOUR DATA',
    title: 'If you’re not training on your data, you’re not fully using AI.',
    body: 'Prompting a general-purpose model only borrows what that model already knew; it never gets better at your business. True predictive power comes only from training on your own data — models and pipelines that learn your business, surface the drivers behind every outcome, and sharpen the more they see. Real solutions are rarely a single model; often several work together as an ensemble. That is the difference between fully using AI and renting a confident guess.',
  },
  {
    icon: Sparkles,
    kicker: 'IT KNOWS YOU AND YOUR DATA',
    title: 'You don’t have to know what to build.',
    body: 'Training on your data is the hard part — and you may not even know where to start. So Orama Zetta studies you and your data, suggests the high-value use cases, then auto-trains an agent on your data to do them — with AI, not a brittle hand-coded harness. Even the way you talk to it over MCP personalizes to how you work. The hard part, solved — and personalized to you.',
    to: '/technology#personalized',
    linkLabel: 'See how it personalizes to you →',
  },
  {
    icon: ShieldCheck,
    kicker: 'CORRECT BY CONSTRUCTION',
    title: 'Generating a workflow is easy. Generating a correct one is the product.',
    body: 'Every graph is validated before it can deploy: schemas type-check against the real sources, ML steps are checked for leakage and point-in-time discipline, and a correctness gate must pass first. Ask for one subsidiary’s risk and it resolves to the right entity — never several blended into an averaged, flattering blur.',
  },
  {
    icon: Layers,
    kicker: 'ORAMA ZETTA UNDERNEATH',
    title: 'The work comes to the data — fast, cheap, and inside your walls.',
    body: 'One engine is both the control-plane spine and the data/compute substrate. Compute runs on the node where the data lives. Expensive source data is pulled into fast in-memory indexes, aged to cheap cold storage, and re-warmed on demand — so you stop paying warehouse prices to ask the same question twice.',
  },
  {
    icon: Lock,
    kicker: 'GOVERNED BY DEFAULT',
    title: 'Governance is the precondition for safe self-service.',
    body: 'Pipelines run where you control them — your cloud, your cluster, your on-prem environment — and the data never leaves. Access is scoped to identity through your own SSO provider: a tailored view per user, not a shared service account. Every change, deployment, and data access is audited, and sensitive actions route through an approval gate.',
  },
];

export default function WhyDifferent() {
  const ref = useScrollReveal();

  return (
    <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-white" id="why" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
          <span className="text-charcoal mr-2">04</span>WHY IT'S DIFFERENT
        </div>
        <h2 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal" data-reveal>
          Velocity, never traded
          <br />
          for correctness.
        </h2>
        <p className="text-[19px] text-muted-foreground max-w-[60ch] leading-[1.5] mt-8" data-reveal>
          Speed matters only when the result is right. Velocity is paired with a trained model, a correctness gate,
          and governance — never set against them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {PILLARS.map((p) => (
            <div
              key={p.kicker}
              data-reveal
              className="bg-white border border-brand-border rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="w-11 h-11 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-coral" strokeWidth={1.5} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.07em] text-coral mb-3">{p.kicker}</div>
              <h3 className="text-[20px] font-medium tracking-[-0.02em] text-charcoal mb-3 leading-[1.25]">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.6]">{p.body}</p>
              {p.to && (
                <Link
                  to={p.to}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-coral no-underline hover:text-coral-hover transition-colors"
                >
                  {p.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
