import { useScrollReveal } from '@/hooks/useScrollReveal';

const AUDIENCES = [
  {
    tag: 'PLATFORM & AI LEADERS',
    headline: 'Leverage, without losing control.',
    body: 'When every request for intelligence routes through one team, that team becomes the constraint. Orama Zetta lets developers deploy and operate governed pipelines themselves, while architecture, access, and audit remain centrally owned.',
  },
  {
    tag: 'DATA SCIENTISTS & ML ENGINEERS',
    headline: 'Modeling is the smallest part of shipping a model.',
    body: 'Orama Zetta scaffolds the correct pipeline — featurize, train, explain, serve — with leakage and point-in-time checks built in, and deploys it onto governed infrastructure. The model gets the attention; the plumbing and the platform project do not.',
  },
  {
    tag: 'BUSINESS & ANALYTICS TEAMS',
    headline: 'Grounded answers, within governed boundaries.',
    body: 'Questions are asked in plain language and answered from live data — scoped to the access each person already holds, and returned with sources, freshness, and confidence. The result is an answer that holds up in the room, not another dashboard to maintain.',
  },
];

export default function Audiences() {
  const ref = useScrollReveal();

  return (
    <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
          <span className="text-charcoal mr-2">05</span>WHO IT'S FOR
        </div>
        <h2 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal" data-reveal>
          Built for everyone the
          <br />
          bottleneck holds up.
        </h2>
        <p className="text-[19px] text-muted-foreground max-w-[60ch] leading-[1.5] mt-8" data-reveal>
          The leaders intelligence funnels through, the scientists who build it by hand, and the teams who wait
          on the answer — Orama Zetta shortens the distance for each of them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {AUDIENCES.map((a) => (
            <div
              key={a.tag}
              data-reveal
              className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.07em] text-muted-foreground mb-4">{a.tag}</div>
              <h3 className="text-[19px] font-medium tracking-[-0.02em] text-charcoal mb-3 leading-[1.3]">{a.headline}</h3>
              <p className="text-sm text-muted-foreground leading-[1.6]">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10" data-reveal>
          <a
            href="/who-its-for"
            className="inline-flex items-center gap-2 text-sm font-medium text-coral no-underline hover:text-coral-hover transition-colors"
          >
            Explore each role in depth →
          </a>
        </div>
      </div>
    </section>
  );
}
