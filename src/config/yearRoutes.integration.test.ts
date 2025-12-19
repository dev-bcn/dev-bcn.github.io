import { describe, it, expect } from "vitest";

import { yearRouteConfigs } from "../config/yearRoutes";

/**
 * Integration tests to verify that all year-specific route configurations
 * are properly set up and consistent across all years.
 *
 * These tests ensure that:
 * 1. Each year has the expected components configured
 * 2. Components are properly lazy-loaded
 * 3. No year is accidentally using another year's configuration
 */
describe("Year Route Configurations - Integration Tests", () => {
  const years = ["2023", "2024", "2025", "2026"];

  describe("All years have required configurations", () => {
    years.forEach((year) => {
      it(`${year} has a home component configured`, () => {
        const config = yearRouteConfigs[year];
        expect(config).toBeDefined();
        expect(config.home).toBeDefined();
        expect(typeof config.home).toBe("object"); // Lazy component
      });
    });
  });

  describe("2025 specific components are properly configured", () => {
    it("has speakers component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.speakers).toBeDefined();
    });

    it("has cfp component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.cfp).toBeDefined();
    });

    it("has schedule component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.schedule).toBeDefined();
    });

    it("has talks component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.talks).toBeDefined();
    });

    it("has workshops component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.workshops).toBeDefined();
    });

    it("has diversity component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.diversity).toBeDefined();
    });

    it("has speakerInfo component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.speakerInfo).toBeDefined();
    });

    it("has speakerDetail component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.speakerDetail).toBeDefined();
    });

    it("has talkDetail component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.talkDetail).toBeDefined();
    });

    it("has sessionFeedback component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.sessionFeedback).toBeDefined();
    });

    it("has attendee component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.attendee).toBeDefined();
    });

    it("has communities component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.communities).toBeDefined();
    });

    it("has sponsorship component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.sponsorship).toBeDefined();
    });

    it("has codeOfConduct component configured", () => {
      const config = yearRouteConfigs["2025"];
      expect(config.codeOfConduct).toBeDefined();
    });
  });

  describe("2026 specific components are properly configured", () => {
    it("has speakers component configured", () => {
      const config = yearRouteConfigs["2026"];
      expect(config.speakers).toBeDefined();
    });

    it("has cfp component configured", () => {
      const config = yearRouteConfigs["2026"];
      expect(config.cfp).toBeDefined();
    });

    it("has schedule component configured", () => {
      const config = yearRouteConfigs["2026"];
      expect(config.schedule).toBeDefined();
    });
  });

  describe("Component uniqueness verification", () => {
    it("2025 and 2026 speakers components are different instances", () => {
      const config2025 = yearRouteConfigs["2025"];
      const config2026 = yearRouteConfigs["2026"];

      // They should be different lazy component instances
      // (even if they might resolve to wrappers of the same base component)
      expect(config2025.speakers).not.toBe(config2026.speakers);
    });

    it("2025 and 2026 cfp components are different instances", () => {
      const config2025 = yearRouteConfigs["2025"];
      const config2026 = yearRouteConfigs["2026"];

      expect(config2025.cfp).not.toBe(config2026.cfp);
    });

    it("2025 and 2026 home components are different instances", () => {
      const config2025 = yearRouteConfigs["2025"];
      const config2026 = yearRouteConfigs["2026"];

      expect(config2025.home).not.toBe(config2026.home);
    });
  });

  describe("Shared components verification", () => {
    it("2025 and 2026 both have sponsorship configured", () => {
      const config2025 = yearRouteConfigs["2025"];
      const config2026 = yearRouteConfigs["2026"];

      expect(config2025.sponsorship).toBeDefined();
      expect(config2026.sponsorship).toBeDefined();
    });

    it("2025 and 2026 both have codeOfConduct configured", () => {
      const config2025 = yearRouteConfigs["2025"];
      const config2026 = yearRouteConfigs["2026"];

      expect(config2025.codeOfConduct).toBeDefined();
      expect(config2026.codeOfConduct).toBeDefined();
    });
  });

  describe("Configuration completeness", () => {
    it("all configured years are in the CONFIGURED_YEARS export", () => {
      const configuredYears = Object.keys(yearRouteConfigs);
      expect(configuredYears).toContain("2023");
      expect(configuredYears).toContain("2024");
      expect(configuredYears).toContain("2025");
      expect(configuredYears).toContain("2026");
    });

    it("no unexpected years are configured", () => {
      const configuredYears = Object.keys(yearRouteConfigs);
      const expectedYears = ["2023", "2024", "2025", "2026"];

      configuredYears.forEach((year) => {
        expect(expectedYears).toContain(year);
      });
    });
  });
});
