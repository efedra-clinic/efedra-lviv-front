import { Dispatch, ReactNode, SetStateAction } from 'react';

import IconButton from '../buttons/IconButton';
import CrossIcon from '../icons/CrossIcon';

interface ModalProps {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
}

export default function Modal({
  isModalShown,
  setIsModalShown,
  children,
  className = 'bg-gray-light-2',
}: ModalProps) {
  return (
    <div
      className={`${
        isModalShown
          ? ' -translate-y-[calc(50dvh-50%)] opacity-100 scale-100'
          : 'pointer-events-none opacity-0 scale-90'
      } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[600ms] ease-out z-70 w-[82%] max-w-[470px] lg:max-w-[568px] max-h-dvh
      px-5 lg:px-[45px] pt-11 pb-8 lg:py-14 overflow-y-auto  rounded-[16px] lg:rounded-[20px] scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full  scrollbar-thumb-transparent scrollbar-track-main popup-scroll shadow-md ${className}`}
    >
      <IconButton
        handleClick={() => setIsModalShown(false)}
        className="absolute top-4 lg:top-8 right-4 lg:right-8 w-8 h-8"
      >
        {<CrossIcon className="w-8 h-8" />}
      </IconButton>

      {children}
    </div>
  );
}
