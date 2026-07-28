'use client';

import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCartStore } from '@/lib/cart';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleClick = () => {
    if (added || !product.inStock) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (!product.inStock) {
    return (
      <button
        disabled
        className="w-full flex items-center justify-center gap-3 py-4 rounded-none cursor-not-allowed"
        style={{
          borderRadius: 0,
          backgroundColor: '#9CA3AF', // gray-400
          color: '#0A0A0A',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: '18px',
          letterSpacing: '1px',
        }}
      >
        OUT OF STOCK
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-center gap-3 py-4 rounded-none transition-colors duration-200"
      style={{
        borderRadius: 0,
        backgroundColor: added ? '#FFA300' : '#0047FF',
        color: added ? '#0A0A0A' : '#FFFFFF',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 900,
        fontSize: '18px',
        letterSpacing: '1px',
      }}
      onMouseEnter={(e) => {
        if (!added) {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0A0A0A';
        }
      }}
      onMouseLeave={(e) => {
        if (!added) {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0047FF';
        }
      }}
    >
      {added ? (
        <>
          <Check size={20} />
          <span className="uppercase">Added to Cart</span>
        </>
      ) : (
        <>
          <ShoppingBag size={20} />
          <span className="uppercase">Add to Cart</span>
        </>
      )}
    </button>
  );
}
