import LearnMore from "@/componet/common/LearnMore";
import MainHeading from "@/componet/common/MainHeading";
import Para from "@/componet/common/Para";
import { veterinaryTeam } from "@/componet/helper/Helper";
import React from "react";

function VeterinaryTeam() {
  return (
    <>
      <div className="text-[#D7D9DD] md:pt-20 md:pb-[85px] py-[60px] bg-[#494336] mb-[1px]">
        <div className="max-w-[1440px] px-[51px] mx-auto aos-init">
          <MainHeading
            title={"Meet our veterinary team:"}
            classname={
              "text-2xl text-center sm:text-5xl md:text-6xl xl:text-[70px]"
            }
          />
          <div className="flex gap-5 mt-12 lg:mt-[60px] flex-wrap xl:flex-nowrap justify-center mx-auto align-center">
            {veterinaryTeam.map((item, index) => (
              <div
                key={index}
                className="w-[calc(50%-14px)] lg:w-[calc(33%-14px)] xl:w-[16%] flex flex-col justify-center items-center">
                <div className="sm:max-w-[207px] max-w-[150px]">
                  {item.icon}
                  <Para
                    para={item.para}
                    paraclass={
                      "text-center mt-2 sm:mt-6 lg:mt-10 text-sm sm:!text-base lg:!text-lg xl:!text-xl !max-w-[400px]"
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <LearnMore learnMore={"BOOK NOW"} path={"/"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default VeterinaryTeam;
