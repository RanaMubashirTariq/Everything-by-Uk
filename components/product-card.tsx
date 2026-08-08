'use client';

import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { Reveal } from './reveal';

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const { addToCart } = useCart();

  return (
    <Reveal className="product-card" delay={delay}>
      <div className="product-image">
        <Link href={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        {product.badge && <span className="product-tag">{product.badge}</span>}
        <button className="heart-button" aria-label={`Save ${product.name}`}>
          <Heart size={18} />
        </button>
      </div>
      <div className="product-info">
        <div>
          <p>{product.category}</p>
          <Link href={`/product/${product.slug}`}>
            <h3>{product.name}</h3>
          </Link>
          <div className="product-rating">
            {'★'.repeat(Math.round(product.rating))}
            <span>{product.rating} ({product.reviews})</span>
          </div>
        </div>
        <div className="product-price">
          <strong>{formatPrice(product.price)}</strong>
          {product.originalPrice && <s>{formatPrice(product.originalPrice)}</s>}
        </div>
      </div>
      <button className="add-button" onClick={() => addToCart(product)}>
        Add to bag <ArrowRight size={15} />
      </button>
    </Reveal>
  );
}
