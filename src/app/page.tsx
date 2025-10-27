import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default async function Home() {
  return (
    <section className="w-full md:w-[1440px] min-h-screen">
      <Hero />
      <Challenge />
      <Programs />
      <Stats />
      <CTA />
      <Services />
      <Testimonials />
      <Partners />
      <Contact />
    </section>
  );
}
