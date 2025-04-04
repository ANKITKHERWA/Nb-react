import Image from "next/image";
import React from "react";
import LearnMore from "./LearnMore";

function Mission({
  title,
  para,
  imgsrc,
  imgH,
  imgW,
  alt,
  className,
  paraclass,
}) {
  return (
    <>
      <div className="bg-[#494336] relative border-b-[2px] border-solid border-[#D8DADC] max-lg:pb-[142px]">
        <div className="absolute right-0 min-md:right-[37px] max-sm:max-w-[288px] !max-lg lg:max-w-[350px]:xl:max-w-[400px] !max-xl:max-w-[500px] bottom-0 ">
          <Image src={imgsrc} width={imgW} height={imgH} alt={alt} />
        </div>
        <div
          className="max-w-[1160px] px-8 sm:px-[40px] py-[60px] sm:py-[80px] mx-auto"
          id="portal">
          <div className="z-1 relative">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl text-[#D7D9DD] mb-[13px] sm:mb-[20px] md:mb-[30px] ${className}`}>
              {title}
            </h2>
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl text-[#D7D9DD] !leading-[26px] ${paraclass}`}>
              {para}
            </p>
            <div className="mt-12">
              <LearnMore learnMore={"BOOK NOW"} path={"/"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
