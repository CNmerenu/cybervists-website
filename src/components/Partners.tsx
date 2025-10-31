import Image from "next/image";
import React from "react";

interface Partner {
  name: string;
  logo: string;
  alt: string;
  width?: number;
  height?: number;
}

const partnersContent = {
  title: "Partners & Funders",
  subtitle: "We are Supported & Funded by:",
  partners: [
    {
      name: "Community Fund",
      logo: "/assets/partners/community_fund.svg",
      alt: "Community Fund partner",
      width: 300,
      height: 60,
    },
    {
      name: "SCVS",
      logo: "/assets/partners/scvs.png",
      alt: "Swansea Council for Voluntary Service partner",
      width: 200,
      height: 60,
    },
    {
      name: "C3 Culture",
      logo: "/assets/partners/c3_culture.png",
      alt: "C3 Culture partner",
      width: 180,
      height: 60,
    },
    {
      name: "Congolese Development Project",
      logo: "/assets/partners/congolese_dev_proj.png",
      alt: "Congolese Development Project partner",
      width: 200,
      height: 60,
    },
    {
      name: "Faith in Families",
      logo: "/assets/partners/faithinfamilies.png",
      alt: "Faith in Families partner",
      width: 180,
      height: 60,
    },
    {
      name: "Mums and Toddlers",
      logo: "/assets/partners/mumsandtodlers.png",
      alt: "Mums and Toddlers partner",
      width: 200,
      height: 60,
    },
    {
      name: "SASS",
      logo: "/assets/partners/sass.png",
      alt: "SASS partner",
      width: 150,
      height: 60,
    },
    {
      name: "Swansea Council",
      logo: "/assets/partners/swanseacouncil.png",
      alt: "Swansea Council partner",
      width: 200,
      height: 60,
    },
  ] as Partner[],
};

const Partners = () => {
  return (
    <section
      id="partners"
      className="w-full flex flex-col items-center  border-b-[1px]"
    >
      <div className="w-full py-16 md:py-24 md:h-[562px] bg-white justify-center">
        <div className="w-full max-w-[1440px] mx-auto h-full justify-center">
          <div className="w-full h-full flex flex-col items-center text-black">
            <h2 className="font-black text-xl md:text-[40px] leading-[110%] -tracking-[2] text-center px-4">
              {partnersContent.title}
            </h2>
            <p className="mt-6 md:mt-10 leading-[140%] text-xs md:text-[18px] font-bold max-w-[320px] md:w-[391px] text-center px-4">
              We are <span className="font-black">Supported</span> &{" "}
              <span className="font-black">Funded</span> by:
            </p>
            <div className="w-[220px] h-[1px] bg-gradient-to-r from-primary-500  to-accent-500 mt-6" />
            {/* Desktop Layout */}
            <div className="w-full max-w-4xl hidden md:flex flex-wrap items-center justify-center gap-8 mt-8">
              {partnersContent.partners?.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    width={partner.width ?? 200}
                    height={partner.height ?? 50}
                    alt={partner.alt || `Partner ${index + 1}`}
                    className="cursor-pointer transition-transform duration-300 hover:scale-110"
                    style={{ width: "auto", height: "auto", maxHeight: "60px" }}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden flex-col items-center mt-8 w-full max-w-[280px] px-4">
              <div className="flex flex-col justify-center items-center w-full gap-6">
                {partnersContent.partners?.map((partner, index) => (
                  <Image
                    key={index}
                    src={partner.logo}
                    width={(partner.width ?? 300) * 0.4}
                    height={(partner.height ?? 75) * 0.4}
                    alt={partner.alt || `Partner ${index + 1}`}
                    className="transition-transform duration-300 hover:scale-210 cursor-pointer"
                    style={{ width: "auto", height: "auto", maxHeight: "40px" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
