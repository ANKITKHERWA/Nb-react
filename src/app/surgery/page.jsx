import PreConsultation from "@/componet/pages/surgery/PreConsultation";
import SurgeryAco from "@/componet/pages/surgery/SurgeryAco";
import SurgeryExp from "@/componet/pages/surgery/SurgeryExp";
import SurgeryHero from "@/componet/pages/surgery/SurgeryHero";
import SurgeryWelook from "@/componet/pages/surgery/SurgeryWelook";
import React from "react";

function page() {
  return (
    <>
      <SurgeryHero />
      <PreConsultation />
      <SurgeryAco />
      <SurgeryExp />
      <SurgeryWelook />
    </>
  );
}

export default page;
