import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import { IMPACT_STATS } from '@/data/team';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="w-full min-h-[90vh] flex flex-col justify-end"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 w-full">
          {/* Eyebrow */}
          <p
            className="label mb-6"
            style={{ color: '#FFA300' }}
          >
            YLDP 2026 · Ikwo LGA, Ebonyi State
          </p>

          {/* Headline */}
          <h1
            className="text-white mb-6"
            style={{ fontSize: 'clamp(56px, 10vw, 100px)', maxWidth: 900 }}
          >
            ABILITIES<br />
            BEYOND<br />
            DISABILITIES
          </h1>

          {/* Sub-text */}
          <p
            className="font-inter mb-10 max-w-xl"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 18 }}
          >
            A marketplace for handcrafted goods made by persons with disabilities
            in Ikwo LGA — soaps, crochet, beads, and millinery, each piece
            carrying a story of skill and resilience.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 font-inter font-medium text-sm uppercase tracking-widest transition-colors hover:bg-[#FFA300]"
              style={{
                backgroundColor: '#0047FF',
                color: '#FFFFFF',
                letterSpacing: '2px',
              }}
            >
              Shop Now
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 font-inter font-medium text-sm uppercase tracking-widest transition-colors"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.3)',
                letterSpacing: '2px',
              }}
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ────────────────────────────────── */}
      <section
        className="w-full border-b"
        style={{ backgroundColor: '#FFA300', borderColor: '#0A0A0A' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {IMPACT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="py-8 px-6 flex flex-col gap-1"
                style={{
                  borderRight: i < IMPACT_STATS.length - 1 ? '1px solid #0A0A0A' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: 48,
                    lineHeight: 0.9,
                    color: '#0A0A0A',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="label mt-2"
                  style={{ color: '#0A0A0A', letterSpacing: '2px', fontSize: 11 }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ──────────────────────────────── */}
      <section
        className="w-full py-16 md:py-20"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p
            className="label mb-4"
            style={{ color: '#0047FF' }}
          >
            Our Mission
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: '#FFFFFF',
              lineHeight: 0.95,
              maxWidth: 800,
            }}
          >
            EQUIPPING PERSONS WITH DISABILITIES TO GENERATE INCOME THROUGH CRAFT AND DIGITAL COMMERCE.
          </h2>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ───────────────────────────── */}
      <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-10 border-b pb-6" style={{ borderColor: '#0A0A0A' }}>
            <div>
              <p className="label mb-2" style={{ color: '#FFA300' }}>Featured Products</p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  color: '#0A0A0A',
                  lineHeight: 0.93,
                }}
              >
                MADE BY HAND.<br />MADE WITH PURPOSE.
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-2 font-inter font-medium text-sm uppercase transition-colors"
              style={{ color: '#0047FF', letterSpacing: '2px' }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 font-inter font-medium text-sm uppercase tracking-widest"
              style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ────────────────────────────────── */}
      <section
        className="w-full py-16 md:py-24"
        style={{ backgroundColor: '#0047FF' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-start">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/logo.png"
              alt="TABD Logo"
              width={160}
              height={160}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          <div>
            <p className="label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              About the Project
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: '#FFFFFF',
                lineHeight: 0.93,
                marginBottom: 16,
              }}
            >
              1 IN 10 PEOPLE IN EBONYI STATE LIVE WITH A DISABILITY.
            </h2>
            <p
              className="font-inter mb-8"
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 600 }}
            >
              In the farming and trading communities of Ikwo LGA, barriers to
              inclusion are concrete. TABD layers practical vocational training onto
              existing local infrastructure — no new centres, no heavy tech — to help
              30 women, youth, and children with disabilities become economically active.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 font-inter font-medium text-sm uppercase tracking-widest transition-colors"
              style={{ backgroundColor: '#FFA300', color: '#0A0A0A', letterSpacing: '2px' }}
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES STRIP ──────────────────────────── */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="label mb-6" style={{ color: '#FFA300' }}>Shop by Category</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ border: '1px solid #0A0A0A' }}>
            {[
              { label: 'Soap Making', href: '/shop?category=soap', accent: '#0047FF' },
              { label: 'Crocheting', href: '/shop?category=crochet', accent: '#FFA300' },
              { label: 'Bead Making', href: '/shop?category=beads', accent: '#0047FF' },
              { label: 'Millinery', href: '/shop?category=millinery', accent: '#FFA300' },
            ].map((cat, i) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex flex-col gap-3 p-8 transition-colors group"
                style={{
                  borderRight: i < 3 ? '1px solid #0A0A0A' : 'none',
                }}
              >
                <span
                  style={{
                    width: 32, height: 4,
                    backgroundColor: cat.accent,
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: 28,
                    textTransform: 'uppercase',
                    color: '#0A0A0A',
                    lineHeight: 0.95,
                  }}
                >
                  {cat.label}
                </span>
                <span
                  className="label group-hover:text-blue-700 transition-colors"
                  style={{ color: '#0A0A0A', fontSize: 11, letterSpacing: '2px' }}
                >
                  Shop →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
