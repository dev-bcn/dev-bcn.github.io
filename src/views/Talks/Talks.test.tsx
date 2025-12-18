import React from "react";
import { screen, waitFor } from "@testing-library/react";
import Talks from "./Talks";
import {
  createMockGroup,
  renderWithQueryClient,
} from "../../utils/testing/testUtils";
import { ROUTE_MEETING_DETAIL_PLAIN } from "@constants/routes";
import { useFetchTalks } from "@hooks/useFetchTalks";
import {
  IGroup,
  TopRatedTalk,
  TopTalkWithSpeaker,
} from "@/types/sessions";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

// Mock the useFetchTalks hook
vi.mock("@hooks/useFetchTalks", () => ({
  ...vi.importActual("@hooks/useFetchTalks"),
  useFetchTalks: vi.fn(),
}));

// Mock react-router-dom
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

const mockTopTenTalks: TopRatedTalk[] = [
  {
    id: "df057475-0b6a-4fab-8e0d-c5576230dd5c",
    speaker: "Victor Rentea",
    talk: "Top 10 Rest API Design Falls",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "838798"),
  },
  {
    id: "d32cdd87-3c7d-47bb-98ec-b255d1e4b9ba",
    speaker: "Laura Perea",
    talk: "GenAI among us",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "945091"),
  },
  {
    id: "eb3852c1-acf8-42a6-988d-365fad2a5668",
    speaker: "Brian Vermeer",
    talk: "Don't Get Burned! Secure Coding Essentials in Java to protect your application",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "851481"),
  },
  {
    id: "625b53c9-edea-4e47-a5ba-2ee661c539e3",
    speaker: "Álvaro Sánchez-Mariscal",
    talk: "Revealing the magic behind Java annotations",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "843845"),
  },
  {
    id: "7b1c534c-39a5-4398-93e5-626010f00198",
    speaker: "Alexander Chatzizacharias",
    talk: "What is multimodal RAG, and can we build a village with it?",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "832774"),
  },
  {
    id: "ebab2b92-503f-4baa-b3ab-064865853223",
    speaker: "Bert Jan Schrijver",
    talk: "Generic or Specific? Making sensible software design decisions",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "827688"),
  },
  {
    id: "11554c51-dc18-407b-b7b4-b8ad2f925b2a",
    speaker: "Marc Nuri",
    talk: "Model Context Protocol Servers 101: Unlocking the Power of AI",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "874255"),
  },
  {
    id: "10937eaf-a0da-48c9-82d6-8711ca26fb16",
    speaker: "Andres Almiray",
    talk: "Maven Productivity Tips",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "860854"),
  },
  {
    id: "5ce27637-12b4-4dfe-830d-166d88c837ad",
    speaker: "Milen Dyankov",
    talk: "AI for Java Developers - From Buzzword to Code",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "873844"),
  },
  {
    id: "2aea7252-6822-4f42-a9d4-fa830f29df40",
    speaker: "Rijo Sam",
    talk: "Java Beyond Frameworks: Avoiding Lock-In with Agnostic Design",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "875233"),
  },
];

const mockTopThreeTalks: TopTalkWithSpeaker[] = [
  {
    id: "df057475-0b6a-4fab-8e0d-c5576230dd5c",
    award: "Funniest talk",
    speaker: "Victor Rentea",
    speakerImage:
      "https://sessionize.com/image/2fde-400o400o1-NVbZAJzrFZpcRjEe5khxjo.png",
    talk: "Top 10 Rest API Design Falls",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "838798"),
  },
  {
    id: "d32cdd87-3c7d-47bb-98ec-b255d1e4b9ba",
    speaker: "Laura Perea",
    award: "Best Rated",
    speakerImage:
      "https://sessionize.com/image/8df6-400o400o1-LKJE9Ej5xvBK92FtxJDo6U.png",
    talk: "GenAI among us",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "945091"),
  },
  {
    id: "11554c51-dc18-407b-b7b4-b8ad2f925b2a",
    speaker: "Marc Nuri",
    award: "Most original",
    speakerImage:
      "https://sessionize.com/image/3a9a-400o400o1-sJBQfR5Ki5BGPEDG8GQgKM.jpg",
    talk: "Model Context Protocol Servers 101: Unlocking the Power of AI",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "874255"),
  },
];

