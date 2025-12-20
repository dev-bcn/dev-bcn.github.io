import type { FC } from "react";

export interface PageMetadataProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "event";
  twitterCard?: "summary" | "summary_large_image";
  keywords?: string[];
}

/**
 * PageMetadata component using React 19's native metadata support.
 * Renders document metadata tags directly in the component tree.
 *
 * @example
 * ```tsx
 * <PageMetadata
 *   title="DevBcn 2025 - Barcelona Developer Conference"
 *   description="Join us for DevBcn 2025..."
 *   canonicalUrl="https://www.devbcn.com/2025"
 *   ogImage="https://www.devbcn.com/images/og-2025.jpg"
 * />
 * ```
 */
export const PageMetadata: FC<PageMetadataProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://www.devbcn.com/images/og-default.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = [],
}) => {
  const fullTitle = title.includes("DevBcn") ? title : `${title} | DevBcn`;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="DevBcn" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </>
  );
};
