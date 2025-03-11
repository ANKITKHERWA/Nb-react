import Hero from "@/componet/common/Hero";
import React from "react";

function AboutHero() {
  return (
    <>
      <Hero
        title={"About Nebula Vets"}
        para={
          "With a foundation built on values, innovation, and a commitment to excellence, Nebula Vets continues to strive for excellence in veterinary care. Our journey is fueled by the passion to make a difference in the lives of pets and their owners, providing you with a trusted partner in your pet's health and well-being."
        }
        imgsrc={"/assest/img/png/about-hero.png"}
        imgw={"636"}
        imgh={"458"}
        imgclass={""}
      />
    </>
  );
}

export default AboutHero;
