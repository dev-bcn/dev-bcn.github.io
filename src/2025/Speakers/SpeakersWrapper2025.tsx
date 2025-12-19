import React, { FC } from "react";
import Speakers from "@views/Speakers/Speakers";
import data2025 from "@data/2025.json";

export const SpeakersWrapper2025: FC = () => {
  return <Speakers conferenceConfig={data2025} />;
};

export default SpeakersWrapper2025;
