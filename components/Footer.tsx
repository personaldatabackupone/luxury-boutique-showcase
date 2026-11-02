'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from '@/data/mockData_Dummy';
import { getGeneralWhatsAppUrl } from '@/utils/whatsapp';

// Clean, lightweight brand SVG icons
const InstagramIcon = () => (
  <svg
    className="w-3.5 h-3.5 fill-none stroke-current"
    viewBox="0 0 24 24"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-3.5 h-3.5 fill-none stroke-current"
    viewBox="0 0 24 24"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const conciergeUrl = getGeneralWhatsAppUrl({
    phoneNumber: STORE_CONFIG.contact.whatsappNumber,
    brandName: STORE_CONFIG.brandName,
  });

  return (
    <footer className="bg-luxury-950 border-t border-luxury-800 text-luxury-400 text-xs">
      {/* Upper Footer: Brand Statement & Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-widest text-luxury-50 font-normal uppercase block">
              {STORE_CONFIG.brandName}
            </span>
            <p className="text-luxury-300 font-light text-xs max-w-sm leading-relaxed">
              {STORE_CONFIG.brandTagline}. Crafting bespoke luxury garments that bridge eternal Indian artisanal heritage and modern silhouettes.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={STORE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-luxury-800 flex items-center justify-center text-luxury-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={STORE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-luxury-800 flex items-center justify-center text-luxury-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href={conciergeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Concierge"
                className="w-8 h-8 rounded-full border border-luxury-800 flex items-center justify-center text-luxury-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-luxury-100 font-medium uppercase tracking-widest text-[11px]">Collections</p>
            <ul className="space-y-2">
              <li><Link href="#collection" className="hover:text-gold-400 transition-colors">Bridal Couture</Link></li>
              <li><Link href="#collection" className="hover:text-gold-400 transition-colors">Heritage Banarasi</Link></li>
              <li><Link href="#collection" className="hover:text-gold-400 transition-colors">Festive Kalidars</Link></li>
              <li><Link href="#collection" className="hover:text-gold-400 transition-colors">Everyday Muslins</Link></li>
            </ul>
          </div>

          {/* Concierge & Atelier */}
          <div className="space-y-3">
            <p className="text-luxury-100 font-medium uppercase tracking-widest text-[11px]">Private Services</p>
            <ul className="space-y-2">
              <li><a href={conciergeUrl} className="hover:text-gold-400 transition-colors">Bespoke Fitting</a></li>
              <li><a href={conciergeUrl} className="hover:text-gold-400 transition-colors">Virtual Video Consultation</a></li>
              <li><a href={conciergeUrl} className="hover:text-gold-400 transition-colors">Bridal Trousseau Curation</a></li>
              <li><a href={conciergeUrl} className="hover:text-gold-400 transition-colors">Custom Color Dyeing</a></li>
            </ul>
          </div>

          {/* Boutique Visit Info */}
          <div className="space-y-3">
            <p className="text-luxury-100 font-medium uppercase tracking-widest text-[11px]">Studio Timings</p>
            <p className="text-luxury-300">Mon - Sat: 11:00 AM - 8:00 PM</p>
            <p className="text-luxury-300">Sunday: By Appointment</p>
            <p className="text-gold-400/80 font-medium pt-1">{STORE_CONFIG.contact.displayPhone}</p>
          </div>

        </div>

        {/* Local SEO Keyword Rich Statement */}
        <div className="mt-12 pt-8 border-t border-luxury-900 text-center lg:text-left">
          <p className="text-[11px] text-luxury-500 font-light leading-relaxed">
            <strong className="text-luxury-400 font-normal">{STORE_CONFIG.brandName}</strong> is recognized as the{' '}
            <span className="text-luxury-300">{STORE_CONFIG.seoRegionPhrase}</span>. Specializing in designer bridal lehengas, pure Katan silk sarees, intricate zardozi craftsmanship, hand-embroidered reception ensembles, and tailored festive silhouettes. Serving discerning clientele across {STORE_CONFIG.cityName}, throughout India, and internationally across the USA, UK, UAE, and Canada.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-luxury-900/80 bg-luxury-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-luxury-500 text-[11px]">
            © {new Date().getFullYear()} {STORE_CONFIG.brandName}. All rights reserved. Handcrafted with reverence.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-luxury-400 hover:text-gold-400 transition-colors uppercase tracking-widest text-[10px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}