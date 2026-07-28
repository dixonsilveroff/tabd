import type { Metadata } from 'next';
import { Suspense } from 'react';
import ShopClient from './ShopClient';

export const metadata: Metadata = {
  title: 'Shop — TABD Market',
  description:
    'Browse handcrafted soaps, crocheted items, beadwork, and millinery made by persons with disabilities in Ikwo LGA, Ebonyi State.',
};

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 32,
            color: '#0A0A0A',
            textTransform: 'uppercase',
          }}
        >
          Loading…
        </p>
      </div>
    }>
      <ShopClient />
    </Suspense>
  );
}
