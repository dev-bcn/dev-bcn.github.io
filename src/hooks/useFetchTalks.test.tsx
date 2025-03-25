import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import axios, { AxiosHeaders, AxiosResponse } from "axios";
import {
  useFetchLiveView,
  useFetchTalks,
  useFetchTalksById,
} from "./useFetchTalks";
import { Liveview } from "../views/Talks/liveView.types";
import { CategoryItemEnum, IGroup } from "../types/sessions";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const axiosHeaders = new AxiosHeaders();
const queryClient = new QueryClient();
const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useFetchTalks", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should use default URL when no parameter is provided", async () => {
    const mockData: IGroup[] = [
      {
        groupId: 1,
        groupName: "",
        sessions: [],
        isDefault: false,
      },
    ];
    const payload: AxiosResponse<IGroup[]> = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: axiosHeaders,
      },
      data: mockData,
    };

    mockedAxios.get.mockResolvedValue(payload);

    const { result } = renderHook(() => useFetchTalks(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://sessionize.com/api/v2/xhudniix/view/Sessions",
    );
    expect(result.current.data).toEqual(mockData);
  });

  it("should use 2023 URL when '2023' is provided", async () => {
    const mockData: IGroup[] = [
      {
        groupId: 1,
        sessions: [],
        groupName: "test ",
        isDefault: false,
      },
    ];
    const payload: AxiosResponse<IGroup[]> = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: axiosHeaders,
      },
      data: mockData,
    };

    mockedAxios.get.mockResolvedValue(payload);

    const { result } = renderHook(() => useFetchTalks("2023"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://sessionize.com/api/v2/ttsitynd/view/Sessions",
    );
    expect(result.current.data).toEqual(mockData);
  });

  it("should use 2024 URL when '2024' is provided", async () => {
    const mockData: IGroup[] = [
      {
        groupId: 1,
        groupName: "test",
        isDefault: false,
        sessions: [],
      },
    ];
    const payload: AxiosResponse<IGroup[]> = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: axiosHeaders,
      },
      data: mockData,
    };

    mockedAxios.get.mockResolvedValue(payload);

    const { result } = renderHook(() => useFetchTalks("2024"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://sessionize.com/api/v2/teq4asez/view/Sessions",
    );
    expect(result.current.data).toEqual(mockData);
  });

  it("should use custom URL when a URL is provided", async () => {
    const mockData: IGroup[] = [
      {
        groupId: 1,
        groupName: "test",
        isDefault: false,
        sessions: [],
      },
    ];
    const payload: AxiosResponse<IGroup[]> = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: axiosHeaders,
      },
      data: mockData,
    };

    mockedAxios.get.mockResolvedValue(payload);

    const customUrl = "https://example.com/api/sessions";
    const { result } = renderHook(() => useFetchTalks(customUrl), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(customUrl);
    expect(result.current.data).toEqual(mockData);
  });
});

describe("useFetchTalksById", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should use default URL when no parameter is provided", async () => {
    const mockData: IGroup[] = [
      {
        groupId: 1,
        groupName: "test",
        isDefault: false,
        sessions: [
          {
            id: 123,
            title: "Test Session",
            description: "Test Description",
            endsAt: "2023-01-01T00:00:00Z",
            startsAt: "2023-01-01T00:00:00Z",
            track: "Test Track",
            categories: [
              {
                id: 1,
                name: CategoryItemEnum.Format,
                categoryItems: [{ id: 1, name: "test category" }],
              },
            ],
            speakers: [
              {
                id: "1",
                name: "Test Speaker",
              },
            ],
            questionAnswers: [
              {
                id: 1,
                question: "Test Question",
                answer: "Test Answer",
                questionType: "text",
              },
            ],
          },
        ],
      },
    ];
    const payload: AxiosResponse<IGroup[]> = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: axiosHeaders,
      },
      data: mockData,
    };

    mockedAxios.get.mockResolvedValue(payload);

    const { result } = renderHook(() => useFetchTalksById("123"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://sessionize.com/api/v2/xhudniix/view/Sessions",
    );
    const expectedData = mockData[0].sessions[0];
    expect(result.current.data).toEqual(expectedData);
  });

  it("should use 2023 URL when '2023' is provided", async () => {
    const mockData: IGroup[] = [
      {
        groupId: 1,
        groupName: "test ",
        isDefault: false,
        sessions: [
          {
            id: 123,
            title: "Test Session",
            track: "",
            description: "",
            endsAt: "2023-01-01T00:00:00Z",
            startsAt: "2023-01-01T00:00:00",
            categories: [
              {
                id: 1,
                name: CategoryItemEnum.Format,
                categoryItems: [{ id: 1, name: "test category" }],
              },
            ],
            speakers: [
              {
                id: "1",
                name: "Test Speaker",
              },
            ],
            questionAnswers: [
              {
                id: 1,
                question: "Test Question",
                answer: "Test Answer",
                questionType: "text",
              },
            ],
          },
        ],
      },
    ];
    const payload: AxiosResponse<IGroup[]> = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: axiosHeaders,
      },
      data: mockData,
    };

    mockedAxios.get.mockResolvedValue(payload);

    const { result } = renderHook(() => useFetchTalksById("123", "2023"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://sessionize.com/api/v2/ttsitynd/view/Sessions",
    );
    const expectedData = mockData[0].sessions[0];
    expect(result.current.data).toEqual(expectedData);
  });
});

describe("useFetchLiveView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should use default URL when no parameter is provided", async () => {
    const mockData: Liveview = {
      groupName: "",
      groupID: null,
      isDefault: false,
      sessions: [],
    };
    const payload: AxiosResponse<Liveview[]> = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: axiosHeaders,
      },
      data: [mockData],
    };

    mockedAxios.get.mockResolvedValue(payload);

    const { result } = renderHook(() => useFetchLiveView(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://sessionize.com/api/v2/xhudniix/view/Sessions",
    );
    expect(result.current.data).toEqual(payload.data[0]);
  });

  it("should use 2024 URL when '2024' is provided", async () => {
    const mockData: Liveview = {
      groupID: null,
      groupName: "",
      isDefault: false,
      sessions: [],
    };
    const payload: AxiosResponse<Liveview[]> = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: axiosHeaders,
      },
      data: [mockData],
    };

    mockedAxios.get.mockResolvedValue(payload);

    const { result } = renderHook(() => useFetchLiveView("2024"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://sessionize.com/api/v2/teq4asez/view/Sessions",
    );
    expect(result.current.data).toEqual(payload.data[0]);
  });
});
