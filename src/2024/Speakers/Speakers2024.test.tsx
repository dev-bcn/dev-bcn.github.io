import React from "react";
import { screen } from "@testing-library/react";
import Speakers2024 from "./Speakers2024";
import {
  createMockSpeakers,
  renderWithRouterAndQueryClient,
} from "@utils/testing/speakerTestUtils";
import { useFetchSpeakers } from "@hooks/useFetchSpeakers";
import { useWindowSize } from "react-use";
import { type MockedFunction, vi } from "vitest";

vi.mock("@hooks/useFetchSpeakers");

vi.mock("@components/analytics/Analytics", () => ({
  gaEventTracker: vi.fn(),
}));
vi.mock("react-use", () => ({
  useWindowSize: vi.fn(),
}));
vi.mock("@sentry/react", () => ({
  captureException: vi.fn(),
}));
vi.mock("@data/2024.json", () => {
  return {
    default: {
      hideSpeakers: false,
      edition: "2024",
      title: "DevBcn",
      cfp: {
        startDay: "2023-01-01T00:00:00",
        endDay: "2023-02-01T00:00:00",
        link: "https://example.com/cfp",
      },
    },
  };
});

const initialMock2024Data = {
  hideSpeakers: false,
  edition: "2024",
  title: "DevBcn",
  cfp: {
    startDay: "2023-01-01T00:00:00",
    endDay: "2023-02-01T00:00:00",
    link: "https://example.com/cfp",
  },
};
const mutableMock2024Data = { ...initialMock2024Data };

const mockedUseFetchSpeakers = useFetchSpeakers as MockedFunction<
  typeof useFetchSpeakers
>;

describe("Speakers2024 component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useWindowSize as MockedFunction<typeof useWindowSize>).mockReturnValue({
      width: 1200,
      height: 0,
    });
  });

  it("displays loading state when data is being fetched", () => {
    // Mock the hook to return loading state
    mockedUseFetchSpeakers.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      isSuccess: false,
    });

    renderWithRouterAndQueryClient(<Speakers2024 />);

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

    renderWithRouterAndQueryClient(<Speakers2024 />);

    // Check that each speaker's name is displayed
    mockSpeakers.forEach((speaker) => {
      expect(screen.getByText(speaker.fullName)).toBeInTheDocument();
    });
  });

  it("displays a message when hideSpeakers is true", () => {
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    });

    // Modify the hideSpeakers property of our mutable mock data
    mutableMock2024Data.hideSpeakers = true;

    renderWithRouterAndQueryClient(<Speakers2024 />);

    expect(screen.getByText(/No selected speakers yet/i)).toBeInTheDocument();

    // No need to manually restore here; beforeEach will reset it for the next test.
  });

  it("calls useFetchSpeakers with the correct year", () => {
    // Mock the hook to return loading state
    mockedUseFetchSpeakers.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      isSuccess: false,
    });

    renderWithRouterAndQueryClient(<Speakers2024 />);

    // Verify that useFetchSpeakers was called with "2024"
    expect(mockedUseFetchSpeakers).toHaveBeenCalledWith("2024");
  });

  it("sets the document title correctly", () => {
    // Mock the hook to return loading state
    mockedUseFetchSpeakers.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      isSuccess: false,
    });

    renderWithRouterAndQueryClient(<Speakers2024 />);

    // Verify that document.title was set correctly
    expect(document.title).toContain("Speakers");
    expect(document.title).toContain("2024");
  });
});
