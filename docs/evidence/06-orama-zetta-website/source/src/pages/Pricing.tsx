import { Cloud, Server, Laptop } from 'lucide-react';
import Nav from '@/components/zetta/Nav';
import Footer from '@/components/zetta/Footer';
import WaitlistCTA from '@/components/zetta/WaitlistCTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const DEPLOYMENTS = [
  {
    icon: Cloud,
    name: 'Your cloud',
    body: 'Provision Orama Zetta nodes into your own AWS, Azure, or GCP account, or your Kubernetes cluster. Data stays inside your boundary; nothing egresses.',
  },
  {
    icon: Server,
    name: 'On-prem',
    body: 'Run entirely within your own data center for the most regulated environments — same workflow, same governance, no dependency on a public cloud.',
  },
  {
    icon: Laptop,
    name: 'Local-first',
    body: 'Start on a single machine to validate a use case end-to-end before any cloud footprint, then promote the same graph to a shared target.',
  },
];

const INCLUDED = [
  'A use case architected, validated, and deployed end-to-end',
  'Deployment into your environment, behind your identity provider',
  'Governance baseline: scoped access, audit trail, approval gates',
  'Trained, explainable models and pipelines — not inference over a rented one',
  'Direct collaboration with the team building the engine',
];

export default function Pricing() {
  const heroRef = useScrollReveal();
  const deployRef = useScrollReveal();
  const partnerRef = useScrollReveal();

  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        {/* Intro */}
        <section className="py-[clamp(48px,6vw,88px)]" ref={heroRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              DEPLOYMENT & ENGAGEMENT
            </div>
            <h1 className="text-[clamp(40px,5vw,64px)] font-semibold tracking-[-0.04em] leading-[0.98] text-charcoal mb-8 max-w-[20ch]" data-reveal>
              Deployed where you run. Scoped to the work.
            </h1>
            <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.6]" data-reveal>
              Orama Zetta runs inside your environment, so engagements are shaped around your deployment target and
              the use cases in play rather than a public price list. We are working with a small group of design
              partners first.
            </p>
          </div>
        </section>

        {/* Deployment models */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={deployRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              <span className="text-charcoal mr-2">01</span>WHERE IT RUNS
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal max-w-[20ch]" data-reveal>
              Your infrastructure, your boundary.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {DEPLOYMENTS.map((d) => (
                <div key={d.name} data-reveal className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="w-11 h-11 rounded-xl bg-surface border border-brand-border flex items-center justify-center mb-5">
                    <d.icon className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[18px] font-medium text-charcoal mb-3 tracking-[-0.01em]">{d.name}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design-partner engagement */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-white" ref={partnerRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6">
                <span className="text-charcoal mr-2">02</span>THE DESIGN-PARTNER PROGRAM
              </div>
              <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal mb-6">
                One use case, taken all the way.
              </h2>
              <p className="text-[17px] text-muted-foreground leading-[1.6]">
                A design-partner engagement takes a single high-value use case from intent to a deployed, governed
                system running on your infrastructure — and builds the relationship with the team behind the engine
                while doing it.
              </p>
            </div>
            <div data-reveal className="bg-surface border border-brand-border rounded-2xl p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground mb-5">What an engagement includes</div>
              <ul className="space-y-3.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-charcoal leading-[1.5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <WaitlistCTA
          eyebrowNum="03"
          heading={
            <>
              Tell us the use case.
              <br />
              We'll scope the rest.
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
