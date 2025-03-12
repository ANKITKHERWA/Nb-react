import React from "react";

function MainHeading({ title, className }) {
  return (
    <h1
      className={`text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] xl:text-[70px]  text-[#D7D9DD]   ${className} `}>
      {title}
    </h1>
  );
}

export default MainHeading;
