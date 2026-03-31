"use client";
import { useAuth } from "@/components/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchAuthSession } from "aws-amplify/auth";

interface Submission {
  submissionid: string;
  idea: string;
  eventDate: string;
  createdAt: string;
  status: string;
}

export default function Profile() {
  const { user, userAttributes, loading, handleSignOut } = useAuth();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  useEffect(() => {
    async function fetchSubmissions() {
      if (!user) return;

      try {
        const session = await fetchAuthSession();
        const token = session.tokens?.idToken?.toString();

        if (!token) {
          setLoadingSubmissions(false);
          return;
        }

        const response = await fetch(
          "https://qrd0rlcn9h.execute-api.us-east-1.amazonaws.com/submissions/my",
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSubmissions(data.submissions || []);
        } else {
          setError("Failed to load submissions.");
        }
      } catch {
        setError("Failed to connect to the server.");
      }
      setLoadingSubmissions(false);
    }

    if (user) {
      fetchSubmissions();
    }
  }, [user]);

  if (loading) {
    return <div className="text-center mt-20 font-display text-lg text-brand-text/40">Loading...</div>;
  }

  if (!user) return null;

  function formatDate(iso: string): string {
    const date = new Date(iso);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function getStatusColor(status: string): string {
    switch (status) {
      case "approved": return "bg-accent-green/10 text-accent-green";
      case "featured": return "bg-accent-gold/10 text-accent-gold";
      case "pending": return "bg-amber-50 text-amber-600";
      default: return "bg-gray-100 text-gray-500";
    }
  }

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
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display text-xl font-bold text-brand-brown">Your Submissions</h3>
            {submissions.length > 0 && (
              <span className="text-xs font-medium bg-accent-green/10 text-accent-green px-3 py-1 rounded-full">
                {submissions.length} total
              </span>
            )}
          </div>

          {loadingSubmissions ? (
            <div className="bg-brand-cream/50 rounded-xl p-6 text-center">
              <p className="text-sm text-brand-text/40">Loading your submissions...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 rounded-xl p-6 text-center">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="bg-brand-cream/50 rounded-xl p-8 text-center">
              <p className="text-brand-text/40 mb-4">You haven&apos;t submitted any ideas yet.</p>
              <a
                href="/submit"
                className="inline-flex items-center gap-2 text-accent-green font-semibold text-sm hover:underline"
              >
                Submit your first idea →
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((sub) => (
                <div
                  key={sub.submissionid}
                  className="bg-brand-cream/30 rounded-xl p-5 border border-brand-brown/5 hover:border-accent-green/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusColor(sub.status)}`}>
                      {sub.status}
                    </span>
                    <span className="text-xs text-brand-text/30">{formatDate(sub.createdAt)}</span>
                  </div>
                  <p className="text-sm text-brand-text/70 leading-relaxed">
                    {sub.idea || "No description provided."}
                  </p>
                  {sub.eventDate && (
                    <p className="text-xs text-brand-text/40 mt-2">
                      Event date: {sub.eventDate}
                    </p>
                  )}
                  <p className="text-xs text-brand-text/20 mt-2 font-mono">
                    ID: {sub.submissionid}
                  </p>
                </div>
              ))}
            </div>
          )}
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