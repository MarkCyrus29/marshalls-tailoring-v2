import type { Metadata } from "next";
import { Hero } from "@/sections/Hero";
import { Portfolio } from "@/sections/Portfolio";
import { Services } from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";
import { Process } from "@/sections/Process";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
