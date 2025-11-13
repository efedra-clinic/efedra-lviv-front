'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  burgerMenuVariants,
  burgerListVariants,
  fadeInAnimation,
} from '@/utils/animationVariants';
import { navListPages, navListAnchors } from '../navMenu/navMenuData';
import Container from '../../container/Container';
import LogoLeavesIcon from '../../icons/LogoLeavesIcon';
import BurgerNav from '../navMenu/BurgerNav';
import { FollowUs } from '../../FollowUs/FollowUs';

interface BurgerMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BurgerMenuContent({
  isOpen,
  onClose,
}: BurgerMenuContentProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lg:hidden fixed right-0 top-0 z-[50] pt-21 w-full h-dvh max-h-dvh bg-green"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={burgerMenuVariants}
        >
          <Container
            className="flex flex-col justify-between h-full pt-[66px] pb-5 overflow-y-auto scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
          scrollbar-track-rounded-full scrollbar-thumb-beige/50 scrollbar-track-transparent"
          >
            {/* Меню */}
            <motion.div
              variants={burgerListVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-[40px]"
            >
              <BurgerNav
                pagesNavList={navListPages}
                anchorsNavList={navListAnchors}
                className=""
                onClick={onClose}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="mb-[15px]"
            >
              <FollowUs
                variant="bordered"
                textClassName="text-[20px] font-semibold leading-[100%] tracking-[-0.05em] text-white mb-[15px]"
                iconClassName="text-white"
                title="Слідкуйте за нами:"
              />
            </motion.div>
          </Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({
              scale: 0.97,
              delay: 1,
              duration: 1,
            })}
            className="fixed -z-10 bottom-[20px] right-[32px] pointer-events-none"
          >
            <LogoLeavesIcon className="w-[85px] h-[85px] text-white opacity-50 rotate-180" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
