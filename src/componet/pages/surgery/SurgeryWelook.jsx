import Mission from "@/componet/common/Mission";
import React from "react";

function SurgeryWelook() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={
          "!text-2xl sm:!text-3xl md:!text-4xl !text-[#D7D9DD] !mb-[13px] sm:!mb-[20px] md:!mb-[30px]  pt-20"
        }
        para={
          "Contact Nebula Vets today to schedule a consultation or discuss your pet's surgical needs. Let us be your partner in providing outstanding surgical care for your furry companion."
        }
        paraclass={"max-w-[900px]"}
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgW={"637"}
        imgH={"318"}
        alt={"img"}
      />
    </>
  );
}

export default SurgeryWelook;
