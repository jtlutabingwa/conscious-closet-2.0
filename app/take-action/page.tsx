"use client";
import { useState, useEffect } from "react";

const quotes = [
  "\u201CThe greatest threat to our planet is the belief that someone else will save it.\u201D \u2014 Robert Swan",
  "\u201CBuy less, choose well, make it last.\u201D \u2014 Vivienne Westwood",
  "\u201CSmall acts, when multiplied by millions, can transform the world.\u201D \u2014 Howard Zinn",
  "\u201CYou cannot get through a single day without having an impact...\u201D \u2014 Jane Goodall",
];

export default function TakeAction() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mt-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">All on You</h2>
        <p className="max-w-2xl mx-auto text-center mb-4">
          You can make a difference by choosing second-hand clothing, repairing what you own,
          participating in clothing swaps, and supporting local sustainable brands.
        </p>
        <ul className="max-w-md mx-auto space-y-2 list-disc list-inside">
          <li>Donate clothes instead of tossing them</li>
          <li>Use eco-friendly detergents</li>
          <li>Shop locally or from verified sustainable brands</li>
        </ul>
      </section>

      <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Make it a Lifestyle</h2>
        <p className="max-w-2xl mx-auto text-center mb-4">
          Beyond fashion, living sustainably means rethinking how you travel, eat, and shop.
        </p>
        <ul className="max-w-lg mx-auto space-y-2 list-disc list-inside">
          <li>Bike, walk, or use public transportation when possible</li>
          <li>Choose reusable containers, bags, and water bottles</li>
          <li>Buy in bulk to reduce packaging waste</li>
          <li>Support ethical companies that value transparency</li>
        </ul>
      </section>

      <aside className="mx-4 mb-6 p-6">
        <blockquote className="italic border-l-4 border-accent-green pl-5 text-gray-600 max-w-2xl mx-auto transition-opacity duration-500">
          {quotes[quoteIndex]}
        </blockquote>
      </aside>

      <section className="bg-accent-green-pale p-6 mx-4 mb-6 text-center rounded-lg">
        <h3 className="text-xl font-bold mb-2">Ready to Take the First Step?</h3>
        <p className="mb-4">
          Start today by clearing out your closet and donating clothes you haven&apos;t worn in the past year.
        </p>
        <a href="/submit"
          className="inline-block bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-green-dark transition-colors">
          Share Your Sustainability Tip
        </a>
      </section>
    </>
  );
}