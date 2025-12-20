import type { PageMetadataProps } from "@components/common/PageMetadata";

/**
 * Centralized metadata configuration for all pages.
 * This avoids duplication and makes it easy to update SEO content.
 */

const BASE_URL = "https://www.devbcn.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-default.jpg`;

export const METADATA_CONFIG: Record<
  string,
  Omit<PageMetadataProps, "title"> & { title: string }
> = {
  // Home pages by year
  home2023: {
    title: "DevBcn 2023 - Barcelona Developer Conference",
    description:
      "DevBcn 2023 brought together developers from around the world in Barcelona for talks, workshops, and networking.",
    canonicalUrl: `${BASE_URL}/2023`,
    ogImage: `${BASE_URL}/images/og-2023.jpg`,
    ogType: "event",
    keywords: [
      "developer conference",
      "barcelona",
      "2023",
      "tech event",
      "software development",
    ],
  },
  home2024: {
    title: "DevBcn 2024 - Barcelona Developer Conference",
    description:
      "Join us for DevBcn 2024, Barcelona's premier developer conference featuring world-class speakers, workshops, and networking opportunities.",
    canonicalUrl: `${BASE_URL}/2024`,
    ogImage: `${BASE_URL}/images/og-2024.jpg`,
    ogType: "event",
    keywords: [
      "developer conference",
      "barcelona",
      "2024",
      "tech event",
      "software development",
    ],
  },
  home2025: {
    title: "DevBcn 2025 - Barcelona Developer Conference",
    description:
      "Experience DevBcn 2025, Barcelona's leading developer conference with cutting-edge talks, hands-on workshops, and unparalleled networking.",
    canonicalUrl: `${BASE_URL}/2025`,
    ogImage: `${BASE_URL}/images/og-2025.jpg`,
    ogType: "event",
    keywords: [
      "developer conference",
      "barcelona",
      "2025",
      "tech event",
      "software development",
    ],
  },
  home2026: {
    title: "DevBcn 2026 - Barcelona Developer Conference",
    description:
      "Save the date for DevBcn 2026! Barcelona's most anticipated developer conference returns with exciting content and opportunities.",
    canonicalUrl: `${BASE_URL}/2026`,
    ogImage: `${BASE_URL}/images/og-2026.jpg`,
    ogType: "event",
    keywords: [
      "developer conference",
      "barcelona",
      "2026",
      "tech event",
      "software development",
    ],
  },

  // Speakers pages
  speakers: {
    title: "Speakers",
    description:
      "Meet our world-class speakers at DevBcn. Industry experts sharing their knowledge on the latest technologies and best practices.",
    canonicalUrl: `${BASE_URL}/speakers`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: [
      "speakers",
      "tech talks",
      "industry experts",
      "developer conference",
    ],
  },

  // Talks pages
  talks: {
    title: "Talks & Sessions",
    description:
      "Explore the full schedule of talks and sessions at DevBcn. From keynotes to technical deep-dives, find sessions that match your interests.",
    canonicalUrl: `${BASE_URL}/talks`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: ["talks", "sessions", "schedule", "conference agenda"],
  },

  // Schedule
  schedule: {
    title: "Schedule",
    description:
      "View the complete DevBcn conference schedule. Plan your day with our interactive schedule featuring all talks, workshops, and events.",
    canonicalUrl: `${BASE_URL}/schedule`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: ["schedule", "agenda", "timetable", "conference program"],
  },

  // Workshops
  workshops: {
    title: "Workshops",
    description:
      "Join our hands-on workshops at DevBcn. Learn new skills and technologies through practical, instructor-led sessions.",
    canonicalUrl: `${BASE_URL}/workshops`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: ["workshops", "hands-on", "training", "learning"],
  },

  // Sponsors
  sponsorship: {
    title: "Sponsorship",
    description:
      "Become a DevBcn sponsor and connect with Barcelona's vibrant developer community. Explore our sponsorship packages and benefits.",
    canonicalUrl: `${BASE_URL}/sponsorship`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: [
      "sponsorship",
      "partners",
      "sponsor packages",
      "business opportunities",
    ],
  },

  // About
  about: {
    title: "About DevBcn",
    description:
      "Learn about DevBcn, Barcelona's premier developer conference. Discover our mission, history, and what makes us unique.",
    canonicalUrl: `${BASE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: ["about", "conference info", "mission", "history"],
  },

  // Code of Conduct
  codeOfConduct: {
    title: "Code of Conduct",
    description:
      "DevBcn is committed to providing a welcoming and inclusive environment. Read our code of conduct for all attendees, speakers, and sponsors.",
    canonicalUrl: `${BASE_URL}/code-of-conduct`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: ["code of conduct", "community guidelines", "inclusivity"],
  },

  // Travel & Venue
  travel: {
    title: "Travel & Venue",
    description:
      "Plan your trip to DevBcn. Find information about the venue, accommodation, transportation, and things to do in Barcelona.",
    canonicalUrl: `${BASE_URL}/travel`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: ["travel", "venue", "accommodation", "barcelona", "directions"],
  },

  // Job Offers
  jobOffers: {
    title: "Job Offers",
    description:
      "Explore exciting job opportunities from our sponsors and partners. Find your next career move at DevBcn.",
    canonicalUrl: `${BASE_URL}/job-offers`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: ["jobs", "careers", "opportunities", "hiring", "recruitment"],
  },

  // Diversity
  diversity: {
    title: "Diversity & Inclusion",
    description:
      "DevBcn is committed to diversity and inclusion. Learn about our initiatives and how we're building a more inclusive tech community.",
    canonicalUrl: `${BASE_URL}/diversity`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: ["diversity", "inclusion", "community", "equality"],
  },

  // CFP (Call for Proposals)
  cfp: {
    title: "Call for Proposals",
    description:
      "Share your knowledge at DevBcn! Submit your talk proposal and join our lineup of world-class speakers.",
    canonicalUrl: `${BASE_URL}/cfp`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: [
      "call for proposals",
      "cfp",
      "submit talk",
      "speaker application",
    ],
  },
};

/**
 * Helper function to get metadata for a specific page
 */
export const getPageMetadata = (
  pageKey: keyof typeof METADATA_CONFIG,
): PageMetadataProps => {
  return METADATA_CONFIG[pageKey];
};
