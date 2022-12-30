import { Color } from "../../../../styles/colors";
import { FC, Suspense } from "react";
import FaqCard from "./components/FaqsCard";
import LessThanIcon from "../../../../assets/images/LessThanBlueIcon.svg";
import MoreThanIcon from "../../../../assets/images/LessThanBlueWhiteIcon.svg";
import SectionWrapper from "../../../../components/SectionWrapper/SectionWrapper";
import { faqsData } from "./FaqsData";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useWindowSize } from "react-use";
import {
  BIG_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from "../../../../constants/BreakPoints";
import flickr from "../../../../assets/images/flickr.svg";
import youtube from "../../../../assets/images/youtube.svg";
import jbcnconf from "../../../../assets/images/jbcnconf-1.jpg";
import jbcnconf2 from "../../../../assets/images/jbcnconf-2.jpg";
import slides from "../../../../assets/images/slides.png";

export const StyledFaqSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`;

export const StyledWaveContainer = styled.div`
  background: ${Color.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`;

const StyleMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyleLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyledImage = styled.img`
  margin: 3px;
  padding: 5px;
  border: 1px solid ${Color.YELLOW};

  @media (max-width: ${BIG_BREAKPOINT}px) {
    width: 100%;
  }
`;
const StyledH2 = styled.h2`
  color: white;
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  color: white;
  margin-bottom: 10px;
`;

const Faqs: FC = () => {
  const { width } = useWindowSize();
  return (
    <>
      <SectionWrapper color={Color.DARK_BLUE}>
        <StyledFaqSection>
          {faqsData.map((faq, index) => (
            <FaqCard faq={faq} index={index} key={index} />
          ))}
          <div style={{ width: "55%" }}>
            <StyledH2>Check last JBCNConf edition</StyledH2>
            <Suspense fallback={<span>Loading</span>}>
              <StyledImage src={jbcnconf} alt="JBCNConf" />
            </Suspense>
            <Suspense fallback={<span>Loading</span>}>
              <StyledImage src={jbcnconf2} alt="JBCNConf - Keynote" />
            </Suspense>
            <StyledP>
              DevBcn is the rebranding of the biggest Java & JVM conference in
              Spain, now including more technologies and tracks.
            </StyledP>
            <StyledP>
              Check for videos/photos and summary of the JBCNConf - 2022 edition
            </StyledP>
            <a
              href="https://www.flickr.com/photos/barcelonajug/collections/72157720937175671/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={flickr} alt="flickr" height={32} width={32} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=zFPpwRyl4Iw&list=PLo0fJV3LkR3z42GevLgXlQfNFP2qfgtrq"
              rel="noreferrer"
              target="_blank"
            >
              <img src={youtube} alt="Youtube" height={32} width={32} />
            </a>
            <a
              href="https://docs.google.com/presentation/d/1t1RnYOqcoP8Bo1GVyiGyW-mY_2bBpUspnW8nqXDUbGI/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <img src={slides} alt="Summary Slides" height={32} width={32} />
            </a>
          </div>
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyleMoreIcon src={MoreThanIcon} />
              <StyleLessIcon src={LessThanIcon} />
            </>
          )}
        </StyledFaqSection>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#4798CA" }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </>
  );
};

export default Faqs;
