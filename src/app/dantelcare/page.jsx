import Footer from "@/componet/common/Footer";
import Mission from "@/componet/common/Mission";
import Navbar from "@/componet/common/Navbar";
import DantelScale from "@/componet/pages/dantelcare/DantelScale";
import ExceptionalDental from "@/componet/pages/dantelcare/ExceptionalDental";
import Hero from "@/componet/pages/dantelcare/Hero";
import WeLook2 from "@/componet/pages/dantelcare/WeLook2";
import WhayAcordion from "@/componet/pages/dantelcare/WhayAcordion";
import React from "react";

function Page() {
  return (
    <>
      <Hero />
      <DantelScale />
      <WhayAcordion />
      <ExceptionalDental />
      <WeLook2 />
    </>
  );
}

export default Page;
