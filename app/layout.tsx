import type { Metadata } from "next";
import "./globals.css";
import ConfigureAmplify from "@/components/ConfigureAmplify";
import { AuthProvider } from "@/components/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Conscious Closet",
  description: "Empowering you to make eco-conscious fashion choices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-brand-cream to-brand-warm text-brand-text min-h-screen flex flex-col">
        <ConfigureAmplify />
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}