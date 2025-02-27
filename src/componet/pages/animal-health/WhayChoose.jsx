import HomeAcordion from "@/componet/common/HomeAcordion";
import SubHeading from "@/componet/common/SubHeading";
import { animalAcordion } from "@/componet/helper/Helper";
import React from "react";

function WhayChoose() {
  return (
    <>
      <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
        <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px] mt-[80px] mb-[80px]">
          <SubHeading
            heading={"Why Animal Health Checks Matter:"}
            subclass={
              "text-[#494336] text-2xl sm:text-[30px] md:text-3xl max-w-[274px]  sm:!max-w-full"
            }
          />
          <div className="mt-10">
            {animalAcordion.map((item, index) => (
              <div key={index}>
                <HomeAcordion
                  heading={item.heading}
                  className={" !text-[#494336]"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhayChoose;
