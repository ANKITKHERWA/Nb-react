import Mission from "@/componet/common/Mission";
import React from "react";

function MicroWelook() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={
          "!text-2xl sm:!text-3xl md:!text-4xl !text-[#D7D9DD] !mb-[13px] sm:!mb-[20px] md:!mb-[30px] max-w-[530px]"
        }
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgW={"550"}
        imgH={"280"}
        alt={"img"}
      />
    </>
  );
}

export default MicroWelook;
