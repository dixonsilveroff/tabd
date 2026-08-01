'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategory = (searchParams.get('category') as ProductCategory | 'all' | null) || 'all';

  const handleCategoryChange = (cat: ProductCategory | 'all') => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    router.push(`/shop?${params.toString()}`);
  };

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
      <section className="w-full py-14 transition-colors duration-200" style={{ backgroundColor: 'var(--bg-hero)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="label mb-3" style={{ color: 'var(--yellow)' }}>
            All Products
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(48px, 8vw, 80px)',
              color: 'var(--text-hero)',
              lineHeight: 0.92,
            }}
          >
            SHOP THE MARKET
          </h1>
        </div>
      </section>

      {/* ── Filters ─────────────────────────────────────── */}
      <section
        className="w-full sticky top-16 z-40 transition-colors duration-200"
        style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-main)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
            {/* Category tabs (Horizontal scrollable on mobile) */}
            <div className="flex items-center gap-0 overflow-x-auto scrollbar-none flex-nowrap shrink-0 border-b md:border-b-0" style={{ borderColor: 'var(--border-subtle)' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(cat.value)}
                  className="px-5 py-4 font-inter font-medium text-xs md:text-sm uppercase transition-all duration-150 shrink-0 hover:bg-[var(--bg-subtle)]"
                  style={{
                    letterSpacing: '1.5px',
                    backgroundColor: activeCategory === cat.value ? 'var(--border-main)' : 'transparent',
                    color: activeCategory === cat.value ? 'var(--bg-main)' : 'var(--text-main)',
                    borderRight: '1px solid var(--border-subtle)',
                    borderTop: 'none',
                    borderBottom: 'none',
                    borderLeft: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div
              className="flex items-center gap-2 py-3 md:py-0 border-t md:border-t-0 md:border-l"
              style={{ borderColor: 'var(--border-subtle)', paddingLeft: 16 }}
            >
              <Search size={14} style={{ color: 'var(--text-main)' }} />
              <input
                type="text"
                placeholder="Search products or sellers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-inter bg-transparent outline-none text-sm transition-all duration-150 focus:w-[220px]"
                style={{ fontSize: 13, color: 'var(--text-main)', minWidth: 180 }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer' }} className="hover:scale-110 transition-transform duration-100">
                  <X size={14} style={{ color: 'var(--text-main)' }} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────────── */}
      <section className="w-full py-12 transition-colors duration-200" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Result count */}
          <p className="label mb-8" style={{ color: 'var(--text-muted)', fontSize: 11 }}>
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 40,
                  color: 'var(--text-main)',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                No Products Found
              </h2>
              <p
                className="font-inter"
                style={{ color: 'var(--text-muted)', fontSize: 16 }}
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
