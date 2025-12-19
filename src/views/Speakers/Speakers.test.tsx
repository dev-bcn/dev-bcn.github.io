import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type MockedFunction, vi } from "vitest";

import Speakers from "./Speakers";
import { gaEventTracker } from "../../components/analytics/Analytics";
import { useFetchSpeakers } from "../../hooks/useFetchSpeakers";
import {
  createMockSpeakers,
  renderWithRouterAndQueryClient,
} from "../../utils/testing/speakerTestUtils";

// Mock the useFetchSpeakers hook
vi.mock("../../hooks/useFetchSpeakers");
const mockedUseFetchSpeakers = useFetchSpeakers as MockedFunction<
  typeof useFetchSpeakers
>;

// Mock the gaEventTracker
vi.mock("../../components/analytics/Analytics", () => ({
  gaEventTracker: vi.fn(),
}));

// Mock the useWindowSize hook
vi.mock("react-use", () => ({
  useWindowSize: vi.fn(() => ({ width: 1200 })),
}));

// Mock Sentry
vi.mock("@sentry/react", () => ({
  captureException: vi.fn(),
}));

// Mock the 2026.json data
vi.mock("../../data/2026.json", () => {
  const mockData = {
    hideSpeakers: false,
    edition: "2026",
    title: "DevBcn",
    cfp: {
      startDay: "2026-01-01T00:00:00",
      endDay: "2026-03-01T00:00:00",
      link: "https://example.com/cfp",
    },
  };
  return { default: mockData };
});

describe("Speakers component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays loading state when data is being fetched", () => {
    // Mock the hook to return loading state
    mockedUseFetchSpeakers.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      isSuccess: false,
    });

    renderWithRouterAndQueryClient(<Speakers />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays speakers when data is loaded", () => {
    const mockSpeakers = createMockSpeakers(3);

    // Mock the hook to return success state with data
    mockedUseFetchSpeakers.mockReturnValue({
      data: mockSpeakers,
      isLoading: false,
      error: null,
      isSuccess: true,
    });

    renderWithRouterAndQueryClient(<Speakers />);

    // Check that each speaker's name is displayed
    mockSpeakers.forEach((speaker) => {
      expect(screen.getByText(speaker.fullName)).toBeInTheDocument();
    });
  });

  it("displays CFP button when current date is within CFP period", () => {
    // Mock the hook to return success state with data
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    });

    // Mock Date to return a date within the CFP period
    const originalDate = Date;
    const mockDate = new Date("2026-01-15");

    // This ensures that both new Date() and Date.now() use our mock date
    global.Date = class extends Date {
      constructor(...args: unknown[]) {
        super();
        if (args.length === 0) {
          return mockDate;
        }
        return new originalDate(...(args as ConstructorParameters<typeof originalDate>));
      }

      static now() {
        return mockDate.getTime();
      }
    } as unknown as typeof Date;

    renderWithRouterAndQueryClient(<Speakers />);

    const cfpButton = screen.getByText(/Apply to be a Speaker/i);
    expect(cfpButton).toBeInTheDocument();

    // Restore original Date
    global.Date = originalDate;
  });

  it("tracks CFP button clicks", async () => {
    // Mock the hook to return success state with data
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    });

    // Mock Date to return a date within the CFP period
    const originalDate = Date;
    const mockDate = new Date("2026-01-15");

    // This ensures that both new Date() and Date.now() use our mock date
    global.Date = class extends Date {
      constructor(...args: unknown[]) {
        super();
        if (args.length === 0) {
          return mockDate;
        }
        return new originalDate(...(args as ConstructorParameters<typeof originalDate>));
      }

      static now() {
        return mockDate.getTime();
      }
    } as unknown as typeof Date;

    renderWithRouterAndQueryClient(<Speakers />);

    const cfpButton = screen.getByText(/Apply to be a Speaker/i);
    await userEvent.click(cfpButton);

    expect(gaEventTracker).toHaveBeenCalledWith("CFP", "CFP");

    // Restore original Date
    global.Date = originalDate;
  });
});
