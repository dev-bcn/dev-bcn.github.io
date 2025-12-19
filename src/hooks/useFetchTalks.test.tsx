import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { type MockedFunction, vi } from "vitest";

import {
  useFetchLiveView,
  useFetchTalks,
  useFetchTalksById,
} from "./useFetchTalks";
import {
  createMockAxiosResponse,
  createMockGroup,
  createMockSession,
  getQueryClientWrapper,
  SESSION_URLS,
} from "../utils/testing/testUtils";

import type { IGroup } from "../types/sessions";

vi.mock("axios");
const mockedAxios = axios as unknown as MockedFunction<typeof axios>;

describe("useFetchTalks", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should use default URL when no parameter is provided", async () => {
    const mockData: IGroup[] = [createMockGroup({ groupName: "" })];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchTalks(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS.DEFAULT);
    expect(result.current.data).toEqual(mockData);
  });

  it("should use 2023 URL when '2023' is provided", async () => {
    const mockData: IGroup[] = [createMockGroup({ groupName: "test " })];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchTalks("2023"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS["2023"]);
    expect(result.current.data).toEqual(mockData);
  });

  it("should use 2024 URL when '2024' is provided", async () => {
    const mockData: IGroup[] = [createMockGroup({ groupName: "test" })];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchTalks("2024"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS["2024"]);
    expect(result.current.data).toEqual(mockData);
  });

  it("should use custom URL when a URL is provided", async () => {
    const mockData: IGroup[] = [createMockGroup({ groupName: "test" })];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
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
    vi.clearAllMocks();
  });

  it("should fetch a single talk by id", async () => {
    const mockSession = createMockSession();
    const mockData: IGroup[] = [
      createMockGroup({
        sessions: [mockSession],
      }),
    ];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchTalksById("123"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS.DEFAULT);
    const expectedData = mockData[0].sessions[0];
    expect(result.current.data).toEqual(expectedData);
  });

  it("should use 2023 URL when '2023' is provided", async () => {
    const mockSession = createMockSession({
      track: "",
      description: "",
      startsAt: "2023-01-01T00:00:00",
    });
    const mockData: IGroup[] = [
      createMockGroup({
        groupName: "test ",
        sessions: [mockSession],
      }),
    ];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchTalksById("123", "2023"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS["2023"]);
    const expectedData = mockData[0].sessions[0];
    expect(result.current.data).toEqual(expectedData);
  });

  it("should use 2024 URL when '2024' is provided", async () => {
    const mockSession = createMockSession({
      track: "",
      description: "",
      startsAt: "2024-01-01T00:00:00",
    });
    const mockData: IGroup[] = [
      createMockGroup({
        groupName: "test ",
        sessions: [mockSession],
      }),
    ];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchTalksById("123", "2024"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS["2024"]);
    const expectedData = mockData[0].sessions[0];
    expect(result.current.data).toEqual(expectedData);
  });

  it("should use custom URL when a URL is provided", async () => {
    const mockSession = createMockSession();
    const mockData: IGroup[] = [
      createMockGroup({
        sessions: [mockSession],
      }),
    ];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const customUrl = "https://example.com/api/sessions";
    const { result } = renderHook(() => useFetchTalksById("123", customUrl), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(customUrl);
    const expectedData = mockData[0].sessions[0];
    expect(result.current.data).toEqual(expectedData);
  });
});

describe("useFetchLiveView", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should use default URL when no parameter is provided", async () => {
    const mockSession = createMockSession();
    const mockData: IGroup[] = [
      createMockGroup({
        sessions: [mockSession],
      }),
    ];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchLiveView(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS.DEFAULT);
    expect(result.current.data).toEqual([mockSession]);
  });

  it("should use 2023 URL when '2023' is provided", async () => {
    const mockSession = createMockSession({
      track: "",
      description: "",
      startsAt: "2023-01-01T00:00:00",
    });
    const mockData: IGroup[] = [
      createMockGroup({
        groupName: "test ",
        sessions: [mockSession],
      }),
    ];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchLiveView("2023"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS["2023"]);
    expect(result.current.data).toEqual([mockSession]);
  });

  it("should use 2024 URL when '2024' is provided", async () => {
    const mockSession = createMockSession({
      track: "",
      description: "",
      startsAt: "2024-01-01T00:00:00",
    });
    const mockData: IGroup[] = [
      createMockGroup({
        groupName: "test ",
        sessions: [mockSession],
      }),
    ];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const { result } = renderHook(() => useFetchLiveView("2024"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(SESSION_URLS["2024"]);
    expect(result.current.data).toEqual([mockSession]);
  });

  it("should use custom URL when a URL is provided", async () => {
    const mockSession = createMockSession();
    const mockData: IGroup[] = [
      createMockGroup({
        sessions: [mockSession],
      }),
    ];
    const payload = createMockAxiosResponse(mockData);

    mockedAxios.get.mockResolvedValue(payload);

    const { wrapper } = getQueryClientWrapper();
    const customUrl = "https://example.com/api/sessions";
    const { result } = renderHook(() => useFetchLiveView(customUrl), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading);

    expect(mockedAxios.get).toHaveBeenCalledWith(customUrl);
    expect(result.current.data).toEqual([mockSession]);
  });
});
