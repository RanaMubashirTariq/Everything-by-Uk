'use client';

import Link from 'next/link';
import { ArrowRight, Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/products';

export function CartDrawer() {
  const {
    items, isCartOpen, closeCart, updateQuantity, removeFromCart,
    subtotal, totalItems,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="overlay cart-overlay" onClick={closeCart}>
      <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div>
            <p className="section-kicker">Your collection</p>
            <h2>Shopping bag <span>({totalItems})</span></h2>
          </div>
          <button className="close-button" onClick={closeCart} aria-label="Close shopping bag">
            <X size={22} />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.product.slug}>
                  <Link href={`/product/${item.product.slug}`} onClick={closeCart} className="cart-thumb">
                    <img src={item.product.image} alt={item.product.name} />
                  </Link>
                  <div className="cart-item-info">
                    <p>{item.product.category}</p>
                    <Link href={`/product/${item.product.slug}`} onClick={closeCart}>
                      <h3>{item.product.name}</h3>
                    </Link>
                    <strong>{formatPrice(item.product.price)}</strong>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQuantity(item.product.slug, item.quantity - 1)} aria-label="Decrease quantity">
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.slug, item.quantity + 1)} aria-label="Increase quantity">
                      <Plus size={14} />
                    </button>
                    <button className="cart-remove" onClick={() => removeFromCart(item.product.slug)} aria-label="Remove item">
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p className="cart-note">Delivery and taxes calculated at checkout.</p>
              <Link href="/checkout" className="gold-button full" onClick={closeCart}>
                Proceed to checkout <ArrowRight size={16} />
              </Link>
              <button className="text-link center" onClick={closeCart}>
                Continue shopping
              </button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <ShoppingBag size={32} />
            <p>Your bag is waiting.</p>
            <span>Add something beautiful to begin.</span>
            <button className="text-link" onClick={closeCart}>
              Continue shopping <ArrowRight size={16} />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
