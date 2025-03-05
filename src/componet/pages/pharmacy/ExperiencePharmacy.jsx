import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import React from "react";

function ExperiencePharmacy() {
  return (
    <>
      <div class="bg-[rgb(215,217,221,0.50)] sm:py-[80px] py-[60px]">
        <div class="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div class="sm:px-[25px] lg:px-[70px] xl:px-[130px]">
            <SubHeading
              heading={
                "Experience Exceptional Pharmacy Services at Nebula Vets:"
              }
              subclass={
                "xl:text-4xl md:text-[32px] sm:text-[28px] text-2xl text-[#494336]"
              }
            />
            <Para
              para={
                "Your pet's health and well-being are our top priorities,and our pharmacy is an integral part of our commitment to providing comprehensive veterinary care. Trust in the expertise of our pharmacy team to ensure your pet receives the highest standard of pharmaceutical services and products."
              }
              paraclass={
                "sm:text-lg text-sm !text-[#494336] mt-[20px] max-w-full"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperiencePharmacy;
