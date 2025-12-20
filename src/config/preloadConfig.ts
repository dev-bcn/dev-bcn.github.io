import type { ResourcePreloadConfig } from "@components/common/ResourcePreloader";

/**
 * Default preload configuration for the DevBcn website.
 * Includes common resources that should be preloaded on every page.
 */
export const DEFAULT_PRELOAD_CONFIG: ResourcePreloadConfig = {
  // DNS Prefetch for external APIs
  dnsPrefetch: [
    "https://sessionize.com",
    "https://www.google-analytics.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ],

  // Preconnect to critical external origins
  preconnect: [
    "https://sessionize.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ],

  // Preload critical fonts
  preload: [
    {
      href: "/fonts/DejaVu Sans Bold.ttf",
      as: "font",
      type: "font/ttf",
      crossOrigin: "anonymous",
    },
    {
      href: "/fonts/DejaVu Sans Condensed Bold.ttf",
      as: "font",
      type: "font/ttf",
      crossOrigin: "anonymous",
    },
    {
      href: "/fonts/DejaVu Sans ExtraLight.ttf",
      as: "font",
      type: "font/ttf",
      crossOrigin: "anonymous",
    },
    {
      href: "/fonts/Square 721 Regular.otf",
      as: "font",
      type: "font/otf",
      crossOrigin: "anonymous",
    },
  ],
};
