import { useEffect } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { Color } from "../../styles/colors";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from "../Speakers/Speakers.style";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { StyledSectionsSeparator } from "../CodeOfConduct/CodeOfConduct";
import styled from "styled-components";
import data from "../../data/2024.json";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import LessThanBlue from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import MoreThanBlue from "../../assets/images/LessThanBlueWhiteIcon.svg";
import { useWindowSize } from "react-use";
import youtube from "../../assets/images/youtube.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import twitterIcon from "../../assets/images/twitterIcon.svg";

const StyledParagraph = styled.p`
   {
    color: white;
    text-align: left;
    padding: 1rem 5rem;
    margin: 0 10rem;
  }

  a {
    color: ${Color.LIGHT_BLUE};
    text-decoration: none;
  }
`;

const StyledWaveContainer = styled.div`
  background: ${Color.DARK_BLUE};
  overflow-y: hidden;
  height: 3rem;
  width: 100%;
`;

export default function Kcd() {
  const { width } = useWindowSize();
  useEffect(() => {
    document.title = `Code of Conduct- DevBcn ${data.edition}`;
  });
  return (
    <>
      <SectionWrapper marginTop={5} color={Color.WHITE}>
        <StyledSpeakersSection>
          <TitleSection
            title={"KCD - Spain"}
            subtitle={"Kubernetes Community Days - Spain"}
            color={Color.DARK_BLUE}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={LessThanBlue} />
              <StyledMoreIcon src={MoreThanBlue} />
            </>
          )}
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledSectionsSeparator />
      <SectionWrapper color={Color.DARK_BLUE}>
        <img
          src="images/KCD-logo-white.png"
          alt="KCD - Spain"
          style={{ width: "20vw", margin: "2rem" }}
        />
        <StyledParagraph>
          <a href="https://kcdspain.com/" target="_blank" rel="noreferrer">
            <strong>KCD Spain</strong>
          </a>{" "}
          is an event within the CNCF framework called Kubernetes Community Days
          (KCDs).
        </StyledParagraph>

        <StyledParagraph>
          KCDs are community-organised events, with the support of the Cloud
          Native Computing Foundation, which aims to bring together adopters and
          technologists from open source communities to share knowledge,
          collaborate and network.
        </StyledParagraph>

        <StyledParagraph>
          There will be talks in English and Spanish in order to foster the
          Spanish-speaking community and will be related to technologies from
          the Cloud Native ecosystem.
        </StyledParagraph>

        <StyledParagraph>
          After 3 editions in 2021, 2022 and 2023 completely virtual, in 2024 we
          have joined forces with <strong>DevBcn</strong> to present our first
          face-to-face event.
        </StyledParagraph>

        <div>
          <a
            href="https://twitter.com/kcdspain"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="Youtube" height={32} width={32} />
          </a>
          <a
            href="https://www.linkedin.com/company/kcdspain/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="Youtube" height={32} width={32} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC2666lycS6cx5a8KL_hBhKA"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="Youtube" height={32} width={32} />
          </a>
        </div>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-1.97,61.69 C252.54,152.47 282.44,-23.17 523.42,103.13 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#FFFFFF" }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </>
  );
}
