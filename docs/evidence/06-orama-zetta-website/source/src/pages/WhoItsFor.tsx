import Nav from '@/components/zetta/Nav';
import Footer from '@/components/zetta/Footer';
import WaitlistCTA from '@/components/zetta/WaitlistCTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ROLES = [
  {
    num: '01',
    tag: 'PLATFORM & AI LEADERS',
    headline: 'Leverage, without losing control.',
    situation:
      'When every request for intelligence over company data routes through one team, that team becomes the constraint — and demand only grows. Building each pipeline by hand does not scale past the hours of the people who can build it.',
    change:
      'Orama Zetta lets developers deploy and operate governed pipelines themselves. Architecture, access policy, and audit remain centrally owned; the manual step in the middle goes away. What would have been a quarter-long productionization effort becomes something a team runs this sprint.',
    good: ['Developers self-serve on governed builds', 'Architecture & governance stay centralized', 'Deployed inside your own environment'],
  },
  {
    num: '02',
    tag: 'DATA SCIENTISTS & ML ENGINEERS',
    headline: 'Modeling is the smallest part of shipping a model.',
    situation:
      'Most of the effort in delivering a model is data wrangling, connector plumbing, and deployment — not modeling. Prototypes that work in a notebook tend to die there, because turning one into a deployed, governed system is a separate project owned by someone else.',
    change:
      'Orama Zetta scaffolds the correct pipeline — featurize, train, explain, serve — with leakage and point-in-time checks already in place, then deploys it onto governed infrastructure. The model gets the attention; the plumbing and the platform project do not.',
    good: ['A correct pipeline scaffolded, not hand-built', 'Leakage & point-in-time checks built in', 'Deployed without a separate platform effort'],
  },
  {
    num: '03',
    tag: 'BUSINESS & ANALYTICS TEAMS',
    headline: 'Grounded answers, within governed boundaries.',
    situation:
      'Getting an answer that isn’t already on a dashboard usually means asking a technical team and waiting. Decisions get made on stale reports while the answer sits in data nobody had time to query.',
    change:
      'Once a platform is set up, questions are asked in plain language and answered from live data — scoped to the access each person already holds, and returned with their sources, freshness, and confidence shown. A recurring check can be scheduled and delivered where teams already work.',
    good: ['Plain-language questions, grounded answers', 'Scoped to existing access', 'Sources, freshness & confidence shown'],
  },
];

export default function WhoItsFor() {
  const heroRef = useScrollReveal();
  const rolesRef = useScrollReveal();

  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        {/* Intro */}
        <section className="py-[clamp(48px,6vw,88px)]" ref={heroRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              WHO IT'S FOR
            </div>
            <h1 className="text-[clamp(40px,5vw,64px)] font-semibold tracking-[-0.04em] leading-[0.98] text-charcoal mb-8 max-w-[20ch]" data-reveal>
              Built for everyone the bottleneck holds up.
            </h1>
            <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.6]" data-reveal>
              The same constraint shows up in three roles: the leaders intelligence funnels through, the scientists
              who build it by hand, and the teams who wait on the answer. Orama Zetta shortens the distance from
              intent to deployed, correct intelligence for each of them.
            </p>
          </div>
        </section>

        {/* Roles */}
        <section className="py-[clamp(48px,6vw,96px)] border-t border-brand-border bg-surface" ref={rolesRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)] space-y-6">
            {ROLES.map((r) => (
              <div
                key={r.num}
                data-reveal
                className="bg-white border border-brand-border rounded-2xl p-8 md:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.07em] text-muted-foreground mb-4">
                    <span className="text-charcoal mr-2">{r.num}</span>
                    {r.tag}
                  </div>
                  <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-charcoal leading-[1.15]">{r.headline}</h2>
                </div>
                <div>
                  <p className="text-[16px] text-muted-foreground leading-[1.6] mb-4">{r.situation}</p>
                  <p className="text-[16px] text-charcoal leading-[1.6] mb-6">{r.change}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.good.map((g) => (
                      <span key={g} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-brand-border text-[13px] text-charcoal">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <WaitlistCTA eyebrowNum="04" />
      </main>
      <Footer />
    </>
  );
}
