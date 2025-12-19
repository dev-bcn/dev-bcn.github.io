import React from "react";

import data2025 from "@data/2025.json";
import Speakers from "@views/Speakers/Speakers";

import type { FC } from "react";

export const SpeakersWrapper2025: FC = () => {
  return <Speakers conferenceConfig={data2025} />;
};

export default SpeakersWrapper2025;
