import OpenHours from "@/componet/pages/urgent&emergencycare/OpenHours";
import WeLookUrgent from "@/componet/pages/urgent&emergencycare/WeLookUrgent";
import WhyEmergencyandUrgent from "@/componet/pages/urgent&emergencycare/WhyEmergencyandUrgent";
import React from "react";
import UregentHero from "@/componet/pages/urgent&emergencycare/UregentHero";

function page() {
  return (
    <>
      <UregentHero />
      <OpenHours />
      <WhyEmergencyandUrgent />
      <WeLookUrgent />
    </>
  );
}

export default page;
