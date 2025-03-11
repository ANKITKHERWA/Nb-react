import MainHeading from "@/componet/common/MainHeading";
import SubHeading from "@/componet/common/SubHeading";
import { puppiesScheduleCard } from "@/componet/helper/Helper";
import React from "react";

function WhenToVaccinate() {
  return (
    <>
      <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
        <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px] mb-20">
          <div className="mb-[40px]">
            <SubHeading
              heading={"When to vaccinate?"}
              subclass={
                "text-2xl sm:text-3xl md:text-[40px] xl:text-5xl text-[#494336]"
              }
            />
          </div>
          <div className="md:block hidden">
            <div className="flex justify-between gap-5 flex-wrap">
              {puppiesScheduleCard.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#494336] pt-[34px] pb-[57px] lg:w-[49%] md:w-full  h-auto pl-[48px] pr-[10px]">
                  <div className="flex gap-4">
                    {item.icon}
                    <MainHeading
                      title={item.title}
                      classname={
                        "!text-2xl sm:!text-3xl md:!text-[40px] xl:!text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB]"
                      }
                    />
                  </div>
                  {item.subdata.map((items, index) => (
                    <div key={index} className="mt-5">
                      <div className="text-2xl text-[#D7D9DD] leading-[150%] Roboto-font">
                        {items.heading}
                      </div>
                      <div className="text-xl text-[#D7D9DD] max-w-[400px] leading-[150%]">
                        {items.para}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhenToVaccinate;
