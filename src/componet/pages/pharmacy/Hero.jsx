import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import MainHeading from "@/componet/common/MainHeading";
import Para from "@/componet/common/Para";
import { pharmacyhero } from "@/componet/helper/Helper";
import React from "react";

function Hero() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-[#494336] relative">
          <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
            <div className=" justify-between pt-[193px] sm:pb-[80px] pb[0px] sm:flex flex-wrp">
              {pharmacyhero.map((item, index) => (
                <div
                  key={index}
                  className="lg:pl-[100px] xl:pl-[136px] relative z-1">
                  <MainHeading
                    title={item.heading}
                    className={"!pt-[140px] max-w-[602px] !text-[ #D7D9DD]"}
                  />
                  <Para para={item.para} paraclass={"max-w-[631px]"} />
                  <div className="mt-[38px]">
                    <LearnMore learnMore={item.btnname} path={item.path} />
                  </div>
                </div>
              ))}
              <div>
                <HeroImage
                  src={"/assest/img/png/pharmacy-hero.png"}
                  imgclass={
                    "absolute -right-10 bottom-0 sm:block hidden sm:max-w-[500px] xl:max-w-full"
                  }
                  imgh={"457"}
                  imgw={"539"}
                  alt={"/"}
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
