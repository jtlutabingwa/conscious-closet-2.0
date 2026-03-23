import Image from "next/image";

export default function Info() {
  return (
    <>
      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mt-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">What is Sustainable Fashion?</h2>
        <p className="max-w-3xl mx-auto text-center mb-6">
          Sustainable fashion refers to clothing that is designed, manufactured, distributed, and used
          in environmentally and socially responsible ways. It reduces pollution, conserves resources,
          and promotes ethical labor practices. Opting for eco-conscious materials and upcycling garments
          helps cut down the fashion industry&apos;s carbon footprint.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Image src="/images/sub_pic1.png" alt="Sustainable cycle" width={300} height={200} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <Image src="/images/recycled-clothing-process.jpg" alt="Recycled clothing process" width={300} height={200} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <Image src="/images/ethical-production.webp" alt="Ethical production" width={300} height={200} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        </div>
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
        <ul className="max-w-md mx-auto space-y-1 list-disc list-inside mb-6">
          <li>Organic cotton</li>
          <li>Bamboo</li>
          <li>Tencel (Lyocell)</li>
          <li>Recycled polyester</li>
          <li>Hemp</li>
        </ul>
        <div className="flex flex-wrap justify-center gap-5">
          <Image src="/images/sustainable-clothing-materials.png" alt="Sustainable materials" width={300} height={200} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <Image src="/images/types.jpg" alt="Types of sustainable fabrics" width={300} height={200} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <Image src="/images/textile-impact.png" alt="Textile impact" width={300} height={200} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        </div>
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

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Resources</h2>
        <ul className="max-w-md mx-auto space-y-2">
          <li><a href="https://www.fashionrevolution.org/" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-dark hover:text-accent-green transition-colors">Fashion Revolution</a></li>
          <li><a href="https://goodonyou.eco/" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-dark hover:text-accent-green transition-colors">Good On You (Brand Ratings)</a></li>
          <li><a href="https://www.commonobjective.co/" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-dark hover:text-accent-green transition-colors">Common Objective</a></li>
        </ul>
      </section>
    </>
  );
}
