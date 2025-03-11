import React from "react";
import SubHeading from "./SubHeading";
import Para from "./Para";

function WhyCommon({ heading, subclass, para, paraclass }) {
  return (
    <>
      <div className="max-w-[1220px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto relative z-1">
        <SubHeading
          heading={heading}
          subclass={`md:text-4xl sm:text-3xl text-2xl text-[#494336] !max-w-full ${subclass}`}
        />
        <Para
          para={para}
          paraclass={`sm:text-xl text-base !text-[#494336] !max-w-full ${paraclass}`}
        />
      </div>
    </>
  );
}

export default WhyCommon;
