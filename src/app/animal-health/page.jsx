import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import AnimalHealthExam from "@/componet/pages/animal-health/AnimalHealthExam";
import ExperinceAnimal from "@/componet/pages/animal-health/ExperinceAnimal";
import Hero from "@/componet/pages/animal-health/Hero";
import WeLookForward from "@/componet/pages/animal-health/WeLookForward";
import WhayChoose from "@/componet/pages/animal-health/WhayChoose";

import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimalHealthExam />
      <WhayChoose />
      <ExperinceAnimal />
      <WeLookForward />
      <Footer />
    </>
  );
}

export default page;
