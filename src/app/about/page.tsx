import { ArrowRight } from "lucide-react";
import Link from "next/link";

const aboutPageContent = {
  hero: {
    title: "About Cybervists",
    description:
      "We are a pioneer, community-centric non-profit organisation dedicated to making the digital world safer for everyone through tailored digital and cybersecurity awareness sessions and technology empowerment. We keep it simple, fun and effective.",
  },
  mission: {
    title: "Our Mission",
    description:
      "To transform how everyday people interact with technology by building confidence, ethical use, and cyber resilience in digital spaces.",
  },
  vision: {
    title: "Our Vision",
    description:
      "We envision a world where digital literacy and cyber awareness is universal, where every generation and ethnicity feels digitally confident and safe without fear and anxiety",
  },
  values: {
    title: "Our Core Values",
    items: [
      {
        title: "Strengthen Digital Literacy",
        description:
          "We're committed to breaking down barriers. We equip every community—from youth to elderly—with the tech skills they need to succeed, not just survive, in the digital age. No one gets left behind.",
      },
      {
        title: "Advocate for Responsible Use",
        description:
          "We stand for a digital world built on respect, not harm. Every interaction matters; we advocate for responsible online use. building digital spaces where humanity comes first.",
      },
      {
        title: "Fostering Technology Empowerment",
        description:
          "Technology should unlock opportunity, not create obstacles. We empower grassroots communities with the skills and confidence to harness tech for good—driving economic growth, building resilience, and creating lasting impact.",
      },
      {
        title: "Enhance Cybersecurity Awareness",
        description:
          "Security isn't a luxury; everyone deserves the right to digital safety. We are committed to the cause, turning vulnerability into strength, one community at a time.",
      },
    ],
  },
  approach: {
    title: "Our Approach",
    description:
      "We combine technical expertise with community understanding to deliver cybersecurity education that is both comprehensive and accessible. Our team includes cybersecurity professionals, educators, and community advocates who work together to create impactful programs.",
    pillars: [
      {
        title: "Community-First",
        description:
          "We listen to community needs and design our programs accordingly",
      },
      {
        title: "Practical Focus",
        description:
          "Our training emphasizes actionable skills that can be immediately applied",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide continuous support beyond initial training sessions",
      },
    ],
  },
  cta: {
    title: "Join Our Mission",
    description:
      "Whether you're looking to enhance your digital security knowledge, volunteer your expertise, or partner with us to serve your community, there's a place for you in the Cybervists mission.",
    buttons: [
      {
        text: "Volunteer With Us",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScvuIh_KihpjARqJph8xGXS_8bueIdLYadZ7WC5cEdDZwZX5g/viewform",
        primary: true,
        external: true,
      },
      {
        text: "Partner With Us",
        href: "/#contact",
        primary: false,
        external: false,
      },
    ],
  },
};

export default function About() {
  return (
    <main className="w-full md:w-[1440px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
            {aboutPageContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {aboutPageContent.hero.description}
          </p>
        </div>
      </section>
      <section className="pb-16 md:pb-24 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                {aboutPageContent.mission.title}
              </h2>
              {
                <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                  {aboutPageContent.mission.description}
                </p>
              }
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {aboutPageContent.vision.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {aboutPageContent.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              {aboutPageContent.values.title}
            </h2>

            <div className="flex flex-row gap-5 justify-center">
              {aboutPageContent.values.items.map((value, index) => {
                return (
                  <span
                    key={index}
                    className="font-bold capitalize text-xl md:text-2xl w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center"
                  >
                    {value.title.trim().charAt(0)}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutPageContent.values.items.map((value, index) => {
              return (
                <div key={index} className="bg-white rounded-xl p-6 md:p-8">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="font-bold capitalize text-xl md:text-2xl">
                      {value.title.trim().charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            {aboutPageContent.approach.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {aboutPageContent.approach.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutPageContent.approach.pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            {aboutPageContent.cta.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            {aboutPageContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {aboutPageContent.cta.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-colors ${
                  button.primary
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
                }`}
              >
                {button.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
