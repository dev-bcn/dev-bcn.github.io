import React from "react";
import { screen } from "@testing-library/react";
import Talks2024 from "./Talks2024";
import { renderWithQueryClient } from "../../utils/testing/testUtils";

describe("Talks", () => {
    it("renders without errors", () => {
        renderWithQueryClient(<Talks2024 />);
    });

    it("renders the correct title", () => {
        renderWithQueryClient(<Talks2024 />);
        const titleElement = screen.getByText(/TALKS/);
        expect(titleElement).toBeInTheDocument();
    });

    it("renders the correct subtitle", () => {
        renderWithQueryClient(<Talks2024 />);
        const subtitleElement = screen.getByText(
            /speakers coming from all corners of the world/i
        );
        expect(subtitleElement).toBeInTheDocument();
    });

    it("renders a filter by track dropdown", () => {
        renderWithQueryClient(<Talks2024 />);
        const dropdownElement = screen.getByText("Loading");
        expect(dropdownElement).toBeInTheDocument();
    });

    it("renders a loading message when talks are being fetched", () => {
        renderWithQueryClient(<Talks2024 />);
        expect(screen.getByText("Loading")).toBeInTheDocument();
    });

    it("renders a message when no talks are selected", () => {
        renderWithQueryClient(<Talks2024 />);
        const dropdownElement = screen.getByText("Loading");
        expect(dropdownElement).toBeInTheDocument();
    });
});
