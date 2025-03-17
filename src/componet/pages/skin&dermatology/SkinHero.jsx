import Hero from "@/componet/common/Hero";
import React from "react";

function SkinHero() {
  return (
    <>
      <Hero
        title={"Skin & Dermatology"}
        para={
          "At our practice, we specialize in the treatment of various skin-related issues, ranging from bacterial or yeast infections to bites and rashes. Our approach involves a comprehensive process of test-diagnose-treat, ensuring accurate identification of the underlying cause and tailored treatment plans. Trust us to address your pet's skin concerns with expertise and precision for optimal results."
        }
        imgsrc={"/assest/img/png/skin-hero.png"}
        imgw={"459"}
        imgh={"463"}
      />
    </>
  );
}

export default SkinHero;
