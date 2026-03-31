import Link from "next/link";
import Image from "next/image";

export default function Info() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Knowledge is Power</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Sustainability Info
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto leading-relaxed">
          Understanding sustainable fashion is the first step to making a difference. Learn about materials, practices, and the lifecycle of conscious clothing.
        </p>
        <div className="section-divider mt-6" />
      </section>

      {/* Inspired By */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-accent-green-pale to-brand-linen rounded-2xl p-8 md:p-10 border border-accent-green/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0 text-center">
              <div className="w-20 h-20 rounded-2xl bg-accent-green/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-display text-3xl">📖</span>
              </div>
              <p className="text-xs text-accent-green font-semibold uppercase tracking-widest">Inspired By</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-brand-darkest mb-3">
                <em>The Conscious Closet</em> by Elizabeth L. Cline
              </h3>
              <p className="text-brand-text/70 leading-relaxed mb-4">
                This platform was inspired by Elizabeth L. Cline&apos;s groundbreaking book <em>The Conscious Closet: The Revolutionary Guide to Looking Good While Doing Good</em>, which opened our eyes to the true impact of fast fashion and showed us that building a sustainable wardrobe is both achievable and rewarding. Her work has been a guiding light for our mission to educate and empower.
              </p>
              <p className="text-brand-text/70 leading-relaxed mb-4">
                We encourage everyone interested in sustainable fashion to read Elizabeth&apos;s book — it&apos;s the definitive guide to making mindful clothing choices and understanding the fashion industry&apos;s impact on people and the planet.
              </p>
              <a
                href="https://www.elizabethclinebooks.com/the-conscious-closet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-green font-semibold text-sm hover:underline"
              >
                Learn more about the book →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is sustainable fashion */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="modern-card p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-brand-darkest mb-4">What is Sustainable Fashion?</h3>
          <p className="text-brand-text/70 leading-relaxed mb-8">
            Sustainable fashion refers to clothing that is designed, manufactured, distributed, and used in environmentally and socially responsible ways. It reduces pollution, conserves resources, and promotes ethical labor practices. By opting for eco-conscious materials and upcycling garments, we can significantly cut down the fashion industry&apos;s carbon footprint.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Image src="/images/sub_pic1.png" alt="Sustainable cycle" width={300} height={200} className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500" />
            <Image src="/images/recycled-clothing-process.jpg" alt="Recycled clothing process" width={300} height={200} className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500" />
            <Image src="/images/ethical-production.webp" alt="Ethical production" width={300} height={200} className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="px-6 py-16 bg-brand-linen/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Foundation</p>
            <h3 className="font-display text-3xl font-bold text-brand-darkest">Core Pillars of Sustainability</h3>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="modern-card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-green text-xl">🌍</span>
              </div>
              <h4 className="font-display text-lg font-semibold mb-2">Environmental</h4>
              <p className="text-sm text-brand-text/60 leading-relaxed">Reducing pollution, waste, and resource consumption across the entire supply chain.</p>
            </div>
            <div className="modern-card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-terracotta text-xl">🤝</span>
              </div>
              <h4 className="font-display text-lg font-semibold mb-2">Social</h4>
              <p className="text-sm text-brand-text/60 leading-relaxed">Supporting fair wages, safe working conditions, and labor rights for garment workers worldwide.</p>
            </div>
            <div className="modern-card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-gold text-xl">💰</span>
              </div>
              <h4 className="font-display text-lg font-semibold mb-2">Economic</h4>
              <p className="text-sm text-brand-text/60 leading-relaxed">Creating long-lasting, quality garments that save money and reduce waste over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrics */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Materials</p>
          <h3 className="font-display text-3xl font-bold text-brand-darkest">Common Sustainable Fabrics</h3>
          <div className="section-divider mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {["Organic Cotton", "Bamboo", "Tencel (Lyocell)", "Recycled Polyester", "Hemp"].map((fabric) => (
            <div key={fabric} className="modern-card p-5 text-center hover:border-accent-green/20">
              <p className="font-semibold text-sm text-brand-darkest">{fabric}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Image src="/images/sustainable-clothing-materials.png" alt="Sustainable materials" width={300} height={200} className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500" />
          <Image src="/images/types.jpg" alt="Types of sustainable fabrics" width={300} height={200} className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500" />
          <Image src="/images/textile-impact.png" alt="Textile impact" width={300} height={200} className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500" />
        </div>
      </section>

      {/* Life Cycle */}
      <section className="px-6 py-16 bg-brand-linen/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Full Circle</p>
            <h3 className="font-display text-3xl font-bold text-brand-darkest">The Life Cycle of Sustainable Fashion</h3>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Design", desc: "Low-impact materials and minimal waste patterns" },
              { step: "02", title: "Production", desc: "Ethical manufacturing with fair labor practices" },
              { step: "03", title: "Use", desc: "Longevity through quality, repair, and reuse" },
              { step: "04", title: "End of Life", desc: "Recycling or upcycling to prevent landfill waste" },
            ].map((item) => (
              <div key={item.step} className="modern-card p-6 text-center">
                <span className="font-display text-3xl font-bold text-accent-green/20 block mb-2">{item.step}</span>
                <h4 className="font-display text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-brand-text/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & CTA */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-darkest mb-6">Resources</h3>
            <div className="space-y-3">
              <a href="https://www.elizabethclinebooks.com/the-conscious-closet" target="_blank" rel="noopener noreferrer" className="block modern-card p-5 hover:border-accent-green/20 group">
                <p className="font-semibold group-hover:text-accent-green transition-colors">The Conscious Closet (Book)</p>
                <p className="text-sm text-brand-text/50">By Elizabeth L. Cline — the book that inspired this platform</p>
              </a>
              <a href="https://www.fashionrevolution.org/" target="_blank" rel="noopener noreferrer" className="block modern-card p-5 hover:border-accent-green/20 group">
                <p className="font-semibold group-hover:text-accent-green transition-colors">Fashion Revolution</p>
                <p className="text-sm text-brand-text/50">Global movement for transparency in fashion</p>
              </a>
              <a href="https://goodonyou.eco/" target="_blank" rel="noopener noreferrer" className="block modern-card p-5 hover:border-accent-green/20 group">
                <p className="font-semibold group-hover:text-accent-green transition-colors">Good On You</p>
                <p className="text-sm text-brand-text/50">Brand ratings for ethical fashion</p>
              </a>
              <a href="https://www.commonobjective.co/" target="_blank" rel="noopener noreferrer" className="block modern-card p-5 hover:border-accent-green/20 group">
                <p className="font-semibold group-hover:text-accent-green transition-colors">Common Objective</p>
                <p className="text-sm text-brand-text/50">Business intelligence for sustainable fashion</p>
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="cta-section w-full px-8 py-12 text-center">
              <h3 className="font-display text-2xl font-bold mb-3">Want to Learn More?</h3>
              <p className="text-white/70 mb-6">Explore our curated directory of sustainable brands.</p>
              <Link href="/brands" className="inline-flex items-center gap-2 bg-white text-accent-green font-semibold px-6 py-3 rounded-xl hover:bg-brand-cream transition-all hover:-translate-y-0.5">
                Brand Directory →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}