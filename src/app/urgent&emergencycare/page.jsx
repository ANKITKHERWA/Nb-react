import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import Hero from "@/componet/pages/urgent&emergencycare/Hero";
import OpenHours from "@/componet/pages/urgent&emergencycare/OpenHours";
import WeLookUrgent from "@/componet/pages/urgent&emergencycare/WeLookUrgent";
import WhyEmergencyandUrgent from "@/componet/pages/urgent&emergencycare/WhyEmergencyandUrgent";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <OpenHours />
      <WhyEmergencyandUrgent />
      <WeLookUrgent />
    </>
  );
}

export default page;
