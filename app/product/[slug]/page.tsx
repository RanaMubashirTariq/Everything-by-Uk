'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, Heart, Minus, Plus, Shield, Truck, RotateCcw, Star } from 'lucide-react';
import { getProduct, getRelatedProducts, formatPrice, products } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { ProductCard } from '@/components/product-card';
import { Reveal } from '@/components/reveal';

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params
  const product = getProduct(slug);

  if (!product) notFound();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const related = getRelatedProducts(slug, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <main className="site-shell">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <ChevronRight size={14} />
        <Link href="/shop">Shop</Link>
        <ChevronRight size={14} />
        <Link href={`/shop?category=${product.category}`}>{product.category}</Link>
        <ChevronRight size={14} />
        <span>{product.name}</span>
      </div>

      <section className="product-detail">
        <div className="product-gallery">
          <div className="gallery-main">
            <img src={product.images[selectedImage]} alt={product.name} />
            {product.badge && <span className="product-tag">{product.badge}</span>}
          </div>
          {product.images.length > 1 && (
            <div className="gallery-thumbs">
              {product.images.map((image, i) => (
                <button
                  key={i}
                  className={selectedImage === i ? 'active' : ''}
                  onClick={() => setSelectedImage(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={image} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-detail-info">
          <p className="section-kicker">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="product-rating-detail">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span>{product.rating} · {product.reviews} reviews</span>
          </div>

          <div className="product-price-detail">
            <strong>{formatPrice(product.price)}</strong>
            {product.originalPrice && (
              <>
                <s>{formatPrice(product.originalPrice)}</s>
                <span className="discount-badge">Save {discount}%</span>
              </>
            )}
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-details-list">
            <h3>Details</h3>
            <ul>
              {product.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
                <Plus size={16} />
              </button>
            </div>
            <button className="gold-button" onClick={() => addToCart(product, quantity)}>
              Add to bag <ArrowRight size={16} />
            </button>
            <button className="heart-button-large" aria-label="Save to wishlist">
              <Heart size={20} />
            </button>
          </div>

          <div className="product-assurance">
            <div><Truck size={18} /><span>Free delivery</span></div>
            <div><RotateCcw size={18} /><span>7-day returns</span></div>
            <div><Shield size={18} /><span>Secure checkout</span></div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related-section">
          <Reveal>
            <p className="section-kicker">You may also like</p>
            <h2>Complete the <em>edit.</em></h2>
          </Reveal>
          <div className="product-grid">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 80} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
