export default function Why() {
  return (
    <>
      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mt-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">The Problem with Fast Fashion</h2>
        <p className="max-w-3xl mx-auto text-center">
          Fast fashion has a massive environmental cost — it pollutes water, contributes to landfill waste,
          and often relies on exploitative labor. By choosing sustainable fashion, you support ethical
          practices and help preserve our planet for future generations.
        </p>
      </section>

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Benefits of Sustainable Fashion</h2>
        <ul className="max-w-xl mx-auto space-y-2 list-disc list-inside">
          <li>Reduces textile waste in landfills</li>
          <li>Minimizes water usage and chemical pollution</li>
          <li>Supports fair wages and safe working conditions</li>
          <li>Promotes long-lasting, quality-made clothing</li>
        </ul>
      </section>

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Fast Fashion vs Sustainable Fashion</h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-2xl mx-auto border-collapse">
            <thead>
              <tr>
                <th className="bg-brand-brown text-brand-cream p-3 border border-brand-brown">Fast Fashion</th>
                <th className="bg-brand-brown text-brand-cream p-3 border border-brand-brown">Sustainable Fashion</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-brand-cream">
                <td className="p-3 border border-brand-brown text-center">Mass production, low quality</td>
                <td className="p-3 border border-brand-brown text-center">Ethically made, durable</td>
              </tr>
              <tr className="even:bg-brand-cream">
                <td className="p-3 border border-brand-brown text-center">High carbon footprint</td>
                <td className="p-3 border border-brand-brown text-center">Eco-conscious materials</td>
              </tr>
              <tr className="even:bg-brand-cream">
                <td className="p-3 border border-brand-brown text-center">Exploitative labor</td>
                <td className="p-3 border border-brand-brown text-center">Fair trade & labor standards</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Did You Know?</h2>
        <ul className="max-w-2xl mx-auto space-y-2 list-disc list-inside">
          <li>It takes 2,700 liters of water to make one cotton shirt — enough for one person to drink for 2.5 years.</li>
          <li>The fashion industry is responsible for 10% of global carbon emissions.</li>
          <li>Clothing production has roughly doubled since 2000, while garment use lifespan has decreased.</li>
        </ul>
      </section>

      <aside className="mx-4 mb-6 p-6">
        <blockquote className="italic border-l-4 border-accent-green pl-5 text-gray-600 max-w-2xl mx-auto">
          &ldquo;Buy less, choose well, make it last.&rdquo; — Vivienne Westwood
        </blockquote>
      </aside>

      <section className="bg-accent-green-pale p-6 mx-4 mb-6 text-center rounded-lg">
        <h3 className="text-xl font-bold mb-2">Make the Switch</h3>
        <p className="mb-4">Join the movement toward conscious fashion. Start by exploring sustainable brands.</p>
        <a href="/brands"
          className="inline-block bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-green-dark transition-colors">
          Explore Brands
        </a>
      </section>
    </>
  );
}