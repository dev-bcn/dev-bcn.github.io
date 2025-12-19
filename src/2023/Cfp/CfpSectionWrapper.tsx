import React from "react";

import data2023 from "@data/2023.json";
import CfpSection from "@views/Cfp/CfpSection";

import { data } from "./CfpData";

import type { FC } from "react";

export const CfpSectionWrapper: FC = () => {
  return <CfpSection conferenceConfig={data2023} cfpData={data} />;
};

export default CfpSectionWrapper;
