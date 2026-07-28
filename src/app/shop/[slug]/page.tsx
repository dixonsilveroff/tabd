import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { getProductBySlug, generateProductStaticParams, PRODUCTS } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return generateProductStaticParams();
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} — TABD Market`,
    description: product.description.slice(0, 155),
  };
}

export default async function ProductPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const categoryLabel: Record<string, string> = {
    soap: 'Soap Making',
    crochet: 'Crocheting',
    beads: 'Bead Making',
    millinery: 'Millinery',
  };

  // Build WhatsApp inquiry message
  const whatsappMessage = encodeURIComponent(
    `Hi ${product.sellerName}, I found your product "${product.name}" on the TABD Market and I'm interested in purchasing it. Could you please provide more details?`
  );
  const whatsappUrl = `https://wa.me/${product.sellerWhatsApp}?text=${whatsappMessage}`;

  // Related products (same category, excluding current)
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <>
      {/* ── Breadcrumb ─────────────────────────────────── */}
      <div
        className="w-full py-4 transition-colors duration-200"
        style={{ backgroundColor: 'var(--bg-hero)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-3">
          <Link
            href="/shop"
            className="flex items-center gap-2 font-inter text-sm transition-opacity hover:opacity-70"
            style={{ color: 'var(--text-muted)', fontSize: 12, letterSpacing: '1px' }}
          >
            <ArrowLeft size={12} /> Back to Shop
          </Link>
          <span style={{ color: 'var(--text-muted)', opacity: 0.5 }}>/</span>
          <span className="label" style={{ color: 'var(--yellow)', fontSize: 11 }}>
            {categoryLabel[product.category]}
          </span>
        </div>
      </div>

      {/* ── Product Detail ──────────────────────────────── */}
      <section className="w-full py-12 md:py-16 transition-colors duration-200" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

            {/* Image */}
            <div>
              <div
                className="relative w-full shadow-md"
                style={{ aspectRatio: '1 / 1', backgroundColor: 'var(--bg-subtle)' }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {/* Category overlay tag */}
                <div
                  className="absolute top-0 left-0 px-4 py-2"
                  style={{ backgroundColor: 'var(--yellow)' }}
                >
                  <span className="label" style={{ fontSize: 11, color: 'var(--black)' }}>
                    {categoryLabel[product.category]}
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              {/* Stock status */}
              <div className="mb-4 flex items-center gap-2">
                <div
                  style={{
                    width: 8, height: 8,
                    backgroundColor: product.inStock ? '#00C853' : '#F44336',
                  }}
                />
                <span
                  className="label"
                  style={{ fontSize: 11, color: product.inStock ? '#00C853' : '#F44336' }}
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Name */}
              <h1
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  color: 'var(--text-main)',
                  lineHeight: 0.92,
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                {product.name}
              </h1>

              {/* Price */}
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 40,
                  color: 'var(--blue)',
                  marginBottom: 20,
                }}
              >
                ₦{product.price.toLocaleString('en-NG')}
              </p>

              {/* Description */}
              <p
                className="font-inter mb-8"
                style={{ color: 'var(--text-main)', fontSize: 16, lineHeight: 1.6, opacity: 0.8 }}
              >
                {product.description}
              </p>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--border-main)', marginBottom: 24 }} />

              {/* Seller card */}
              <div
                className="p-6 mb-8 transition-colors duration-200"
                style={{ backgroundColor: 'var(--border-main)' }}
              >
                <p className="label mb-3" style={{ color: 'var(--yellow)', fontSize: 11 }}>
                  The Artisan
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: 'var(--bg-main)',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  {product.sellerName}
                </p>
                <p
                  className="font-inter"
                  style={{ color: 'var(--text-hero-muted)', fontSize: 14, lineHeight: 1.6 }}
                >
                  {product.sellerStory}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <AddToCartButton product={product} />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 font-inter font-medium uppercase transition-colors hover:bg-[var(--border-main)] hover:text-[var(--bg-main)]"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--text-main)',
                    border: '1px solid var(--border-main)',
                    letterSpacing: '2px',
                    fontSize: 13,
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={16} />
                  Contact Seller on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ──────────────────────────── */}
      {related.length > 0 && (
        <section className="w-full py-16 transition-colors duration-200" style={{ backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="label mb-3" style={{ color: 'var(--yellow)' }}>
              More from this category
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 40,
                color: 'var(--text-main)',
                lineHeight: 0.93,
                marginBottom: 32,
              }}
            >
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <div
                  key={p.id}
                  className="shadow-sm bg-[var(--bg-card)] transition-colors duration-200"
                  style={{ border: '1px solid var(--border-main)' }}
                >
                  <Link href={`/shop/${p.slug}`} className="block p-6" style={{ textDecoration: 'none' }}>
                    <span className="label" style={{ fontSize: 11, color: 'var(--yellow)' }}>
                      {categoryLabel[p.category]}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: 22,
                        color: 'var(--text-main)',
                        textTransform: 'uppercase',
                        marginTop: 8,
                        marginBottom: 6,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p className="font-inter" style={{ color: 'var(--blue)', fontWeight: 900, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20 }}>
                      ₦{p.price.toLocaleString('en-NG')}
                    </p>
                    <p className="font-inter mt-2" style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                      By {p.sellerName}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
