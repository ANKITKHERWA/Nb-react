import SpayAco from "@/componet/pages/spay&neuter/SpayAco";
import SpayExp from "@/componet/pages/spay&neuter/SpayExp";
import SpayHero from "@/componet/pages/spay&neuter/SpayHero";
import SpayWelook from "@/componet/pages/spay&neuter/SpayWelook";
import WhySpay from "@/componet/pages/spay&neuter/WhySpay";
import React from "react";

function page() {
  return (
    <>
      <SpayHero />
      <WhySpay />
      <SpayAco />
      <SpayExp />
      <SpayWelook />
    </>
  );
}

export default page;
