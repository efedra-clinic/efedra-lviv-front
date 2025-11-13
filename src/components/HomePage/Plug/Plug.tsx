import LogoIcon from '@/components/shared/icons/LogoIcon';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';
import Image from 'next/image';
export const Plug = () => {
  return (
    <div>
      <ul className="flex items-center justify-center lg:px-[50px]">
        <motion.li
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.5 })}
          className="bg-green text-white flex items-center justify-center h-[59px] lg:h-[181px] w-full rounded-full"
        >
          <LogoIcon className="w-[55px] lg:w-[177px] h-auto" />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.7 })}
          className="hidden lg:block bg-green flex items-center justify-center h-[181px] w-full rounded-full overflow-hidden"
        >
          <Image
            src="/images/homePage/plug/image.webp"
            alt="image"
            width={295}
            height={181}
            className="object-cover w-full h-full rounded-full"
          />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.9 })}
          className="relative bg-green uppercase text-[14px] lg:text-[38px] leading-[100%] tracking-[-0.03em] text-white font-medium h-[59px] lg:h-[181px] flex items-center justify-center w-full rounded-full overflow-hidden"
        >
          <Image
            src="/images/homePage/plug/imageBg.webp"
            alt="imageBg"
            width={100}
            height={100}
            className="object-cover w-full h-full absolute inset-0 z-[-10] lg:hidden"
          />
          НАМ
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 1.1 })}
          className="uppercase text-[14px] lg:text-[38px] leading-[100%] tracking-[-0.03em] text-white font-medium bg-green h-[59px] lg:h-[181px] flex items-center justify-center w-full rounded-full overflow-hidden"
        >
          <Image
            src="/images/homePage/plug/imageBg.webp"
            alt="imageBg"
            width={295}
            height={181}
            className="object-cover w-full h-full absolute inset-0 z-[-10] hidden lg:block rounded-full "
          />
          Довіряють
        </motion.li>
      </ul>
    </div>
  );
};
