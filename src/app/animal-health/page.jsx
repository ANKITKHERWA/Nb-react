import AnimalHealthExam from "@/componet/pages/animal-health/AnimalHealthExam";
import ExperinceAnimal from "@/componet/pages/animal-health/ExperinceAnimal";
import Hero from "@/componet/pages/animal-health/Hero";
import WeLookForward from "@/componet/pages/animal-health/WeLookForward";
import WhayChoose from "@/componet/pages/animal-health/WhayChoose";

import React from "react";

function page() {
  return (
    <>
      <Hero />
      <AnimalHealthExam />
      <WhayChoose />
      <ExperinceAnimal />
      <WeLookForward />
    </>
  );
}

export default page;
