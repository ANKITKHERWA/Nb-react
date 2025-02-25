import Link from "next/link";
import React from "react";

function LearnMore({ learnMore, path, className }) {
  return (
    <>
      <Link
        href={path}
        className={`text-lg font-medium rounded-[27px] text-[#494336]  Roboto-font py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] ${className} `}>
        {learnMore}
      </Link>
    </>
  );
}

export default LearnMore;
