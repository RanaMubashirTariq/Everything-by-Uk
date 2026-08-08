'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/images/file_00000000243881fa90b440014b23afc5.png" alt="Everything Store" />
          <p>Curated for the way<br />you live.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Explore</span>
            <Link href="/shop">All products</Link>
            <Link href="/shop?category=Fashion">Fashion</Link>
            <Link href="/shop?category=Beauty">Beauty</Link>
            <Link href="/shop?category=Home">Home</Link>
          </div>
          <div>
            <span>Help</span>
            <Link href="/contact">Contact us</Link>
            <Link href="/contact">Delivery & returns</Link>
            <Link href="/contact">FAQs</Link>
            <Link href="/about">Our story</Link>
          </div>
          <div>
            <span>Follow</span>
            <Link href="/contact">Instagram</Link>
            <Link href="/contact">TikTok</Link>
            <Link href="/contact">WhatsApp</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Everything Store by UK</span>
        <span>Made for Pakistan</span>
      </div>
    </footer>
  );
}
