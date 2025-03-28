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

// Mock the useFetchSpeakers hook
jest.mock("../../hooks/useFetchSpeakers");
const mockedUseFetchSpeakers = useFetchSpeakers as jest.MockedFunction<
  typeof useFetchSpeakers
>;

// Mock the gaEventTracker
jest.mock("../../components/analytics/Analytics", () => ({
  gaEventTracker: jest.fn(),
}));

// Mock the useWindowSize hook
jest.mock("react-use", () => ({
  useWindowSize: jest.fn(),
}));

// Mock Sentry
jest.mock("@sentry/react", () => ({
  captureException: jest.fn(),
}));

// Mock the 2024.json data
jest.mock("../../data/2025.json", () => ({
  hideSpeakers: false,
  edition: "2024",
  title: "DevBcn",
  cfp: {
    startDay: "2023-01-01T00:00:00",
    endDay: "2023-02-01T00:00:00",
    link: "https://example.com/cfp",
  },
}));

describe("Speakers component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    require("react-use").useWindowSize.mockReturnValue({ width: 1200 });
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

  it("displays a message when speakers are hidden", () => {
    // Mock the hook to return success state with data
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    });

    // Temporarily override the hideSpeakers value
    const originalModule = jest.requireMock("../../data/2025.json");
    const originalHideSpeakers = originalModule.hideSpeakers;
    originalModule.hideSpeakers = true;

    renderWithRouterAndQueryClient(<Speakers />);

    expect(screen.getByText(/No selected speakers yet/i)).toBeInTheDocument();

    // Restore the original value
    originalModule.hideSpeakers = originalHideSpeakers;
  });

  it.skip("displays CFP button when current date is within CFP period", () => {
    // Mock the hook to return success state with data
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    });

    // Mock Date.now to return a date within the CFP period
    const originalDate = Date;
    global.Date = class extends Date {
      constructor() {
        super();
      }

      static now() {
        return new Date("2023-01-15").getTime();
      }
    } as typeof Date;

    renderWithRouterAndQueryClient(<Speakers />);

    const cfpButton = screen.getByText(/Apply to be a Speaker/i);
    expect(cfpButton).toBeInTheDocument();

    // Restore original Date
    global.Date = originalDate;
  });

  it.skip("tracks CFP button clicks", async () => {
    // Mock the hook to return success state with data
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    });

    // Mock Date.now to return a date within the CFP period
    const originalDate = Date;
    global.Date = class extends Date {
      constructor() {
        super();
      }

      static now() {
        return new Date("2023-01-15").getTime();
      }
    } as typeof Date;

    renderWithRouterAndQueryClient(<Speakers />);

    const cfpButton = screen.getByText(/Apply to be a Speaker/i);
    await userEvent.click(cfpButton);

    expect(gaEventTracker).toHaveBeenCalledWith("CFP", "CFP");

    // Restore original Date
    global.Date = originalDate;
  });
});
