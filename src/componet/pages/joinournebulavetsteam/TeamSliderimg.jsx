import Image from "next/image";
import React from "react";

function TeamSliderimg() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] p-5  sm:py-[60px] sm:px-0">
        <div className="justify-between items-center gap-10 flex flex-wrap">
          <div className="sm:max-w-[296px] md:max-w-[350px] max-w-full">
            <Image
              src={"/assest/img/png/dog-man.png"}
              width={420}
              height={420}
              alt="img"
            />
          </div>
          <div className="sm:max-w-[296px] md:max-w-[350px] max-w-full">
            <Image
              src={"/assest/img/png/dog2.png"}
              width={420}
              height={420}
              alt="img"
            />
          </div>
          <div className="sm:max-w-[296px] md:max-w-[350px] max-w-full">
            <Image
              src={"/assest/img/png/catdog-1.png"}
              width={420}
              height={420}
              alt="img"
            />
          </div>
          <div className="sm:max-w-[296px] md:max-w-[350px] max-w-full">
            <Image
              src={"/assest/img/png/dog-girl.png"}
              width={420}
              height={420}
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamSliderimg;
