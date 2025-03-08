import Hero from "@/componet/common/Hero";
import React from "react";

function AnimalHero() {
  return (
    <>
      <Hero
        title={"Animal Health Check"}
        para={
          "This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due."
        }
        imgsrc={"/assest/img/png/animal-hero.png"}
        imgw={"528"}
        imgh={"521"}
      />
    </>
  );
}

export default AnimalHero;
