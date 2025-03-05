import Image from "next/image";
import Link from "next/link";
import React from "react";
import LearnMore from "./LearnMore";
import { navLink } from "../helper/Helper";
import { NavLogo, NavLogoIcon } from "../helper/Icon";

function Navbar() {
  return (
    <>
      <div className="bg-[#494336] fixed left-0 z-[11] right-0 top-0">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="justify-between items-center flex  pb-[18px] pt-[15px] sm:pt-[11px]">
            <div>
              <Link href={"/"} className="max-w-[90px] sm:max-w-[114px]">
                <NavLogoIcon />
              </Link>
            </div>
            <div>
              <ul className="list-none items-center justify-between lg:flex gap-10 hidden">
                {navLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-[#D7D9DD] Roboto-font text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300  font-normal tracking-[1.4px]">
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <LearnMore learnMore={"BOOK NOW"} path={"/"} />
                </li>
              </ul>
            </div>
            <div className="lg:hidden">
              <Image
                id="menu-bar"
                className="cursor-pointer"
                src={"/assest/img/svg/menu-bar.svg"}
                width={48}
                height={25}
                alt={"menubar"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
