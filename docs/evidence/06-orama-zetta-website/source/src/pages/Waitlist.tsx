import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "@/components/zetta/Nav";
import Footer from "@/components/zetta/Footer";

const BASE_COUNT = 74;
const POSITION_KEY = "orama_waitlist_position_v2";
const TOTAL_KEY = "orama_waitlist_total_v2";

export default function Waitlist() {
  const location = useLocation();
  const [position, setPosition] = useState<number>(BASE_COUNT + 1);

  useEffect(() => {
    const state = location.state as { position?: number } | null;
    if (state?.position) {
      setPosition(state.position);
      localStorage.setItem(POSITION_KEY, String(state.position));
      return;
    }
    // Detect arrival from Salesforce redirect (any query string) and allocate a new position
    const isFreshSubmit = location.search.length > 0;
    const storedPosition = localStorage.getItem(POSITION_KEY);

    if (isFreshSubmit || !storedPosition) {
      const total = parseInt(localStorage.getItem(TOTAL_KEY) || String(BASE_COUNT), 10);
      const next = total + 1;
      localStorage.setItem(TOTAL_KEY, String(next));
      localStorage.setItem(POSITION_KEY, String(next));
      setPosition(next);
    } else {
      setPosition(parseInt(storedPosition, 10));
    }
  }, [location.state, location.search]);

  const ahead = Math.max(0, position - 1);

  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        <section className="py-[clamp(96px,12vw,160px)]">
          <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
            <div className="max-w-[640px] mx-auto text-center">
              <h1 className="text-[clamp(40px,5vw,72px)] font-semibold tracking-[-0.03em] leading-[1.0] text-charcoal mb-6">
                You're on the list!
              </h1>

              <p className="text-[19px] text-muted-foreground leading-[1.5] mb-16">
                We'll reach out as design partner access opens up. In the meantime, watch your inbox: launch details
                land there first.
              </p>

              {/* Position counter */}
              <div className="py-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground mb-4">
                  PEOPLE AHEAD OF YOU
                </div>
                <div className="font-mono text-[clamp(56px,7vw,88px)] font-medium text-coral leading-[0.95] tracking-[-0.04em] tabular-nums">
                  {ahead.toLocaleString()}
                </div>
              </div>

              <div className="mt-12">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-charcoal text-white border-none px-[22px] py-3 rounded-xl font-sans text-sm font-medium no-underline hover:bg-charcoal/90 transition-colors"
                >
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
