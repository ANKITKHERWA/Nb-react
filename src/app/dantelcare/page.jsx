import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import DantelScale from "@/componet/pages/dantelcare/DantelScale";
import ExceptionalDental from "@/componet/pages/dantelcare/ExceptionalDental";
import Hero from "@/componet/pages/dantelcare/Hero";
import WhayAcordion from "@/componet/pages/dantelcare/WhayAcordion";
import React from "react";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <DantelScale />
      <WhayAcordion />
      <ExceptionalDental />
      <Footer />
    </>
  );
}

export default Page;
