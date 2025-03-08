import Hero from "@/componet/common/Hero";
import React from "react";

function ServiceHero() {
  return (
    <>
      <Hero
        title={"Veterinary Services"}
        para={
          "At Nebula Vets, we take pride in offering an extensive range of services to meet the diverse needs of our patients. Our commitment to comprehensive care ensures that we can provide the highest quality veterinary services under one roof."
        }
        imgsrc={"/assest/img/png/hero-service.png"}
        imgw={"635"}
        imgh={"426"}
      />
    </>
  );
}

export default ServiceHero;
