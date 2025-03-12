import Mission from "@/componet/common/Mission";
import React from "react";

function WeLook2() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={"!text-2xl sm:!text-3xl md:!text-4xl"}
        para={
          "Schedule a dental appointment at Nebula Vets today, and let us illuminate your pet's smile for a lifetime of dental wellness and happiness. Together, we will nurture their oral health, one shining smile at a time."
        }
        paraclass={"max-w-[850px]"}
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgH={"376"}
        imgW={"603"}
        alt={"/img"}
      />
    </>
  );
}

export default WeLook2;
