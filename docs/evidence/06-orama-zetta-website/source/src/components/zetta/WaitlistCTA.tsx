import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TALLY_FORM_ID = '2E1oLM';

interface WaitlistCTAProps {
  eyebrowNum?: string;
  heading?: React.ReactNode;
  lead?: React.ReactNode;
}

export default function WaitlistCTA({
  eyebrowNum = '07',
  heading = (
    <>
      From intent to deployed
      <br />
      intelligence — in minutes.
    </>
  ),
  lead = 'Orama Zetta is available to a small group of design partners. Share the problem you would bring to it, and our team will be in touch.',
}: WaitlistCTAProps) {
  const ref = useScrollReveal();
  const navigate = useNavigate();

  // Load Tally embed script once
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://tally.so/widgets/embed.js"]');
    const load = () => {
      // @ts-expect-error Tally injected globally
      if (typeof window.Tally !== 'undefined') window.Tally.loadEmbeds();
    };
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://tally.so/widgets/embed.js';
      s.async = true;
      s.onload = load;
      document.body.appendChild(s);
    } else {
      load();
    }
  }, []);

  // Listen for Tally submission events and redirect to /waitlist
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return;
      if (!e.data.includes('Tally.FormSubmitted')) return;
      try {
        const payload = JSON.parse(e.data);
        if (payload?.event === 'Tally.FormSubmitted' && payload?.payload?.formId === TALLY_FORM_ID) {
          navigate('/waitlist?submitted=1');
        }
      } catch {
        /* ignore */
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [navigate]);

  return (
    <section className="py-[clamp(96px,12vw,160px)] border-t border-brand-border" id="waitlist" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="max-w-[640px] mx-auto text-center">
          <div className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-6 text-center" data-reveal>
            <span className="text-charcoal mr-2">{eyebrowNum}</span>DESIGN-PARTNER ACCESS
          </div>
          <h2 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal mb-6" data-reveal>
            {heading}
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-[60ch] leading-[1.5] mx-auto mb-12 text-center" data-reveal>
            {lead}
          </p>

          <div data-reveal className="max-w-[520px] mx-auto">
            <iframe
              data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
              loading="lazy"
              width="100%"
              height="320"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Orama Zetta design-partner waitlist"
            />
            <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.06em] mt-6">
              IN YOUR FIREWALL · NO DATA LEAVES YOUR WALLS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
