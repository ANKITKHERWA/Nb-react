import Hero from "@/componet/common/Hero";
import React from "react";

function TelemedicineHero() {
  return (
    <>
      <Hero
        title={"Telemedicine"}
        className={"mt-20"}
        para={
          "Nebula Vets' online telemedicine service is a convenient and innovative way to connect with our veterinary doctors from the comfort of your own home. Through this platform, you can have a virtual consultation with our experienced veterinarians, allowing you to receive timely and expert advice for your pet's health concerns without the need to physically visit our clinic."
        }
        imgsrc={"/assest/img/png/telemedicine-hero.png"}
        imgw={"600"}
        imgh={"507"}
      />
    </>
  );
}

export default TelemedicineHero;
