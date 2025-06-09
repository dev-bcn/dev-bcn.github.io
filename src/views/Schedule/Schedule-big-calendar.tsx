import { MOBILE_BREAKPOINT } from "@constants/BreakPoints";
import { Color } from "@styles/colors";
import React, { FC, useCallback, useMemo, useState } from "react";

import LessThanBlueWhiteIcon from "@assets/images/MoreThanBlueWhiteIcon.svg";
import MoreThanBlueWhiteIcon from "@assets/images/LessThanBlueWhiteIcon.svg";
import SectionWrapper from "@components/SectionWrapper/SectionWrapper";
import TitleSection from "@components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
import data from "@data/2025.json";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledScheduleSection,
} from "@styles/Schedule/Schedule.style";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useFetchTalks } from "@hooks/useFetchTalks";
import { CustomToolbar } from "@views/Schedule/CustomToolbar";
import { backgroundEvents } from "@views/Schedule/backgroundEvents";
import {
  AdaptedEvent,
  AdaptedProps,
  reactCalendarAdapter,
} from "@views/Schedule/reactCalendarAdapter";
import { CalendarModal } from "@views/Schedule/CalendarModal";

const ScheduleBigCalendar: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<
    (AdaptedEvent & { resourceId?: number | string }) | null
  >(null);

  const handleSelectEvent = useCallback(
    (
      event: Event & {
        resourceId?: number | string;
      },
    ) => {
      setSelectedEvent(event);
      setIsModalOpen(true);
      console.log("Handle Select event, modal is open: ", isModalOpen);
    },
    [isModalOpen],
  );

  const handleOnClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    console.log("Handle close, modal is open: ", isModalOpen);
  }, [isModalOpen]);

  const {
    isLoading: _isLoading,
    error: _error,
    data: talksData,
  } = useFetchTalks();

  const { defaultDate, views, min, max } = useMemo(
    () => ({
      defaultDate: new Date(2025, 6, 8),
      views: ["day"],
      min: new Date(2025, 6, 8, 8, 0, 0, 0),
      max: new Date(2025, 6, 8, 21, 0, 0, 0),
    }),
    [],
  );
  const localizer = momentLocalizer(moment);

  useDocumentTitleUpdater("Schedule - 2025", data.edition);

  const { events: myEventsList, resources } = useMemo(
    (): AdaptedProps => reactCalendarAdapter(talksData),
    [talksData],
  );

  const allowedNavigableDates = useMemo(
    () => [
      new Date(2025, 6, 8), // July 8
      new Date(2025, 6, 9), // July 9
      new Date(2025, 6, 10), // July 10
    ],
    [],
  );

  if (_error) {
    return <div>Error: {_error.toString()}</div>;
  }
  if (_isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SectionWrapper color={Color.WHITE} marginTop={6}>
        <CalendarModal
          isOpen={isModalOpen}
          info={selectedEvent}
          onClose={handleOnClose}
        />

        <StyledScheduleSection>
          <TitleSection
            title="SCHEDULE"
            subtitle="Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP."
            color={Color.BLUE}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={LessThanBlueWhiteIcon} />
              <StyledMoreIcon src={MoreThanBlueWhiteIcon} />
            </>
          )}
          <Calendar
            components={{
              toolbar: (toolbarProps) => (
                <CustomToolbar
                  {...toolbarProps}
                  allowedDates={allowedNavigableDates}
                />
              ),
            }}
            backgroundEvents={backgroundEvents}
            defaultDate={defaultDate}
            defaultView={Views.DAY}
            endAccessor="end"
            events={myEventsList}
            localizer={localizer}
            max={max}
            min={min}
            onSelectEvent={handleSelectEvent}
            resourceIdAccessor="resourceId"
            resourceTitleAccessor="resourceTitle"
            resources={resources}
            showMultiDayTimes
            startAccessor="start"
            step={30}
            style={{ width: "100%", height: "100vh" }}
            timeslots={1}
            views={views}
          />
        </StyledScheduleSection>
      </SectionWrapper>
    </>
  );
};

export default ScheduleBigCalendar;
