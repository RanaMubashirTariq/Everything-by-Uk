'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Star, Quote, Truck, Shield, RotateCcw } from 'lucide-react';
import { categories, products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Reveal } from '@/components/reveal';

const featuredProducts = products.filter((p) => p.badge).slice(0, 8);

const testimonials = [
  { quote: 'The quality is exceptional. I have ordered three times now and every piece feels considered.', author: 'Hamza K.', location: 'Lahore' },
  { quote: 'Beautiful packaging, fast delivery, and products that genuinely feel premium. My go-to store.', author: 'Ayesha M.', location: 'Karachi' },
  { quote: 'I bought the gift box for my brother and he loved it. The attention to detail is unreal.', author: 'Bilal R.', location: 'Islamabad' },
];

const values = [
  { icon: Truck, title: 'Free delivery', desc: 'On all orders across Pakistan' },
  { icon: Shield, title: 'Secure checkout', desc: 'Your data is always protected' },
  { icon: RotateCcw, title: 'Easy returns', desc: '7-day no-questions-asked returns' },
];

export default function Home() {
  return (
    <main className="site-shell">
      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={14} /> Curated for the way you live</p>
          <h1>More than things.<br /><em>Everything.</em></h1>
          <p className="hero-description">A considered collection of beautiful, useful things for every chapter of your day — from the scent you wear to the objects you live with.</p>
          <div className="hero-cta">
            <Link className="gold-button" href="/shop">Explore the collection <ArrowRight size={16} /></Link>
            <Link className="ghost-button" href="/about">Our story</Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-card hero-card-main">
            <img src="https://images.pexels.com/photos/36339051/pexels-photo-36339051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Black perfume bottle in warm light" />
            <div className="hero-card-label"><span>01 / 04</span><strong>Signature objects</strong></div>
          </div>
          <div className="hero-card hero-card-small small-left">
            <img src="https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Accessories on black" />
          </div>
          <div className="hero-card hero-card-small small-right">
            <img src="https://images.pexels.com/photos/14656279/pexels-photo-14656279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Golden serum bottle" />
          </div>
          <span className="hero-stamp">EST.<br /><b>2024</b></span>
        </div>
        <div className="scroll-cue"><span>Scroll to discover</span><i /></div>
      </section>

      {/* Value strip */}
      <section className="value-strip">
        {values.map((value, i) => (
          <Reveal key={value.title} className="value-item" delay={i * 100}>
            <value.icon size={22} />
            <div><strong>{value.title}</strong><span>{value.desc}</span></div>
          </Reveal>
        ))}
      </section>

      {/* Categories */}
      <section className="categories-section" id="categories">
        <div className="section-heading">
          <Reveal>
            <p className="section-kicker">Shop by category</p>
            <h2>Six worlds, <em>one standard.</em></h2>
          </Reveal>
          <Reveal delay={200}>
            <Link href="/shop" className="text-link">View all products <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
        <div className="category-grid">
          {categories.map((category, i) => (
            <Reveal key={category.slug} className="category-card" delay={i * 80}>
              <Link href={`/shop?category=${category.name}`}>
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-overlay">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-cta">Explore <ArrowRight size={15} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="featured-section" id="featured">
        <div className="section-heading">
          <Reveal>
            <p className="section-kicker">The current collection</p>
            <h2>Quietly, the <em>favourites.</em></h2>
          </Reveal>
          <Reveal delay={200}>
            <Link href="/shop" className="text-link">View all products <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
        <div className="product-grid">
          {featuredProducts.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* Editorial story */}
      <section className="story-section" id="story">
        <Reveal className="story-image">
          <img src="https://images.pexels.com/photos/7697958/pexels-photo-7697958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Editorial fashion portrait" />
          <span>Objects with a point of view.</span>
        </Reveal>
        <Reveal className="story-copy" delay={150}>
          <p className="section-kicker">The house note</p>
          <h2>We believe the best things are <em>felt.</em></h2>
          <p>Everything Store is a living edit of considered pieces. We look for the details that make an ordinary moment feel a little more like yours, then bring them together in one calm, beautiful place. No noise, no trends — just things that last and matter.</p>
          <Link href="/about" className="text-link">Read our story <ArrowRight size={16} /></Link>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <Reveal className="testimonials-heading">
          <p className="section-kicker">From the house</p>
          <h2>What our customers <em>say.</em></h2>
        </Reveal>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} className="testimonial-card" delay={i * 120}>
              <Quote size={28} />
              <p>{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.location}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <Reveal className="newsletter-copy">
          <p className="section-kicker">A little something extra</p>
          <h2>Stay in the <em>know.</em></h2>
        </Reveal>
        <Reveal className="newsletter-form" delay={150}>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Your email address</label>
            <div className="email-row">
              <input id="email" type="email" placeholder="you@example.com" required />
              <button aria-label="Subscribe"><ArrowRight size={19} /></button>
            </div>
            <p>New arrivals, considered edits and 10% off your first order.</p>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
