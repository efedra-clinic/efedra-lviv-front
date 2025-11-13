'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import Container from '../container/Container';
import { fadeInAnimation } from '@/utils/animationVariants';
import MainButton from '../buttons/MainButton';
import CallBackModal from '../modals/CallBackModal';

interface VerticalTitleHeroProps {
  title: string;
  image: string;
  imageDesktop: string;
}

export default function VerticalTitleHero({
  title,
  image,
  imageDesktop,
}: VerticalTitleHeroProps) {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <section className="pt-[9.3px] pb-11 lg:pt-[115px] lg:pb-[35px]">
      <Container className="flex gap-[10px] md:gap-[16px] lg:gap-[23px] w-full items-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ scale: 0.95, x: 50, duration: 1.2 })}
          className="max-h-[195px] lg:max-h-[380px] text-[16px] md:text-[28px] lg:text-[32px] leading-[115%] lg:leading-[135%] uppercase self-end [writing-mode:sideways-lr]"
        >
          {title}
        </motion.h1>

        <div className="relative w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, x: 50, duration: 1.2 })}
            className="relative w-full h-[195px] md:h-[320px] lg:h-[380px] xl:h-[472px] rounded-[20px] overflow-hidden"
          >
            <Image
              src={image}
              alt="background"
              fill
              priority
              fetchPriority="high"
              className="object-cover lg:hidden"
              unoptimized
            />
            <Image
              src={imageDesktop}
              alt="background"
              fill
              priority
              fetchPriority="high"
              className="object-cover hidden lg:block"
              unoptimized
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 10, delay: 0.6 })}
          >
            <MainButton
              onClick={() => setIsModalShown(true)}
              className="absolute md:bottom-[20px] md:right-[20px] -bottom-[20px] -right-[12px] px-[20px] max-w-[207px] h-[40px] text-[16px] leading-[100%] tracking-[-0.05em] text-black font-medium text-center bg-white border border-black text-left justify-start md:border-none"
              iconClassName="text-white"
              spanClassName="w-[32px] h-[32px] flex items-center justify-center bg-green rounded-full"
              phoneIcon={true}
            >
              Запис на прийом
            </MainButton>
          </motion.div>
        </div>
      </Container>
      <CallBackModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </section>
  );
}
