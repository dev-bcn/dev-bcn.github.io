import React, { FC } from "react";
import { TalkCard } from "./TalkCard";
import { IGroup } from "../Talk.types";

interface TrackInfoProps {
  track: IGroup;
}

const TrackInformation: FC<TrackInfoProps> = ({ track }) => {
  return (
    <>
      <h2>{track.groupName}</h2>
      {track.sessions.map((session) => (
        <TalkCard talk={session} index={session.id} />
      ))}
    </>
  );
};

export default TrackInformation;
