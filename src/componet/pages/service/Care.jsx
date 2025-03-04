import Link from "next/link";
import React from "react";

function Care() {
  return (
    <>
      <div className="bg-[#494336]  md:py-20  py-10">
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div>
            <ul className="lg:flex flex-wrp justify-between  gap-3 list-none">
              <li>
                <Link
                  href={"/"}
                  className="text-[#D7D9DD] text-2xl sm:text-3xl xl:text-4xl opacity-40 hover:text-white hover:opacity-100 duration-300">
                  Preventive Care
                </Link>
              </li>
              <li className="lg:mt-0 mt-[20px]">
                <Link
                  href={"/"}
                  className="text-[#D7D9DD] text-2xl sm:text-3xl xl:text-4xl opacity-40 hover:text-white hover:opacity-100 duration-300">
                  Sick Patient Care
                </Link>
              </li>
              <li className="lg:mt-0 mt-[20px]">
                <Link
                  href={"/"}
                  className="text-[#D7D9DD] text-2xl sm:text-3xl xl:text-4xl opacity-40 hover:text-white hover:opacity-100 duration-300">
                  Surgery
                </Link>
              </li>
              <li className="lg:mt-0 mt-[20px]">
                <Link
                  href={"/"}
                  className="text-[#D7D9DD] text-2xl sm:text-3xl xl:text-4xl opacity-40 hover:text-white hover:opacity-100 duration-300">
                  Additional Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Care;
