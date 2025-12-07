import React, { FC } from "react";
import Speakers from "@views/Speakers/Speakers";
import data2023 from "@data/2023.json";

export const SpeakersWrapper: FC = () => {
    return <Speakers conferenceConfig={data2023} />;
};

export default SpeakersWrapper;
