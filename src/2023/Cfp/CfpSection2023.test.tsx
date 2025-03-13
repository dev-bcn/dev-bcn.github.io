import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CfpSection2023 from "./CfpSection2023";
import { useWindowSize } from "react-use";
import conferenceData from "../../data/2023.json";
import { data } from "./CfpData";

// Mock useWindowSize to control the window size in tests
jest.mock("react-use", () => ({
  ...jest.requireActual("react-use"),
  useWindowSize: jest.fn(),
}));

describe("CfpSection2023", () => {
  beforeEach(() => {
    // Reset the mock before each test
    (useWindowSize as jest.Mock).mockReset();
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 }); // Default width
  });

  it("should render without crashing", () => {
    render(<CfpSection2023 />);
  });

  it("should render the title and subtitle", () => {
    render(<CfpSection2023 />);
    expect(
      screen.getByText("CFP Committee", { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "We're excited to announce the members of the Call for Papers committee for the next DevBcn conference! These experienced professionals will be reviewing and selecting the best talks and workshops for the upcoming event.",
      ),
    ).toBeInTheDocument();
  });

  it("should render the tracks and members", () => {
    render(<CfpSection2023 />);
    data.forEach((track) => {
      expect(screen.getAllByText(track.name, { exact: false })).not.toBeNull();
      track.members
        .filter((member) => member.photo !== "")
        .forEach((member) => {
          expect(
            screen.getAllByText(member.name, { exact: false }),
          ).not.toBeNull();
        });
    });
  });

  it("should render member photos", () => {
    render(<CfpSection2023 />);
    data.forEach((track) => {
      track.members
        .filter((member) => member.photo !== "")
        .forEach((member) => {
          const image = screen.getAllByAltText(member.name);
          expect(image).not.toBeNull();
          expect(image.at(0)).toHaveAttribute("src", member.photo);
        });
    });
  });

  it("should render twitter links", () => {
    render(<CfpSection2023 />);
    data.forEach((track) => {
      track.members
        .filter((member) => member.twitter !== "")
        .forEach((member) => {
          const twitterLinks = screen.getAllByRole("link");
          const twitterLink = twitterLinks.find(
            (link) => link.getAttribute("href") === member.twitter,
          );
          expect(twitterLink).toBeInTheDocument();
          expect(twitterLink).toHaveAttribute("href", member.twitter);
        });
    });
  });

  it("should render linkedIn links", () => {
    render(<CfpSection2023 />);
    data.forEach((track) => {
      track.members
        .filter((member) => member.linkedIn !== "")
        .forEach((member) => {
          const linkedInLinks = screen.getAllByRole("link");
          const linkedInLink = linkedInLinks.find(
            (link) => link.getAttribute("href") === member.linkedIn,
          );
          expect(linkedInLink).toBeInTheDocument();
          expect(linkedInLink).toHaveAttribute("href", member.linkedIn);
        });
    });
  });

  it("should update the document title", async () => {
    render(<CfpSection2023 />);
    await waitFor(() => {
      expect(document.title).toBe(
        `CFP Committee - DevBcn - ${conferenceData.edition}`,
      );
    });
  });

  it("should not render the icons when the width is smaller than the breakpoint", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 767 });
    render(<CfpSection2023 />);
    const lessIcon = screen.queryByAltText("more than - icon");
    const moreIcon = screen.queryByAltText("Less than - icon");
    expect(lessIcon).not.toBeInTheDocument();
    expect(moreIcon).not.toBeInTheDocument();
  });
});
