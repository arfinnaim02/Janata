import type { Metadata } from 'next';

interface CreateMetadataOptions {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
}

/**
 * Helper to create metadata objects for pages.
 */
export function createMetadata({
  title,
  description,
  url = 'https://www.janataengineering.com',
  image = '/images/hero-home.jpg',
  keywords = [],
}: CreateMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    other: {
      'og:locale': 'en_US',
    },
  };
}