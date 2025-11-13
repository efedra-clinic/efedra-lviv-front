'use client';
import { useState } from 'react';
import MainButton from '../buttons/MainButton';
import CallBackModal from '../modals/CallBackModal';

interface CallbackProps {
  buttonText: string;
  buttonClassName?: string;
  iconClassName?: string;
  spanClassName?: string;
}

export default function Callback({
  buttonText,
  buttonClassName = '',
  iconClassName = '',
  spanClassName = '',
}: CallbackProps) {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <MainButton
        onClick={() => setIsModalShown(true)}
        className={buttonClassName}
        iconClassName={iconClassName}
        spanClassName={spanClassName}
        phoneIcon={true}
      >
        {buttonText}
      </MainButton>
      <CallBackModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </>
  );
}
