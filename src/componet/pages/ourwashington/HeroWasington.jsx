import Hero from "@/componet/common/Hero";
import React from "react";

function HeroWasington() {
  return (
    <>
      <Hero
        title={"Our Washington DC Practice"}
        className={"max-w-[630px]"}
        para={
          "We take great pride in our state-of-the-art, AAHA-accredited facilities that are meticulously designed to provide a stress-free experience for our patients and human clients alike. Equipped with modern technology and advanced resources, our practices ensure the highest standard of veterinary care."
        }
        imgsrc={"/assest/img/png/location.png"}
        imgw={"580"}
        imgh={"449"}
      />
    </>
  );
}

export default HeroWasington;
