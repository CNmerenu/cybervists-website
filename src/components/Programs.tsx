"use client";

import { Shield, Users, Laptop, Heart, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function Programs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const programsContent = {
    title: "Our Main Pillars",
    subtitle:
      "Empowering communities through bespoke cyber awareness literacy, ethical online use and technology support.",
    programs: [
      {
        icon: Shield,
        title: "Cyber Security",
        description:
          "Facilitating cyber resilient grassroots communities through continuous training and events centred on cybersecurity awareness. Building stronger defenses against digital threats.",
        bgImage: "/assets/cybersecurity_action.png",
      },
      {
        icon: Users,
        title: "Digital Inclusion",
        description:
          "Bridging the digital divide through comprehensive support programs tailored for vulnerable communities, delivering culturally appropriate training and coaching.",
        bgImage: "/assets/digital_inclusion.png",
      },
      {
        icon: Laptop,
        title: "Technology Empowerment",
        description:
          "Making digital skills accessible to all, one community at a time. Empowering individuals with essential technology knowledge and practical digital literacy skills.",
        bgImage: "/assets/digital_litreracy.png",
      },
    ],
  };

  return (
    <section id="programs" className="w-full py-16 md:py-24 bg-[#E8E8E8]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {programsContent.title}
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            {programsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {programsContent.programs.map((program, index) => (
            <div key={index} className="space-y-4">
              {/* Image Section */}
              <div
                className="h-[250px] bg-cover bg-center bg-no-repeat rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${program.bgImage})`,
                }}
              />

              {/* Text Section */}
              <div className=" bg-none rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed h-20 flex items-center">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
