import WhyCommon from "@/componet/common/WhyCommon";
import { whatLaser } from "@/componet/helper/Helper";
import Image from "next/image";
import React from "react";

function WhatisLaser() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] pt-[80px] sm:pb-[140px] pb-[100px] relative overflow-hidden">
        {whatLaser.map((item, index) => (
          <WhyCommon
            key={index}
            heading={item.heading}
            subclass={"mt-10"}
            para={item.para}
            paraclass={"mt-10"}
          />
        ))}
        <div className="absolute bottom-0 mx-auto left-0 right-0">
          <Image
            src="/assest/img/png/animalstringentmotion.png"
            width={"1440"}
            height={"450"}
            alt="img"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default WhatisLaser;
