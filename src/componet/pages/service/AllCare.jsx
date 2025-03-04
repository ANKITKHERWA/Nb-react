import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import {
  addiCare,
  additional,
  animalHealthcheck,
  preCare,
  sikCare,
  surgeryCare,
  surgerySpays,
  urgentCare,
} from "@/componet/helper/Helper";
import React from "react";

function AllCare() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 md:w-2/5 w-full">
            {preCare.map((item, index) => (
              <div key={index}>
                <HeroImage
                  src={item.src}
                  imgclass={"max-w-[376px] sm:mb-[0px] -mb-[40px]"}
                  imgh={"304"}
                  imgw={"376"}
                  alt={"img"}
                />
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "xl:text-5xl md:text-[40px] text-[32px] text-[#494336] !max-w-full"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "!text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6"
                  }
                />
                <Para
                  para={item.para1}
                  paraclass={
                    "!text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]"
                  }
                />
                <div className="mt-[40px] md:block hidden">
                  <LearnMore learnMore={item.btnname} path={item.path} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] lg:w-3/5 w-full">
            {animalHealthcheck.map((item, index) => (
              <div
                key={index}
                className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                  }
                />
                <div className="mt-10">
                  <LearnMore learnMore={item.btnname} path={item.path} />
                </div>
                <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 md:w-2/5 w-full">
            {sikCare.map((item, index) => (
              <div key={index}>
                <HeroImage
                  src={item.src}
                  imgclass={"max-w-[376px] sm:mb-[0px] -mb-[40px]"}
                  imgh={"304"}
                  imgw={"376"}
                  alt={"img"}
                />
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "xl:text-5xl md:text-[40px] text-[32px] mt-20 text-[#494336] !max-w-full"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "!text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6"
                  }
                />
                <Para
                  para={item.para1}
                  paraclass={
                    "!text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]"
                  }
                />
                <div className="mt-[40px] md:block hidden">
                  <LearnMore learnMore={item.btnname} path={item.path} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] lg:w-3/5 w-full">
            {urgentCare.map((item, index) => (
              <div
                key={index}
                className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                  }
                />
                <div className="mt-10">
                  <LearnMore learnMore={item.btnname} path={item.path} />
                </div>
                <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 md:w-2/5 w-full">
            {surgeryCare.map((item, index) => (
              <div key={index}>
                <HeroImage
                  src={item.src}
                  imgclass={"max-w-[376px] sm:mb-[0px] -mb-[40px] -mt-10"}
                  imgh={"304"}
                  imgw={"376"}
                  alt={"img"}
                />
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "xl:text-5xl md:text-[40px] text-[32px] mt-20 text-[#494336] !max-w-full"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "!text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6"
                  }
                />
                <Para
                  para={item.para1}
                  paraclass={
                    "!text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]"
                  }
                />
                <div className="mt-[40px] md:block hidden">
                  <LearnMore learnMore={item.btnname} path={item.path} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] lg:w-3/5 w-full">
            {surgerySpays.map((item, index) => (
              <div
                key={index}
                className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                  }
                />
                <div className="mt-10">
                  <LearnMore learnMore={item.btnname} path={item.path} />
                </div>
                <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 md:w-2/5 w-full">
            {addiCare.map((item, index) => (
              <div key={index}>
                <HeroImage
                  src={item.src}
                  imgclass={"max-w-[376px] sm:mb-[0px] -mb-[40px]"}
                  imgh={"304"}
                  imgw={"376"}
                  alt={"img"}
                />
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "xl:text-5xl md:text-[40px] text-[32px] text-[#494336] !max-w-full mt-10"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "!text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6"
                  }
                />
                <Para
                  para={item.para1}
                  paraclass={
                    "!text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]"
                  }
                />
                <div className="mt-[40px] md:block hidden">
                  <LearnMore learnMore={item.btnname} path={item.path} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] pb-20 lg:w-3/5 w-full">
            {additional.map((item, index) => (
              <div
                key={index}
                className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                  }
                />
                <div className="mt-10">
                  <LearnMore learnMore={item.btnname} path={item.path} />
                </div>
                <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCare;
