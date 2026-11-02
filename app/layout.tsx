import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';
import { STORE_CONFIG } from '@/data/mockData_Dummy';

// Serif font for editorial headlines and logo
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Sans font for body text, tags, and buttons
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${STORE_CONFIG.brandName} | ${STORE_CONFIG.brandTagline}`,
  description: `Explore ${STORE_CONFIG.brandName} - ${STORE_CONFIG.seoRegionPhrase}. Exclusive bridal couture, handcrafted lehengas, pure Banarasi silk sarees, and festive silhouettes.`,
  keywords: [
    'Boutique',
    'Haute Couture',
    'Bridal Lehengas',
    'Banarasi Sarees',
    'Custom Tailoring',
    'Festive Ethnic Wear',
    STORE_CONFIG.cityName,
    STORE_CONFIG.seoRegionPhrase,
  ],
  authors: [{ name: STORE_CONFIG.brandName }],
  openGraph: {
    title: `${STORE_CONFIG.brandName} | Luxury Fashion Lookbook`,
    description: `Handcrafted silhouettes, pure heritage fabrics, and bespoke couture in ${STORE_CONFIG.cityName}. Chat directly with our private concierge via WhatsApp.`,
    url: 'https://aura-atelier.com',
    siteName: STORE_CONFIG.brandName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: `${STORE_CONFIG.brandName} Luxury Couture Collection`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${STORE_CONFIG.brandName} | Designer Boutique`,
    description: `Discover bespoke haute couture and handcrafted artisanal collections.`,
    images: ['https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${cormorant.variable} ${outfit.variable} font-sans bg-luxury-950 text-luxury-100 antialiased selection:bg-gold-500 selection:text-luxury-950`}>
        {children}
      </body>
    </html>
  );
}
