import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterSubtitleProps {
  children: ReactNode;
  className?: string;
}

export default function FooterSubtitle({
  children,
  className = '',
}: FooterSubtitleProps) {
  return (
    <h3
      className={twMerge(
        `mb-4 text-[14px] font-normal leading-[17px] uppercase`,
        className
      )}
    >
      {children}
    </h3>
  );
}
