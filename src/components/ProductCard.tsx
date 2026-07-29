import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const categoryLabel: Record<string, string> = {
    soap: 'Soap Making',
    crochet: 'Crocheting',
    beads: 'Bead Making',
    millinery: 'Millinery',
  };

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border-main)] shadow-md rounded-none hover:-translate-y-1.5 hover:shadow-xl transition-all duration-250"
      style={{ borderRadius: 0 }}
    >
      {/* Image area */}
      <div className="relative h-60 bg-[var(--bg-subtle)] overflow-hidden rounded-none flex items-center justify-center">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover rounded-none transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
        {/* Category fallback — shown via CSS when image is absent or errors */}
        <span
          className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium uppercase tracking-widest select-none pointer-events-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
          aria-hidden="true"
        >
          {categoryLabel[product.category]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-1">
        {/* Category label */}
        <span
          className="uppercase"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '3px',
            color: 'var(--yellow)',
          }}
        >
          {categoryLabel[product.category]}
        </span>

        {/* Product name */}
        <h3
          className="uppercase leading-tight"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            color: 'var(--text-main)',
            lineHeight: 1.1,
          }}
        >
          {product.name}
        </h3>

        {/* Seller name */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'var(--text-muted)',
          }}
        >
          {product.sellerName}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price */}
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: '24px',
            color: 'var(--blue)',
          }}
        >
          ₦{product.price.toLocaleString('en-NG')}
        </p>
      </div>

      {/* CTA */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-[var(--border-main)] group-hover:bg-[var(--blue)] transition-colors duration-200 rounded-none mt-auto"
        style={{ borderRadius: 0 }}
      >
        <span
          className="uppercase"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '13px',
            letterSpacing: '2px',
            color: 'var(--bg-main)',
          }}
        >
          View Product
        </span>
        <ArrowUpRight
          size={16}
          style={{ color: 'var(--bg-main)' }}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}
