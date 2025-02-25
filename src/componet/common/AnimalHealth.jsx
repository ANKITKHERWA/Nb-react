import React from "react";
import LearnMore from "./LearnMore";

function AnimalHealth({ path }) {
  return (
    <>
      <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
        <h4 className="sm:text-[28px] text-xl Roboto-font text-[#494336]">
          Animal Health Check
        </h4>
        <p className="sm:text-xl text-base max-w-full md:max-w-[659px] mt-[20px] text-[#494336]">
          Our practice offers the convenience of same or next-day appointments
          to ensure your furry companion receives prompt diagnostic evaluation
          and treatment. Our dedicated team prioritizes swift action, allowing
          us to quickly identify the issue at hand and provide the necessary
          care your pet requires.
        </p>
        <p className="mt-[40px]">
          <LearnMore learnMore={"Learn more"} path={path} />
        </p>
        <div className="border-b border-black pb-[30px] sm:pb-[60px]"></div>
      </div>
    </>
  );
}

export default AnimalHealth;
