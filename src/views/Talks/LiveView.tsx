import React, { FC } from "react";
import { useFetchLiveView } from "./UseFetchTalks";
import Loading from "../../components/Loading/Loading";
import moment from "moment";
import { UngroupedSession } from "./liveView.types";
import conference from "../../data/2024.json";
import { TalkCard, TalkCardProps } from "./components/TalkCard";
import { QuestionAnswers, SessionCategory, SessionSpeaker } from "./Talk.types";
import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../constants/BreakPoints";
import * as Sentry from "@sentry/react";

export const talkCardAdapter = (
  session: UngroupedSession,
  index: number,
): TalkCardProps => {
  return {
    index: index,
    key: parseInt(session.id),
    talk: {
      id: parseInt(session.id),
      title: session.title,
      talkImage: 1,
      speakers: session.speakers.map((speaker) => ({
        id: speaker.id,
        name: speaker.name,
      })) as SessionSpeaker[],
      level: "Beginner",
      link: "",
      tags: [],
      track: session.room,
      categories: session.categories.map((category) => ({
        id: category.id,
        name: category.name,
        categoryItems: category.categoryItems,
      })) as SessionCategory[],
      questionAnswers: session.questionAnswers.map((qa) => ({
        id: qa.id,
        question: qa.question,
        answer: qa.answer,
      })) as QuestionAnswers[],
    },
    showTrack: true, // Default value, adjust as necessary
  };
};

const StyledMain = styled.main`
  padding-left: 2rem;
  padding-top: 4rem;
  padding-bottom: 7rem;

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-bottom: 40rem;
    padding-left: 1rem;
  }

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    padding-bottom: 20rem;
    padding-left: 1rem;
  }
`;

export const LiveView: FC<React.PropsWithChildren<unknown>> = () => {
  const { isLoading, error, data } = useFetchLiveView();

  const [today, setToday] = React.useState(new Date(2024, 5, 13, 12, 40));
  const isBetween = (talk: UngroupedSession): boolean =>
    today >= new Date(talk.startsAt) && today <= new Date(talk.endsAt);

  if (error) {
    Sentry.captureException(error);
  }

  React.useEffect(() => {
    document.title = `Live view - ${conference.title} - ${conference.edition} Edition`;
    const interval = setInterval(() => {
      setToday((prevDate) => {
        const newDate = new Date(prevDate);
        if (prevDate > new Date(2024, 5, 14, 21, 0)) {
          newDate.setFullYear(2024, 5, 13);
          newDate.setTime(8);
        }
        newDate.setMinutes(newDate.getMinutes() + 10);
        return newDate;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledMain>
      <img
        src="images/logo.png"
        alt={conference.title}
        style={{ width: "25%" }}
      />
      <h1 style={{ marginTop: "1rem" }}>
        {conference.title} - {conference.edition} Edition
      </h1>

      {isLoading && <Loading />}
      <article>Now: {moment(today).format("LLL")}</article>
      {data?.sessions.filter(isBetween).map((session, index) => {
        return <TalkCard {...talkCardAdapter(session, index)} />;
      })}
    </StyledMain>
  );
};
