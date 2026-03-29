"use client";
import { useState, Suspense } from "react";
import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
import { useRouter, useSearchParams } from "next/navigation";

function sanitize(input: string, maxLength: number = 500): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[<>'"`;]/g, '')
    .trim()
    .slice(0, maxLength);
}

function VerifyForm() {
  const searchParams = useSearchParams();
  const rawEmail = searchParams.get("email") || "";
  const email = sanitize(rawEmail, 254);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resent, setResent] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Only allow digits in the code
    const cleanCode = code.replace(/[^0-9]/g, '').slice(0, 6);

    if (!cleanCode || cleanCode.length !== 6) {
      setError("Please enter a valid 6-digit verification code.");
      return;
    }

    if (!email) {
      setError("Email address is missing. Please go back and sign up again.");
      return;
    }

    setLoading(true);

    try {
      await confirmSignUp({ username: email, confirmationCode: cleanCode });
      alert("Email verified! You can now log in.");
      router.push("/login");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Verification failed.";
      if (message.includes("CodeMismatchException")) {
        setError("Incorrect verification code. Please check and try again.");
      } else if (message.includes("ExpiredCodeException")) {
        setError("This code has expired. Please request a new one.");
      } else {
        setError(message);
      }
    }
    setLoading(false);
  }

  async function handleResend() {
    if (resendCount >= 3) {
      setError("Maximum resend attempts reached. Please wait a few minutes.");
      return;
    }

    try {
      await resendSignUpCode({ username: email });
      setResent(true);
      setResendCount(prev => prev + 1);
      setError("");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to resend code.";
      setError(message);
    }
  }

  return (
    <>
      <section className="px-6 pt-16 pb-8 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Almost There</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl font-bold text-brand-darkest mb-4">
          Verify Your Email
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-md mx-auto">
          We sent a verification code to <strong className="text-brand-darkest">{email}</strong>
        </p>
        <div className="section-divider mt-4" />
      </section>

      <section className="px-6 pb-20 max-w-md mx-auto animate-fade-up delay-300">
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 text-sm border border-red-100">{error}</div>
        )}

        {resent && (
          <div className="bg-accent-green-pale text-accent-green p-4 rounded-xl mb-6 text-sm border border-accent-green/20">
            Code resent! Check your email.
          </div>
        )}

        <div className="modern-card p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-sm font-semibold mb-2">Verification Code</label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                required
                placeholder="Enter 6-digit code"
                maxLength={6}
                inputMode="numeric"
                pattern="[0-9]{6}"
                className="w-full px-4 py-3.5 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-center text-lg tracking-[0.3em] font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Verify Email →"}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-sm text-brand-text/60">
          Didn&apos;t receive a code?{" "}
          <button
            onClick={handleResend}
            disabled={resendCount >= 3}
            className="text-accent-green font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {resendCount >= 3 ? "Max resends reached" : "Resend Code"}
          </button>
        </p>
      </section>
    </>
  );
}

export default function Verify() {
  return (
    <Suspense fallback={<div className="text-center mt-10 font-display text-lg text-brand-text/40">Loading...</div>}>
      <VerifyForm />
    </Suspense>
  );
}