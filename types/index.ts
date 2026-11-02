export type ProductCategory =
  | 'All'
  | 'Festive Wear'
  | 'Designer Sarees'
  | 'Casual Kurtis'
  | 'Bridal Couture';

export interface Product {
  id: string;
  sku: string;
  title: string;
  category: Exclude<ProductCategory, 'All'>;
  tagline: string;
  price: {
    amount: number;
    currency: string;
    displayPrice: string;
  };
  fabric: string;
  craftsmanship: string;
  imageUrl: string;
  additionalImages?: string[];
  isNewArrival?: boolean;
  isFeatured?: boolean;
}

export interface StoreTiming {
  days: string;
  hours: string;
}

export interface StoreUSP {
  icon: 'Sparkles' | 'Scissors' | 'Gem' | 'ShieldCheck';
  title: string;
  description: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  pinterest?: string;
  youtube?: string;
}

export interface StoreConfig {
  brandName: string;
  brandTagline: string;
  cityName: string;
  seoRegionPhrase: string; // e.g., "Best Designer Boutique in South Extension, New Delhi"
  contact: {
    whatsappNumber: string; // Format: country code + number without '+' or dashes, e.g. "919876543210"
    displayPhone: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      postalCode: string;
      state: string;
      googleMapsUrl: string;
    };
  };
  timings: StoreTiming[];
  socials: SocialLinks;
  usps: StoreUSP[];
}