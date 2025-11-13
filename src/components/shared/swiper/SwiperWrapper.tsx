'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ReactNode, useRef, useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import ArrowIconFilled from '../icons/ArrowIconFilled';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SwiperWrapperProps {
  children: ReactNode;
  breakpoints: SwiperOptions['breakpoints'];
  swiperClassName?: string;
  wrapperClassName?: string;
  buttonsWrapperClassName?: string;
  loop?: boolean;
  isPagination?: boolean;
  autoplay?: SwiperOptions['autoplay'];
  size?: number;
}

export default function SwiperWrapper({
  children,
  breakpoints,
  swiperClassName = '',
  wrapperClassName = '',
  buttonsWrapperClassName = '',
  loop = false,
  isPagination = false,
  autoplay = false,
  size = 30,
}: SwiperWrapperProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Прив'язуємо кнопки навігації після рендеру
  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      // початковий стан кнопок (у loop режимі завжди активні)
      if (!loop) {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      } else {
        setIsBeginning(false);
        setIsEnd(false);
      }

      // оновлюємо стан кнопок при зміні слайду (інакше у loop не блокуємо)
      swiperInstance.on('slideChange', () => {
        if (!loop) {
          setIsBeginning(swiperInstance.isBeginning);
          setIsEnd(swiperInstance.isEnd);
        }
      });
    }
  }, [swiperInstance]);

  // ефективні значення дизейблу для кнопок
  const disablePrev = loop ? false : isBeginning;
  const disableNext = loop ? false : isEnd;

  return (
    <div className={wrapperClassName}>
      <Swiper
        onSwiper={setSwiperInstance} // отримуємо екземпляр після рендеру
        pagination={isPagination}
        breakpoints={breakpoints}
        loop={loop}
        speed={1000}
        autoplay={autoplay}
        modules={[Navigation, Pagination, Autoplay]}
        className={swiperClassName}
      >
        {children}
      </Swiper>

      <div
        className={`flex items-center lg:items-end justify-center gap-2.5 lg:gap-5 ${buttonsWrapperClassName}`}
      >
        <button
          ref={prevRef}
          disabled={disablePrev}
          className={clsx(
            `enabled:cursor-pointer w-[30px] h-[30px] lg:w-[54px] lg:h-[54px] rounded-[10px] flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-green disabled:bg-white disabled:border disabled:border-green disabled:text-green`
          )}
        >
          <ArrowIconFilled
            className={clsx(
              'w-[10px] h-[10px] lg:w-[22px] lg:h-[22px] rotate-180',
              disablePrev ? 'text-green' : 'text-white'
            )}
          />
        </button>

        <button
          ref={nextRef}
          disabled={disableNext}
          className={clsx(
            `enabled:cursor-pointer w-[30px] h-[30px] lg:w-[54px] lg:h-[54px] rounded-[10px] flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-green disabled:bg-white disabled:border disabled:border-green disabled:text-green`
          )}
        >
          <ArrowIconFilled
            className={clsx(
              'w-[10px] h-[10px] lg:w-[22px] lg:h-[22px]',
              disableNext ? 'text-green' : 'text-white'
            )}
          />
        </button>
      </div>
    </div>
  );
}
