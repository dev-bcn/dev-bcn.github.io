import React, { FC } from "react";
import Speakers from "./Speakers";
import webData from "@data/2024.json";

export const Speakers2024: FC<React.PropsWithChildren<unknown>> = () => {
  return <Speakers year="2024" webData={webData} />;
};
