import { serverClient } from '@/lib/sanityClient';

export const fetchSanityDataServer = async (
  query: string,
  params: Record<string, unknown> = {}
) => {
  try {
    // Use serverClient without CDN to get fresh data from Sanity
    // The page-level revalidate export handles Next.js caching
    return await serverClient.fetch(query, params);
  } catch (error) {
    // Intentionally swallow errors to avoid noisy logs in production
  }
};
