import React, { useMemo } from "react";

import {
  StyledSessionSection,
  StyledTrackInfo,
} from "@views/Talks/Talks.style";

import { TalkCard } from "./TalkCard";

import type { IGroup } from "@/types/sessions";
import type { FC } from "react";

interface TrackInfoProps {
  track: IGroup;
  year: string;
  openFeedbackId: string;
}

const useGenerateAnchorName = (trackName: string) => {
  const visibleTodos = useMemo(() => {
    return trackName
      .split(/\s+/)
      .map((word) => word.replace(/,$/, "").toLowerCase());
  }, [trackName]);
  return visibleTodos[0];
};

const TrackInformation: FC<React.PropsWithChildren<TrackInfoProps>> = ({
  track,
  year,
  openFeedbackId,
}) => {
  const anchorName = useGenerateAnchorName(track.groupName);

  return (
    <div style={{ marginLeft: "40px" }} className="track-information">
      <StyledTrackInfo id={anchorName}>{track.groupName}</StyledTrackInfo>
      <StyledSessionSection>
        {Array.isArray(track.sessions) &&
          track.sessions.map((session) => (
            <TalkCard
              talk={session}
              key={session.id}
              year={year}
              openFeedbackId={openFeedbackId}
            />
          ))}
      </StyledSessionSection>
    </div>
  );
};

export default React.memo(TrackInformation);
