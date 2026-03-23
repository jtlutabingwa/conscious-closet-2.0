"use client";
import { useState, Suspense } from "react";
import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
import { useRouter, useSearchParams } from "next/navigation";

function VerifyForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resent, setResent] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      alert("Email verified! You can now log in.");
      router.push("/login");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Verification failed.";
      setError(message);
    }
    setLoading(false);
  }

  async function handleResend() {
    try {
      await resendSignUpCode({ username: email });
      setResent(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to resend code.";
      setError(message);
    }
  }

  return (
    <section className="bg-brand-linen border-l-4 border-brand-brown p-6 mx-4 mt-6 mb-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Verify Your Email</h2>
      <p className="text-center mb-6 text-sm text-gray-600">
        We sent a verification code to <strong>{email}</strong>. Enter it below.
      </p>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>
      )}

      {resent && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">Code resent! Check your email.</div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="code" className="block font-bold mb-1">Verification Code:</label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          placeholder="Enter 6-digit code"
          className="w-full p-2 mb-6 rounded border border-gray-300 text-center text-lg tracking-widest"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-green text-white font-bold py-2 px-6 rounded hover:bg-accent-green-dark transition-colors disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Didn&apos;t receive a code?{" "}
        <button onClick={handleResend} className="text-accent-green font-bold hover:underline">
          Resend Code
        </button>
      </p>
    </section>
  );
}

export default function Verify() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <VerifyForm />
    </Suspense>
  );
}