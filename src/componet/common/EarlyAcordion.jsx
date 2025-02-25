import React from "react";

function EarlyAcordion() {
  return (
    <>
      <div>
        <button className="w-full flex justify-between items-center py-[32px] text-base sm:text-xl md:text-2xl text-[#494336] leading-[150%] ">
          <span className="Roboto-font">Early Detection and Prevention</span>
          <span
            id="icon-1"
            className="text-slate-800 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="sm:max-w-full max-w-[24px] sm:max-h-full max-h-[24px]"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none">
              <line
                x1="0.0336914"
                y1="15.2025"
                x2="30.0337"
                y2="15.2025"
                stroke="url(#paint0_linear_1203_3616)"
                strokeWidth="2.5"
              />
              <line
                x1="15.1475"
                y1="30.089"
                x2="15.1475"
                y2="0.0889893"
                stroke="url(#paint1_linear_1203_3616)"
                strokeWidth="2.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1203_3616"
                  x1="0.0336914"
                  y1="16.4525"
                  x2="30.0337"
                  y2="16.4525"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFA280" />
                  <stop offset="1" stopColor="#8FD9D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1203_3616"
                  x1="16.3975"
                  y1="30.089"
                  x2="16.3974"
                  y2="0.0889893"
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
          <div className="pb-5 text-sm text-[#494336] sm:text-xl">
            Regular health checks are essential for detecting and preventing
            potential health issues before they become more serious. By
            identifying subtle changes in your pet's health, we can address them
            promptly, potentially saving them from discomfort, pain, and costly
            treatments in the long run.
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] h-[2px]"></div>
      </div>
    </>
  );
}

export default EarlyAcordion;
