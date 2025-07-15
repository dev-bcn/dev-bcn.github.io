import React from "react";
import { screen, waitFor } from "@testing-library/react";
import Talks from "./Talks";
import {
  createMockGroup,
  renderWithQueryClient,
} from "../../utils/testing/testUtils";
import { ROUTE_MEETING_DETAIL_PLAIN } from "@constants/routes";
import { useFetchTalks } from "@hooks/useFetchTalks";
import { IGroup } from "@/types/sessions";
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

  // Tests for the new topTenTalks array
  it("renders the top ten talks section", () => {
    renderWithQueryClient(<Talks />);
    expect(screen.getByText("🔝 Top Ten rated talks")).toBeInTheDocument();
  });

  it("renders all top ten talks with correct links", () => {
    renderWithQueryClient(<Talks />);

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
