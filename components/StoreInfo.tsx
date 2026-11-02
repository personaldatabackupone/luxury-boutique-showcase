import React from 'react';
import { Sparkles, Scissors, Gem, ShieldCheck, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { STORE_CONFIG } from '@/data/mockData_Dummy';

const iconMap = {
  Sparkles: Sparkles,
  Scissors: Scissors,
  Gem: Gem,
  ShieldCheck: ShieldCheck,
};

export default function StoreInfo() {
  return (
    <section id="atelier" className="py-24 bg-luxury-900/40 relative overflow-hidden">
      {/* Decorative subtle ambient circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* USPs Section */}
        <div id="craftsmanship" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-luxury text-gold-500 font-semibold mb-2">
              The Aura Standards
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-luxury-50 tracking-tight">
              Artisanal Dedication
            </h2>
            <div className="w-16 h-px bg-gold-500/60 mx-auto mt-4 mb-4" />
            <p className="text-sm text-luxury-400 font-light">
              We preserve generational textile arts, translating centuries of craft into modern heirloom couture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STORE_CONFIG.usps.map((usp, index) => {
              const IconComponent = iconMap[usp.icon];
              return (
                <div
                  key={index}
                  className="bg-luxury-950/60 border border-luxury-800/80 p-8 rounded-lg text-center hover:border-gold-500/50 transition-colors duration-500 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full border border-gold-500/30 bg-gold-500/10 flex items-center justify-center text-gold-400 mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-luxury-50 font-normal mb-2">
                    {usp.title}
                  </h3>
                  <p className="text-xs text-luxury-400 font-light leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Physical Atelier Location, Hours & Contact Preview */}
        <div id="contact" className="bg-luxury-950 border border-luxury-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Atelier Info Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-luxury text-gold-500 font-semibold mb-2">
                  Flagship Boutique
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-luxury-50 font-light mb-6">
                  Visit The Experience Studio
                </h3>
                <p className="text-xs sm:text-sm text-luxury-300 font-light leading-relaxed mb-8">
                  Step into our private sanctuary to touch the weaves, feel the velvet fall, and collaborate directly with our master drapers and embroidery artists.
                </p>

                <div className="space-y-6 text-xs text-luxury-300">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-luxury-100 font-medium">{STORE_CONFIG.contact.address.line1}</p>
                      <p className="text-luxury-400">{STORE_CONFIG.contact.address.line2}</p>
                      <p className="text-luxury-400">
                        {STORE_CONFIG.contact.address.city}, {STORE_CONFIG.contact.address.state} - {STORE_CONFIG.contact.address.postalCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                    <div>
                      {STORE_CONFIG.timings.map((t, idx) => (
                        <p key={idx} className="text-luxury-300">
                          <span className="text-luxury-400 font-light">{t.days}: </span>
                          <span className="text-luxury-100 font-medium">{t.hours}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                    <p className="text-luxury-100 font-medium">{STORE_CONFIG.contact.displayPhone}</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                    <p className="text-luxury-100 font-medium">{STORE_CONFIG.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-luxury-800">
                <a
                  href={STORE_CONFIG.contact.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 font-medium transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Location in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Atelier Visual Editorial Map/Showcase Image */}
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-full bg-luxury-900 border-t lg:border-t-0 lg:border-l border-luxury-800">
              <iframe
                title="Store Location Map Preview"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.46736203522!2d77.214488!3d28.568478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25ca830aefd%3A0xc3b839aa6ba16bf5!2sSouth%20Extension%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[360px] border-0 filter grayscale invert contrast-125 opacity-75 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}