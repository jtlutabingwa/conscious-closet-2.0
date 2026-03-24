"use client";
import { useAuth } from "@/components/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { user, userAttributes, loading, handleSignOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <div className="text-center mt-20 font-display text-lg text-brand-text/40">Loading...</div>;
  }

  if (!user) return null;

  return (
    <>
      <section className="px-6 pt-16 pb-8 text-center">
        <p className="animate-fade-up text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">Your Space</p>
        <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl font-bold text-brand-darkest mb-4">
          Your Profile
        </h2>
        <div className="section-divider mt-4" />
      </section>

      <section className="px-6 pb-20 max-w-2xl mx-auto space-y-6">
        {/* Profile Info */}
        <div className="modern-card p-8 animate-fade-up delay-200">
          <h3 className="font-display text-xl font-bold text-brand-brown mb-6">Account Details</h3>
          <div className="space-y-5">
            <div className="flex justify-between items-center pb-4 border-b border-brand-brown/5">
              <span className="text-sm font-semibold text-brand-text/50 uppercase tracking-wider">Name</span>
              <span className="font-medium">{userAttributes.name || "Not set"}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-brand-brown/5">
              <span className="text-sm font-semibold text-brand-text/50 uppercase tracking-wider">Email</span>
              <span className="font-medium">{userAttributes.email || "Not set"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-brand-text/50 uppercase tracking-wider">User ID</span>
              <span className="text-xs text-brand-text/30 font-mono">{userAttributes.sub || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Submissions */}
        <div className="modern-card p-8 animate-fade-up delay-300">
          <h3 className="font-display text-xl font-bold text-brand-brown mb-4">Your Submissions</h3>
          <div className="bg-brand-cream/50 rounded-xl p-6 text-center">
            <p className="text-sm text-brand-text/40">Your submitted ideas will appear here once connected to the API.</p>
          </div>
        </div>

        {/* Saved Brands */}
        <div className="modern-card p-8 animate-fade-up delay-400">
          <h3 className="font-display text-xl font-bold text-brand-brown mb-4">Saved Brands</h3>
          <div className="bg-brand-cream/50 rounded-xl p-6 text-center">
            <p className="text-sm text-brand-text/40">Your favorite sustainable brands will appear here.</p>
          </div>
        </div>

        {/* Sign Out */}
        <div className="text-center animate-fade-up delay-500">
          <button
            onClick={async () => {
              await handleSignOut();
              router.push("/");
            }}
            className="inline-flex items-center gap-2 bg-brand-dark text-brand-cream font-semibold px-8 py-3 rounded-xl hover:bg-brand-darkest transition-all hover:-translate-y-0.5"
          >
            Sign Out
          </button>
        </div>
      </section>
    </>
  );
}