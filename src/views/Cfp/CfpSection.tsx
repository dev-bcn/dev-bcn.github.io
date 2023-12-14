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
import conferenceData from "../../data/2024.json";
import { CfpTrackProps, data } from "./CfpData";
import styled from "styled-components";

const TrackName = styled.h2`
  padding-top: 1.2rem;
  padding-bottom: 0.8rem;
  font-size: 1.5rem;
  color: ${Color.DARK_BLUE};
`;

const MemberName = styled.h5`
  font-size: 0.8rem;
  color: ${Color.DARK_BLUE};
  text-align: left;
`;

const CfpTrackComponent: FC<CfpTrackProps> = ({ track }) => (
  <>
    <section>
      <TrackName>{track.name}</TrackName>
    </section>
    <div style={{ display: "flex", margin: "1rem auto", maxWidth: "80%" }}>
      {track.members.map((member) => {
        return (
          <div key={member.name}>
            {member.photo !== "" && (
              <div>
                <StyledAboutImage src={member.photo} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <StyledSocialIconsWrapper>
                  {member.twitter !== "" && (
                    <TwitterIcon
                      color={Color.BLUE}
                      twitterUrl={member.twitter}
                    />
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
          </div>
        );
      })}
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
