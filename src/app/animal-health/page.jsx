import Hero from "@/componet/pages/animal-health/AnimalHero";
import WeLookForward from "@/componet/pages/animal-health/WeLookForward";
import WhayChoose from "@/componet/pages/animal-health/WhyAnimalHealthChecksMatter";
import React from "react";
import HealthCheck from "@/componet/pages/animal-health/HealthCheck";
import ExperinceAnimal from "@/componet/pages/animal-health/ExperinceAnimal";

function page() {
  return (
    <>
      <Hero />
      <HealthCheck />
      <WhayChoose />
      <ExperinceAnimal />
      <WeLookForward />
    </>
  );
}

export default page;
