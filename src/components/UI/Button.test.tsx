import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Button from "./Button";

vi.mock("../../components/analytics/Analytics", () => ({
  gaEventTracker: vi.fn(),
}));

describe("Button", () => {
  const mockOnClick = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renders button with text", () => {
    render(
      <Button
        text="Test Button"
        link="https://example.com"
        onClick={mockOnClick}
      />,
    );

    const button = screen.getByText("Test Button");
    expect(button).toBeInTheDocument();
  });

  test("renders button with subtext when disabled", () => {
    render(
      <Button
        text="Test Button"
        subtext="Coming Soon"
        link="https://example.com"
        onClick={mockOnClick}
        isDisabled={true}
      />,
    );

    const button = screen.getByText("Test Button");
    const subtext = screen.getByText("Coming Soon");

    expect(button).toBeInTheDocument();
    expect(subtext).toBeInTheDocument();
  });

  test("does not render button when isVisible is false", () => {
    render(
      <Button
        text="Test Button"
        link="https://example.com"
        onClick={mockOnClick}
        isVisible={false}
      />,
    );

    const button = screen.queryByText("Test Button");
    expect(button).not.toBeInTheDocument();
  });

  test("renders button when isVisible is true", () => {
    render(
      <Button
        text="Test Button"
        link="https://example.com"
        onClick={mockOnClick}
        isVisible={true}
      />,
    );

    const button = screen.getByText("Test Button");
    expect(button).toBeInTheDocument();
  });

  test("renders button by default when isVisible is not provided", () => {
    render(
      <Button
        text="Test Button"
        link="https://example.com"
        onClick={mockOnClick}
      />,
    );

    const button = screen.getByText("Test Button");
    expect(button).toBeInTheDocument();
  });
});
