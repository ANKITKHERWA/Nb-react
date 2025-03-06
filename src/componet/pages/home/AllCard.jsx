import AdditionalsCard from "@/componet/pages/home/AdditionalsCard";
import React from "react";
import CardSurgery from "./CardSurgery";
import CardSickpatientCard from "./SickPatientCard";
import PreventiveCard from "./PreventiveCard";

function AllCard() {
  return (
    <>
      <div class="!pb-[90px] sm:!pb-30 lg:!pb-[140px] max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto bg-white">
        <div class="justify-center flex sm:px-5 pl-28 xl;gap-4 lg:gap-10  ">
          <PreventiveCard />
          <CardSickpatientCard />
          <CardSurgery />
          <AdditionalsCard />
        </div>
      </div>
    </>
  );
}

export default AllCard;
