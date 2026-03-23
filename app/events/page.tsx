export default function Events() {
  return (
    <>
      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mt-6 mb-6">
        <h2 className="text-2xl font-bold mb-2 text-center">Events Calendar</h2>
        <p className="text-center mb-6">
          Join our upcoming activities and learn how to live more sustainably while connecting with your community.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-brand-brown text-brand-cream p-3 border border-brand-brown">Event Name</th>
                <th className="bg-brand-brown text-brand-cream p-3 border border-brand-brown">Date</th>
                <th className="bg-brand-brown text-brand-cream p-3 border border-brand-brown">Location</th>
                <th className="bg-brand-brown text-brand-cream p-3 border border-brand-brown">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-brand-cream">
                <td className="p-3 border border-brand-brown text-center">Eco-Fashion Workshop</td>
                <td className="p-3 border border-brand-brown text-center">May 10, 2025</td>
                <td className="p-3 border border-brand-brown text-center">UNC Greensboro</td>
                <td className="p-3 border border-brand-brown text-center">Learn how to repurpose old clothes into stylish pieces!</td>
              </tr>
              <tr className="even:bg-brand-cream">
                <td className="p-3 border border-brand-brown text-center">Green Wardrobe Webinar</td>
                <td className="p-3 border border-brand-brown text-center">June 5, 2025</td>
                <td className="p-3 border border-brand-brown text-center">Online</td>
                <td className="p-3 border border-brand-brown text-center">Virtual panel on ethical fashion practices and shopping tips.</td>
              </tr>
              <tr className="even:bg-brand-cream">
                <td className="p-3 border border-brand-brown text-center">Community Swap Meet</td>
                <td className="p-3 border border-brand-brown text-center">July 22, 2025</td>
                <td className="p-3 border border-brand-brown text-center">Charlotte, NC</td>
                <td className="p-3 border border-brand-brown text-center">Swap clothes with others and learn about conscious consumerism.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-accent-green-pale p-6 mx-4 mb-6 text-center rounded-lg">
        <h3 className="text-xl font-bold mb-2">Want to Host or Suggest an Event?</h3>
        <p className="mb-4">We&apos;re always looking to grow our impact!</p>
        <a href="/submit"
          className="inline-block bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-green-dark transition-colors">
          Submit Your Event
        </a>
      </section>
    </>
  );
}
