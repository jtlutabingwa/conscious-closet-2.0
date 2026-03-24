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
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (user) {
        try {
          const session = await fetchAuthSession();
          const token = session.tokens?.idToken?.toString();
          if (token) headers["Authorization"] = `Bearer ${token}`;
        } catch { /* continue without token */ }
      }
 
      const response = await fetch(
        "https://qrd0rlcn9h.execute-api.us-east-1.amazonaws.com/submissions",
        { method: "POST", headers, body: JSON.stringify(data) }
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
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Your Voice Matters</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-5xl font-bold text-brand-darkest mb-4">
          Get Involved
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-2xl mx-auto">
          Submit your sustainable fashion ideas, suggest events, or share your tips with the community.
        </p>
        <div className="section-divider mt-6" />
      </section>
 
      {/* Form */}
      <section className="px-6 pb-20 max-w-2xl mx-auto">
        {!user && (
          <div className="bg-accent-green-pale border border-accent-green/20 rounded-xl p-5 mb-8 text-center animate-fade-up delay-200">
            <p className="text-sm text-brand-text/70">
              <Link href="/login" className="text-accent-green font-semibold hover:underline">Log in</Link>
              {" "}or{" "}
              <Link href="/signup" className="text-accent-green font-semibold hover:underline">sign up</Link>
              {" "}to track your submissions and connect them to your profile.
            </p>
          </div>
        )}
 
        <div className="modern-card p-8 md:p-10 animate-fade-up delay-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                defaultValue={userAttributes.name || ""}
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
              />
            </div>
 
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                defaultValue={userAttributes.email || ""}
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
              />
            </div>
 
            <div>
              <label htmlFor="idea" className="block text-sm font-semibold mb-2">Your Sustainable Fashion Idea</label>
              <textarea
                id="idea"
                name="idea"
                rows={5}
                placeholder="Describe your idea, event suggestion, or sustainability tip..."
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm resize-none"
              />
            </div>
 
            <div>
              <label htmlFor="event-date" className="block text-sm font-semibold mb-2">Event Date <span className="font-normal text-brand-text/40">(optional)</span></label>
              <input
                type="text"
                id="event-date"
                name="event-date"
                placeholder="MM/DD/YYYY"
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
              />
            </div>
 
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Idea →"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}