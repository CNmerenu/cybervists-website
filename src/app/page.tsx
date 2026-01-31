import Hero from "@/src/components/Hero";
import Challenge from "@/src/components/Challenge";
import Services from "@/src/components/Services";
import Stats from "@/src/components/Stats";
import CTA from "@/src/components/CTA";
import Partners from "@/src/components/Partners";
import Programs from "@/src/components/Programs";
import Testimonials from "@/src/components/Testimonials";
import CommunityVideo from "@/src/components/CommunityVideo";
import Contact from "@/src/components/Contact";

export default async function Home() {
  return (
    <section className="w-full min-h-screen">
      <Hero />
      <Challenge />
      <Programs />
      <Stats />
      <CTA />
      <Services />
      <Testimonials />
      <CommunityVideo />
      <Partners />
      <Contact />
    </section>
  );
}
