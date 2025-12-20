# PageMetadata Component - Usage Guide

## Overview

The `PageMetadata` component leverages React 19's native metadata support to render SEO tags directly in your components without needing external libraries like `react-helmet`.

## Quick Start

### Basic Usage

```tsx
import { PageMetadata } from "@components/common/PageMetadata";

export const MyPage = () => {
  return (
    <>
      <PageMetadata
        title="My Page Title"
        description="A brief description of my page"
      />

      {/* Your page content */}
    </>
  );
};
```

### Using Centralized Configuration

For consistency across the site, use the centralized metadata configuration:

```tsx
import { PageMetadata } from "@components/common/PageMetadata";
import { getPageMetadata } from "@config/metadata";

export const HomeWrapper2025 = () => {
  return (
    <>
      <PageMetadata {...getPageMetadata("home2025")} />

      {/* Your page content */}
    </>
  );
};
```

## Advanced Usage

### Custom Metadata

```tsx
<PageMetadata
  title="DevBcn 2025 - Speakers"
  description="Meet our amazing speakers for DevBcn 2025"
  canonicalUrl="https://www.devbcn.com/2025/speakers"
  ogImage="https://www.devbcn.com/images/speakers-2025.jpg"
  ogType="website"
  twitterCard="summary_large_image"
  keywords={["speakers", "tech conference", "barcelona", "2025"]}
/>
```

### Dynamic Metadata

```tsx
export const SpeakerDetailPage = ({ speaker }) => {
  return (
    <>
      <PageMetadata
        title={`${speaker.name} - DevBcn Speaker`}
        description={speaker.bio}
        canonicalUrl={`https://www.devbcn.com/speakers/${speaker.id}`}
        ogImage={speaker.profileImage}
        ogType="article"
      />

      {/* Speaker content */}
    </>
  );
};
```

## Props Reference

| Prop           | Type                                 | Required | Default                 | Description                |
| -------------- | ------------------------------------ | -------- | ----------------------- | -------------------------- | ----------------------- |
| `title`        | `string`                             | ✅       | -                       | Page title (will append "  | DevBcn" if not present) |
| `description`  | `string`                             | ✅       | -                       | Page description for SEO   |
| `canonicalUrl` | `string`                             | ❌       | -                       | Canonical URL for the page |
| `ogImage`      | `string`                             | ❌       | Default OG image        | Open Graph image URL       |
| `ogType`       | `"website" \| "article" \| "event"`  | ❌       | `"website"`             | Open Graph type            |
| `twitterCard`  | `"summary" \| "summary_large_image"` | ❌       | `"summary_large_image"` | Twitter card type          |
| `keywords`     | `string[]`                           | ❌       | `[]`                    | SEO keywords               |

## Adding New Pages to Configuration

To add a new page to the centralized configuration:

1. Open `src/config/metadata.ts`
2. Add your page to the `METADATA_CONFIG` object:

```typescript
export const METADATA_CONFIG = {
  // ... existing pages

  myNewPage: {
    title: "My New Page - DevBcn",
    description: "Description of my new page",
    canonicalUrl: `${BASE_URL}/my-new-page`,
    ogImage: `${BASE_URL}/images/my-new-page.jpg`,
    keywords: ["keyword1", "keyword2"],
  },
};
```

3. Use it in your component:

```tsx
<PageMetadata {...getPageMetadata("myNewPage")} />
```

## Migration from react-helmet

If you're migrating from `react-helmet`, here's the comparison:

### Before (react-helmet)

```tsx
import { Helmet } from "react-helmet";

<Helmet>
  <title>My Page | DevBcn</title>
  <meta name="description" content="My description" />
  <link rel="canonical" href="https://www.devbcn.com/my-page" />
</Helmet>;
```

### After (React 19 Native)

```tsx
import { PageMetadata } from "@components/common/PageMetadata";

<PageMetadata
  title="My Page"
  description="My description"
  canonicalUrl="https://www.devbcn.com/my-page"
/>;
```

## Benefits

✅ **No External Dependencies** - Uses React 19's native features  
✅ **Type-Safe** - Full TypeScript support  
✅ **Centralized** - All metadata in one configuration file  
✅ **Consistent** - Automatic title formatting  
✅ **SEO-Friendly** - Includes all essential meta tags  
✅ **Social Media Ready** - Open Graph and Twitter cards included

## Testing

The component includes comprehensive tests. To run them:

```bash
npm test -- PageMetadata
```

## Best Practices

1. **Always provide title and description** - These are essential for SEO
2. **Use the centralized config** - Keeps metadata consistent
3. **Include canonical URLs** - Helps with duplicate content issues
4. **Provide OG images** - Improves social media sharing
5. **Use descriptive keywords** - But don't keyword stuff
6. **Keep descriptions under 160 characters** - For optimal display in search results
7. **Make titles unique** - Each page should have a distinct title

## Examples by Page Type

### Home Page

```tsx
<PageMetadata {...getPageMetadata("home2025")} />
```

### Content Page (Speakers, Talks, etc.)

```tsx
<PageMetadata {...getPageMetadata("speakers")} />
```

### Dynamic Detail Page

```tsx
<PageMetadata
  title={`${item.title} - DevBcn`}
  description={item.description}
  canonicalUrl={`https://www.devbcn.com/${item.slug}`}
  ogImage={item.image}
/>
```

## Troubleshooting

**Q: The title doesn't appear in the browser tab**  
A: Make sure the `PageMetadata` component is rendered. Check React DevTools to verify it's in the component tree.

**Q: Meta tags aren't showing in view source**  
A: React 19's metadata is rendered client-side. For SSR, you'll need a framework like Next.js.

**Q: Can I use multiple PageMetadata components?**  
A: Only use one per page. The last one rendered will take precedence.

**Q: How do I test if metadata is working?**  
A: Use browser DevTools to inspect the `<head>` element, or use tools like [metatags.io](https://metatags.io/) to preview social cards.
