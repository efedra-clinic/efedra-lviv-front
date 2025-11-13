import Container from '@/components/shared/container/Container';
import { Post } from '@/types/post';
import Image from 'next/image';
import FormattedDate from '@/components/shared/formattedDate/FormattedDate';
import DirectionTag from '@/components/shared/directionTag/DirectionTag';
import EstimatedReadingTime from '@/components/shared/estReadingTime/estimatedReadingTime';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/utils/animationVariants';
import { urlFor } from '@/utils/getUrlForSanityImage';

interface HeroProps {
  post: Post;
}

export default function Hero({ post }: HeroProps) {
  if (!post) return null;

  const { image, title, description, direction, createdAt } = post;

  return (
    <section className="pt-[9px] pb-10 lg:pt-[135px] lg:pb-16">
      <Container className="flex flex-col sm:flex-row gap-[22px] lg:gap-[46px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ scale: 0.95, x: -50, duration: 1.2 })}
          className="relative sm:w-[calc(50%-11px)] lg:w-[calc(50%-23px)] h-[195px] sm:h-auto sm:min-h-[240px] lg:min-h-[280px] xl:min-h-[350px] rounded-[20px]"
        >
          <Image
            src={urlFor(image).fit('crop').url()}
            priority
            fetchPriority="high"
            fill
            alt={title}
            className="object-cover rounded-[20px]"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
            className="sm:hidden absolute -left-0.5 bottom-[-13px] flex items-center justify-center py-1 px-3 min-w-[70px] h-[26px] bg-green-light-3 rounded-full text-white"
          >
            <EstimatedReadingTime
              post={post}
              className="gap-2 text-[12px] font-medium leading-[120%]"
            />
          </motion.div>
        </motion.div>
        <div className="sm:w-[calc(50%-11px)] lg:w-[calc(50%-23px)]">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 20 })}
            className="mb-[13px] lg:mb-[23px] text-[20px] lg:text-[36px] font-normal leading-[133%] uppercase"
          >
            {title}
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 20, delay: 0.3 })}
            className="flex items-center gap-[19px] mb-5"
          >
            <FormattedDate
              createdAt={createdAt}
              className="text-[12px] leading-none"
            />
            <DirectionTag direction={direction} className="text-[12px]" />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 20, delay: 0.6 })}
            className="sm:mb-[19px] lg:mb-8"
          >
            {description}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, delay: 0.9 })}
            className="hidden sm:flex items-center justify-center mb-6 py-1 px-3 min-w-[70px] w-fit h-[26px] bg-beige rounded-full text-white"
          >
            <EstimatedReadingTime
              post={post}
              className="gap-2 text-[12px] font-medium leading-[120%]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
