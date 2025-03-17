import Hero from "@/componet/common/Hero";
import React from "react";

function LaserHero() {
  return (
    <>
      <Hero
        title={"Laser Therapy"}
        para={
          "At Nebula Vets, we are excited to offer the remarkable benefits of laser therapy for our furry patients. Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets. Join us as we explore the transformative effects of laser therapy."
        }
        imgsrc={"/assest/img/png/laser-hero.png"}
        imgw={"420"}
        imgh={"488"}
      />
    </>
  );
}

export default LaserHero;
