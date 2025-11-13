'use client';
import { motion } from 'framer-motion';
import { scrollButtonVariants } from '@/utils/animationVariants';

interface ScrollButtonProps {
  children: React.ReactNode;
  className?: string;
  scrollTo: string;
  offset?: number;
}

export const ScrollButton = ({
  children,
  className,
  scrollTo,
  offset = 90,
}: ScrollButtonProps) => {
  return (
    <motion.button
      variants={scrollButtonVariants}
      animate="animate"
      onClick={() => {
        const scrollToElement = document.getElementById(scrollTo);
        if (!scrollToElement) return;
        const elementPosition = scrollToElement.getBoundingClientRect().top;
        const scrollToPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth',
        });
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
};
