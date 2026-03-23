"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./AuthContext";
 
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
  const { user, userAttributes, loading, handleSignOut } = useAuth();
 
  return (
    <header className="bg-gradient-to-br from-brand-brown to-[#a8764f] text-brand-cream py-6 px-4 border-b-4 border-brand-dark">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          The Conscious Closet
        </h1>
 
        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          {loading ? null : user ? (
            <>
              <span className="text-sm text-brand-cream opacity-80">
                Hi, {userAttributes.name || userAttributes.email || "User"}
              </span>
              <Link
                href="/profile"
                className="text-sm bg-accent-green text-white px-3 py-1 rounded hover:bg-accent-green-dark transition-colors"
              >
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="text-sm bg-brand-dark text-brand-cream px-3 py-1 rounded hover:bg-brand-darkest transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm bg-accent-green text-white px-3 py-1 rounded hover:bg-accent-green-dark transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="text-sm bg-brand-dark text-brand-cream px-3 py-1 rounded hover:bg-brand-darkest transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
 
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
 
        {/* Mobile auth links */}
        {menuOpen && !loading && (
          <div className="w-full flex justify-center gap-4 mt-2">
            {user ? (
              <>
                <Link href="/profile" className="font-bold text-brand-cream hover:text-white" onClick={() => setMenuOpen(false)}>Profile</Link>
                <button onClick={() => { handleSignOut(); setMenuOpen(false); }} className="font-bold text-brand-cream hover:text-white">Sign Out</button>
              </>
            ) : (
              <>
                <Link href="/login" className="font-bold text-brand-cream hover:text-white" onClick={() => setMenuOpen(false)}>Log In</Link>
                <Link href="/signup" className="font-bold text-brand-cream hover:text-white" onClick={() => setMenuOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}