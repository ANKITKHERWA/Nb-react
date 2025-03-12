import React from "react";

function Para({ para, paraclass }) {
  return (
    <p className={` text-base lg:text-lg xl:text-xl  ${paraclass}`}>{para}</p>
  );
}

export default Para;
