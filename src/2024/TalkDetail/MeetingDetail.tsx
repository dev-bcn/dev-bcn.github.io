import {
  BIG_BREAKPOINT,
  LARGE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from "../../constants/BreakPoints";
import {Color} from "../../styles/colors";
import React, {FC, Suspense, useEffect} from "react";
import LessThanIconWhite from "../../assets/images/LessThanIconWhite.svg";
import LessThanIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import {useWindowSize} from "react-use";

import {Link} from "react-router-dom";
import {
  ROUTE_2024_SPEAKER_DETAIL,
  ROUTE_2024_TALKS,
} from "../../constants/routes";
import conferenceData from "../../data/2024.json";
import {Tag} from "../../components/Tag/Tag";
import styled from "styled-components";
import {AddToCalendarButton} from "add-to-calendar-button-react";
import {IMeeting} from "../../views/MeetingDetail/MeetingDetail.Type";
import {ISpeaker} from "../../views/Speakers/Speaker.types";
import {
  StyledContainer,
  StyledDetailsContainer,
  StyledFlexCol,
  StyledName,
  StyledNameContainer,
  StyledRightContainer,
  StyledSpeakerDetailContainer
} from "../../views/SpeakerDetail/Speaker.style";
import {
  StyledDescription,
  StyledExtraInfo,
  StyledLessThan,
  StyledMeetingTitleContainer,
  StyledTitleImg,
  StyledVideoContainer,
  StyledVideoTagsContainer
} from "../../views/MeetingDetail/Style.MeetingDetail";
import {StyledTitle} from "../Home/Style.Home";

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

const MeetingDetail: FC<React.PropsWithChildren<IMeetingDetailProps>> = ({
                                                                             meeting,
                                                                             speakers: mySpeakers,
                                                                         }) => {
    const {width} = useWindowSize();

    useEffect(() => {
        document.title = `${meeting.title} — ${conferenceData.title} — ${conferenceData.edition}`;
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
                                <p style={{
                                    textAlign: "left",
                                    marginTop: "0.6rem"
                                }}>
                                    <a
                                        href={meeting.slidesURL}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            textDecoration: "none",
                                            color: Color.DARK_BLUE
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
                                        </svg>
                                        {" "}
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
                            title={meeting.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                    <StyledVideoTagsContainer>
                        {meeting.videoTags?.map((tag) => <Tag text={tag}
                                                              key={tag}/>)}
                    </StyledVideoTagsContainer>
                    <section>
                        <StyledVoteTalkLink
                            href={`https://openfeedback.io/devbcn24/0/${meeting.id}`}
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
                        ></AddToCalendarButton>
                    </section>
                </StyledVideoContainer>
                <StyledSpeakerDetailContainer
                    className="speaker-details-Container">
                    <StyledLessThan src={LessThanIconWhite}/>
                    <StyledDetailsContainer className="details-container-inner">
                        <StyledRightContainer>
                            {finalMeetingInfo.speakers?.map((speaker) => (
                                <StyledNameContainer className="DetailsTitle"
                                                     key={speaker.id}>
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
                                        <Link
                                            to={`${ROUTE_2024_SPEAKER_DETAIL}/${speaker.id}`}>
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
                        to={ROUTE_2024_TALKS}
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