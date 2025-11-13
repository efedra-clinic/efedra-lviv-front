export interface PriceService {
  title: string;
  price: string;
  duration?: string;
}

export interface PriceSubcategory {
  title: string;
  services?: PriceService[];
}

export interface PriceCategory {
  title: string;
  subcategories: PriceSubcategory[];
  colorScheme: 'light-green' | 'black' | 'green';
}
