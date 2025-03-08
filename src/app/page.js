import AboutVats from "@/componet/pages/home/AboutVats";
import AllCard from "@/componet/common/AllCard";
import HomeHero from "@/componet/pages/home/HomeHero";
import OurApproach from "@/componet/pages/home/OurApproach";
import OurMission from "@/componet/pages/home/OurMission";
import OurService from "@/componet/pages/home/OurService";
import WhayChooseNebula from "@/componet/pages/home/WhayChooseNebula";

import React from "react";

function page() {
  return (
    <>
      <HomeHero />
      <OurApproach />
      <WhayChooseNebula />
      <OurService />
      <AllCard />
      <AboutVats />
      <OurMission />
    </>
  );
}

export default page;
