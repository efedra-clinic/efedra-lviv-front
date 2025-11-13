'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';

import { callBackValidation } from '@/schemas/callBackValidation';

import CustomizedInput from '../formComponents/CustomizedInput';
import MainButton from '../buttons/MainButton';
import { twMerge } from 'tailwind-merge';

export interface ValuesCallBackFormType {
  name: string;
  phone: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsModalShown?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  buttonClassName?: string;
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  setIsModalShown,
  className = '',
  buttonClassName = '',
}: CallBackFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    phone: '',
  };

  const validationSchema = callBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
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
      if (setIsModalShown) {
        setIsModalShown(false);
      }
      setIsNotificationShown(true);
    } catch (error) {
      setIsError(true);
      if (setIsModalShown) {
        setIsModalShown(false);
      }
      setIsNotificationShown(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ dirty, isValid }) => (
        <Form className={`${className}`}>
          <div className="flex flex-col w-full gap-y-4 lg:gap-y-5 mb-[26px]">
            <CustomizedInput
              fieldName="name"
              label="Імʼя"
              fieldClassName="h-[50px] lg:h-[48px] w-full text-[14px] leading-[15px] rounded-[16px] px-[20px] pt-[15px] pb-[10px] border border-black"
            />
            <CustomizedInput
              fieldName="phone"
              label="Телефон"
              inputType="tel"
              fieldClassName="h-[50px] lg:h-[48px] w-full text-[14px] leading-[15px] rounded-[16px] px-[20px] pt-[15px] pb-[10px] border border-black"
            />
          </div>
          <MainButton
            type="submit"
            disabled={!(dirty && isValid) || isLoading}
            isLoading={isLoading}
            loadingText="Надсилання..."
            className={
              twMerge(
                'w-full h-[56px] text-[14px] leading-[17px] text-white  font-medium text-center rounded-full',
                buttonClassName || 'bg-green'
              ) as string
            }
          >
            Записатися на консультацію
          </MainButton>
        </Form>
      )}
    </Formik>
  );
}
