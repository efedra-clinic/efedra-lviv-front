export type CurrencyType = 'UAH' | 'USD' | 'EUR' | 'UNKNOWN';

export interface NormalizedPrice {
  value: string;
  currency: CurrencyType;
  original: string;
}

/**
 * Normalizes price strings to a standard format
 * - Removes currency symbols (грн, uah, $, €, USD, EUR) but preserves non-currency uses
 * - Standardizes whitespace separators for 4-digit prices
 * - Handles price ranges (e.g., "100-200")
 * - Standardizes currency symbol positions
 */
export function normalizePrice(price: string): NormalizedPrice {
  if (!price || typeof price !== 'string') {
    return { value: price, currency: 'UNKNOWN', original: price };
  }

  let normalized = price.trim();
  const original = normalized;

  const currency = detectCurrency(normalized);

  const formatNumber = (numStr: string): string => {
    const clean = numStr.replace(/\s/g, '');
    if (clean.length < 4) return clean;
    return clean.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  normalized = normalized.replace(/\b(USD|EUR|usd|eur)\b/gi, '');

  normalized = normalized.replace(/\$\s*/g, '');
  normalized = normalized.replace(/\s*€/g, '');

  normalized = normalized.replace(/₴\s*/g, '');
  normalized = normalized.replace(/\s*₴/g, '');

  normalized = normalized.replace(
    /([\d\s]+)\s*(грн|uah|UAH)(?![\\\/])/gi,
    (match, p1) => {
      return p1.trim();
    }
  );

  normalized = normalized.replace(
    /\b(грн|uah|UAH)(?![\\\/])\s*([\d\s]+)/gi,
    '$2'
  );

  normalized = normalized.replace(/\b(грн|uah|UAH)(?![\\\/])\b/gi, '');

  normalized = normalized.replace(/\s+/g, ' ').trim();

  normalized = normalized.replace(
    /(\d+(?:\s+\d+)*)\s*-\s*(\d+(?:\s+\d+)*)/g,
    (match, p1, p2) => {
      return `${formatNumber(p1)}-${formatNumber(p2)}`;
    }
  );

  normalized = normalized.replace(
    /(\d+(?:\s+\d+)*)/g,
    (match, p1, offset, string) => {
      const before = string.substring(Math.max(0, offset - 1), offset);
      const after = string.substring(
        offset + match.length,
        Math.min(string.length, offset + match.length + 1)
      );

      if (before === '-' || after === '-') {
        return match;
      }

      return formatNumber(match);
    }
  );

  normalized = normalized.replace(/\s+/g, ' ').trim();

  return {
    value: normalized,
    currency,
    original,
  };
}

/**
 * Detects the currency type from a price string
 */
function detectCurrency(price: string): CurrencyType {
  const lowerPrice = price.toLowerCase();

  if (/\$|usd/.test(lowerPrice)) {
    return 'USD';
  }

  if (/€|eur/.test(lowerPrice)) {
    return 'EUR';
  }

  if (/грн|uah|₴/.test(price)) {
    return 'UAH';
  }

  return 'UAH';
}

/**
 * Analyzes currency distribution in a list of services
 * Returns the dominant currency and whether to show currency in header
 */
export function analyzeCurrencyDistribution(
  services: Array<{ price: string }>
): {
  dominantCurrency: CurrencyType;
  shouldShowCurrencyInHeader: boolean;
  uahCount: number;
  nonUahCount: number;
} {
  const currencyCounts: Record<CurrencyType, number> = {
    UAH: 0,
    USD: 0,
    EUR: 0,
    UNKNOWN: 0,
  };

  services.forEach(service => {
    if (service?.price) {
      const normalized = normalizePrice(service.price);
      currencyCounts[normalized.currency] =
        (currencyCounts[normalized.currency] || 0) + 1;
    }
  });

  const total = services.length;
  const uahCount = currencyCounts.UAH;
  const nonUahCount = currencyCounts.USD + currencyCounts.EUR;

  const shouldShowCurrencyInHeader = nonUahCount / total < 0.3;

  let dominantCurrency: CurrencyType = 'UAH';
  let maxCount = currencyCounts.UAH;

  if (currencyCounts.USD > maxCount) {
    dominantCurrency = 'USD';
    maxCount = currencyCounts.USD;
  }
  if (currencyCounts.EUR > maxCount) {
    dominantCurrency = 'EUR';
    maxCount = currencyCounts.EUR;
  }

  return {
    dominantCurrency,
    shouldShowCurrencyInHeader,
    uahCount,
    nonUahCount,
  };
}
