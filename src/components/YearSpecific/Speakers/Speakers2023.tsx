import React, { FC } from "react";
import Speakers from "./Speakers";
import webData from "../../../data/2023.json";

const Speakers2023: FC<React.PropsWithChildren<unknown>> = () => {
  return <Speakers year="2023" webData={webData} />;
};

export default Speakers2023;