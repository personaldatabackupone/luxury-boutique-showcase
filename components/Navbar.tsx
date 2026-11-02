'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '@/data/mockData_Dummy';
import { getGeneralWhatsAppUrl } from '@/utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const conciergeUrl = getGeneralWhatsAppUrl({
    phoneNumber: STORE_CONFIG.contact.whatsappNumber,
    brandName: STORE_CONFIG.brandName,
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-luxury-950/85 backdrop-blur-md border-b border-luxury-800/60 shadow-luxury-subtle py-3.5'
          : 'bg-gradient-to-b from-luxury-950/90 via-luxury-950/40 to-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Identity / Logo */}
          <Link href="/" className="group flex flex-col items-start focus:outline-none">
            <span className="font-serif text-2xl sm:text-3xl tracking-widest text-luxury-50 font-normal group-hover:text-gold-400 transition-colors uppercase">
              {STORE_CONFIG.brandName}
            </span>
            <span className="text-[9px] uppercase tracking-luxury text-gold-500 font-medium">
              Haute Atelier & Couture
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">
            <Link
              href="#collection"
              className="text-xs uppercase tracking-widest text-luxury-200 hover:text-gold-400 transition-colors duration-300"
            >
              Lookbook
            </Link>
            <Link
              href="#craftsmanship"
              className="text-xs uppercase tracking-widest text-luxury-200 hover:text-gold-400 transition-colors duration-300"
            >
              Craftsmanship
            </Link>
            <Link
              href="#atelier"
              className="text-xs uppercase tracking-widest text-luxury-200 hover:text-gold-400 transition-colors duration-300"
            >
              The Atelier
            </Link>
            <Link
              href="#contact"
              className="text-xs uppercase tracking-widest text-luxury-200 hover:text-gold-400 transition-colors duration-300"
            >
              Visit Us
            </Link>
          </nav>

          {/* WhatsApp Direct Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={conciergeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 overflow-hidden rounded-full border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500 transition-all duration-500 text-gold-300 hover:text-luxury-950 text-xs uppercase tracking-widest font-medium"
            >
              <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-luxury-200 hover:text-gold-400 p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-luxury-950/98 border-b border-luxury-800 px-6 pt-4 pb-8 space-y-6 animate-fade-in backdrop-blur-xl">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-luxury-100 hover:text-gold-400"
            >
              Lookbook
            </Link>
            <Link
              href="#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-luxury-100 hover:text-gold-400"
            >
              Craftsmanship
            </Link>
            <Link
              href="#atelier"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-luxury-100 hover:text-gold-400"
            >
              The Atelier
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-luxury-100 hover:text-gold-400"
            >
              Visit Us
            </Link>
          </nav>

          <a
            href={conciergeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3 rounded-full border border-gold-500/50 bg-gold-500/15 text-gold-300 text-xs uppercase tracking-widest font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With Private Concierge</span>
          </a>
        </div>
      )}
    </header>
  );
}