"use client"

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/context/LanguageContext';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldAlert, FileText, RefreshCcw } from 'lucide-react';

export default function PoliciesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">{t('policies.title')}</h1>
            <p className="text-muted-foreground">{t('policies.last_update')}</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-bold">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-6 h-6 text-primary" />
                  {t('policies.terms')}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base space-y-4 pt-4">
                <p>{t('policies.terms_summary')}</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Users must be 18+ years of age.</li>
                  <li>Payment processed via Kashier portal.</li>
                  <li>Package upgrades available from dashboard.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-bold">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  {t('policies.privacy')}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base space-y-4 pt-4">
                <p>{t('policies.privacy_summary')}</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Collection of account data + IP/Cookies.</li>
                  <li>Strictly NO data selling to third parties.</li>
                  <li>GDPR compliance measures in place.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-bold">
                <div className="flex items-center gap-3">
                  <RefreshCcw className="w-6 h-6 text-primary" />
                  {t('policies.refund')}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base space-y-4 pt-4">
                <p>{t('policies.refund_summary')}</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>14-day refund policy for eligible services.</li>
                  <li>No refund for AI CV generation once process begins.</li>
                  <li>Support contact: cveeez@cveeez.online (Response in 3-5 days).</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </main>
  );
}
