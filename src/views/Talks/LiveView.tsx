import React, { FC, useCallback, useEffect, useMemo } from "react";
import { useFetchLiveView } from "@hooks/useFetchTalks";
import Loading from "@components/Loading/Loading";
import { UngroupedSession } from "./liveView.types";
import conference from "@data/2025.json";
import { TalkCard } from "./components/TalkCard";
import { StyledMain } from "./Talks.style";
import { talkCardAdapter } from "./TalkCardAdapter";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";
import { useDateInterval } from "@hooks/useDateInterval";
import { isWithinInterval } from "date-fns";

const LiveView: FC<React.PropsWithChildren<unknown>> = () => {
  const { isLoading, error, data } = useFetchLiveView();
  const today = useMemo(() => new Date(), []);
  const { isConferenceActive } = useDateInterval(today, conference);

  const getPredicate = useCallback(
    () => (session: UngroupedSession) =>
      isWithinInterval(today, { start: session.startsAt, end: session.endsAt }),
    [today],
  );

  const filteredTalks = useMemo(() => {
    return data?.sessions?.filter(getPredicate());
  }, [data, getPredicate]);

  useEffect(() => {
    document.title = `Live view - ${conference.title} - ${conference.edition} Edition`;
  }, []);

  useSentryErrorReport(error);

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
      {!isConferenceActive && <h4>The live schedule is not ready yet</h4>}
      {filteredTalks?.map((session) => (
        <TalkCard key={session.id} {...talkCardAdapter(session)} />
      ))}
    </StyledMain>
  );
};

export default LiveView;
