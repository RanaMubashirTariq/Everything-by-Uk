'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Check } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const contactInfo = [
  { icon: Phone, label: 'Call us', value: '+92 325 4444800' },
  { icon: Mail, label: 'Email us', value: 'hello@everythingstore.pk' },
  { icon: MapPin, label: 'Visit us', value: 'Lahore, Pakistan' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 325 4444800' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="site-shell">
      <section className="page-hero">
        <Reveal>
          <p className="section-kicker">We are here to help</p>
          <h1>Get in <em>touch.</em></h1>
          <p className="page-hero-desc">Questions about an order, a product, or just want to say hello? We would love to hear from you.</p>
        </Reveal>
      </section>

      <section className="contact-section">
        <Reveal className="contact-info">
          <h2>Contact details</h2>
          <div className="contact-list">
            {contactInfo.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-icon">
                  <item.icon size={20} />
                </div>
                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-hours">
            <h3>Opening hours</h3>
            <p>Monday — Saturday<br />10:00 AM — 8:00 PM PKT</p>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={150}>
          {submitted ? (
            <div className="contact-success">
              <div className="success-icon"><Check size={40} /></div>
              <h2>Message sent</h2>
              <p>Thank you, {form.name || 'friend'}. We will get back to you within 24 hours.</p>
              <button className="text-link" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send a message</h2>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" required value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} required value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us more..." />
              </div>
              <button type="submit" className="gold-button full">
                Send message <ArrowRight size={16} />
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </main>
  );
}
