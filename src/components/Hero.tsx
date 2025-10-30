import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full md:h-[828px] border-b-[1px] border-blue-500/20 flex justify-center overflow-hidden bg-transparent">
      <div className="w-full md:w-[1440px] h-full relative">
        <div className="w-full h-full absolute top-0 z-20 bg-none">
          <Image
            src={"/assets/rotating-icon.svg"}
            alt="cybervists target icon"
            width={1200}
            height={1200}
            className="animate-spin absolute -right-[20%] -top-[20%] opacity-15"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="w-full h-full absolute top-0 z-40 bg-transparent">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full md:w-[1440px] flex items-center justify-center ">
              {/* Key Visuals - Mobile First */}
              <div className="flex justify-center md:order-2 md:w-1/2">
                <Image
                  src="/assets/symbol.svg"
                  alt="Cybervists Symbol logo"
                  width={500}
                  height={500}
                />
              </div>

              {/* Key Message & CTA */}
              <div className="w-full md:w-1/2 text-center md:text-left md:order-1">
                <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-gray-900">
                    Cyber Awareness{" "}
                    <span className="block"> Ethical Use &</span>
                    <span className="block">Digital Inclusion</span>
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed md:w-[65%]">
                  Championing Digital Literacy and Security, Responsible Use &
                  Inclusion
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start w-full">
                  <Link
                    href={
                      "https://docs.google.com/forms/d/e/1FAIpQLScvuIh_KihpjARqJph8xGXS_8bueIdLYadZ7WC5cEdDZwZX5g/viewform"
                    }
                    target="_blank"
                    className="px-4 py-3 md:px-8 md:py-4 bg-primary-600 text-white text-sm md:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Involved
                  </Link>
                  <Link
                    href={
                      "https://www.eventbrite.co.uk/o/cybervists-113913212541"
                    }
                    target="_blank"
                    className="px-8 py-4 border border-blue-500/30 text-accent-600 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-4 justify-center"
                  >
                    <Calendar />
                    View Upcoming Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// {
//         {/* Rotating Background Image */}
//       <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 opacity-15">
//         <div className="animate-spin" style={{ animationDuration: "20s" }}>
//           <Image
//             src="/assets/rotating-icon.svg"
//             alt=""
//             width={1200}
//             height={1200}
//           />
//         </div>
//       </div>

// }
