import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  jsonLd?: any;
}

export function useSEO({
  title,
  description,
  canonical,
  robots = 'index, follow',
  ogType = 'website',
  ogTitle,
  ogDescription,
  ogImage,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to get or create meta tag
    const getOrCreateMeta = (attrName: string, attrValue: string, isProperty = false) => {
      const selector = isProperty 
        ? `meta[property="${attrValue}"]` 
        : `meta[name="${attrValue}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', attrValue);
        } else {
          element.setAttribute('name', attrValue);
        }
        document.head.appendChild(element);
      }
      return element;
    };

    // Helper to get or create link tag
    const getOrCreateLink = (rel: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      return element;
    };

    // 2. Description
    const metaDesc = getOrCreateMeta('name', 'description');
    metaDesc.setAttribute('content', description);

    // 3. Robots
    const metaRobots = getOrCreateMeta('name', 'robots');
    metaRobots.setAttribute('content', robots);

    // 4. Canonical
    const linkCanonical = getOrCreateLink('canonical');
    linkCanonical.setAttribute('href', canonical);

    // 5. Open Graph
    const ogTypeMeta = getOrCreateMeta('property', 'og:type', true);
    ogTypeMeta.setAttribute('content', ogType);

    const ogTitleMeta = getOrCreateMeta('property', 'og:title', true);
    ogTitleMeta.setAttribute('content', ogTitle || title);

    const ogDescMeta = getOrCreateMeta('property', 'og:description', true);
    ogDescMeta.setAttribute('content', ogDescription || description);

    const ogUrlMeta = getOrCreateMeta('property', 'og:url', true);
    ogUrlMeta.setAttribute('content', canonical);

    const ogLocaleMeta = getOrCreateMeta('property', 'og:locale', true);
    ogLocaleMeta.setAttribute('content', 'en_GB');

    if (ogImage) {
      const ogImageMeta = getOrCreateMeta('property', 'og:image', true);
      ogImageMeta.setAttribute('content', ogImage);
    }

    // 6. Twitter Card
    const twitterTitleMeta = getOrCreateMeta('name', 'twitter:title');
    twitterTitleMeta.setAttribute('content', ogTitle || title);

    const twitterDescMeta = getOrCreateMeta('name', 'twitter:description');
    twitterDescMeta.setAttribute('content', ogDescription || description);

    if (ogImage) {
      const twitterImageMeta = getOrCreateMeta('name', 'twitter:image');
      twitterImageMeta.setAttribute('content', ogImage);
    }

    // 7. JSON-LD Schema
    let scriptElement: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.text = JSON.stringify(jsonLd);
      document.head.appendChild(scriptElement);
    }

    // Cleanup on unmount
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [title, description, canonical, robots, ogType, ogTitle, ogDescription, ogImage, jsonLd]);
}

export default function SEO(props: SEOProps) {
  useSEO(props);
  return null;
}
