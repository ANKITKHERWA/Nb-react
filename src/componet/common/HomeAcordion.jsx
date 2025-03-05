import React from "react";
import { AcordionIcon } from "../helper/Icon";

function HomeAcordion({ heading, className }) {
  return (
    <>
      <div>
        <button
          className={`w-full flex justify-between gap-5 items-center text-base md:text-lg lg:text-xl text-[#D7D9DD] font-semibold text-start !leading-[150%] Roboto-font py-8 ${className}`}>
          <span>{heading}</span>
          <span id="icon-1" className=" transition-transform duration-300">
            <AcordionIcon />
          </span>
        </button>
        <div
          id="content-1"
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
          <div className="pb-5 text-sm sm:text-lg text-white">
            Material Tailwind is a framework that enhances Tailwind CSS with
            additional styles and components.
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] h-[2px]"></div>
      </div>
    </>
  );
}

export default HomeAcordion;
