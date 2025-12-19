import { format, isWithinInterval, parseISO } from "date-fns";
import { useMemo, useState } from "react";
import QRCode from "react-qr-code";

import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { Color } from "@styles/colors";

import type { IGroup, Session } from "@/types/sessions";
import type { ChangeEvent, FC } from "react";

interface QrCodeProps {
  currentDateTime: Date;
  openFeedbackId: string;
  tracks?: Array<IGroup>;
}

interface Track {
  name: string;
  id: number;
}

const areTracksAvailable = (availableTracks: Set<Track>) =>
  availableTracks.size > 0;

const QrCode: FC<React.PropsWithChildren<QrCodeProps>> = ({
  currentDateTime,
  openFeedbackId,
  tracks,
}) => {
  const availableTracks: Set<Track> = useMemo<Set<Track>>(() => {
    const list: Track[] =
      tracks
        ?.flatMap((group) => group.sessions)
        .filter((session) =>
          isWithinInterval(currentDateTime, {
            start: session.startsAt,
            end: session.endsAt,
          }),
        )
        ?.map((session) => ({
          name: session.room,
          id: session.roomId,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)) ?? [];

    return new Set(list);
  }, [tracks, currentDateTime]);

  const [selectedTrack, setSelectedTrack] = useState<number>(
    Array.from(availableTracks)?.at(0)?.id ?? 0,
  );
  const availableTalks: Array<Session> | undefined = tracks
    ?.map((track: IGroup) => track.sessions)
    .flat(1)
    .filter((talk) =>
      isWithinInterval(currentDateTime, {
        start: talk.startsAt,
        end: talk.endsAt,
      }),
    );

  const [session, setSession] = useState<Session | undefined>(
    availableTalks?.at(0),
  );

  const [qrValue, setQrValue] = useState(
    "https://openfeedback.io/TG4hBcL7iPtV2LecVdHu/2025-07-09/945091",
  );

  const setQrCodeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const qrCode: number = parseInt(e.target.value);
    e.preventDefault();
    setSelectedTrack(qrCode);
    setSession(availableTalks?.filter((talk) => talk.roomId === qrCode)[0]);
    if (session !== undefined)
      setQrValue(
        `https://openfeedback.io/${openFeedbackId}/${format(parseISO(session.startsAt), "yyyy-MM-dd")}/${session.id}`,
      );
  };

  return (
    <SectionWrapper color={Color.WHITE} marginTop={8}>
      <h1>OpenFeedback QR Code</h1>
      <div
        style={{
          width: "85vh",
          background: "white",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto 200px",
          alignItems: "center",
        }}
      >
        <p>{currentDateTime.toLocaleString()}</p>
        {areTracksAvailable(availableTracks) && (
          <>
            <h2>Choose track</h2>
            <select onChange={setQrCodeHandler} value={selectedTrack}>
              {Array.from(availableTracks).map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </>
        )}
        <br />
        {session && (
          <p>
            <strong>
              {session.speakers.map((speaker) => speaker.name).join(", ")}
            </strong>{" "}
            — {session.title}
          </p>
        )}
        <QRCode value={qrValue} size={512} />
      </div>
    </SectionWrapper>
  );
};
export default QrCode;
