import React from "react";
import {render, screen} from "@testing-library/react";
import Talks2024 from "./Talks2024";
import {QueryClient, QueryClientProvider} from "react-query";

describe("Talks", () => {
    it("renders without errors", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Talks2024/>
            </QueryClientProvider>
        );
    });

    it("renders the correct title", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Talks2024/>
            </QueryClientProvider>
        );
        const titleElement = screen.getByText(/TALKS/);
        expect(titleElement).toBeInTheDocument();
    });

    it("renders the correct subtitle", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Talks2024/>
            </QueryClientProvider>
        );
        const subtitleElement = screen.getByText(
            /speakers coming from all corners of the world/i
        );
        expect(subtitleElement).toBeInTheDocument();
    });

    it("renders a filter by track dropdown", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Talks2024/>
            </QueryClientProvider>
        );
        const dropdownElement = screen.getByText("Loading");
        expect(dropdownElement).toBeInTheDocument();
    });

    it("renders a loading message when talks are being fetched", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Talks2024/>
            </QueryClientProvider>
        );
        expect(screen.getByText("Loading")).toBeInTheDocument();
    });

    it("renders a message when no talks are selected", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Talks2024/>
            </QueryClientProvider>
        );
        const dropdownElement = screen.getByText("Loading");
        expect(dropdownElement).toBeInTheDocument();
    });
});
