import React, { FC } from "react";
import CfpSection from "@views/Cfp/CfpSection";
import data2024 from "@data/2024.json";
import { data } from "./CfpData";

export const CfpSectionWrapper: FC = () => {
    return <CfpSection conferenceConfig={data2024} cfpData={data} />;
};

export default CfpSectionWrapper;
