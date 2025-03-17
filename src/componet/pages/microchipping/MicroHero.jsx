import Hero from "@/componet/common/Hero";
import React from "react";

function MicroHero() {
  return (
    <>
      <Hero
        title={"Microchipping"}
        para={
          "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. Each microchip possesses a distinct identification code, crucial for storing essential information about your beloved pet."
        }
        imgsrc={"/assest/img/png/microchip-hero.png"}
        imgw={"624"}
        imgh={"349"}
      />
    </>
  );
}

export default MicroHero;
