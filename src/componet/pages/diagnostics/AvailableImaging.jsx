import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import { availableimaging } from "@/componet/helper/Helper";
import React from "react";

function Availableimaging() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] sm:py-[80px] py-[60px]">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          {availableimaging.map((item, index) => (
            <div
              key={index}
              className="sm:px-[25px] lg:px-[70px] xl:px-[130px]">
              <SubHeading
                heading={item.heading}
                className={" !text-[#494336]"}
              />
              <Para
                para={item.para}
                paraclass={"!text-[#494336] !max-w-full"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Availableimaging;
