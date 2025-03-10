import React from "react";

function SubHeading({ heading, subclass }) {
  return (
    <>
      <h2
        className={` text-2xl sm:text-3xl lg:text-4xl leading-[130%] ${subclass}`}>
        {heading}
      </h2>
    </>
  );
}

export default SubHeading;
