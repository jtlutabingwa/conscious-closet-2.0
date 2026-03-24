import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-green-pale via-brand-cream to-brand-warm opacity-60" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-4">
            Fashion with Purpose
          </p>
          <h2 className="animate-fade-up delay-100 font-display text-4xl md:text-6xl lg:text-7xl font-bold text-brand-darkest leading-tight mb-6">
            Rethink What<br />
            <span className="text-accent-green">You Wear</span>
          </h2>
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-brand-text/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every garment tells a story. Make yours one of sustainability, ethical choices, and conscious living. Join a growing movement of people who dress with intention.
          </p>
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/take-action" className="btn-primary">
              Get Involved →
            </Link>
            <Link href="/info" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stat-card animate-fade-up delay-100">
            <p className="font-display text-4xl font-bold text-accent-green mb-2">2,700L</p>
            <p className="text-sm text-brand-text/60">of water to make a single cotton shirt</p>
          </div>
          <div className="stat-card animate-fade-up delay-200">
            <p className="font-display text-4xl font-bold text-accent-terracotta mb-2">10%</p>
            <p className="text-sm text-brand-text/60">of global carbon emissions from fashion</p>
          </div>
          <div className="stat-card animate-fade-up delay-300">
            <p className="font-display text-4xl font-bold text-accent-gold mb-2">92M</p>
            <p className="text-sm text-brand-text/60">tons of textile waste produced yearly</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-brand-linen/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">The Journey</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-brand-darkest">
              Three Steps to Change
            </h3>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="modern-card p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-green/10 flex items-center justify-center mx-auto mb-5">
                <span className="font-display text-2xl font-bold text-accent-green">1</span>
              </div>
              <h4 className="font-display text-xl font-semibold mb-3">Learn</h4>
              <p className="text-brand-text/60 text-sm leading-relaxed">
                Discover the true cost of fast fashion. Browse our resources, read about sustainable fabrics, and understand the impact of your wardrobe choices.
              </p>
            </div>

            <div className="modern-card p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-terracotta/10 flex items-center justify-center mx-auto mb-5">
                <span className="font-display text-2xl font-bold text-accent-terracotta">2</span>
              </div>
              <h4 className="font-display text-xl font-semibold mb-3">Act</h4>
              <p className="text-brand-text/60 text-sm leading-relaxed">
                Take simple, meaningful steps. Donate clothes you no longer wear, shop from ethical brands, swap with others, and choose quality over quantity.
              </p>
            </div>

            <div className="modern-card p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-5">
                <span className="font-display text-2xl font-bold text-accent-gold">3</span>
              </div>
              <h4 className="font-display text-xl font-semibold mb-3">Inspire</h4>
              <p className="text-brand-text/60 text-sm leading-relaxed">
                Share your sustainable fashion journey. Submit ideas, attend events, and help build a community that values mindful consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Community Voices</p>
            <h3 className="font-display text-3xl font-bold text-brand-darkest">What People Are Saying</h3>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-linen rounded-2xl p-8 border border-brand-brown/5 relative">
              <div className="font-display text-6xl text-accent-green/15 absolute top-4 left-6">&ldquo;</div>
              <p className="italic text-brand-text/70 leading-relaxed relative z-10 mt-6 mb-4">
                The Conscious Closet helped me rethink my wardrobe and connect with local swap events. I feel empowered to make better choices every day.
              </p>
              <p className="text-sm font-semibold text-accent-green">— Ava G.</p>
            </div>

            <div className="bg-brand-linen rounded-2xl p-8 border border-brand-brown/5 relative">
              <div className="font-display text-6xl text-accent-green/15 absolute top-4 left-6">&ldquo;</div>
              <p className="italic text-brand-text/70 leading-relaxed relative z-10 mt-6 mb-4">
                A great place to start your sustainable fashion journey. It&apos;s easy, friendly, and full of helpful tips that actually make a difference.
              </p>
              <p className="text-sm font-semibold text-accent-green">— Marcus T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-8 max-w-5xl mx-auto">
        <div className="cta-section px-8 py-16 md:px-16 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Make a Change?</h3>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Join our growing community of changemakers. Your next outfit choice could help save the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit" className="inline-flex items-center gap-2 bg-white text-accent-green font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-cream transition-all hover:-translate-y-0.5">
              Share Your Idea →
            </Link>
            <Link href="/brands" className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">
              Explore Brands
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}