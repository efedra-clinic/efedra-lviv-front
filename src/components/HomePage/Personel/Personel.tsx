import { PersonelBlock } from './PersonelBlock/PersonelBlock';
import Container from '@/components/shared/container/Container';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import { allDoctorsQuery } from '@/lib/queries';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';
import LogoIcon from '@/components/shared/icons/LogoIcon';
import LogoLeavesIconFull from '@/components/shared/icons/LogoLeavesIconFull';

export const Personel = async () => {
  // download personel from sanity
  const doctors = await fetchSanityDataServer(allDoctorsQuery);
  return (
    <section
      id="personel"
      className="pt-[40px] pb-[31px] lg:pt-[75px] lg:pb-[40px]"
    >
      <Container className="lg:flex lg:justify-between relative">
        <div className="lg:flex lg:flex-col lg:justify-between lg:max-w-[50%] lg:h-[474px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="text-[30px] leading-[100%] tracking-[-0.05em] text-olive font-bold mb-[25px] uppercase whitespace-pre-wrap lg:text-[50px] lg:mb-0"
          >
            {`Наші  майстри потурбуються про вашу красу!`}
          </motion.h2>
          <div>
            <div className="hidden lg:block mb-[15px]">
              <LogoIcon className="w-[74px] h-[30px] text-gray-dark" />
            </div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="text-[13px] lg:max-w-[379px] lg:text-[16px] leading-[120%] tracking-[-0.03em] text-black/50 font-medium mb-[40px] lg:mb-0 lg:pt-[15px] lg:border-t lg:border-black/30"
            >
              В центрі естетичної медицини зібрались спеціалісти, об'єднані
              спільною мрією. Мрією про косметологію, яка зберігає молодість та
              здоров'я клієнтів.
            </motion.p>
          </div>
        </div>

        <PersonelBlock doctors={doctors} />
        <div className="hidden lg:block absolute top-[172px] left-[42.3%] rotate-45 opacity-30 -z-10">
          <LogoLeavesIconFull className="w-[170px] h-[170px] stroke-green-light-2" />
        </div>
      </Container>
    </section>
  );
};
