"use client";
import { useState } from "react";

const outfits = [
  { alt: "Recycled denim jacket", caption: "Recycled denim jacket with organic cotton tee" },
  { alt: "Hemp dress", caption: "Elegant hemp dress" },
  { alt: "Bamboo shirt", caption: "Soft bamboo fiber shirt" },
  { alt: "Upcycled jeans", caption: "Upcycled jeans transformed into patchwork fashion" },
  { alt: "Recycled bag", caption: "2 tone recycled promotional bag in cotton and recycled polyester" },
];

export default function Gallery() {
  const [search, setSearch] = useState("");

  const filtered = outfits.filter((o) =>
    o.caption.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mx-4 mt-6 mb-6">
      <input
        type="text"
        placeholder="Search outfits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="block mx-auto w-full max-w-md p-3 rounded-lg border border-gray-300 mb-6 focus:border-accent-green focus:outline-none"
      />
      <h2 className="text-2xl font-bold mb-6 text-center">Eco-Friendly Outfit Inspirations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {filtered.map((outfit) => (
          <div
            key={outfit.alt}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="h-64 bg-brand-warm flex items-center justify-center text-brand-brown text-sm">
              [Image: {outfit.alt}]
            </div>
            <div className="p-3 text-center text-sm text-gray-700">{outfit.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}