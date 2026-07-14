import oramaLogo from '@/assets/orama-logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border pt-12 pb-8">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="flex justify-between items-start flex-wrap gap-8">
          <div className="max-w-[340px]">
            <a href="/" className="flex items-center gap-2 no-underline">
              <img src={oramaLogo} alt="Orama" className="h-[26px] w-auto" />
              <span className="font-mono text-[15px] font-medium text-charcoal tracking-[-0.01em]">Zetta</span>
            </a>
            <div className="text-[13px] text-muted-foreground mt-3 leading-[1.5]">
              Intelligence Velocity for big thinkers.
            </div>
          </div>
          <div className="flex gap-16 max-md:gap-8">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal mb-4 font-medium">Product</h4>
              <a href="/how-it-works" className="block text-sm text-muted-foreground no-underline mb-2.5 hover:text-charcoal transition-colors">How it works</a>
              <a href="/technology" className="block text-sm text-muted-foreground no-underline mb-2.5 hover:text-charcoal transition-colors">Technology</a>
              <a href="/true-hybrid" className="block text-sm text-muted-foreground no-underline mb-2.5 hover:text-charcoal transition-colors">True hybrid</a>
              <a href="/pricing" className="block text-sm text-muted-foreground no-underline mb-2.5 hover:text-charcoal transition-colors">Pricing</a>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal mb-4 font-medium">Audience</h4>
              <a href="/who-its-for" className="block text-sm text-muted-foreground no-underline mb-2.5 hover:text-charcoal transition-colors">Who it's for</a>
              <a href="/#waitlist" className="block text-sm text-muted-foreground no-underline mb-2.5 hover:text-charcoal transition-colors">Design partners</a>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.06em] text-charcoal mb-4 font-medium">Resources</h4>
              <a href="https://oramasearch.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground no-underline mb-2.5 hover:text-charcoal transition-colors">Orama Search</a>
              <a href="/#waitlist" className="block text-sm text-muted-foreground no-underline mb-2.5 hover:text-charcoal transition-colors">Join waitlist</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-brand-border flex justify-between items-center font-mono text-[11px] text-muted-foreground uppercase tracking-[0.06em] gap-6 flex-wrap">
          <div>© 2026 ORAMA</div>
          <div>
            By the team behind{' '}
            <a href="https://oramasearch.com" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-coral transition-colors no-underline">
              Orama Search
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
