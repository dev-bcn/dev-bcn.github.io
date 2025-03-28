import {useCallback, useEffect, useState} from "react";
import {useWindowSize} from "react-use";

import {buildSlashes} from "../../../../services/buildSlashes";

/**
 * Configuration for the sponsors hook
 */
interface SponsorHookConfig {
  /** Number of slash groups to display in the sponsor section */
  numberOfSlashGroups: number;
}

/**
 * Custom hook to manage sponsor section behavior including:
 * - Responsive slashes generation
 * - Hover state management
 * - Window size tracking
 */
export const useSponsorsHook = ({
  numberOfSlashGroups = 2,
}: SponsorHookConfig) => {
  const { width } = useWindowSize();
  const [slashes, setSlashes] = useState(buildSlashes(numberOfSlashGroups));
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    setSlashes(buildSlashes(numberOfSlashGroups));
  }, [width, numberOfSlashGroups]);

  const handleHover = useCallback(() => setIsHovered(true), []);
  const handleUnHover = useCallback(() => setIsHovered(false), []);

  return {
    width,
    slashes,
    isHovered,
    handleHover,
    handleUnHover,
  };
};
