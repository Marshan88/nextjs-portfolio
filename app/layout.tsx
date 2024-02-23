'use client';
import '../styles/globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import Header from './head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <React.StrictMode>
        <body className="bg-gray-100 dark:bg-gradient-to-b from-customdarkblue via-slate-900 to-customdarkblue">
          <Header />
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
          <Footer />
        </body>
      </React.StrictMode>
    </html>
  );
}
