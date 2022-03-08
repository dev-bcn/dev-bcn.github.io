import { FC } from "react";
import TitleSection from "../../components/SectionTitle/TitleSection";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { COLOR_WHITE, COLOR_BLUE } from "../../styles/colors";
import {
  StyledSpeakersSection,
  StyledLessIcon,
  StyledMoreIcon,
} from "../Speakers/Speakers";
import LessThanBlueWhiteIcon from "../../assets/images/LessThanBlueWhiteIcon.svg";
import MoreThanBlueWhiteIcon from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import { useWindowSize } from "react-use";

export const About: FC = () => {
  const { width } = useWindowSize();

  return (
    <>
      <SectionWrapper color={COLOR_WHITE} marginTop={8}>
        <StyledSpeakersSection>
          <TitleSection
            title="ABOUT US"
            subtitle="The Barcelona Java User Group is a non profit association
            with a great team and a broad experience in Java
            technologies. Since 2012, we are organizing talks and
            meetups focused on Java topics, looking forward to spin
            this technology from our hometown to the rest of the
            world."
            color={COLOR_BLUE}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={MoreThanBlueWhiteIcon} />
              <StyledMoreIcon src={LessThanBlueWhiteIcon} />
            </>
          )}
          {/* darle aqui a las cards de personas */}
        </StyledSpeakersSection>
      </SectionWrapper>
    </>
  );
};
