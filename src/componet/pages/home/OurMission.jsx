import Mission from "@/componet/common/Mission";
import React from "react";

function OurMission() {
  return (
    <>
      <Mission
        title={"Our Mission"}
        para={
          "Our Mission is to establish a new standard of excellence in veterinary care, driven by an unwavering ethical conscience."
        }
        paraclass={"!max-w-[550px]"}
        imgsrc={"/assest/img/png/herovat-service.png"}
        imgH={"372"}
        imgW={"584"}
        alt={"cat-dog"}
      />
    </>
  );
}

export default OurMission;
