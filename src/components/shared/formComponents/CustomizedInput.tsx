import { Field, ErrorMessage, useFormikContext } from 'formik';
import { IMaskInput } from 'react-imask';
import { useId } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  label: string;
  labelClassName?: string;
  fieldClassName?: string;
  inputType?: string;
  mask?: string;
  placeholder?: string;
  isLabelHidden?: boolean;
}

export default function CustomizedInput({
  fieldName,
  label,
  labelClassName = '',
  fieldClassName = '',
  inputType = 'text',
  placeholder = '',
  mask = '+38 (000) 000-00-00',
  isLabelHidden = false,
}: CustomizedInputProps) {
  const { setFieldValue } = useFormikContext<Values>();
  const inputId = useId();

  return (
    <label
      htmlFor={inputId}
      className={`relative flex flex-col w-full ${labelClassName}`}
    >
      <span
        className={twMerge(
          clsx(
            'mb-1 lg:mb-3 text-[14px] lg:text-[16px] font-normal leading-[120%]',
            isLabelHidden && 'sr-only'
          )
        )}
      >
        {label}
      </span>
      <div className="relative w-full">
        <Field name={fieldName}>
          {({ field, meta }: any) => {
            const commonProps = {
              id: inputId,
              className: twMerge(
                clsx(
                  `relative w-full outline-none resize-none transition duration-300 ease-out ${
                    meta.touched && meta.error
                      ? 'border-red-500'
                      : 'border-black'
                  }`,
                  fieldClassName
                )
              ),
            };

            if (inputType === 'tel') {
              return (
                <IMaskInput
                  {...field}
                  {...commonProps}
                  mask={mask}
                  lazy={placeholder ? true : false}
                  autoComplete="on"
                  type="tel"
                  placeholder={placeholder || undefined}
                  onAccept={(value: string) => {
                    setFieldValue(fieldName, value || '');
                  }}
                />
              );
            }

            return (
              <input
                {...field}
                {...commonProps}
                type={inputType}
                autoComplete="on"
                placeholder={placeholder}
              />
            );
          }}
        </Field>
      </div>

      <ErrorMessage
        name={fieldName}
        component="p"
        className="absolute bottom-[-13px] left-2 text-[12px] font-normal leading-none text-red-300 truncate"
      />
    </label>
  );
}
