import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import MainHeading from "@/componet/common/MainHeading";
import Para from "@/componet/common/Para";
import React from "react";

function Hero({}) {
  return (
    <>
      <div className="overflow-hidden">
        <div className="sm:bg-[url('/assest/img/png/hero-img.png')] bg-no-repeat bg-cover bg-[100%] pt-[142px] sm:pt-[282px] sm:pb-[85px] relative">
          <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
            <div className=" justify-between pt-20 sm:pb-[80px] pb[0px] sm:flex flex-wrp">
              <div className="lg:pl-[100px] xl:pl-[136px] relative z-1">
                <MainHeading
                  title={"Welcome to Nebula Vets"}
                  classname={"max-w-[511px]"}
                />
                <Para
                  para={"Reinventing Pet Medicine"}
                  paraclass="sm:text-[#D7D9DD] mt-2 sm:mt-4 lg:mt-[28px] text-base sm:txt-lg md:text-xl lg:text-2xl xl:text-[28px]"
                />
                <div className="mt-[38px]">
                  <LearnMore learnMore={"BOOK NOW"} path={"/"} />
                </div>
              </div>
              <div>
                <HeroImage
                  src={"/assest/img/png/hero-absulate.png"}
                  imgclass={
                    "absolute -right-[140px] bottom-4 sm:block hidden sm:max-w-[500px] xl:max-w-full "
                  }
                  imgh={"536"}
                  imgw={"600"}
                  alt={"img"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
