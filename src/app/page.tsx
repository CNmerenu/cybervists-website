import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import CommunityVideo from "@/components/CommunityVideo";
import Contact from "@/components/Contact";

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
