import AllCare from "@/componet/pages/service/AllCare";
import Care from "@/componet/pages/service/Care";
import ServiceHero from "@/componet/pages/service/ServiceHero";
import SliderImage from "@/componet/pages/service/SliderImage";
import React from "react";

function page() {
  return (
    <>
      <ServiceHero />
      <SliderImage />
      <Care />
      <AllCare />
    </>
  );
}

export default page;
