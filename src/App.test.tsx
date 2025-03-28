import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import React from "react";
import userEvent from "@testing-library/user-event";
import { IResponse } from "./types/speakers";
import axios, { AxiosHeaders, AxiosResponse } from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
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

describe("navigation pages", () => {
  beforeAll(() => {
    jest.mock("axios");
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("it render the HOME page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    expect(
      await screen.findByText(/The Barcelona Developers Conference 2025/i),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/July 8th - 10th, 2025/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/5 tracks with the following topics:/i),
    ).toBeInTheDocument();
  });

  test("it render the TRAVEL page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    expect(
      await screen.findByText(/The Barcelona Developers Conference 2025/i),
    ).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByText("Travel"));
    expect(
      await screen.findByText("La Farga Centre d'Activitats"),
    ).toBeVisible();
  });

  //Reason: not enabled yet
  test("it render the SPEAKERS page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Speakers"));
    expect(
      await screen.findByText(/Speakers coming from all corners of the world/i),
    ).toBeInTheDocument();
  });

  //Reason: not enabled yet
  test("it render the TALKS page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Talks"));
    expect(await screen.findByText("/ Talks")).toBeInTheDocument();
  });

  //Reason: not enabled yet
  test("it render the JOB OFFERS page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    expect(() => screen.getByText("JOB OFFERS")).toThrow();
    //const user = userEvent.setup();
    /*await user.click(screen.getByText("JOB OFFERS"));
            expect(
              await screen.findByText("Have a look at some opportunities"),
            ).not.toBeInTheDocument();*/
  });

  //Reason: not enabled yet
  test("it render the CFP page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Cfp Committee"));
    expect(await screen.findByText("Java & JVM")).toBeInTheDocument();
  });

  test("it renders the ABOUT US page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("About Us"));
    expect(await screen.findByText(/Jonathan Vila/i)).toBeInTheDocument();
    expect(await screen.findByText(/Nacho Cougil/i)).toBeInTheDocument();
  });

  test("it renders the CODE OF CONDUCT page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Code of Conduct"));
    expect(
      await screen.findByText(/The DevBcn is the yearly event/i),
    ).toBeInTheDocument();
  });
});
