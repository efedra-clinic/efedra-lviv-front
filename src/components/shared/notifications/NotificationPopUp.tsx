import { Dispatch, SetStateAction } from 'react';
import Modal from '../modals/Modal';
import MainButton from '../buttons/MainButton';

interface NotificationPopUpProps {
  title: string;
  description: string;
  isPopUpShown: boolean;

  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationPopUp({
  title,
  description,
  isPopUpShown,

  setIsPopUpShown,
}: NotificationPopUpProps) {
  return (
    <Modal isModalShown={isPopUpShown} setIsModalShown={setIsPopUpShown}>
      <div className="py-10 relative flex flex-col justify-center items-center w-full z-20">
        <h3 className="mb-8 lg:mb-10 text-[24px] lg:text-[32px] font-normal leading-[120%] text-center uppercase">
          {title}
        </h3>
        <p className="text-[14px] lg:text-[16px] text-center">{description}</p>
      </div>
    </Modal>
  );
}
