import Image from "next/image";
import React from "react";

function HeroImage({ src, imgw, imgh, alt, imgclass }) {
  return (
    <>
      <div className={`${imgclass}`}>
        <Image src={src} width={imgw} height={imgh} alt={alt} />
      </div>
    </>
  );
}

export default HeroImage;
