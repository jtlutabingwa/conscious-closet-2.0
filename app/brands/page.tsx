"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const brands = [
  // Original 5
  { name: "Patagonia", desc: "Pioneer in outdoor gear with environmental activism and recycled materials.", url: "https://www.patagonia.com/", img: "/images/brands/patagonia.png", tag: "Outdoor" },
  { name: "Reformation", desc: "Sustainable fabrics and eco-friendly manufacturing with vintage cool-girl style.", url: "https://www.thereformation.com/", img: "/images/brands/reformation.jpg", tag: "Women's" },
  { name: "Kotn", desc: "Ethically sourced Egyptian cotton basics supporting smallholder farmers.", url: "https://kotn.com/", img: "/images/brands/kotn.png", tag: "Essentials" },
  { name: "Koru Eco Brand", desc: "Living in harmony with nature through conscious, eco-friendly design.", url: "https://koruecobrand.com/", img: "/images/brands/koruecobrand.jpg", tag: "Lifestyle" },
  { name: "Mi Terro", desc: "Transforming biomass waste into sustainable fabrics to end microplastics.", url: "https://www.miterro.com/", img: "/images/brands/mi-terro.png", tag: "Innovation" },
  // New 15
  { name: "Stella McCartney", desc: "Luxury fashion pioneer — no leather, fur, or feathers since 2001.", url: "https://www.stellamccartney.com/", img: "/images/brands/stella-mccartney.jpg", tag: "Luxury" },
  { name: "Eileen Fisher", desc: "Timeless elegance with organic fibers and a take-back upcycling program.", url: "https://www.eileenfisher.com/", img: "/images/brands/eileen-fisher.png", tag: "Women's" },
  { name: "Everlane", desc: "Radical transparency in pricing and ethical factory partnerships worldwide.", url: "https://www.everlane.com/", img: "/images/brands/everlane.png", tag: "Essentials" },
  { name: "Allbirds", desc: "Carbon-neutral sneakers crafted from Merino wool and eucalyptus fibers.", url: "https://www.allbirds.com/", img: "/images/brands/allbirds.jpg", tag: "Footwear" },
  { name: "Girlfriend Collective", desc: "Activewear made from recycled plastic bottles with full supply chain transparency.", url: "https://girlfriendcollective.com/", img: "/images/brands/girlfriend-collective.jpg", tag: "Activewear" },
  { name: "Tentree", desc: "Plants ten trees for every item purchased — apparel with a reforestation mission.", url: "https://www.tentree.com/", img: "/images/brands/tentree.png", tag: "Outdoor" },
  { name: "Pact", desc: "GOTS-certified organic cotton essentials that have saved 1.3 billion gallons of water.", url: "https://wearpact.com/", img: "/images/brands/pact.png", tag: "Essentials" },
  { name: "Nudie Jeans", desc: "Organic cotton denim with free lifetime repairs — built to last, not to waste.", url: "https://www.nudiejeans.com/", img: "/images/brands/nudie-jeans.png", tag: "Denim" },
  { name: "Veja", desc: "Design-forward sneakers with Amazonian rubber, organic cotton, and radical transparency.", url: "https://www.veja-store.com/", img: "/images/brands/veja.png", tag: "Footwear" },
  { name: "People Tree", desc: "Fair Trade fashion pioneer collaborating with artisans in developing countries.", url: "https://www.peopletree.co.uk/", img: "/images/brands/people-tree.png", tag: "Fair Trade" },
  { name: "Outerknown", desc: "Surf-inspired sustainable fashion using recycled materials and organic cotton.", url: "https://www.outerknown.com/", img: "/images/brands/outerknown.png", tag: "Men's" },
  { name: "Thought Clothing", desc: "Timeless eco-friendly designs made from bamboo, hemp, and organic cotton.", url: "https://www.thoughtclothing.com/", img: "/images/brands/thought.png", tag: "Lifestyle" },
  { name: "ABLE", desc: "Ethical fashion empowering women in vulnerable communities with fair wages.", url: "https://www.livefashionable.com/", img: "/images/brands/able.png", tag: "Women's" },
  { name: "Ecoalf", desc: "Turning ocean waste into fashion — B Corp certified with net-zero goals by 2030.", url: "https://ecoalf.com/", img: "/images/brands/ecoalf.png", tag: "Innovation" },
  { name: "Lucy & Yak", desc: "Colorful dungarees and basics with 98% organic or recycled fabrics and fair wages.", url: "https://lucyandyak.com/", img: "/images/brands/lucy-yak.png", tag: "Essentials" },
];

function sanitizeSearch(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[<>'"`;]/g, '')
    .slice(0, 100);
}

export default function Brands() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(sanitizeSearch(e.target.value));
  };

  const tags = [...new Set(brands.map(b => b.tag))];

  const filtered = brands.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.desc.toLowerCase().includes(search.toLowerCase()) ||
      b.tag.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !activeTag || b.tag === activeTag;
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <section className="px-6 pt-16 pb-8 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Shop Consciously</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Sustainable Brands
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto mb-6">
          Discover {brands.length} brands that prioritize the planet, people, and quality craftsmanship.
        </p>
        <div className="animate-fade-up delay-300 max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Search brands..."
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-card group"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-brand-darkest px-2.5 py-1 rounded-full">
                  {brand.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-brand-darkest group-hover:text-accent-green transition-colors mb-1.5">
                  {brand.name}
                </h3>
                <p className="text-xs text-brand-text/60 leading-relaxed">{brand.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent-green text-xs font-medium mt-3 group-hover:gap-2 transition-all">
                  Visit Brand →
                </span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-brand-text/40 py-12">No brands found matching your search.</p>
        )}

        <p className="text-center text-sm text-brand-text/40 mt-8">
          Showing {filtered.length} of {brands.length} brands
        </p>
      </section>

      <section className="px-6 pb-8 max-w-4xl mx-auto">
        <div className="bg-brand-linen/50 rounded-xl p-6 border border-brand-brown/5">
          <p className="text-xs text-brand-text/40 leading-relaxed text-center">
            All brand names, logos, and trademarks displayed on this page are the property of their respective owners. The Conscious Closet is not affiliated with, sponsored by, or endorsed by any of the brands listed above. Brands are featured for educational purposes only to help users discover sustainable fashion options. Brand descriptions are written by The Conscious Closet team based on publicly available information.
          </p>
        </div>
      </section>

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