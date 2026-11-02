import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from '@/data/mockData_Dummy';
import { getGeneralWhatsAppUrl } from '@/utils/whatsapp';

export default function Hero() {
  const conciergeUrl = getGeneralWhatsAppUrl({
    phoneNumber: STORE_CONFIG.contact.whatsappNumber,
    brandName: STORE_CONFIG.brandName,
  });

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-luxury-950">
      {/* Background Imagery */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=2000&auto=format&fit=crop"
          alt={`${STORE_CONFIG.brandName} Haute Couture Banner`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/70 to-luxury-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-luxury-900/60 backdrop-blur-md mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-widest text-gold-300">
            Winter Festive & Bridal Edition 2026/27
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-luxury-50 font-light leading-[1.08] mb-6">
          Woven in Poetry. <br />
          <span className="italic font-normal text-gold-400">
            Draped in Royalty.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-luxury-200/90 font-light leading-relaxed mb-10 tracking-wide">
          Handcrafted heritage silks, bespoke bridal heirlooms, and contemporary ethnic silhouettes tailored exclusively to your measurements in {STORE_CONFIG.cityName}.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="#collection"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-luxury-950 font-medium text-xs uppercase tracking-luxury transition-all duration-300 shadow-luxury-glow"
          >
            <span>Explore Lookbook</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={conciergeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-luxury-200/30 hover:border-gold-400 bg-luxury-900/40 backdrop-blur-md hover:bg-luxury-900 text-luxury-100 hover:text-gold-300 font-medium text-xs uppercase tracking-luxury transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-gold-400" />
            <span>Book Private Fitting</span>
          </a>
        </div>

        {/* Subtle Editorial Badges */}
        <div className="mt-16 pt-8 border-t border-luxury-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="font-serif text-xl sm:text-2xl text-gold-400">100% Pure</p>
            <p className="text-[10px] uppercase tracking-widest text-luxury-400 mt-1">Authentic Weaves</p>
          </div>
          <div>
            <p className="font-serif text-xl sm:text-2xl text-gold-400">Bespoke</p>
            <p className="text-[10px] uppercase tracking-widest text-luxury-400 mt-1">Tailored Silhouette</p>
          </div>
          <div>
            <p className="font-serif text-xl sm:text-2xl text-gold-400">Worldwide</p>
            <p className="text-[10px] uppercase tracking-widest text-luxury-400 mt-1">Doorstep Courier</p>
          </div>
          <div>
            <p className="font-serif text-xl sm:text-2xl text-gold-400">Live Video</p>
            <p className="text-[10px] uppercase tracking-widest text-luxury-400 mt-1">Virtual Walkthrough</p>
          </div>
        </div>
      </div>
    </section>
  );
}