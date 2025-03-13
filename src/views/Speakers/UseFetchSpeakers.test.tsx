import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchSpeakers } from "./UseFetchSpeakers";
import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { IResponse } from "../../types/speakers";

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

  it("should adapt from  a server response", async () => {
    const queryClient = new QueryClient();

    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));
    const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({
      children,
    }) => {
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
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
  });

  it("should adapt from server response a query with id", async () => {
    //Given
    const queryClient = new QueryClient();
    mockedAxios.get.mockResolvedValueOnce(payload);
    const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({
      children,
    }) => {
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
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
