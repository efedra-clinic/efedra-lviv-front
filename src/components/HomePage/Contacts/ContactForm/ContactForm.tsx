'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { callBackValidation } from '@/schemas/callBackValidation';

import CustomizedInput from '@/components/shared/formComponents/CustomizedInput';
import MainButton from '@/components/shared/buttons/MainButton';
import NotificationPopUp from '@/components/shared/notifications/NotificationPopUp';
import Backdrop from '@/components/shared/backdrop/Backdrop';

export interface ValuesContactFormType {
  name: string;
  phone: string;
}

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const initialValues = {
    name: '',
    phone: '',
  };

  const validationSchema = callBackValidation();

  const submitForm = async (
    values: ValuesContactFormType,
    formikHelpers: FormikHelpers<ValuesContactFormType>
  ) => {
    const { resetForm } = formikHelpers;
    const data =
      `<b>Заявка "Форма зворотнього зв'язку"</b>\n` +
      `<b>Ім'я:</b> ${values.name.trim()}\n` +
      `<b>Телефон:</b> ${values.phone.trim().replace(/(?!^)\D/g, '')}\n`;
    try {
      setIsError(false);
      setIsLoading(true);

      await axios({
        method: 'post',
        url: '/api/telegram',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      resetForm();

      setIsNotificationShown(true);
    } catch (error) {
      setIsError(true);
      setIsNotificationShown(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        {({ dirty, isValid }) => (
          <>
            <h2 className="sr-only">Форма зворотнього зв'язку</h2>
            <Form
              className={`${className} bg-green rounded-[15px] px-[10px] py-[20px] md:px-[20px] md:py-[25px] md:w-full md:h-full md:flex md:flex-col md:justify-between`}
            >
              <div className="flex flex-col w-full gap-y-[16px] md:gap-y-5 mb-[25px] md:mb-[26px]">
                <CustomizedInput
                  fieldName="name"
                  label="Ваше ім’я"
                  isLabelHidden={true}
                  placeholder="Ваше ім’я"
                  fieldClassName="h-[40px] md:h-[46px] bg-white/30 w-full text-[14px] leading-[15px] text-white rounded-full px-[20px] md:px-[25px] pt-[15px] pb-[10px] md:py-[14px]
                  md:text-[16px] md:leading-[110%] md:tracking-[-0.03em]"
                />
                <CustomizedInput
                  fieldName="phone"
                  label="Номер телефону"
                  inputType="tel"
                  isLabelHidden={true}
                  placeholder="Номер телефону"
                  fieldClassName="h-[40px] md:h-[46px] bg-white/30 h-[40px] w-full text-[14px] leading-[15px] text-white rounded-full px-[20px] md:px-[25px] pt-[15px] pb-[10px] md:py-[14px]
                  md:text-[16px] md:leading-[110%] md:tracking-[-0.03em]"
                />
              </div>
              <MainButton
                type="submit"
                disabled={!(dirty && isValid) || isLoading}
                isLoading={isLoading}
                loadingText="Надсилання..."
                className="px-[20px] py-[12px] text-[16px] leading-[100%] tracking-[-0.05em] text-black font-medium bg-white text-left"
                spanClassName="w-[32px] h-[32px] flex items-center justify-center bg-green-light-2 rounded-full"
                iconClassName="text-black"
                phoneIcon={true}
              >
                Надіслати
              </MainButton>
            </Form>
          </>
        )}
      </Formik>
      {isMounted &&
        createPortal(
          <>
            <Backdrop
              isVisible={isNotificationShown}
              onClick={() => {
                setIsNotificationShown(false);
              }}
            />
            <NotificationPopUp
              title={
                isError ? 'На жаль, щось пішло не так' : 'Дякуємо за звернення!'
              }
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
        )}
    </>
  );
};
