import React from "react";

import data2023 from "@data/2023.json";
import Speakers from "@views/Speakers/Speakers";

import type { FC } from "react";

export const SpeakersWrapper: FC = () => {
  return <Speakers conferenceConfig={data2023} />;
};

export default SpeakersWrapper;
