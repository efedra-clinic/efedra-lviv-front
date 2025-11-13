import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8k581woh';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-05';

// Client with CDN for client-side usage (faster, cached)
export const client = createClient({
  projectId,
  dataset: 'production',
  apiVersion,
  useCdn: true,
});

// Server-side client without CDN for fresh data (used in server components)
export const serverClient = createClient({
  projectId,
  dataset: 'production',
  apiVersion,
  useCdn: false, // Disable CDN for server-side to get fresh data
  perspective: 'published',
});
