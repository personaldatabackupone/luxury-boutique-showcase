'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS, STORE_CONFIG } from '@/data/mockData_Dummy';
import { ProductCategory, Product } from '@/types';
import { getProductWhatsAppUrl } from '@/utils/whatsapp';

export default function CollectionGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="collection" className="py-24 bg-luxury-950 border-t border-luxury-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-luxury text-gold-500 font-semibold mb-3">
            Curated Couture
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-luxury-50 tracking-tight">
            The Lookbook Portfolio
          </h2>
          <div className="w-16 h-px bg-gold-500/60 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-luxury-400 font-light">
            Every garment is a signature heirloom created in limited editions. Select any creation to check availability or customize colors and sizing directly on WhatsApp.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${isActive
                    ? 'bg-gold-500 text-luxury-950 font-semibold shadow-luxury-glow'
                    : 'bg-luxury-900/70 border border-luxury-800 text-luxury-300 hover:border-gold-500/50 hover:text-gold-300'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 sm:gap-8">
          {filteredProducts.map((product: Product) => {
            const productWhatsAppUrl = getProductWhatsAppUrl({
              phoneNumber: STORE_CONFIG.contact.whatsappNumber,
              productName: product.title,
              sku: product.sku,
              category: product.category,
              price: product.price.displayPrice,
            });

            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-luxury-900/30 rounded-lg overflow-hidden border border-luxury-800/60 hover:border-gold-500/50 transition-all duration-500 hover:shadow-luxury-subtle"
              >
                {/* Image Container with Zoom & Badge */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-luxury-900" style={{ position: 'relative' }}>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="zoom-image object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.isNewArrival && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-500/90 text-luxury-950 font-semibold text-[10px] uppercase tracking-wider backdrop-blur-md">
                        <Sparkles className="w-2.5 h-2.5" />
                        New Arrival
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-widest bg-luxury-950/80 border border-luxury-700/60 text-luxury-300 backdrop-blur-sm">
                      {product.sku}
                    </span>
                  </div>
                </div>

                {/* Card Editorial Details */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-luxury-900/40">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gold-400/90 font-medium">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-lg text-luxury-50 font-normal mt-1 mb-1 line-clamp-1 group-hover:text-gold-300 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-luxury-400 font-light line-clamp-2 leading-relaxed mb-3">
                      {product.tagline}
                    </p>

                    {/* Fabric details pill */}
                    <div className="text-[11px] text-luxury-300/80 border-t border-luxury-800/80 pt-2.5 pb-1">
                      <span className="text-luxury-500 uppercase tracking-widest text-[9px] block">Fabric & Craft</span>
                      <p className="truncate font-light text-luxury-300">{product.fabric}</p>
                    </div>
                  </div>

                  {/* Price Tag & WhatsApp Action */}
                  <div className="mt-4 pt-3 border-t border-luxury-800/80 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-luxury-400 block">Price</span>
                      <span className="font-serif text-base font-semibold text-gold-300">
                        {product.price.displayPrice}
                      </span>
                    </div>

                    <a
                      href={productWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-luxury-950 text-[11px] uppercase tracking-wider font-medium transition-all duration-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}