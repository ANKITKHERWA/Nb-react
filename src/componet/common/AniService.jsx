import React from "react";
import LearnMore from "./LearnMore";

function AniService({ title, para, path }) {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] lg:w-3/5 w-full">
        <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px] ">
          <h4 className="sm:text-[28px] text-xl Roboto-font text-[#494336]">
            {title}
          </h4>
          <p className="sm:text-xl text-base max-w-full md:max-w-[659px] mt-[20px] text-[#494336]">
            {para}
          </p>
          <div className="mt-10">
            <LearnMore learnMore={"LEARN MORE"} path={path} />
          </div>
          <div className="border-b border-black pb-[30px] sm:pb-[60px]"></div>
        </div>
      </div>
    </>
  );
}

export default AniService;
