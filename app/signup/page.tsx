"use client";
import { useState } from "react";
import { signUp } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

function sanitize(input: string, maxLength: number = 500): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[<>'"`;]/g, '')
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidName(name: string): boolean {
  return /^[a-zA-Z\s\-'.]{2,100}$/.test(name);
}

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const cleanName = sanitize(name, 100);
    const cleanEmail = sanitize(email, 254);

    if (!cleanName || !isValidName(cleanName)) {
      setError("Please enter a valid name (letters, spaces, hyphens, and apostrophes only).");
      return;
    }

    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const result = await signUp({
        username: cleanEmail,
        password,
        options: {
          userAttributes: { email: cleanEmail, name: cleanName },
        },
      });

      if (result.nextStep?.signUpStep === "CONFIRM_SIGN_UP") {
        router.push(`/verify?email=${encodeURIComponent(cleanEmail)}`);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Sign up failed. Please try again.";
      setError(message);
    }
    setLoading(false);
  }

  return (
    <>
      <section className="px-6 pt-16 pb-8 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Join the Movement</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl font-bold text-brand-darkest mb-4">
          Create Account
        </h2>
        <div className="section-divider mt-4" />
      </section>

      <section className="px-6 pb-20 max-w-md mx-auto animate-fade-up delay-200">
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 text-sm border border-red-100">{error}</div>
        )}

        <div className="modern-card p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={254}
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                maxLength={128}
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
              />
              <p className="text-xs text-brand-text/40 mt-1.5">At least 8 characters with uppercase, lowercase, and a number</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                maxLength={128}
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Sign Up →"}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-sm text-brand-text/60">
          Already have an account?{" "}
          <Link href="/login" className="text-accent-green font-semibold hover:underline">
            Log In
          </Link>
        </p>
      </section>
    </>
  );
}