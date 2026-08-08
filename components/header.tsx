'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { totalItems, openCart, openMenu, isMenuOpen, closeMenu } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <>
      <div className="announcement">
        <span>Complimentary delivery across Pakistan</span>
        <span className="announcement-dot" />
        <span>Cash on delivery available</span>
        <span className="announcement-dot" />
        <span>10% off your first order</span>
      </div>

      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <button className="icon-button mobile-menu-button" aria-label="Open menu" onClick={openMenu}>
          <Menu size={20} />
        </button>

        <Link href="/" className="wordmark" aria-label="Everything Store home">
          <img src="/images/file_00000000243881fa90b440014b23afc5.png" alt="Everything Store by UK" />
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/shop" className="icon-button" aria-label="Search">
            <Search size={19} />
          </Link>
          <button className="bag-button" aria-label={`Shopping bag, ${totalItems} items`} onClick={openCart}>
            <ShoppingBag size={19} />
            <span>Bag</span>
            <b>{totalItems.toString().padStart(2, '0')}</b>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="overlay mobile-nav-overlay" onClick={closeMenu}>
          <aside className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeMenu} aria-label="Close menu">
              <X size={22} />
            </button>
            <img src="/images/file_00000000243881fa90b440014b23afc5.png" alt="Everything Store" />
            <nav>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
