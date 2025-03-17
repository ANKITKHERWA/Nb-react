import Hero from "@/componet/common/Hero";
import React from "react";

function SpayHero() {
  return (
    <>
      <Hero
        title={"Spay & Neuter"}
        para={
          "Spaying, also known as ovariohysterectomy, is a surgical procedure performed on female animals to render them infertile. It involves the removal of the ovaries and uterus under general anesthesia. Neutering is a safe and effective surgical procedure designed to ensure that your male pet cannot reproduce. This important procedure involves the careful removal of your pet's testicles while they are comfortably under general anesthesia."
        }
        paraclass={"max-w-[664px]"}
        imgsrc={"/assest/img/png/spay-hero.png"}
        imgw={"447"}
        imgh={"447"}
      />
    </>
  );
}

export default SpayHero;
