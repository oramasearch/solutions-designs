import { DollarSign, Shuffle, ShieldCheck } from 'lucide-react';
import Nav from '@/components/zetta/Nav';
import Footer from '@/components/zetta/Footer';
import WaitlistCTA from '@/components/zetta/WaitlistCTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Cost',
    body: 'Run each workload on the cheapest hardware that fits, and spend the capacity you already own or have idle before renting more. Burst into a cloud only when needed, under a cost cap. No premium for standardizing on one vendor.',
  },
  {
    icon: Shuffle,
    title: 'Flexibility',
    body: 'Mix any vendor, architecture, and cloud in a single cluster. Adopt new silicon as a backend, not a re-architecture — place each workload where it runs best instead of forcing the whole system onto one platform’s terms.',
  },
  {
    icon: ShieldCheck,
    title: 'Resilience',
    body: 'Not susceptible to a single vendor’s outages or degradations. An outage or slowdown in one cloud, region, or GPU vendor does not take the cluster down — equal peers self-heal, healthy nodes pick up the pending work, and the job keeps running on whatever is still up.',
  },
];

const COMPUTE = [
  { backend: 'CPU', vendor: 'x86-64 · ARM' },
  { backend: 'CUDA', vendor: 'NVIDIA GPU' },
  { backend: 'ROCm', vendor: 'AMD GPU' },
  { backend: 'MLX', vendor: 'Apple silicon' },
  { backend: 'Vulkan', vendor: 'Cross-vendor GPU' },
  { backend: 'SYCL', vendor: 'Intel · oneAPI / cross-vendor' },
  { backend: 'GCP TPU', vendor: 'Google ASIC' },
  { backend: 'AWS Neuron ASIC', vendor: 'Trainium · Inferentia' },
];

const PLATFORMS = ['macOS', 'Linux', 'Windows', 'x86', 'ARM'];
const CLOUDS = ['AWS', 'GCP', 'Azure', 'Oracle Cloud', 'Kubernetes', 'Bare metal'];

export default function TrueHybrid() {
  const heroRef = useScrollReveal();
  const meaningRef = useScrollReveal();
  const benefitRef = useScrollReveal();
  const matrixRef = useScrollReveal();

  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        {/* Intro */}
        <section className="py-[clamp(48px,6vw,88px)]" ref={heroRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              TRUE HYBRID
            </div>
            <h1 className="text-[clamp(40px,5vw,64px)] font-semibold tracking-[-0.04em] leading-[0.98] text-charcoal mb-8 max-w-[18ch]" data-reveal>
              One cluster. Every vendor. Every architecture.
            </h1>
            <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.6]" data-reveal>
              Most "hybrid" means you can deploy to more than one place. True hybrid means a single cluster spans them
              at once — CPUs, GPUs, and ASICs from any vendor, across operating systems, architectures, on-prem, and
              multiple clouds — and squeezes the most out of whatever hardware you give it.
            </p>
          </div>
        </section>

        {/* What it means */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={meaningRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              <span className="text-charcoal mr-2">01</span>WHAT IT MEANS
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal max-w-[20ch]" data-reveal>
              Heterogeneous by design, not by exception.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              <div data-reveal className="bg-white border border-brand-border rounded-2xl p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.07em] text-muted-foreground mb-4">Conventional hybrid</div>
                <p className="text-[15px] text-muted-foreground leading-[1.6]">
                  Pick one target per deployment — this cloud or that one, on-prem or managed. Adding a different
                  vendor or chip means a separate stack, and idle hardware stays idle.
                </p>
              </div>
              <div data-reveal className="bg-white border border-coral/30 rounded-2xl p-8 shadow-[0_4px_20px_rgba(226,84,90,0.06)]">
                <div className="font-mono text-[10px] uppercase tracking-[0.07em] text-coral mb-4">True hybrid</div>
                <p className="text-[15px] text-charcoal leading-[1.6]">
                  One equal-peer cluster whose nodes are deliberately not uniform. Work flows to whatever each node
                  runs best — a GPU box, a CPU rack, an on-prem server, and a cloud burst all contributing to the same
                  job at once.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost / Flexibility / Resilience */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-white" ref={benefitRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              <span className="text-charcoal mr-2">02</span>THE PAYOFF
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal max-w-[22ch]" data-reveal>
              Ultimate control over cost, flexibility, and resilience.
            </h2>
            <p className="text-[19px] text-muted-foreground max-w-[60ch] leading-[1.5] mt-8" data-reveal>
              Because the cluster is never bound to one vendor’s hardware, prices, or availability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {BENEFITS.map((b) => (
                <div key={b.title} data-reveal className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="w-11 h-11 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center mb-5">
                    <b.icon className="w-5 h-5 text-coral" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-medium tracking-[-0.02em] text-charcoal mb-3">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support matrix */}
        <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-surface" ref={matrixRef}>
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
              <span className="text-charcoal mr-2">03</span>WHAT IT SPANS
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] text-charcoal max-w-[20ch]" data-reveal>
              Every major vendor, in one cluster.
            </h2>

            {/* Compute backends with vendors */}
            <div className="mt-14 bg-white border border-brand-border rounded-2xl overflow-hidden" data-reveal>
              <div className="px-6 py-4 border-b border-brand-border font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal">
                Heterogeneous compute — built in C++ and use-case-specific, fused GPU kernels for native speed and transformational cost profiles
              </div>
              {COMPUTE.map((c, i) => (
                <div
                  key={c.backend}
                  className={`grid grid-cols-[140px_1fr] md:grid-cols-[220px_1fr] gap-4 px-6 py-3.5 items-center ${
                    i < COMPUTE.length - 1 ? 'border-b border-brand-border' : ''
                  }`}
                >
                  <span className="font-mono text-[13px] px-3 py-1.5 rounded-lg bg-coral/10 border border-coral/30 text-coral justify-self-start">
                    {c.backend}
                  </span>
                  <span className="text-[14px] text-muted-foreground">{c.vendor}</span>
                </div>
              ))}
            </div>

            {/* Platforms + clouds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div data-reveal className="bg-white border border-brand-border rounded-2xl p-7">
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal mb-4">Platforms & architectures</div>
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS.map((p) => (
                    <span key={p} className="font-mono text-[13px] px-3 py-1.5 rounded-lg bg-surface border border-brand-border text-charcoal">{p}</span>
                  ))}
                </div>
              </div>
              <div data-reveal className="bg-white border border-brand-border rounded-2xl p-7">
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal mb-4">Clouds & deployment</div>
                <div className="flex flex-wrap gap-2">
                  {CLOUDS.map((cl) => (
                    <span key={cl} className="font-mono text-[13px] px-3 py-1.5 rounded-lg bg-surface border border-brand-border text-charcoal">{cl}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[13px] text-muted-foreground leading-[1.6] mt-8 max-w-[68ch]" data-reveal>
              Spread a job across two clouds and a rack of your own metal, and any one of them can fail without
              stopping it. New silicon arrives as a backend — additive, never a re-architecture.
            </p>
          </div>
        </section>

        <WaitlistCTA eyebrowNum="04" />
      </main>
      <Footer />
    </>
  );
}
