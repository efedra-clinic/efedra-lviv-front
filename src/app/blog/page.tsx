import BlogList from '@/components/blogPage/blogList/BlogList';
import Hero from '@/components/blogPage/hero/Hero';
import Loader from '@/components/shared/loader/Loader';
import MarqueeLine from '@/components/shared/marquee/MarqueeLine';
import { Suspense } from 'react';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import { allPostsQuery } from '@/lib/queries';
import { getDefaultMetadata } from '@/utils/getDefaultMetadata';
import type { Metadata } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = getDefaultMetadata({
  title: 'Блог | Efedra Clinic - Статті про стоматологію та естетичну медицину',
  description:
    'Корисні статті та новини про стоматологію та естетичну медицину від професіоналів Efedra Clinic',
  url: `${SITE_URL}/blog`,
});

export default async function BlogPage() {
  const posts = await fetchSanityDataServer(allPostsQuery);

  return (
    <>
      <Hero />
      <MarqueeLine variant="light-green" />
      <Suspense fallback={<Loader />}>
        <BlogList posts={posts} />
      </Suspense>
    </>
  );
}
