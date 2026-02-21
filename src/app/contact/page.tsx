"use client"

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/context/LanguageContext';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">{t('contact.title')}</h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">{t('contact.address')}</h4>
                <p className="text-muted-foreground">Cairo, Egypt</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Phone</h4>
                <a href="tel:+201065236963" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  +20 106 523 6963
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Email</h4>
                <div className="space-y-1">
                  <a href="mailto:cveeez@cveeez.online" target="_blank" rel="noopener noreferrer" className="text-muted-foreground block hover:text-primary transition-colors">
                    cveeez@cveeez.online
                  </a>
                  <a href="mailto:support@cveeez.online" target="_blank" rel="noopener noreferrer" className="text-muted-foreground block hover:text-primary transition-colors">
                    support@cveeez.online
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Support</h4>
                <p className="text-muted-foreground">{t('contact.support')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
