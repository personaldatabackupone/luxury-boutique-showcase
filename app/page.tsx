import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CollectionGrid from '@/components/CollectionGrid';
import StoreInfo from '@/components/StoreInfo';
import Footer from '@/components/Footer';
import { STORE_CONFIG } from '@/data/mockData_Dummy';
import { getGeneralWhatsAppUrl } from '@/utils/whatsapp';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  const conciergeUrl = getGeneralWhatsAppUrl({
    phoneNumber: STORE_CONFIG.contact.whatsappNumber,
    brandName: STORE_CONFIG.brandName,
  });

  return (
    <main id="top" className="min-h-screen bg-luxury-950 text-luxury-100 flex flex-col selection:bg-gold-500 selection:text-luxury-950">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Magazine Editorial Hero Banner */}
      <Hero />

      {/* Filterable Lookbook Portfolio */}
      <CollectionGrid />

      {/* USPs, Craftsmanship & Atelier Location Preview */}
      <StoreInfo />

      {/* SEO-Optimized Footer */}
      <Footer />

      {/* Floating Concierge WhatsApp Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={conciergeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Concierge"
          className="group flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-400/30"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden md:inline text-xs uppercase tracking-wider font-medium pr-1">
            Chat with Concierge
          </span>
        </a>
      </div>
    </main>
  );
}
