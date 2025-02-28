import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import MainHeading from "@/componet/common/MainHeading";
import Para from "@/componet/common/Para";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-[#494336] relative">
          <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
            <div className=" justify-between pt-[140px] sm:pb-[80px] pb[0px] sm:flex flex-wrp">
              <div className="  lg:pl-[100px] xl:pl-[136px] relative z-1">
                <MainHeading
                  title={"Animal Health Check"}
                  classname={"!pt-[140px]"}
                />
                <Para
                  para={
                    "This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due."
                  }
                />
                <div className="mt-[38px]">
                  <LearnMore learnMore={"BOOK NOW"} path={"/"} />
                </div>
              </div>
              <div>
                <HeroImage
                  src={"/assest/img/png/animal-health.png"}
                  imgclass={
                    "absolute -right-10 bottom-0 sm:block hidden sm:max-w-[500px] xl:max-w-full"
                  }
                  imgh={"521"}
                  imgw={"528"}
                  alt={"/"}
                />
              </div>
              <div className="sm:hidden">
                <Image
                  src="/assest/img/png/hero-cat-dog-right.png"
                  width={362}
                  height={252}
                  alt="img"
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
