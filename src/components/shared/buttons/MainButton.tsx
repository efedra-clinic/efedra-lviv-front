import { forwardRef, ReactNode } from 'react';
import LoaderIcon from '../icons/LoaderIcon';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import ArrowIcon from '../icons/ArrowIcon';
import PhoneIcon from '../icons/PhoneIcon';

interface MainButtonProps {
  children: string | ReactNode;
  className?: string;
  type?: 'submit' | 'button';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  loadingText?: string;
  iconClassName?: string;
  spanClassName?: string;
  phoneIcon?: boolean;
}

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      children,
      className = '',
      type = 'button',
      disabled = false,
      isLoading = false,
      onClick,
      loadingText,
      iconClassName = '',
      spanClassName = '',
      phoneIcon = false,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={twMerge(
          clsx(
            `group relative overflow-hidden enabled:cursor-pointer flex items-center justify-center rounded-full 
          disabled:opacity-60 enabled:xl:hover:brightness-125 enabled:focus-visible:brightness-125 enabled:active:scale-[98%] will-change-transform transition duration-300 ease-in-out`,
            'w-full',
            className
          )
        )}
      >
        <div className="flex xl:items-center justify-between gap-2.5 w-full">
          <p className="relative z-10 w-full">
            {isLoading ? loadingText : children}
          </p>
          {phoneIcon ? (
            <span
              className={twMerge(
                clsx(
                  'absolute right-[4px] top-1/2 -translate-y-1/2  flex items-center justify-center rounded-full',
                  spanClassName
                )
              )}
            >
              <PhoneIcon className={iconClassName} />
            </span>
          ) : null}
        </div>
        {isLoading ? <LoaderIcon /> : null}
      </button>
    );
  }
);

MainButton.displayName = 'MainButton';

export default MainButton;
