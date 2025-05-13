import { styled } from "styled-components";
import { BIG_BREAKPOINT } from "@constants/BreakPoints";
import { motion } from "framer-motion";

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
