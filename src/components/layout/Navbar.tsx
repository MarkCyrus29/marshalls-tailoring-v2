"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#portfolio", label: "Our Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500 ease-out",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_16px_rgba(27,63,166,0.08)] border-b border-border"
            : "bg-transparent",
        ].join(" ")}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-20 md:h-24">
            <span
              aria-hidden="true"
              className="w-10 h-10  opacity-0 lg:hidden"
            ></span>
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-sm mt-4"
              aria-label="Marshalls Tailoring — Home"
            >
              <Image
                src="/header-transparent.png"
                alt="Marshalls Tailoring"
                width={200}
                height={60}
                priority
                className="h-10 w-auto md:h-12 object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm font-medium text-ink-muted hover:text-brand-blue transition-colors duration-300 tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center h-10 px-6 rounded-full bg-brand-blue text-white font-sans text-sm font-semibold uppercase tracking-widest hover:bg-brand-blue-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Burger */}
            <button
              type="button"
              title={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-ink hover:bg-brand-blue-light hover:text-brand-blue transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-white/98 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu content */}
        <div
          className={[
            "relative flex flex-col items-center justify-center h-full gap-8 transition-all duration-500",
            isOpen ? "translate-y-0" : "-translate-y-4",
          ].join(" ")}
        >
          <nav
            className="flex flex-col items-center gap-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-serif text-2xl text-ink hover:text-brand-blue transition-colors duration-300 italic"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex items-center h-12 px-8 rounded-full bg-brand-blue text-white font-sans text-sm font-semibold uppercase tracking-widest hover:bg-brand-blue-dark transition-all duration-300 mt-2"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
