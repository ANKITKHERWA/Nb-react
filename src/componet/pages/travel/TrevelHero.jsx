import Hero from "@/componet/common/Hero";
import React from "react";

function TrevelHero() {
  return (
    <>
      <Hero
        title={"Travel"}
        para={
          "At Nebula Vets, we understand that travel with your pet requires careful planning and adherence to specific requirements. Whether you are traveling domestically or internationally, we are here to assist you with the necessary exams and paperwork."
        }
        imgsrc={"/assest/img/png/travel-hero.png"}
        imgw={"531"}
        imgh={"421"}
      />
    </>
  );
}

export default TrevelHero;
