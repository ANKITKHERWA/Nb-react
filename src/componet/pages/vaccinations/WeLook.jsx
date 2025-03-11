import Mission from "@/componet/common/Mission";
import React from "react";

function WeLook() {
  return (
    <>
      <Mission
        title={"We look forward to seeing you and your pet soon!"}
        className={"!text-2xl sm:!text-3xl md:!text-4xl"}
        para={
          "If you have any questions or concerns about vaccinations or would like to schedule an appointment for your pet, please contact our friendly team at [Your Veterinary Practice]. We are here to provide your furry family members with the highest standard of care and protection through our comprehensive vaccination services."
        }
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgH={"376"}
        imgW={"603"}
        alt={"/img"}
      />
    </>
  );
}

export default WeLook;
