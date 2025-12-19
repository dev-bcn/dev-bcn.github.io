import { Suspense } from "react";
import { useWindowSize } from "react-use";

import { StyledLoadingImage } from "@components/Loading/Loading";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { MOBILE_BREAKPOINT } from "@constants/BreakPoints";
import { Color } from "@styles/colors";
import { faqsData } from "@views/Home/components/Faqs/FaqsData";

import FaqCard from "./components/FaqsCard";
import {
  StyledFaqSection,
  StyledH2,
  StyledImage,
  StyledP,
  StyledWaveContainer,
  StyleLessIcon,
  StyleMoreIcon,
} from "./Faqs.style";

import type { FC } from "react";

const Faqs: FC<React.PropsWithChildren<unknown>> = () => {
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
            <StyledH2>Check last JBCNConf edition</StyledH2>
            <Suspense
              fallback={<StyledLoadingImage src={"/images/logo.svg"} />}
            >
              <StyledImage
                src="images/jbcnconf/jbcnconf-1.jpg"
                alt="JBCNConf"
              />
            </Suspense>
            <Suspense
              fallback={<StyledLoadingImage src={"/images/logo.svg"} />}
            >
              <StyledImage
                src="images/jbcnconf/jbcnconf-2.jpg"
                alt="JBCNConf - Keynote"
              />
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
              <img
                src="/images/flickr.svg"
                alt="flickr"
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=zFPpwRyl4Iw&list=PLo0fJV3LkR3z42GevLgXlQfNFP2qfgtrq"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/images/youtube.svg"
                alt="Youtube"
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://docs.google.com/presentation/d/1t1RnYOqcoP8Bo1GVyiGyW-mY_2bBpUspnW8nqXDUbGI/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/images/slides.png"
                alt="Summary Slides"
                height={32}
                width={32}
              />
            </a>
          </div>
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyleMoreIcon src="/images/LessThanBlueWhiteIcon.svg" />
              <StyleLessIcon src="/images/LessThanBlueIcon.svg" />
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
