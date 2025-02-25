import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PreventCard() {
  return (
    <>
    
                    <div
                        className="bg-[#494336] flex flex-col justify-start w-[23%] sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 h-[339px] sm:h-[419px]">
                        <div className="max-w-[93px]">
                            <Image className="w-full" src={"/assest/img/svg/injection.svg"} width={93} height={74} alt="prevent-care"/>
                        </div>
                        <div className="text-[#D7D9DD]">
                            <h4 className="text-2xl sm:text-3xl lg:text-4xl pt-6 sm:pt-7 md:pt-10 lg:pt-[50px]">
                                Preventive Care
                            </h4>
                            <Link href={"/"}
                                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                                Animal Health Check
                            </Link>
                            <Link href={"/"}
                                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                                Vaccinations
                            </Link>
                            <Link href={"/"}
                                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                                Dental
                            </Link>
                        </div>
                    </div>
               
    
    </>
  )
}

export default PreventCard