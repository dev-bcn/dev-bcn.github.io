import React, { FC } from "react";
import clsx from "clsx";
import { AdaptedEvent } from "@views/Schedule/reactCalendarAdapter";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  info: (AdaptedEvent & { resourceId?: number | string }) | null;
}

export const CalendarModal: FC<Props> = React.memo(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ isOpen = false, onClose, info }) => {
    // Removed console.log for production code

    if (!isOpen || !info) {
      //console.warn("CalendarModal received invalid props:");
      //return null;
    }

    return (
      <div className={clsx(isOpen && "block", !isOpen && "hidden")}>
        <h1></h1>
      </div>
    );
  },
);

CalendarModal.displayName = "CalendarModal";
