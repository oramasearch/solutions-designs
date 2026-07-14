import { Layers, Cpu, Thermometer, Network, GraduationCap, Gauge, Lightbulb, Bot, Plug } from 'lucide-react';
import Nav from '@/components/zetta/Nav';
import Footer from '@/components/zetta/Footer';
import WaitlistCTA from '@/components/zetta/WaitlistCTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BACKENDS = ['C++', 'CPU', 'CUDA', 'MLX', 'ROCm', 'Vulkan', 'SYCL', 'GCP TPU', 'AWS Neuron ASIC'];
const PLATFORMS = ['macOS', 'Linux', 'Windows', 'x86', 'ARM'];
const CLOUDS = ['AWS', 'GCP', 'Azure', 'Oracle Cloud', 'Kubernetes', 'Bare metal'];

const PROPERTIES = [
  {
    icon: Cpu,
    title: 'Compute near the data',
    body: 'Rather than pulling data out to a warehouse, processing it, and pushing it back, the work runs on the node where the data sits. Generated and hand-written logic executes next to the bytes — lower latency, and nothing leaves the environment.',
  },
  {
    icon: Thermometer,
    title: 'Tiered storage',
    body: 'Expensive source data is pulled into fast in-memory indexes, aged out to cheap cold storage as it cools, and re-warmed on request. The same questions stop carrying warehouse-scale cost every time they are asked.',
  },
  {
    icon: Network,
    title: 'An equal-peer cluster',
    body: 'Nodes form a replicated, self-healing cluster of equal peers — a laptop, a server, or a cloud instance are the same kind of node. Adding capacity is joining a node; the topology spans from a single machine to a private cloud.',
  },
];

const PERSONALIZE = [
  {
    icon: Lightbulb,
    title: 'Auto-Suggest',
    body: 'You don’t have to know what to do with your data. Orama Zetta studies it — and how you work — and hands back personalized, high-value use cases, ranked and ready. It takes the guesswork out of using AI.',
  },
  {
    icon: Bot,
    title: 'Auto-RL',
    accent: true,
    body: 'It auto-trains a long-horizon, tool-calling agent on your data with reinforcement learning — the “trained on your data” hard part, done by AI rather than a brittle hand-coded harness. The agent arrives already fluent in your systems.',
  },
  {
    icon: Plug,
    title: 'Personalized MCP',
    body: 'Talk to Orama Zetta over MCP, and the interface adapts to you. The same endpoint that serves your agents shapes its tools and responses to your preferences — every surface personalized, not one-size-fits-all.',
  },
];

