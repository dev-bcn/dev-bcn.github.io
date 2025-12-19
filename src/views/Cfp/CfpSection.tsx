import React from "react";
import { useWindowSize } from "react-use";

import LinkedinIcon from "@components/Icons/Linkedin";
import TwitterIcon from "@components/Icons/Twitter";
import TitleSection from "@components/SectionTitle/TitleSection";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { MOBILE_BREAKPOINT } from "@constants/BreakPoints";
import conferenceData from "@data/2026.json";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";
import { Color } from "@styles/colors";

import { MemberName, TrackName } from "./Cfp.style";
import { data } from "./CfpData";
import {
  StyledAboutImage,
  StyledSocialIconsWrapper,
} from "../About/components/Style.AboutCard";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from "../Speakers/Speakers.style";

import type { CfpTrack, CfpTrackProps } from "./CfpData";
import type { FC } from "react";

export const CfpTrackComponent: FC<React.PropsWithChildren<CfpTrackProps>> = ({
  track,
}) => (
  <>
    <section>
      <TrackName>{track.name}</TrackName>
    </section>
    <div style={{ display: "flex", margin: "1rem auto", maxWidth: "80%" }}>
      {track.members.map((member) => {
        return (
          <article key={member.name} data-testid={member.name}>
            {member.photo && (
              <div>
                <StyledAboutImage src={member.photo} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <StyledSocialIconsWrapper>
                  {member.twitter && (
                    <TwitterIcon
                      color={Color.BLUE}
                      twitterUrl={member.twitter}
                    />
                  )}
                  {member.linkedIn && (
                    <LinkedinIcon
                      color={Color.BLUE}
                      linkedinUrl={member.linkedIn}
                    />
                  )}
                </StyledSocialIconsWrapper>
              </div>
            )}
          </article>
        );
      })}
    </div>
  </>
);

interface CfpSectionProps {
  conferenceConfig?: typeof conferenceData;
  cfpData?: CfpTrack[];
}

const CfpSection: FC<React.PropsWithChildren<CfpSectionProps>> = ({
  conferenceConfig = conferenceData,
  cfpData = data,
}) => {
  const { width } = useWindowSize();

  useDocumentTitleUpdater("CFP Committee", conferenceConfig.edition);

  const isCFPCommitteeReady = (): boolean =>
    cfpData.every((track) => track.members.length > 0);

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
              <StyledLessIcon src="/images/MoreThanBlueWhiteIcon.svg" />
              <StyledMoreIcon src="/images/LessThanBlueWhiteIcon.svg" />
            </>
          )}
        </StyledSpeakersSection>
        {!isCFPCommitteeReady() && (
          <h1 style={{ color: "#002454", marginTop: "4rem" }}>
            CFP Committee {conferenceConfig.edition} in progress
          </h1>
        )}
        {isCFPCommitteeReady() &&
          cfpData.map((track) => (
            <CfpTrackComponent key={track.id} track={track} />
          ))}
      </SectionWrapper>
      <div style={{ height: "350px" }}>&nbsp;</div>
    </>
  );
};

export default CfpSection;
