import { renderHook, waitFor } from "@testing-library/react";
import { useFetchSpeakers } from "./useFetchSpeakers";
import axios from "axios";
import { speakerAdapter } from "../services/speakerAdapter";
import { IResponse } from "../types/speakers";
import {
  createMockAxiosResponse,
  createMockSpeaker,
  getQueryClientWrapper,
  SPEAKER_URLS,
} from "../utils/testing/testUtils";

vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Create mock speakers
const mockSpeaker1 = createMockSpeaker();
const mockSpeaker2 = createMockSpeaker({
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
});

// Create mock response
const payload = createMockAxiosResponse([mockSpeaker1, mockSpeaker2]);

describe("fetch speaker hook and speaker adapter", () => {
  beforeAll(() => {
    vi.mock("axios");
  });
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should adapt from a server response with default URL", async () => {
    const { wrapper } = getQueryClientWrapper();
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));

    const { result } = renderHook(() => useFetchSpeakers(), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess, {});
    await waitFor(() => !result.current.isLoading, {});
    expect(mockedAxios.get).toHaveBeenCalledWith(SPEAKER_URLS.DEFAULT);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
    expect(result.current.data).toEqual(speakerAdapter(payload.data));
  });

  it("should adapt from server response a query with id", async () => {
    //Given
    const { wrapper } = getQueryClientWrapper();
    mockedAxios.get.mockResolvedValueOnce(payload);
    const expectedPayload: IResponse[] = [mockSpeaker1];

    //When
    const { result } = renderHook(() => useFetchSpeakers("1"), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess);
    await waitFor(() => !result.current.isLoading, {});
    //then
    expect(mockedAxios.get).toHaveBeenCalledWith(SPEAKER_URLS.DEFAULT);
    expect(result.current.data).toEqual(speakerAdapter(expectedPayload));
  });

  it("should use 2023 URL when '2023' is passed", async () => {
    const { wrapper } = getQueryClientWrapper();
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));

    const { result } = renderHook(() => useFetchSpeakers("2023"), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess, {});
    await waitFor(() => !result.current.isLoading, {});
    expect(mockedAxios.get).toHaveBeenCalledWith(SPEAKER_URLS["2023"]);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
    expect(result.current.data).toEqual(speakerAdapter(payload.data));
  });

  it("should use 2024 URL when '2024' is passed", async () => {
    const { wrapper } = getQueryClientWrapper();
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));

    const { result } = renderHook(() => useFetchSpeakers("2024"), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess, {});
    await waitFor(() => !result.current.isLoading, {});
    expect(mockedAxios.get).toHaveBeenCalledWith(SPEAKER_URLS["2024"]);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(null);
    expect(result.current.data).toEqual(speakerAdapter(payload.data));
  });

  it("should use custom URL when a URL is passed", async () => {
    const { wrapper } = getQueryClientWrapper();
    mockedAxios.get.mockImplementation(() => Promise.resolve(payload));

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
    const { wrapper } = getQueryClientWrapper();
    mockedAxios.get.mockResolvedValueOnce(payload);
    const expectedPayload: IResponse[] = [mockSpeaker1];

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
