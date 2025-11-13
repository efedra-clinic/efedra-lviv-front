import { Metadata } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000');

interface MetadataOverrides {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function getDefaultMetadata(overrides?: MetadataOverrides): Metadata {
  const title =
    overrides?.title ||
    'Efedra Clinic - клініка стоматології та естетичної медицини в Одесі';
  const description =
    overrides?.description ||
    'Сучасні методики, професійні лікарі та турбота про вашу красу й здоровʼя';
  const url = overrides?.url || SITE_URL;
  const ogImage = overrides?.image || `${SITE_URL}/opengraph-image.jpg`;
  const imageAlt = overrides?.imageAlt || 'Efedra Clinic';

  const baseMetadata: Metadata = {
    title,
    description,
    openGraph: {
      title:
        overrides?.title ||
        'Клініка стоматології та естетичної медицини Efedra Clinic в Одесі',
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      type: overrides?.type || 'website',
      locale: 'uk_UA',
      siteName: 'Efedra Clinic',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };

  // Add article-specific OpenGraph fields if type is article
  if (overrides?.type === 'article') {
    baseMetadata.openGraph = {
      ...baseMetadata.openGraph,
      type: 'article',
      ...(overrides?.publishedTime && {
        publishedTime: overrides.publishedTime,
      }),
      ...(overrides?.modifiedTime && {
        modifiedTime: overrides.modifiedTime,
      }),
    };
  }

  return baseMetadata;
}
