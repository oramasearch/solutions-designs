export default function TopBanner() {
  return (
    <a href="/#waitlist" className="block bg-surface border-b border-border no-underline group">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,6vw,96px)] py-2.5 text-center text-[13px] text-muted-foreground">
        Orama Zetta is in <span className="text-coral font-medium">design-partner preview</span>. Request access{' '}
        <span className="text-charcoal group-hover:translate-x-0.5 inline-block transition-transform">→</span>
      </div>
    </a>
  );
}
