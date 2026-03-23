import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-accent-greenLight py-10 px-5 text-center rounded-lg mx-4 mt-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-brand-text">
          Welcome to The Conscious Closet
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Empowering you to make eco-conscious fashion choices. Discover how you
          can support ethical brands, reduce waste, and become a force for good
          in fashion.
        </p>
        <Link
          href="/take-action"
          className="inline-block bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-greenDark transition-colors"
        >
          Get Involved
        </Link>
      </section>

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6 text-center">
        <h3 className="text-xl font-bold mb-4">How It Works</h3>
        <ol className="max-w-xl mx-auto space-y-3">
          <li>
            <strong>Learn:</strong> Browse our info pages and gallery to
            understand the impact of fast fashion.
          </li>
          <li>
            <strong>Act:</strong> Take simple steps like donating, swapping, or
            buying second-hand.
          </li>
          <li>
            <strong>Inspire:</strong> Submit your ideas and spread awareness in
            your community.
          </li>
        </ol>
      </section>

      <section className="mx-4 mb-6 p-6">
        <h3 className="text-xl font-bold mb-4 text-center">
          What Our Community Says
        </h3>
        <blockquote className="italic border-l-4 border-accent-green pl-5 text-gray-600 max-w-2xl mx-auto mb-4">
          &ldquo;The Conscious Closet helped me rethink my wardrobe and connect
          with local swap events. I feel empowered!&rdquo; &ndash;{" "}
          <em>Ava G.</em>
        </blockquote>
        <blockquote className="italic border-l-4 border-accent-green pl-5 text-gray-600 max-w-2xl mx-auto">
          &ldquo;A great place to start your sustainable fashion journey.
          It&apos;s easy, friendly, and full of helpful tips.&rdquo; &ndash;{" "}
          <em>Marcus T.</em>
        </blockquote>
      </section>

      <section className="bg-accent-greenPale p-6 mx-4 mb-6 text-center rounded-lg">
        <h3 className="text-xl font-bold mb-2">Ready to Make a Change?</h3>
        <p className="mb-4">
          Join our growing community of changemakers. Start today by exploring
          how your fashion habits can help the planet.
        </p>
        <Link
          href="/submit"
          className="inline-block bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-greenDark transition-colors"
        >
          Share Your Idea
        </Link>
      </section>
    </>
  );
}