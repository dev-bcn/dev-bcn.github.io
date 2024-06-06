import React, { FC } from "react";
import { useFetchLiveView } from "./UseFetchTalks";
import Loading from "../../components/Loading/Loading";
import { UngroupedSession } from "./liveView.types";
import conference from "../../data/2024.json";
import { TalkCard } from "./components/TalkCard";
import * as Sentry from "@sentry/react";
import { StyledMain } from "./Talks.style";
import { talkCardAdapter } from "./TalkCardAdapter";

export const LiveView: FC<React.PropsWithChildren<unknown>> = () => {
  const { isLoading, error, data } = useFetchLiveView();

  const [today] = React.useState(new Date());

  const isBetween = (
    today: Date,
    startDate: string,
    endDate: string,
  ): boolean => today >= new Date(startDate) && today <= new Date(endDate);

  const getPredicate = () => (session: UngroupedSession) =>
    isBetween(today, session.startsAt, session.endsAt);

  const [filteredTalks, setFilteredTalks] = React.useState<
    UngroupedSession[] | undefined
  >(data?.sessions.filter(getPredicate()));

  if (error) {
    Sentry.captureException(error);
  }

  React.useEffect(() => {
    document.title = `Live view - ${conference.title} - ${conference.edition} Edition`;
    if (data) {
      setFilteredTalks(data?.sessions.filter(getPredicate()));
    }
  }, [data, today, getPredicate]);

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
      <article>Live Schedule</article>
      {!isBetween(today, conference.startDay, conference.endDay) && (
        <h4>The live schedule is not ready yet </h4>
      )}
      {filteredTalks?.map((session, index) => {
        return <TalkCard {...talkCardAdapter(session, index)} />;
      })}
    </StyledMain>
  );
};
