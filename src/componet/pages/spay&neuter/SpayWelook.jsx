import Mission from "@/componet/common/Mission";
import React from "react";

function SpayWelook() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={
          "!text-2xl sm:!text-3xl md:!text-4xl !text-[#D7D9DD] !mb-[13px] sm:!mb-[20px] md:!mb-[30px]"
        }
        para={
          "Contact Nebula Vets today to schedule a consultation or discuss your pet's spay or neuter procedure. Let us provide your furry companion with the highest quality care and support, ensuring a healthier and happier life for them. "
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

export default SpayWelook;
