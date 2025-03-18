import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import MainHeading from "@/componet/common/MainHeading";
import Para from "@/componet/common/Para";
import React from "react";

function TeamHero() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-[#494336] relative">
          <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
            <div className=" justify-between pt-[193px] sm:pb-[80px] pb[0px] sm:flex flex-wrp">
              <div className="lg:pl-[100px] xl:pl-[136px] relative z-1">
                <MainHeading
                  title={"Join Our Nebula Vets Team:"}
                  className={"leading-[104%] max-w-[657px]"}
                />
                <Para
                  para={"Empowering Careers in Veterinary Care"}
                  paraclass={
                    "!text-[#D7D9DD] Roboto-font !text-base sm:!text-2xl md:!text-[28px] !mt-5"
                  }
                />
                <Para
                  para={
                    "At Nebula Vets, we are passionate about providing exceptional veterinary care and creating a positive impact in the lives of pets and their families. We believe in the power of collaboration, compassion, and continuous growth. If you are seeking a rewarding career in veterinary medicine, Nebula Vets offers exciting opportunities to join our dedicated team."
                  }
                  paraclass={
                    "text-[#D7D9DD] mt-2 sm:mt-4 lg:mt-[28px] text-sm sm:text-base md:text-lg xl:text-xl max-w-[664px]"
                  }
                />
                <div className="mt-[38px]">
                  <LearnMore learnMore={"APPLY TODAY"} path={"/"} />
                </div>
              </div>
              <div>
                <HeroImage
                  src={"/assest/img/png/team-hero.png"}
                  imgclass={
                    "absolute -right-10 bottom-20 sm:block hidden sm:max-w-[500px] xl:max-w-full"
                  }
                  imgh={"417"}
                  imgw={"431"}
                  alt={"img"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamHero;
