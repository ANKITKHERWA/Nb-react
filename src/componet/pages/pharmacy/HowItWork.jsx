import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import { availabletest, howitwork } from "@/componet/helper/Helper";
import Image from "next/image";
import React from "react";

function HowItWork() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] pt-[80px] sm:pb-[140px] pb-[100px] relative overflow-hidden">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          {howitwork.map((item, index) => (
            <div
              key={index}
              className="sm:px-[25px] lg:px-[70px] xl:px-[130px] z-10 relative">
              <SubHeading
                heading={item.heading}
                subclass={
                  "md:!text-4xl sm:!text-3xl !text-2xl !text-[#494336] !max-w-full"
                }
              />
              <Para
                para={item.para}
                paraclass={
                  "md:text-xl sm:text-lg text-sm !text-[#494336] mt-[20px] !max-w-full"
                }
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 mx-auto left-0 right-0">
          <Image
            src="/assest/img/png/animalstringentmotion.png"
            width={"1440"}
            height={"450"}
            alt="img"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default HowItWork;
