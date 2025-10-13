import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section
      id="partners"
      className="w-full flex flex-col items-center  border-b-[1px]"
    >
      <div className="w-full md:w-[1440px] py-16 md:py-24 md:h-[562px] bg-white justify-center">
        <div className=" w-full h-full justify-center">
          <div className="w-full h-full flex flex-col items-center text-black">
            <h2 className="font-black text-xl md:text-[40px] leading-[110%] -tracking-[2] text-center px-4">
              Partners & Funders
            </h2>
            <p className="mt-6 md:mt-10 leading-[140%] text-xs md:text-[18px] font-bold max-w-[320px] md:w-[391px] text-center px-4">
              We are <span className="font-black">Supported</span> &{" "}
              <span className="font-black">Funded</span> by:
            </p>
            <div className="w-[220px] h-[1px] bg-gradient-to-r from-primary-500  to-accent-500 mt-6" />
            <div className="w-full md:w-[817px] hidden md:flex flex-col items-center  md:flex-row md:justify-between">
              <div className="w-[311px] md:w-[477px] h-[30px] md:h-[48px]">
                <Image
                  src={"/assets/community_fund.svg"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt="cybervists - community fund partner"
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="w-[200px] md:w-[260px] h-[43px] md:h-[56px]">
                <Image
                  src={"/assets/scvs.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt="cybervists - swansea council for voluntary service partner"
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex md:hidden flex-col items-center mt-8 w-full max-w-[280px] px-4">
              <div className="flex flex-col justify-between items-center w-full gap-4">
                <Image
                  src={"/assets/community_fund.svg"}
                  height={65}
                  width={119}
                  style={{ width: "auto", height: "auto" }}
                  alt="cybervists - community fund partner"
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
                <Image
                  src={"/assets/scvs.png"}
                  height={61}
                  width={181}
                  style={{ width: "auto", height: "auto" }}
                  alt="cybervists - swansea council for voluntary service partner"
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
