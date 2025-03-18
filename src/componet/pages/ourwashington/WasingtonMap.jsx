import { downtownMap } from "@/componet/helper/Helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WasingtonMap() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="absolute bottom-0 right-0 left-0 mx-auto  -z-5">
          <Image
            src={"/assest/img/png/wasington-nbl.png"}
            width={"1440"}
            height={"520"}
            className="w-full"
          />
        </div>
        <div className="max-w-[1360px] md:px-[40px] mx-auto pt-15 md:pt-20 pb-[120px] md:pb-[140px] relative z-[1]">
          <div className="flex items-center max-md:flex-wrap-reverse overflow-hidden">
            <div className="max-md:px-8 w-full md:w-[39.17%] flex flex-col gap-[38.5px] sm:gap-8 xl:ml-[100px] max-md:mt-15 md:mt-[0px] mt-[60px]">
              {downtownMap.map((item, index) => (
                <div key={index}>
                  <div className="text-[#494336] text-2xl sm:text-[26px] md:text-3xl lg:text-4xl mb-10">
                    {item.heading}
                  </div>
                  <div className="text-[#494336] text-base sm:text-lg md:text-xl lg:text-2xl Roboto-font max-sm:mb-1  max-w-[400px]">
                    {item.para}
                  </div>
                  <div>
                    <Link
                      href={item.path}
                      className="text-[#494336] text-base sm:text-lg md:text-xl lg:text-2xl Roboto-font max-sm:mb-1 ">
                      {item.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-[60.83%] mt-[60px] md:mt-[0px]">
              <div className="mapouter relative text-right w-full h-[318px] sm:h-[500px] md:h-[570px]">
                <div className="gmap_canvas overflow-hidden bg-none w-full h-[318px] sm:h-[500px] md:h-[570px]">
                  <iframe
                    className="gmap_iframe h-[318px] sm:h-[500px] md:!h-[570px]"
                    width="100%"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=782&amp;height=570&amp;hl=en&amp;q= 2468 18th Street, SW�Washington DC, 20003&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                  <Link href="https://sprunkiplay.com">Sprunki</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WasingtonMap;
