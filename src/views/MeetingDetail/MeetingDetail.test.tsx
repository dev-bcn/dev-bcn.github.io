import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MeetingDetail from "./MeetingDetail";
import { BrowserRouter } from "react-router";
import { vi } from "vitest";
import { IMeeting } from "@/types/sessions";
import { ISpeaker } from "@/types/speakers";

// Mock framer-motion
vi.mock("framer-motion", () => ({
    motion: {
        div: ({
            children,
            ...props
        }: {
            children: React.ReactNode;
            [key: string]: unknown;
        }) => <div {...props}>{children}</div>,
        img: (props: { [key: string]: unknown }) => <img {...props} />,
    },
}));

// Mock add-to-calendar-button-react
vi.mock("add-to-calendar-button-react", () => ({
    AddToCalendarButton: () => (
        <button data-testid="add-to-calendar">Add to Calendar</button>
    ),
}));

// Mock useWindowSize
vi.mock("react-use", () => ({
    useWindowSize: () => ({ width: 1200, height: 800 }),
}));

const mockMeeting: IMeeting = {
    id: 12345,
    title: "Test Talk Title",
    description: "This is a test talk description with important content.",
    videoUrl: "https://www.youtube.com/embed/test123",
    slidesURL: "https://slides.example.com/test",
    videoTags: ["React", "TypeScript", "Testing"],
    speakers: [
        { id: "speaker-1", name: "John Doe" },
        { id: "speaker-2", name: "Jane Smith" },
    ],
    level: "Intermediate",
    type: "Talk",
    language: "English",
    track: "Frontend",
    startDate: "2024-06-17",
    endDate: "2024-06-17",
    startTime: "10:00",
    endTime: "11:00",
};

const mockSpeakers: ISpeaker[] = [
    {
        id: "speaker-1",
        fullName: "John Doe",
        speakerImage: "/images/speakers/john.jpg",
        bio: "Test bio",
        tagLine: "Test tagline",
        sessions: [],
        links: [],
    },
    {
        id: "speaker-2",
        fullName: "Jane Smith",
        speakerImage: "/images/speakers/jane.jpg",
        bio: "Test bio 2",
        tagLine: "Test tagline 2",
        sessions: [],
        links: [],
    },
];

const renderMeetingDetail = (
    meeting: Partial<IMeeting> = {},
    speakers: ISpeaker[] = mockSpeakers
) => {
    return render(
        <BrowserRouter>
            <MeetingDetail
                meeting={{ ...mockMeeting, ...meeting }}
                speakers={speakers}
                openFeedbackId="test-feedback-id"
            />
        </BrowserRouter>
    );
};

describe("MeetingDetail", () => {
    it("renders the meeting title", () => {
        renderMeetingDetail();
        expect(screen.getByText(/Test Talk Title/)).toBeInTheDocument();
    });

    it("renders the meeting description", () => {
        renderMeetingDetail();
        expect(
            screen.getByText(/This is a test talk description/)
        ).toBeInTheDocument();
    });

    it("renders speaker names with links", () => {
        renderMeetingDetail();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });

    it("renders speaker images", () => {
        renderMeetingDetail();
        const speakerImages = screen.getAllByRole("img", { name: /John Doe|Jane Smith/ });
        expect(speakerImages).toHaveLength(2);
    });

    it("renders vote talk link with correct href", () => {
        renderMeetingDetail();
        const voteLink = screen.getByText(/Vote this talk/).closest("a");
        expect(voteLink).toHaveAttribute(
            "href",
            "https://openfeedback.io/test-feedback-id/0/12345"
        );
    });

    it("renders video iframe when videoUrl is provided", () => {
        renderMeetingDetail();
        const iframe = screen.getByTitle("Test Talk Title");
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute(
            "src",
            "https://www.youtube.com/embed/test123"
        );
    });

    it("does not render video iframe when videoUrl is empty", () => {
        renderMeetingDetail({ videoUrl: undefined });
        expect(screen.queryByTitle("Test Talk Title")).not.toBeInTheDocument();
    });

    it("renders slides link when slidesURL is provided", () => {
        renderMeetingDetail();
        const slidesLink = screen.getByText(/Session Slides/).closest("a");
        expect(slidesLink).toHaveAttribute(
            "href",
            "https://slides.example.com/test"
        );
    });

    it("does not render slides link when slidesURL is empty", () => {
        renderMeetingDetail({ slidesURL: "" });
        expect(screen.queryByText(/Session Slides/)).not.toBeInTheDocument();
    });

    it("renders video tags", () => {
        renderMeetingDetail();
        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("TypeScript")).toBeInTheDocument();
        expect(screen.getByText("Testing")).toBeInTheDocument();
    });

    it("renders track information", () => {
        renderMeetingDetail();
        expect(screen.getByText(/Track:/)).toBeInTheDocument();
        expect(screen.getByText(/Frontend/)).toBeInTheDocument();
    });

    it("renders level and type information", () => {
        renderMeetingDetail();
        expect(screen.getByText(/Talk Intermediate/)).toBeInTheDocument();
    });

    it("renders go back link", () => {
        renderMeetingDetail();
        const backLink = screen.getByText("Go back");
        expect(backLink).toBeInTheDocument();
        expect(backLink.closest("a")).toHaveAttribute("href", "/talks");
    });

    it("renders add to calendar button", () => {
        renderMeetingDetail();
        expect(screen.getByTestId("add-to-calendar")).toBeInTheDocument();
    });
});
