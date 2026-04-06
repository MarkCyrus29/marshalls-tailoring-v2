"use client";

import { useState } from "react";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import PortfolioItems from "@/data/PortfolioItems.json";
const categories = ["All", "Suits", "Uniforms"] as const;

type Category = (typeof categories)[number];

interface PortfolioItem {
  id: number;
  category: Exclude<Category, "All">;
  label: string;
  src: string;
  alt: string;
}
const items: PortfolioItem[] = PortfolioItems as PortfolioItem[];

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const [showAllMobile, setShowAllMobile] = useState(false);

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);
  const visibleItems = showAllMobile ? filtered : filtered.slice(0, 3);
  return (
    <section
      id="portfolio"
      className="section-py bg-white"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12">
          <p className="font-sans text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2
            id="portfolio-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-4"
          >
            Made with <em className="italic text-brand-blue">Pride</em>
          </h2>
          <p className="font-sans text-lg text-ink-muted max-w-xl mx-auto leading-relaxed">
            Browse a selection of our finished work — uniforms and custom suits,
            plus formal coats available for rent.
          </p>
          <div className="rule-brand mx-auto mt-6" aria-hidden="true" />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection
          delay={0.1}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => {
                setActive(cat);
                setShowAllMobile(false);
              }}
              className={[
                "font-sans text-sm font-medium px-5 py-2 rounded-full border transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                active === cat
                  ? "bg-brand-blue text-white border-[#82a1f6]"
                  : "bg-transparent text-ink-muted border-border hover:border-[#1b3fa6] hover:text-brand-blue",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Gallery grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Showing ${filtered.length} items`}
          >
            {visibleItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={[
                  "group relative overflow-hidden rounded-3xl shadow-[0_4px_16px_-2px_rgba(27,63,166,0.08)]",
                  "hover:-translate-y-1 transition-transform duration-500",
                  i % 3 === 1 ? "lg:mt-8" : "",
                ].join(" ")}
              >
                {/* Portfolio image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    className="object-cover"
                    aria-label={item.alt}
                    fill
                    src={item.src}
                    alt={item.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <span className="font-sans text-xs text-white/70 tracking-widest uppercase">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-white mt-1">
                        {item.label}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card bottom */}
                <div className="bg-white px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-sans text-xs text-[#9ca3af] tracking-widest uppercase">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-base font-semibold text-ink">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {filtered.length > 3 && (
          <div className="mt-8 text-center ">
            <button
              type="button"
              onClick={() => setShowAllMobile((prev) => !prev)}
              className="font-sans text-sm font-semibold text-brand-blue underline underline-offset-4 hover:text-brand-blue-light transition-all duration-300 hover:cursor-pointer"
            >
              {showAllMobile ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
        {/* Facebook CTA */}
        <AnimatedSection delay={0.2} className="text-center mt-14">
          <p className="font-sans text-ink-muted mb-4">
            See more of our finished work on Facebook
          </p>
          <Link
            href="https://www.facebook.com/profile.php?id=100077176364725"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full border border-[#1b3fa6] text-brand-blue font-sans text-sm font-semibold uppercase tracking-widest hover:bg-brand-blue-light transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            aria-label="View more work on our Facebook page (opens in new tab)"
          >
            View on Facebook
            <ExternalLink size={14} aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
