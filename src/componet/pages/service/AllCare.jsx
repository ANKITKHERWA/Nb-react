import HeroImage from "@/componet/common/HeroImage";
import LearnMore from "@/componet/common/LearnMore";
import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import React from "react";

function AllCare() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 md:w-2/5 w-full">
            <div>
              <HeroImage
                src={"/assest/img/png/Preventive-care-big.png"}
                imgclass={"max-w-[376px] sm:mb-[0px] -mb-[40px]"}
                imgh={"304"}
                imgw={"376"}
                alt={"img"}
              />
              <SubHeading
                heading={"Preventive Care"}
                subclass={
                  "xl:text-5xl md:text-[40px] text-[32px] text-[#494336] !max-w-full"
                }
              />
              <Para
                para={"Your pet's well-being at the forefront of our practice."}
                paraclass={
                  "!text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6"
                }
              />
              <Para
                para={
                  "At Nebula Vets, we take a proactive approach to your pet's healthcare, prioritizing their well-being and aiming to maximize their quality of life. We believe in the importance of preventive medicine and early detection of potential health issues. By implementing regular wellness check-ups and comprehensive screenings, we can identify and address any problems at their earliest stages."
                }
                paraclass={
                  "!text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]"
                }
              />
              <div className="mt-[40px] md:block hidden">
                <LearnMore learnMore={"BOOK NOW"} path={"/"} />
              </div>
            </div>
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] lg:w-3/5 w-full">
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Animal Health Check"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Our practice offers the convenience of same or next-day appointments to ensure your furry companion receives prompt diagnostic evaluation and treatment. Our dedicated team prioritizes swift action, allowing us to quickly identify the issue at hand and provide the necessary care your pet requires."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Vaccinations"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Vaccinations are a key component of your pet’s health and essential to prevent life-threatening diseases. Nebula vets offer's all the core and non-core vaccines your pet might need."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Dentals"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Dental disease and smelly breath is common, and regular cleanings and exams can save your pet a lot of pain and disease later in life. Our advanced state-of-the-art dental suite is equipped for dental cleanings (scale and polish), extractions and any other care your pet may need."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
          </div>
        </div>
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 md:w-2/5 w-full">
            <div>
              <HeroImage
                src={"/assest/img/png/Sick-patient-icon.png"}
                imgclass={"max-w-[376px] sm:mb-[0px] -mb-[40px]"}
                imgh={"304"}
                imgw={"376"}
                alt={"img"}
              />
              <SubHeading
                heading={"Sick Patient Care"}
                subclass={
                  "xl:text-5xl md:text-[40px] text-[32px] text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Delivering exceptional care for sick patients, combining the virtues of efficiency and expertise"
                }
                paraclass={
                  "!text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6"
                }
              />
              <Para
                para={
                  "At Nebula Vets, we are fully equipped with advanced diagnostic tools and a wide range of treatment options to address any health issue your pet may be facing. Our commitment to comprehensive care means that we have the expertise and resources to provide accurate diagnoses and effective treatments."
                }
                paraclass={
                  "!text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]"
                }
              />
              <div className="mt-[40px] md:block hidden">
                <LearnMore learnMore={"BOOK NOW"} path={"/"} />
              </div>
            </div>
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] lg:w-3/5 w-full">
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Urgent & Emergency Care"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Whether your pet is sick or injured, we’re here to help get them the help they need. This includes telemedicine veterinary consults if you are unsure, and overnight care for 24-hour treatment."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Telemedicine consults"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Nebula vets offers a fast telemedicine service, to help your pet without leaving the home"
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Diagnostics"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Nebula vets has invested in the latest technology, equipped for all the diagnostic tests your pet needs to stay healthy, and to treat those that get sick. We’re able to run tests quickly in-house in situations where a rapid diagnosis is required and offer artificialintelligence alongside veterinary experts."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Pharmacy"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Our highly stocked on-site pharmacy inlcudes a variety of prescription medications and pet health products for your pet. If a particular medication is unavailable, our compounding pharmacy can have it delivered to you within 24 hours."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
          </div>
        </div>
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 md:w-2/5 w-full">
            <div>
              <HeroImage
                src={"/assest/img/png/Surgery-icon.png"}
                imgclass={"max-w-[376px] sm:mb-[0px] -mb-[40px] "}
                imgh={"304"}
                imgw={"376"}
                alt={"img"}
              />
              <SubHeading
                heading={"Surgery"}
                subclass={
                  "xl:text-5xl md:text-[40px] text-[32px] text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Highly experienced surgeons -dedicated to delivering outstanding care for your pet."
                }
                paraclass={
                  "!text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6"
                }
              />
              <Para
                para={
                  "At Nebula Vets, we are equipped to handle a wide range of veterinary services, from emergency surgeries to routine procedures like neuters. Our team of skilled veterinarians is committed to providing the highest level of care to your pets."
                }
                paraclass={
                  "!text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]"
                }
              />
              <div className="mt-[40px] md:block hidden">
                <LearnMore learnMore={"BOOK NOW"} path={"/"} />
              </div>
            </div>
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] lg:w-3/5 w-full">
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Surgery"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "n our advanced state-of-the-art surgery suite, our experienced doctors can perform all routine surgeries, including spays, neuters, basic soft tissue surgery, such as mass removals, laceration repair, abscesses, and dental procedures. All estimates are provided within 24 hours of receiving a request!"
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Spays & Neuters"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Our team comprises highly trained doctors who excel in routine surgery and harness the full potential of our state-of-the-art technology and advanced equipment. With their expertise and proficiency, they ensure optimal surgical outcomes for your beloved pets"
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
          </div>
        </div>
        <div className=" lg:flex flex-wrp justify-between" id="pre-care">
          <div className="mt-[80px] px-10 md:w-2/5 w-full">
            <div>
              <HeroImage
                src={"/assest/img/png/Additional-icon.png"}
                imgclass={"max-w-[376px] sm:mb-[0px] -mb-[40px]"}
                imgh={"304"}
                imgw={"376"}
                alt={"img"}
              />
              <SubHeading
                heading={"Additional Services"}
                subclass={
                  "xl:text-5xl md:text-[40px] text-[32px] text-[#494336] !max-w-full mt-10"
                }
              />
              <Para
                para={
                  "Additional Services that Go Above and Beyond: Experience Exceptional Veterinary Care at Nebula Vets"
                }
                paraclass={
                  "!text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full md:max-w-[518px] leading-[150%] Roboto-font mt-6"
                }
              />
              <Para
                para={
                  "Experience comprehensive veterinary care at Nebula Vets. We offer specialized services in travel document assistance, skin dermatology, microchipping, and compassionate euthanasia. Trust our experienced team for exceptional care tailored to your pet's unique needs."
                }
                paraclass={
                  "!text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]"
                }
              />
              <div className="mt-[40px] md:block hidden">
                <LearnMore learnMore={"BOOK NOW"} path={"/"} />
              </div>
            </div>
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] lg:mt-[0px] mt-[60px] pb-20 lg:w-3/5 w-full">
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Travel Certificates"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "From domestic or international travel, you will usually require a health certificate for your pet. We can help with the necessary paperwork to allow your pet to join you on your travels –the process is simple and easy."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Skin & Dermatology"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "If your pet is experiencing uncomfortable symptoms such as itchy skin, hair loss, or rashes, it may be indicative of allergies or infections. Our team of highly trained veterinarians specializes in diagnosing and treating various skin issues that can cause distress to your beloved companion. With their expertise and comprehensive understanding of dermatological conditions, they will diligently assess your pet's symptoms and develop a tailored treatment plan to address the underlying cause of their discomfort."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Microchipping"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. "
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Laser Therapy"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
            <div className="sm:pt-[80px] pt-[60px] pl-[38px] sm:pl-[50px] xl:pl-[115px] pr-[33px]">
              <SubHeading
                heading={"Hospice & Euthanasia"}
                subclass={
                  "sm:text-[28px] text-xl Roboto-font text-[#494336] !max-w-full"
                }
              />
              <Para
                para={
                  "The decision to say goodbye to your pet is the most difficult decision you’ll have to make. Our team at nebula vets is here to guide you through the process with compassion and can perform end-of-life services at the time of your choosing."
                }
                paraclass={
                  "sm:text-xl text-base !max-w-full !md:max-w-[659px] mt-[20px] !text-[#494336]"
                }
              />
              <div className="mt-10">
                <LearnMore learnMore={"LEARN MORE"} path={"/"} />
              </div>
              <div class="border-b border-black pb-[30px] sm:pb-[60px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCare;
