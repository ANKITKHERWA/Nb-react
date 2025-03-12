import Mission from "@/componet/common/Mission";
import React from "react";

function WeLookUrgent() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={
          "max-w-[530px] xl:!text-4xl lg:!text-3xl md:!text-[28px] !text-2xl pt-20"
        }
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgH={"376"}
        imgW={"603"}
        alt={"/img"}
      />
    </>
  );
}

export default WeLookUrgent;
