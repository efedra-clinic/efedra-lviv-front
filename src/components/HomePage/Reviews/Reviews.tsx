import Container from '@/components/shared/container/Container';
import { ReviewsBlock } from './ReviewsBlock/ReviewsBlock';
import Image from 'next/image';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';
import LogoLeavesIcon from '@/components/shared/icons/LogoLeavesIcon';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import { allReviewsQuery } from '@/lib/queries';

export const Reviews = async () => {
  const reviews = await fetchSanityDataServer(allReviewsQuery);
  return (
    <section
      id="reviews"
      className="pt-[80px] pb-[50px] lg:pt-[50px] lg:pb-[100px]"
    >
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="pt-[25px] pb-[12px] px-[15px] lg:p-[50px] lg:pl-[40px] lg:flex lg:justify-between relative rounded-[15px] overflow-hidden lg:rounded-[25px]"
        >
          <Image
            src="/images/homePage/reviews/bgMob.webp"
            alt="reviews"
            width={100}
            height={100}
            className="object-cover w-full h-full absolute inset-0 z-[-10]"
          />
          <Image
            src="/images/homePage/reviews/bgDesk.webp"
            alt="reviews"
            width={1180}
            height={613}
            className="object-cover w-full h-full absolute inset-0 z-[-10]"
          />
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="text-[28px] lg:text-[50px] leading-[100%] tracking-[-0.05em] text-white font-bold mb-[50px] lg:mb-0 uppercase"
          >
            Відгуки наших клієнтів
          </motion.h2>
          <ReviewsBlock reviews={reviews} />
          <div className="hidden lg:block absolute left-[-108px] bottom-[-124px] z-[10] pointer-events-none rotate-90">
            <LogoLeavesIcon className="w-[497px] h-[497px]" stroke="white" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
