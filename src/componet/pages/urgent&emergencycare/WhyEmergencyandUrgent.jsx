import HomeAcordion from "@/componet/common/HomeAcordion";
import SubHeading from "@/componet/common/SubHeading";
import { Emergencyandurgent } from "@/componet/helper/Helper";
import React from "react";

function WhyEmergencyandUrgent() {
  return (
    <>
      <div class="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
        <div class="sm:px-[25px] lg:px-[70px] xl:px-[130px] my-[60px] sm:my-[80px]">
          <div>
            <SubHeading
              heading={"Why Choose Nebula Vets for Emergency and Urgent Care:"}
              subclass={
                "md:!text-4xl sm:!text-3xl  !text-[#494336] !mb-[40px] sm:!block !hidden"
              }
            />
            {Emergencyandurgent.map((item, index) => (
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

export default WhyEmergencyandUrgent;
