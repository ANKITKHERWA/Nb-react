import Hero from "@/componet/common/Hero";
import React from "react";

function UregentHero() {
  return (
    <>
      <Hero
        title={"Urgent & Emergency Care"}
        className={"max-w-[600px] mt-10"}
        para={
          "At Nebula Vets, we understand that when your pet is sick or injured, prompt and quality care is essential. Our dedicated team of veterinarians and staff are committed to providing the care your pet needs to recover and thrive."
        }
        imgsrc={"/assest/img/png/urgenthero.png"}
        imgw={"508"}
        imgh={"508"}
      />
    </>
  );
}

export default UregentHero;
