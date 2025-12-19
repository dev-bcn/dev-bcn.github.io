import React from "react";

import data2024 from "@data/2024.json";
import CfpSection from "@views/Cfp/CfpSection";

import { data } from "./CfpData";

import type { FC } from "react";

export const CfpSectionWrapper: FC = () => {
  return <CfpSection conferenceConfig={data2024} cfpData={data} />;
};

export default CfpSectionWrapper;
