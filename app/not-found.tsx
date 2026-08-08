import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="site-shell">
      <section className="not-found">
        <span className="section-kicker">404</span>
        <h1>Page not <em>found.</em></h1>
        <p>The page you are looking for may have moved or no longer exists.</p>
        <Link href="/" className="gold-button">
          Back to home <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
