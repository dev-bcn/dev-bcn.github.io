import React from "react";
import { render, screen } from "@testing-library/react";
import Diversity from "./Diversity";

describe("Diversity component", () => {
  it("renders heading correctly", () => {
    render(<Diversity />);
    const headingElement = screen.getByText("Diversity Sponsorship");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders paragraph text correctly", () => {
    render(<Diversity />);
    const paragraphElement = screen.getByText(
      /DevBcn, its volunteers, and staff consider that understanding/i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders sponsor logos correctly", () => {
    render(<Diversity />);
    const vepeeLogo = screen.getByAltText("Vepee");
    const adevintaLogo = screen.getByAltText("Adevinta");

    expect(vepeeLogo).toBeInTheDocument();
    expect(adevintaLogo).toBeInTheDocument();
  });
});
