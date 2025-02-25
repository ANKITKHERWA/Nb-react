import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SurgeryCard() {
  return (
    <>
      
                    <div
                        className="bg-[#494336] flex flex-col justify-start w-[23%] sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 h-[339px] sm:h-[419px]">
                        <div className="max-w-[93px]">
                            <Image className="w-full" src={"/assest/img/svg/Surgery-icon-img.svg"} width={67} height={67} alt="surgery"/>
                        </div>
                        <div className="text-[#D7D9DD]">
                            <h4
                                className="text-2xl sm:text-3xl block whitespace-nowrap lg:text-4xl pt-3 sm:pt-7 md:pt-10 lg:pt-[33px]">
                                Surgery
                            </h4>
                            <Link href={"/"}
                                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                                Surgeries
                            </Link>
                            <Link href={"/"}
                                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                                Spay & Neuter
                            </Link>
                        </div>
                    </div>
               
    </>
  )
}

export default SurgeryCard