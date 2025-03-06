import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import MainHeading from "@/componet/common/MainHeading";
import Para from "@/componet/common/Para";
import React from "react";

function Hero({
  title,
  para,
  imgsrc,
  imgh,
  imgw,
  className,
  imgclass,
  paraclass,
}) {
  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-[#494336] relative">
          <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
            <div className=" justify-between pt-[193px] sm:pb-[80px] pb[0px] sm:flex flex-wrp">
              <div className="lg:pl-[100px] xl:pl-[136px] relative z-1">
                <MainHeading title={title} className={`${className}`} />
                <Para para={para} paraclass={`${paraclass}`} />
                <div className="mt-[38px]">
                  <LearnMore learnMore={"BOOK NOW"} path={"/"} />
                </div>
              </div>
              <div>
                <HeroImage
                  src={imgsrc}
                  imgclass={`absolute -right-10 bottom-0 sm:block hidden sm:max-w-[500px] xl:max-w-full ${imgclass}`}
                  imgh={imgh}
                  imgw={imgw}
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
