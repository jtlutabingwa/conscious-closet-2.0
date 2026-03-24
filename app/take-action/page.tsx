"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const quotes = [
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
  { text: "Buy less, choose well, make it last.", author: "Vivienne Westwood" },
  { text: "Small acts, when multiplied by millions, can transform the world.", author: "Howard Zinn" },
  { text: "You cannot get through a single day without having an impact on the world around you.", author: "Jane Goodall" },
];

const actions = [
  { title: "Donate Clothes", desc: "Instead of tossing unwanted garments, give them a second life through local shelters or clothing drives.", icon: "🎁" },
  { title: "Use Eco Detergents", desc: "Switch to plant-based, biodegradable detergents that protect waterways and your skin.", icon: "🧴" },
  { title: "Shop Sustainably", desc: "Choose locally-made or verified sustainable brands that prioritize ethical production.", icon: "🛍" },
  { title: "Repair & Mend", desc: "Learn basic sewing skills to extend the life of your favorite garments instead of replacing them.", icon: "🪡" },
  { title: "Clothing Swaps", desc: "Organize or attend swap events to refresh your wardrobe without buying anything new.", icon: "🔄" },
  { title: "Educate Others", desc: "Share what you know about sustainable fashion with friends, family, and your community.", icon: "📢" },
];

const lifestyle = [
  { title: "Transport", items: ["Bike, walk, or use public transit", "Carpool when driving is necessary"], icon: "🚲" },
  { title: "Consumption", items: ["Choose reusable containers and bags", "Buy in bulk to reduce packaging"], icon: "♻️" },
  { title: "Support", items: ["Back ethical companies", "Value transparency in business"], icon: "🤝" },
];

export default function TakeAction() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Your Move</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          What Can You Do?
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto leading-relaxed">
          Every small action adds up. Here are practical ways to make your daily life more sustainable — starting with your closet.
        </p>
        <div className="section-divider mt-6" />
      </section>

      {/* Actions Grid */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, i) => (
            <div key={action.title} className={`modern-card p-6 animate-fade-up delay-${(i + 1) * 100}`}>
              <span className="text-2xl mb-3 block">{action.icon}</span>
              <h4 className="font-display text-lg font-semibold mb-2">{action.title}</h4>
              <p className="text-sm text-brand-text/60 leading-relaxed">{action.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle */}
      <section className="px-6 py-16 bg-brand-linen/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Beyond Fashion</p>
            <h3 className="font-display text-3xl font-bold text-brand-darkest">Make it a Lifestyle</h3>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifestyle.map((cat) => (
              <div key={cat.title} className="modern-card p-8">
                <span className="text-3xl mb-4 block">{cat.icon}</span>
                <h4 className="font-display text-xl font-semibold mb-4">{cat.title}</h4>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-text/70">
                      <span className="text-accent-green mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rotating Quote */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <div className="font-display text-5xl text-accent-green/20 mb-2">&ldquo;</div>
        <blockquote className="font-display text-xl md:text-2xl italic text-brand-text/70 leading-relaxed mb-4 min-h-[80px] transition-opacity duration-500">
          {quotes[quoteIndex].text}
        </blockquote>
        <p className="text-accent-green font-semibold transition-opacity duration-500">— {quotes[quoteIndex].author}</p>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="cta-section px-8 py-14 md:px-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to Take the First Step?</h3>
          <p className="text-white/70 max-w-lg mx-auto mb-6">
            Start today by clearing out your closet and donating clothes you haven&apos;t worn in the past year. Every piece recycled is one less in a landfill.
          </p>
          <Link href="/submit" className="inline-flex items-center gap-2 bg-white text-accent-green font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-cream transition-all hover:-translate-y-0.5">
            Share Your Tip →
          </Link>
        </div>
      </section>
    </>
  );
}