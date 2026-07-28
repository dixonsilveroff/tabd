'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { PRODUCTS, type ProductCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const CATEGORIES: { label: string; value: ProductCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Soap Making', value: 'soap' },
  { label: 'Crocheting', value: 'crochet' },
  { label: 'Bead Making', value: 'beads' },
  { label: 'Millinery', value: 'millinery' },
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory | null) || 'all';

  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('category') as ProductCategory | null;
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sellerName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ── Page Header ────────────────────────────────── */}
      <section className="w-full py-14" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="label mb-3" style={{ color: '#FFA300' }}>
            All Products
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(48px, 8vw, 80px)',
              color: '#FFFFFF',
              lineHeight: 0.92,
            }}
          >
            SHOP THE MARKET
          </h1>
        </div>
      </section>

      {/* ── Filters ─────────────────────────────────────── */}
      <section
        className="w-full sticky top-16 z-40"
        style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #0A0A0A' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center gap-0">
            {/* Category tabs */}
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className="px-6 py-4 font-inter font-medium text-sm uppercase transition-colors"
                style={{
                  letterSpacing: '2px',
                  fontSize: 12,
                  backgroundColor: activeCategory === cat.value ? '#0A0A0A' : 'transparent',
                  color: activeCategory === cat.value ? '#FFFFFF' : '#0A0A0A',
                  borderRight: '1px solid rgba(10,10,10,0.15)',
                  borderTop: 'none',
                  borderBottom: 'none',
                  borderLeft: 'none',
                  cursor: 'pointer',
                }}
              >
                {cat.label}
              </button>
            ))}

            {/* Search */}
            <div
              className="flex items-center gap-2 ml-auto"
              style={{ borderLeft: '1px solid rgba(10,10,10,0.15)', paddingLeft: 16 }}
            >
              <Search size={14} color="#0A0A0A" />
              <input
                type="text"
                placeholder="Search products or sellers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-inter bg-transparent outline-none text-sm"
                style={{ fontSize: 13, color: '#0A0A0A', minWidth: 200 }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')}>
                  <X size={14} color="#0A0A0A" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────────── */}
      <section className="w-full py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Result count */}
          <p className="label mb-8" style={{ color: 'rgba(10,10,10,0.4)', fontSize: 11 }}>
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 40,
                  color: '#0A0A0A',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                No Products Found
              </h2>
              <p
                className="font-inter"
                style={{ color: 'rgba(10,10,10,0.5)', fontSize: 16 }}
              >
                Try a different category or clear your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
