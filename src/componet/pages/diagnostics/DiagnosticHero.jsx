import Hero from "@/componet/common/Hero";
import React from "react";

function DiagnosticHero() {
  return (
    <>
      <Hero
        title={"Diagnostics"}
        className={"mt-20"}
        para={
          "At Nebula Vets, we are committed to providing comprehensive and advanced diagnostic testing to ensure the well-being of your cherished pet.Our state-of-the-art veterinary hospital offers a range of diagnostic tests that empower us to gain precise insights into your pet's health. Here are some of the key diagnostic tests available at Nebula Vets for the benefit of our clients and their beloved pets:"
        }
        imgsrc={"/assest/img/png/Diagnostics-hero.png"}
        imgw={"539"}
        imgh={"457"}
      />
    </>
  );
}

export default DiagnosticHero;
