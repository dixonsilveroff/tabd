'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useCartStore, formatNaira } from '@/lib/cart';

type FormData = {
  name: string;
  phone: string;
  address: string;
  note: string;
};

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCartStore();
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    const orderLines = items
      .map((i) => `• ${i.product.name} x${i.quantity} — ₦${(i.product.price * i.quantity).toLocaleString('en-NG')}`)
      .join('\n');

    return encodeURIComponent(
      `Hello! I'd like to place an order from TABD Market.\n\n` +
      `*Buyer Details:*\nName: ${form.name}\nPhone: ${form.phone}\nDelivery Address: ${form.address}\n\n` +
      `*Order Summary:*\n${orderLines}\n\n` +
      `*Total: ₦${totalPrice().toLocaleString('en-NG')}*` +
      (form.note ? `\n\n*Note:* ${form.note}` : '')
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    // Use the first seller's WhatsApp for multi-seller orders
    // (In a real app, you'd split by seller)
    const seller = items[0].product.sellerWhatsApp;
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${seller}?text=${message}`;

    setSubmitted(true);
    clearCart();

    setTimeout(() => {
      window.open(url, '_blank');
    }, 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <CheckCircle2 size={48} color="#0047FF" />
        <h1
          className="mt-6 mb-4 text-center"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 52,
            textTransform: 'uppercase',
            color: '#0A0A0A',
            lineHeight: 0.93,
          }}
        >
          ORDER SENT!
        </h1>
        <p className="font-inter text-center mb-8" style={{ color: 'rgba(10,10,10,0.65)', fontSize: 16, maxWidth: 400 }}>
          Your order has been forwarded to the seller via WhatsApp. They will contact you shortly to confirm.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 font-inter font-medium uppercase"
          style={{ backgroundColor: '#0047FF', color: '#FFFFFF', letterSpacing: '2px', fontSize: 13 }}
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ── Header ─────────────────────────────────── */}
      <section className="w-full py-14" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            href="/shop"
            className="flex items-center gap-2 font-inter text-sm mb-6 transition-opacity hover:opacity-70"
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, letterSpacing: '1px' }}
          >
            <ArrowLeft size={12} /> Continue Shopping
          </Link>
          <p className="label mb-3" style={{ color: '#FFA300' }}>Checkout</p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(48px, 7vw, 72px)',
              color: '#FFFFFF',
              lineHeight: 0.92,
            }}
          >
            YOUR ORDER
          </h1>
        </div>
      </section>

      <section className="w-full py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {items.length === 0 ? (
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
                Your Cart is Empty
              </h2>
              <p className="font-inter mb-8" style={{ color: 'rgba(10,10,10,0.5)' }}>
                Add products from the shop before checking out.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 font-inter font-medium uppercase"
                style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', letterSpacing: '2px', fontSize: 13 }}
              >
                Go to Shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

              {/* ── Cart Summary ─────────────────────── */}
              <div>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    color: '#0A0A0A',
                    textTransform: 'uppercase',
                    marginBottom: 24,
                  }}
                >
                  Order Summary ({totalItems()} {totalItems() === 1 ? 'item' : 'items'})
                </h2>

                <div className="flex flex-col gap-0" style={{ border: '1px solid #0A0A0A' }}>
                  {items.map((item, i) => (
                    <div
                      key={item.product.id}
                      className="p-5 flex items-start gap-4"
                      style={{ borderBottom: i < items.length - 1 ? '1px solid #0A0A0A' : 'none' }}
                    >
                      {/* Product info */}
                      <div className="flex-1">
                        <p
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                            fontSize: 18,
                            textTransform: 'uppercase',
                            color: '#0A0A0A',
                          }}
                        >
                          {item.product.name}
                        </p>
                        <p className="font-inter" style={{ color: 'rgba(10,10,10,0.5)', fontSize: 13 }}>
                          By {item.product.sellerName}
                        </p>
                        <p
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 900,
                            fontSize: 18,
                            color: '#0047FF',
                            marginTop: 4,
                          }}
                        >
                          ₦{(item.product.price * item.quantity).toLocaleString('en-NG')}
                        </p>
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center gap-0" style={{ border: '1px solid #0A0A0A' }}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center transition-colors"
                          style={{ borderRight: '1px solid #0A0A0A', backgroundColor: 'transparent', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          className="w-8 h-8 flex items-center justify-center font-inter"
                          style={{ fontSize: 14 }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center transition-colors"
                          style={{ borderLeft: '1px solid #0A0A0A', backgroundColor: 'transparent', cursor: 'pointer' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="transition-opacity hover:opacity-50 mt-1"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} color="#0A0A0A" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div
                  className="p-5 flex items-center justify-between mt-0"
                  style={{ border: '1px solid #0A0A0A', borderTop: 'none', backgroundColor: '#0A0A0A' }}
                >
                  <span
                    className="label"
                    style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: 28,
                      color: '#FFA300',
                    }}
                  >
                    ₦{totalPrice().toLocaleString('en-NG')}
                  </span>
                </div>

                {/* WhatsApp note */}
                <p
                  className="font-inter mt-4"
                  style={{ color: 'rgba(10,10,10,0.45)', fontSize: 13, lineHeight: 1.6 }}
                >
                  Orders are fulfilled via WhatsApp. After submitting your details, you will be redirected to WhatsApp with your order pre-filled to send directly to the seller.
                </p>
              </div>

              {/* ── Buyer Form ──────────────────────── */}
              <div>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    color: '#0A0A0A',
                    textTransform: 'uppercase',
                    marginBottom: 24,
                  }}
                >
                  Your Details
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. Amaka Okafor', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'e.g. 08012345678', required: true },
                    { name: 'address', label: 'Delivery Address', type: 'text', placeholder: 'Street, Area, LGA, State', required: true },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col gap-2">
                      <label
                        htmlFor={field.name}
                        className="label"
                        style={{ fontSize: 11, color: '#0A0A0A' }}
                      >
                        {field.label} {field.required && <span style={{ color: '#0047FF' }}>*</span>}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={form[field.name as keyof FormData]}
                        onChange={handleChange}
                        className="font-inter w-full px-4 py-3 outline-none transition-colors"
                        style={{
                          border: '1px solid #0A0A0A',
                          fontSize: 15,
                          backgroundColor: '#FFFFFF',
                          color: '#0A0A0A',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#0047FF')}
                        onBlur={(e) => (e.target.style.borderColor = '#0A0A0A')}
                      />
                    </div>
                  ))}

                  {/* Note */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="note" className="label" style={{ fontSize: 11, color: '#0A0A0A' }}>
                      Order Note (Optional)
                    </label>
                    <textarea
                      id="note"
                      name="note"
                      rows={3}
                      placeholder="Any special instructions for the seller..."
                      value={form.note}
                      onChange={handleChange}
                      className="font-inter w-full px-4 py-3 outline-none transition-colors resize-none"
                      style={{ border: '1px solid #0A0A0A', fontSize: 15, backgroundColor: '#FFFFFF', color: '#0A0A0A' }}
                      onFocus={(e) => (e.target.style.borderColor = '#0047FF')}
                      onBlur={(e) => (e.target.style.borderColor = '#0A0A0A')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-5 font-inter font-medium uppercase transition-colors mt-2"
                    style={{
                      backgroundColor: '#0047FF',
                      color: '#FFFFFF',
                      letterSpacing: '2px',
                      fontSize: 14,
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0A0A0A')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0047FF')}
                  >
                    <MessageCircle size={18} />
                    Place Order via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
