import WhyCommon from "@/componet/common/WhyCommon";
import { whyCommon } from "@/componet/helper/Helper";
import Image from "next/image";
import React from "react";

function WhayVaccinat() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] sm:pt-[80px] pt-[60px] sm:pb-[140px] pb-[120px] relative overflow-hidden">
        {whyCommon.map((item, index) => (
          <WhyCommon
            key={index}
            heading={item.heading}
            subclass={"mt-5"}
            para={item.para}
          />
        ))}
        <div className="mx-auto absolute bottom-0 right-0 left-0">
          <Image
            src={"/assest/img/png/string-1-img.png"}
            width={1440}
            height={526}
            className="w-full "
          />
        </div>
      </div>
    </>
  );
}

export default WhayVaccinat;
