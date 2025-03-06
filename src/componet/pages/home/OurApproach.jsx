import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import React from "react";

function OurApproach() {
  return (
    <>
      {" "}
      <div className="bg-[rgb(215,217,221,0.50)]">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[50px] lg:px-[100px] xl:px-[136px] py-[60px] md:py-[70px] xl:py-20">
            <div className="flex md:flex-nowrap flex-wrap text-[#494336] justify-between gap-[13px] md:gap-10 lg:gap-[65px]">
              <SubHeading heading={"Our Approach"} />
              <Para
                para={
                  "At our independent veterinary hospital, we combine compassion, advanced expertise, and a commitment to exceptional care. From routine check-ups to urgent and emergency situations, we are here to provide your beloved pets with the highest level of service and support they deserve."
                }
                paraclass={
                  "!leading-[157%] md:!leading-[130%] !text-sm sm:!text-base md:!text-lg lg:!text-xl !max-w-[843px] !text-[#494336]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurApproach;
