import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream/70 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-cream mb-4">
              The Conscious<span className="text-accent-sage"> Closet</span>
            </h3>
            <p className="text-sm leading-relaxed text-brand-cream/50">
              Empowering mindful fashion choices through education, community, and action.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cream/40 mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link href="/info" className="text-sm hover:text-brand-cream transition-colors">Learn About Sustainability</Link>
              <Link href="/brands" className="text-sm hover:text-brand-cream transition-colors">Sustainable Brands</Link>
              <Link href="/gallery" className="text-sm hover:text-brand-cream transition-colors">Fashion Gallery</Link>
              <Link href="/events" className="text-sm hover:text-brand-cream transition-colors">Events</Link>
            </div>
          </div>

          {/* Get involved */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cream/40 mb-4">Get Involved</h4>
            <div className="flex flex-col gap-2">
              <Link href="/submit" className="text-sm hover:text-brand-cream transition-colors">Submit an Idea</Link>
              <Link href="/take-action" className="text-sm hover:text-brand-cream transition-colors">Take Action</Link>
              <Link href="/signup" className="text-sm hover:text-brand-cream transition-colors">Create Account</Link>
              <Link href="/founder" className="text-sm hover:text-brand-cream transition-colors">About the Founder</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-cream/30">
            © 2025 The Conscious Closet | Designed by Lutabingwa Group
          </p>
          <div className="flex gap-6">
            <a href="https://www.fashionrevolution.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-cream/30 hover:text-brand-cream/60 transition-colors">
              Fashion Revolution
            </a>
            <a href="https://goodonyou.eco/" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-cream/30 hover:text-brand-cream/60 transition-colors">
              Good On You
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}