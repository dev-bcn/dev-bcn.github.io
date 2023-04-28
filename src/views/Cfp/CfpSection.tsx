import React, { FC } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { Color } from "../../styles/colors";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from "../Speakers/Speakers.style";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import MoreThanBlueWhiteIcon from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import LessThanBlueWhiteIcon from "../../assets/images/LessThanBlueWhiteIcon.svg";
import { useWindowSize } from "react-use";
import TwitterIcon from "../../components/Icons/Twitter";
import LinkedinIcon from "../../components/Icons/Linkedin";
import {
  StyledAboutImage,
  StyledSocialIconsWrapper,
} from "../About/components/Style.AboutCard";
import conferenceData from "../../data/2023.json";
import { CfpTrackProps, data } from "./CfpData";

const CfpTrackComponent: FC<CfpTrackProps> = ({ track }) => (
  <>
    <section>
      <h2
        style={{
          paddingTop: "1.5rem",
          paddingBottom: "1rem",
          fontSize: "2rem",
        }}
      >
        {track.name}
      </h2>
    </section>
    <div style={{ display: "flex", margin: "1rem" }}>
      {track.members.map((member) => (
        <>
          {member.photo !== "" && (
            <div key={member.name}>
              <StyledAboutImage src={member.photo} alt={member.name} />
              <h5 style={{ color: Color.DARK_BLUE }}>{member.name}</h5>
              <StyledSocialIconsWrapper>
                {member.twitter !== "" && (
                  <TwitterIcon color={Color.BLUE} twitterUrl={member.twitter} />
                )}
                {member.linkedIn !== "" && (
                  <LinkedinIcon
                    color={Color.BLUE}
                    linkedinUrl={member.linkedIn}
                  />
                )}
              </StyledSocialIconsWrapper>
            </div>
          )}
        </>
      ))}
    </div>
  </>
);

const CfpSection: FC = () => {
  const { width } = useWindowSize();
  React.useEffect(() => {
    document.title = `CFP Committee - DevBcn - ${conferenceData.edition}`;
  }, []);
  return (
    <>
      <SectionWrapper color={Color.WHITE} marginTop={5}>
        <StyledSpeakersSection>
          <TitleSection
            title="CFP Committee"
            subtitle="We're excited to announce the members of the Call for Papers committee
          for the next DevBcn conference! These experienced professionals will
          be reviewing and selecting the best talks and workshops for the
          upcoming event."
            color={Color.BLUE}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={MoreThanBlueWhiteIcon} />
              <StyledMoreIcon src={LessThanBlueWhiteIcon} />
            </>
          )}
        </StyledSpeakersSection>
        {data.map((track) => (
          <CfpTrackComponent key={track.id} track={track} />
        ))}
      </SectionWrapper>
      <div style={{ height: "350px" }}>&nbsp;</div>
    </>
  );
};

export default CfpSection;
