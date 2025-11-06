import Image from "next/image";

export default function Programs() {
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
    <section
      id="programs"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-white via-white to-[#ffefe4]/80"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {programsContent.title}
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            {programsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 justify-items-center">
          {programsContent.programs.map((program, index) => (
            <div key={index} className="space-y-4 w-full max-w-[320px]">
              {/* Image Section */}
              <div className="relative h-[200px] md:h-[250px] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full overflow-hidden">
                <Image
                  src={program.bgImage}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 320px, 320px"
                  className="object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="rounded-xl shadow-sm p-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 capitalize mb-2">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
