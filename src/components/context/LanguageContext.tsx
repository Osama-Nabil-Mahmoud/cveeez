"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { translations } from '@/lib/translations';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      if (result[k]) {
        result = result[k];
      } else {
        return key;
      }
    }
    return typeof result === 'string' ? result : key;
  };

  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      <div className={isRtl ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};