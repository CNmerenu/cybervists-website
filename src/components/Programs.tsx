"use client";

import { Shield, Users, BookOpen, Zap, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function Programs() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const programs = [
    {
      icon: Shield,
      title: "Cybersecurity Training",
      description:
        "Comprehensive security awareness programs for organizations and individuals to protect against digital threats.",
      features: [
        "Threat Recognition",
        "Incident Response",
        "Security Protocols",
      ],
      bgImage: "/assets/cybersecurity_action.png",
      content: [
        "Interactive phishing simulation exercises to identify suspicious emails and links",
        "Hands-on incident response workshops with real-world scenarios",
        "Password security training including multi-factor authentication setup",
        "Social engineering awareness sessions with practical examples",
        "Network security fundamentals for small businesses",
        "Data backup and recovery best practices",
      ],
    },
    {
      icon: Users,
      title: "Digital Inclusion",
      description:
        "Bridging the digital divide through accessible technology education and community support programs.",
      features: ["Digital Literacy", "Tech Access", "Community Support"],
      bgImage: "/assets/digital_inclusion.png",
      content: [
        "Basic computer skills training for seniors and underserved communities",
        "Smartphone and tablet navigation workshops",
        "Online banking and digital payments safety courses",
        "Video calling and social media privacy settings guidance",
        "Digital government services access training",
        "One-on-one tech support sessions for vulnerable populations",
      ],
    },
    {
      icon: BookOpen,
      title: "Educational Workshops",
      description:
        "Interactive learning sessions covering privacy, data protection, and responsible digital citizenship.",
      features: ["Privacy Protection", "Data Rights", "Digital Ethics"],
      bgImage: "/assets/digital_litreracy.png",
      content: [
        "GDPR and data protection rights awareness sessions",
        "Social media privacy settings and digital footprint management",
        "Online safety for children and teenagers",
        "Digital ethics and responsible AI usage discussions",
        "Cryptocurrency and online financial security workshops",
        "Digital wellness and screen time management strategies",
      ],
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description:
        "Emergency cybersecurity support and guidance for organizations facing digital security incidents.",
      features: ["24/7 Support", "Incident Analysis", "Recovery Planning"],
      bgImage: "/assets/symbol.svg",
      content: [
        "Immediate malware and ransomware incident containment",
        "Data breach assessment and notification compliance guidance",
        "Emergency password reset and account recovery procedures",
        "Forensic analysis of security incidents and attack vectors",
        "Business continuity planning during cyber incidents",
        "Post-incident security hardening and prevention strategies",
      ],
    },
  ];

  return (
    <section id="programs" className="w-full py-16 md:py-24 bg-[#E8E8E8]">
      <div className="px-4 md:px-16  w-full md:w-[1440px] ">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Programs
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Empowering communities through comprehensive cybersecurity education
            and digital literacy initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative h-72 md:h-80 perspective-1000"
              tabIndex={0}
              onBlur={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
                onClick={() =>
                  setFlippedCard(flippedCard === index ? null : index)
                }
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 bg-white rounded-xl p-4 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 backface-hidden  overflow-hidden"
                  style={{
                    backgroundImage: `url(${program.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-white/90 rounded-xl" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                        {program.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                        {program.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-50 text-blue-700 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 md:mt-4 text-xs md:text-sm text-blue-600 font-medium">
                        Click to see detailed activities →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 bg-primary-600 rounded-xl p-8 shadow-sm rotate-y-180 backface-hidden">
                  <div className="flex items-center gap-3 mb-6">
                    <ArrowLeft className="w-5 h-5 text-white" />
                    <h3 className="text-xl font-bold text-white">
                      {program.title} Activities
                    </h3>
                  </div>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {program.content
                      .slice(0, isMobile ? 3 : 6)
                      .map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                          <p className="text-white text-sm leading-relaxed">
                            {activity}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add custom CSS classes
const styles = `
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
