import ExperiencePharmacy from "@/componet/pages/pharmacy/ExperiencePharmacy";
import HowItWork from "@/componet/pages/pharmacy/HowItWork";
import PharmacyHero from "@/componet/pages/pharmacy/PharmacyHero";
import WelookPharmacy from "@/componet/pages/pharmacy/WelookPharmacy";
import WhyChoose from "@/componet/pages/pharmacy/WhyChoose";
import React from "react";

function page() {
  return (
    <>
      <PharmacyHero />
      <HowItWork />
      <WhyChoose />
      <ExperiencePharmacy />
      <WelookPharmacy />
    </>
  );
}

export default page;
