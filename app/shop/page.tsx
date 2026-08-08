'use client';

import { useMemo, useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, Search, X } from 'lucide-react';
import { products, categories } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Reveal } from '@/components/reveal';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All products';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'All products');
  }, [searchParams]);

  const allCategories = ['All products', ...categories.map((c) => c.name)];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All products') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <main className="site-shell">
      <section className="page-hero">
        <Reveal>
          <p className="section-kicker">The collection</p>
          <h1>The <em>Everything</em> Store</h1>
          <p className="page-hero-desc">Every piece in our edit, in one place. Filter by category, search by name, or simply browse.</p>
        </Reveal>
      </section>

      <section className="shop-section">
        <div className="shop-toolbar">
          <div className="shop-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </div>
          <div className="shop-controls">
            <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal size={16} /> Filters
            </button>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={`category-row ${showFilters ? 'open' : ''}`}>
          {allCategories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="shop-results">
          <span>{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={(i % 4) * 80} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={32} />
            <h3>No products found</h3>
            <p>Try adjusting your search or filters.</p>
            <button
              className="text-link"
              onClick={() => { setSearchQuery(''); setActiveCategory('All products'); }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="loading" />}>
      <ShopContent />
    </Suspense>
  );
}
