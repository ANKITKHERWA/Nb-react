import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import Hero from "@/componet/pages/telemedicine/Hero";
import TelemedicineCard from "@/componet/pages/telemedicine/TelemedicineCard";
import WhyUseTelemedicine from "@/componet/pages/telemedicine/WhayUseTelemedicine";
import WeLookUrgent from "@/componet/pages/urgent&emergencycare/WeLookUrgent";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUseTelemedicine />
      <TelemedicineCard />
      <WeLookUrgent />
      <Footer />
    </>
  );
}

export default page;
