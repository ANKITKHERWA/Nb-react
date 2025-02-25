import HomeAcordion from "@/componet/common/HomeAcordion";
import SubHeading from "@/componet/common/SubHeading";
import React from "react";

function WhayChooseNebula() {
  return (
    <>
      <div className="bg-[#494336]">
        <div className="max-w-[1160px] px-8 sm:px-[50px]  py-[60px] sm:py-20 mx-auto">
          <SubHeading
            heading={"Why choose Nebula Vets?"}
            subclass={
              "text-[#D7D9DD] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl !mb-2.5  !md:mb-5 !max-w-full"
            }
          />
          <div className="flex max-md:flex-wrap xl:gap-[70px] md:gap-[50px]  gap-0  !items-center">
            <div className="w-full md:w-[50%]">
              <HomeAcordion />
              <HomeAcordion />
              <HomeAcordion />
            </div>
            <div className="w-full md:w-[50%]">
              <HomeAcordion />
              <HomeAcordion />
              <HomeAcordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhayChooseNebula;
