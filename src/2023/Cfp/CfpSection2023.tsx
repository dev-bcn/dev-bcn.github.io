import React, { FC } from "react";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { Color } from "@styles/colors";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from "../Speakers/Speakers.style";
import TitleSection from "@components/SectionTitle/TitleSection";
import { MOBILE_BREAKPOINT } from "@constants/BreakPoints";
import { useWindowSize } from "react-use";
import TwitterIcon from "@components/Icons/Twitter";
import LinkedinIcon from "@components/Icons/Linkedin";

import conferenceData from "@data/2023.json";
import { CfpTrackProps, data } from "./CfpData";
import { styled } from "styled-components";
import {
  StyledAboutImage,
  StyledSocialIconsWrapper,
} from "@views/About/components/Style.AboutCard";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";

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

  useDocumentTitleUpdater("CFP Committee", conferenceData.edition);
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
              <StyledLessIcon
                title="Less than - icon"
                src="/images/MoreThanBlueWhiteIcon.svg"
              />
              <StyledMoreIcon
                title="more than - icon"
                src="/images/LessThanBlueWhiteIcon.svg"
              />
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
