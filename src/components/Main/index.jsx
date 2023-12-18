import React from "react";
import { Banner } from "../Banner";
import { About } from "../About";
import { InnovativeTeams } from "../InnovativeTeams";
import { SecureNetwork } from "../SecureNetwork";
import { Pricing } from "../Pricing";
import { ZeroTier } from "../ZeroTier";
import { CommunityEdition } from "../CommunityEdition";
import { Newsletter } from "../Newsletter";
import { LatestReleases } from "../LatestReleases";

export const MainSection = () => {
  return (
    <div>
      <Banner />
      <LatestReleases />
      <About />
      <InnovativeTeams />
      <SecureNetwork />
      <Pricing />
      <ZeroTier />
      <CommunityEdition />
      <Newsletter />
    </div>
  );
};
