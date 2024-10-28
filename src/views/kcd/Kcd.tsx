import {useEffect} from "react";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import {Color} from "src/styles/colors";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from "../Speakers/Speakers.style";
import TitleSection from "src/components/SectionTitle/TitleSection";
import {StyledSectionsSeparator} from "../CodeOfConduct/CodeOfConduct";
import styled, {keyframes} from "styled-components";
import {edition} from "src/data/2024";
import {MOBILE_BREAKPOINT} from "src/constants/BreakPoints";
import {useWindowSize} from "react-use";


const StyledParagraph = styled.p`
  color: white;
  text-align: left;
  padding: 1rem 5rem;
  margin: 0 10rem;

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

const revealAnimation = keyframes`
    from {
        opacity: 0;
        translate: 0 100px;
    }
    50% {
        opacity: .5;
    }
    to {
        opacity: 1;
        translate: 0 0;
    }`;

const StyledImage = styled.img`
  aspect-ratio: 120/49;
  margin: 2rem;
  width: 20vw;
  animation: linear ${revealAnimation} 0.2s both;
  animation-range: entry 5% cover 30%;
`;

export default function Kcd() {
  const { width } = useWindowSize();
  useEffect(() => {
    document.title = `KCD Barcelona — ${edition.title} — ${edition.edition}`;
  });
  return (
    <>
      <SectionWrapper marginTop={5} color={Color.WHITE}>
        <StyledSpeakersSection>
          <TitleSection
            title={"KCD - Barcelona"}
            subtitle={"Kubernetes Community Days - Barcelona"}
            color={Color.DARK_BLUE}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon alt="LessThanBlueWhiteIcon"
                              src="images/MoreThanBlueWhiteIcon.svg"/>
              <StyledMoreIcon alt="MoreThanBlue"
                              src="images/MoreThanBlueWhiteIcon.svg"/>
            </>
          )}
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledSectionsSeparator />
      <SectionWrapper color={Color.DARK_BLUE}>
        <StyledImage src="images/KCD-logo-white.png" alt="KCD - Barcelona" />
        <StyledParagraph>
          <a
            href="https://community.cncf.io/events/details/cncf-kcd-spain-presents-kcd-barcelona-2024"
            target="_blank"
            rel="noreferrer"
          >
            <strong>KCD Barcelona</strong>
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
            <img src="/images/twitterIcon.svg" alt="Twitter" height={32}
                 width={32}/>
          </a>
          <a
            href="https://www.linkedin.com/company/kcdspain/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/linkedinIcon.svg" alt="LinkedIn" height={32}
                 width={32}/>
          </a>
          <a
            href="https://www.youtube.com/channel/UC2666lycS6cx5a8KL_hBhKA"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/youtube.svg" alt="Youtube" height={32}
                 width={32}/>
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
