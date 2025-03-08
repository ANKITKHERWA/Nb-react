import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import Image from "next/image";
import React from "react";

function HealthCheck() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] pt-20 sm:pb-[140px] pb-[100px] relative overflow-hidden">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px] z-10 relative">
            <SubHeading
              heading={"Animal Health Check Exam"}
              subclass={
                "md:text-4xl sm:text-3xl text-2xl !text-[#494336] !max-w-full"
              }
            />
            <Para
              para={
                "During our animal health check, we perform a thorough examination tailored to the unique needs of each patient. Our goal is to assess your pet's overall health, detect any potential issues, and offer preventive measures to maintain their vitality. Whether your furry friend is young, mature, or a senior, our veterinary professionals have the expertise to address their specific requirements."
              }
              paraclass={
                "sm:text-xl text-base !text-[#494336] mt-[20px] !max-w-full"
              }
            />
            <div className="mt-[20px]">
              <Para
                para={
                  "In addition to providing routine health checks, we offer a comprehensive range of services to ensure the well-being of your pets:"
                }
                paraclass={"sm:text-xl text-base !text-[#494336] !max-w-full"}
              />
              <ul className="list-none">
                <li className="sm:text-xl text-base text-[#494336]">
                  -Vaccinations
                </li>
                <li className="sm:text-xl text-base text-[#494336]">
                  -Blood panels
                </li>
                <li className="sm:text-xl text-base text-[#494336]">
                  -Parasitic prevention
                </li>
                <li className="sm:text-xl text-base text-[#494336]">
                  -Microchipping
                </li>
                <li className="sm:text-xl text-base text-[#494336]">
                  -Dental care
                </li>
                <li className="sm:text-xl text-base text-[#494336]">
                  -Fecal tests
                </li>
                <li className="sm:text-xl text-base text-[#494336]">
                  -Skin tests
                </li>
                <li className="sm:text-xl text-base text-[#494336]">
                  -Dietary advise
                </li>
              </ul>
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

export default HealthCheck;
