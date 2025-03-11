import AllAcordion from "@/componet/pages/vaccinations/AllAcordion";
import VaccinationHero from "@/componet/pages/vaccinations/VaccinationHero";
import WeLook from "@/componet/pages/vaccinations/WeLook";
import WhayVaccinat from "@/componet/pages/vaccinations/WhayVaccinat";
import WhenToVaccinate from "@/componet/pages/vaccinations/WhenToVaccinate";
import React from "react";

function Page() {
  return (
    <>
      <VaccinationHero />
      <WhayVaccinat />
      <AllAcordion />
      <WhenToVaccinate />
      <WeLook />
    </>
  );
}

export default Page;
