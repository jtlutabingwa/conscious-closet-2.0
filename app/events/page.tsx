import Link from "next/link";

export default function Events() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Join Us</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Upcoming Fictional Events
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto">
          Connect with your community through workshops, webinars, and swap meets. Every event is a step toward a more sustainable future.
        </p>
        <div className="section-divider mt-6" />
      </section>

      {/* Events Table */}
      <section className="px-6 pb-16 max-w-5xl mx-auto animate-fade-up delay-300">
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Eco-Fashion Workshop</td>
                <td>May 10, 2025</td>
                <td>
                  <span className="inline-flex items-center gap-1 text-accent-green text-sm">
                    <span className="w-2 h-2 bg-accent-green rounded-full" />
                    UNC Greensboro
                  </span>
                </td>
                <td className="text-brand-text/70">Learn how to repurpose old clothes into stylish, wearable pieces.</td>
              </tr>
              <tr>
                <td className="font-semibold">Green Wardrobe Webinar</td>
                <td>June 5, 2025</td>
                <td>
                  <span className="inline-flex items-center gap-1 text-accent-terracotta text-sm">
                    <span className="w-2 h-2 bg-accent-terracotta rounded-full" />
                    Online
                  </span>
                </td>
                <td className="text-brand-text/70">Virtual panel on ethical fashion practices and smart shopping tips.</td>
              </tr>
              <tr>
                <td className="font-semibold">Community Swap Meet</td>
                <td>July 22, 2025</td>
                <td>
                  <span className="inline-flex items-center gap-1 text-accent-green text-sm">
                    <span className="w-2 h-2 bg-accent-green rounded-full" />
                    Charlotte, NC
                  </span>
                </td>
                <td className="text-brand-text/70">Swap clothes with others and learn about conscious consumerism.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <h3 className="font-display text-2xl font-bold text-brand-darkest mb-6 text-center">Resources for Attendees</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="https://www.fashionrevolution.org/events/" target="_blank" rel="noopener noreferrer" className="modern-card p-6 hover:border-accent-green/20 group">
            <p className="font-semibold text-brand-darkest group-hover:text-accent-green transition-colors mb-1">Fashion Revolution</p>
            <p className="text-sm text-brand-text/50">Global sustainability events</p>
          </a>
          <a href="https://www.earthday.org/take-action-now/" target="_blank" rel="noopener noreferrer" className="modern-card p-6 hover:border-accent-green/20 group">
            <p className="font-semibold text-brand-darkest group-hover:text-accent-green transition-colors mb-1">Earth Day Toolkit</p>
            <p className="text-sm text-brand-text/50">Take action for the planet</p>
          </a>
          <Link href="/brands" className="modern-card p-6 hover:border-accent-green/20 group">
            <p className="font-semibold text-brand-darkest group-hover:text-accent-green transition-colors mb-1">Brand Directory</p>
            <p className="text-sm text-brand-text/50">Explore sustainable brands</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="cta-section px-8 py-14 md:px-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Want to Host or Suggest an Event?</h3>
          <p className="text-white/70 max-w-lg mx-auto mb-6">
            We&apos;re always looking to grow our impact. Share your event idea with the community.
          </p>
          <Link href="/submit" className="inline-flex items-center gap-2 bg-white text-accent-green font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-cream transition-all hover:-translate-y-0.5">
            Submit Your Event →
          </Link>
        </div>
      </section>
    </>
  );
}