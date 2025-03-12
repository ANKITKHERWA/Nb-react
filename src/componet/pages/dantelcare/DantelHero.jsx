import Hero from "@/componet/common/Hero";
import React from "react";

function DantelHero() {
  return (
    <>
      <Hero
        title={"Dental Care"}
        para={
          "At Nebula Vets, we recognize the significance of dental hygiene in maintaining your pet's overall health. Dental disease can have far-reaching implications, potentially leading to serious conditions like heart disease and kidney disease. To ensure your pet's oral health, we conduct thorough dental examinations to identify any dental issues that require attention."
        }
        imgsrc={"/assest/img/png/dental.png"}
        imgclass={"bottom-4"}
        imgw={"506"}
        imgh={"414"}
      />
    </>
  );
}

export default DantelHero;
