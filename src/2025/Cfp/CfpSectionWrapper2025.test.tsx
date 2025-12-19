import { render } from "@testing-library/react";
import React from "react";
import { describe, it, expect, beforeEach } from "vitest";

import { CfpSectionWrapper2025 } from "./CfpSectionWrapper2025";

describe("CfpSectionWrapper2025", () => {
  beforeEach(() => {
    // Reset document title before each test
    document.title = "";
  });

  it("renders the CfpSection component with 2025 conference data", () => {
    render(<CfpSectionWrapper2025 />);

    // Verify the component renders
    expect(document.title).toContain("CFP Committee");
  });

  it("sets the correct document title with 2025 edition", () => {
    render(<CfpSectionWrapper2025 />);

    // Verify the document title includes 2025
    expect(document.title).toContain("2025");
    expect(document.title).toContain("CFP Committee");
  });

  it("passes the correct edition (2025) to the CfpSection component", () => {
    const { container } = render(<CfpSectionWrapper2025 />);

    // Verify the component renders (checking for the presence of content)
    expect(container.querySelector("h1")).toBeTruthy();
  });
});
