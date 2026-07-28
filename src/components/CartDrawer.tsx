'use client';

import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore, formatNaira } from '@/lib/cart';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } =
    useCartStore();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeCart}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.55)',
            zIndex: 59,
          }}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: 360,
          zIndex: 60,
          backgroundColor: '#FFFFFF',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isOpen ? '-4px 0 24px rgba(0,0,0,0.18)' : 'none',
        }}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid #E5E5E5' }}
        >
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 28,
              color: '#0A0A0A',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Your Cart
          </span>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
              color: '#0A0A0A',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
              <ShoppingBag size={56} color="#0047FF" />
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 22,
                  color: '#0A0A0A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Your Cart Is Empty
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#0A0A0A',
                  color: '#FFFFFF',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  padding: '12px 28px',
                  borderRadius: 0,
                  textDecoration: 'none',
                }}
                className="shadow-sm hover:bg-[#0047FF] transition-colors duration-200"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            /* Item list */
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-4"
                  style={{ borderBottom: '1px solid #F0F0F0', paddingBottom: 20 }}
                >
                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: 16,
                        color: '#0A0A0A',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.product.name}
                    </p>
                    {item.product.sellerName && (
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 12,
                          color: '#6B6B6B',
                          marginTop: 2,
                        }}
                      >
                        {item.product.sellerName}
                      </p>
                    )}
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: 14,
                        color: '#0047FF',
                        marginTop: 6,
                      }}
                    >
                      {formatNaira(item.product.price * item.quantity)}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-col items-end gap-3">
                    {/* Qty row */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                           updateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                        }
                        aria-label="Decrease quantity"
                        style={{
                          width: 28,
                          height: 28,
                          border: '1.5px solid #0A0A0A',
                          background: '#FFFFFF',
                          borderRadius: 0,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Minus size={14} color="#0A0A0A" />
                      </button>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: 14,
                          color: '#0A0A0A',
                          minWidth: 20,
                          textAlign: 'center',
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        style={{
                          width: 28,
                          height: 28,
                          border: '1.5px solid #0A0A0A',
                          background: '#FFFFFF',
                          borderRadius: 0,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Plus size={14} color="#0A0A0A" />
                      </button>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      aria-label="Remove item"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 2,
                        color: '#B0B0B0',
                      }}
                      className="hover:text-red-600 transition-colors duration-150"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer — only shown when cart has items */}
        {items.length > 0 && (
          <div
            className="px-6 py-5 flex flex-col gap-4"
            style={{ borderTop: '1px solid #E5E5E5' }}
          >
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: '#6B6B6B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Subtotal
              </span>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 22,
                  color: '#0A0A0A',
                }}
              >
                {formatNaira(totalPrice())}
              </span>
            </div>

            {/* Checkout button */}
            <Link
              href="/checkout"
              onClick={closeCart}
              style={{
                display: 'block',
                width: '100%',
                backgroundColor: '#0047FF',
                color: '#FFFFFF',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 18,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textAlign: 'center',
                padding: '14px 0',
                borderRadius: 0,
                textDecoration: 'none',
              }}
              className="shadow-md hover:brightness-110 transition-all duration-200"
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
