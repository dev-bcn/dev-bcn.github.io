import type { FC } from "react";

export interface PageMetadataProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "event";
  ogLocale?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterDomain?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterImageAlt?: string;
  twitterLabel1?: string;
  twitterData1?: string;
  twitterLabel2?: string;
  twitterData2?: string;
  keywords?: string[];
}

/**
 * PageMetadata component using React 19's native metadata support.
 * Renders document metadata tags directly in the component tree.
 */
export const PageMetadata: FC<PageMetadataProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://www.devbcn.com/images/devbcn26.png",
  ogType = "website",
  ogLocale = "en_GB",
  twitterCard = "summary_large_image",
  twitterDomain = "https://www.devbcn.com/",
  twitterSite = "@dev_bcn",
  twitterCreator = "@dev_bcn",
  twitterImageAlt = "DevBcn - Barcelona Developers Conference in Spain",
  twitterLabel1,
  twitterData1,
  twitterLabel2,
  twitterData2,
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
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:domain" content={twitterDomain} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:image:alt" content={twitterImageAlt} />

      {/* Slack / App specific */}
      {twitterLabel1 && <meta name="twitter:label1" content={twitterLabel1} />}
      {twitterData1 && <meta name="twitter:data1" content={twitterData1} />}
      {twitterLabel2 && <meta name="twitter:label2" content={twitterLabel2} />}
      {twitterData2 && <meta name="twitter:data2" content={twitterData2} />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </>
  );
};
