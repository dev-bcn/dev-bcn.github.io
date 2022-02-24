import { FC } from "react";
import Home from "./components/Home/Home";
import SpeakersCarousel from "./components/SpeakersCarousel/SpeakersCarousel";
import Faqs from "./components/Faqs/Faqs";

export const HomeWrapper: FC = () => {
  return (
    <>
      <Home />
      <Faqs />
      <SpeakersCarousel />
    </>
  );
};
