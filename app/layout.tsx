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
      <React.StrictMode>
        <body className="dark:bg-stone-900">
          <Header />
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Analytics />
          </ThemeProvider>
          <Footer />
        </body>
      </React.StrictMode>
    </html>
  );
}
