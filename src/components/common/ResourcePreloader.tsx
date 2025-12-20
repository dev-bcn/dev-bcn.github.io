import { useEffect } from "react";

/**
 * Resource preloading configuration using React 19's native APIs.
 * This component preloads critical resources to improve page load performance.
 */

export interface ResourcePreloadConfig {
  /** DNS prefetching for external domains */
  dnsPrefetch?: string[];
  /** Preconnect to external origins */
  preconnect?: string[];
  /** Preload critical resources */
  preload?: Array<{
    href: string;
    as: "font" | "image" | "script" | "style" | "fetch";
    type?: string;
    crossOrigin?: "anonymous" | "use-credentials";
  }>;
}

/**
 * ResourcePreloader component that uses React 19's native resource preloading APIs.
 *
 * @example
 * ```tsx
 * <ResourcePreloader
 *   dnsPrefetch={["https://sessionize.com"]}
 *   preconnect={["https://fonts.googleapis.com"]}
 *   preload={[
 *     { href: "/fonts/inter.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" }
 *   ]}
 * />
 * ```
 */
export const ResourcePreloader: React.FC<ResourcePreloadConfig> = ({
  dnsPrefetch = [],
  preconnect = [],
  preload = [],
}) => {
  useEffect(() => {
    // DNS Prefetch - resolve DNS early for external domains
    dnsPrefetch.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = href;
      document.head.appendChild(link);
    });

    // Preconnect - establish early connections to external origins
    preconnect.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      link.setAttribute("crossorigin", "anonymous");
      document.head.appendChild(link);
    });

    // Preload - load critical resources early
    preload.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = href;
      link.setAttribute("as", as);
      if (type) link.setAttribute("type", type);
      if (crossOrigin) link.setAttribute("crossorigin", crossOrigin);
      document.head.appendChild(link);
    });
  }, [dnsPrefetch, preconnect, preload]);

  return null; // This component doesn't render anything
};
