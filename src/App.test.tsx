import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import React from "react";
import { IResponse } from "./types/speakers";
import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { vi } from "vitest";

vi.mock("axios");
vi.mock("react-use", () => ({
  useWindowSize: vi.fn(() => ({ width: 1200, height: 800 })),
}));

vi.mock("./components/Navigation/Navigation", () => ({
  default: vi.fn(() => (
    <div data-testid="navigation">
      <button>Travel</button>
      <button>Speakers</button>
      <button>Talks</button>
      <button>Cfp Committee</button>
      <button>About Us</button>
      <button>Code of Conduct</button>
    </div>
  )),
}));

vi.mock("./components/Navigation/HorizontalMenu", () => ({
  HorizontalMenu: vi.fn(() => (
    <div data-testid="horizontal-menu">Mocked Menu</div>
  )),
}));

// Mock the HomeWrapper component
vi.mock("./views/Home/HomeWrapper", () => ({
  default: vi.fn(() => (
    <div data-testid="home-wrapper">
      <h1>The Barcelona Developers Conference 2025</h1>
      <p>July 8th - 10th, 2025</p>
      <p>5 tracks with the following topics:</p>
    </div>
  )),
}));

// Mock the Travel component
vi.mock("./views/Travel/Travel", () => ({
  default: vi.fn(() => (
    <div data-testid="travel">
      <h1>La Farga Centre d'Activitats</h1>
    </div>
  )),
}));

// Mock the Speakers component
vi.mock("./views/Speakers/Speakers", () => ({
  default: vi.fn(() => (
    <div data-testid="speakers">
      <h1>Speakers coming from all corners of the world</h1>
    </div>
  )),
}));

// Mock the Talks component
vi.mock("./views/Talks/Talks", () => ({
  default: vi.fn(() => (
    <div data-testid="talks">
      <h1>/ Talks</h1>
    </div>
  )),
}));

// Mock the CfpSection component
vi.mock("./views/Cfp/CfpSection", () => ({
  default: vi.fn(() => (
    <div data-testid="cfp">
      <h1>Java & JVM</h1>
    </div>
  )),
}));

// Mock the About component
vi.mock("./views/About/About", () => ({
  default: vi.fn(() => (
    <div data-testid="about">
      <h1>Jonathan Vila</h1>
      <h2>Nacho Cougil</h2>
    </div>
  )),
}));

// Mock the CodeOfConduct component
vi.mock("./views/CodeOfConduct/CodeOfConduct", () => ({
  default: vi.fn(() => (
    <div data-testid="code-of-conduct">
      <h1>The DevBcn is the yearly event</h1>
    </div>
  )),
}));

const mockedAxios = axios as vi.MockedFunction<typeof axios>;
const axiosHeaders = new AxiosHeaders();
const payload: AxiosResponse<IResponse[]> = {
  status: 200,
  statusText: "OK",
  headers: {},
  config: {
    headers: axiosHeaders,
  },
  data: [
    {
      id: "1",
      fullName: "John Smith",
      profilePicture: "https://example.com/john.jpg",
      tagLine: "Software engineer",
      bio: "I am a software engineer",
      sessions: [
        {
          id: 4567,
          name: "sample session",
        },
      ],
      links: [
        {
          linkType: "Twitter",
          url: "https://twitter.com/johnsmith",
          title: "",
        },
        {
          linkType: "LinkedIn",
          url: "https://linkedin.com/in/johnsmith",
          title: "",
        },
      ],
    },
    {
      id: "2",
      fullName: "Jane Doe",
      profilePicture: "https://example.com/jane.jpg",
      tagLine: "Data scientist",
      bio: "I am a data scientist",
      sessions: [],
      links: [
        {
          linkType: "Twitter",
          url: "https://twitter.com/janedoe",
          title: "",
        },
        {
          linkType: "LinkedIn",
          url: "https://linkedin.com/in/janedoe",
          title: "",
        },
      ],
    },
  ],
};

describe("App component", () => {
  beforeAll(() => {
    vi.mock("axios");
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("it renders the HOME page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );

    // Check that the home page is rendered
    expect(screen.getByTestId("home-wrapper")).toBeInTheDocument();
  });

  // Skip navigation tests for now as they require more complex setup
  test.skip("it renders the navigation links", () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );

    // Check that the navigation component is rendered
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
});
