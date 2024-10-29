import {BIG_BREAKPOINT} from "../../constants/BreakPoints";
import React, {FC, useState} from "react";
import Faqs from "./components/Faqs/Faqs";
import Home from "./components/Home/Home";
import SpeakersCarousel from "./components/SpeakersCarousel/SpeakersCarousel";
import Sponsors from "./components/Sponsors/Sponsors";
import styled from "styled-components";

import {useLocation} from "react-router-dom";
import {useEventEdition} from "./UseEventEdition";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

export interface Edition {
  actionButtons: boolean;
  edition: string;
  startDay: Date;
  endDay: Date;
  trackNumber: string;
  title: string;
  tracks: string;
  email: string;
  twitter: string;
  youtube: string;
  facebook: string;
  github: string;
  linkedin: string;
  showInfoButtons: boolean;
  tickets: Cfp;
  cfp: Cfp;
  carrousel: Carrousel;
  schedule: Carrousel;
  jobOffers: Carrousel;
  diversity: boolean;
}

export interface Carrousel {
  enabled: boolean;
}

export interface Cfp {
  startDay: Date;
  endDay: Date;
}

export const HomeWrapper: FC<React.PropsWithChildren<unknown>> = () => {
  const { hash } = useLocation();
  const [edition, setEdition] = useState<Edition>();

  useEventEdition(setEdition);
  React.useEffect(() => {
    document.title = `Home - ${edition?.title} - ${edition?.edition}`;
    if (hash != null && hash !== "") {
      const scroll = document.getElementById(hash.substring(1));
      scroll?.scrollIntoView();
    }
  }, [hash, edition]);

  return (
    <StyledContainer id="home-wrapper">
      <Home />
      <Faqs />
      {edition?.carrousel.enabled && <SpeakersCarousel/>}
      <Sponsors />
    </StyledContainer>
  );
};
