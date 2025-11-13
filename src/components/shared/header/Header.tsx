'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from '../container/Container';
import LogoIcon from '../icons/LogoIcon';
import BurgerMenu from './burgerMenu/BurgerMenu';
import * as motion from 'motion/react-client';
import { headerVariants } from '@/utils/animationVariants';
import clsx from 'clsx';
import { navListAnchors, navListPages } from './navMenu/navMenuData';
import NavMenu from './navMenu/NavMenu';
import MainButton from '../buttons/MainButton';
import { PHONES } from '@/constants/constants';
import { contactsPhoneRegex } from '@/regex/regex';

export default function Header() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    const SCROLL_THRESHOLD = 5;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY;

          if (currentScrollY <= 10) {
            setIsHeaderVisible(true);
            setIsScrolledDown(false);
          } else if (
            scrollDifference > SCROLL_THRESHOLD &&
            currentScrollY > 100
          ) {
            setIsHeaderVisible(false);
            setIsScrolledDown(true);
          } else if (
            scrollDifference < -SCROLL_THRESHOLD &&
            currentScrollY > 10
          ) {
            setIsHeaderVisible(true);
            setIsScrolledDown(true);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={headerVariants}
      className={clsx(
        'fixed z-50 top-0 left-0 w-dvw py-[26px] lg:py-[15px] bg-white lg:bg-transparent transition-all duration-300 ease-in-out',
        isScrolledDown ? 'lg:bg-white/50' : 'lg:bg-transparent'
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="relative z-60"
          onClick={() => setIsOpenBurgerMenu(false)}
        >
          <LogoIcon
            className={clsx(
              'w-[61px] lg:w-[74px] text-gray-dark h-auto xl:hover:text-green focus-visible:text-green transition duration-300 ease-in-out',
              isOpenBurgerMenu ? 'text-white' : ''
            )}
          />
        </Link>
        <NavMenu
          navList={navListPages}
          anchorsNavList={navListAnchors}
          className="hidden lg:block bg-white rounded-full fixed left-[50%] -translate-x-1/2"
        />
        <MainButton
          className="hidden lg:block bg-white rounded-full text-right w-[202px] py-[12px] px-[18px] text-[16px] leading-[16px] tracking-[-0.05em] font-normal"
          phoneIcon={true}
          iconClassName="text-black"
          spanClassName="bg-green-light-2 w-[30px] h-[30px] left-[5.5px]"
          onClick={() => (window.location.href = `tel:${PHONES[0]}`)}
        >
          {PHONES[0].replace(contactsPhoneRegex, '+38 ($1) $2 $3 $4')}
        </MainButton>
        <BurgerMenu
          isOpenBurgerMenu={isOpenBurgerMenu}
          setIsOpenBurgerMenu={setIsOpenBurgerMenu}
        />
      </Container>
    </motion.header>
  );
}
