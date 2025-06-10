import React from "react";
import { TalkCard as CommonTalkCard, TalkCardProps } from "../common/TalkCard";

export type { TalkCardProps };

export const TalkCard: React.FC<React.PropsWithChildren<TalkCardProps>> = (
  props,
) => {
  return <CommonTalkCard {...props} />;
};
