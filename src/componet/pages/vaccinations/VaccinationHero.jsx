import Hero from "@/componet/common/Hero";
import React from "react";

function VaccinationHero() {
  return (
    <>
      <Hero
        title={"Vaccinations"}
        para={
          "Vaccinations are key in keeping your pet healthy and preventing them catching life-threatening disease.Our veterinary team is dedicated to providing comprehensive vaccination services tailored to your pet's individual needs and lifestyle. This includes not only dogs and cats but also rabbits and ferrets."
        }
        imgsrc={"/assest/img/png/vaccinations-hero.png"}
        imgw={"649"}
        imgh={"517"}
      />
    </>
  );
}

export default VaccinationHero;
