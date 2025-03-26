import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { AxiosHeaders, AxiosResponse } from "axios";

// Re-export everything from testing-library
export * from "@testing-library/react";

// Create a custom render function that includes the QueryClientProvider
export function renderWithQueryClient(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): RenderResult {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const wrapper: FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return render(ui, { wrapper, ...options });
}

// Create a function to get a QueryClient and wrapper for use with renderHook
export function getQueryClientWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const wrapper: FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return { queryClient, wrapper };
}

// Create a function to create a mock axios response
export function createMockAxiosResponse<T>(data: T): AxiosResponse<T> {
  const axiosHeaders = new AxiosHeaders();
  return {
    status: 200,
    statusText: "OK",
    headers: {},
    config: {
      headers: axiosHeaders,
    },
    data,
  };
}

// Session URLs
export const SESSION_URLS = {
  DEFAULT: "https://sessionize.com/api/v2/xhudniix/view/Sessions",
  "2023": "https://sessionize.com/api/v2/ttsitynd/view/Sessions",
  "2024": "https://sessionize.com/api/v2/teq4asez/view/Sessions",
};

// Speaker URLs
export const SPEAKER_URLS = {
  DEFAULT: "https://sessionize.com/api/v2/xhudniix/view/Speakers",
  "2023": "https://sessionize.com/api/v2/ttsitynd/view/Speakers",
  "2024": "https://sessionize.com/api/v2/teq4asez/view/Speakers",
};

// Mock data factories
export const createMockSpeaker = (overrides = {}) => ({
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
  ...overrides,
});

export const createMockSession = (overrides = {}) => ({
  id: 123,
  title: "Test Session",
  description: "Test Description",
  endsAt: "2023-01-01T00:00:00Z",
  startsAt: "2023-01-01T00:00:00Z",
  track: "Test Track",
  categories: [
    {
      id: 1,
      name: "Format",
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
  ...overrides,
});

export const createMockGroup = (overrides = {}) => ({
  groupId: 1,
  groupName: "Test Group",
  isDefault: false,
  sessions: [],
  ...overrides,
});

export const createMockLiveview = (overrides = {}) => ({
  groupID: null,
  groupName: "",
  isDefault: false,
  sessions: [],
  ...overrides,
});
