'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/lib/cart';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCartStore();

  const itemCount = totalItems();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-navbar)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
      className="shadow-md transition-colors duration-200"
    >
      {/* Main bar */}
      <div className="flex items-center justify-between px-6" style={{ height: 64 }}>
        {/* Left: Logo + wordmark */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-85 hover:scale-[1.02] transition-all duration-200">
          <Image
            src="/logo.png"
            alt="TABD"
            width={48}
            height={48}
            style={{ borderRadius: 0 }}
          />
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 20,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
            className="text-[var(--text-navbar)] transition-colors duration-200"
          >
            TABD MARKET
          </span>
        </Link>

        {/* Right: desktop nav + cart */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  textDecoration: 'none',
                }}
                className="text-[var(--text-navbar)] hover:text-[var(--blue)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher */}
          <div className="hover:scale-115 hover:bg-[var(--bg-subtle)] transition-all duration-200 flex items-center justify-center w-10 h-10 border border-transparent hover:border-[var(--border-subtle)]">
            <ThemeToggle />
          </div>

          {/* Cart icon + badge */}
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex items-center justify-center hover:scale-115 transition-transform duration-200"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          >
            <ShoppingBag size={24} style={{ color: 'var(--text-navbar)' }} className="transition-colors duration-200" />
            {itemCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -6,
                  right: -8,
                  backgroundColor: 'var(--blue)',
                  color: 'var(--white)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  borderRadius: 0,
                  minWidth: 20,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 4px',
                }}
              >
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center hover:scale-110 transition-transform duration-150"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} style={{ color: 'var(--text-navbar)' }} className="transition-colors duration-200" />
            ) : (
              <Menu size={24} style={{ color: 'var(--text-navbar)' }} className="transition-colors duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        style={{
          backgroundColor: 'var(--bg-navbar)',
          overflow: 'hidden',
          maxHeight: mobileOpen ? 200 : 0,
          transition: 'max-height 0.3s ease',
        }}
        className="md:hidden"
      >
        <nav className="flex flex-col px-6 pb-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                textDecoration: 'none',
              }}
              className="text-[var(--text-navbar)] hover:text-[var(--blue)] hover:translate-x-1.5 transition-all duration-200 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
