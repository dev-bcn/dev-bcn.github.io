import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import * as useFetchTalksModule from "@hooks/useFetchTalks";
import { useFetchLiveView } from "@hooks/useFetchTalks";
import Loading from "@components/Loading/Loading";
import { UngroupedSession } from "./liveView.types";
import conference from "@data/2025.json";
import { TalkCard } from "./components/TalkCard";
import { StyledAgenda, StyledMain } from "./Talks.style";
import { talkCardAdapter } from "./TalkCardAdapter";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";
import { useDateInterval } from "@hooks/useDateInterval";
import { isWithinInterval } from "date-fns";
import { ROUTE_SCHEDULE } from "@constants/routes";
import { AnimatePresence } from "framer-motion";
import {
  renderWithQueryClientAndRouter,
  screen,
} from "../../utils/testing/testUtils";
import { type MockedFunction, vi } from "vitest";

const LiveView: FC<React.PropsWithChildren<unknown>> = () => {
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
        start: session.startsAt,
        end: session.endsAt,
      }),
    [currentTime],
  );

  const filteredTalks = useMemo(() => {
    return data?.filter(getPredicate());
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
      <article>
        {`${currentTime.toLocaleDateString()} - ${currentTime.toLocaleTimeString()}`}{" "}
        - Live Schedule
      </article>

      {!isConferenceActive && <h4>The live schedule is not ready yet</h4>}
      <StyledAgenda>
        <AnimatePresence>
          {isConferenceActive && filteredTalks?.length === 0 && (
            <p style={{ textAlign: "center", flexGrow: "4" }}>
              No sessions available, enjoy the break!
            </p>
          )}
          {filteredTalks?.map((session) => (
            <TalkCard key={session.id} {...talkCardAdapter(session)} />
          ))}
        </AnimatePresence>
      </StyledAgenda>
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
    </StyledMain>
  );
};

vi.mock("@hooks/useFetchTalks", () => ({
  ...vi.importActual("@hooks/useFetchTalks"),
  useFetchLiveView: vi.fn(),
}));

vi.mock("react-router-dom", () => {
  return {
    Link: ({ children, to, style }) => (
      <a href={to} style={style} data-testid="mock-link">
        {children}
      </a>
    ),
  };
});

// Mock the renderWithQueryClientAndRouter function to avoid using MemoryRouter
vi.mock("../../utils/testing/testUtils", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    renderWithQueryClientAndRouter: actual.renderWithQueryClient,
  };
});

describe("Live view component", () => {
  const originalSetInterval = global.setInterval;
  const originalClearInterval = global.clearInterval;

  let setIntervalMock: MockedFunction<typeof global.setInterval>;
  let clearIntervalMock: MockedFunction<typeof global.clearInterval>;

  beforeEach(() => {
    setIntervalMock = vi.fn(() => {
      return 123;
    });
    clearIntervalMock = vi.fn();

    global.setInterval =
      setIntervalMock as unknown as typeof global.setInterval;
    global.clearInterval =
      clearIntervalMock as unknown as typeof global.clearInterval;

    vi.clearAllMocks();
  });

  afterEach(() => {
    // Restore original implementations
    global.setInterval = originalSetInterval;
    global.clearInterval = originalClearInterval;
  });

  it("renders without crashing", () => {
    vi.spyOn(useFetchTalksModule, "useFetchLiveView").mockReturnValue({
      isLoading: true,
      error: null,
      data: undefined,
      isError: false,
      isSuccess: false,
      isIdle: false,
      status: "loading",
      isFetching: true,
      refetch: vi.fn(),
      remove: vi.fn(),
    });

    renderWithQueryClientAndRouter(<LiveView />);
    const titleElement = screen.getByText(/Live Schedule/);
    expect(titleElement).toBeInTheDocument();
  });

  it("cleans up the interval on unmount", () => {
    vi.spyOn(useFetchTalksModule, "useFetchLiveView").mockReturnValue({
      isLoading: false,
      error: null,
      data: [],
      isError: false,
      isSuccess: true,
      isIdle: false,
      status: "success",
      isFetching: false,
      refetch: vi.fn(),
      remove: vi.fn(),
    });

    const { unmount } = renderWithQueryClientAndRouter(<LiveView />);

    unmount();

    expect(clearIntervalMock).toHaveBeenCalledTimes(1);
    expect(clearIntervalMock).toHaveBeenCalledWith(123); // The mock interval ID
  });
});
