import { ReactNode } from 'react';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/utils/animationVariants';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  children?: ReactNode;
  variant?: 'light-green' | 'black' | 'green';
  type?: 'bordered' | 'solid';
  className?: string;
  animationDirection?: 'left' | 'right';
}

export default function SectionTitle({
  children,
  variant = 'green',
  type = 'solid',
  className = '',
  animationDirection = 'right',
}: SectionTitleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeInAnimation({
        x: animationDirection === 'right' ? -30 : 30,
      })}
      className={twMerge(
        clsx(
          `flex items-center justify-center w-fit h-[29px] mb-5 lg:mb-6 rounded-full px-3 py-1 
        ${variant === 'green' ? (type === 'solid' ? 'text-white bg-green' : 'text-greenbg-white border-[1.8px] border-green') : variant === 'light-green' ? (type === 'solid' ? 'text-white bg-green-light-4' : 'text-green-light-4 bg-white border-[1.8px] border-green-light-4') : variant === 'black' ? (type === 'solid' ? 'text-white bg-black/80' : 'text-black bg-white border-[1.8px] border-black') : ''}
        `,
          className
        )
      )}
    >
      <h2
        className={`pt-0.5 text-[14px] lg:text-[16px] font-normal uppercase`}
      >
        {children}
      </h2>
    </motion.div>
  );
}
