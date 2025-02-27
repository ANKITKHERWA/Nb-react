import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import Image from "next/image";
import React from "react";

function WhayVaccinat() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] pt-[80px] sm:pb-[140px] pb-[100px] relative overflow-hidden">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px] z-10 relative">
            <SubHeading
              heading={"Why should I vaccinate my pet?"}
              subclass={
                "md:text-4xl sm:text-3xl text-2xl !text-[#494336] !max-w-full"
              }
            />
            <Para
              para={
                "Vaccines are affective as the expose your pet’s immune system to an inactive strain of infectious agents. This assists their body to create immune cells that are specifically designed to respond effectively when exposed to the disease. Vaccines are also relatively painless, quick and cost-effective to administer."
              }
              paraclass={
                "sm:text-xl text-base !text-[#494336] mt-[20px] !max-w-full"
              }
            />
            <div className="mt-[20px]">
              <SubHeading
                heading={"What are core and non-core vaccines?"}
                subclass={
                  "md:text-4xl sm:text-3xl text-2xl !text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Core vaccines are often vaccines considered essential for your pet’s health, whilst non-core vaccines are optional, and may be recommended for your pet depending on their lifestyle.Our vets will discuss the suitable vaccines for your pet during the consultation."
                }
                paraclass={"sm:text-xl text-base !text-[#494336] !max-w-full"}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 mx-auto left-0 right-0">
          <Image
            src="/assest/img/png/animalstringentmotion.png"
            width={"1440"}
            height={"450"}
            alt="img"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default WhayVaccinat;
