import React, {FC} from "react";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import {Color} from "src/styles/colors";

import TitleSection from "src/components/SectionTitle/TitleSection";
import {MOBILE_BREAKPOINT} from "src/constants/BreakPoints";
import {useWindowSize} from "react-use";
import TwitterIcon from "src/components/Icons/Twitter";
import LinkedinIcon from "src/components/Icons/Linkedin";

import {edition} from "src/data/2023"
import {CfpTrackProps, data} from "./CfpData";
import styled from "styled-components";
import {
    StyledAboutImage,
    StyledSocialIconsWrapper,
} from "src/views/About/components/Style.AboutCard";
import {StyledSpeakersSection} from "src/views/Talks/Talks.style";
import {
    StyledLessIcon,
    StyledMoreIcon,
} from "src/views/Speakers/Speakers.style";

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

const CfpTrackComponent: FC<React.PropsWithChildren<CfpTrackProps>> = ({
  track,
}) => (
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

const CfpSection2023: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  React.useEffect(() => {
      document.title = `CFP Committee - DevBcn - ${edition.edition}`;
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
                <StyledLessIcon src="images/LessThanBlueWhiteIcon.svg"/>
                <StyledMoreIcon src="images/MoreThanBlueWhiteIcon.svg"/>
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

export default CfpSection2023;
