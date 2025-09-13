import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// Inter ko local use karo (fonts public/fonts me daalni hongi)
const inter = localFont({
  src: [
    {
      path: '/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Areeb Traders - Professional Trading Portfolio',
  description:
    'Professional trading services with modern financial analysis and portfolio management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-950 text-white min-h-screen`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}