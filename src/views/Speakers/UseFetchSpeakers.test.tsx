import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";
import { FC } from "react";
import { speakerAdapter, useFetchSpeakers } from "./UseFetchSpeakers";
import { beforeEach, describe, expect, it } from "@jest/globals";
import axios, { AxiosResponse } from "axios";
import { IResponse } from "./Speaker.types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const payload: AxiosResponse<IResponse[]> = {
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should adapt from server response", async () => {
    const queryClient = new QueryClient();

    mockedAxios.get.mockResolvedValue(payload);
    const wrapper: FC = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const { result, waitFor } = renderHook(() => useFetchSpeakers(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(speakerAdapter(payload.data));
    expect(mockedAxios.get).toHaveBeenCalled();
  });

  it("should adapt from server response a query with id", async () => {
    const queryClient = new QueryClient();

    mockedAxios.get.mockResolvedValue(payload);
    const wrapper: FC = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const { result, waitFor } = renderHook(() => useFetchSpeakers("1"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

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

    expect(result.current.data).toEqual(speakerAdapter(expectedPayload));
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
