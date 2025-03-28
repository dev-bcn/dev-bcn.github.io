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

import conferenceData from "../../data/2024.json";
import { CfpTrackProps, data } from "./CfpData";
import { MemberName, TrackName } from "./Cfp.style";
import {
  StyledAboutImage,
  StyledSocialIconsWrapper,
} from "../../views/About/components/Style.AboutCard";
import {useDocumentTitleUpdater} from "../../hooks/useDocumentTitleUpdate";

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

const CfpSection2024: FC<React.PropsWithChildren<unknown>> = () => {
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

export default CfpSection2024;
