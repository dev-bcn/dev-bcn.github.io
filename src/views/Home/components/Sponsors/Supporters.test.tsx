import { fireEvent, render, screen } from "@testing-library/react";
import { Supporters } from "./Supporters";
import React from "react";
import { useWindowSize } from "react-use";
import { BrowserRouter, Route, Routes } from "react-router";
import { Sponsor } from "./SponsorsData";
import { vi } from "vitest";

vi.mock("react-use", () => ({
  useWindowSize: vi.fn(),
}));

describe("Supporters", () => {
  beforeEach(() => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 }); // Mock window width for testing
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const supporters: Sponsor[] = [
    {
      name: "test",
      website: "https://www.acme.com",
      image: "https://www.acme.com/logo.png",
    },
  ];

  // disabled until supporters included
  it("renders component with supporters", () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path={""} element={<Supporters sponsors={supporters} />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );

    expect(screen.getByTestId("supporters")).toBeInTheDocument();
    expect(screen.getByText("SUPPORTERS")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });

  it("applies hover styles on mouse enter", () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path={"*"} element={<Supporters sponsors={supporters} />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const supportersElement = screen.getByTestId("supporters");

    fireEvent.mouseEnter(supportersElement);

    expect(supportersElement).toHaveClass("SponsorItem");
    expect(screen.getByText("SUPPORTERS")).toHaveStyle(
      "color: rgb(255, 252, 249)",
    );
  });

  it("removes hover styles on mouse leave", () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path={"*"} element={<Supporters sponsors={supporters} />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const supporterElement = screen.getByTestId("supporters");

    fireEvent.mouseEnter(supporterElement);
    fireEvent.mouseLeave(supporterElement);

    expect(supporterElement).not.toHaveClass("hovered");
    expect(screen.getByText("SUPPORTERS")).toHaveStyle("color: rgb(0, 36, 84)");
  });
});
