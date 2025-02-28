import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import React from "react";

function ExceptionalDental() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] py-[40px] sm:py-[80px]">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px]">
            <SubHeading
              heading={"Experience Exceptional Dental Care at Nebula Vets:"}
              subclass={
                "text-2xl sm:text-3xl md:text-4xl text-[#494336] sm:max-w-full max-w-[290px]"
              }
            />
            <Para
              para={
                "At Nebula Vets, we are committed to providing exceptional dental care that goes beyond a bright smile. Our comprehensive evaluations, advanced techniques, and personalized approach set us apart. Trust us to be your partner in ensuring your pet's dental health and delivering the highest standard of veterinary dental care."
              }
              paraclass={
                "text-sm sm:text-lg md:text-xl !text-[#494336] mt-[20px] max-w-full"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExceptionalDental;
