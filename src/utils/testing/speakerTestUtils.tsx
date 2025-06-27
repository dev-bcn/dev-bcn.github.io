import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ISpeaker } from "@/types/speakers";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

export * from "@testing-library/react";

export const createMockSpeaker = (overrides = {}): ISpeaker => ({
  id: "1",
  fullName: "John Smith",
  speakerImage: "https://example.com/john.jpg",
  tagLine: "Software engineer",
  bio: "I am a software engineer",
  sessions: [
    {
      id: 4567,
      name: "sample session",
    },
  ],
  ...overrides,
});

export const createMockSpeakers = (count: number): ISpeaker[] => {
  return Array.from({ length: count }, (_, i) =>
    createMockSpeaker({
      id: `${i + 1}`,
      fullName: `Speaker ${i + 1}`,
      speakerImage: `https://example.com/speaker${i + 1}.jpg`,
      tagLine: `Tagline for Speaker ${i + 1}`,
    }),
  );
};

export function renderWithRouter(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): RenderResult {
  const wrapper: React.FC<React.PropsWithChildren<object>> = ({ children }) => (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" element={children} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

  return render(ui, { wrapper, ...options });
}

export function renderWithRouterAndQueryClient(
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

  const wrapper: React.FC<React.PropsWithChildren<object>> = ({ children }) => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={children} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );

  return render(ui, { wrapper, ...options });
}
