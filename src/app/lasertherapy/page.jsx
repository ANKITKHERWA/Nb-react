import LaserAco from "@/componet/pages/lasertherapy/LaserAco";
import LaserExp from "@/componet/pages/lasertherapy/LaserExp";
import LaserHero from "@/componet/pages/lasertherapy/LaserHero";
import LaserWelook from "@/componet/pages/lasertherapy/LaserWelook";
import WhatisLaser from "@/componet/pages/lasertherapy/WhatisLaser";
import React from "react";

function page() {
  return (
    <>
      <LaserHero />
      <WhatisLaser />
      <LaserAco />
      <LaserExp />
      <LaserWelook />
    </>
  );
}

export default page;
