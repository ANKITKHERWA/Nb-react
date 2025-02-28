import HomeAcordion from "@/componet/common/HomeAcordion";
import { animalAcordion, vaccinateAco } from "@/componet/helper/Helper";
import React from "react";

function AllAcordion() {
  return (
    <>
      <div class="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
        <div class="sm:px-[25px] lg:px-[70px] xl:px-[130px] sm:py-[80px] py-[60px]">
          {vaccinateAco.map((item, index) => (
            <div key={index}>
              <HomeAcordion
                heading={item.heading}
                className={"!text-[#494336]"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllAcordion;
