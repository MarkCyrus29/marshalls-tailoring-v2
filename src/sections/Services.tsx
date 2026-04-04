import { Scissors, Users, Shirt, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Users,
    title: "All Kinds of Uniforms",
    description:
      "Our core focus: school, corporate, office, and organizational uniforms that fit well, wear well, and represent your institution with pride — from single pieces to bulk orders.",
    href: "#contact",
    color: "#eef1fb",
    accentColor: "#1b3fa6",
  },
  {
    icon: Scissors,
    title: "Custom Suits & Tailoring",
    description:
      "Made-to-measure suits and formal wear for men and women — precise fittings for weddings, graduations, and professional events. Barong Tagalog is also available when you need traditional Filipino formal dress.",
    href: "#contact",
    color: "#e8edf9",
    accentColor: "#1b3fa6",
  },
  {
    icon: Shirt,
    title: "Coats & Suits for Rent",
    description:
      "Look polished for any formal event without the commitment of ownership. Our rental collection covers men's and women's formal coats for every occasion.",
    href: "#contact",
    color: "#e8edf9",
    accentColor: "#1b3fa6",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section-py bg-bg"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-sans text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2
            id="services-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-4"
          >
            Crafted for Every{" "}
            <em className="italic text-brand-blue">Occasion</em>
          </h2>
          <p className="font-sans text-lg text-ink-muted max-w-xl mx-auto leading-relaxed">
            Uniform programs and custom suits are what we do every day — with
            the same care whether you need one garment or a full organization
            rollout.
          </p>
          <div className="rule-brand mx-auto mt-6" aria-hidden="true" />
        </AnimatedSection>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={service.title}
                delay={i * 0.12}
                className={[
                  "group flex flex-col rounded-3xl p-8 lg:p-10 border border-border",
                  "hover:-translate-y-2 hover:shadow-[0_24px_48px_-8px_rgba(27,63,166,0.12)] transition-all duration-500",
                  // Stagger on desktop
                  i === 1 ? "md:mt-10" : "",
                ].join(" ")}
                style={
                  { backgroundColor: service.color } as React.CSSProperties
                }
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-[0_4px_16px_-2px_rgba(27,63,166,0.1)] mb-6"
                  aria-hidden="true"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-brand-blue"
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-ink mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="font-sans text-base text-ink-muted leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* CTA link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 mt-6 font-sans text-sm font-semibold text-brand-blue hover:gap-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-sm"
                >
                  Inquire Now
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
