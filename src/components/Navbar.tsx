"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/context/LanguageContext';
import { useTheme } from '@/components/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { t, toggleLanguage } = useLanguage();
  const { toggleTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/', aria: "Go to homepage" },
    { name: t('nav.services'), href: '/#services', aria: "View our services" },
    { name: t('nav.about'), href: '/#about', aria: "Learn about CVeeeZ" },
    { name: t('nav.team'), href: '/#team', aria: "Meet our team" },
    { name: t('nav.apps'), href: '/#apps', aria: "Download our mobile apps" },
    { name: t('nav.policies'), href: '/policies', aria: "Read our policies" },
    { name: t('nav.contact'), href: '/contact', aria: "Contact us" },
  ];

  const LogoText = ({ sizeClass = "text-[20px]" }: { sizeClass?: string }) => (
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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          dir="ltr"
          className="flex flex-row items-center group" 
          aria-label="CVEEEZ Home"
          style={{ unicodeBidi: 'isolate' }}
        >
          <LogoText />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors"
              aria-label={link.aria}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage} 
            className="rounded-full"
            aria-label="Toggle language"
          >
            <Languages className="w-5 h-5" />
          </Button>
          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90" aria-label="Start building your CV">
            <Link 
              href="https://www.cveeez.net/login?redirect=%2Fservices%2Fai-cv-builder" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('nav.buildCv')}
            </Link>
          </Button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-lg font-medium border-b pb-2"
                aria-label={link.aria}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary mt-2">
              <Link 
                href="https://www.cveeez.net/login?redirect=%2Fservices%2Fai-cv-builder" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('nav.buildCv')}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};