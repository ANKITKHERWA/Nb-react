import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import Image from "next/image";
import React from "react";

function OpenHours() {
  return (
    <>
      <div className="bg-[rgb(215,217,221,0.50)] pt-[80px] sm:pb-[140px] pb-[100px] relative overflow-hidden">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px] z-10 relative">
            <SubHeading
              heading={"Urgent & Emergency Care during open hours"}
              subclass={
                "md:!text-4xl sm:!text-3xl !text-2xl !text-[#494336] !max-w-full"
              }
            />
            <Para
              para={
                "At Nebula Vets, we understand that emergencies can happen at any time, and your pet's health and well-being are our top priority. We have convenient operating hours to ensure that we are available when you need us."
              }
              paraclass={
                "sm:!text-xl !text-base !text-[#494336] !mt-10 !max-w-full"
              }
            />
            <Para
              para={
                "Our clinic is open from 8am to 6pm on weekdays and from 9am to 5pm on Saturdays. During these hours, our team of veterinarians and staff are ready to provide care for your pets."
              }
              paraclass={
                "sm:!text-xl !text-base !text-[#494336] !mt-10 !max-w-full"
              }
            />
            <Para
              para={
                "If you have an urgent situation and require immediate advice or first aid instructions while you're on your way to our practice, you can contact us at 1234567. Our knowledgeable staff will assist you and provide guidance to help you manage the situation until you arrive."
              }
              paraclass={
                "sm:!text-xl !text-base !text-[#494336] !mt-10 !max-w-full"
              }
            />

            <div className="mt-20">
              <SubHeading
                heading={"Outside open hours"}
                subclass={
                  "md:!text-4xl sm:!text-3xl !text-2xl !text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "The closest 24hr emergency veterinary hospital to our practice is: Their number is 123456"
                }
                paraclass={"sm:text-xl text-base !text-[#494336]  !mt-10"}
              />
            </div>
            <div className="mt-20">
              <SubHeading
                heading={"Reasons to seek Urgent or Emergency care"}
                subclass={
                  "md:!text-4xl sm:!text-3xl !text-2xl !text-[#494336] !max-w-full"
                }
              />
              <div>
                <ul className="list-disc pl-5">
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Open wounds
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Toxin ingestion or foreign body
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Signs of pain
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Behavioral changes
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Eye issues
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Ear infections
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Vomiting or diarrhea
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Hair loss
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Coughing, sneezing or nasal discharge
                  </li>
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Urinating blood or urinary changes
                  </li>{" "}
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Worms, fleas, ticks or mites
                  </li>{" "}
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Scooting
                  </li>{" "}
                  <li className="md:text-lg sm:text-base text:sm text-[#494336]">
                    Changes in eating or drinking
                  </li>
                </ul>
              </div>
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

export default OpenHours;
