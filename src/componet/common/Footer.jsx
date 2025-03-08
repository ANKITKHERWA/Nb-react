import Link from "next/link";
import React from "react";
import { footericonlink, foterData } from "../helper/Helper";
import SubHeading from "./SubHeading";

function Footer() {
  return (
    <>
      <div className="bg-[#494336]">
        <div className="max-w-[1364px] px-8 max-sm:pb-[111px] py-[60px] mx-auto">
          <div className="flex justify-between gap-10 max-[950px]:flex-wrap">
            <div className="max-w-[309px]">
              <label
                className="text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl mb-6 Roboto-font"
                htmlFor="email">
                Stay in touch:
              </label>
              <input
                className="text-lg text-[#D7D9DD] py-[6px] px-[14px] border-[1px] border-solid border-[#D7D9DD] bg-[#494336] mt-6 w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <div className="flex gap-5 mt-[15px] md:mt-[22px]">
                {footericonlink.map((item, index) => (
                  <div key={index} className="hover:scale-[1.05] duration-300">
                    <Link href={item.path} target="_blank">
                      {item.icon}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex max-sm:flex-wrap gap-y-[30px] max-sm:gap-x-[150px] max-md:gap-x-[100px] gap-x-[55px]">
              {foterData.map((item, index) => (
                <div className="flex flex-col gap-[10px] " key={index}>
                  <SubHeading
                    heading={item.title}
                    subclass={
                      "Roboto-font text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl mb-9"
                    }
                  />
                  {item.subdata.map((items, i) => (
                    <div key={i}>
                      <Link
                        href={items.path}
                        className="text-[#D7D9DD] text-sm sm:text-base underline hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300 ">
                        {items.point}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
