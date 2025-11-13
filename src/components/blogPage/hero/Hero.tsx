import Container from '@/components/shared/container/Container';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/utils/animationVariants';

export default function Hero() {
  return (
    <section className="pt-[9px] pb-12 lg:pt-[140px] lg:pb-[105px]">
      <Container className="flex flex-col md:flex-row-reverse md:justify-end gap-[26px] md:gap-[76px] overflow-visible">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ scale: 0.95, x: 50, duration: 1.2 })}
          className="relative md:aspect-[655/508] w-full md:w-[445px] lg:w-[545px] xl:w-[655px] h-[199px] sm:h-[239px] md:h-auto shrink-0"
        >
          <div className="absolute -z-10 top-0 md:top-auto md:bottom-[42px] right-[-210px] md:right-auto md:left-[-102px] xl:left-[-152px] w-[305px] h-[305px] rounded-full bg-green" />
          <div className="relative w-full h-full rounded-[15px] overflow-hidden">
            <Image
              src="/images/blogPage/hero/picOne.webp"
              alt="background"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
            />
          </div>
        </motion.div>
        <div className="md:w-[calc(50%-14px)] lg:w-[calc(50%-56px)] shrink-0 md:mt-9">
          <div className="flex gap-4 justify-between items-center mb-[19px] md:mb-4 text-black-secondary">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: -20 })}
              className="max-w-[377px] lg:max-w-[524px] text-[24px] lg:text-[36px] font-normal leading-[29px] lg:leading-[44px] uppercase tracking-[-0.08em]"
            >
              Блог Efedra: експертно й доступно
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: 20, scale: 0.95 })}
              className="md:hidden relative aspect-[115/94] w-auto h-[94px] xs:h-[140px] rounded-[20px] overflow-hidden shrink-0"
            >
              <Image
                src="/images/blogPage/hero/picTwo.webp"
                alt="background"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="md:mb-[63px] md:max-w-[384px] text-[14px] leading-[17px] tracking-[-0.03em]"
          >
            Ми віримо, що поінформованість — це впевненість. Тому ділимось
            знаннями, пояснюємо підходи та говоримо про естетику й медицину без
            перебільшень — чесно, ясно і з повагою до вас.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({
              scale: 0.95,
              duration: 1.2,
              delay: 0.6,
            })}
            className="hidden md:block relative aspect-[280/229] w-[280px] h-[229px] rounded-[20px] overflow-hidden shrink-0"
          >
            <Image
              src="/images/blogPage/hero/picTwo.webp"
              alt="background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
