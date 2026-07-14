import { useScrollReveal } from '@/hooks/useScrollReveal';

const ROWS = [
  {
    not: 'Not demoware',
    because: 'LLM-only tools and notebooks demo well, then stall before production. Orama Zetta ships a correct, governed, deployed system.',
  },
  {
    not: 'Not someone else’s cloud',
    because: 'You don’t operate ours on their terms. It self-deploys into your environment, natural-language-first.',
  },
  {
    not: 'Not a web PaaS',
    because: 'The same one-button deploy experience — but data/AI-native and enterprise-governed on private cloud.',
  },
  {
    not: 'Not just answers',
    because: 'Answer engines retrieve and respond. We build, deploy, and train models and pipelines on your data.',
  },
];

export default function Positioning() {
  const ref = useScrollReveal();

  return (
    <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
          <span className="text-charcoal mr-2">06</span>POSITIONING
        </div>
        <h2 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal" data-reveal>
          The whole arc — not
          <br />
          just one slice of it.
        </h2>
        <p className="text-[19px] text-muted-foreground max-w-[60ch] leading-[1.5] mt-8" data-reveal>
          Plenty of tools compress one step — deploying a web app, or running a query, or drafting a workflow.
          None shrink the whole arc from “I have a question” to “a correct, governed system is answering it in
          production.” That arc is what we compress.
        </p>

        <div className="mt-14 border border-brand-border rounded-2xl overflow-hidden bg-white" data-reveal>
          {ROWS.map((r, i) => (
            <div
              key={r.not}
              className={`grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-6 px-6 py-5 ${
                i < ROWS.length - 1 ? 'border-b border-brand-border' : ''
              }`}
            >
              <div className="text-[17px] font-medium text-charcoal tracking-[-0.01em]">{r.not}</div>
              <div className="text-[15px] text-muted-foreground leading-[1.55]">{r.because}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
