'use client';
import { PersonelCard } from './PersonelCard';
import { Doctor } from '@/types/doctor';

import SwiperCards from '@/components/shared/swiper/SwiperCards';
import { SwiperSlide } from 'swiper/react';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';

export const PersonelBlock = ({ doctors }: { doctors: Doctor[] }) => {
  // TODO: fix cards effect
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInAnimation({ y: 20, delay: 0.3 })}
      className="lg:w-[500px] lg:h-[553px]"
    >
      <SwiperCards
        swiperClassName="personel max-w-[256px] lg:max-w-[380px] mx-auto"
        wrapperClassName="lg:flex lg:flex-col lg:gap-[25px] lg:items-center"
        buttonsWrapperClassName="mt-[25px] lg:mt-0"
        breakpoints={{
          0: {
            spaceBetween: 16,
            slidesPerView: 1,
          },
        }}
        size={40}
        loop={false}
        cardsEffect={true}
      >
        {doctors.map((doctor: Doctor, idx: number) => (
          <SwiperSlide key={idx} className="w-full rounded-[10px]">
            <PersonelCard
              name={doctor.name}
              position={doctor.position}
              photoUrl={doctor.photo.asset.url}
            />
          </SwiperSlide>
        ))}
      </SwiperCards>
    </motion.div>
  );
};
