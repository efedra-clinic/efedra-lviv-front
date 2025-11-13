import Container from '@/components/shared/container/Container';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/utils/animationVariants';
import Image from 'next/image';
import { GlassFilter } from '@/components/shared/GlassFilter/GlassFilter';
import Callback from '@/components/shared/cta/Callback';
import { HeroArrow } from '@/components/shared/icons/HeroArrow';
import { ScrollButton } from '@/components/shared/buttons/ScrollButton';

export const Hero = () => {
  return (
    <section className="relative bg-gray-light lg:bg-white pb-[30px] mb-[-15px] lg:mb-0 ">
      <Container className="2xl:relative">
        <div className="relative mb-[52px] lg:mb-[108px] lg:pt-[122px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="absolute z-10 top-[-257px] left-[-161px] lg:top-[-139px] lg:left-[-189px] w-[471px] h-[453px] lg:w-[669px] lg:h-[669px] rounded-full bg-white pointer-events-none"
          ></motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="max-w-[293px] lg:max-w-[429px] lg:mb-[25px] relative z-20 text-[28px] lg:text-[50px] leading-[100%] tracking-[-0.05em] uppercase text-olive mb-5 font-bold"
          >
            Відкрийте новий рівень догляду <br className="lg:hidden" />
            за собою
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.6 })}
            className="max-w-[201px] lg:max-w-[395px] font-medium relative z-20 text-[14px] lg:text-[20px] leading-[100%] tracking-[-0.03em] text-black"
          >
            Безпечні та результативні процедури для вашої краси та молодості
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({
            scale: 0.95,
            duration: 1.5,
            opacity: 0.01,
          })}
          className="relative lg:absolute left-[50%] lg:left-[unset] lg:right-0 lg:top-0 mt-[-86px] mb-[-127px] lg:mt-0 lg:mb-0 -translate-x-1/2 lg:translate-x-0 pointer-events-none w-[120vw] md:w-full h-[372px] lg:w-[970px] lg:h-auto"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/homePage/hero/bgMob.webp"
              alt="background"
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 0px, 100vw"
              width={454}
              height={372}
              className="object-cover w-full h-full lg:hidden"
              unoptimized
            />
            <Image
              src="/images/homePage/hero/bgDesk.webp"
              alt="background"
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 0px, 100vw"
              width={1063}
              height={868}
              className="object-cover w-full h-full hidden lg:block"
              unoptimized
            />
            <div
              aria-hidden
              className="lg:hidden absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, #DCD5CD00 79.84%, #DCD5CD 97.58%), linear-gradient(0.69deg, #DCD5CD00 82.29%, #DCD5CD 99.29%)',
              }}
            />
          </div>
        </motion.div>
        <div className="lg:flex lg:justify-between lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({
              scale: 0.95,
              duration: 1.5,
              opacity: 0.01,
            })}
            className="relative mb-[15px] max-w-[484px] lg:mb-0 z-10"
          >
            <GlassFilter
              frost={12.6}
              tintColor="#A9663B40"
              refraction={0.8}
              borderRadius="15px"
              depth={0.2}
              lightAngle={-45}
              lightIntensity={0.8}
              dispersion={0.5}
            >
              <div className="w-full px-[10px] lg:pl-[20px] lg:pr-[18px] py-[15px] lg:py-[20px] bg-transparent lg:flex">
                <Image
                  src="/images/homePage/hero/contactCardDesk.webp"
                  alt="contact card"
                  width={126}
                  height={135}
                  className="hidden lg:block rounded-[10px] object-cover mr-[20px] w-[126px] h-[135px]"
                />
                <div className="lg:w-full">
                  <div className="flex lg:flex-row-reverse pb-[15px] lg:pb-[20px] border-b border-[#FFFFFF54] mb-[10px] lg:mb-[20px]">
                    <p className="text-[13px] leading-[110%] tracking-[-0.04em] text-white mr-[5px] max-w-[198px] lg:max-w-[unset] lg:text-[16px] lg:mr-0">
                      Наша команда — це лікарі з багаторічним досвідом, які
                      поєднують професіоналізм із сучасним підходом.
                    </p>
                    <Image
                      src="/images/homePage/hero/contactCard.webp"
                      alt="contact card"
                      priority
                      fetchPriority="high"
                      width={73}
                      height={65}
                      className="rounded-[5px] lg:hidden"
                    />
                  </div>
                  <Callback
                    buttonText="Запис на прийом"
                    buttonClassName="lg:max-w-[207px] px-[20px] py-[12px] text-[16px] leading-[100%] tracking-[-0.05em] text-black font-medium bg-white text-left"
                    spanClassName="w-[32px] h-[32px] flex items-center justify-center bg-green rounded-full"
                    iconClassName="text-white"
                  />
                </div>
              </div>
            </GlassFilter>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({
              scale: 0.95,
              duration: 1.5,
              opacity: 0.01,
            })}
            className="lg:w-[322px]"
          >
            <GlassFilter
              frost={2}
              tintColor="#FFFFFF66"
              refraction={0.8}
              borderRadius="10px"
              depth={0.2}
              lightAngle={-45}
              lightIntensity={0.8}
              dispersion={0.5}
            >
              <div className="py-[15px] px-[10px] lg:px-[15px] bg-transparent">
                <div className="flex mb-[5px] lg:mb-[6px] items-end lg:items-center">
                  <ul className="flex items-center mr-[10px]">
                    <li className="mr-[-10px]">
                      <Image
                        src="/images/homePage/hero/cta1.webp"
                        alt="icon1"
                        priority
                        fetchPriority="high"
                        width={25}
                        height={25}
                        className="rounded-full lg:w-[35px] lg:h-[35px]"
                      />
                    </li>
                    <li className="mr-[-10px]">
                      <Image
                        src="/images/homePage/hero/cta2.webp"
                        alt="icon2"
                        priority
                        fetchPriority="high"
                        width={25}
                        height={25}
                        className="rounded-full lg:w-[35px] lg:h-[35px]"
                      />
                    </li>
                    <li className="mr-[-10px]">
                      <Image
                        src="/images/homePage/hero/cta3.webp"
                        alt="icon3"
                        priority
                        fetchPriority="high"
                        unoptimized
                        width={25}
                        height={25}
                        className="rounded-full lg:w-[35px] lg:h-[35px]"
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/homePage/hero/cta4.webp"
                        alt="icon4"
                        width={25}
                        height={25}
                        className="rounded-full lg:w-[35px] lg:h-[35px]"
                      />
                    </li>
                  </ul>

                  <p className="text-[15px] leading-[110%] tracking-[-0.05em] text-black font-semibold lg:text-[18px]">
                    5000+ жінок
                  </p>
                </div>
                <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-black font-normal lg:text-[14px]">
                  Довіряють нам свою красу та здоров’я
                </p>
              </div>
            </GlassFilter>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({
            scale: 0.95,
            duration: 1.5,
            opacity: 0.01,
          })}
          className="absolute bottom-[14.5px] right-[50%] translate-x-1/2 z-50"
        >
          <ScrollButton
            className="h-[20px] w-[20px] flex items-center justify-center cursor-pointer"
            scrollTo="about"
          >
            <HeroArrow strokeColor="#FFFFFF" className=" drop-shadow-md" />
          </ScrollButton>
        </motion.div>
      </Container>
    </section>
  );
};
