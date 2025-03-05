import HomeAcordion from "@/componet/common/HomeAcordion";
import SubHeading from "@/componet/common/SubHeading";
import { whychoosepharmasy } from "@/componet/helper/Helper";
import React from "react";

function WhyChoose() {
  return (
    <>
      <div class="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
        <div class="sm:px-[25px] lg:px-[70px] xl:px-[130px] my-[60px] sm:my-[80px]">
          <SubHeading
            heading={"Why Choose our Pharmacy:"}
            subclass={
              "text-2xl sm:text-[26px] md:text-[28px] text-[#494336] Roboto-font mb-[40px]"
            }
          />
          {whychoosepharmasy.map((item, index) => (
            <div key={index}>
              <HomeAcordion
                heading={item.heading}
                className={" !text-[#494336]"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhyChoose;
