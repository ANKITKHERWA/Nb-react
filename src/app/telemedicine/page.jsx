import TelemedicineCard from "@/componet/pages/telemedicine/TelemedicineCard";
import WhyUseTelemedicine from "@/componet/pages/telemedicine/WhayUseTelemedicine";
import WeLookUrgent from "@/componet/pages/urgent&emergencycare/WeLookUrgent";
import React from "react";
import TelemedicineHero from "@/componet/pages/telemedicine/TelemedicineHero";

function page() {
  return (
    <>
      <TelemedicineHero />
      <WhyUseTelemedicine />
      <TelemedicineCard />
      <WeLookUrgent />
    </>
  );
}

export default page;
