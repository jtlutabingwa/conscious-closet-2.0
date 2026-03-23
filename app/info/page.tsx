export default function Info() {
  return (
    <>
      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mt-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">What is Sustainable Fashion?</h2>
        <p className="max-w-3xl mx-auto text-center">
          Sustainable fashion refers to clothing that is designed, manufactured, distributed, and used
          in environmentally and socially responsible ways. It reduces pollution, conserves resources,
          and promotes ethical labor practices. Opting for eco-conscious materials and upcycling garments
          helps cut down the fashion industry&apos;s carbon footprint.
        </p>
      </section>

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Core Pillars of Sustainability</h2>
        <ul className="max-w-2xl mx-auto space-y-2 list-disc list-inside">
          <li><strong>Environmental:</strong> Reducing pollution, waste, and resource consumption</li>
          <li><strong>Social:</strong> Supporting fair wages, safe working conditions, and labor rights</li>
          <li><strong>Economic:</strong> Creating long-lasting, quality garments that save money and reduce waste over time</li>
        </ul>
      </section>

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Common Sustainable Fabrics</h2>
        <ul className="max-w-md mx-auto space-y-1 list-disc list-inside">
          <li>Organic cotton</li>
          <li>Bamboo</li>
          <li>Tencel (Lyocell)</li>
          <li>Recycled polyester</li>
          <li>Hemp</li>
        </ul>
      </section>

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">The Life Cycle of Sustainable Fashion</h2>
        <ol className="max-w-xl mx-auto space-y-3 list-decimal list-inside">
          <li><strong>Design:</strong> Prioritizing low-impact materials and minimal waste patterns</li>
          <li><strong>Production:</strong> Ethical manufacturing practices</li>
          <li><strong>Use:</strong> Longevity, repair, and reuse</li>
          <li><strong>End of Life:</strong> Recycling or upcycling to prevent landfill waste</li>
        </ol>
      </section>

      <section className="bg-accent-green-pale p-6 mx-4 mb-6 text-center rounded-lg">
        <h3 className="text-xl font-bold mb-2">Want to Learn More?</h3>
        <p className="mb-4">Check out our sustainability resources and brand directory to get started.</p>
        <a href="/brands"
          className="inline-block bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-green-dark transition-colors">
          Sustainable Brand List
        </a>
      </section>
    </>
  );
}
