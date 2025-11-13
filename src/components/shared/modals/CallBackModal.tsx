'use client';
import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import Modal from './Modal';
import Backdrop from '../backdrop/Backdrop';
import NotificationPopUp from '../notifications/NotificationPopUp';
import CallBackForm from '../forms/CallBackForm';
import { createPortal } from 'react-dom';
interface CallBackFormModalProps {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export default function CallBackModal({
  isModalShown,
  setIsModalShown,
}: CallBackFormModalProps) {
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <>
      <Backdrop
        isVisible={isModalShown || isNotificationShown}
        onClick={() => {
          setIsModalShown(false);
          setIsNotificationShown(false);
        }}
      />
      <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown}>
        <h2 className="max-w-[212px] sm:max-w-[340px] lg:max-w-[478px] mx-auto mb-[15px] text-[24px] lg:text-[32px] font-normal leading-[120%] text-center uppercase">
          Почніть шлях до оновленої версії себе{' '}
          <span className="italic">вже сьогодні</span>!
        </h2>
        <CallBackForm
          setIsError={setIsError}
          setIsNotificationShown={setIsNotificationShown}
          setIsModalShown={setIsModalShown}
        />
      </Modal>
      <NotificationPopUp
        title={isError ? 'На жаль, щось пішло не так' : 'Дякуємо за звернення!'}
        description={
          isError
            ? 'Спробуйте відправити форму ще раз'
            : "Наш менеджер скоро зв'яжеться з вами"
        }
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
    </>,
    document.body
  );
}
