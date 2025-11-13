import { PriceService } from '@/types/price';
import { twMerge } from 'tailwind-merge';
import {
  normalizePrice,
  analyzeCurrencyDistribution,
} from '@/utils/normalizePrice';

interface ServicePriceListProps {
  services: PriceService[];
  colorScheme: 'light-green' | 'black' | 'green';
  isOpen: boolean;
}

export default function ServicePriceList({
  services,
  colorScheme,
  isOpen,
}: ServicePriceListProps) {
  const openVariant = {
    open: 'border border-t-0 rounded-b-[32px] rounded-t-none mt-0',
    close: 'border rounded-[32px] mt-[6px]',
  };

  const hasDuration = services.some(
    service => service?.duration && service.duration.trim() !== ''
  );

  const normalizedServices = services.map(service => ({
    ...service,
    normalizedPrice: service.price ? normalizePrice(service.price) : null,
  }));

  const currencyAnalysis = analyzeCurrencyDistribution(services);
  const showCurrencyInHeader = currencyAnalysis.shouldShowCurrencyInHeader;

  return (
    <>
      <div
        className={twMerge(
          `hidden md:grid ${
            hasDuration
              ? 'md:grid-cols-[2.5fr_1.75fr_0.7fr] lg:grid-cols-[2.5fr_1.75fr_0.5fr]'
              : 'md:grid-cols-[2.5fr_1fr] lg:grid-cols-[2.5fr_1fr]'
          } border-${colorScheme} `,
          openVariant[isOpen ? 'open' : 'close'] as string
        )}
      >
        <div className="pl-[46px] py-[18px] uppercase text-[12px] md:text-[14px] text-left">
          Назва послуги
        </div>
        <div className="py-[18px] uppercase text-[12px] md:text-[14px] text-center">
          {showCurrencyInHeader ? 'Вартість (грн)' : 'Вартість'}
        </div>
        {hasDuration && (
          <div className="pr-[27px] py-[18px] uppercase text-[12px] md:text-[14px] text-center">
            Час (хв)
          </div>
        )}

        {normalizedServices
          .filter(service => service?.title)
          .map((service, idx) => {
            const normalized = service.normalizedPrice;
            let displayPrice: string | null = null;

            if (normalized) {
              let price = normalized.value;
              if (showCurrencyInHeader && normalized.currency === 'UAH') {
                price = price.replace(/\s*\bгрн\b\s*(?![\\\/])/gi, ' ').trim();
                price = price.replace(/\s+/g, ' ').trim();
              }

              if (normalized.currency === 'USD') {
                displayPrice = `$${price}`;
              } else if (normalized.currency === 'EUR') {
                displayPrice = `${price} €`;
              } else if (
                normalized.currency === 'UAH' &&
                !showCurrencyInHeader
              ) {
                displayPrice = `${price} грн`;
              } else {
                displayPrice = price;
              }
            }

            return (
              <div key={idx} className={`contents`}>
                <div
                  key={`title-${idx}`}
                  className={twMerge(
                    `flex items-center pl-[46px] py-3 text-[12px] md:text-[14px] leading-[150%] text-left border-t-[0.5px] border-${colorScheme}`
                  )}
                >
                  {service.title}
                </div>
                <div
                  key={`price-${idx}`}
                  className={twMerge(
                    `flex items-center justify-center py-3 text-[12px] md:text-[14px] text-center border-t-[0.5px] border-${colorScheme}`
                  )}
                >
                  {displayPrice || <span>—</span>}
                </div>
                {hasDuration && (
                  <div
                    key={`duration-${idx}`}
                    className={twMerge(`flex items-center justify-center pr-[27px] py-3 text-[12px] md:text-[14px] text-center border-t-[0.5px] border-${colorScheme}
                `)}
                  >
                    {service.duration || <span>—</span>}
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <div
        className={twMerge(
          `md:hidden mt-[6px] border-${colorScheme} overflow-hidden`,
          openVariant[isOpen ? 'open' : 'close'] as string
        )}
      >
        {normalizedServices
          .filter(service => service?.title)
          .map((service, idx) => {
            const normalized = service.normalizedPrice;
            let displayPrice: string | null = null;

            if (normalized) {
              let price = normalized.value;

              if (showCurrencyInHeader && normalized.currency === 'UAH') {
                price = price.replace(/\s*\bгрн\b\s*(?![\\\/])/gi, ' ').trim();
                price = price.replace(/\s+/g, ' ').trim();
              }

              if (normalized.currency === 'USD') {
                displayPrice = `$${price}`;
              } else if (normalized.currency === 'EUR') {
                displayPrice = `${price} €`;
              } else if (
                normalized.currency === 'UAH' &&
                !showCurrencyInHeader
              ) {
                displayPrice = `${price} грн`;
              } else {
                displayPrice = price;
              }
            }

            return (
              <div
                key={idx}
                className={`flex flex-col gap-2 px-3 py-4 text-sm border-t-[0.5px] border-${colorScheme} ${idx === 0 ? 'border-t-[0px]' : ''}`}
              >
                <p className="text-[12px] leading-[133%]">{service.title}</p>
                <div className="flex justify-between text-[12px] leading-[133%]">
                  <span>{displayPrice || '—'}</span>
                  {hasDuration && (
                    <span>
                      {service.duration ? `${service.duration} хв` : '—'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
