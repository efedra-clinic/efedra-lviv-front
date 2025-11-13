import * as yup from "yup";
import { checkoutPhoneRegex, nameRegex } from "../regex/regex";

export const callBackValidation = () => {
  const callBackFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Повинно містити від 2 до 30 символів")
      .max(30, "Повинно містити від 2 до 30 символів")
      .matches(nameRegex, "Допустимі літери та дефіс, апостроф, лапки")
      .required("Дане поле є обов'язковим до заповнення"),

    phone: yup
      .string()
      .matches(checkoutPhoneRegex, "Вкажіть правильний номер телефону")
      .test(
        "first-digit-after-38",
        "Після +38 має бути цифра 0",
        (value) => !!value && value.startsWith("+38 (0")
      )
      .required("Дане поле є обов'язковим до заповнення"),
  });

  return callBackFormValidationSchema;
};
