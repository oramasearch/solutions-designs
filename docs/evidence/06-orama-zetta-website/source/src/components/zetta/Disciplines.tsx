import { Server, Database, Brain, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ROLES = [
  {
    icon: Server,
    name: 'Platform engineer',
    job: 'Provisions the infrastructure, scopes access and audit, and keeps the system deployed, observable, and self-healing.',
  },
  {
    icon: Database,
    name: 'Data engineer',
    job: 'Connects the sources, resolves the inconsistencies, and shapes the data into a foundation a model can trust.',
  },
  {
    icon: Brain,
    name: 'Data scientist',
    job: 'Trains the models and pipelines a problem needs — often an ensemble — with measured accuracy, explained drivers, and real predictive power grounded in your own history.',
  },
];

export default function Disciplines() {
  const ref = useScrollReveal();

  return (
    <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-white" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
          <span className="text-charcoal mr-2">02</span>THE APPROACH
        </div>
        <h2 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal" data-reveal>
          The infrastructure three
          <br />
          specialists would build.
        </h2>
        <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.5] mt-8" data-reveal>
          Getting the most out of AI takes production-grade infrastructure — the kind a platform engineer, a data
          engineer, and a data scientist would build together, and the handoffs between them are where months
          disappear. Orama Zetta produces that infrastructure from a single description, architected to professional
          standard and open to review.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {ROLES.map((role, i) => (
            <div
              key={role.name}
              data-reveal
              className="relative bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="w-11 h-11 rounded-xl bg-surface border border-brand-border flex items-center justify-center mb-5">
                <role.icon className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground mb-2">
                Role 0{i + 1}
              </div>
              <h3 className="text-[20px] font-medium tracking-[-0.02em] text-charcoal mb-2.5">{role.name}</h3>
              <p className="text-sm text-muted-foreground leading-[1.55]">{role.job}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap text-center" data-reveal>
          <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted-foreground">
            the work of three specialists
          </span>
          <ArrowRight className="w-4 h-4 text-coral" />
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-coral/10 border border-coral/20 text-[13px] font-medium text-coral">
            your team self-serves and deploys in minutes
          </span>
        </div>
      </div>
    </section>
  );
}
