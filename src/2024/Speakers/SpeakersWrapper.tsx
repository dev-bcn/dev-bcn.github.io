import React, { FC } from "react";
import Speakers from "@views/Speakers/Speakers";
import data2024 from "@data/2024.json";

export const SpeakersWrapper: FC = () => {
    return <Speakers conferenceConfig={data2024} />;
};

export default SpeakersWrapper;
