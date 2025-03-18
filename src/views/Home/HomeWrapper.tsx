import {BIG_BREAKPOINT} from "../../constants/BreakPoints";
import React, {FC, useState} from "react";
import Faqs from "./components/Faqs/Faqs";
import Home from "./components/Home/Home";
import SpeakersCarousel from "./components/SpeakersCarousel/SpeakersCarousel";
import Sponsors from "./components/Sponsors/Sponsors";
import styled from "styled-components";

import {useLocation} from "react-router";
import {useEventEdition} from "./UseEventEdition";
import {Edition} from "../../types/types";
import { useDocumentTitleUpdater } from "../../services/useDocumentTitleUpdate";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

const HomeWrapper: FC<React.PropsWithChildren<unknown>> = () => {
  const { hash } = useLocation();
  const [edition, setEdition] = useState<Edition>();

  useEventEdition(setEdition);
  React.useEffect(() => {
    if (hash != null && hash !== "") {
      const scroll = document.getElementById(hash.substring(1));
      scroll?.scrollIntoView();
    }
  }, [hash, edition]);

  useDocumentTitleUpdater("Home", edition?.edition ?? "2025");

  return (
    <StyledContainer id="home-wrapper">
      <Home />
      <Faqs />
      {edition?.carrousel.enabled && <SpeakersCarousel/>}
      <Sponsors />
    </StyledContainer>
  );
};

export default HomeWrapper;