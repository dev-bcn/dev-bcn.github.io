import React from "react";
import { screen } from "@testing-library/react";
import Speakers from "./Speakers";
import {
  createMockSpeakers,
  renderWithRouterAndQueryClient,
} from "../../utils/testing/speakerTestUtils";
import { useFetchSpeakers } from "../../hooks/useFetchSpeakers";
import userEvent from "@testing-library/user-event";
import { gaEventTracker } from "../../components/analytics/Analytics";
import { vi } from "vitest";
// Mock the useFetchSpeakers hook
vi.mock("../../hooks/useFetchSpeakers");
const mockedUseFetchSpeakers = useFetchSpeakers as vi.MockedFunction<
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

// Mock the 2025.json data
vi.mock("../../data/2025.json", () => {
  const mockData = {
    hideSpeakers: false,
    edition: "2024",
    title: "DevBcn",
    cfp: {
      startDay: "2023-01-01T00:00:00",
      endDay: "2023-02-01T00:00:00",
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
    const mockDate = new Date("2023-01-15");

    // This ensures that both new Date() and Date.now() use our mock date
    global.Date = class extends Date {
      constructor(...args) {
        if (args.length === 0) {
          return mockDate;
        }
        return super(...args);
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
    const mockDate = new Date("2023-01-15");

    // This ensures that both new Date() and Date.now() use our mock date
    global.Date = class extends Date {
      constructor(...args) {
        if (args.length === 0) {
          return mockDate;
        }
        return super(...args);
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
