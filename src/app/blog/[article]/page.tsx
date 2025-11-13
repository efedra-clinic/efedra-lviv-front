import type { Metadata } from 'next';
import Hero from '@/components/articlePage/hero/Hero';
import { Suspense } from 'react';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import { postsAndPostBySlugQuery, postBySlugQuery } from '@/lib/queries';
import Loader from '@/components/shared/loader/Loader';
import MarqueeLine from '@/components/shared/marquee/MarqueeLine';
import Content from '@/components/articlePage/content/Content';
import RecommendedPosts from '@/components/articlePage/hero/recommendedPosts/RecommendedPosts';
import { Post } from '@/types/post';
import { getDefaultMetadata } from '@/utils/getDefaultMetadata';
import { urlFor } from '@/utils/getUrlForSanityImage';

interface ArticlePageProps {
  params: { article: string };
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article } = params;

  const currentPost = await fetchSanityDataServer(postBySlugQuery, {
    slug: article,
  });

  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

  if (!currentPost) {
    return getDefaultMetadata();
  }

  const articleImage = currentPost?.image
    ? urlFor(currentPost.image).width(1200).height(630).fit('crop').url()
    : undefined;

  const articleUrl = `${SITE_URL}/blog/${article}`;
  const articleTitle = currentPost.title
    ? `${currentPost.title} | Efedra Clinic`
    : undefined;

  return getDefaultMetadata({
    title: articleTitle,
    description: currentPost.description,
    url: articleUrl,
    image: articleImage,
    imageAlt: currentPost.title || 'Efedra Clinic',
    type: 'article',
    publishedTime: currentPost.createdAt,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article } = params;

  const res = await fetchSanityDataServer(postsAndPostBySlugQuery, {
    slug: article,
  });

  const post = res?.postBySlug;
  const allPosts = res?.allPosts;

  const recommendedPosts = allPosts
    ?.filter((post: Post) => post?.slug !== article)
    .slice(0, 12);

  return (
    <>
      <Suspense fallback={<Loader className="h-[440px] lg:h-[700px]" />}>
        <Hero post={post} />
        <MarqueeLine variant="light-green" />
        <Content post={post} />
        <RecommendedPosts posts={recommendedPosts} />
      </Suspense>
    </>
  );
}
