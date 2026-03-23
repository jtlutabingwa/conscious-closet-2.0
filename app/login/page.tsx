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
    <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mt-6 mb-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block font-bold mb-1">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-4 rounded border border-gray-300"
        />

        <label htmlFor="password" className="block font-bold mb-1">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 mb-6 rounded border border-gray-300"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-green-dark transition-colors disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-accent-green font-bold hover:underline">
          Sign Up
        </Link>
      </p>
    </section>
  );
}