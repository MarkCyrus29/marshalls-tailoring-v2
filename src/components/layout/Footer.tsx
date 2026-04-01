import Link from "next/link";
import Image from "next/image";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

const services = [
  "Bespoke Suits & Barongs",
  "Uniforms (All Types)",
  "Formal Coats for Rent",
  "Women's Formal Wear",
  "Alterations",
];

const quickLinks = [
  { href: "#portfolio", label: "Our Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      className="bg-[#0f1e5c] text-white/80"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Marshalls Tailoring — Home">
              <Image
                src="/header-transparent.png"
                alt="Marshalls Tailoring"
                width={180}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert mb-4"
              />
            </Link>
            <p className="font-sans text-sm leading-relaxed text-white/60 mb-6 max-w-xs">
              Precision craftsmanship for every occasion. Proudly serving Lipa
              City and the surrounding areas of Batangas.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100077176364725"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
              aria-label="Visit our Facebook page (opens in new tab)"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300">
                <Facebook size={14} />
              </span>
              <span className="text-sm font-sans">Follow on Facebook</span>
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-white text-base font-semibold mb-5 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-white text-base font-semibold mb-5 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="font-sans text-sm text-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-serif text-white text-base font-semibold mb-5 tracking-wide">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[#4a6bcc] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  2nd Floor, Bldg. 1,
                  <br />
                  Lipa City Public Market,
                  <br />
                  Lipa City, Batangas
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[#4a6bcc] shrink-0"
                  aria-hidden="true"
                />
                <div className="font-sans text-sm text-white/60 space-y-1">
                  <a
                    href="tel:+639452731100"
                    className="block hover:text-white transition-colors duration-200"
                    aria-label="Call Globe: 0945 273 1100"
                  >
                    0945 273 1100{" "}
                    <span className="text-white/40 text-xs">(Globe)</span>
                  </a>
                  <a
                    href="tel:+639397401011"
                    className="block hover:text-white transition-colors duration-200"
                    aria-label="Call Smart: 0939 740 1011"
                  >
                    0939 740 1011{" "}
                    <span className="text-white/40 text-xs">(Smart)</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#4a6bcc] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:marshalls.tailoring@gmail.com"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 break-all"
                >
                  marshalls.tailoring@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/35 text-center sm:text-left">
            © {currentYear} Marshalls Tailoring. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/35">
            Lipa City, Batangas, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
