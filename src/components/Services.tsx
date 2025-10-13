import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Cybersecurity Training and Awareness",
    description:
      "Comprehensive security awareness programs to protect against phishing, malware, and social engineering attacks.",
    image: "/assets/security_awareness.jpg",
  },
  {
    title: "Digital Literacy & Support",
    description:
      "Bridging the digital divide with accessible technology education and one-on-one support for all skill levels.",
    image: "/assets/digital_litreracy_support.png",
  },
  {
    title: "Tech Research & Development",
    description:
      "Innovative research into emerging technologies and development of privacy-focused digital solutions.",
    image: "/assets/research.png",
  },
  {
    title: "Community Empowerment",
    description:
      "Building stronger communities through digital inclusion initiatives and grassroots technology programs.",
    image: "/assets/community_hands.jpg",
  },
  {
    title: "Coaching/Employment Support",
    description:
      "Career guidance and skills development in cybersecurity and technology fields for job seekers.",
    image: "/assets/coaching.png",
  },
  {
    title: "Security Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities and strengthen your digital infrastructure.",
    image: "/assets/symbol.svg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full md:w-[1440px] py-16 md:py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Rotating Background Image */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 opacity-15">
        <div className="animate-spin" style={{ animationDuration: "20s" }}>
          <Image
            src="/assets/rotating-icon-light.svg"
            alt=""
            width={1200}
            height={1200}
          />
        </div>
      </div>
      <div className="px-4 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Our Services
          </h2>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Comprehensive cybersecurity solutions for the modern digital
            landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-blue-500/30 rounded-xl p-4 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-32 h-32 mb-4 mx-auto bg-white rounded-full overflow-hidden border-8 border-primary-700 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Link href={"/#contact"}>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors text-center cursor-pointer">
                  {service.title}
                </h3>
              </Link>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
