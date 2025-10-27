import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServiceContent {
  title: string;
  subtitle: string;
  services: Service[];
}
const servicesContent: ServiceContent = {
  title: "Our Services",
  subtitle:
    "Comprehensive cybersecurity solutions for the modern digital landscape",
  services: [
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
  ],
};

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-16 md:py-24 bg-gray-800 relative overflow-hidden"
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
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            {servicesContent.title}
          </h2>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            {servicesContent.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Top row - 3 services */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {servicesContent.services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 hover:border-gray-300 hover:shadow-md transition-all duration-300 group w-full md:w-80"
              >
                <div className="w-32 h-32 mb-4 mx-auto bg-white rounded-full overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <Link href={"/#contact"}>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 transition-colors text-center cursor-pointer">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom row - 2 services centered */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {servicesContent.services.slice(3, 5).map((service, index) => (
              <div
                key={index + 3}
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 hover:border-gray-300 hover:shadow-md transition-all duration-300 group w-full md:w-80"
              >
                <div className="w-32 h-32 mb-4 mx-auto bg-white rounded-full overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <Link href={"/#contact"}>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 transition-colors text-center cursor-pointer">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
