import { AddToCalendarButton } from "add-to-calendar-button-react";
import React, { Suspense } from "react";
import { Link } from "react-router";
import { useWindowSize } from "react-use";
import { styled } from "styled-components";

import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { Tag } from "@components/Tag/Tag";
import {
  BIG_BREAKPOINT,
  LARGE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from "@constants/BreakPoints";
import { ROUTE_SPEAKER_DETAIL, ROUTE_TALKS } from "@constants/routes";
import conferenceData from "@data/2025.json";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";
import { Color } from "@styles/colors";

import {
  StyledContainer,
  StyledDescription,
  StyledDetailsContainer,
  StyledExtraInfo,
  StyledFlexCol,
  StyledLessThan,
  StyledMeetingTitleContainer,
  StyledName,
  StyledNameContainer,
  StyledRightContainer,
  StyledSpeakerDetailContainer,
  StyledTitle,
  StyledTitleImg,
  StyledVideoContainer,
  StyledVideoTagsContainer,
} from "./Style.MeetingDetail";

import type { IMeetingDetailProps, MyType } from "@/types/sessions";
import type { FC } from "react";

const getVideoHeight = (windowWidth: number) => {
  let videoHeight;
  if (windowWidth < MOBILE_BREAKPOINT) {
    videoHeight = 250;
  } else if (windowWidth >= MOBILE_BREAKPOINT && windowWidth < BIG_BREAKPOINT) {
    videoHeight = 300;
  } else if (windowWidth >= BIG_BREAKPOINT && windowWidth < LARGE_BREAKPOINT) {
    videoHeight = 450;
  } else {
    videoHeight = 600;
  }

  return videoHeight.toString();
};

const leftVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const rightVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const downVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const StyledVoteTalkLink = styled.a`
  text-decoration: none;
  color: ${Color.BLACK_BLUE};
  font-size: 0.8rem;
`;

const MeetingDetail: FC<React.PropsWithChildren<IMeetingDetailProps>> = ({
  meeting,
  speakers: mySpeakers,
  openFeedbackId,
  edition = conferenceData.edition,
  speakerDetailRoute = ROUTE_SPEAKER_DETAIL,
  talksRoute = ROUTE_TALKS,
}) => {
  const { width } = useWindowSize();

  useDocumentTitleUpdater(meeting.title, edition);

  const finalMeetingInfo: MyType = {
    ...meeting,
    speakers: mySpeakers,
  };

  return (
    <SectionWrapper color={Color.WHITE}>
      <StyledContainer className="MeetingDetail">
        <StyledMeetingTitleContainer className="TitleContainer">
          <StyledTitleImg
            initial="initial"
            animate="animate"
            variants={leftVariants}
            src="/images/LessThanBlueIcon.svg"
          />
          <StyledFlexCol
            initial="initial"
            animate="animate"
            variants={downVariants}
          >
            <StyledTitle>/ {meeting.title}</StyledTitle>
            <h4>Description</h4>
            <StyledDescription>{meeting.description}</StyledDescription>
            <StyledExtraInfo>
              {`${meeting.type} ${meeting.level}`}
              <strong> Track: </strong>
              {meeting.track}

              {meeting.slidesURL !== "" && (
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <a
                    href={meeting.slidesURL}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: Color.DARK_BLUE,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#002454"
                      height={16}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>{" "}
                    <strong>Session Slides</strong>
                  </a>
                </p>
              )}
            </StyledExtraInfo>
          </StyledFlexCol>
          <StyledTitleImg
            initial="initial"
            animate="animate"
            variants={rightVariants}
            src="/images/MoreThanBlueIcon.svg"
          />
        </StyledMeetingTitleContainer>
        <StyledVideoContainer
          initial="initial"
          animate="animate"
          variants={opacityVariants}
        >
          {meeting.videoUrl && (
            <iframe
              width="100%"
              height={getVideoHeight(width)}
              src={meeting.videoUrl}
              title={meeting.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <StyledVideoTagsContainer>
            {meeting.videoTags?.map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
          </StyledVideoTagsContainer>
          <section style={{ display: "block" }}>
            <StyledVoteTalkLink
              href={`https://openfeedback.io/${openFeedbackId}/0/${meeting.id}`}
              target={"_blank"}
              rel="noreferrer noopener"
            >
              🗳️ <strong>Vote this talk</strong>
            </StyledVoteTalkLink>
            <AddToCalendarButton
              name={meeting.title}
              description={meeting.description}
              options={["Apple", "Google", "iCal"]}
              location={meeting.track}
              startDate={meeting.startDate}
              endDate={meeting.endDate}
              startTime={meeting.startTime}
              endTime={meeting.endTime}
              lightMode="bodyScheme"
              label="Add this session to your calendar"
              timeZone="currentBrowser"
              size="5"
            />
          </section>
        </StyledVideoContainer>
        <StyledSpeakerDetailContainer className="speaker-details-Container">
          <StyledLessThan src="/images/LessThanIconWhite.svg" />
          <StyledDetailsContainer className="details-container-inner">
            <StyledRightContainer>
              {finalMeetingInfo.speakers?.map((speaker) => (
                <StyledNameContainer className="DetailsTitle" key={speaker.id}>
                  <Suspense fallback={<h1>loading</h1>}>
                    <img
                      src={speaker.speakerImage}
                      alt={speaker.fullName}
                      style={{
                        width: "128px",
                        margin: "10px",
                        borderRadius: "12px",
                      }}
                    />
                  </Suspense>
                  <StyledName>
                    <Link to={`${speakerDetailRoute}/${speaker.id}`}>
                      {speaker.fullName}
                    </Link>
                  </StyledName>
                </StyledNameContainer>
              ))}
            </StyledRightContainer>
          </StyledDetailsContainer>
        </StyledSpeakerDetailContainer>

        <div>
          <Link
            to={talksRoute}
            style={{
              color: Color.MAGENTA,
              fontWeight: "bold",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Go back
          </Link>{" "}
        </div>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default MeetingDetail;
