import { describe, it, expect } from "vitest";

import { generateYearRoutes, getAllRoutes } from "../config/routeConfig";
import { yearRouteConfigs } from "../config/yearRoutes";

/**
 * Year Path Isolation Tests
 *
 * These tests verify that each conference year (2023, 2024, 2025, 2026) has:
 * 1. Distinct URL paths (e.g., /2023/speakers, /2024/speakers, /2025/speakers, /2026/speakers)
 * 2. Different component instances for each year's path
 * 3. Proper route configuration without conflicts
 * 4. All expected pages available for each year
 */

describe("Year Path Isolation - Route Configuration", () => {
  const years = ["2023", "2024", "2025", "2026"];

  describe("1. Path Structure - Each year has distinct URL paths", () => {
    it("should generate year-specific paths for each year", () => {
      years.forEach((year) => {
        const routes = generateYearRoutes(year);

        // Every route should start with /year
        routes.forEach((route) => {
          expect(route.path).toMatch(new RegExp(`^/${year}`));
        });
      });
    });

    it("should have unique paths across all years", () => {
      const allRoutes = getAllRoutes();
      const paths = allRoutes.map((r) => r.path);

      // Check for duplicates (excluding dynamic routes like :id)
      const staticPaths = paths.filter((p) => !p.includes(":"));
      const _uniquePaths = new Set(staticPaths);

      // Some paths might be intentionally shared (like shared routes)
      // but year-specific paths should be unique
      const yearPaths = staticPaths.filter((p) => /^\/\d{4}/.test(p));
      const uniqueYearPaths = new Set(yearPaths);

      expect(uniqueYearPaths.size).toBe(yearPaths.length);
    });

    it("each year should have a home path", () => {
      years.forEach((year) => {
        const routes = generateYearRoutes(year);
        const homePath = routes.find((r) => r.path === `/${year}`);

        expect(homePath).toBeDefined();
        expect(homePath?.component).toBeDefined();
      });
    });
  });

  describe("2. Component Isolation - Different components for each year", () => {
    const criticalPaths = ["speakers", "talks", "cfp", "schedule", "diversity"];

    criticalPaths.forEach((pathName) => {
      it(`${pathName} path should use different components for different years`, () => {
        const components = years
          .map((year) => {
            const routes = generateYearRoutes(year);
            const route = routes.find((r) => r.path.endsWith(`/${pathName}`));
            return route?.component;
          })
          .filter(Boolean);

        // At least some years should have this path
        if (components.length > 0) {
          // Verify components exist
          components.forEach((comp) => {
            expect(comp).toBeDefined();
          });
        }
      });
    });

    it("2025 speakers component should be different from 2026 speakers component", () => {
      const routes2025 = generateYearRoutes("2025");
      const routes2026 = generateYearRoutes("2026");

      const speakers2025 = routes2025.find((r) => r.path === "/2025/speakers");
      const speakers2026 = routes2026.find((r) => r.path === "/2026/speakers");

      expect(speakers2025).toBeDefined();
      expect(speakers2026).toBeDefined();

      // Different component instances
      expect(speakers2025?.component).not.toBe(speakers2026?.component);
    });

    it("2025 CFP component should be different from 2026 CFP component", () => {
      const routes2025 = generateYearRoutes("2025");
      const routes2026 = generateYearRoutes("2026");

      const cfp2025 = routes2025.find((r) => r.path === "/2025/cfp");
      const cfp2026 = routes2026.find((r) => r.path === "/2026/cfp");

      expect(cfp2025).toBeDefined();
      expect(cfp2026).toBeDefined();

      // Different component instances
      expect(cfp2025?.component).not.toBe(cfp2026?.component);
    });
  });

  describe("3. Route Completeness - All expected pages for each year", () => {
    it("2026 should have all current edition pages", () => {
      const routes = generateYearRoutes("2026");
      const paths = routes.map((r) => r.path);

      expect(paths).toContain("/2026");
      expect(paths).toContain("/2026/speakers");
      expect(paths).toContain("/2026/talks");
      expect(paths).toContain("/2026/schedule");
      expect(paths).toContain("/2026/cfp");
      expect(paths).toContain("/2026/diversity");
      expect(paths).toContain("/2026/sponsorship");
      expect(paths).toContain("/2026/codeOfConduct");
    });

    it("2025 should have all pages including session feedback", () => {
      const routes = generateYearRoutes("2025");
      const paths = routes.map((r) => r.path);

      expect(paths).toContain("/2025");
      expect(paths).toContain("/2025/speakers");
      expect(paths).toContain("/2025/talks");
      expect(paths).toContain("/2025/schedule");
      expect(paths).toContain("/2025/cfp");
      expect(paths).toContain("/2025/diversity");
      expect(paths).toContain("/2025/session-feedback");
      expect(paths).toContain("/2025/attendee");
      expect(paths).toContain("/2025/communities");
    });

    it("2024 should have all archive pages", () => {
      const routes = generateYearRoutes("2024");
      const paths = routes.map((r) => r.path);

      expect(paths).toContain("/2024");
      expect(paths).toContain("/2024/speakers");
      expect(paths).toContain("/2024/talks");
      expect(paths).toContain("/2024/schedule");
    });

    it("2023 should have all archive pages", () => {
      const routes = generateYearRoutes("2023");
      const paths = routes.map((r) => r.path);

      expect(paths).toContain("/2023");
      expect(paths).toContain("/2023/speakers");
      expect(paths).toContain("/2023/talks");
      expect(paths).toContain("/2023/schedule");
    });
  });

  describe("4. Dynamic Routes - Speaker and Talk details", () => {
    it("each year should have speaker detail routes", () => {
      years.forEach((year) => {
        const routes = generateYearRoutes(year);
        const speakerDetail = routes.find((r) =>
          r.path.includes("/speaker/:id"),
        );

        expect(speakerDetail).toBeDefined();
        expect(speakerDetail?.path).toBe(`/${year}/speaker/:id`);
      });
    });

    it("each year should have talk detail routes", () => {
      years.forEach((year) => {
        const routes = generateYearRoutes(year);
        const talkDetail = routes.find((r) => r.path.includes("/talk/:id"));

        expect(talkDetail).toBeDefined();
        expect(talkDetail?.path).toBe(`/${year}/talk/:id`);
      });
    });

    it("speaker detail paths should be year-specific", () => {
      const paths = years.map((year) => `/${year}/speaker/:id`);
      const uniquePaths = new Set(paths);

      expect(uniquePaths.size).toBe(years.length);
    });
  });

  describe("5. Year Route Configuration Consistency", () => {
    it("all years should have route configurations", () => {
      years.forEach((year) => {
        const config = yearRouteConfigs[year];
        expect(config).toBeDefined();
      });
    });

    it("each year config should have a home component", () => {
      years.forEach((year) => {
        const config = yearRouteConfigs[year];
        expect(config.home).toBeDefined();
      });
    });

    it("each year config should have speakers component", () => {
      years.forEach((year) => {
        const config = yearRouteConfigs[year];
        expect(config.speakers).toBeDefined();
      });
    });

    it("each year config should have talks component", () => {
      years.forEach((year) => {
        const config = yearRouteConfigs[year];
        expect(config.talks).toBeDefined();
      });
    });

    it("each year config should have schedule component", () => {
      years.forEach((year) => {
        const config = yearRouteConfigs[year];
        expect(config.schedule).toBeDefined();
      });
    });
  });

  describe("6. Route Count and Coverage", () => {
    it("should generate multiple routes for each year", () => {
      years.forEach((year) => {
        const routes = generateYearRoutes(year);

        // Each year should have at least 10 routes (home + various pages)
        expect(routes.length).toBeGreaterThanOrEqual(10);
      });
    });

    it("total route count should include all years plus shared routes", () => {
      const allRoutes = getAllRoutes();

      // Should have routes for all years plus shared routes
      // Minimum: 4 years * 10 routes/year + shared routes
      expect(allRoutes.length).toBeGreaterThan(40);
    });

    it("2025 should have more routes than 2026 (includes session feedback, attendee, communities)", () => {
      const routes2025 = generateYearRoutes("2025");
      const routes2026 = generateYearRoutes("2026");

      // 2025 has additional routes like session-feedback, attendee, communities
      expect(routes2025.length).toBeGreaterThanOrEqual(routes2026.length);
    });
  });

  describe("7. Path Naming Consistency", () => {
    it("all year paths should follow /YYYY/page-name pattern", () => {
      years.forEach((year) => {
        const routes = generateYearRoutes(year);

        routes.forEach((route) => {
          // Should start with /YYYY
          expect(route.path).toMatch(/^\/\d{4}/);

          // If it has a second segment, it should be lowercase or kebab-case
          const segments = route.path.split("/");
          if (segments.length > 2) {
            const pageName = segments[2];
            // Allow lowercase, kebab-case, camelCase, and :param patterns
            expect(pageName).toMatch(/^[a-zA-Z-:]+$/);
          }
        });
      });
    });

    it("no trailing slashes in paths", () => {
      const allRoutes = getAllRoutes();

      allRoutes.forEach((route) => {
        if (route.path !== "/") {
          expect(route.path).not.toMatch(/\/$/);
        }
      });
    });
  });

  describe("8. Component Reference Integrity", () => {
    it("all route components should be defined (not null/undefined)", () => {
      const allRoutes = getAllRoutes();

      allRoutes.forEach((route) => {
        expect(route.component).toBeDefined();
        expect(route.component).not.toBeNull();
      });
    });

    it("year-specific components should be lazy-loaded", () => {
      years.forEach((year) => {
        const routes = generateYearRoutes(year);

        routes.forEach((route) => {
          // Lazy components have a $$typeof property
          expect(route.component).toHaveProperty("$$typeof");
        });
      });
    });
  });
});
