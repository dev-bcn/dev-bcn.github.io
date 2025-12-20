import { render } from "@testing-library/react";
import { describe, expect, it, beforeEach, afterEach } from "vitest";

import { ResourcePreloader } from "./ResourcePreloader";

describe("ResourcePreloader", () => {
  beforeEach(() => {
    // Clear any existing link tags before each test
    document.head.innerHTML = "";
  });

  afterEach(() => {
    // Clean up after each test
    document.head.innerHTML = "";
  });

  it("should add DNS prefetch links", () => {
    render(
      <ResourcePreloader
        dnsPrefetch={["https://example.com", "https://api.example.com"]}
      />,
    );

    const dnsPrefetchLinks = document.querySelectorAll(
      'link[rel="dns-prefetch"]',
    );
    expect(dnsPrefetchLinks).toHaveLength(2);
    expect(dnsPrefetchLinks[0].getAttribute("href")).toBe(
      "https://example.com",
    );
    expect(dnsPrefetchLinks[1].getAttribute("href")).toBe(
      "https://api.example.com",
    );
  });

  it("should add preconnect links", () => {
    render(
      <ResourcePreloader
        preconnect={["https://fonts.googleapis.com", "https://cdn.example.com"]}
      />,
    );

    const preconnectLinks = document.querySelectorAll('link[rel="preconnect"]');
    expect(preconnectLinks).toHaveLength(2);
    expect(preconnectLinks[0].getAttribute("href")).toBe(
      "https://fonts.googleapis.com",
    );
    expect(preconnectLinks[0].getAttribute("crossorigin")).toBe("anonymous");
  });

  it("should add preload links for fonts", () => {
    render(
      <ResourcePreloader
        preload={[
          {
            href: "/fonts/inter.woff2",
            as: "font",
            type: "font/woff2",
            crossOrigin: "anonymous",
          },
        ]}
      />,
    );

    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    expect(preloadLinks).toHaveLength(1);
    expect(preloadLinks[0].getAttribute("href")).toBe("/fonts/inter.woff2");
    expect(preloadLinks[0].getAttribute("as")).toBe("font");
    expect(preloadLinks[0].getAttribute("type")).toBe("font/woff2");
    expect(preloadLinks[0].getAttribute("crossorigin")).toBe("anonymous");
  });

  it("should add preload links for images", () => {
    render(
      <ResourcePreloader
        preload={[
          {
            href: "/images/hero.jpg",
            as: "image",
          },
        ]}
      />,
    );

    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    expect(preloadLinks).toHaveLength(1);
    expect(preloadLinks[0].getAttribute("href")).toBe("/images/hero.jpg");
    expect(preloadLinks[0].getAttribute("as")).toBe("image");
  });

  it("should add preload links for scripts", () => {
    render(
      <ResourcePreloader
        preload={[
          {
            href: "/scripts/analytics.js",
            as: "script",
          },
        ]}
      />,
    );

    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    expect(preloadLinks).toHaveLength(1);
    expect(preloadLinks[0].getAttribute("href")).toBe("/scripts/analytics.js");
    expect(preloadLinks[0].getAttribute("as")).toBe("script");
  });

  it("should handle all resource types together", () => {
    render(
      <ResourcePreloader
        dnsPrefetch={["https://example.com"]}
        preconnect={["https://fonts.googleapis.com"]}
        preload={[
          { href: "/fonts/inter.woff2", as: "font", type: "font/woff2" },
          { href: "/images/logo.png", as: "image" },
        ]}
      />,
    );

    const dnsPrefetchLinks = document.querySelectorAll(
      'link[rel="dns-prefetch"]',
    );
    const preconnectLinks = document.querySelectorAll('link[rel="preconnect"]');
    const preloadLinks = document.querySelectorAll('link[rel="preload"]');

    expect(dnsPrefetchLinks).toHaveLength(1);
    expect(preconnectLinks).toHaveLength(1);
    expect(preloadLinks).toHaveLength(2);
  });

  it("should handle empty arrays", () => {
    render(<ResourcePreloader dnsPrefetch={[]} preconnect={[]} preload={[]} />);

    const allLinks = document.querySelectorAll("link");
    expect(allLinks).toHaveLength(0);
  });

  it("should not render any visible content", () => {
    const { container } = render(
      <ResourcePreloader dnsPrefetch={["https://example.com"]} />,
    );

    expect(container.textContent).toBe("");
  });
});
