import Link from "next/link";
 
export default function Why() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <p className="animate-fade-up text-accent-terracotta font-semibold text-sm uppercase tracking-widest mb-3">The Hard Truth</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Why Sustainable Fashion?
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto leading-relaxed">
          Fast fashion has a massive environmental cost — it pollutes water, contributes to landfill waste, and often relies on exploitative labor. Here&apos;s why making the switch matters.
        </p>
        <div className="section-divider mt-6" />
      </section>
 
      {/* Comparison */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-accent-terracotta rounded-full" />
              <h3 className="font-display text-xl font-bold text-accent-terracotta">Fast Fashion</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent-terracotta mt-1">✕</span>
                <span className="text-brand-text/70">Mass production with low quality materials designed to be disposable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-terracotta mt-1">✕</span>
                <span className="text-brand-text/70">High carbon footprint from manufacturing and global shipping</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-terracotta mt-1">✕</span>
                <span className="text-brand-text/70">Exploitative labor practices and unsafe working conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-terracotta mt-1">✕</span>
                <span className="text-brand-text/70">Clothing worn only 7-10 times before being discarded</span>
              </li>
            </ul>
          </div>
 
          <div className="rounded-2xl p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-accent-green rounded-full" />
              <h3 className="font-display text-xl font-bold text-accent-green">Sustainable Fashion</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">✓</span>
                <span className="text-brand-text/70">Ethically made with durable, eco-conscious materials built to last</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">✓</span>
                <span className="text-brand-text/70">Reduced environmental impact through local and clean production</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">✓</span>
                <span className="text-brand-text/70">Fair trade practices with living wages and safe conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">✓</span>
                <span className="text-brand-text/70">Quality garments designed for longevity, repair, and reuse</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
 
      {/* Stats */}
      <section className="px-6 py-16 bg-brand-linen/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">The Numbers</p>
            <h3 className="font-display text-3xl font-bold text-brand-darkest">Did You Know?</h3>
            <div className="section-divider mt-4" />
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-card">
              <p className="font-display text-3xl font-bold text-accent-green mb-2">2,700L</p>
              <p className="text-sm text-brand-text/60 leading-relaxed">of water to make one cotton shirt — enough for one person to drink for 2.5 years</p>
            </div>
            <div className="stat-card">
              <p className="font-display text-3xl font-bold text-accent-terracotta mb-2">10%</p>
              <p className="text-sm text-brand-text/60 leading-relaxed">of global carbon emissions come from the fashion industry alone</p>
            </div>
            <div className="stat-card">
              <p className="font-display text-3xl font-bold text-accent-gold mb-2">2x</p>
              <p className="text-sm text-brand-text/60 leading-relaxed">clothing production has doubled since 2000 while garment lifespan has decreased</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Quote */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <div className="font-display text-5xl text-accent-green/20 mb-2">&ldquo;</div>
        <blockquote className="font-display text-2xl md:text-3xl italic text-brand-text/70 leading-relaxed mb-4">
          Buy less, choose well, make it last.
        </blockquote>
        <p className="text-accent-green font-semibold">— Vivienne Westwood</p>
      </section>
 
      {/* CTA */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="cta-section px-8 py-14 md:px-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Make the Switch</h3>
          <p className="text-white/70 max-w-lg mx-auto mb-6">
            Join the movement toward conscious fashion. Start by exploring sustainable brands and changing one purchase habit at a time.
          </p>
          <Link href="/brands" className="inline-flex items-center gap-2 bg-white text-accent-green font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-cream transition-all hover:-translate-y-0.5">
            Explore Brands →
          </Link>
        </div>
      </section>
    </>
  );
}
