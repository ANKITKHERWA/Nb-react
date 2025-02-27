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
                <MainHeading title={"Vaccinations"} classname={"!pt-[140px]"} />
                <Para
                  para={
                    "Vaccinations are key in keeping your pet healthy and preventing them catching life-threatening disease. Our veterinary team is dedicated to providing comprehensive vaccination services tailored to your pet's individual needs and lifestyle. This includes not only dogs and cats but also rabbits and ferrets."
                  }
                  paraclass={""}
                />
                <div className="mt-[38px]">
                  <LearnMore learnMore={"BOOK NOW"} path={"/"} />
                </div>
              </div>
              <div>
                <HeroImage
                  src={"/assest/img/png/vaccinations-img.png"}
                  imgclass={
                    "absolute -right-10 bottom-0  sm:max-w-[500px] xl:max-w-full"
                  }
                  imgh={"517"}
                  imgw={"649"}
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
