import Mission from "@/componet/common/Mission";
import React from "react";

function LaserWelook() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={
          "!text-2xl sm:!text-3xl md:!text-4xl !text-[#D7D9DD] !mb-[13px] sm:!mb-[20px] md:!mb-[30px] "
        }
        para={
          "If you believe that laser therapy could benefit your pet, we encourage you to schedule a consultation with our experienced veterinary team. We will assess your pet's condition, discuss treatment options, and develop a personalized plan that suits their specific needs."
        }
        paraclass={"max-w-[805px]"}
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgW={"550"}
        imgH={"280"}
        alt={"img"}
      />
    </>
  );
}

export default LaserWelook;
