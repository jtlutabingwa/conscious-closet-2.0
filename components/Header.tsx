"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/submit", label: "Submit Ideas" },
  { href: "/events", label: "Events" },
  { href: "/brands", label: "Sustainable Brands" },
  { href: "/info", label: "Sustainability Info" },
  { href: "/why", label: "Why Sustainable?" },
  { href: "/gallery", label: "Fashion Gallery" },
  { href: "/take-action", label: "Take Action" },
  { href: "/founder", label: "Founder" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-brand-brown to-[#a8764f] text-brand-cream py-6 px-4 border-b-4 border-brand-dark">
      <h1 className="text-2xl md:text-3xl font-bold text-center tracking-wide">
        The Conscious Closet - Sustainable Fashion
      </h1>

      {/* Mobile menu button */}
      <button
        className="md:hidden mx-auto mt-3 block text-brand-cream bg-brand-dark px-4 py-2 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Close Menu" : "Menu"}
      </button>

      <nav
        className={`mt-4 flex flex-wrap justify-center gap-4 md:gap-8 ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-bold text-brand-cream hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}