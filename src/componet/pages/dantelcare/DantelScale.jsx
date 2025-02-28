import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import Image from "next/image";
import React from "react";

function DantelScale() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] pt-[80px] sm:pb-[140px] pb-[100px] relative overflow-hidden">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px] z-10 relative">
            <SubHeading
              heading={"Dentals - Scale & Polish"}
              subclass={
                "md:!text-4xl sm:!text-3xl !text-2xl !text-[#494336] !max-w-full"
              }
            />
            <Para
              para={
                "Dental health is a vital aspect of your pet's overall well-being. Just like humans, pets can experience dental problems, including plaque buildup, gum disease, and tooth decay. At Nebula Vets, we prioritize dental care and offer comprehensive dental services to ensure your pet's oral health remains in top condition."
              }
              paraclass={
                "sm:!text-xl !text-base !text-[#494336] !mt-10 !max-w-full"
              }
            />
            <div className="mt-20">
              <SubHeading
                heading={"When to schedule a dental consultation"}
                subclass={
                  "md:!text-4xl sm:!text-3xl !text-2xl !text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "If you notice any signs of dental problems in your pet, such as bad breath, red or swollen gums, difficulty eating, or loose teeth, it's essential to seek professional dental care. Schedule a dental consultation at Nebula Vets to have our skilled team assess your pet's dental health and recommend the most appropriate treatment options."
                }
                paraclass={
                  "sm:text-xl text-base !text-[#494336] !max-w-full !mt-10"
                }
              />
            </div>
            <div className="mt-20">
              <SubHeading
                heading={"Post Dental Care"}
                subclass={
                  "md:!text-4xl sm:!text-3xl !text-2xl !text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Most pets recover quickly after a dental. A little tiredness, and some post-anesthesia anxiety is normal. You can feed your pet the evening of their procedure; soft food for 14 days is recommended if any dental extractions were performed. If your pet had any extractions performed, we will send them home with pain relief to keep them comfortable."
                }
                paraclass={
                  "sm:text-xl text-base !text-[#494336] !max-w-full !mt-10"
                }
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 mx-auto left-0 right-0">
          <Image
            src="/assest/img/png/animalstringentmotion.png"
            width={"1440"}
            height={"450"}
            alt="img"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default DantelScale;
