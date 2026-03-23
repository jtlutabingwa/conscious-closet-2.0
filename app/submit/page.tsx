"use client";
import { useState } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { useAuth } from "@/components/AuthContext";
import Link from "next/link";
 
export default function Submit() {
  const [loading, setLoading] = useState(false);
  const { user, userAttributes } = useAuth();
 
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
 
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      idea: (form.elements.namedItem("idea") as HTMLTextAreaElement).value,
      eventDate: (form.elements.namedItem("event-date") as HTMLInputElement).value,
    };
 
    try {
      // Build headers with auth token if logged in
      const headers: Record<string, string> = { "Content-Type": "application/json" };
 
      if (user) {
        try {
          const session = await fetchAuthSession();
          const token = session.tokens?.idToken?.toString();
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
        } catch {
          // Continue without auth token
        }
      }
 
      const response = await fetch(
        "https://qrd0rlcn9h.execute-api.us-east-1.amazonaws.com/submissions",
        {
          method: "POST",
          headers,
          body: JSON.stringify(data),
        }
      );
 
      const result = await response.json();
 
      if (response.ok) {
        alert("Thank you! Your submission ID is: " + result.submissionId);
        form.reset();
      } else {
        alert("Error: " + result.error);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  }
 
  return (
    <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mt-6 mb-6">
      <h2 className="text-2xl font-bold mb-2 text-center">Get Involved!</h2>
      <p className="text-center mb-6">
        Submit your sustainable fashion ideas, sign up for future events, or just show your support!
      </p>
 
      {!user && (
        <div className="bg-accent-green-light border border-accent-green rounded-lg p-4 mb-6 text-center max-w-xl mx-auto">
          <p className="text-sm">
            <Link href="/login" className="text-accent-green font-bold hover:underline">Log in</Link>
            {" "}or{" "}
            <Link href="/signup" className="text-accent-green font-bold hover:underline">sign up</Link>
            {" "}to track your submissions and connect them to your profile.
          </p>
        </div>
      )}
 
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <label htmlFor="name" className="block font-bold mb-1">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={userAttributes.name || ""}
          className="w-full p-2 mb-4 rounded border border-gray-300"
        />
 
        <label htmlFor="email" className="block font-bold mb-1">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          defaultValue={userAttributes.email || ""}
          className="w-full p-2 mb-4 rounded border border-gray-300"
        />
 
        <label htmlFor="idea" className="block font-bold mb-1">Your Sustainable Fashion Idea:</label>
        <textarea
          id="idea"
          name="idea"
          rows={5}
          placeholder="Describe your idea."
          className="w-full p-2 mb-4 rounded border border-gray-300"
        />
 
        <label htmlFor="event-date" className="block font-bold mb-1">Event Date (MM/DD/YYYY):</label>
        <input
          type="text"
          id="event-date"
          name="event-date"
          placeholder="MM/DD/YYYY"
          className="w-full p-2 mb-1 rounded border border-gray-300"
        />
        <small className="block mb-4 text-gray-500">Format: MM/DD/YYYY</small>
 
        <button
          type="submit"
          disabled={loading}
          className="bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-green-dark transition-colors block mx-auto disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Idea"}
        </button>
      </form>
    </section>
  );
}