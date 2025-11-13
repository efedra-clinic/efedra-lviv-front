import Container from '../container/Container';
import Contacts from './Contacts';
import { FollowUs } from '../FollowUs/FollowUs';
import Rights from './Rights';
import Schedule from './Schedule';

export default function Footer() {
  return (
    <footer className="w-dvw bg-green py-16 text-white-secondary">
      <Container className="flex flex-col gap-10 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-[110px]">
          <h2 className="max-w-[300px] text-[24px] lg:text-[28px] lg:leading-[34px] font-bold lg:font-semibold leading-[29px] uppercase mr-auto">
            Відкрийте новий рівень догляду за собою
          </h2>
          <div className="flex sm:flex-row flex-col gap-10 xl:gap-[110px]">
            <Contacts />
            <div className="flex gap-4 xs:gap-[30px] lg:gap-10 xl:gap-[110px]">
              <Schedule />
              <FollowUs
                textClassName="text-[14px] font-normal leading-[17px] uppercase mb-[20px]"
                iconClassName=" border-[0.26px] border-green lg:w-[28px] lg:h-[28px]"
                strokeColor="var(--color-white-secondary)"
                title="Слідкуйте за нами"
              />
            </div>
          </div>
        </div>
        <Rights />
      </Container>
    </footer>
  );
}
