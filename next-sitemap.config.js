/** @type {import('next-sitemap').IConfig} */

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8k581woh',
  dataset: 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-05',
  useCdn: true,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000');

export const fetchSanityDataServer = async (query, params = {}) => {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    // swallow errors to avoid noisy logs during sitemap generation
  }
};

export const GET_DYNAMIC_PAGES_SLUGS = `{
  "posts": *[_type == "post"] {
    "slug": slug.current,
    },
  // services kept for future use; excluded from sitemap until routes exist
  "services": *[_type == "service"] {
    "slug": slug.current,
    category,
     }
}`;

async function getDynamicPages() {
  const res = await fetchSanityDataServer(GET_DYNAMIC_PAGES_SLUGS);

  const articles = res?.posts || [];
  const articlesPages = articles.map(article => `/blog/${article.slug}`);

  // Exclude services until corresponding Next.js routes are implemented
  return [...articlesPages];
}

const sitemapConfig = {
  siteUrl: SITE_URL,
  changefreq: 'monthly',
  sitemapSize: 5000,
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/*' },
    ],
  },
  additionalPaths: async config => {
    const staticPages = [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
      },
      {
        loc: '/blog',
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: '/price',
        changefreq: 'monthly',
        priority: 0.9,
      },
    ];

    const staticPaths = await Promise.all(
      staticPages.map(async page => {
        const transformed = await config.transform(config, page.loc);
        return {
          ...transformed,
          changefreq: page.changefreq,
          priority: page.priority,
        };
      })
    );

    const dynamicPages = await getDynamicPages(config);
    const dynamicPaths = await Promise.all(
      dynamicPages.map(page => config.transform(config, page))
    );

    return [...staticPaths, ...dynamicPaths];
  },
};

// Експортуємо конфігурацію
export default sitemapConfig;
