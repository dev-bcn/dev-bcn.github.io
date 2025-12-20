import { screen } from "@testing-library/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockedFunction,
} from "vitest";

import { SpeakersWrapper2025 } from "./SpeakersWrapper2025";
import { useFetchSpeakers } from "../../hooks/useFetchSpeakers";
import { renderWithRouterAndQueryClient } from "../../utils/testing/speakerTestUtils";

// Mock the useFetchSpeakers hook
vi.mock("@hooks/useFetchSpeakers");
const mockedUseFetchSpeakers = useFetchSpeakers as MockedFunction<
  typeof useFetchSpeakers
>;

// Mock the useWindowSize hook
vi.mock("react-use", () => ({
  useWindowSize: vi.fn(() => ({ width: 1200 })),
}));

// Mock Sentry
vi.mock("@sentry/react", () => ({
  captureException: vi.fn(),
}));

// Mock analytics
vi.mock("@components/analytics/Analytics", () => ({
  gaEventTracker: vi.fn(),
}));

// Mock the 2025.json data
vi.mock("@data/2025.json", () => {
  const mockData = {
    hideSpeakers: false,
    edition: "2025",
    title: "DevBcn",
    cfp: {
      startDay: "2025-01-01T00:00:00",
      endDay: "2025-03-01T00:00:00",
      link: "https://example.com/cfp",
    },
  };
  return { default: mockData };
});

describe("SpeakersWrapper2025", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the Speakers component with 2025 conference data", () => {
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    } as ReturnType<typeof useFetchSpeakers>);

    renderWithRouterAndQueryClient(<SpeakersWrapper2025 />);

    // Verify the component renders
    expect(screen.getByText(/SPEAKERS/)).toBeInTheDocument();
  });

  it("passes the correct edition (2025) to useFetchSpeakers hook", () => {
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    } as ReturnType<typeof useFetchSpeakers>);

    renderWithRouterAndQueryClient(<SpeakersWrapper2025 />);

    // Verify the hook was called with the 2025 edition
    expect(mockedUseFetchSpeakers).toHaveBeenCalledWith("2025");
  });

  it("sets the correct document title with 2025 edition", () => {
    mockedUseFetchSpeakers.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      isSuccess: true,
    } as ReturnType<typeof useFetchSpeakers>);

    renderWithRouterAndQueryClient(<SpeakersWrapper2025 />);

    // Verify the document title includes 2025
    expect(document.title).toContain("2025");
    expect(document.title).toContain("Speakers");
  });
});
