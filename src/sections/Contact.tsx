"use client";

import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Facebook, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { submitContact } from "@/app/actions/contact";
import Script from "next/script";

const serviceOptions = [
  "Select a service...",
  "School Uniforms",
  "Corporate / Office Uniforms",
  "Organization Uniforms",
  "Custom Suit",
  "Women's Formal Wear",
  "Coat / Suit Rental",
  "Barong Tagalog",
  "Alterations",
  "Other",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors({});
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    const result = await submitContact(formData);

    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
      // Reset turnstile widget
      if (
        typeof window !== "undefined" &&
        (window as Window & { turnstile?: { reset: () => void } }).turnstile
      ) {
        (
          window as Window & { turnstile?: { reset: () => void } }
        ).turnstile?.reset();
      }
    } else {
      setStatus("error");
      setErrorMsg(result.message || "Something went wrong. Please try again.");
      if (result.fieldErrors) setFieldErrors(result.fieldErrors);
    }
  }

  const inputClass =
    "w-full font-sans text-base text-ink bg-bg border border-border rounded-xl px-4 py-3 placeholder:text-[#9ca3af] focus:outline-none focus:border-[#1b3fa6] focus:ring-2 focus:ring-[#1b3fa6]/15 transition-all duration-200";

  const labelClass = "block font-sans text-sm font-medium text-ink mb-1.5";

  return (
    <>
      {/* Cloudflare Turnstile script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <section
        id="contact"
        className="section-py bg-white"
        aria-labelledby="contact-heading"
      >
        <div className="container-site">
          {/* Section header */}
          <AnimatedSection className="text-center mb-14">
            <p className="font-sans text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-4"
            >
              Start Your <em className="italic text-brand-blue">Inquiry</em>
            </h2>
            <p className="font-sans text-lg text-ink-muted max-w-xl mx-auto leading-relaxed">
              Ready to get measured or rent a coat? Fill out the form below or
              reach us directly — we are happy to help.
            </p>
            <div className="rule-brand mx-auto mt-6" aria-hidden="true" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* ── Left: Contact info ── */}
            <AnimatedSection direction="left">
              {/* Info card */}
              <div className="bg-brand-blue rounded-3xl p-8 lg:p-10 text-white mb-6 relative overflow-hidden">
                <div
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-2xl font-bold text-white! mb-6">
                  Contact Details
                </h3>

                <address className="not-italic space-y-5">
                  <a
                    href="https://maps.app.goo.gl/XVYBSGxgcLUGsmcA7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                    aria-label="Get directions to Marshalls Tailoring (opens in new tab)"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 shrink-0 transition-colors duration-200">
                      <MapPin size={18} aria-hidden="true" />
                    </span>
                    <span className="font-sans text-sm text-white/80 leading-relaxed group-hover:text-white transition-colors duration-200">
                      2nd Floor, Bldg. 1, Lipa City Public Market,
                      <br />
                      Lipa City, Batangas
                    </span>
                  </a>

                  <div className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                      <Phone size={18} aria-hidden="true" />
                    </span>
                    <div className="font-sans text-sm text-white/80 space-y-1">
                      <a
                        href="tel:+639452731100"
                        className="block hover:text-white transition-colors duration-200"
                        aria-label="Call Globe number: 0945 273 1100"
                      >
                        0945 273 1100{" "}
                        <span className="text-white/40 text-xs">(Globe)</span>
                      </a>
                      <a
                        href="tel:+639397401011"
                        className="block hover:text-white transition-colors duration-200"
                        aria-label="Call Smart number: 0939 740 1011"
                      >
                        0939 740 1011{" "}
                        <span className="text-white/40 text-xs">(Smart)</span>
                      </a>
                    </div>
                  </div>

                  <a
                    href="mailto:marshalls.tailoring@gmail.com"
                    className="flex items-center gap-4 group"
                    aria-label="Email us at marshalls.tailoring@gmail.com"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 shrink-0 transition-colors duration-200">
                      <Mail size={18} aria-hidden="true" />
                    </span>
                    <span className="font-sans text-sm text-white/80 group-hover:text-white transition-colors duration-200 break-all">
                      marshalls.tailoring@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100077176364725"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    aria-label="Visit our Facebook page (opens in new tab)"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 shrink-0 transition-colors duration-200">
                      <Facebook size={18} aria-hidden="true" />
                    </span>
                    <span className="font-sans text-sm text-white/80 group-hover:text-white transition-colors duration-200">
                      Marshalls Tailoring on Facebook
                    </span>
                  </a>
                </address>
              </div>

              {/* Map embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border h-86 bg-brand-blue-light flex items-center justify-center">
                <iframe
                title="Map showing location of Marshalls Tailoring in Lipa City Public Market"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.2639839284784!2d121.1613151!3d13.942881199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6ca2e6b1f06d%3A0x8186c2023439c014!2s32%20Malabanan%20St%2C%20Lipa%20City%2C%204217%20Batangas!5e0!3m2!1sen!2sph!4v1774966496040!5m2!1sen!2sph"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </AnimatedSection>

            {/* ── Right: Contact form ── */}
            <AnimatedSection direction="right">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact inquiry form"
                className="bg-bg rounded-3xl border border-border p-8 lg:p-10"
              >
                <p className="font-sans text-xs text-[#9ca3af] mb-6">
                  Fields marked with <span aria-hidden="true">*</span>
                  <span className="sr-only"> (required)</span> are required.
                </p>

                {/* Honeypot — hidden from real users */}
                <div
                  className="absolute opacity-0 pointer-events-none h-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className={labelClass}>
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      maxLength={100}
                      placeholder="Your full name"
                      className={inputClass}
                      aria-describedby={
                        fieldErrors.name ? "name-error" : undefined
                      }
                    />
                    {fieldErrors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 font-sans text-xs text-red-500"
                        role="alert"
                      >
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      maxLength={200}
                      placeholder="you@email.com"
                      className={inputClass}
                      aria-describedby={
                        fieldErrors.email ? "email-error" : undefined
                      }
                    />
                    {fieldErrors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 font-sans text-xs text-red-500"
                        role="alert"
                      >
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      maxLength={30}
                      placeholder="09xx xxx xxxx"
                      className={inputClass}
                      aria-describedby={
                        fieldErrors.phone ? "phone-error" : undefined
                      }
                    />
                    {fieldErrors.phone && (
                      <p
                        id="phone-error"
                        className="mt-1.5 font-sans text-xs text-red-500"
                        role="alert"
                      >
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className={labelClass}>
                      Service of Interest <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className={inputClass + " cursor-pointer"}
                      defaultValue=""
                      aria-describedby={
                        fieldErrors.service ? "service-error" : undefined
                      }
                    >
                      {serviceOptions.map((opt, i) => (
                        <option
                          key={opt}
                          value={i === 0 ? "" : opt}
                          disabled={i === 0}
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.service && (
                      <p
                        id="service-error"
                        className="mt-1.5 font-sans text-xs text-red-500"
                        role="alert"
                      >
                        {fieldErrors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      maxLength={2000}
                      placeholder="Tell us about your needs — occasion, timeline, measurements if available..."
                      className={inputClass + " resize-none"}
                      aria-describedby={
                        fieldErrors.message ? "message-error" : undefined
                      }
                    />
                    {fieldErrors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 font-sans text-xs text-red-500"
                        role="alert"
                      >
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Cloudflare Turnstile */}
                <div className="mt-5">
                  <div
                    className="cf-turnstile"
                    data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    data-theme="light"
                    aria-label="Security challenge"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-5 rounded-xl bg-green-50 border border-green-200 text-green-800 font-sans text-sm px-4 py-3"
                  >
                    ✓ Your inquiry has been sent! We will get back to you soon.
                  </div>
                )}
                {status === "error" && errorMsg && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="mt-5 rounded-xl bg-red-50 border border-red-200 text-red-700 font-sans text-sm px-4 py-3"
                  >
                    {errorMsg}
                    {fieldErrors && fieldErrors["cf-turnstile-response"] && (
                      <span className="block mt-1 font-medium">
                        Please complete the captcha above.
                      </span>
                    )}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-brand-blue text-white font-sans text-sm font-semibold uppercase tracking-widest hover:bg-brand-blue-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={14} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
