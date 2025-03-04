import LearnMore from "@/componet/common/LearnMore";
import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import {
  telecard1,
  telecard2,
  telecard3,
  telecard4,
} from "@/componet/helper/Helper";
import React from "react";

function TelemedicineCard() {
  return (
    <>
      <div
        className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto mt-[60px] 
            sm:mt-[80px]">
        <div className="flex gap-10 item-center justify-between">
          {telecard1.map((item, index) => (
            <div
              key={index}
              className="!bg-[#494336] !px-[32px] !w-[24%] !h-[465px] !pb-[42px] !py-[22px]">
              <SubHeading
                heading={item.heading}
                subclass={
                  "!text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFA280] to-[#8FD9CB]"
                }
              />
              <Para
                para={item.para}
                paraclass={
                  "!text-2xl sm:!text-[28px] md:!text-[32px] !text-[#D7D9DD] !max-w-[120px]"
                }
              />
              <Para
                para={item.para1}
                paraclass={"!text-sm sm:!text-xl !text-[#D7D9DD] !mt-[20px]"}
              />
            </div>
          ))}
          {telecard2.map((item, index) => (
            <div
              key={index}
              className="!bg-[#494336] !px-[32px] !w-[24%] !h-[465px] !pb-[42px] !py-[22px]">
              <SubHeading
                heading={item.heading}
                subclass={
                  "!text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFA280] to-[#8FD9CB]"
                }
              />
              <Para
                para={item.para}
                paraclass={
                  "!text-2xl sm:!text-[28px] md:!text-[32px] !text-[#D7D9DD] !max-w-full"
                }
              />
              <Para
                para={item.para1}
                paraclass={"!text-sm sm:!text-xl !text-[#D7D9DD] !mt-[20px]"}
              />
            </div>
          ))}
          {telecard3.map((item, index) => (
            <div
              key={index}
              className="!bg-[#494336] !px-[32px] !w-[24%] !h-[465px] !pb-[42px] !py-[22px]">
              <SubHeading
                heading={item.heading}
                subclass={
                  "!text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFA280] to-[#8FD9CB]"
                }
              />
              <Para
                para={item.para}
                paraclass={
                  "!text-2xl sm:!text-[28px] md:!text-[32px] !text-[#D7D9DD] "
                }
              />
              <Para
                para={item.para1}
                paraclass={"!text-sm sm:!text-xl !text-[#D7D9DD] !mt-[20px]"}
              />
            </div>
          ))}
          {telecard4.map((item, index) => (
            <div
              key={index}
              className="!bg-[#494336] !px-[32px] !w-[24%] !h-[465px] !pb-[42px] !py-[22px]">
              <SubHeading
                heading={item.heading}
                subclass={
                  "!text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFA280] to-[#8FD9CB]"
                }
              />
              <Para
                para={item.para}
                paraclass={
                  "!text-2xl sm:!text-[28px] md:!text-[32px] !text-[#D7D9DD] "
                }
              />
              <Para
                para={item.para1}
                paraclass={"!text-sm sm:!text-xl !text-[#D7D9DD] !mt-[20px]"}
              />
            </div>
          ))}
        </div>
        <div className="text-center my-20">
          <LearnMore learnMore={"CHAT WITH A VET"} path={"/"} />
        </div>
      </div>
    </>
  );
}

export default TelemedicineCard;
