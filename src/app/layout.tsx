import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'TABD Market — Abilities Beyond Disabilities',
  description:
    'An ecommerce platform where persons with disabilities in Ikwo LGA, Ebonyi State market handcrafted soaps, crocheted items, beadwork, and millinery. A YLDP 2026 Community Change Project.',
  keywords: [
    'TABD', 'Abilities Beyond Disabilities', 'disability', 'handicraft', 'ecommerce',
    'Ebonyi', 'Ikwo', 'YLDP 2026', 'soap', 'crochet', 'beads', 'millinery', 'Nigeria',
  ],
  authors: [{ name: 'Team Abilities Beyond Disabilities' }],
  openGraph: {
    title: 'TABD Market — Abilities Beyond Disabilities',
    description: 'Handcrafted products made by persons with disabilities in Ikwo LGA, Ebonyi State.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
