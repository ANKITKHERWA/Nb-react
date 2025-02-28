import Para from "@/componet/common/Para";
import SubHeading from "@/componet/common/SubHeading";
import React from "react";

function WhenToVaccinate() {
  return (
    <>
      <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
        <div className="sm:px-[25px] lg:px-[70px] xl:px-[130px] mb-20">
          <div className="mb-[40px]">
            <SubHeading
              heading={"When to vaccinate?"}
              subclass={
                "text-2xl sm:text-3xl md:text-[40px] xl:text-5xl text-[#494336]"
              }
            />
          </div>
          <div className="md:block hidden">
            <div className="flex justify-between gap-[10px]">
              <div className="bg-[#494336] pt-[34px] pb-[57px] lg:w-[49%] md:w-full  h-auto pl-[48px] pr-[10px]">
                <div className="flex gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="65"
                      viewBox="0 0 62 65"
                      fill="none">
                      <path
                        d="M59.5893 43.2403C57.7193 49.3443 53.8609 54.8308 48.7243 58.7022C43.422 62.6923 37.1019 64.8062 30.474 64.8062C21.5264 64.8062 13.0522 60.8635 7.25284 53.9757C7.18183 53.9282 7.13448 53.857 7.08714 53.7857C2.54232 48.2992 0.0332031 41.364 0.0332031 34.2387C0.0332031 24.4295 4.76739 15.1667 12.6972 9.4427C12.8628 9.32395 13.0522 9.27645 13.2653 9.3002C13.4546 9.32395 13.644 9.4427 13.7623 9.60896C13.8807 9.77522 13.928 9.96522 13.9044 10.179C13.8807 10.369 13.7623 10.559 13.5966 10.6778C6.04562 16.1405 1.54814 24.9521 1.54814 34.2624C1.54814 40.5089 3.48916 46.4467 7.18183 51.4581C9.09917 34.7137 17.668 19.5606 18.0468 18.9193C18.8279 17.5655 19.9641 14.2166 21.1477 10.6778C22.3076 7.23386 23.4911 3.69497 24.6036 1.24863C24.7457 0.939865 25.0771 0.749857 25.4321 0.82111C25.7635 0.892363 26.0239 1.17737 26.0476 1.53364C26.1422 3.67122 27.0654 6.52134 28.462 8.94393C30.0006 11.6278 31.8943 13.3854 33.6223 13.7654C38.0014 14.6917 43.3747 16.5917 46.1205 23.337C47.091 25.6883 51.7305 27.9209 59.9207 29.9635L59.968 29.9873C60.181 30.0348 60.3467 30.0823 60.4651 30.106C60.7965 30.201 61.0332 30.486 61.0332 30.8423C61.0332 32.9799 59.7076 37.1125 56.0623 39.6539C52.2039 42.3615 46.3335 42.314 37.5043 41.3402C37.1492 41.2927 37.0545 41.4352 37.0072 41.4827C36.7705 41.7915 36.6521 42.884 37.6226 44.9979C37.8594 45.4966 38.0724 45.9479 38.2854 46.3517L38.3328 46.4467C39.2796 48.323 39.9424 49.653 40.3448 54.237C40.3685 54.6645 40.0608 55.0208 39.6583 55.0445H39.5873C39.2086 55.0445 38.8772 54.7357 38.8299 54.3557C38.4748 50.0806 37.883 48.893 36.9835 47.1117C36.7705 46.7079 36.5101 46.1854 36.2497 45.5916C35.2319 43.359 35.0662 41.554 35.7763 40.5564C36.1787 39.9864 36.8652 39.7014 37.6463 39.7964C46.1205 40.7227 51.7069 40.7939 55.1628 38.3713C58.1453 36.2813 59.2579 33.0749 59.4472 31.3648C56.157 30.5573 46.4282 28.1109 44.6766 23.8595C42.2148 17.8268 37.528 16.093 33.2435 15.1904C31.0895 14.7392 28.9117 12.8153 27.1364 9.77522C26.1422 8.06515 25.3611 6.14132 24.8877 4.28875C24.1065 6.30758 23.3017 8.68267 22.5206 11.0103L22.4732 11.129C21.3607 14.7629 20.2008 18.183 19.3487 19.6556C19.254 19.8219 10.046 35.9488 8.53107 53.1207C14.0464 59.5809 22.0708 63.2861 30.4977 63.2861C36.8178 63.2861 42.8066 61.291 47.8485 57.4909C52.7247 53.8332 56.3937 48.608 58.169 42.789C58.2874 42.3853 58.7135 42.1715 59.1159 42.2903C59.1159 42.2903 59.1395 42.2903 59.1395 42.314C59.5183 42.4565 59.7076 42.8603 59.5893 43.2403ZM36.3207 5.78506C45.5287 7.68513 53.2455 13.9554 57.0328 22.6007C57.1512 22.8857 57.4115 23.052 57.7193 23.052C57.814 23.052 57.9323 23.0282 58.027 22.9807C58.4057 22.8145 58.5714 22.3632 58.4057 21.9832C54.429 12.9103 46.3099 6.28383 36.6521 4.3125C36.4628 4.265 36.2497 4.3125 36.084 4.43125C35.9183 4.55001 35.8 4.71626 35.7526 4.90627C35.658 5.28629 35.9183 5.69005 36.3207 5.78506Z"
                        fill="url(#paint0_linear_1203_4097)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1203_4097"
                          x1="0.0426478"
                          y1="32.8025"
                          x2="61.0308"
                          y2="32.8025"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#8CD6D6" />
                          <stop offset="1" stopColor="#FF9F80" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <SubHeading
                    heading={"Puppies Schedule"}
                    subclass={
                      "text-2xl sm:text-3xl md:text-[40px] xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB]"
                    }
                  />
                </div>
                <div className="mt-[37px]">
                  <SubHeading
                    heading={"8 weeks :"}
                    subclass={
                      "!text-2xl !text-[#D7D9DD] !leading-[150%] !Roboto-font !m-0"
                    }
                  />
                  <Para
                    para={
                      "Distemper vaccine, Leptospirosis, Bordetella vaccine, Lyme vaccine & Canine Influenza Virus vaccine"
                    }
                    paraclass={
                      "text-xl text-[#D7D9DD] max-w-[400px] leading-[150%] !m-0"
                    }
                  />
                  <SubHeading
                    heading={"12 weeks :"}
                    subclass={
                      "!text-2xl !text-[#D7D9DD] !leading-[150%] !Roboto-font !m-0"
                    }
                  />
                  <Para
                    para={
                      "Distemper vaccine, Leptospirosis vaccine, Rabies vaccine, Lyme vaccine & Canine Influenza Virus vaccine"
                    }
                    paraclass={
                      "!text-xl !text-[#D7D9DD] !max-w-[400px] !leading-[150%] !m-0"
                    }
                  />
                  <SubHeading
                    heading={"Booster :"}
                    subclass={
                      "!text-2xl !text-[#D7D9DD] !leading-[150%] !Roboto-font !m-0"
                    }
                  />
                  <Para
                    para={"Once a year"}
                    paraclass={"!text-xl !text-[#D7D9DD] !leading-[150%] !m-0"}
                  />
                </div>
              </div>
              <div className="bg-[#494336] pt-[34px] pb-[57px] lg:w-[49%] md:w-full h-auto pl-[48px] pr-[20px] justify-between flex-col">
                <div className="flex gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="70"
                      viewBox="0 0 62 70"
                      fill="none">
                      <path
                        d="M60.7622 35.2836L60.7376 35.1849C60.6883 35.0121 60.5897 34.8641 60.4666 34.7654C60.2941 34.642 60.097 34.5926 59.8999 34.6173C59.7028 34.642 59.5057 34.7407 59.3826 34.9134C59.2594 35.0862 59.2101 35.2836 59.2347 35.481C59.4072 36.7148 59.4811 37.998 59.4811 39.2565C59.4811 48.4362 55.0958 57.0977 47.7048 62.5759C48.0251 61.5642 48.2961 60.6018 48.5179 59.6641C50.4641 51.274 48.6657 45.0802 47.3353 40.5397C46.5962 37.998 46.0049 35.9745 46.3991 34.5679C46.6455 33.6796 47.2368 33.6056 48.9367 33.4575C51.0308 33.2848 53.9133 33.038 56.845 29.9781C59.6782 27.0416 60.097 22.2296 60.1463 21.6867C60.1709 21.366 59.9985 21.0945 59.7275 20.9465C59.7028 20.9465 57.0667 19.5646 55.3175 18.7502C53.9625 18.1086 53.5683 17.0475 53.1002 15.8137C52.5336 14.3578 51.9177 12.6798 49.7004 11.446C46.7933 9.8173 44.9456 9.44715 43.5659 9.1757C43.3195 9.12635 43.0732 9.077 42.8268 9.02765C42.6051 8.70685 42.137 6.95481 42.2109 2.11819C42.2109 1.67401 41.9892 1.25451 41.595 1.00774C41.2008 0.760978 40.7327 0.736301 40.3385 0.958391C35.3866 3.45073 32.4795 9.71859 31.9128 11.1005C28.0449 13.9383 26.2465 18.3554 23.7828 24.4505C22.9205 26.5727 21.9351 28.991 20.7525 31.5821C18.8309 35.8018 15.3817 37.6525 11.3906 39.7994C8.58207 41.3047 5.40396 43.032 2.34904 45.8205C1.8563 43.6983 1.60994 41.5021 1.60994 39.3059C1.60994 32.3224 4.12286 25.5857 8.70525 20.3049C13.2384 15.0981 19.4468 11.668 26.2465 10.6563C26.6653 10.5823 26.9609 10.1874 26.9116 9.76794C26.8377 9.34844 26.4435 9.05232 26.0247 9.10168C18.8801 10.1628 12.3022 13.7902 7.54734 19.2931C2.69395 24.796 0.0332031 31.9029 0.0332031 39.2565C0.0332031 56.1106 13.7065 69.8062 30.5332 69.8062C47.3599 69.8062 61.0332 56.1106 61.0332 39.2565C61.0332 37.9486 60.9347 36.5914 60.7622 35.2836ZM42.3341 10.5082C42.6051 10.5823 42.9007 10.6316 43.2456 10.7057C44.5021 10.9524 46.202 11.2979 48.912 12.8278C50.6366 13.7902 51.1047 15.0487 51.6221 16.406C52.1641 17.8125 52.7061 19.2684 54.6277 20.1815C55.761 20.7244 57.3377 21.514 58.5203 22.1309C58.3725 23.3401 57.7812 26.7948 55.7117 28.917C53.1742 31.5327 50.7351 31.7548 48.7889 31.9275C47.1382 32.0756 45.4383 32.2237 44.8963 34.1978C44.3789 36.0485 45.0195 38.2448 45.8325 41.0332C47.0889 45.401 48.8381 51.3727 46.9904 59.3679C46.6208 60.9226 46.1527 62.5019 45.5368 64.0812C41.0284 66.845 35.8301 68.3009 30.5332 68.3009C24.1523 68.3009 18.1164 66.2527 13.0413 62.4032C8.16325 58.677 4.51705 53.4209 2.79249 47.5725C5.84742 44.4879 9.02553 42.7853 12.1051 41.1319C16.1701 38.9357 20.0134 36.8875 22.1568 32.199C23.3393 29.6079 24.3248 27.1896 25.1871 25.0428L25.2117 24.9934C27.6261 19.071 29.3753 14.7773 32.9969 12.2109C33.12 12.1122 33.2186 12.0135 33.2679 11.8655C33.2925 11.7914 35.9779 5.20277 40.6342 2.56237C40.5603 10.0394 41.7675 10.3602 42.3341 10.5082Z"
                        fill="url(#paint0_linear_1203_4098)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1203_4098"
                          x1="0.0332031"
                          y1="35.3002"
                          x2="61.0232"
                          y2="35.3002"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#8CD6D6" />
                          <stop offset="1" stopColor="#FF9F80" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <SubHeading
                    heading={"Kitten Schedule"}
                    subclass={
                      "text-2xl sm:text-3xl md:text-[40px] xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB]"
                    }
                  />
                </div>
                <div className="mt-[37px]">
                  <SubHeading
                    heading={"8 weeks :"}
                    subclass={"!text-2xl !text-[#D7D9DD] !leading-[150%] !m-0"}
                  />
                  <Para
                    para={"FVRCP vaccine and Leukemia vaccines"}
                    paraclass={"!text-xl !text-[#D7D9DD] !leading-[150%] !m-0"}
                  />
                  <SubHeading
                    heading={"12 weeks :"}
                    subclass={
                      "!text-2xl !text-[#D7D9DD] !mt-[20px] !leading-[150%] !m-0"
                    }
                  />
                  <Para
                    para={"FVRCP vaccine, Leukemia vaccine& Rabies vaccine"}
                    paraclass={
                      "!text-xl !text-[#D7D9DD] !max-w-[400px] !leading-[150%] !m-0"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-[10px] mt-[30px]">
              <div className="bg-[#494336] pt-[34px] pb-[57px]  lg:w-[49%] md:w-full h-auto pl-[48px] pr-[20px] justify-between flex-col">
                <div className="flex gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="65"
                      viewBox="0 0 62 65"
                      fill="none">
                      <path
                        d="M59.5893 43.2403C57.7193 49.3443 53.8609 54.8308 48.7243 58.7022C43.422 62.6923 37.1019 64.8062 30.474 64.8062C21.5264 64.8062 13.0522 60.8635 7.25284 53.9757C7.18183 53.9282 7.13448 53.857 7.08714 53.7857C2.54232 48.2992 0.0332031 41.364 0.0332031 34.2387C0.0332031 24.4295 4.76739 15.1667 12.6972 9.4427C12.8628 9.32395 13.0522 9.27645 13.2653 9.3002C13.4546 9.32395 13.644 9.4427 13.7623 9.60896C13.8807 9.77522 13.928 9.96522 13.9044 10.179C13.8807 10.369 13.7623 10.559 13.5966 10.6778C6.04562 16.1405 1.54814 24.9521 1.54814 34.2624C1.54814 40.5089 3.48916 46.4467 7.18183 51.4581C9.09917 34.7137 17.668 19.5606 18.0468 18.9193C18.8279 17.5655 19.9641 14.2166 21.1477 10.6778C22.3076 7.23386 23.4911 3.69497 24.6036 1.24863C24.7457 0.939865 25.0771 0.749857 25.4321 0.82111C25.7635 0.892363 26.0239 1.17737 26.0476 1.53364C26.1422 3.67122 27.0654 6.52134 28.462 8.94393C30.0006 11.6278 31.8943 13.3854 33.6223 13.7654C38.0014 14.6917 43.3747 16.5917 46.1205 23.337C47.091 25.6883 51.7305 27.9209 59.9207 29.9635L59.968 29.9873C60.181 30.0348 60.3467 30.0823 60.4651 30.106C60.7965 30.201 61.0332 30.486 61.0332 30.8423C61.0332 32.9799 59.7076 37.1125 56.0623 39.6539C52.2039 42.3615 46.3335 42.314 37.5043 41.3402C37.1492 41.2927 37.0545 41.4352 37.0072 41.4827C36.7705 41.7915 36.6521 42.884 37.6226 44.9979C37.8594 45.4966 38.0724 45.9479 38.2854 46.3517L38.3328 46.4467C39.2796 48.323 39.9424 49.653 40.3448 54.237C40.3685 54.6645 40.0608 55.0208 39.6583 55.0445H39.5873C39.2086 55.0445 38.8772 54.7357 38.8299 54.3557C38.4748 50.0806 37.883 48.893 36.9835 47.1117C36.7705 46.7079 36.5101 46.1854 36.2497 45.5916C35.2319 43.359 35.0662 41.554 35.7763 40.5564C36.1787 39.9864 36.8652 39.7014 37.6463 39.7964C46.1205 40.7227 51.7069 40.7939 55.1628 38.3713C58.1453 36.2813 59.2579 33.0749 59.4472 31.3648C56.157 30.5573 46.4282 28.1109 44.6766 23.8595C42.2148 17.8268 37.528 16.093 33.2435 15.1904C31.0895 14.7392 28.9117 12.8153 27.1364 9.77522C26.1422 8.06515 25.3611 6.14132 24.8877 4.28875C24.1065 6.30758 23.3017 8.68267 22.5206 11.0103L22.4732 11.129C21.3607 14.7629 20.2008 18.183 19.3487 19.6556C19.254 19.8219 10.046 35.9488 8.53107 53.1207C14.0464 59.5809 22.0708 63.2861 30.4977 63.2861C36.8178 63.2861 42.8066 61.291 47.8485 57.4909C52.7247 53.8332 56.3937 48.608 58.169 42.789C58.2874 42.3853 58.7135 42.1715 59.1159 42.2903C59.1159 42.2903 59.1395 42.2903 59.1395 42.314C59.5183 42.4565 59.7076 42.8603 59.5893 43.2403ZM36.3207 5.78506C45.5287 7.68513 53.2455 13.9554 57.0328 22.6007C57.1512 22.8857 57.4115 23.052 57.7193 23.052C57.814 23.052 57.9323 23.0282 58.027 22.9807C58.4057 22.8145 58.5714 22.3632 58.4057 21.9832C54.429 12.9103 46.3099 6.28383 36.6521 4.3125C36.4628 4.265 36.2497 4.3125 36.084 4.43125C35.9183 4.55001 35.8 4.71626 35.7526 4.90627C35.658 5.28629 35.9183 5.69005 36.3207 5.78506Z"
                        fill="url(#paint0_linear_1203_4097)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1203_4097"
                          x1="0.0426478"
                          y1="32.8025"
                          x2="61.0308"
                          y2="32.8025"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#8CD6D6" />
                          <stop offset="1" stopColor="#FF9F80" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <SubHeading
                    heading={"Adult Dog Schedule"}
                    subclass={
                      "!text-2xl sm:!text-3xl md:!text-[40px] xl:!text-5xl !text-transparent !bg-clip-text !bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] !max-w-[345px]"
                    }
                  />
                </div>
                <div className="mt-[37px]">
                  <Para
                    para={
                      "Rabies: One year after the initial puppy vaccine, then every three years"
                    }
                    paraclass={
                      "!text-[#D7D9DD] !text-[22px] !m-0 !leading-[150%] !max-w-[400px]"
                    }
                  />
                  <Para
                    para={"Distemper: Every three years"}
                    paraclass={"text-[#D7D9DD] text-[22px] !m-0 leading-[150%]"}
                  />
                  <Para
                    para={"Bordetella: Every year"}
                    paraclass={"text-[#D7D9DD] text-[22px] !m-0 leading-[150%]"}
                  />
                  <Para
                    para={"Leptospirosis: Every year"}
                    paraclass={"text-[#D7D9DD] text-[22px] !m-0 leading-[150%]"}
                  />
                  <Para
                    para={"Canine influenza: Every yea"}
                    paraclass={"text-[#D7D9DD] text-[22px] !m-0 leading-[150%]"}
                  />
                  <Para
                    para={"Lyme disease: Every year"}
                    paraclass={"text-[#D7D9DD] text-[22px] !m-0 leading-[150%]"}
                  />
                </div>
              </div>
              <div className="bg-[#494336] pt-[34px] pb-[57px] lg:w-[49%] md:w-full  h-auto pl-[48px] pr-[20px] justify-between flex-col">
                <div className="flex gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="70"
                      viewBox="0 0 62 70"
                      fill="none">
                      <path
                        d="M60.7622 35.2836L60.7376 35.1849C60.6883 35.0121 60.5897 34.8641 60.4666 34.7654C60.2941 34.642 60.097 34.5926 59.8999 34.6173C59.7028 34.642 59.5057 34.7407 59.3826 34.9134C59.2594 35.0862 59.2101 35.2836 59.2347 35.481C59.4072 36.7148 59.4811 37.998 59.4811 39.2565C59.4811 48.4362 55.0958 57.0977 47.7048 62.5759C48.0251 61.5642 48.2961 60.6018 48.5179 59.6641C50.4641 51.274 48.6657 45.0802 47.3353 40.5397C46.5962 37.998 46.0049 35.9745 46.3991 34.5679C46.6455 33.6796 47.2368 33.6056 48.9367 33.4575C51.0308 33.2848 53.9133 33.038 56.845 29.9781C59.6782 27.0416 60.097 22.2296 60.1463 21.6867C60.1709 21.366 59.9985 21.0945 59.7275 20.9465C59.7028 20.9465 57.0667 19.5646 55.3175 18.7502C53.9625 18.1086 53.5683 17.0475 53.1002 15.8137C52.5336 14.3578 51.9177 12.6798 49.7004 11.446C46.7933 9.8173 44.9456 9.44715 43.5659 9.1757C43.3195 9.12635 43.0732 9.077 42.8268 9.02765C42.6051 8.70685 42.137 6.95481 42.2109 2.11819C42.2109 1.67401 41.9892 1.25451 41.595 1.00774C41.2008 0.760978 40.7327 0.736301 40.3385 0.958391C35.3866 3.45073 32.4795 9.71859 31.9128 11.1005C28.0449 13.9383 26.2465 18.3554 23.7828 24.4505C22.9205 26.5727 21.9351 28.991 20.7525 31.5821C18.8309 35.8018 15.3817 37.6525 11.3906 39.7994C8.58207 41.3047 5.40396 43.032 2.34904 45.8205C1.8563 43.6983 1.60994 41.5021 1.60994 39.3059C1.60994 32.3224 4.12286 25.5857 8.70525 20.3049C13.2384 15.0981 19.4468 11.668 26.2465 10.6563C26.6653 10.5823 26.9609 10.1874 26.9116 9.76794C26.8377 9.34844 26.4435 9.05232 26.0247 9.10168C18.8801 10.1628 12.3022 13.7902 7.54734 19.2931C2.69395 24.796 0.0332031 31.9029 0.0332031 39.2565C0.0332031 56.1106 13.7065 69.8062 30.5332 69.8062C47.3599 69.8062 61.0332 56.1106 61.0332 39.2565C61.0332 37.9486 60.9347 36.5914 60.7622 35.2836ZM42.3341 10.5082C42.6051 10.5823 42.9007 10.6316 43.2456 10.7057C44.5021 10.9524 46.202 11.2979 48.912 12.8278C50.6366 13.7902 51.1047 15.0487 51.6221 16.406C52.1641 17.8125 52.7061 19.2684 54.6277 20.1815C55.761 20.7244 57.3377 21.514 58.5203 22.1309C58.3725 23.3401 57.7812 26.7948 55.7117 28.917C53.1742 31.5327 50.7351 31.7548 48.7889 31.9275C47.1382 32.0756 45.4383 32.2237 44.8963 34.1978C44.3789 36.0485 45.0195 38.2448 45.8325 41.0332C47.0889 45.401 48.8381 51.3727 46.9904 59.3679C46.6208 60.9226 46.1527 62.5019 45.5368 64.0812C41.0284 66.845 35.8301 68.3009 30.5332 68.3009C24.1523 68.3009 18.1164 66.2527 13.0413 62.4032C8.16325 58.677 4.51705 53.4209 2.79249 47.5725C5.84742 44.4879 9.02553 42.7853 12.1051 41.1319C16.1701 38.9357 20.0134 36.8875 22.1568 32.199C23.3393 29.6079 24.3248 27.1896 25.1871 25.0428L25.2117 24.9934C27.6261 19.071 29.3753 14.7773 32.9969 12.2109C33.12 12.1122 33.2186 12.0135 33.2679 11.8655C33.2925 11.7914 35.9779 5.20277 40.6342 2.56237C40.5603 10.0394 41.7675 10.3602 42.3341 10.5082Z"
                        fill="url(#paint0_linear_1203_4100)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1203_4100"
                          x1="0.0332031"
                          y1="35.3002"
                          x2="61.0232"
                          y2="35.3002"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#8CD6D6" />
                          <stop offset="1" stopColor="#FF9F80" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <SubHeading
                    heading={"Adult Cat Schedule"}
                    subclass={
                      "text-2xl sm:text-3xl md:text-[40px] xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] max-w-[302px]"
                    }
                  />
                </div>
                <div className="mt-[37px]">
                  <Para
                    para={"FVRCP: Every year"}
                    paraclass={
                      "!text-[#D7D9DD] !m-0 !text-[22px] !leading-[127%]"
                    }
                  />
                  <Para
                    para={"Rabies: Every three years"}
                    paraclass={
                      "!text-[#D7D9DD] !text-[22px] !leading-[127%] !mt-[10px]"
                    }
                  />
                  <Para
                    para={"Feline Leukemia Virus: Every year"}
                    paraclass={
                      "text-[#D7D9DD] text-[22px] leading-[127%] !mt-[10px]"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhenToVaccinate;
