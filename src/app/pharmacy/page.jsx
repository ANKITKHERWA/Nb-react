import ExperiencePharmacy from "@/componet/pages/pharmacy/ExperiencePharmacy";
import Hero from "@/componet/pages/pharmacy/Hero";
import HowItWork from "@/componet/pages/pharmacy/HowItWork";
import WelookPharmacy from "@/componet/pages/pharmacy/WelookPharmacy";
import WhyChoose from "@/componet/pages/pharmacy/WhyChoose";
import WeLookUrgent from "@/componet/pages/urgent&emergencycare/WeLookUrgent";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <HowItWork />
      <WhyChoose />
      <ExperiencePharmacy />
      <WelookPharmacy />
    </>
  );
}

export default page;
