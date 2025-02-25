import React, {FC} from "react";
import {Link} from "react-router";
import {Tag} from "../../../components/Tag/Tag";
import {
    ROUTE_2024_SPEAKER_DETAIL,
    ROUTE_2024_TALK_DETAIL,
} from "../../../constants/routes";
import {Color} from "../../../styles/colors";
import {StyledJobsInfo} from "../../../views/JobOffers/components/JobsCard";
import {
    StyledSessionCard,
    StyledSessionText,
    StyledTagsWrapper,
    StyledTalkSpeaker,
    StyledTalkTitle
} from "../../../views/Talks/Talks.style";
import {StyledVoteTalkLink} from "../../../views/MeetingDetail/MeetingDetail";
import {
    extractSessionCategoryInfo,
    extractSessionTags
} from "../../../services/sessionsAdapter";
import {
    CategoryItemEnum,
    QuestionAnswers,
    SessionCategory,
    SessionSpeaker
} from "../../../types/sessions";

export interface TalkCardProps {
    talk: {
        id: number;
        title: string;
        talkImage?: number;
        speakers: SessionSpeaker[];
        level?: string;
        link?: string;
        tags?: string[];
        track: string;
        categories: SessionCategory[];
        questionAnswers: QuestionAnswers[];
    };
    showTrack?: boolean;
}

export const TalkCard: FC<React.PropsWithChildren<TalkCardProps>> = ({
                                                                         showTrack = false,
                                                                         talk,
                                                                     }) => {
    return (
        <StyledSessionCard>
            <StyledJobsInfo>
                <StyledTalkTitle to={`${ROUTE_2024_TALK_DETAIL}/${talk.id}`}>
                    {talk.title}
                </StyledTalkTitle>
                <StyledSessionText>
                    {talk.speakers.map((speaker: SessionSpeaker) => (
                        <StyledTalkSpeaker key={speaker.id}>
                            <Link
                                to={`${ROUTE_2024_SPEAKER_DETAIL}/${speaker.id}`}>
                                {speaker.name}
                            </Link>
                        </StyledTalkSpeaker>
                    ))}
                </StyledSessionText>
                <StyledSessionText>
                    {`${extractSessionCategoryInfo(
                        talk.categories,
                        CategoryItemEnum.Format,
                    )} `}
                    {extractSessionCategoryInfo(talk.categories)}{" "}
                </StyledSessionText>
                {showTrack && (
                    <StyledSessionText>
                        <strong>Track: </strong>
                        {extractSessionCategoryInfo(
                            talk.categories,
                            CategoryItemEnum.Track,
                        )}
                    </StyledSessionText>
                )}
                <StyledTagsWrapper>
                    {extractSessionTags(talk.questionAnswers)?.map((tag) => {
                        return <Tag key={tag} text={tag}
                                    textColor={Color.WHITE}/>;
                    })}
                </StyledTagsWrapper>
                <section style={{display: "none"}}>
                    <StyledVoteTalkLink
                        href={`https://openfeedback.io/devbcn24/0/${talk.id}`}
                        target={"_blank"}
                        rel="noreferrer noopener"
                    >
                        🗳️ <strong>Vote this talk</strong>
                    </StyledVoteTalkLink>
                </section>
            </StyledJobsInfo>
        </StyledSessionCard>
    );
};
