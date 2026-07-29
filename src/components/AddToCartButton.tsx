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
        className="w-full flex items-center justify-center gap-3 py-4 rounded-none cursor-not-allowed text-[var(--black)] bg-gray-400"
        style={{
          borderRadius: 0,
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
      className={`w-full flex items-center justify-center gap-3 py-4 rounded-none transition-all duration-200 cursor-pointer hover:scale-[1.01] ${
        added
          ? 'bg-[var(--yellow)] text-black'
          : 'bg-[var(--blue)] text-white hover:bg-[var(--border-main)] hover:text-[var(--bg-main)]'
      }`}
      style={{
        borderRadius: 0,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 900,
        fontSize: '18px',
        letterSpacing: '1px',
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
