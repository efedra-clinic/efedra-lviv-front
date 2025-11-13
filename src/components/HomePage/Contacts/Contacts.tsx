import { ContactForm } from './ContactForm/ContactForm';
import { Map } from './Map';
import { ADDRESS, CITY, EMAIL, PHONES } from '@/constants/constants';
import Container from '@/components/shared/container/Container';
import { FollowUs } from '@/components/shared/FollowUs/FollowUs';
import Image from 'next/image';
import { contactsPhoneRegex } from '@/regex/regex';
import {
  fadeInAnimation,
  listItemVariants,
  listVariants,
} from '@/utils/animationVariants';
import * as motion from 'motion/react-client';

export const Contacts = () => {
  return (
    <section id="contacts" className="pt-[90px] pb-[80px]">
      <Container>
        <div className="lg:flex lg:mb-[60px]">
          <div className="lg:max-w-[434px] lg:flex lg:flex-col lg:justify-between lg:mr-[auto] xl:mr-[113px]">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="text-[30px] lg:text-[50px] leading-[100%] tracking-[-0.05em] text-black font-bold uppercase mb-[30px] lg:mb-0"
            >
              Наші контакти
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="rounded-[20px] mb-[30px] h-[167px] lg:hidden"
            >
              <Map />
            </motion.div>
            <motion.address
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listVariants({
                staggerChildren: 0.3,
                delayChildren: 0.3,
              })}
              className="not-italic mb-[40px] lg:mb-0 flex flex-wrap gap-y-[25px] gap-x-[20px] lg:gap-y-[30px] lg:gap-x-[32px] lg:max-w-[350px]"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={listItemVariants}
              >
                <p className="text-[16px] lg:text-[20px] leading-[100%] tracking-[-0.03em] text-black font-medium lg:font-semibold uppercase mb-[5px]">
                  Адреса
                </p>

                <p className="text-[14px] leading-[17px] tracking-[-0.05em] lg:tracking-[-0.03em] text-black/50">
                  {CITY}, {ADDRESS}
                </p>
              </motion.div>
              <div className="flex flex-wrap gap-y-[25px] gap-x-[20px] lg:gap-y-[30px] lg:gap-x-[32px] lg:max-w-[350px]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={listItemVariants}
                >
                  <p className="text-[16px] lg:text-[20px] leading-[100%] tracking-[-0.03em] text-black font-medium lg:font-semibold uppercase mb-[5px]">
                    Телефон
                  </p>
                  <div className="flex flex-col gap-[5px]">
                    {PHONES.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone}`}
                        className="text-[14px] leading-[17px] tracking-[-0.05em] lg:tracking-[-0.03em] text-black/50"
                      >
                        {phone.replace(contactsPhoneRegex, '+38 ($1) $2 $3 $4')}
                      </a>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={listItemVariants}
                >
                  <p className="text-[16px] lg:text-[20px] leading-[100%] tracking-[-0.03em] text-black font-medium lg:font-semibold uppercase mb-[5px]">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-[14px] leading-[17px] tracking-[-0.05em] lg:tracking-[-0.03em] text-black/50"
                  >
                    {EMAIL}
                  </a>
                </motion.div>
              </div>
            </motion.address>
          </div>
          <div className="md:flex">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="relative xl:shrink-0 rounded-[15px] lg:rounded-[20px] overflow-hidden px-[14px] md:px-[18px] pb-[15px] md:pb-[20px] pt-[82px] md:pt-[152px] mb-[10px] md:mb-0 md:w-[232px] md:mr-[10px]"
            >
              <Image
                src="/images/homePage/contacts/socialsBg.webp"
                alt="Socials"
                width={296}
                height={162}
                className="w-full h-full object-cover absolute inset-0 z-[-10] md:hidden"
              />
              <Image
                src="/images/homePage/contacts/socialsBgDesk.webp"
                alt="Socials"
                width={232}
                height={240}
                className="w-full h-full object-cover absolute inset-0 z-[-10] hidden md:block"
              />
              <h3 className="sr-only">Соціальні мережі</h3>
              <FollowUs
                variant="bordered"
                textClassName="font-manrope text-[14px] md:text-[16px] leading-[110%] tracking-[-0.03em] text-white font-bold mb-[10px]"
                iconClassName="text-white"
                title="Слідкуй за нами"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="md:w-full md:max-w-[391px] xl:shrink-0"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="hidden lg:block w-full h-[352px]"
        >
          <Map zoom={1} />
        </motion.div>
      </Container>
    </section>
  );
};
