import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plexmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pranamya Tutorials | Rajajinagar, Bengaluru",
  description:
    "Pranamya Tutorials offers coaching across State, CBSE & ICSE for 8th, 9th, 10th Standard, and Karnataka State Board 1st & 2nd PUC, in Rajajinagar, Bengaluru. Strong basics, bright future.",
  keywords: [
    "Pranamya Tutorials",
    "tuition Rajajinagar",
    "PUC tuition Bengaluru",
    "10th standard tuition",
    "SSLC tuition Bengaluru",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable} antialiased bg-cream-50 text-ink-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
