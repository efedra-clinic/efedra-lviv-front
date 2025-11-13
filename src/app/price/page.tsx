import { Suspense } from 'react';
import PriceList from '@/components/pricePage/PriceList/PriceList';
import VerticalTitleHero from '@/components/shared/hero/VerticalTitleHero';
import Loader from '@/components/shared/loader/Loader';
import MarqueeLine from '@/components/shared/marquee/MarqueeLine';
import { allPriceCategoriesQuery } from '@/lib/queries';
import { fetchSanityDataServer } from '@/utils/fetchSanityDataServer';
import CTAFormWithBackground from '@/components/shared/cta/CTAFormWithBackground';
import { getDefaultMetadata } from '@/utils/getDefaultMetadata';
import type { Metadata } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = getDefaultMetadata({
  title:
    'Прайс-лист | Efedra Clinic - Ціни на послуги стоматології та естетичної медицини',
  description:
    'Актуальні ціни на послуги стоматології та естетичної медицини в клініці Efedra Clinic',
  url: `${SITE_URL}/price`,
});

export default async function PricePage() {
  const categories = await fetchSanityDataServer(allPriceCategoriesQuery);
  return (
    <>
      <VerticalTitleHero
        title="Прайс-лист"
        image="/images/pricePage/hero/priceMob.webp"
        imageDesktop="/images/pricePage/hero/priceDesc.webp"
      />
      <MarqueeLine variant="green" />
      <Suspense fallback={<Loader />}>
        <PriceList categories={categories} />
      </Suspense>
      <CTAFormWithBackground
        image="/images/pricePage/cosmetology.webp"
        className="pb-15 lg:pb-[130px]"
      />
    </>
  );
}
