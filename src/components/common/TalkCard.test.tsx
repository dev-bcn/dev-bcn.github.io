import { render, screen } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router";
import { vi } from "vitest";

import { TalkCard } from "./TalkCard";

import type { TalkCardProps } from "./TalkCard";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <div {...props}>{children}</div>,
  },
}));

const mockTalk: TalkCardProps["talk"] = {
  id: 123,
  title: "Test Talk Title",
  talkImage: 1,
  speakers: [
    { id: "speaker-1", name: "John Doe" },
    { id: "speaker-2", name: "Jane Smith" },
  ],
  level: "Intermediate",
  link: "https://example.com",
  tags: ["React", "TypeScript"],
  track: "Frontend",
  categories: [
    {
      id: 1,
      name: "Session format",
      categoryItems: [{ id: 101, name: "Talk" }],
    },
    {
      id: 2,
      name: "Level",
      categoryItems: [{ id: 201, name: "Intermediate" }],
    },
    {
      id: 3,
      name: "Track",
      categoryItems: [{ id: 301, name: "Frontend" }],
    },
  ],
  questionAnswers: [{ id: 1, question: "Tags", answer: "React, TypeScript" }],
};

const renderTalkCard = (props: Partial<TalkCardProps> = {}) => {
  const defaultProps: TalkCardProps = {
    talk: mockTalk,
    openFeedbackId: "test-feedback-id",
    year: "2024",
    showTrack: false,
    ...props,
  };

  return render(
    <BrowserRouter>
      <TalkCard {...defaultProps} />
    </BrowserRouter>,
  );
};

describe("TalkCard", () => {
  it("renders the talk title", () => {
    renderTalkCard();
    expect(screen.getByText("Test Talk Title")).toBeInTheDocument();
  });

  it("renders speaker names", () => {
    renderTalkCard();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("renders vote link with correct href", () => {
    renderTalkCard();
    const voteLink = screen.getByText(/Vote this talk/);
    expect(voteLink.closest("a")).toHaveAttribute(
      "href",
      "https://openfeedback.io/test-feedback-id/0/123",
    );
  });

  it("shows track info when showTrack is true", () => {
    renderTalkCard({ showTrack: true });
    expect(screen.getByText(/Track:/)).toBeInTheDocument();
  });

  it("hides track info when showTrack is false", () => {
    renderTalkCard({ showTrack: false });
    expect(screen.queryByText(/Track:/)).not.toBeInTheDocument();
  });

  it("links to correct talk detail route for 2024", () => {
    renderTalkCard({ year: "2024" });
    const talkLink = screen.getByText("Test Talk Title");
    expect(talkLink.closest("a")).toHaveAttribute("href", "/2024/talk/123");
  });

  it("links to correct talk detail route for 2023", () => {
    renderTalkCard({ year: "2023" });
    const talkLink = screen.getByText("Test Talk Title");
    expect(talkLink.closest("a")).toHaveAttribute("href", "/2023/talk/123");
  });

  it("links to correct speaker detail route", () => {
    renderTalkCard({ year: "2024" });
    const speakerLink = screen.getByText("John Doe").closest("a");
    expect(speakerLink).toHaveAttribute("href", "/2024/speaker/speaker-1");
  });
});
