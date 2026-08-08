'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Heart, Eye, Hand } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const principles = [
  { icon: Eye, title: 'Considered, not trendy', desc: 'Every product earns its place. We choose for longevity, not for the season.' },
  { icon: Hand, title: 'Made with intention', desc: 'We partner with makers who care about the craft as much as we care about the result.' },
  { icon: Heart, title: 'Built to be lived with', desc: 'Things should wear beautifully, not fall apart. We stand behind every piece we sell.' },
];

export default function AboutPage() {
  return (
    <main className="site-shell">
      <section className="page-hero about-hero">
        <Reveal>
          <p className="section-kicker"><Sparkles size={14} /> Our story</p>
          <h1>We set out to fix a <em>feeling.</em></h1>
          <p className="page-hero-desc">The quiet certainty of being surrounded by good things. Everything Store began with a simple idea: that quality, beauty and care should not be a luxury — they should be the standard.</p>
        </Reveal>
      </section>

      <section className="about-story">
        <Reveal className="about-story-image">
          <img src="https://images.pexels.com/photos/7653849/pexels-photo-7653849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Editorial style" />
        </Reveal>
        <Reveal className="about-story-copy" delay={150}>
          <p className="section-kicker">The beginning</p>
          <h2>From a single <em>idea.</em></h2>
          <p>We did not set out to make a store. We set out to build the kind of place we always wished existed — calm, considered, and full of things that genuinely make life a little better. No noise, no endless scroll, no trends chasing your attention.</p>
          <p>Today, Everything Store is a curated edit across fashion, beauty, home, tech and gifting. Each category is chosen with the same standard: would we want this in our own home? If the answer is no, it does not make the cut.</p>
        </Reveal>
      </section>

      <section className="principles-section">
        <Reveal className="principles-heading">
          <p className="section-kicker">What we stand for</p>
          <h2>Three principles, <em>one standard.</em></h2>
        </Reveal>
        <div className="principles-grid">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} className="principle-card" delay={i * 120}>
              <principle.icon size={28} />
              <h3>{principle.title}</h3>
              <p>{principle.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <Reveal>
          <h2>Explore the <em>collection.</em></h2>
          <p>See what made the cut.</p>
          <Link href="/shop" className="gold-button">
            Browse all products <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
