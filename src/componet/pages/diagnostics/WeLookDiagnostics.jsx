import Mission from "@/componet/common/Mission";
import React from "react";

function WelookDiagnostic() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={
          "!text-2xl sm:!text-3xl md:!text-4xl !text-[#D7D9DD] !mb-[13px] sm:!mb-[20px] md:!mb-[30px] sm:!max-w-[530px] pt-20"
        }
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgW={"637"}
        imgH={"318"}
        alt={"img"}
      />
    </>
  );
}

export default WelookDiagnostic;
