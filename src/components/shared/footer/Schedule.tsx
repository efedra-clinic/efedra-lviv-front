import { SCHEDULE } from '@/constants/constants';
import FooterSubtitle from './FooterSubtitle';

export default function Schedule() {
  return (
    <div>
      <FooterSubtitle className="mb-[16px]">Графік роботи:</FooterSubtitle>
      <p className="text-[12px] font-normal leading-[15px]">{SCHEDULE}</p>
    </div>
  );
}
