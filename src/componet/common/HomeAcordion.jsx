import React from "react";

function HomeAcordion() {
  return (
    <>
      <div>
        <button className="w-full flex justify-between gap-5 items-center text-base md:text-lg lg:text-xl text-[#D7D9DD] font-semibold text-start !leading-[150%] py-8">
          <span className="Roboto-font">Cutting-Edge Technology</span>
          <span id="icon-1" className=" transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-[24px] md:max-w-full max-h-[24px] md:max-h-full"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none">
              <line
                y1="15.1136"
                x2="30"
                y2="15.1136"
                stroke="url(#paint0_linear_1204_1413)"
                strokeWidth="2.5"
              />
              <line
                x1="15.1134"
                y1="30"
                x2="15.1134"
                y2="7.28523e-08"
                stroke="url(#paint1_linear_1204_1413)"
                strokeWidth="2.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1204_1413"
                  x1="0"
                  y1="16.3636"
                  x2="30"
                  y2="16.3636"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFA280" />
                  <stop offset="1" stopColor="#8FD9D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1204_1413"
                  x1="16.3634"
                  y1="30"
                  x2="16.3634"
                  y2="0"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFA280" />
                  <stop offset="1" stopColor="#8FD9D9" />
                </linearGradient>
              </defs>
            </svg>
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
