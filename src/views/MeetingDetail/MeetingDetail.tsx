import {
  BIG_BREAKPOINT,
  LARGE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";

import { FC, useEffect } from "react";
import { IMeeting } from "./MeetingDetail.Type";
import LessThanIconWhite from "../../assets/images/LessThanIconWhite.svg";
import LessThanIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Slashes from "../../assets/images/SlashesWhite.svg";
import { useWindowSize } from "react-use";
import {
  StyledAbsoluteSlashes,
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
  StyledSlashes,
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
}

const MeetingDetail: FC<IMeetingDetailProps> = ({ meeting }) => {
  const { width } = useWindowSize();
  useEffect(() => {
    document.title = `${meeting.title} - DevBcn ${conferenceData.edition}`;
  }, [meeting.title]);

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
              <strong>Level: </strong> {meeting.level}
              <strong> Language: </strong>
              {meeting.language}
              <strong> Session type: </strong>
              {meeting.type}
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
        <StyledSpeakerDetailContainer className="DetailsContainer">
          <StyledLessThan src={LessThanIconWhite} />
          <StyledDetailsContainer className="DetailsContainerInner">
            <StyledRightContainer>
              {meeting.speakers?.map((speaker) => (
                <StyledNameContainer className="DetailsTitle" key={speaker.id}>
                  <Link to={`${ROUTE_SPEAKER_DETAIL}/${speaker.id}`}>
                    <StyledName>{speaker.name}</StyledName>
                  </Link>
                  <StyledSlashes src={Slashes} />
                </StyledNameContainer>
              ))}
            </StyledRightContainer>
          </StyledDetailsContainer>
          <StyledAbsoluteSlashes>
            / / / / / / / / / / / / / / / / /
          </StyledAbsoluteSlashes>
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
