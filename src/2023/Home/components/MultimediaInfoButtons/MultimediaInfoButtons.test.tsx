import { fireEvent, render, screen } from "@testing-library/react";
import MultimediaInfoButtons from "./MultimediaInfoButtons";
import { gaEventTracker } from "../../../../components/analytics/Analytics";

jest.mock("../../../../components/analytics/Analytics", () => ({
  gaEventTracker: jest.fn(),
}));

describe("ActionButtons", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders two action buttons", () => {
    render(<MultimediaInfoButtons />);

    const flickrButton = screen.getByText("Flickr");
    const youtubeButton = screen.getByText("Youtube");

    expect(flickrButton).toBeInTheDocument();
    expect(youtubeButton).toBeInTheDocument();
  });

  test("calls gaEventTracker with correct parameters on attendee button click", () => {
    render(<MultimediaInfoButtons />);
    const flickrButton = screen.getByText("flickr");

    fireEvent.click(flickrButton);

    expect(gaEventTracker).toHaveBeenCalledWith("flickr", "flickr");
  });

  test("calls gaEventTracker with correct parameters on speaker button click", () => {
    render(<MultimediaInfoButtons />);
    const youtubeButton = screen.getByText("Youtube");

    fireEvent.click(youtubeButton);

    expect(gaEventTracker).toHaveBeenCalledWith("youtube", "youtube");
  });

  // Add more test cases as needed
});
