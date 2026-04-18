import { Newsreader } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from './providers';
import Header from './head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const newsreader = Newsreader({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={newsreader.className} suppressHydrationWarning>
      <body className="bg-slate-300 dark:bg-gradient-to-b from-customdarkblue via-slate-900 to-customdarkblue">
        <Providers>
          <Header />
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
