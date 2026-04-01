import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("www.marshallstailoring.com"),
  title: {
    default:
      "Marshalls Tailoring | Bespoke Suits, Uniforms & Coat Rentals — Lipa City",
    template: "%s | Marshalls Tailoring",
  },
  description:
    "Marshalls Tailoring crafts bespoke suits, barongs, and all kinds of uniforms for men and women in Lipa City, Batangas. Coats and suits available for rent. Visit us at the Lipa City Public Market.",
  keywords: [
    "tailoring Lipa City",
    "bespoke suits Batangas",
    "uniforms tailor",
    "coat rental Lipa City",
    "barong Tagalog tailor",
    "Marshalls Tailoring",
    "suit alterations Lipa",
  ],
  authors: [{ name: "Marshalls Tailoring" }],
  creator: "Marshalls Tailoring",
  publisher: "Marshalls Tailoring",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "www.marshallstailoring.com",
    siteName: "Marshalls Tailoring",
    title:
      "Marshalls Tailoring | Bespoke Suits, Uniforms & Coat Rentals — Lipa City",
    description:
      "Crafting bespoke suits, barongs, and uniforms with precision in Lipa City, Batangas. Formal coats and suits also available for rent.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Marshalls Tailoring — Lipa City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marshalls Tailoring | Lipa City",
    description:
      "Bespoke suits, uniforms, and coat rentals in Lipa City, Batangas. Precision tailoring for every occasion.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1b3fa6" />
        <meta name="geo.region" content="PH-BTG" />
        <meta name="geo.placename" content="Lipa City, Batangas" />
      </head>
      <body className={`antialiased ${bodoniModa.className}`}>
        <div className="paper-grain" aria-hidden="true" />
        <LocalBusinessSchema />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
