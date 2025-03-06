import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import React from "react";

function AboutVats() {
  return (
    <>
      <div
        className="bg-[rgb(215,217,221,0.50)] py-[33px] sm:py-12 lg:py-[80px] relative"
        id="about">
        <div className="">
          <HeroImage
            src={"/assest/img/png/Nebula-Stringent-1st.png"}
            imgclass={
              "absolute -bottom-0 right-0 max-w-[189px] lg:top-0 lg:max-w-[348px] xl:max-w-[392px]"
            }
            imgh={"392"}
            imgw={"611"}
            alt={"nebula-stringent"}
          />
        </div>
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto relative z-1">
          <div className="flex gap-[69px] flex-wrap lg:flex-nowrap justify-between items-center">
            <div className="lg:min-w-[400px] max-w-[591px] mx-auto lg:mx-0">
              <HeroImage
                src={"/assest/img/png/catdog-1st-img.png"}
                imgw={"550"}
                imgh={"591"}
                alt={"catdog-1st"}
              />
            </div>
            <div>
              <SubHeading
                heading={"About Nebula Vets ?"}
                subclass={"!text-2xl sm:!text-4xl lg:!text-5xl !max-w-full"}
              />
              <Para
                para={
                  "Founded on a strong set of core values, the story of Nebula Vets began with Daniel Hodnett-Lewis, a visionary veterinary surgeon from England, UK. Fueled by a deep passion for animals and a desire to elevate the standard of care, Daniel embarked on a mission to create a veterinary practice that would revolutionize the way pets are treated and cared for. Here's the story of Nebula Vets:"
                }
                paraclass={
                  "!leading-[130%] !text-sm sm:!text-base lg:!text-lg  md:!mt-6 !mt-[38px] !text-[#494336] !max-w-[639px]"
                }
              />
              <div className="mt-12 pb-[60px]">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutVats;
