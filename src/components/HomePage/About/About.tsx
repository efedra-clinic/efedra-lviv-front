import Container from '@/components/shared/container/Container';
import CheckmarkIcon from '@/components/shared/icons/CheckmarkIcon';
import {
  fadeInAnimation,
  listItemVariants,
  listVariants,
  scaleInAnimation,
} from '@/utils/animationVariants';
import * as motion from 'motion/react-client';
import Image from 'next/image';

export const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-[40px] rounded-t-[15px] lg:pt-[97px] lg:rounded-0 lg:pb-[60px]"
    >
      <Container className="relative">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="text-[28px] leading-[100%] tracking-[-0.05em] text-black font-bold mb-[25px] uppercase md:text-[50px] lg:leading-[100%] lg:tracking-[-0.05em] lg:text-center lg:mb-[63px]"
        >
          Чому нас обирає більшість
        </motion.h2>
        <div className="lg:relative">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={listVariants({
              staggerChildren: 0.3,
              delayChildren: 0.3,
            })}
            className="md:relative flex flex-col gap-[10px] z-10 md:h-[587px] h-full"
          >
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] md:p-[15px] h-[48px] md:mb-[42px] md:h-[66px] max-w-[261px] md:max-w-[338px] bg-green-light rounded-[10px] md:absolute md:left-[5%] xl:left-[105px]"
            >
              <span className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] md:mr-[15px]">
                <CheckmarkIcon className="md:w-[38px] md:h-[38px] text-green" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium md:text-[16px]">
                Працюємо тільки з сертифікованими препаратами
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] md:p-[15px] h-[48px] md:mb-[145px] md:h-[66px] max-w-[201px] md:max-w-[258px] bg-green-light rounded-[10px] md:absolute md:left-[6%] xl:left-[127px] md:top-[385px]"
            >
              <span className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] md:mr-[15px]">
                <CheckmarkIcon className="md:w-[38px] md:h-[38px] text-green" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium md:text-[16px]">
                Сучасні апарати останнього покоління.
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] md:p-[15px] h-[48px] md:mb-0 md:h-[66px] max-w-[189px] md:max-w-[242px] bg-green-light rounded-[10px] md:absolute md:left-[50%] xl:left-[540px] md:bottom-0"
            >
              <span className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] md:mr-[15px]">
                <CheckmarkIcon className="md:w-[38px] md:h-[38px] text-green" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium md:text-[16px]">
                Затишна атмосфера і конфіденційність.
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] md:p-[15px] h-[48px] md:mb-[145px] md:h-[66px] max-w-[189px] md:max-w-[219px] bg-green-light rounded-[10px] md:absolute md:right-[5%] xl:right-[140px] md:top-[108px]"
            >
              <span className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] md:mr-[15px]">
                <CheckmarkIcon className="md:w-[38px] md:h-[38px] text-green" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium md:text-[16px]">
                Лікарі з досвідом понад 10 років.
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] md:p-[15px] h-[48px] md:mb-[145px] md:h-[66px] max-w-[220px] md:max-w-[276px] bg-green-light rounded-[10px] md:absolute md:right-[5%] xl:right-[81px] md:top-[319px]"
            >
              <span className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] md:mr-[15px]">
                <CheckmarkIcon className="md:w-[38px] md:h-[38px] text-green" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium md:text-[16px]">
                Індивідуальні протоколи під кожне завдання.
              </p>
            </motion.li>
          </motion.ul>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleInAnimation(-15, 0.8)}
            className="flex justify-center items-center absolute top-[110px] right-[-148px] lg:top-[-33px] md:left-[50%] md:translate-x-[-50%] md:right-[unset]"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleInAnimation(15, 0.8)}
              className="flex relative justify-center items-center w-[266px] h-[266px] md:w-[571px] md:h-[571px] border border-[#546A504D] rounded-full"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleInAnimation(20, 0.8)}
                className="flex relative justify-center items-center w-[205px] h-[205px] md:w-[440px] md:h-[440px] border border-[#546A504D] rounded-full"
              >
                <Image
                  src="/images/homePage/about/centerMob.webp"
                  alt="About"
                  width={153}
                  height={153}
                  className="rounded-full md:hidden"
                />
                <Image
                  src="/images/homePage/about/center.webp"
                  alt="About"
                  width={329}
                  height={329}
                  className="rounded-full md:block hidden"
                />
                <Image
                  src="/images/homePage/hero/cta2.webp"
                  alt="About"
                  width={26}
                  height={26}
                  className="rounded-full absolute top-[134px] left-[-1px] md:top-[171px] md:left-[unset] md:right-[22px] md:w-[55px] md:h-[55px]"
                />
              </motion.div>
              <Image
                src="/images/homePage/hero/cta1.webp"
                alt="About"
                width={26}
                height={26}
                className="rounded-full absolute top-[80px] left-[-10px] md:top-[174px] md:left-[-20px] md:w-[55px] md:h-[55px]"
              />
              <Image
                src="/images/homePage/hero/cta3.webp"
                alt="About"
                width={26}
                height={26}
                className="rounded-full absolute top-[-1px] left-[84px] md:top-0 md:left-[unset] md:right-[121px] md:w-[55px] md:h-[55px]"
              />
              <Image
                src="/images/homePage/hero/cta4.webp"
                alt="About"
                width={26}
                height={26}
                className="rounded-full absolute bottom-[-9px] left-[98px] md:bottom-[47px] md:left-[178px] md:w-[55px] md:h-[55px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
