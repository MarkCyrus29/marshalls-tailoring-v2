import { Award, HeartHandshake, Building2, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const pillars = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description:
      "Every garment is cut, sewn, and finished with meticulous attention to detail — using quality materials and time-tested techniques.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Fitting Experience",
    description:
      "We take precise measurements and work closely with each client to ensure a fit that looks and feels exactly right for them.",
  },
  {
    icon: Building2,
    title: "Trusted by Schools & Organizations",
    description:
      "Marshalls Tailoring has earned the trust of institutions and businesses across Lipa City for uniforms, custom suits, and formal wear programs.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted in Lipa City",
    description:
      "We are a family business serving the Lipa City community. When you work with us, you support local craftsmanship.",
  },
];

export function WhyUs() {
  return (
    <section
      id="about"
      className="section-py bg-white overflow-hidden"
      aria-labelledby="whyus-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — decorative column */}
          <AnimatedSection direction="left" className="relative">
            {/* Big number ornament */}
            <div
              className="absolute -top-6 -left-4 font-serif text-[160px] font-bold text-[#e8edf9] leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              MT
            </div>

            {/* Card */}
            <div className="relative bg-brand-blue rounded-3xl p-10 lg:p-12 text-white overflow-hidden">
              {/* Decorative circle */}
              <div
                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-white/5"
                aria-hidden="true"
              />
              <div
                className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/5"
                aria-hidden="true"
              />

              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">
                Why Choose Us
              </p>
              <h2
                id="whyus-heading"
                className="font-serif text-3xl lg:text-4xl font-bold text-white leading-snug mb-5"
              >
                Tailoring Done <em className="italic text-[#b8c8f0]">Right.</em>
              </h2>
              <p className="font-sans text-base text-white/75 leading-relaxed mb-8">
                At Marshalls Tailoring, we believe a perfectly fitted garment
                does more than look good — it gives you confidence. We have
                built our reputation one stitch at a time.
              </p>
              <div className="h-px w-full bg-white/15 mb-8" />
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "All", label: "Genders Served" },
                  { value: "All kinds", label: "Uniforms Covered" },
                  { value: "Men & Women", label: "Formal Wear" },
                  { value: "Lipa City", label: "Proudly Based" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="font-sans text-xs text-white/55 tracking-wide mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={pillar.title} delay={i * 0.1}>
                  <div className="flex flex-col gap-3 p-6 rounded-2xl bg-bg border border-border hover:border-[#1b3fa6]/30 hover:bg-[#f0f3fc] transition-colors duration-300 h-full">
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#e8edf9]"
                      aria-hidden="true"
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-brand-blue"
                      />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-muted leading-relaxed">
                      {pillar.description}
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
