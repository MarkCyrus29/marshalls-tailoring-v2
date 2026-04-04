"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] flex items-center bg-bg overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[50vw] h-[50vw] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[40vw] h-[40vw] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="relative w-[80vw] mx-auto pb-16 lg:pt-0 lg:pb-0 z-10">
        <div className="grid grid-cols-1 items-center justify-start min-h-[85vh] py-8 w-full mx-auto">
          <div className="flex flex-col justify-center items-start">
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
              className="font-serif text-[3.5rem] sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-medium text-ink leading-[1.05] mb-6 tracking-tight"
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
              className="font-sans text-lg sm:text-xl lg:text-2xl text-ink-muted leading-relaxed mb-6 max-w-3xl"
            >
              School, corporate, and organizational uniforms and custom suits
              crafted with precision in Lipa City. Formal coats for rent — plus
              Barong Tagalog when you need Filipino formal wear.
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
              className="flex flex-wrap items-center gap-4 mt-6 "
            >
              <span className="font-sans text-[10px] text-ink-muted font-semibold uppercase tracking-widest">
                Uniforms
              </span>
              <span className="text-border-strong text-xs">&bull;</span>
              <span className="font-sans text-[10px] text-ink-muted font-semibold uppercase tracking-widest">
                Custom Suits
              </span>
              <span className="text-border-strong text-xs">&bull;</span>
              <span className="font-sans text-[10px] text-ink-muted font-semibold uppercase tracking-widest">
                Coat & Suit Rental
              </span>
              <span className="text-border-strong text-xs">&bull;</span>
              <span className="font-sans text-[10px] text-ink-muted font-semibold uppercase tracking-widest">
                Barong Tagalog
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