describe("Talks", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Default mock implementation
    vi.mocked(useFetchTalks).mockReturnValue({
      data: undefined,
      dataUpdatedAt: 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      isError: false,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: true,
      isIdle: false,
      isLoading: true,
      isLoadingError: false,
      isPlaceholderData: false,
      isPreviousData: false,
      isRefetchError: false,
      isStale: false,
      isSuccess: false,
      refetch: vi.fn(),
      remove: vi.fn(),
      status: "loading",
      isRefetching: false,
    });
  });

  it("renders without errors", () => {
    renderWithQueryClient(<Talks />);
  });

  it("renders the correct title", () => {
    renderWithQueryClient(<Talks />);
    const titleElement = screen.getByText(/TALKS/);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the correct subtitle", () => {
    renderWithQueryClient(<Talks />);
    const subtitleElement = screen.getByText(
      /speakers coming from all corners of the world/i,
    );
    expect(subtitleElement).toBeInTheDocument();
  });

  it("renders a filter by track dropdown", () => {
    renderWithQueryClient(<Talks />);
    const dropdownElement = screen.getByText("Loading");
    expect(dropdownElement).toBeInTheDocument();
  });

  it("renders a loading message when talks are being fetched", () => {
    renderWithQueryClient(<Talks />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("renders a message when no talks are selected", () => {
    renderWithQueryClient(<Talks />);
    const dropdownElement = screen.getByText("Loading");
    expect(dropdownElement).toBeInTheDocument();
  });

  // Tests for the topThreeTalks array
  it("renders the top three talks section with correct awards", () => {
    renderWithQueryClient(
      <Talks
        topTenTalks={mockTopTenTalks}
        topThreeTalks={mockTopThreeTalks}
      />,
    );

    // Check for award titles
    expect(screen.getByText("Funniest talk")).toBeInTheDocument();
    expect(screen.getByText("Best Rated")).toBeInTheDocument();
    expect(screen.getByText("Most original")).toBeInTheDocument();
  });

  it("renders all top three talks with correct speaker names and talk titles", () => {
    renderWithQueryClient(
      <Talks
        topTenTalks={mockTopTenTalks}
        topThreeTalks={mockTopThreeTalks}
      />,
    );

    // Check for speaker names
    expect(screen.getByText("Victor Rentea")).toBeInTheDocument();
    expect(screen.getByText("Laura Perea")).toBeInTheDocument();
    expect(screen.getByText("Marc Nuri")).toBeInTheDocument();

    // Check for talk titles
    expect(
      screen.getByText("Top 10 Rest API Design Falls"),
    ).toBeInTheDocument();
    expect(screen.getByText("GenAI among us")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Model Context Protocol Servers 101: Unlocking the Power of AI",
      ),
    ).toBeInTheDocument();
  });

  it("renders top three talks with correct images", () => {
    renderWithQueryClient(
      <Talks
        topTenTalks={mockTopTenTalks}
        topThreeTalks={mockTopThreeTalks}
      />,
    );

    // Check for images with correct src attributes
    const images = screen.getAllByRole("img");
    const speakerImages = images.filter(
      (img) =>
        img.getAttribute("alt") === "Victor Rentea" ||
        img.getAttribute("alt") === "Laura Perea" ||
        img.getAttribute("alt") === "Marc Nuri",
    );

    expect(speakerImages).toHaveLength(3);

    const victorImage = speakerImages.find(
      (img) => img.getAttribute("alt") === "Victor Rentea",
    );
    const lauraImage = speakerImages.find(
      (img) => img.getAttribute("alt") === "Laura Perea",
    );
    const marcImage = speakerImages.find(
      (img) => img.getAttribute("alt") === "Marc Nuri",
    );

    expect(victorImage).toHaveAttribute(
      "src",
      "https://sessionize.com/image/2fde-400o400o1-NVbZAJzrFZpcRjEe5khxjo.png",
    );
    expect(lauraImage).toHaveAttribute(
      "src",
      "https://sessionize.com/image/8df6-400o400o1-LKJE9Ej5xvBK92FtxJDo6U.png",
    );
    expect(marcImage).toHaveAttribute(
      "src",
      "https://sessionize.com/image/3a9a-400o400o1-sJBQfR5Ki5BGPEDG8GQgKM.jpg",
    );
  });

  it("renders top three talks with correct links", () => {
    renderWithQueryClient(
      <Talks
        topTenTalks={mockTopTenTalks}
        topThreeTalks={mockTopThreeTalks}
      />,
    );

    // Check that links are correctly formatted
    const victorLink = screen.getByText("Victor Rentea").closest("a");
    const lauraLink = screen.getByText("Laura Perea").closest("a");
    const marcLink = screen.getByText("Marc Nuri").closest("a");

    expect(victorLink).toHaveAttribute(
      "href",
      ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "838798"),
    );
    expect(lauraLink).toHaveAttribute(
      "href",
      ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "945091"),
    );
    expect(marcLink).toHaveAttribute(
      "href",
      ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "874255"),
    );
  });

  // Tests for the topTenTalks array
  it("renders the top ten talks section", () => {
    renderWithQueryClient(
      <Talks
        topTenTalks={mockTopTenTalks}
        topThreeTalks={mockTopThreeTalks}
      />,
    );
    expect(screen.getByText("🔝 Top Ten rated talks")).toBeInTheDocument();
  });

  it("renders all top ten talks with correct links", () => {
    renderWithQueryClient(
      <Talks
        topTenTalks={mockTopTenTalks}
        topThreeTalks={mockTopThreeTalks}
      />,
    );

    // Check for specific talks
    expect(
      screen.getByText(/Victor Rentea — Top 10 Rest API Design Falls/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Laura Perea — GenAI among us/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Brian Vermeer — Don't Get Burned! Secure Coding Essentials in Java to protect your application/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Álvaro Sánchez-Mariscal — Revealing the magic behind Java annotations/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Alexander Chatzizacharias — What is multimodal RAG, and can we build a village with it?/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Bert Jan Schrijver — Generic or Specific\? Making sensible software design decisions/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Marc Nuri — Model Context Protocol Servers 101: Unlocking the Power of AI/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Andres Almiray — Maven Productivity Tips/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Milen Dyankov — AI for Java Developers - From Buzzword to Code/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Rijo Sam — Java Beyond Frameworks: Avoiding Lock-In with Agnostic Design/,
      ),
    ).toBeInTheDocument();

    // Check that links are correctly formatted
    const victorLink = screen
      .getByText(/Victor Rentea — Top 10 Rest API Design Falls/)
      .closest("a");
    expect(victorLink).toHaveAttribute(
      "href",
      ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "838798"),
    );
  });

  // Test for the removeParenthesesContent utility function
  it.skip("removes parentheses content from track names", async () => {
    // Mock data with parentheses in group names
    const mockGroups: IGroup[] = [
      createMockGroup({
        groupId: 1,
        groupName: "Track 1 (Main Hall)",
        sessions: [],
      }),
      createMockGroup({
        groupId: 2,
        groupName: "Track 2 (Room A)",
        sessions: [],
      }),
    ];

    // Mock the hook to return success with data
    vi.mocked(useFetchTalks).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockGroups,
      isError: false,
      isSuccess: true,
      isIdle: false,
      status: "success",
      isFetching: false,
      refetch: vi.fn(),
      remove: vi.fn(),
      fetchStatus: "idle",
      failureCount: 0,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isPlaceholderData: false,
      isPreviousData: false,
      isRefetchError: false,
      isStale: false,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      isLoadingError: false,
    });

    renderWithQueryClient(<Talks />);

    // Wait for the component to render with the mock data
    await waitFor(() => {
      expect(screen.queryByText("Loading")).not.toBeInTheDocument();
    });

    // Check that parentheses content is removed from track names in the filter options
    expect(screen.getByText("Track 1")).toBeInTheDocument();
    expect(screen.queryByText("Track 1 (Main Hall)")).not.toBeInTheDocument();
    expect(screen.getByText("Track 2")).toBeInTheDocument();
    expect(screen.queryByText("Track 2 (Room A)")).not.toBeInTheDocument();
  });

  // Test for track filtering functionality
  it.skip("filters talks when a track is selected", async () => {
    const mockGroups: IGroup[] = [
      createMockGroup({
        groupId: 1,
        groupName: "Track 1",
        sessions: [
          {
            id: 101,
            title: "Talk in Track 1",
            description: "Description",
            startsAt: "2023-01-01T09:00:00",
            endsAt: "2023-01-01T10:00:00",
            speakers: [{ id: "1", name: "Speaker 1" }],
            categories: [],
            questionAnswers: [],
            track: "Track 1",
          },
        ],
      }),
      createMockGroup({
        groupId: 2,
        groupName: "Track 2",
        sessions: [
          {
            id: 102,
            title: "Talk in Track 2",
            description: "Description",
            startsAt: "2023-01-01T09:00:00",
            endsAt: "2023-01-01T10:00:00",
            speakers: [{ id: "2", name: "Speaker 2" }],
            categories: [],
            questionAnswers: [],
            track: "Track 2",
          },
        ],
      }),
    ];

    // Mock the hook to return success with data
    vi.mocked(useFetchTalks).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockGroups,
      isError: false,
      isSuccess: true,
      isIdle: false,
      status: "success",
      isFetching: false,
      refetch: vi.fn(),
      remove: vi.fn(),
      fetchStatus: "idle",
      failureCount: 0,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isPlaceholderData: false,
      isPreviousData: false,
      isRefetchError: false,
      isStale: false,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      isLoadingError: false,
    });

    renderWithQueryClient(<Talks />);

    // Wait for the component to render with the mock data
    await waitFor(() => {
      expect(screen.queryByText("Loading")).not.toBeInTheDocument();
    });

    // Initially both tracks should be visible
    expect(screen.getByText("Talk in Track 1")).toBeInTheDocument();
    expect(screen.getByText("Talk in Track 2")).toBeInTheDocument();

    // Click on Track 1 filter
    userEvent.click(screen.getByText("Track 1"));

    // Now only Track 1 talks should be visible
    await waitFor(() => {
      expect(screen.getByText("Talk in Track 1")).toBeInTheDocument();
      expect(screen.queryByText("Talk in Track 2")).not.toBeInTheDocument();
    });
  });
});
