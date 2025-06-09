import React, { FC, useCallback, useMemo } from "react";
import { ToolbarProps } from "react-big-calendar";
import moment from "moment";

interface CustomToolbarComponentProps extends ToolbarProps {
  allowedDates: Date[];
}

export const CustomToolbar: FC<CustomToolbarComponentProps> = ({
  date,
  onNavigate,
  allowedDates,
}) => {
  const sortedAllowedDates = useMemo(
    () => allowedDates.slice().sort((a, b) => a.getTime() - b.getTime()),
    [allowedDates],
  );

  const goToWednesday = useCallback(() => {
    onNavigate("DATE", new Date(2025, 6, 9));
  }, [onNavigate]);

  const goToThursday = useCallback(() => {
    onNavigate("DATE", sortedAllowedDates[2]);
  }, [sortedAllowedDates, onNavigate]);

  const goToTuesday = useCallback(() => {
    onNavigate("DATE", sortedAllowedDates[0]);
  }, [sortedAllowedDates, onNavigate]);

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={goToTuesday}>
          Tue, 8th
        </button>
        <button type="button" onClick={goToWednesday}>
          Wed, 9th
        </button>
        <button type="button" onClick={goToThursday}>
          Thu, 10th
        </button>
      </span>
      <span className="rbc-toolbar-label">
        {moment(date).format("dddd, MMMM D, YYYY")}
      </span>
    </div>
  );
};
