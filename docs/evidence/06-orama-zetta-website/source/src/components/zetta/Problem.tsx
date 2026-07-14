import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Problem() {
  const ref = useScrollReveal();

  return (
    <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-reveal>
          <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6">
            <span className="text-charcoal mr-2">01</span>THE PROBLEM
          </div>
          <h2 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal mb-6">
            The constraint is rarely the data.
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-[60ch] leading-[1.5] mb-5">
            In most enterprises, the path from a question to a credible answer runs through a small number of people
            who can do data engineering, modeling, and deployment together. Demand outpaces that capacity, a queue
            forms, and <span className="text-charcoal">answers that already exist in the data arrive quarters late.</span>
          </p>
          <p className="text-[17px] text-muted-foreground max-w-[60ch] leading-[1.6]">
            Prototypes prove an idea, then stall. Turning one into a correct, governed, deployed system is a separate
            project that rarely reaches the top of the list. Most AI initiatives stall precisely there — not for want
            of data or ideas, but because operationalizing them is the hard part.
          </p>
        </div>

        {/* Queue visual */}
        <div className="bg-white border border-brand-border rounded-2xl p-[18px] shadow-[0_2px_12px_rgba(0,0,0,0.04)]" data-reveal>
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.06em] mb-4">
            Requests · waiting on the platform team
          </div>
          <div className="space-y-2.5">
            {[
              { who: 'BizOps', ask: 'What’s driving mid-market churn?', wait: '14d' },
              { who: 'Finance', ask: 'Forecast Q3 collections risk', wait: '21d' },
              { who: 'Support', ask: 'Which accounts to call first?', wait: '9d' },
              { who: 'Sales', ask: 'Score the pipeline by win-likelihood', wait: '30d+' },
            ].map((r) => (
              <div key={r.who} className="flex items-center gap-3 bg-surface border border-brand-border rounded-lg px-3 py-2.5">
                <div className="font-mono text-[10px] uppercase tracking-[0.04em] text-muted-foreground w-[64px] shrink-0">
                  {r.who}
                </div>
                <div className="text-[13px] text-charcoal flex-1 leading-snug">{r.ask}</div>
                <div className="font-mono text-[11px] text-coral tabular-nums shrink-0">{r.wait}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-brand-border flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.04em] text-muted-foreground">
              Throughput
            </span>
            <span className="font-mono text-[11px] text-charcoal tabular-nums">
              bounded by one team
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
