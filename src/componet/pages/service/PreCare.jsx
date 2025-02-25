import AniService from "@/componet/common/AniService";
import PreventCare from "@/componet/common/PreventCare";
import React from "react";

function PreCare() {
  return (
    <>
      <PreventCare
        title={"Preventive Care"}
        para1={"Your pet's well-being at the forefront of our practice."}
        para2={
          "At Nebula Vets, we take a proactive approach to your pet's healthcare, prioritizing their well-being and aiming to maximize their quality of life. We believe in the importance of preventive medicine and early detection of potential health issues. By implementing regular wellness check-ups and comprehensive screenings, we can identify and address any problems at their earliest stages."
        }
        imgsrc={"/assest/img/png/preventive-care-big.png"}
        imgH={"304"}
        imgW={"376"}
        alt={"img"}
      />
      <div>
        <AniService
          title={"Animal Health Check"}
          para={
            "Our practice offers the convenience of same or next-day appointments to ensure your furry companion receives prompt diagnostic evaluation and treatment. Our dedicated team prioritizes swift action, allowing us to quickly identify the issue at hand and provide the necessary care your pet requires."
          }
          path={"/"}
        />
        <AniService
          title={"Vaccinations"}
          para={
            "Vaccinations are a key component of your pet’s health and essential to prevent life-threatening diseases. Nebula vets offer's all the core and non-core vaccines your pet might need."
          }
          path={"/"}
        />
        <AniService
          title={"Dentals"}
          para={
            "Dental disease and smelly breath is common, and regular cleanings and exams can save your pet a lot of pain and disease later in life. Our advanced state-of-the-art dental suite is equipped for dental cleanings (scale and polish), extractions and any other care your pet may need."
          }
          path={"/"}
        />
      </div>
    </>
  );
}

export default PreCare;
