import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import oramaLogo from '@/assets/orama-logo.png';

function smoothScroll(hash: string) {
  const id = hash.replace(/^\/?#/, '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const LINKS = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/technology', label: 'Technology' },
  { href: '/true-hybrid', label: 'True hybrid' },
  { href: '/who-its-for', label: "Who it's for" },
  { href: '/pricing', label: 'Pricing' },
];

function Wordmark() {
  return (
    <a href="/" className="flex items-center gap-2 no-underline">
      <img src={oramaLogo} alt="Orama" className="h-[26px] w-auto" />
      <span className="font-mono text-[15px] font-medium text-charcoal tracking-[-0.01em]">Zetta</span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleAnchor = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes('#') ? '#' + href.split('#')[1] : null;
    if (hash && window.location.pathname === '/') {
      e.preventDefault();
      smoothScroll(hash);
      setOpen(false);
    }
  }, []);

  return (
    <>
      <nav className="sticky top-0 bg-white/85 backdrop-blur-[12px] border-b border-brand-border z-[100]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)] flex items-center justify-between py-5">
          <Wordmark />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground no-underline hover:text-charcoal transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#waitlist"
              onClick={(e) => handleAnchor(e, '/#waitlist')}
              className="inline-flex items-center gap-2 bg-charcoal text-white border-none px-4 py-2 rounded-xl font-sans text-[13px] font-medium no-underline hover:bg-charcoal/90 transition-colors"
            >
              Request access
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-brand-border bg-white px-[clamp(24px,6vw,96px)] py-6 flex flex-col gap-5">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[15px] text-charcoal no-underline">
                {l.label}
              </a>
            ))}
            <a
              href="/#waitlist"
              onClick={(e) => handleAnchor(e, '/#waitlist')}
              className="inline-flex items-center justify-center bg-coral text-white px-4 py-3 rounded-xl font-sans text-[14px] font-medium no-underline hover:bg-coral-hover transition-colors"
            >
              Request access
            </a>
          </div>
        )}
      </nav>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-[12px] border-t border-brand-border px-4 py-3 safe-bottom">
        <a
          href="/#waitlist"
          onClick={(e) => handleAnchor(e, '/#waitlist')}
          className="flex items-center justify-center w-full bg-coral text-white px-4 py-3.5 rounded-xl font-sans text-[14px] font-medium no-underline hover:bg-coral-hover transition-colors"
        >
          Request access →
        </a>
      </div>
    </>
  );
}
