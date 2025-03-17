import Hero from "@/componet/common/Hero";
import React from "react";

function HospiceHero() {
  return (
    <>
      <Hero
        title={"Hospice & Euthanasia"}
        para={
          "At Nebula Vets, we understand how difficult it is to say goodbye to a beloved pet. During this emotional time, our compassionate and caring team is here to support you and your pet. We offer hospice services that focus on providing comfort and dignity to your pet during their last days and final moments."
        }
        imgsrc={"/assest/img/png/hospice-hero.png"}
        imgw={"457"}
        imgh={"453"}
      />
    </>
  );
}

export default HospiceHero;
