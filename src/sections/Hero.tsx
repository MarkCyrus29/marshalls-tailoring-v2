"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh mt-12 flex items-center bg-bg overflow-hidden"
      aria-label="Hero"
    >
      <div className="container-site relative w-full  pb-16 lg:pt-0 lg:pb-0 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center min-h-dvh py-8 lg:py-0">
          {/* ── Text column ── */}
          <div className="flex flex-col items-start order-2 lg:order-1 ">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-brand-blue" />
              <span className="font-sans text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase">
                Lipa City&apos;s Trusted Tailor
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[3.5rem] sm:text-6xl lg:text-[4.5rem] font-medium text-ink leading-[1.05] mb-8"
            >
              Tailored to <br />
              perfection,
              <br />
              <span className="italic font-normal text-brand-blue">
                made for you.
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-lg text-ink-muted leading-relaxed mb-10 max-w-md"
            >
              Bespoke suits, barongs, and uniforms crafted with precision in
              Lipa City. Formal coats also available for rent — for every
              occasion, every person.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-sm bg-ink text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-brand-blue transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                Request a Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-sm bg-transparent border border-border text-ink font-sans text-xs font-semibold uppercase tracking-widest hover:border-ink transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Trust markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 mt-12 "
            >
              <span className="font-sans text-[10px] text-ink-muted font-semibold uppercase tracking-widest">
                Suits & Barongs
              </span>
              <span className="text-border-strong text-xs">&bull;</span>
              <span className="font-sans text-[10px] text-ink-muted font-semibold uppercase tracking-widest">
                Corporate Uniforms
              </span>
              <span className="text-border-strong text-xs">&bull;</span>
              <span className="font-sans text-[10px] text-ink-muted font-semibold uppercase tracking-widest">
                Coat Rentals
              </span>
            </motion.div>
          </div>

          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2  justify-end w-full hidden lg:flex"
          >
            <div className="relative w-full max-w-lg lg:ml-auto">
              {/* Sleek image frame */}
              <div
                className="w-full aspect-4/5 bg-white border border-border rounded-sm p-4 shadow-xl relative z-10"
                aria-hidden="true"
              >
                <div className="w-full h-full relative overflow-hidden rounded-sm bg-bg-warm">
                  <Image
                    src="/hero-green.jpg"
                    alt="Marshalls Tailoring — Founders"
                    fill
                    className="w-full h-full object-contain scale-110 hover:scale-115 transition-transform duration-1000 ease-out"
                    priority
                  />
                </div>
              </div>

              {/* Subtle structural accent */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-border rounded-sm bg-bg z-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
