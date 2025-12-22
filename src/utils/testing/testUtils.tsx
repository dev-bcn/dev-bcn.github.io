import { render } from "@testing-library/react";
import { AxiosHeaders } from "axios";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import type { RenderOptions, RenderResult } from "@testing-library/react";
import type { AxiosResponse } from "axios";
import type { FC } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

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

  const wrapper: FC<React.PropsWithChildren<object>> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return render(ui, { wrapper, ...options });
}

export function renderWithQueryClientAndRouter(
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

  const wrapper: FC<React.PropsWithChildren<object>> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
    </QueryClientProvider>
  );

  return render(ui, { wrapper, ...options });
}

export function getQueryClientWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const wrapper: FC<React.PropsWithChildren<object>> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return { queryClient, wrapper };
}

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

export const SESSION_URLS = {
  DEFAULT: "https://sessionize.com/api/v2/xhudniix/view/Sessions",
  2023: "https://sessionize.com/api/v2/ttsitynd/view/Sessions",
  2024: "https://sessionize.com/api/v2/teq4asez/view/Sessions",
  2025: "https://sessionize.com/api/v2/xhudniix/view/Sessions",
};

export const SPEAKER_URLS = {
  DEFAULT: "https://sessionize.com/api/v2/xhudniix/view/Speakers",
  2023: "https://sessionize.com/api/v2/ttsitynd/view/Speakers",
  2024: "https://sessionize.com/api/v2/teq4asez/view/Speakers",
  2025: "https://sessionize.com/api/v2/xhudniix/view/Speakers",
};

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
