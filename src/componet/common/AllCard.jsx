import React from "react";
import { cardData1 } from "../helper/Helper";
import SubHeading from "./SubHeading";
import Link from "next/link";

function AllCard() {
  return (
    <>
      <div class="!pb-[90px] sm:!pb-30 lg:!pb-[140px] max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto bg-white">
        <div class="justify-center flex sm:px-5  xl:gap-4 gap-10 flex-wrap">
          {cardData1.map((item, index) => (
            <div
              key={index}
              className="bg-[#494336] flex flex-col justify-start lg:w-[24%] sm:w-[45%] w-full sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 h-[339px] sm:h-[419px]">
              {item.icon}
              <SubHeading
                heading={item.title}
                subclass={
                  "!text-2xl sm:!text-3xl lg:!text-4xl !pt-3 sm:!pt-7 md:!pt-10 lg:!pt-[30px] text-[#D7D9DD]"
                }
              />
              {item.subdata.map((items, i) => (
                <div key={i}>
                  <Link
                    href={items.path}
                    className="!text-sm sm:!text-base !block lg:!text-lg !mt-1.5 !underline !text-start text-[#D7D9DD]">
                    {items.point}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllCard;
