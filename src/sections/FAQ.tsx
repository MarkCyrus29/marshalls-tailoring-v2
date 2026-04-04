"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    question: "Do you make uniforms and custom suits for both men and women?",
    answer:
      "Yes. We tailor school, corporate, and organizational uniforms for all genders, and we also craft made-to-measure suits, coats, and formal wear to your measurements.",
  },
  {
    question: "What kinds of uniforms can you make?",
    answer:
      "We make all kinds of uniforms — including school uniforms, corporate and office uniforms, organizational uniforms, and industry-specific workwear. Just tell us what you need.",
  },
  {
    question: "How does coat and suit rental work?",
    answer:
      "We offer coats and suits for rent for formal events such as weddings, debut parties, and graduations. Get in touch with us to check availability and discuss options for your event.",
  },
  {
    question: "How do I get started with an order?",
    answer:
      "You can inquire via our contact form on this page, send us a message on Facebook, email us, or visit us directly at our shop on the 2nd Floor, Bldg. 1, Lipa City Public Market. We will schedule a fitting and consultation.",
  },
  {
    question: "Do you do alterations on existing garments?",
    answer:
      "Please reach out to us directly to discuss alteration requests. We are happy to help where we can.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at the 2nd Floor, Bldg. 1, Lipa City Public Market, Lipa City, Batangas. You can also reach us by phone or message on Facebook.",
  },
  {
    question: "Do you make Barong Tagalog?",
    answer:
      "Yes. While uniforms and custom suits are our main focus, we also sew Barong Tagalog for men and women — ideal for weddings, graduations, and formal Filipino dress codes.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const id = `faq-answer-${index}`;

  return (
    <div className="border-b border-border last:border-b-0 ">
      <button
        type="button"
        title="Frequently asked question"
        className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-sm "
        onClick={() => setIsOpen(!isOpen)}
        aria-controls={id}
      >
        <span className="font-serif text-base font-semibold text-ink group-hover:text-brand-blue transition-colors duration-200 pr-4 ">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={[
            "text-brand-blue shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>

      <div
        id={id}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={[
          "overflow-hidden transition-all duration-400 ease-out",
          isOpen ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <p className="font-sans text-base text-ink-muted leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="section-py bg-bg"
      aria-labelledby="faq-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: header */}
          <AnimatedSection direction="left" className="lg:sticky lg:top-32">
            <p className="font-sans text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-4 leading-tight"
            >
              Frequently Asked{" "}
              <em className="italic text-brand-blue">Questions</em>
            </h2>
            <p className="font-sans text-lg text-ink-muted leading-relaxed mb-6">
              Got more questions? We are happy to help. Reach out via the
              contact form or message us on Facebook.
            </p>
            <div className="rule-brand" aria-hidden="true" />
          </AnimatedSection>

          {/* Right: FAQ list */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-3xl border border-border px-6 lg:px-8 py-2">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  index={i}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
