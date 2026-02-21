
"use client"

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success / تم بنجاح",
      description: "Message sent! We'll get back to you soon. / تم إرسال رسالتك، سنرد عليك قريباً.",
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{t('contact.title')}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">{t('contact.address')}</h4>
                  <p className="text-muted-foreground text-sm">Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <a href="tel:+201065236963" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +20 106 523 6963
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a href="mailto:cveeez@cveeez.online" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm block hover:text-primary">
                    cveeez@cveeez.online
                  </a>
                  <a href="mailto:support@cveeez.online" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary">
                    support@cveeez.online
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Support</h4>
                  <p className="text-muted-foreground text-sm">{t('contact.support')}</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-border shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.form_name')}</Label>
                  <Input id="name" placeholder="John Doe / محمد أحمد" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form_email')}</Label>
                  <Input id="email" type="email" placeholder="email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form_message')}</Label>
                  <Textarea id="message" rows={6} placeholder="How can we help? / كيف يمكننا مساعدتك؟" required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  {t('contact.form_submit')}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
