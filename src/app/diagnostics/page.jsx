import Footer from "@/componet/common/Footer";
import Navbar from "@/componet/common/Navbar";
import Aco2 from "@/componet/pages/diagnostics/Aco2";
import AcoDiagnostics from "@/componet/pages/diagnostics/AcoDiagnostics";
import Availableimaging from "@/componet/pages/diagnostics/AvailableImaging";
import AvailableTests from "@/componet/pages/diagnostics/AvailableTests";
import Hero from "@/componet/pages/diagnostics/DiagnosticHero";
import AvailableSnapTests from "@/componet/pages/diagnostics/AvailableSnapTests";
import WeLookUrgent from "@/componet/pages/urgent&emergencycare/WeLookUrgent";
import React from "react";
import WelookDiagnostic from "@/componet/pages/diagnostics/WeLookDiagnostics";

function page() {
  return (
    <>
      <Hero />
      <AvailableTests />
      <AcoDiagnostics />
      <Availableimaging />
      <Aco2 />
      <AvailableSnapTests />
      <WelookDiagnostic />
    </>
  );
}

export default page;
