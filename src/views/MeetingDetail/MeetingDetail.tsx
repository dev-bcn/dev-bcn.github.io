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
import { Link } from "react-router-dom";
import { ROUTE_SPEAKER_DETAIL, ROUTE_TALKS } from "../../constants/routes";
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

const MeetingDetail: FC<IMeetingDetailProps> = ({
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
              src="https://www.youtube.com/embed/IxqTPYeXk3k"
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
                    <Link to={`${ROUTE_SPEAKER_DETAIL}/${speaker.id}`}>
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
            to={ROUTE_TALKS}
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
