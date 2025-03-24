import React, {FC} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {renderHook, waitFor} from "@testing-library/react";
import {useFetchSpeakers} from "./useFetchSpeakers";
import axios, {AxiosHeaders, AxiosResponse} from "axios";
import {speakerAdapter} from "../services/speakerAdapter";
import {IResponse} from "../types/speakers";

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

describe("fetch speaker hook and speaker adapter", () => {
  beforeAll(() => {
    jest.mock("axios");
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should adapt from a server response with default URL", async () => {
    const queryClient = new QueryClient();

    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));
    const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const { result } = renderHook(() => useFetchSpeakers(), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess, {});
    await waitFor(() => !result.current.isLoading, {});
    expect(mockedAxios.get).toHaveBeenCalledWith("https://sessionize.com/api/v2/xhudniix/view/Speakers");
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
    expect(result.current.data).toEqual(speakerAdapter(payload.data));
  });

  it("should adapt from server response a query with id", async () => {
    //Given
    const queryClient = new QueryClient();
    mockedAxios.get.mockResolvedValueOnce(payload);
    const expectedPayload: IResponse[] = [
      {
        id: "1",
        bio: "I am a software engineer",
        fullName: "John Smith",
        links: [
          {
            linkType: "LinkedIn",
            url: "https://linkedin.com/in/johnsmith",
            title: "",
          },
          {
            url: "https://twitter.com/johnsmith",
            title: "",
            linkType: "Twitter",
          },
        ],
        profilePicture: "https://example.com/john.jpg",
        tagLine: "Software engineer",
        sessions: [{ id: 4567, name: "sample session" }],
      },
    ];
    const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    //When
    const { result } = renderHook(() => useFetchSpeakers("1"), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading, {});
    //then
    expect(mockedAxios.get).toHaveBeenCalledWith("https://sessionize.com/api/v2/xhudniix/view/Speakers");
    expect(result.current.data).toEqual(speakerAdapter(expectedPayload));
  });

  it("should use 2023 URL when '2023' is passed", async () => {
    const queryClient = new QueryClient();
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));
    const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const { result } = renderHook(() => useFetchSpeakers("2023"), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess, {});
    await waitFor(() => !result.current.isLoading, {});
    expect(mockedAxios.get).toHaveBeenCalledWith("https://sessionize.com/api/v2/ttsitynd/view/Speakers");
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
    expect(result.current.data).toEqual(speakerAdapter(payload.data));
  });

  it("should use 2024 URL when '2024' is passed", async () => {
    const queryClient = new QueryClient();
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));
    const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const { result } = renderHook(() => useFetchSpeakers("2024"), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess, {});
    await waitFor(() => !result.current.isLoading, {});
    expect(mockedAxios.get).toHaveBeenCalledWith("https://sessionize.com/api/v2/teq4asez/view/Speakers");
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
    expect(result.current.data).toEqual(speakerAdapter(payload.data));
  });

  it("should use custom URL when a URL is passed", async () => {
    const queryClient = new QueryClient();
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));
    const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const customUrl = "https://example.com/api/speakers";
    const { result } = renderHook(() => useFetchSpeakers(customUrl), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess, {});
    await waitFor(() => !result.current.isLoading, {});
    expect(mockedAxios.get).toHaveBeenCalledWith(customUrl);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
    expect(result.current.data).toEqual(speakerAdapter(payload.data));
  });

  it("should filter by ID when both a URL and ID are passed", async () => {
    //Given
    const queryClient = new QueryClient();
    mockedAxios.get.mockResolvedValueOnce(payload);
    const expectedPayload: IResponse[] = [
      {
        id: "1",
        bio: "I am a software engineer",
        fullName: "John Smith",
        links: [
          {
            linkType: "LinkedIn",
            url: "https://linkedin.com/in/johnsmith",
            title: "",
          },
          {
            url: "https://twitter.com/johnsmith",
            title: "",
            linkType: "Twitter",
          },
        ],
        profilePicture: "https://example.com/john.jpg",
        tagLine: "Software engineer",
        sessions: [{ id: 4567, name: "sample session" }],
      },
    ];
    const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    //When
    const customUrl = "https://example.com/api/speakers";
    const { result } = renderHook(() => useFetchSpeakers(customUrl, "1"), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading, {});
    //then
    expect(mockedAxios.get).toHaveBeenCalledWith(customUrl);
    expect(result.current.data).toEqual(speakerAdapter(expectedPayload));
  });
});