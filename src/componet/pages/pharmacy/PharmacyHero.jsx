import Hero from "@/componet/common/Hero";
import React from "react";

function PharmacyHero() {
  return (
    <>
      <Hero
        title={"Pharmacy"}
        className={"mt-20"}
        para={
          "At Nebula Vets, we understand the importance of convenient access to necessary medications and pet health products for your furry companions. That's why we have an on-site pharmacy stocked with a wide range of prescription medications, prescription diets, and other pet health products."
        }
        imgsrc={"/assest/img/png/pharmacy-hero.png"}
        imgw={"556"}
        imgh={"451"}
      />
    </>
  );
}

export default PharmacyHero;
