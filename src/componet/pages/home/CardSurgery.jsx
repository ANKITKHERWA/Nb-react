import SubHeading from "@/componet/common/SubHeading";
import { cardSurgery } from "@/componet/helper/Helper";
import { SurgeryIcon } from "@/componet/helper/Icon";
import Link from "next/link";
import React from "react";

function CardSurgery() {
  return (
    <>
      <div className="bg-[#494336] flex flex-col justify-start w-[24%] sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 h-[339px] sm:h-[419px] ">
        <div className="max-w-[93px]">
          <SurgeryIcon />
        </div>
        <div className="text-[#D7D9DD]">
          <SubHeading
            heading={"Surgery"}
            subclass={
              "text-2xl sm:text-3xl lg:text-4xl pt-3 sm:pt-7 md:pt-10 lg:pt-[30px]"
            }
          />
          {cardSurgery.map((item, index) => (
            <div key={index}>
              <Link
                href={item.path}
                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardSurgery;
