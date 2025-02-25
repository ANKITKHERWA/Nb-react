import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import AboutVats from "@/componet/pages/home/AboutVats";
import Hero from "@/componet/pages/home/Hero";
import OurApproach from "@/componet/pages/home/OurApproach";
import OurMission from "@/componet/pages/home/OurMission";
import OurService from "@/componet/pages/home/OurService";
import WhayChooseNebula from "@/componet/pages/home/WhayChooseNebula";

import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurApproach />
      <WhayChooseNebula />
      <OurService />
      <AboutVats />
      <OurMission />
      <Footer />
    </>
  );
}

export default page;
