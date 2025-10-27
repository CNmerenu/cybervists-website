import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full md:[w-1440px] py-5 md:h-[828px] border-b-[1px] border-blue-500/20 flex items-center relative overflow-hidden bg-primary-50">
      {/* Rotating Background Image */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 opacity-15">
        <div className="animate-spin" style={{ animationDuration: "20s" }}>
          <Image
            src="/assets/rotating-icon.svg"
            alt=""
            width={1200}
            height={1200}
          />
        </div>
      </div>

      <div className="w-full mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Key Visuals - Mobile First */}
        <div className="w-full md:w-1/3 flex justify-center md:order-2">
          <Image
            src="/assets/symbol.svg"
            alt=""
            width={300}
            height={300}
            className="md:w-[1200px] md:h-[1200px]"
          />
        </div>

        {/* Key Message & CTA */}
        <div className="w-full md:w-2/3 text-center md:text-left md:order-1">
          <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-gray-900">
              Cyber Awareness <span className="block"> Ethical Use &</span>
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
              href={"https://www.eventbrite.co.uk/o/cybervists-113913212541"}
              target="_blank"
              className="px-8 py-4 border border-blue-500/30 text-accent-600 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-4 justify-center"
            >
              <Calendar />
              View Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
