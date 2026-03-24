"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/submit", label: "Submit" },
  { href: "/events", label: "Events" },
  { href: "/brands", label: "Brands" },
  { href: "/info", label: "Learn" },
  { href: "/why", label: "Why?" },
  { href: "/gallery", label: "Gallery" },
  { href: "/take-action", label: "Act" },
  { href: "/founder", label: "Founder" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, userAttributes, loading, handleSignOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-r from-brand-dark via-brand-brown to-brand-dark py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="group">
            <h1 className="font-display text-xl md:text-2xl font-bold text-brand-cream tracking-tight">
              The Conscious
              <span className="text-accent-sage group-hover:text-accent-gold transition-colors duration-300"> Closet</span>
            </h1>
          </Link>

          {/* Desktop auth */}
          <div className="hidden lg:flex items-center gap-3">
            {loading ? null : user ? (
              <>
                <span className="text-sm text-brand-cream/70">
                  {userAttributes.name || userAttributes.email}
                </span>
                <Link href="/profile" className="text-sm text-accent-sage hover:text-accent-gold transition-colors font-medium">
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-brand-cream/60 hover:text-brand-cream transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors font-medium">
                  Log In
                </Link>
                <Link href="/signup" className="text-sm bg-accent-green text-brand-cream px-4 py-2 rounded-lg hover:bg-accent-green-dark transition-all hover:-translate-y-0.5">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-brand-cream p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-brand-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-brand-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-brand-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Navigation */}
        <nav className={`lg:flex justify-center gap-1 mt-3 ${menuOpen ? "flex flex-col items-center gap-2 mt-4 pb-4" : "hidden lg:flex"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-cream/80 hover:text-brand-cream text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile auth */}
          {menuOpen && !loading && (
            <div className="flex gap-3 mt-2 pt-3 border-t border-white/10">
              {user ? (
                <>
                  <Link href="/profile" className="text-accent-sage font-medium text-sm" onClick={() => setMenuOpen(false)}>Profile</Link>
                  <button onClick={() => { handleSignOut(); setMenuOpen(false); }} className="text-brand-cream/60 text-sm">Sign Out</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-brand-cream/80 text-sm" onClick={() => setMenuOpen(false)}>Log In</Link>
                  <Link href="/signup" className="bg-accent-green text-brand-cream px-4 py-1.5 rounded-lg text-sm" onClick={() => setMenuOpen(false)}>Sign Up</Link>
                </>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}