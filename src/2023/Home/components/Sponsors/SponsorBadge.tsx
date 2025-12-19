import { AnimatePresence } from "framer-motion";

import {
  leftVariants,
  rightVariants,
  StyledSponsorBadgeLeft,
} from "@views/Home/components/Sponsors/Sponsors.style";

import type { FC } from "react";

interface ISponsorBadgeProps {
  position: "left" | "right";
  color: string;
  isVisible: boolean;
}

const SponsorBadge: FC<React.PropsWithChildren<ISponsorBadgeProps>> = ({
  position,
  color,
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <StyledSponsorBadgeLeft
          color={color}
          position={position}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={position === "left" ? leftVariants : rightVariants}
        />
      )}
    </AnimatePresence>
  );
};

export default SponsorBadge;
