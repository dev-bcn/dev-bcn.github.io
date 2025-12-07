import React, { FC } from "react";
import CfpSection from "@views/Cfp/CfpSection";
import data2023 from "@data/2023.json";
import { data } from "./CfpData";

export const CfpSectionWrapper: FC = () => {
    return <CfpSection conferenceConfig={data2023} cfpData={data} />;
};

export default CfpSectionWrapper;
