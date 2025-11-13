'use client';
import { useRef } from 'react';
import Container from '@/components/shared/container/Container';
import { Post } from '@/types/post';
import BlogCard from './BlogCard';
import Pagination from '@/components/shared/pagination/Pagination';
import { useBlogArticlesPerPage } from '@/hooks/useBlogArticlesPerPage';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/utils/animationVariants';

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (!posts || !posts?.length) return null;

  const itemsPerPage = useBlogArticlesPerPage();

  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="pt-[46px] lg:pt-[71px] pb-[50px] lg:pb-[100px] scroll-mt-21 "
    >
      <Container>
        <Pagination
          items={posts}
          useItemsPerPage={() => itemsPerPage}
          scrollTargetRef={sectionRef}
          renderItems={currentItems => (
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-[22px] lg:gap-y-7">
              {currentItems.map(post => (
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeInAnimation({ y: 20 })}
                  key={`${post?.slug}`}
                  className="sm:w-[calc(50%-11px)] lg:w-[calc(33.33%-14.67px)] h-auto"
                >
                  <BlogCard post={post} />
                </motion.li>
              ))}
            </ul>
          )}
        />
      </Container>
    </section>
  );
}
