import React, {FC, useCallback, useEffect, useMemo} from "react";
import {useFetchLiveView} from "./UseFetchTalks";
import Loading from "../../components/Loading/Loading";
import conference from "../../data/2024.json";
import * as Sentry from "@sentry/react";
import {UngroupedSession} from "../../views/Talks/liveView.types";
import {TalkCard} from "../../views/Talks/components/TalkCard";
import {talkCardAdapter} from "../../views/Talks/TalkCardAdapter";
import {StyledMain} from "../../views/Talks/Talks.style";

const LiveView: FC<React.PropsWithChildren<unknown>> = () => {
    const {isLoading, error, data} = useFetchLiveView();
    const today = useMemo(() => new Date(), []);

    const isBetween = useCallback(
        (today: Date, startDate: string, endDate: string): boolean => {
            return today >= new Date(startDate) && today <= new Date(endDate);
        },
        [],
    );

    const getPredicate = useCallback(
        () => (session: UngroupedSession) =>
            isBetween(today, session.startsAt, session.endsAt),
        [today, isBetween],
    );

    const filteredTalks = useMemo(() => {
        return data?.sessions?.filter(getPredicate());
    }, [data, getPredicate]);

    useEffect(() => {
        document.title = `Live view - ${conference.title} - ${conference.edition} Edition`;
    }, []);

    useEffect(() => {
        if (error) {
            Sentry.captureException(error);
        }
    }, [error]);

    return (
        <StyledMain>
            <img
                src="/images/logo.png"
                alt={conference.title}
                style={{width: "25%"}}
            />
            <h1 style={{marginTop: "1rem"}}>
                {conference.title} - {conference.edition} Edition
            </h1>

            {isLoading && <Loading/>}
            <article>Live Schedule</article>
            {!isBetween(today, conference.startDay, conference.endDay) && (
                <h4>The live schedule is not ready yet</h4>
            )}
            {filteredTalks?.map((session) => (
                <TalkCard key={session.id} {...talkCardAdapter(session)} />
            ))}
        </StyledMain>
    );
};

export default LiveView;
