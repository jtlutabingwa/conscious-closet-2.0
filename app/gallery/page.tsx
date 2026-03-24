"use client";
import { useState } from "react";
import Image from "next/image";

const outfits = [
  { src: "/images/denim-jacket.jpg", alt: "Recycled denim jacket", caption: "Recycled denim jacket with organic cotton tee", tag: "Recycled" },
  { src: "/images/hemp-dress.png", alt: "Hemp dress", caption: "Elegant hemp dress for any occasion", tag: "Hemp" },
  { src: "/images/bamboo-shirt.jpg", alt: "Bamboo shirt", caption: "Soft bamboo fiber shirt — breathable and sustainable", tag: "Bamboo" },
  { src: "/images/upcycled-jeans.png", alt: "Upcycled jeans", caption: "Upcycled jeans transformed into patchwork fashion", tag: "Upcycled" },
  { src: "/images/bag.png", alt: "Recycled bag", caption: "Two-tone recycled promotional bag in cotton and recycled polyester", tag: "Accessories" },
];

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = outfits.filter((o) =>
    o.caption.toLowerCase().includes(search.toLowerCase()) ||
    o.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Get Inspired</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Fashion Gallery
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto mb-8">
          Explore eco-friendly outfit inspirations that prove sustainability and style go hand in hand.
        </p>
        <div className="animate-fade-up delay-300 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search outfits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl border border-brand-brown/10 bg-white/80 backdrop-blur-sm focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((outfit, i) => (
            <div
              key={outfit.alt}
              className={`modern-card group cursor-pointer animate-fade-up delay-${(i + 1) * 100}`}
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={outfit.src}
                  alt={outfit.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`modern-card group cursor-pointer animate-fade-up delay-${(i + 1) * 100}`} />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-semibold text-brand-darkest px-3 py-1 rounded-full">
                  {outfit.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm text-brand-text/70 leading-relaxed">{outfit.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-brand-text/40 py-12">No outfits found matching your search.</p>
        )}
      </section>
    </>
  );
}