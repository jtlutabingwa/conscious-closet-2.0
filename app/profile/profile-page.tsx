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
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 mb-10">
      <section className="bg-brand-linen rounded-xl p-8 shadow-md mb-6">
        <h2 className="text-2xl font-bold text-brand-brown mb-6 text-center">Your Profile</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="font-bold text-gray-600">Name</span>
            <span>{userAttributes.name || "Not set"}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="font-bold text-gray-600">Email</span>
            <span>{userAttributes.email || "Not set"}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="font-bold text-gray-600">User ID</span>
            <span className="text-sm text-gray-500">{userAttributes.sub || "N/A"}</span>
          </div>
        </div>
      </section>

      <section className="bg-brand-linen rounded-xl p-8 shadow-md mb-6">
        <h3 className="text-xl font-bold text-brand-brown mb-4">Your Submissions</h3>
        <p className="text-gray-600 text-sm">Your submitted ideas will appear here once we connect this to the API.</p>
      </section>

      <section className="bg-brand-linen rounded-xl p-8 shadow-md mb-6">
        <h3 className="text-xl font-bold text-brand-brown mb-4">Saved Brands</h3>
        <p className="text-gray-600 text-sm">Your favorite sustainable brands will appear here.</p>
      </section>

      <div className="text-center">
        <button
          onClick={async () => {
            await handleSignOut();
            router.push("/");
          }}
          className="bg-brand-dark text-brand-cream font-bold py-2 px-6 rounded hover:bg-brand-darkest transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}