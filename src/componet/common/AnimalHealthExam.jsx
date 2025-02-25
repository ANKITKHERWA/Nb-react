import Image from "next/image";
import React from "react";

function AnimalHealthExam() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] pt-[80px] sm:pb-[140px] pb-[100px] relative overflow-hidden">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px] z-10 relative">
            <h3 className="md:text-4xl sm:text-3xl text-2xl text-[#494336]">
              {title}
            </h3>
            <p className="sm:text-xl text-base text-[#494336] mt-[20px]">
              {para1}
            </p>
            <div className="mt-[20px]">
              <p className="sm:text-xl text-base text-[#494336]">
                In addition to providing routine health checks, we offer a
                comprehensive range of services to ensure the well-being of your
                pets:
              </p>
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
        <div className="absolute bottom-0 mx-auto left-0 right-0 ">
          <Image
            src="./assest/img/png/NBL_StringentMotion_img1.png"
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default AnimalHealthExam;
