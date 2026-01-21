import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PageMetadata } from "./PageMetadata";

describe("PageMetadata", () => {
  it("should render basic metadata tags", () => {
    render(
      <PageMetadata
        title="Test Page"
        description="This is a test page description"
      />,
    );

    // Check title
    expect(document.title).toBe("Test Page | DevBcn");

    // Check description
    const descriptionMeta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement;
    expect(descriptionMeta?.content).toBe("This is a test page description");
  });

  it("should not append DevBcn if already in title", () => {
    render(
      <PageMetadata
        title="DevBcn 2025 - Conference"
        description="Test description"
      />,
    );

    expect(document.title).toBe("DevBcn 2025 - Conference");
  });

  it("should render Open Graph meta tags", () => {
    render(
      <PageMetadata
        title="Test Page"
        description="Test description"
        canonicalUrl="https://www.devbcn.com/test"
        ogImage="https://www.devbcn.com/images/test.jpg"
        ogType="event"
      />,
    );

    const ogTitle = document.querySelector(
      'meta[property="og:title"]',
    ) as HTMLMetaElement;
    expect(ogTitle?.content).toBe("Test Page | DevBcn");

    const ogType = document.querySelector(
      'meta[property="og:type"]',
    ) as HTMLMetaElement;
    expect(ogType?.content).toBe("event");

    const ogImage = document.querySelector(
      'meta[property="og:image"]',
    ) as HTMLMetaElement;
    expect(ogImage?.content).toBe("https://www.devbcn.com/images/test.jpg");

    const ogUrl = document.querySelector(
      'meta[property="og:url"]',
    ) as HTMLMetaElement;
    expect(ogUrl?.content).toBe("https://www.devbcn.com/test");
  });

  it("should render Twitter meta tags", () => {
    render(
      <PageMetadata
        title="Test Page"
        description="Test description"
        twitterCard="summary"
      />,
    );

    const twitterCard = document.querySelector(
      'meta[name="twitter:card"]',
    ) as HTMLMetaElement;
    expect(twitterCard?.content).toBe("summary");

    const twitterTitle = document.querySelector(
      'meta[name="twitter:title"]',
    ) as HTMLMetaElement;
    expect(twitterTitle?.content).toBe("Test Page | DevBcn");
  });

  it("should render canonical link when provided", () => {
    render(
      <PageMetadata
        title="Test Page"
        description="Test description"
        canonicalUrl="https://www.devbcn.com/canonical"
      />,
    );

    const canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    expect(canonical?.href).toBe("https://www.devbcn.com/canonical");
  });

  it("should render keywords when provided", () => {
    render(
      <PageMetadata
        title="Test Page"
        description="Test description"
        keywords={["react", "conference", "barcelona"]}
      />,
    );

    const keywords = document.querySelector(
      'meta[name="keywords"]',
    ) as HTMLMetaElement;
    expect(keywords?.content).toBe("react, conference, barcelona");
  });

  it("should not render keywords meta when empty array", () => {
    render(
      <PageMetadata
        title="Test Page"
        description="Test description"
        keywords={[]}
      />,
    );

    const keywords = document.querySelector('meta[name="keywords"]');
    expect(keywords).toBeNull();
  });

  it("should use default OG image when not provided", () => {
    render(<PageMetadata title="Test Page" description="Test description" />);

    const ogImage = document.querySelector(
      'meta[property="og:image"]',
    ) as HTMLMetaElement;
    expect(ogImage?.content).toBe(
      "https://www.devbcn.com/images/devbcn26.png",
    );
  });

  it("should use default og:type as website", () => {
    render(<PageMetadata title="Test Page" description="Test description" />);

    const ogType = document.querySelector(
      'meta[property="og:type"]',
    ) as HTMLMetaElement;
    expect(ogType?.content).toBe("website");
  });

  it("should use default twitter:card as summary_large_image", () => {
    render(<PageMetadata title="Test Page" description="Test description" />);

    const twitterCard = document.querySelector(
      'meta[name="twitter:card"]',
    ) as HTMLMetaElement;
    expect(twitterCard?.content).toBe("summary_large_image");
  });

  it("should render new default OpenGraph and Twitter tags", () => {
    render(<PageMetadata title="Test Page" description="Test description" />);

    const ogLocale = document.querySelector(
      'meta[property="og:locale"]',
    ) as HTMLMetaElement;
    expect(ogLocale?.content).toBe("en_GB");

    const twitterDomain = document.querySelector(
      'meta[name="twitter:domain"]',
    ) as HTMLMetaElement;
    expect(twitterDomain?.content).toBe("https://www.devbcn.com/");

    const twitterSite = document.querySelector(
      'meta[name="twitter:site"]',
    ) as HTMLMetaElement;
    expect(twitterSite?.content).toBe("@dev_bcn");

    const twitterCreator = document.querySelector(
      'meta[name="twitter:creator"]',
    ) as HTMLMetaElement;
    expect(twitterCreator?.content).toBe("@dev_bcn");

    const twitterAlt = document.querySelector(
      'meta[name="twitter:image:alt"]',
    ) as HTMLMetaElement;
    expect(twitterAlt?.content).toBe(
      "DevBcn - Barcelona Developers Conference in Spain",
    );
  });

  it("should render Slack specific tags when provided", () => {
    render(
      <PageMetadata
        title="Test Page"
        description="Test description"
        twitterLabel1="Date"
        twitterData1="June 16-17"
        twitterLabel2="Location"
        twitterData2="BCN"
      />,
    );

    const label1 = document.querySelector(
      'meta[name="twitter:label1"]',
    ) as HTMLMetaElement;
    expect(label1?.content).toBe("Date");

    const data1 = document.querySelector(
      'meta[name="twitter:data1"]',
    ) as HTMLMetaElement;
    expect(data1?.content).toBe("June 16-17");

    const label2 = document.querySelector(
      'meta[name="twitter:label2"]',
    ) as HTMLMetaElement;
    expect(label2?.content).toBe("Location");

    const data2 = document.querySelector(
      'meta[name="twitter:data2"]',
    ) as HTMLMetaElement;
    expect(data2?.content).toBe("BCN");
  });
});
