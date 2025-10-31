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
        title: "Inclusion & Empowerment",
        description:
          "Building cyber-resilient communities through training, awareness events, and practical education that empowers individuals and community groups to recognise threats, protect their data, and respond confidently to digital security challenges.",
        bgImage: "/assets/digital_inclusion.png",
      },
      {
        title: "Cyber Security",
        description:
          "Facilitating cyber resilient grassroots communities through continuous training and events centred on cybersecurity awareness. Building stronger defenses against digital threats.",
        bgImage: "/assets/cybersecurity_action.png",
      },

      {
        title: "Responsible Online Use",
        description:
          "Empowering families, children, and community members to practice respectful communication, and maintain healthy online habits that protect well-being and foster safe, positive internet experiences for all",
        bgImage: "/assets/bobomi.png",
      },
    ],
  };

  return (
    <section id="programs" className="w-full py-16 md:py-24 bg-[#E8E8E8]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {programsContent.title}
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            {programsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-32 mb-8 md:mb-12">
          {programsContent.programs.map((program, index) => (
            <div key={index} className="space-y-4 max-w-[300px] ">
              {/* Image Section */}
              <div
                className="h-[250px] bg-cover bg-center bg-no-repeat rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${program.bgImage})`,
                }}
              />

              {/* Text Section */}
              <div className="rounded-xl shadow-sm p-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 capitalize">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed flex items-center">
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
