import Hero from "@/componet/pages/animal-health/AnimalHero";
import WeLookForward from "@/componet/pages/animal-health/WeLookForward";
import React from "react";
import ExperinceAnimal from "@/componet/pages/animal-health/ExperinceAnimal";
import AnimalHealthExam from "@/componet/pages/animal-health/AnimalHealthExam";
import WhyAnimalHealthChecksMatter from "@/componet/pages/animal-health/WhyAnimalHealthChecksMatter";

function page() {
  return (
    <>
      <Hero />
      <AnimalHealthExam />
      <WhyAnimalHealthChecksMatter />
      <ExperinceAnimal />
      <WeLookForward />
    </>
  );
}

export default page;
