import React from "react";

import data2024 from "@data/2024.json";
import Speakers from "@views/Speakers/Speakers";

import type { FC } from "react";

export const SpeakersWrapper: FC = () => {
  return <Speakers conferenceConfig={data2024} />;
};

export default SpeakersWrapper;
