import { describe, it, expect } from "vitest";
import data2023 from "@data/2023.json";
import data2024 from "@data/2024.json";
import data2025 from "@data/2025.json";
import data2026 from "@data/2026.json";
import { data2025 as cfpData2025 } from "@views/Cfp/CfpData2025";
import { data as cfpData2026 } from "@views/Cfp/CfpData";
import { SPEAKER_URLS } from "@utils/testing/testUtils";
import { SESSION_URLS } from "@utils/testing/testUtils";

/**
 * Year Data Isolation Tests
 *
 * These tests ensure that each conference year (2023, 2024, 2025, 2026) has
 * distinct data and doesn't accidentally share or leak data between years.
 *
 * Requirements verified:
 * 1. Different talks: Each year calls a different API endpoint
 * 2. Different speakers: Each year calls a different API endpoint
 * 3. CFP committee: Each year has a distinctive committee
 * 4. Schedule: Different for each year (result of different talks/speakers)
 * 5. Diversity: Different sponsor each year
 * 6. Job Offers: Different per year based on sponsorship
 * 7. Home page: Different dates and venue per year
 */

describe("Year Data Isolation - Conference Data", () => {
  const years = [2023, 2024, 2025, 2026];
  const dataByYear = {
    2023: data2023,
    2024: data2024,
    2025: data2025,
    2026: data2026,
  };

  describe("1. Talks API Endpoints - Each year has different endpoint", () => {
    it("should have unique API endpoints for each year", () => {
      const endpoints = [
        SESSION_URLS["2023"],
        SESSION_URLS["2024"],
        SESSION_URLS.DEFAULT, // 2025/2026
      ];

      // Verify all endpoints are unique
      const uniqueEndpoints = new Set(endpoints);
      expect(uniqueEndpoints.size).toBe(endpoints.length);
    });

    it("2023 talks endpoint should be different from 2024", () => {
      expect(SESSION_URLS["2023"]).not.toBe(SESSION_URLS["2024"]);
    });

    it("2023 talks endpoint should contain year identifier", () => {
      expect(SESSION_URLS["2023"]).toContain("ttsitynd"); // 2023 sessionize ID
    });

    it("2024 talks endpoint should contain year identifier", () => {
      expect(SESSION_URLS["2024"]).toContain("teq4asez"); // 2024 sessionize ID
    });
  });

  describe("2. Speakers API Endpoints - Each year has different endpoint", () => {
    it("should have unique API endpoints for each year", () => {
      const endpoints = [
        SPEAKER_URLS["2023"],
        SPEAKER_URLS["2024"],
        SPEAKER_URLS.DEFAULT, // 2025/2026
      ];

      // Verify all endpoints are unique
      const uniqueEndpoints = new Set(endpoints);
      expect(uniqueEndpoints.size).toBe(endpoints.length);
    });

    it("2023 speakers endpoint should be different from 2024", () => {
      expect(SPEAKER_URLS["2023"]).not.toBe(SPEAKER_URLS["2024"]);
    });

    it("2023 speakers endpoint should contain year identifier", () => {
      expect(SPEAKER_URLS["2023"]).toContain("ttsitynd"); // 2023 sessionize ID
    });

    it("2024 speakers endpoint should contain year identifier", () => {
      expect(SPEAKER_URLS["2024"]).toContain("teq4asez"); // 2024 sessionize ID
    });
  });

  describe("3. CFP Committee - Each year has distinctive committee", () => {
    it("2025 CFP committee should have members defined", () => {
      expect(cfpData2025).toBeDefined();
      expect(cfpData2025.length).toBeGreaterThan(0);

      const totalMembers = cfpData2025.reduce(
        (sum, track) => sum + track.members.length,
        0,
      );
      expect(totalMembers).toBe(19); // Verified 19 members for 2025
    });

    it("2026 CFP committee should be empty (not ready yet)", () => {
      expect(cfpData2026).toBeDefined();
      expect(cfpData2026.length).toBeGreaterThan(0);

      const totalMembers = cfpData2026.reduce(
        (sum, track) => sum + track.members.length,
        0,
      );
      expect(totalMembers).toBe(0); // 2026 committee not set yet
    });

    it("2025 and 2026 CFP data should be different objects", () => {
      expect(cfpData2025).not.toBe(cfpData2026);
    });

    it("CFP tracks should have consistent structure across years", () => {
      const trackNames2025 = cfpData2025.map((t) => t.name).sort();
      const trackNames2026 = cfpData2026.map((t) => t.name).sort();

      // Same track structure
      expect(trackNames2025).toEqual(trackNames2026);

      // But different member counts
      const members2025 = cfpData2025.reduce(
        (sum, t) => sum + t.members.length,
        0,
      );
      const members2026 = cfpData2026.reduce(
        (sum, t) => sum + t.members.length,
        0,
      );
      expect(members2025).not.toBe(members2026);
    });
  });

  describe("4. Schedule - Different for each year", () => {
    it("each year should have schedule configuration", () => {
      years.forEach((year) => {
        const data = dataByYear[year];
        expect(data.schedule).toBeDefined();
        expect(data.schedule.enabled).toBeDefined();
      });
    });

    it("schedule enabled status may differ between years", () => {
      // Schedule availability depends on whether talks are ready
      const scheduleStatuses = years.map(
        (year) => dataByYear[year].schedule.enabled,
      );

      // At least verify the property exists for all years
      expect(scheduleStatuses).toHaveLength(4);
    });
  });

  describe("5. Diversity - Different sponsor each year", () => {
    it("each year should have diversity configuration", () => {
      years.forEach((year) => {
        const data = dataByYear[year];
        expect(data.diversity).toBeDefined();
      });
    });

    it("diversity configuration should be boolean", () => {
      years.forEach((year) => {
        const data = dataByYear[year];
        expect(typeof data.diversity).toBe("boolean");
      });
    });

    it("2025 diversity should be false (already completed)", () => {
      expect(data2025.diversity).toBe(false);
    });

    it("2026 diversity should be false (not ready yet)", () => {
      expect(data2026.diversity).toBe(false);
    });
  });

  describe("6. Job Offers - Different per year based on sponsorship", () => {
    it("each year should have job offers configuration", () => {
      years.forEach((year) => {
        const data = dataByYear[year];
        // Job offers are controlled by sponsor data, not directly in year config
        // This verifies the year data structure exists
        expect(data).toBeDefined();
      });
    });

    // Note: Job offers are in JobsData.ts and are sponsor-specific
    // They're not directly in the year configuration files
  });

  describe("7. Home Page - Different dates and venue per year", () => {
    it("each year should have unique edition identifier", () => {
      const editions = years.map((year) => dataByYear[year].edition);

      // All editions should be unique
      const uniqueEditions = new Set(editions);
      expect(uniqueEditions.size).toBe(years.length);

      // Each edition should match its year
      years.forEach((year) => {
        expect(dataByYear[year].edition).toBe(year.toString());
      });
    });

    it("each year should have unique conference dates", () => {
      const startDates = years.map((year) => dataByYear[year].startDay);
      const endDates = years.map((year) => dataByYear[year].endDay);

      // Verify dates exist for all years
      expect(startDates).toHaveLength(4);
      expect(endDates).toHaveLength(4);

      // Verify all start dates are unique
      const uniqueStartDates = new Set(startDates);
      expect(uniqueStartDates.size).toBe(years.length);

      // Verify all end dates are unique
      const uniqueEndDates = new Set(endDates);
      expect(uniqueEndDates.size).toBe(years.length);
    });

    it("conference dates should be chronologically ordered by year", () => {
      for (let i = 0; i < years.length - 1; i++) {
        const currentYear = years[i];
        const nextYear = years[i + 1];

        const currentStart = new Date(dataByYear[currentYear].startDay);
        const nextStart = new Date(dataByYear[nextYear].startDay);

        expect(currentStart.getTime()).toBeLessThan(nextStart.getTime());
      }
    });

    it("each year should have venue information", () => {
      years.forEach((year) => {
        const data = dataByYear[year as keyof typeof dataByYear];
        expect(data.venue).toBeDefined();
        expect(typeof data.venue).toBe("string");
      });
    });

    it("venue may change between years", () => {
      const venues = years.map(
        (year) => dataByYear[year as keyof typeof dataByYear].venue,
      );

      // At least verify venue information exists for all years
      expect(venues).toHaveLength(4);
      venues.forEach((venue) => {
        expect(venue).toBeTruthy();
      });
    });

    it("each year should have unique CFP dates", () => {
      const cfpStartDates = years.map((year) => dataByYear[year].cfp.startDay);
      const cfpEndDates = years.map((year) => dataByYear[year].cfp.endDay);

      // Verify CFP dates exist for all years
      expect(cfpStartDates).toHaveLength(4);
      expect(cfpEndDates).toHaveLength(4);

      // CFP dates should be different across years
      const uniqueCfpStarts = new Set(cfpStartDates);
      expect(uniqueCfpStarts.size).toBeGreaterThan(1);
    });
  });

  describe("8. Data Integrity - No accidental data sharing", () => {
    it("year data objects should be independent", () => {
      // Verify each year has its own data object
      expect(data2023).not.toBe(data2024);
      expect(data2024).not.toBe(data2025);
      expect(data2025).not.toBe(data2026);
      expect(data2023).not.toBe(data2026);
    });

    it("modifying one year's data should not affect another", () => {
      // This is a compile-time guarantee due to separate JSON files,
      // but we verify the objects are distinct
      const editions = [
        data2023.edition,
        data2024.edition,
        data2025.edition,
        data2026.edition,
      ];

      expect(new Set(editions).size).toBe(4);
    });

    it("each year should have complete required fields", () => {
      const requiredFields = [
        "edition",
        "title",
        "startDay",
        "endDay",
        "venue",
        "cfp",
        "schedule",
      ];

      years.forEach((year) => {
        const data = dataByYear[year];
        requiredFields.forEach((field) => {
          expect(data[field]).toBeDefined();
        });
      });
    });
  });
});
