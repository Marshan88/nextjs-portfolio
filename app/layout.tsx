'use client';
import '../styles/globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import Header from './head';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <React.StrictMode>
        <body className="dark:bg-stone-900">
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </React.StrictMode>
      <Footer />
    </html>
  );
}
