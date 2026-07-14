import { Check, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function smoothScroll(hash: string) {
  const id = hash.replace(/^\/?#/, '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const STAGES = ['Connect', 'Clean', 'Model', 'Index', 'Serve'];

export default function Hero() {
  const ref = useScrollReveal();

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes('#') ? '#' + href.split('#')[1] : null;
    if (hash) {
      e.preventDefault();
      smoothScroll(hash);
    }
  };

  return (
    <section className="py-[clamp(48px,5vw,80px)] pb-[clamp(40px,5vw,64px)]" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        {/* Eyebrow */}
        <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
          ORAMA ZETTA · AUTO-AI FOR THE ENTERPRISE
        </div>

        {/* Display heading */}
        <h1 className="text-[clamp(40px,5vw,64px)] font-semibold tracking-[-0.04em] leading-[0.95] text-charcoal mb-6" data-reveal>
          Intelligence <span className="text-coral">Velocity</span> for Big Thinkers
        </h1>

        {/* Lead */}
        <p className="text-[19px] text-muted-foreground max-w-[64ch] mb-12 leading-[1.6]" data-reveal>
          From a question to deployed, governed intelligence: models and pipelines{' '}
          <Link
            to="/technology#learning"
            className="font-semibold text-charcoal underline underline-offset-2 hover:text-coral transition-colors"
          >
            trained on your own data
          </Link>
          , running on your own infrastructure, correct by construction. Production-grade systems your
          team can self-serve and deploy <span className="font-semibold text-charcoal">in minutes</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center" data-reveal>
          <a
            href="#waitlist"
            onClick={(e) => handleAnchor(e, '#waitlist')}
            className="inline-flex items-center gap-2 bg-coral text-white border-none px-[22px] py-3 rounded-xl font-sans text-sm font-medium no-underline hover:bg-coral-hover transition-colors"
          >
            Request access →
          </a>
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-2 bg-white text-charcoal border border-brand-border px-[22px] py-3 rounded-xl font-sans text-sm font-medium no-underline hover:bg-surface transition-colors"
          >
            See how it works
          </a>
        </div>

        {/* Credibility */}
        <div className="mt-6 font-mono text-[12px] uppercase tracking-[0.06em] text-muted-foreground" data-reveal>
          From the creator of OpenShift
        </div>

        {/* Product composition — intent → graph → deploy → run */}
        <div className="mt-20 relative" data-reveal>
          <div className="relative z-[2] max-w-[920px] mx-auto bg-white border border-brand-border rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-[18px] py-[14px] border-b border-brand-border bg-white">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-border" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground tracking-[0.05em]">
                orama zetta · new project
              </span>
            </div>

            <div className="px-8 py-7">
              {/* Intent line */}
              <div className="flex items-start gap-3.5 pb-5 border-b border-brand-border">
                <div className="w-7 h-7 rounded-lg bg-charcoal border border-charcoal flex items-center justify-center text-white shrink-0">
                  <User className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="text-[15px] text-charcoal leading-[1.5] mb-1.5">
                    Score every active account for churn risk — and tell me what's driving it.
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground flex flex-wrap gap-2 items-center">
                    <span className="inline-flex items-center gap-1.5 px-2 py-[3px] rounded-md bg-surface border border-brand-border">
                      workflow.json
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-[3px] rounded-md bg-surface border border-brand-border">
                      pipeline.sql
                    </span>
                    <span>imported</span>
                  </div>
                </div>
              </div>

              {/* Architected execution graph */}
              <div className="py-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground mb-3">
                  Architected execution graph
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {STAGES.map((stage, i) => (
                    <div key={stage} className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-brand-border text-[13px] text-charcoal">
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        {stage}
                      </div>
                      {i < STAGES.length - 1 && <span className="text-brand-border">→</span>}
                    </div>
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-[3px] rounded-md bg-[rgba(16,185,129,0.08)] text-[#10B981] font-mono text-[10px] font-medium tracking-[0.03em] uppercase border border-[rgba(16,185,129,0.2)]">
                  <span className="w-[5px] h-[5px] bg-[#10B981] rounded-full" />
                  Correct by construction · leakage ✓ · point-in-time ✓
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-5 border-t border-brand-border">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground mb-1.5">
                    Intent → deployed
                  </div>
                  <div className="font-mono text-[clamp(15px,4vw,22px)] font-medium text-charcoal tabular-nums">
                    9<span className="text-[13px] text-muted-foreground ml-0.5">min</span>
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground mb-1.5">
                    Target
                  </div>
                  <div className="font-mono text-[clamp(15px,4vw,22px)] font-medium text-charcoal tabular-nums">your&nbsp;k8s</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground mb-1.5">
                    Data egress
                  </div>
                  <div className="font-mono text-[clamp(15px,4vw,22px)] font-medium text-coral tabular-nums">0&nbsp;bytes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
