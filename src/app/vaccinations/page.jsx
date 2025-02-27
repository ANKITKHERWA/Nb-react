import Acordion from "@/componet/common/Acordion";
import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import AllAcordion from "@/componet/pages/vaccinations/AllAcordion";
import Hero from "@/componet/pages/vaccinations/Hero";
import WhayVaccinat from "@/componet/pages/vaccinations/WhayVaccinat";
import React from "react";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhayVaccinat />
      <AllAcordion />
      <Footer />
    </>
  );
}

export default Page;
