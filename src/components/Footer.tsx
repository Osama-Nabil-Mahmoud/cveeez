
"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/context/LanguageContext';
import { useTheme } from '@/components/context/ThemeContext';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    // Confirm logo path loading
    console.log("Resolved Footer Logo Path:", "/logo-icon.png");
  }, []);

  const LogoText = ({ sizeClass = "text-[18px]" }: { sizeClass?: string }) => (
    <div 
      dir="ltr"
      className={cn("font-bold tracking-[-0.02em] leading-none flex items-center select-none", sizeClass)}
      style={{ unicodeBidi: 'isolate' }}
    >
      <span className="text-[#C65C2B]">CV</span>
      <span className="text-[#17181F] dark:text-[#F5F5F5]">eee</span>
      <span className="text-[#136A66]">z</span>
    </div>
  );

  return (
    <footer className="bg-background border-t pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link 
              href="/" 
              dir="ltr"
              className="flex flex-row items-center gap-2 group" 
              aria-label="CVEEEZ Home"
              style={{ unicodeBidi: 'isolate' }}
            >
              <div className={cn(
                "transition-all shrink-0",
                theme === 'light' ? "bg-slate-900/5 p-1 rounded-md border border-slate-900/10" : ""
              )}>
                <img 
                  src="/logo-icon.png" 
                  alt="CVEEEZ icon" 
                  loading="lazy"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <LogoText />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/cveeez.eg/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://eg.linkedin.com/company/cveeez" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t('nav.services')}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="https://www.cveeez.net/services/ai-cv-builder" target="_blank" rel="noopener noreferrer" className="hover:text-primary">{t('services.ai_cv.name')}</Link></li>
              <li><Link href="https://www.cveeez.net/jobs" target="_blank" rel="noopener noreferrer" className="hover:text-primary">{t('services.jobs.name')}</Link></li>
              <li><Link href="#" className="hover:text-primary">{t('services.talent.name')}</Link></li>
              <li><Link href="#" className="hover:text-primary">{t('services.advisor.name')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t('nav.policies')}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/policies" className="hover:text-primary">{t('policies.terms')}</Link></li>
              <li><Link href="/policies" className="hover:text-primary">{t('policies.privacy')}</Link></li>
              <li><Link href="/policies" className="hover:text-primary">{t('policies.refund')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t('contact.title')}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+201065236963" target="_blank" rel="noopener noreferrer" className="hover:text-primary">+20 106 523 6963</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:cveeez@cveeez.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary">cveeez@cveeez.online</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-6">
            <Link href="https://www.cveeez.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">www.cveeez.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
