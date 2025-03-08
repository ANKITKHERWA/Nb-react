import React from "react";
import SubHeading from "./SubHeading";
import Para from "./Para";

function Experince({ heading, para, className, paraclass }) {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] py-[40px] sm:py-[80px]">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px]">
            <SubHeading
              heading={heading}
              subclass={`text-2xl sm:text-3xl md:text-4xl text-[#494336] sm:max-w-full ${className}`}
            />
            <Para
              para={para}
              paraclass={`text-sm sm:text-lg md:text-xl text-[#494336] mt-[20px] max-w-full ${paraclass}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experince;
