import SubHeading from "@/componet/common/SubHeading";
import { snapcard1, snapcard2 } from "@/componet/helper/Helper";
import Image from "next/image";
import React from "react";

function AvailableSnapTests() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] sm:py-20 py-[60px]">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px]">
            <div>
              <SubHeading
                heading={"Available SNAP Tests"}
                subclass={
                  "xl:!text-5xl  md:!text-[40px] sm:!text-3xl !text-2xl !text-[#494336] !pb-[40px]"
                }
              />
            </div>
            <div className="flex justify-between gap-10 items-center">
              <div className="h-full bg-[#494336] pl-[60px] w-[48%] h-[40%] pt-[45px] pb-[80px] relative">
                <ul className="list-disc z-1">
                  {snapcard1.map((item, index) => (
                    <ul key={index} className="list-disc">
                      <li className="sm:text-2xl text-xl text-[#D7D9DD] Roboto-font">
                        {item.heading}
                      </li>
                      <li className="text-sm sm:text-xl text-[#D7D9DD] mb-5">
                        {item.para}
                      </li>
                    </ul>
                  ))}
                </ul>
                <div className="absolute bottom-0 right-0">
                  <Image
                    src={"/assest/img/png/dog-diagnostic.png"}
                    alt={"img"}
                    width={"368"}
                    height={"240"}
                  />
                </div>
              </div>
              <div className="h-full bg-[#494336] pl-[60px] w-[48%] h-[40%] pt-[45px] pb-[80px] relative">
                <ul className="list-disc z-1">
                  {snapcard2.map((item, index) => (
                    <ul key={index} className="list-disc">
                      <li className="sm:text-2xl text-xl text-[#D7D9DD] Roboto-font">
                        {item.heading}
                      </li>
                      <li className="text-sm sm:text-xl text-[#D7D9DD] mb-5">
                        {item.para}
                      </li>
                    </ul>
                  ))}
                </ul>
                <div className="absolute bottom-0 right-0">
                  <Image
                    src={"/assest/img/png/cat-diagnostic.png"}
                    alt={"img"}
                    width={"368"}
                    height={"240"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableSnapTests;
