'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { ReactNode, useRef, useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import ArrowIconFilled from '../icons/ArrowIconFilled';
import clsx from 'clsx';

interface SwiperCardsProps {
  children: ReactNode;
  breakpoints: SwiperOptions['breakpoints'];
  swiperClassName?: string;
  wrapperClassName?: string;
  buttonsWrapperClassName?: string;
  loop?: boolean;
  isPagination?: boolean;
  autoplay?: SwiperOptions['autoplay'];
  size?: number;
  cardsEffect?: boolean;
}

export default function SwiperCards({
  children,
  breakpoints,
  swiperClassName = '',
  wrapperClassName = '',
  buttonsWrapperClassName = '',
  loop = false,
  isPagination = false,
  autoplay = false,
  size = 40,
  cardsEffect = false,
}: SwiperCardsProps) {
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

      // початковий стан кнопок
      if (cardsEffect && !loop) {
        const atStart = swiperInstance.activeIndex === 0;
        const atEnd =
          swiperInstance.activeIndex ===
          (swiperInstance.slides?.length ?? 1) - 1;
        setIsBeginning(atStart);
        setIsEnd(atEnd);
      } else {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      }

      // оновлюємо стан кнопок при зміні слайду
      swiperInstance.on('slideChange', () => {
        if (cardsEffect && !loop) {
          const atStart = swiperInstance.activeIndex === 0;
          const atEnd =
            swiperInstance.activeIndex ===
            (swiperInstance.slides?.length ?? 1) - 1;
          setIsBeginning(atStart);
          setIsEnd(atEnd);
        } else {
          setIsBeginning(swiperInstance.isBeginning);
          setIsEnd(swiperInstance.isEnd);
        }
      });
    }
  }, [swiperInstance, cardsEffect, loop]);

  return (
    <div className={wrapperClassName}>
      <Swiper
        onSwiper={setSwiperInstance} // отримуємо екземпляр після рендеру
        pagination={isPagination}
        breakpoints={cardsEffect ? undefined : breakpoints}
        slidesPerView={cardsEffect ? 1 : undefined}
        slidesPerGroup={cardsEffect ? 1 : undefined}
        spaceBetween={cardsEffect ? 0 : undefined}
        centeredSlides={cardsEffect ? true : undefined}
        centeredSlidesBounds={cardsEffect ? true : undefined}
        loop={loop}
        rewind={cardsEffect ? false : !loop}
        speed={1000}
        autoplay={autoplay}
        watchSlidesProgress={true}
        grabCursor={cardsEffect ? true : undefined}
        observer={true}
        observeParents={true}
        onBeforeInit={swiper => {
          // Ensure custom navigation elements are wired before init
          if (!prevRef.current || !nextRef.current) return;
          if (typeof swiper.params.navigation === 'boolean') {
            swiper.params.navigation = { enabled: true } as any;
          }
          const navParams = swiper.params.navigation as any;
          navParams.prevEl = prevRef.current;
          navParams.nextEl = nextRef.current;
        }}
        onInit={swiper => {
          // Ensure navigation picks up refs if they were set late
          if (prevRef.current && nextRef.current && swiper.navigation) {
            swiper.navigation.update();
          }
          // Force layout calculations for effects
          swiper.update();
        }}
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          ...(cardsEffect ? [EffectCards] : []),
        ]}
        effect={cardsEffect ? 'cards' : undefined}
        cardsEffect={
          cardsEffect
            ? ({
                perSlideOffset: 8,
                perSlideRotate: 2,
                slideShadows: false,
              } as any)
            : undefined
        }
        className={`${swiperClassName} ${cardsEffect ? 'overflow-visible' : ''}`}
      >
        {children}
      </Swiper>

      <div
        className={`flex items-center lg:items-end justify-center gap-2.5 lg:gap-5 ${buttonsWrapperClassName}`}
      >
        <button
          ref={prevRef}
          disabled={isBeginning}
          className={clsx(
            `enabled:cursor-pointer w-[${size}px] h-[${size}px] lg:w-[54px] lg:h-[54px] rounded-[10px] lg:rounded-[15px] flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-green disabled:bg-white disabled:border disabled:border-green disabled:text-green text-white`
          )}
        >
          <ArrowIconFilled
            className={clsx(
              'w-[16px] h-[16px] lg:w-[22px] lg:h-[22px] rotate-180'
            )}
          />
        </button>

        <button
          ref={nextRef}
          disabled={isEnd}
          className={clsx(
            `enabled:cursor-pointer w-[${size}px] h-[${size}px] lg:w-[54px] lg:h-[54px] rounded-[10px] lg:rounded-[15px] flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-green disabled:bg-white disabled:border disabled:border-green disabled:text-green text-white`
          )}
        >
          <ArrowIconFilled
            className={clsx('w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]')}
          />
        </button>
      </div>
    </div>
  );
}
