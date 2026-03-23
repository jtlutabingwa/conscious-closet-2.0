"use client";
import { useState } from "react";

const brands = [
  { name: "Patagonia", desc: "Outdoor gear with environmental activism", url: "https://www.patagonia.com/" },
  { name: "Koru Eco Brand", desc: "Living in harmony with nature!", url: "https://koruecobrand.com/" },
  { name: "Mi Terro", desc: "Enrich The Power of Biomass Waste To End Microplastics!", url: "https://www.miterro.com/" },
  { name: "Kotn Clothing", desc: "Focus on the finest natural fibres", url: "https://kotn.com/" },
  { name: "Reformation", desc: "Being naked is the #1 most sustainable option. We're #2.", url: "https://www.thereformation.com/" },
];

export default function Brands() {
  const [search, setSearch] = useState("");

  const filtered = brands.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="mx-4 mt-6 mb-6">
        <input
          type="text"
          placeholder="Search the brands below..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block mx-auto w-full max-w-md p-3 rounded-lg border border-gray-300 mb-6 focus:border-accent-green focus:outline-none"
        />
        <h2 className="text-2xl font-bold mb-6 text-center">Explore These Eco-Friendly Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {filtered.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 rounded-lg p-5 text-center font-bold text-brand-darkest hover:bg-accent-green-light hover:-translate-y-1 transition-all shadow-sm hover:shadow-md"
            >
              <div className="text-lg mb-2">{brand.name}</div>
              <div className="text-sm font-normal text-gray-600">{brand.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-accent-green-pale p-6 mx-4 mb-6 text-center rounded-lg">
        <h3 className="text-xl font-bold mb-2">Know a Brand We Should Feature?</h3>
        <p className="mb-4">We&apos;d love to hear about your favorite sustainable fashion sources!</p>
        <a href="/submit"
          className="inline-block bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-green-dark transition-colors">
          Submit a Brand
        </a>
      </section>
    </>
  );
}