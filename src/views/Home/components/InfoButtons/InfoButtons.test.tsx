import {fireEvent, render, screen} from "@testing-library/react";
import ActionButtons from "./InfoButtons";
import {gaEventTracker} from "src/components/analytics/Analytics";

jest.mock("@components/analytics/Analytics", () => ({
  gaEventTracker: jest.fn(),
}));

describe("ActionButtons", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders two action buttons", () => {
    render(<ActionButtons />);

    const attendeeButton = screen.getByText("🙋🏻 Attendee information");
    const speakerButton = screen.getByText("🎙️ Speaker information");

    expect(attendeeButton).toBeInTheDocument();
    expect(speakerButton).toBeInTheDocument();
  });

  test("calls gaEventTracker with correct parameters on attendee button click", () => {
    render(<ActionButtons />);
    const attendeeButton = screen.getByText("🙋🏻 Attendee information");

    fireEvent.click(attendeeButton);

    expect(gaEventTracker).toHaveBeenCalledWith(
      "attendee-info",
      "attendee-infos",
    );
  });

  test("calls gaEventTracker with correct parameters on speaker button click", () => {
    render(<ActionButtons />);
    const speakerButton = screen.getByText("🎙️ Speaker information");

    fireEvent.click(speakerButton);

    expect(gaEventTracker).toHaveBeenCalledWith("speaker-info", "speaker-info");
  });

  // Add more test cases as needed
});
