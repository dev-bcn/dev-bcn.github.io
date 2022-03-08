import { FC } from "react";
import TitleSection from "../../components/SectionTitle/TitleSection";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../constants/BreakPoints";
import {
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_YELLOW,
} from "../../styles/colors";
import {
  StyledSpeakersSection,
  StyledLessIcon,
  StyledMoreIcon,
} from "../Speakers/Speakers";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import { useWindowSize } from "react-use";
import styled from "styled-components";
import { RightHashWithText } from "../../components/RightHashWithText/RightHashWithText";
import { LeftHashWithText } from "../../components/LeftHashWithText/LeftHashWithText";
import { CodeOfConductTags } from "./CodeOfConductData";
import { Tag } from "../../components/Tag/Tag";
import { StyledTagsWrapper } from "../Talks/components/TalkCard";

const StyledWaveContainer = styled.div`
  background: ${COLOR_PINK};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 10rem;
  }
`;

export const CodeOfConduct: FC = () => {
  const { width } = useWindowSize();

  return (
    <>
      <SectionWrapper color={COLOR_WHITE} marginTop={5}>
        <StyledSpeakersSection>
          <TitleSection
            title="CODE OF CONDUCT"
            subtitle="The JBCNConf is the yearly event
            organised by the non-profit Java User
            Group Barcelona on 23rd of July 2021.
            Conference Talks will held on Friday
            23rd of July 2021."
            color={COLOR_PINK}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={LessThanBlueIcon} />
              <StyledMoreIcon src={MoreThanBlueIcon} />
            </>
          )}
        </StyledSpeakersSection>
      </SectionWrapper>
      <SectionWrapper color={COLOR_PINK} marginTop={0}>
        <RightHashWithText color={COLOR_YELLOW} text="TOPICS" />
        {/* poner los topics */}
        <StyledTagsWrapper>
          {CodeOfConductTags.map((tag) => (
            <Tag text={tag} />
          ))}
        </StyledTagsWrapper>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#ffd166" }}
          ></path>
        </svg>
      </StyledWaveContainer>
      <SectionWrapper color={COLOR_YELLOW} marginTop={0}>
        <LeftHashWithText color={COLOR_PINK} text="CODE OF CONDUCT" />
        <p>
          Our conference is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance,
          body size, race, ethnicity, religion (or lack thereof), or technology
          choices.
        </p>
        <br />
        <p>
          We do not tolerate harassment of conference participants in any form.
          Sexual language and imagery is not appropriate for any conference
          venue, including talks, workshops, parties, Twitter and other online
          media. Conference participants violating these rules may be sanctioned
          or expelled from the conference without a refund at the discretion of
          the conference organisers.
        </p>
        {/* poner los <> */}
      </SectionWrapper>
    </>
  );
};