export default function Technology() {
  const heroRef = useScrollReveal();
  const spineRef = useScrollReveal();
  const propsRef = useScrollReveal();
  const learnRef = useScrollReveal();
  const personalizeRef = useScrollReveal();
  const nameRef = useScrollReveal();

  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        {/* Intro */}
        <section className="py-[clamp(48px,6vw,88px)]" ref={heroRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              TECHNOLOGY · THE ENGINE
            </div>
            <h1 className="text-[clamp(40px,5vw,64px)] font-semibold tracking-[-0.04em] leading-[0.98] text-charcoal mb-8 max-w-[20ch]" data-reveal>
              The engine underneath: Orama Zetta.
            </h1>
            <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.6]" data-reveal>
              Orama Zetta is more than a database, more than an AI compute cluster, more than an infrastructure
              orchestrator — it is the world's first adaptive database. It keeps data where it lives, runs the work
              next to it, and tiers it from fast memory down to cheap cold storage, so deployed intelligence is fast,
              economical, and contained within your walls.
            </p>
            <div className="mt-7" data-reveal>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface border border-brand-border font-mono text-[12px] uppercase tracking-[0.06em] text-charcoal">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                From the creator of OpenShift
              </span>
            </div>
          </div>
        </section>

        {/* Spine + substrate */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={spineRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6">
                <span className="text-charcoal mr-2">01</span>SPINE & SUBSTRATE
              </div>
              <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal mb-6">
                One engine, both control plane and substrate.
              </h2>
              <p className="text-[17px] text-muted-foreground leading-[1.6] mb-4">
                As the <span className="text-charcoal">spine</span>, Orama Zetta holds the platform’s own state — the
                deployed graphs, the node registry, the run history — in a replicated store. The control plane lives
                on the same engine it deploys; there is no separate database to operate alongside it.
              </p>
              <p className="text-[17px] text-muted-foreground leading-[1.6]">
                As the <span className="text-charcoal">substrate</span>, it is where the data and compute live —
                indexes served from the node, and workflows that execute where the bytes already are.
              </p>
            </div>
            <div data-reveal className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2.5 mb-5">
                <Layers className="w-5 h-5 text-coral" strokeWidth={1.5} />
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal">One engine</span>
              </div>
              {[
                { k: 'Control plane', v: 'graphs · registry · run history' },
                { k: 'Data substrate', v: 'full-text · vector · graph indexes' },
                { k: 'Compute', v: 'workflows run on the node' },
                { k: 'Replication', v: 'equal-peer · self-healing' },
              ].map((r, i, arr) => (
                <div
                  key={r.k}
                  className={`flex items-center justify-between py-3 ${i < arr.length - 1 ? 'border-b border-brand-border' : ''}`}
                >
                  <span className="text-[14px] text-charcoal">{r.k}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three properties */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-white" ref={propsRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              <span className="text-charcoal mr-2">02</span>WHY IT'S FAST & CONTAINED
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal max-w-[18ch]" data-reveal>
              The work comes to the data.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {PROPERTIES.map((p) => (
                <div key={p.title} data-reveal className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="w-11 h-11 rounded-xl bg-surface border border-brand-border flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[18px] font-medium text-charcoal mb-3 tracking-[-0.01em]">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Native compute + platform + cloud support */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6" data-reveal>
              <div className="bg-surface border border-brand-border rounded-2xl p-7 flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal mb-2">Heterogeneous compute</div>
                <p className="text-sm text-muted-foreground leading-[1.6] mb-5">
                  Native compute across CPUs, every major GPU, and ASICs for ML training (Trainium) and inference
                  (Inferentia) — not one vendor's.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {BACKENDS.map((b) => (
                    <span key={b} className="font-mono text-[13px] px-3 py-1.5 rounded-lg bg-coral/10 border border-coral/30 text-coral">{b}</span>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-brand-border rounded-2xl p-7 flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal mb-2">Every platform</div>
                <p className="text-sm text-muted-foreground leading-[1.6] mb-5">
                  Every operating system and architecture — from a laptop to a data center, the same kind of node.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {PLATFORMS.map((pf) => (
                    <span key={pf} className="font-mono text-[13px] px-3 py-1.5 rounded-lg bg-white border border-brand-border text-charcoal">{pf}</span>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-brand-border rounded-2xl p-7 flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal mb-2">Any cloud, hybrid</div>
                <p className="text-sm text-muted-foreground leading-[1.6] mb-5">
                  All major clouds, Kubernetes, and bare metal — hybrid cloud and hybrid architectures by design, never locked to one.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {CLOUDS.map((cl) => (
                    <span key={cl} className="font-mono text-[13px] px-3 py-1.5 rounded-lg bg-white border border-brand-border text-charcoal">{cl}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8" data-reveal>
              <a href="/true-hybrid" className="inline-flex items-center gap-2 text-sm font-medium text-coral no-underline hover:text-coral-hover transition-colors">
                One cluster, every vendor — explore true hybrid →
              </a>
            </div>
          </div>
        </section>

        {/* Learns from your data */}
        <section id="learning" className="scroll-mt-24 py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={learnRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6">
                <span className="text-charcoal mr-2">03</span>LEARNING, NOT INFERENCE
              </div>
              <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal mb-6">
                If you’re not training on your data, you’re not fully using AI.
              </h2>
              <p className="text-[17px] text-muted-foreground leading-[1.6] mb-4">
                Prompting a general-purpose model only borrows what that model already knew; it never gets better at
                your business, because it never learned from your data. Orama Zetta does the actual work of learning —
                it trains the models and pipelines your problem needs on your own data. True predictive power comes
                only from training on your own data — and real solutions are rarely a single model: several often work
                together as an ensemble, each with measured accuracy and explained drivers.
              </p>
              <p className="text-[17px] text-muted-foreground leading-[1.6]">
                And learning compounds. The more of your data flows through it, the further it pulls ahead of a
                system that only retrieves and prompts.
              </p>
            </div>
            <div data-reveal className="bg-white border border-brand-border rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-2 gap-5">
                <div className="border border-brand-border rounded-xl p-5">
                  <Gauge className="w-5 h-5 text-muted-foreground mb-4" strokeWidth={1.5} />
                  <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground mb-1.5">Rented model</div>
                  <div className="text-[13px] text-charcoal leading-[1.45]">Retrieves & prompts. Plateaus at what it already knew.</div>
                </div>
                <div className="border border-coral/30 rounded-xl p-5 bg-coral/[0.03]">
                  <GraduationCap className="w-5 h-5 text-coral mb-4" strokeWidth={1.5} />
                  <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-coral mb-1.5">Trained on your data</div>
                  <div className="text-[13px] text-charcoal leading-[1.45]">Learns your business. Sharpens as it sees more.</div>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-brand-border flex items-end gap-1.5 h-[56px]">
                {[18, 26, 33, 44, 52, 64, 78, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-coral/20 rounded-t relative" style={{ height: `${h}%` }}>
                    <div className="absolute inset-x-0 bottom-0 bg-coral rounded-t" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted-foreground mt-2">
                Accuracy compounds with data seen
              </div>
            </div>
          </div>
        </section>

        {/* Personalized intelligence — auto-suggest, auto-RL, personalized MCP */}
        <section id="personalized" className="scroll-mt-24 py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-white" ref={personalizeRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              <span className="text-charcoal mr-2">04</span>PERSONALIZED INTELLIGENCE
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal max-w-[18ch]" data-reveal>
              It knows you and your data.
            </h2>
            <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.6] mt-8" data-reveal>
              Training on your data is the hard part — it has always needed a scarce expert in the loop, and it is
              where most AI projects quietly fail. Orama Zetta solves it with AI itself, not a brittle hand-coded
              harness: it studies you and your data, proposes what is worth building, and trains the agent to do it —
              so you don’t have to already know the answer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {PERSONALIZE.map((p) => (
                <div
                  key={p.title}
                  data-reveal
                  className={`rounded-2xl p-7 border shadow-[0_2px_12px_rgba(0,0,0,0.04)] ${p.accent ? 'border-coral/30 bg-coral/[0.03]' : 'border-brand-border bg-white'}`}
                >
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${p.accent ? 'border-coral/30 bg-coral/10' : 'border-brand-border bg-surface'}`}>
                    <p.icon className={`w-5 h-5 ${p.accent ? 'text-coral' : 'text-charcoal'}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[18px] font-medium text-charcoal mb-3 tracking-[-0.01em]">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{p.body}</p>
                </div>
              ))}
            </div>

            <p className="text-[15px] text-muted-foreground max-w-[64ch] leading-[1.6] mt-10" data-reveal>
              What to build, the agent to build it, and the interface you reach it through — learned from your data and
              personalized to you, by AI rather than a hand-coded harness.
            </p>
          </div>
        </section>

        {/* The name */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={nameRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              <span className="text-charcoal mr-2">05</span>THE NAME
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal max-w-[22ch]" data-reveal>
              Zetta: a zettabyte is one billion terabytes.
            </h2>
            <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.6] mt-8" data-reveal>
              The name is a statement about the ceiling, not your data. Scale runs one way: going bigger is the hard
              direction, and going smaller is free. An architecture built for the extreme — data where it lives, work
              next to it, storage that tiers from memory to cold and back — is exactly the architecture that is fast
              and economical at the scale you actually run. Solve the largest data problems, and the everyday ones
              come for free.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-2" data-reveal>
              {['kilo', 'mega', 'giga', 'tera', 'peta', 'exa'].map((s) => (
                <span key={s} className="font-mono text-[12px] px-3 py-1.5 rounded-lg bg-surface border border-brand-border text-muted-foreground lowercase">
                  {s}
                </span>
              ))}
              <span className="font-mono text-[12px] px-3 py-1.5 rounded-lg bg-coral/10 border border-coral/30 text-coral lowercase font-medium">
                zetta
              </span>
            </div>
          </div>
        </section>

        <WaitlistCTA eyebrowNum="06" />
      </main>
      <Footer />
    </>
  );
}
