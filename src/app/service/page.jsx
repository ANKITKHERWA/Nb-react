import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import AllCare from "@/componet/pages/service/AllCare";
import Care from "@/componet/pages/service/Care";
import Hero from "@/componet/pages/service/Hero";
import SliderImage from "@/componet/pages/service/SliderImage";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <SliderImage />
      <Care />
      <AllCare />
    </>
  );
}

export default page;
