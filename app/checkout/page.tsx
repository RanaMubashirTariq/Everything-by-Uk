'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Lock, CreditCard } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/products';

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'success'>('info');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', postalCode: '',
  });

  const deliveryFee = subtotal > 0 ? 250 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <main className="site-shell">
        <section className="checkout-success">
          <div className="success-icon">
            <Check size={48} />
          </div>
          <h1>Order confirmed</h1>
          <p>Thank you, {form.name || 'friend'}. We have received your order and will send a confirmation to {form.email || 'your email'} shortly.</p>
          <Link href="/shop" className="gold-button">
            Continue shopping <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="site-shell">
        <section className="checkout-empty">
          <h1>Your bag is empty</h1>
          <p>Add something beautiful before checking out.</p>
          <Link href="/shop" className="gold-button">
            Browse the collection <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="site-shell">
      <section className="checkout-page">
        <div className="checkout-main">
          <h1>Checkout</h1>
          <div className="checkout-steps">
            <span className="active">1. Information</span>
            <span>2. Payment</span>
            <span>3. Confirm</span>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Contact details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" required value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+92 3XX XXXXXXX" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            </div>

            <h2>Delivery address</h2>
            <div className="form-group">
              <label htmlFor="address">Street address</label>
              <input id="address" type="text" required value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="House number, street, area" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input id="city" type="text" required value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Lahore" />
              </div>
              <div className="form-group">
                <label htmlFor="postalCode">Postal code (optional)</label>
                <input id="postalCode" type="text" value={form.postalCode}
                  onChange={(e) => setForm({ ...form, postalCode: e.target.value })} placeholder="54000" />
              </div>
            </div>

            <h2>Payment method</h2>
            <div className="payment-options">
              <label className="payment-option selected">
                <input type="radio" name="payment" defaultChecked />
                <div>
                  <strong>Cash on delivery</strong>
                  <span>Pay when your order arrives</span>
                </div>
              </label>
              <label className="payment-option disabled">
                <input type="radio" name="payment" disabled />
                <div>
                  <strong>Credit / debit card <span className="soon">Coming soon</span></strong>
                  <span>Secure card payment</span>
                </div>
                <Lock size={18} />
              </label>
            </div>

            <button type="submit" className="gold-button full">
              Place order <ArrowRight size={16} />
            </button>
          </form>
        </div>

        <aside className="checkout-summary">
          <h2>Order summary</h2>
          <div className="summary-items">
            {items.map((item) => (
              <div className="summary-item" key={item.product.slug}>
                <div className="summary-thumb">
                  <img src={item.product.image} alt={item.product.name} />
                  <span className="summary-qty">{item.quantity}</span>
                </div>
                <div className="summary-info">
                  <h3>{item.product.name}</h3>
                  <span>{item.product.category}</span>
                </div>
                <strong>{formatPrice(item.product.price * item.quantity)}</strong>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="summary-line"><span>Delivery</span><span>{deliveryFee > 0 ? formatPrice(deliveryFee) : 'Free'}</span></div>
            <div className="summary-line total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
          </div>
          <div className="summary-assurance">
            <CreditCard size={16} /> <span>Secure checkout · Your data is protected</span>
          </div>
        </aside>
      </section>
    </main>
  );
}
