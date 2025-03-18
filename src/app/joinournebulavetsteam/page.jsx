import JoinOurTeam from "@/componet/pages/joinournebulavetsteam/JoinOurTeam";
import TeamAco from "@/componet/pages/joinournebulavetsteam/TeamAco";
import TeamHero from "@/componet/pages/joinournebulavetsteam/TeamHero";
import TeamSliderimg from "@/componet/pages/joinournebulavetsteam/TeamSliderimg";
import React from "react";

function page() {
  return (
    <>
      <TeamHero />
      <TeamSliderimg />
      <TeamAco />
      <JoinOurTeam />
    </>
  );
}

export default page;
