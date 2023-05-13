import React, { FC, useEffect } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { Color } from "../../styles/colors";
import {
  StyledMarginBottom,
  StyledSpeakersSection,
  StyledTitleContainer,
  StyledTitleIcon,
  StyledWaveContainer,
} from "../Talks/Talks.style";
import LessThanDarkBlueIcon from "../../assets/images/LessThanDarkBlueIcon.svg";
import TitleSection from "../../components/SectionTitle/TitleSection";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import { useFetchTalks } from "../Talks/UseFetchTalks";
import * as Sentry from "@sentry/react";
import { TalkCard } from "../Talks/components/TalkCard";
import conferenceData from "../../data/2023.json";
import styled from "styled-components";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

const StyledSection = styled.section`
   {
    display: flex;
    padding: 0 10rem;
    flex-wrap: wrap;
  }

  @media (max-width: ${BIG_BREAKPOINT}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`;
const Workshops: FC = () => {
  const { isLoading, data, error } = useFetchTalks();
  useEffect(() => {
    document.title = `Workshops - DevBcn - ${conferenceData.edition}`;
  }, []);

  //region workshops
  const categoryId = 149213;
  const categoryItemIds = new Set([categoryId]);

  const workshops = data
    ?.flatMap((group) => group.sessions)
    .filter((session) =>
      session.categories.some((category) =>
        category.categoryItems.some((item) => categoryItemIds.has(item.id))
      )
    );
  //endregion

  if (error) {
    Sentry.captureException(error);
  }

  return (
    <>
      <SectionWrapper color={Color.DARK_BLUE} marginTop={5}>
        <StyledSpeakersSection>
          <StyledTitleContainer>
            <StyledTitleIcon src={LessThanDarkBlueIcon} />
            <TitleSection
              title="Workshops"
              subtitle="Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP."
              color={Color.WHITE}
            />
            <StyledTitleIcon src={MoreThanBlueIcon} />
          </StyledTitleContainer>
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#4798CA" }}
          ></path>
        </svg>
      </StyledWaveContainer>
      <SectionWrapper color={Color.LIGHT_BLUE} marginTop={1}>
        <StyledSection>
          {isLoading && <h1>Loading </h1>}
          {workshops?.length === 0 && (
            <p style={{ color: Color.WHITE, textAlign: "center" }}>
              No Workshops selected yet. Keep in touch in our social media for
              upcoming announcements
            </p>
          )}
          {workshops?.map((track, index) => (
            <TalkCard
              talk={track}
              key={track.id}
              index={index}
              showTrack={true}
            />
          ))}
        </StyledSection>
        <StyledMarginBottom />
      </SectionWrapper>
    </>
  );
};

export default Workshops;
