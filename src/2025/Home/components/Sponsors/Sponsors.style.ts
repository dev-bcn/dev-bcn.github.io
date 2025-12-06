import { styled } from "styled-components";
import { BIG_BREAKPOINT, LARGE_BREAKPOINT } from "@constants/BreakPoints";
import { motion } from "motion/react";

const SponsorMargin = 11;
const sponsorMarginDesktop = 11;
export const StyledSponsorsContainer = styled.div`
  position: relative;
  padding-top: 4rem;
`;
export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const StyledTitleImg = styled.img`
  height: 4rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;
export const StyledSponsorItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.75rem;
  padding: 5.5rem 0 0.5rem;
  z-index: 1;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 5rem;
  }

  @media (min-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 3rem;
  }
`;
export const StyledSponsorTitleContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 1rem;
  z-index: 2;
  background: none;
`;
export const StyledSponsorTitleMargin = styled.div`
  width: 10%;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: ${sponsorMarginDesktop}%;
  }
`;
export const StyledSponsorTitleSlashesContainer = styled.div<{ color: string }>`
  display: flex;
  flex-wrap: nowrap;
  width: 90%;
  font-family: "Square 721 Regular", sans-serif;
  color: ${({ color }) => color};
  height: 2.75rem;
  line-height: 2.75rem;
  white-space: nowrap;

  overflow: hidden;

  z-index: 2;

  transition: all 0.2s linear;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 41%;
  }
`;
export const StyledSlashes = styled.div`
  white-space: nowrap;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 0% 100%);
`;
export const StyledSponsorLogosContainer = styled.div`
  display: flex;
  width: 100%;
  top: 4.75rem;
  z-index: 2;
  background: none;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    bottom: 15rem;
    padding-right: 1rem;
  }

  @media (min-width: ${BIG_BREAKPOINT}px) {
  }
`;
export const StyledLogos = styled.div.withConfig({
  shouldForwardProp: (prop) => !["position"].includes(prop),
})<{ position?: "left" | "right" }>`
  display: flex;
  width: 100%;

  padding-left: ${({ position }) =>
    position === "right" ? 0 : SponsorMargin}%;
  padding-right: ${({ position }) =>
    position === "right" ? SponsorMargin : 0}%;

  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: center;
    padding-left: ${({ position }) =>
      position === "right" ? 0 : sponsorMarginDesktop}%;
    padding-right: ${({ position }) =>
      position === "right" ? sponsorMarginDesktop : 0}%;
    top: 5rem;
    flex-wrap: wrap;
    width: ${({ position }) => (position === "right" ? 90 : 100)}%;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    justify-content: ${({ position }) =>
      position === "right" ? "flex-end" : "flex-start"};
    padding-left: ${({ position }) =>
      position === "right" ? 0 : sponsorMarginDesktop}%;
    padding-right: ${({ position }) =>
      position === "right" ? sponsorMarginDesktop : 0}%;
    top: 5rem;
  }
`;
export const StyledFlexGrow = styled.div`
  flex: 1;
  display: none;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;
export const StyledSeparator = styled.div`
  width: 7rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 4rem;
  }
`;
export const PremiumSponsorImage = styled.img`
  height: 6rem;
  transition: height ease-in 0.25s;
  max-width: 100%;
  margin: 1rem 2rem;

  &:hover {
    filter: drop-shadow(1px 1px 1px #fff) !important;
  }

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 7.5rem;
  }
`;
export const RegularSponsorImage = styled.img`
  height: 3.25rem;
  margin-right: 0.5rem;
  margin-bottom: 1.5rem;
  transition: height ease-in 0.25s;
  border-radius: 1rem;

  &:hover {
    filter: drop-shadow(1px 1px 1px #fff) !important;
  }

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 3.25rem;
    margin-right: 2rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    height: 3.25rem;
    margin-right: 2rem;
    margin-bottom: 27px;
  }
`;
export const StyledSponsorIconNano = styled.img`
  height: 3.5rem;
  margin-bottom: 1rem;

  margin-left: 0.75rem;
  transition: height ease-in 0.25s;

  &:hover {
    height: 4rem;
    filter: drop-shadow(1px 1px 1px #fff) !important;
  }

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 3.5rem;
    margin-left: 1rem;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    height: 3.5rem;
    margin-left: 2.5rem;
  }
`;
export const StyledSponsorIconMicro = styled.img`
  height: 3.5rem;
  margin-bottom: 1rem;
  transition: height ease-in 0.25s;
  margin-left: 0.75rem;

  &:hover {
    filter: drop-shadow(1px 1px 1px #fff) !important;
  }

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 3.5rem;
    margin-left: 1rem;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    height: 3.5rem;
    margin-left: 2.5rem;
  }
`;
export const StyledSponsorBadgeLeft = styled(motion.div)<{
  color: string;
  position: "left" | "right";
}>`
  display: none;
  position: absolute;
  width: ${({ position }) => (position === "left" ? "60%" : "62%")};
  clip-path: ${({ position }) => {
    if (position === "left") {
      return "polygon(0 0, 100% 0, 92% 100%, 0% 100%)";
    } else {
      return "polygon(6% 0, 100% 0, 100% 100%, 0 100%)";
    }
  }};
  top: 0;
  bottom: 0;
  background-color: ${({ color }) => color};

  left: ${({ position }) => {
    if (position === "left") {
      return "0";
    } else {
      return "unset";
    }
  }};

  right: ${({ position }) => {
    if (position === "right") {
      return "0";
    } else {
      return "unset";
    }
  }};
  z-index: 1;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;

export const leftVariants = {
  initial: {
    x: -700,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    x: -700,
    transition: {
      duration: 0.2,
    },
  },
};

export const rightVariants = {
  initial: {
    x: 1000,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    x: 1000,
    transition: {
      duration: 0.2,
    },
  },
};
