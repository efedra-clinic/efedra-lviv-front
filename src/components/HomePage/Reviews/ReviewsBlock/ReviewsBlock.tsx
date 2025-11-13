'use client';
import { ReviewsCard } from './ReviewsCard';
import SwiperWrapper from '@/components/shared/swiper/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import { Review } from '@/types/review';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';

interface ReviewsBlockProps {
  reviews: Review[];
}

export const ReviewsBlock = ({ reviews }: ReviewsBlockProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInAnimation({ y: 20, delay: 0.3 })}
      className="lg:w-[539px] z-20"
    >
      <SwiperWrapper
        swiperClassName="reviews "
        wrapperClassName="bg-white rounded-[10px] lg:rounded-[25px] p-[15px] lg:p-[40px] pt-[15px]"
        buttonsWrapperClassName="mt-5 justify-end"
        loop
        breakpoints={{
          0: {
            spaceBetween: 16,
            slidesPerView: 1,
          },
          640: { spaceBetween: 16, slidesPerView: 2 },
          1024: { spaceBetween: 20, slidesPerView: 'auto' },
        }}
      >
        {reviews.map((review: Review, idx: number) => {
          const photoUrl = review.photo?.asset?.url;
          return (
            <SwiperSlide key={idx}>
              <ReviewsCard
                name={review.name}
                photoUrl={photoUrl}
                age={review.age}
                text={review.text}
              />
            </SwiperSlide>
          );
        })}
      </SwiperWrapper>
    </motion.div>
  );
};
