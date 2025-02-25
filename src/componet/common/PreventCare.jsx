import LearnMore from "@/componet/common/LearnMore";
import Image from "next/image";
import React from "react";

function PreventCare({ title, para1, para2, imgsrc, imgW, imgH, alt }) {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 lg:w-2/5 w-full">
            <div className="max-w-[376px] sm:mb-[0px] -mb-[40px]">
              <Image src={imgsrc} width={imgW} height={imgH} alt={alt} />
            </div>
            <h2 className="xl:text-5xl md:text-[40px] text-[32px] text-[#494336]">
              {title}
            </h2>
            <p className="text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6">
              {para1}
            </p>
            <p className="text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]">
              {para2}
            </p>
            <p className="mt-[40px] md:block hidden">
              <LearnMore learnMore={"BOOK NOW"} path={"/"} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreventCare;
