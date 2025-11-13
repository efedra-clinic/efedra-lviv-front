'use client';

import { SwiperSlide } from 'swiper/react';
import SwiperWrapper from '@/components/shared/swiper/SwiperWrapper';
import BlogCard from '@/components/blogPage/blogList/BlogCard';
import { Post } from '@/types/post';

interface RecommendedPostsSliderProps {
  posts: Post[];
}

export default function RecommendedPostsSlider({
  posts,
}: RecommendedPostsSliderProps) {
  return (
    <SwiperWrapper
      swiperClassName="recommended-posts"
      buttonsWrapperClassName="mt-5 lg:mt-[34px]"
      breakpoints={{
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },
        640: { spaceBetween: 16, slidesPerView: 2 },
        1024: { spaceBetween: 20, slidesPerView: 3 },
      }}
    >
      {posts.map((post, idx) => (
        <SwiperSlide key={idx}>
          <BlogCard post={post} />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
}
