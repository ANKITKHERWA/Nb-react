import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import { engagementEducation } from "@/componet/helper/Helper";
import Image from "next/image";
import React from "react";

function EngagementEducation() {
  return (
    <>
      <div className="max-w-[1220px] px-[32px] sm:px-[40px] mx-auto py-[60px] sm:py-20">
        <div className="flex flex-wrap lg:flex-nowrap md:gap-[35px] xl:gap-[60px]">
          <div className=" lg:min-w-[400px] xl:min-w-[600px]">
            <Image
              src="/assest/img/png/engagement-pic.png"
              width={600}
              height={620}
              alt="img"
              className="mt-5"
            />
          </div>
          <div className="xl:max-w-[547px] max-w-full mt-[60px] md:mt-0">
            {engagementEducation.map((item, index) => (
              <div key={index}>
                <SubHeading
                  heading={item.heading}
                  subclass={
                    "!text-base sm:!text-lg md:!text-xl lg:!text-2xl Roboto-font !text-[#494336] mt-5"
                  }
                />
                <Para
                  para={item.para}
                  paraclass={
                    "!text-sm sm:!text-base lg:!text-xl mt-[38px] font-normal !text-[#494336]"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EngagementEducation;
