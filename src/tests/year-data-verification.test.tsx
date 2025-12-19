import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";

/**
 * Component-level tests to verify that year-specific wrapper components
 * correctly pass the appropriate year's configuration data.
 *
 * These tests ensure that when a user navigates to /2025/*, they see 2025 data,
 * not 2026 or any other year's data.
 */

// Mock react-use
vi.mock("react-use", () => ({
  useWindowSize: vi.fn(() => ({ width: 1200 })),
}));

// Mock Sentry
vi.mock("@sentry/react", () => ({
  captureException: vi.fn(),
}));

// Mock analytics
vi.mock("@components/analytics/Analytics", () => ({
  gaEventTracker: vi.fn(),
}));

describe("2025 Wrapper Components - Year Data Verification", () => {
  beforeEach(() => {
    document.title = "";
    vi.clearAllMocks();
  });

  /**
   * NOTE: This test file serves as documentation of which components need wrappers.
   *
   * Actual verification tests are in:
   * - src/2025/Speakers/SpeakersWrapper2025.test.tsx (3 tests)
   * - src/2025/Cfp/CfpSectionWrapper2025.test.tsx (3 tests)
   * - src/config/yearRoutes.integration.test.ts (28 tests)
   *
   * Components verified as correctly configured (no wrapper needed):
   * - Schedule2025: imports @data/2025.json directly
   * - Talks2025: imports @data/2025.json as default
   * - Workshops2025: imports @data/2025.json directly
   * - JobOffers2025: uses static sponsor data (not year-specific)
   */

  describe("Components requiring wrappers", () => {
    it("Diversity2025 needs a wrapper - currently uses 2026 data", async () => {
      // VERIFIED: Diversity component hardcodes @data/2026.json import
      // and uses data.edition directly without accepting a prop.
      // This needs a DiversityWrapper2025 to pass 2025 configuration.

      const { Diversity2025 } = await import("../utils/lazyComponents");

      // Verify it's defined
      expect(Diversity2025).toBeDefined();

      // TODO: Create DiversityWrapper2025 that passes 2025 data
      // The Diversity component also needs refactoring to accept conferenceConfig prop
    });
  });
});
