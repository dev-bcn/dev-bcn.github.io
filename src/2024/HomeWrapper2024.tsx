import React, { FC, useState } from "react";
import styled from "styled-components";

import { useLocation } from "react-router";
import { BIG_BREAKPOINT } from "../constants/BreakPoints";

import { useEventEdition } from "../views/Home/UseEventEdition";
import Faqs from "../views/Home/components/Faqs/Faqs";

import Home from "./Home/Home";
import SpeakersCarousel from "./SpeakersCarousel/SpeakersCarousel";
import Sponsors from "./Sponsors/Sponsors";

import { Edition } from "../types/types";
import { useDocumentTitleUpdater } from "../services/useDocumentTitleUpdate";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

export const HomeWrapper2024: FC<React.PropsWithChildren<unknown>> = () => {
  const { hash } = useLocation();
  const [edition, setEdition] = useState<Edition>();

  useEventEdition(setEdition);
  React.useEffect(() => {
    if (hash != null && hash !== "") {
      const scroll = document.getElementById(hash.substring(1));
      scroll?.scrollIntoView();
    }
  }, [hash, edition]);

  useDocumentTitleUpdater("Home", edition?.edition ?? "2024");

  return (
    <StyledContainer id="home-wrapper">
      <Home />
      <Faqs />
      <SpeakersCarousel />
      <Sponsors />
    </StyledContainer>
  );
};
