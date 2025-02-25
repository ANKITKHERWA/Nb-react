import React from "react";

function Para({ para, paraclass }) {
  return (
    <>
      <p
        className={`text-[#D7D9DD] mt-7 sm:mt-5 lg:mt-[28px] text-base lg:text-lg xl:text-xl max-w-[660px] ${paraclass}`}>
        {para}
      </p>
    </>
  );
}

export default Para;
