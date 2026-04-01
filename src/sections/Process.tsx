import { MessageSquare, Ruler, Package } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Inquire",
    description:
      "Reach out via our contact form, call, or visit us at Lipa City Public Market. Tell us what you need — garment type, occasion, and timeline.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Fitting & Consultation",
    description:
      "We take your exact measurements, discuss fabric choices, styling preferences, and any specific requirements to ensure a perfect result.",
  },
  {
    number: "03",
    icon: Package,
    title: "Crafting & Delivery",
    description:
      "Your garment is carefully crafted by our skilled tailors. We will notify you when it is ready for final fitting and collection.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="section-py bg-bg"
      aria-labelledby="process-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-sans text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2
            id="process-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-4"
          >
            Simple, <em className="italic text-brand-blue">Stress-Free</em>{" "}
            Process
          </h2>
          <p className="font-sans text-lg text-ink-muted max-w-xl mx-auto leading-relaxed">
            Getting a garment from Marshalls Tailoring is straightforward.
            Here&apos;s what to expect from inquiry to completion.
          </p>
          <div className="rule-brand mx-auto mt-6" aria-hidden="true" />
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[3.5rem] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-[#dde2ee]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={i * 0.15}>
                  <div className="flex flex-col items-center text-center">
                    {/* Number + icon */}
                    <div className="relative mb-6">
                      {/* Outer ring */}
                      <div className="w-16 h-16 rounded-full bg-[#e8edf9] flex items-center justify-center border-2 border-white shadow-[0_4px_16px_-2px_rgba(27,63,166,0.12)]">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                          className="text-brand-blue"
                          aria-hidden="true"
                        />
                      </div>
                      {/* Step number badge */}
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-blue text-white font-sans text-[10px] font-bold flex items-center justify-center">
                        {step.number.substring(1)}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-base text-ink-muted leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
