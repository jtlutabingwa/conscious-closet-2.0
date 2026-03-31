"use client";
import { useState } from "react";
import { resetPassword, confirmResetPassword } from "aws-amplify/auth";
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

export default function ResetPassword() {
  const [step, setStep] = useState<"request" | "confirm">("request");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleRequestReset(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const cleanEmail = sanitize(email, 254);

    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await resetPassword({ username: cleanEmail });
      setEmail(cleanEmail);
      setStep("confirm");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send reset code.";
      if (message.includes("UserNotFoundException")) {
        setError("No account found with that email address.");
      } else if (message.includes("LimitExceededException")) {
        setError("Too many attempts. Please wait a few minutes and try again.");
      } else {
        setError(message);
      }
    }
    setLoading(false);
  }

  async function handleConfirmReset(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const cleanCode = code.replace(/[^0-9]/g, '').slice(0, 6);

    if (!cleanCode || cleanCode.length !== 6) {
      setError("Please enter a valid 6-digit verification code.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(newPassword)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(newPassword)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/[0-9]/.test(newPassword)) {
      setError("Password must contain at least one number.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await confirmResetPassword({
        username: email,
        confirmationCode: cleanCode,
        newPassword,
      });
      alert("Password reset successfully! You can now log in with your new password.");
      router.push("/login");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to reset password.";
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

  return (
    <>
      <section className="px-6 pt-16 pb-8 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">
          {step === "request" ? "Forgot Password?" : "Almost Done"}
        </p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl font-bold text-brand-darkest mb-4">
          {step === "request" ? "Reset Your Password" : "Set New Password"}
        </h2>
        <p className="animate-fade-up delay-200 text-brand-text/60 max-w-md mx-auto">
          {step === "request"
            ? "Enter your email and we'll send you a code to reset your password."
            : `We sent a verification code to ${email}`}
        </p>
        <div className="section-divider mt-4" />
      </section>

      <section className="px-6 pb-20 max-w-md mx-auto animate-fade-up delay-300">
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 text-sm border border-red-100">{error}</div>
        )}

        <div className="modern-card p-8 md:p-10">
          {step === "request" ? (
            <form onSubmit={handleRequestReset} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
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

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending Code..." : "Send Reset Code →"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleConfirmReset} className="space-y-5">
              <div>
                <label htmlFor="code" className="block text-sm font-semibold mb-2">Verification Code</label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                  required
                  maxLength={6}
                  inputMode="numeric"
                  placeholder="Enter 6-digit code"
                  className="w-full px-4 py-3.5 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-center text-lg tracking-[0.3em] font-mono"
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={8}
                  maxLength={128}
                  className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-white focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-sm"
                />
                <p className="text-xs text-brand-text/40 mt-1.5">At least 8 characters with uppercase, lowercase, and a number</p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm New Password</label>
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
                {loading ? "Resetting..." : "Reset Password →"}
              </button>
            </form>
          )}
        </div>

        <div className="text-center mt-6 space-y-2">
          {step === "confirm" && (
            <button
              onClick={() => setStep("request")}
              className="text-sm text-brand-text/40 hover:text-brand-text/60 transition-colors"
            >
              ← Use a different email
            </button>
          )}
          <p className="text-sm text-brand-text/60">
            Remember your password?{" "}
            <Link href="/login" className="text-accent-green font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}