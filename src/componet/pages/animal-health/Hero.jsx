import CommonHero from "@/componet/common/CommonHero";
import React from "react";

function Hero() {
  return (
    <>
      <CommonHero
        title={"Animal Health Check"}
        para={
          "This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due."
        }
        heroimg={"/assest/img/png/animal-health.png"}
        imgW={"528"}
        imgH={"521"}
        alt={"img"}
        path={"/"}
      />
    </>
  );
}

export default Hero;
