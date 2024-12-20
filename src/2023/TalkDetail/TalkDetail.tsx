import {
  BIG_BREAKPOINT,
  LARGE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import { FC, Suspense, useEffect } from "react";
import { IMeeting } from "./MeetingDetail.Type";
import LessThanIconWhite from "../../assets/images/LessThanIconWhite.svg";
import LessThanIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { useWindowSize } from "react-use";
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
import { Link } from "react-router";
import {
  ROUTE_2023_SPEAKER_DETAIL,
  ROUTE_2023_TALKS,
} from "../../constants/routes";
import conferenceData from "../../data/2023.json";
import { Tag } from "../../components/Tag/Tag";
import { ISpeaker } from "../Speakers/Speaker.types";

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

interface IMeetingDetailProps {
  meeting: IMeeting;
  speakers?: ISpeaker[];
}

type MyType = {
  urlName?: string;
  videoUrl?: string;
  level?: string;
  videoTags?: string[];
  speakers?: ISpeaker[];
  description: string;
  language?: string;
  title: string;
  type?: string;
  track?: string;
};

const TalkDetail: FC<React.PropsWithChildren<IMeetingDetailProps>> = ({
  meeting,
  speakers: mySpeakers,
}) => {
  const { width } = useWindowSize();

  useEffect(() => {
    document.title = `${meeting.title} - DevBcn ${conferenceData.edition}`;
  }, [meeting.title]);

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
            src={LessThanIcon}
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
                <p style={{ textAlign: "left", marginTop: "0.6rem" }}>
                  <a
                    href={meeting.slidesURL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: Color.DARK_BLUE }}
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
                    Slides
                  </a>
                </p>
              )}
            </StyledExtraInfo>
          </StyledFlexCol>
          <StyledTitleImg
            initial="initial"
            animate="animate"
            variants={rightVariants}
            src={MoreThanIcon}
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
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <StyledVideoTagsContainer>
            {meeting.videoTags?.map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
          </StyledVideoTagsContainer>
          <div style={{ width: "100%", textAlign: "center" }}>
            <Link
              to={ROUTE_2023_TALKS}
              style={{
                color: Color.MAGENTA,
                fontWeight: "bold",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Go back
            </Link>
          </div>
        </StyledVideoContainer>
        <StyledSpeakerDetailContainer className="speaker-details-Container">
          <StyledLessThan src={LessThanIconWhite} />
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
                    <Link to={`${ROUTE_2023_SPEAKER_DETAIL}/${speaker.id}`}>
                      {speaker.fullName}
                    </Link>
                  </StyledName>
                </StyledNameContainer>
              ))}
            </StyledRightContainer>
          </StyledDetailsContainer>
        </StyledSpeakerDetailContainer>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default TalkDetail;
