import FooterSubtitle from './FooterSubtitle';
import {
  ADDRESS,
  CITY,
  EMAIL,
  GOOGLE_MAPS_URL,
  PHONES,
} from '@/constants/constants';
import { contactsPhoneRegex } from '@/regex/regex';
import ArrowIcon from '../icons/ArrowIcon';

export default function Contacts() {
  return (
    <div>
      <FooterSubtitle>Контакти та Адреса</FooterSubtitle>
      <ul className="flex flex-col gap-3 mb-4.5">
        {PHONES.map((phone, index) => (
          <li key={index}>
            <a
              href={`tel:${phone}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block text-[12px] font-normal leading-[15px] active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
            >
              {phone.replace(contactsPhoneRegex, '+38 ($1) $2 $3 $4')}
            </a>
          </li>
        ))}
        <li>
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block text-[12px] font-normal leading-[15px] active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
          >
            {EMAIL}
          </a>
        </li>
        <li className="text-[12px] font-normal leading-[15px]">{CITY}</li>
        <li className="text-[12px] font-normal leading-[15px]">{ADDRESS}</li>
      </ul>

      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group flex items-center gap-1 text-[12px] font-normal leading-[15px] uppercase active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
      >
        Дивитися на карті{' '}
        <ArrowIcon className="xl:group-hover:translate-x-[1px] xl:group-hover:-translate-y-[1px] transition duration-300 ease-in-out" />
      </a>
    </div>
  );
}
