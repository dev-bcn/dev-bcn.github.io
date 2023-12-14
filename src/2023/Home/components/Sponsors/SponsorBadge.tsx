import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import {
  leftVariants,
  rightVariants,
  StyledSponsorBadgeLeft,
} from "./Sponsors.style";

interface ISponsorBadgeProps {
  position: "left" | "right";
  color: string;
  isVisible: boolean;
}

const SponsorBadge: FC<ISponsorBadgeProps> = ({
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
