import {
  Shield,
  Users,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const stats = [
    { number: "200+", label: "Community Members Supported" },
    { number: "6+", label: "Organizations Partnered" },
    { number: "10+", label: "Training Sessions Delivered" },
    { number: "24/7", label: "Community Support" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Digital Security for All",
      description:
        "We believe cybersecurity should be accessible to everyone, not just those with technical expertise.",
    },
    {
      icon: Users,
      title: "Community-Centered Approach",
      description:
        "Our programs are designed with and for the communities we serve, ensuring relevance and impact.",
    },
    {
      icon: Target,
      title: "Practical Solutions",
      description:
        "We focus on actionable, real-world cybersecurity practices that make an immediate difference.",
    },
    {
      icon: Award,
      title: "Excellence in Education",
      description:
        "Our training programs are recognized for their quality, accessibility, and measurable outcomes.",
    },
  ];

  const achievements = [
    "Delivered cybersecurity training to over 500 community members",
    "Partnered with 50+ organizations across various sectors",
    "Developed accessible digital literacy programs for all skill levels",
    "Created volunteer opportunities for aspiring cybersecurity professionals",
    "Established 24/7 community support channels",
    "Built partnerships with educational institutions and government agencies",
  ];

  return (
    <main className="w-full md:w-[1440px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
            About Cybervists
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We are digital security advocates committed to empowering
            communities with cybersecurity knowledge, tools, and support to
            navigate the digital world safely and confidently.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 px-4 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize cybersecurity by making digital security
                knowledge, tools, and support accessible to individuals and
                organizations of all sizes and technical backgrounds.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We bridge the gap between complex cybersecurity concepts and
                practical, everyday digital safety through community-centered
                education, advocacy, and hands-on support.
              </p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                A world where everyone has the knowledge, tools, and confidence
                to protect themselves and their communities in the digital
                space, regardless of their technical background or resources.
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
              Our Core Values
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from program development
              to community engagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 md:p-8">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
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

      {/* Achievements Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Since our founding, we&apos;ve been dedicated to making a
              measurable difference in digital security awareness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-600">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Approach
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We combine technical expertise with community understanding to
            deliver cybersecurity education that is both comprehensive and
            accessible. Our team includes cybersecurity professionals,
            educators, and community advocates who work together to create
            impactful programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Community-First
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We listen to community needs and design our programs accordingly
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Practical Focus
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Our training emphasizes actionable skills that can be
                immediately applied
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Ongoing Support
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We provide continuous support beyond initial training sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            Whether you&apos;re looking to enhance your digital security
            knowledge, volunteer your expertise, or partner with us to serve
            your community, there&apos;s a place for you in the Cybervists
            mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScvuIh_KihpjARqJph8xGXS_8bueIdLYadZ7WC5cEdDZwZX5g/viewform"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Volunteer With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
