import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0C0A09",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "The Angaar Labs | High-Energy Web Development Agency",
  description:
    "We build websites that stop traffic and sell. Custom-crafted digital products, Next.js web applications, and flagship digital experiences.",
  keywords: [
    "Web Development Agency",
    "Next.js Developers",
    "UI/UX Motion Design",
    "The Angaar Labs",
  ],
  authors: [{ name: "The Angaar Labs" }],
  openGraph: {
    title: "The Angaar Labs | High-Energy Web Studio",
    description: "Fiery, bold, high-energy web applications built for scale.",
    url: "https://angaarlabs.dev",
    siteName: "The Angaar Labs",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ContactWidget } from "@/components/ui/ContactWidget";
import { CinematicLoader } from "@/components/ui/CinematicLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0A09] text-[#F5F5F4] antialiased selection:bg-[#F2660A] selection:text-white font-sans">
        <CinematicLoader />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 pt-24 sm:pt-28 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <ContactWidget />
        <Footer />
      </body>
    </html>
  );
}
