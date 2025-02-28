import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import AllAcordion from "@/componet/pages/vaccinations/AllAcordion";
import Hero from "@/componet/pages/vaccinations/Hero";
import WeLook from "@/componet/pages/vaccinations/WeLook";
import WhayVaccinat from "@/componet/pages/vaccinations/WhayVaccinat";
import WhenToVaccinate from "@/componet/pages/vaccinations/WhenToVaccinate";
import React from "react";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhayVaccinat />
      <AllAcordion />
      <WhenToVaccinate />
      <WeLook />
      <Footer />
    </>
  );
}

export default Page;
