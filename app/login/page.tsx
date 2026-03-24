"use client";
import { useState } from "react";
import { signIn } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { checkUser } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn({ username: email, password });
      if (result.isSignedIn) {
        await checkUser();
        router.push("/profile");
      } else if (result.nextStep?.signInStep === "CONFIRM_SIGN_UP") {
        router.push(`/verify?email=${encodeURIComponent(email)}`);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Login failed. Please try again.";
      setError(message);
    }
    setLoading(false);
  }

  return (
    <>
      <section className="px-6 pt-16 pb-8 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Welcome Back</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl font-bold text-brand-darkest mb-4">
          Log In
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
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Log In →"}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-sm text-brand-text/60">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-accent-green font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </section>
    </>
  );
}