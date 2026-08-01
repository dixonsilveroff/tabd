import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import { IMPACT_STATS } from '@/data/team';
import ProductCard from '@/components/ProductCard';
import DocPhotoOnly from '@/components/DocPhotoOnly';


export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="w-full min-h-[90vh] flex flex-col justify-end transition-colors duration-200"
        style={{ backgroundColor: 'var(--bg-hero)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 w-full">
          {/* Eyebrow */}
          <p
            className="label mb-6"
            style={{ color: 'var(--yellow)' }}
          >
            YLDP 2026 · Ikwo LGA, Ebonyi State
          </p>

          {/* Headline */}
          <h1
            className="mb-6"
            style={{ fontSize: 'clamp(56px, 10vw, 100px)', maxWidth: 900, color: 'var(--text-hero)' }}
          >
            ABILITIES<br />
            BEYOND<br />
            DISABILITIES
          </h1>

          {/* Sub-text */}
          <p
            className="font-inter mb-10 max-w-xl"
            style={{ color: 'var(--text-hero-muted)', fontSize: 18 }}
          >
            A marketplace for handcrafted goods made by persons with disabilities
            in Ikwo LGA — soaps, crochet, beads, and millinery, each piece
            carrying a story of skill and resilience.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 px-8 py-4 font-inter font-medium text-sm uppercase tracking-widest transition-all duration-200 hover:bg-[var(--yellow)] hover:text-black hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--blue)',
                color: 'var(--white)',
                letterSpacing: '2px',
              }}
            >
              Shop Now
              <ArrowRight size={16} className="transition-transform duration-250 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 font-inter font-medium text-sm uppercase tracking-widest transition-all duration-200 hover:bg-[var(--text-hero)] hover:text-[var(--bg-hero)] hover:border-[var(--text-hero)] hover:scale-[1.02]"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-hero)',
                border: '1px solid var(--border-hero-subtle)',
                letterSpacing: '2px',
              }}
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS (Uses gap trick for clean mobile-first borders) ── */}
      <section
        className="w-full"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#0A0A0A] border-b border-[#0A0A0A]">
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="py-8 px-6 flex flex-col gap-1 bg-[#FFA300] hover:brightness-95 transition-all duration-200"
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
        className="w-full py-16 md:py-20 transition-colors duration-200"
        style={{ backgroundColor: 'var(--bg-mission)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p
            className="label mb-4"
            style={{ color: 'var(--blue)' }}
          >
            Our Mission
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--text-mission)',
              lineHeight: 0.95,
              maxWidth: 800,
            }}
          >
            EQUIPPING PERSONS WITH DISABILITIES TO GENERATE INCOME THROUGH CRAFT AND DIGITAL COMMERCE.
          </h2>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ───────────────────────────── */}
      <section className="w-full py-16 md:py-24 transition-colors duration-200" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-10 border-b pb-6" style={{ borderColor: 'var(--border-main)' }}>
            <div>
              <p className="label mb-2" style={{ color: 'var(--yellow)' }}>Featured Products</p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  color: 'var(--text-main)',
                  lineHeight: 0.93,
                }}
              >
                MADE BY HAND.<br />MADE WITH PURPOSE.
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-2 font-inter font-medium text-sm uppercase transition-all duration-200 hover:text-[var(--yellow)] hover:translate-x-1"
              style={{ color: 'var(--blue)', letterSpacing: '2px' }}
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
              className="inline-flex items-center gap-2 px-8 py-4 font-inter font-medium text-sm uppercase tracking-widest transition-all duration-200 hover:bg-[var(--blue)] hover:text-white"
              style={{ backgroundColor: 'var(--border-main)', color: 'var(--bg-main)' }}
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP (Stays consistent brand Blue/White) ── */}
      <section
        className="w-full py-16 md:py-24"
        style={{ backgroundColor: '#0047FF' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-start">
          {/* Photo Documentation Placeholder */}
          <div className="shrink-0 w-full md:w-80">
            <DocPhotoOnly
              imageUrl="/gallery/initiative.jpg"
              alt="Empowering Artisans in Ikwo LGA"
              aspectRatio="square"
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
              className="inline-flex items-center gap-2 px-8 py-4 font-inter font-medium text-sm uppercase tracking-widest transition-all duration-200 hover:bg-black hover:text-white hover:scale-[1.02]"
              style={{ backgroundColor: '#FFA300', color: '#0A0A0A', letterSpacing: '2px' }}
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES STRIP (Uses gap trick for clean mobile-first borders) ── */}
      <section className="w-full py-16 md:py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-main)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="label mb-6" style={{ color: 'var(--yellow)' }}>Shop by Category</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[var(--border-main)] border border-[var(--border-main)]">
            {[
              { label: 'Soap Making', href: '/shop?category=soap', accent: 'var(--blue)' },
              { label: 'Crocheting', href: '/shop?category=crochet', accent: 'var(--yellow)' },
              { label: 'Bead Making', href: '/shop?category=beads', accent: 'var(--blue)' },
              { label: 'Millinery', href: '/shop?category=millinery', accent: 'var(--yellow)' },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex flex-col gap-3 p-8 bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)] transition-colors duration-250 group"
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
                    lineHeight: 0.95,
                  }}
                  className="text-[var(--text-main)]"
                >
                  {cat.label}
                </span>
                <span
                  className="label group-hover:text-[var(--blue)] group-hover:translate-x-1.5 transition-all duration-200 w-fit"
                  style={{ fontSize: 11, letterSpacing: '2px' }}
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
