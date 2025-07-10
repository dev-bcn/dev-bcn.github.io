import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useFetchLiveView } from "@hooks/useFetchTalks";
import { Loading } from "@components/Loading/Loading";
import { UngroupedSession } from "./liveView.types";
import conference from "@data/2025.json";
import { TalkCard } from "./components/TalkCard";
import { StyledAgenda, StyledMain } from "./Talks.style";
import { talkCardAdapter } from "./TalkCardAdapter";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";
import { useDateInterval } from "@hooks/useDateInterval";
import { addMinutes, isWithinInterval, subMinutes } from "date-fns";
import { Link } from "react-router-dom";
import { ROUTE_SCHEDULE } from "@constants/routes";
// @ts-expect-error some quirky import
import { AnimatePresence } from "framer-motion";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";

export const LiveView: FC<React.PropsWithChildren<unknown>> = () => {
  const { isLoading, error, data } = useFetchLiveView();
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const { isConferenceActive } = useDateInterval(currentTime, conference);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const getPredicate = useCallback(
    () => (session: UngroupedSession) =>
      isWithinInterval(currentTime, {
        start: subMinutes(session.startsAt, 10),
        end: addMinutes(session.endsAt, 30),
      }),
    [currentTime],
  );

  const filteredTalks = useMemo(() => {
    return data?.filter(getPredicate());
  }, [data, getPredicate]);

  useDocumentTitleUpdater("Live View", conference.edition);
  useSentryErrorReport(error);

  return (
    <StyledMain>
      <img
        src="/images/logo.png"
        alt={conference.title}
        style={{ width: "25%" }}
      />
      <h1 style={{ marginTop: "1rem" }}>
        {conference.title} - {conference.edition} Edition
      </h1>

      {isLoading && <Loading />}

      {!isConferenceActive && <h4>The live schedule is not ready yet</h4>}
      <StyledAgenda>
        <AnimatePresence>
          {isConferenceActive && filteredTalks?.length === 0 && (
            <p style={{ textAlign: "center", flexGrow: "4" }}>
              No sessions available, enjoy the break!
            </p>
          )}
          {filteredTalks?.map((session) => (
            <TalkCard
              key={session.id}
              {...talkCardAdapter(session)}
              openFeedbackId={conference.openFeedbackId}
            />
          ))}
        </AnimatePresence>
      </StyledAgenda>
      {process.env.NODE_ENV === "test" ? (
        <a
          href={ROUTE_SCHEDULE}
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            margin: "0.5rem",
          }}
        >
          📅 Back to schedule
        </a>
      ) : (
        <Link
          to={ROUTE_SCHEDULE}
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            margin: "0.5rem",
          }}
        >
          📅 Back to schedule
        </Link>
      )}
    </StyledMain>
  );
};
