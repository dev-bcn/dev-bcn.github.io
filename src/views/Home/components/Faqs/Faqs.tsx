import { Color } from "../../../../styles/colors";
import { FC, Suspense } from "react";
import FaqCard from "./components/FaqsCard";
import LessThanIcon from "../../../../assets/images/LessThanBlueIcon.svg";
import MoreThanIcon from "../../../../assets/images/LessThanBlueWhiteIcon.svg";
import SectionWrapper from "../../../../components/SectionWrapper/SectionWrapper";
import { faqsData } from "./FaqsData";
import { useWindowSize } from "react-use";
import { MOBILE_BREAKPOINT } from "../../../../constants/BreakPoints";
import flickr from "../../../../assets/images/flickr.svg";
import youtube from "../../../../assets/images/youtube.svg";
import image1 from "../../../../assets/images/devbcn-1.jpg";
import image2 from "../../../../assets/images/devbcn2.jpg";
import Logo from "../../../../assets/images/logo.svg";
import { StyledLoadingImage } from "../../../../components/Loading/Loading";
import {
  StyledFaqSection,
  StyledH2,
  StyledImage,
  StyledP,
  StyledWaveContainer,
  StyleLessIcon,
  StyleMoreIcon,
} from "./Faqs.style";

const Faqs: FC = () => {
  const { width } = useWindowSize();
  return (
    <>
      <SectionWrapper color={Color.DARK_BLUE}>
        <StyledFaqSection>
          {faqsData.map((faq, index) => (
            <FaqCard faq={faq} index={index} key={faq.id} />
          ))}
          <div id="last-jbcnconf">&nbsp;</div>
          <div style={{ width: "60%" }}>
            <StyledH2>Check last DevBcn edition</StyledH2>
            <Suspense fallback={<StyledLoadingImage src={Logo} />}>
              <StyledImage src={image1} alt="JBCNConf" />
            </Suspense>
            <Suspense fallback={<StyledLoadingImage src={Logo} />}>
              <StyledImage src={image2} alt="JBCNConf - Keynote" />
            </Suspense>
            <StyledP>
              DevBcn is the rebranding of the biggest Java & JVM conference in
              Spain, now including more technologies and tracks.
            </StyledP>
            <StyledP>
              Check for videos/photos and summary of the DevBcn - 2023 edition
            </StyledP>
            <a
              href="https://www.flickr.com/photos/198800418@N08/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={flickr} alt="flickr" height={32} width={32} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=Pv4kEMRE-kg&list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og"
              rel="noreferrer"
              target="_blank"
            >
              <img src={youtube} alt="Youtube" height={32} width={32} />
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
