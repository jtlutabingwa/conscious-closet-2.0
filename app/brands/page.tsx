"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Patagonia", desc: "Outdoor gear with environmental activism at its core.", url: "https://www.patagonia.com/", img: "/images/patagonia.png", tag: "Outdoor" },
  { name: "Koru Eco Brand", desc: "Living in harmony with nature through conscious design.", url: "https://koruecobrand.com/", img: "/images/koruecobrand.jpg", tag: "Lifestyle" },
  { name: "Mi Terro", desc: "Harnessing biomass waste to eliminate microplastics.", url: "https://www.miterro.com/", img: "/images/mi-terro.png", tag: "Innovation" },
  { name: "Kotn Clothing", desc: "Finest natural fibres that biodegrade at end of life.", url: "https://kotn.com/", img: "/images/kotn.png", tag: "Essentials" },
  { name: "Reformation", desc: "Making sustainable fashion desirable and accessible.", url: "https://www.thereformation.com/", img: "/images/reformation_logo.jpg", tag: "Women's" },
];

export default function Brands() {
  const [search, setSearch] = useState("");
  const filtered = brands.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.desc.toLowerCase().includes(search.toLowerCase()) ||
      b.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Shop Consciously</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Sustainable Brands
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto mb-8">
          Discover brands that prioritize the planet, people, and quality craftsmanship.
        </p>
        <div className="animate-fade-up delay-300 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search brands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl border border-brand-brown/10 bg-white/80 backdrop-blur-sm focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
          />
        </div>
      </section>

      {/* Brand Grid */}
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((brand, i) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`modern-card group animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold text-brand-darkest px-3 py-1 rounded-full">
                  {brand.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-brand-darkest group-hover:text-accent-green transition-colors mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-brand-text/60 leading-relaxed">{brand.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent-green text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Visit Brand →
                </span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-brand-text/40 py-12">No brands found matching your search.</p>
        )}
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="cta-section px-8 py-14 md:px-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Know a Brand We Should Feature?</h3>
          <p className="text-white/70 max-w-lg mx-auto mb-6">
            Help us grow our directory of sustainable fashion brands.
          </p>
          <Link href="/submit" className="inline-flex items-center gap-2 bg-white text-accent-green font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-cream transition-all hover:-translate-y-0.5">
            Submit a Brand →
          </Link>
        </div>
      </section>
    </>
  );
}