import LearnMore from "@/componet/common/LearnMore";
import React from "react";
import PreventCard from "./PreventCard";
import SickPatientCareCard from "./SickPatientCareCard";
import SurgeryCard from "./SurgeryCard";
import AdditionalServiceCard from "./AdditionalServiceCard";
import SubHeading from "@/componet/common/SubHeading";
import Para from "@/componet/common/Para";

function OurService() {
  return (
    <>
      <div className="bg-[#fff]">
        <div
          className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto"
          id="services">
          <div className="sm:px-[50px] lg:px-[100px] xl:px-[136px] py-[60px] md:py-[70px] xl:py-20">
            <div>
              <SubHeading
                heading={"Our Services"}
                subclass={
                  "!text-2xl sm:!text-3xl lg:!text-5xl !leading-[130%] !text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "We are proud to offer a comprehensive range of exceptional clinical services to cater to all your pet's needs. From routine wellness health checks to prompt and efficient urgent care, our team is here to provide the highest level of support and assistance. Count on us to be there for you and your beloved companion every step of the way."
                }
                paraclass={
                  "leading-[157.143%] md:!leading-[130%] mt-7 text-sm sm:text-base md:text-lg lg:text-xl !text-[#494336] !max-w-[770px]"
                }
              />
              <div className="mt-12">
                <LearnMore learnMore={"LEARN MORE"} path={"/home"} />
              </div>
            </div>
          </div>
          <div className="swiper-wrapper justify-center flex sm:px-5 pl-28 gap-10 sm:pb-[140px] pb-[90px] ">
            <PreventCard />
            <SickPatientCareCard />
            <SurgeryCard />
            <AdditionalServiceCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurService;
