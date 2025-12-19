import React from "react";

import data2025 from "@data/2025.json";
import { data2025 as cfpData2025 } from "@views/Cfp/CfpData2025";
import CfpSection from "@views/Cfp/CfpSection";

import type { FC } from "react";

export const CfpSectionWrapper2025: FC = () => {
  return <CfpSection conferenceConfig={data2025} cfpData={cfpData2025} />;
};

export default CfpSectionWrapper2025;
