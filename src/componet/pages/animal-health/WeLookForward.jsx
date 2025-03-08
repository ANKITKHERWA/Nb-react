import Mission from "@/componet/common/Mission";
import React from "react";

function WeLookForward() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={
          "!text-2xl sm:!text-3xl md:!text-4xl text-[#D7D9DD] mb-[13px] sm:mb-[20px] md:mb-[30px]"
        }
        para={
          "Schedule an animal health check at Nebula Vets today, and let us embark on a journey of comprehensive care for your cherished companion. Together, we will nurture their health and happiness, one check-up at a time."
        }
        paraclass={"!max-w-[830px]"}
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgH={"376"}
        imgW={"603"}
        alt={"/img"}
      />
    </>
  );
}

export default WeLookForward;
