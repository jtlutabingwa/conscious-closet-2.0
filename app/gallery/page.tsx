"use client";
import { useState } from "react";
import Image from "next/image";

const outfits = [
  // Original 5
  { src: "/images/gallery/denim-jacket.jpg", alt: "Recycled denim jacket", caption: "Recycled denim jacket paired with an organic cotton tee", tag: "Recycled" },
  { src: "/images/gallery/hemp-dress.png", alt: "Hemp dress", caption: "Elegant hemp dress — breathable, durable, and biodegradable", tag: "Hemp" },
  { src: "/images/gallery/bamboo-shirt.jpg", alt: "Bamboo shirt", caption: "Soft bamboo fiber shirt that regulates temperature naturally", tag: "Bamboo" },
  { src: "/images/gallery/upcycled-jeans.png", alt: "Upcycled jeans", caption: "Upcycled jeans transformed into one-of-a-kind patchwork fashion", tag: "Upcycled" },
  { src: "/images/gallery/recycled-bag.png", alt: "Recycled bag", caption: "Two-tone promotional bag made from recycled cotton and polyester", tag: "Accessories" },
  // New 10
  { src: "/images/gallery/organic-cotton-tee.jpg", alt: "Organic cotton t-shirt", caption: "Classic organic cotton t-shirt — no pesticides, pure comfort", tag: "Organic" },
  { src: "/images/gallery/linen-blazer.jpg", alt: "Linen blazer", caption: "Breathable linen blazer perfect for warm weather professional style", tag: "Linen" },
  { src: "/images/gallery/recycled-sneakers.jpg", alt: "Recycled sneakers", caption: "Sneakers crafted from recycled ocean plastics and natural rubber", tag: "Footwear" },
  { src: "/images/gallery/tencel-blouse.jpg", alt: "Tencel blouse", caption: "Silky Tencel blouse made from sustainably harvested eucalyptus wood pulp", tag: "Tencel" },
  { src: "/images/gallery/wool-sweater.jpg", alt: "Merino wool sweater", caption: "Ethically sourced Merino wool sweater — warm, breathable, renewable", tag: "Wool" },
  { src: "/images/gallery/thrifted-outfit.jpg", alt: "Thrifted vintage outfit", caption: "Vintage thrift store find — the most sustainable outfit is pre-owned", tag: "Vintage" },
  { src: "/images/gallery/cork-handbag.jpg", alt: "Cork handbag", caption: "Vegan cork leather handbag — harvested without harming the tree", tag: "Accessories" },
  { src: "/images/gallery/hemp-joggers.jpg", alt: "Hemp joggers", caption: "Relaxed hemp joggers that get softer with every wash", tag: "Hemp" },
  { src: "/images/gallery/recycled-puffer.jpg", alt: "Recycled puffer jacket", caption: "Puffer jacket filled with recycled insulation from post-consumer waste", tag: "Recycled" },
  { src: "/images/gallery/organic-dress.jpg", alt: "Organic cotton dress", caption: "Flowing organic cotton dress dyed with natural plant-based colors", tag: "Organic" },
];

const tags = [...new Set(outfits.map(o => o.tag))];

function sanitizeSearch(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[<>'"`;]/g, '')
    .slice(0, 100);
}

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(sanitizeSearch(e.target.value));
  };

  const filtered = outfits.filter((o) => {
    const matchesSearch =
      o.caption.toLowerCase().includes(search.toLowerCase()) ||
      o.tag.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !activeTag || o.tag === activeTag;
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <section className="px-6 pt-16 pb-8 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Get Inspired</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Fashion Gallery
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto mb-6">
          Explore {outfits.length} eco-friendly outfit inspirations that prove sustainability and style go hand in hand.
        </p>
        <div className="animate-fade-up delay-300 max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Search outfits..."
            value={search}
            onChange={handleSearch}
            maxLength={100}
            className="w-full px-5 py-3.5 rounded-xl border border-brand-brown/10 bg-white/80 backdrop-blur-sm focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
          />
        </div>
        {/* Tag filters */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          <button
            onClick={() => setActiveTag(null)}
            className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all ${
              !activeTag
                ? "bg-accent-green text-white"
                : "bg-brand-linen text-brand-text/60 hover:bg-brand-warm"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all ${
                activeTag === tag
                  ? "bg-accent-green text-white"
                  : "bg-brand-linen text-brand-text/60 hover:bg-brand-warm"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((outfit, i) => (
            <div
              key={outfit.alt}
              className="modern-card group cursor-pointer"
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={outfit.src}
                  alt={outfit.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        <p className="text-center text-sm text-brand-text/40 mt-8">
          Showing {filtered.length} of {outfits.length} outfits
        </p>
      </section>

      <section className="px-6 pb-8 max-w-4xl mx-auto">
        <div className="bg-brand-linen/50 rounded-xl p-6 border border-brand-brown/5">
          <p className="text-xs text-brand-text/40 leading-relaxed text-center">
            Images are sourced from royalty-free platforms and used for educational purposes only. All product names and trademarks belong to their respective owners.
          </p>
        </div>
      </section>
    </>
  );
}