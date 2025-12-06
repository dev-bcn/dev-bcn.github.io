import { Color } from "@styles/colors";
import { FC, Suspense } from "react";
import FaqCard from "./components/FaqsCard";
import { useWindowSize } from "react-use";
import { MOBILE_BREAKPOINT } from "@constants/BreakPoints";
import { StyledLoadingImage } from "@components/Loading/Loading";
// @ts-expect-error some quirky import
import { motion } from "motion/react";
import { faqsData } from "./FaqsData";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import {
  StyledFaqSection,
  StyledH2,
  StyledImage,
  StyledP,
  StyledSummaryLink,
  StyledWaveContainer,
  StyleLessIcon,
  StyleMoreIcon,
} from "./Faqs.style";

const Faqs: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  return (
    <>
      <SectionWrapper color={Color.DARK_BLUE}>
        <StyledFaqSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {faqsData.map((faq, index) => (
            <FaqCard faq={faq} index={index} key={faq.id} />
          ))}
          <div id="last-jbcnconf">&nbsp;</div>
          <motion.div
            style={{ width: "60%" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <StyledH2>Check last DevBcn edition</StyledH2>
            </motion.div>
            <Suspense fallback={<StyledLoadingImage src="/images/logo.svg" />}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <StyledImage src="/images/devbcn-1.jpg" alt="DevBcn 2023" />
              </motion.div>
            </Suspense>
            <Suspense fallback={<StyledLoadingImage src="/images/logo.svg" />}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <StyledImage src="/images/devbcn2.jpg" alt="DevBcn 2023" />
              </motion.div>
            </Suspense>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <StyledP>
                DevBcn is the rebranding of the biggest Java & JVM conference in
                Spain, now including more technologies and tracks.
              </StyledP>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <StyledP>
                Check for videos/photos andsummary of the DevBcn —{" "}
                <StyledSummaryLink
                  href="https://youtu.be/k7iMIXtNKyo"
                  rel="noreferrer"
                  target="_blank"
                >
                  2024 edition —
                </StyledSummaryLink>
                <StyledSummaryLink
                  href="https://youtu.be/6ZxsMUYBrSo"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  2023 edition
                </StyledSummaryLink>
              </StyledP>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              style={{ display: "inline-block", marginRight: "10px" }}
              whileHover={{ scale: 1.2 }}
            >
              <a
                href="https://www.flickr.com/photos/devbcn/albums"
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              style={{ display: "inline-block" }}
              whileHover={{ scale: 1.2 }}
            >
              <a
                href="https://www.youtube.com/watch?v=Pv4kEMRE-kg&list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og"
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
            </motion.div>
          </motion.div>
          {width > MOBILE_BREAKPOINT && (
            <>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.9 }}
              >
                <StyleMoreIcon
                  alt="More than — icon"
                  src="/images/LessThanBlueWhiteIcon.svg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.1 }}
              >
                <StyleLessIcon
                  alt="Lees than — icon"
                  src="/images/LessThanBlueIcon.svg"
                />
              </motion.div>
            </>
          )}
        </StyledFaqSection>
      </SectionWrapper>
      <StyledWaveContainer>
        <motion.svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.path
            d="M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#4798CA" }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          ></motion.path>
        </motion.svg>
      </StyledWaveContainer>
    </>
  );
};

export default Faqs;
