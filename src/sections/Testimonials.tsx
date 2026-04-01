import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    id: 1,
    quote: "[ Replace with a real customer review. This is a placeholder. ]",
    author: "Client Name",
    role: "Client",
  },
  {
    id: 2,
    quote: "[ Replace with a real customer review. This is a placeholder. ]",
    author: "National University (NU)",
    role: "Client",
  },
  {
    id: 3,
    quote: "[ Replace with a real customer review. This is a placeholder. ]",
    author: "Client Name",
    role: "Client",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-py bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <AnimatedSection className="text-center mb-14">
          <p className="font-sans text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3">
            Client Stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-4"
          >
            What Our <em className="italic text-brand-blue">Clients Say</em>
          </h2>
          <p className="font-sans text-lg text-ink-muted max-w-lg mx-auto leading-relaxed">
            Real stories from the people we have had the privilege to dress.
          </p>
          <div className="rule-brand mx-auto mt-6" aria-hidden="true" />
        </AnimatedSection>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <div
                className={[
                  "flex flex-col p-8 rounded-3xl border h-full",
                  "hover:-translate-y-1 hover:shadow-[0_12px_32px_-4px_rgba(27,63,166,0.08)] transition-all duration-500",
                  i === 1 ? "md:mt-8" : "",
                  "border-border bg-white",
                ].join(" ")}
              >
                {/* Quote icon */}
                <Quote
                  size={28}
                  className="text-brand-blue/20 mb-4"
                  aria-hidden="true"
                />

                {/* Quote text */}
                <blockquote className="font-serif text-base italic text-ink leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  {/* Avatar placeholder */}
                  <div
                    className="w-9 h-9 rounded-full bg-[#e8edf9] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="font-sans text-xs font-bold text-brand-blue">
                      {t.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-ink">
                      {t.author}
                    </p>
                    <p className="font-sans text-xs text-[#9ca3af]">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
