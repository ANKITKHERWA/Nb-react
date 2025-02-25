import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import MainHeading from "@/componet/common/MainHeading";
import Para from "@/componet/common/Para";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="sm:bg-[url('/assest/img/png/hero-img.png')] bg-no-repeat bg-cover bg-[100%]  mt-24 sm:pt-[170px] sm:pb-[85px] relative overflow-hidden bg-[#D7D9DD]">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="max-w-[551px] lg:pl-[100px] xl:pl-[136px] relative z-1 pt-9">
            <MainHeading
              classname={"sm:max-w-[511px] max-w-[230px]"}
              title={"Welcome to Nebula Vets"}
            />
            <Para
              para={"Reinventing Pet Medicine"}
              paraclass={"!Roboto-font"}
            />
            <div className="mt-[38px]">
              <LearnMore learnMore={"BOOK NOW"} path={"/home"} />
            </div>
          </div>
          <div className="mt-6 mb-3 absolute -right-20 sm:top-0 top-28  sm:max-w-[360px] max-w-[265px] md:max-w-full">
            <HeroImage
              src={"/assest/img/png/hero-img-absulate-1.png"}
              imgclass={""}
              imgw={"482"}
              imgh={"536"}
              alt={"/"}
            />
          </div>
        </div>
        <div className="sm:hidden mt-14">
          <Image
            src={"/assest/img/png/hero-small.png"}
            width={676}
            height={278}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
