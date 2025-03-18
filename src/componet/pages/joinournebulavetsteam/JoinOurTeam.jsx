import Mission from "@/componet/common/Mission";
import React from "react";

function JoinOurTeam() {
  return (
    <>
      <Mission
        title={"Join our team"}
        para={
          "Grow your career with Nebula Vets and become part of a team that is shaping the future of veterinary care. Contact us today to learn more about current openings, our application process, and how you can contribute to our mission of providing exceptional care to our beloved patients. Together, let's create a brighter future for veterinary medicine."
        }
        imgsrc={"/assest/img/png/footer-nabula.png"}
        imgW={"550"}
        imgH={"280"}
        alt={"img"}
      />
    </>
  );
}

export default JoinOurTeam;
