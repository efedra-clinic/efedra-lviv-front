import { Hero } from '@/components/HomePage/Hero/Hero';
import { About } from '@/components/HomePage/About/About';
import { Reviews } from '@/components/HomePage/Reviews/Reviews';
import { Services } from '@/components/HomePage/Services/Services';
import { Personel } from '@/components/HomePage/Personel/Personel';
import { Plug } from '@/components/HomePage/Plug/Plug';
import { Contacts } from '@/components/HomePage/Contacts/Contacts';
import MarqueeLine from '@/components/shared/marquee/MarqueeLine';
import { getDefaultMetadata } from '@/utils/getDefaultMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = getDefaultMetadata({
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Personel />
      <MarqueeLine
        className="h-[38px] lg:h-[76px] text-[15.2317px] lg:text-[30.46px] leading-[19px] lg:leading-[30px]"
        variant="light-green"
      />
      <Reviews />
      <Plug />
      <Contacts />
    </>
  );
}
