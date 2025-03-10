import Hero from "@/componet/common/Hero";
import React from "react";

function SurgeryHero() {
  return (
    <>
      <Hero
        title={"Surgery"}
        para={
          "In our state-of-the-art surgery suite, equipped with advanced technology and facilities, our highly experienced veterinarians are proficient in performing a wide range of surgical procedures. From routine surgeries like spays and neuters to more specialized soft tissue surgeries such as mass removals, laceration repair, abscess treatment, and dental procedures, we offer comprehensive surgical care for your pet."
        }
        imgsrc={"/assest/img/png/Surgery-icon.png"}
        imgclass={""}
        imgw={"447"}
        imgh={"442"}
      />
    </>
  );
}

export default SurgeryHero;
