import React from "react";

function MainHeading({ title, classname }) {
  return (
    <h1
      className={`text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] xl:text-[70px] sm:mt-0 text-[#D7D9DD] leading-[104%] ${classname} `}>
      {title}
    </h1>
  );
}

export default MainHeading;
