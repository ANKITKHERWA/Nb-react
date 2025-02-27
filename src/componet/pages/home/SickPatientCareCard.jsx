import SubHeading from "@/componet/common/SubHeading";
import { cardSickpatient } from "@/componet/helper/Helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SickPatientCareCard() {
  return (
    <>
      <div className="bg-[#494336] flex flex-col justify-start w-[23%] sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 h-[339px] sm:h-[419px]">
        <div className="max-w-[93px]">
          <Image
            className="w-full"
            src={"/assest/img/svg/heartbeet.svg"}
            width={74}
            height={74}
            alt="sick patient care"
          />
        </div>
        <div className="text-[#D7D9DD]">
          <SubHeading
            heading={"Sick Patient Care"}
            subclass={
              "text-2xl sm:text-3xl block lg:text-4xl pt-3 sm:pt-7 md:pt-10 2xl:whitespace-nowrap lg:pt-[30px]"
            }
          />
          {cardSickpatient.map((item, index) => (
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

export default SickPatientCareCard;
