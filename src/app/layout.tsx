import type {Metadata} from 'next';
import './globals.css';
import {LanguageProvider} from '@/components/context/LanguageContext';
import {ThemeProvider} from '@/components/context/ThemeContext';
import {Toaster} from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'CVEEEZ - Your Career Partner | شريكك المهني',
  description: 'CVEEEZ is your trusted platform for career development, AI CV building, and job searching.',
  openGraph: {
    title: 'CVEEEZ - Your Career Partner',
    description: 'AI CV Builder, Job Board, and Professional Services.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-primary selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}