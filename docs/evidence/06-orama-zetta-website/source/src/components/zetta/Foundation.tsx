import { Cpu, MonitorSmartphone, Cloud } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BACKENDS = ['C++', 'CPU', 'CUDA', 'MLX', 'ROCm', 'Vulkan', 'SYCL', 'GCP TPU', 'AWS Neuron ASIC'];
const PLATFORMS = ['macOS', 'Linux', 'Windows', 'x86', 'ARM'];
const CLOUDS = ['AWS', 'GCP', 'Azure', 'Oracle Cloud', 'Kubernetes', 'Bare metal'];

const PILLARS = [
  {
    icon: Cpu,
    label: 'Heterogeneous compute',
    body: "The speed and utilization of native compute — CPUs, every major GPU, and ASICs for ML training (Trainium) and inference (Inferentia). Not one vendor's.",
    chips: BACKENDS,
    accent: true,
  },
  {
    icon: MonitorSmartphone,
    label: 'Every platform',
    body: 'One engine across every operating system and architecture — from a laptop to a data center, the same kind of node.',
    chips: PLATFORMS,
    accent: false,
  },
  {
    icon: Cloud,
    label: 'Any cloud, hybrid',
    body: 'All major clouds, Kubernetes, and bare metal. Hybrid cloud and hybrid architectures by design — never locked to one.',
    chips: CLOUDS,
    accent: false,
  },
];

export default function Foundation() {
  const ref = useScrollReveal();

  return (
    <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border bg-white" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6" data-reveal>
          <span className="text-charcoal mr-2">07</span>THE FOUNDATION
        </div>
        <h2 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal" data-reveal>
          The world's first
          <br />
          adaptive database.
        </h2>
        <p className="text-[19px] text-muted-foreground max-w-[64ch] leading-[1.5] mt-8" data-reveal>
          Orama Zetta is more than a database, more than an AI compute cluster, more than an infrastructure
          orchestrator. It is the world's first adaptive database — the engine that makes deployed, governed
          intelligence fast, economical, and contained within your walls.
        </p>

        <div className="mt-8" data-reveal>
          <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface border border-brand-border font-mono text-[12px] uppercase tracking-[0.06em] text-charcoal">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            From the creator of OpenShift
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              data-reveal
              className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <pillar.icon className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal">{pillar.label}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.6] mb-5">{pillar.body}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {pillar.chips.map((c) => (
                  <span
                    key={c}
                    className={`font-mono text-[13px] px-3 py-1.5 rounded-lg border ${
                      pillar.accent ? 'bg-coral/10 border-coral/30 text-coral' : 'bg-surface border-brand-border text-charcoal'
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2" data-reveal>
          <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted-foreground">
            NVIDIA · AMD · Apple · Intel · Google · AWS
          </span>
          <a
            href="/true-hybrid"
            className="inline-flex items-center gap-2 text-sm font-medium text-coral no-underline hover:text-coral-hover transition-colors"
          >
            Explore true hybrid →
          </a>
        </div>
      </div>
    </section>
  );
}
