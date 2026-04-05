import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Bodoni_Moda } from "next/font/google";
import { siteUrl } from "@/lib/site";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const metadataOrigin = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;

export const metadata: Metadata = {
  metadataBase: new URL(metadataOrigin),
  title: {
    default:
      "Marshalls Tailoring | Uniforms, Custom Suits & Coat Rentals — Lipa City",
    template: "%s | Marshalls Tailoring",
  },
  description:
    "Marshalls Tailoring in Lipa City, Batangas specializes in custom uniforms and made-to-measure suits for men and women — school, corporate, and organizational orders welcome. Custom suits and coat rentals; Barong Tagalog also available. Visit us at the Lipa City Public Market.",
  keywords: [
    "uniforms Lipa City",
    "corporate uniforms Batangas",
    "school uniforms tailor Lipa",
    "custom suits Lipa City",
    "made to measure suits Batangas",
    "tailoring Lipa City",
    "uniform tailor Batangas",
    "coat rental Lipa City",
    "suit rental Lipa",
    "Marshalls Tailoring",
    "suit alterations Lipa",
    "organization uniforms Lipa",
    "barong Tagalog tailor Lipa",
  ],
  authors: [{ name: "Marshalls Tailoring" }],
  creator: "Marshalls Tailoring",
  publisher: "Marshalls Tailoring",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: metadataOrigin,
    siteName: "Marshalls Tailoring",
    title:
      "Marshalls Tailoring | Uniforms, Custom Suits & Coat Rentals — Lipa City",
    description:
      "Custom uniforms and made-to-measure suits in Lipa City, Batangas — corporate, school, and organizational tailoring. Coat and suit rentals; Barong Tagalog also available.",
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
    title: "Marshalls Tailoring | Uniforms & Custom Suits — Lipa City",
    description:
      "Uniforms and custom suits in Lipa City, Batangas. Corporate and school orders, made-to-measure tailoring, and coat rentals.",
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
        <meta name="msvalidate.01" content="FD778BB3ADBFF81F81693B34EF3BD069" />
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
