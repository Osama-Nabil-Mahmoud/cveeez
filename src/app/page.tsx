
"use client"

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Briefcase, 
  Users, 
  Lightbulb, 
  Layout, 
  Globe, 
  ShoppingBag, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const { t, isRtl } = useLanguage();

  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-illustration');
  const appImg = PlaceHolderImages.find(img => img.id === 'mobile-app-mockup');

  const services = [
    { icon: Rocket, title: t('services.ai_cv.name'), desc: t('services.ai_cv.desc') },
    { icon: Briefcase, title: t('services.jobs.name'), desc: t('services.jobs.desc') },
    { icon: Users, title: t('services.talent.name'), desc: t('services.talent.desc') },
    { icon: Lightbulb, title: t('services.advisor.name'), desc: t('services.advisor.desc') },
    { icon: Layout, title: t('services.templates.name'), desc: t('services.templates.desc') },
    { icon: Globe, title: t('services.translator.name'), desc: t('services.translator.desc') },
    { icon: ShoppingBag, title: t('services.store.name'), desc: t('services.store.desc') },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-background to-background/50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Zap className="w-4 h-4" />
              <span>{t('stats.satisfied')}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-full">
                <Link href="https://www.cveeez.net/login?redirect=%2Fservices%2Fai-cv-builder" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta_primary')}
                  <ArrowRight className={cn("w-4 h-4", isRtl ? "mr-2 rotate-180" : "ml-2")} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 h-12 rounded-full border-primary/20 hover:bg-primary/5">
                <Link href="https://www.cveeez.net/jobs" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta_secondary')}
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Badge variant="secondary" className="px-3 py-1 flex gap-1 items-center">
                <CheckCircle2 className="w-3 h-3" /> {t('features.ats')}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 flex gap-1 items-center">
                <CheckCircle2 className="w-3 h-3" /> {t('features.pdf')}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 flex gap-1 items-center">
                <CheckCircle2 className="w-3 h-3" /> {t('features.score')}
              </Badge>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
            {heroImg && (
              <img 
                src={heroImg.imageUrl} 
                alt={heroImg.description} 
                className="rounded-2xl shadow-2xl border border-border"
                data-ai-hint={heroImg.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground">{t('stats.users')}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground">{t('stats.cvs')}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98/100</div>
            <p className="text-muted-foreground">{t('features.score')}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">{t('services.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 overflow-hidden">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{svc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Apps CTA */}
      <section id="apps" className="py-24 px-6 lg:px-12 bg-secondary/5">
        <div className="max-w-7xl mx-auto rounded-3xl bg-secondary p-8 lg:p-16 text-white grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">{t('apps.title')}</h2>
            <p className="text-secondary-foreground text-lg">{t('apps.desc')}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white h-14 px-8">
                <Link href="https://play.google.com/store/apps/details?id=com.soforx.cveeez" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-full" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white h-14 px-8">
                <Link href="https://apps.apple.com/eg/app/cveeez/id6459511141" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-full" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            {appImg && (
              <img 
                src={appImg.imageUrl} 
                alt={appImg.description} 
                className="max-h-[500px] object-contain drop-shadow-2xl"
                data-ai-hint={appImg.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" />
              {t('policies.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-border bg-card/50 space-y-4">
              <h3 className="font-bold text-lg">{t('policies.terms')}</h3>
              <p className="text-sm text-muted-foreground">{t('policies.terms_summary')}</p>
              <Link href="/policies" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                {t('nav.policies')} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card/50 space-y-4">
              <h3 className="font-bold text-lg">{t('policies.privacy')}</h3>
              <p className="text-sm text-muted-foreground">{t('policies.privacy_summary')}</p>
              <Link href="/policies" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                {t('nav.policies')} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card/50 space-y-4">
              <h3 className="font-bold text-lg">{t('policies.refund')}</h3>
              <p className="text-sm text-muted-foreground">{t('policies.refund_summary')}</p>
              <Link href="/policies" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                {t('nav.policies')} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');
