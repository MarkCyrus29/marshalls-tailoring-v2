import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page could not be found. Return to Marshalls Tailoring in Lipa City.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-bg overflow-hidden pt-8 pb-20 px-6"
      aria-labelledby="not-found-heading"
    >
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] max-w-md max-h-md bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[35vw] h-[35vw] max-w-sm max-h-sm bg-brand-blue/10 rounded-full blur-[70px] pointer-events-none" />

      <div className="relative z-10 max-w-lg text-center">
        <p className="font-sans text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase mb-4">
          Error 404
        </p>
        <h1
          id="not-found-heading"
          className="font-serif text-4xl sm:text-5xl font-medium text-ink leading-tight mb-4"
        >
          This page isn&apos;t here
        </h1>
        <p className="font-sans text-ink-muted text-lg mb-8">
          The link may be broken or the page may have moved. Head back to our
          homepage to explore uniforms, suits, and tailoring in Lipa City.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-sm bg-ink text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-brand-blue transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
